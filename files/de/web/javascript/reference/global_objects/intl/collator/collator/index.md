---
title: Intl.Collator() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
l10n:
  sourceCommit: 56beb40c68076030d1812fcec837c89910b58373
---

{{JSRef}}

Der **`Intl.Collator()`** Konstruktor erstellt {{jsxref("Intl.Collator")}} Objekte.

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

> **Note:** `Intl.Collator()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Intl.Collator` Instanz.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind zulässig:

    - `co`
      - : Siehe [`collation`](#collation).
    - `kn`
      - : Siehe [`numeric`](#numeric).
    - `kf`
      - : Siehe [`caseFirst`](#casefirst).

    Diese Schlüssel können auch mit `options` gesetzt werden (wie unten aufgeführt). Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `usage`
      - : Ob der Vergleich zum Sortieren einer Liste von Strings oder zum unscharfen Filtern einer Liste von Strings nach Schlüssel (für das lateinische Skript diakritik-insensitiv und groß-/kleinschreibungsinsensitiv) verwendet wird. Mögliche Werte sind:
        - `"sort"` (Standard)
          - : Zum Sortieren einer Liste von Strings.
        - `"search"`
          - : Zum Filtern einer Liste von Strings, indem jeder Listeneintrag auf eine vollständige Übereinstimmung mit einem Schlüssel getestet wird. Bei der Verwendung von `"search"` sollte der Aufrufer nur darauf achten, ob `compare()` null oder ungleich null zurückgibt und sollte die ungleichen null Rückgabewerte nicht voneinander unterscheiden. Das heißt, es ist unangemessen, `"search"` zum Sortieren/Ordnen zu verwenden.
    - `localeMatcher`
      - : Der Locale Matching-Algorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Für Informationen zu dieser Option, siehe [Locale-Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `collation`
      - : Varianten-Kollationen für bestimmte Locales, wie `"emoji"`, `"pinyin"`, `"stroke"` usw. Hat nur eine Wirkung, wenn `usage` auf `"sort"` gesetzt ist (da `"search"` im Grunde eine eigene Kollationsart ist). Für eine Liste der unterstützten Kollationstypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types); der Standard ist `"default"`. Diese Option kann auch über den `co` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `numeric`
      - : Ob numerische Kollation verwendet werden soll, sodass "1" < "2" < "10". Mögliche Werte sind `true` und `false`; der Standard ist `false`. Diese Option kann auch über den `kn` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `caseFirst`
      - : Ob Großbuchstaben oder Kleinbuchstaben zuerst sortiert werden sollen. Mögliche Werte sind `"upper"`, `"lower"`, und `"false"` (verwenden Sie den Standard der Locale); der Standard ist `"false"`. Diese Option kann auch über den `kf` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `sensitivity`

      - : Welche Unterschiede in den Strings zu nicht-null Ergebniswerten führen sollen. Mögliche Werte sind:

        - `"base"`
          - : Nur Strings, die sich in den Grundbuchstaben unterscheiden, werden als ungleich betrachtet. Beispiele: a ≠ b, a = á, a = A. Im Unicode-Kollationsalgorithmus entspricht dies der primären Stärkeebene.
        - `"accent"`
          - : Nur Strings, die sich in den Grundbuchstaben oder Akzenten und anderen diakritischen Zeichen unterscheiden, werden als ungleich betrachtet. Beispiele: a ≠ b, a ≠ á, a = A. Im Unicode-Kollationsalgorithmus entspricht dies der sekundären Stärkeebene.
        - `"case"`
          - : Nur Strings, die sich in den Grundbuchstaben oder der Groß-/Kleinschreibung unterscheiden, werden als ungleich betrachtet. Beispiele: a ≠ b, a = á, a ≠ A. Im Unicode-Kollationsalgorithmus entspricht dies der primären Stärkeebene mit Berücksichtigung der Groß-/Kleinschreibung.
        - `"variant"`
          - : Strings, die sich in den Grundbuchstaben, Akzenten und anderen diakritischen Zeichen oder der Groß-/Kleinschreibung unterscheiden, werden als ungleich betrachtet. Andere Unterschiede können ebenfalls berücksichtigt werden. Beispiele: a ≠ b, a ≠ á, a ≠ A. Im Unicode-Kollationsalgorithmus entspricht dies der tertiären Stärkeebene.

        Der Standard ist `"variant"` für die Verwendung `"sort"`; es ist localeabhängig für die Verwendung `"search"` laut Spezifikation, aber normalerweise auch `"variant"`. Da die Kernfunktionalität von `"search"` akzentinsensitives und groß-/kleinschreibungsinsensitives Filtern ist, ergibt es am meisten Sinn, es auf `"base"` zu setzen (und vielleicht `"case"`).

    - `ignorePunctuation`
      - : Ob Satzzeichen ignoriert werden sollen. Mögliche Werte sind `true` und `false`. Der Standard ist `true` für Thailändisch (`th`) und `false` für alle anderen Sprachen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel zeigt die verschiedenen möglichen Ergebnisse für einen String, der vor, nach oder auf dem gleichen Niveau wie ein anderer auftritt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass sich die in dem obigen Code gezeigten Ergebnisse zwischen Browsern und Browserversionen unterscheiden können. Dies liegt daran, dass die Werte implementationsspezifisch sind. Das heißt, die Spezifikation verlangt nur, dass die Vorher- und Nachherwerte negativ und positiv sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
