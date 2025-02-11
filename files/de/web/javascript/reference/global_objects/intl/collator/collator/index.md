---
title: Intl.Collator()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Der **`Intl.Collator()`**-Konstruktor erstellt {{jsxref("Intl.Collator")}}-Objekte.

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

## Syntax

```js-nolint
new Intl.Collator()
new Intl.Collator(locales)
new Intl.Collator(locales, options)

Intl.Collator()
Intl.Collator(locales)
Intl.Collator(locales, options)
```

> **Note:** `Intl.Collator()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erstellen eine neue `Intl.Collator`-Instanz.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale des Laufzeitsystems wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Locale-Identifikatoren unterstützt werden. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `co`
      - : Siehe [`collation`](#collation).
    - `kn`
      - : Siehe [`numeric`](#numeric).
    - `kf`
      - : Siehe [`caseFirst`](#casefirst).

    Diese Schlüssel können auch mit `options` (siehe unten) gesetzt werden. Wenn beide gesetzt sind, hat die Eigenschaft in `options` Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `usage`
      - : Gibt an, ob der Vergleich zum Sortieren einer Liste von Zeichenfolgen oder für eine unscharfe (diakritika- und Groß-/Kleinschreibung-unempfindlich im lateinischen Alphabet) Filterung einer Liste von Zeichenfolgen nach einem Schlüssel verwendet wird. Mögliche Werte sind:
        - `"sort"` (Standard)
          - : Zum Sortieren einer Liste von Zeichenfolgen.
        - `"search"`
          - : Zum Filtern einer Liste von Zeichenfolgen durch Testen jedes Listenelements auf Übereinstimmung der gesamten Zeichenfolge mit einem Schlüssel. Bei `"search"` sollte die aufrufende Stelle nur darauf achten, ob `compare()` Null oder eine ungleiche Zahl zurückgibt, und sollte zwischen den unterschiedlichen ungleichen Rückgabewerten nicht unterscheiden. Es ist unangebracht, `"search"` zum Sortieren/Ordnen zu verwenden.
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zur Lokalisierung. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Lokale Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `collation`
      - : Variantkollationen für bestimmte Lokalisierungen, wie `"emoji"`, `"pinyin"`, `"stroke"` und andere. Eine Liste unterstützter Kollationstypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types); der Standardwert ist `"default"`. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `co` gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `numeric`
      - : Gibt an, ob numerisches Sortieren verwendet werden soll, sodass "1" < "2" < "10". Mögliche Werte sind `true` und `false`; der Standardwert ist `false`. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `kn` gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `caseFirst`
      - : Gibt an, ob Großbuchstaben oder Kleinbuchstaben zuerst sortiert werden sollen. Mögliche Werte sind `"upper"`, `"lower"` und `"false"` (verwenden Sie den Standardwert der Lokalisierung); der Standardwert ist `"false"`. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `kf` gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `sensitivity`

      - : Welche Unterschiede in den Zeichenfolgen zu ungleichen Ergebnissen führen sollen. Mögliche Werte sind:

        - `"base"`
          - : Nur Zeichenfolgen, die sich in Grundbuchstaben unterscheiden, werden als ungleich angesehen. Beispiele: a ≠ b, a = á, a = A.
        - `"accent"`
          - : Nur Zeichenfolgen, die sich in Grundbuchstaben oder Akzenten und anderen Diakritika unterscheiden, gelten als ungleich. Beispiele: a ≠ b, a ≠ á, a = A.
        - `"case"`
          - : Nur Zeichenfolgen, die sich in Grundbuchstaben oder Groß-/Kleinschreibung unterscheiden, gelten als ungleich. Beispiele: a ≠ b, a = á, a ≠ A.
        - `"variant"`
          - : Zeichenfolgen, die sich in Grundbuchstaben, Akzenten und anderen diakritischen Zeichen oder Groß-/Kleinschreibung unterscheiden, gelten als ungleich. Andere Unterschiede könnten ebenfalls berücksichtigt werden. Beispiele: a ≠ b, a ≠ á, a ≠ A.

        Der Standardwert ist `"variant"` für die Verwendung `"sort"`; für die Verwendung `"search"` ist er laut Spezifikation lokal abhängend, aber die Kernfunktionalität von `"search"` ist eine akzent- und groß-/kleinschreibungsunempfindliche Filterung, daher macht `"base"` am meisten Sinn (und unter Umständen `"case"`).

    - `ignorePunctuation`
      - : Gibt an, ob Satzzeichen ignoriert werden sollen. Mögliche Werte sind `true` und `false`. Der Standardwert ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel zeigt die verschiedenen möglichen Ergebnisse für eine Zeichenfolge, die vor, nach oder auf derselben Ebene wie eine andere auftritt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die in dem obigen Code gezeigten Ergebnisse zwischen Browsern und Browserversionen variieren können. Dies liegt daran, dass die Werte implementierungsspezifisch sind. Die Spezifikation verlangt lediglich, dass die Vorher- und Nachher-Werte negativ bzw. positiv sind.

Wenn die Verwendung `"search"` ist, sollte die aufrufende Stelle nur darauf achten, ob der Rückgabewert von `compare()` Null oder eine ungleiche Zahl ist. Es ist unangebracht, einen `Collator` mit der Verwendung `"search"` zum Sortieren zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
