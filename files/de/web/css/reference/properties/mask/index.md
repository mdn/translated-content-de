---
title: CSS-Eigenschaft `mask`
short-title: mask
slug: Web/CSS/Reference/Properties/mask
l10n:
  sourceCommit: 880c2c4b113c6fe127ca3ae3603a56ef7a2eb9a6
---

Die [CSS](/de/docs/Web/CSS)-[Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)-Eigenschaft **`mask`** blendet ein Element (teilweise oder vollständig) aus, indem sie einen angegebenen Bereich des Bildes maskiert oder beschneidet. Sie ist eine Kurzform für alle Eigenschaften [`mask-*`](#einzelne_eigenschaften). Die Eigenschaft akzeptiert einen oder mehrere durch Kommas getrennte Werte, wobei jeder Wert einer [`<mask-layer>`](#mask-layer) entspricht.

## Einzelne Eigenschaften

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
/* Keyword value */
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
  - : Eine oder mehrere durch Kommas getrennte Maskenebenen, die aus den folgenden Komponenten bestehen:
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
      - : Wenn nur ein `<geometry-box>`-Wert angegeben wird, legt er die Werte der Eigenschaften {{cssxref("mask-origin")}} und {{cssxref("mask-clip")}} fest. Wenn zwei `<geometry-box>`-Werte vorhanden sind, definiert der erste `mask-origin` und der zweite `mask-clip`.
    - `<geometry-box> | no-clip`
      - : Legt den Bereich fest, der vom Maskenbild beeinflusst wird. Siehe {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Legt die für die aktuelle Maskenebene verwendete Compositing-Operation fest. Siehe {{cssxref("mask-composite")}}.

## Beschreibung

Die Kurzform-Eigenschaft `mask` blendet einen Teil oder das gesamte Element aus, auf das sie angewendet wird. Welche Teile des Elements ausgeblendet, sichtbar oder teilweise dargestellt werden, hängt entweder von der Opazität (Alphakanal der Maske) oder der Helligkeit (Luminanz) der Maske ab. Bei der Alpha-Maskierung machen opake Bereiche der Maske das Element sichtbar, und transparente Bereiche blenden es aus. Bei der Luminanz-Maskierung machen helle opake Bereiche der Maske das Element sichtbar, und dunkle oder transparente Bereiche blenden es aus.

Obwohl nicht alle einzelnen Maskeneigenschaften deklariert werden müssen, erhalten ausgelassene Werte ihre Initialwerte. Diese sind:

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

Innerhalb jeder `<mask-layer>` muss die Komponente `mask-size` nach dem Wert `mask-position` stehen, wobei ein Schrägstrich (`/`) die beiden trennt.

Wenn zwei `<geometry-box>`-Werte vorhanden sind, ist der erste der Wert von `mask-origin`, während der zweite der Wert von `mask-clip` ist. Wenn ein `<geometry-box>`-Wert und das Schlüsselwort `no-clip` vorhanden sind, ist `<geometry-box>` der Wert der Eigenschaft `mask-origin`, da `no-clip` nur für die Eigenschaft `mask-clip` gültig ist. In diesem Fall spielt die Reihenfolge der beiden Werte keine Rolle. Wenn nur ein `<geometry-box>`-Wert vorhanden ist (ohne angegebenes Schlüsselwort `no-clip`), wird dieser Wert sowohl für die Eigenschaften `mask-origin` als auch `mask-clip` verwendet.

Da die Kurzform `mask` alle Eigenschaften `mask-border-*` auf ihren Wert `initial` zurücksetzt, sollten Sie diese Eigenschaften — oder die Kurzform {{cssxref("mask-border")}} — nach allen `mask`-Deklarationen deklarieren. Wenn Sie `mask` in Ihrem Deklarationsblock festlegen, setzen Sie außerdem implizit Folgendes:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

Aus diesem Grund empfiehlt die Spezifikation, die Kurzform `mask` anstelle der einzelnen Komponenteneigenschaften zu verwenden, um zuvor in der Kaskade gesetzte Masken zu überschreiben. Dadurch wird sichergestellt, dass auch `mask-border` zurückgesetzt wurde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskieren eines Bildes

In diesem Beispiel wird ein Bild unter Verwendung eines von CSS erzeugten wiederholenden konischen Farbverlaufs als Maskenquelle maskiert. Zum Vergleich zeigen wir den Farbverlauf auch als Hintergrundbild.

#### HTML

Wir fügen ein {{htmlelement("img")}}- und ein leeres {{htmlelement("div")}}-Element ein.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

Wir legen für `<img>` und `<div>` dieselben Werte für {{cssxref("border")}}, {{cssxref("padding")}} und die Größenangaben fest.

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

Anschließend wenden wir eine Maske auf `<img>` an. Das `mask-image` wird mit einer Funktion {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erzeugt. Wir definieren es als einen `100px` mal `100px` großen Farbverlauf, der sich ausgehend von der oberen linken Ecke der `content-box` des Bildes wiederholt. Wir verwenden zwei `<geometry-box>`-Werte; der erste legt `mask-origin` fest und der zweite definiert den Eigenschaftswert `mask-clip`. Der Farbverlauf reicht von transparent bis zu deckendem `lightgreen`. Wir verwenden `lightgreen`, um zu zeigen, dass nicht die Farbe der Maske entscheidend ist, sondern ihre Transparenz.

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

Abschließend verwenden wir für die Kurzform-Eigenschaft {{cssxref("background")}} von `<div>` denselben Wert wie für `mask`.

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
- [Einführung in die CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS-Eigenschaften für `mask`](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Modul [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking)
- SVG-Attribut {{SVGAttr("mask")}}
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
