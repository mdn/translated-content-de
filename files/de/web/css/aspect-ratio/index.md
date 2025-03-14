---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Die **`aspect-ratio`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das gewünschte Breiten-zu-Höhen-Verhältnis eines Elements zu definieren. Das bedeutet, dass selbst wenn sich die Größe des übergeordneten Containers oder des Ansichtsfensters ändert, der Browser die Dimensionen des Elements anpasst, um das angegebene Breiten-zu-Höhen-Verhältnis beizubehalten. Das angegebene {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird bei der Berechnung von automatischen Größen und einigen anderen Layout-Funktionen verwendet.

Mindestens eine der Größen des Kastens muss automatisch sein, damit `aspect-ratio` eine Wirkung hat. Wenn weder die Breite noch die Höhe eine automatische Größe ist, hat das angegebene Seitenverhältnis keine Auswirkung auf die bevorzugten Größen des Kastens.

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

Diese Eigenschaft wird als eines oder beide der Schlüsselwörter auto oder als ein `<ratio>` angegeben. Wenn beide gegeben sind und das Element ein {{Glossary("replaced_elements", "ersetztes Element")}} ist, wie beispielsweise ein [`<img>`](/de/docs/Web/HTML/Element/img), dann wird das angegebene Verhältnis verwendet, bis der Inhalt geladen ist. Nach dem Laden des Inhalts wird der `auto` Wert angewendet, wodurch das intrinsische Seitenverhältnis des geladenen Inhalts verwendet wird.

Wenn das Element kein ersetztes Element ist, wird das angegebene `Verhältnis` verwendet.

### Werte

- `auto`

  - : {{Glossary("Replaced_elements", "Ersetzte Elemente")}} mit einem intrinsischen Seitenverhältnis verwenden _dieses_ Seitenverhältnis, andernfalls hat der Kasten kein bevorzugtes Seitenverhältnis. Größerechnungen, die ein intrinsisches Seitenverhältnis beinhalten, arbeiten immer mit den Dimensionen des Inhaltskastens.

- {{cssxref("&lt;ratio&gt;")}}

  - : Das bevorzugte Seitenverhältnis des Kastens ist das angegebene Verhältnis von `width` / `height`. Wenn `height` und das vorangehende Schrägstrich-Zeichen ausgelassen werden, setzt `height` den Standardwert auf `1`. Größerechnungen, die ein bevorzugtes Seitenverhältnis beinhalten, arbeiten mit den durch `box-sizing` spezifizierten Dimensionen des Kastens.

- `auto && <ratio>`

  - : Wenn sowohl `auto` als auch ein `<ratio>` zusammen angegeben sind, wird `auto` verwendet, wenn das Element ein ersetztes Element mit einem natürlichen Seitenverhältnis ist, wie ein `<img>`-Element. Andernfalls wird das angegebene Verhältnis von `width` / `height` als bevorzugtes Seitenverhältnis verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erkundung der Auswirkungen des Seitenverhältnisses bei fester Breite

In diesem Beispiel ist die Breite der `<div>`-Elemente auf `100px` und die Höhe auf `auto` gesetzt. Da der Breitenwert hier festgelegt ist, wirkt sich die Eigenschaft `aspect-ratio` nur auf die Höhe der `<div>`-Elemente aus, um das angegebene Breiten-zu-Höhen-Verhältnis zu beibehalten.

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

{{EmbedLiveSample('Erkundung der Auswirkungen des Seitenverhältnisses bei fester Breite', '100%', '300px')}}

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

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Bild-Seitenverhältnis: Ruckeln verhindern](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Entwicklung einer Seitenverhältniseinheit für CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Das Festlegen von Höhe und Breite bei Bildern ist wieder wichtig geworden](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
