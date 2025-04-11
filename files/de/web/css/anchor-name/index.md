---
title: anchor-name
slug: Web/CSS/anchor-name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}{{seecompattable}}

Die **`anchor-name`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein Element als **Ankerelement** zu definieren, indem es mit einem oder mehreren identifizierenden **Ankernamen** versehen wird. Jeder dieser Namen kann dann als Wert der {{cssxref("position-anchor")}} Eigenschaft eines positionierten Elements festgelegt werden, um es mit dem Anker zu verknüpfen.

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

  - : Der Standardwert. Wenn `anchor-name: none` auf ein Element gesetzt wird, bedeutet dies, dass es nicht als Ankerelement definiert ist. Falls das Element zuvor als Anker definiert und mit einem positionierten Element verknüpft war, trennt `anchor-name: none` die Verbindung.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte beliebige benutzerdefinierte Kennungen, die den Namen oder die Namen des Ankers definieren, die dann in einer {{cssxref("position-anchor")}} Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Assoziation, eine Position und einen Ort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten eine explizite Assoziation.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die Eigenschaft `anchor-name` auf ihm gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft eines Elements mit {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt wird, werden die beiden Elemente assoziiert. Die beiden Elemente werden verbunden, indem ein Ort auf dem assoziierten Element relativ zum Anker festgelegt wird, wodurch es zu einem "anker-positionierten" Element wird.

Wenn mehrere Ankerelemente denselben Ankernamen aufweisen und dieser Name als Wert der `position-anchor` Eigenschaft eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Ankerelement mit diesem Ankernamen in der Quellreihenfolge assoziiert.

Die Ankerpositionierung ändert den [Enthaltungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) von anker-positionierten Elementen, sodass ihre `position` relativ zu ihrem Anker und nicht relativ zum nächsten positionierten Vorfahren wird.

Um ein positioniertes Element an einem bestimmten Ort relativ zu einem Ankerelement zu befestigen, wird eine Ankerpositionierungsfunktion benötigt, wie die {{cssxref("anchor()")}} Funktion (im Wert einer {{Glossary("inset_properties", "inset Eigenschaft")}} gesetzt) oder die {{cssxref("position-area")}} Eigenschaft.

Es ist nicht möglich, ein positioniertes Element mit einem Ankerelement zu verknüpfen, wenn der Anker verborgen ist, z.B. mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, da {{cssxref("content-visibility", "content-visibility: hidden")}} darauf gesetzt ist.

Die Eigenschaft `anchor-name` wird auf allen Elementen unterstützt, die eine Hauptbox generieren. Dies bedeutet, dass [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), einschließlich der mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellten generierten Inhalte und UI-Features wie der [`range` Eingabe](/de/docs/Web/HTML/Reference/Elements/input/range) Daumen ({{cssxref("::-webkit-slider-thumb")}}) Ankerelemente sein können. Pseudoelemente sind implizit an dasselbe Element verankert wie das Element, von dem das Pseudoelement stammt, sofern nicht anders angegeben.

Weitere Informationen zu Ankerfunktionen und deren Verwendung finden Sie auf der [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und im [Anleitung zur Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verknüpft ein positioniertes Element mit einem Anker und positioniert das Element rechts vom Anker.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente; ein Ankerelement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

Wir fügen auch etwas Fülltext um die beiden `<div>`s ein, um den {{htmlelement("body")}} höher zu machen, sodass er scrollbar wird.

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

Zuerst deklarieren wir das `anchor` `<div>` als Ankerelement, indem wir ihm über die Eigenschaft `anchor-name` einen Ankernamen zuweisen:

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

Wir verknüpfen das zweite `<div>` mit dem Ankerelement, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements festlegen. Dann setzen wir die Eigenschaften des positionierten Elements:

- Die {{cssxref("position")}} Eigenschaft auf `fixed`, wodurch es zu einem _anker-positionierten Element_ konvertiert wird, sodass es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- Die {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften auf {{cssxref("anchor()")}} Funktionen mit den Werten `right` und `top` entsprechend. Dies positioniert die linke Kante der Infobox bündig zur rechten Kante ihres Ankers und die obere Kante relativ zur oberen Kante ihres Ankers.
- {{cssxref("margin-left")}} auf `10px`, wodurch ein Raum zwischen dem anker-positionierten Element und seinem Anker entsteht.

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

Scrollen Sie die Seite, um zu sehen, wie die Infobox relativ zum Anker positioniert ist. Wenn der Anker nach oben scrollt, bewegt sich das positionierte Element mit ihm.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Mehrere positionierte Elemente

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker assoziieren können.

#### HTML

Das HTML ist das gleiche wie im vorherigen Beispiel, jedoch haben wir dieses Mal mehrere positionierte Element `<div>`s mit unterschiedlichen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s, um sie zu identifizieren.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement mit der Eigenschaft `anchor-name`, indem wir ihm wie zuvor einen Ankernamen geben.

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

Jedes der beiden positionierten Elemente wird mit dem Ankerelement assoziiert, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements festlegen. Beide haben ebenfalls eine `fixed` Platzierung, wodurch sie **anker positionierte Elemente** werden. Die positionierten Elemente werden dann an verschiedenen Orten relativ zum Anker positioniert, indem eine Kombination von inset-Eigenschaften wie oben gesehen und {{cssxref("align-self")}} / {{cssxref("justify-self")}} Eigenschaften mit einem Wert von `anchor-center` verwendet wird, um die Infobox in der Inline-/Blockrichtung jeweils zentral zum Anker auszurichten.

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

Das HTML ist das gleiche wie im vorherigen Beispiel.

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

Das CSS ist auch dasselbe wie im vorherigen Beispiel, außer dass wir zwei durch Kommas getrennte Namen im Wert der `anchor-name` Eigenschaft des Ziels einfügen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
