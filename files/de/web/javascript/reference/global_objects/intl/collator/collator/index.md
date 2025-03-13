---
title: Intl.Collator() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
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

> **Note:** `Intl.Collator()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue Instanz von `Intl.Collator`.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprachtag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Sprachkennungen. Die Standard-Lokale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Sprachkennungen unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `co`
      - : Siehe [`collation`](#collation).
    - `kn`
      - : Siehe [`numeric`](#numeric).
    - `kf`
      - : Siehe [`caseFirst`](#casefirst).

    Diese Schlüssel können auch mit `options` gesetzt werden (wie unten aufgeführt). Wenn beide gesetzt sind, hat die `options`-Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `usage`
      - : Ob der Vergleich zum Sortieren einer Liste von Strings oder zum verschwommenen (für das lateinische Schriftsystem diakritik- und groß-/kleinschreibungsempfindlichen) Filtern einer Liste von Strings nach Schlüssel dient. Mögliche Werte sind:
        - `"sort"` (Standard)
          - : Zum Sortieren einer Liste von Strings.
        - `"search"`
          - : Zum Filtern einer Liste von Strings, indem jedes Listenelement auf eine vollständige Übereinstimmung mit einem Schlüssel getestet wird. Bei `"search"` sollte der Aufrufer nur darauf achten, ob `compare()` Null oder Nicht-Null zurückgibt und nicht zwischen den Nicht-Null-Rückgabewerten unterscheiden. Es ist unangemessen, `"search"` zum Sortieren/Reihenfolgen zu verwenden.
    - `localeMatcher`
      - : Der zu verwendende Lokalisierungs-Abgleichsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; die Standardoption ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Lokalisierungs-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `collation`
      - : Variantenkollationen für bestimmte Lokalisierungen, wie zum Beispiel `"emoji"`, `"pinyin"`, `"stroke"` und so weiter. Hat nur dann eine Wirkung, wenn `usage` `"sort"` ist (da `"search"` im Grunde ein eigener Kollationstyp ist). Für eine Liste der unterstützten Kollationstypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types); die Standardoption ist `"default"`. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `co` gesetzt werden; wenn beide bereitgestellt werden, hat diese `options`-Eigenschaft Vorrang.
    - `numeric`
      - : Ob eine numerische Kollation verwendet werden soll, sodass "1" < "2" < "10". Mögliche Werte sind `true` und `false`; die Standardeinstellung ist `false`. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `kn` gesetzt werden; wenn beide bereitgestellt werden, hat diese `options`-Eigenschaft Vorrang.
    - `caseFirst`
      - : Ob Großbuchstaben oder Kleinbuchstaben zuerst sortiert werden sollen. Mögliche Werte sind `"upper"`, `"lower"` und `"false"` (Verwendung des Standardwerts der Lokalisierung); die Standardeinstellung ist `"false"`. Diese Option kann auch über den Unicode-Erweiterungsschlüssel `kf` gesetzt werden; wenn beide bereitgestellt werden, hat diese `options`-Eigenschaft Vorrang.
    - `sensitivity`

      - : Welche Unterschiede in den Strings zu nicht-null Ergebniswerten führen sollen. Mögliche Werte sind:

        - `"base"`
          - : Nur Strings, die sich in Grundbuchstaben unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a = A. Im Unicode-Kollation-Algorithmus entspricht dies der primären Stärkestufe.
        - `"accent"`
          - : Nur Strings, die sich in Grundbuchstaben oder Akzenten und anderen diakritischen Zeichen unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a ≠ á, a = A. Im Unicode-Kollation-Algorithmus entspricht dies der sekundären Stärkestufe.
        - `"case"`
          - : Nur Strings, die sich in Grundbuchstaben oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a ≠ A. Im Unicode-Kollation-Algorithmus entspricht dies der primären Stärkestufe mit Groß-/Kleinschreibungsbehandlung.
        - `"variant"`
          - : Strings, die sich in Grundbuchstaben, Akzenten und anderen diakritischen Zeichen oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Andere Unterschiede können ebenfalls berücksichtigt werden. Beispiele: a ≠ b, a ≠ á, a ≠ A. Im Unicode-Kollation-Algorithmus entspricht dies der tertiären Stärkestufe.

        Die Standardeinstellung ist `"variant"` für `usage` `"sort"`; für `usage` `"search"` ist es je nach Spezifikation lokalisierungsabhängig, aber normalerweise auch `"variant"`. Da die Kernfunktionalität von `"search"` akzent- und groß-/kleinschreibungsempfindliches Filtern ist, macht es am meisten Sinn, es auf `"base"` (und vielleicht `"case"`) zu setzen.

    - `ignorePunctuation`
      - : Ob Satzzeichen ignoriert werden sollen. Mögliche Werte sind `true` und `false`. Die Standardeinstellung ist `true` für Thailändisch (`th`) und `false` für alle anderen Sprachen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel zeigt die unterschiedlichen möglichen Ergebnisse für einen String, der vor, nach oder auf derselben Ebene wie ein anderer auftreten kann:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die oben im Code gezeigten Ergebnisse zwischen Browsern und Browserversionen variieren können. Dies liegt daran, dass die Werte implementierungsspezifisch sind. Das heißt, die Spezifikation verlangt nur, dass die Vorher- und Nachher-Werte negativ bzw. positiv sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
