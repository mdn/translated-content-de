---
title: mask
slug: Web/CSS/mask
l10n:
  sourceCommit: c72bea505546a394aa7fb9bd998cb7a59a6c456a
---

{{CSSRef}}

Die **`mask`** [CSS](/de/docs/Web/CSS)-[Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) verbirgt ein Element (teilweise oder vollständig), indem eine bestimmte Fläche des Bildes maskiert oder beschnitten wird. Es ist eine Kurzform für alle [`mask-*`](#constituent-properties)-Eigenschaften. Die Eigenschaft akzeptiert einen oder mehrere kommagetrennte Werte, wobei jeder Wert einem [`<mask-layer>`](#mask-layer) entspricht.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("mask-clip")}}
- {{cssxref("mask-composite")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-mode")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}

> [!NOTE]
> Da die `mask`-Kurzform alle Komponenteneigenschaften sowie die {{cssxref("mask-border")}}-Eigenschaften auf ihre Anfangswerte zurücksetzt, empfehlen die Spezifikationsautoren die Verwendung der `mask`-Kurzform anstelle der einzelnen Komponenteneigenschaften, um alle zuvor im Cascade gesetzten Maskenwerte zu überschreiben. Dies stellt sicher, dass `mask-border` ebenfalls zurückgesetzt wird, sodass die neuen Stile wirksam werden können.

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

  - : Eine oder mehrere kommagetrennte Maskenschichten, bestehend aus den folgenden Komponenten:

    - `<mask-reference>`
      - : Legt die Quelle des Maskenbilds fest. Siehe {{cssxref("mask-image")}}.
    - `<masking-mode>`
      - : Legt den Maskierungsmodus des Maskenbilds fest. Siehe {{cssxref("mask-mode")}}.
    - `<position>`
      - : Legt die Position des Maskenbilds fest. Siehe {{cssxref("mask-position")}}.
    - `<bg-size>`
      - : Legt die Größe des Maskenbilds fest. Siehe {{cssxref("mask-size")}}.
    - `<repeat-style>`
      - : Legt die Wiederholung des Maskenbilds fest. Siehe {{cssxref("mask-repeat")}}.
    - `<geometry-box>`
      - : Wenn nur ein `<geometry-box>`-Wert angegeben ist, setzt er sowohl {{cssxref("mask-origin")}} als auch {{cssxref("mask-clip")}}. Wenn zwei `<geometry-box>`-Werte vorhanden sind, dann setzt der erste {{cssxref("mask-origin")}} und der zweite setzt {{cssxref("mask-clip")}}.
    - `<geometry-box> | no-clip`
      - : Legt den Bereich fest, der vom Maskenbild betroffen ist. Siehe {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Legt die Zusammensetzungsoperation fest, die auf der aktuellen Maskenschicht verwendet wird. Siehe {{cssxref("mask-composite")}}.

## Beschreibung

Die `mask`-Eigenschaft verbirgt Teile oder das gesamte Element, auf das sie angewendet wird. Welche Teile verborgen, sichtbar oder teilweise gerendert werden, hängt von der Opazität der Maske bei diesem Pixel ab. Die Abschnitte, die von undurchsichtigen Teilen der Maske verdeckt werden, sind vollständig verborgen, während transparente Abschnitte der Maske das Element sichtbar machen.

Während nicht alle konstituierenden Maskeneigenschaften deklariert werden müssen, werden alle ausgelassenen Werte auf ihre Anfangswerte zurückgesetzt:

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

Innerhalb jeder `<mask-layer>`-Komponente muss die `mask-size`-Komponente nach dem `mask-position`-Wert erscheinen, wobei ein Schrägstrich (`/`) die beiden trennt.

Wenn zwei `<geometry-box>`-Werte vorhanden sind, ist der erste der `mask-origin`-Wert, während der zweite der `mask-clip`-Wert ist. Wenn ein `<geometry-box>`-Wert und das `no-clip`-Schlüsselwort vorhanden sind, ist das `<geometry-box>` der Wert der `mask-origin`-Eigenschaft, da das `no-clip` nur für die `mask-clip`-Eigenschaft gültig ist. In diesem Fall spielt die Reihenfolge der beiden Werte keine Rolle. Wenn nur ein `<geometry-box>`-Wert vorhanden ist (und kein `no-clip`-Schlüsselwort angegeben ist), wird dieser Wert sowohl für die `mask-origin`- als auch für die `mask-clip`-Eigenschaften verwendet.

Da die `mask`-Kurzform alle `mask-border-*`-Eigenschaften auf ihren `initial`-Wert zurücksetzt, sollten Sie diese Eigenschaften – oder die {{cssxref("mask-border")}}-Kurzform – nach allen `mask`-Deklarationen angeben. Bei der Festlegung von `mask` in Ihrem Deklarationsblock setzen Sie auch implizit die folgenden:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

Aus diesem Grund empfiehlt die Spezifikation, die `mask`-Kurzform anstelle der einzelnen Komponenteneigenschaften zu verwenden, um alle zuvor im Cascade gesetzten Masken zu überschreiben. Dies stellt sicher, dass der `mask-border` ebenfalls zurückgesetzt wurde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskieren eines Bildes

In diesem Beispiel wird ein Bild mit einem CSS-generierten wiederholenden konischen Farbverlauf als Maskenquelle maskiert. Wir zeigen den Farbverlauf auch als Hintergrundbild zum Vergleich.

#### HTML

Wir fügen ein {{htmlelement("img")}}- und ein leeres {{htmlelement("div")}}-Element ein.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

Wir setzen denselben {{cssxref("border")}}, {{cssxref("padding")}} und die Größe auf sowohl das `<img>` als auch das `<div>`.

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

Wir wenden dann eine Maske auf das `<img>` an. Das `mask-image` wird mit einer {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}-Funktion erzeugt. Wir definieren es als `100px` mal `100px` großen Farbverlauf, der an der oberen linken Ecke des `content-box` des Bildes wiederholt wird. Wir fügen zwei `<geometry-box>`-Werte hinzu; der erste setzt den `mask-origin` und der zweite definiert den Wert der `mask-clip`-Eigenschaft. Der Farbverlauf reicht von transparent bis solid `lightgreen`. Wir verwendeten `lightgreen`, um zu zeigen, dass nicht die Farbe der Maske wichtig ist, sondern ihre Transparenz.

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

Schließlich verwenden wir denselben Wert für die {{cssxref("background")}}-Kurzform-Eigenschaft des `<div>` wie für die `mask`.

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
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking)-Modul
- SVG {{SVGAttr("mask")}}-Attribut
- [Anwendung von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
