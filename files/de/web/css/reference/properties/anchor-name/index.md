---
title: "`anchor-name` CSS property"
short-title: anchor-name
slug: Web/CSS/Reference/Properties/anchor-name
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`anchor-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, ein Element als **Ankerelement** zu definieren, indem es mit einem oder mehreren identifizierenden **Ankernamen** versehen wird. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}}-Eigenschaft eines positionierten Elements gesetzt werden, um es mit dem Anker zu verbinden.

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

Diese Eigenschaft wird als ein einzelner Wert aus der folgenden Liste angegeben:

- `none`
  - : Der Standardwert. Das Setzen von `anchor-name: none` auf einem Element bedeutet, dass es nicht als Ankerelement definiert ist. Wenn das Element zuvor als Anker definiert und mit einem positionierten Element verbunden war, wird diese Verbindung durch das Setzen von `anchor-name: none` aufgehoben.

- {{cssxref("dashed-ident")}}
  - : Einer oder mehrere durch Kommas getrennte willkürliche benutzerdefinierte Bezeichner, die den oder die Namen des Ankers definieren, die dann in einer {{cssxref("position-anchor")}}-Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Assoziation, eine Position und einen Ort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten eine explizite Assoziation.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die Eigenschaft `anchor-name` darauf gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor`-Eigenschaft eines Elements festgelegt wird, das seine {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt hat, sind die beiden Elemente verbunden. Die beiden Elemente werden miteinander verbunden, indem eine Position auf dem verbundenen Element relativ zum Anker festgelegt wird, was es zu einem "anker-positionierten" Element macht.

Wenn mehrere Ankerelemente denselben Ankernamen auf sich gesetzt haben und dieser Name als Wert der `position-anchor`-Eigenschaft eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Ankerelement mit diesem Ankernamen in der Quellreihenfolge assoziiert.

Anker-Positionierung ändert den [enthältenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) von anker-positionierten Elementen, sodass ihre `position` relativ zu ihrem Anker und nicht zu dem nächstgelegenen positionierten Vorfahren-Element ist.

Um ein positioniertes Element an einem bestimmten Ort relativ zu einem Ankerelement zu verankern und zu platzieren, ist ein Anker-Positionierungsmerkmal erforderlich, wie die {{cssxref("anchor()")}}-Funktion (innerhalb eines {{Glossary("inset_properties", "Inset-Eigenschaftswerts")}} gesetzt) oder die {{cssxref("position-area")}}-Eigenschaft.

Sie können ein positioniertes Element nicht mit einem Ankerelement assoziieren, wenn der Anker ausgeblendet ist, wie beispielsweise mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker aufgrund der Einstellung von {{cssxref("content-visibility", "content-visibility: hidden")}} Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements ist.

Die Eigenschaft `anchor-name` wird auf allen Elementen unterstützt, die eine Hauptbox erzeugen. Das bedeutet, dass [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), einschließlich generierter Inhalte, die mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellt wurden, und UI-Features wie der Daumen des [`range` input](/de/docs/Web/HTML/Reference/Elements/input/range) ({{cssxref("::-webkit-slider-thumb")}}) Ankerelemente sein können. Pseudo-Elemente sind implizit an dasselbe Element verankert wie das ursprunggebende Element des Pseudo-Elements, es sei denn, es ist anders angegeben.

Für weitere Informationen zu Ankermerkmalen und deren Verwendung, siehe das [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul und den [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verankert ein positioniertes Element an einem Anker und positioniert das Element rechts vom Anker.

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
  anchor-name: --my-anchor;
}
```

Wir verknüpfen das zweite `<div>` mit dem Ankerelement, indem wir dessen Ankernamen als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements setzen. Dann setzen wir das positionierte Element:

- Die {{cssxref("position")}}-Eigenschaft auf `fixed`, wodurch es zu einem _anker-positionierten Element_ wird, das relativ zur Position des Ankers auf der Seite positioniert werden kann.
- Die {{cssxref("left")}} und {{cssxref("top")}}-Eigenschaften auf {{cssxref("anchor()")}}-Funktionen mit den Werten `right` und `top` respektive. Dies positioniert die linke Kante der Infobox bündig zur rechten Kante ihres Ankers und ihre obere Kante relativ zur oberen Kante ihres Ankers.
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

Scrollen Sie die Seite, um zu sehen, wie die Infobox relativ zum Anker positioniert ist. Wenn der Anker nach oben scrollt, bewegt sich das positionierte Element zusammen mit ihm.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Mehrere positionierte Elemente

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker verknüpfen können.

#### HTML

Das HTML ist das gleiche wie im vorherigen Beispiel, außer dass wir diesmal mehrere positionierte `<div>`-Elemente mit verschiedenen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s haben, um sie zu identifizieren.

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
  anchor-name: --my-anchor;
}
```

Jedes der beiden positionierten Elemente wird mit dem Ankerelement verknüpft, indem sein Ankername als die {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements gesetzt wird. Beide bekommen auch eine `fixed`-Positionierung, was sie zu **anker-positionierten Elementen** macht. Die positionierten Elemente werden dann an verschiedenen Stellen relativ zum Anker positioniert, indem eine Kombination von Inset-Eigenschaften wie oben gesehen verwendet sowie die {{cssxref("align-self")}} / {{cssxref("justify-self")}}-Eigenschaften mit einem Wert von `anchor-center`, was die Infobox zentral mit dem Zentrum des Ankers in den Inline/Block-Richtungen ausrichtet.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen an den Anker angebunden sind.

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

Das CSS ist ebenfalls das gleiche wie im vorherigen Beispiel, außer dass wir diesmal zwei durch Kommas getrennte Namen im `anchor-name`-Eigenschaftswert des Ziels einschließen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen an den Anker angebunden sind.

{{ EmbedLiveSample("Multiple anchor names", "100%", "225") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("anchor-scope")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
