---
title: "`transform` CSS property"
short-title: transform
slug: Web/CSS/Reference/Properties/transform
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`transform`** können Sie ein Element drehen, skalieren, scheren oder verschieben.
Sie verändert den Koordinatenraum des [visuellen Formatierungsmodells](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model) von CSS.

Wenn die Eigenschaft einen anderen Wert als `none` hat, wird ein [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) erstellt.
In diesem Fall dient das Element als [umgebender Block](/de/docs/Web/CSS/Guides/Display/Containing_block) für alle darin enthaltenen Elemente mit `position: fixed;` oder `position: absolute;`.

Sie können auch die einzelnen Transformations-Eigenschaften verwenden: {{cssxref('translate')}}, {{cssxref('rotate')}} und {{cssxref('scale')}}. Diese Eigenschaften werden in folgender Reihenfolge angewendet: `translate`, `rotate`, `scale` und zuletzt `transform`.

> [!WARNING]
> Nur transformierbare Elemente können mit `transform` transformiert werden.
> Dazu gehören alle Elemente, deren Layout dem CSS-Boxmodell unterliegt, mit Ausnahme von {{Glossary("Inline-level_content", "nicht ersetzten Inline-Boxen")}}, [Tabellenspalten-Boxen](/de/docs/Web/HTML/Reference/Elements/col) und [Tabellenspalten-Gruppen-Boxen](/de/docs/Web/HTML/Reference/Elements/colgroup).

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
/* Keyword value */
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

Diese Eigenschaft wird entweder durch den Schlüsselwortwert `none` oder durch eine durch Leerzeichen getrennte Liste von `<transform-function>`-Werten angegeben:

- {{cssxref("&lt;transform-function&gt;")}}
  - : Eine oder mehrere anzuwendende [CSS-Transformationsfunktionen](/de/docs/Web/CSS/Reference/Values/transform-function).
    Die Transformationsfunktionen werden von links nach rechts kombiniert: Jede Funktion legt einen neuen Koordinatenraum für die nächste Funktion fest. Dadurch entspricht das visuelle Ergebnis der Reihenfolge, in der die Funktionen geschrieben sind. Alternativ lässt sich dieselbe Transformation bei unverändertem Koordinatenraum des Elternelements als Anwendung der Funktionen in umgekehrter Reihenfolge (von rechts nach links) beschreiben.
- `none`
  - : Gibt an, dass keine Transformation angewendet werden soll.

## Barrierefreiheit

Animationen mit Skalierung oder Zoom können die Barrierefreiheit beeinträchtigen, da sie bestimmte Arten von Migräne auslösen können.
Wenn Sie solche Animationen auf Ihrer Website verwenden, sollten Sie eine Möglichkeit anbieten, Animationen zu deaktivieren – vorzugsweise für die gesamte Website.

Erwägen Sie außerdem, das Media-Feature {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} zu verwenden. Damit können Sie eine [Medienabfrage](/de/docs/Web/CSS/Guides/Media_queries) erstellen, die Animationen deaktiviert, wenn die Person in ihren Systemeinstellungen reduzierte Animationen festgelegt hat.

Weitere Informationen:

- [MDN: WCAG verstehen – Erläuterungen zu Leitlinie 2.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.3_—_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Erfolgskriterium 2.3.3 verstehen | W3C: WCAG 2.1 verstehen](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Ein Element verschieben und drehen

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

### Reihenfolge der Transformationsfunktionen vergleichen

Die Reihenfolge der Transformationsfunktionen ist wichtig.

In diesem Beispiel werden zwei Boxen um dieselben Werte gedreht und verschoben, die Funktionen stehen jedoch in umgekehrter Reihenfolge. Die gepunkteten Linien markieren die X-Achse vor und nach der Drehung.

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

{{EmbedLiveSample("comparing_the_order_of_transform_functions", "400", "460")}}

- Box 1 (zuerst `translateX()`, dann `rotate()`): Der Koordinatenraum verschiebt sich zunächst um `200px` entlang der X-Achse und dreht sich anschließend in diesem verschobenen Raum um `135deg`. Das Element befindet sich dadurch gedreht rechts von seiner ursprünglichen Position.
- Box 2 (zuerst `rotate()`, dann `translateX()`): Der Koordinatenraum dreht sich zunächst um `135deg`. Anschließend bewegt sich das Element um `200px` entlang der gedrehten Achse in die durch die gepunkteten Linien angezeigte Richtung.
  Weitere Beispiele finden Sie unter [CSS-Transformationen verwenden](/de/docs/Web/CSS/Guides/Transforms/Using) und {{cssxref("&lt;transform-function&gt;")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Transformationen verwenden](/de/docs/Web/CSS/Guides/Transforms/Using)
- Der Datentyp {{cssxref("&lt;transform-function&gt;")}} mit Erläuterungen zu allen Transformationsfunktionen.
- Einzelne CSS-Eigenschaften: {{cssxref('translate')}}, {{cssxref('rotate')}} und {{cssxref('scale')}} (eine Eigenschaft `skew` gibt es nicht).
- Das SVG-Attribut {{SVGAttr("transform")}}
- Online-Tool zur Visualisierung von CSS-Transformationsfunktionen: [CSS Transform Playground](https://css-transform.moro.es/)
