---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann in den Werten der [inset-Eigenschaft](#properties_that_accept_anchor_function_values) eines **anchor-positionierten** Elements verwendet werden und gibt einen Längenwert relativ zur Position der Kanten des zugeordneten Ankerelements zurück.

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

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Ankerelements, relativ zu dem die Seite des Elements positioniert werden soll. Dies ist ein `<dashed-ident>`-Wert. Wenn er nicht angegeben wird, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert oder dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor()`-Funktion verknüpft ein Element nicht mit einem Anker; es positioniert lediglich das Element relativ zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/position-anchor) CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut ist weiterhin erforderlich, um die Verknüpfung herzustellen.

- `<anchor-side>`

  - : Gibt die Seite des Ankers oder die relative Entfernung von der `start`-Seite an, relativ zu welcher das Element positioniert wird. Wenn ein physikalischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der `inset`-Eigenschaft ist, auf die `anchor()` gesetzt ist, wird der Fallback-Wert verwendet. Gültige Werte sind:

    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `start`
      - : Der logische Anfang des [Enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements entlang der Achse der `inset`-Eigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des Enthaltenden Blocks des Ankerelements entlang der Achse der `inset`-Eigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der `inset`-Eigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der `inset`-Eigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `center`
      - : Der Mittelpunkt der Achse der `inset`-Eigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung, in Prozent, vom Anfang des Inhalts des Elements entlang der Achse der `inset`-Eigenschaft an, auf die die `anchor()`-Funktion gesetzt ist.

    Das CSS-Ankerpositionierung-Modul gibt zwei zusätzliche `<anchor-side>`-Werte an, `inside` und `outside`, die noch nicht implementiert sind.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, den die Funktion auflösen sollte, wenn die `anchor()`-Funktion ansonsten nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht die Positionierung eines Elements relativ zu den Kanten eines Ankerelements. Sie ist nur innerhalb von {{Glossary("inset_properties", "inset-Eigenschaft")}}-Werten, die auf absolut oder fixierte positionierte Elemente gesetzt sind, gültig.

Sie gibt einen `<length>`-Wert zurück, der die Entfernung zwischen der in der `inset`-Eigenschaft spezifizierten Kante des anchor-positionierten Elements und der durch den gewählten `<anchor-side>`-Wert spezifizierten Kante des Ankerelements angibt. Da sie einen `<length>` zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}}, usw.

Existiert kein Anker mit dem durch `<anchor-name>` spezifizierten Namen oder hat das positionierte Element keinen Anker, der ihm zugeordnet ist (d.h. über die {{cssxref("position-anchor")}}-Eigenschaft), wird der erste Parameter als ungültig betrachtet und es wird der Fallback-`<length-percentage>`-Wert verwendet, falls vorhanden. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf das positionierte Element gesetzt wurde, aber kein Anker ihm zugeordnet war, würde der Fallback-Wert verwendet werden, sodass `top` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung, siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor()`-Funktionswerte akzeptieren

Die CSS-{{Glossary("inset_properties", "inset-Eigenschaften")}}, die eine `anchor()`-Funktion als Wertkomponente akzeptieren, umfassen:

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

### Kompatibilität von `inset`-Eigenschaften und `<anchor-side>`-Werten

Wenn eine `anchor()`-Funktion innerhalb eines `inset`-Eigenschaftswertes verwendet wird, muss der `<anchor-side>`-Parameter, der innerhalb der `anchor()`-Funktion angegeben wird, mit der Achse, auf der die `inset`-Eigenschaft liegt, kompatibel sein.

Dies bedeutet, dass physikalische `<anchor-side>`-Werte innerhalb der Werte von physikalischen `inset`-Eigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Richtungsachse wie die `<anchor-side>` hat. Mit anderen Worten, die `top`- und `bottom`-Seiten sind innerhalb der `left`- und `right`-Eigenschaftswerte nicht gültig, und die `left`- und `right`-Seiten sind innerhalb `top`- und `bottom`-Eigenschaftswerte nicht gültig. Zum Beispiel, `top: anchor(bottom)` ist in Ordnung, da sie beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wurde, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhält. Wenn kein Fallback vorhanden ist, verhält sich die `inset`-Eigenschaft, als ob sie auf `auto` gesetzt wäre.

Man kann logische `<anchor-side>`-Werte innerhalb sowohl logischer als auch physikalischer `inset`-Eigenschaften verwenden, da logische `<anchor-side>`-Werte relativ zur betreffenden Achse der `inset`-Eigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder physikalisch ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle einwandfrei.

Die Sache wird komplizierter, wenn physikalische `<anchor-side>`-Parameter innerhalb logischer `inset`-Eigenschaftswerte verwendet werden, da die physikalische Seite zur Achse passen muss, auf die sich die `inset`-Eigenschaft bezieht, innerhalb des aktuellen Schreibmodus. Zum Beispiel:

- In einem horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, daher wird `inset-block-end: anchor(bottom)` funktionieren, aber `inset-block-end: anchor(left)` ist inkompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wird, wird der berechnete Wert `50px` sein, und das positionierte Element wird `50px` vom Blockende (unten) seines nächsten positionierten Vorfahren oder des Viewports, abhängig vom gesetzten `position`-Wert, positioniert.
- In einem vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder von links nach rechts, daher wird `inset-block-end: anchor(left)` funktionieren, aber `inset-block-end: anchor(top)` ist inkompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wird, wird der berechnete Wert `50px` sein, und das positionierte Element wird `50px` vom Blockende (links oder rechts, abhängig vom Schreibmodus) seines nächsten positionierten Vorfahren oder des Viewports, abhängig vom gesetzten `position`-Wert, positioniert.

Um das Potenzial für Verwirrung bei diesen Werten zu minimieren, wird empfohlen, logische `inset`-Eigenschaften mit logischen `<anchor-side>`-Werten zu verwenden und physikalische `inset`-Eigenschaften mit physikalischen `<anchor-side>`-Werten. Sie sollten die Verwendung logischer Werte vorziehen, wann immer möglich, da sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} geeignet sind.

