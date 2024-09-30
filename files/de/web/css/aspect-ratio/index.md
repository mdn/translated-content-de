---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
l10n:
  sourceCommit: d7a5a9761b68e13cdd3bffafdd238a8712eb23d4
---

{{CSSRef}}

Die **`aspect-ratio`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht es Ihnen, das gewünschte Breiten-Höhen-Verhältnis eines Element-Box festzulegen. Das bedeutet, dass der Browser, selbst wenn sich die Größe des übergeordneten Containers oder des Ansichtsfensters ändert, die Abmessungen des Elements anpasst, um das angegebene Breiten-Höhen-Verhältnis beizubehalten. Das angegebene [Seitenverhältnis](/de/docs/Glossary/aspect_ratio) wird bei der Berechnung von automatischen Größen und einigen anderen Layoutfunktionen verwendet.

Mindestens eine der Größen der Box muss automatisch sein, damit `aspect-ratio` eine Wirkung hat. Wenn weder die Breite noch die Höhe eine automatische Größe haben, hat das angegebene Seitenverhältnis keinen Einfluss auf die bevorzugten Größen der Box.

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

Diese Eigenschaft wird als eines oder beide der Schlüsselwörter auto oder ein `<ratio>` angegeben. Falls beide angegeben sind und es sich um ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) handelt, wie z.B. ein [`<img>`](/de/docs/Web/HTML/Element/img), wird das angegebene Verhältnis verwendet, bis der Inhalt geladen ist. Nach dem Laden des Inhalts wird der Wert `auto` angewendet, sodass das intrinsische Seitenverhältnis des geladenen Inhalts verwendet wird.

Ist das Element kein ersetztes Element, wird das angegebene `ratio` verwendet.

### Werte

- `auto`

  - : [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) mit einem intrinsischen Seitenverhältnis verwenden _dieses_ Seitenverhältnis, andernfalls hat die Box kein bevorzugtes Seitenverhältnis. Berechnungen der Größe, die ein intrinsisches Seitenverhältnis betreffen, arbeiten immer mit den Maßen der Inhaltsbox.

- {{cssxref("&lt;ratio&gt;")}}

  - : Das bevorzugte Seitenverhältnis der Box ist das angegebene Verhältnis von `width` / `height`. Wird `height` und das vorgelagerte Schrägstrichzeichen weggelassen, nimmt `height` standardmäßig den Wert `1` an. Berechnungen der Größe, die das bevorzugte Seitenverhältnis betreffen, arbeiten mit den Abmessungen der Box, die durch `box-sizing` angegeben sind.

- `auto && <ratio>`

  - : Wenn sowohl `auto` als auch ein `<ratio>` zusammen angegeben sind, wird `auto` verwendet, wenn es sich um ein ersetztes Element mit einem natürlichen Seitenverhältnis handelt, wie ein `<img>`-Element. Andernfalls wird das angegebene Verhältnis von `width` / `height` als bevorzugtes Seitenverhältnis verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Untersuchung der Auswirkungen von aspect-ratio mit fester Breite

In diesem Beispiel wurde die Breite der `<div>`-Elemente auf `100px` und die Höhe auf `auto` gesetzt. Da der Breitenwert hier festgelegt ist, beeinflusst die `aspect-ratio`-Eigenschaft nur die Höhe der `<div>`-Elemente, um das angegebene Breiten-Höhen-Verhältnis beizubehalten.

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

{{EmbedLiveSample('Untersuchung der Auswirkungen von aspect-ratio mit fester Breite', '100%', '300px')}}

### Rückfall auf das natürliche Seitenverhältnis

In diesem Beispiel verwenden wir zwei `<img>`-Elemente. Das erste Element hat sein `src`-Attribut nicht auf eine Bilddatei gesetzt.

```html
<img src="" /> <img src="plumeria.jpg" />
```

Der folgende Code setzt `3/2` als bevorzugtes Seitenverhältnis und `auto` als Rückfall.

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

Beachten Sie, wie das erste Bild ohne ersetzte Inhalte das `3/2`-Seitenverhältnis beibehält, während das zweite Bild nach dem Laden des Inhalts das natürliche Seitenverhältnis des Bildes verwendet.

{{EmbedLiveSample('Rückfall auf das natürliche Seitenverhältnis', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verstehen von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Bildseitenverhältnis: Ruckbildung verhindern](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Entwerfen einer Einheitsgröße für CSS-Seitenverhältnisse](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Das Setzen von Höhe und Breite bei Bildern ist wieder wichtig](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
