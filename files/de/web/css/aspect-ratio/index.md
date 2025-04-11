---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`aspect-ratio`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht es, das gewünschte Breiten-Höhen-Verhältnis eines Elementbox festzulegen. Das bedeutet, dass selbst wenn sich die Größe des übergeordneten Containers oder des Ansichtsfensters ändert, der Browser die Abmessungen des Elements anpasst, um das festgelegte Breiten-Höhen-Verhältnis beizubehalten. Das festgelegte {{Glossary("aspect_ratio", "Aspektverhältnis")}} wird bei der Berechnung automatischer Größen und einiger anderer Layout-Funktionen verwendet.

Mindestens eine der Größen der Box muss automatisch sein, damit `aspect-ratio` eine Wirkung hat. Wenn weder die Breite noch die Höhe eine automatische Größe ist, hat das angegebene Aspektverhältnis keinen Effekt auf die bevorzugte Größe der Box.

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

Diese Eigenschaft wird als eines oder beides der Schlüsselwörter `auto` oder ein `<ratio>` angegeben. Wenn beide angegeben werden und das Element ein {{Glossary("replaced_elements", "ersetztes Element")}} ist, wie z.B. ein [`<img>`](/de/docs/Web/HTML/Reference/Elements/img), dann wird das angegebene Verhältnis verwendet, bis der Inhalt geladen ist. Nach dem Laden des Inhalts wird der `auto`-Wert angewendet, sodass das intrinsische Aspektverhältnis des geladenen Inhalts verwendet wird.

Wenn das Element kein ersetztes Element ist, wird das angegebene `ratio` verwendet.

### Werte

- `auto`

  - : {{Glossary("Replaced_elements", "Ersetzte Elemente")}} mit einem intrinsischen Aspektverhältnis verwenden _dieses_ Aspektverhältnis, andernfalls hat die Box kein bevorzugtes Aspektverhältnis. Größenberechnungen, die das intrinsische Aspektverhältnis einbeziehen, arbeiten immer mit den Abmessungen der Inhaltsbox.

- {{cssxref("&lt;ratio&gt;")}}

  - : Das bevorzugte Aspektverhältnis der Box ist das angegebene Verhältnis von `width` / `height`. Wenn `height` und das vorhergehende Schrägstrich-Zeichen weggelassen werden, wird `height` standardmäßig auf `1` gesetzt. Größenberechnungen, die das bevorzugte Aspektverhältnis einbeziehen, arbeiten mit den Abmessungen der Box, die durch `box-sizing` angegeben sind.

- `auto && <ratio>`

  - : Wenn sowohl `auto` als auch ein `<ratio>` zusammen angegeben sind, wird `auto` verwendet, wenn das Element ein ersetztes Element mit einem natürlichen Aspektverhältnis ist, wie ein `<img>`-Element. Andernfalls wird das angegebene Verhältnis von `width` / `height` als bevorzugtes Aspektverhältnis verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Erkundung der Auswirkungen von aspect-ratio mit fester Breite

In diesem Beispiel wurde die Breite der `<div>`-Elemente auf `100px` und die Höhe auf `auto` gesetzt. Da hier der Breitenwert festgelegt ist, wirkt sich die `aspect-ratio`-Eigenschaft nur auf die Höhe der `<div>`-Elemente aus, um das festgelegte Breiten-Höhen-Verhältnis beizubehalten.

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

{{EmbedLiveSample('Erkundung der Auswirkungen von aspect-ratio mit fester Breite', '100%', '300px')}}

### Rückfall auf das natürliche Aspektverhältnis

In diesem Beispiel verwenden wir zwei `<img>`-Elemente. Das erste Element hat sein `src`-Attribut nicht auf eine Bilddatei gesetzt.

```html
<img src="" /> <img src="plumeria.jpg" />
```

Der folgende Code setzt `3/2` als bevorzugtes Aspektverhältnis und `auto` als Fallback.

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

Beachten Sie, wie das erste Bild ohne ersetzten Inhalt das `3/2` Aspektverhältnis beibehält, während das zweite Bild nach dem Laden des Inhalts das natürliche Aspektverhältnis des Bildes verwendet.

{{EmbedLiveSample('Rückfall auf das natürliche Aspektverhältnis', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verständnis von Aspektverhältnissen](/de/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- [Bild-Aspektverhältnis: Ruckeln vermeiden](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Entwurf einer Aspektverhältnis-Einheit für CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Das Festlegen von Höhe und Breite bei Bildern ist wieder wichtig](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
