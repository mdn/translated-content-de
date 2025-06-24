---
title: <mi>
slug: Web/MathML/Reference/Element/mi
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das **`<mi>`**-Element von [MathML](/de/docs/Web/MathML) zeigt an, dass der Inhalt als **Bezeichner** gerendert werden soll, wie z.B. ein Funktionsname, eine Variable oder eine symbolische Konstante.

Standardmäßig werden `<mi>`-Elemente, die mehrere Zeichen enthalten, als normaler Text gerendert, während Einzelzeichen kursiv dargestellt werden: dasselbe Formatierungsverhalten wie die [CSS `text-transform`](/de/docs/Web/CSS/text-transform) Eigenschaft mit dem Wert `math-auto`. Mit dem Attribut `mathvariant` und dem Wert `normal` kann ein einzelnes Zeichen auf die normale Schriftart zurückgesetzt werden.

Um eine bestimmte Form eines Zeichens wie fett/kursiv, serif, sans-serif, Skript/Kalligrafie, nichtproportional, doppelstrichig usw. zu verwenden, sollten Sie die entsprechenden [Mathematical Alphanumeric Symbols](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

> [!NOTE]
> In einer vorherigen Spezifikation (MathML3) wurde das Attribut `mathvariant` verwendet, um logische Klassen zu definieren, die das Zeichenformat für mathematische alphanumerische Symbole anwenden könnten. Die zugehörigen Werte sind jetzt veraltet und sollen in zukünftigen Versionen aus den Browsern entfernt werden.

## Attribute

- `mathvariant`

  - : Der einzige in der aktuellen Spezifikation erlaubte Wert ist `normal` (unabhängig von Groß- und Kleinschreibung):

    - `normal`
      - : Verwenden Sie die Standard-/Normschreibweise und entfernen Sie die automatische Kursivierung von Einzelzeichen.

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
      - : Versuchen Sie, fett-fraktur Zeichen zu verwenden, z.B. "𝕬".
    - `script` {{deprecated_inline}}
      - : Versuchen Sie, Schreibschriftzeichen zu verwenden, z.B. "𝒜".
    - `bold-script` {{deprecated_inline}}
      - : Versuchen Sie, fett-Schreibschriftzeichen zu verwenden, z.B. "𝓐".
    - `fraktur` {{deprecated_inline}}
      - : Versuchen Sie, Frakturzeichen zu verwenden, z.B. "𝔄".
    - `sans-serif` {{deprecated_inline}}
      - : Versuchen Sie, serifenlose Zeichen zu verwenden, z.B. "𝖠".
    - `bold-sans-serif` {{deprecated_inline}}
      - : Versuchen Sie, fett-serifenlose Zeichen zu verwenden, z.B. "𝗔".
    - `sans-serif-italic` {{deprecated_inline}}
      - : Versuchen Sie, serifenlose-kursive Zeichen zu verwenden, z.B. "𝘈".
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : Versuchen Sie, serifenlose-fett-kursive Zeichen zu verwenden, z.B. "𝘼".
    - `monospace` {{deprecated_inline}}
      - : Versuchen Sie, nichtproportionale Zeichen zu verwenden, z.B. "𝙰".
    - `initial` {{deprecated_inline}}
      - : Versuchen Sie, Initialzeichen zu verwenden, z.B. "𞸢".
    - `tailed` {{deprecated_inline}}
      - : Versuchen Sie, geschwänzte Zeichen zu verwenden, z.B. "𞹂".
    - `looped` {{deprecated_inline}}
      - : Versuchen Sie, geschlungene Zeichen zu verwenden, z.B. "𞺂".
    - `stretched` {{deprecated_inline}}
      - : Versuchen Sie, gestreckte Zeichen zu verwenden, z.B. "𞹢".

Dieses Element akzeptiert auch die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes).

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

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizite ARIA-Rolle</a>
    </th>
    <td>
      Keine
    </td>
  </tr>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
