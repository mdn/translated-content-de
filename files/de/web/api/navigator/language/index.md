---
title: "Navigator: language-Eigenschaft"
short-title: language
slug: Web/API/Navigator/language
l10n:
  sourceCommit: 37713c0c974d024ae6f695f9ae6bc7e26076ee3b
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`Navigator.language`** gibt einen String zurück, der die bevorzugte Sprache des Benutzers repräsentiert, in der Regel die Sprache der Browser-Oberfläche.

## Wert

Ein String, der die Sprachversion darstellt, wie in {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} definiert. Beispiele für gültige Sprachcodes sind "en", "en-US", "fr", "fr-FR", "es-ES", etc.

Beachten Sie, dass in Safari auf iOS vor Version 10.2 der Ländercode in Kleinbuchstaben zurückgegeben wird: "en-us", "fr-fr" etc.

## Beispiele

### Verwendung von Intl-Konstruktoren für sprachspezifische Formatierung

Die {{jsxref("Intl")}}-Konstruktoren ermöglichen die Formatierung von Inhalten entsprechend den Regeln einer bestimmten Sprachumgebung. Sie können `navigator.language` an diese übergeben, um Inhalte entsprechend der vom Benutzer bevorzugten Sprachumgebung zu formatieren:

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
