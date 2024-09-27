---
title: Intl.RelativeTimeFormat.prototype.formatToParts()
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die Methode **`formatToParts()`** von {{jsxref("Intl.RelativeTimeFormat")}}-Instanzen gibt ein {{jsxref("Array")}} von Objekten zurück, das die relative Zeitformatierung in Teile aufteilt, die für benutzerdefinierte, lokalisierungsbewusste Formatierungen verwendet werden können.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat-prototype-formattoparts.html")}}

## Syntax

```js-nolint
formatToParts(value, unit)
```

### Parameter

- `value`
  - : Numerischer Wert, der in der internationalisierten relativen Zeitnachricht verwendet wird.
- `unit`
  - : Einheit, die in der internationalisierten relativen Zeitnachricht verwendet wird. Mögliche Werte sind: `"year"`, `"quarter"`, `"month"`, `"week"`, `"day"`, `"hour"`, `"minute"`, `"second"`. Auch Pluralformen sind erlaubt.

### Rückgabewert

Ein {{jsxref("Array")}} von Objekten, das die formatierte relative Zeit in Teilen enthält.

## Beschreibung

Die Methode `Intl.RelativeTimeFormat.prototype.formatToParts` ist eine Version der Formatmethode, die ein Array von Objekten zurückgibt, welche "Teile" des Objekts darstellen und die formatierte Zahl in ihre Bestandteile zerlegen und von anderem umgebenden Text trennen. Diese Objekte haben zwei Eigenschaften: `type`, ein `NumberFormat` formatToParts-Typ, und `value`, welches die Zeichenkette ist, die die Komponente der Ausgabe darstellt. Wenn ein "Teil" von `NumberFormat` kam, wird er eine `unit`-Eigenschaft haben, die die formatierte Einheit angibt; Literale, die Teil des größeren Rahmens sind, werden diese Eigenschaft nicht haben.

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
