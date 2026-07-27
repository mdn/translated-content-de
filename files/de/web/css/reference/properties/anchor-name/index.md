---
title: "`anchor-name` CSS property"
short-title: anchor-name
slug: Web/CSS/Reference/Properties/anchor-name
l10n:
  sourceCommit: 071fd0613b1b5728d2d83845ea11512cb615067a
---

Die **`anchor-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, ein Element als **Ankerelement** zu definieren, indem ihm ein oder mehrere identifizierende **Ankernamen** zugewiesen werden. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}}-Eigenschaft eines positionierten Elements gesetzt werden, um es mit dem Anker zu verknüpfen.

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

Diese Eigenschaft wird als `<dashed-ident>` oder das Schlüsselwort `none` spezifiziert:

- `none`
  - : Der Standardwert. Das Setzen von `anchor-name: none` auf einem Element bedeutet, dass es nicht als Ankerelement definiert ist. Wenn das Element zuvor als Anker definiert und mit einem positionierten Element verknüpft war, hebt das Setzen von `anchor-name: none` die Verknüpfung auf.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte beliebige benutzerdefinierte Kennungen, die den Namen oder die Namen des Ankers definieren, die dann in einer {{cssxref("position-anchor")}}-Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verknüpfung, eine Position und einen Ort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten eine explizite Verknüpfung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die Eigenschaft `anchor-name` darauf gesetzt werden. Wenn einer dieser Namen dann als Wert der Eigenschaft `position-anchor` eines Elements gesetzt wird, dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist, sind die beiden Elemente verknüpft. Die beiden Elemente werden durch das Setzen eines Ortes auf das verknüpfte Element relativ zum Anker miteinander verbunden, wodurch es zu einem "anker-positionierten" Element wird.

Wenn mehrere Ankerelemente denselben Ankernamen auf sich gesetzt haben und dieser Name durch den Wert der `position-anchor`-Eigenschaft eines positionierten Elements referenziert wird, wird das positionierte Element mit dem letzten Ankerelement mit diesem Ankernamen in der Quellreihenfolge verknüpft.

Die Ankerpositionierung ändert den [enthältenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) von anker-positionierten Elementen, sodass seine `position` relativ zu seinem Anker anstatt zum nächstgelegenen positionierten Vorfahr-Element wird.

Um ein positioniertes Element relativ zu einem Ankerelement an einem bestimmten Ort zu verbinden und zu platzieren, ist eine Ankerpositionierungsfunktion erforderlich, wie die {{cssxref("anchor()")}}-Funktion (innerhalb eines {{Glossary("inset_properties", "Inset-Eigenschaftswerts")}} gesetzt) oder die {{cssxref("position-area")}}-Eigenschaft.

Sie können ein positioniertes Element nicht mit einem Ankerelement verknüpfen, wenn der Anker ausgeblendet ist, wie mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements ist, weil darauf {{cssxref("content-visibility", "content-visibility: hidden")}} gesetzt ist.

Die Eigenschaft `anchor-name` wird bei allen Elementen unterstützt, die eine Hauptbox erzeugen. Das bedeutet, dass [Pseudoelemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), einschließlich generierter Inhalte, die mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellt wurden, und Benutzeroberflächenfunktionen wie der [`range` input](/de/docs/Web/HTML/Reference/Elements/input/range) Schieberegler ({{cssxref("::-webkit-slider-thumb")}}) Ankerelemente sein können. Pseudoelemente sind implizit an dasselbe Element verankert wie das Pseudoelement des Ursprungelements, sofern nicht anders angegeben.

Für mehr Informationen zu Ankerfunktionen und deren Verwendung, siehe das Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und den [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel verbindet ein positioniertes Element mit einem Anker und positioniert das Element rechts vom Anker.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente; ein Ankerelement mit der Klasse `anchor` und ein positioniertes Element mit der Klasse `infobox`.

Wir fügen auch etwas Fülltext um die beiden `<div>`-Elemente hinzu, um den {{htmlelement("body")}} höher zu machen, damit er scrollt.

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

Zuerst deklarieren wir das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen über die Eigenschaft `anchor-name` darauf setzen:

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

Wir verknüpfen das zweite `<div>` mit dem Ankerelement, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements setzen. Anschließend setzen wir das positionierte Element:

- Die Eigenschaft {{cssxref("position")}} auf `fixed`, wodurch es zu einem _anker-positionierten Element_ wird, das relativ zur Position des Ankers auf der Seite positioniert werden kann.
- Die Eigenschaften {{cssxref("left")}} und {{cssxref("top")}} zu {{cssxref("anchor()")}}-Funktionen mit den Werten `right` und `top` jeweils. Dies positioniert die linke Kante der Infobox bündig zur rechten Kante ihres Ankers und ihre obere Kante relativ zur oberen Kante ihres Ankers.
- {{cssxref("margin-left")}} auf `10px`, wodurch ein Abstand zwischen dem anker-positionierten Element und seinem Anker entsteht.

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

Scrollen Sie die Seite, um zu sehen, wie die Infobox relativ zum Anker positioniert ist. Während der Anker nach oben scrollt, bewegt sich das positionierte Element mit.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Mehrere positionierte Elemente

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker verknüpfen können.

#### HTML

Das HTML ist dasselbe wie beim vorherigen Beispiel, außer dass wir nun mehrere positionierte `<div>`-Elemente mit verschiedenen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s haben, um sie zu identifizieren.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement mit der Eigenschaft `anchor-name` und geben ihm wie zuvor einen Ankernamen.

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

Jedes der beiden positionierten Elemente wird mit dem Ankerelement durch Setzen seines Ankernamens als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements verknüpft. Beide erhalten außerdem eine `fixed` Positionierung, womit sie **anker-positionierte Elemente** werden. Die positionierten Elemente werden dann an verschiedenen Positionen relativ zum Anker mit einer Kombination aus Inset-Eigenschaften, wie oben zu sehen, und {{cssxref("align-self")}} / {{cssxref("justify-self")}}-Eigenschaften mit einem Wert von `anchor-center` positioniert, wodurch die Infobox zentral in der Inline-/Blockrichtung zum Anker ausgerichtet wird.

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

Dieses Beispiel zeigt, wie ein Ankerelement mehr als einen Ankermannamen haben kann.

#### HTML

Das HTML ist dasselbe wie beim vorherigen Beispiel.

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

Das CSS ist ebenfalls identisch mit dem vorherigen Beispiel, außer dass wir zwei durch Komma getrennte Namen im Wert der `anchor-name`-Eigenschaft des Zielobjekts einschließen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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
- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
