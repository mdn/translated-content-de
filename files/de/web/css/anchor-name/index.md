---
title: anchor-name
slug: Web/CSS/anchor-name
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`anchor-name`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht es, ein Element als **Ankerelement** zu definieren, indem ihm ein oder mehrere identifizierende **Ankernamen** gegeben werden. Jeder dieser Namen kann dann als Wert der {{cssxref("position-anchor")}}-Eigenschaft eines positionierten Elements gesetzt werden, um es mit dem Anker zu verknüpfen.

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
  - : Der Standardwert. Wenn `anchor-name: none` auf ein Element gesetzt wird, bedeutet das, dass es nicht als Ankerelement definiert ist. Falls das Element zuvor als Anker und mit einem positionierten Element verknüpft war, wird durch die Einstellung `anchor-name: none` die Verknüpfung aufgehoben.

- {{cssxref("dashed-ident")}}
  - : Ein oder mehrere durch Kommas getrennte beliebige benutzerdefinierte Bezeichner, die den oder die Namen des Ankers definieren, die dann in einer {{cssxref("position-anchor")}}-Eigenschaft referenziert werden können.

## Beschreibung

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verknüpfung, eine Position und einen Ort. Die Eigenschaften `anchor-name` und {{cssxref("position-anchor")}} bieten eine explizite Verknüpfung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die `anchor-name`-Eigenschaft darauf gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor`-Eigenschaft eines Elements gesetzt wird, dessen {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist, sind die beiden Elemente verknüpft. Die beiden Elemente werden dadurch verbunden, dass ein Ort auf dem verknüpften Element relativ zum Anker gesetzt wird, wodurch es ein "ankerpositioniertes" Element wird.

Falls mehrere Ankerelemente denselben Ankernamen haben und dieser Name vom `position-anchor`-Eigenschaftswert eines positionierten Elements referenziert wird, wird dieses positionierte Element mit dem letzten Ankerelement mit diesem Ankernamen in der Quellreihenfolge verknüpft.

Durch Ankerpositionierung ändert sich der [Umgebungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) von ankerpositionierten Elementen, wodurch seine `position` relativ zu seinem Anker statt zum nächstliegenden positionierten Vorfahrelement wird.

Um ein positioniertes Element an einer bestimmten Position relativ zu einem Ankerelement zu platzieren und zu befestigen, wird eine Ankerpositionierungsfunktion benötigt, wie z.B. die {{cssxref("anchor()")}}-Funktion (die im Wert einer {{Glossary("inset_properties", "offset-Eigenschaft")}} festgelegt wird) oder die {{cssxref("position-area")}}-Eigenschaft.

Ein positioniertes Element kann nicht mit einem Ankerelement verknüpft werden, wenn der Anker versteckt ist, z.B. mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn der Anker Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, da auf ihm {{cssxref("content-visibility", "content-visibility: hidden")}} gesetzt ist.

Die `anchor-name`-Eigenschaft wird auf allen Elementen unterstützt, die eine Hauptbox generieren. Das bedeutet, dass [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), einschließlich durch {{cssxref("::before")}} und {{cssxref("::after")}} erzeugtem Inhalt, und UI-Features wie der Daumen des [`range` input](/de/docs/Web/HTML/Reference/Elements/input/range) ({{cssxref("::-webkit-slider-thumb")}}) Ankerelemente sein können. Pseudoelemente sind implizit an dasselbe Element verankert wie das Ursprungs-Element des Pseudoelements, es sei denn, es ist anders angegeben.

Für mehr Informationen zu Ankereigenschaften und deren Verwendung besuchen Sie die [CSS-Anker-Positionierungs](/de/docs/Web/CSS/CSS_anchor_positioning)-Modulseite und den [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)-Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel verankert ein positioniertes Element an einem Anker und positioniert das Element rechts vom Anker.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente; ein Ankerelement mit einer Klasse von `anchor` und ein positioniertes Element mit einer Klasse von `infobox`.

Wir fügen auch etwas Fülltext um die beiden `<div>`s herum ein, um den {{htmlelement("body")}} höher zu machen, damit dieser scrollt.

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

Zuerst deklarieren wir das `anchor` `<div>` als Ankerelement, indem wir ihm einen Ankernamen über die `anchor-name`-Eigenschaft geben:

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

Wir verknüpfen das zweite `<div>` mit dem Ankerelement, indem wir dessen Ankernamen als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements setzen. Dann setzen wir die Eigenschaften des positionierten Elements:

- Die {{cssxref("position")}}-Eigenschaft wird auf `fixed` gesetzt, was es zu einem _ankerpositionierten Element_ macht, damit es relativ zur Position des Ankers auf der Seite positioniert werden kann.
- Die {{cssxref("left")}}- und {{cssxref("top")}}-Eigenschaften werden auf {{cssxref("anchor()")}}-Funktionen mit den Werten `right` und `top` gesetzt. So wird die linke Kante der Infobox bündig mit der rechten Kante ihres Ankers und ihre obere Kante relativ zur oberen Kante ihres Ankers positioniert.
- {{cssxref("margin-left")}} auf `10px`, um Platz zwischen dem ankerpositionierten Element und seinem Anker zu schaffen.

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

Scrollen Sie die Seite, um zu sehen, wie die Infobox relativ zum Anker positioniert ist. Wenn der Anker sich nach oben bewegt, bewegt sich das positionierte Element mit.

{{ EmbedLiveSample("Basic usage", "100%", "225") }}

### Mehrere positionierte Elemente

Dieses Beispiel zeigt, wie Sie mehrere positionierte Elemente mit einem Anker verknüpfen können.

#### HTML

Das HTML ist das gleiche wie im vorherigen Beispiel, jedoch haben wir diesmal mehrere positionierte `<div>`-Elemente mit unterschiedlichen [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)s zur Identifikation.

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

Wir deklarieren das `anchor` `<div>` als ein Ankerelement mit der `anchor-name`-Eigenschaft und geben ihm wie zuvor einen Ankernamen.

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

Jedes der beiden positionierten Elemente wird mit dem Ankerelement verknüpft, indem sein Ankername als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements gesetzt wird. Beide erhalten auch eine `fixed`-Positionierung, was sie zu **ankerpositionierten Elementen** macht. Die positionierten Elemente werden dann an verschiedenen Stellen relativ zum Anker positioniert, wobei eine Kombination aus oberen Eigenschaften, wie oben gezeigt, sowie {{cssxref("align-self")}} / {{cssxref("justify-self")}}-Eigenschaften mit dem Wert `anchor-center` zur zentralen Ausrichtung der Infobox zur Mitte des Ankers in den Inline- und Blockrichtungen verwendet wird.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen am Anker verankert sind.

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

Das CSS ist auch das gleiche wie im vorherigen Beispiel, außer dass wir zwei durch Kommas getrennte Namen im Wert der `anchor-name`-Eigenschaft des Ziels einfügen und jedes positionierte Element einen anderen Wert für `position-anchor` hat.

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

Scrollen Sie die Seite, um zu sehen, wie beide Infoboxen am Anker verankert sind.

{{ EmbedLiveSample("Multiple anchor names", "100%", "225") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS-Anker-Positionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
