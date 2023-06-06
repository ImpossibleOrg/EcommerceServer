"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTree = void 0;
const _models_1 = require("../models");
const buildTree = async (categories) => {
    const tree = [];
    for (let i = 0; i < categories.length; i++) {
        const category = categories[i];
        const children = await _models_1.Category.find({
            parentCategory: category._id,
            deletedAt: null,
        });
        const subtree = await (0, exports.buildTree)(children);
        const categoryData = {
            id: category._id,
            name: category.name,
            parentId: category.parentId || null,
            productsCount: 512,
            children: (subtree.length && subtree) || null,
        };
        tree.push(categoryData);
    }
    return tree;
};
exports.buildTree = buildTree;
