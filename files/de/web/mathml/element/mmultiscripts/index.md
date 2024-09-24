---
title: <mmultiscripts>
slug: Web/MathML/Element/mmultiscripts
l10n:
  sourceCommit: 34c43aca36f776c824e698dfd07e3ece34cc6f00
---

{{MathMLRef}}

Das **`<mmultiscripts>`** [MathML](/de/docs/Web/MathML) Element wird verwendet, um eine beliebige Anzahl von Tief- und Hochstellungen gleichzeitig an einen Ausdruck anzuhängen, wodurch das {{ MathMLElement("msubsup") }} Element verallgemeinert wird. Skripte können entweder Prescripts (vor dem Ausdruck platziert) oder Postscripts (nach dem Ausdruck platziert) sein.

MathML verwendet die folgende Syntax: ein Basisausdruck, gefolgt von einer beliebigen Anzahl von Postsubscript-Postsuperscript-Paaren (in der angegebenen Reihenfolge angehängt), optional gefolgt von einem `<mprescripts>` und einer beliebigen Anzahl von Presubscript-Presuperscript-Paaren (in der angegebenen Reihenfolge angehängt). Darüber hinaus können leere `<mrow>` Elemente verwendet werden, um fehlende Skripte darzustellen.

```html-nolint
<mmultiscripts>
  base
  postsubscript1 postsuperscript1
  postsubscript2 postsuperscript2
  postsubscript3 postsuperscript3
  ...
  postsubscriptN postsuperscriptN
  <mprescripts/>                ⎫
  presubscript1 presuperscript1 ⎪
  presubscript2 presuperscript2 ⎬ Optional
  presubscript3 presuperscript3 ⎪
  ...                           ⎪
  presubscriptM presuperscriptM ⎭
</mmultiscripts>
```

## Attribute

Die Attribute dieses Elements umfassen die [globalen MathML-Attribute](/de/docs/Web/MathML/Global_attributes) sowie die folgenden veralteten Attribute:

- `subscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Eine {{cssxref("length-percentage")}} Angabe, die die minimale Verschiebung der Basislinie des Tiefscripts nach unten angibt.
- `superscriptshift` {{deprecated_inline}} {{Non-standard_Inline}}
  - : Eine {{cssxref("length-percentage")}} Angabe, die die minimale Verschiebung der Basislinie des Hochscripts nach oben angibt.

> [!NOTE]
> Für die Attribute `subscriptshift` und `superscriptshift` können einige Browser auch [veraltete MathML-Längen](/de/docs/Web/MathML/Values#legacy_mathml_lengths) akzeptieren.

## Beispiele

### Verwendung von `<mprescripts/>`

Kinder nach dem `<mprescripts/>` Element werden als Prescripts platziert (vor dem Basisausdruck):

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>      <!-- Basisausdruck -->
    <mi>d</mi>      <!-- Postsubscript -->
    <mi>c</mi>      <!-- Postsuperscript -->
    <mprescripts />
    <mi>b</mi>      <!-- Presubscript -->
    <mi>a</mi>      <!-- Presuperscript -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('mprescripts_example', 700, 200, "", "") }}

### Leere Skripte

Leere `<mrow>` Elemente können verwendet werden, um fehlende Skripte darzustellen:

```html-nolint
<math display="block">
  <mmultiscripts>
    <mi>X</mi>      <!-- Basisausdruck -->
    <mrow></mrow>   <!-- Postsubscript -->
    <mi>c</mi>      <!-- Postsuperscript -->
    <mprescripts />
    <mi>b</mi>      <!-- Presubscript -->
    <mrow></mrow>   <!-- Presuperscript -->
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('none_example', 700, 200, "", "") }}

### Reihenfolge der Skripte

Hier ist ein komplexeres Beispiel mit vielen Skripten, damit Sie sehen können, in welcher Reihenfolge sie an den Basis angebracht werden:

```html
<math display="block">
  <mmultiscripts>
    <mtext>base</mtext>
    <mtext>postsubscript1</mtext>
    <mtext>postsupscript1</mtext>
    <mtext>postsubscript2</mtext>
    <mtext>postsupscript2</mtext>
    <mtext>postsubscript3</mtext>
    <mtext>postsupscript3</mtext>
    <mtext>postsubscript4</mtext>
    <mtext>postsupscript4</mtext>
    <mprescripts />
    <mtext>presubscript1</mtext>
    <mtext>presupscript1</mtext>
    <mtext>presubscript2</mtext>
    <mtext>presupscript2</mtext>
    <mtext>presubscript3</mtext>
    <mtext>presupscript3</mtext>
  </mmultiscripts>
</math>
```

{{ EmbedLiveSample('order_of_scripts_example', 700, 200, "", "") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ MathMLElement("msub") }} (Tiefstellung)
- {{ MathMLElement("msup") }} (Hochstellung)
- {{ MathMLElement("msubsup") }} (Tief-Hochstellung Paar)
