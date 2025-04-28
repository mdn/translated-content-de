---
title: <mi>
slug: Web/MathML/Reference/Element/mi
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

Das **`<mi>`** [MathML](/de/docs/Web/MathML) Element zeigt an, dass der Inhalt als ein **Bezeichner** dargestellt werden soll, wie z.B. ein Funktionsname, eine Variable oder eine symbolische Konstante.

Standardmäßig werden `<mi>` Elemente, die mehrere Zeichen enthalten, als normaler Text gerendert, während einzelne Zeichen kursiv dargestellt werden: das gleiche Formatverhalten wie die [CSS `text-transform`](/de/docs/Web/CSS/text-transform) Eigenschaft mit einem Wert von `math-auto`.
Das `mathvariant`-Attribut mit dem Wert `normal` kann verwendet werden, um ein einzelnes Zeichen auf die normale Schrift zurückzusetzen.

Um eine bestimmte Form eines Zeichens wie fett/kursiv, serif, sans-serif, script/Kalligraphie, monospaced, double-struck usw. zu verwenden, sollten Sie die entsprechenden [Mathematischen Alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

> [!NOTE]
> In einer früheren Spezifikation (MathML3) wurde das `mathvariant`-Attribut verwendet, um logische Klassen zu definieren, die die Zeichenformatierung für mathematische alphanumerische Symbole anwenden konnten.
> Die zugehörigen Werte sind nun veraltet und werden voraussichtlich in zukünftigen Browser-Versionen entfernt.

## Attribute

- `mathvariant`

  - : Der einzige in der aktuellen Spezifikation erlaubte Wert ist `normal` (Groß-/Kleinschreibung wird ignoriert):

    - `normal`
      - : Verwendung der Standard-/Normaldarstellung, die automatische Kursivierung von Einzelzeichen entfernen.

    Veraltete Werte sind:

    - `bold` {{deprecated_inline}}
      - : Versuchen Sie, fettgedruckte Zeichen zu verwenden, z.B. "𝐀".
    - `italic` {{deprecated_inline}}
      - : Versuchen Sie, kursive Zeichen zu verwenden, z.B. "𝐴".
    - `bold-italic` {{deprecated_inline}}
      - : Versuchen Sie, fett-kursive Zeichen zu verwenden, z.B. "𝑨".
    - `double-struck` {{deprecated_inline}}
      - : Versuchen Sie, double-struck-Zeichen zu verwenden, z.B. "𝔸".
    - `bold-fraktur` {{deprecated_inline}}
      - : Versuchen Sie, fett-fraktur-Zeichen zu verwenden, z.B. "𝕬".
    - `script` {{deprecated_inline}}
      - : Versuchen Sie, Script-Zeichen zu verwenden, z.B. "𝒜".
    - `bold-script` {{deprecated_inline}}
      - : Versuchen Sie, fett-Script-Zeichen zu verwenden, z.B. "𝓐".
    - `fraktur` {{deprecated_inline}}
      - : Versuchen Sie, Fraktur-Zeichen zu verwenden, z.B. "𝔄".
    - `sans-serif` {{deprecated_inline}}
      - : Versuchen Sie, Sans-serif-Zeichen zu verwenden, z.B. "𝖠".
    - `bold-sans-serif` {{deprecated_inline}}
      - : Versuchen Sie, fett-Sans-serif-Zeichen zu verwenden, z.B. "𝗔".
    - `sans-serif-italic` {{deprecated_inline}}
      - : Versuchen Sie, Sans-serif-kursive Zeichen zu verwenden, z.B. "𝘈".
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : Versuchen Sie, Sans-serif-fett-kursive Zeichen zu verwenden, z.B. "𝘼".
    - `monospace` {{deprecated_inline}}
      - : Versuchen Sie, Monospace-Zeichen zu verwenden, z.B. "𝙰".
    - `initial` {{deprecated_inline}}
      - : Versuchen Sie, Initialzeichen zu verwenden, z.B. "𞸢".
    - `tailed` {{deprecated_inline}}
      - : Versuchen Sie, tailed-Zeichen zu verwenden, z.B. "𞹂".
    - `looped` {{deprecated_inline}}
      - : Versuchen Sie, looped-Zeichen zu verwenden, z.B. "𞺂".
    - `stretched` {{deprecated_inline}}
      - : Versuchen Sie, stretched-Zeichen zu verwenden, z.B. "𞹢".

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
