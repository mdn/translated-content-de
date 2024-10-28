---
title: <mi>
slug: Web/MathML/Element/mi
l10n:
  sourceCommit: a9a6b72518fa068991c95e8c1a5ba224533e53ee
---

{{MathMLRef}}

Das **`<mi>`** [MathML](/de/docs/Web/MathML)-Element gibt an, dass der Inhalt als ein **Identifikator** gerendert werden soll, wie ein Funktionsname, eine Variable oder eine symbolische Konstante.

Standardmäßig werden `<mi>`-Elemente, die aus mehreren Zeichen bestehen, als normaler Text gerendert, während einzelne Zeichen kursiv dargestellt werden: dasselbe Formatierungsverhalten wie die [CSS `text-transform`](/de/docs/Web/CSS/text-transform)-Eigenschaft mit dem Wert `math-auto`.
Das `mathvariant`-Attribut mit dem Wert `normal` kann verwendet werden, um ein einzelnes Zeichen auf die normale Schriftart zurückzusetzen.

Um eine bestimmte Form eines Zeichens wie fett/kursiv, Serif, Sans-serif, Schreibschrift/Kalligraphie, Monospaced, Doppelstrich usw. zu verwenden, sollten Sie die entsprechenden [Mathematischen alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

> [!NOTE]
> In einer früheren Spezifikation (MathML3) wurde das `mathvariant`-Attribut verwendet, um logische Klassen zu definieren, die die Zeichenformatierung für mathematische alphanumerische Symbole anwenden konnten.
> Die zugehörigen Werte sind nun veraltet und sollen in zukünftigen Versionen aus den Browsern entfernt werden.

## Attribute

- `mathvariant`

  - : Der einzige erlaubte Wert in der aktuellen Spezifikation ist `normal` (Groß- und Kleinschreibung sind unerheblich):

    - `normal`
      - : Verwenden Sie die Standard-/normale Darstellung und entfernen Sie die automatische Kursivdarstellung einzelner Zeichen.

    Veraltete Werte sind:

    - `bold` {{deprecated_inline}}
      - : Verwenden Sie fettgedruckte Zeichen, z. B. "𝐀".
    - `italic` {{deprecated_inline}}
      - : Verwenden Sie kursive Zeichen, z. B. "𝐴".
    - `bold-italic` {{deprecated_inline}}
      - : Verwenden Sie fett-kursive Zeichen, z. B. "𝑨".
    - `double-struck` {{deprecated_inline}}
      - : Verwenden Sie doppelt gestrichene Zeichen, z. B. "𝔸".
    - `bold-fraktur` {{deprecated_inline}}
      - : Verwenden Sie fett-Fraktur-Zeichen, z. B. "𝕬".
    - `script` {{deprecated_inline}}
      - : Verwenden Sie Skriptzeichen, z. B. "𝒜".
    - `bold-script` {{deprecated_inline}}
      - : Verwenden Sie fett-Skriptzeichen, z. B. "𝓐".
    - `fraktur` {{deprecated_inline}}
      - : Verwenden Sie Fraktur-Zeichen, z. B. "𝔄".
    - `sans-serif` {{deprecated_inline}}
      - : Verwenden Sie Sans-serif-Zeichen, z. B. "𝖠".
    - `bold-sans-serif` {{deprecated_inline}}
      - : Verwenden Sie fett-Sans-serif-Zeichen, z. B. "𝗔".
    - `sans-serif-italic` {{deprecated_inline}}
      - : Verwenden Sie Sans-serif-kursive Zeichen, z. B. "𝘈".
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : Verwenden Sie Sans-serif-fett-kursive Zeichen, z. B. "𝘼".
    - `monospace` {{deprecated_inline}}
      - : Verwenden Sie Monospaced-Zeichen, z. B. "𝙰".
    - `initial` {{deprecated_inline}}
      - : Verwenden Sie Initial-Zeichen, z. B. "𞸢".
    - `tailed` {{deprecated_inline}}
      - : Verwenden Sie Zeichen mit Schwanz, z. B. "𞹂".
    - `looped` {{deprecated_inline}}
      - : Verwenden Sie gebogene Zeichen, z. B. "𞺂".
    - `stretched` {{deprecated_inline}}
      - : Verwenden Sie erweiterte Zeichen, z. B. "𞹢".

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

## Technische Zusammenfassung

<table class="properties">
  <tr>
    <th scope="row">
      <a href="/de/docs/Web/Accessibility/ARIA/Roles">Implizite ARIA-Rolle</a>
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
