---
title: <mi>
slug: Web/MathML/Element/mi
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<mi>`** [MathML](/de/docs/Web/MathML)-Element gibt an, dass der Inhalt als ein **Identifier** gerendert werden soll, zum Beispiel ein Funktionsname, eine Variable oder eine symbolische Konstante.

Standardmäßig werden `<mi>`-Elemente mit mehreren Zeichen als normaler Text angezeigt, während Zeichen mit nur einem Zeichen kursiv dargestellt werden: dasselbe Formatierungsverhalten wie die [CSS `text-transform`](/de/docs/Web/CSS/text-transform)-Eigenschaft mit dem Wert `math-auto`.
Das `mathvariant`-Attribut mit dem Wert `normal` kann verwendet werden, um ein einzelnes Zeichen wieder auf die normale Schriftart zurückzusetzen.

Um eine bestimmte Form eines Zeichens zu verwenden, wie fett/kursiv, Serif, Sans-Serif, Schreibschrift/Kalligrafie, Monospace, Doppelstrich usw., sollten Sie die entsprechenden [Mathematischen Alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

> [!NOTE]
> In einer früheren Spezifikation (MathML3) wurde das `mathvariant`-Attribut verwendet, um logische Klassen zu definieren, die die Zeichenformatierung für mathematische alphanumerische Symbole anwenden konnten.
> Die zugehörigen Werte sind jetzt veraltet und sollen in zukünftigen Browserversionen entfernt werden.

## Attribute

- `mathvariant`

  - : Der einzige Wert, der in der aktuellen Spezifikation erlaubt ist, ist `normal` (Groß-/Kleinschreibung wird nicht beachtet):

    - `normal`
      - : Verwenden Sie die Standard-/normale Darstellung, entfernen Sie die automatische Kursivformatierung einzelner Zeichen.

    Veraltete ältere Werte sind:

    - `bold` {{deprecated_inline}}
      - : Versuchen Sie, fette Zeichen zu verwenden, z. B. "𝐀".
    - `italic` {{deprecated_inline}}
      - : Versuchen Sie, kursive Zeichen zu verwenden, z. B. "𝐴".
    - `bold-italic` {{deprecated_inline}}
      - : Versuchen Sie, fett-kursive Zeichen zu verwenden, z. B. "𝑨".
    - `double-struck` {{deprecated_inline}}
      - : Versuchen Sie, doppelt gestrichene Zeichen zu verwenden, z. B. "𝔸".
    - `bold-fraktur` {{deprecated_inline}}
      - : Versuchen Sie, fett-frakturierte Zeichen zu verwenden, z. B. "𝕬".
    - `script` {{deprecated_inline}}
      - : Versuchen Sie, Schreibschriftzeichen zu verwenden, z. B. "𝒜".
    - `bold-script` {{deprecated_inline}}
      - : Versuchen Sie, fette Schreibschriftzeichen zu verwenden, z. B. "𝓐".
    - `fraktur` {{deprecated_inline}}
      - : Versuchen Sie, Frakturschriftzeichen zu verwenden, z. B. "𝔄".
    - `sans-serif` {{deprecated_inline}}
      - : Versuchen Sie, serifenlose Zeichen zu verwenden, z. B. "𝖠".
    - `bold-sans-serif` {{deprecated_inline}}
      - : Versuchen Sie, fett-serifenlose Zeichen zu verwenden, z. B. "𝗔".
    - `sans-serif-italic` {{deprecated_inline}}
      - : Versuchen Sie, serifenlose kursive Zeichen zu verwenden, z. B. "𝘈".
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : Versuchen Sie, serifenlose fett-kursive Zeichen zu verwenden, z. B. "𝘼".
    - `monospace` {{deprecated_inline}}
      - : Versuchen Sie, Monospace-Zeichen zu verwenden, z. B. "𝙰".
    - `initial` {{deprecated_inline}}
      - : Versuchen Sie, Initialzeichen zu verwenden, z. B. "𞸢".
    - `tailed` {{deprecated_inline}}
      - : Versuchen Sie, Zeichen mit einem Schweif zu verwenden, z. B. "𞹂".
    - `looped` {{deprecated_inline}}
      - : Versuchen Sie, geschlungene Zeichen zu verwenden, z. B. "𞺂".
    - `stretched` {{deprecated_inline}}
      - : Versuchen Sie, gedehnte Zeichen zu verwenden, z. B. "𞹢".

Dieses Element akzeptiert auch die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiele

```html
<math display="block">
  <!-- Multiple characters render as "normal" text -->
  <mi>sin</mi>
</math>
<hr />
<math display="block">
  <!-- Single characters render as italic by default (i.e. "A" renders as "𝐴") -->
  <mi>A</mi>
</math>
<hr />
<math display="block">
  <!-- Use mathvariant="normal" to make single character render as normal text -->
  <mi mathvariant="normal">F</mi>
</math>
<hr />
<math display="block">
  <!-- To use a specific variant, such as "B" in Fraktur -->
  <mi>𝔅</mi>
</math>
```

{{ EmbedLiveSample('mi_example', 400, 100) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
