---
title: offset-distance
slug: Web/CSS/offset-distance
l10n:
  sourceCommit: 75326725db2daa924618e58ae31a43345c7a16dc
---

{{CSSRef}}

Die **`offset-distance`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt eine Position entlang eines {{CSSxRef("offset-path")}} an, an der ein Element platziert werden soll.

{{EmbedInteractiveExample("pages/css/offset-distance.html")}}

## Syntax

```css
/* Default value */
offset-distance: 0;

/* the middle of the offset-path */
offset-distance: 50%;

/* a fixed length positioned along the path */
offset-distance: 40px;

/* Global values */
offset-distance: inherit;
offset-distance: initial;
offset-distance: revert;
offset-distance: revert-layer;
offset-distance: unset;
```

- {{cssxref('&lt;length-percentage&gt;')}}

  - : Eine Länge, die angibt, wie weit das Element entlang des Pfades (definiert mit {{cssxref('offset-path')}}) ist.

    100% repräsentiert die gesamte Länge des Pfades (wenn der `offset-path` als Grundform oder `path()` definiert ist).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von offset-distance in einer Animation

Der Bewegungseffekt in CSS Motion Path stammt typischerweise aus der Animation der `offset-distance` Eigenschaft. Wenn Sie ein Element entlang seines gesamten Pfades animieren möchten, würden Sie seinen {{cssxref('offset-path')}} definieren und dann eine Animation einrichten, die die `offset-distance` von `0%` auf `100%` bringt.

#### HTML

```html
<div id="motion-demo"></div>
```

#### CSS

```css
#motion-demo {
  offset-path: path("M20,20 C20,100 200,0 200,100");
  animation: move 3000ms infinite alternate ease-in-out;
  width: 40px;
  height: 40px;
  background: cyan;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Using_offset-distance_in_an_animation', '100%', 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset")}}
- {{cssxref("offset-anchor")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-position")}}
- {{cssxref("offset-rotate")}}
