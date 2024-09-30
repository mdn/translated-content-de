---
title: anchor-name
slug: Web/CSS/anchor-name
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`anchor-name`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein Element als **Ankerelement** zu definieren, indem man ihm einen oder mehrere identifizierende **Ankernamen** zuweist. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}} Eigenschaft eines positionierten Elements gesetzt werden, um es mit dem Anker zu verknüpfen.

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

  - : Der Standardwert. Wenn `anchor-name: none` auf ein Element gesetzt wird, bedeutet das, dass es nicht als Ankerelement definiert ist. Falls das Element zuvor als Anker definiert und mit einem positionierten Element verknüpft war, hebt das Setzen von `anchor-name: none` die Verknüpfung auf.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte beliebige benutzerdefinierte Bezeichner, die den Namen oder die Namen des Ankers definieren, die dann in einer {{cssxref("position-anchor")}} Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verbindung, eine Position und einen Ort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten die Verbindung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die Eigenschaft `anchor-name` auf ihm gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft eines Elements gesetzt wird, dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist, sind die beiden Elemente verknüpft. Die beiden Elemente werden durch Festlegen eines Ortes auf dem verknüpften Element relativ zum Anker miteinander verbunden, wodurch es zu einem "ankerpositionierten" Element wird.

Wenn mehrere Ankerelemente denselben Ankernamen haben und dieser Name als Wert der `position-anchor` Eigenschaft eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Ankerelement mit diesem Ankernamen in der Quellreihenfolge verknüpft.

Ankerpositionierung ändert den [enthältenden Block](/de/docs/Web/CSS/Containing_block) von ankerpositionierten Elementen, wodurch ihre `position` relativ zu ihrem Anker wird, anstatt zum nächstgelegenen positionierten Vorelement.

Um ein positioniertes Element an einem bestimmten Ort relativ zu einem Ankerelement zu verankern und zu platzieren, ist eine Ankerpositionierungsfunktion erforderlich, wie z.B. die {{cssxref("anchor()")}} Funktion (gesetzt innerhalb eines Wertes der [inset-Eigenschaft](/de/docs/Glossary/inset_properties)) oder die {{cssxref("position-area")}} Eigenschaft.

Sie können ein positioniertes Element nicht mit einem Ankerelement assoziieren, wenn der Anker verborgen ist, beispielsweise mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, weil es {{cssxref("content-visibility", "content-visibility: hidden")}} darauf eingestellt hat.

Die Eigenschaft `anchor-name` wird auf allen Elementen unterstützt, die eine Hauptbox erzeugen. Das bedeutet, dass [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), einschließlich generierter Inhalte, die mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellt wurden, und UI-Features wie der [`range` input](/de/docs/Web/HTML/Element/input/range) Daumen ({{cssxref("::-webkit-slider-thumb")}}) Ankerelemente sein können. Pseudoelemente sind implizit am selben Element wie das Ursprungslement des Pseudoelements verankert, es sei denn, etwas anderes ist angegeben.

Für mehr Informationen zu Ankerfunktionen und -nutzung, siehe das [Modul CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Anleitungsleitfaden für CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Offizielle Definition

{{cssinfo}}

## Offizielle Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verbindet ein positioniertes Element mit einem Anker, indem es das Element rechts vom Anker positioniert.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente; ein Ankerelement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

Wir fügen auch etwas Fülltext um die beiden `<div>`s hinzu, um den {{htmlelement("body")}} höher zu machen, damit er scrollt.

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

Zuerst deklarieren wir das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf über die Eigenschaft `anchor-name` setzen:

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

Wir verknüpfen das zweite `<div>` mit dem Ankerelement, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements setzen. Dann setzen wir die Eigenschaften des positionierten Elements:

- {{cssxref("position")}} Eigenschaft auf `fixed`, wodurch es zu einem _ankerpositionierten Element_ wird, sodass es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften zu {{cssxref("anchor()")}} Funktionen mit Werten von `right` und `top` jeweils. Dies positioniert die linke Kante der Infobox bündig an der rechten Kante ihres Ankers und ihre obere Kante relativ zur oberen Kante ihres Ankers.
- {{cssxref("margin-left")}} auf `10px`, wodurch Platz zwischen dem ankerpositionierten Element und seinem Anker entsteht.

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

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker verknüpfen können.

#### HTML

Das HTML ist dasselbe wie im vorherigen Beispiel, außer dass wir diesmal mehrere positionierte Element `<div>`s mit verschiedenen [`id`](/de/docs/Web/HTML/Global_attributes/id)s zur Identifizierung haben.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir die `anchor-name` Eigenschaft verwenden, um ihm einen Ankernamen wie zuvor zu geben.

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

Jedes der beiden positionierten Elemente ist mit dem Ankerelement durch das Setzen seines Ankernamens als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements verknüpft. Beide erhalten auch `fixed` Positionierung, wodurch sie **ankerpositionierte Elemente** werden. Die positionierten Elemente werden dann an verschiedenen Stellen relativ zum Anker positioniert, indem eine Kombination von Inset-Eigenschaften wie oben gesehen und {{cssxref("align-self")}} / {{cssxref("justify-self")}} Eigenschaften mit einem Wert von `anchor-center` verwendet wird, um die Infobox zentral zur Mitte des Ankers in den Inline/Block-Richtungen zu zentrieren.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen am Anker angebracht sind.

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

Das CSS ist ebenfalls dasselbe wie im vorherigen Beispiel, außer dass wir zwei durch Kommas getrennte Namen im Wert der Eigenschaft `anchor-name` des Ziels einschließen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen am Anker angebracht sind.

{{ EmbedLiveSample("Multiple anchor names", "100%", "225") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Anleitungsleitfaden für CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
