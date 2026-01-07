---
title: anchor-name
slug: Web/CSS/Reference/Properties/anchor-name
l10n:
  sourceCommit: 8300697ca75ca1e77175912110d4fe9ef48cb0bb
---

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
  - : Der Standardwert. Das Setzen von `anchor-name: none` auf ein Element bedeutet, dass es nicht als Ankerelement definiert ist. Wenn das Element zuvor als Anker definiert war und mit einem positionierten Element verbunden war, hebt das Setzen von `anchor-name: none` die Verknüpfung der beiden auf.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte willkürliche benutzerdefinierte Bezeichner, die den Namen oder die Namen des Ankers definieren, die dann in einer {{cssxref("position-anchor")}}-Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Assoziation, eine Position und einen Ort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten eine explizite Assoziation.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>`-Ankernamen, die über die `anchor-name`-Eigenschaft darauf gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor`-Eigenschaft eines Elements gesetzt wird, dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist, sind die beiden Elemente verbunden. Die beiden Elemente werden miteinander verknüpft, indem ein Ort auf dem verbundenen Element relativ zum Anker festgelegt wird, wodurch es zu einem "anker-positionierten" Element wird.

Wenn mehrere Ankerelemente den gleichen Ankernamen auf sich gesetzt haben und dieser Name im Wert der `position-anchor`-Eigenschaft eines positionierten Elements referenziert wird, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge verbunden, das diesen Ankernamen hat.

Die Ankerpositionierung ändert den [Enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) von anker-positionierten Elementen, sodass seine `position` relativ zu seinem Anker und nicht zum nächsten positionierten Vorfahrenelement ist.

Um ein positioniertes Element an einem bestimmten Ort relativ zu einem Ankerelement zu befestigen und zu platzieren, ist eine Ankerpositionierungsfunktion erforderlich, beispielsweise die {{cssxref("anchor()")}}-Funktion (im Wert einer {{Glossary("inset_properties", "Einfügeigenschaft")}} gesetzt) oder die {{cssxref("position-area")}}-Eigenschaft.

Sie können ein positioniertes Element nicht mit einem Ankerelement verbinden, wenn der Anker verborgen ist, beispielsweise mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements ist, weil {{cssxref("content-visibility", "content-visibility: hidden")}} darauf gesetzt ist.

Die `anchor-name`-Eigenschaft wird auf allen Elementen unterstützt, die eine Hauptbox erzeugen. Das bedeutet, dass [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), einschließlich generierter Inhalte, die mithilfe von {{cssxref("::before")}} und {{cssxref("::after")}} erstellt wurden, und UI-Features wie der [`range` input](/de/docs/Web/HTML/Reference/Elements/input/range) Thumb ({{cssxref("::-webkit-slider-thumb")}}) Ankerelemente sein können. Pseudo-Elemente sind implizit an dasselbe Element verankert wie das Ursprungselement des Pseudo-Elements, es sei denn, anders angegeben.

Für weitere Informationen zu Ankereigenschaften und deren Verwendung siehe das [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul und den [CSS Ankerpositionierungs verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)-Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel verknüpft ein positioniertes Element mit einem Anker, indem das Element rechts vom Anker positioniert wird.

#### HTML

Wir geben zwei {{htmlelement("div")}}-Elemente an; ein Ankerelement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

Wir fügen auch etwas Fülltext um die beiden `<div>`-Elemente herum hinzu, um das {{htmlelement("body")}} höher zu machen, sodass es scrollt.

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

Zuerst deklarieren wir das Anker-`<div>` als Ankerelement, indem wir einen Ankernamen darauf über die `anchor-name`-Eigenschaft setzen:

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

Wir assoziieren das zweite `<div>` mit dem Ankerelement, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements setzen. Dann setzen wir:

- die {{cssxref("position")}}-Eigenschaft auf `fixed`, wodurch es zu einem _anker-positionierten Element_ wird, damit es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- die {{cssxref("left")}}- und {{cssxref("top")}}-Eigenschaften auf {{cssxref("anchor()")}}-Funktionen mit den Werten `right` und `top` jeweils. Dadurch wird die linke Kante der Infobox bündig mit der rechten Kante ihres Ankers und ihre obere Kante relativ zur oberen Kante ihres Ankers positioniert.
- die {{cssxref("margin-left")}} auf `10px`, wodurch Abstand zwischen dem anker-positionierten Element und seinem Anker entsteht.

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

Scrollen Sie die Seite, um zu sehen, wie die Infobox relativ zum Anker positioniert ist. Während der Anker nach oben scrollt, bewegt sich das positionierte Element mit ihm.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Mehrere positionierte Elemente

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker verbinden können.

#### HTML

Das HTML ist das gleiche wie im vorherigen Beispiel, außer dass wir mehrere positionierte Element-`<div>`s mit unterschiedlichen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s haben, um sie zu identifizieren.

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

Wir deklarieren das Anker-`<div>` als Ankerelement unter Verwendung der `anchor-name`-Eigenschaft, indem wir ihm wie zuvor einen Ankernamen geben.

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

Jedes der beiden positionierten Elemente wird durch Festlegen seines Ankernamens als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements mit dem Ankerelement verbunden. Beide haben auch eine `fixed`-Positionierung und werden so zu **anker-positionierten Elementen**. Die positionierten Elemente werden dann an verschiedenen Stellen relativ zum Anker positioniert, indem eine Kombination aus Einfügeigenschaften wie oben und {{cssxref("align-self")}} / {{cssxref("justify-self")}}-Eigenschaften mit einem Wert von `anchor-center` verwendet wird, um die Infobox im Inline-/Block-Richtung zentral zum Anker auszurichten.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen mit dem Anker verbunden sind.

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

Das CSS ist auch dasselbe wie im vorherigen Beispiel, außer dass wir zwei durch Kommas getrennte Namen im Wert der `anchor-name`-Eigenschaft des Ziels einfügen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen mit dem Anker verbunden sind.

{{ EmbedLiveSample("Multiple anchor names", "100%", "225") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("anchor-scope")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-Attribut
- [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [CSS Ankerpositionierungs verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
