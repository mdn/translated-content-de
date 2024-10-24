---
title: transform
slug: Web/CSS/transform
l10n:
  sourceCommit: 8dd227b90abeed60434970aff3da9776d1f24d67
---

{{CSSRef}}

Die **`transform`**-Eigenschaft [CSS](/de/docs/Web/CSS) ermöglicht es Ihnen, ein Element zu drehen, zu skalieren, zu schrägstellen oder zu verschieben.
Sie modifiziert den Koordinatenraum des CSS-[visuellen Formatierungsmodells](/de/docs/Web/CSS/Visual_formatting_model).

{{EmbedInteractiveExample("pages/css/transform.html")}}

Wenn die Eigenschaft einen anderen Wert als `none` hat, wird ein [Stacking Context](/de/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) erstellt. In diesem Fall wird das Element als [Containting Block](/de/docs/Web/CSS/Containing_block) für alle darin enthaltenen `position: fixed;` oder `position: absolute;`-Elemente fungieren.

> [!WARNING]
> Nur transformierbare Elemente können `transform`iert werden. Das heißt, alle Elemente, deren Layout durch das CSS-Box-Modell bestimmt wird, mit Ausnahme von: {{Glossary("Inline-level_content", "nicht-ersetzten Inline-Boxen")}}, [Tabellenspalten-Boxen](/de/docs/Web/HTML/Element/col) und [Tabellenspalten-Gruppen-Boxen](/de/docs/Web/HTML/Element/colgroup).

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

Die `transform`-Eigenschaft kann entweder als das Schlüsselwort `none` oder als ein oder mehrere `<transform-function>`-Werte angegeben werden.

### Werte

- {{cssxref("&lt;transform-function&gt;")}}
  - : Eine oder mehrere der [CSS-Transform-Funktionen](/de/docs/Web/CSS/transform-function), die angewendet werden sollen.
    Die Transformationsfunktionen werden in der Reihenfolge von links nach rechts multipliziert, das heißt, zusammengesetzte Transformationen werden effektiv [in der Reihenfolge von rechts nach links angewendet](#transformationsreihenfolge).
- `none`
  - : Gibt an, dass keine Transformation angewendet werden soll.

## Barrierefreiheit

Skalierungs-/Zoom-Animationen sind problematisch für die Barrierefreiheit, da sie eine häufige Ursache für bestimmte Arten von Migräne sind. Wenn Sie solche Animationen auf Ihrer Webseite einfügen müssen, sollten Sie eine Kontrolle bereitstellen, mit der Nutzer Animationen ausschalten können, vorzugsweise für die gesamte Seite.

Berücksichtigen Sie auch die Nutzung der {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Medienfunktion — nutzen Sie sie, um eine [Media Query](/de/docs/Web/CSS/CSS_media_queries) zu schreiben, die Animationen deaktiviert, wenn der Nutzer in seinen Systemeinstellungen eine reduzierte Animation angegeben hat.

Erfahren Sie mehr:

- [MDN Erklärung zu WCAG, Richtlinie 2.3](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.3_—_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Erklärung zum Erfolgs-Kriterium 2.3.3 | W3C Erklärung zu WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

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

### Transformationsreihenfolge

Die Reihenfolge der Transformationsfunktionen ist wichtig. In diesem Beispiel werden zwei Boxen um die gleichen Werte gedreht und verschoben; nur die Reihenfolge der Transformationsfunktionen unterscheidet sich.

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
.original:before,
.original:after {
  content: "";
  position: absolute;
  top: 100px;
  width: 500px;
  left: -150px;
  height: 1px;
  border-top: 2px dotted;
}
.original:after {
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

Wenn ein Element vor dem Verschieben gedreht wird, befindet sich die Verschieberichtung auf der gedrehten Achse. Die Achse ist durch die gestrichelten Linien angezeigt.

### Weitere Beispiele

Bitte sehen Sie [Using CSS transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms) und {{cssxref("&lt;transform-function&gt;")}} für weitere Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using CSS transforms](/de/docs/Web/CSS/CSS_transforms/Using_CSS_transforms)
- {{cssxref("&lt;transform-function&gt;")}} Datentyp mit allen erklärten Transformationsfunktionen.
- Einzelne CSS-Eigenschaften: {{cssxref('translate')}}, {{cssxref('rotate')}}, und {{cssxref('scale')}} (es gibt keine `skew`-Eigenschaft).
- Online-Tool zur Visualisierung von CSS-Transformationsfunktionen: [CSS Transform Playground](https://css-transform.moro.es/)
