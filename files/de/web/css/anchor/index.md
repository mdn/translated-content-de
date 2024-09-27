---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann innerhalb von Werten der [inset property](#properties_that_accept_anchor_function_values) eines **Anchor-positionierten** Elements verwendet werden und gibt einen Längenwert zurück, der relativ zur Position der Kanten des zugeordneten Ankerelements ist.

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

Die Syntax der `anchor()` Funktion lautet wie folgt:

```plain
anchor(<anchor-element> <anchor-side>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-element>` {{optional_inline}}

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Ankerelements, zu dem Sie die Kante des Elements positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Falls ausgelassen, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert ist oder dem Element über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Die Spezifizierung eines `<anchor-element>` innerhalb einer `anchor()` Funktion assoziiert ein Element nicht mit einem Anker; es positioniert das Element nur relativ zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/position-anchor) CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut werden nach wie vor benötigt, um die Assoziation zu erstellen.

- `<anchor-side>`

  - : Gibt die Seite des Ankers an oder die relative Distanz von der `start`-Seite, zu der das Element relativ positioniert wird. Wenn ein physikalischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der inset-Eigenschaft ist, auf die `anchor()` angewendet wird, wird der Fallback-Wert verwendet. Gültige Werte sind unter anderem:

    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `start`
      - : Der logische Start des [Containing Block](/de/docs/Web/CSS/Containing_block) des Ankerelements entlang der Achse der inset-Eigenschaft, auf die die `anchor()` Funktion angewendet wird.
    - `end`
      - : Das logische Ende des Containing Block des Ankerelements entlang der Achse der inset-Eigenschaft, auf die die `anchor()` Funktion angewendet wird.
    - `self-start`
      - : Der logische Start des Inhalts des Ankerelements entlang der Achse der inset-Eigenschaft, auf die die `anchor()` Funktion angewendet wird.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der inset-Eigenschaft, auf die die `anchor()` Funktion angewendet wird.
    - `center`
      - : Das Zentrum der Achse der inset-Eigenschaft, auf die die `anchor()` Funktion angewendet wird.
    - {{cssxref("percentage")}}
      - : Gibt die Distanz als Prozentsatz vom Start des Inhalts des Elements entlang der Achse der inset-Eigenschaft an, auf die die `anchor()` Funktion angewendet wird.

    Das CSS-Ankerpositionierungsmodul führt zwei zusätzliche `<anchor-side>` Werte ein, `inside` und `outside`, die noch nicht implementiert sind.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, auf den die Funktion aufgelöst werden soll, falls die `anchor()` Funktion sonst ungültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()` Funktion ermöglicht es, ein Element relativ zu den Kanten eines Ankerelements zu positionieren. Sie ist nur innerhalb von [inset property](/de/docs/Glossary/inset_properties) Werten gültig, die auf absolute oder fixed positionierte Elemente angewendet werden.

Sie gibt einen `<length>` Wert zurück, der die Distanz zwischen der durch den inset Wert angegebenen Seite des Anchor-positionierten Elements und der durch den ausgewählten `<anchor-side>` Wert angegebenen Seite des Ankerelements angibt. Da sie einen `<length>` zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/CSS_Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Falls kein Anker mit dem durch `<anchor-element>` angegebenen Namen existiert oder wenn das positionierte Element keinen Anker zugeordnet hat (d.h. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig angesehen und der `<length-percentage>` Fallback-Wert wird verwendet, falls vorhanden. Zum Beispiel, falls `top: anchor(bottom, 50px)` auf dem positionierten Element angegeben wurde, aber kein Anker damit assoziiert wurde, würde der Fallback-Wert verwendet werden, sodass `top` einen berechneten Wert von `50px` erhalten würde.

Für detaillierte Informationen zu Anker-Funktionen und deren Verwendung siehe die [CSS-Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor()` Funktionswerte akzeptieren

Die CSS [inset properties](/de/docs/Glossary/inset_properties), die eine `anchor()` Funktion als Wertkomponente akzeptieren, umfassen:

