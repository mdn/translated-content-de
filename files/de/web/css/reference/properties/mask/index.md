---
title: "`mask` CSS-Eigenschaft"
short-title: mask
slug: Web/CSS/Reference/Properties/mask
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask`** [CSS](/de/docs/Web/CSS) [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) verbirgt ein Element (teilweise oder vollständig), indem ein spezifizierter Bereich des Bildes maskiert oder ausgeschnitten wird. Es ist eine Kurzschreibweise für alle [`mask-*`](#bestandteile) Eigenschaften. Diese Eigenschaft akzeptiert einen oder mehrere kommagetrennte Werte, wobei jeder Wert einem [`<mask-layer>`](#mask-layer) entspricht.

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
  - : Ein oder mehrere kommagetrennte Maskenlayer, die aus den folgenden Komponenten bestehen:
    - `<mask-reference>`
      - : Legt die Quellbildquelle der Maske fest. Siehe {{cssxref("mask-image")}}.
    - `<masking-mode>`
      - : Legt den Maskierungsmodus der Maskenbildquelle fest. Siehe {{cssxref("mask-mode")}}.
    - `<position>`
      - : Legt die Position des Maskenbildes fest. Siehe {{cssxref("mask-position")}}.
    - `<bg-size>`
      - : Legt die Größe des Maskenbildes fest. Siehe {{cssxref("mask-size")}}.
    - `<repeat-style>`
      - : Legt die Wiederholung des Maskenbildes fest. Siehe {{cssxref("mask-repeat")}}.
    - `<geometry-box>`
      - : Wenn nur ein `<geometry-box>` Wert angegeben ist, legt er sowohl die Werte der Eigenschaften {{cssxref("mask-origin")}} als auch {{cssxref("mask-clip")}} fest. Sind zwei `<geometry-box>` Werte vorhanden, definiert der erste den `mask-origin` und der zweite den `mask-clip`.
    - `<geometry-box> | no-clip`
      - : Legt den von der Maskenbildquelle betroffenen Bereich fest. Siehe {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Legt den Überlagerungsmodus fest, der auf die aktuelle Maskenschicht angewendet wird. Siehe {{cssxref("mask-composite")}}.

## Beschreibung

Die Kurzschreibweise `mask` verbirgt teilweise oder vollständig das Element, auf das sie angewendet wird. Die versteckten, sichtbaren oder teilweise sichtbaren Teile des Elements hängen entweder von der Opazität (Alpha-Kanal der Maske) oder der Helligkeit (Luminanz) der Maske ab. Bei der Alpha-Maskierung offenbaren opake Bereiche der Maske das Element, und transparente Bereiche verbergen es. Bei der Luminanzmaskierung zeigen helle opake Bereiche der Maske das Element und dunkle oder transparente Bereiche verbergen es.

Obwohl nicht alle Maskeneigenschaften angegeben werden müssen, haben ausgelassene Werte ihre Anfangswerte, die wie folgt sind:

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

Innerhalb jedes `<mask-layer>` muss die `mask-size` Komponente nach dem `mask-position` Wert stehen, getrennt durch einen Vorwärtsschrägstrich (`/`).

Wenn zwei `<geometry-box>` Werte vorhanden sind, ist der erste der `mask-origin` Wert, während der zweite der `mask-clip` Wert ist. Wenn ein `<geometry-box>` Wert und das Schlüsselwort `no-clip` vorhanden sind, ist der `<geometry-box>` der Wert der `mask-origin` Eigenschaft, da `no-clip` nur für die `mask-clip` Eigenschaft gültig ist. In diesem Fall spielt die Reihenfolge der beiden Werte keine Rolle. Wenn nur ein `<geometry-box>` Wert vorhanden ist (ohne spezifiziertes `no-clip` Schlüsselwort), wird dieser Wert sowohl für die Eigenschaften `mask-origin` als auch `mask-clip` verwendet.

Da die Kurzschreibweise `mask` alle `mask-border-*` Eigenschaften auf ihren `initial` Wert zurücksetzt, sollten diese Eigenschaften — oder die {{cssxref("mask-border")}} Kurzschreibweise — nach allen `mask` Deklarationen angegeben werden. Beim Setzen von `mask` in Ihrem Deklarationsblock legen Sie implizit Folgendes fest:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

Aus diesem Grund empfiehlt die Spezifikation die Verwendung der `mask` Kurzschreibweise anstelle der einzelnen Komponenteneigenschaften, um alle Masken zu überschreiben, die früher in der Cascade gesetzt wurden. Dies stellt sicher, dass `mask-border` ebenfalls zurückgesetzt wurde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskierung eines Bildes

In diesem Beispiel wird ein Bild mit einem CSS-generierten, sich wiederholenden Kegelgradienten als Maskenquelle maskiert. Wir zeigen den Gradienten auch als Hintergrundbild zum Vergleich.

#### HTML

Wir fügen ein {{htmlelement("img")}} und ein leeres {{htmlelement("div")}} Element ein.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

Wir setzen die gleichen {{cssxref("border")}}, {{cssxref("padding")}} und Größenangaben sowohl für das `<img>` als auch das `<div>`.

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

Dann wenden wir eine Maske auf das `<img>` an. Das `mask-image` wird mit einer {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} Funktion erzeugt. Wir definieren es als einen `100px` mal `100px` großen Gradienten, der sich ab der oberen linken Ecke der `content-box` des Bildes wiederholt. Wir fügen zwei `<geometry-box>` Werte hinzu; der erste setzt den `mask-origin` und der zweite definiert den Wert der `mask-clip` Eigenschaft. Der Gradient geht von transparent zu soliden `lightgreen`. Wir haben `lightgreen` verwendet, um zu demonstrieren, dass nicht die Farbe der Maske wichtig ist, sondern ihre Transparenz.

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

Schließlich verwenden wir denselben Wert für die {{cssxref("background")}} Kurzschreibweise des `<div>` wie für die Maske.

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
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/Guides/Masking)
- SVG {{SVGAttr("mask")}} Attribut
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
