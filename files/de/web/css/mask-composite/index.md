---
title: mask-composite
slug: Web/CSS/mask-composite
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Die **`mask-composite`** [CSS](/de/docs/Web/CSS)-Eigenschaft repräsentiert eine Kompositionsoperation, die auf die aktuelle Maskenschicht mit den darunter liegenden Maskenschichten angewendet wird.

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

Die Eigenschaft akzeptiert eine kommagetrennte Liste von `<compositing-operator>` Schlüsselwortwerten, wobei jeder einen Porter-Duff-Kompositionsoperator darstellt, der die Kompositionsoperation definiert, die auf die aktuelle Maskenschicht mit den darunter liegenden Maskenschichten angewendet wird, einschließlich:

- `add`
  - : Das zugeordnete Maskenbild wird über alle darunter liegenden Maskenschichten gelegt (mit den entsprechenden Kompositionsoperatoren angewendet). Dies ist der Standardwert.
- `subtract`
  - : Das zugeordnete Maskenbild wird dort platziert, wo es außerhalb aller darunter liegenden Maskenschichten liegt (mit den entsprechenden Kompositionsoperatoren angewendet).
- `intersect`
  - : Die Teile des zugeordneten Maskenbilds, die alle komponierten Maskenschichten darunter überlappen, ersetzen diese zuvor komponierten Schichten.
- `exclude`
  - : Die nicht überlappenden Bereiche des zugeordneten Maskenbilds und der darunter liegenden Maskenschichten, mit den entsprechenden Kompositionsoperatoren angewendet, werden kombiniert.

## Beschreibung

Wenn ein Element mehrere Maskenschichten verwendet, kann die `mask-composite`-Eigenschaft verwendet werden, um zu definieren, wie die mehreren Masken miteinander interagieren oder kombiniert werden, um den endgültigen Maskeneffekt zu erzeugen.

Die Anzahl der Schichten wird durch die Anzahl der kommagetrennten Werte im `mask-image`-Eigenschaftswert bestimmt (auch wenn ein Wert `none` ist). Jeder `mask-composite`-Wert in der kommagetrennten Liste der Werte wird der Reihe nach einem `mask-image`-Wert zugeordnet. Wenn die Anzahl der Werte in `mask-composite` gleich oder größer ist als die Anzahl der `mask-image`-Werte, werden die zusätzlichen Werte ignoriert. Wenn die `mask-composite`-Eigenschaft nicht genügend kommagetrennte Werte hat, um die Anzahl der Schichten zu erreichen, wird die Liste der Werte wiederholt, bis genügend vorhanden sind.

Für die Verarbeitung wird die _Quellschicht_, die aktuelle oder zugeordnete Maskenschichtbild, entweder zu den Zielschichten hinzugefügt (Standard), davon subtrahiert, damit geschnitten oder davon ausgeschlossen. Die _Zielschichten_ sind die darunter liegenden Maskenschichten mit ihren entsprechenden Kompositionsoperatoren angewendet; dies schließt alle vorherigen Schichten ein, die in der Reihenfolge des Auftretens in der kommagetrennten Liste der Masken zusammengesetzt sind. Alle Maskenschichten unter der aktuellen Maskenschicht müssen zusammengesetzt sein, bevor die Kompositionsoperation für die aktuelle Maskenschicht angewendet wird. Maskenschichtbilder werden zur Verarbeitung in Alphamasken transformiert, bevor sie durch den definierten Kompositionswert kombiniert werden.

Die mehreren Maskenschichten, die auf ein Element oder Pseudo-Element angewendet werden, wirken so, als ob sie in eine isolierte Gruppe gerendert werden. Anders ausgedrückt, die Maskenschichten werden mit anderen Maskenschichten zusammengesetzt, nicht mit dem Inhalt des Elements oder dem Inhalt hinter dem Element.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel demonstriert die grundlegende Nutzung der `mask-composite`-Eigenschaft.

#### HTML

Wir fügen ein HTML {{htmlelement("div")}}-Element ein, das wir dann gestalten.

```html
<div></div>
```

#### CSS

Wir geben unserem `<div>` die Größe und Farbe und fügen dann zwei {{cssxref("mask-image")}} hinzu und passen ihre Größe mit der {{cssxref("mask-size")}}-Eigenschaft derjenigen des zu maskierenden Elements an. Schließlich subtrahieren wir das zweite Maskenbild von dem ersten Maskenbild, indem wir die `mask-composite`-Eigenschaft auf `subtract` setzen.

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

Dieses Beispiel demonstriert die vier `<compositing-operator>` Schlüsselwortwerte der `mask-composite`-Eigenschaft, zusammen mit dem Vergleich der Effekte der [`alpha` und `luminance`](/de/docs/Web/CSS/mask-type) Maskenmodi.

#### HTML

Wir haben eine {{htmlelement("table")}}, die acht Bilder enthält. Das `<table>` wurde zur Übersichtlichkeit versteckt.

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

Und eine SVG mit 4 Masken; einem Alpha-Herz und Kreis und einem Luminanz-Herz und Kreis. Die Herzmasken werden mit Vollfarben definiert. Die Kreismasken werden mit halbtransparenten weißen und schwarzen {{SVGAttr("stroke")}} und {{SVGAttr("fill")}} Farben erstellt.

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

Zuerst gestalten wir die `<mask>`-Elemente und geben jeder Maske einen {{cssxref("mask-type")}}-Eigenschaftswert von entweder `alpha` oder `luminance`.

```css
mask.luminance {
  mask-type: luminance;
}

mask.alpha {
  mask-type: alpha;
}
```

Dann wenden wir die Herz- und Kreismasken als die kommagetrennten {{cssxref("mask-image")}}-Eigenschaftswerte an. Diese werden auf jedes {{htmlelement("img")}}-Element angewendet, wobei alle Bilder in einer Reihe die gleichen Masken erhalten.

```css
/* apply the mask images */
tr.alphaMaskType img {
  mask-image: url("#heartAlpha"), url("#circleAlpha");
}

tr.luminanceMaskType img {
  mask-image: url("#heartLuminance"), url("#circleLuminance");
}
```

Schließlich komponieren wir die Masken mit der `mask-composite`-Eigenschaft, indem wir die vier verschiedenen aufgezählten `mask-composite`-Werte nach Tabellenspalte anwenden.

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

Die Tabellenstile wurden zur Übersichtlichkeit ausgeblendet.

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
- [Einführung in CSS-Maskierung](/de/docs/Web/CSS/CSS_masking/Masking)
- [CSS `mask` Eigenschaften](/de/docs/Web/CSS/CSS_masking/Mask_properties)
- [Deklarieren mehrerer Masken](/de/docs/Web/CSS/CSS_masking/Multiple_masks)
- [CSS-Maskierung](/de/docs/Web/CSS/CSS_masking) Modul
