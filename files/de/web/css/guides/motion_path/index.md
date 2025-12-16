---
title: CSS-Bewegungspfad
short-title: Motion path
slug: Web/CSS/Guides/Motion_path
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS Bewegungspfad**-Modul ermöglicht es Autoren, ein beliebiges grafisches Objekt entlang eines benutzerdefinierten Pfades zu animieren.

Das [CSS-Transformations](/de/docs/Web/CSS/Guides/Transforms)-Modul bietet Funktionen, die es ermöglichen, Kästen relativ zu ihrer angelegten Position neu zu positionieren, zu drehen, zu skalieren und zu verzerren, ohne das Layout anderer Elemente auf der Seite zu stören. Diese Transformationen können animiert und übergangen werden, jedoch nur in relativ einfachen Weisen.

Die Funktionen des CSS Bewegungspfad-Moduls bieten Offset-Transformationen: Transformationen, die einen Punkt auf einem Element an eine Offset-Distanz entlang eines Offset-Pfades ausrichten und optional das transformierte Element so drehen, dass es der Pfadrichtung folgt. Dieses Modul ermöglicht leistungsstarke Transformationsmöglichkeiten, zum Beispiel:

- Positionierung mit Polarkoordinaten anstatt die Transformation auf die standardmäßigen rechteckigen {{cssxref("transform")}}-Funktionskoordinaten zu beschränken.
- Animation eines Elements entlang eines definierten Pfades.

CSS-Bewegungspfade ermöglichen die Definition komplexer zweidimensionaler räumlicher Übergänge mithilfe von [CSS-Formfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#shape_functions).

Zum Beispiel können Sie mit der {{cssxref("offset-path")}}-Eigenschaft einen bestimmten Pfad jeder gewünschten Form definieren. Sie können dann ein Element so animieren, dass es sich entlang dieses Pfades bewegt, indem Sie die {{cssxref("offset-distance")}}-Eigenschaft animieren und es an jedem Punkt mit der {{cssxref("offset-rotate")}}-Eigenschaft drehen.

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

{{EmbedLiveSample('Bewegungspfade in Aktion', '100%', 220)}}

In diesem Beispiel haben wir [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) und [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) verwendet, um einen Container mit einem hellrosa Hintergrund in Herzform zu klippen. Wir haben eine {{cssxref("basic-shape/path","path()")}}-Funktion als Wert der {{cssxref("clip-path")}}-Eigenschaft verwendet. Sein Kind ist ein rotes Kästchen mit der Größe `10px` mal `10px`, das entlang des Randes seines Elternteils geführt wird. Wir haben dies getan, indem wir dieselbe {{cssxref("basic-shape")}} als Pfad verwendet haben und die {{cssxref("offset-path")}}-Eigenschaft des Kästchens auf denselben `path()`-Funktionswert gesetzt haben. Wir haben [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) verwendet, um die {{cssxref("offset-distance")}} von `0%` auf `100%` über drei Sekunden zu ändern.

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

- [Verwenden von CSS-Animationen](/de/docs/Web/CSS/Guides/Animations/Using)
  - : Schritt-für-Schritt-Anleitung zum Erstellen von Animationen mit CSS.

## Verwandte Konzepte

[CSS-Transformations](/de/docs/Web/CSS/Guides/Transforms)-Modul

- {{cssxref("transform")}}
- {{cssxref("transform-origin")}}
- {{cssxref("translate")}}

[CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking)-Modul

- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}

[CSS-Formen](/de/docs/Web/CSS/Guides/Shapes)-Modul

- {{cssxref("basic-shape")}}
- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

[CSS-Animationen](/de/docs/Web/CSS/Guides/Animations)-Modul

- {{cssxref("animation")}} Kurzform
- {{cssxref("@keyframes")}}

[CSS-Boxmodell](/de/docs/Web/CSS/Guides/Box_model)-Modul

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Properties/offset-path#coord-box)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("position_value", "&lt;position&gt;")}}
- {{cssxref("easing-function")}}
- {{cssxref("radial-gradient")}} Funktion
- [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) Media Query
- {{cssxref("will-change")}} CSS-Eigenschaft
