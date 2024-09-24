---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
l10n:
  sourceCommit: 4436acdeb5087c7fc5afc58fc8b475e30481c801
---

{{JSRef}}

Das **`Intl.Collator`**-Objekt ermöglicht sprachspezifische Zeichenfolgenvergleiche.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

## Konstruktor

- {{jsxref("Intl/Collator/Collator", "Intl.Collator()")}}
  - : Erstellt ein neues `Collator`-Objekt.

## Statische Methoden

- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das diejenigen der bereitgestellten Lokalisierungen enthält, die unterstützt werden, ohne dass auf die Standard-Lokalisierung der Laufzeitumgebung zurückgegriffen werden muss.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.Collator.prototype` definiert und werden von allen Instanzen von `Intl.Collator` geteilt.

- {{jsxref("Object/constructor", "Intl.Collator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.Collator`-Instanzen ist der Anfangswert der {{jsxref("Intl/Collator/Collator", "Intl.Collator")}}-Konstruktor.
- `Intl.Collator.prototype[Symbol.toStringTag]`
  - : Der Anfangswert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist die Zeichenfolge `"Intl.Collator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/Collator/compare", "Intl.Collator.prototype.compare()")}}
  - : Getter-Funktion, die zwei Zeichenfolgen entsprechend der Sortierreihenfolge dieses `Intl.Collator`-Objekts vergleicht.
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung des Objekts berechneten Lokal- und Sortieroptionen widerspiegeln.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel demonstriert die unterschiedlichen möglichen Ergebnisse für eine Zeichenfolge, die vor, nach oder auf der gleichen Ebene wie eine andere auftritt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, oder ein anderer negativer Wert
console.log(new Intl.Collator().compare("c", "a")); // 1, oder ein anderer positiver Wert
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die in dem obigen Code gezeigten Ergebnisse zwischen Browsern und Browser-Versionen variieren können. Dies liegt daran, dass die Werte implementierungsspezifisch sind. Die Spezifikation erfordert lediglich, dass die Vorher- und Nachher-Werte negativ und positiv sind.

### Verwendung von Lokalisierungen

Die von [`Intl.Collator.prototype.compare()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) bereitgestellten Ergebnisse variieren zwischen Sprachen. Um die Sortierreihenfolge der Sprache, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, zu erhalten, stellen Sie sicher, diese Sprache (und möglicherweise einige Fallback-Sprachen) mit dem `locales`-Argument anzugeben:

```js
// auf Deutsch sortiert ä mit a
console.log(new Intl.Collator("de").compare("ä", "z"));
// -1, oder ein anderer negativer Wert

// auf Schwedisch sortiert ä nach z
console.log(new Intl.Collator("sv").compare("ä", "z"));
// 1, oder ein anderer positiver Wert
```

### Verwendung von Optionen

Die von [`Intl.Collator.prototype.compare()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) bereitgestellten Ergebnisse können mit dem `options`-Argument angepasst werden:

```js
// auf Deutsch hat ä den Basisbuchstaben a
console.log(new Intl.Collator("de", { sensitivity: "base" }).compare("ä", "a"));
// 0

// auf Schwedisch sind ä und a separate Basisbuchstaben
console.log(new Intl.Collator("sv", { sensitivity: "base" }).compare("ä", "a"));
// 1, oder ein anderer positiver Wert
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl")}}
