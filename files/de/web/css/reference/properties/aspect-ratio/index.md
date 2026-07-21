---
title: "`aspect-ratio` CSS property"
short-title: aspect-ratio
slug: Web/CSS/Reference/Properties/aspect-ratio
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`aspect-ratio`** [CSS](/de/docs/Web/CSS) Eigenschaft erlaubt es, das gewünschte Breiten-Höhen-Verhältnis eines Elementbox festzulegen.

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

### Werte

Diese Eigenschaft wird als eines oder beide der Schlüsselwörter `auto` oder ein `<ratio>` angegeben.

- `auto`
  - : {{Glossary("Replaced_elements", "Ersetzte Elemente")}} mit einem intrinsischem Seitenverhältnis nutzen _dieses_ Seitenverhältnis, andernfalls hat die Box kein bevorzugtes Seitenverhältnis. Größenberechnungen, die ein intrinsisches Seitenverhältnis beinhalten, arbeiten immer mit den Abmessungen des Inhaltsbereichs.

- {{cssxref("&lt;ratio&gt;")}}
  - : Das bevorzugte Seitenverhältnis der Box ist das angegebene Verhältnis von `width` / `height`. Wenn `height` und das vorhergehende Trennzeichen weggelassen werden, ist die Standardeinstellung von `height` `1`. Größenberechnungen unter Einbeziehung des bevorzugten Seitenverhältnisses arbeiten mit den durch `box-sizing` festgelegten Abmessungen der Box.

- `auto && <ratio>`
  - : Wenn `auto` und ein `<ratio>` zusammen angegeben werden, wird `auto` verwendet, wenn das Element ein ersetztes Element mit einem natürlichen Seitenverhältnis ist, wie ein `<img>` Element. Andernfalls wird das angegebene Verhältnis von `width` / `height` als bevorzugtes Seitenverhältnis verwendet.

## Beschreibung

Die `aspect-ratio` Eigenschaft definiert ein gewünschtes Breiten-Höhen-Verhältnis einer Elementbox. Das bedeutet, dass selbst wenn sich die Größe des Elterncontainers oder Viewports ändert, der Browser die Abmessungen des Elements so anpasst, dass das angegebene Breite-Höhe-Verhältnis beibehalten wird. Das angegebene {{Glossary("aspect_ratio", "Seitenverhältnis")}} wird bei der Berechnung von automatischen Größen und einigen anderen Layout-Funktionen verwendet.

Mindestens eine der Box-Größen muss automatisch sein, damit `aspect-ratio` eine Auswirkung hat. Wenn weder die Breite noch die Höhe eine automatische Größe ist, hat das angegebene Seitenverhältnis keinen Effekt auf die bevorzugten Größen der Box.

Diese Eigenschaft wird als eines oder beide der Schlüsselwörter `auto` oder ein `<ratio>` angegeben. Wenn beides angegeben ist und das Element ein {{Glossary("replaced_elements", "ersetztes Element")}} ist, wie zum Beispiel [`<img>`](/de/docs/Web/HTML/Reference/Elements/img), dann wird das angegebene Verhältnis verwendet, bis der Inhalt geladen ist. Nach dem Laden des Inhalts wird der `auto`-Wert angewendet, sodass das intrinsische Seitenverhältnis des geladenen Inhalts verwendet wird.

Wenn das Element kein ersetztes Element ist, wird das angegebene `ratio` verwendet.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Untersuchung der Auswirkungen von aspect-ratio mit fester Breite

In diesem Beispiel wurde die Breite der `<div>` Elemente auf `100px` festgelegt und die Höhe auf `auto`. Da hier der Breitenwert festgelegt ist, beeinflusst die `aspect-ratio` Eigenschaft nur die Höhe der `<div>` Elemente, um das angegebene Breiten-Höhen-Verhältnis beizubehalten.

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

In diesem Beispiel verwenden wir zwei `<img>` Elemente. Das erste Element hat sein `src` Attribut nicht auf eine Bilddatei gesetzt.

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

Beachten Sie, wie das erste Bild ohne ersetzten Inhalt das `3/2` Seitenverhältnis beibehält, während das zweite Bild nach dem Laden des Inhalts das natürliche Seitenverhältnis des Bildes verwendet.

{{EmbedLiveSample('Rückfall auf das natürliche Seitenverhältnis', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verständnis von Seitenverhältnissen](/de/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [Bildseitenverhältnis: Ruckeln verhindern](/de/docs/Learn_web_development/Extensions/Performance/Multimedia#rendering_strategy_preventing_jank_when_loading_images)
- [Entwicklung einer Seitenverhältnis-Einheit für CSS](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
- [Höhe und Breite bei Bildern neu festzulegen ist wieder wichtig](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/)
