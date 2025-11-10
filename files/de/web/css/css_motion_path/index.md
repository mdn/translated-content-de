---
title: CSS-Bewegungspfad
slug: Web/CSS/CSS_motion_path
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS Bewegungspfad**-Modul ermöglicht es Autoren, jedes grafische Objekt entlang eines benutzerdefinierten Pfades zu animieren.

Das [CSS-Transformations-](/de/docs/Web/CSS/Guides/Transforms) Modul bietet Funktionen, die es ermöglichen, Boxen im Verhältnis zu ihrer angeordneten Position ohne Störung des Layouts anderer Elemente auf der Seite neu zu positionieren, zu drehen, zu skalieren und zu schrägen. Diese Transformationen können animiert und übergangen werden, jedoch nur auf relativ einfache Weise.

Die Funktionen des CSS Bewegungspfad-Moduls bieten Offset-Transformationen: Transformationen, die einen Punkt auf einem Element mit einer Offset-Distanz entlang eines Offset-Pfades ausrichten und das transformierte Element optional so drehen, dass es der Pfadrichtung folgt. Dieses Modul ermöglicht leistungsstarke Transformationsmöglichkeiten, zum Beispiel:

- Positionierung mit Polarkoordinaten anstatt Transformationen auf die Standardrechteck-Koordinaten der {{cssxref("transform")}} Funktion zu beschränken.
- Animierung eines Elements entlang eines definierten Pfades.

CSS-Bewegungspfade erlauben die Definition von komplexen 2D-Raumübergängen durch die Nutzung von [CSS-Formfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#shape_functions).

Zum Beispiel können Sie einen spezifischen Pfad jeder gewünschten Form mit der {{cssxref("offset-path")}} Eigenschaft definieren. Sie können dann ein Element animieren, sich entlang dieses Pfades zu bewegen, indem Sie die {{cssxref("offset-distance")}} Eigenschaft animieren und es an jedem Punkt mit der {{cssxref("offset-rotate")}} Eigenschaft drehen.

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

In diesem Beispiel haben wir [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) und [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) verwendet, um einen Container mit einem hellrosa Hintergrund in eine Herzform zu schneiden. Wir nutzten eine {{cssxref("basic-shape/path","path()")}} Funktion als Wert der {{cssxref("clip-path")}} Eigenschaft. Das Kind ist eine `10px` mal `10px` große rote Box, die entlang des Randes ihres Elternteils folgt. Wir haben dies erreicht, indem wir die gleiche {{cssxref("basic-shape")}} als Pfad verwendeten und die {{cssxref("offset-path")}} Eigenschaft der Box auf denselben `path()` Funktion Wert setzten. Wir nutzten [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), um die {{cssxref("offset-distance")}} von `0%` auf `100%` über drei Sekunden zu ändern.

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

[CSS-Transformations-](/de/docs/Web/CSS/Guides/Transforms) Modul

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

[CSS-Boxmodell-](/de/docs/Web/CSS/Guides/Box_model) Modul

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Properties/offset-path#coord-box)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("position_value", "&lt;position&gt;")}}
- [`<easing-function>`](/de/docs/Web/CSS/Reference/Values/easing-function)
- {{cssxref("radial-gradient")}} Funktion
- [`prefers-reduced-motion`](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) Medienabfrage
- {{cssxref("will-change")}} CSS-Eigenschaft
