---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: 3ce249ccdac927d8cd55fd7bdeb4afda448c15b3
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann innerhalb der Werteigenschaften eines **verankerten** Elements für die [inset-Eigenschaft](#properties_that_accept_anchor_function_values) verwendet werden und gibt einen Längenwert zurück, der sich relativ zur Position der Kanten des zugehörigen Ankerelements befindet.

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

Die Syntax der `anchor()`-Funktion ist wie folgt:

```plain
anchor(<anchor-name> <anchor-side>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert wird oder dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor()`-Funktion ordnet einem Element keinen Anker zu; es positioniert das Element nur relativ zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/position-anchor) CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut wird weiterhin benötigt, um die Zuordnung zu erstellen.

- `<anchor-side>`

  - : Gibt die Seite des Ankers oder den relativen Abstand von der `start`-Seite an, zu der das Element relativ positioniert wird. Wenn ein physikalischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der inset-Eigenschaft ist, auf die `anchor()` gesetzt ist, wird der Ersatzwert verwendet. Gültige Werte umfassen:

    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `inside`
      - : Die gleiche Seite wie die inset-Eigenschaft.
    - `outside`
      - : Die gegenüberliegende Seite der inset-Eigenschaft.
    - `start`
      - : Der logische Anfang des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements entlang der Achse der inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des umgebenden Blocks des Ankerelements entlang der Achse der inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `center`
      - : Das Zentrum der Achse der inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt den Abstand als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der inset-Eigenschaft an, auf der die `anchor()`-Funktion gesetzt ist.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, auf den die Funktion zurückgreifen soll, falls die `anchor()`-Funktion ansonsten nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht die Positionierung eines Elements relativ zu den Kanten eines Ankerelements. Sie ist nur innerhalb von Werten der {{Glossary("inset_properties", "inset-Eigenschaft")}} gültig, die auf absolut oder fix positionierte Elemente gesetzt sind.

