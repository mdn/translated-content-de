---
title: i18n.detectLanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ermittelt die Sprache des bereitgestellten Textes unter Verwendung des [Compact Language Detector](https://github.com/CLD2Owners/cld2) (CLD).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Siehe die Seite [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für einen Leitfaden zur Verwendung dieser Funktion.

## Syntax

```js-nolint
let detectingLanguages = browser.i18n.detectLanguage(
  text                  // string
)
```

### Parameter

- `text`
  - : `string`. Vom Benutzer eingegebener Text, der übersetzt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Ergebnisobjekt erfüllt wird. Das Ergebnisobjekt hat zwei Eigenschaften:

- `isReliable`
  - : `boolean`. Ob die Sprache zuverlässig erkannt wurde.
- `languages`
  - : `array` von Objekten, von denen jedes zwei Eigenschaften hat:
    - `language`
      - : {{WebExtAPIRef('i18n.LanguageCode')}}. Die erkannte Sprache.
    - `percentage`
      - : `integer`. Der Prozentsatz des Eingabetextes, der in der erkannten Sprache war.

## Beispiele

```js
function onLanguageDetected(langInfo) {
  for (const lang of langInfo.languages) {
    console.log(`Language is: ${lang.language}`);
    console.log(`Percentage is: ${lang.percentage}`);
  }
}

let text = "L'homme est né libre, et partout il est dans les fers.";

let detecting = browser.i18n.detectLanguage(text);
detecting.then(onLanguageDetected);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n#method-detectLanguage) API von Chromium. Diese Dokumentation ist abgeleitet von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code.
