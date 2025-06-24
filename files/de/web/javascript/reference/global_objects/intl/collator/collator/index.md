---
title: Intl.Collator()-Konstruktor
short-title: Intl.Collator()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Intl.Collator()`**-Konstruktor erstellt {{jsxref("Intl.Collator")}}-Objekte.

{{InteractiveExample("JavaScript Demo: Intl.Collator() constructor")}}

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

> [!NOTE] > `Intl.Collator()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide Ansätze erzeugen eine neue `Intl.Collator`-Instanz.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}}-Instanz, oder ein Array solcher Locale-Bezeichner. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Bezeichner unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `co`
      - : Siehe [`collation`](#collation).
    - `kn`
      - : Siehe [`numeric`](#numeric).
    - `kf`
      - : Siehe [`caseFirst`](#casefirst).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) festgelegt werden. Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `usage`
      - : Ob der Vergleich zum Sortieren einer Liste von Strings oder zum unscharfen (für das lateinische Schriftsystem diakritikinsensitive und kasseninsensitive) Filtern einer Liste von Strings nach Schlüssel verwendet wird. Mögliche Werte sind:
        - `"sort"` (Standard)
          - : Zum Sortieren einer Liste von Strings.
        - `"search"`
          - : Zum Filtern einer Liste von Strings, indem jedes Listenelement auf eine vollständige Übereinstimmung mit einem Schlüssel geprüft wird. Bei `"search"` sollte der Aufrufer nur darauf achten, ob `compare()` Null oder einen Nicht-Null-Wert zurückgibt und keine Unterscheidung zwischen den Nicht-Null-Rückgabewerten machen. Das heißt, es ist unangemessen, `"search"` zum Sortieren/Ordnen zu verwenden.
    - `localeMatcher`
      - : Der zu verwendende Localisierungs-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; die Standardeinstellung ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Lokalidentifikation und -verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `collation`
      - : Variante Kollationen für bestimmte Locales, wie zum Beispiel `"emoji"`, `"pinyin"`, `"stroke"`, und so weiter. Wirkt sich nur aus, wenn `usage` `"sort"` ist (weil `"search"` grundlegend sein eigener Kollationstyp ist). Eine Liste der unterstützten Kollationstypen finden Sie unter [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types); die Standardeinstellung ist `"default"`. Diese Option kann auch über den `co` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `numeric`
      - : Ob numerische Kollation verwendet werden soll, sodass "1" < "2" < "10". Mögliche Werte sind `true` und `false`; die Standardeinstellung ist `false`. Diese Option kann auch über den `kn` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `caseFirst`
      - : Ob Großbuchstaben oder Kleinbuchstaben zuerst sortiert werden sollen. Mögliche Werte sind `"upper"`, `"lower"`, und `"false"` (verwenden Sie den Standard der Locale); die Standardeinstellung ist `"false"`. Diese Option kann auch über den `kf` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `sensitivity`

      - : Welche Unterschiede in den Strings zu Nicht-Null-Ergebnissen führen sollen. Mögliche Werte sind:

        - `"base"`
          - : Nur Strings, die sich in Basisbuchstaben unterscheiden, werden als ungleich angesehen. Beispiele: a ≠ b, a = á, a = A. Im Unicode-Kollationsalgorithmus entspricht dies der primären Stärkeebene.
        - `"accent"`
          - : Nur Strings, die sich in Basisbuchstaben oder Akzenten und anderen diakritischen Zeichen unterscheiden, werden als ungleich angesehen. Beispiele: a ≠ b, a ≠ á, a = A. Im Unicode-Kollationsalgorithmus entspricht dies der sekundären Stärkeebene.
        - `"case"`
          - : Nur Strings, die sich in Basisbuchstaben oder Groß-/Kleinschreibung unterscheiden, werden als ungleich angesehen. Beispiele: a ≠ b, a = á, a ≠ A. Im Unicode-Kollationsalgorithmus entspricht dies der primären Stärkeebene mit Groß-/Kleinschreibungsbehandlung.
        - `"variant"`
          - : Strings, die sich in Basisbuchstaben, Akzenten und anderen diakritischen Zeichen oder Groß-/Kleinschreibung unterscheiden, werden als ungleich angesehen. Auch andere Unterschiede können berücksichtigt werden. Beispiele: a ≠ b, a ≠ á, a ≠ A. Im Unicode-Kollationsalgorithmus entspricht dies der tertiären Stärkeebene.

        Die Standardeinstellung ist `"variant"` für `usage` `"sort"`; sie ist `locale`-abhängig für `usage` `"search"` laut Spezifikation, ist aber in der Regel auch `"variant"`. Da die Kernfunktionalität von `"search"` diakritikinsensitive und kasseninsensitive Filterung ist, macht es am meisten Sinn, es auf `"base"` einzustellen (und eventuell `"case"`).

    - `ignorePunctuation`
      - : Ob Satzzeichen ignoriert werden sollen. Mögliche Werte sind `true` und `false`. Die Standardeinstellung ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwenden von Collator

Das folgende Beispiel veranschaulicht die unterschiedlichen potenziellen Ergebnisse für einen String, der vor, nach oder auf demselben Niveau wie ein anderer auftritt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die im obigen Code gezeigten Ergebnisse zwischen Browsern und Browserversionen variieren können. Dies liegt daran, dass die Werte implementierungsspezifisch sind. Das heißt, die Spezifikation erfordert lediglich, dass die Vorher- und Nachher-Werte negativ bzw. positiv sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
