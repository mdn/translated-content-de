---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann innerhalb der Werteigenschaften eines **ankerpositionierten** Elements [inset property](#properties_that_accept_anchor_function_values) verwendet werden und gibt einen Längenwert zurück, der relativ zur Position der Kanten des zugehörigen Ankerelements ist.

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

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert eines Ankerelements, an dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn nicht angegeben, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert oder über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element assoziiert ist.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor()` Funktion assoziiert ein Element nicht mit einem Anker; es positioniert das Element nur relativ zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/position-anchor) CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut sind weiterhin erforderlich, um die Assoziation zu erstellen.

- `<anchor-side>`

  - : Gibt die Seite des Ankers an oder die relative Entfernung von der `start` Seite, zu der das Element relativ positioniert wird. Wenn ein physischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der Rand-Eigenschaft ist, auf die `anchor()` gesetzt ist, wird der Rückfallwert verwendet. Gültige Werte umfassen:

    - `top`
      - : Der obere Rand des Ankerelements.
    - `right`
      - : Der rechte Rand des Ankerelements.
    - `bottom`
      - : Der untere Rand des Ankerelements.
    - `left`
      - : Der linke Rand des Ankerelements.
    - `start`
      - : Der logische Anfang des enthaltenen Blocks des Ankerelements entlang der Achse der Rand-Eigenschaft, auf die die `anchor()` Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des enthaltenen Blocks des Ankerelements entlang der Achse der Rand-Eigenschaft, auf die die `anchor()` Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Rand-Eigenschaft, auf die die `anchor()` Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Rand-Eigenschaft, auf die die `anchor()` Funktion gesetzt ist.
    - `center`
      - : Die Mitte der Achse der Rand-Eigenschaft, auf die die `anchor()` Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der Rand-Eigenschaft an, auf die die `anchor()` Funktion gesetzt ist.

    Das CSS-Anker-Positionierungsmodul spezifiziert zwei zusätzliche `<anchor-side>` Werte, `inside` und `outside`, die noch nicht implementiert wurden.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Rückfallwert an, auf den die Funktion aufgelöst werden soll, wenn die `anchor()` Funktion ansonsten ungültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()` Funktion ermöglicht es, ein Element relativ zu den Kanten eines Ankerelements zu positionieren. Sie ist nur innerhalb von {{Glossary("inset_properties", "inset property")}} Werten gültig, die auf absolut oder fest positionierten Elementen festgelegt sind.

Sie gibt einen `<length>` Wert zurück, der den Abstand zwischen der ankerpositionierten Elementseite angibt, die durch den Randwert spezifiziert ist, und der Seite des Ankerelements, die durch den gewählten `<anchor-side>` Wert angegeben ist. Da sie einen `<length>` zurückgibt, kann sie in [anderen CSS-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}}, usw.

