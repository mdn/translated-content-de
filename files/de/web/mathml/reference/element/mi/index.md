---
title: <mi>
slug: Web/MathML/Reference/Element/mi
l10n:
  sourceCommit: 6b01bafc68dffb3a50f70882d2ba24cd6f9d886f
---

Das **`<mi>`** [MathML](/de/docs/Web/MathML)-Element zeigt an, dass der Inhalt als **Bezeichner** gerendert werden soll, wie ein Funktionsname, eine Variable oder eine symbolische Konstante.

Standardmäßig werden `<mi>`-Elemente, die mehrere Zeichen enthalten, als normaler Text gerendert, während einzelne Zeichen kursiv dargestellt werden: das gleiche Formatierungsverhalten wie die CSS-Eigenschaft {{cssxref("text-transform")}} mit dem Wert `math-auto`. Mit dem `mathvariant`-Attribut und dem Wert `normal` kann ein einzelnes Zeichen auf die normale Schriftart zurückgesetzt werden.

Um eine bestimmte Form eines Zeichens wie fett/kursiv, serif, sans-serif, Schriftauszeichnung/Kalligraphie, Monospace, doppelt gestrichen usw. zu verwenden, sollten Sie die entsprechenden [Mathematischen alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) nutzen.

> [!NOTE]
> In einer vorherigen Spezifikation (MathML3) wurde das `mathvariant`-Attribut verwendet, um logische Klassen zu definieren, die die Zeichenformatierung für mathematische alphanumerische Symbole anwenden konnten.
> Die zugehörigen Werte sind jetzt veraltet und werden voraussichtlich in zukünftigen Versionen aus den Browsern entfernt.

## Attribute

- `mathvariant`
  - : Der einzige in der aktuellen Spezifikation zulässige Wert ist `normal` (Groß-/Kleinschreibung wird nicht beachtet):
    - `normal`
      - : Verwendet die standardmäßige/normale Darstellung und entfernt das automatische Kursivmarkieren einzelner Zeichen.

    Veraltete, beibehaltene Werte sind:
    - `bold` {{deprecated_inline}}
      - : Versuch, fette Zeichen zu verwenden, z. B. "𝐀".
    - `italic` {{deprecated_inline}}
      - : Versuch, kursive Zeichen zu verwenden, z. B. "𝐴".
    - `bold-italic` {{deprecated_inline}}
      - : Versuch, fett-kursive Zeichen zu verwenden, z. B. "𝑨".
    - `double-struck` {{deprecated_inline}}
      - : Versuch, doppelt gestrichene Zeichen zu verwenden, z. B. "𝔸".
    - `bold-fraktur` {{deprecated_inline}}
      - : Versuch, fett-Fraktur-Zeichen zu verwenden, z. B. "𝕬".
    - `script` {{deprecated_inline}}
      - : Versuch, Schriftzeichen zu verwenden, z. B. "𝒜".
    - `bold-script` {{deprecated_inline}}
      - : Versuch, fett-Schriftzeichen zu verwenden, z. B. "𝓐".
    - `fraktur` {{deprecated_inline}}
      - : Versuch, Fraktur-Zeichen zu verwenden, z. B. "𝔄".
    - `sans-serif` {{deprecated_inline}}
      - : Versuch, Sans-Serif-Zeichen zu verwenden, z. B. "𝖠".
    - `bold-sans-serif` {{deprecated_inline}}
      - : Versuch, fett-Sans-Serif-Zeichen zu verwenden, z. B. "𝗔".
    - `sans-serif-italic` {{deprecated_inline}}
      - : Versuch, sans-serif-kursive Zeichen zu verwenden, z. B. "𝘈".
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : Versuch, fett-italic-sans-serif-Zeichen zu verwenden, z. B. "𝘼".
    - `monospace` {{deprecated_inline}}
      - : Versuch, Monospace-Zeichen zu verwenden, z. B. "𝙰".
    - `initial` {{deprecated_inline}}
      - : Versuch, Initial-Zeichen zu verwenden, z. B. "𞸢".
    - `tailed` {{deprecated_inline}}
      - : Versuch, Zeichen mit Schweif zu verwenden, z. B. "𞹂".
    - `looped` {{deprecated_inline}}
      - : Versuch, geschlungene Zeichen zu verwenden, z. B. "𞺂".
    - `stretched` {{deprecated_inline}}
      - : Versuch, gedehnte Zeichen zu verwenden, z. B. "𞹢".

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
      <a href="/de/docs/Web/Accessibility/ARIA/Reference/Roles">Implizierte ARIA-Rolle</a>
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