Die `center`- und `<percentage>`-Werte sind innerhalb der `anchor()`-Funktion bei allen logischen und physikalischen `inset`-Eigenschaften gültig.

Die folgende Tabelle listet die `inset`-Eigenschaften und die `<anchor-side>`-Parameterwerte auf, die mit ihnen kompatibel sind. Wir haben nur die Langform-`inset`-Eigenschaften aufgelistet; diese umfassen die Kurzform-`inset`-Eigenschaftswerte.

| `Inset`-Eigenschaft                         | Kompatibler `<anchor-side>`-Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn die `anchor()`-Funktion auf eine Seite des Standardankers verweist, können Sie eine {{cssxref("margin")}} hinzufügen, um bei Bedarf Abstand zwischen den Kanten des Ankers und dem positionierten Element zu schaffen. Alternativ können Sie die `anchor()`-Funktion innerhalb einer {{cssxref("calc()")}}-Funktion verwenden, um Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements und fügt dann einen Abstand hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logisch blockierte Endkante des positionierten Elements `10px` von der logisch blockierten Anfangskante des Ankerelements:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie unterschiedliche `<anchor-name>`-Werte innerhalb der `anchor()`-Funktion der verschiedenen `inset`-Eigenschaften desselben Elements angeben (siehe [Element relativ zu mehreren Ankern positioniert](#element_relativ_zu_mehreren_ankern_positioniert) unten). Dies kann verwendet werden, um nützliche Funktionen wie Ziehgriffe an den Ecken eines positionierten Elements zu erstellen, die verwendet werden können, um es in der Größe zu ändern.

Obwohl ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem einzigen Anker verbunden, der über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut) definiert wird. Dies ist der Anker, mit dem das Element beim Scrollen der Seite gescrollt wird; er kann auch verwendet werden, um zu steuern, wann das Element [konditionell versteckt](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Allgemeine Verwendung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines anchor-positionierten Elements auf die Höhe seines Ankers einzustellen, indem die unteren und oberen Kanten auf die unteren und oberen Kanten des Ankers gesetzt werden. Die `anchor()`-Funktion innerhalb einer `calc()`-Funktion wird dann verwendet, um das anchor-positionierte Element von seinem Anker zu verschieben.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element hinzu, das wir als Anker festlegen werden, und ein {{htmlelement("p")}}-Element, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name`-Wert des Ankerelements als Wert der `position-anchor`-Eigenschaft des positionierten Elements, um die Elemente zu verknüpfen, und dann setzen wir drei `inset`-Eigenschaften auf das anchor-positionierte Element. Die ersten beiden positionieren die Oberkante des Elements bündig mit der Oberkante des Ankers und die Unterkante bündig mit der Unterkante des Ankers. In der dritten `inset`-Eigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` von der rechten Kante des Ankers zu positionieren.

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

### Vergleich verschiedener `anchor-side`-Werte

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaften positioniert ist, die mit `anchor()`-Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, die es ermöglichen, die `<anchor-side>`-Werte innerhalb dieser `anchor()`-Funktionen zu variieren, sodass Sie sehen können, welche Auswirkungen sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als das Ankerelement bzw. das positionierte Element gedacht, das wir damit verknüpfen werden.

Wir fügen auch etwas Fülltext um die beiden `<div>`-Elemente hinzu, um den {{htmlelement("body")}} höher zu machen, damit er scrollen kann. Dieses Beispiel enthält auch zwei {{htmlelement("select")}}-Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>`-Werte ermöglichen, um das positionierte Element zu platzieren. Wir haben den Fülltext und die `<select>`-Elemente aus Gründen der Kürze ausgeblendet.

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

Wir erklären das `anchor`-`<div>`-Element als Ankerelement, indem wir ihm einen Ankernamen über die {{cssxref("anchor-name")}}-Eigenschaft zuweisen. Dann verknüpfen wir es mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}}-Eigenschaft setzen. `top: anchor(--myAnchor bottom)` positioniert die Oberkante der Infobox bündig mit der Unterkante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig mit der rechten Kante ihres Ankers positioniert. Dies bietet eine Ausgangsposition, die überschrieben wird, wenn andere Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir hören auf das `change`-Ereignis, das auftritt, wenn ein neuer `<anchor-side>`-Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion innerhalb der relevanten `inset`-Eigenschaft (`top` oder `left`) der Infobox.

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

### Element relativ zu mehreren Ankern positioniert

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des anchor-positionierten Elements festzulegen. Die Anker können über Tastatursteuerungen bewegt oder gezogen werden, wodurch das positionierte Element in der Größe verändert wird.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}}-Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse von `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um ihnen zu ermöglichen, Tastaturfokus zu erhalten.

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

Die Anker erhalten jeweils einen anderen {{cssxref("anchor-name")}}-Wert, einen {{cssxref("position")}}-Wert von `absolute` und unterschiedliche `inset`-Werte, um die Anker in einer rechteckigen Formation zu positionieren.

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

Das anchor-positionierte Element, mit seiner `position` als `fixed`, wird über seine {{cssxref("position-anchor")}}-Eigenschaft mit einem Anker verknüpft. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>`-Werte mit den `anchor()`-Funktionen gesetzt auf seine `inset`-Eigenschaften enthalten sind. In diesem Fall haben wir {{cssxref("percentage")}}-Werte für den `<anchor-side>`-Parameter verwendet, um die Entfernung vom Anfang der Achse der `inset`-Eigenschaft anzugeben, auf die die Funktion gesetzt ist.

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
        elem.style.left = elem.offsetLeft + 5 + "px";
        break;
      case "a":
        elem.style.left = elem.offsetLeft - 5 + "px";
        break;
      case "w":
        elem.style.top = elem.offsetTop - 5 + "px";
        break;
      case "s":
        elem.style.top = elem.offsetTop + 5 + "px";
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
    elem.style.top = elem.offsetTop - pos2 + "px";
    elem.style.left = elem.offsetLeft - pos1 + "px";
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
    elem.style.top = elem.offsetTop - pos2 + "px";
    elem.style.left = elem.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```

#### Ergebnis

Das positionierte Element wird relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder wechseln Sie zu ihnen mit der Tabulatortaste und verwenden Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, und <kbd>D</kbd>-Tasten, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie sich dadurch ihre Position ändert und somit die Fläche des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptnachweis und nicht zur Verwendung im Produktivcode gedacht. Zu seinen Mängeln gehört, dass das Beispiel bricht, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Versuch von Fallbacks und konditionelles Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
