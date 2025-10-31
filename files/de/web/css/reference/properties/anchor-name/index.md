---
title: anchor-name
slug: Web/CSS/Reference/Properties/anchor-name
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`anchor-name`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein Element als **Ankerelement** zu definieren, indem ihm ein oder mehrere identifizierende **Ankernamen** zugewiesen werden. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}} Eigenschaft eines positionierten Elements gesetzt werden, um es mit dem Anker zu verbinden.

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
  - : Der Standardwert. Das Setzen von `anchor-name: none` auf einem Element bedeutet, dass es nicht als Ankerelement definiert ist. Wenn das Element zuvor als Anker definiert und mit einem positionierten Element verbunden war, wird durch das Setzen von `anchor-name: none` die Verbindung zwischen beiden aufgehoben.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte, benutzerdefinierte Bezeichner, die den oder die Namen des Ankers definieren und dann in einer {{cssxref("position-anchor")}} Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Funktionen: eine Verbindung, eine Position und einen Standort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten eine explizite Verbindung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die Eigenschaft `anchor-name` daran gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft eines Elements gesetzt wird, dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist, werden die beiden Elemente verbunden. Diese beiden Elemente werden durch das Setzen eines Standorts auf das verbundene Element relativ zum Anker miteinander verankert, wodurch es zu einem "anchor-positioned"-Element wird.

Wenn mehrere Ankerelemente denselben Ankernamen gesetzt haben und dieser Name im Wert der `position-anchor` Eigenschaft eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Ankerelement mit diesem Ankernamen in der Quellreihenfolge verbunden.

Die Anker-Positionierung ändert den [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) von verankerten Elementen, sodass seine `position` relativ zu seinem Anker statt zum nächstgelegenen positionierten Vorfahren-Element ist.

Um ein positioniertes Element an einem bestimmten Ort relativ zu einem Ankerelement zu verankern und zu platzieren, ist eine Ankerpositionierung erforderlich, wie zum Beispiel die {{cssxref("anchor()")}} Funktion (gesetzt im Wert einer {{Glossary("inset_properties", "Inset-Eigenschaft")}}) oder die {{cssxref("position-area")}} Eigenschaft.

Sie können ein positioniertes Element nicht mit einem Ankerelement verbinden, wenn der Anker verborgen ist, etwa durch {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, weil es {{cssxref("content-visibility", "content-visibility: hidden")}} darauf hat.

Die `anchor-name` Eigenschaft wird auf allen Elementen unterstützt, die eine Hauptbox erzeugen. Das bedeutet, dass [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), einschließlich generierter Inhalte, die mit {{cssxref("::before")}} und {{cssxref("::after")}} erzeugt wurden, und UI-Eigenschaften wie der Thumb des [`range` input](/de/docs/Web/HTML/Reference/Elements/input/range) ({{cssxref("::-webkit-slider-thumb")}}) Ankerelemente sein können. Pseudoelemente sind implizit an dasselbe Element verankert wie das Ursprungselement des Pseudoelements, es sei denn, es ist anderweitig spezifiziert.

Weitere Informationen zu Ankerfunktionen und -verwendung finden Sie auf der [CSS-Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und im [Anwenden von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verankert ein positioniertes Element an einem Anker und positioniert das Element rechts vom Anker.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente; ein Ankerelement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

Wir fügen auch etwas Fülltext um die beiden `<div>`s hinzu, um den {{htmlelement("body")}} zu vergrößern, sodass er gescrollt werden kann.

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

Zuerst deklarieren wir das `anchor` `<div>` als Ankerelement, indem wir mit der Eigenschaft `anchor-name` einen Ankernamen darauf setzen:

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

Wir verbinden das zweite `<div>` mit dem Ankerelement, indem wir dessen Ankernamen als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements setzen. Dann setzen wir das positionierte Element auf:

- Die {{cssxref("position")}} Eigenschaft auf `fixed`, wodurch es zu einem _verankerten Element_ wird, damit es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- Die {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften auf {{cssxref("anchor()")}} Funktionen mit den Werten `right` und `top` entsprechend. Dadurch wird die linke Kante des Infoboxes bündig mit der rechten Kante ihres Ankers und ihre obere Kante relativ zur oberen Kante ihres Ankers positioniert.
- {{cssxref("margin-left")}} auf `10px`, wodurch Abstand zwischen dem verankerten Element und seinem Anker entsteht.

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

Das HTML ist das gleiche wie im vorherigen Beispiel, außer dass wir diesmal mehrere positionierte Element `<div>`s mit unterschiedlichen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s haben, um sie zu identifizieren.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement mit der `anchor-name` Eigenschaft und geben ihm wie zuvor einen Ankernamen.

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

Jedes der beiden positionierten Elemente wird mit dem Ankerelement verbunden, indem sein Ankername als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Beide werden auch mit `fixed` Positionierung versehen, wodurch sie zu **verankerten Elementen** werden. Die positionierten Elemente werden dann an verschiedenen Stellen relativ zum Anker positioniert, indem eine Kombination aus Inset-Eigenschaften wie oben gezeigt und {{cssxref("align-self")}} / {{cssxref("justify-self")}} Eigenschaften mit einem Wert von `anchor-center` verwendet wird, um die Infobox zentral zu dem Anker im Inline/Block-Richtungen zu übermitteln.

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

Dieses Beispiel demonstriert, wie ein Ankerelement mehr als einen Ankernamen haben kann.

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

Das CSS ist ebenfalls dasselbe wie im vorherigen Beispiel, außer dass wir zwei durch ein Komma getrennte Namen im `anchor-name`-Eigenschaftswert des Ziels einschließen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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
- [CSS-Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Anwenden von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
