---
title: "Navigator: language-Eigenschaft"
short-title: language
slug: Web/API/Navigator/language
l10n:
  sourceCommit: 37713c0c974d024ae6f695f9ae6bc7e26076ee3b
---

{{APIRef("HTML DOM")}}

Die **`Navigator.language`** schreibgeschützte Eigenschaft gibt einen String zurück, der die bevorzugte Sprache des Benutzers repräsentiert, üblicherweise die Sprache der Browser-Benutzeroberfläche.

## Wert

Ein String, der die Sprachversion gemäß {{RFC(5646, "Tags for Identifying Languages (auch bekannt als BCP 47)")}} repräsentiert. Beispiele für gültige Sprachcodes sind "en", "en-US", "fr", "fr-FR", "es-ES" usw.

Beachten Sie, dass in Safari auf iOS vor Version 10.2 der zurückgegebene Ländercode klein geschrieben wird: "en-us", "fr-fr" usw.

## Beispiele

### Verwendung von Intl-Konstruktoren zur sprachspezifischen Formatierung

Die {{jsxref("Intl")}}-Konstruktoren ermöglichen das Formatieren von Inhalten entsprechend den Regeln einer bestimmten Sprachumgebung. Sie können `navigator.language` übergeben, um Inhalte im Format der bevorzugten Sprache des Benutzers darzustellen:

```js
const date = new Date("2012-05-24");

const formattedDate = new Intl.DateTimeFormat(navigator.language).format(date);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("navigator.languages")}}
- {{domxref("navigator")}}
- {{jsxref("Intl")}}
