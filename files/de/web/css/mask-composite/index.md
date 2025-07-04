---
title: mask-composite
slug: Web/CSS/mask-composite
l10n:
  sourceCommit: be28a11d9b2f6ab4ad0e5947e72a13ce16d4a6f2
---

{{CSSRef}}

Die **`mask-composite`** [CSS](/de/docs/Web/CSS) Eigenschaft repräsentiert eine Kompositionsoperation, die auf die aktuelle Maskenschicht mit den darunterliegenden Maskenschichten angewendet wird.

## Syntax

```css
/* Keyword values */
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* Global values */
mask-composite: inherit;
mask-composite: initial;
mask-composite: revert;
mask-composite: revert-layer;
mask-composite: unset;
```

### Werte

Die Eigenschaft akzeptiert eine kommagetrennte Liste von `<compositing-operator>` Schlüsselwortwerten, wobei jeder einen Porter-Duff Kompositionsoperator darstellt, der die Kompositionsoperation für die aktuelle Maskenschicht mit den darunterliegenden Maskenschichten definiert, einschließlich:

- `add`
  - : Das zugehörige Maskenbild wird über alle darunterliegenden Maskenschichten gelegt (mit den entsprechenden Kompositionsoperatoren angewendet). Dies ist der Standardwert.
- `subtract`
  - : Das zugehörige Maskenbild wird dort platziert, wo es außerhalb aller darunterliegenden Maskenschichten liegt (mit den entsprechenden Kompositionsoperatoren angewendet).
- `intersect`
  - : Die Teile des zugehörigen Maskenbildes, die mit allen komposierten Maskenschichten darunter überlappen, ersetzen diese zuvor komposierten Schichten.
- `exclude`
  - : Die nicht überlappenden Bereiche des zugehörigen Maskenbildes und der darunterliegenden Maskenschichten, angewendet mit ihren entsprechenden Kompositionsoperatoren, werden kombiniert.

## Beschreibung

Wenn ein Element mehrere Maskenschichten hat, kann die `mask-composite` Eigenschaft verwendet werden, um zu definieren, wie die mehreren Masken miteinander interagieren oder kombiniert werden, um den endgültigen Maskeneffekt zu erzeugen.

Die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte im `mask-image` Eigenschaftswert bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-composite` Wert in der kommagetrennten Werteliste wird in der Reihenfolge einem `mask-image` Wert zugeordnet. Wenn die Anzahl der Werte in `mask-composite` gleich oder größer als die Anzahl der `mask-image` Werte ist, werden die zusätzlichen Werte ignoriert. Wenn die `mask-composite` Eigenschaft nicht genügend kommagetrennte Werte hat, um die Anzahl der Schichten zu erreichen, werden die Werte in der Liste wiederholt, bis es genügend gibt.

Für die Verarbeitung wird die _Quellschicht_, die aktuelle oder zugehörige Maskenschicht, entweder zur Zielschicht hinzugefügt (Standard), davon subtrahiert, mit ihr geschnitten oder von ihr ausgeschlossen. Die _Zielschichten_ sind die darunterliegenden Maskenschichten mit ihren entsprechenden Kompositionsoperatoren angewendet; dies schließt alle vorherigen Schichten ein, die in der Reihenfolge des Auftretens innerhalb der kommagetrennten Maskenliste zusammengeführt werden. Alle Maskenschichten unter der aktuellen Maskenschicht müssen zusammengefügt werden, bevor die Kompositionsoperation für die aktuelle Maskenschicht angewendet wird. Maskenschichtbilder werden zur Verarbeitung in Alphamasken umgewandelt, bevor sie mit dem definierten Kompositionswert kombiniert werden.

Die mehreren Maskenschichten, die auf ein Element oder Pseudo-Element angewendet werden, verhalten sich, als ob sie in eine isolierte Gruppe gerendert werden. Mit anderen Worten, die Maskenschichten werden mit anderen Maskenschichten und nicht mit dem Inhalt des Elements oder dem Inhalt hinter dem Element kombiniert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt die grundlegende Verwendung der `mask-composite` Eigenschaft.

#### HTML

Wir fügen ein HTML {{htmlelement("div")}} Element hinzu, das wir dann stylen werden.

```html
<div></div>
```

#### CSS

Wir geben unserem `<div>` Größe und Farbe, fügen dann zwei {{cssxref("mask-image")}}s hinzu und passen deren Größe mit der {{cssxref("mask-size")}} Eigenschaft an die des Elements an, das sie maskieren. Schließlich subtrahieren wir das zweite Maskenbild vom ersten Maskenbild mit der auf `subtract` gesetzten `mask-composite` Eigenschaft.

```css
div {
  width: 100px;
  height: 100px;
  background-color: red;

  mask-image:
    url(https://mdn.github.io/shared-assets/images/examples/mdn.svg),
    url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg);
  mask-size: 100% 100%;

  mask-composite: subtract;
}
```

#### Ergebnisse

{{EmbedLiveSample("basic usage", "", "150px")}}

### Wertvergleich

Dieses Beispiel zeigt die vier `<compositing-operator>` Schlüsselwortwerte der `mask-composite` Eigenschaft und vergleicht die Effekte von [`alpha` und `luminance`](/en-US/Web/SVG/Reference/Attribute/mask-type#mask) Maskentypen.

#### HTML

Wir haben eine {{htmlelement("table")}}, die acht Bilder enthält. Die `<table>` wurde der Kürze halber ausgeblendet.

```html hidden
<table>
  <tbody>
    <tr>
      <th colspan="4">mask-type: alpha</th>
    </tr>
    <tr>
      <th>mask-composite: add</th>
      <th>mask-composite: subtract</th>
      <th>mask-composite: intersect</th>
      <th>mask-composite: exclude</th>
    </tr>
    <tr class="alphaMaskType">
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>

    <tr>
      <th colspan="4">
        <code>mask-type: luminance</code>
      </th>
    </tr>
    <tr>
      <th>mask-composite: add</th>
      <th>mask-composite: subtract</th>
      <th>mask-composite: intersect</th>
      <th>mask-composite: exclude</th>
    </tr>
    <tr class="luminanceMaskType">
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
      <td>
        <img
          src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
          alt="Pride flag" />
      </td>
    </tr>
  </tbody>
