---
title: i18n.getUILanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getUILanguage
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Liefert die UI-Sprache des Browsers. Dies unterscheidet sich von {{WebExtAPIRef('i18n.getAcceptLanguages')}}, die die bevorzugten Benutzersprachen zurückgibt.

Siehe die [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization)-Seite für einen Leitfaden zur Verwendung dieser Funktion.

## Syntax

```js-nolint
browser.i18n.getUILanguage()
```

### Parameter

Keine.

### Rückgabewert

`string`. Der Sprachcode der Browser-UI als {{WebExtAPIRef("i18n.LanguageCode")}}.

## Beispiele

```js
let uiLanguage = browser.i18n.getUILanguage();
console.log(uiLanguage);

// e.g. "fr"
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n#method-getUILanguage)-API von Chromium. Diese Dokumentation ist abgeleitet von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.
