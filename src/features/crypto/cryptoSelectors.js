import { createSelector } from '@reduxjs/toolkit';

export const selectAllAssets = (state) => state.crypto.assets;

export const selectAssetById = createSelector(
  [selectAllAssets, (state, assetId) => assetId],
  (assets, assetId) => assets.find(asset => asset.id === assetId)
);