---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
l10n:
  sourceCommit: 4436acdeb5087c7fc5afc58fc8b475e30481c801
---

{{JSRef}}

Das Objekt **`Intl.Collator`** ermöglicht sprachsensitive Zeichenfolgenvergleiche.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

## Konstruktor

- {{jsxref("Intl/Collator/Collator", "Intl.Collator()")}}
  - : Erstellt ein neues `Collator`-Objekt.

## Statische Methoden

- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das die der bereitgestellten Locales enthält, die unterstützt werden, ohne auf die Standardlocale der Laufzeitumgebung zurückgreifen zu müssen.

## Instanz-Eigenschaften

Diese Eigenschaften sind auf `Intl.Collator.prototype` definiert und werden von allen Instanzen von `Intl.Collator` geteilt.

- {{jsxref("Object/constructor", "Intl.Collator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.Collator`-Instanzen ist der initiale Wert der {{jsxref("Intl/Collator/Collator", "Intl.Collator")}}-Konstruktor.
- `Intl.Collator.prototype[Symbol.toStringTag]`
  - : Der initiale Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.Collator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanz-Methoden

- {{jsxref("Intl/Collator/compare", "Intl.Collator.prototype.compare()")}}
  - : Getter-Funktion, die zwei Zeichenfolgen gemäß der Sortierreihenfolge dieses `Intl.Collator`-Objekts vergleicht.
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung des Objekts berechneten Locale- und Sortieroptionen widerspiegeln.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel demonstriert die unterschiedlichen potenziellen Ergebnisse für eine Zeichenfolge, die vor, nach oder auf gleicher Ebene wie eine andere auftritt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die in dem obigen Code gezeigten Ergebnisse zwischen Browsern und Browserversionen variieren können. Dies liegt daran, dass die Werte implementierungsspezifisch sind. Das heißt, die Spezifikation verlangt lediglich, dass die Vor- und Nachwerte negativ und positiv sind.

### Verwendung von Locales

Die von [`Intl.Collator.prototype.compare()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) bereitgestellten Ergebnisse variieren zwischen Sprachen. Um die Sortierreihenfolge der in der Benutzeroberfläche Ihrer Anwendung verwendeten Sprache zu erhalten, stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ausweichsprachen) mit dem Argument `locales` angeben:

```js
// in German, ä sorts with a
console.log(new Intl.Collator("de").compare("ä", "z"));
// -1, or some other negative value

// in Swedish, ä sorts after z
console.log(new Intl.Collator("sv").compare("ä", "z"));
// 1, or some other positive value
```

### Verwendung von Optionen

Die von [`Intl.Collator.prototype.compare()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) bereitgestellten Ergebnisse können mit dem Argument `options` angepasst werden:

```js
// in German, ä has a as the base letter
console.log(new Intl.Collator("de", { sensitivity: "base" }).compare("ä", "a"));
// 0

// in Swedish, ä and a are separate base letters
console.log(new Intl.Collator("sv", { sensitivity: "base" }).compare("ä", "a"));
// 1, or some other positive value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl")}}
