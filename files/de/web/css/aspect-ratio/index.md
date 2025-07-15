---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`aspect-ratio`**-Eigenschaft [CSS](/de/docs/Web/CSS) ermöglicht es Ihnen, das gewünschte Breiten-Höhen-Verhältnis eines Element-Box zu definieren. Dies bedeutet, dass der Browser die Dimensionen des Elements anpasst, um das angegebene Breiten-Höhen-Verhältnis beizubehalten, selbst wenn sich die Größe des übergeordneten Containers oder des Ansichtsfensters ändert. Das angegebene {{Glossary("aspect_ratio", "aspect ratio")}} wird bei der Berechnung von automatischen Größen und einigen anderen Layoutfunktionen verwendet.

Mindestens eine der Größen der Box muss automatisch sein, damit `aspect-ratio` eine Wirkung hat. Wenn weder die Breite noch die Höhe eine automatische Größe ist, hat das angegebene Seitenverhältnis keine Auswirkung auf die bevorzugten Größen der Box.

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

Diese Eigenschaft wird als eines oder beide der Schlüsselwörter auto oder ein `<ratio>` angegeben. Wenn beide angegeben sind und das Element ein {{Glossary("replaced_elements", "replaced element")}} ist, wie z. B. ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img), wird das angegebene Verhältnis verwendet, bis der Inhalt geladen ist. Nach dem Laden des Inhalts wird der Wert `auto` angewandt, sodass das intrinsische Seitenverhältnis des geladenen Inhalts verwendet wird.

Wenn das Element kein ersetzt Element ist, wird das angegebene `ratio` verwendet.

### Werte

- `auto`
  - : {{Glossary("Replaced_elements", "Ersetzte Elemente")}} mit einem intrinsischen Seitenverhältnis verwenden _dieses_ Seitenverhältnis, ansonsten hat die Box kein bevorzugtes Seitenverhältnis. Größenberechnungen, die das intrinsische Seitenverhältnis betreffen, arbeiten immer mit den Abmessungen des Inhaltsfelds.

- {{cssxref("&lt;ratio&gt;")}}
  - : Das bevorzugte Seitenverhältnis der Box ist das angegebene Verhältnis von `width` / `height`. Wenn `height` und das vorangehende Schrägstrichzeichen weggelassen werden, nimmt `height` den Standardwert `1` an. Größenberechnungen, die das bevorzugte Seitenverhältnis betreffen, arbeiten mit den durch `box-sizing` angegebenen Abmessungen der Box.

- `auto && <ratio>`
  - : Wenn `auto` und ein `<ratio>` zusammen angegeben werden, wird `auto` verwendet, wenn das Element ein ersetzt Element mit einem natürlichen Seitenverhältnis ist, wie ein `<img>`-Element. Andernfalls wird das angegebene Verhältnis von `width` / `height` als bevorzugtes Seitenverhältnis verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erkundung der Effekte von aspect-ratio bei fester Breite

In diesem Beispiel wurde die Breite der `<div>`-Elemente auf `100px` und die Höhe auf `auto` gesetzt. Da der Wert für die Breite hier fest ist, beeinflusst die Eigenschaft `aspect-ratio` nur die Höhe der `<div>`-Elemente, um das angegebene Breiten-Höhen-Verhältnis beizubehalten.

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

{{EmbedLiveSample('Erkundung der Effekte von aspect-ratio bei fester Breite', '100%', '300px')}}

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

{{EmbedLiveSample('Rückfall auf natürliches Seitenverhältnis', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Bild-Seitenverhältnis: Ruckeln verhindern](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Ein Seitenverhältnis-Einheit für CSS entwerfen](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Höhe und Breite bei Bildern wieder wichtig machen](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
