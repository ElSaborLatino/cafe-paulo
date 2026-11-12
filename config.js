// The only file to edit when switching to a different Google Sheet.
// Sheet: File > Share > Publish to web > Entire document > CSV.
// The long id below is the one in the published link (.../d/e/<id>/pub).
export const SHEET_ID = 'REPLACE_WITH_PUBLISHED_SHEET_ID';

// Tab name -> gid (the number after #gid= in the Sheet's address bar for that tab).
export const TABS = {
  menu: 'REPLACE',
  categories: 'REPLACE',
  en: 'REPLACE',
  tr: 'REPLACE',
  pt: 'REPLACE',
};

export const LANGUAGES = ['en', 'tr', 'pt'];
export const DEFAULT_LANGUAGE = 'en';
export const CURRENCY_SYMBOL = '₺';

// Show the item number in front of each name ("30. SPAGHETTI BOLOGNESE")?
export const SHOW_ITEM_NUMBERS = false;

// Notice shown at the bottom of the page, per language. Set to null for none.
export const BANNER = {
  en: '⚠️ Allergy Advice: Please inform our staff of any food allergies or dietary requirements before ordering.',
  tr: '⚠️ Alerji Uyarısı: Sipariş vermeden önce lütfen personelimize herhangi bir gıda alerjinizi veya diyet kısıtlamanızı bildiriniz.',
  pt: '⚠️ Aviso de Alergias: Por favor, informe a nossa equipa sobre quaisquer alergias alimentares ou restrições dietéticas antes de fazer o pedido.',
};

export const SNAPSHOT_URL = 'menu-snapshot.json';
// Must differ from the other restaurant's key: both sites share one browser origin.
export const CACHE_KEY = 'cafe-paulo-menu-v1';

export function tabUrl(tab) {
  return `https://docs.google.com/spreadsheets/d/e/${SHEET_ID}/pub?gid=${TABS[tab]}&single=true&output=csv`;
}
