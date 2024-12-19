---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Die **`aspect-ratio`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das gewünschte Breiten-Höhen-Verhältnis eines Elements festzulegen. Dies bedeutet, dass der Browser, selbst wenn sich die Größe des übergeordneten Containers oder Ansichtsfensters ändert, die Abmessungen des Elements anpasst, um das angegebene Breiten-Höhen-Verhältnis beizubehalten. Das angegebene {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird bei der Berechnung von automatischen Größen und einigen anderen Layoutfunktionen verwendet.

Mindestens eine der Größen der Box muss automatisch sein, damit `aspect-ratio` irgendeine Wirkung hat. Wenn weder die Breite noch die Höhe eine automatische Größe haben, hat das angegebene Seitenverhältnis keinen Einfluss auf die bevorzugten Größen der Box.

{{EmbedInteractiveExample("pages/css/aspect-ratio.html")}}

## Syntax

```css
aspect-ratio: 1 / 1;
aspect-ratio: 1;

/* fallback to 'auto' for replaced elements */
aspect-ratio: auto 3/4;
aspect-ratio: 9/6 auto;

/* Global values */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: revert-layer;
aspect-ratio: unset;
```

Diese Eigenschaft wird entweder als das Schlüsselwort auto oder als ein `<ratio>` angegeben. Wenn beide angegeben werden und das Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) ist, wie z.B. [`<img>`](/de/docs/Web/HTML/Element/img), dann wird das angegebene Verhältnis verwendet, bis der Inhalt geladen ist. Nach dem Laden des Inhalts wird der Wert `auto` angewendet, sodass das intrinsische Seitenverhältnis des geladenen Inhalts verwendet wird.

Wenn das Element kein ersetztes Element ist, wird das angegebene `ratio` verwendet.

### Werte

- `auto`

  - : [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) mit einem intrinsischen Seitenverhältnis verwenden _dieses_ Seitenverhältnis, andernfalls hat die Box kein bevorzugtes Seitenverhältnis. Bei Größenberechnungen, die das intrinsische Seitenverhältnis einbeziehen, wird immer mit den Dimensionen der Content-Box gearbeitet.

- {{cssxref("&lt;ratio&gt;")}}

  - : Das bevorzugte Seitenverhältnis der Box ist das angegebene Verhältnis von `width` / `height`. Wenn `height` und das vorausgehende Schrägstrichzeichen weggelassen werden, ist `height` standardmäßig `1`. Größenberechnungen, die das bevorzugte Seitenverhältnis einbeziehen, arbeiten mit den Dimensionen der Box, die durch `box-sizing` angegeben werden.

- `auto && <ratio>`

  - : Wenn sowohl `auto` als auch ein `<ratio>` zusammen angegeben werden, wird `auto` verwendet, wenn das Element ein ersetztes Element mit einem natürlichen Seitenverhältnis ist, wie ein `<img>`-Element. Andernfalls wird das angegebene Verhältnis von `width` / `height` als bevorzugtes Seitenverhältnis verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Untersuchung der Wirkung des aspect-ratio mit fester Breite

In diesem Beispiel wurde die Breite der `<div>`-Elemente auf `100px` und die Höhe auf `auto` gesetzt. Da hier der Breitenwert festgelegt ist, beeinflusst die Eigenschaft `aspect-ratio` nur die Höhe der `<div>`-Elemente, um das angegebene Breiten-Höhen-Verhältnis beizubehalten.

```html hidden
<div>1/1</div>
<div>0.5</div>
<div>1</div>
<div>1/0.5</div>
<div>16/9</div>
```

```css hidden
div {
  display: inline-flex;
  background-color: lime;
  justify-content: center;
}
```

```css
div {
  width: 100px;
  height: auto;
}
div:nth-child(1) {
  aspect-ratio: 1/1;
}
div:nth-child(2) {
  aspect-ratio: 0.5;
}
div:nth-child(3) {
  aspect-ratio: 1;
}
div:nth-child(4) {
  aspect-ratio: 1/0.5;
}
div:nth-child(5) {
  aspect-ratio: 16/9;
}
```

{{EmbedLiveSample('Exploring aspect-ratio effects with fixed width', '100%', '300px')}}

### Rückfall auf natürliches Seitenverhältnis

In diesem Beispiel verwenden wir zwei `<img>`-Elemente. Das erste Element hat sein `src`-Attribut nicht auf eine Bilddatei gesetzt.

```html
<img src="" /> <img src="plumeria.jpg" />
```

Der folgende Code legt `3/2` als bevorzugtes Seitenverhältnis und `auto` als Rückfall fest.

```css
img {
  display: inline;
  width: 200px;
  border: 2px dashed red;
  background-color: lime;
  vertical-align: top;

  aspect-ratio: 3/2 auto;
}
```

Beachten Sie, wie das erste Bild ohne ersetzten Inhalt das `3/2`-Seitenverhältnis beibehält, während das zweite Bild nach dem Laden des Inhalts das natürliche Seitenverhältnis des Bildes verwendet.

{{EmbedLiveSample('Fallback to natural aspect ratio', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Seitenverhältnis von Bildern: Ruckeln verhindern](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Gestaltung einer Seitenverhältnis-Einheit für CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Das Festlegen von Höhe und Breite bei Bildern ist wieder wichtig](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
