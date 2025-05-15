---
title: mask
slug: Web/CSS/mask
l10n:
  sourceCommit: 1860b6eac3518adb24f505536e4fa34c5299bc41
---

{{CSSRef}}

Die **`mask`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) versteckt ein Element (teilweise oder vollständig), indem ein bestimmter Bereich des Bildes maskiert oder ausgeschnitten wird. Es ist eine Kurzform für alle [`mask-*`](#bestandteile) Eigenschaften. Die Eigenschaft akzeptiert einen oder mehrere kommagetrennte Werte, wobei jeder Wert einem [`<mask-layer>`](#mask-layer) entspricht.

## Bestandteile

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- {{cssxref("mask-clip")}}
- {{cssxref("mask-composite")}}
- {{cssxref("mask-image")}}
- {{cssxref("mask-mode")}}
- {{cssxref("mask-origin")}}
- {{cssxref("mask-position")}}
- {{cssxref("mask-repeat")}}
- {{cssxref("mask-size")}}

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

  - : Ein oder mehrere kommagetrennte Maskenlayer, bestehend aus den folgenden Komponenten:

    - `<mask-reference>`
      - : Legt die Bildquelle der Maske fest. Siehe {{cssxref("mask-image")}}.
    - `<masking-mode>`
      - : Legt den Maskierungsmodus des Maskenbilds fest. Siehe {{cssxref("mask-mode")}}.
    - `<position>`
      - : Legt die Position des Maskenbilds fest. Siehe {{cssxref("mask-position")}}.
    - `<bg-size>`
      - : Legt die Größe des Maskenbilds fest. Siehe {{cssxref("mask-size")}}.
    - `<repeat-style>`
      - : Legt die Wiederholung des Maskenbilds fest. Siehe {{cssxref("mask-repeat")}}.
    - `<geometry-box>`
      - : Wenn nur ein `<geometry-box>` Wert angegeben ist, setzt es sowohl die {{cssxref("mask-origin")}} als auch die {{cssxref("mask-clip")}} Eigenschaftswerte. Wenn zwei `<geometry-box>` Werte vorhanden sind, definiert der erste den `mask-origin` und der zweite den `mask-clip`.
    - `<geometry-box> | no-clip`
      - : Setzt den Bereich, der vom Maskenbild betroffen ist. Siehe {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Legt die im aktuellen Maskenlayer verwendete Kompositionsoperation fest. Siehe {{cssxref("mask-composite")}}.

## Beschreibung

Die `mask` Kurzschreibweise versteckt einen Teil oder das gesamte Element, auf welches sie angewendet wird. Die Teile des Elements, die versteckt, sichtbar oder teilweise sichtbar sind, hängen entweder von der Opazität (Alphakanal der Maske) oder der Helligkeit (Luminanz) der Maske ab. Bei der Alphamaskierung zeigen undurchsichtige Bereiche der Maske das Element, während transparente Bereiche es verbergen. Bei der Luminanzmaskierung zeigen helle, undurchsichtige Bereiche der Maske das Element, während dunkle oder transparente Bereiche es verbergen.

Während nicht alle Bestandteile der Maskeneigenschaften deklariert werden müssen, erhalten alle ausgelassenen Werte ihre Anfangswerte, die Folgendes sind:

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

Innerhalb jedes `<mask-layer>` muss die `mask-size` Komponente nach dem `mask-position` Wert folgen, wobei ein Schrägstrich (`/`) die beiden trennt.

Wenn zwei `<geometry-box>` Werte vorhanden sind, ist der erste der `mask-origin` Wert, während der zweite der `mask-clip` Wert ist. Wenn ein `<geometry-box>` Wert und das Schlüsselwort `no-clip` vorhanden sind, ist das `<geometry-box>` der Wert der `mask-origin` Eigenschaft, da `no-clip` nur für die `mask-clip` Eigenschaft gültig ist. In diesem Fall spielt die Reihenfolge der beiden Werte keine Rolle. Wenn nur ein `<geometry-box>` Wert vorhanden ist (ohne dass der `no-clip` Begriff spezifiziert ist), wird dieser Wert sowohl für die `mask-origin` als auch die `mask-clip` Eigenschaften verwendet.

Da die `mask` Kurzform alle `mask-border-*` Eigenschaften auf ihren `initial` Wert zurücksetzt, sollten Sie diese Eigenschaften — oder die {{cssxref("mask-border")}} Kurzform — nach jeder `mask` Deklaration angeben. In Ihrem Deklarationsblock, wenn Sie `mask` setzen, setzen Sie auch implizit Folgendes:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

Aus diesem Grund empfiehlt die Spezifikation die Verwendung der `mask` Kurzschreibweise anstelle der einzelnen Komponenteneigenschaften, um Masken, die zuvor im Stilbarkeitsbaum festgelegt wurden, zu überschreiben. Dies stellt sicher, dass `mask-border` auch zurückgesetzt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskieren eines Bildes

In diesem Beispiel wird ein Bild mittels eines CSS-generierten, sich wiederholenden kegelförmigen Farbverlaufs als Maskenquelle maskiert. Wir zeigen auch den Farbverlauf als Hintergrundbild zum Vergleich.

#### HTML

Wir fügen ein {{htmlelement("img")}} und ein leeres {{htmlelement("div")}} Element ein.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

Wir setzen den gleichen {{cssxref("border")}}, {{cssxref("padding")}} und die Größe auf sowohl das `<img>` als auch das `<div>`.

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

Wir wenden dann eine Maske auf das `<img>` an. Das `mask-image` wird mittels einer {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} Funktion generiert. Wir definieren es als einen `100px` mal `100px` Farbverlauf, der sich ab der oberen linken Ecke der `content-box` des Bildes wiederholt. Wir schließen zwei `<geometry-box>` Werte ein; der erste setzt den `mask-origin` und der zweite definiert den `mask-clip` Eigenschaftswert. Der Farbverlauf reicht von transparent zu solidem `lightgreen`. Wir haben `lightgreen` verwendet, um zu demonstrieren, dass die Farbe der Maske nicht wichtig ist, sondern deren Transparenz.

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

Schließlich verwenden wir denselben Wert für die {{cssxref("background")}} Kurzschreibweise des `<div>`, den wir für die `mask` verwendet haben.

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
