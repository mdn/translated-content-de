---
title: String.prototype.localeCompare()
short-title: localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`localeCompare()`**-Methode von {{jsxref("String")}}-Werten gibt eine Zahl zurück, die angibt, ob dieser String nach, vor oder gleich dem angegebenen String in der Sortierreihenfolge ist. In Implementierungen mit Unterstützung der [`Intl.Collator` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator), delegiert diese Methode an `Intl.Collator`.

Beim Vergleich großer Mengen von Strings, wie etwa beim Sortieren großer Arrays, ist es besser, ein {{jsxref("Intl.Collator")}}-Objekt zu erstellen und die Funktion der {{jsxref("Intl/Collator/compare", "compare()")}}-Methode zu verwenden.

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

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungsgepflogenheiten verwendet werden sollen.

In Implementierungen, die die [`Intl.Collator` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.Collator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)-Konstruktors. Implementierungen ohne `Intl.Collator`-Unterstützung werden gebeten, beide Parameter zu ignorieren, wodurch das Vergleichsergebnis völlig implementierungsabhängig wird – es muss nur _konsistent_ sein.

- `compareString`
  - : Der String, mit dem `referenceStr` verglichen wird. Alle Werte werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `localeCompare()` mit dem String `"undefined"` vergleicht, was selten gewünscht ist.
- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#locales)-Parameter des `Intl.Collator()`-Konstruktors.

    In Implementierungen ohne `Intl.Collator`-Unterstützung wird dieser Parameter ignoriert und normalerweise die Sprache des Hosts verwendet.

- `options` {{optional_inline}}
  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options)-Parameter des `Intl.Collator()`-Konstruktors.

    In Implementierungen ohne `Intl.Collator`-Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.Collator()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) für Details zu den `locales`- und `options`-Parametern und deren Verwendung.

### Rückgabewert

Eine **negative** Zahl, wenn `referenceStr` vor `compareString` auftritt; **positiv**, wenn `referenceStr` nach `compareString` auftritt; `0`, wenn sie gleichwertig sind.

In Implementierungen mit `Intl.Collator` entspricht dies `new Intl.Collator(locales, options).compare(referenceStr, compareString)`.

## Beschreibung

Gibt eine ganze Zahl zurück, die angibt, ob der `referenceStr` vor, nach oder gleichwertig zum `compareString` steht.

- Negativ, wenn der `referenceStr` vor `compareString` auftritt
- Positiv, wenn der `referenceStr` nach `compareString` auftritt
- Gibt `0` zurück, wenn sie gleichwertig sind

> [!WARNING]
> Verlassen Sie sich nicht auf genaue Rückgabewerte von `-1` oder `1`!
>
> Negative und positive Ganzzahlergebnisse variieren zwischen Browsern (sowie zwischen Browser-Versionen), da die ECMAScript-Spezifikation nur negative und positive Werte vorschreibt. Einige Browser können `-2` oder `2` oder sogar einige andere negative oder positive Werte zurückgeben.

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

`localeCompare()` ermöglicht die Groß-/Kleinschreibung-unabhängige Sortierung eines Arrays.

```js
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Unterstützung des Browsers für erweiterte Argumente prüfen

Die `locales`- und `options`-Argumente werden noch nicht in allen Browsern unterstützt.

Um zu überprüfen, ob eine Implementierung sie unterstützt, verwenden Sie das Argument `"i"` (eine Anforderung, dass ungültige Sprach-Tags abgelehnt werden) und suchen Sie nach einer {{jsxref("RangeError")}}-Ausnahme:

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

Die von `localeCompare()` bereitgestellten Ergebnisse variieren zwischen den Sprachen. Um die Sortierreihenfolge der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, geben Sie sicher die Sprache (und möglicherweise einige Ersatzsprachen) mit dem `locales`-Argument an:

```js
console.log("ä".localeCompare("z", "de")); // a negative value: in German, ä sorts before z
console.log("ä".localeCompare("z", "sv")); // a positive value: in Swedish, ä sorts after z
```

### Verwendung von options

Die von `localeCompare()` bereitgestellten Ergebnisse können mit dem `options`-Argument angepasst werden:

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