- {{cssxref("top")}}
- {{cssxref("left")}}
- {{cssxref("bottom")}}
- {{cssxref("right")}}
- {{cssxref("inset")}} Kurzschrift
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block")}} Kurzschrift
- {{cssxref("inset-inline-start")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline")}} Kurzschrift

### Kompatibilität der inset-Eigenschaften und `<anchor-side>` Werte

Wenn eine `anchor()` Funktion innerhalb eines inset-Eigenschaftswerts verwendet wird, muss der innerhalb der `anchor()` Funktion angegebene `<anchor-side>` Parameter mit der Achse kompatibel sein, auf der sich die inset-Eigenschaft befindet.

Das bedeutet, dass physikalische `<anchor-side>` Werte innerhalb der Werte physikalischer inset-Eigenschaften verwendet werden können, wenn die Eigenschaft die gleiche Achsenrichtung hat wie die `<anchor-side>`. Mit anderen Worten, die `top` und `bottom` Seiten sind innerhalb der `left` und `right` Eigenschaftswerte nicht gültig, und die `left` und `right` Seiten sind innerhalb `top` und `bottom` Eigenschaftswerte nicht gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da sie beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Falls `top: anchor(left, 50px)` angegeben wäre, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhalten würde. Falls kein Fallback vorhanden ist, verhält sich die inset property so, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>` Werte sowohl in logischen als auch in physikalischen inset-Eigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der inset-Eigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle einwandfrei.

Die Situation wird komplizierter, wenn physikalische `<anchor-side>` Parameter in logischen inset-Eigenschaftswerten verwendet werden, da die physikalische Seite mit der Achse übereinstimmen muss, auf die sich die inset-Eigenschaft im aktuellen Schreibmodus bezieht. Zum Beispiel:

- In einem horizontalen Schreibmodus verläuft die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist inkompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt würde, wäre der berechnete Wert `50px` und das positionierte Element wäre 50px vom Blockende (unten) seines nächstgelegenen positionierten Vorfahren oder des Ansichtsfensters entfernt, abhängig vom gesetzten `position` Wert.
- In einem vertikalen Schreibmodus verläuft die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist inkompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, wäre der berechnete Wert `50px` und das positionierte Element wäre 50px vom Blockende (links oder rechts je nach Schreibmodus) seines nächstgelegenen positionierten Vorfahren oder des Ansichtsfensters entfernt, abhängig vom gesetzten `position` Wert.

Um das Potenzial für Verwirrung mit diesen Werten zu minimieren, wird empfohlen, logische inset-Eigenschaften mit logischen `<anchor-side>` Werten zu verwenden und physikalische inset-Eigenschaften mit physikalischen `<anchor-side>` Werten zu verwenden. Es wird geraten, logische Werte wann immer möglich zu verwenden, da sie besser für die [Internationalisierung](/de/docs/Glossary/Internationalization) geeignet sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()` Funktion innerhalb aller logischen und physikalischen inset-Eigenschaften gültig.

Die folgende Tabelle listet die inset-Eigenschaften und die `<anchor-side>` Parameterwerte auf, die mit ihnen kompatibel sind. Wir haben nur die longhand-inset-Eigenschaften aufgelistet; diese umfassen die Kurzschrift-Werte der inset-Eigenschaft.

| Inset-Eigenschaft                           | Kompatibler `<anchor-side>` Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn die `anchor()` Funktion auf eine Seite des Standardankers verweist, können Sie eine {{cssxref("margin")}} hinzufügen, um den Abstand zwischen den Kanten des Ankers und des positionierten Elements nach Bedarf zu schaffen. Alternativ können Sie die `anchor()` Funktion innerhalb einer {{cssxref("calc")}} Funktion verwenden, um Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann einen Abstand hinzu, um etwas Raum zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logische Blockendkante des positionierten Elements `10px` von der logischen Blockstartkante des Ankerelements:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie innerhalb der `anchor()` Funktion der verschiedenen inset-Eigenschaften unterschiedliche `<anchor-element>` Namen auf demselben Element angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionen wie Ziehgriffe in den Ecken eines positionierten Elements zu erstellen, um es zu vergrößern oder verkleinern.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur dem einzigen Anker zugeordnet, der über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut) definiert ist. Dies ist der Anker, mit dem das Element mitscrollt, wenn die Seite scrollt; er kann auch verwendet werden, um zu steuern, wann das Element [konditional verborgen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()` Funktion verwendet, um die Höhe eines von einem Anker positionierten Elements auf die Höhe seines Ankers einzustellen, indem die unteren und oberen Kanten auf die unteren und oberen Kanten des Ankers gesetzt werden. Dann wird die `anchor()` Funktion innerhalb einer `calc()` Funktion verwendet, um das von einem Anker positionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element hinzu, das wir als unseren Anker setzen werden, und ein {{htmlelement("p")}}, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements auf den Wert der `position-anchor` Eigenschaft des positionierten Elements, um die Elemente zu assoziieren, und dann setzen wir drei inset-Eigenschaften auf das von einem Anker positionierte Element. Die ersten beiden positionieren die obere Kante des Elements bündig zur oberen Kante des Ankers und die untere Kante bündig zur unteren Kante des Ankers. In der dritten inset-Eigenschaft wird die `anchor()` Funktion innerhalb einer `calc()` Funktion verwendet, um die linke Kante des Elements `10px` von der rechten Kante des Ankers zu positionieren.

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

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über dessen {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mit `anchor()` Funktionen definiert sind. Außerdem sind zwei Dropdown-Menüs enthalten, die es Ihnen ermöglichen, die `<anchor-side>` Werte innerhalb dieser `anchor()` Funktionen zu variieren, damit Sie sehen können, welche Auswirkungen sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind beabsichtigt als das Ankerelement und als das positionierte Element, das wir damit assoziieren werden.

Wir fügen auch einige Fülltexte um die beiden `<div>` Elemente hinzu, um den {{htmlelement("body")}} höher zu machen, damit er scrollen kann. Dieses Beispiel beinhaltet auch zwei {{htmlelement("select")}} Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>` Werte ermöglichen, mit denen das positionierte Element platziert werden kann. Wir haben den Fülltext und die `<select>` Elemente der Kürze halber ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als ein Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen. Wir assoziieren es dann mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}} Eigenschaft setzen. `top: anchor(--myAnchor bottom)` positioniert die obere Kante der Infobox bündig zur unteren Kante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig zur rechten Kante ihres Ankers positioniert. Dies stellt eine Anfangsposition dar, die überschrieben wird, wenn andere Werte aus den Dropdown-Menüs gewählt werden.

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

