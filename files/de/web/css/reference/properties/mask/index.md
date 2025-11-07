---
title: mask
slug: Web/CSS/Reference/Properties/mask
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`mask`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) verbirgt ein Element (teilweise oder vollständig), indem sie einen bestimmten Bereich des Bildes maskiert oder zuschneidet. Es ist eine Kurzform für alle [`mask-*`](#zusammensetzende_eigenschaften) Eigenschaften. Die Eigenschaft akzeptiert einen oder mehrere kommagetrennte Werte, wobei jeder Wert einem [`<mask-layer>`](#mask-layer) entspricht.

## Zusammensetzende Eigenschaften

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
mask: url("mask.png"); /* Raster image used as mask */
mask: url("masks.svg#star"); /* SVG used as mask */

/* Combined values */
mask: url("masks.svg#star") luminance; /* Luminance mask */
mask: url("masks.svg#star") 40px 20px; /* Mask positioned 40px from the top and 20px from the left */
mask: url("masks.svg#star") 0 0/50px 50px; /* Mask with a width and height of 50px */
mask: url("masks.svg#star") repeat-x; /* Horizontally-repeated mask */
mask: url("masks.svg#star") stroke-box; /* Mask extends to the inside edge of the stroke box */
mask: url("masks.svg#star") exclude; /* Mask combined with background using non-overlapping parts */

/* Multiple masks */
mask:
  url("masks.svg#star") left / 16px repeat-y,
  /* 16px-wide mask on the left side */ url("masks.svg#circle") right / 16px
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
      - : Legt die Quelle des Maskenbildes fest. Siehe {{cssxref("mask-image")}}.
    - `<masking-mode>`
      - : Legt den Maskierungsmodus des Maskenbildes fest. Siehe {{cssxref("mask-mode")}}.
    - `<position>`
      - : Legt die Position des Maskenbildes fest. Siehe {{cssxref("mask-position")}}.
    - `<bg-size>`
      - : Legt die Größe des Maskenbildes fest. Siehe {{cssxref("mask-size")}}.
    - `<repeat-style>`
      - : Legt die Wiederholung des Maskenbildes fest. Siehe {{cssxref("mask-repeat")}}.
    - `<geometry-box>`
      - : Wenn nur ein `<geometry-box>`-Wert angegeben ist, setzt es sowohl die Werte der Eigenschaften {{cssxref("mask-origin")}} als auch {{cssxref("mask-clip")}}. Wenn zwei `<geometry-box>`-Werte vorhanden sind, definiert der erste den `mask-origin` und der zweite den `mask-clip`.
    - `<geometry-box> | no-clip`
      - : Legt den Bereich fest, der vom Maskenbild betroffen ist. Siehe {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Legt die Kompositionsoperation fest, die auf die aktuelle Maskenschicht angewendet wird. Siehe {{cssxref("mask-composite")}}.

## Beschreibung

Die `mask`-Kurzform-Eigenschaft verbirgt einen Teil oder das gesamte Element, auf das sie angewendet wird. Die Teile des Elements, die verborgen, sichtbar oder teilweise angezeigt werden, hängen entweder von der Opazität (Alphakanal der Maske) oder der Helligkeit (Luminanz) der Maske ab. Bei der Alphamaskierung decken undurchsichtige Bereiche der Maske das Element auf, und transparente Bereiche verbergen es. Bei der Luminanzmaskierung decken helle undurchsichtige Bereiche der Maske das Element auf, während dunkle oder transparente Bereiche es verbergen.

Nicht alle zusammengehörigen Maskeneigenschaften müssen deklariert werden, alle ausgelassenen Werte verwenden ihre anfänglichen Werte, die sind:

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

Innerhalb jedes `<mask-layer>` muss die `mask-size`-Komponente nach dem `mask-position`-Wert kommen, wobei ein Schrägstrich (`/`) die beiden trennt.

Wenn zwei `<geometry-box>`-Werte vorhanden sind, ist der erste der `mask-origin`-Wert, während der zweite der `mask-clip`-Wert ist. Wenn ein `<geometry-box>`-Wert und das `no-clip`-Schlüsselwort vorhanden sind, ist das `<geometry-box>` der Wert der `mask-origin`-Eigenschaft, da `no-clip` nur für die `mask-clip`-Eigenschaft gültig ist. In diesem Fall ist die Reihenfolge der beiden Werte unerheblich. Wenn nur ein `<geometry-box>`-Wert vorhanden ist (ohne dass ein `no-clip`-Schlüsselwort angegeben ist), wird dieser Wert sowohl für die `mask-origin`- als auch die `mask-clip`-Eigenschaften verwendet.

Da die Kurzform `mask` alle `mask-border-*`-Eigenschaften auf ihren `initial`-Wert zurücksetzt, sollten sie diese Eigenschaften — oder die {{cssxref("mask-border")}}-Kurzform — nach allen `mask`-Deklarationen angeben. Wenn Sie `mask` in Ihrem Deklarationsblock setzen, legen Sie auch implizit Folgendes fest:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

Aus diesem Grund empfiehlt die Spezifikation, die `mask`-Kurzform zu verwenden, anstatt die einzelnen Komponenteneigenschaften, um alle zuvor in der Kaskade festgelegten Masken zu überschreiben. Dies stellt sicher, dass auch `mask-border` zurückgesetzt wurde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskierung eines Bildes

In diesem Beispiel wird ein Bild mit einem in CSS generierten wiederholten konischen Verlauf als Maskenquelle maskiert. Wir zeigen auch den Verlauf als Hintergrundbild zum Vergleich.

#### HTML

Wir fügen ein {{htmlelement("img")}} und ein leeres {{htmlelement("div")}}-Element hinzu.

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

Dann wenden wir eine Maske auf das `<img>` an. Das `mask-image` wird mit einer {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}-Funktion erzeugt. Wir definieren es als `100px` mal `100px` großen Verlauf, der sich ab der oberen linken Ecke der `content-box` des Bildes wiederholt. Wir fügen zwei `<geometry-box>`-Werte hinzu; der erste setzt den `mask-origin` und der zweite definiert den `mask-clip`-Eigenschaftswert. Der Verlauf reicht von transparent zu solid `lightgreen`. Wir haben `lightgreen` verwendet, um zu demonstrieren, dass nicht die Farbe der Maske wichtig ist, sondern ihre Transparenz.

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

Schließlich verwenden wir den gleichen Wert für die Kurzform-Eigenschaft {{cssxref("background")}} des `<div>`, den wir für die `mask` genutzt haben.

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
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS Maskierungsmodul](/de/docs/Web/CSS/Guides/Masking)
- SVG {{SVGAttr("mask")}} Attribut
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
