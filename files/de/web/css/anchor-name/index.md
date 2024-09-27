---
title: anchor-name
slug: Web/CSS/anchor-name
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`anchor-name`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein Element als ein **Ankerelement** zu definieren, indem ihm ein oder mehrere identifizierende **Ankernamen** zugewiesen werden. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}}-Eigenschaft eines positionierten Elements gesetzt werden, um es mit dem Anker zu verknüpfen.

## Syntax

```css
/* Single values */
anchor-name: none;
anchor-name: --name;

/* Multiple values */
anchor-name: --name, --another-name;

/* Global values */
anchor-name: inherit;
anchor-name: initial;
anchor-name: revert;
anchor-name: revert-layer;
anchor-name: unset;
```

### Werte

- `none`

  - : Der Standardwert. Wenn `anchor-name: none` auf ein Element gesetzt wird, bedeutet dies, dass es nicht als Ankerelement definiert ist. Wenn das Element zuvor als Anker definiert und mit einem positionierten Element verbunden war, wird durch das Setzen von `anchor-name: none` die Verbindung der beiden aufgehoben.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte selbstdefinierte Bezeichner, die den oder die Ankernamen definieren, die dann in einer {{cssxref("position-anchor")}}-Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verbindung, eine Position und einen Ort. Die `anchor-name`- und {{cssxref("position-anchor")}}-Eigenschaften schaffen die Verbindung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>`-Ankernamen, die über die `anchor-name`-Eigenschaft darauf gesetzt werden. Wenn einer dieser Namen als Wert der `position-anchor`-Eigenschaft eines Elements gesetzt wird, dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist, sind die beiden Elemente verbunden. Die beiden Elemente werden durch Festlegen eines Ortes auf dem assoziierten Element relativ zum Anker verbunden, wodurch es zu einem „ankerpositionierten“ Element wird.

Wenn mehrere Ankerelemente denselben Ankernamen auf sich gesetzt haben und dieser Name als Wert der `position-anchor`-Eigenschaft eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Ankerelement mit diesem Ankernamen in der Quellreihenfolge verbunden.

Die Ankerpositionierung ändert den [enthältenden Block](/de/docs/Web/CSS/Containing_block) der ankerpositionierten Elemente, sodass seine `position` relativ zu seinem Anker ist, anstatt zum nächstgelegenen positionierten übergeordneten Element.

Um ein positioniertes Element relativ zu einem Ankerelement an einer bestimmten Position zu verankern und zu platzieren, ist eine Anker-Positionierungsfunktion, wie die {{cssxref("anchor()")}}-Funktion (innerhalb eines Wertes der [inset properties](/de/docs/Glossary/inset_properties)) oder die {{cssxref("position-area")}}-Eigenschaft erforderlich.

Sie können ein positioniertes Element nicht mit einem Ankerelement verbinden, wenn der Anker verborgen ist, z. B. mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker aufgrund von {{cssxref("content-visibility", "content-visibility: hidden")}} als Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements gesetzt ist.

Die `anchor-name`-Eigenschaft wird von allen Elementen unterstützt, die ein Hauptfeld generieren. Dies bedeutet, dass [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), einschließlich der erzeugten Inhalte, die mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellt werden, und UI-Funktionen wie der Daumen des [`range`-Eingabe](/de/docs/Web/HTML/Element/input/range) ({{cssxref("::-webkit-slider-thumb")}}) als Ankerelemente dienen können. Pseudoelemente sind implizit an dasselbe Element wie das Ursprünglichelement des Pseudoelements verankert, es sei denn, es wird anders bestimmt.

Für weitere Informationen zu Ankerfunktionen und ihrer Verwendung siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel verankert ein positioniertes Element an einem Anker, indem es das Element rechts neben dem Anker positioniert.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente: ein Ankerelement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

Wir fügen auch etwas Fülltext um die beiden `<div>`s ein, um den {{htmlelement("body")}} höher zu machen, damit er scrollt.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

Zuerst deklarieren wir das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf setzen durch die `anchor-name`-Eigenschaft:

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
}
```

Wir assoziieren das zweite `<div>` mit dem Ankerelement, indem wir dessen Ankernamen als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements setzen. Danach setzen wir folgende Eigenschaften des positionierten Elements:

