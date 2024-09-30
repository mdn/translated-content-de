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

> **Note:** `Intl.Segmenter()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz oder ein Array solcher Locale-Identifikatoren. Die Standard-Locale der Laufzeit wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Locale-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften, in der Reihenfolge, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Locale-Matching-Algorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Identifizierung und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `granularity`
      - : Wie fein das Eingabematerial gesplittet werden soll. Mögliche Werte sind:
        - `"grapheme"` (Standard)
          - : Teilt die Eingabe in Segmente bei Grapheme-Cluster-Grenzen (vom Benutzer wahrgenommene Zeichen) auf, wie es durch die Locale bestimmt wird.
        - `"word"`
          - : Teilt die Eingabe in Segmente bei Wortgrenzen, wie es durch die Locale bestimmt wird.
        - `"sentence"`
          - : Teilt die Eingabe in Segmente bei Satzgrenzen, wie es durch die Locale bestimmt wird.

### Rückgabewert

Eine neue [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) Instanz.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie man Wörter in einem String mit der japanischen Sprache zählt (wo das Aufteilen des Strings mit `String`-Methoden ein falsches Ergebnis geliefert hätte).

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
