---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
l10n:
  sourceCommit: d7a5a9761b68e13cdd3bffafdd238a8712eb23d4
---

{{CSSRef}}

Die **`aspect-ratio`**-[CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, das gewünschte Breiten-Höhen-Verhältnis eines Elementkastens zu definieren. Dies bedeutet, dass selbst wenn sich die Größe des übergeordneten Containers oder Viewports ändert, der Browser die Maße des Elements anpasst, um das angegebene Breiten-Höhen-Verhältnis beizubehalten. Das angegebene [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) wird in die Berechnung automatischer Größen und einiger anderer Layout-Funktionen einbezogen.

Mindestens eine der Größen des Kastens muss automatisch sein, damit `aspect-ratio` eine Wirkung hat. Wenn weder die Breite noch die Höhe eine automatische Größe ist, hat das angegebene Seitenverhältnis keinen Einfluss auf die bevorzugten Größen des Kastens.

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

Diese Eigenschaft wird entweder als eines oder beide der Schlüsselwörter auto oder ein `<ratio>` angegeben. Wenn beide angegeben sind und das Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) ist, wie zum Beispiel ein [`<img>`](/de/docs/Web/HTML/Element/img), wird das angegebene Verhältnis verwendet, bis der Inhalt geladen ist. Nach dem Laden des Inhalts wird der Wert `auto` angewendet, sodass das intrinsische Seitenverhältnis des geladenen Inhalts verwendet wird.

Wenn das Element kein ersetztes Element ist, wird das angegebene `ratio` verwendet.

### Werte

- `auto`

  - : [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) mit einem intrinsischen Seitenverhältnis verwenden _dieses_ Seitenverhältnis, andernfalls hat der Kasten kein bevorzugtes Seitenverhältnis. Größerechnungen, die das intrinsische Seitenverhältnis einbeziehen, arbeiten immer mit den Maßen des Inhaltskastens.

- {{cssxref("&lt;ratio&gt;")}}

  - : Das bevorzugte Seitenverhältnis des Kastens ist das angegebene Verhältnis von `width` / `height`. Wenn `height` und das davorstehende Schrägstrichzeichen weggelassen werden, ist `height` standardmäßig `1`. Größerechnungen, die das bevorzugte Seitenverhältnis einbeziehen, arbeiten mit den Maßen des Kastens, die von `box-sizing` angegeben werden.

- `auto && <ratio>`

  - : Wenn sowohl `auto` als auch ein `<ratio>` zusammen angegeben sind, wird `auto` verwendet, wenn das Element ein ersetztes Element mit einem natürlichen Seitenverhältnis ist, wie ein `<img>`-Element. Andernfalls wird das angegebene Verhältnis von `width` / `height` als bevorzugtes Seitenverhältnis verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erforschung der Auswirkungen von aspect-ratio mit fester Breite

In diesem Beispiel wurde die Breite der `<div>`-Elemente auf `100px` und die Höhe auf `auto` gesetzt. Da hier der Breitenwert fest ist, beeinflusst die Eigenschaft `aspect-ratio` nur die Höhe der `<div>`-Elemente, um das angegebene Breiten-Höhen-Verhältnis beizubehalten.

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

{{EmbedLiveSample('Erforschung der Auswirkungen von aspect-ratio mit fester Breite', '100%', '300px')}}

### Rückgriff auf natürliches Seitenverhältnis

In diesem Beispiel verwenden wir zwei `<img>`-Elemente. Das erste Element hat sein `src`-Attribut nicht auf eine Bilddatei gesetzt.

```html
<img src="" /> <img src="plumeria.jpg" />
```

Der folgende Code setzt `3/2` als bevorzugtes Seitenverhältnis und `auto` als Rückfalloption.

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

{{EmbedLiveSample('Rückgriff auf natürliches Seitenverhältnis', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Bildseitenverhältnis: Ruckeln vermeiden](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Ein Seitenverhältnis-Element für CSS gestalten](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Größe und Breite bei Bildern wieder wichtig](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