- Die {{cssxref("position")}}-Eigenschaft auf `fixed`, wodurch es zu einem _ankerpositionierten Element_ wird, damit es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- Die {{cssxref("left")}}- und {{cssxref("top")}}-Eigenschaften auf {{cssxref("anchor()")}}-Funktionen mit den Werten `right` und `top` respektive, was die linke Kante des Infokastens bündig mit der rechten Kante seines Ankers und seine obere Kante relativ zur oberen Kante seines Ankers positioniert.
- {{cssxref("margin-left")}} auf `10px`, was einen Abstand zwischen dem ankerpositionierten Element und seinem Anker schafft.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --myAnchor;
  position: fixed;
  left: anchor(right);
  top: anchor(top);
  margin-left: 10px;
}
```

#### Ergebnis

Scrollen Sie die Seite, um zu sehen, wie die Infobox relativ zum Anker positioniert ist. Wenn der Anker nach oben scrollt, bewegt sich das positionierte Element mit.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Mehrere positionierte Elemente

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker verknüpfen können.

#### HTML

Das HTML ist dasselbe wie im vorherigen Beispiel, außer dass wir diesmal mehrere positionierte `<div>`-Elemente mit unterschiedlichen [`id`](/de/docs/Web/HTML/Global_attributes/id)s haben, um sie zu identifizieren.

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>This is an information box.</p>
</div>

<div class="infobox" id="infobox2">
  <p>This is another information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

Wir deklarieren das `anchor` `<div>` als Ankerelement mit der `anchor-name`-Eigenschaft und geben ihm wie zuvor einen Ankernamen.

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
}
```

Jedes der zwei positionierten Elemente ist mit dem Ankerelement verknüpft, indem dessen Ankernamen als die {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements gesetzt wird. Beide werden auch mit `fixed` positioniert, wodurch sie zu **ankerpositionierten Elementen** werden. Die positionierten Elemente werden dann an unterschiedlichen Stellen relativ zum Anker positioniert, indem eine Kombination aus inset-Eigenschaften wie oben gesehen und den {{cssxref("align-self")}} / {{cssxref("justify-self")}}-Eigenschaften mit einem Wert von `anchor-center` verwendet wird, um die Infobox mittig zum Zentrum des Ankers in der Inline-/Block-Richtung auszurichten.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --myAnchor;
  position: fixed;
}

#infobox1 {
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### Ergebnis

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen mit dem Anker verbunden sind.

{{ EmbedLiveSample("Multiple positioned elements", "100%", "225") }}

### Mehrere Ankernamen

Dieses Beispiel zeigt, wie ein Ankerelement mehr als einen Ankernamen haben kann.

#### HTML

Das HTML ist dasselbe wie im vorherigen Beispiel.

```html hidden
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus
  elementum sagittis vitae et.
</p>

<div class="anchor">⚓︎</div>

<div class="infobox" id="infobox1">
  <p>This is an information box.</p>
</div>

<div class="infobox" id="infobox2">
  <p>This is another information box.</p>
</div>

<p>
  Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. In arcu
  cursus euismod quis viverra nibh cras pulvinar. Vulputate ut pharetra sit amet
  aliquam.
</p>

<p>
  Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Vel elit
  scelerisque mauris pellentesque pulvinar pellentesque habitant morbi
  tristique. Porta lorem mollis aliquam ut porttitor. Turpis cursus in hac
  habitasse platea dictumst quisque. Dolor sit amet consectetur adipiscing elit.
  Ornare lectus sit amet est placerat. Nulla aliquet porttitor lacus luctus
  accumsan.
</p>
```

#### CSS

Das CSS ist ebenfalls dasselbe wie im vorherigen Beispiel, außer dass wir zwei durch Kommas getrennte Namen im Wert der `anchor-name`-Eigenschaft der Zielsetzung einfügen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

```css hidden
body {
  width: 50%;
  margin: 0 auto;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.anchor {
  anchor-name: --anchor1, --anchor2;
}

.infobox {
  position: fixed;
}

#infobox1 {
  position-anchor: --anchor1;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --anchor2;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### Ergebnis

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen mit dem Anker verbunden sind.

{{ EmbedLiveSample("Multiple anchor names", "100%", "225") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
