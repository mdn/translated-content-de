---
title: mask-composite
slug: Web/CSS/Reference/Properties/mask-composite
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`mask-composite`** [CSS](/de/docs/Web/CSS)-Eigenschaft stellt eine Kompositionsoperation dar, die auf die aktuelle Maskenschicht mit den darunterliegenden Maskenschichten angewendet wird.

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

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von `<compositing-operator>`-Schlüsselwortwerten, die jeweils einen Porter-Duff-Kompositionsoperator darstellen, der die Kompositionsoperation definiert, die auf die aktuelle Maskenschicht mit den darunterliegenden Maskenschichten angewendet wird, einschließlich:

- `add`
  - : Das zugeordnete Maskenbild wird über allen darunterliegenden Maskenschichten platziert (mit den entsprechenden Kompositionsoperatoren angewendet). Dies ist der Standardwert.
- `subtract`
  - : Das zugeordnete Maskenbild wird dort platziert, wo es außerhalb aller darunterliegenden Maskenschichten liegt (mit den entsprechenden Kompositionsoperatoren angewendet).
- `intersect`
  - : Die Teile des zugeordneten Maskenbildes, die alle darunter zusammengesetzten Maskenschichten überlappen, ersetzen diese zuvor zusammengesetzten Schichten.
- `exclude`
  - : Die nicht überlappenden Bereiche des zugeordneten Maskenbildes und der darunterliegenden Maskenschichten, mit ihren entsprechenden Kompositionsoperatoren angewendet, werden kombiniert.

## Beschreibung

Wenn auf ein Element mehrere Maskenschichten angewendet werden, kann die `mask-composite`-Eigenschaft verwendet werden, um zu definieren, wie die mehreren Masken miteinander interagieren oder in der finalen Maskeneffekt kombiniert werden.

Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im `mask-image`-Eigenschaftswert bestimmt (selbst wenn ein Wert `none` ist). Jeder `mask-composite`-Wert in der durch Kommas getrennten Werteliste wird nacheinander einem `mask-image`-Wert zugeordnet. Wenn die Anzahl der Werte in `mask-composite` gleich oder größer ist als die Anzahl der `mask-image`-Werte, werden die zusätzlichen Werte ignoriert. Wenn die `mask-composite`-Eigenschaft nicht genügend durch Kommas getrennte Werte hat, um die Anzahl der Schichten zu entsprechen, wird die Liste der Werte wiederholt, bis genügend vorhanden sind.

Für die Verarbeitung wird die _Quellschicht_, die aktuelle oder zugeordnete Maskenschichtbild, entweder zu den _Zielschichten_ hinzugefügt (Standard), davon subtrahiert, mit ihnen geschnitten oder von ihnen ausgeschlossen. Die _Zielschichten_ sind die darunterliegenden Maskenschichten mit ihren entsprechenden Kompositionsoperatoren angewendet; dazu gehören alle vorherigen Schichten, in der Reihenfolge ihres Erscheinens innerhalb der durch Kommas getrennten Liste von Masken zusammengesetzt. Alle Maskenschichten unter der aktuellen Maskenschicht müssen komponiert werden, bevor die Kompositionsoperation für die aktuelle Maskenschicht angewendet wird. Maskenschichtbilder werden für die Verarbeitung in Alphamasken transformiert, bevor sie durch den definierten Kompositionswert kombiniert werden.

Die mehreren Maskenschichten, die auf ein beliebiges Element oder Pseudo-Element angewendet werden, wirken, als ob sie in eine isolierte Gruppe gerendert werden. Mit anderen Worten, die Maskenschichten werden mit anderen Maskenschichten komponiert, nicht mit dem Inhalt des Elements oder dem dahinterliegenden Inhalt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert die grundlegende Verwendung der `mask-composite`-Eigenschaft.

#### HTML

Wir fügen ein HTML-{{htmlelement("div")}}-Element ein, das wir dann stylen werden.

```html
<div></div>
```

#### CSS

Wir stellen Größe und Farbe für unser `<div>` bereit, fügen dann zwei {{cssxref("mask-image")}} hinzu und passen deren Größe der des Elements an, das sie maskieren, mit der {{cssxref("mask-size")}}-Eigenschaft. Schließlich subtrahieren wir das zweite Maskenbild vom ersten Maskenbild mit der `mask-composite`-Eigenschaft, die auf `subtract` gesetzt ist.

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

Dieses Beispiel demonstriert die vier `<compositing-operator>`-Schlüsselwortwerte der `mask-composite`-Eigenschaft sowie den Vergleich der Effekte von [`alpha` und `luminance`](/de/docs/Web/CSS/Reference/Properties/mask-type)-Maskierungsmodi.

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

Und ein SVG mit 4 Masken; ein Alpha-Herz und Kreis sowie ein Luminanz-Herz und Kreis. Die Herzmasken sind mit Vollfarben definiert. Die Kreismasken werden mit halbtransparenten weißen und schwarzen {{SVGAttr("stroke")}}- und {{SVGAttr("fill")}}-Farben erstellt.

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

Zuerst stylen wir die `<mask>`-Elemente, indem wir jedem Masken ein {{cssxref("mask-type")}}-Eigenschaftswert von entweder `alpha` oder `luminance` zuweisen.

```css
mask.luminance {
  mask-type: luminance;
}

mask.alpha {
  mask-type: alpha;
}
```

Dann wenden wir die Herz- und Kreismasken als durch Kommas getrennte {{cssxref("mask-image")}}-Eigenschaftswerte an. Diese werden auf jedes {{htmlelement("img")}}-Element angewendet, wobei alle Bilder in einer Reihe die gleichen Masken erhalten.

```css
/* apply the mask images */
tr.alphaMaskType img {
  mask-image: url("#heartAlpha"), url("#circleAlpha");
}

tr.luminanceMaskType img {
  mask-image: url("#heartLuminance"), url("#circleLuminance");
}
```

Schließlich komponieren wir die Masken mit der `mask-composite`-Eigenschaft, indem wir die vier verschiedenen aufgelisteten `mask-composite`-Werte nach Tabellen-Spalte anwenden.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking/Introduction)
- [CSS `mask`-Eigenschaften](/de/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Deklarieren von mehreren Masken](/de/docs/Web/CSS/Guides/Masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/Guides/Masking) Modul
