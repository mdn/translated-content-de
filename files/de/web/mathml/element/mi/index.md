---
title: <mi>
slug: Web/MathML/Element/mi
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<mi>`** [MathML](/de/docs/Web/MathML)-Element gibt an, dass der Inhalt als **Bezeichner** gerendert werden soll, wie z.B. ein Funktionsname, eine Variable oder eine symbolische Konstante.

Standardmäßig werden `<mi>`-Elemente, die mehrere Zeichen enthalten, als normaler Text dargestellt, während einzelne Zeichen kursiv gerendert werden: Das gleiche Formatierungsverhalten wie die CSS-Eigenschaft [`text-transform`](/de/docs/Web/CSS/text-transform) mit dem Wert `math-auto`. Das `mathvariant`-Attribut mit dem Wert `normal` kann verwendet werden, um ein einzelnes Zeichen auf die normale Schriftart zurückzusetzen.

Um eine bestimmte Form eines Zeichens wie fett/kursiv, Serif, Serif ohne Serifen, Schreibschrift/Kalligraphie, Monospace, Doppelstrich usw. zu verwenden, sollten Sie die entsprechenden [Mathematischen Alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

> [!NOTE]
> In einer früheren Spezifikation (MathML3) wurde das `mathvariant`-Attribut verwendet, um logische Klassen zu definieren, die die Zeichenformatierung für mathematische alphanumerische Symbole anwenden konnten. Die zugehörigen Werte sind nun veraltet und sollen in zukünftigen Browser-Releases entfernt werden.

## Attribute

- `mathvariant`

  - : Der einzige in der aktuellen Spezifikation erlaubte Wert ist `normal` (Groß-/Kleinschreibung wird nicht beachtet):

    - `normal`
      - : Verwendung der Standard-/normalen Darstellung, wobei die automatische Kursivdarstellung von Einzelzeichen entfernt wird.

    Veraltete Werte sind:

    - `bold` {{deprecated_inline}}
      - : Versuch, fette Zeichen zu verwenden, z.B. "𝐀".
    - `italic` {{deprecated_inline}}
      - : Versuch, kursive Zeichen zu verwenden, z.B. "𝐴".
    - `bold-italic` {{deprecated_inline}}
      - : Versuch, fett-kursive Zeichen zu verwenden, z.B. "𝑨".
    - `double-struck` {{deprecated_inline}}
      - : Versuch, Doppelstrich-Zeichen zu verwenden, z.B. "𝔸".
    - `bold-fraktur` {{deprecated_inline}}
      - : Versuch, fett-gebrochene Zeichen zu verwenden, z.B. "𝕬".
    - `script` {{deprecated_inline}}
      - : Versuch, geschriebene Zeichen zu verwenden, z.B. "𝒜".
    - `bold-script` {{deprecated_inline}}
      - : Versuch, fett-geschriebene Zeichen zu verwenden, z.B. "𝓐".
    - `fraktur` {{deprecated_inline}}
      - : Versuch, gebrochene Zeichen zu verwenden, z.B. "𝔄".
    - `sans-serif` {{deprecated_inline}}
      - : Versuch, serifenlose Zeichen zu verwenden, z.B. "𝖠".
    - `bold-sans-serif` {{deprecated_inline}}
      - : Versuch, fett-serifenlose Zeichen zu verwenden, z.B. "𝗔".
    - `sans-serif-italic` {{deprecated_inline}}
      - : Versuch, serifenlose-kursive Zeichen zu verwenden, z.B. "𝘈".
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : Versuch, serifenlose-fett-kursive Zeichen zu verwenden, z.B. "𝘼".
    - `monospace` {{deprecated_inline}}
      - : Versuch, Monospace-Zeichen zu verwenden, z.B. "𝙰".
    - `initial` {{deprecated_inline}}
      - : Versuch, Initialzeichen zu verwenden, z.B. "𞸢".
    - `tailed` {{deprecated_inline}}
      - : Versuch, Zeichen mit Schweif zu verwenden, z.B. "𞹂".
    - `looped` {{deprecated_inline}}
      - : Versuch, geschlungene Zeichen zu verwenden, z.B. "𞺂".
    - `stretched` {{deprecated_inline}}
      - : Versuch, gestreckte Zeichen zu verwenden, z.B. "𞹢".

Dieses Element akzeptiert auch die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes).

## Beispiele

```html
<math display="block">
  <!-- Mehrere Zeichen werden als "normaler" Text gerendert -->
  <mi>sin</mi>
</math>
<hr />
<math display="block">
  <!-- Einzelne Zeichen werden standardmäßig kursiv gerendert (d.h. "A" wird als "𝐴" gerendert) -->
  <mi>A</mi>
</math>
<hr />
<math display="block">
  <!-- Verwenden Sie mathvariant="normal", um ein einzelnes Zeichen als normalen Text zu rendern -->
  <mi mathvariant="normal">F</mi>
</math>
<hr />
<math display="block">
  <!-- Um eine spezifische Variante zu verwenden, z.B. "B" in Fraktur -->
  <mi>𝔅</mi>
</math>
```

{{ EmbedLiveSample('mi_example', 400, 100) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
