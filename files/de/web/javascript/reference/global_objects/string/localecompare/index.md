---
title: String.prototype.localeCompare()
slug: Web/JavaScript/Reference/Global_Objects/String/localeCompare
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`localeCompare()`** Methode von {{jsxref("String")}} Werten gibt eine Zahl zurück, die angibt, ob dieser String im Sortierwert vor, nach oder gleich dem angegebenen String kommt. In Implementierungen mit Unterstützung der [`Intl.Collator` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) ruft diese Methode einfach `Intl.Collator` auf.

Wenn Sie eine große Anzahl von Strings vergleichen, wie z.B. beim Sortieren großer Arrays, ist es besser, ein {{jsxref("Intl.Collator")}} Objekt zu erstellen und die Funktion zu verwenden, die von seiner {{jsxref("Intl/Collator/compare", "compare()")}} Methode bereitgestellt wird.

{{EmbedInteractiveExample("pages/js/string-localecompare.html")}}

## Syntax

```js-nolint
localeCompare(compareString)
localeCompare(compareString, locales)
localeCompare(compareString, locales, options)
```

### Parameter

Die Parameter `locales` und `options` passen das Verhalten der Funktion an und ermöglichen es Anwendungen, die Sprache anzugeben, deren Formatierungskonventionen verwendet werden sollen.

In Implementierungen, die die [`Intl.Collator` API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator) unterstützen, entsprechen diese Parameter genau den Parametern des [`Intl.Collator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) Konstruktors. Implementierungen ohne `Intl.Collator` Unterstützung werden gebeten, beide Parameter zu ignorieren, wodurch das zurückgegebene Vergleichsergebnis vollständig implementationsabhängig ist — es muss nur _konsistent_ sein.

- `compareString`
  - : Der String, mit dem der `referenceStr` verglichen wird. Alle Werte werden [zu Strings umgeformt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Auslassen oder Übergeben von `undefined` dazu führt, dass `localeCompare()` mit dem String `"undefined"` verglichen wird, was selten das Gewünschte ist.
- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder ein Array solcher Strings. Entspricht dem [`locales`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#locales) Parameter des `Intl.Collator()` Konstruktors.

    In Implementierungen ohne `Intl.Collator` Unterstützung wird dieser Parameter ignoriert und die lokale Standardeinstellung des Hosts wird normalerweise verwendet.

- `options` {{optional_inline}}

  - : Ein Objekt, das das Ausgabeformat anpasst. Entspricht dem [`options`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator#options) Parameter des `Intl.Collator()` Konstruktors.

    In Implementierungen ohne `Intl.Collator` Unterstützung wird dieser Parameter ignoriert.

Einzelheiten zu den Parametern `locales` und `options` und zu ihrer Verwendung finden Sie im [`Intl.Collator()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator).

### Rückgabewert

Eine **negative** Zahl, wenn `referenceStr` vor `compareString` liegt; **positiv**, wenn `referenceStr` nach `compareString` liegt; `0`, wenn sie identisch sind.

In Implementierungen mit `Intl.Collator` ist dies gleichbedeutend mit `new Intl.Collator(locales, options).compare(referenceStr, compareString)`.

## Beschreibung

Gibt eine ganze Zahl zurück, die angibt, ob der `referenceStr`
vor, nach oder gleich dem `compareString` kommt.

- Negativ, wenn der `referenceStr` vor
  `compareString` auftritt
- Positiv, wenn der `referenceStr` nach
  `compareString` auftritt
- Gibt `0` zurück, wenn sie identisch sind

> [!WARNING]
> Verlassen Sie sich nicht auf exakte Rückgabewerte von `-1` oder `1`!
>
> Die negativen und positiven Ganzzahlergebnisse variieren zwischen Browsern (sowie zwischen
> Browserversionen), da die ECMAScript-Spezifikation nur negative und positive
> Werte vorschreibt. Einige Browser können `-2` oder `2` oder sogar einen anderen
> negativen oder positiven Wert zurückgeben.

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

`localeCompare()` ermöglicht eine groß-/kleinschreibungsunabhängige Sortierung eines Arrays.

```js
const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']
```

### Unterstützung erweiterter Argumente in Browsern prüfen

Die Argumente `locales` und `options` werden
noch nicht in allen Browsern unterstützt.

Um zu prüfen, ob eine Implementierung sie unterstützt, verwenden Sie das `"i"` Argument (eine Anforderung, dass ungültige Sprach-Tags abgelehnt werden) und suchen Sie nach einer
{{jsxref("RangeError")}} Ausnahme:

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

Die von `localeCompare()` bereitgestellten Ergebnisse variieren zwischen den Sprachen. Um die Sortierreihenfolge der in der Benutzeroberfläche Ihrer Anwendung verwendeten Sprache zu erhalten,
geben Sie sicher diese Sprache (und möglicherweise einige Ersatzsprachen) mit dem
`locales` Argument an:

```js
console.log("ä".localeCompare("z", "de")); // a negative value: in German, ä sorts before z
console.log("ä".localeCompare("z", "sv")); // a positive value: in Swedish, ä sorts after z
```

### Verwendung von Optionen

Die von `localeCompare()` bereitgestellten Ergebnisse können mit dem
`options` Argument angepasst werden:

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
