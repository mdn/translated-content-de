---
title: mask-composite
slug: Web/CSS/mask-composite
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`mask-composite`** [CSS](/de/docs/Web/CSS) Eigenschaft stellt einen Kompositionsvorgang dar, der auf die aktuelle Maskenschicht mit den darunter liegenden Maskenschichten angewendet wird.

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

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von `<compositing-operator>` Schlüsselwortwerten, die jeweils einen Porter-Duff-Kompositionsoperator darstellen, der den Kompositionsvorgang definiert, der auf die aktuelle Maskenschicht mit den darunter liegenden Maskenschichten angewendet wird, einschließlich:

- `add`
  - : Das zugehörige Maskenbild wird über alle darunter liegenden Maskenschichten gelegt (mit den entsprechenden Kompositionsoperatoren angewendet). Dies ist der Standardwert.
- `subtract`
  - : Das zugehörige Maskenbild wird dort platziert, wo es außerhalb aller darunter liegenden Maskenschichten fällt (mit den entsprechenden Kompositionsoperatoren angewendet).
- `intersect`
  - : Die Teile des zugehörigen Maskenbilds, die alle darunter zusammengefügten Maskenschichten überlappen, ersetzen die zuvor zusammengefügten Schichten.
- `exclude`
  - : Die nicht überlappenden Bereiche des zugehörigen Maskenbilds und der darunter liegenden Maskenschichten werden mit ihren entsprechenden Kompositionsoperatoren kombiniert.

## Beschreibung

Wenn ein Element mehrere Maskenlagen hat, kann die `mask-composite` Eigenschaft verwendet werden, um zu definieren, wie die mehreren Masken miteinander interagieren oder kombiniert werden, um den endgültigen Maskeneffekt zu erstellen.

Die Anzahl der Lagen wird durch die Anzahl der durch Kommas getrennten Werte im Wert der `mask-image` Eigenschaft bestimmt (selbst wenn ein Wert `none` ist). Jeder `mask-composite` Wert in der durch Kommas getrennten Liste von Werten wird der Reihe nach mit einem `mask-image` Wert abgeglichen. Wenn die Anzahl der Werte in `mask-composite` gleich oder größer ist als die Anzahl der `mask-image` Werte, werden die zusätzlichen Werte ignoriert. Wenn die `mask-composite` Eigenschaft nicht genügend durch Kommas getrennte Werte hat, um die Anzahl der Schichten abzudecken, wird die Liste der Werte wiederholt, bis genügend vorhanden sind.

Für die Verarbeitung wird die _Quellenschicht_, das aktuelle oder zugehörige Maskenbild, entweder hinzugefügt (Standard), subtrahiert, geschnitten oder von den Zieldschichten ausgeschlossen. Die _Zieldschichten_ sind die darunter liegenden Maskenschichten, auf die ihre entsprechenden Kompositionsoperatoren angewendet werden; dies umfasst alle vorherigen Schichten, die in der Reihenfolge ihres Erscheinens innerhalb der durch Kommas getrennten Liste von Masken zusammengefügt werden. Alle Maskenschichten unter der aktuellen Maskenschicht müssen zusammengefügt werden, bevor der Kompositionsvorgang für die aktuelle Maskenschicht angewendet wird. Maskenebenenbilder werden vor dem Kombinieren durch den definierten Kompositionseigenschaftswert in Alpha-Masken umgewandelt.

Die mehreren Maskenlagen, die auf ein beliebiges Element oder Pseudoelement angewendet werden, verhalten sich so, als ob sie in einer isolierten Gruppe gerendert würden. Anders ausgedrückt, die Maskenschichten werden mit anderen Maskenschichten zusammengefügt, nicht mit dem Inhalt des Elements oder dem dahinterliegenden Inhalt.

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

Wir legen die Größe und Farbe unseres `<div>` fest, fügen dann zwei {{cssxref("mask-image")}}s hinzu und passen ihre Größe mit der {{cssxref("mask-size")}} Eigenschaft an die des Elements an, das sie maskieren. Schließlich subtrahieren wir das zweite Maskenbild vom ersten Maskenbild mit der `mask-composite` Eigenschaft, die auf `subtract` gesetzt ist.

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

Dieses Beispiel demonstriert die vier `<compositing-operator>` Schlüsselwortwerte der `mask-composite` Eigenschaft und vergleicht die Effekte der [`alpha` und `luminance`](/de/docs/Web/CSS/mask-type) Maskenmodi.

#### HTML

Wir haben eine {{htmlelement("table")}}, die acht Bilder enthält. Die `<table>` wurde zur Übersichtlichkeit verborgen.

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

Und ein SVG mit 4 Masken; einem Alpha-Herz und Kreis und einem Luminanz-Herz und Kreis. Die Herzmasken werden mit Vollfarben definiert. Die Kreismasken werden mit halbtransparenten weißen und schwarzen {{SVGAttr("stroke")}} und {{SVGAttr("fill")}} Farben erstellt.

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

Zuerst stylen wir die `<mask>` Elemente und versehen jede Maske mit einem {{cssxref("mask-type")}} Eigenschaftswert von entweder `alpha` oder `luminance`.

```css
mask.luminance {
  mask-type: luminance;
}

mask.alpha {
  mask-type: alpha;
}
```

Dann wenden wir die Herz- und Kreismasken als die durch Kommas getrennten {{cssxref("mask-image")}} Eigenschaftswerte an. Diese werden auf jedes {{htmlelement("img")}} Element angewendet, wobei alle Bilder in einer Reihe die gleichen Masken erhalten.

```css
/* apply the mask images */
tr.alphaMaskType img {
  mask-image: url(#heartAlpha), url(#circleAlpha);
}

tr.luminanceMaskType img {
  mask-image: url(#heartLuminance), url(#circleLuminance);
}
```

Schließlich setzen wir die Masken mit der `mask-composite` Eigenschaft zusammen und wenden die vier verschiedenen aufgezählten `mask-composite` Werte nach Tabellenspalten an.

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

Die Tabellenstile wurden zur Übersichtlichkeit verborgen.

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

- {{cssxref("mask")}} Kurzschrift
- {{cssxref("mask-type")}}
- {{cssxref("mask-mode")}}
- [Einführung in CSS-Masking](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Masking](/de/docs/Web/CSS/CSS_masking) Modul
