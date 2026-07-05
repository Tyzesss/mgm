import { krakowPreset } from "./krakow";
import { sosnowiecPreset } from "./sosnowiec";
import type { SitePreset } from "./types";
import { warszawaPreset } from "./warszawa";
import { wroclawPreset } from "./wroclaw";

export type PresetId = "sosnowiec" | "warszawa" | "krakow" | "wroclaw";

export const PRESETS: Record<PresetId, SitePreset> = {
  sosnowiec: sosnowiecPreset,
  warszawa: warszawaPreset,
  krakow: krakowPreset,
  wroclaw: wroclawPreset,
};

export const PRESET_IDS = Object.keys(PRESETS) as PresetId[];

const DEFAULT_PRESET_ID: PresetId = "sosnowiec";

export function getActivePreset(): SitePreset {
  const raw = import.meta.env.VITE_CITY_PRESET as string | undefined;
  if (raw && raw in PRESETS) {
    return PRESETS[raw as PresetId];
  }
  return PRESETS[DEFAULT_PRESET_ID];
}

export type { GalleryItem, ReviewItem, SitePreset } from "./types";
