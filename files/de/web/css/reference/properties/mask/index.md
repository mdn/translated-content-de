---
title: mask
slug: Web/CSS/Reference/Properties/mask
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask`** [CSS](/de/docs/Web/CSS) [Shorthand-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) verbirgt ein Element (ganz oder teilweise) durch Maskieren oder Abschneiden eines angegebenen Bereichs des Bildes. Es ist eine Kurzform für alle [`mask-*`](#bestandteilseigenschaften)-Eigenschaften. Die Eigenschaft akzeptiert einen oder mehrere kommagetrennte Werte, wobei jeder Wert einem [`<mask-layer>`](#mask-layer) entspricht.

## Bestandteilseigenschaften

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
  - : Eine oder mehrere kommagetrennte Maskenschichten, die aus folgenden Komponenten bestehen:
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
      - : Wenn nur ein `<geometry-box>`-Wert angegeben wird, legt er sowohl die Werte der Eigenschaften {{cssxref("mask-origin")}} als auch {{cssxref("mask-clip")}} fest. Wenn zwei `<geometry-box>`-Werte vorhanden sind, definiert der erste `mask-origin` und der zweite `mask-clip`.
    - `<geometry-box> | no-clip`
      - : Legt den durch das Maskenbild betroffenen Bereich fest. Siehe {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Legt den Kompositionsvorgang fest, der auf die aktuelle Maskenschicht angewendet wird. Siehe {{cssxref("mask-composite")}}.

## Beschreibung

Die `mask`-Shorthand-Eigenschaft verbirgt Teile oder das gesamte Element, auf das sie angewendet wird. Die Teile des Elements, die verborgen, sichtbar oder teilweise gezeigt werden, hängen entweder von der Opazität (Alpha-Kanal der Maske) oder der Helligkeit (Luminanz) der Maske ab. Bei der Alphamaskierung legen undurchsichtige Bereiche der Maske das Element frei, während transparente Bereiche es verbergen. Bei der Luminanzmaskierung legen helle undurchsichtige Bereiche der Maske das Element frei, während dunkle oder transparente Bereiche es verbergen.

Obwohl nicht alle Masken-Bestandteilseigenschaften deklariert werden müssen, setzen alle ausgelassenen Werte auf ihre Standardwerte zurück, die sind:

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

Innerhalb jeder `<mask-layer>` muss die `mask-size`-Komponente nach dem `mask-position`-Wert stehen, wobei ein Schrägstrich (`/`) die beiden trennt.

Wenn zwei `<geometry-box>`-Werte vorhanden sind, ist der erste der `mask-origin`-Wert, während der zweite der `mask-clip`-Wert ist. Wenn ein `<geometry-box>`-Wert und das Schlüsselwort `no-clip` vorhanden sind, ist die `<geometry-box>` der Wert der `mask-origin`-Eigenschaft, da `no-clip` nur für die `mask-clip`-Eigenschaft gültig ist. In diesem Fall spielt die Reihenfolge der beiden Werte keine Rolle. Wenn nur ein `<geometry-box>`-Wert vorhanden ist (ohne dass der Schlüsselbegriff `no-clip` angegeben ist), wird dieser Wert sowohl für die `mask-origin`- als auch für die `mask-clip`-Eigenschaft verwendet.

Da die `mask`-Shorthand-Eigenschaft alle `mask-border-*`-Eigenschaften auf ihren `initial`-Wert zurücksetzt, sollten Sie diese Eigenschaften — oder die {{cssxref("mask-border")}}-Kurzform — nach allen `mask`-Deklarationen angeben. Beim Setzen von `mask` in Ihrem Deklarationsblock setzen Sie auch implizit die folgenden:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

Aus diesem Grund empfiehlt die Spezifikation, die `mask`-Shorthand-Eigenschaft anstelle der einzelnen Komponenteneigenschaften zu verwenden, um zuvor in der Kaskade gesetzte Masken zu überschreiben. Dies stellt sicher, dass `mask-border` ebenfalls zurückgesetzt wurde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskierung eines Bildes

In diesem Beispiel wird ein Bild mit einem CSS-generierten wiederholten konischen Verlauf als Maskenquelle maskiert. Wir zeigen auch den Verlauf als Hintergrundbild zum Vergleich.

#### HTML

Wir fügen ein {{htmlelement("img")}} und ein leeres {{htmlelement("div")}}-Element hinzu.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

Wir setzen denselben {{cssxref("border")}}, {{cssxref("padding")}} und dieselbe Größe auf sowohl das `<img>` als auch das `<div>`.

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

Dann wenden wir eine Maske auf das `<img>` an. Das `mask-image` wird mit einer {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}-Funktion generiert. Wir definieren es als einen `100px` mal `100px` großen Verlauf, der sich ab der oberen linken Ecke des `content-box` des Bildes wiederholt. Wir fügen zwei `<geometry-box>`-Werte hinzu; der erste legt das `mask-origin` und der zweite definiert den `mask-clip`-Eigenschaftswert fest. Der Verlauf reicht von transparent zu einem soliden `lightgreen`. Wir haben `lightgreen` verwendet, um zu demonstrieren, dass nicht die Farbe der Maske wichtig ist, sondern ihre Transparenz.

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

Schließlich verwenden wir denselben Wert für die {{cssxref("background")}}-Shorthand-Eigenschaft des `<div>`, wie wir ihn für die `mask` verwendet haben.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- Modul [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking)
- SVG-Attribut {{SVGAttr("mask")}}
- [Anwenden von SVG-Effekten auf HTML-Inhalt](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
