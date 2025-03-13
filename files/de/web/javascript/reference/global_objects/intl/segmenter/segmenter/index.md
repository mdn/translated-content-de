---
title: Intl.Segmenter()-Konstruktor
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Der **`Intl.Segmenter()`**-Konstruktor erstellt {{jsxref("Intl.Segmenter")}}-Objekte.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter() constructor")}}

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

> **Hinweis:** `Intl.Segmenter()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Ein Versuch, es ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47 Sprach-Tag oder eine {{jsxref("Intl.Locale")}} Instanz, oder ein Array solcher Sprach-Identifikatoren. Die Standard-Locale des Laufzeitsystems wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Sprach-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl` Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften in der Reihenfolge ihrer Abfrage enthält (alle sind optional):
    - `localeMatcher`
      - : Der Locale-Vergleichsalgorithmus, der verwendet werden soll. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Für Informationen zu dieser Option siehe [Locale-Erkennung und Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `granularity`
      - : Wie granular der Eingabetext aufgeteilt werden soll. Mögliche Werte sind:
        - `"grapheme"` (Standard)
          - : Teilt den Eingabetext an den Grenzen von Grapheme-Clustern (von Benutzern wahrgenommene Zeichen), wie durch die Locale bestimmt.
        - `"word"`
          - : Teilt den Eingabetext an Wortgrenzen, wie durch die Locale bestimmt.
        - `"sentence"`
          - : Teilt den Eingabetext an Satzgrenzen, wie durch die Locale bestimmt.

### Rückgabewert

Eine neue [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)-Instanz.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie man mit der japanischen Sprache Wörter in einem String zählt (wobei das Aufteilen des Strings mit `String`-Methoden ein falsches Ergebnis geliefert hätte).

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
