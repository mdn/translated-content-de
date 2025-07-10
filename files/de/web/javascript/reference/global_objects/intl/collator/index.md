---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Das **`Intl.Collator`**-Objekt ermöglicht einen sprachsensitiven String-Vergleich.

{{InteractiveExample("JavaScript Demo: Intl.Collator")}}

```js interactive-example
console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("de").compare));
// Expected output: Array ["a", "ä", "z", "Z"]

console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("sv").compare));
// Expected output: Array ["a", "z", "Z", "ä"]

console.log(
  ["Z", "a", "z", "ä"].sort(
    new Intl.Collator("de", { caseFirst: "upper" }).compare,
  ),
);
// Expected output: Array ["a", "ä", "Z", "z"]
```

## Konstruktor

- {{jsxref("Intl/Collator/Collator", "Intl.Collator()")}}
  - : Erstellt ein neues `Collator`-Objekt.

## Statische Methoden

- {{jsxref("Intl/Collator/supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : Gibt ein Array zurück, das diejenigen der bereitgestellten Lokalwerte enthält, die ohne Rückgriff auf die Standardlokale der Laufzeitumgebung unterstützt werden.

## Instanzeigenschaften

Diese Eigenschaften sind auf `Intl.Collator.prototype` definiert und werden von allen `Intl.Collator`-Instanzen geteilt.

- {{jsxref("Object/constructor", "Intl.Collator.prototype.constructor")}}
  - : Die Konstruktorfunktion, die das Instanzobjekt erstellt hat. Für `Intl.Collator`-Instanzen ist der Anfangswert der {{jsxref("Intl/Collator/Collator", "Intl.Collator")}}-Konstruktor.
- `Intl.Collator.prototype[Symbol.toStringTag]`
  - : Der anfängliche Wert der [`[Symbol.toStringTag]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)-Eigenschaft ist der String `"Intl.Collator"`. Diese Eigenschaft wird in {{jsxref("Object.prototype.toString()")}} verwendet.

## Instanzmethoden

- {{jsxref("Intl/Collator/compare", "Intl.Collator.prototype.compare()")}}
  - : Getter-Funktion, die zwei Strings gemäß der Sortierreihenfolge dieses `Intl.Collator`-Objekts vergleicht.
- {{jsxref("Intl/Collator/resolvedOptions", "Intl.Collator.prototype.resolvedOptions()")}}
  - : Gibt ein neues Objekt mit Eigenschaften zurück, die die während der Initialisierung des Objekts berechneten Lokale und Kollationsoptionen widerspiegeln.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel zeigt die unterschiedlichen potenziellen Ergebnisse für einen String, der vor, nach oder auf der gleichen Ebene wie ein anderer auftritt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die im obigen Code gezeigten Ergebnisse zwischen Browsern und Browserversionen variieren können. Das liegt daran, dass die Werte implementierungsspezifisch sind. Die Spezifikation verlangt nur, dass die Vorher- und Nachher-Werte negativ bzw. positiv sind.

### Verwendung von Lokalwerten

Die von [`Intl.Collator.prototype.compare()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) bereitgestellten Ergebnisse variieren zwischen Sprachen. Um die Sortierreihenfolge der in der Benutzeroberfläche Ihrer Anwendung verwendeten Sprache zu erhalten, geben Sie diese Sprache (und möglicherweise einige Rückfallsprachen) mit dem `locales`-Argument an:

```js
// in German, ä sorts with a
console.log(new Intl.Collator("de").compare("ä", "z"));
// -1, or some other negative value

// in Swedish, ä sorts after z
console.log(new Intl.Collator("sv").compare("ä", "z"));
// 1, or some other positive value
```

### Verwendung von Optionen

Die von [`Intl.Collator.prototype.compare()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare) bereitgestellten Ergebnisse können mit dem `options`-Argument angepasst werden:

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
- {{jsxref("String.prototype.localeCompare()")}}
