---
title: Intl.Collator() Konstruktor
short-title: Intl.Collator()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
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
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47-Sprach-Tag")}} oder einer {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Sprachbezeichner. Die Standard-Spracheinstellung des Runtimes wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Sprachbezeichner unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind zulässig:
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
      - : Ob der Vergleich zum Sortieren einer Liste von Strings oder für das unscharfe Filtern (für das lateinische Skript diakritisch-unempfindlich und groß-/kleinschreibungsunempfindlich) einer Liste von Strings nach Schlüssel verwendet wird. Mögliche Werte sind:
        - `"sort"` (Standard)
          - : Zum Sortieren einer Liste von Strings.
        - `"search"`
          - : Zum Filtern einer Liste von Strings durch Testen jedes Listenelements auf einen vollständigen Übereinstimmung gegen einen Schlüssel. Mit `"search"` sollte der Aufrufer nur darauf achten, ob `compare()` null oder ungleich null zurückgibt, und sollte die ungleich Null-Ergebnisse nicht untereinander unterscheiden. Das heißt, es ist ungeeignet, `"search"` zum Sortieren/Ordnen zu verwenden.
    - `localeMatcher`
      - : Der Algorithmus zur Lokalisierung, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Sprachidentifikation und -verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `collation`
      - : Variante Sortierungen für bestimmte Sprachen, wie `"emoji"`, `"pinyin"`, `"stroke"`, usw. Hat nur Effekt, wenn `usage` `"sort"` ist (da `"search"` grundsätzlich ein eigener Sortierungstyp ist). Für eine Liste der unterstützten Sortierungstypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types); der Standardwert ist `"default"`. Diese Option kann auch über den `co` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `numeric`
      - : Ob numerische Sortierung verwendet werden soll, so dass "1" < "2" < "10". Mögliche Werte sind `true` und `false`; der Standardwert ist `false`. Diese Option kann auch über den `kn` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `caseFirst`
      - : Ob Großbuchstaben oder Kleinbuchstaben zuerst sortiert werden sollen. Mögliche Werte sind `"upper"`, `"lower"`, und `"false"` (Verwendung des Standardwerts der Sprache); der Standardwert ist `"false"`. Diese Option kann auch über den `kf` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options`-Eigenschaft Vorrang.
    - `sensitivity`
      - : Welche Unterschiede in den Strings zu nicht null Resultatwerten führen sollen. Mögliche Werte sind:
        - `"base"`
          - : Nur Strings, die sich in Basisbuchstaben unterscheiden, vergleichen ungleich. Beispiele: a ≠ b, a = á, a = A. Im Unicode-Sortieralgorithmus entspricht dies dem primären Stärkegrad.
        - `"accent"`
          - : Nur Strings, die sich in Basisbuchstaben oder Akzenten und anderen diakritischen Zeichen unterscheiden, vergleichen ungleich. Beispiele: a ≠ b, a ≠ á, a = A. Im Unicode-Sortieralgorithmus entspricht dies dem sekundären Stärkegrad.
        - `"case"`
          - : Nur Strings, die sich in Basisbuchstaben oder Groß-/Kleinschreibung unterscheiden, vergleichen ungleich. Beispiele: a ≠ b, a = á, a ≠ A. Im Unicode-Sortieralgorithmus entspricht dies dem primären Stärkegrad mit Berücksichtigung der Groß-/Kleinschreibung.
        - `"variant"`
          - : Strings, die sich in Basisbuchstaben, Akzenten und anderen diakritischen Zeichen oder Groß-/Kleinschreibung unterscheiden, vergleichen ungleich. Andere Unterschiede können ebenfalls berücksichtigt werden. Beispiele: a ≠ b, a ≠ á, a ≠ A. Im Unicode-Sortieralgorithmus entspricht dies dem tertiären Stärkegrad.

        Der Standardwert ist `"variant"` für `"sort"`; es ist spezifikationsabhängig für `"search"`, aber normalerweise ebenfalls `"variant"`. Da die Kernfunktionalität von `"search"` akzentunempfindlich und groß-/kleinschreibungsunempfindlich ist, macht es am meisten Sinn, sie auf `"base"` zu setzen (und vielleicht `"case"`).

    - `ignorePunctuation`
      - : Ob Interpunktion ignoriert werden soll. Mögliche Werte sind `true` und `false`. Der Standardwert ist `true` für Thailändisch (`th`) und `false` für alle anderen Sprachen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel demonstriert die unterschiedlichen möglichen Ergebnisse für einen String,
der vor, nach oder auf derselben Stufe wie ein anderer auftritt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die im obigen Code gezeigten Ergebnisse je nach Browser und Browserversion variieren können. Dies liegt daran, dass die Werte implementierungsspezifisch sind. Die Spezifikation erfordert lediglich, dass die Vorher- und Nachherwerte negativ bzw. positiv sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
