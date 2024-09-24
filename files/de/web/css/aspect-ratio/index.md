---
title: Seitenverhältnis
slug: Web/CSS/aspect-ratio
l10n:
  sourceCommit: d7a5a9761b68e13cdd3bffafdd238a8712eb23d4
---

{{CSSRef}}

Die **`aspect-ratio`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das gewünschte Breiten-Höhen-Verhältnis des Rahmens eines Elements festzulegen. Das bedeutet, dass selbst wenn sich die Größe des übergeordneten Containers oder des Ansichtsfensters ändert, der Browser die Dimensionen des Elements anpasst, um das angegebene Breiten-Höhen-Verhältnis beizubehalten. Das angegebene {{glossary("Seitenverhältnis")}} wird bei der Berechnung von automatischen Größen und einigen anderen Layout-Funktionen verwendet.

Mindestens eine der Größen des Rahmens muss automatisch sein, damit `aspect-ratio` eine Wirkung hat. Ist weder die Breite noch die Höhe eine automatische Größe, hat das angegebene Seitenverhältnis keinen Einfluss auf die bevorzugten Größen des Rahmens.

{{EmbedInteractiveExample("pages/css/aspect-ratio.html")}}

## Syntax

```css
aspect-ratio: 1 / 1;
aspect-ratio: 1;

/* Fallback auf 'auto' für ersetzte Elemente */
aspect-ratio: auto 3/4;
aspect-ratio: 9/6 auto;

/* Globale Werte */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: revert-layer;
aspect-ratio: unset;
```

Diese Eigenschaft wird entweder als das Schlüsselwort auto oder als ein `<ratio>` angegeben. Wenn beide angegeben sind und das Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) ist, wie z.B. ein [`<img>`](/de/docs/Web/HTML/Element/img), wird das angegebene Verhältnis verwendet, bis der Inhalt geladen ist. Nach dem Laden wird der Wert `auto` angewendet, sodass das intrinsische Seitenverhältnis des geladenen Inhalts verwendet wird.

Wenn das Element kein ersetztes Element ist, wird das angegebene `ratio` verwendet.

### Werte

- `auto`

  - : [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) mit einem intrinsischen Seitenverhältnis verwenden _dieses_ Seitenverhältnis, andernfalls hat der Rahmen kein bevorzugtes Seitenverhältnis. Größenberechnungen, die ein intrinsisches Seitenverhältnis betreffen, arbeiten immer mit den Dimensionen des Inhaltsbereichs.

- {{cssxref("&lt;ratio&gt;")}}

  - : Das bevorzugte Seitenverhältnis des Rahmens ist das angegebene Verhältnis von `Breite` / `Höhe`. Wenn `Höhe` und das vorstehende Schrägstrichzeichen weggelassen werden, ist `Höhe` standardmäßig `1`. Größenberechnungen, die ein bevorzugtes Seitenverhältnis betreffen, arbeiten mit den Dimensionen des Rahmens, die durch `box-sizing` angegeben sind.

- `auto && <ratio>`

  - : Wenn sowohl `auto` als auch ein `<ratio>` zusammen angegeben sind, wird `auto` verwendet, wenn das Element ein ersetztes Element mit einem natürlichen Seitenverhältnis, wie ein `<img>`-Element ist. Andernfalls wird das angegebene Verhältnis von `Breite` / `Höhe` als bevorzugtes Seitenverhältnis verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Untersuchung der Auswirkungen des Seitenverhältnisses mit fester Breite

In diesem Beispiel wurde die Breite der `<div>`-Elemente auf `100px` und die Höhe auf `auto` gesetzt. Da der Breitenwert hier fest ist, betrifft die Eigenschaft `aspect-ratio` nur die Höhe der `<div>`-Elemente, um das angegebene Breiten-Höhen-Verhältnis beizubehalten.

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

{{EmbedLiveSample('Exploration der Auswirkungen des Seitenverhältnisses mit fester Breite', '100%', '300px')}}

### Fallback auf natürliches Seitenverhältnis

In diesem Beispiel verwenden wir zwei `<img>`-Elemente. Das erste Element hat sein `src`-Attribut nicht auf eine Bilddatei gesetzt.

```html
<img src="" /> <img src="plumeria.jpg" />
```

Der folgende Code setzt `3/2` als bevorzugtes Seitenverhältnis und `auto` als Fallback.

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

{{EmbedLiveSample('Fallback auf natürliches Seitenverhältnis', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Bildseitenverhältnis: Vermeiden von Ruckeln](/de/docs/Learn/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Design einer Maßeinheit für das Seitenverhältnis in CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Höhe und Breite bei Bildern wieder wichtig festlegen](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
