---
title: anchor-name
slug: Web/CSS/anchor-name
l10n:
  sourceCommit: 7b35cff797e29c66f364ece0fd64f4b2a3b2acf3
---

{{CSSRef}}{{seecompattable}}

Die **`anchor-name`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein Element als **Ankerelement** zu definieren, indem es ihm einen oder mehrere identifizierende **Ankernamen** zuweist. Jeder dieser Namen kann dann als Wert der {{cssxref("position-anchor")}} Eigenschaft eines positionierten Elements festgelegt werden, um es mit dem Anker zu verbinden.

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

  - : Der Standardwert. Wenn `anchor-name: none` auf ein Element gesetzt wird, bedeutet dies, dass es nicht als Ankerelement definiert ist. Wenn das Element zuvor als Anker und mit einem positionierten Element verbunden war, wird durch Setzen von `anchor-name: none` die Verbindung aufgehoben.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte, beliebige benutzerdefinierte Bezeichner, die den Namen oder die Namen des Ankers definieren, die dann in einer {{cssxref("position-anchor")}} Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verbindung, eine Position und einen Ort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} sorgen für eine explizite Verbindung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die Eigenschaft `anchor-name` darauf festgelegt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft eines Elements festgelegt wird, das seine {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt hat, werden die beiden Elemente verbunden. Die beiden Elemente werden verbunden, indem ein Ort auf dem verbundenen Element relativ zum Anker festgelegt wird, was es zu einem "anker-positionierten" Element macht.

Wenn mehrere Ankerelemente denselben Ankernamen haben und dieser Name vom `position-anchor` Eigenschaftswert eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Ankerelement gleichen Ankernamens in der Quellreihenfolge verbunden.

Die Ankerpositionierung ändert den [inhaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) von anker-positionierten Elementen, wobei ihre `position` relativ zu ihrem Anker und nicht zum nächsten positionierten Vorfahren-Element wird.

Um ein positioniertes Element an einem bestimmten Ort relativ zu einem Ankerelement zu platzieren, wird eine Ankerpositionierungsfunktion benötigt, wie die {{cssxref("anchor()")}} Funktion (innerhalb eines Wertes von {{Glossary("inset_properties", "inset properties")}} gesetzt) oder die {{cssxref("position-area")}} Eigenschaft.

Sie können ein positioniertes Element nicht mit einem Ankerelement verbinden, wenn der Anker verborgen ist, zum Beispiel mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, aufgrund dessen, dass es {{cssxref("content-visibility", "content-visibility: hidden")}} darauf gesetzt hat.

Die Eigenschaft `anchor-name` wird auf allen Elementen unterstützt, die ein Hauptbox generieren. Dies bedeutet, dass [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), einschließlich generierter Inhalte, die mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellt wurden, und UI-Funktionen wie der [`range` input](/de/docs/Web/HTML/Element/input/range) Daumen ({{cssxref("::-webkit-slider-thumb")}}), Ankerelemente sein können. Pseudo-Elemente sind implizit an dasselbe Element verankert wie das Ursprungselement des Pseudo-Elementes, es sei denn, es wird anders angegeben.

Für weitere Informationen zu Ankerfunktionen und deren Verwendung, siehe die [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Übersichtsseite und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel verbindet ein positioniertes Element mit einem Anker, wobei das Element rechts vom Anker positioniert wird.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente; ein Ankerelement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

Wir fügen auch etwas Fülltext um die beiden `<div>`s ein, um den {{htmlelement("body")}} höher zu machen, so dass es scrollen kann.

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

Wir deklarieren zuerst das `anchor` `<div>` als Ankerelement, indem wir ihm einen Ankernamen über die `anchor-name` Eigenschaft zuweisen:

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

Wir verbinden das zweite `<div>` mit dem Ankerelement, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements festlegen. Dann setzen wir Folgendes für das positionierte Element:

- Die {{cssxref("position")}} Eigenschaft auf `fixed`, wodurch es zu einem _anker-positionierten Element_ wird, sodass es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- Die {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften auf {{cssxref("anchor()")}} Funktionen mit Werten von `right` und `top` entsprechend. Dies positioniert die linke Kante des Infoboxs bündig zur rechten Kante seines Ankers und seine obere Kante relativ zur oberen Kante seines Ankers.
- {{cssxref("margin-left")}} auf `10px`, wodurch Platz zwischen dem anker-positionierten Element und seinem Anker geschaffen wird.

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

Scrollen Sie die Seite, um zu sehen, wie die Infobox relativ zum Anker positioniert ist. Während der Anker nach oben scrollt, bewegt sich das positionierte Element mit ihm.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Mehrere positionierte Elemente

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker verbinden können.

#### HTML

Das HTML ist dasselbe wie im vorherigen Beispiel, außer dass wir diesmal mehrere positionierte `<div>`s mit unterschiedlichen [`id`](/de/docs/Web/HTML/Global_attributes/id)s zur Identifizierung haben.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement mit der `anchor-name` Eigenschaft, indem wir ihm wie zuvor einen Ankernamen geben.

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

Jedes der beiden positionierten Elemente wird mit dem Ankerelement verbunden, indem der Ankername als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements festgelegt wird. Beide erhalten auch eine `fixed`-Positionierung, wodurch sie zu **anker-positionierten Elementen** werden. Die positionierten Elemente werden dann an verschiedenen Stellen relativ zum Anker positioniert, indem eine Kombination aus inset-Eigenschaften wie oben gezeigt sowie {{cssxref("align-self")}} / {{cssxref("justify-self")}} Eigenschaften mit einem Wert von `anchor-center` verwendet wird, um die Infobox zentriert in den Inline-/Blockrichtungen zum Zentrum des Ankers auszurichten.

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

Auch das CSS ist dasselbe wie im vorherigen Beispiel, außer dass wir zwei durch Komma getrennte Namen im Wert der `anchor-name` Eigenschaft des Ziels einschließen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen an den Anker gebunden sind.

{{ EmbedLiveSample("Multiple anchor names", "100%", "225") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
