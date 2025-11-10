---
title: anchor-name
slug: Web/CSS/Reference/Properties/anchor-name
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`anchor-name`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein Element als **Ankerelement** zu definieren, indem ihm ein oder mehrere identifizierende **Ankernamen** gegeben werden. Jeder Name kann dann als Wert der {{cssxref("position-anchor")}} Eigenschaft eines positionierten Elements gesetzt werden, um es mit dem Anker zu verknüpfen.

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

  - : Der Standardwert. Wenn `anchor-name: none` auf ein Element gesetzt ist, bedeutet dies, dass es nicht als Ankerelement definiert ist. Wenn das Element zuvor als Anker definiert war und mit einem positionierten Element verknüpft war, trennt `anchor-name: none` die beiden Elemente.

- {{cssxref("dashed-ident")}}
  - : Einer oder mehrere durch Kommas getrennte beliebige benutzerdefinierte Identifikatoren, die den Namen oder die Namen des Ankers definieren, die dann in einer {{cssxref("position-anchor")}} Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verknüpfung, eine Position und eine Lage. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten eine explizite Verknüpfung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die mittels der `anchor-name` Eigenschaft auf es gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft eines Elements festgelegt wird, das seine {{cssxref("position")}} auf `absolute` oder `fixed` hat, werden die beiden Elemente verknüpft. Die beiden Elemente werden durch Setzen einer Lage auf das verknüpfte Element relativ zum Anker aneinander gebunden, wodurch es ein "ankerpositioniertes" Element wird.

Wenn mehrere Ankerelemente denselben Ankarnamen auf sich gesetzt haben und dieser Name durch den Wert der `position-anchor` Eigenschaft eines positionierten Elements referenziert wird, wird das positionierte Element mit dem letzten Ankerelement mit diesem Ankarnamen in der Quellreihenfolge verknüpft.

Die Ankerpositionierung ändert den [umschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) von ankerpositionierten Elementen, wobei ihre `position` relativ zu ihrem Anker und nicht zu dem nächstgelegenen positionierten Vorfahren-Element gesetzt wird.

Um ein positioniertes Element an einer bestimmten Stelle relativ zu einem Ankerelement zu verankern und zu platzieren, ist ein Ankerpositionierungsmerkmal erforderlich, wie z. B. die {{cssxref("anchor()")}} Funktion (innerhalb eines {{Glossary("inset_properties", "Werts der inset Eigenschaft")}}) oder die {{cssxref("position-area")}} Eigenschaft.

Sie können ein positioniertes Element nicht mit einem Ankerelement verknüpfen, wenn der Anker versteckt ist, z. B. mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements ist, weil er {{cssxref("content-visibility", "content-visibility: hidden")}} hat.

Die `anchor-name` Eigenschaft wird auf allen Elementen unterstützt, die ein Hauptelement erzeugen. Das bedeutet, dass [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), einschließlich generierter Inhalte, die mit {{cssxref("::before")}} und {{cssxref("::after")}} erstellt wurden, und UI-Elemente wie der Daumen des [`range` Eingabe](/de/docs/Web/HTML/Reference/Elements/input/range) ({{cssxref("::-webkit-slider-thumb")}}) Ankerelemente sein können. Pseudo-Elemente sind implizit an dasselbe Element verankert, wie das Element, von dem das Pseudo-Element stammt, es sei denn, es wird anders angegeben.

Für weitere Informationen zu Ankerfunktionen und deren Anwendung siehe das [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verankert ein positioniertes Element an einem Anker und positioniert das Element rechts vom Anker.

#### HTML

Wir geben zwei {{htmlelement("div")}} Elemente an: ein Anker-Element mit der Klasse `anchor` und ein positioniertes Element mit der Klasse `infobox`.

Wir fügen auch einige Fülltexte um die beiden `<div>`s herum hinzu, um den {{htmlelement("body")}} höher zu machen, damit er scrollt.

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

Zuerst erklären wir das `anchor` `<div>` als ein Ankerelement, indem wir einen Ankarnamen darauf setzen mittels der `anchor-name` Eigenschaft:

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

Wir assoziieren das zweite `<div>` mit dem Ankerelement, indem wir seinen Ankarnamen als Wert der `position-anchor` Eigenschaft des positionierten Elements setzen. Wir setzen dann das positionierte Element:

- {{cssxref("position")}} Eigenschaft auf `fixed`, um es zu einem _ankerpositionierten Element_ zu machen, sodass es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften auf {{cssxref("anchor()")}} Funktionen mit Werten von `right` und `top` jeweils. Dies positioniert die linke Kante der Infobox bündig zur rechten Kante ihres Ankers und die obere Kante relativ zur oberen Kante ihres Ankers.
- {{cssxref("margin-left")}} auf `10px`, um einen Abstand zwischen dem ankerpositionierten Element und seinem Anker zu schaffen.

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

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker verknüpfen können.

#### HTML

Das HTML ist das gleiche wie im vorherigen Beispiel, nur dass wir diesmal mehrere positionierte Element-`<div>`s mit unterschiedlichen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s haben, um sie zu identifizieren.

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

Wir deklarieren das `anchor` `<div>` als ein Ankerelement, indem wir die `anchor-name` Eigenschaft verwenden und ihm wie zuvor einen Ankarnamen geben.

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

Jedes der beiden positionierten Elemente wird mit dem Ankerelement verknüpft, indem sein Ankarnamen als `position-anchor` Eigenschaftswert des positionierten Elements gesetzt wird. Beide werden ebenfalls mit `fixed` Positionierung versehen, was sie zu **ankerpositionierten Elementen** macht. Die positionierten Elemente werden dann an verschiedenen Orten relativ zum Anker positioniert, indem eine Kombination von Insets Eigenschaften wie oben gesehen und {{cssxref("align-self")}} / {{cssxref("justify-self")}} Eigenschaften mit einem Wert von `anchor-center` verwendet wird, um die Infobox zentriert in der Inline-/Blockrichtung relativ zum Zentrum des Ankers auszurichten.

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

Dieses Beispiel zeigt, wie ein Ankerelement mehr als einen Ankarnamen haben kann.

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

Das CSS ist auch dasselbe wie im vorherigen Beispiel, außer dass wir zwei kommagetrennte Namen im Wert der `anchor-name` Eigenschaft des Ziels einfügen, und jedes positionierte Element hat einen unterschiedlichen Wert für `position-anchor`.

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
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
