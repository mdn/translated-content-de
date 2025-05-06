---
title: mask-composite
slug: Web/CSS/mask-composite
l10n:
  sourceCommit: 188dfae7d6173b0fad6fd4f8656d96f02cd2eb5d
---

{{CSSRef}}

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

Die Eigenschaft akzeptiert eine durch Kommas getrennte Liste von `<compositing-operator>` Schlüsselwortwerten, die jeweils einen Porter-Duff-Kompositionsoperator darstellen, welcher den Kompositionsvorgang auf die aktuelle Maskenschicht mit den darunter liegenden Maskenschichten definiert, einschließlich:

- `add`
  - : Das zugehörige Maskenbild wird über allen darunter liegenden Maskenschichten platziert (mit den entsprechenden Kompositionsoperatoren angewendet). Dies ist der Standardwert.
- `subtract`
  - : Das zugehörige Maskenbild wird dort platziert, wo es außerhalb aller darunter liegenden Maskenschichten liegt (mit den entsprechenden Kompositionsoperatoren angewendet).
- `intersect`
  - : Die Teile des zugehörigen Maskenbildes, die alle zusammengesetzten darunter liegenden Maskenschichten überlappen, ersetzen diese zuvor zusammengesetzten Schichten.
- `exclude`
  - : Die nicht überlappenden Bereiche des zugehörigen Maskenbildes und der darunter liegenden Maskenschichten, mit ihren entsprechenden Kompositionsoperatoren angewendet, werden kombiniert.

## Beschreibung

Wenn ein Element mehrere Maskenschichten hat, die angewendet werden, kann die Eigenschaft `mask-composite` verwendet werden, um zu definieren, wie die mehreren Masken miteinander interagieren oder kombiniert werden, um den endgültigen Maskeneffekt zu erzeugen.

Die Anzahl der Schichten wird durch die Anzahl der durch Kommas getrennten Werte im `mask-image` Eigenschaftswert bestimmt (selbst wenn ein Wert `none` ist). Jeder `mask-composite` Wert in der durch Kommas getrennten Liste der Werte wird in Reihenfolge mit einem `mask-image` Wert abgeglichen. Wenn die Anzahl der Werte in `mask-composite` gleich oder größer als die Anzahl der `mask-image` Werte ist, werden die zusätzlichen Werte ignoriert. Wenn die Eigenschaft `mask-composite` nicht genug durch Kommas getrennte Werte hat, um der Anzahl der Schichten zu entsprechen, wird die Liste der Werte wiederholt, bis genug da sind.

Zur Verarbeitung wird die _Quellschicht_, die aktuelle oder zugehörige Maskenbildschicht, entweder hinzugefügt (der Standard), subtrahiert, geschnitten oder von den Zielschichten ausgeschlossen. Die _Zielschichten_ sind die Maskenschichten unterhalb der Quelle mit ihren entsprechenden Kompositionsoperatoren angewendet; dies schließt alle vorherigen Schichten ein, die in der Reihenfolge ihres Erscheinens innerhalb der durch Kommas getrennten Liste der Masken zusammengesetzt sind. Alle Maskenschichten unterhalb der aktuellen Maskenschicht müssen zusammengesetzt werden, bevor der Kompositionsvorgang für die aktuelle Maskenschicht angewendet wird. Maskenschichtbilder werden für die Verarbeitung in Alphamasken transformiert, bevor sie durch den definierten Kompositionswert kombiniert werden.

Die mehreren Maskenschichten, die auf jedes Element oder Pseudo-Element angewendet werden, wirken so, als ob sie in eine isolierte Gruppe gerendert werden. Mit anderen Worten, die Maskenschichten werden mit anderen Maskenschichten zusammengesetzt, nicht mit dem Inhalt des Elements oder dem Inhalt hinter dem Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel demonstriert die grundlegende Nutzung der `mask-composite` Eigenschaft.

#### HTML

Wir fügen ein HTML {{htmlelement("div")}} Element ein, das wir dann gestalten werden.

```html
<div></div>
```

#### CSS

Wir legen die Größe und die Farbe unseres `<div>` fest, fügen dann zwei {{cssxref("mask-image")}}s hinzu und passen deren Größe mit der {{cssxref("mask-size")}} Eigenschaft an die des Elements an, das sie maskieren. Schließlich subtrahieren wir das zweite Maskenbild vom ersten Maskenbild, indem wir die `mask-composite` Eigenschaft auf `subtract` setzen.

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

Dieses Beispiel demonstriert die vier `<compositing-operator>` Schlüsselwortwerte der `mask-composite` Eigenschaft, zusammen mit dem Vergleich der Effekte der [`alpha` und `luminance`](/en-US/Web/SVG/Reference/Attribute/mask-type#mask) Maskenmodi.

#### HTML

Wir haben eine {{htmlelement("table")}}, die acht Bilder enthält. Die `<table>` wurde aus Gründen der Kürze ausgeblendet.

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

Und ein SVG mit 4 Masken; ein Alpha-Herz und ein Kreis sowie ein Luminanz-Herz und ein Kreis. Die Herzmasken werden mit Vollfarben definiert. Die Kreismasken werden mit halbtransparenten weißen und schwarzen {{SVGAttr("stroke")}} und {{SVGAttr("fill")}} Farben erstellt.

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

Zuerst gestalten wir die `<mask>` Elemente und versehen jede Maske mit einem {{cssxref("mask-type")}} Eigenschaftswert von entweder `alpha` oder `luminance`.

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

- {{cssxref("mask")}} Kurzform
- {{cssxref("mask-type")}}
- {{cssxref("mask-mode")}}
- [CSS Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
