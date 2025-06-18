---
title: anchor-name
slug: Web/CSS/anchor-name
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`anchor-name`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht die Definition eines Elements als **Ankerelement**, indem ihm ein oder mehrere identifizierende **Ankernamen** zugewiesen werden. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}} Eigenschaft eines positionierten Elements festgelegt werden, um es mit dem Anker zu verbinden.

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

  - : Der Standardwert. Wenn `anchor-name: none` für ein Element festgelegt wird, bedeutet das, dass es nicht als Ankerelement definiert ist. Wenn das Element vorher als Anker definiert war und mit einem positionierten Element assoziiert wurde, trennt `anchor-name: none` die beiden erneut.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte benutzerdefinierte Identifikatoren, die den Namen oder die Namen des Ankers definieren, der dann in einer {{cssxref("position-anchor")}} Eigenschaft referenziert werden kann.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Assoziation, eine Position und einen Standort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten eine explizite Assoziation.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die ihm über die `anchor-name` Eigenschaft zugewiesen werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft eines Elements festgelegt wird, dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist, werden die beiden Elemente miteinander verbunden. Die beiden Elemente werden durch die Festlegung eines Orts am assoziierten Element relativ zum Anker verbunden, wodurch es zu einem „anchor-positionierten“ Element wird.

Wenn mehrere Ankerelemente denselben Ankernamen haben und dieser Name im Wert der `position-anchor` Eigenschaft eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Ankerelement mit diesem Ankernamen in der Quellreihenfolge verbunden.

Die Ankerpositionierung ändert den [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) von anchor-positionierten Elementen, indem seine `position` relativ zu seinem Anker und nicht zu dem nächstgelegenen positionierten Vorelement wird.

Um ein positioniertes Element relativ zu einem Ankerelement an einem bestimmten Ort zu verankern und zu positionieren, ist ein Ankerpositionierungsmerkmal erforderlich, wie die {{cssxref("anchor()")}} Funktion (innerhalb eines {{Glossary("inset_properties", "inset property's")}} Wertes festgelegt) oder die {{cssxref("position-area")}} Eigenschaft.

Sie können ein positioniertes Element nicht mit einem Ankerelement assoziieren, wenn der Anker verborgen ist, wie z.B. bei {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, da es {{cssxref("content-visibility", "content-visibility: hidden")}} auf ihm gesetzt hat.

Die `anchor-name` Eigenschaft wird bei allen Elementen unterstützt, die eine Hauptbox erzeugen. Das bedeutet, dass [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), einschließlich erzeugter Inhalte, die mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellt werden, und UI-Features wie der [`range` input](/de/docs/Web/HTML/Reference/Elements/input/range) Daumen ({{cssxref("::-webkit-slider-thumb")}}) Ankerelemente sein können. Pseudoelemente sind implizit an dasselbe Element eines Pseudoelementes Ursprungsgebunden, es sei denn, es wird anders angegeben.

Für weitere Informationen über Ankermerkmale und deren Verwendung, siehe die [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Seite und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verankert ein positioniertes Element an einem Anker und platziert das Element rechts neben dem Anker.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente; ein Ankerelement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

Wir fügen auch etwas Fülltext um die beiden `<div>`s ein, um den {{htmlelement("body")}} höher zu machen, sodass er scrollt.

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

Zuerst deklarieren wir das `anchor` `<div>` als ein Ankerelement durch Festlegung eines Ankerns über die `anchor-name` Eigenschaft:

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

Wir assoziieren das zweite `<div>` mit dem Ankerelement, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements festlegen. Dann setzen wir die Eigenschaft des positionierten Elements:

- {{cssxref("position")}} Eigenschaft zu `fixed`, was es zu einem _anchor-positionierten Element_ macht, damit es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften zu {{cssxref("anchor()")}} Funktionen mit den Werten `right` beziehungsweise `top`. Dadurch wird die linke Kante des Infoboxs bündig zur rechten Kante seines Ankers positioniert und die obere Kante relativ zur oberen Kante seines Ankers.
- {{cssxref("margin-left")}} zu `10px`, wodurch ein Abstand zwischen dem ankerierten Element und seinem Anker entsteht.

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

Dieses Beispiel demonstriert, wie Sie mehrere positionierte Elemente mit einem Anker assoziieren können.

#### HTML

Das HTML ist dasselbe wie im vorherigen Beispiel, außer dass wir dieses Mal mehrere positionierte `div` Elemente mit unterschiedlichen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s haben, um sie zu identifizieren.

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

Wir erklären das `anchor` `<div>` als ein Ankerelement mithilfe der `anchor-name` Eigenschaft und geben ihm wie zuvor einen Ankernamen.

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

Jedes der beiden positionierten Elemente ist mit dem Ankerelement assoziiert, indem dessen Ankername als {{cssxref("position-anchor")}} Eigenschaftswert des positionierten Elements gesetzt wird. Beide haben auch `fixed` Positionierung, wodurch sie **anker-positionierte Elemente** sind. Die positionierten Elemente werden dann an verschiedenen Stellen relativ zum Anker positioniert, indem eine Kombination aus Inset-Eigenschaften wie oben gesehen und {{cssxref("align-self")}} / {{cssxref("justify-self")}} Eigenschaften mit einem Wert von `anchor-center` verwendet wird, das Infobox zentral zu dem Anker in den Inline/Block-Richtungen ausrichtet.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen am Anker hängen.

{{ EmbedLiveSample("Multiple positioned elements", "100%", "225") }}

### Mehrere Ankernamen

Dieses Beispiel demonstriert, wie ein Ankerelement mehr als einen Ankernen haben kann.

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

Das CSS ist ebenfalls dasselbe wie im vorherigen Beispiel, außer dass wir zwei durch Kommas getrennte Namen im Zielwert der `anchor-name` Eigenschaft einfügen und jedes positionierte Element hat einen anderen Wert für `position-anchor`.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen am Anker hängen.

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
