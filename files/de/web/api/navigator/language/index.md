---
title: "Navigator: language-Eigenschaft"
short-title: language
slug: Web/API/Navigator/language
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("HTML DOM")}}

Die **`language`** schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt einen String zurück, der die bevorzugte Sprache des Benutzers darstellt, normalerweise die Sprache der Browser-Benutzeroberfläche.

## Wert

Ein String, der die Sprachversion im {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}}-Format darstellt. Beispiele für gültige Sprach-Tags sind `en`, `en-US`, `fr`, `fr-FR`, `es-ES` usw.

Beachten Sie, dass in Safari auf iOS vor Version 10.2 der zurückgegebene Ländercode klein geschrieben ist: "en-us", "fr-fr" usw.

## Beispiele

### Verwendung der Intl-Konstruktoren für sprachspezifisches Formatieren

Die {{jsxref("Intl")}}-Konstruktoren erlauben das Formatieren von Inhalten gemäß den Regeln eines bestimmten Gebietsschemas. Sie können `navigator.language` an diese übergeben, um Inhalte im Gebietsschema der bevorzugten Benutzersprache zu formatieren:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.languages`](/de/docs/Web/API/Navigator/languages)
- [`navigator`](/de/docs/Web/API/Navigator)
- {{jsxref("Intl")}}
