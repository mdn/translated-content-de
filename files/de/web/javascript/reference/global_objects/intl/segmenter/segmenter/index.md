---
title: Intl.Segmenter() Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
l10n:
  sourceCommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{JSRef}}

Der **`Intl.Segmenter()`** Konstruktor erstellt {{jsxref("Intl.Segmenter")}} Objekte.

{{EmbedInteractiveExample("pages/js/intl-segmenter.html")}}

## Syntax

```js-nolint
new Intl.Segmenter()
new Intl.Segmenter(locales)
new Intl.Segmenter(locales, options)
```

> **Hinweis:** `Intl.Segmenter()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) erstellt werden. Der Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprachtag oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Sprachbezeichner. Die Standard-Lokalisierung der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder keiner der angegebenen Lokalisierungsbezeichner unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle optional):
    - `localeMatcher`
      - : Der zu verwendende Algorithmus zur Sprachraumübereinstimmung. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Identifikation und Aushandlung des Sprachraums](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `granularity`
      - : Wie fein das Eingabematerial aufgeteilt werden soll. Mögliche Werte sind:
        - `"grapheme"` (Standard)
          - : Teilt das Eingabematerial an den Grenzen der Graphem-Cluster (wie vom Benutzer wahrgenommene Zeichen) unter Berücksichtigung der Sprache auf.
        - `"word"`
          - : Teilt das Eingabematerial an Wortgrenzen unter Berücksichtigung der Sprache auf.
        - `"sentence"`
          - : Teilt das Eingabematerial an Satzgrenzen unter Berücksichtigung der Sprache auf.

### Rückgabewert

Eine neue [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) Instanz.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie man Wörter in einem String auf Japanisch zählt (wo das Aufteilen des Strings mit `String`-Methoden ein falsches Ergebnis geliefert hätte).

```js
const text = "吾輩は猫である。名前はたぬき。";
const japaneseSegmenter = new Intl.Segmenter("ja-JP", { granularity: "word" });
console.log(
  [...japaneseSegmenter.segment(text)].filter((segment) => segment.isWordLike)
    .length,
);
// 8, as the text is segmented as '吾輩'|'は'|'猫'|'で'|'ある'|'。'|'名前'|'は'|'たぬき'|'。'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
