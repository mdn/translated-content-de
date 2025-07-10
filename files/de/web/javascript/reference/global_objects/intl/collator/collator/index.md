---
title: Intl.Collator() Konstruktor
short-title: Intl.Collator()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

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

> [!NOTE]
> `Intl.Collator()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erstellen eine neue `Intl.Collator` Instanz.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:
    - `co`
      - : Siehe [`collation`](#collation).
    - `kn`
      - : Siehe [`numeric`](#numeric).
    - `kf`
      - : Siehe [`caseFirst`](#casefirst).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) festgelegt werden. Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `usage`
      - : Ob der Vergleich zum Sortieren einer Liste von Strings oder zum unscharfen (für das lateinische Schriftsystem diakritika-insensitive und Groß-/Kleinschreibung-insensitive) Filtern einer Liste von Strings nach Schlüssel erfolgt. Mögliche Werte sind:
        - `"sort"` (Standard)
          - : Zum Sortieren einer Liste von Strings.
        - `"search"`
          - : Zum Filtern einer Liste von Strings, indem jedes Listenelement auf eine vollständige Übereinstimmung mit einem Schlüssel getestet wird. Bei `"search"` sollte der Anrufer nur darauf achten, ob `compare()` null oder einen anderen Wert zurückgibt, und sollte die nicht-null Rückgabewerte nicht voneinander unterscheiden. Es ist also unangebracht, `"search"` zum Sortieren zu verwenden.
    - `localeMatcher`
      - : Der Locale-Abstimmungsalgorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Für Informationen zu dieser Option, siehe [Lokale Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `collation`
      - : Varianten-Kollationen für bestimmte Locales, wie `"emoji"`, `"pinyin"`, `"stroke"`, usw. Hat nur Auswirkungen, wenn `usage` `"sort"` ist (weil `"search"` unterliegend sein eigener Kollationstyp ist). Für eine Liste der unterstützten Kollationstypen, siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types); der Standard ist `"default"`. Diese Option kann auch über den `co` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide vorhanden sind, hat diese `options` Eigenschaft Vorrang.
    - `numeric`
      - : Ob numerische Kollation verwendet werden sollte, so dass "1" < "2" < "10". Mögliche Werte sind `true` und `false`; der Standard ist `false`. Diese Option kann auch über den `kn` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide vorhanden sind, hat diese `options` Eigenschaft Vorrang.
    - `caseFirst`
      - : Ob Groß- oder Kleinbuchstaben zuerst sortieren sollen. Mögliche Werte sind `"upper"`, `"lower"`, und `"false"` (verwenden Sie das Locale-Standard); der Standard ist `"false"`. Diese Option kann auch über den `kf` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide vorhanden sind, hat diese `options` Eigenschaft Vorrang.
    - `sensitivity`
      - : Welche Unterschiede in den Strings zu nicht-null Resultatwerten führen sollen. Mögliche Werte sind:
        - `"base"`
          - : Nur Strings, die sich in Basisbuchstaben unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a = A. Im Unicode-Kollationsalgorithmus entspricht dies dem primären Stärkungsgrad.
        - `"accent"`
          - : Nur Strings, die sich in Basisbuchstaben oder Akzenten und anderen diakritischen Zeichen unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a ≠ á, a = A. Im Unicode-Kollationsalgorithmus entspricht dies dem sekundären Stärkungsgrad.
        - `"case"`
          - : Nur Strings, die sich in Basisbuchstaben oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a ≠ A. Im Unicode-Kollationsalgorithmus entspricht dies dem primären Stärkungsgrad mit Fall-Stufe-Handhabung.
        - `"variant"`
          - : Strings, die sich in Basisbuchstaben, Akzenten und anderen diakritischen Zeichen oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Andere Unterschiede können ebenfalls berücksichtigt werden. Beispiele: a ≠ b, a ≠ á, a ≠ A. Im Unicode-Kollationsalgorithmus entspricht dies dem tertiären Stärkungsgrad.

        Der Standard ist `"variant"` für Verwendung `"sort"`; es ist laut Spezifikation lokalspezifisch für Verwendung `"search"`, aber normalerweise ebenfalls `"variant"`. Da die Kernfunktionalität von `"search"` akzent- und groß-/kleinschreibungsinsensitive Filterung ist, ergibt es am meisten Sinn, dies auf `"base"` zu setzen (und vielleicht `"case"`).

    - `ignorePunctuation`
      - : Ob Interpunktion ignoriert werden soll. Mögliche Werte sind `true` und `false`. Der Standard ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel demonstriert die verschiedenen potenziellen Ergebnisse, wenn ein String vor, nach oder auf derselben Ebene wie ein anderer auftritt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die in dem obigen Code gezeigten Ergebnisse zwischen Browsern und Browserversionen variieren können. Dies liegt daran, dass die Werte implementierungsspezifisch sind. Das heißt, die Spezifikation verlangt nur, dass die Vor- und Nachwerte negativ bzw. positiv sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
