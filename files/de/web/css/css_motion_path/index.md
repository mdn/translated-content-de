---
title: CSS-Bewegungspfad
slug: Web/CSS/CSS_motion_path
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **CSS-Bewegungspfad**-Modul ermöglicht es Autoren, jedes grafische Objekt entlang eines benutzerdefinierten Pfades zu animieren.

Das [CSS-Transformations](/de/docs/Web/CSS/CSS_transforms)-Modul bietet Funktionen, die es ermöglichen, Boxen relativ zu ihrer festgelegten Position neu zu positionieren, zu drehen, zu skalieren und zu scheren, ohne das Layout anderer Elemente auf der Seite zu stören. Diese Transformationen können animiert und überblendet werden, allerdings nur auf relativ einfache Weise.

Die Funktionen des CSS-Bewegungspfad-Moduls bieten Offset-Transformationen: Transformationen, die einen Punkt auf einem Element an eine Offset-Entfernung entlang eines Offset-Pfades ausrichten, wobei das transformierte Element optional so gedreht wird, dass es der Pfadrichtung folgt. Dieses Modul ermöglicht leistungsstarke Transformationsmöglichkeiten, beispielsweise:

- Positionierung unter Verwendung von Polarkoordinaten statt Begrenzung der Transformation auf die standardmäßigen rechteckigen {{cssxref("transform")}}-Funktionskoordinaten.
- Animieren eines Elements entlang eines definierten Pfades.

CSS-Bewegungspfade ermöglichen die Definition komplexer 2D-Raumübergänge durch die Nutzung von [CSS-Formfunktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#shape_functions).

Zum Beispiel können Sie mit der {{cssxref("offset-path")}}-Eigenschaft einen spezifischen Pfad beliebiger Form definieren. Sie können dann ein Element animieren, um entlang dieses Pfades zu bewegen, indem Sie die {{cssxref("offset-distance")}}-Eigenschaft animieren, und es an jedem Punkt mit der {{cssxref("offset-rotate")}}-Eigenschaft drehen.

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

In diesem Beispiel haben wir [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) und [CSS-Formen](/de/docs/Web/CSS/CSS_shapes) verwendet, um einen Container mit einem hellrosa Hintergrund in eine Herzform zu schneiden. Wir haben eine {{cssxref("basic-shape/path","path()")}}-Funktion als Wert der {{cssxref("clip-path")}}-Eigenschaft verwendet. Sein Kind ist eine `10px` mal `10px` rote Box, die entlang der Kante ihres Elternteils folgt. Wir haben dies erreicht, indem wir dieselbe {{cssxref("basic-shape")}} als Pfad verwendet und die {{cssxref("offset-path")}}-Eigenschaft der Box auf denselben `path()`-Funktionswert gesetzt haben. Wir haben [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) verwendet, um die {{cssxref("offset-distance")}} von `0%` auf `100%` über drei Sekunden zu ändern.

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

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : Schritt-für-Schritt-Anleitung zur Erstellung von Animationen mit CSS.

## Verwandte Konzepte

[CSS-Transformations](/de/docs/Web/CSS/CSS_transforms)-Modul

- {{cssxref("transform")}}
- {{cssxref("transform-origin")}}
- {{cssxref("translate")}}

[CSS-Maskierung](/de/docs/Web/CSS/CSS_masking)-Modul

- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}

[CSS-Formen](/de/docs/Web/CSS/CSS_shapes)-Modul

- {{cssxref("&lt;basic-shape&gt;")}}
- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

[CSS-Animationen](/de/docs/Web/CSS/CSS_animations)-Modul

- {{cssxref("animation")}} Kurzschreibweise
- {{cssxref("@keyframes")}}

[CSS-Boxmodell](/de/docs/Web/CSS/CSS_box_model)-Modul

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Properties/offset-path#coord-box)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("position_value", "&lt;position&gt;")}}
- [`<easing-function>`](/de/docs/Web/CSS/easing-function)
- {{cssxref("radial-gradient")}}-Funktion
- [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Media-Abfrage
- {{cssxref("will-change")}}-CSS-Eigenschaft
