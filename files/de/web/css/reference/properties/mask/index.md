---
title: "`mask` CSS-Eigenschaft"
short-title: mask
slug: Web/CSS/Reference/Properties/mask
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`mask`**-[CSS](/de/docs/Web/CSS)-[Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) versteckt ein Element (teilweise oder vollständig), indem es einen bestimmten Bereich des Bildes maskiert oder ausschneidet. Es ist eine Kurzschreibweise für alle [`mask-*`](#bestandteile_der_eigenschaften)-Eigenschaften. Die Eigenschaft akzeptiert einen oder mehrere durch Kommas getrennte Werte, wobei jeder Wert einem [`<mask-layer>`](#mask-layer) entspricht.

## Bestandteile der Eigenschaften

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
  - : Eine oder mehrere durch Kommas getrennte Maskenschichten, bestehend aus den folgenden Komponenten:
    - `<mask-reference>`
      - : Setzt die Quelle des Maskenbildes. Siehe {{cssxref("mask-image")}}.
    - `<masking-mode>`
      - : Setzt den Maskierungsmodus des Maskenbildes. Siehe {{cssxref("mask-mode")}}.
    - `<position>`
      - : Setzt die Position des Maskenbildes. Siehe {{cssxref("mask-position")}}.
    - `<bg-size>`
      - : Setzt die Größe des Maskenbildes. Siehe {{cssxref("mask-size")}}.
    - `<repeat-style>`
      - : Setzt die Wiederholung des Maskenbildes. Siehe {{cssxref("mask-repeat")}}.
    - `<geometry-box>`
      - : Wenn nur ein `<geometry-box>`-Wert angegeben ist, setzt er sowohl die {{cssxref("mask-origin")}}- als auch die {{cssxref("mask-clip")}}-Eigenschaftswerte. Wenn zwei `<geometry-box>`-Werte vorhanden sind, definiert der erste den `mask-origin` und der zweite den `mask-clip`.
    - `<geometry-box> | no-clip`
      - : Setzt den Bereich, der vom Maskenbild betroffen ist. Siehe {{cssxref("mask-clip")}}.
    - `<compositing-operator>`
      - : Setzt den Kompositionsvorgang, der auf die aktuelle Maskenschicht angewendet wird. Siehe {{cssxref("mask-composite")}}.

## Beschreibung

Die `mask`-Kurzschreibweise versteckt Teile oder das gesamte Element, auf das sie angewendet wird. Welche Teile des Elements versteckt, sichtbar oder teilweise gezeigt werden, hängt entweder von der Opazität (dem Alphakanal der Maske) oder der Helligkeit (Luminanz) der Maske ab. Beim Alphakanal-Maskieren zeigen die opaken Bereiche der Maske das Element, und die transparenten Bereiche verbergen es. Beim Luminanz-Maskieren zeigen helle opake Bereiche der Maske das Element, und dunkle oder transparente Bereiche verbergen es.

Obwohl nicht alle Bestandteile der Maskeneigenschaften deklariert werden müssen, nehmen alle ausgelassenen Werte ihre Anfangswerte an, die sind:

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

Innerhalb jeder `<mask-layer>`-Schicht muss die `mask-size`-Komponente nach dem `mask-position`-Wert stehen, wobei die beiden durch einen Schrägstrich (`/`) getrennt werden.

Wenn zwei `<geometry-box>`-Werte vorhanden sind, ist der erste der `mask-origin`-Wert, während der zweite der `mask-clip`-Wert ist. Wenn ein `<geometry-box>`-Wert und das `no-clip`-Schlüsselwort vorhanden sind, ist das `<geometry-box>` der Wert der `mask-origin`-Eigenschaft, da das `no-clip` nur für die `mask-clip`-Eigenschaft gültig ist. In diesem Fall spielt die Reihenfolge der beiden Werte keine Rolle. Wenn nur ein `<geometry-box>`-Wert vorhanden ist (ohne das `no-clip`-Schlüsselwort), wird dieser Wert sowohl für die `mask-origin`- als auch für die `mask-clip`-Eigenschaften verwendet.

Da die `mask`-Kurzschreibweise alle `mask-border-*`-Eigenschaften auf ihren `initial`-Wert zurücksetzt, sollten Sie diese Eigenschaften — oder die {{cssxref("mask-border")}}-Kurzschreibweise — nach allen `mask`-Deklarationen angeben. Wenn Sie `mask` in Ihrem Deklarationsblock setzen, setzen Sie ebenfalls implizit Folgendes:

```css
mask-border-source: none;
mask-border-mode: alpha;
mask-border-outset: 0;
mask-border-repeat: stretch;
mask-border-slice: 0;
mask-border-width: auto;
```

Aus diesem Grund empfiehlt die Spezifikation, die `mask`-Kurzschreibweise statt der einzelnen Bestandteil-Eigenschaften zu verwenden, um alle vorher in der Kaskade gesetzten Masken zu überschreiben. Dies stellt sicher, dass `mask-border` ebenfalls zurückgesetzt wurde.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Maskieren eines Bildes

In diesem Beispiel wird ein Bild mit einem von CSS generierten, sich wiederholenden konischen Farbverlauf als Maskenquelle maskiert. Wir zeigen den Farbverlauf auch als Hintergrundbild zum Vergleich.

#### HTML

Wir fügen ein {{htmlelement("img")}}- und ein leeres {{htmlelement("div")}}-Element ein.

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
<div></div>
```

#### CSS

Wir setzen den gleichen {{cssxref("border")}}, {{cssxref("padding")}}, und die Größe sowohl auf dem `<img>` als auch auf dem `<div>`.

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

Wir wenden dann eine Maske auf das `<img>` an. Das `mask-image` wird mit einer {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}-Funktion erzeugt. Wir definieren es als einen `100px` mal `100px` Farbverlauf, der sich beginnend an der oberen linken Ecke der `content-box` des Bildes wiederholt. Wir fügen zwei `<geometry-box>`-Werte hinzu; der erste setzt den `mask-origin` und der zweite definiert den `mask-clip`-Eigenschaftswert. Der Farbverlauf reicht von transparent bis zu solidem `lightgreen`. Wir haben `lightgreen` verwendet, um zu zeigen, dass es nicht die Farbe der Maske ist, die wichtig ist, sondern ihre Transparenz.

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

Schließlich verwenden wir denselben Wert für die `<div>`-{{cssxref("background")}}-Kurzschreibweise wie für die Maske.

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
- [CSS-`mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking)-Modul
- SVG-{{SVGAttr("mask")}} Attribut
- [Anwenden von SVG-Effekten auf HTML-Inhalte](/de/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
