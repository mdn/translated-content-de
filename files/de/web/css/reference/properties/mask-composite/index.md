---
title: mask-composite
slug: Web/CSS/Reference/Properties/mask-composite
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`mask-composite`** [CSS](/de/docs/Web/CSS) Eigenschaft repräsentiert eine Kompositionsoperation, die auf die aktuelle Maskenschicht mit den darunter liegenden Maskenschichten angewendet wird.

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

Die Eigenschaft akzeptiert eine kommaseparierte Liste von `<compositing-operator>` Schlüsselwortwerten, die jeweils einen Porter-Duff-Kompositionsoperator darstellen, welcher die Kompositionsoperation definiert, die auf die aktuelle Maskenschicht mit den darunter liegenden Maskenschichten angewendet wird, einschließlich:

- `add`
  - : Das zugeordnete Maskenbild wird über alle darunter liegenden Maskenschichten platziert (mit den entsprechenden Kompositionsoperatoren angewendet). Dies ist der Standardwert.
- `subtract`
  - : Das zugeordnete Maskenbild wird dort platziert, wo es außerhalb aller darunter liegenden Maskenschichten fällt (mit den entsprechenden Kompositionsoperatoren angewendet).
- `intersect`
  - : Die Teile des zugeordneten Maskenbildes, die sich mit allen zusammengesetzten Maskenschichten darunter überlappen, ersetzen diese zuvor zusammengesetzten Schichten.
- `exclude`
  - : Die nicht überlappenden Bereiche des zugeordneten Maskenbildes und der darunter liegenden Maskenschichten, mit ihren entsprechenden Kompositionsoperatoren angewendet, werden kombiniert.

## Beschreibung

Wenn ein Element mehrere Maskenschichten hat, kann die `mask-composite` Eigenschaft verwendet werden, um zu definieren, wie die mehreren Masken miteinander interagieren oder kombiniert werden, um den finalen Maskeneffekt zu erzeugen.

Die Anzahl der Schichten wird durch die Anzahl der in der `mask-image` Eigenschaft spezifizierten, durch Kommas getrennten Werte bestimmt (selbst wenn ein Wert `none` ist). Jeder `mask-composite` Wert in der durch Kommas getrennten Wertliste wird in der Reihenfolge mit einem `mask-image` Wert abgeglichen. Wenn die Anzahl der Werte in `mask-composite` gleich oder größer als die Anzahl der `mask-image` Werte ist, werden die zusätzlichen Werte ignoriert. Hat die `mask-composite` Eigenschaft nicht genug durch Kommas getrennte Werte, um die Anzahl der Schichten abzudecken, wird die Liste der Werte so oft wiederholt, bis genug vorhanden sind.

Für die Verarbeitung wird die _Quellschicht_, welches das aktuelle oder zugeordnete Maskenschichtbild ist, entweder hinzugefügt (der Standard), subtrahiert, geschnitten oder von den Zielschichten ausgeschlossen. Die _Zielschichten_ sind die darunter liegenden Maskenschichten mit ihren entsprechenden Kompositionsoperatoren angewendet; dies schließt alle vorherigen Schichten ein, die in der Reihenfolge ihres Erscheinens innerhalb der durch Kommas getrennten Liste der Masken zusammengesetzt sind. Alle Maskenschichten unter der aktuellen Maskenschicht müssen komponiert werden, bevor die Kompositionsoperation für die aktuelle Maskenschicht angewendet wird. Masksschichtbilder werden vor der Verarbeitung in Alphamasken transformiert, bevor sie durch den definierten Kompositionswert kombiniert werden.

Die mehreren Maskenschichten, die auf ein beliebiges Element oder Pseudo-Element angewendet werden, agieren, als ob sie in einer isolierten Gruppe gerendert werden. Mit anderen Worten, die Maskenschichten werden mit anderen Maskenschichten zusammengefügt, nicht mit dem Inhalt des Elements oder dem Inhalt hinter dem Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel demonstriert die grundlegende Nutzung der `mask-composite` Eigenschaft.

#### HTML

Wir fügen ein HTML {{htmlelement("div")}} Element ein, das wir dann stylen werden.

```html
<div></div>
```

#### CSS

Wir legen Größe und Farbe unseres `<div>` fest, fügen dann zwei {{cssxref("mask-image")}} hinzu und lassen ihre Größe der des Elements entsprechen, das sie mit der Eigenschaft {{cssxref("mask-size")}} maskieren. Schließlich subtrahieren wir das zweite Maskenbild vom ersten Maskenbild mit der `mask-composite` Eigenschaft, die auf `subtract` eingestellt ist.

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

### Wertvergleiche

Dieses Beispiel zeigt die vier `<compositing-operator>` Schlüsselwortwerte der `mask-composite` Eigenschaft, zusammen mit dem Vergleich der Effekte von [`alpha` und `luminance`](/de/docs/Web/CSS/Reference/Properties/mask-type) Maskenmodi.

#### HTML

Wir haben eine {{htmlelement("table")}}, die acht Bilder enthält. Die `<table>` wurde der Kürze halber versteckt.

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

Und ein SVG mit 4 Masken; ein Alpha-Herz und -Kreis und ein Luminanz-Herz und -Kreis. Die Herzmasken sind mit Vollfarben definiert. Die Kreis-Masken werden mit halbtransparenten weißen und schwarzen {{SVGAttr("stroke")}} und {{SVGAttr("fill")}} Farben erstellt.

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

Zuerst stylen wir die `<mask>` Elemente und versehen jede Maske mit einem {{cssxref("mask-type")}} Eigenschaftswert entweder von `alpha` oder `luminance`.

```css
mask.luminance {
  mask-type: luminance;
}

mask.alpha {
  mask-type: alpha;
}
```

Dann wenden wir die Herz- und Kreis-Masken als die kommaseparierten {{cssxref("mask-image")}} Eigenschaftswerte an. Diese werden auf jedes {{htmlelement("img")}} Element angewendet, wobei alle Bilder in einer Reihe die gleichen Masken erhalten.

```css
/* apply the mask images */
tr.alphaMaskType img {
  mask-image: url("#heartAlpha"), url("#circleAlpha");
}

tr.luminanceMaskType img {
  mask-image: url("#heartLuminance"), url("#circleLuminance");
}
```

Zum Schluss setzen wir die Masken mit der `mask-composite` Eigenschaft zusammen und wenden die vier verschiedenen aufgezählten `mask-composite` Werte nach Spalten der Tabelle an.

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

Die Tabellenstile wurden der Kürze halber versteckt.

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
- [Einführung zum CSS Maskieren](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS Masking](/de/docs/Web/CSS/CSS_masking) Modul
