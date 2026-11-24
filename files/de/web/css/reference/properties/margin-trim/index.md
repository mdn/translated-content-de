---
title: "`margin-trim` CSS property"
short-title: margin-trim
slug: Web/CSS/Reference/Properties/margin-trim
l10n:
  sourceCommit: d5815e4cd86d8e9b54a8b7518abf86cc01f46db2
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`margin-trim`** ermöglicht es einem Container, die Ränder seiner Kindelemente in Blockrichtung dort auf null zu setzen, wo sie an die Kanten des Containers angrenzen.

{{InteractiveExample("CSS Demo: margin-trim")}}

```css interactive-example-choice
margin-trim: none;
```

```css interactive-example-choice
margin-trim: block;
```

```css interactive-example-choice
margin-trim: block-start;
```

```css interactive-example-choice
margin-trim: block-end;
```

```html interactive-example
<div class="example-wrapper" id="example-element">
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</div>
```

```css interactive-example
.example-wrapper {
  border: 2px solid tomato;
  margin: 0;
  padding: 0;
}

p {
  color: white;
  background-color: slategrey;
  padding: 0.5rem;
  margin: 1rem;
}
```

## Syntax

```css
margin-trim: none;
margin-trim: block;
margin-trim: block-start;
margin-trim: block-end;

/* Multiple values */
margin-trim: block-start block-end;

/* Global values */
margin-trim: inherit;
margin-trim: initial;
margin-trim: revert;
margin-trim: revert-layer;
margin-trim: unset;
```

### Werte

Für diese Eigenschaft wird entweder das Schlüsselwort `none` oder `block` angegeben oder eines beziehungsweise beide der Schlüsselwörter `block-start` und `block-end`:

- `none`
  - : Der Container setzt keine Ränder auf null.

- `block`
  - : Die Ränder von Block-Kindelementen werden dort, wo sie an die Kanten des Containers angrenzen, auf null gesetzt. Die Ränder des Containers bleiben davon unberührt.

- `block-start`
  - : Der Rand des ersten Block-Kindelements an der Kante des Containers wird auf null gesetzt.

- `block-end`
  - : Der Rand des letzten Block-Kindelements an der Kante des Containers wird auf null gesetzt.

## Beschreibung

Zwischen Geschwisterelementen sind Ränder häufig erwünscht, nicht jedoch zwischen dem ersten oder letzten Kindelement und den Kanten seines Containers. Dort kann der Abstand stattdessen mit {{cssxref("padding")}} festgelegt werden. Ohne `margin-trim` sind zusätzliche Regeln erforderlich, um diese Ränder zu entfernen, etwa eine Regel, die mit der Pseudoklasse {{cssxref(":first-child")}} das erste Kindelement auswählt. Mit `margin-trim` setzt der Container die betreffenden Ränder selbst auf null – abhängig vom angegebenen Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel hat jeder Absatz einen {{cssxref("margin")}}, der ihn von seinen Geschwisterelementen trennt. Wird für das `<section>`-Element `margin-trim: block-start` festgelegt, wird der obere Rand des ersten Absatzes auf null gesetzt, während die Ränder zwischen den Absätzen erhalten bleiben.

Das vereinfacht die Syntax, da der erste Absatz nicht mit der Pseudoklasse {{cssxref(":first-child")}} ausgewählt werden muss.

```html
<h2>Section Heading</h2>
<section>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <p>Paragraph 3</p>
</section>
```

Der `border` um das `<section>`-Element und die `background-color` der `<p>`-Elemente dienen lediglich dazu, das Entfernen des Randes sichtbar zu machen.

```css
section {
  border: 2px solid tomato;
  margin: 0;
  padding: 0;
  margin-trim: block-start;
}
p {
  background-color: aliceblue;
  padding: 0.5rem;
  margin: 1rem;
}
```

In Browsern, die `margin-trim` unterstützen, liegt der erste Absatz direkt am oberen Rahmen des Abschnitts an, während der Rand unterhalb des letzten Absatzes erhalten bleibt.

{{EmbedLiveSample('basic_usage','100%',270)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("margin")}}
- Die Eigenschaften {{cssxref("margin-block-start")}} und {{cssxref("margin-block-end")}}
- [Beherrschung des Zusammenfallens von Rändern](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- Modul [CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_model)