</table>
```

```html
<img
  src="https://mdn.github.io/shared-assets/images/examples/progress-pride-flag.jpg"
  alt="Pride flag" />
```

Und ein SVG mit 4 Masken; ein Alpha-Herz und ein Kreis sowie ein Luminanz-Herz und -Kreis. Die Herzmasken werden unter Verwendung von Vollfarben definiert. Die Kreis-Masken werden mit halbtransparentem Weiß und Schwarz {{SVGAttr("stroke")}} und {{SVGAttr("fill")}} Farben erstellt.

```html
<svg height="0" width="0">
  <mask id="heartAlpha" class="alpha">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="circleAlpha" class="alpha">
    <circle
      cx="130"
      cy="130"
      r="50"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
  <mask id="heartLuminance" class="luminance">
    <path
      d="M20,70 A40,40,0,0,1,100,70 A40,40,0,0,1,180,70 Q180,130,100,190 Q20,130,20,70 Z"
      fill="green"
      stroke="white"
      stroke-width="20" />
  </mask>
  <mask id="circleLuminance" class="luminance">
    <circle
      cx="130"
      cy="130"
      r="50"
      fill="rgb(0 0 0 / 0.5)"
      stroke="rgb(255 255 255 / 0.5)"
      stroke-width="20" />
  </mask>
</svg>
```

#### CSS

Zuerst stylen wir die `<mask>` Elemente, indem wir jeder Maske einen {{cssxref("mask-type")}} Eigenschaftswert entweder von `alpha` oder `luminance` zuweisen.

```css
mask.luminance {
  mask-type: luminance;
}

mask.alpha {
  mask-type: alpha;
}
```

Dann wenden wir die Herz- und Kreis-Masken als kommagetrennte {{cssxref("mask-image")}} Eigenschaftswerte an. Diese werden auf jedes {{htmlelement("img")}} Element angewandt, wobei alle Bilder in einer Reihe die gleichen Masken bekommen.

```css
/* apply the mask images */
tr.alphaMaskType img {
  mask-image: url(#heartAlpha), url(#circleAlpha);
}

tr.luminanceMaskType img {
  mask-image: url(#heartLuminance), url(#circleLuminance);
}
```

Schließlich kombinieren wir die Masken mit der `mask-composite` Eigenschaft, indem wir die vier verschiedenen aufgezählten `mask-composite` Werte nach Tabellenspalte anwenden.

```css
/* property we're testing */
td:nth-of-type(1) img {
  mask-composite: add;
}
td:nth-of-type(2) img {
  mask-composite: subtract;
}
td:nth-of-type(3) img {
  mask-composite: intersect;
}
td:nth-of-type(4) img {
  mask-composite: exclude;
}
```

Die Tabellenstile wurden der Kürze halber ausgeblendet.

```css hidden
mask {
  height: 50%;
}

table,
td,
th {
  border: 1px solid;
}
th {
  font-family: monospace;
}
th {
  color: green;
}
body > img {
  display: none;
}
```

#### Ergebnisse

{{EmbedLiveSample("value comparison", "", "600")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("mask")}} Kurzform
- {{cssxref("mask-type")}}
- {{cssxref("mask-mode")}}
- [Einführung in CSS Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
