---
title: String.prototype.localeCompare()
short-title: localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`localeCompare()`**-Methode von {{jsxref("String")}}-Werten gibt eine Zahl zurück, die angibt, ob dieser String im Sortierordnung vor, nach oder gleich dem angegebenen String kommt. In Implementierungen mit Unterstützung für die [`Intl.Collator` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) delegiert diese Methode an `Intl.Collator`.

Beim Vergleich einer großen Anzahl von Strings, wie z.B. beim Sortieren großer Arrays, ist es besser, ein {{jsxref("Intl.Collator")}}-Objekt zu erstellen und die Funktion zu verwenden, die von der {{jsxref("Intl/Collator/compare", "compare()")}}-Methode bereitgestellt wird.

{{InteractiveExample("JavaScript Demo: String.prototype.localeCompare()")}}

```js interactive-example
const a = "réservé"; // With accents, lowercase
const b = "RESERVE"; // No accents, uppercase

console.log(a.localeCompare(b));
// Expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));
// Expected output: 0
```

## Syntax

```js-nolint
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und lassen Anwendungen die Sprache angeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.Collator` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.Collator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)-Konstruktors. Implementierungen ohne Unterstützung für `Intl.Collator` werden aufgefordert, beide Parameter zu ignorieren, wodurch das zurückgegebene Vergleichsergebnis vollständig implementierungsabhängig ist – es muss nur _konsistent_ sein.

- `compareString`
  - : Der String, gegen den `referenceStr` verglichen wird. Alle Werte werden [zu Strings gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Auslassen oder Übergeben von `undefined` dazu führt, dass `localeCompare()` mit dem String `"undefined"` verglichen wird, was selten erwünscht ist.
- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#locales) Parameter des `Intl.Collator()`-Konstruktors.

    In Implementierungen ohne `Intl.Collator`-Unterstützung wird dieser Parameter ignoriert und die Locale des Hosts wird normalerweise verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options) Parameter des `Intl.Collator()`-Konstruktors.

    In Implementierungen ohne `Intl.Collator`-Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.Collator()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) für Details zu den Parametern `locales` und `options` und wie man sie verwendet.

### Rückgabewert

Eine **negative** Zahl, wenn `referenceStr` vor `compareString` vorkommt; **positiv**, wenn `referenceStr` nach `compareString` vorkommt; `0`, wenn sie gleichwertig sind.

In Implementierungen mit `Intl.Collator` ist dies gleichbedeutend mit `new Intl.Collator(locales, options).compare(referenceStr, compareString)`.

## Beschreibung

Gibt eine Ganzzahl zurück, die angibt, ob der `referenceStr` vor, nach oder gleichwertig mit `compareString` kommt.

- Negativ, wenn `referenceStr` vor `compareString` vorkommt
- Positiv, wenn `referenceStr` nach `compareString` vorkommt
- Gibt `0` zurück, wenn sie gleichwertig sind

> [!WARNING]
> Verlassen Sie sich nicht auf die genauen Rückgabewerte von `-1` oder `1`!
>
> Negative und positive ganzzahlige Ergebnisse variieren zwischen Browsern (sowie zwischen
> Browserversionen), da die ECMAScript-Spezifikation nur negative und positive
> Werte vorschreibt. Einige Browser können `-2` oder `2` zurückgeben oder sogar einige andere
> negative oder positive Werte.

## Beispiele

### Verwendung von localeCompare()

```js
// The letter "a" is before "c" yielding a negative value
"a".localeCompare("c"); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
"check".localeCompare("against"); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
"a".localeCompare("a"); // 0
```

### Ein Array sortieren

`localeCompare()` ermöglicht eine Groß- und Kleinschreibung-unabhängige Sortierung eines Arrays.

```js
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Browser-Unterstützung für erweiterte Argumente überprüfen

Die Argumente `locales` und `options` werden in noch nicht allen Browsern unterstützt.

Um zu überprüfen, ob eine Implementierung sie unterstützt, verwenden Sie das Argument `"i"` (eine
Anforderung, dass illegale Sprachcodes abgelehnt werden) und suchen Sie nach einer
{{jsxref("RangeError")}}-Ausnahme:

```js
function localeCompareSupportsLocales() {
  try {
    "foo".localeCompare("bar", "i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Verwendung von locales

Die Ergebnisse, die von `localeCompare()` bereitgestellt werden, variieren je nach Sprache. Um die Sortierreihenfolge der in der Benutzeroberfläche Ihrer Anwendung verwendeten Sprache zu erhalten,
geben Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem
`locales`-Argument an:

```js
console.log("ä".localeCompare("z", "de")); // a negative value: in German, ä sorts before z
console.log("ä".localeCompare("z", "sv")); // a positive value: in Swedish, ä sorts after z
```

### Verwendung von options

Die Ergebnisse, die von `localeCompare()` bereitgestellt werden, können mit dem
`options`-Argument angepasst werden:

```js
// in German, ä has a as the base letter
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// in Swedish, ä and a are separate base letters
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // a positive value
```

### Numerische Sortierung

```js
// by default, "2" > "10"
console.log("2".localeCompare("10")); // 1

// numeric using options:
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

// numeric using locales tag:
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Intl.Collator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
