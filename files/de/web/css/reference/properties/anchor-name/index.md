---
title: "`anchor-name` CSS property"
short-title: anchor-name
slug: Web/CSS/Reference/Properties/anchor-name
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`anchor-name`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht es, ein Element als **Anker-Element** zu definieren, indem ihm ein oder mehrere identifizierende **Ankernamen** zugewiesen werden. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}}-Eigenschaft eines positionierten Elements gesetzt werden, um es mit dem Anker zu verknüpfen.

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
  - : Der Standardwert. Wenn `anchor-name: none` auf ein Element gesetzt wird, bedeutet das, dass es nicht als Anker-Element definiert ist. Wenn das Element zuvor als Anker definiert wurde und mit einem positionierten Element verknüpft war, trennt `anchor-name: none` die beiden.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte beliebige benutzerdefinierte Bezeichner, die den Namen oder die Namen des Ankers definieren, die dann in einer {{cssxref("position-anchor")}}-Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Anker-Element zu positionieren, benötigt das positionierte Element drei Merkmale: eine Assoziation, eine Position und einen Standort. Die `anchor-name`- und {{cssxref("position-anchor")}}-Eigenschaften bieten eine explizite Verbindung.

Das Anker-Element akzeptiert einen oder mehrere `<dashed-ident>`-Ankernamen, die über die `anchor-name`-Eigenschaft gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor`-Eigenschaft eines Elements gesetzt wird, dessen {{cssxref("position")}} auf `absolute` oder `fixed` eingestellt ist, werden die beiden Elemente verknüpft. Die beiden Elemente werden durch das Setzen eines Standorts am assoziierten Element relativ zum Anker gebunden, wodurch es zu einem "ankerpositionierten" Element wird.

Wenn mehrere Anker-Elemente denselben Ankernamen aufweisen und dieser Name als Wert der `position-anchor`-Eigenschaft eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Anker-Element in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Ankerpositionierung ändert den [Enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) der ankerpositionierten Elemente, wodurch seine `position` relativ zu seinem Anker statt zum nächsten positionierten Vorfahrelement wird.

Um ein positioniertes Element an einer bestimmten Stelle relativ zu einem Anker-Element zu binden und zu platzieren, wird eine Ankerpositionierungsfunktion benötigt, wie die {{cssxref("anchor()")}}-Funktion (gesetzt innerhalb eines {{Glossary("inset_properties", "inset property's")}} Wertes) oder die {{cssxref("position-area")}}-Eigenschaft.

Sie können ein positioniertes Element nicht mit einem Anker-Element verknüpfen, wenn der Anker versteckt ist, zum Beispiel mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements ist, weil es {{cssxref("content-visibility", "content-visibility: hidden")}} darauf gesetzt hat.

Die `anchor-name`-Eigenschaft wird auf allen Elementen unterstützt, die eine Hauptbox erzeugen. Dies bedeutet, dass [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), einschließlich von mit {{cssxref("::before")}} und {{cssxref("::after")}} erzeugtem Inhalt, und UI-Funktionen wie der [`range` input](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler ({{cssxref("::-webkit-slider-thumb")}}) Anker-Elemente sein können. Pseudo-Elemente sind implizit mit demselben Element verankert wie das Ursprungselement des Pseudo-Elements, es sei denn, es wird anders angegeben.

Für weitere Informationen zu Ankerfunktionen und ihrer Verwendung, siehe das [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)-Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verbindet ein positioniertes Element mit einem Anker und positioniert das Element rechts vom Anker.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente; ein Anker-Element mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

Wir fügen auch etwas Textfüller um die beiden `<div>`-Elemente hinzu, um den {{htmlelement("body")}} höher zu machen, sodass er rollt.

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

Zuerst deklarieren wir das `anchor` `<div>` als Anker-Element, indem wir einen Ankernamen darauf setzen über die `anchor-name`-Eigenschaft:

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

Wir assoziieren das zweite `<div>` mit dem Anker-Element, indem wir seinen Ankernamen als den Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements festlegen. Wir setzen dann das positionierte Element's:

- {{cssxref("position")}}-Eigenschaft auf `fixed`, um es in ein _ankerpositioniertes Element_ zu konvertieren, so dass es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- {{cssxref("left")}} und {{cssxref("top")}}-Eigenschaften auf {{cssxref("anchor()")}}-Funktionen mit Werten von `right` und `top` respektive. Dies positioniert die linke Kante der Infobox bündig zur rechten Kante ihres Ankers und die obere Kante relativ zur oberen Kante ihres Ankers.
- {{cssxref("margin-left")}} auf `10px`, um Platz zwischen dem ankerpositionierten Element und seinem Anker zu schaffen.

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

Scrollen Sie die Seite, um zu sehen, wie die Infobox relativ zum Anker positioniert ist. Wenn der Anker nach oben scrollt, bewegt sich das positionierte Element mit.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Mehrere positionierte Elemente

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker verbinden können.

#### HTML

Das HTML ist das gleiche wie im vorherigen Beispiel, außer dass wir dieses Mal mehrere positionierte `<div>`-Elemente mit verschiedenen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s haben, um sie zu identifizieren.

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

Wir deklarieren das `anchor` `<div>` als Anker-Element mit Hilfe der `anchor-name`-Eigenschaft und geben ihm einen Ankernamen wie zuvor.

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

Jedes der beiden positionierten Elemente wird mit dem Anker-Element assoziiert, indem sein Ankername als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements gesetzt wird. Beide erhalten auch eine `fixed`-Positionierung, was sie zu **ankerpositionierten Elementen** macht. Die positionierten Elemente werden dann an verschiedenen Stellen relativ zum Anker positioniert, unter Verwendung einer Kombination von inset-Eigenschaften wie oben gezeigt und {{cssxref("align-self")}} / {{cssxref("justify-self")}}-Eigenschaften mit einem Wert von `anchor-center`, wodurch die Infobox im Inline/Block-Richtung mittig am Anker ausgerichtet wird.

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

Dieses Beispiel zeigt, wie ein Anker-Element mehr als einen Ankernamen haben kann.

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

Das CSS ist ebenfalls das gleiche wie im vorherigen Beispiel, außer dass wir zwei durch Kommas getrennte Namen im Wert der `anchor-name`-Eigenschaft des Ziels einschließen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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
- {{cssxref("anchor-scope")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
