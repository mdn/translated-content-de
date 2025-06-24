---
title: anchor-name
slug: Web/CSS/anchor-name
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`anchor-name`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein Element als **Anchor-Element** zu definieren, indem ihm ein oder mehrere identifizierende **Anchor-Namen** gegeben werden. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}}-Eigenschaft eines positionierten Elements festgelegt werden, um es mit dem Anchor zu assoziieren.

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

  - : Der Standardwert. Wenn `anchor-name: none` auf ein Element gesetzt wird, bedeutet das, dass es nicht als Anchor-Element definiert ist. Wenn das Element zuvor als Anchor definiert und mit einem positionierten Element assoziiert war, wird durch das Setzen von `anchor-name: none` die Assoziation aufgehoben.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Komma getrennte beliebige benutzerdefinierte Identifikatoren, die den Namen oder die Namen des Anchors definieren, die dann in einer {{cssxref("position-anchor")}}-Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Anchor-Element zu positionieren, benötigt das positionierte Element drei Merkmale: eine Assoziation, eine Position und einen Ort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten eine explizite Assoziation.

Das Anchor-Element akzeptiert einen oder mehrere `<dashed-ident>` Anchor-Namen, die darauf über die `anchor-name`-Eigenschaft gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor`-Eigenschaft eines Elements verwendet wird, dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist, werden die beiden Elemente assoziiert. Die beiden Elemente werden miteinander verbunden, indem ein Ort auf das assoziierte Element relativ zu dem Anchor gesetzt wird, wodurch es zu einem "Anchor-positionierten" Element wird.

Wenn mehrere Anchor-Elemente denselben Anchor-Namen auf sich gesetzt haben und dieser Name vom `position-anchor`-Eigenschaftswert eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Anchor-Element mit diesem Anchor-Namen in der Quellreihenfolge assoziiert.

Anchor-Positionierung ändert den [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) von Anchor-positionierten Elementen, sodass seine `position` relativ zu seinem Anchor statt zum nächsten positionierten Vorfahren ist.

Um ein positioniertes Element an einem spezifischen Ort relativ zu einem Anchor-Element zu verbinden und zu platzieren, ist eine Anchor-Positionierungsfunktion erforderlich, wie die {{cssxref("anchor()")}}-Funktion (innerhalb eines {{Glossary("inset_properties", "Wertes der inset-Eigenschaften")}} gesetzt) oder die {{cssxref("position-area")}}-Eigenschaft.

Sie können ein positioniertes Element nicht mit einem versteckten Anchor-Element assoziieren, wie z.B. bei {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anchor Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, da darauf {{cssxref("content-visibility", "content-visibility: hidden")}} gesetzt wurde.

Die `anchor-name`-Eigenschaft wird von allen Elementen unterstützt, die eine Hauptbox generieren. Das bedeutet, dass [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), einschließlich generierter Inhalte, die mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellt wurden, sowie UI-Funktionen wie der [`range` input](/de/docs/Web/HTML/Reference/Elements/input/range) Daumen ({{cssxref("::-webkit-slider-thumb")}}) Anchor-Elemente sein können. Pseudo-Elemente sind implizit an dasselbe Element verankert wie das Ursprungselement des Pseudo-Elements, sofern nicht anders spezifiziert.

Für weitere Informationen über Anchor-Funktionen und deren Nutzung, siehe die [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Übersichtsseite und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel verbindet ein positioniertes Element mit einem Anchor und platziert das Element rechts vom Anchor.

#### HTML

Wir geben zwei {{htmlelement("div")}}-Elemente an; ein Anchor-Element mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

Wir fügen auch etwas Fülltext um die beiden `<div>`-Elemente hinzu, um den {{htmlelement("body")}} höher zu machen, damit er scrollen kann.

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

Zuerst deklarieren wir das `anchor`-`<div>` als ein Anchor-Element, indem wir einen Anchor-Namen darauf über die `anchor-name`-Eigenschaft setzen:

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

Wir assoziieren das zweite `<div>` mit dem Anchor-Element, indem wir seinen Anchor-Namen als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements setzen. Dann setzen wir:

- die {{cssxref("position")}}-Eigenschaft auf `fixed`, um es in ein _Anchor-positioniertes Element_ umzuwandeln, sodass es relativ zur Position des Anchors auf der Seite positioniert werden kann.
- die {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften zu {{cssxref("anchor()")}} Funktionen mit den Werten `right` und `top` jeweils. Dies positioniert die linke Kante der Infobox bündig zur rechten Kante ihres Anchors und ihre obere Kante relativ zur oberen Kante ihres Anchors.
- {{cssxref("margin-left")}} auf `10px`, um Abstand zwischen dem Anchor-positionierten Element und seinem Anchor zu schaffen.

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

Scrollen Sie die Seite, um zu sehen, wie die Infobox relativ zum Anchor positioniert ist. Während der Anchor nach oben scrollt, bewegt sich das positionierte Element mit ihm.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Mehrere positionierte Elemente

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anchor assoziieren können.

#### HTML

Das HTML ist dasselbe wie im vorherigen Beispiel, nur haben wir diesmal mehrere positionierte `<div>`-Elemente mit unterschiedlichen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s, um sie zu identifizieren.

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

Wir deklarieren das `anchor` `<div>` als Anchor-Element mit der `anchor-name`-Eigenschaft und geben ihm wie zuvor einen Anchor-Namen.

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

Jedes der beiden positionierten Elemente wird mit dem Anchor-Element assoziiert, indem sein Anchor-Name als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements gesetzt wird. Beide erhalten auch eine `fixed` Positionierung, wodurch sie **Anchor-positionierte Elemente** werden. Die positionierten Elemente werden dann mithilfe einer Kombination aus inset-Eigenschaften, wie oben gesehen, und {{cssxref("align-self")}} / {{cssxref("justify-self")}} Eigenschaften mit einem Wert von `anchor-center` an verschiedenen Stellen relativ zum Anchor positioniert, wodurch die Infobox in den Inline-/Blockrichtungen jeweils zentral zum Anchor ausgerichtet wird.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen mit dem Anchor verbunden sind.

{{ EmbedLiveSample("Multiple positioned elements", "100%", "225") }}

### Mehrere Anchor-Namen

Dieses Beispiel zeigt, wie ein Anchor-Element mehr als einen Anchor-Namen haben kann.

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

Das CSS ist ebenfalls dasselbe wie im vorherigen Beispiel, außer dass wir zwei durch Kommas getrennte Namen im `anchor-name`-Eigenschaftswert des Ziels enthalten und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen mit dem Anchor verbunden sind.

{{ EmbedLiveSample("Multiple anchor names", "100%", "225") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
