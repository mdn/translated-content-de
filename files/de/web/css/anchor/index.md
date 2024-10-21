---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: fe427ad725f3cf1add1299de3cadfbb2bb05ed14
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor()`**-[CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) kann innerhalb der Werte der [inset property](#properties_that_accept_anchor_function_values) eines **Anker-positionierten** Elements verwendet werden. Sie gibt einen Längenwert relativ zur Position der Kanten des zugehörigen Ankerelements zurück.

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

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft eines Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn dieser Wert weggelassen wird, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert oder dem Element über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor()`-Funktion verbindet kein Element mit einem Anker; es positioniert nur das Element relativ zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/position-anchor)-CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut ist weiterhin erforderlich, um die Verbindung herzustellen.

- `<anchor-side>`

  - : Gibt die Seite des Ankers an, oder die relative Entfernung von der `start`-Seite, zu der das Element relativ positioniert wird. Wenn ein physischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf der `anchor()` gesetzt ist, wird der Fallback-Wert verwendet. Gültige Werte sind:

    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements
    - `start`
      - : Der logische Anfang des [containing block](/de/docs/Web/CSS/Containing_block) des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des Containing Block des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `center`
      - : Die Mitte der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt die Distanz, als Prozentsatz, vom Anfang des Inhalts des Elements entlang der Achse der Inset-Eigenschaft an, auf der die `anchor()`-Funktion gesetzt ist.

    Das CSS-Ankerpositionierungsmodul spezifiziert zwei zusätzliche `<anchor-side>`-Werte, `inside` und `outside`, welche noch nicht implementiert sind.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, zu dem die Funktion aufgelöst werden sollte, falls die `anchor()`-Funktion sonst nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht es, ein Element relativ zu den Kanten eines Ankerelements zu positionieren. Sie ist nur innerhalb von {{Glossary("inset_properties", "inset property")}}-Werten gültig, die auf absolute oder fixierte Positionselemente gesetzt sind.

Sie gibt einen `<length>`-Wert an, der den Abstand zwischen der durch den Inset-Wert spezifizierten Ankerpositionierten Elementseite und der durch den gewählten `<anchor-side>`-Wert spezifizierten Ankerelementseite angibt. Da sie einen `<length>` zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/CSS_Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}}, usw.

Existiert kein Anker mit dem durch `<anchor-name>` spezifizierten Namen oder ist dem positionierten Element kein Anker zugeordnet (z.B. über die {{cssxref("position-anchor")}}-Eigenschaft), wird der erste Parameter als ungültig betrachtet und der Fallback-`<length-percentage>`-Wert verwendet, sofern einer verfügbar ist. Wenn beispielsweise `top: anchor(bottom, 50px)` auf dem positionierten Element spezifiziert wurde, aber kein Anker zugeordnet war, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhalten würde.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung, siehe die [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning)-Modulseite und den [Ankerpositionierung mit CSS verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using)-Leitfaden.

### Eigenschaften, die `anchor()`-Funktionswerte akzeptieren

Die CSS-{{Glossary("inset_properties", "inset properties")}}, die `anchor()`-Funktionen als Wertkomponente akzeptieren, sind:

