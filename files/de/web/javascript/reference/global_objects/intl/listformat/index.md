---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
l10n:
  sourceCommit: 4436acdeb5087c7fc5afc58fc8b475e30481c801
---

{{JSRef}}

Das **`Intl.ListFormat`**-Objekt ermöglicht die sprachspezifische Formatierung von Listen.

{{EmbedInteractiveExample("pages/js/intl-listformat.html", "taller")}}

## Konstruktor

- {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}
  - : Erstellt ein neues `Intl.ListFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/ListFormat/supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das die der bereitgestellten Locales enthält, die unterstützt werden, ohne auf die Standard-Locale der Laufzeitumgebung zurückzugreifen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.ListFormat.prototype` definiert und werden von allen `Intl.ListFormat`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.ListFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.ListFormat`-Instanzen ist der Anfangswert der {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat")}}-Konstruktor.
- `Intl.ListFormat.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der string `"Intl.ListFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
  - : Gibt eine sprachspezifische formatierte Zeichenkette zurück, die die Elemente der Liste darstellt.
- {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}}
  - : Gibt ein Array von Objekten zurück, das die verschiedenen Komponenten repräsentiert, die verwendet werden können, um eine Liste von Werten in einer auf die Locale abgestimmten Weise zu formatieren.
- {{jsxref("Intl/ListFormat/resolvedOptions", "Intl.ListFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die Locale- und Stil-Formatierungsoptionen widerspiegeln, die während der Erstellung des aktuellen `Intl.ListFormat`-Objekts berechnet wurden.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie ein Listenformatter mit der englischen Sprache erstellt wird.

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

Das folgende Beispiel zeigt, wie ein Listenformatter erstellt wird, der formatierte Teile zurückgibt.

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

- [Polyfill von `Intl.ListFormat` in FormatJS](https://formatjs.io/docs/polyfills/intl-listformat/)
- {{jsxref("Intl")}}
