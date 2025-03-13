---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`localeCompare()`**-Methode von {{jsxref("String")}}-Werten gibt eine Zahl zurück, die angibt, ob dieser String vor, nach oder gleich dem angegebenen String in der Sortierreihenfolge kommt. In Implementierungen mit Unterstützung für die [`Intl.Collator`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) delegiert diese Methode an `Intl.Collator`.

Beim Vergleich großer Mengen von Strings, wie beim Sortieren großer Arrays, ist es besser, ein {{jsxref("Intl.Collator")}}-Objekt zu erstellen und die Funktion zu verwenden, die von dessen {{jsxref("Intl/Collator/compare", "compare()")}}-Methode bereitgestellt wird.

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

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und lassen Anwendungen die Sprache angeben, deren Formatierungsregeln verwendet werden sollen.

In Implementierungen, die die [`Intl.Collator`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) unterstützen, entsprechen diese Parameter genau den Parametern des Konstruktors [`Intl.Collator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator). Implementierungen ohne `Intl.Collator`-Unterstützung werden angewiesen, beide Parameter zu ignorieren, wodurch das zurückgegebene Vergleichsergebnis vollständig implementierungsabhängig wird — es muss lediglich _konsistent_ sein.

- `compareString`
  - : Der String, mit dem `referenceStr` verglichen wird. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Weglassen oder Übergeben von `undefined` dazu führt, dass `localeCompare()` mit dem String `"undefined"` vergleicht, was selten gewünscht ist.
- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachcode oder ein Array solcher Strings. Entspricht dem [`locales`-Parameter](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#locales) des `Intl.Collator()`-Konstruktors.

    Bei Implementierungen ohne Unterstützung für `Intl.Collator` wird dieser Parameter ignoriert und normalerweise die Locale des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`-Parameter](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options) des `Intl.Collator()`-Konstruktors.

    Bei Implementierungen ohne Unterstützung für `Intl.Collator` wird dieser Parameter ignoriert.

Weitere Einzelheiten zu den Parametern `locales` und `options` und deren Verwendung finden Sie im [`Intl.Collator()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator).

### Rückgabewert

Eine **negative** Zahl, wenn `referenceStr` vor `compareString` auftritt; **positiv**, wenn `referenceStr` nach `compareString` auftritt; `0`, wenn sie gleichwertig sind.

In Implementierungen mit `Intl.Collator` ist dies gleichbedeutend mit `new Intl.Collator(locales, options).compare(referenceStr, compareString)`.

## Beschreibung

Gibt eine ganze Zahl zurück, die angibt, ob `referenceStr` vor, nach oder gleichwertig zum `compareString` ist.

- Negativ, wenn `referenceStr` vor
  `compareString` auftritt
- Positiv, wenn `referenceStr` nach
  `compareString` auftritt
- Gibt `0` zurück, wenn sie gleichwertig sind

> [!WARNING]
> Verlassen Sie sich nicht auf die genauen Rückgabewerte von `-1` oder `1`!
>
> Negative und positive Ganzzahl-Ergebnisse variieren zwischen Browsern (sowie zwischen
> Browserversionen), da die ECMAScript-Spezifikation nur negative und positive
> Werte vorschreibt. Einige Browser können `-2` oder `2` oder sogar einige andere negative
> oder positive Werte zurückgeben.

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

### Sortieren eines Arrays

`localeCompare()` ermöglicht eine Groß-/Kleinschreibung-unabhängige Sortierung für ein Array.

```js
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Überprüfen der Browserunterstützung für erweiterte Argumente

Die Argumente `locales` und `options` werden
noch nicht in allen Browsern unterstützt.

Um zu überprüfen, ob eine Implementierung diese unterstützt, verwenden Sie das `"i"`-Argument (eine
Anforderung, dass ungültige Sprachcodes abgelehnt werden) und suchen Sie nach einer
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

### Verwendung von Sprachumgebungen

Die von `localeCompare()` bereitgestellten Ergebnisse variieren zwischen Sprachen. Um
die Sortierreihenfolge der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird,
stellen Sie sicher, dass Sie diese Sprache (und möglicherweise einige Ausweichsprachen) mit dem
Argument `locales` angeben:

```js
console.log("ä".localeCompare("z", "de")); // a negative value: in German, ä sorts before z
console.log("ä".localeCompare("z", "sv")); // a positive value: in Swedish, ä sorts after z
```

### Verwendung von Optionen

Die von `localeCompare()` bereitgestellten Ergebnisse können mit dem
Argument `options` angepasst werden:

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