- {{cssxref("top")}}
- {{cssxref("left")}}
- {{cssxref("bottom")}}
- {{cssxref("right")}}
- {{cssxref("inset")}} Shorthand
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block")}} Shorthand
- {{cssxref("inset-inline-start")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline")}} Shorthand

### Kompatibilität von Inset-Eigenschaften und `<anchor-side>`-Werten

Beim Verwenden einer `anchor()`-Funktion innerhalb eines Inset-Eigenschaftswertes muss der innerhalb der `anchor()`-Funktion angegebene `<anchor-side>`-Parameter mit der Achse kompatibel sein, auf der sich die Inset-Eigenschaft befindet.

Dies bedeutet, dass physische `<anchor-side>`-Werte innerhalb der Werte physischer Inset-Eigenschaften verwendet werden können, wenn die Eigenschaft die gleiche Achsenrichtung wie `<anchor-side>` hat. Mit anderen Worten, die `top`- und `bottom`-Seiten sind innerhalb der `left`- und `right`-Eigenschaftswerte nicht gültig, und die `left`- und `right`-Seiten sind innerhalb `top`- und `bottom`-Eigenschaftswerte nicht gültig. Beispielsweise ist `top: anchor(bottom)` in Ordnung, da beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wird, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhalten würde. Ist kein Fallback vorhanden, verhält sich die Inset-Eigenschaft, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>`-Werte sowohl innerhalb logischer als auch physischer Inset-Eigenschaften verwenden, da logische `<anchor-side>`-Werte relativ zur relevanten Achse der Inset-Eigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle einwandfrei.

Die Situation wird komplizierter, wenn physische `<anchor-side>`-Parameter innerhalb logischer Inset-Eigenschaftswerte verwendet werden, da die physische Seite mit der Achse übereinstimmen muss, die für die Inset-Eigenschaft im aktuellen Schreibmodus relevant ist. Zum Beispiel:

- In einem horizontalen Schreibmodus verläuft die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist unvereinbar. Wenn `inset-block-end: anchor(left, 50px)` gesetzt ist, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (untere Seite) seines nächsten positionierten Vorfahren oder des Viewports entfernt positioniert werden, abhängig vom gesetzten `position`-Wert.
- In einem vertikalen Schreibmodus verläuft die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist unvereinbar. Wenn `inset-block-end: anchor(top, 50px)` gesetzt ist, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (linke oder rechte Seite, abhängig vom Schreibmodus) seines nächsten positionierten Vorfahren oder des Viewports entfernt positioniert werden, abhängig vom gesetzten `position`-Wert.

Um das Potenzial für Verwirrung mit diesen Werten zu mindern, wird empfohlen, logische Inset-Eigenschaften mit logischen `<anchor-side>`-Werten und physische Inset-Eigenschaften mit physischen `<anchor-side>`-Werten zu verwenden. Sie sollten die Verwendung logischer Werte wann immer möglich bevorzugen, da sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} geeignet sind.

Die `center`- und `<percentage>`-Werte sind innerhalb der `anchor()`-Funktion in allen logischen und physischen Inset-Eigenschaften gültig.

Die folgende Tabelle listet die Inset-Eigenschaften und die `<anchor-side>`-Parameterwerte auf, die mit ihnen kompatibel sind. Wir haben nur die einzelnen Inset-Eigenschaftswerte aufgelistet; diese umfassen die Werte der Shorthand-Inset-Eigenschaften.

| Inset-Eigenschaft                           | Kompatibler `<anchor-side>`-Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn die `anchor()`-Funktion sich auf eine Seite des Standardankers bezieht, können Sie eine {{cssxref("margin")}} hinzufügen, um bei Bedarf einen Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()`-Funktion innerhalb einer {{cssxref("calc")}}-Funktion verwenden, um einen Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann einen Rand hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logische Blockendkante des positionierten Elements `10px` von der logischen Blockstartkante des Ankerelements entfernt:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie innerhalb der `anchor()`-Funktion in verschiedenen Inset-Eigenschaften auf demselben Element unterschiedliche `<anchor-name>`-Werte angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionen wie Ziehpunkte an den Ecken eines positionierten Elements zu erstellen, die verwendet werden können, um es zu skalieren.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem einzelnen Anker verbunden, der über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut) definiert ist. Dies ist der Anker, mit dem das Element beim Scrollen der Seite scrollen wird; es kann auch verwendet werden, um zu kontrollieren, wann das Element [bedingt ausgeblendet](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines Anker-positionierten Elements auf die Höhe seines Ankers zu setzen, indem die untere und obere Kante auf die untere und obere Kante des Ankers gesetzt werden. Die `anchor()`-Funktion wird dann innerhalb einer `calc()`-Funktion verwendet, um das Anker-positionierte Element von seinem Anker abzusetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element ein, welches wir als unseren Anker festlegen, und ein {{htmlelement("p")}}-Element, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name`-Wert des Ankerelements als den Wert der `position-anchor`-Eigenschaft des positionierten Elements, um die Elemente zu verknüpfen, und setzen dann drei Inset-Eigenschaften auf das Anker-positionierte Element. Die ersten beiden positionieren die obere Kante des Elements bündig mit der oberen Kante des Ankers und die untere Kante bündig mit der unteren Kante des Ankers. In der dritten Inset-Eigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` zur rechten Kante des Ankers zu positionieren.

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

### Vergleich verschiedener `<anchor-side>`-Werte

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaften positioniert ist, die mithilfe von `anchor()`-Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, die es Ihnen ermöglichen, die `<anchor-side>`-Werte innerhalb dieser `anchor()`-Funktionen zu variieren, sodass Sie sehen können, welche Auswirkungen sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind dazu gedacht, das Ankerelement und das positionierte Element zu sein, die wir damit verknüpfen werden.

Wir fügen auch etwas Fülltext um die beiden `<div>`-Elemente herum hinzu, um den {{htmlelement("body")}} höher zu machen, sodass er scrollen kann. Dieses Beispiel enthält auch zwei {{htmlelement("select")}}-Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>`-Werte ermöglichen, mit denen das positionierte Element platziert wird. Wir haben den Fülltext und die `<select>`-Elemente der Kürze halber ausgeblendet.

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

Wir deklarieren das `anchor`-`<div>` als ein Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}}-Eigenschaft setzen. Wir assoziieren es dann mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}}-Eigenschaft setzen. `top: anchor(--myAnchor bottom)` positioniert die Oberkante der Infobox bündig an der Unterkante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig an der rechten Kante ihres Ankers positioniert. Dies bietet eine Ausgangsposition, die überschrieben wird, wenn unterschiedliche Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir lauschen dem `change`-Ereignis, das auftritt, wenn ein neuer `<anchor-side>`-Wert ausgewählt wird, und legen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion innerhalb der relevanten Inset-Eigenschaft (`top` oder `left`) der Infobox fest.

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

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des Anker-positionierten Elements festzulegen. Die Anker können über Tastatursteuerungen oder durch Ziehen bewegt werden und ändern dadurch die Größe des positionierten Elements.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}}-Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse von `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hinzu, um ihnen Tastaturfokus zu ermöglichen.

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

Die Anker erhalten jeweils unterschiedliche {{cssxref("anchor-name")}}-Werte, einen {{cssxref("position")}}-Wert von `absolute` und unterschiedliche Inset-Werte, um die Anker in einer Rechteckformation zu positionieren.

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

Das Anker-positionierte Element, dessen `position` auf `fixed` gesetzt ist, wird über seine {{cssxref("position-anchor")}}-Eigenschaft mit einem Anker verknüpft. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>`-Werte mit den `anchor()`-Funktionen festgesetzt werden, die auf seinen Inset-Eigenschaften gesetzt sind. In diesem Fall haben wir {{cssxref("percentage")}}-Werte für den `<anchor-side>`-Parameter verwendet und geben die Distanz vom Anfang der Achse der Inset-Eigenschaft an, auf der die Funktion gesetzt ist.

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

Das positionierte Element wird relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder wechseln Sie zu ihnen mit der Tabulatortaste und verwenden Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>, um sie nach oben, unten, links, und rechts zu bewegen. Sehen Sie, wie sich ihre Position und als Konsequenz der Bereich des positionierten Elements ändert. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioniert relativ zu mehreren Ankern", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptnachweis und nicht für den Einsatz in Produktionscode vorgesehen. Zu seinen Schwächen gehört, dass das Beispiel bricht, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbei zu bewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}}-Funktion
- [Ankerpositionierung mit CSS verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using)-Leitfaden
- [Überlauf bewältigen: Versuchen Sie Fallbacks und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)-Leitfaden
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
