---
title: <mmultiscripts>
slug: Web/MathML/Element/mmultiscripts
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{MathMLRef}}

Das **`<mmultiscripts>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um eine beliebige Anzahl von Tief- und Hochstellungen gleichzeitig an einen Ausdruck anzuhängen. Es verallgemeinert das {{ MathMLElement("msubsup") }}-Element. Skripte können entweder Pre-Skripte (vor dem Ausdruck platziert) oder Post-Skripte (nach dem Ausdruck platziert) sein.

MathML verwendet die unten stehende Syntax, die aus einem Basis-Ausdruck besteht, gefolgt von einer beliebigen Anzahl von Post-Tief- und Post-Hochstellungs-Paaren (in der angegebenen Reihenfolge angehängt), optional gefolgt von einem {{ MathMLElement("mprescripts") }}-Element und einer beliebigen Anzahl von Pre-Tief- und Pre-Hochstellungs-Paaren (in der angegebenen Reihenfolge angehängt). Zusätzlich können leere {{ MathMLElement("mrow") }}-Elemente verwendet werden, um fehlende Skripte darzustellen.

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

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden veralteten Attribute:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, der die minimale Verschiebung des Tiefstellungsgrundlinie nach unten angibt.
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, der die minimale Verschiebung der Hochstellungsgrundlinie nach oben angibt.

> [!NOTE]
> Für die Attribute `subscriptshift` und `superscriptshift` akzeptieren einige Browser möglicherweise auch [Legacy-MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths).

## Beispiele

### Verwendung von `<mprescripts>`

Kinder nach dem `<mprescripts>`-Element werden als Pre-Skripte (vor dem Basis-Ausdruck) platziert:

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

Hier ist ein komplexeres Beispiel mit vielen Skripten, damit Sie sehen können, in welcher Reihenfolge sie an den Basis-Ausdruck angehängt werden:

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

- {{ MathMLElement("msub") }} (Tiefstellung)
- {{ MathMLElement("msup") }} (Hochstellung)
- {{ MathMLElement("msubsup") }} (Tief-/Hochstellungs-Paar)
