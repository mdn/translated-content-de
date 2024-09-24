---
title: <mmultiscripts>
slug: Web/MathML/Element/mmultiscripts
l10n:
  sourceCommit: 5e756ded4a891e5a147b83b6ead78d23f7e899c9
---

{{MathMLRef}}

Das **`<mmultiscripts>`** [MathML](/de/docs/Web/MathML)-Element wird verwendet, um einer Ausdruck gleichzeitig eine beliebige Anzahl von Tief- und Hochstellungen hinzuzufügen und verallgemeinert damit das {{ MathMLElement("msubsup") }}-Element. Skripte können entweder Prä-Skripte (vor dem Ausdruck platziert) oder Post-Skripte (danach platziert) sein.

MathML verwendet die folgende Syntax: Ein Basisausdruck, gefolgt von einer beliebigen Anzahl von Paaren aus Post-Tief- und Post-Hochstellungen (in der angegebenen Reihenfolge angebracht), gefolgt von einem optionalen {{ MathMLElement("mprescripts") }}-Element und einer beliebigen Anzahl von Prä-Tief- und Prä-Hochstellungen (in der angegebenen Reihenfolge angebracht). Zusätzlich können leere {{ MathMLElement("mrow") }}-Elemente verwendet werden, um fehlende Skripte darzustellen.

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

Zu den Attributen dieses Elements gehören die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden veralteten Attribute:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das die minimale Verschiebung der Grundlinie des Tiefstells nach unten angibt.
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein {{cssxref("length-percentage")}}, das die minimale Verschiebung der Grundlinie des Hochstells nach oben angibt.

> [!NOTE]
> Für die Attribute `subscriptshift` und `superscriptshift` können einige Browser auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) akzeptieren.

## Beispiele

### Verwendung von `<mprescripts>`

Kinder nach dem `<mprescripts>`-Element werden als Prä-Skripte (vor dem Basisausdruck) platziert:

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

Hier ist ein komplexeres Beispiel mit vielen Skripten, sodass Sie sehen können, in welcher Reihenfolge sie an der Basis angebracht werden:

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("msub") }} (Tiefstellung)
- {{ MathMLElement("msup") }} (Hochstellung)
- {{ MathMLElement("msubsup") }} (Paar aus Tief- und Hochstellung)
