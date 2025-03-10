---
title: offset-distance
slug: Web/CSS/offset-distance
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`offset-distance`** [CSS](/de/docs/Web/CSS) Eigenschaft legt eine Position entlang eines {{CSSxRef("offset-path")}} für ein Element fest, um platziert zu werden.

{{InteractiveExample("CSS Demo: offset-distance")}}

```css interactive-example-choice
offset-distance: 0%;
```

```css interactive-example-choice
offset-distance: 80%;
```

```css interactive-example-choice
offset-distance: 50px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  width: 24px;
  height: 24px;
  background: #2bc4a2;
  offset-path: path("M-70,-40 C-70,70 70,70 70,-40");
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
}

/* Provides a reference image of what path the element is following */
#default-example {
  background-position: calc(50% - 12px) calc(50% + 14px);
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-75 -45 150 140" width="150" height="140"><path d="M-70,-40 C-70,70 70,70 70,-40" fill="none" stroke="lightgrey" stroke-width="2" stroke-dasharray="4.5"/></svg>');
}
```

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

  - : Eine Länge, die angibt, wie weit das Element entlang des Pfades ist (definiert mit {{cssxref('offset-path')}}).

    100 % repräsentiert die gesamte Länge des Pfades (wenn der `offset-path` als Grundform oder `path()` definiert ist).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Verwendung von offset-distance in einer Animation

Der Bewegungsaspekt im CSS Motion Path ergibt sich typischerweise aus der Animation der `offset-distance` Eigenschaft. Wenn Sie ein Element entlang seines gesamten Pfades animieren möchten, definieren Sie seinen {{cssxref('offset-path')}} und richten dann eine Animation ein, die den `offset-distance` von `0%` bis `100%` nimmt.

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
