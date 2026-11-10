---
title: <mi>
slug: Web/MathML/Reference/Element/mi
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`<mi>`**-Element von [MathML](/de/docs/Web/MathML) gibt an, dass sein Inhalt als **Bezeichner** dargestellt werden soll, beispielsweise als Funktionsname, Variable oder symbolische Konstante.

Standardmäßig werden `<mi>`-Elemente mit mehreren Zeichen als normaler Text dargestellt, während einzelne Zeichen kursiv dargestellt werden. Dies entspricht dem Formatierungsverhalten der CSS-Eigenschaft {{cssxref("text-transform")}} mit dem Wert `math-auto`.
Mit dem Wert `normal` für das Attribut `mathvariant` lässt sich die Darstellung eines einzelnen Zeichens auf die normale Schrift zurücksetzen.

Um eine bestimmte Schriftform wie fett, kursiv, Serifenschrift, serifenlose Schrift, Schreibschrift/Kalligrafie, nichtproportionale Schrift oder doppelt gestrichene Schrift zu verwenden, sollten Sie die entsprechenden [mathematischen alphanumerischen Symbole](https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols) verwenden.

> [!NOTE]
> In einer früheren Spezifikation (MathML3) wurde das Attribut `mathvariant` verwendet, um logische Klassen zu definieren, mit denen die Zeichenformatierung für mathematische alphanumerische Symbole angewendet werden konnte.
> Die zugehörigen Werte sind inzwischen veraltet und werden voraussichtlich in zukünftigen Browser-Versionen entfernt.

## Attribute

- `mathvariant`
  - : Der einzige in der aktuellen Spezifikation zulässige Wert ist `normal` (ohne Berücksichtigung der Groß- und Kleinschreibung):
    - `normal`
      - : Verwendet die standardmäßige/normale Darstellung und entfernt die automatische Kursivformatierung einzelner Zeichen.

    Veraltete Werte sind:
    - `bold` {{deprecated_inline}}
      - : Versucht, fette Zeichen zu verwenden, z. B. „𝐀“.
    - `italic` {{deprecated_inline}}
      - : Versucht, kursive Zeichen zu verwenden, z. B. „𝐴“.
    - `bold-italic` {{deprecated_inline}}
      - : Versucht, fett-kursive Zeichen zu verwenden, z. B. „𝑨“.
    - `double-struck` {{deprecated_inline}}
      - : Versucht, doppelt gestrichene Zeichen zu verwenden, z. B. „𝔸“.
    - `bold-fraktur` {{deprecated_inline}}
      - : Versucht, fette Frakturzeichen zu verwenden, z. B. „𝕬“.
    - `script` {{deprecated_inline}}
      - : Versucht, Schreibschriftzeichen zu verwenden, z. B. „𝒜“.
    - `bold-script` {{deprecated_inline}}
      - : Versucht, fette Schreibschriftzeichen zu verwenden, z. B. „𝓐“.
    - `fraktur` {{deprecated_inline}}
      - : Versucht, Frakturzeichen zu verwenden, z. B. „𝔄“.
    - `sans-serif` {{deprecated_inline}}
      - : Versucht, serifenlose Zeichen zu verwenden, z. B. „𝖠“.
    - `bold-sans-serif` {{deprecated_inline}}
      - : Versucht, fette serifenlose Zeichen zu verwenden, z. B. „𝗔“.
    - `sans-serif-italic` {{deprecated_inline}}
      - : Versucht, kursive serifenlose Zeichen zu verwenden, z. B. „𝘈“.
    - `sans-serif-bold-italic` {{deprecated_inline}}
      - : Versucht, fett-kursive serifenlose Zeichen zu verwenden, z. B. „𝘼“.
    - `monospace` {{deprecated_inline}}
      - : Versucht, nichtproportionale Zeichen zu verwenden, z. B. „𝙰“.
    - `initial` {{deprecated_inline}}
      - : Versucht, Initialzeichen zu verwenden, z. B. „𞸢“.
    - `tailed` {{deprecated_inline}}
      - : Versucht, Zeichen mit Schweif zu verwenden, z. B. „𞹂“.
    - `looped` {{deprecated_inline}}
      - : Versucht, geschlungene Zeichen zu verwenden, z. B. „𞺂“.
    - `stretched` {{deprecated_inline}}
      - : Versucht, gestreckte Zeichen zu verwenden, z. B. „𞹢“.

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

{{ EmbedLiveSample('examples', 400, 100) }}

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
