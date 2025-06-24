---
title: Intl.Segmenter() Konstruktor
short-title: Intl.Segmenter()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Intl.Segmenter()`**-Konstruktor erzeugt {{jsxref("Intl.Segmenter")}} Objekte.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter() Konstruktor")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string1 = "Que ma joie demeure";

const iterator1 = segmenterFr.segment(string1)[Symbol.iterator]();

console.log(iterator1.next().value.segment);
// Expected output: 'Que'

console.log(iterator1.next().value.segment);
// Expected output: ' '
```

## Syntax

```js-nolint
new Intl.Segmenter()
new Intl.Segmenter(locales)
new Intl.Segmenter(locales, options)
```

> [!NOTE] > `Intl.Segmenter()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) erstellt werden. Der Versuch, ihn ohne `new` aufzurufen, wirft einen {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Sprach-Identifikatoren. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Sprach-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `granularity`
      - : Wie granulat das Eingabematerial aufgeteilt werden soll. Mögliche Werte sind:
        - `"grapheme"` (Standard)
          - : Teilt das Eingabematerial in Segmente an Graphem-Cluster-Grenzen (vom Benutzer wahrgenommene Zeichen), wie durch die Locale bestimmt.
        - `"word"`
          - : Teilt das Eingabematerial in Segmente an Wortgrenzen, wie durch die Locale bestimmt.
        - `"sentence"`
          - : Teilt das Eingabematerial in Segmente an Satzgrenzen, wie durch die Locale bestimmt.

### Rückgabewert

Eine neue [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) Instanz.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie Wörter in einem String mit der japanischen Sprache gezählt werden (wo das Teilen des Strings mit `String`-Methoden ein falsches Ergebnis ergeben hätte).

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
