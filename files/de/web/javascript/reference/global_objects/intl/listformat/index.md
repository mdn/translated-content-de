---
title: Intl.ListFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Intl.ListFormat`**-Objekt ermöglicht eine sprachsensitive Listenformatierung.

{{InteractiveExample("JavaScript Demo: Intl.ListFormat", "taller")}}

```js interactive-example
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"
```

## Konstruktor

- {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat()")}}
  - : Erstellt ein neues `Intl.ListFormat`-Objekt.

## Statische Methoden

- {{jsxref("Intl/ListFormat/supportedLocalesOf", "Intl.ListFormat.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das diejenigen der bereitgestellten Locales enthält, die unterstützt werden, ohne dass auf die Standard-Locale des Laufzeitsystems zurückgegriffen werden muss.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Intl.ListFormat.prototype` definiert und werden von allen `Intl.ListFormat` Instanzen gemeinsam genutzt.

- {{jsxref("Object/constructor", "Intl.ListFormat.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.ListFormat`-Instanzen ist der Anfangswert der {{jsxref("Intl/ListFormat/ListFormat", "Intl.ListFormat")}}-Konstruktor.
- `Intl.ListFormat.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.ListFormat"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Intl/ListFormat/format", "Intl.ListFormat.prototype.format()")}}
  - : Gibt einen sprachspezifisch formatierten String zurück, der die Elemente der Liste darstellt.
- {{jsxref("Intl/ListFormat/formatToParts", "Intl.ListFormat.prototype.formatToParts()")}}
  - : Gibt ein Array von Objekten zurück, die die verschiedenen Komponenten repräsentieren, die verwendet werden können, um eine Liste von Werten in einer localesensiblen Art zu formatieren.
- {{jsxref("Intl/ListFormat/resolvedOptions", "Intl.ListFormat.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die Locale- und Stilformatierungsoptionen widerspiegeln, die während der Konstruktion des aktuellen `Intl.ListFormat`-Objekts berechnet wurden.

## Beispiele

### Verwendung von format

Das folgende Beispiel zeigt, wie man einen List-Formatter mit der englischen Sprache erstellt.

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

Das folgende Beispiel zeigt, wie man einen List-Formatter erstellt, der formatierte Teile zurückgibt.

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
