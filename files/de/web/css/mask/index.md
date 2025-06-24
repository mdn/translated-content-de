---
title: mask
slug: Web/CSS/mask
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`mask`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) verbirgt ein Element (teilweise oder vollständig) durch Maskieren oder Abschneiden eines festgelegten Bereichs des Bildes. Sie ist eine Kurzform für alle [`mask-*`](#untergeordnete_eigenschaften) Eigenschaften. Die Eigenschaft akzeptiert einen oder mehrere kommagetrennte Werte, wobei jeder Wert einem [`<mask-layer>`](#mask-layer) entspricht.

## Untergeordnete Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Ein oder mehrere kommagetrennte Maskenschichten, bestehend aus den folgenden Komponenten:
    - `<mask-reference>`
      - : Legt die Maskenbild-Quelle fest. Siehe {{cssxref("mask-image")}}.
    - `<masking-mode>`
      - : Legt den Maskierungsmodus des Maskenbildes fest. Siehe {{cssxref("mask-mode")}}.
    - `<position>`
      - : Legt die Position des Maskenbildes fest. Siehe {{cssxref("mask-position")}}.
    - `<bg-size>`
      - : Legt die Größe des Maskenbildes fest. Siehe {{cssxref("mask-size")}}.
    - `<repeat-style>`
      - : Legt die Wiederholung des Maskenbildes fest. Siehe {{cssxref("mask-repeat")}}.
    - `<geometry-box>`
      - : Wenn nur ein `<geometry-box>` Wert angegeben ist, werden sowohl die {{cssxref("mask-origin")}} als auch die {{cssxref("mask-clip")}} Eigenschaftswerte festgelegt. Wenn zwei `<geometry-box>` Werte vorhanden sind, definiert der erste den `mask-origin` und der zweite den `mask-clip`.
    - `<geometry-box> | no-clip`
      - : Legt den Bereich fest, der von der Maske betroffen ist. Siehe {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Legt die Zusammensetzungsoperation für die aktuelle Maskenschicht fest. Siehe {{cssxref("mask-composite")}}.

## Beschreibung

Die `mask` Kurzform-Eigenschaft verbirgt Teile oder das gesamte Element, auf das sie angewendet wird. Die Teile des Elements, die verborgen, sichtbar oder teilweise sichtbar sind, hängen entweder von der Opazität (Alphakanal der Maske) oder der Helligkeit (Luminanz) der Maske ab. Bei der Alpha-Maskierung enthüllen undurchsichtige Bereiche der Maske das Element, während transparente Bereiche es verbergen. Bei der Luminanz-Maskierung enthüllen helle undurchsichtige Bereiche der Maske das Element, während dunkle oder transparente Bereiche es verbergen.

Obwohl nicht alle untergeordneten Maskeneigenschaften deklariert werden müssen, nehmen alle weggelassenen Werte ihre Initialwerte an, die sind:

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

Innerhalb jeder `<mask-layer>` muss die `mask-size` Komponente nach dem `mask-position` Wert kommen, wobei ein Schrägstrich (`/`) die beiden trennt.

Wenn zwei `<geometry-box>` Werte vorhanden sind, ist der erste der `mask-origin` Wert, während der zweite der `mask-clip` Wert ist. Wenn ein `<geometry-box>` Wert und das `no-clip` Schlüsselwort vorhanden sind, ist das `<geometry-box>` der Wert der `mask-origin` Eigenschaft, da `no-clip` nur für die `mask-clip` Eigenschaft gültig ist. In diesem Fall spielt die Reihenfolge der beiden Werte keine Rolle. Ist nur ein `<geometry-box>` Wert vorhanden (ohne Angabe des `no-clip` Schlüsselworts), wird dieser Wert sowohl für die `mask-origin` als auch die `mask-clip` Eigenschaften verwendet.

Da die `mask` Kurzform alle `mask-border-*` Eigenschaften auf ihren `initial` Wert zurücksetzt, sollten diese Eigenschaften — oder die {{cssxref("mask-border")}} Kurzform — nach allen `mask` Deklarationen deklariert werden. Wenn Sie `mask` in Ihrem Deklarationsblock setzen, legen Sie auch implizit die folgenden Eigenschaften fest:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

Aus diesem Grund empfiehlt die Spezifikation, die `mask` Kurzform anstelle der einzelnen Komponenteneigenschaften zu verwenden, um alle zuvor in der Kaskade gesetzten Masken zu überschreiben. Dies stellt sicher, dass auch der `mask-border` zurückgesetzt wurde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskieren eines Bildes

In diesem Beispiel wird ein Bild mit einem CSS-generierten, sich wiederholenden konischen Farbverlauf als Maskenquelle maskiert. Wir zeigen den Farbverlauf auch als Hintergrundbild zum Vergleich.

#### HTML

Wir fügen einen {{htmlelement("img")}} und ein leeres {{htmlelement("div")}} Element ein.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

Wir setzen dasselbe {{cssxref("border")}}, {{cssxref("padding")}} und dieselbe Größe sowohl auf das `<img>` als auch auf das `<div>`.

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

Wir wenden dann eine Maske auf das `<img>` an. Das `mask-image` wird mithilfe einer {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} Funktion erzeugt. Wir definieren es als einen `100px` mal `100px` großen Farbverlauf, der sich ab der oberen linken Ecke des `content-box` des Bildes wiederholt. Wir fügen zwei `<geometry-box>` Werte hinzu; der erste setzt den `mask-origin` und der zweite definiert den `mask-clip` Eigenschaftswert. Der Farbverlauf reicht von transparent bis zu festem `lightgreen`. Wir haben `lightgreen` verwendet, um zu demonstrieren, dass nicht die Farbe der Maske wichtig ist, sondern deren Transparenz.

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

Schließlich verwenden wir denselben Wert für die {{cssxref("background")}} Kurzform-Eigenschaft des `<div>`, den wir auch für die Maske verwendet haben.

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
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
- SVG {{SVGAttr("mask")}} Attribut
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
