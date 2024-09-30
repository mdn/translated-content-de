---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die Methode **`formatToParts()`** von Instanzen des {{jsxref("Intl.RelativeTimeFormat")}} gibt ein {{jsxref("Array")}} von Objekten zurück, die das relative Zeitformat in Teilen darstellen, die für benutzerdefinierte, lokalisierungsbewusste Formatierung verwendet werden können.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-formattoparts.html")}}

## Syntax

```js-nolint
formatToParts(value, unit)
```

### Parameter

- `value`
  - : Numerischer Wert, der in der internationalisierten relativen Zeitnachricht verwendet wird.
- `unit`
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet wird. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Pluralformen sind ebenfalls erlaubt.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte relative Zeit in Teilen enthalten.

## Beschreibung

Die Methode `Intl.RelativeTimeFormat.prototype.formatToParts` ist eine Version der Formatmethode, die ein Array von Objekten zurückgibt, die "Teile" des Objekts darstellen. Dabei wird die formatierte Zahl in ihre Bestandteile zerlegt und von anderen umgebenden Texten getrennt. Diese Objekte haben zwei Eigenschaften: Typ, ein `NumberFormat` formatToParts Typ, und Wert, welcher der String ist, der die Komponente der Ausgabe darstellt. Wenn ein "Teil" aus `NumberFormat` stammt, wird er eine Einheitseigenschaft haben, die die formatierte Einheit anzeigt; Literale, die Teil des größeren Rahmens sind, werden diese Eigenschaft nicht haben.

## Beispiele

### Verwendung von formatToParts

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Format relative time using the day unit
rtf.formatToParts(-1, "day");
// [{ type: "literal", value: "yesterday"}]

rtf.formatToParts(100, "day");
// [
//   { type: "literal", value: "in " },
//   { type: "integer", value: "100", unit: "day" },
//   { type: "literal", value: " days" }
// ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.RelativeTimeFormat")}}
