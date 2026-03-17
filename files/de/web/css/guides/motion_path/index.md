---
title: CSS-Bewegungspfad
short-title: Motion path
slug: Web/CSS/Guides/Motion_path
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

Das **CSS-Bewegungspfad-Modul** ermöglicht es Autoren, jedes grafische Objekt entlang eines benutzerdefinierten Pfads zu animieren.

Das [CSS-Transformationsmodul](/de/docs/Web/CSS/Guides/Transforms) bietet Funktionen, die es ermöglichen, Boxen relativ zu ihrer angelegten Position zu repositionieren, zu drehen, zu skalieren und zu scheren, ohne das Layout anderer Elemente auf der Seite zu stören. Diese Transformationen können animiert und überblendet werden, jedoch nur auf relativ einfache Weise.

Die Funktionen des CSS-Bewegungspfad-Moduls bieten Versatztransformationen: Transformationen, die einen Punkt an einem Element an eine Versatzdistanz entlang eines Versatzpfads anpassen, wobei das transformierte Element optional gedreht wird, um der Pfadrichtung zu folgen. Dieses Modul ermöglicht leistungsstarke Transformationsmöglichkeiten, zum Beispiel:

- Positionierung mit Polarkoordinaten, anstatt die Transformation auf die standardmäßigen rechteckigen {{cssxref("transform")}}-Koordinaten zu beschränken.
- Animieren eines Elements entlang eines definierten Pfads.

CSS-Bewegungspfade erlauben die Definition komplexer 2D-raumbezogener Übergänge durch die Nutzung von [CSS-Formfunktionen](/de/docs/Web/CSS/Reference/Values/Functions#shape_functions).

Zum Beispiel können Sie mit der Eigenschaft {{cssxref("offset-path")}} einen bestimmten Pfad in beliebiger Form definieren. Anschließend können Sie ein Element animieren, das sich entlang dieses Pfads bewegt, indem Sie die Eigenschaft {{cssxref("offset-distance")}} animieren und es an jedem Punkt mit der Eigenschaft {{cssxref("offset-rotate")}} rotieren.

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

In diesem Beispiel haben wir [CSS-Masking](/de/docs/Web/CSS/Guides/Masking) und [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) verwendet, um einen Container mit einem hellrosa Hintergrund in eine Herzform zu schneiden. Wir nutzten eine {{cssxref("basic-shape/path","path()")}}-Funktion als Wert der Eigenschaft {{cssxref("clip-path")}}. Das Kind ist eine `10px` mal `10px` große rote Box, die entlang der Kante des übergeordneten Elements verläuft. Wir erreichten dies, indem wir dieselbe {{cssxref("basic-shape")}} als Pfad verwendeten und die Eigenschaft {{cssxref("offset-path")}} der Box auf denselben `path()`-Funktionswert setzten. Wir verwendeten [CSS-Animationen](/de/docs/Web/CSS/Guides/Animations), um die {{cssxref("offset-distance")}} von `0%` auf `100%` über drei Sekunden zu ändern.

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

[CSS-Transformationsmodul](/de/docs/Web/CSS/Guides/Transforms)

- {{cssxref("transform")}}
- {{cssxref("transform-origin")}}
- {{cssxref("translate")}}

[CSS-Maskingmodul](/de/docs/Web/CSS/Guides/Masking)

- {{cssxref("clip-path")}}
- {{cssxref("clip-rule")}}

[CSS-Formenmodul](/de/docs/Web/CSS/Guides/Shapes)

- {{cssxref("basic-shape")}}
- {{cssxref("basic-shape/circle","circle()")}}
- {{cssxref("basic-shape/ellipse","ellipse()")}}
- {{cssxref("basic-shape/inset","inset()")}}
- {{cssxref("basic-shape/path","path()")}}
- {{cssxref("basic-shape/polygon","polygon()")}}
- {{cssxref("basic-shape/rect","rect()")}}
- {{cssxref("basic-shape/shape","shape()")}}
- {{cssxref("basic-shape/xywh","xywh()")}}

[CSS-Animationsmodul](/de/docs/Web/CSS/Guides/Animations)

- {{cssxref("animation")}} Kurzform
- {{cssxref("@keyframes")}}

[CSS-Boxmodellmodul](/de/docs/Web/CSS/Guides/Box_model)

- [`<coord-box>`](/de/docs/Web/CSS/Reference/Properties/offset-path#coord-box)

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{cssxref("&lt;position&gt;")}}
- {{cssxref("easing-function")}}
- {{cssxref("gradient/radial-gradient")}} Funktion
- {{cssxref("@media/prefers-reduced-motion")}} Media-Abfrage
- {{cssxref("will-change")}} CSS-Eigenschaft
