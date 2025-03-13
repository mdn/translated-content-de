---
title: <mi>
slug: Web/MathML/Reference/Element/mi
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<mi>`** [MathML](/de/docs/Web/MathML) Element zeigt an, dass der Inhalt als **Identifikator** gerendert werden sollte, wie z.B. ein Funktionsname, eine Variable oder eine symbolische Konstante.

Standardmäßig werden `<mi>` Elemente, die mehrere Zeichen enthalten, als normaler Text gerendert, während einzelne Zeichen kursiv dargestellt werden: das gleiche Formatierungsverhalten wie die [CSS `text-transform`](/de/docs/Web/CSS/text-transform) Eigenschaft mit dem Wert `math-auto`.
Das `mathvariant` Attribut mit dem Wert `normal` kann verwendet werden, um ein einzelnes Zeichen auf die normale Schriftart zurückzusetzen.

Um eine bestimmte Form eines Zeichens wie fett/kursiv, serif, sans-serif, skript/kalligraphisch, monospaced, doppelgepunktet usw. zu verwenden, sollten Sie die entsprechenden [Mathematical Alphanumeric Symbols](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

> [!NOTE]
> In einer früheren Spezifikation (MathML3) wurde das `mathvariant` Attribut verwendet, um logische Klassen zu definieren, die die Zeichendarstellung für mathematische alphanumerische Symbole bezwecken könnten.
> Die zugehörigen Werte sind jetzt veraltet und sollen in zukünftigen Browserversionen entfernt werden.

## Attribute

- `mathvariant`

  - : Der einzige Wert, der in der aktuellen Spezifikation erlaubt ist, ist `normal` (Groß-/Kleinschreibung wird nicht beachtet):

    - `normal`
      - : Standard-/normales Rendering verwenden, wobei die automatische Kursivdarstellung einzelner Zeichen entfernt wird.

    Veraltete Werte sind:

    - `bold` {{deprecated_inline}}
      - : Versuchen Sie, fette Zeichen zu verwenden, z.B. "𝐀".
    - `italic` {{deprecated_inline}}
      - : Versuchen Sie, kursive Zeichen zu verwenden, z.B. "𝐴".
    - `bold-italic` {{deprecated_inline}}
      - : Versuchen Sie, fett-kursive Zeichen zu verwenden, z.B. "𝑨".
    - `double-struck` {{deprecated_inline}}
      - : Versuchen Sie, doppelt geschlagene Zeichen zu verwenden, z.B. "𝔸".
    - `bold-fraktur` {{deprecated_inline}}
      - : Versuchen Sie, fett Fraktur-Zeichen zu verwenden, z.B. "𝕬".
    - `script` {{deprecated_inline}}
      - : Versuchen Sie, Skript-Zeichen zu verwenden, z.B. "𝒜".
    - `bold-script` {{deprecated_inline}}
      - : Versuchen Sie, fett Skript-Zeichen zu verwenden, z.B. "𝓐".
    - `fraktur` {{deprecated_inline}}
      - : Versuchen Sie, Fraktur-Zeichen zu verwenden, z.B. "𝔄".
    - `sans-serif` {{deprecated_inline}}
      - : Versuchen Sie, sans-serif-Zeichen zu verwenden, z.B. "𝖠".
    - `bold-sans-serif` {{deprecated_inline}}
      - : Versuchen Sie, fett sans-serif-Zeichen zu verwenden, z.B. "𝗔".
    - `sans-serif-italic` {{deprecated_inline}}
      - : Versuchen Sie, sans-serif kursive Zeichen zu verwenden, z.B. "𝘈".
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : Versuchen Sie, sans-serif fett-kursive Zeichen zu verwenden, z.B. "𝘼".
    - `monospace` {{deprecated_inline}}
      - : Versuchen Sie, Monospace-Zeichen zu verwenden, z.B. "𝙰".
    - `initial` {{deprecated_inline}}
      - : Versuchen Sie, initiale Zeichen zu verwenden, z.B. "𞸢".
    - `tailed` {{deprecated_inline}}
      - : Versuchen Sie, geschwänzte Zeichen zu verwenden, z.B. "𞹂".
    - `looped` {{deprecated_inline}}
      - : Versuchen Sie, geschlungene Zeichen zu verwenden, z.B. "𞺂".
    - `stretched` {{deprecated_inline}}
      - : Versuchen Sie, gedehnte Zeichen zu verwenden, z.B. "𞹢".

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
