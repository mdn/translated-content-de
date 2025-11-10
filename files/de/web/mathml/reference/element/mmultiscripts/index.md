---
title: <mmultiscripts>
slug: Web/MathML/Reference/Element/mmultiscripts
l10n:
  sourceCommit: c263f06fa14ed56153e345006bb459c9df014b98
---

Das **`<mmultiscripts>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um gleichzeitig eine beliebige Anzahl von Tief- und Hochzeichen an einen Ausdruck anzuhängen und damit das {{ MathMLElement("msubsup") }}-Element zu verallgemeinern. Skripte können entweder vorangestellte Skripte (vor dem Ausdruck platziert) oder nachgestellte Skripte (nach dem Ausdruck platziert) sein.

MathML verwendet die folgende Syntax, das ist ein Basisausdruck, gefolgt von einer beliebigen Anzahl von nachgestellten Tief- und Hochzeichenpaaren (in der gegebenen Reihenfolge angehängt), optional gefolgt von einem {{ MathMLElement("mprescripts") }}-Element und einer beliebigen Anzahl von vorangestellten Tief- und Hochzeichenpaaren (in der gegebenen Reihenfolge angehängt). Zusätzlich können leere {{ MathMLElement("mrow") }}-Elemente verwendet werden, um fehlende Skripte darzustellen.

```html-nolint
<mmultiscripts>
  base
  post-sub-script-1 post-sup-script-1
  post-sub-script-2 post-sup-script-2
  post-sub-script-3 post-sup-script-3
  ...
  post-sub-script-N post-sup-script-N
  <mprescripts />                    ⎫
  pre-sub-script-1 pre-sup-script-1  ⎪
  pre-sub-script-2 pre-sup-script-2  ⎬ Optional
  pre-sub-script-3 pre-sup-script-3  ⎪
  ...                                ⎪
  pre-sub-script-M pre-sup-script-N  ⎭
</mmultiscripts>
```

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Reference/Global_attributes) sowie die folgenden veralteten Attribute:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Eine {{cssxref("length-percentage")}}, die die minimale Menge angibt, um die Grundlinie des Tiefzeichens nach unten zu verschieben.
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Eine {{cssxref("length-percentage")}}, die die minimale Menge angibt, um die Grundlinie des Hochzeichens nach oben zu verschieben.

> [!NOTE]
> Für die Attribute `subscriptshift` und `superscriptshift` können einige Browser auch [veraltete MathML-Längen](/de/docs/Web/MathML/Reference/Values#legacy_mathml_lengths) akzeptieren.

## Beispiele

### Verwendung von `<mprescripts>`

Kinder nach dem `<mprescripts>`-Element werden als vorangestellte Skripte platziert (vor dem Basisausdruck):

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi> <!-- base expression -->
    <mi>a</mi> <!-- post-sub-script -->
    <mi>b</mi> <!-- post-sup-script -->
    <mprescripts />
    <mi>c</mi> <!-- pre-sub-script -->
    <mi>d</mi> <!-- pre-sup-script -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('using_mprescripts', 700, 200, "", "") }}

### Leere Skripte

Leere `<mrow>`-Elemente können verwendet werden, um fehlende Skripte darzustellen:

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>    <!-- base expression -->
    <mrow></mrow> <!-- post-sub-script -->
    <mi>b</mi>    <!-- post-sup-script -->
    <mprescripts />
    <mi>c</mi>    <!-- pre-sub-script -->
    <mrow></mrow> <!-- pre-sup-script -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('empty_scripts', 700, 200, "", "") }}

### Reihenfolge der Skripte

Hier ist ein komplexeres Beispiel mit vielen Skripten, damit Sie sehen können, in welcher Reihenfolge sie an den Basis ausdruck angehängt werden:

```css hidden
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
  font-size: 2rem;
}
```

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi> <!-- base expression -->
    <mn>1</mn> <!-- post-sub-script-1 -->
    <mn>2</mn> <!-- post-sup-script-1 -->
    <mn>3</mn> <!-- post-sub-script-2 -->
    <mn>4</mn> <!-- post-sup-script-2 -->
    <mprescripts />
    <mn>5</mn> <!-- pre-sub-script-1 -->
    <mn>6</mn> <!-- pre-sup-script-1 -->
    <mn>7</mn> <!-- pre-sub-script-2 -->
    <mn>8</mn> <!-- pre-sup-script-2 -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('order_of_scripts', 700, 200, "", "") }}

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

## Siehe auch

- {{ MathMLElement("msub") }} (Tiefzeichen)
- {{ MathMLElement("msup") }} (Hochzeichen)
- {{ MathMLElement("msubsup") }} (Paar aus Tief- und Hochzeichen)
