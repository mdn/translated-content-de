---
title: "Navigator: language-Eigenschaft"
short-title: language
slug: Web/API/Navigator/language
l10n:
  sourceCommit: 3e1f24c70df1a6f5a76e843369b404ecab19e931
---

{{APIRef("HTML DOM")}}

Die **`language`** Lese-only-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt einen String zurück, der die bevorzugte Sprache des Benutzers darstellt, normalerweise die Sprache der Browser-Benutzeroberfläche.

## Wert

Ein String, der die Sprachversion darstellt, wie in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert. Beispiele für gültige Sprachcodes sind "en", "en-US", "fr", "fr-FR", "es-ES" usw.

Beachten Sie, dass in Safari auf iOS vor Version 10.2 der zurückgegebene Ländercode kleingeschrieben ist: "en-us", "fr-fr" usw.

## Beispiele

### Verwenden von Intl-Konstruktoren zur sprachspezifischen Formatierung

Die {{jsxref("Intl")}}-Konstruktoren erlauben es, Inhalte gemäß den Regeln einer gegebenen Locale zu formatieren. Sie können `navigator.language` an diese Konstruktoren übergeben, um Inhalte in der Locale zu formatieren, die der bevorzugten Sprache des Benutzers entspricht:

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
