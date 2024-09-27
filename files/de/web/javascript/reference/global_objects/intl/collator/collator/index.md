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

> **Note:** `Intl.Collator()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erstellen eine neue `Intl.Collator` Instanz.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des Arguments `locales` siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

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
      - : Ob der Vergleich für das Sortieren einer Liste von Strings oder für fuzzy (diakritisch-insensitive und groß-/kleinschreibungsinsensitive) Filterung einer Liste von Strings nach Schlüssel erfolgt. Mögliche Werte sind:
        - `"sort"` (Standard)
          - : Zum Sortieren einer Liste von Strings.
        - `"search"`
          - : Zum Filtern einer Liste von Strings, indem jedes Listen-Element auf einen Vollstringvergleich gegen einen Schlüssel getestet wird. Mit `"search"` sollte der Anrufer nur darauf achten, ob `compare()` Null oder einen Nicht-Null-Wert zurückgibt und die Nicht-Null-Rückgabewerte nicht voneinander unterscheiden. Das bedeutet, es ist unpassend, `"search"` zum Sortieren/Reihenfolgen zu verwenden.
    - `localeMatcher`
      - : Der Algorithmus zur Locale-Abstimmung, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standard ist `"best fit"`. Für Informationen über diese Option siehe [Locale-Identifikation und -Aushandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `collation`
      - : Variantenkollationen für bestimmte Locales wie `"emoji"`, `"pinyin"`, `"stroke"`, und so weiter. Für eine Liste der unterstützten Kollationstypen siehe [`Intl.Locale.prototype.getCollations()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations#supported_collation_types); der Standard ist `"default"`. Diese Option kann auch über den `co` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.
    - `numeric`
      - : Ob numerische Kollation verwendet werden soll, so dass "1" < "2" < "10". Mögliche Werte sind `true` und `false`; der Standard ist `false`. Diese Option kann auch über den `kn` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.
    - `caseFirst`
      - : Ob Groß- oder Kleinschreibung zuerst sortiert werden soll. Mögliche Werte sind `"upper"`, `"lower"` und `"false"` (Verwendung des Standards der Locale); der Standard ist `"false"`. Diese Option kann auch über den `kf` Unicode-Erweiterungsschlüssel gesetzt werden; wenn beide bereitgestellt werden, hat diese `options` Eigenschaft Vorrang.
    - `sensitivity`

      - : Welche Unterschiede in den Strings zu Nicht-Null-Ergebniswerten führen sollen. Mögliche Werte sind:

        - `"base"`
          - : Nur Strings, die sich in Grundbuchstaben unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a = A.
        - `"accent"`
          - : Nur Strings, die sich in Grundbuchstaben oder Akzenten und anderen diakritischen Zeichen unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a ≠ á, a = A.
        - `"case"`
          - : Nur Strings, die sich in Grundbuchstaben oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a ≠ A.
        - `"variant"`
          - : Strings, die sich in Grundbuchstaben, Akzenten und anderen diakritischen Zeichen oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Andere Unterschiede können ebenfalls berücksichtigt werden. Beispiele: a ≠ b, a ≠ á, a ≠ A.

        Der Standard ist `"variant"` für Verwendung `"sort"`; es ist laut Spezifikation lokal abhängig für Verwendung `"search"`, aber die Kernfunktionalität von `"search"` ist diakritisch-insensitive und groß-/kleinschreibungsinsensitive Filterung, daher ergibt `"base"` am meisten Sinn (vielleicht auch `"case"`).

    - `ignorePunctuation`
      - : Ob Interpunktion ignoriert werden soll. Mögliche Werte sind `true` und `false`. Der Standard ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel zeigt die verschiedenen möglichen Ergebnisse für einen String,
der vor, nach oder auf dem gleichen Niveau wie ein anderer auftritt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass die im obigen Code gezeigten Ergebnisse zwischen Browsern und Browser-Versionen variieren können. Das liegt daran, dass die Werte implementierungsspezifisch sind. Das heißt, die Spezifikation verlangt nur, dass die Vorher- und Nachher-Werte negativ bzw. positiv sind.

Wenn die Verwendung `"search"` ist, sollte der Anrufer nur darauf achten, ob der Rückgabewert von `compare()` Null oder Nicht-Null ist. Es ist unpassend, einen `Collator` mit Verwendung `"search"` zum Sortieren zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
