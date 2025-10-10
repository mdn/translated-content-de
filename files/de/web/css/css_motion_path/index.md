---
title: CSS-Bewegungspfad
slug: Web/CSS/CSS_motion_path
l10n:
  sourceCommit: ac866610a8d09cb54a6f7abcf00c18045873300d
---

Das **CSS motion path** Modul ermöglicht es Autoren, ein beliebiges grafisches Objekt entlang eines benutzerdefinierten Pfads zu animieren.

Das [CSS transforms](/de/docs/Web/CSS/CSS_transforms) Modul bietet Funktionen, die es ermöglichen, Boxen neu zu positionieren, zu drehen, zu skalieren und schräg zu stellen, relativ zu ihrer ausgelegten Position, ohne das Layout anderer Elemente auf der Seite zu stören. Diese Transformationen können animiert und überblendet werden, aber nur in relativ einfachen Formen.

Die Funktionen des CSS-Bewegungspfadmoduls bieten Offset-Transformationen: Transformationen, die einen Punkt auf einem Element mit einem Offset-Abstand entlang eines Offset-Pfads ausrichten, wobei optional das transformierte Element so gedreht wird, dass es der Pfadrichtung folgt. Dieses Modul ermöglicht mächtige Transformationsmöglichkeiten, zum Beispiel:

- Positionierung mit polaren Koordinaten anstatt die Transformation auf die standardmäßigen rechteckigen {{cssxref("transform")}} Funktionskoordinaten zu beschränken.
- Animation eines Elements entlang eines definierten Pfads.

CSS-Bewegungspfade ermöglichen die Definition komplexer 2D-Raumübergänge durch Nutzung von [CSS shape functions](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#shape_functions).

Zum Beispiel können Sie mit der Eigenschaft {{cssxref("offset-path")}} einen bestimmten Pfad in beliebiger Form definieren, den Sie möchten. Sie können dann ein Element animieren, um sich entlang dieses Pfades zu bewegen, indem Sie die Eigenschaft {{cssxref("offset-distance")}} animieren und es an jedem Punkt mit der Eigenschaft {{cssxref("offset-rotate")}} drehen.

## Bewegungspfade in Aktion

```html hidden
<div id="heart">
  <div id="motion-demo"></div>
</div>
```

```css hidden
#motion-demo {
  offset-path: path(
    "M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
  );
  animation: move 3000ms infinite linear;
  width: 10px;
  height: 10px;
  background: red;
}

#heart {
  width: 200px;
  height: 200px;
  background-color: lightpink;
  clip-path: path(
    "M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
  );
}

@keyframes move {
  100% {
    offset-distance: 100%;
  }
}
```

{{EmbedLiveSample('Motion paths in action', '100%', 220)}}

In diesem Beispiel haben wir [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) und [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) verwendet, um einen Container mit hellrosa Hintergrund in eine Herzform zu schneiden. Wir haben eine {{cssxref("basic-shape/path","path()")}} Funktion als Wert der Eigenschaft {{cssxref("clip-path")}} verwendet. Sein Kind ist eine `10px` mal `10px` rote Box, die entlang des Randes ihres Elternteils folgen soll. Wir haben dies erreicht, indem wir die gleiche {{cssxref("basic-shape")}} als Pfad verwendet und die Eigenschaft {{cssxref("offset-path")}} der Box auf denselben `path()` Funktionswert gesetzt haben. Wir haben [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwendet, um die {{cssxref("offset-distance")}} von `0%` auf `100%` über drei Sekunden zu ändern.

## Referenz

### Eigenschaften

- {{cssxref("offset")}} Kurzschreibweise
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

### Funktionen

- {{cssxref("ray")}}

## Leitfäden

- [Using CSS animations](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Schritt-für-Schritt-Anleitung zum Erstellen von Animationen mit CSS.

## Verwandte Konzepte

[CSS transforms](/de/docs/Web/CSS/CSS_transforms) Modul

- {{cssxref("transform")}}
- {{cssxref("transform-origin")}}
- {{cssxref("translate")}}

[CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul

- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}

[CSS-Formen](/de/docs/Web/CSS/CSS_shapes) Modul

- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations) Modul

- {{cssxref("animation")}} Kurzschreibweise
- {{cssxref("@keyframes")}}

[CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model) Modul

- [`<coord-box>`](/de/docs/Web/CSS/offset-path#coord-box)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("position_value", "&lt;position&gt;")}}
- [`<easing-function>`](/de/docs/Web/CSS/easing-function)
- {{cssxref("radial-gradient")}} Funktion
- [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Medienabfrage
- {{cssxref("will-change")}} CSS Eigenschaft
