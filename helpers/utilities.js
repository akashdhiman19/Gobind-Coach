import { DateTime } from "luxon";

const camelCaseToDashed = (string) => {
  const dashedString = string.replace(/\s+/g, "-").toLowerCase();
  return dashedString;
};

const flatDeep = (arr, d = 1) =>
  d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();

const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

const containsObject = (obj, list) => {
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i].slug === obj.slug) {
      return i;
    }
  }

  return -1;
};
const getCategories = (blogs) => {
  let allPosts = blogs.map((item) => item.postdata),
    cats = allPosts.map((item) => item.categories),
    singleCatArray = flatDeep(cats),
    categories = [];

  singleCatArray.forEach((cat) => {
    if (typeof cat !== "string") return; // Skip if not a valid string

    const trimmedCat = cat.trim();
    const obj = {
        title: trimmedCat,
        slug: slugify(trimmedCat),
        count: 1,
      },
      objIndex = containsObject(obj, categories);

    if (objIndex !== -1) {
      const prevCount = categories[objIndex].count;

      categories[objIndex] = {
        title: trimmedCat,
        slug: slugify(trimmedCat),
        count: prevCount + 1,
      };
    } else {
      categories.push(obj);
    }
  });

  return categories;
};

const getTags = (blogs) => {
  let allPosts = blogs.map((item) => item.postdata),
    allTags = allPosts.map((item) => item.tags),
    singleTagArray = flatDeep(allTags),
    tags = [];

  singleTagArray.forEach((tag) => {
    if (typeof tag !== "string") return; // ✅ Prevent undefined.trim()

    const trimmedTag = tag.trim();
    const obj = {
        title: trimmedTag,
        slug: slugify(trimmedTag),
        count: 1,
      },
      objIndex = containsObject(obj, tags);

    if (objIndex !== -1) {
      const prevCount = tags[objIndex].count;

      tags[objIndex] = {
        title: trimmedTag,
        slug: slugify(trimmedTag),
        count: prevCount + 1,
      };
    } else {
      tags.push(obj);
    }
  });

  return tags;
};

const sortingByDate = function (posts) {
  return posts.sort((a, b) => {
    const beforeDate = DateTime.fromFormat(a.postdata.publishedAt, "LLL dd yyyy");
    const afterDate = DateTime.fromFormat(b.postdata.publishedAt, "LLL dd yyyy");
    return afterDate - beforeDate;
  });
};

export {
  camelCaseToDashed,
  flatDeep,
  slugify,
  containsObject,
  getCategories,
  getTags,
  sortingByDate
};

