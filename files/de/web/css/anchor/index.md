---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann innerhalb der Werteigenschaften eines **anchor-positioned** Elements [inset property](#properties_that_accept_anchor_function_values) verwendet werden. Sie gibt einen Längenwert relativ zur Position der Kanten des zugehörigen Ankerelements zurück.

## Syntax

```css
/* side or percentage */
top: anchor(bottom);
top: anchor(50%);
top: calc(anchor(bottom) + 10px)
inset-block-end: anchor(start);

/* side of named anchor */
top: anchor(--myAnchor bottom);
inset-block-end: anchor(--myAnchor start);

/* side of named anchor with fallback */
top: anchor(--myAnchor bottom, 50%);
inset-block-end: anchor(--myAnchor start, 200px);
left: calc(anchor(--myAnchor right, 0%) + 10px);
```

### Parameter

Die Syntax der `anchor()` Funktion ist wie folgt:

```plain
anchor(<anchor-name> <anchor-side>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}
  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn er weggelassen wird, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert ist oder über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut dem Element zugeordnet ist.

    > [!NOTE]
    > Das Angabe eines `<anchor-name>` innerhalb einer `anchor()` Funktion stellt kein Element mit einem Anker in Verbindung; es positioniert das Element nur relativ zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/position-anchor) CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut ist weiterhin erforderlich, um die Verbindung zu erstellen.

- `<anchor-side>`
  - : Gibt die Seite des Ankers oder die relative Entfernung von der `start`-Seite an, zu der das Element relativ positioniert wird. Wenn ein physischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der `anchor()` gesetzt ist, wird der Fallback-Wert verwendet. Gültige Werte sind:
    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `inside`
      - : Die gleiche Seite wie die Inset-Eigenschaft.
    - `outside`
      - : Die gegenüberliegende Seite der Inset-Eigenschaft.
    - `start`
      - : Der logische Anfang des [containing block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()` Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des Containing-Blocks des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()` Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()` Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()` Funktion gesetzt ist.
    - `center`
      - : Das Zentrum der Achse der Inset-Eigenschaft, auf der die `anchor()` Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung als Prozentsatz vom Beginn des Inhalts des Elements entlang der Achse der Inset-Eigenschaft an, auf der die `anchor()` Funktion gesetzt ist.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, den die Funktion auflösen sollte, wenn die `anchor()` Funktion sonst nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()` Funktion ermöglicht die Positionierung eines Elements relativ zu den Kanten eines Ankerelements. Sie ist nur innerhalb von {{Glossary("inset_properties", "inset property")}} Werten festgelegter absoluter oder fester Positionselemente gültig.

Sie gibt einen `<length>` Wert zurück, der die Entfernung zwischen der von der Inset-Werteigenschaft angegebenen Seite des anchor-positionierten Elements und der durch den ausgewählten `<anchor-side>` Wert angegebenen Seite des Ankerelements angibt. Da sie einen `<length>` zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}}, usw.

