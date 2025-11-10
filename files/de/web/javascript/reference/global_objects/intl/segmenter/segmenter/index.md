---
title: Intl.Segmenter() Konstruktor
short-title: Intl.Segmenter()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Der **`Intl.Segmenter()`** Konstruktor erstellt {{jsxref("Intl.Segmenter")}} Objekte.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter() Konstruktor")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

console.log(iterator.next().value.segment);
// Expected output: 'Que'

console.log(iterator.next().value.segment);
// Expected output: ' '
```

## Syntax

```js-nolint
new Intl.Segmenter()
new Intl.Segmenter(locales)
new Intl.Segmenter(locales, options)
```

> [!NOTE]
> `Intl.Segmenter()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} oder einer {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales` Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Locale-Abgleichalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Informationen zu dieser Option finden Sie unter [Locale-Identifikation und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `granularity`
      - : Wie granular die Eingabe aufgeteilt werden soll. Mögliche Werte sind:
        - `"grapheme"` (Standard)
          - : Teilt die Eingabe in Segmente an Graphem-Cluster-Grenzen (benutzerwahrgenommenes Zeichen) auf, wie von der Locale bestimmt.
        - `"word"`
          - : Teilt die Eingabe in Segmente an Wortgrenzen auf, wie von der Locale bestimmt.
        - `"sentence"`
          - : Teilt die Eingabe in Segmente an Satzgrenzen auf, wie von der Locale bestimmt.

### Rückgabewert

Eine neue Instanz von [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie man Wörter in einem String in der japanischen Sprache zählt (wo das Aufteilen des Strings mit `String` Methoden ein falsches Ergebnis geliefert hätte).

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
