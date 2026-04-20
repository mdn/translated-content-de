---
title: "`mask-composite` CSS property"
short-title: mask-composite
slug: Web/CSS/Reference/Properties/mask-composite
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`mask-composite`**-Eigenschaft von [CSS](/de/docs/Web/CSS) gibt einen Kompositionsvorgang an, der auf die aktuelle Maskenschicht mit den darunterliegenden Maskenschichten angewendet wird.

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

Die Eigenschaft akzeptiert eine durch Kommata getrennte Liste von `<compositing-operator>` Schlüsselwortwerten, von denen jeder einen Porter-Duff-Kompositionsoperator darstellt, der den Kompositionsvorgang auf die aktuelle Maskenschicht mit den darunterliegenden Maskenschichten definiert, einschließlich:

- `add`
  - : Das zugehörige Maskenbild wird über alle darunterliegenden Maskenschichten gelegt (mit den entsprechenden Kompositionsoperatoren angewendet). Dies ist der Standardwert.
- `subtract`
  - : Das zugehörige Maskenbild wird dort platziert, wo es außerhalb aller darunterliegenden Maskenschichten liegt (mit den entsprechenden Kompositionsoperatoren angewendet).
- `intersect`
  - : Die Teile des zugehörigen Maskenbildes, die sich mit allen darunterliegenden, zusammengesetzten Maskenschichten überlappen, ersetzen diese zuvor zusammengesetzten Schichten.
- `exclude`
  - : Die nicht überlappenden Bereiche des zugehörigen Maskenbildes und der darunterliegenden Maskenschichten werden mit ihren entsprechenden Kompositionsoperatoren kombiniert.

## Beschreibung

Wenn auf ein Element mehrere Maskenschichten angewendet werden, kann die `mask-composite` Eigenschaft verwendet werden, um zu definieren, wie die verschiedenen Masken miteinander interagieren oder kombiniert werden, um den endgültigen Maskeffekt zu erzeugen.

Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im `mask-image` Eigenschaftswert bestimmt (auch wenn ein Wert `none` ist). Jeder Wert in der `mask-composite` durch Komma getrennten Liste wird in der Reihenfolge einem `mask-image` Wert zugeordnet. Wenn die Anzahl der Werte in `mask-composite` gleich oder größer ist als die Anzahl der `mask-image` Werte, werden die zusätzlichen Werte ignoriert. Wenn die `mask-composite` Eigenschaft nicht genügend durch Kommas getrennte Werte hat, um die Anzahl der Schichten zu erfüllen, wird die Liste der Werte wiederholt, bis genügend vorhanden sind.

Für die Verarbeitung wird die _Quellschicht_, die aktuelle oder zugehörige Maskenschicht, entweder hinzugefügt (Standard), von den Zielschichten subtrahiert, mit diesen geschnitten oder ausgeschlossen. Die _Zielschichten_ sind die unterhalb der Quelle liegenden Maskenschichten mit ihren entsprechenden Kompositionsoperatoren; dies umfasst alle vorherigen Schichten, die in der Reihenfolge des Auftretens innerhalb der durch Kommas getrennten Liste der Masken zusammengesetzt werden. Alle Maskenschichten unterhalb der aktuellen Maskenschicht müssen zusammengesetzt werden, bevor der Kompositionsvorgang für die aktuelle Maskenschicht angewendet wird. Maskenschichtbilder werden zur Verarbeitung in Alphamasken umgewandelt, bevor sie durch den definierten Kompositionswert kombiniert werden.

Die mehreren Maskenschichten, die auf ein Element oder Pseudo-Element angewendet werden, verhalten sich, als ob sie in eine isolierte Gruppe gerendert werden. Mit anderen Worten, die Maskenschichten werden mit anderen Maskenschichten zusammengesetzt, nicht mit dem Inhalt des Elements oder dem Inhalt hinter dem Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die grundlegende Verwendung der `mask-composite` Eigenschaft.

#### HTML

Wir fügen ein HTML {{htmlelement("div")}} Element ein, das wir dann stylen.

```html
<div></div>
```

#### CSS

Wir geben unserem `<div>` Größe und Farbe und fügen dann zwei {{cssxref("mask-image")}}s hinzu. Ihre Größe wird mit der {{cssxref("mask-size")}} Eigenschaft an die Größe des maskierten Elements angepasst. Schließlich subtrahieren wir das zweite Maskenbild vom ersten Maskenbild, indem wir die `mask-composite` Eigenschaft auf `subtract` setzen.

```css
div {
  width: 100px;
  height: 100px;
  background-color: red;

  mask-image:
    url("https://mdn.github.io/shared-assets/images/examples/mdn.svg"),
    url("https://mdn.github.io/shared-assets/images/examples/mask-star.svg");
  mask-size: 100% 100%;

  mask-composite: subtract;
}
```

#### Ergebnisse

{{EmbedLiveSample("basic usage", "", "150px")}}

### Wertvergleich

Dieses Beispiel demonstriert die vier `<compositing-operator>` Schlüsselwortwerte der `mask-composite` Eigenschaft und vergleicht die Effekte der [`alpha` und `luminance`](/de/docs/Web/CSS/Reference/Properties/mask-type) Maskenmodi.

#### HTML

Wir haben eine {{htmlelement("table")}}, die acht Bilder enthält. Das `<table>` wurde der Kürze halber ausgeblendet.

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

Und ein SVG mit 4 Masken; ein Alpha-Herz und -Kreis und ein Luminanz-Herz und -Kreis. Die Herzmasken werden mit Vollfarben definiert. Die Kreismasken werden mit halbtransparenten weißen und schwarzen {{SVGAttr("stroke")}} und {{SVGAttr("fill")}} Farben erstellt.

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

Zuerst stylen wir die `<mask>` Elemente, wobei wir jeder Maske einen {{cssxref("mask-type")}} Eigenschaftswert von entweder `alpha` oder `luminance` zuweisen.

```css
mask.luminance {
  mask-type: luminance;
}

mask.alpha {
  mask-type: alpha;
}
```

Dann wenden wir die Herz- und Kreismasken als die durch Kommas getrennte {{cssxref("mask-image")}} Eigenschaftswerte an. Diese werden auf jedes {{htmlelement("img")}} Element angewendet, wobei alle Bilder in einer Reihe die gleichen Masken erhalten.

```css
/* apply the mask images */
tr.alphaMaskType img {
  mask-image: url("#heartAlpha"), url("#circleAlpha");
}

tr.luminanceMaskType img {
  mask-image: url("#heartLuminance"), url("#circleLuminance");
}
```

Schließlich setzen wir die Masken mit der `mask-composite` Eigenschaft zusammen, indem wir die vier verschiedenen aufgezählten `mask-composite` Werte nach Tabellenspalten anwenden.

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

- {{cssxref("mask")}} Kurzschreibweise
- {{cssxref("mask-type")}}
- {{cssxref("mask-mode")}}
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklaration mehrerer Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierungsmodul](/de/docs/Web/CSS/Guides/Masking)
