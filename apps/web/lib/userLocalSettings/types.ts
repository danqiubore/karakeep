import { z } from "zod";

export const USER_LOCAL_SETTINGS_COOKIE_NAME = "hoarder-user-local-settings";

const zBookmarkGridLayout = z.enum(["grid", "list", "masonry", "compact"]);
export type BookmarksLayoutTypes = z.infer<typeof zBookmarkGridLayout>;

export const zUserLocalSettings = z.object({
  bookmarkGridLayout: zBookmarkGridLayout.optional().default("masonry"),
<<<<<<< HEAD
  lang: z.string().optional().default("en"),
  gridColumns: z.number().min(1).max(6).optional().default(3),
=======
  lang: z.string().optional().default("zh"),
>>>>>>> bab7efc9 (feat(i18n): 将默认语言从英文改为中文)
});

export type UserLocalSettings = z.infer<typeof zUserLocalSettings>;

export function parseUserLocalSettings(str: string | undefined) {
  try {
    return zUserLocalSettings.parse(JSON.parse(str ?? "{}"));
  } catch {
    return undefined;
  }
}

export function defaultUserLocalSettings() {
  return zUserLocalSettings.parse({});
}
