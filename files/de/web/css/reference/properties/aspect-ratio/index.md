---
title: aspect-ratio
slug: Web/CSS/Reference/Properties/aspect-ratio
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`aspect-ratio`**-Eigenschaft ([CSS](/de/docs/Web/CSS)) ermöglicht es Ihnen, das gewünschte Breiten-Höhen-Verhältnis eines Elementbox zu definieren. Dies bedeutet, dass, selbst wenn sich die Größe des übergeordneten Containers oder des Ansichtsfensters ändert, der Browser die Abmessungen des Elements anpasst, um das angegebene Breiten-Höhen-Verhältnis beizubehalten. Das angegebene {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird bei der Berechnung automatischer Größen und einiger anderer Layout-Funktionen verwendet.

Mindestens eine der Box-Größen muss automatisch sein, damit `aspect-ratio` eine Wirkung hat. Wenn weder die Breite noch die Höhe eine automatische Größe ist, hat das angegebene Seitenverhältnis keinen Einfluss auf die bevorzugten Größen der Box.

{{InteractiveExample("CSS Demo: aspect-ratio")}}

```css interactive-example-choice
aspect-ratio: auto;
```

```css interactive-example-choice
aspect-ratio: 1 / 1;
```

```css interactive-example-choice
aspect-ratio: 16 / 9;
```

```css interactive-example-choice
aspect-ratio: 0.5;
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    height="640"
    id="example-element"
    src="/shared-assets/images/examples/plumeria.jpg"
    width="466" />
</section>
```

```css interactive-example
#example-element {
  height: 100%;
  width: auto;
}
```

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

Diese Eigenschaft wird als eines oder beide Schlüsselwörter `auto` oder ein `<ratio>` angegeben. Wenn beide angegeben sind und das Element ein {{Glossary("replaced_elements", "ersetztes Element")}} ist, wie zum Beispiel ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img), dann wird das angegebene Verhältnis verwendet, bis der Inhalt geladen ist. Nachdem der Inhalt geladen ist, wird der `auto`-Wert angewendet, sodass das intrinsische Seitenverhältnis des geladenen Inhalts verwendet wird.

Wenn das Element kein ersetztes Element ist, wird das angegebene `ratio` verwendet.

### Werte

- `auto`
  - : {{Glossary("Replaced_elements", "Ersetzte Elemente")}} mit einem intrinsischen Seitenverhältnis verwenden _dieses_ Seitenverhältnis, andernfalls hat die Box kein bevorzugtes Seitenverhältnis. Größenberechnungen, die ein intrinsisches Seitenverhältnis einbeziehen, arbeiten immer mit den Abmessungen des Inhaltsbereichs.

- {{cssxref("&lt;ratio&gt;")}}
  - : Das bevorzugte Seitenverhältnis der Box ist das angegebene Verhältnis von `width` / `height`. Wenn `height` und das vorangehende Schrägstrich-Zeichen weggelassen werden, wird `height` auf `1` gesetzt. Größenberechnungen, die ein bevorzugtes Seitenverhältnis einbeziehen, arbeiten mit den Abmessungen der durch `box-sizing` angegebenen Box.

- `auto && <ratio>`
  - : Wenn sowohl `auto` als auch ein `<ratio>` zusammen angegeben werden, wird `auto` verwendet, wenn das Element ein ersetztes Element mit einem natürlichen Seitenverhältnis ist, wie ein `<img>`-Element. Andernfalls wird das angegebene Verhältnis von `width` / `height` als bevorzugtes Seitenverhältnis verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erkunden der Auswirkungen von aspect-ratio mit fester Breite

In diesem Beispiel wurde die Breite der `<div>`-Elemente auf `100px` und die Höhe auf `auto` festgelegt. Da der Wert für die Breite hier festgelegt ist, beeinflusst die `aspect-ratio`-Eigenschaft nur die Höhe der `<div>`-Elemente, um das angegebene Breiten-Höhen-Verhältnis beizubehalten.

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

{{EmbedLiveSample('Erkunden der Auswirkungen von aspect-ratio mit fester Breite', '100%', '300px')}}

### Rückgriff auf natürliches Seitenverhältnis

In diesem Beispiel verwenden wir zwei `<img>`-Elemente. Das erste Element hat sein `src`-Attribut nicht auf eine Bilddatei gesetzt.

```html
<img src="" /> <img src="plumeria.jpg" />
```

Der folgende Code setzt `3/2` als bevorzugtes Seitenverhältnis und `auto` als Rückgriff.

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

- [Verständnis von Aspektverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Bildseitenverhältnis: Ruckeln vermeiden](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Entwurf einer Einheit für das Seitenverhältnis in CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Das Setzen von Höhe und Breite bei Bildern ist wieder wichtig](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