Sie gibt einen `<length>`-Wert zurück, der den Abstand zwischen der durch den inset-Wert angegebenen Seite des verankerten Elements und der durch den gewählten `<anchor-side>`-Wert angegebenen Seite des Ankerelements angibt. Da es einen `<length>` zurückgibt, kann es innerhalb anderer [CSS-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn kein Anker mit dem durch den `<anchor-name>` angegebenen Namen existiert oder das positionierte Element mit keinem Anker assoziiert ist (d.h. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig betrachtet und der Fallback-`<length-percentage>`-Wert wird verwendet, falls einer vorhanden ist. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf dem positionierten Element angegeben wäre, aber kein Anker damit assoziiert ist, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhalten würde.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die [CSS-Anker-Positionierungsmodul-Startseite](/de/docs/Web/CSS/CSS_anchor_positioning) und die [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung.

### Eigenschaften, die `anchor()` Funktion Werte akzeptieren

Die CSS {{Glossary("inset_properties", "inset-Eigenschaften")}}, die eine `anchor()` Funktion als Wertkomponente akzeptieren, umfassen:

- {{cssxref("top")}}
- {{cssxref("left")}}
- {{cssxref("bottom")}}
- {{cssxref("right")}}
- {{cssxref("inset")}} Kurzform
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block")}} Kurzform
- {{cssxref("inset-inline-start")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline")}} Kurzform

### Kompatibilität der inset-Eigenschaften und `<anchor-side>` Werte

Wenn Sie eine `anchor()` Funktion innerhalb eines inset-Wert einer Eigenschaft verwenden, muss der innerhalb der `anchor()` Funktion angegebene `<anchor-side>` Parameter mit der Achse kompatibel sein, auf der sich die inset-Eigenschaft befindet.

Das bedeutet, dass physikalische `<anchor-side>` Werte innerhalb der Werte physikalischer inset-Eigenschaften verwendet werden können, wenn die Eigenschaft die gleiche Achsrichtung wie der `<anchor-side>` hat. Anders ausgedrückt, die `top`- und `bottom`-Seiten sind innerhalb der `left`- und `right`-Eigenschaftswerte nicht gültig und die `left`- und `right`-Seiten sind innerhalb der `top`- und `bottom`-Eigenschaftswerte nicht gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wäre, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhalten würde. Wenn kein Fallback vorhanden ist, verhält sich die inset-Eigenschaft, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>` Werte sowohl innerhalb logischer als auch physikalischer inset-Eigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der inset-Eigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle einwandfrei.

Die Situation wird komplizierter, wenn physikalische `<anchor-side>` Parameter innerhalb logischer inset Wert-Eigenschaften verwendet werden, da die physikalische Seite mit der Achse übereinstimmen muss, der die inset-Eigenschaft innerhalb des aktuellen Schreibmodus entspricht. Zum Beispiel:

- In einem horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, jedoch ist `inset-block-end: anchor(left)` nicht kompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wäre, wäre der berechnete Wert `50px`, und das positionierte Element würde `50px` vom Blockende (unten) seines nächstgelegenen positionierten Vorfahrs oder der Ansichtsfläche positioniert werden, abhängig vom gesetzten Wert der `position`-Eigenschaft.
- In einem vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist nicht kompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, wäre der berechnete Wert `50px`, und das positionierte Element würde `50px` vom Blockende (links oder rechts je nach Schreibmodus) seines nächstgelegenen positionierten Vorfahrs oder der Ansichtsfläche positioniert werden.

Um mögliche Verwirrungen mit diesen Werten zu minimieren, wird empfohlen, logische inset Eigenschaften mit logischen `<anchor-side>` Werten und physikalische inset Eigenschaften mit physikalischen `<anchor-side>` Werten zu verwenden. Logische Werte sollten wann immer möglich bevorzugt werden, da sie besser für die {{Glossary("Internationalisierung", "Internationalisierung")}} sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()` Funktion innerhalb aller logischen und physikalischen inset Eigenschaften gültig.

Die folgende Tabelle listet die inset Eigenschaften und die `<anchor-side>` Parameterwerte auf, die mit ihnen kompatibel sind. Lediglich die Langschreibweisen der inset Eigenschaften sind aufgeführt; diese umfassen die Kurzform der inset Eigenschaftswerte.

| Inset Eigenschaft                           | Kompatibler `<anchor-side>` Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn die `anchor()` Funktion sich auf eine Seite des Standardankers bezieht, können Sie eine {{cssxref("margin")}} hinzufügen, um bei Bedarf einen Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()` Funktion innerhalb einer {{cssxref("calc")}} Funktion einschließen, um einen Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann einen Rand hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Anfangskante des Ankerelements entfernt:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie innerhalb der `anchor()` Funktion verschiedener inset Eigenschaften auf demselben Element unterschiedliche `<anchor-name>` Werte angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionen wie Ziehgriffe an den Ecken eines positionierten Elements zu erstellen, die zum Ändern der Größe verwendet werden können.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, wird es immer nur dem einzelnen Anker zugeordnet, der über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut) definiert wird. Dies ist der Anker, mit dem das Element beim Scrollen der Seite scrollt; es kann auch verwendet werden, um zu steuern, wann das Element [bedingt verborgen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines verankerten Elements auf die Höhe seines Ankers zu setzen, indem die unteren und oberen Kanten auf die unteren und oberen Kanten des Ankers gesetzt werden. Die `anchor()`-Funktion wird dann innerhalb einer `calc()`-Funktion verwendet, um das verankerte Element von seinem Anker abzusetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element ein, das wir als unseren Anker setzen werden, und ein {{htmlelement("p")}} Element, das wir relativ zu diesem Anker positionieren:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements als den Wert der `position-anchor` Eigenschaft des positionierten Elements, um die Elemente zuzuordnen, und setzen dann drei inset Eigenschaften auf das verankerte Element. Die ersten beiden positionieren die obere Kante des Elements bündig zur oberen Kante des Ankers und die untere Kante bündig zur unteren Kante des Ankers. In der dritten inset Eigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` zur rechten Kante des Ankers zu positionieren.

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

### Vergleich verschiedener Anker-Seitenwerte

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mit `anchor()`-Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, die es ermöglichen, die `<anchor-side>` Werte innerhalb dieser `anchor()`-Funktionen zu variieren, sodass die Auswirkungen angezeigt werden können.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als Ankerelement und das verankerte Element vorgesehen, die wir damit assoziieren werden.

Wir fügen außerdem etwas Fülltext um die beiden `<div>` Elemente herum ein, um den {{htmlelement("body")}} größer zu machen, damit er scrollt. Dieses Beispiel enthält auch zwei {{htmlelement("select")}} Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>` Werte ermöglichen, um das positionierte Element zu platzieren. Wir haben den Fülltext und die `<select>` Elemente der Kürze halber ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als ein Ankerelement, indem wir einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft darauf setzen. Wir assoziieren es dann mit dem positionierten Element, indem wir den gleichen Wert für dessen {{cssxref("position-anchor")}} Eigenschaft setzen. `top: anchor(--myAnchor bottom)` positioniert die obere Kante des Infoboxes bündig zur unteren Kante seines Ankers, während `left: anchor(right)` deren linke Kante bündig zur rechten Kante seines Ankers positioniert. Dies gibt eine Ausgangsposition, die überschrieben wird, wenn andere Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir hören auf das `change` Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion innerhalb der betreffenden inset Eigenschaft (`top` oder `left`) des Infobox-Werts.

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

Wählen Sie verschiedene Werte aus den Dropdown-Menüs, um zu sehen, wie sie die Positionierung der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element positioniert relativ zu mehreren Ankern

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecke des verankerten Elements festzulegen. Die Anker können über Tastatursteuerungen verschoben oder gezogen werden, um die Größe des positionierten Elements zu ändern.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen bereitzustellen. Das letzte `<div>` hat eine Klasse von `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um ihnen die Aufnahme des Tastaturfokus zu ermöglichen.

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

Die Anker erhalten jeweils unterschiedliche {{cssxref("anchor-name")}} Werte, einen {{cssxref("position")}} Wert von `absolute` und verschiedene inset Werte, um die Anker in einer rechteckigen Formation zu positionieren.

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

Das verankerte Element, mit seiner `position` auf `fixed` gesetzt, wird einem Anker über seine {{cssxref("position-anchor")}} Eigenschaft zugeordnet. Es wird relativ zu zwei Ankern positioniert, indem innerhalb der `anchor()`-Funktionen auf seinen inset Eigenschaften zwei verschiedene `<anchor-name>` Werte enthalten sind. In diesem Fall haben wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet und den Abstand vom Anfang der Achse der inset Eigenschaft angegeben, auf der die Funktion gesetzt ist.

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

Das positionierte Element wird relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder tabben Sie zu ihnen und verwenden Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> Tasten, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie sich ihre Position ändert und folglich die Fläche des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptnachweis und nicht zur Verwendung im Produktionscode vorgesehen. Zu seinen Mängeln gehört, dass das Beispiel fehlschlägt, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
