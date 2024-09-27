---
title: <mi>
slug: Web/MathML/Element/mi
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<mi>`** [MathML](/de/docs/Web/MathML)-Element zeigt an, dass der Inhalt als ein **Bezeichner** gerendert werden sollte, wie z.B. ein Funktionsname, eine Variable oder eine symbolische Konstante.

Standardmäßig werden `<mi>`-Elemente, die mehrere Zeichen enthalten, als normaler Text gerendert, während einzelzeichen Zeichen kursiv gerendert werden: dasselbe Formatverhalten wie die [CSS `text-transform`](/de/docs/Web/CSS/text-transform)-Eigenschaft mit dem Wert `math-auto`.
Das `mathvariant`-Attribut mit dem Wert `normal` kann verwendet werden, um ein einzelnes Zeichen auf die normale Schrift zurückzusetzen.

Um eine bestimmte Form eines Zeichens wie fett/kursiv, serifenlos, script/kalligraphisch, monospaced, doppelstrichig usw. zu verwenden, sollten Sie die entsprechenden [Mathematischen Alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

> [!NOTE]
> In einer früheren Spezifikation (MathML3) wurde das `mathvariant`-Attribut verwendet, um logische Klassen zu definieren, die das Zeichenformat für mathematische alphanumerische Symbole anwenden konnten. Die zugehörigen Werte sind jetzt veraltet und werden voraussichtlich in zukünftigen Browserversionen entfernt.

## Attribute

- `mathvariant`

  - : Der einzige im aktuellen Spezifikation zugelassene Wert ist `normal` (nicht fallabhängig):

    - `normal`
      - : Standard-/Normales Rendering verwenden, das automatische Styling einzelner Zeichen zu Kursiv entfernen.

    Veraltete Werte sind:

    - `bold` {{deprecated_inline}}
      - : Versuchen Sie, fette Zeichen zu verwenden, z.B. "𝐀".
    - `italic` {{deprecated_inline}}
      - : Versuchen Sie, kursive Zeichen zu verwenden, z.B. "𝐴".
    - `bold-italic` {{deprecated_inline}}
      - : Versuchen Sie, fett-kursive Zeichen zu verwenden, z.B. "𝑨".
    - `double-struck` {{deprecated_inline}}
      - : Versuchen Sie, doppelstrichige Zeichen zu verwenden, z.B. "𝔸".
    - `bold-fraktur` {{deprecated_inline}}
      - : Versuchen Sie, fett-Fraktur-Zeichen zu verwenden, z.B. "𝕬".
    - `script` {{deprecated_inline}}
      - : Versuchen Sie, Script-Zeichen zu verwenden, z.B. "𝒜".
    - `bold-script` {{deprecated_inline}}
      - : Versuchen Sie, fett-Script-Zeichen zu verwenden, z.B. "𝓐".
    - `fraktur` {{deprecated_inline}}
      - : Versuchen Sie, Fraktur-Zeichen zu verwenden, z.B. "𝔄".
    - `sans-serif` {{deprecated_inline}}
      - : Versuchen Sie, serifenlose Zeichen zu verwenden, z.B. "𝖠".
    - `bold-sans-serif` {{deprecated_inline}}
      - : Versuchen Sie, fett-serifenlose Zeichen zu verwenden, z.B. "𝗔".
    - `sans-serif-italic` {{deprecated_inline}}
      - : Versuchen Sie, serifenlose-kursive Zeichen zu verwenden, z.B. "𝘈".
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : Versuchen Sie, serifenlose-fett-kursive Zeichen zu verwenden, z.B. "𝘼".
    - `monospace` {{deprecated_inline}}
      - : Versuchen Sie, Monospace-Zeichen zu verwenden, z.B. "𝙰".
    - `initial` {{deprecated_inline}}
      - : Versuchen Sie, Initialzeichen zu verwenden, z.B. "𞸢".
    - `tailed` {{deprecated_inline}}
      - : Versuchen Sie, Zeichen mit Schwanz zu verwenden, z.B. "𞹂".
    - `looped` {{deprecated_inline}}
      - : Versuchen Sie, geschlungene Zeichen zu verwenden, z.B. "𞺂".
    - `stretched` {{deprecated_inline}}
      - : Versuchen Sie, gestreckte Zeichen zu verwenden, z.B. "𞹢".

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
