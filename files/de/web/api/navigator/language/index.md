---
title: "Navigator: language-Eigenschaft"
short-title: language
slug: Web/API/Navigator/language
l10n:
  sourceCommit: 37713c0c974d024ae6f695f9ae6bc7e26076ee3b
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`Navigator.language`** gibt einen String zurück, der die bevorzugte Sprache des Benutzers darstellt, in der Regel die Sprache der Browser-Benutzeroberfläche.

## Wert

Ein String, der die Sprachversion gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} darstellt. Beispiele für gültige Sprachcodes sind „en“, „en-US“, „fr“, „fr-FR“, „es-ES“ usw.

Beachten Sie, dass in Safari auf iOS vor Version 10.2 der zurückgegebene Ländercode kleingeschrieben ist: „en-us“, „fr-fr“ usw.

## Beispiele

### Verwendung von Intl-Konstruktoren für sprachspezifische Formatierungen

Die {{jsxref("Intl")}}-Konstruktoren erlauben die Formatierung von Inhalten entsprechend den Regeln einer gegebenen Lokalisierung. Sie können `navigator.language` übergeben, um Inhalte in der Lokalisierung zu formatieren, die der bevorzugten Sprache des Benutzers entspricht:

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
