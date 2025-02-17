---
title: anchor-name
slug: Web/CSS/anchor-name
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}{{seecompattable}}

Die **`anchor-name`**-Eigenschaft [CSS](/de/docs/Web/CSS) ermöglicht es, ein Element als **Ankerelement** zu definieren, indem ihm ein oder mehrere identifizierende **Ankernamen** zugewiesen werden. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}}-Eigenschaft eines positionierten Elements gesetzt werden, um es mit dem Anker zu verbinden.

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

  - : Der Standardwert. Wenn `anchor-name: none` auf ein Element gesetzt wird, bedeutet dies, dass es nicht als Ankerelement definiert ist. Falls das Element zuvor als Anker definiert und mit einem positionierten Element verbunden war, trennt die Einstellung von `anchor-name: none` diese Verbindung.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte beliebige benutzerdefinierte Bezeichner, die den Namen oder die Namen des Ankers definieren, die dann in einer {{cssxref("position-anchor")}}-Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, erfordert das positionierte Element drei Merkmale: eine Verbindung, eine Position und einen Ort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} stellen die Verbindung her.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>`-Ankernamen, die über die Eigenschaft `anchor-name` gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor`-Eigenschaft eines Elements gesetzt wird, dessen {{cssxref("position")}} auf `absolute` oder `fixed` eingestellt ist, werden die beiden Elemente verbunden. Die beiden Elemente sind durch das Festlegen eines Ortes des assoziierten Elements relativ zum Anker "geankert", wodurch es zu einem "Anker-positionierten" Element wird.

Wenn mehrere Ankerelemente denselben Ankernamen haben und dieser Name als Wert der `position-anchor`-Eigenschaft eines positionierten Elements genutzt wird, wird dieses positionierte Element mit dem letzten Ankerelement mit diesem Ankernamen in der Quellreihenfolge verbunden.

Die Anker-Positionierung ändert den [Enthält-Block](/de/docs/Web/CSS/CSS_display/Containing_block) von Anker-positionierten Elementen, wodurch ihre `position` relativ zu ihrem Anker, statt zum nächsten positionierten Vorfahrenelement, wird.

Um ein positioniertes Element an einem bestimmten Ort relativ zu einem Ankerelement zu verankern und zu platzieren, ist eine Anker-Positionierungsfunktion erforderlich, wie z. B. die {{cssxref("anchor()")}}-Funktion (innerhalb eines {{Glossary("inset_properties", "Werts einer früheren Eigenschaft")}}) oder die Eigenschaft {{cssxref("position-area")}}.

Es ist nicht möglich, ein positioniertes Element mit einem Ankerelement zu verbinden, wenn der Anker verborgen ist, z. B. mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker zu den [übersprungenen Inhalten](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements gehört, weil {{cssxref("content-visibility", "content-visibility: hidden")}} darauf gesetzt ist.

Die `anchor-name`-Eigenschaft wird für alle Elemente unterstützt, die eine Hauptbox generieren. Das bedeutet, dass [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), einschließlich generierter Inhalte, die mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellt wurden, sowie UI-Funktionen wie der Schieberegler-Thumb eines [`range`-Inputs](/de/docs/Web/HTML/Element/input/range) ({{cssxref("::-webkit-slider-thumb")}}), Ankerelemente sein können. Pseudo-Elemente sind implizit an dasselbe Element wie das Ursprungselement des Pseudo-Elements verankert, sofern nicht anders angegeben.

Weitere Informationen zu Ankerfunktionen und deren Verwendung finden Sie auf der Modul-Startseite [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) und im Leitfaden [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verankert ein positioniertes Element an einem Anker und positioniert das Element rechts vom Anker.

#### HTML

Wir definieren zwei {{htmlelement("div")}}-Elemente: ein Ankerelement mit der Klasse `anchor` und ein positioniertes Element mit der Klasse `infobox`.

Wir fügen außerdem etwas Fülltext um die beiden `<div>`-Elemente hinzu, um den {{htmlelement("body")}} höher zu machen, damit er scrollen kann.

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

Wir deklarieren zuerst das `anchor`-`<div>` als Ankerelement, indem wir ihm über die Eigenschaft `anchor-name` einen Ankernamen zuweisen:

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

Wir verbinden das zweite `<div>` mit dem Ankerelement, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements festlegen. Anschließend setzen wir die folgenden Eigenschaften für das positionierte Element:

- {{cssxref("position")}} auf `fixed`, wodurch es zu einem _Anker-positionierten Element_ wird, damit es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- {{cssxref("left")}} und {{cssxref("top")}} auf {{cssxref("anchor()")}}-Funktionen mit den Werten `right` und `top`. Dadurch wird die linke Kante der Infobox bündig zur rechten Kante ihres Ankers und die obere Kante relativ zur oberen Kante ihres Ankers positioniert.
- {{cssxref("margin-left")}} auf `10px`, wodurch ein Abstand zwischen dem Anker-positionierten Element und seinem Anker entsteht.

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

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker verbinden können.

#### HTML

Das HTML ist das gleiche wie im vorherigen Beispiel, außer dass wir diesmal mehrere positionierte `<div>`-Elemente mit unterschiedlichen [`id`](/de/docs/Web/HTML/Global_attributes/id)s hinzugefügt haben, um sie zu identifizieren.

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

Wir deklarieren das `anchor`-`<div>` als Ankerelement mit der Eigenschaft `anchor-name` und geben ihm wie zuvor einen Ankernamen.

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

Jedes der beiden positionierten Elemente wird dem Ankerelement zugeordnet, indem sein Ankernamenwert als {{cssxref("position-anchor")}}-Eigenschaftswert des positionierten Elements gesetzt wird. Beide erhalten auch eine `fixed`-Positionierung, wodurch sie **Anker positionierte Elemente** werden. Die positionierten Elemente werden dann an verschiedenen Stellen relativ zum Anker mithilfe einer Kombination aus inset-Eigenschaften und {{cssxref("align-self")}}- / {{cssxref("justify-self")}}-Eigenschaften mit einem Wert von `anchor-center` positioniert, wodurch die Infobox zentriert am Anker ausgerichtet wird.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen an den Anker angebunden sind.

{{ EmbedLiveSample("Multiple positioned elements", "100%", "225") }}

### Mehrere Ankernamen

Dieses Beispiel zeigt, wie ein Ankerelement mehrere Ankernamen haben kann.

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

Das CSS ist ebenfalls dasselbe wie im vorherigen Beispiel, außer dass wir zwei durch Kommas getrennte Namen in den Wert der `anchor-name`-Eigenschaft des Ziels aufnehmen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen an den Anker angebunden sind.

{{ EmbedLiveSample("Multiple anchor names", "100%", "225") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
- [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using)-Leitfaden
