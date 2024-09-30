---
title: Intl.Collator() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
l10n:
  sourceCommit: 3bafaa475155dba11f4e5e3aff7790b3ade3edb4
---

{{JSRef}}

Der **`Intl.Collator()`** Konstruktor erstellt {{jsxref("Intl.Collator")}} Objekte.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

## Syntax

```js-nolint
new Intl.Collator()
new Intl.Collator(locales)
new Intl.Collator(locales, options)

Intl.Collator()
Intl.Collator(locales)
Intl.Collator(locales, options)
```

> **Note:** `Intl.Collator()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beides erzeugt eine neue `Intl.Collator` Instanz.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Sprachkennungen. Die Standard-Lokale des Laufzeitsystems wird verwendet, wenn `undefined` übergeben wird oder wenn keine der angegebenen Sprachkennungen unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `co`
      - : Siehe [`collation`](#collation).
    - `kn`
      - : Siehe [`numeric`](#numeric).
    - `kf`
      - : Siehe [`caseFirst`](#casefirst).

    Diese Schlüssel können auch mit `options` festgelegt werden (wie unten aufgeführt). Wenn beide gesetzt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `usage`
      - : Ob der Vergleich für das Sortieren einer Liste von Zeichenfolgen oder für unscharfe (für das lateinische Skript diakritisch insensitive und groß-/kleinschreibung-ignorierende) Filterung einer Liste von Zeichenfolgen nach Schlüssel ist. Mögliche Werte sind:
        - `"sort"` (Standard)
          - : Zum Sortieren einer Liste von Zeichenfolgen.
        - `"search"`
          - : Zum Filtern einer Liste von Zeichenfolgen durch Testen jedes Listenelements auf eine vollständige Übereinstimmung mit einem Schlüssel. Mit `"search"` sollte der Anrufer nur darauf achten, ob `compare()` Null oder Nicht-Null zurückgibt und sollte die Nicht-Null-Rückgabewerte nicht unterscheiden. Das bedeutet, dass es unangemessen ist, `"search"` für das Sortieren/Anordnen zu verwenden.
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zur Übereinstimmung von Lokalen. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Für Informationen über diese Option siehe [Lokale Identifizierung und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `collation`
      - : Varianten-Kollationen für bestimmte Lokale, wie `"emoji"`, `"pinyin"`, `"stroke"` usw. Für eine Liste der unterstützten Kollationstypen siehe [`Intl.Locale.prototype.getCollations()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations#supported_collation_types); der Standard ist `"default"`. Diese Option kann auch durch den `co` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `numeric`
      - : Ob numerische Kollation verwendet werden soll, so dass "1" < "2" < "10". Mögliche Werte sind `true` und `false`; der Standard ist `false`. Diese Option kann auch durch den `kn` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `caseFirst`
      - : Ob Großbuchstaben oder Kleinbuchstaben zuerst sortiert werden sollen. Mögliche Werte sind `"upper"`, `"lower"` und `"false"` (Verwendung des Standardwertes des Lokals); der Standard ist `"false"`. Diese Option kann auch durch den `kf` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `sensitivity`

      - : Welche Unterschiede in den Zeichenfolgen zu Nicht-Null-Ergebnissen führen sollen. Mögliche Werte sind:

        - `"base"`
          - : Nur Zeichenfolgen, die sich in Basisbuchstaben unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a = A.
        - `"accent"`
          - : Nur Zeichenfolgen, die sich in Basisbuchstaben oder Akzenten und anderen diakritischen Zeichen unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a ≠ á, a = A.
        - `"case"`
          - : Nur Zeichenfolgen, die sich in Basisbuchstaben oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a ≠ A.
        - `"variant"`
          - : Zeichenfolgen, die sich in Basisbuchstaben, Akzenten und anderen diakritischen Zeichen oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Weitere Unterschiede können ebenfalls berücksichtigt werden. Beispiele: a ≠ b, a ≠ á, a ≠ A.

        Der Standard ist `"variant"` für die Verwendung `"sort"`; es ist lokalabhängig für die Verwendung `"search"` gemäß Spezifikation, aber die Kernfunktion von `"search"` ist die accent-insensitive und case-insensitive Filterung, daher ergibt `"base"` am meisten Sinn (und vielleicht `"case"`).

    - `ignorePunctuation`
      - : Ob Interpunktion ignoriert werden soll. Mögliche Werte sind `true` und `false`. Der Standard ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel demonstriert die unterschiedlichen potenziellen Ergebnisse, wenn ein String vor, nach oder auf demselben Level wie ein anderer vorkommt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die in dem obigen Code gezeigten Ergebnisse zwischen Browsern und Browserversionen variieren können. Das liegt daran, dass die Werte spezifisch für die Implementierung sind. Das bedeutet, dass die Spezifikation nur erfordert, dass die Werte vor und nach negativ beziehungsweise positiv sind.

Wenn die Verwendung `"search"` ist, sollte der Anrufer nur darauf achten, ob der Rückgabewert von `compare()` Null oder Nicht-Null ist. Es ist unangemessen, einen `Collator` mit der Verwendung `"search"` zum Sortieren zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
