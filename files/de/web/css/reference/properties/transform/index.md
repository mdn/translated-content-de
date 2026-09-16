---
title: "`transform` CSS property"
short-title: transform
slug: Web/CSS/Reference/Properties/transform
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`transform`** ermöglicht es Ihnen, ein Element zu drehen, zu skalieren, zu scheren oder zu verschieben.
Sie verändert den Koordinatenraum des CSS-[visuellen Formatierungsmodells](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model).

Wenn die Eigenschaft einen anderen Wert als `none` hat, wird ein [Stacking Context](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) erstellt.
In diesem Fall fungiert das Element als [Containing Block](/de/docs/Web/CSS/Guides/Display/Containing_block) für alle darin enthaltenen Elemente mit `position: fixed;` oder `position: absolute;`.

Sie können auch die einzelnen Transformations-Eigenschaften verwenden: {{cssxref('translate')}}, {{cssxref('rotate')}} und {{cssxref('scale')}}. Diese Eigenschaften werden in der Reihenfolge `translate`, `rotate`, `scale` und schließlich `transform` angewendet.

> [!WARNING]
> Nur transformierbare Elemente können mit `transform` transformiert werden.
> Das heißt, alle Elemente, deren Layout durch das CSS-Box-Modell bestimmt wird, mit Ausnahme von: {{Glossary("Inline-level_content", "nicht ersetzten Inline-Boxen")}}, [Tabellenspalten-Boxen](/de/docs/Web/HTML/Reference/Elements/col) und [Tabellenspalten-Gruppen-Boxen](/de/docs/Web/HTML/Reference/Elements/colgroup).

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

Diese Eigenschaft wird entweder als Schlüsselwortwert `none` oder als durch Leerzeichen getrennte Liste von `<transform-function>`-Werten angegeben:

- {{cssxref("&lt;transform-function&gt;")}}
  - : Eine oder mehrere anzuwendende [CSS-Transformationsfunktionen](/de/docs/Web/CSS/Reference/Values/transform-function).
    Die Transformationsfunktionen werden von links nach rechts kombiniert – jede Funktion legt einen neuen Koordinatenraum für die nächste Funktion fest und so weiter –, sodass das visuelle Ergebnis der geschriebenen Reihenfolge der Funktionen entspricht. Alternativ kann dieselbe Transformation bei Beibehaltung des übergeordneten Koordinatenraums als Anwendung der Funktionen in umgekehrter Reihenfolge (von rechts nach links) beschrieben werden.
- `none`
  - : Gibt an, dass keine Transformation angewendet werden soll.

## Barrierefreiheit

Skalierungs-/Zoom-Animationen sind für die Barrierefreiheit problematisch, da sie häufig bestimmte Arten von Migräne auslösen.
Wenn Sie solche Animationen auf Ihrer Website einbinden müssen, sollten Sie eine Steuerungsmöglichkeit bereitstellen, mit der Benutzer Animationen deaktivieren können, vorzugsweise für die gesamte Website.

Erwägen Sie außerdem die Verwendung des Media Features {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} – verwenden Sie es, um eine [Media Query](/de/docs/Web/CSS/Guides/Media_queries) zu schreiben, die Animationen deaktiviert, wenn der Benutzer in seinen Systemeinstellungen reduzierte Animationen festgelegt hat.

Weitere Informationen:

- [MDN: Erläuterungen zu WCAG, Richtlinie 2.3](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.3_—_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Understanding Success Criterion 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verschieben und Drehen eines Elements

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

In diesem Beispiel werden zwei Boxen mit denselben Werten gedreht und verschoben, aber die Funktionen stehen in der entgegengesetzten Reihenfolge. Die gepunkteten Linien markieren die X-Achse vor und nach der Drehung.

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

- Box 1 (zuerst `translateX()`, dann `rotate()`): Der Koordinatenraum wird zunächst entlang der X-Achse um `200px` verschoben und dreht sich dann innerhalb dieses verschobenen Raums um `135deg`, sodass das Element gedreht rechts von seiner ursprünglichen Position landet.
- Box 2 (zuerst `rotate()`, dann `translateX()`): Der Koordinatenraum dreht sich zunächst um `135deg`, sodass sich das Element anschließend entlang der gedrehten Achse um `200px` bewegt, in die durch die gepunkteten Linien dargestellte Richtung.
  Weitere Beispiele finden Sie unter [CSS-Transformationen verwenden](/de/docs/Web/CSS/Guides/Transforms/Using) und bei {{cssxref("&lt;transform-function&gt;")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Transformationen verwenden](/de/docs/Web/CSS/Guides/Transforms/Using)
- Datentyp {{cssxref("&lt;transform-function&gt;")}} mit Erklärungen zu allen Transformationsfunktionen.
- Einzelne CSS-Eigenschaften: {{cssxref('translate')}}, {{cssxref('rotate')}} und {{cssxref('scale')}} (es gibt keine Eigenschaft `skew`).
- SVG-Attribut {{SVGAttr("transform")}}
- Online-Tool zur Visualisierung von CSS-Transformationsfunktionen: [CSS Transform Playground](https://css-transform.moro.es/)
