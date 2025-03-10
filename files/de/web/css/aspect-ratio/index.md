---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`aspect-ratio`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es Ihnen, das gewünschte Breiten-Höhen-Verhältnis eines Elementbox festzulegen. Das bedeutet, dass selbst wenn sich die Größe des übergeordneten Containers oder des Ansichtsfensters ändert, der Browser die Abmessungen des Elements anpasst, um das angegebene Breiten-Höhen-Verhältnis beizubehalten. Das angegebene {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird bei der Berechnung automatischer Größen und einiger anderer Layout-Funktionen verwendet.

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

Diese Eigenschaft wird als eines oder beides der Schlüsselwörter auto oder ein `<ratio>` angegeben. Wenn beides angegeben ist und das Element ein [ersetztes Element](/de/docs/Web/CSS/Replaced_element) ist, wie zum Beispiel ein [`<img>`](/de/docs/Web/HTML/Element/img), wird das angegebene Verhältnis verwendet, bis der Inhalt geladen ist. Nach dem Laden des Inhalts wird der `auto`-Wert angewendet, sodass das intrinsische Seitenverhältnis des geladenen Inhalts verwendet wird.

Wenn das Element kein ersetztes Element ist, wird das angegebene `ratio` verwendet.

### Werte

- `auto`

  - : [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element) mit einem intrinsischen Seitenverhältnis verwenden _dieses_ Seitenverhältnis, andernfalls hat die Box kein bevorzugtes Seitenverhältnis. Größenberechnungen, die das intrinsische Seitenverhältnis betreffen, arbeiten immer mit den Abmessungen des Inhaltfeldes.

- {{cssxref("&lt;ratio&gt;")}}

  - : Das bevorzugte Seitenverhältnis der Box ist das angegebene Verhältnis von `Breite`/`Höhe`. Wenn `Höhe` und das vorhergehende Schrägstrich-Zeichen weggelassen werden, ist die Standardeinstellung für `Höhe` `1`. Größenberechnungen, die auf das bevorzugte Seitenverhältnis basieren, arbeiten mit den durch `box-sizing` festgelegten Abmessungen der Box.

- `auto && <ratio>`

  - : Wenn sowohl `auto` als auch ein `<ratio>` zusammen angegeben sind, wird `auto` verwendet, wenn das Element ein ersetztes Element mit einem natürlichen Seitenverhältnis ist, wie z.B. ein `<img>` Element. Andernfalls wird das angegebene Verhältnis von `Breite`/`Höhe` als bevorzugtes Seitenverhältnis verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Untersuchen der Effekte des Seitenverhältnisses bei fester Breite

In diesem Beispiel wurde die Breite der `<div>` Elemente auf `100px` gesetzt und die Höhe auf `auto`. Da der Breitenwert hier festgelegt ist, beeinflusst die Eigenschaft `aspect-ratio` nur die Höhe der `<div>` Elemente, um das angegebene Breiten-Höhen-Verhältnis beizubehalten.

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

{{EmbedLiveSample('Untersuchen der Effekte des Seitenverhältnisses bei fester Breite', '100%', '300px')}}

### Rückgriff auf das natürliche Seitenverhältnis

In diesem Beispiel verwenden wir zwei `<img>` Elemente. Das erste Element hat sein `src` Attribut nicht auf eine Bilddatei gesetzt.

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

Beachten Sie, wie das erste Bild ohne ersetzten Inhalt das `3/2` Seitenverhältnis beibehält, während das zweite Bild nach dem Laden des Inhalts das natürliche Seitenverhältnis des Bildes verwendet.

{{EmbedLiveSample('Rückgriff auf das natürliche Seitenverhältnis', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Bildseitenverhältnis: Jank verhindern](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Entwurf einer Einheit für das Seitenverhältnis in CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Warum das Setzen von Höhe und Breite bei Bildern wieder wichtig ist](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
