---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
l10n:
  sourceCommit: a4e9bce1e8bac1b845b32536e0e44f335233eab6
---

{{JSRef}}

Die **`localeCompare()`**-Methode von {{jsxref("String")}}-Werten gibt eine Zahl zurück, die anzeigt, ob diese Zeichenfolge vor oder nach der angegebenen Zeichenfolge in der Sortierreihenfolge kommt oder ob sie gleich ist. In Implementierungen mit Unterstützung für die [`Intl.Collator` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) delegiert diese Methode an `Intl.Collator`.

Beim Vergleichen einer großen Anzahl von Zeichenfolgen, wie zum Beispiel beim Sortieren großer Arrays, ist es besser, ein {{jsxref("Intl.Collator")}}-Objekt zu erstellen und die Funktion zu verwenden, die von der {{jsxref("Intl/Collator/compare", "compare()")}}-Methode bereitgestellt wird.

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

## Syntax

```js-nolint
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.Collator` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.Collator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)-Konstruktors. Implementierungen ohne `Intl.Collator`-Unterstützung werden gebeten, beide Parameter zu ignorieren, wodurch das zurückgegebene Vergleichsergebnis vollständig von der Implementierung abhängt — es muss nur _konsistent_ sein.

- `compareString`
  - : Die Zeichenfolge, mit der `referenceStr` verglichen wird. Alle Werte werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher lässt das Weglassen oder Übergeben von `undefined` `localeCompare()` gegen die Zeichenfolge `"undefined"` vergleichen, was selten das Gewünschte ist.
- `locales` {{optional_inline}}

  - : Eine Zeichenfolge mit einem BCP 47-Sprach-Tag oder ein Array solcher Zeichenfolgen. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#locales)-Parameter des `Intl.Collator()`-Konstruktors.

    In Implementierungen ohne `Intl.Collator`-Unterstützung wird dieser Parameter ignoriert und die Locale des Hosts wird normalerweise verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options)-Parameter des `Intl.Collator()`-Konstruktors.

    In Implementierungen ohne `Intl.Collator`-Unterstützung wird dieser Parameter ignoriert.

Siehe den [`Intl.Collator()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) für Details zu den Parametern `locales` und `options` und wie man sie nutzt.

### Rückgabewert

Eine **negative** Zahl, wenn `referenceStr` vor `compareString` vorkommt; **positiv**, wenn `referenceStr` nach `compareString` vorkommt; `0`, wenn sie gleichwertig sind.

In Implementierungen mit `Intl.Collator` entspricht dies `new Intl.Collator(locales, options).compare(referenceStr, compareString)`.

## Beschreibung

Gibt eine Ganzzahl zurück, die angibt, ob `referenceStr` vor, nach oder gleich `compareString` kommt.

- Negativ, wenn `referenceStr` vor `compareString` vorkommt
- Positiv, wenn `referenceStr` nach `compareString` vorkommt
- Gibt `0` zurück, wenn sie gleichwertig sind

> [!WARNING]
> Verlassen Sie sich nicht auf die exakten Rückgabewerte von `-1` oder `1`!
>
> Negative und positive Ganzzahlergebnisse variieren zwischen Browsern (sowie zwischen Browser-Versionen), da die ECMAScript-Spezifikation nur negative und positive Werte vorschreibt. Einige Browser können `-2` oder `2`, oder sogar einen anderen negativen oder positiven Wert zurückgeben.

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

`localeCompare()` ermöglicht eine Groß-/Kleinschreibung-unsensitive Sortierung eines Arrays.

```js
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Überprüfen der Browserunterstützung für erweiterte Argumente

Die Argumente `locales` und `options` werden noch nicht in allen Browsern unterstützt.

Um zu überprüfen, ob eine Implementierung sie unterstützt, verwenden Sie das `"i"`-Argument (eine Anforderung, dass illegale Sprach-Tags abgelehnt werden) und suchen Sie nach einer
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

Die von `localeCompare()` bereitgestellten Ergebnisse variieren zwischen den Sprachen. Um die Sortierreihenfolge der Sprache zu erhalten, die in der Benutzeroberfläche Ihrer Anwendung verwendet wird, sollten Sie sicherstellen, dass Sie diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem `locales`-Argument angeben:

```js
console.log("ä".localeCompare("z", "de")); // a negative value: in German, ä sorts before z
console.log("ä".localeCompare("z", "sv")); // a positive value: in Swedish, ä sorts after z
```

### Verwendung von Optionen

Die von `localeCompare()` bereitgestellten Ergebnisse können mit dem `options`-Argument angepasst werden:

```js
// in German, ä has a as the base letter
console.log("ä".localeCompare("a", "de", { sensitivity: "base" })); // 0

// in Swedish, ä and a are separate base letters
console.log("ä".localeCompare("a", "sv", { sensitivity: "base" })); // a positive value
```

### Numerisches Sortieren

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
