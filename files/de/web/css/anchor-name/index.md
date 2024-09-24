---
title: anchor-name
slug: Web/CSS/anchor-name
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`anchor-name`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht die Definition eines Elements als **Ankerelement** durch Zuweisung eines oder mehrerer identifizierender **Ankernamen**. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}}-Eigenschaft eines positionierten Elements eingestellt werden, um es mit dem Anker zu verbinden.

## Syntax

```css
/* Einzelne Werte */
anchor-name: none;
anchor-name: --name;

/* Mehrere Werte */
anchor-name: --name, --another-name;

/* Globale Werte */
anchor-name: inherit;
anchor-name: initial;
anchor-name: revert;
anchor-name: revert-layer;
anchor-name: unset;
```

### Werte

- `none`

  - : Der Standardwert. Das Setzen von `anchor-name: none` auf einem Element bedeutet, dass es nicht als Ankerelement definiert ist. Wenn das Element zuvor als Anker definiert und mit einem positionierten Element verknüpft war, löst das Setzen von `anchor-name: none` die Verbindung zwischen den beiden.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte benutzerdefinierte Bezeichner, die den Namen oder die Namen des Ankers definieren, welche dann in einer {{cssxref("position-anchor")}}-Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Eigenschaften: eine Assoziation, eine Position und eine Lage. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten die Assoziation.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>`-Ankernamen, die ihm über die Eigenschaft `anchor-name` zugewiesen werden. Wird einer dieser Namen dann als Wert der Eigenschaft `position-anchor` eines Elements eingestellt, dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt wurde, werden die beiden Elemente verbunden. Die beiden Elemente werden verknüpft, indem eine Position relativ zum Anker auf dem verbundenen Element festgelegt wird, wodurch es zu einem "anker-positionierten" Element wird.

Wenn mehrere Ankerelemente denselben Ankernamen auf sich gesetzt haben und dieser Name im Wert der Eigenschaft `position-anchor` eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Ankerelement mit diesem Ankernamen in der Quellordnung verbunden.

Ankerpositionierung ändert den [umgebenden Block](/de/docs/Web/CSS/Containing_block) von anker-positionierten Elementen, sodass sich ihre `position` relativ zu ihrem Anker anstatt zu ihrem nächstgelegenen positionierten Vorfahrenelement verhält.

Um ein positioniertes Element an einer bestimmten Stelle relativ zu einem Ankerelement zu verbinden und zu platzieren, ist eine Ankerpositionierungsfunktion erforderlich, wie die {{cssxref("anchor()")}}-Funktion (innerhalb eines {{glossary("inset properties", "inset property's")}}-Werts gesetzt) oder die Eigenschaft {{cssxref("position-area")}}.

Sie können ein positioniertes Element nicht mit einem Ankerelement verbinden, wenn der Anker versteckt ist, etwa durch {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, weil es {{cssxref("content-visibility", "content-visibility: hidden")}} auf sich gesetzt hat.

Die Eigenschaft `anchor-name` wird auf allen Elementen unterstützt, die ein Hauptbox-Element generieren. Das bedeutet, dass [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), einschließlich generiertem Inhalt, der mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellt wurde, und UI-Funktionen wie der [`range` input](/de/docs/Web/HTML/Element/input/range)-Schieber ({{cssxref("::-webkit-slider-thumb")}}) Ankerelemente sein können. Pseudo-Elemente sind implizit an dasselbe Element verankert wie das Ursprungs-Element des Pseudo-Elements, es sei denn, es wird anders angegeben.

Weitere Informationen zu Ankerfunktionen und deren Verwendung finden Sie auf der [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und im [Verwenden von CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verknüpft ein positioniertes Element mit einem Anker, das Element wird rechts vom Anker positioniert.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente; ein Ankerelement mit einer Klasse `anchor` und ein positioniertes Element mit einer Klasse `infobox`.

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

Wir verbinden das zweite `<div>` mit dem Ankerelement, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements einstellen. Dann setzen wir das positionierte Element auf:

- {{cssxref("position")}} zu `fixed`, wodurch es in ein _anker-positioniertes Element_ umgewandelt wird, sodass es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- {{cssxref("left")}} und {{cssxref("top")}} auf {{cssxref("anchor()")}}-Funktionen mit den Werten `right` und `top` jeweils. Dadurch wird die linke Kante der Infobox bündig zur rechten Kante ihres Ankers positioniert und die obere Kante relativ zur oberen Kante ihres Ankers.
- {{cssxref("margin-left")}} auf `10px`, um Platz zwischen dem anker-positionierten Element und seinem Anker zu schaffen.

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

Scrollen Sie die Seite, um zu sehen, wie die Infobox relativ zum Anker positioniert ist. Wenn der Anker nach oben scrollt, bewegt sich das positionierte Element zusammen mit ihm.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Mehrere positionierte Elemente

Dieses Beispiel demonstriert, wie mehrere positionierte Elemente mit einem Anker verknüpft werden können.

#### HTML

Das HTML ist dasselbe wie im vorherigen Beispiel, außer dass wir diesmal mehrere positionierte `<div>`-Elemente mit unterschiedlichen [`id`](/de/docs/Web/HTML/Global_attributes/id)s haben, um sie zu identifizieren.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement unter Verwendung der Eigenschaft `anchor-name` und vergeben ihm wie zuvor einen Ankernamen.

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

Jedes der beiden positionierten Elemente wird mit dem Ankerelement verbunden, indem sein Ankername als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements gesetzt wird. Beide werden ebenfalls fest positioniert, wodurch sie **anker-positionierte Elemente** werden. Die positionierten Elemente werden dann an verschiedenen Stellen relativ zum Anker mit einer Kombination aus inset-Eigenschaften wie oben und den {{cssxref("align-self")}} / {{cssxref("justify-self")}}-Eigenschaften mit einem Wert von `anchor-center` positioniert. Dadurch wird die Infobox in der Inline-/Blockrichtung mittig zum Anker zentriert ausgerichtet.

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

Das CSS ist auch dasselbe wie im vorherigen Beispiel, außer dass wir zwei durch Kommas getrennte Namen im Ankerziel der Eigenschaft `anchor-name` einfügen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwenden von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
