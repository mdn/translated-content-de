---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`formatToParts()`** Methode von {{jsxref("Intl.RelativeTimeFormat")}} Instanzen gibt ein {{jsxref("Array")}} von Objekten zurück, die das relative Zeitformat in Teilen darstellen und für benutzerdefinierte lokalisierte Formatierungen verwendet werden können.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-formattoparts.html")}}

## Syntax

```js-nolint
formatToParts(value, unit)
```

### Parameter

- `value`
  - : Numerischer Wert, der in der internationalisierten relativen Zeitnachricht verwendet werden soll.
- `unit`
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet werden soll. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Auch Pluralformen sind zulässig.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, die die formatierte relative Zeit in Teilen enthalten.

## Beschreibung

Die Methode `Intl.RelativeTimeFormat.prototype.formatToParts` ist eine Version der Format-Methode, welche ein Array von Objekten zurückgibt, die "Teile" des Objekts repräsentieren. Dabei wird die formatierte Nummer in ihre Bestandteile getrennt und von anderem umliegendem Text getrennt. Diese Objekte haben zwei Eigenschaften: type, ein `NumberFormat` formatToParts Typ, und value, welches der String ist, der die Komponente der Ausgabe darstellt. Wenn ein "Teil" von `NumberFormat` stammt, enthält er eine Unit-Eigenschaft, die die formatierte Einheit angibt; Literale, die Teil des größeren Rahmens sind, haben diese Eigenschaft nicht.

## Beispiele

### Verwendung von formatToParts

```js
const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

// Relative Zeit mit der Tageseinheit formatieren
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
