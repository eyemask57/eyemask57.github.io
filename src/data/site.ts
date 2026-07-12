export const SITE_NAME = "Matenlumo";
export const SITE_DESCRIPTION =
  "Matenlumo（マテンルーモ）は，日々の暮らしを少し明るくするソフトウェアをつくる個人開発ブランドです．";

export const NAV_ITEMS = [
  { label: "Products", href: "/products/" },
  { label: "About", href: "/about/" },
  { label: "News", href: "/news/" },
];

/**
 * フッターのSNS/外部リンク．url を空文字にしたリンクは表示されない．
 */
export const SOCIAL_LINKS: { label: string; url: string }[] = [
  { label: "GitHub", url: "https://github.com/eyemask57" },
  { label: "Ko-fi", url: "https://ko-fi.com/matenlumo" },
  { label: "X (Twitter)", url: "" },
  { label: "YouTube", url: "" },
];

/** Ko-fi 支援ページのURL（About・プロダクトページのCTAで使用） */
export const KOFI_URL = "https://ko-fi.com/matenlumo";