Wir hören auf das `change` Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()` Funktion innerhalb des relevanten inset-Eigenschaftswerts (`top` oder `left`) der Infobox.

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

Wählen Sie verschiedene Werte aus den Dropdown-Menüs aus, um zu sehen, wie sie die Positionierung der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element positioniert relativ zu mehreren Ankern

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des von einem Anker positionierten Elements festzulegen. Die Anker können über Tastatursteuerungen oder durch Ziehen bewegt werden, wodurch das positionierte Element in der Größe verändert wird.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse von `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut hinzu, um ihnen zu ermöglichen, Tastaturfokus zu erhalten.

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

Die Anker erhalten jeweils unterschiedliche {{cssxref("anchor-name")}} Werte, einen {{cssxref("position")}} Wert von `absolute` und unterschiedliche inset Werte, um die Anker in einer Rechteckformation zu positionieren.

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

Das von einem Anker positionierte Element mit seiner `position` auf `fixed` gesetzt, wird über seine {{cssxref("position-anchor")}} Eigenschaft mit einem Anker verknüpft. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>` Werte mit den `anchor()` Funktionen auf seinen inset-Eigenschaften gesetzt werden. In diesem Fall haben wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet, der die Distanz vom Startpunkt der Achse der inset-Eigenschaft angibt, auf die die Funktion angewendet wird.

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

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder gehen Sie zu ihnen und verwenden Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie sich ihre Position verändert und folglich auch der Bereich des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Proof-of-Concept und nicht zur Verwendung in Produktionscode gedacht. Zu den Mängeln gehört, dass das Beispiel bricht, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Handling overflow: try fallbacks and conditional hiding](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
