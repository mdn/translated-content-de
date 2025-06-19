---
title: i18n.getPreferredSystemLanguages()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/getPreferredSystemLanguages
l10n:
  sourceCommit: 44f564a6c7918d7db234b8e7126472161a407591
---

{{AddonSidebar}}

Gibt die bevorzugten Gebietsschemas des Betriebssystems zurück. Dies unterscheidet sich von den im Browser eingestellten Gebietsschemas; um diese zu erhalten, verwenden Sie {{WebExtAPIRef('i18n.getAcceptLanguages')}}.

## Syntax

```js-nolint
let preferredSystemLanguages = await browser.i18n.getPreferredSystemLanguages()
```

### Parameter

Keine.

### Rückgabewert

Ein mit einem Array von {{WebExtAPIRef("i18n.LanguageCode")}}-Strings erfülltes [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise).

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
