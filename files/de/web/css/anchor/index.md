---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann innerhalb der Werte einer **ankerpositionierten** [inset-Eigenschaft](#properties_that_accept_anchor_function_values) verwendet werden und gibt einen Wert vom Typ `<length>` relativ zur Position der Ränder des zugehörigen Ankerelements zurück.

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

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Ankerelements, zu dem das Element in Bezug positioniert werden soll. Dies ist ein Wert vom Typ `<dashed-ident>`. Falls weggelassen, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert ist, oder das Element ist über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut zugeordnet.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor()`-Funktion assoziiert kein Element mit einem Anker; es dient lediglich zur Positionierung des Elements relativ zu diesem Anker. Die CSS-Eigenschaft [`position-anchor`](/de/docs/Web/CSS/position-anchor) oder das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) wird weiterhin benötigt, um die Zuordnung zu erstellen.

- `<anchor-side>`

  - : Gibt die Seite des Ankers oder die relative Distanz von der `start`-Seite an, zu der das Element relativ positioniert wird. Wird ein physischer oder logischer Wert verwendet, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der Insets-Eigenschaft ist, auf die `anchor()` gesetzt ist, wird der Fallback-Wert verwendet. Gültige Werte sind:

    - `top`
      - : Die obere Seite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die untere Seite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `start`
      - : Der logische Anfang des [Enthaltungsblocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements entlang der Achse der Insets-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des Enthaltungsblocks des Ankerelements entlang der Achse der Insets-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Insets-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Insets-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `center`
      - : Die Mitte der Achse der Insets-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt den Abstand als Prozentwert vom Anfang des Inhalts des Elements entlang der Achse der Insets-Eigenschaft an, auf der die `anchor()`-Funktion gesetzt ist.

    Das CSS-Ankerpositionierungsmodul definiert zwei zusätzliche `<anchor-side>`-Werte, `inside` und `outside`, welche noch nicht implementiert wurden.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, auf den die Funktion zurückgreifen soll, wenn die `anchor()`-Funktion sonst nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht die Positionierung eines Elements relativ zu den Rändern eines Ankerelements. Sie ist nur innerhalb von Werten der {{Glossary("inset_properties", "inset-Eigenschaft")}} zulässig, die auf absolut oder fest positionierten Elementen gesetzt sind.

Zurückgegeben wird ein `<length>`-Wert, der den Abstand zwischen der Seite des ankerpositionierten Elements, die durch die Insets-Werte angegeben ist, und der Seite des Ankerelements, die durch den gewählten `<anchor-side>`-Wert angegeben ist, spezifiziert. Da sie einen Wert vom Typ `<length>` zurückgibt, kann sie in [anderen CSS-Funktionen](/de/docs/Web/CSS/CSS_Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}}, usw.

Falls kein Anker mit dem angegebenen `<anchor-name>` existiert oder das positionierte Element keinem Anker zugeordnet ist (z.B. über die {{cssxref("position-anchor")}}-Eigenschaft), wird der erste Parameter als ungültig betrachtet, und der Fallback-Wert `<length-percentage>` wird verwendet, falls einer verfügbar ist. Wenn zum Beispiel `top: anchor(bottom, 50px)` auf dem positionierten Element angegeben wurde, aber kein Anker zugeordnet ist, würde der Fallback-Wert verwendet werden, so dass `top` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen über Anker-Funktionen und deren Verwendung siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Seite und den [Anleitung zur Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor()`-Funktionen als Werte akzeptieren

Die CSS-{{Glossary("inset_properties", "Insets-Eigenschaften")}}, die eine `anchor()`-Funktion als Wertkomponente akzeptieren, umfassen:

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

### Kompatibilität von Insets-Eigenschaften und `<anchor-side>`-Werten

Wenn eine `anchor()`-Funktion innerhalb eines Werts einer Insets-Eigenschaft verwendet wird, muss der innerhalb der `anchor()`-Funktion angegebene `<anchor-side>`-Parameter mit der Achse der Insets-Eigenschaft kompatibel sein.

Dies bedeutet, dass physische `<anchor-side>`-Werte innerhalb der Werte physischer Insets-Eigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Achsrichtung wie `<anchor-side>` hat. Mit anderen Worten: `top` und `bottom` sind nicht innerhalb der Werteigenschaften `left` und `right` gültig, und `left` und `right` sind nicht innerhalb der Werteigenschaften `top` und `bottom` gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da beide Werte vertikal sind, aber `top: anchor(left)` ist ungültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben würde, käme der Fallback-Wert zum Einsatz, sodass `top` einen berechneten Wert von `50px` hätte. Fehlt ein Fallback, verhält sich die Insets-Eigenschaft, als ob sie auf `auto` gesetzt wäre.

Logische `<anchor-side>`-Werte können sowohl in logischen als auch in physischen Insets-Eigenschaften verwendet werden, da logische `<anchor-side>`-Werte relativ zur relevanten Achse der Insets-Eigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder physisch ist. Beispielsweise funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` einwandfrei.

Die Validierung wird jedoch komplexer, wenn physische `<anchor-side>`-Parameter innerhalb logischer Insets-Eigenschaftswerte verwendet werden, da die physische Seite mit der Achse übereinstimmen muss, auf die sich die Insets-Eigenschaft im aktuellen Schreibmodus bezieht. Zum Beispiel:

- In einem horizontalen Schreibmodus verläuft die Blockrichtung von oben nach unten. Daher funktioniert `inset-block-end: anchor(bottom)` einwandfrei, `inset-block-end: anchor(left)` ist jedoch inkompatibel. Wenn `inset-block-end: anchor(left, 50px)` festgelegt wäre, hätte der berechnete Wert `50px`, und das positionierte Element würde `50px` vom Blockende (unten) seines nächsten positionierten übergeordneten Elements oder des Viewports, abhängig vom `position`-Wert, positioniert.
- In einem vertikalen Schreibmodus verläuft die Blockrichtung von rechts nach links oder links nach rechts. Daher funktioniert `inset-block-end: anchor(left)` einwandfrei, `inset-block-end: anchor(top)` ist jedoch inkompatibel. Wenn `inset-block-end: anchor(top, 50px)` festgelegt wäre, hätte der berechnete Wert `50px`, und das positionierte Element würde `50px` vom Blockende (links oder rechts, je nach Schreibmodus) seines nächsten positionierten übergeordneten Elements oder des Viewports, abhängig vom `position`-Wert, positioniert.

Um die Möglichkeit von Verwirrungen mit diesen Werten zu minimieren, wird empfohlen, logische Insets-Eigenschaften mit logischen `<anchor-side>`-Werten sowie physische Insets-Eigenschaften mit physischen `<anchor-side>`-Werten zu verwenden. Die Verwendung logischer Werte sollte nach Möglichkeit bevorzugt werden, da sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} geeignet sind.

Die Werte `center` und `<percentage>` sind innerhalb der `anchor()`-Funktion für alle logischen und physischen Insets-Eigenschaften gültig.

Die folgende Tabelle listet die Insets-Eigenschaften sowie die für sie kompatiblen `<anchor-side>`-Parameterwerte auf. Aufgeführt sind nur die Langform-Eigenschaften; diese bilden die Kurzform-Inhaltswerte der Insets-Eigenschaften.

| Insets-Eigenschaft                          | Kompatibler `<anchor-side>`-Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` innerhalb `calc()`

Wenn die `anchor()`-Funktion auf eine Seite des Standardankers verweist, können Sie eine {{cssxref("margin")}} hinzufügen, um Abstände zwischen den Rändern des Ankers und des positionierten Elements nach Bedarf zu erstellen. Alternativ können Sie die `anchor()`-Funktion innerhalb einer {{cssxref("calc")}}-Funktion einfügen, um Abstände hinzuzufügen.

Dieses Beispiel positioniert die rechte Seite des positionierten Elements bündig mit der linken Seite des Ankerelements und fügt dann einen Abstand hinzu, um Platz zwischen den Rändern zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert das logische Blockende des positionierten Elements `10px` vom logischen Blockstart des Ankerelements entfernt:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie verschiedene `<anchor-name>`-Werte innerhalb der `anchor()`-Funktion unterschiedlicher Insets-Eigenschaften am selben Element angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionalitäten zu erstellen, wie z.B. Ziehgriffe an den Ecken eines positionierten Elements, die zum Größenändern verwendet werden können.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem einzelnen Anker verbunden, der über dessen [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft definiert ist (oder das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)). Dies ist der Anker, mit dem das Element scrollt, wenn die Seite scrollt; er kann auch verwendet werden, um zu steuern, wann das Element [bedingungsgemäß ausgeblendet](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Allgemeine Verwendung

In diesem Beispiel wird mit der `anchor()`-Funktion die Höhe eines ankerpositionierten Elements auf die Höhe seines Ankers gesetzt, indem die unteren und oberen Ränder des Elements über ihre Insets-Werte mit den entsprechenden Rändern des Ankers übereinstimmen. Anschließend wird die `anchor()`-Funktion in einer `calc()`-Funktion verwendet, um das ankerpositionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen eine {{htmlelement("div")}}-Element ein, das wir als Anker setzen, und ein {{htmlelement("p")}}-Element ein, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name`-Wert des Ankerelements auf den Wert der `position-anchor`-Eigenschaft des positionierten Elements, um die Elemente zuzuordnen, und setzen dann drei Insets-Eigenschaften auf das ankerpositionierte Element. Die ersten beiden positionieren die obere Kante des Elements bündig mit der oberen Kante des Ankers und die untere Kante bündig mit der unteren Kante des Ankers. In der dritten Insets-Eigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` rechts von der rechten Kante des Ankers zu positionieren.

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

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaften positioniert ist, die über `anchor()`-Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, die Ihnen erlauben, die `<anchor-side>`-Werte innerhalb dieser `anchor()`-Funktionen zu variieren, sodass Sie sehen können, welche Auswirkungen sie haben.

#### HTML

Wir geben zwei {{htmlelement("div")}}-Elemente an, eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, die wir damit assoziieren.

Wir fügen auch etwas Fülltext um die beiden `<div>`-Elemente herum ein, um den {{htmlelement("body")}} zu vergrößern, damit er scrollbar wird. Dieses Beispiel enthält außerdem zwei {{htmlelement("select")}}-Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>`-Werte ermöglichen, um das positionierte Element zu platzieren. Wir haben den Fülltext und die `<select>`-Elemente der Kürze halber ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen mit der {{cssxref("anchor-name")}} Eigenschaft auf diesem setzen. Wir assoziieren es dann mit dem positionierten Element, indem wir denselben Wert für dessen {{cssxref("position-anchor")}}-Eigenschaft setzen. `top: anchor(--myAnchor bottom)` positioniert die Oberkante der Infobox bündig mit der Unterkante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig mit der rechten Kante ihres Ankers positioniert. Dies bietet eine anfängliche Position, die überschrieben wird, wenn aus den Dropdown-Menüs verschiedene Werte ausgewählt werden.

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

Wir horchen auf das `change`-Ereignis, das auftritt, wenn ein neuer `<anchor-side>`-Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion innerhalb der relevanten `inset`-Eigenschaft (`top` oder `left`) der Infobox.

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

#### Ergebnisse

Wählen Sie verschiedene Werte aus den Dropdown-Menüs, um zu sehen, wie sie die Positionierung der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element positioniert relativ zu mehreren Ankern

Dieses Beispiel positioniert ein Element relativ zu zwei unterschiedlichen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des ankerpositionierten Elements festzulegen. Die Anker können mittels Tastatursteuerung oder durch Ziehen bewegt werden, was das positionierte Element verändert.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}}-Elemente. Die ersten beiden haben die Klasse `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionsinformationen zuzuweisen. Das letzte `<div>` hat die Klasse `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hinzu, um ihnen die Tastaturfokussierung zu ermöglichen.

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

Die Anker erhalten jeweils einen unterschiedlichen {{cssxref("anchor-name")}}-Wert, einen {{cssxref("position")}}-Wert von `absolute` und unterschiedliche Insets-Werte, um die Anker in einer rechteckigen Formation zu positionieren.

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

Das ankerpositionierte Element wird mit einem `position`-Wert von `fixed` einem Anker über seine {{cssxref("position-anchor")}}-Eigenschaft zugeordnet. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>`-Werte in den `anchor()`-Funktionen gesetzt werden, die auf dessen Insets-Eigenschaften angewendet werden. In diesem Fall haben wir {{cssxref("percentage")}}-Werte für den `<anchor-side>`-Parameter verwendet, der die Distanz vom Anfang der Achse der Insets-Eigenschaft angibt, auf der die Funktion gesetzt ist.

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

#### Ergebnisse

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder drücken Sie die <kbd>Tab</kbd>-Taste, um die Anker zu fokussieren, dann verwenden Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>, um sie nach oben, unten, links und rechts zu bewegen. Beobachten Sie, wie sich ihre Position verändert und damit auch die Größe des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Proof-of-Concept und nicht für die Verwendung in Produktionscode gedacht. Unter anderem bricht das Beispiel, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbei zu bewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Anleitung zur Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Umgang mit Overflow: Fallbacks und bedingtes Verbergen ausprobieren](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
