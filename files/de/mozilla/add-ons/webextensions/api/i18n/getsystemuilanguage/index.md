---
title: i18n.getSystemUILanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getSystemUILanguage
l10n:
  sourceCommit: 44f564a6c7918d7db234b8e7126472161a407591
---

{{AddonSidebar}}

Gibt das aktuelle UI-Gebietsschema des Betriebssystems zurück. Dies ist anders als {{WebExtAPIRef('i18n.getUILanguage')}}, das das UI-Gebietsschema des Webbrowsers zurückgibt.

## Syntax

```js-nolint
let systemUILanguage = await browser.i18n.getSystemUILanguage()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), der mit einem {{WebExtAPIRef("i18n.LanguageCode")}} erfüllt wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
