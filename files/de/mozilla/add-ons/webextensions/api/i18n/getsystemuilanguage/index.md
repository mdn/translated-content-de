---
title: i18n.getSystemUILanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getSystemUILanguage
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Gibt die aktuelle UI-Lokalisierung des Betriebssystems zurück. Dies unterscheidet sich von {{WebExtAPIRef('i18n.getUILanguage')}}, die die UI-Lokalisierung des Webbrowsers zurückgibt.

## Syntax

```js-nolint
let systemUILanguage = await browser.i18n.getSystemUILanguage()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef("i18n.LanguageCode")}} erfüllt wird.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
