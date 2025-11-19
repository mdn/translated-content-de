---
title: CSS-Bewegungspfad
short-title: Motion path
slug: Web/CSS/Guides/Motion_path
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das **CSS Motion Path** Modul ermöglicht es Autoren, jedes grafische Objekt entlang eines benutzerdefinierten Pfades zu animieren.

Das [CSS-Transformationsmodul](/de/docs/Web/CSS/Guides/Transforms) bietet Funktionen, die es erlauben, Boxen relativ zu ihrer Position auf der Seite neu zu positionieren, zu drehen, zu skalieren und zu verzerren, ohne das Layout anderer Elemente auf der Seite zu stören. Diese Transformationen können animiert und überführt werden, jedoch nur auf relativ einfache Weisen.

Die Funktionen des CSS Motion Path Moduls bieten Offset-Transformationen: Transformationen, die einen Punkt auf einem Element an eine Offset-Distanz entlang eines Offset-Pfades ausrichten, wobei das transformierte Element optional rotiert wird, um der Pfadrichtung zu folgen. Dieses Modul ermöglicht mächtige Transformationsmöglichkeiten, zum Beispiel:

- Positionierung mithilfe polarer Koordinaten, anstatt die Transformation auf die standardmäßigen rechteckigen {{cssxref("transform")}}-Funktion-Koordinaten zu beschränken.
- Animieren eines Elements entlang eines definierten Pfades.

CSS-Bewegungspfade erlauben die Definition komplexer 2D-Raumübergänge durch Nutzung von [CSS-Formfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#shape_functions).

Zum Beispiel können Sie mit der {{cssxref("offset-path")}}-Eigenschaft einen spezifischen Pfad beliebiger Form definieren. Sie können dann ein Element animieren, um sich entlang dieses Pfades zu bewegen, indem Sie die {{cssxref("offset-distance")}}-Eigenschaft animieren und es an jedem Punkt mit der {{cssxref("offset-rotate")}}-Eigenschaft rotieren.

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

In diesem Beispiel haben wir [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) und [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) verwendet, um einen Container mit einem hellrosa Hintergrund in eine Herzform zu schneiden. Wir haben eine {{cssxref("basic-shape/path","path()")}}-Funktion als Wert der {{cssxref("clip-path")}}-Eigenschaft verwendet. Das Kind ist eine `10px` mal `10px` große rote Box, die entlang des Randes ihres Elternteils geführt wird. Dies haben wir erreicht, indem wir denselben {{cssxref("basic-shape")}}-Wert als Pfad verwendet und die {{cssxref("offset-path")}}-Eigenschaft der Box auf denselben `path()`-Funktionswert eingestellt haben. Wir haben [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations) genutzt, um die {{cssxref("offset-distance")}} von `0%` auf `100%` über drei Sekunden zu ändern.

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
  - : Schritt-für-Schritt-Anleitung, um Animationen mit CSS zu erstellen.

## Verwandte Konzepte

[CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) Modul

- {{cssxref("transform")}}
- {{cssxref("transform-origin")}}
- {{cssxref("translate")}}

[CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul

- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}

[CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul

- {{cssxref("&lt;basic-shape&gt;")}}
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

- {{cssxref("position_value", "&lt;position&gt;")}}
- [`<easing-function>`](/de/docs/Web/CSS/Reference/Values/easing-function)
- {{cssxref("radial-gradient")}} Funktion
- [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) Medienabfrage
- {{cssxref("will-change")}} CSS-Eigenschaft
