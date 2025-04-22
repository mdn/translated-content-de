---
title: mask
slug: Web/CSS/mask
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{CSSRef}}

Die **`mask`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) verbirgt ein Element (teilweise oder vollständig) durch Maskieren oder Beschneiden eines bestimmten Bereichs des Bildes. Es ist eine Kurzschreibweise für alle [`mask-*`](#bestandteileigenschaften) Eigenschaften. Die Eigenschaft akzeptiert einen oder mehrere durch Kommas getrennte Werte, wobei jeder Wert einem [`<mask-layer>`](#mask-layer) entspricht.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("mask-clip")}}
- {{cssxref("mask-composite")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-mode")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}

> [!NOTE]
> Da die `mask`-Kurzschreibweise alle Komponenten-Eigenschaften sowie die {{cssxref("mask-border")}}-Eigenschaften auf ihre Anfangswerte zurücksetzt, empfehlen die Autoren der Spezifikation die Verwendung der `mask`-Kurzschreibweise anstelle der einzelnen Komponenten-Eigenschaften, um alle zuvor in der Kaskade gesetzten Maskenwerte zu überschreiben. Dies stellt sicher, dass auch `mask-border` zurückgesetzt wird, sodass die neuen Styles wirksam werden können.

## Syntax

```css
/* Keyword values */
mask: none;

/* Image values */
mask: url(mask.png); /* Raster image used as mask */
mask: url(masks.svg#star); /* SVG used as mask */

/* Combined values */
mask: url(masks.svg#star) luminance; /* Luminance mask */
mask: url(masks.svg#star) 40px 20px; /* Mask positioned 40px from the top and 20px from the left */
mask: url(masks.svg#star) 0 0/50px 50px; /* Mask with a width and height of 50px */
mask: url(masks.svg#star) repeat-x; /* Horizontally-repeated mask */
mask: url(masks.svg#star) stroke-box; /* Mask extends to the inside edge of the stroke box */
mask: url(masks.svg#star) exclude; /* Mask combined with background using non-overlapping parts */

/* Multiple masks */
mask:
  url(masks.svg#star) left / 16px repeat-y,
  /* 16px-wide mask on the left side */ url(masks.svg#circle) right / 16px
    repeat-y; /* 16px-wide mask against right side */

/* Global values */
mask: inherit;
mask: initial;
mask: revert;
mask: revert-layer;
mask: unset;
```

### Werte

- `<mask-layer>`

  - : Eine oder mehrere durch Kommas getrennte Maskenschichten, bestehend aus den folgenden Komponenten:

    - `<mask-reference>`
      - : Legt die Quelle für das Maskenbild fest. Siehe {{cssxref("mask-image")}}.
    - `<masking-mode>`
      - : Legt den Maskierungsmodus des Maskenbildes fest. Siehe {{cssxref("mask-mode")}}.
    - `<position>`
      - : Legt die Position des Maskenbildes fest. Siehe {{cssxref("mask-position")}}.
    - `<bg-size>`
      - : Legt die Größe des Maskenbildes fest. Siehe {{cssxref("mask-size")}}.
    - `<repeat-style>`
      - : Legt die Wiederholung des Maskenbildes fest. Siehe {{cssxref("mask-repeat")}}.
    - `<geometry-box>`
      - : Wenn nur ein `<geometry-box>`-Wert angegeben ist, legt er sowohl {{cssxref("mask-origin")}} als auch {{cssxref("mask-clip")}} fest. Wenn zwei `<geometry-box>`-Werte vorhanden sind, dann legt der erste {{cssxref("mask-origin")}} und der zweite {{cssxref("mask-clip")}} fest.
    - `<geometry-box> | no-clip`
      - : Legt den Bereich fest, der durch das Maskenbild beeinflusst wird. Siehe {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Legt den Kompositionsvorgang fest, der auf der aktuellen Maskenschicht verwendet wird. Siehe {{cssxref("mask-composite")}}.

## Beschreibung

Die Eigenschaft `mask` verbirgt Teile oder das ganze Element, auf das sie angewendet wird. Welche Teile verborgen, sichtbar oder teilweise gerendert werden, hängt von der Deckkraft der Maske an diesem Pixel ab. Die durch undurchsichtige Teile der Maske maskierten Abschnitte sind vollständig verborgen, während transparente Abschnitte der Maske das Element sichtbar machen.

Während nicht alle Bestandteil-Maskeneigenschaften deklariert werden müssen, werden alle Werte, die ausgelassen werden, auf ihre Anfangswerte zurückgesetzt, die folgende sind:

```css
mask-image: none;
mask-mode: match-source;
mask-position: 0% 0%;
mask-size: auto;
mask-repeat: repeat;
mask-origin: border-box;
mask-clip: border-box;
mask-composite: add;
```

Innerhalb jedes `<mask-layer>` muss die `mask-size`-Komponente nach dem `mask-position`-Wert stehen, wobei ein Schrägstrich (`/`) die beiden trennt.

Wenn zwei `<geometry-box>`-Werte vorhanden sind, ist der erste der `mask-origin`-Wert, während der zweite der `mask-clip`-Wert ist. Befindet sich ein `<geometry-box>`-Wert und das Schlüsselwort `no-clip`, ist das `<geometry-box>` der Wert der `mask-origin`-Eigenschaft, da `no-clip` nur für die `mask-clip`-Eigenschaft gültig ist. In diesem Fall spielt die Reihenfolge der beiden Werte keine Rolle. Wenn nur ein `<geometry-box>`-Wert vorhanden ist (ohne spezifiziertes `no-clip` Schlüsselwort), wird dieser Wert sowohl für die `mask-origin`- als auch für die `mask-clip`-Eigenschaften verwendet.

Da die `mask`-Kurzschreibweise alle `mask-border-*`-Eigenschaften auf ihren `initial` Wert zurücksetzt, sollten Sie diese Eigenschaften — oder die {{cssxref("mask-border")}}-Kurzschreibweise — nach allen `mask`-Deklarationen angeben. Wenn Sie `mask` in Ihrem Deklarationsblock setzen, setzen Sie auch implizit Folgendes:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

Aus diesem Grund empfiehlt die Spezifikation die Verwendung der `mask`-Kurzschreibweise anstelle der einzelnen Komponenten-Eigenschaften, um alle zuvor in der Kaskade gesetzten Masken zu überschreiben. Dies stellt sicher, dass `mask-border` ebenfalls zurückgesetzt wurde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskieren eines Bildes

In diesem Beispiel wird ein Bild unter Verwendung eines durch CSS generierten sich wiederholenden konischen Verlaufs als Maskenquelle maskiert. Wir zeigen den Verlauf auch als Hintergrundbild zum Vergleich.

#### HTML

Wir fügen ein {{htmlelement("img")}} und ein leeres {{htmlelement("div")}}-Element ein.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

Wir setzen die gleichen {{cssxref("border")}}-, {{cssxref("padding")}}- und Größenangaben auf sowohl dem `<img>` als auch dem `<div>`.

```css
img,
div {
  border: 20px dashed rebeccapurple;
  box-sizing: content-box;
  padding: 20px;
  height: 220px;
  width: 220px;
}
```

Wir wenden dann eine Maske auf das `<img>` an. Das `mask-image` wird durch eine {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}-Funktion generiert. Wir definieren es als einen `100px` mal `100px` großen Verlauf, der an der oberen linken Ecke der `content-box` des Bildes beginnt. Wir fügen zwei `<geometry-box>`-Werte ein; der erste setzt die `mask-origin` und der zweite definiert den `mask-clip`-Eigenschaftswert. Der Verlauf reicht von transparent zu solidem `lightgreen`. Wir haben `lightgreen` verwendet, um zu demonstrieren, dass es nicht die Farbe der Maske ist, die wichtig ist, sondern ihre Transparenz.

```css
img {
  mask: repeating-radial-gradient(
      circle,
      transparent 0 5px,
      lightgreen 15px 20px
    )
    content-box border-box 0% 0% / 100px 100px repeat;
}
```

Schließlich verwenden wir denselben Wert für die {{cssxref("background")}}-Kurzschreibweise des `<div>`, den wir für die Maske verwendet haben.

```css
div {
  background: repeating-radial-gradient(
      circle,
      transparent 0 5px,
      lightgreen 15px 20px
    )
    content-box border-box 0% 0% / 100px 100px repeat;
}
```

#### Ergebnisse

{{EmbedLiveSample("Masking an image", "", "630")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("clip-path")}}
- {{CSSxRef("filter")}}
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{SVGAttr("mask")}} Attribut
- [Anwendung von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
