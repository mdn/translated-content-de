---
title: Intl.Collator() Konstruktor
short-title: Intl.Collator()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Der **`Intl.Collator()`** Konstruktor erstellt {{jsxref("Intl.Collator")}} Objekte.

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

> **Note:** `Intl.Collator()` kann sowohl mit als auch ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Intl.Collator` Instanz.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder einer {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Sprachkennungen. Die Standard-Sprachumgebung der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Sprachkennungen unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `co`
      - : Siehe [`collation`](#collation).
    - `kn`
      - : Siehe [`numeric`](#numeric).
    - `kf`
      - : Siehe [`caseFirst`](#casefirst).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) gesetzt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `usage`
      - : Ob der Vergleich für das Sortieren einer Liste von Strings oder zum unscharfen (für das lateinische Schriftbild diakritische-insensitive und groß-/kleinschreibungsinsensitive) Filtern einer Liste von Strings nach Schlüssel ist. Mögliche Werte sind:
        - `"sort"` (Standard)
          - : Zum Sortieren einer Liste von Strings.
        - `"search"`
          - : Zum Filtern einer Liste von Strings, indem jeder Listeneintrag auf eine vollständige Übereinstimmung mit einem Schlüssel geprüft wird. Bei `"search"` sollte der Anrufer nur darauf achten, ob `compare()` null oder ungleich null zurückgibt und sollte die ungleichen null zurückgegebenen Werte nicht unterscheiden. Das heißt, es ist unangebracht, `"search"` zum Sortieren/Ordnen zu verwenden.
    - `localeMatcher`
      - : Der Sprachabgleichalgorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Für Informationen zu dieser Option siehe [Sprachidentifikation und -verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `collation`
      - : Varianten von Kollationen für bestimmte Sprachumgebungen, wie z.B. `"emoji"`, `"pinyin"`, `"stroke"` und so weiter. Hat nur Auswirkungen, wenn `usage` `"sort"` ist (weil `"search"` grundsätzlich sein eigener Kollationstyp ist). Für eine Liste der unterstützten Kollationstypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types); der Standard ist `"default"`. Diese Option kann auch über den `co` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `numeric`
      - : Ob eine numerische Kollision verwendet werden soll, so dass "1" < "2" < "10". Mögliche Werte sind `true` und `false`; der Standard ist `false`. Diese Option kann auch über den `kn` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `caseFirst`
      - : Ob Großbuchstaben oder Kleinbuchstaben zuerst sortiert werden sollen. Mögliche Werte sind `"upper"`, `"lower"` und `"false"` (verwenden Sie den Standard der Sprachumgebung); der Standard ist `"false"`. Diese Option kann auch über den `kf` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `sensitivity`

      - : Welche Unterschiede in den Strings zu ungleich null Ergebnissen führen sollen. Mögliche Werte sind:

        - `"base"`
          - : Nur Strings, die sich in Grundbuchstaben unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a = A. Im Unicode-Kollationsalgorithmus entspricht dies der primären Stärkeebene.
        - `"accent"`
          - : Nur Strings, die sich in Grundbuchstaben oder Akzenten und anderen diakritischen Zeichen unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a ≠ á, a = A. Im Unicode-Kollationsalgorithmus entspricht dies der sekundären Stärkeebene.
        - `"case"`
          - : Nur Strings, die sich in Grundbuchstaben oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a ≠ A. Im Unicode-Kollationsalgorithmus entspricht dies der primären Stärkeebene mit Handhabung der Groß-/Kleinschreibung.
        - `"variant"`
          - : Strings, die sich in Grundbuchstaben, Akzenten und anderen diakritischen Zeichen oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Andere Unterschiede können ebenfalls in Betracht gezogen werden. Beispiele: a ≠ b, a ≠ á, a ≠ A. Im Unicode-Kollationsalgorithmus entspricht dies der tertiären Stärkeebene.

        Der Standard ist `"variant"` für `usage` `"sort"`; es ist laut Spezifikation abhängig von der Spracheinstellung bei `usage` `"search"`, aber normalerweise auch `"variant"`. Da die Kernfunktionalität von `"search"` akzentinsensitives und groß-/kleinschreibungsinsensitives Filtern ist, ergibt `"base"` am meisten Sinn (und vielleicht `"case"`).

    - `ignorePunctuation`
      - : Ob Satzzeichen ignoriert werden sollen. Mögliche Werte sind `true` und `false`. Der Standard ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel zeigt die verschiedenen möglichen Ergebnisse für einen String, der vor, nach oder auf derselben Ebene wie ein anderer auftritt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die in dem obigen Code gezeigten Ergebnisse zwischen Browsern und Browserversionen variieren können. Dies liegt daran, dass die Werte implementationsspezifisch sind. Das heißt, die Spezifikation verlangt nur, dass die Vorher- und Nachher-Werte negativ und positiv sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