Wenn kein Anker mit dem durch den `<anchor-name>` spezifizierten Namen existiert oder das positionierte Element keinen Anker zugeordnet hat (d.h. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig betrachtet und der Rückfallwert `<length-percentage>` wird verwendet, falls vorhanden. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf dem positionierten Element spezifiziert wurde, aber kein Anker damit assoziiert war, würde der Rückfallwert verwendet werden, sodass `top` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe die [CSS anker positionieren](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Seite und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor()` Funktionswerte akzeptieren

Die CSS {{Glossary("inset_properties", "Rand-Eigenschaften")}}, die eine `anchor()` Funktion als Wertkomponente akzeptieren, umfassen:

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

### Kompatibilität von Rand-Eigenschaften und `<anchor-side>` Werten

Wenn eine `anchor()` Funktion innerhalb eines Rand-Eigenschaftswerts verwendet wird, muss der innerhalb der `anchor()` Funktion spezifizierte `<anchor-side>` Parameter mit der Achse kompatibel sein, auf der die Rand-Eigenschaft liegt.

Das bedeutet, dass physische `<anchor-side>` Werte innerhalb der Werte von physischen Rand-Eigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Achsenrichtung wie der `<anchor-side>` hat. Mit anderen Worten sind die Seiten `top` und `bottom` nicht innerhalb der `left` und `right` Eigenschaftswerte gültig, und die Seiten `left` und `right` sind nicht innerhalb der `top` und `bottom` Eigenschaftswerte gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wäre, würde der Rückfallwert verwendet werden, sodass `top` einen berechneten Wert von `50px` erhält. Wenn kein Rückfall vorhanden ist, verhält sich die Rand-Eigenschaft, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>` Werte sowohl innerhalb logischer als auch physischer Rand-Eigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der Rand-Eigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle gut.

Die Situation wird komplizierter, wenn physische `<anchor-side>` Parameter innerhalb von logischen Rand-Eigenschaftswerten verwendet werden, da die physische Seite mit der Achse übereinstimmen muss, auf die die Rand-Eigenschaft im aktuellen Schreibmodus relevant ist. Zum Beispiel:

- In einem horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, daher wird `inset-block-end: anchor(bottom)` funktionieren, aber `inset-block-end: anchor(left)` ist nicht kompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wäre, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (unten) seines nächsten positionierten Vorgängers oder des Viewports, abhängig vom gesetzten `position` Wert, positioniert.
- In einem vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder von links nach rechts, daher wird `inset-block-end: anchor(left)` funktionieren, aber `inset-block-end: anchor(top)` ist nicht kompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (links oder rechts, abhängig vom Schreibmodus) seines nächsten positionierten Vorgängers oder des Viewports, abhängig vom gesetzten `position` Wert, positioniert.

Um das Potenzial für Verwirrung mit diesen Werten zu mindern, wird Ihnen empfohlen, logische Rand-Eigenschaften mit logischen `<anchor-side>` Werten zu verwenden, und physische Rand-Eigenschaften mit physischen `<anchor-side>` Werten. Sie sollten die Verwendung logischer Werte nach Möglichkeit bevorzugen, da diese besser für die {{Glossary("Internationalization", "Internationalisierung")}} sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()` Funktion in allen logischen und physischen Rand-Eigenschaften gültig.

Die folgende Tabelle listet die Rand-Eigenschaften und die `<anchor-side>` Parameterwerte auf, die mit ihnen kompatibel sind. Wir haben nur die Langform-Rand-Eigenschaften aufgelistet; diese umfassen die Werte der Kurzform-Rand-Eigenschaften.

| Rand-Eigenschaft                            | Kompatibler `<anchor-side>` Wert                                                                                                              |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                      |
| Alle                                        | `<percentage>`                                                                                                                                |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                     |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                     |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start` und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start` und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn sich die `anchor()` Funktion auf eine Seite des Standardankers bezieht, können Sie einen {{cssxref("margin")}} einfügen, um bei Bedarf einen Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()` Funktion in eine {{cssxref("calc")}} Funktion einfügen, um den Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig an der linken Kante des Ankerelements und fügt dann eine Margin ein, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Startkante des Ankerelements entfernt:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionieren eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie verschiedene `<anchor-name>` Werte innerhalb der `anchor()` Funktion verschiedener Rand-Eigenschaften desselben Elements angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionen wie Ziehgriffe an den Ecken eines positionierten Elements zu erstellen, die verwendet werden können, um seine Größe zu ändern.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem einzigen Anker, der über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut) definiert ist, assoziiert. Dies ist der Anker, mit dem das Element scrollt, wenn die Seite scrollt; er kann auch verwendet werden, um zu steuern, wann das Element [bedingt versteckt](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()` Funktion verwendet, um die Höhe eines ankerpositionierten Elements auf die Höhe seines Ankers zu setzen, indem die unteren und oberen Kanten auf die unteren und oberen Kanten des Ankers gesetzt werden. Die `anchor()` Funktion innerhalb einer `calc()` Funktion wird dann verwendet, um das ankerpositionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element ein, das wir als unseren Anker festlegen, und ein {{htmlelement("p")}} Element, das wir relativ zu diesem Anker positionieren:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements als den Wert der `position-anchor` Eigenschaft des positionierten Elements, um die Elemente zu assoziieren, und setzen dann drei Rand-Eigenschaften auf dem ankerpositionierten Element. Die ersten beiden positionieren die obere Kante des Elements bündig an der oberen Kante des Ankers und die untere Kante bündig an der unteren Kante des Ankers. In der dritten Rand-Eigenschaft wird die `anchor()` Funktion innerhalb einer `calc()` Funktion verwendet, um die linke Kante des Elements `10px` zur rechten Kante des Ankers zu positionieren.

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

### Vergleich verschiedener `anchor-side` Werte

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die unter Verwendung von `anchor()` Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, mit denen Sie die `<anchor-side>` Werte innerhalb dieser `anchor()` Funktionen variieren können, um zu sehen, welche Auswirkungen sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als das Ankerelement und das positionierte Element gedacht, das wir damit assoziieren werden.

Wir fügen auch etwas Fülltext um die beiden `<div>` Elemente hinzu, um den {{htmlelement("body")}} höher zu machen, sodass er scrollen kann. Dieses Beispiel enthält auch zwei {{htmlelement("select")}} Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>` Werte ermöglichen, um das positionierte Element zu platzieren. Wir haben den Fülltext und die `<select>` Elemente aus Gründen der Kürze ausgeblendet.

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

Wir erklären das `anchor` `<div>` als ein Ankerelement, indem wir einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft darauf setzen. Dann assoziieren wir es mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}} Eigenschaft festlegen. `top: anchor(--myAnchor bottom)` positioniert die obere Kante der Infobox bündig an der unteren Kante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig an der rechten Kante ihres Ankers positioniert. Dies liefert eine Anfangsposition, die überschrieben wird, wenn verschiedene Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir lauschen auf das `change` Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()` Funktion innerhalb des relevanten Rand-Eigenschaftswerts (`top` oder `left`) der Infobox.

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

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des ankerpositionierten Elements festzulegen. Die Anker können über Tastatursteuerungen oder per Drag-and-Drop bewegt werden, um die Größe des positionierten Elements zu ändern.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen bereitzustellen. Das letzte `<div>` hat eine Klasse von `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um ihnen Tastaturfokus zu ermöglichen.

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

Die Anker sind jeweils mit einem anderen {{cssxref("anchor-name")}} Wert, einem {{cssxref("position")}} Wert von `absolute` und unterschiedlichen Randwerten versehen, um die Anker in einer Rechteckform zu positionieren.

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

Das ankerpositionierte Element, dessen `position` auf `fixed` gesetzt ist, ist mit einem Anker über seine {{cssxref("position-anchor")}} Eigenschaft assoziiert. Es ist relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>` Werte mit den `anchor()` Funktionen auf seinen Rand-Eigenschaften gesetzt werden. In diesem Fall haben wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet, der die Entfernung vom Anfang der Achse der Rand-Eigenschaft angibt, auf die die Funktion gesetzt ist.

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

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus, oder drücken Sie die Tabulatortaste, um zu ihnen zu gelangen und verwenden Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, und <kbd>D</kbd> Tasten, um sie nach oben, unten, links und rechts zu bewegen. Beobachten Sie, wie sich deren Position verändert und infolgedessen der Bereich des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptnachweis und nicht für den Einsatz in Produktionscode gedacht. Zu den Mängeln gehört, dass das Beispiel zusammenbricht, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Fallbacks und bedingtes Verstecken versuchen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
