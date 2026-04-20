---
title: "`aspect-ratio` CSS property"
short-title: aspect-ratio
slug: Web/CSS/Reference/Properties/aspect-ratio
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`aspect-ratio`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es Ihnen, das gewünschte Breite-zu-Höhe-Verhältnis eines Elementbox festzulegen. Dies bedeutet, dass selbst wenn sich die Größe des übergeordneten Containers oder Viewports ändert, der Browser die Abmessungen des Elements anpasst, um das festgelegte Breite-zu-Höhe-Verhältnis beizubehalten. Das angegebene {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird bei der Berechnung von automatischen Größen und einigen anderen Layout-Funktionen verwendet.

Mindestens eine der Boxgrößen muss automatisch sein, damit `aspect-ratio` eine Wirkung hat. Wenn weder die Breite noch die Höhe eine automatische Größe haben, hat das angegebene Seitenverhältnis keinen Einfluss auf die bevorzugten Größen der Box.

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

Diese Eigenschaft wird entweder als Keyword `auto` oder als `<ratio>` angegeben. Wenn beide angegeben sind und das Element ein {{Glossary("replaced_elements", "ersetztes Element")}} ist, wie z.B. [`<img>`](/de/docs/Web/HTML/Reference/Elements/img), wird das angegebene Verhältnis verwendet, bis der Inhalt geladen ist. Nach dem Laden des Inhalts wird der `auto`-Wert angewendet, sodass das intrinsische Seitenverhältnis des geladenen Inhalts verwendet wird.

Wenn das Element kein ersetztes Element ist, wird das angegebene `ratio` verwendet.

### Werte

- `auto`
  - : {{Glossary("Replaced_elements", "Ersetzte Elemente")}} mit einem intrinsischen Seitenverhältnis verwenden _dieses_ Seitenverhältnis, andernfalls hat die Box kein bevorzugtes Seitenverhältnis. Größerechnungen, die das intrinsische Seitenverhältnis betreffen, arbeiten immer mit den Dimensionen der Inhaltsbox.

- {{cssxref("&lt;ratio&gt;")}}
  - : Das bevorzugte Seitenverhältnis der Box ist das angegebene Verhältnis von `width` / `height`. Wenn `height` und das vorangehende Schrägstrichzeichen weggelassen werden, ist `height` standardmäßig `1`. Größerechnungen, die das bevorzugte Seitenverhältnis betreffen, arbeiten mit den durch `box-sizing` angegebenen Dimensionen der Box.

- `auto && <ratio>`
  - : Wenn sowohl `auto` als auch ein `<ratio>` zusammen angegeben werden, wird `auto` verwendet, wenn das Element ein ersetztes Element mit einem natürlichen Seitenverhältnis ist, wie ein `<img>`-Element. Andernfalls wird das angegebene Verhältnis von `width` / `height` als bevorzugtes Seitenverhältnis verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Untersuchen der Auswirkungen von aspect-ratio mit fester Breite

In diesem Beispiel wurde die Breite der `<div>`-Elemente auf `100px` gesetzt und die Höhe auf `auto`. Da hier der Breitenwert festgelegt ist, beeinflusst die `aspect-ratio`-Eigenschaft nur die Höhe der `<div>`-Elemente, um das angegebene Breite-zu-Höhe-Verhältnis beizubehalten.

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

{{EmbedLiveSample('Untersuchen der Auswirkungen von aspect-ratio mit fester Breite', '100%', '300px')}}

### Rückfall auf das natürliche Seitenverhältnis

In diesem Beispiel verwenden wir zwei `<img>`-Elemente. Das erste Element hat sein `src`-Attribut nicht auf eine Bilddatei gesetzt.

```html
<img src="" /> <img src="plumeria.jpg" />
```

Der folgende Code setzt `3/2` als bevorzugtes Seitenerhältnis und `auto` als Rückfall.

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

{{EmbedLiveSample('Rückfall auf das natürliche Seitenverhältnis', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Bild Seitenverhältnis: Jank verhindern](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Gestaltung einer Seitenverhältnis-Einheit für CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Das Setzen von Höhe und Breite bei Bildern ist wieder wichtig](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
