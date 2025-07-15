---
title: transform
slug: Web/CSS/transform
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`transform`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht es Ihnen, ein Element zu rotieren, zu skalieren, zu verzerren oder zu verschieben.
Sie modifiziert den Koordinatenraum des CSS-[visuellen Formatierungsmodells](/de/docs/Web/CSS/CSS_display/Visual_formatting_model).

{{InteractiveExample("CSS Demo: transform")}}

```css interactive-example-choice
transform: matrix(1, 2, 3, 4, 5, 6);
```

```css interactive-example-choice
transform: translate(120px, 50%);
```

```css interactive-example-choice
transform: scale(2, 0.5);
```

```css interactive-example-choice
transform: rotate(0.5turn);
```

```css interactive-example-choice
transform: skew(30deg, 20deg);
```

```css interactive-example-choice
transform: scale(0.5) translate(-100%, -100%);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

Wenn die Eigenschaft einen anderen Wert als `none` hat, wird ein [Stacking-Kontext](/de/docs/Web/CSS/CSS_positioned_layout/Stacking_context) erstellt.
In diesem Fall wird das Element als [Enthält-Block](/de/docs/Web/CSS/CSS_display/Containing_block) für alle `position: fixed;` oder `position: absolute;` Elemente fungieren, die es enthält.

> [!WARNING]
> Nur transformierbare Elemente können `transform`-iert werden.
> Das heißt, alle Elemente, deren Layout vom CSS-Boxmodell bestimmt wird, mit Ausnahme von: {{Glossary("Inline-level_content", "nicht ersetzten Inline-Boxen")}}, [Tabellenspalten-Boxen](/de/docs/Web/HTML/Reference/Elements/col) und [Tabellenspalten-Gruppenboxen](/de/docs/Web/HTML/Reference/Elements/colgroup).

## Syntax

```css
/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate3d(10px, 0, 20px) rotateY(30deg);

/* Global values */
transform: inherit;
transform: initial;
transform: revert;
transform: revert-layer;
transform: unset;
```

Die `transform`-Eigenschaft kann entweder als Schlüsselwort `none` oder als eine oder mehrere `<transform-function>`-Werte angegeben werden.

### Werte

- {{cssxref("&lt;transform-function&gt;")}}
  - : Eine oder mehrere der [CSS Transformationsfunktionen](/de/docs/Web/CSS/transform-function), die angewendet werden sollen.
    Die Transformationsfunktionen werden in der Reihenfolge von links nach rechts multipliziert, was bedeutet, dass zusammengesetzte Transformationen effektiv [in der Reihenfolge von rechts nach links angewendet werden](#reihenfolge_der_transformation).
- `none`
  - : Gibt an, dass keine Transformation angewendet werden soll.

## Barrierefreiheit

Skalierungs-/Zoom-Animationen sind problematisch für die Barrierefreiheit, da sie ein häufiger Auslöser für bestimmte Arten von Migräne sind.
Wenn Sie solche Animationen auf Ihrer Website einschließen müssen, sollten Sie eine Steuerung bereitstellen, mit der Benutzer die Animationen ausschalten können, vorzugsweise seitenweit.

Ziehen Sie es auch in Betracht, die {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Medieneigenschaft zu verwenden — nutzen Sie sie, um eine [Media-Abfrage](/de/docs/Web/CSS/CSS_media_queries) zu schreiben, die Animationen ausschaltet, wenn der Benutzer eine reduzierte Animation in seinen Systemeinstellungen angegeben hat.

Mehr erfahren:

- [MDN Verständnis WCAG, Erklärung zur Richtlinie 2.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.3_—_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Verständnis des Erfolgskriteriums 2.3.3 | W3C Verständnis WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übersetzen und Drehen eines Elements

#### HTML

```html
<div>Transformed element</div>
```

#### CSS

```css
div {
  border: solid red;
  transform: translate(30px, 20px) rotate(20deg);
  width: 140px;
  height: 60px;
}
```

#### Ergebnis

{{EmbedLiveSample("Translating_and_rotating_an_element", "400", "160")}}

### Reihenfolge der Transformation

Die Reihenfolge der Transformationsfunktionen ist wichtig. In diesem Beispiel werden zwei Boxen gedreht und mit denselben Werten verschoben; nur die Reihenfolge der Transformationsfunktionen ist unterschiedlich.

#### HTML

```html
<div class="original"></div>
<div class="one">1</div>
<div class="two">2</div>
```

#### CSS

```css hidden
div {
  height: 200px;
  width: 200px;
  position: absolute;
  left: 200px;
  top: 50px;
  font-size: 4rem;
  line-height: 200px;
  text-align: center;
}
.original {
  border: 1px dashed;
}
.original::before,
.original::after {
  content: "";
  position: absolute;
  top: 100px;
  width: 500px;
  left: -150px;
  height: 1px;
  border-top: 2px dotted;
}
.original::after {
  transform: rotate(135deg);
}
.one {
  background-color: #ccc;
}
.two {
  background-color: #d6bb72;
}
```

```css
.one {
  transform: translateX(200px) rotate(135deg);
}
.two {
  transform: rotate(135deg) translateX(200px);
}
```

#### Ergebnis

{{EmbedLiveSample("Transform_order", "400", "460")}}

Wenn ein Element gedreht wird, bevor es verschoben wird, befindet sich die Verschieberichtung auf der gedrehten Achse. Die Achse wird durch die gestrichelten Linien angezeigt.

### Weitere Beispiele

Bitte sehen Sie [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) und {{cssxref("&lt;transform-function&gt;")}} für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("&lt;transform-function&gt;")}} Datentyp mit allen erklärten Transformationsfunktionen.
- Einzelne CSS-Eigenschaften: {{cssxref('translate')}}, {{cssxref('rotate')}}, und {{cssxref('scale')}} (es gibt keine `skew`-Eigenschaft).
- SVG {{SVGAttr("transform")}} Attribut
- Online-Tool zur Visualisierung von CSS-Transformationsfunktionen: [CSS Transform Playground](https://css-transform.moro.es/)
