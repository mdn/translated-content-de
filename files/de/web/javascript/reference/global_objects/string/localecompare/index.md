---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die Methode **`localeCompare()`** von {{jsxref("String")}}-Werten gibt eine Zahl zurück, die angibt, ob diese Zeichenkette in der Sortierreihenfolge vor, nach oder gleich der angegebenen Zeichenkette kommt. In Implementierungen mit Unterstützung der [`Intl.Collator`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) ruft diese Methode einfach `Intl.Collator` auf.

Beim Vergleich einer großen Anzahl von Zeichenketten, wie z. B. beim Sortieren großer Arrays, ist es besser, ein {{jsxref("Intl.Collator")}}-Objekt zu erstellen und die Funktion zu verwenden, die von dessen {{jsxref("Intl/Collator/compare", "compare()")}}-Methode bereitgestellt wird.

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

## Syntax

```js-nolint
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und erlauben es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.Collator`-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) unterstützen, entsprechen diese Parameter genau den Parametern des Konstruktors [`Intl.Collator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator). Implementierungen ohne `Intl.Collator`-Unterstützung sollen beide Parameter ignorieren, was das zurückgegebene Vergleichsergebnis vollständig implementierungsabhängig macht — es muss nur _konsistent_ sein.

- `compareString`
  - : Die Zeichenkette, gegen die `referenceStr` verglichen wird. Alle Werte werden [in Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `localeCompare()` den Vergleich gegen die Zeichenkette `"undefined"` vornimmt, was selten gewünscht ist.
- `locales` {{optional_inline}}

  - : Eine Zeichenkette mit einem BCP-47-Sprach-Tag oder ein Array solcher Zeichenketten. Entspricht dem `locales`-Parameter des `Intl.Collator()`-Konstruktors.

    In Implementierungen ohne `Intl.Collator`-Unterstützung wird dieser Parameter ignoriert und normalerweise die Lokalisierung des Hosts verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt zur Anpassung des Ausgabeformats. Entspricht dem `options`-Parameter des `Intl.Collator()`-Konstruktors.

    In Implementierungen ohne `Intl.Collator`-Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.Collator()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) für Details zu den `locales`- und `options`-Parametern und deren Verwendung.

### Rückgabewert

Eine **negative** Zahl, wenn `referenceStr` vor `compareString` vorkommt; **positiv** wenn `referenceStr` nach `compareString` vorkommt; `0`, wenn sie gleichwertig sind.

In Implementierungen mit `Intl.Collator` entspricht dies `new Intl.Collator(locales, options).compare(referenceStr, compareString)`.

## Beschreibung

Gibt eine ganze Zahl zurück, die angibt, ob `referenceStr` vor, nach oder gleichwertig zu `compareString` kommt.

- Negativ, wenn `referenceStr` vor `compareString` vorkommt
- Positiv, wenn `referenceStr` nach `compareString` vorkommt
- Gibt `0` zurück, wenn sie gleichwertig sind

> [!WARNING]
> Verlassen Sie sich nicht auf die genauen Rückgabewerte `-1` oder `1`!
>
> Negative und positive ganzzahlige Ergebnisse variieren zwischen Browsern (sowie zwischen Browser-Versionen), da die ECMAScript-Spezifikation nur negative und positive Werte vorschreibt. Einige Browser können `-2` oder `2` oder sogar einen anderen negativen oder positiven Wert zurückgeben.

## Beispiele

### Verwendung von localeCompare()

```js
// Der Buchstabe "a" steht vor "c" und ergibt einen negativen Wert
"a".localeCompare("c"); // -2 oder -1 (oder ein anderer negativer Wert)

// Alphabetisch steht das Wort "check" nach "against" und ergibt einen positiven Wert
"check".localeCompare("against"); // 2 oder 1 (oder ein anderer positiver Wert)

// "a" und "a" sind gleichwertig und ergeben einen neutralen Wert von null
"a".localeCompare("a"); // 0
```

### Sortieren eines Arrays

`localeCompare()` ermöglicht eine Groß-/Kleinschreibung-unabhängige Sortierung eines Arrays.

```js
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Überprüfen der Browserunterstützung für erweiterte Argumente

Die Argumente `locales` und `options` werden
noch nicht in allen Browsern unterstützt.

Um zu überprüfen, ob eine Implementierung sie unterstützt, verwenden Sie das `"i"`-Argument (eine
Anforderung, dass ungültige Sprach-Tags abgelehnt werden) und suchen Sie nach einer
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

Die von `localeCompare()` bereitgestellten Ergebnisse variieren je nach Sprache. Um die Sortierreihenfolge der in der Benutzeroberfläche Ihrer Anwendung verwendeten Sprache zu erhalten, geben Sie diese Sprache (und möglicherweise einige Fallback-Sprachen) mit dem `locales`-Argument an:

```js
console.log("ä".localeCompare("z", "de")); // ein negativer Wert: im Deutschen sortiert ä vor z
console.log("ä".localeCompare("z", "sv")); // ein positiver Wert: im Schwedischen sortiert ä nach z
```

### Verwendung von options

Die von `localeCompare()` bereitgestellten Ergebnisse können mit dem
`options`-Argument angepasst werden:

```js
// im Deutschen hat ä a als Basisbuchstaben
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// im Schwedischen sind ä und a separate Basisbuchstaben
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // ein positiver Wert
```

### Numerische Sortierung

```js
// standardmäßig ist "2" > "10"
console.log("2".localeCompare("10")); // 1

// numerisch mit Optionen:
console.log("2".localeCompare("10", undefined, { numeric: true })); // -1

// numerisch unter Verwendung des locales-Tags:
console.log("2".localeCompare("10", "en-u-kn-true")); // -1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Intl.Collator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
