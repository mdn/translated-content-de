---
title: i18n.detectLanguage()
slug: Mozilla/Add-ons/WebExtensions/API/i18n/detectLanguage
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermittelt die Sprache des bereitgestellten Textes mithilfe des [Compact Language Detector](https://github.com/CLD2Owners/cld2) (CLD).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

Siehe die Seite zur [Internationalisierung](/de/docs/Mozilla/Add-ons/WebExtensions/Internationalization) für einen Leitfaden zur Verwendung dieser Funktion.

## Syntax

```js-nolint
let detectingLanguages = browser.i18n.detectLanguage(
  text                  // string
)
```

### Parameter

- `text`
  - : `string`. Benutzereingabe-String, der übersetzt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem Ergebnisobjekt erfüllt wird. Das Ergebnisobjekt hat zwei Eigenschaften:

- `isReliable`
  - : `boolean`. Ob die Sprache zuverlässig erkannt wurde.
- `languages`

  - : `array` von Objekten, die jeweils zwei Eigenschaften haben:

    - `language`
      - : {{WebExtAPIRef('i18n.LanguageCode')}}. Die erkannte Sprache.
    - `percentage`
      - : `integer`. Der Prozentsatz des Eingabestrings, der in der erkannten Sprache war.

## Browser-Kompatibilität

{{Compat}}

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

> [!NOTE]
> Diese API basiert auf der [`chrome.i18n`](https://developer.chrome.com/docs/extensions/reference/api/i18n#method-detectLanguage) API von Chromium. Diese Dokumentation leitet sich von [`i18n.json`](https://chromium.googlesource.com/chromium/src/+/refs/heads/main/extensions/common/api/i18n.json) im Chromium-Code ab.
