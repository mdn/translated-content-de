---
title: Intl.Collator() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator
l10n:
  sourceCommit: 537aeae8ea6f3f080941261af7229dba30f791ac
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

> **Hinweis:** `Intl.Collator()` kann mit oder ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Beide erzeugen eine neue `Intl.Collator` Instanz.

### Parameter

- `locales` {{optional_inline}}

  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Gebietsschema-Bezeichner. Das Standard-Gebietsschema der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Gebietsschema-Bezeichner unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments, siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).

    Die folgenden Unicode-Erweiterungsschlüssel sind erlaubt:

    - `co`
      - : Siehe [`collation`](#collation).
    - `kn`
      - : Siehe [`numeric`](#numeric).
    - `kf`
      - : Siehe [`caseFirst`](#casefirst).

    Diese Schlüssel können auch mit `options` (wie unten aufgeführt) eingestellt werden. Wenn beide eingestellt sind, hat die `options` Eigenschaft Vorrang.

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):

    - `usage`
      - : Ob der Vergleich zum Sortieren einer Liste von Zeichenfolgen oder zum unscharfen Filtern (für das lateinische Skript diakritisch-unempfindlich und groß-kleinschreibungsunempfindlich) einer Liste von Zeichenfolgen nach Schlüssel gedacht ist. Mögliche Werte sind:
        - `"sort"` (Standard)
          - : Zum Sortieren einer Liste von Zeichenfolgen.
        - `"search"`
          - : Zum Filtern einer Liste von Zeichenfolgen, indem jedes Listenelement auf eine ganze-String-Übereinstimmung mit einem Schlüssel getestet wird. Bei `"search"` sollte der Aufrufer nur darauf achten, ob `compare()` null oder ungleich null zurückgibt, und sollte die ungleichen null Rückgabewerte nicht voneinander unterscheiden. Das heißt, es ist unangebracht, `"search"` zum Sortieren/Anordnen zu verwenden.
    - `localeMatcher`
      - : Der zu verwendende Sprachabgleich-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Sprachidentifikation und -verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `collation`
      - : Varianten-Kollationen für bestimmte Gebiete, wie `"emoji"`, `"pinyin"`, `"stroke"`, und so weiter. Für eine Liste der unterstützten Kollationstypen siehe [`Intl.supportedValuesOf()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf#supported_collation_types); der Standardwert ist `"default"`. Diese Option kann auch über den `co` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `numeric`
      - : Ob numerische Sortierung verwendet werden soll, sodass "1" < "2" < "10". Mögliche Werte sind `true` und `false`; der Standardwert ist `false`. Diese Option kann auch über den `kn` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `caseFirst`
      - : Ob Groß- oder Kleinschreibung zuerst sortiert werden sollte. Mögliche Werte sind `"upper"`, `"lower"`, und `"false"` (verwendet den Standard des Gebietsschemas); der Standardwert ist `"false"`. Diese Option kann auch über den `kf` Unicode-Erweiterungsschlüssel festgelegt werden; wenn beide angegeben sind, hat diese `options` Eigenschaft Vorrang.
    - `sensitivity`

      - : Welche Unterschiede in den Zeichenfolgen zu einem ungleich null Ergebnis führen sollen. Mögliche Werte sind:

        - `"base"`
          - : Nur Zeichenfolgen, die sich in Grundbuchstaben unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a = A.
        - `"accent"`
          - : Nur Zeichenfolgen, die sich in Grundbuchstaben, Akzenten und anderen diakritischen Zeichen unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a ≠ á, a = A.
        - `"case"`
          - : Nur Zeichenfolgen, die sich in Grundbuchstaben oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Beispiele: a ≠ b, a = á, a ≠ A.
        - `"variant"`
          - : Zeichenfolgen, die sich in Grundbuchstaben, Akzenten und anderen diakritischen Zeichen oder Groß-/Kleinschreibung unterscheiden, werden als ungleich verglichen. Andere Unterschiede können ebenfalls in Betracht gezogen werden. Beispiele: a ≠ b, a ≠ á, a ≠ A.

        Der Standardwert ist `"variant"` für `"sort"`; es ist gemäß Spezifikation sprachabhängig für `"search"`, aber die grundlegende Funktionalität von `"search"` ist akzent-unempfindliches und groß-kleinschreibungsunempfindliches Filtern, sodass `"base"` am sinnvollsten ist (und vielleicht `"case"`).

    - `ignorePunctuation`
      - : Ob Interpunktion ignoriert werden soll. Mögliche Werte sind `true` und `false`. Der Standardwert ist `true` für Thai (`th`) und `false` für alle anderen Sprachen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Werden ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Verwendung von Collator

Das folgende Beispiel zeigt die unterschiedlichen möglichen Ergebnisse für eine Zeichenfolge, die vor, nach oder auf derselben Ebene wie eine andere vorkommt:

```js
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Beachten Sie, dass sich die im Code oben gezeigten Ergebnisse zwischen Browsern und Browserversionen unterscheiden können. Dies liegt daran, dass die Werte implementationsspezifisch sind. Die Spezifikation erfordert nur, dass die Vor- und Nach-Werte negativ bzw. positiv sind.

Wenn die Verwendung `"search"` ist, sollte der Aufrufer nur darauf achten, ob der Rückgabewert von `compare()` null oder ungleich null ist. Es ist unangebracht, einen `Collator` mit der Verwendung `"search"` zum Sortieren zu verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Collator")}}
- {{jsxref("Intl")}}