Wenn kein Anker mit dem durch den `<anchor-name>` angegebenen Namen existiert oder wenn das positionierte Element keinen Anker zugeordnet hat (d.h. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig betrachtet und der Fallback `<length-percentage>` Wert verwendet, falls verfügbar. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf dem positionierten Element angegeben wäre, aber kein Anker damit verbunden ist, würde der Fallback-Wert verwendet werden, sodass `top` einen berechneten Wert von `50px` hätte.

Für detaillierte Informationen über Ankerfunktionen und die Verwendung sehen Sie die [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor()` Funktionswerte akzeptieren

Die CSS {{Glossary("inset_properties", "Inset-Eigenschaften")}}, die eine `anchor()` Funktion als Wertkomponente akzeptieren, umfassen:

- {{cssxref("top")}}
- {{cssxref("left")}}
- {{cssxref("bottom")}}
- {{cssxref("right")}}
- {{cssxref("inset")}} Kurzschreibweise
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block")}} Kurzschreibweise
- {{cssxref("inset-inline-start")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline")}} Kurzschreibweise

### Kompatibilität von Inset-Eigenschaften und `<anchor-side>` Werten

Bei der Verwendung einer `anchor()` Funktion innerhalb eines Inset-Wertelements muss der `<anchor-side>` Parameter innerhalb der `anchor()` Funktion kompatibel mit der Achse sein, auf der sich die Inset-Eigenschaft befindet.

Das bedeutet, dass physikalische `<anchor-side>` Werte innerhalb der Werte physischer Inset-Eigenschaften verwendet werden können, wenn die Eigenschaft die gleiche Achsenrichtung hat wie `<anchor-side>`. In anderen Worten sind die `top` und `bottom` Seiten innerhalb der `left` und `right` Eigenschaftswerte nicht gültig, und die `left` und `right` Seiten sind innerhalb `top` und `bottom` Eigenschaftswerte nicht gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da sie beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wäre, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` hätte. Wenn kein Fallback vorhanden ist, verhält sich die Inset-Eigenschaft, als ob sie auf `auto` gesetzt wäre.

Sie können logische `<anchor-side>` Werte sowohl innerhalb logischer als auch physikalischer Inset-Eigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der Inset-Eigenschaft sind, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle einwandfrei.

Die Situation wird komplizierter, wenn physische `<anchor-side>` Parameter innerhalb logischer Inset-Werteigenschaften verwendet werden, da die physische Seite mit der Achse übereinstimmen muss, zu der die Inset-Eigenschaft im aktuellen Schreibmodus relevant ist. Zum Beispiel:

- In einem horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist nicht kompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wäre, würde der berechnete Wert `50px` sein, und das positionierte Element würde `50px` vom Blockende (unten) seines nächsten positionierten Vorfahrens oder des Viewports positioniert, abhängig vom gesetzten `position` Wert.
- In einem vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist nicht kompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, würde der berechnete Wert `50px` sein, und das positionierte Element würde `50px` vom Blockende (links oder rechts je nach Schreibmodus) seines nächsten positionierten Vorfahrens oder des Viewports positioniert, abhängig vom gesetzten `position` Wert.

Um Verwirrung mit diesen Werten zu minimieren, wird empfohlen, logische Inset-Eigenschaften mit logischen `<anchor-side>` Werten und physikalische Inset-Eigenschaften mit physischen `<anchor-side>` Werten zu verwenden. Sie sollten die Verwendung von logischen Werten wann immer möglich bevorzugen, da diese besser für {{Glossary("Internationalization", "Internationalisierung")}} geeignet sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()` Funktion in allen logischen und physischen Inset-Eigenschaften gültig.

Die folgende Tabelle listet die Inset-Eigenschaften auf und die `<anchor-side>` Parameterwerte, die mit ihnen kompatibel sind. Wir haben nur die Langhandschreibweise der Inset-Eigenschaften aufgeführt; diese umfassen die Kurzschreibweise der Inset-Eigenschaften.

| Inset-Eigenschaft                           | Kompatibler `<anchor-side>` Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| All                                         | `center`                                                                                                                                       |
| All                                         | `<percentage>`                                                                                                                                 |
| `top` and `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` and `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` and `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` and `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn die `anchor()` Funktion sich auf eine Seite des Standardankers bezieht, können Sie ein {{cssxref("margin")}} einschließen, um Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()` Funktion innerhalb einer {{cssxref("calc")}} Funktion verwenden, um Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements und fügt dann einen Rand hinzu, um etwas Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logische Endkante des positionierten Elements `10px` von der logischen Anfangskante des Ankerelements:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie verschiedene `<anchor-name>` Werte innerhalb der `anchor()` Funktion verschiedener Inset-Eigenschaften auf demselben Element angeben (siehe [Element positioned relative to multiple anchors](#element_relativ_zu_mehreren_ankern_positioniert) unten). Dies kann verwendet werden, um nützliche Funktionen zu erstellen, wie z.B. Ziehpunkte an den Ecken eines positionierten Elements, die verwendet werden können, um seine Größe zu ändern.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem einzelnen Anker verbunden, der über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut) definiert ist. Dies ist der Anker, mit dem das Element scrollt, wenn die Seite scrollt; es kann auch verwendet werden, um zu steuern, wann das Element [bedingt ausgeblendet](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Allgemeine Verwendung

In diesem Beispiel wird die `anchor()` Funktion verwendet, um die Höhe eines anchor-positionierten Elements auf die Höhe seines Anker zu setzen, indem die unteren und oberen Kanten auf die unteren und oberen Kanten des Ankers gesetzt werden. Die `anchor()` Funktion wird innerhalb einer `calc()` Funktion verwendet, um das anchor-positionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element ein, das als unser Anker festgelegt wird, und ein {{htmlelement("p")}} Element, das wir relativ zu diesem Anker positionieren:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements als Wert der `position-anchor` Eigenschaft des positionierten Elements, um die Elemente zu verbinden, und setzen dann drei Inset-Eigenschaften auf dem anchor-positionierten Element. Die ersten beiden positionieren die obere Kante des Elements bündig mit der oberen Kante des Ankers und die untere Kante bündig mit der unteren Kante des Ankers. In der dritten Inset-Eigenschaft wird die `anchor()` Funktion innerhalb einer `calc()` Funktion verwendet, um die linke Kante des Elements `10px` zur rechten Kante des Ankers zu positionieren.

```css
.anchor {
  anchor-name: --infobox;
  background: palegoldenrod;
  font-size: 3em;
  width: fit-content;
  border: 1px solid goldenrod;
}

.positionedElement {
  position: absolute;
  position-anchor: --infobox;
  margin: 0;
  top: anchor(top);
  left: calc(anchor(right) + 10px);
  bottom: anchor(bottom);
  background-color: olive;
  border: 1px solid darkolivegreen;
}
```

#### Ergebnisse

{{EmbedLiveSample("common_usage", "100%", '240')}}

### Vergleich verschiedener `<anchor-side>` Werte

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mit `anchor()` Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, die es Ihnen ermöglichen, die `<anchor-side>` Werte innerhalb dieser `anchor()` Funktionen zu variieren, damit Sie sehen können, welchen Effekt sie haben.

#### HTML

Wir geben zwei {{htmlelement("div")}} Elemente an, eines mit einer Klasse `anchor` und eines mit einer Klasse `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, das wir damit verbinden möchten.

Wir fügen auch etwas Fülltext um die beiden `<div>` Elemente hinzu, um den {{htmlelement("body")}} höher zu machen, damit es scrollbar wird. Dieses Beispiel enthält auch zwei {{htmlelement("select")}} Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>` Werte ermöglichen, um das positionierte Element zu setzen. Wir haben den Fülltext und die `<select>` Elemente zur Kürze versteckt.

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

```html hidden
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

<form>
  <div>
    <label for="top-anchor-side">
      Choose a vertical <code>anchor()</code> value:
    </label>
    <select id="top-anchor-side" name="top-anchor-side">
      <option value="top">top: anchor(top)</option>
      <option value="bottom" selected>top: anchor(bottom)</option>
      <option value="start">top: anchor(start)</option>
      <option value="end">top: anchor(end)</option>
      <option value="center">top: anchor(center)</option>
      <option value="0%">top: anchor(0%)</option>
      <option value="25%">top: anchor(25%)</option>
      <option value="50%">top: anchor(50%)</option>
      <option value="75%">top: anchor(75%)</option>
      <option value="100%">top: anchor(100%)</option>
    </select>
  </div>
  <div>
    <label for="left-anchor-side">
      Choose a horizontal <code>anchor()</code> value:
    </label>
    <select id="left-anchor-side" name="left-anchor-side">
      <option value="left">left: anchor(left)</option>
      <option value="right" selected>left: anchor(right)</option>
      <option value="self-start">left: anchor(self-start)</option>
      <option value="self-end">left: anchor(self-end)</option>
      <option value="center">left: anchor(center)</option>
      <option value="0%">left: anchor(0%)</option>
      <option value="25%">left: anchor(25%)</option>
      <option value="50%">left: anchor(50%)</option>
      <option value="75%">left: anchor(75%)</option>
      <option value="100%">left: anchor(100%)</option>
    </select>
  </div>
</form>
```

#### CSS

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft festlegen. Wir verbinden es dann mit dem positionierten Element, indem wir den gleichen Wert für seine {{cssxref("position-anchor")}} Eigenschaft setzen. `top: anchor(--myAnchor bottom)` positioniert die obere Kante des Infokastens bündig mit der unteren Kante seines Ankers, während `left: anchor(right)` dessen linke Kante bündig mit der rechten Kante seines Ankers positioniert. Dies bietet eine Anfangsposition, die überschrieben wird, wenn verschiedene Werte aus den Dropdown-Menüs ausgewählt werden.

```css hidden
.anchor {
  font-size: 2rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

body {
  width: 80%;
  margin: 0 auto;
}

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
  position: fixed;
  top: 0;
  right: 2px;
}

select {
  display: block;
  margin-top: 5px;
}

form div:last-child {
  margin-top: 10px;
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
  anchor-name: --myAnchor;
}

.infobox {
  position: fixed;
  position-anchor: --myAnchor;
  top: anchor(--myAnchor bottom);
  left: anchor(right);
}
```

#### JavaScript

Wir lauschen dem `change` Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()` Funktion innerhalb der relevanten Inset-Eigenschaft (`top` oder `left`) des Infokastens.

```js
const infobox = document.querySelector(".infobox");
const topSelect = document.querySelector("#top-anchor-side");
const leftSelect = document.querySelector("#left-anchor-side");

topSelect.addEventListener("change", (e) => {
  const anchorSide = e.target.value;
  infobox.style.top = `anchor(--myAnchor ${anchorSide})`;
});

leftSelect.addEventListener("change", (e) => {
  const anchorSide = e.target.value;
  infobox.style.left = `anchor(${anchorSide})`;
});
```

#### Ergebnis

Wählen Sie verschiedene Werte aus den Dropdown-Menüs aus, um zu sehen, wie sie die Positionierung des Infokastens beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element relativ zu mehreren Ankern positioniert

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die für die Festlegung der Position der oberen linken und unteren rechten Ecken des anchor-positionierten Elements verwendet werden. Die Anker können über Tastatursteuerung bewegt oder gezogen werden, wodurch das positionierte Element in der Größe angepasst wird.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben eine Klasse `anchor` und werden als Anker definiert; jeder hat eine einzelne `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um ihnen Tastaturfokus zu ermöglichen.

```html
<div id="anchor1" class="anchor" tabindex="0">⚓︎1</div>

<div id="anchor2" class="anchor" tabindex="0">⚓︎2</div>

<div class="infobox">
  <p>This is an information box.</p>
</div>
```

#### CSS

```css hidden
body {
  width: 150vw;
  height: 150vh;
}

.anchor {
  font-size: 1rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
  &:focus {
    background-color: hsl(60 100% 75%);
  }
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

Die Anker erhalten jeweils einen anderen {{cssxref("anchor-name")}} Wert, einen {{cssxref("position")}} Wert von `absolute` und verschiedene Inset-Werte, um die Anker in einer rechteckigen Formation zu positionieren.

```css
.anchor {
  position: absolute;
}

#anchor1 {
  anchor-name: --myAnchor1;
  top: 50px;
  left: 100px;
}

#anchor2 {
  anchor-name: --myAnchor2;
  top: 200px;
  left: 350px;
}
```

Das anchor-positionierte Element, dessen `position` auf `fixed` gesetzt ist, ist mit einem Anker über seine {{cssxref("position-anchor")}} Eigenschaft verbunden. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>` Werte mit den `anchor()` Funktionen auf seinen Inset-Eigenschaften gesetzt werden. In diesem Fall haben wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet, der den Abstand vom Anfang der Achse der Inset-Eigenschaft spezifiziert, auf der die Funktion gesetzt ist.

```css
.infobox {
  position-anchor: --myAnchor1;
  position: fixed;
  top: anchor(--myAnchor1 100%);
  left: anchor(--myAnchor1 100%);
  bottom: anchor(--myAnchor2 0%);
  right: anchor(--myAnchor2 0%);
}
```

```js hidden
// grab all the anchors and make each one draggable
const anchors = document.querySelectorAll(".anchor");
anchors.forEach((anchor) => makeDraggable(anchor));

function makeDraggable(elem) {
  let pos1, pos2, pos3, pos4;

  elem.onmousedown = dragMouseDown;
  elem.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "d":
        elem.style.left = `${elem.offsetLeft + 5}px`;
        break;
      case "a":
        elem.style.left = `${elem.offsetLeft - 5}px`;
        break;
      case "w":
        elem.style.top = `${elem.offsetTop - 5}px`;
        break;
      case "s":
        elem.style.top = `${elem.offsetTop + 5}px`;
        break;
    }
    e.preventDefault();
  });

  function elementMove(e) {
    console.dir(e);
    // calculate the new cursor position:
    pos1 = pos3 - e.offsetLeft;
    pos2 = pos4 - e.offsetTop;
    pos3 = e.offsetLeft;
    pos4 = e.offsetTop;
    // set the element's new position:
    elem.style.top = `${elem.offsetTop - pos2}px`;
    elem.style.left = `${elem.offsetLeft - pos1}px`;
  }

  function dragMouseDown(e) {
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the mouse moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elem.style.top = `${elem.offsetTop - pos2}px`;
    elem.style.left = `${elem.offsetLeft - pos1}px`;
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```

#### Ergebnis

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder Tab zu ihnen und verwenden Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, und <kbd>D</kbd> Tasten, um sie nach oben, unten, links und rechts zu verschieben. Sehen Sie, wie sich ihre Position ändert und dadurch die Fläche des positionierten Elements beeinflusst wird. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptnachweis und nicht zur Verwendung in Produktionscode gedacht. Zu seinen Schwächen gehört, dass das Beispiel fehlschlägt, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback options and conditional hiding for overflow](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
