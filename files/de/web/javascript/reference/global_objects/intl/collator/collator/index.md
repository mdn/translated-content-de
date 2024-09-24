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

> **Note:** `Intl.Collator()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Intl.Collator` Instanz.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder einer {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Folgende Unicode-Erweiterungsschlüssel sind erlaubt:

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
      - : Ob der Vergleich zum Sortieren einer Liste von Strings oder für unscharfe (für das lateinische Skript diakritik- und groß-/kleinschreibungsunabhängige) Filterung einer Liste von Strings nach Schlüssel erfolgt. Mögliche Werte sind:
        - `"sort"` (Standard)
          - : Zum Sortieren einer Liste von Strings.
        - `"search"`
          - : Zum Filtern einer Liste von Strings durch Prüfung jedes Listenpunktes auf vollständige Übereinstimmung mit einem Schlüssel. Bei `"search"` sollte der Aufrufer nur darauf achten, ob `compare()` Null oder ungleich Null zurückgibt, und sollte die ungleich Null Rückgabewerte nicht voneinander unterscheiden. Es ist unangebracht, `"search"` zum Sortieren/Ordnen zu verwenden.
    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifikation und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `collation`
      - : Varianten-Kollationen für bestimmte Locales, wie `"emoji"`, `"pinyin"`, `"stroke"`, usw. Für eine Liste von unterstützten Kollationstypen siehe [`Intl.Locale.prototype.getCollations()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations#supported_collation_types); der Standard ist `"default"`. Diese Option kann auch über den `co` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `numeric`
      - : Ob numerischer Vergleich verwendet werden soll, so dass "1" < "2" < "10". Mögliche Werte sind `true` und `false`; der Standard ist `false`. Diese Option kann auch über den `kn` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `caseFirst`
      - : Ob Großbuchstaben oder Kleinbuchstaben zuerst sortiert werden sollen. Mögliche Werte sind `"upper"`, `"lower"` und `"false"` (verwende das Standardschema der Locale); der Standard ist `"false"`. Diese Option kann auch über den `kf` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `sensitivity`

      - : Welche Unterschiede in den Strings zu ungleichem Rückgabewerten führen sollen. Mögliche Werte sind:

        - `"base"`
          - : Nur Strings, die sich in Basisbuchstaben unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a = A.
        - `"accent"`
          - : Nur Strings, die sich in Basisbuchstaben oder Akzenten und anderen diakritischen Zeichen unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a ≠ á, a = A.
        - `"case"`
          - : Nur Strings, die sich in Basisbuchstaben oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a ≠ A.
        - `"variant"`
          - : Strings, die sich in Basisbuchstaben, Akzenten und anderen diakritischen Zeichen oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Andere Unterschiede können ebenfalls berücksichtigt werden. Beispiele: a ≠ b, a ≠ á, a ≠ A.

        Der Standard ist `"variant"` für Verwendung `"sort"`; es ist lokalabhängig für Verwendung `"search"` gemäß Spezifikation, aber die Kernfunktionalität von `"search"` ist akzentunabhängiges und groß-/kleinschreibungsunabhängiges Filtern, so dass `"base"` am sinnvollsten erscheint (und vielleicht `"case"`).

    - `ignorePunctuation`
      - : Ob Satzzeichen ignoriert werden sollen. Mögliche Werte sind `true` und `false`. Der Standard ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel zeigt die unterschiedlichen möglichen Ergebnisse, wenn ein String
vor, nach oder auf dem gleichen Level wie ein anderer auftritt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1 oder ein anderer negativer Wert
console.log(new Intl.Collator().compare("c", "a")); // 1 oder ein anderer positiver Wert
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die oben gezeigten Ergebnisse zwischen verschiedenen Browsern und Browserversionen variieren können. Dies liegt daran, dass die Werte implementierungsspezifisch sind. Das bedeutet, dass die Spezifikation nur verlangt, dass die Vor- und Nachwerte negativ bzw. positiv sind.

Wenn die Verwendung `"search"` ist, sollte der Aufrufer nur darauf achten, ob der Rückgabewert von `compare()` Null oder ungleich Null ist. Es ist unangebracht, einen `Collator` mit Verwendung `"search"` zum Sortieren zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
