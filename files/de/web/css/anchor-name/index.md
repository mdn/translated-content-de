---
title: anchor-name
slug: Web/CSS/anchor-name
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`anchor-name`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein Element als **Ankerelement** zu definieren, indem ihm ein oder mehrere identifizierende **Ankernamen** gegeben werden. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}} Eigenschaft eines positionierten Elements gesetzt werden, um es mit dem Anker zu verbinden.

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
  - : Der Standardwert. Wenn `anchor-name: none` auf ein Element gesetzt wird, bedeutet dies, dass es nicht als Ankerelement definiert ist. Wenn das Element zuvor als Anker definiert und mit einem positionierten Element verbunden war, wird durch das Setzen von `anchor-name: none` die Verbindung gelöst.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte beliebige benutzerdefinierte Bezeichner, die den Namen oder die Namen des Ankers definieren, die dann in einer {{cssxref("position-anchor")}} Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Zuordnung, eine Position und einen Standort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten eine explizite Zuordnung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die Eigenschaft `anchor-name` darauf gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft eines Elements gesetzt wird, dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist, werden die beiden Elemente verbunden. Die beiden Elemente werden durch das Setzen eines Standorts am assoziierten Element relativ zum Anker verbunden, was es zu einem „ankerpositionierten“ Element macht.

Wenn mehrere Ankerelemente denselben Ankernamen auf sich gesetzt haben und dieser Name durch den Wert der `position-anchor` Eigenschaft eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Ankerelement mit diesem Ankernamen in der Quellreihenfolge verbunden.

Anchor-Positionierung verändert den [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) von anker-positionierten Elementen, wobei ihre `position` relativ zu ihrem Anker und nicht zum nächstgelegenen positionierten Ahnen-Element ist.

Um ein positioniertes Element an einem bestimmten Ort relativ zu einem Ankerelement zu verankern und zu platzieren, wird eine Ankerpositionierungsfunktion benötigt, wie die {{cssxref("anchor()")}} Funktion (innerhalb eines Wertes der {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt) oder die {{cssxref("position-area")}} Eigenschaft.

Sie können ein positioniertes Element nicht mit einem Ankerelement verbinden, wenn der Anker verborgen ist, wie zum Beispiel bei {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, da darauf {{cssxref("content-visibility", "content-visibility: hidden")}} gesetzt ist.

Die `anchor-name` Eigenschaft wird von allen Elementen unterstützt, die eine Hauptbox generieren. Das bedeutet, dass [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), einschließlich generierter Inhalte, die mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellt werden, und Benutzeroberflächenfunktionen wie der [`range` Eingabe](/de/docs/Web/HTML/Reference/Elements/input/range) Daumen ({{cssxref("::-webkit-slider-thumb")}}) Ankerelemente sein können. Pseudo-Elemente sind implizit an dasselbe Element wie das ursprungselement des Pseudo-Elements verankert, es sei denn, es ist anders angegeben.

Für mehr Informationen über Ankereigenschaften und deren Verwendung siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel verknüpft ein positioniertes Element mit einem Anker und positioniert das Element rechts vom Anker.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente; ein Ankerelement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

Wir fügen auch etwas Fülltext um die beiden `<div>`s herum hinzu, um den {{htmlelement("body")}} höher zu machen, sodass er scrollen kann.

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

Wir erklären zunächst das `anchor` `<div>` als Ankerelement, indem wir ihm über die `anchor-name` Eigenschaft einen Ankernamen zuweisen:

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
  anchor-name: --my-anchor;
}
```

Wir verbinden das zweite `<div>` mit dem Ankerelement, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements setzen. Dann setzen wir folgende Eigenschaften des positionierten Elements:

- Die {{cssxref("position")}} Eigenschaft auf `fixed`, wodurch es zu einem _ankerpositionierten Element_ wird, sodass es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- Die {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften auf {{cssxref("anchor()")}} Funktionen mit den Werten `right` bzw. `top`. Dies positioniert den linken Rand der Infobox bündig mit dem rechten Rand ihres Ankers, und ihren oberen Rand relativ zum oberen Rand ihres Ankers.
- {{cssxref("margin-left")}} auf `10px`, das einen Abstand zwischen dem ankerpositionierten Element und seinem Anker schafft.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --my-anchor;
  position: fixed;
  left: anchor(right);
  top: anchor(top);
  margin-left: 10px;
}
```

#### Ergebnis

Scrollen Sie die Seite, um zu sehen, wie die Infobox relativ zum Anker positioniert ist. Wenn der Anker nach oben scrollt, bewegt sich das positionierte Element mit ihm.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Mehrere positionierte Elemente

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker verbinden können.

#### HTML

Das HTML ist das gleiche wie im vorherigen Beispiel, außer dass wir diesmal mehrere positionierte Element-`<div>`s mit unterschiedlichen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s haben, um sie zu identifizieren.

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

Wir erklären das `anchor` `<div>` als Ankerelement mit der `anchor-name` Eigenschaft, indem wir ihm wie zuvor einen Ankernamen geben.

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
  anchor-name: --my-anchor;
}
```

Jedes der beiden positionierten Elemente wird mit dem Ankerelement verbunden, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements setzen. Beide haben ebenfalls eine `fixed` Positionierung, wodurch sie zu **ankerpositionierten Elementen** werden. Die positionierten Elemente werden dann an verschiedenen Stellen relativ zum Anker positioniert, indem eine Kombination von Einsetzeigenschaften wie oben gesehen und {{cssxref("align-self")}} / {{cssxref("justify-self")}} Eigenschaften mit einem Wert von `anchor-center` verwendet wird, um die Infobox in der Inline-/Blockrichtung zentral zum Anker auszurichten.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.infobox {
  position-anchor: --my-anchor;
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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen an den Anker gebunden sind.

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

Auch das CSS ist dasselbe wie im vorherigen Beispiel, mit der Ausnahme, dass wir zwei durch Kommas getrennte Namen im `anchor-name` Eigenschaftswert des Ziels einschließen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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
  border: 1px solid #dddddd;
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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen an den Anker gebunden sind.

{{ EmbedLiveSample("Multiple anchor names", "100%", "225") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
