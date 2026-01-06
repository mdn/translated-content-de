---
title: CSS-Bewegungspfad
short-title: Motion path
slug: Web/CSS/Guides/Motion_path
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

Das **CSS-Bewegungspfad-Modul** ermöglicht es Entwicklern, beliebige grafische Objekte entlang eines benutzerdefinierten Pfads zu animieren.

Das [CSS-Transformationsmodul](/de/docs/Web/CSS/Guides/Transforms) bietet Funktionen, die es ermöglichen, Boxen relativ zu ihrer ausgelegten Position zu verschieben, zu drehen, zu skalieren und zu scheren, ohne das Layout anderer Elemente auf der Seite zu stören. Diese Transformationen können animiert und übergegangen werden, jedoch nur auf relativ grundlegende Weise.

Die Funktionen des CSS-Bewegungspfad-Moduls bieten Offset-Transformationen: Transformationen, die einen Punkt auf einem Element an eine Offset-Distanz entlang eines Offset-Pfads ausrichten, wobei das transformierte Element optional gedreht wird, um der Pfadrichtung zu folgen. Dieses Modul ermöglicht leistungsstarke Transformationsmöglichkeiten, zum Beispiel:

- Positionierung mit polaren Koordinaten anstelle der Einschränkung der Transformation auf die standardmäßigen rechteckigen {{cssxref("transform")}}-Koordinaten.
- Animieren eines Elements entlang eines definierten Pfads.

CSS-Bewegungspfade ermöglichen die Definition komplexer 2D-Raumübergänge, indem [CSS-Formfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#shape_functions) genutzt werden.

Sie können beispielsweise mit der {{cssxref("offset-path")}}-Eigenschaft einen spezifischen Pfad jeder gewünschten Form definieren. Anschließend können Sie ein Element animieren, das sich entlang dieses Pfads bewegt, indem Sie die {{cssxref("offset-distance")}}-Eigenschaft animieren und es an jedem Punkt mit der {{cssxref("offset-rotate")}}-Eigenschaft drehen.

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

In diesem Beispiel haben wir [CSS-Maskierungen](/de/docs/Web/CSS/Guides/Masking) und [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) verwendet, um einen Container mit einem hellrosa Hintergrund in eine Herzform zu schneiden. Wir haben eine {{cssxref("basic-shape/path","path()")}}-Funktion als Wert der {{cssxref("clip-path")}}-Eigenschaft verwendet. Sein Kind ist eine `10px` mal `10px` große rote Box, die entlang des Randes ihres Elternteils bewegt wird. Dies haben wir erreicht, indem wir dieselbe {{cssxref("basic-shape")}} als Pfad verwendet und die {{cssxref("offset-path")}}-Eigenschaft der Box auf denselben `path()`-Funktionswert gesetzt haben. Wir haben [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) verwendet, um die {{cssxref("offset-distance")}} von `0%` auf `100%` über drei Sekunden zu ändern.

## Referenz

### Eigenschaften

- {{cssxref("offset")}} Kurzform
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}

### Funktionen

- {{cssxref("ray")}}

## Leitfäden

- [Verwendung von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
  - : Schritt-für-Schritt-Anleitung zur Erstellung von Animationen mit CSS.

## Verwandte Konzepte

[CSS-Transforms](/de/docs/Web/CSS/Guides/Transforms) Modul

- {{cssxref("transform")}}
- {{cssxref("transform-origin")}}
- {{cssxref("translate")}}

[CSS-Maskierungen](/de/docs/Web/CSS/Guides/Masking) Modul

- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}

[CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul

- {{cssxref("basic-shape")}}
- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) Modul

- {{cssxref("animation")}} Kurzform
- {{cssxref("@keyframes")}}

[CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model) Modul

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Properties/offset-path#coord-box)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("&lt;position&gt;")}}
- {{cssxref("easing-function")}}
- {{cssxref("gradient/radial-gradient")}} Funktion
- {{cssxref("@media/prefers-reduced-motion")}} Media-Query
- {{cssxref("will-change")}} CSS-Eigenschaft
