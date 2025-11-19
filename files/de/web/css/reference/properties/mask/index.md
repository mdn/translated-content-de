---
title: mask
slug: Web/CSS/Reference/Properties/mask
l10n:
  sourceCommit: 7b291dab974ec1ceb97c83f45ce76c3afada2e63
---

Die **`mask`** [CSS](/de/docs/Web/CSS) [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) verbirgt ein Element (teilweise oder vollständig), indem es einen angegebenen Bereich des Bildes maskiert oder zuschneidet. Es ist eine Kurzform für alle [`mask-*`](#bestandteile_der_eigenschaften)-Eigenschaften. Die Eigenschaft akzeptiert einen oder mehrere kommagetrennte Werte, wobei jeder Wert einem [`<mask-layer>`](#mask-layer) entspricht.

## Bestandteile der Eigenschaften

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
  - : Ein oder mehrere kommagetrennte Maskenschichten, bestehend aus folgenden Komponenten:
    - `<mask-reference>`
      - : Legt die Maskenbildquelle fest. Siehe {{cssxref("mask-image")}}.
    - `<masking-mode>`
      - : Legt den Maskierungsmodus des Maskenbilds fest. Siehe {{cssxref("mask-mode")}}.
    - `<position>`
      - : Legt die Position des Maskenbilds fest. Siehe {{cssxref("mask-position")}}.
    - `<bg-size>`
      - : Legt die Größe des Maskenbilds fest. Siehe {{cssxref("mask-size")}}.
    - `<repeat-style>`
      - : Legt die Wiederholung des Maskenbilds fest. Siehe {{cssxref("mask-repeat")}}.
    - `<geometry-box>`
      - : Wenn nur ein `<geometry-box>`-Wert angegeben ist, wird sowohl die {{cssxref("mask-origin")}}- als auch die {{cssxref("mask-clip")}}-Eigenschaft festgelegt. Wenn zwei `<geometry-box>`-Werte vorhanden sind, definiert der erste `mask-origin` und der zweite `mask-clip`.
    - `<geometry-box> | no-clip`
      - : Legt den Bereich fest, der vom Maskenbild betroffen ist. Siehe {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Legt die Mischoperation fest, die auf die aktuelle Maskenschicht angewendet wird. Siehe {{cssxref("mask-composite")}}.

## Beschreibung

Die `mask`-Kurzform-Eigenschaft verbirgt einen Teil oder das gesamte Element, auf das sie angewendet wird. Die Bereiche des Elements, die verborgen, sichtbar oder teilweise sichtbar sind, hängen entweder von der Opazität (Alphakanal der Maske) oder der Helligkeit (Luminanz) der Maske ab. Bei der Alpha-Maskierung geben undurchsichtige Bereiche der Maske das Element frei, während transparente Bereiche es verbergen. Bei der Luminanz-Maskierung geben helle undurchsichtige Bereiche der Maske das Element frei, während dunkle oder transparente Bereiche es verbergen.

Obwohl nicht alle zugehörigen Maskeneigenschaften deklariert werden müssen, werden alle ausgelassenen Werte auf ihre Anfangswerte zurückgesetzt, die wie folgt sind:

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

Innerhalb jeder `<mask-layer>`-Komponente muss die `mask-size`-Komponente nach dem `mask-position`-Wert kommen, wobei ein Schrägstrich (`/`) die beiden trennt.

Wenn zwei `<geometry-box>`-Werte vorhanden sind, ist der erste der `mask-origin`-Wert, während der zweite der `mask-clip`-Wert ist. Wenn ein `<geometry-box>`-Wert und das Schlüsselwort `no-clip` vorhanden sind, dann ist die `<geometry-box>` der Wert der `mask-origin`-Eigenschaft, da `no-clip` nur für die `mask-clip`-Eigenschaft gültig ist. In diesem Fall ist die Reihenfolge der beiden Werte unerheblich. Wenn nur ein `<geometry-box>`-Wert vorhanden ist (ohne das `no-clip`-Schlüsselwort), wird dieser Wert sowohl für die `mask-origin`- als auch die `mask-clip`-Eigenschaften verwendet.

Da die `mask`-Kurzform alle `mask-border-*`-Eigenschaften auf ihren `initial`-Wert zurücksetzt, sollten Sie diese Eigenschaften — oder die {{cssxref("mask-border")}}-Kurzform — nach allen `mask`-Deklarationen deklarieren. Wenn Sie `mask` in Ihrem Deklarationsblock setzen, setzen Sie implizit auch die folgenden:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

Aus diesem Grund empfiehlt die Spezifikation, die `mask`-Kurzform anstelle der einzelnen Komponenteneigenschaften zu verwenden, um vorher in der Kaskade gesetzte Masken außer Kraft zu setzen. Dies stellt sicher, dass `mask-border` ebenfalls zurückgesetzt wurde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskierung eines Bildes

In diesem Beispiel wird ein Bild mit einem in CSS generierten wiederholenden konischen Verlauf als Maskenquelle maskiert. Wir zeigen auch den Verlauf als Hintergrundbild zum Vergleich.

#### HTML

Wir fügen ein {{htmlelement("img")}} und ein leeres {{htmlelement("div")}}-Element ein.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

Wir setzen den gleichen {{cssxref("border")}}, {{cssxref("padding")}} und die Größenbestimmung sowohl auf das `<img>` als auch auf das `<div>`.

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

Dann wenden wir eine Maske auf das `<img>` an. Die `mask-image` wird mit einer {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}-Funktion erzeugt. Wir definieren es als einen `100px` x `100px` großen Verlauf, der beginnend an der oberen linken Ecke der `content-box` des Bildes wiederholt wird. Wir fügen zwei `<geometry-box>`-Werte ein; der erste setzt die `mask-origin` und der zweite definiert den `mask-clip`-Eigenschaftswert. Der Verlauf reicht von transparent bis fest `lightgreen`. Wir haben `lightgreen` verwendet, um zu demonstrieren, dass nicht die Farbe der Maske wichtig ist, sondern deren Transparenz.

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

Schließlich verwenden wir den gleichen Wert für die {{cssxref("background")}}-Kurzform-Eigenschaft des `<div>`, den wir für die Maske verwendet haben.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/Guides/Masking)
- SVG {{SVGAttr("mask")}}-Attribut
- [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
