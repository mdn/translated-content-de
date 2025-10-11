---
title: CSS motion path
slug: Web/CSS/CSS_motion_path
l10n:
  sourceCommit: 11ef719d1a0bd75b1600d39abd6dfbdcd835c1e2
---

Das **CSS motion path** Modul ermöglicht es Autoren, jedes grafische Objekt entlang eines benutzerdefinierten Pfades zu animieren.

Das [CSS transforms](/de/docs/Web/CSS/CSS_transforms) Modul bietet Funktionen, die es ermöglichen, Boxen relativ zu ihrer Layoutposition neu zu positionieren, zu drehen, zu skalieren und zu verzerren, ohne das Layout anderer Elemente auf der Seite zu stören. Diese Transformationen können animiert und überblendet werden, jedoch nur auf relativ einfache Weise.

Die Funktionen des CSS motion path Moduls bieten versetzte Transformationen: Transformationen, die einen Punkt auf einem Element zu einer versetzten Entfernung entlang eines Versatzpfades ausrichten und das transformierte Element optional drehen, um der Pfadrichtung zu folgen. Dieses Modul ermöglicht leistungsstarke Transformationsmöglichkeiten, zum Beispiel:

- Positionierung unter Verwendung von Polarkoordinaten anstelle der Beschränkung der Transformation auf die Standardrechteck-Koordinaten der {{cssxref("transform")}} Funktion.
- Animation eines Elements entlang eines definierten Pfades.

CSS-Bewegungspfade ermöglichen die Definition komplexer 2D-raumbezogener Übergänge unter Nutzung von [CSS shape functions](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions#shape_functions).

Zum Beispiel können Sie einen spezifischen Pfad in beliebiger Form mit der {{cssxref("offset-path")}} Eigenschaft definieren. Sie können dann ein Element entlang dieses Pfades bewegen, indem Sie die {{cssxref("offset-distance")}} Eigenschaft animieren, und es an jedem Punkt mit der {{cssxref("offset-rotate")}} Eigenschaft drehen.

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

In diesem Beispiel haben wir [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) und [CSS Formen](/de/docs/Web/CSS/CSS_shapes) verwendet, um einen Container mit einem hellrosa Hintergrund in eine Herzform zu schneiden. Wir verwendeten eine {{cssxref("basic-shape/path","path()")}} Funktion als Wert der {{cssxref("clip-path")}} Eigenschaft. Das Kind dieses Containers ist eine `10px` mal `10px` rote Box, die entlang der Kante ihres übergeordneten Elements folgt. Wir erreichten dies, indem wir die gleiche {{cssxref("basic-shape")}} als Pfad verwendeten und die {{cssxref("offset-path")}} Eigenschaft der Box auf denselben `path()` Funktionswert setzten. Mit [CSS-Animationen](/de/docs/Web/CSS/CSS_animations) änderten wir die {{cssxref("offset-distance")}} von `0%` auf `100%` über drei Sekunden.

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

[CSS transforms](/de/docs/Web/CSS/CSS_transforms) Modul

- {{cssxref("transform")}}
- {{cssxref("transform-origin")}}
- {{cssxref("translate")}}

[CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul

- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}

[CSS Formen](/de/docs/Web/CSS/CSS_shapes) Modul

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

[CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul

- [`<coord-box>`](/de/docs/Web/CSS/offset-path#coord-box)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("position_value", "&lt;position&gt;")}}
- [`<easing-function>`](/de/docs/Web/CSS/easing-function)
- {{cssxref("radial-gradient")}} Funktion
- [`prefers-reduced-motion`](/de/docs/Web/CSS/@media/prefers-reduced-motion) Medienabfrage
- {{cssxref("will-change")}} CSS-Eigenschaft
