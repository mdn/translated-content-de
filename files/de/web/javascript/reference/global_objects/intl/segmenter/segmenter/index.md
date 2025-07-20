---
title: Intl.Segmenter()-Konstruktor
short-title: Intl.Segmenter()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Der **`Intl.Segmenter()`**-Konstruktor erzeugt {{jsxref("Intl.Segmenter")}}-Objekte.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter()-Konstruktor")}}

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
> `Intl.Segmenter()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, löst einen {{jsxref("TypeError")}} aus.

### Parameter

- `locales` {{optional_inline}}
  - : Ein String mit einem BCP 47-Sprachcode oder einer {{jsxref("Intl.Locale")}}-Instanz oder ein Array solcher Gebietsschema-Identifikatoren. Das Standardgebietsschema der Laufzeitumgebung wird verwendet, wenn `undefined` übergeben wird oder wenn keiner der angegebenen Gebietsschema-Identifikatoren unterstützt wird. Für die allgemeine Form und Interpretation des `locales`-Arguments siehe [die Parameterbeschreibung auf der `Intl`-Hauptseite](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).
- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften in der Reihenfolge enthält, in der sie abgerufen werden (alle sind optional):
    - `localeMatcher`
      - : Der zu verwendende Gebietsschema-Abstimmungsalgorithmus. Mögliche Werte sind `"lookup"` und `"best fit"`; der Standardwert ist `"best fit"`. Weitere Informationen zu dieser Option finden Sie unter [Gebietsschema-Identifizierung und -Verhandlung](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation).
    - `granularity`
      - : Wie granulär der Eingabetext aufgeteilt werden soll. Mögliche Werte sind:
        - `"grapheme"` (Standard)
          - : Teilt den Eingabetext in Segmente an den Grenzen der Graphemcluster (vom Benutzer wahrgenommene Zeichen) auf, wie vom Gebietsschema bestimmt.
        - `"word"`
          - : Teilt den Eingabetext in Segmente an Wortgrenzen auf, wie vom Gebietsschema bestimmt.
        - `"sentence"`
          - : Teilt den Eingabetext in Segmente an Satzgrenzen auf, wie vom Gebietsschema bestimmt.

### Rückgabewert

Eine neue [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)-Instanz.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `locales` oder `options` ungültige Werte enthalten.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie man Wörter in einem String auf Japanisch zählt (wobei das Aufteilen des Strings mit `String`-Methoden ein falsches Ergebnis ergeben hätte).

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
