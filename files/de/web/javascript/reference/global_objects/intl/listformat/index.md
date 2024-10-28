---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
l10n:
  sourceCommit: c420b9b3126451f53d112afe33e007d6efdb605d
---

{{JSRef}}

Das **`Intl.ListFormat`**-Objekt ermöglicht die sprachsensitive Formatierung von Listen.

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

## Konstruktor

- {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}
  - : Erstellt ein neues `Intl.ListFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/ListFormat/supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das die von den bereitgestellten Locales enthält, die unterstützt werden, ohne auf die Standard-Locale der Laufzeit zurückgreifen zu müssen.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Intl.ListFormat.prototype` definiert und werden von allen `Intl.ListFormat`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.ListFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.ListFormat`-Instanzen ist der Anfangswert der {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat")}}-Konstruktor.
- `Intl.ListFormat.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.ListFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
  - : Gibt eine sprachspezifisch formatierte Zeichenkette zurück, die die Elemente der Liste darstellt.
- {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}}
  - : Gibt ein Array von Objekten zurück, das die verschiedenen Komponenten repräsentiert, die zur Formatierung einer Liste von Werten in einer locale-bewussten Art verwendet werden können.
- {{jsxref("Intl/ListFormat/resolvedOptions", "Intl.ListFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die bei der Erstellung des aktuellen `Intl.ListFormat`-Objekts berechneten Locale- und Formatierungsoptionen widerspiegeln.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie ein Listen-Formatter mit der englischen Sprache erstellt wird.

```js
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car
```

### Verwendung von formatToParts

Das folgende Beispiel zeigt, wie ein Listen-Formatter erstellt wird, der formatierte Teile zurückgibt

```js
const list = ["Motorcycle", "Bus", "Car"];
console.log(
  new Intl.ListFormat("en-GB", {
    style: "long",
    type: "conjunction",
  }).formatToParts(list),
);

// [ { "type": "element", "value": "Motorcycle" },
//   { "type": "literal", "value": ", " },
//   { "type": "element", "value": "Bus" },
//   { "type": "literal", "value": ", and " },
//   { "type": "element", "value": "Car" } ];
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Intl.ListFormat` in FormatJS](https://formatjs.github.io/docs/polyfills/intl-listformat/)
- {{jsxref("Intl")}}
