export type Locale = 'en' | 'zh';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'zh') return 'zh';
  return 'en';
}

export function getLocalizedPath(path: string, lang: Locale): string {
  // Remove leading /zh if present
  const cleanPath = path.replace(/^\/zh/, '') || '/';
  if (lang === 'zh') {
    return cleanPath === '/' ? '/zh' : `/zh${cleanPath}`;
  }
  return cleanPath;
}

export function getSwitcherTarget(currentPath: string, currentLang: Locale): string {
  if (currentLang === 'en') {
    return currentPath === '/' ? '/zh' : `/zh${currentPath}`;
  }
  const enPath = currentPath.replace(/^\/zh/, '') || '/';
  return enPath;
}
