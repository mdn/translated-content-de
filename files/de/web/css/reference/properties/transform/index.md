---
title: "`transform` CSS property"
short-title: transform
slug: Web/CSS/Reference/Properties/transform
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`transform`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, ein Element zu drehen, skalieren, schräg verzerren oder zu verschieben. Sie modifiziert den Koordinatenraum des CSS-[visuellen Formatierungsmodells](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model).

Wenn die Eigenschaft einen anderen Wert als `none` hat, wird ein [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) erstellt. In diesem Fall fungiert das Element als [enthältender Block](/de/docs/Web/CSS/Guides/Display/Containing_block) für alle darin enthaltenen `position: fixed;` oder `position: absolute;` Elemente.

Sie können auch die einzelnen Transformations-Eigenschaften verwenden: {{cssxref('translate')}}, {{cssxref('rotate')}} und {{cssxref('scale')}}. Diese Eigenschaften werden in der Reihenfolge angewendet: `translate`, `rotate`, `scale` und schließlich `transform`.

> [!WARNING]
> Nur transformierbare Elemente können `transform`iert werden.
> Das heißt, alle Elemente, deren Layout durch das CSS-Boxmodell gesteuert wird, mit Ausnahme von: {{Glossary("Inline-level_content", "nicht-ersetzten Inline-Boxen")}}, [Tabellenspalten-Boxen](/de/docs/Web/HTML/Reference/Elements/col) und [Tabellenspalten-Gruppen-Boxen](/de/docs/Web/HTML/Reference/Elements/colgroup).

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

### Werte

Diese Eigenschaft wird entweder als Schlüsselwortwert `none` oder als durch Leerzeichen getrennte Liste von `<transform-function>`-Werten angegeben:

- {{cssxref("&lt;transform-function&gt;")}}
  - : Eine oder mehrere der [CSS-Transformationsfunktionen](/de/docs/Web/CSS/Reference/Values/transform-function), die angewendet werden sollen. Die Transformationsfunktionen werden von links nach rechts kombiniert – jede Funktion etabliert einen neuen Koordinatenraum für die nächste Funktion und so weiter –, sodass das visuelle Ergebnis der geschriebenen Reihenfolge der Funktionen entspricht. Alternativ kann dieselbe Transformation beschrieben werden, indem die Funktionen in umgekehrter Reihenfolge (rechts nach links) unter Beibehaltung des übergeordneten Koordinatenraums angewendet werden.
- `none`
  - : Gibt an, dass keine Transformation angewendet werden soll.

## Barrierefreiheit

Skalierungs- und Zoom-Animationen sind problematisch für die Barrierefreiheit, da sie häufig Auslöser für bestimmte Arten von Migräne sind. Wenn Sie solche Animationen auf Ihrer Website einschließen müssen, sollten Sie eine Steuerung bereitstellen, die es den Benutzern ermöglicht, Animationen auszuschalten, vorzugsweise auf der gesamten Website.

Ziehen Sie auch die Verwendung der {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}-Medienfunktion in Betracht – verwenden Sie diese, um eine [Media Query](/de/docs/Web/CSS/Guides/Media_queries) zu schreiben, die Animationen deaktiviert, wenn der Benutzer reduzierte Animationen in seinen Systemeinstellungen angegeben hat.

Erfahren Sie mehr:

- [MDN Verständnis für WCAG, Richtlinie 2.3 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.3_—_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Verständnis des Erfolgskriteriums 2.3.3 | W3C Verständnis von WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Übersetzung und Drehung eines Elements

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

### Vergleich der Reihenfolge von Transformationsfunktionen

Die Reihenfolge der Transformationsfunktionen ist wichtig.

In diesem Beispiel werden zwei Boxen mit denselben Werten gedreht und verschoben, aber die Funktionen sind in umgekehrter Reihenfolge. Die gepunkteten Linien markieren die X-Achse vor und nach der Drehung.

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
  background-color: #cccccc;
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

- Box 1 (zuerst `translateX()`, dann `rotate()`): Der Koordinatenraum verschiebt sich zuerst `200px` entlang der X-Achse und rotiert dann `135deg` innerhalb dieses verschobenen Raumes, sodass das Element nach rechts von seiner ursprünglichen Position endet, gedreht.
- Box 2 (zuerst `rotate()`, dann `translateX()`): Der Koordinatenraum dreht sich zuerst `135deg`, sodass sich das Element dann `200px` entlang der gedrehten Achse in Richtung der gepunkteten Linien bewegt.
  Bitte sehen Sie [CSS-Transformationen verwenden](/de/docs/Web/CSS/Guides/Transforms/Using) und {{cssxref("&lt;transform-function&gt;")}} für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Transformationen verwenden](/de/docs/Web/CSS/Guides/Transforms/Using)
- {{cssxref("&lt;transform-function&gt;")}} Datentyp mit allen erklärten Transformationsfunktionen.
- Einzelne CSS-Eigenschaften: {{cssxref('translate')}}, {{cssxref('rotate')}} und {{cssxref('scale')}} (es gibt keine `skew`-Eigenschaft).
- SVG {{SVGAttr("transform")}} Attribut
- Online-Tool zur Visualisierung von CSS-Transformationsfunktionen: [CSS Transform Playground](https://css-transform.moro.es/)
