---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor()`**-Funktion von [CSS](/de/docs/Web/CSS) kann innerhalb der Werte der [inset-Eigenschaft](#properties_that_accept_anchor_function_values) eines **ankerpositionierten** Elements verwendet werden und gibt einen Längenwert relativ zur Position der Kanten des zugehörigen Ankerelements zurück.

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

Die Syntax der `anchor()`-Funktion lautet wie folgt:

```plain
anchor(<anchor-element> <anchor-side>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-element>` {{optional_inline}}

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert eines Ankerelements, zu dem Sie die Seite des Elements positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Falls nicht angegeben, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft referenziert ist oder dem Element über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Das Angeben eines `<anchor-element>` innerhalb einer `anchor()`-Funktion verknüpft ein Element nicht mit einem Anker; es positioniert das Element lediglich relativ zu diesem Anker. Die CSS-Eigenschaft [`position-anchor`](/de/docs/Web/CSS/position-anchor) oder das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) wird weiterhin benötigt, um die Zuordnung zu erstellen.

- `<anchor-side>`

  - : Gibt die Seite des Ankers oder den relativen Abstand von der `start`-Seite an, zu dem das Element relativ positioniert wird. Wenn ein physikalischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der inset-Eigenschaft ist, auf die `anchor()` gesetzt ist, wird der Ersatzwert verwendet. Gültige Werte umfassen:

    - `top`
      - : Die obere Seite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die untere Seite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `start`
      - : Der logische Anfang des [containing block](/de/docs/Web/CSS/Containing_block) des Ankerelements entlang der Achse der inset-Eigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des Containing-Block des Ankerelements entlang der Achse der inset-Eigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der inset-Eigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der inset-Eigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `center`
      - : Das Zentrum der Achse der inset-Eigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt den Abstand in Prozent vom Anfang des Inhalts des Elements entlang der Achse der inset-Eigenschaft, auf die die `anchor()`-Funktion gesetzt ist, an.

    Das CSS-Ankerpositionierungsmodul führt zwei zusätzliche `<anchor-side>`-Werte ein, `inside` und `outside`, die noch nicht implementiert wurden.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Ersatzwert an, zu dem die Funktion aufgelöst werden soll, wenn die `anchor()`-Funktion sonst nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht das Positionieren eines Elements relativ zu den Kanten eines Ankerelements. Sie ist nur gültig innerhalb von {{Glossary("inset_properties", "inset-Eigenschaft")}}-Werten, die auf absolute oder verbindliche Positionselemente gesetzt sind.

Sie gibt einen `<length>`-Wert an, der den Abstand zwischen der durch den inset-Wert angegebenen Seite des ankerpositionierten Elements und der durch den ausgewählten `<anchor-side>`-Wert angegebenen Seite des Ankerelements angibt. Da sie einen `<length>` zurückgibt, kann sie innerhalb anderer [CSS-Funktionen](/de/docs/Web/CSS/CSS_Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn kein Anker mit dem im `<anchor-element>` angegebenen Namen existiert oder wenn das positionierte Element keinen Anker mit ihm verbunden hat (d.h. über die {{cssxref("position-anchor")}}-Eigenschaft), wird der erste Parameter als ungültig betrachtet und der Ersatz-`<length-percentage>`-Wert verwendet, wenn einer verfügbar ist. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf dem positionierten Element angegeben wurde, aber kein Anker mit ihm assoziiert war, würde der Ersatzwert verwendet und `top` würde einen berechneten Wert von `50px` erhalten.

Für detaillierte Informationen zu Anker-Features und deren Verwendung, siehe das [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)-Leitfaden.

### Eigenschaften, die `anchor()`-Funktionswerte akzeptieren

Die {{Glossary("inset_properties", "Inset-Eigenschaften")}} von CSS, die eine `anchor()`-Funktion als Wertkomponente akzeptieren, umfassen:

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

### Kompatibilität von Inset-Eigenschaften und `<anchor-side>`-Werten

Beim Verwenden einer `anchor()`-Funktion innerhalb eines inset-Eigenschaftswertes muss der innerhalb der `anchor()`-Funktion angegebene `<anchor-side>`-Parameter mit der Achse kompatibel sein, auf die sich die inset-Eigenschaft bezieht.

Das bedeutet, dass physikalische `<anchor-side>`-Werte innerhalb der Werte physikalischer inset-Eigenschaften verwendet werden können, wenn die Eigenschaft die gleiche Achsenrichtung wie die `<anchor-side>` besitzt. Mit anderen Worten, die `top`- und `bottom`-Seiten sind innerhalb der `left`- und `right`-Eigenschaftswerte nicht gültig, und die `left`- und `right`-Seiten sind in `top`- und `bottom`-Eigenschaftswerten nicht gültig. Beispielsweise ist `top: anchor(bottom)` in Ordnung, da beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wurde, würde der Ersatzwert verwendet, sodass `top` einen berechneten Wert von `50px` erhalten würde. Wenn kein Ersatz vorhanden ist, verhält sich die inset-Eigenschaft, als ob sie auf `auto` gesetzt wäre.

Sie können logische `<anchor-side>`-Werte innerhalb sowohl logischer als auch physikalischer inset-Eigenschaften verwenden, da logische `<anchor-side>`-Werte relativ zur relevanten Achse der inset-Eigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel, `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` funktionieren alle gut.

Die Situation wird komplizierter bei der Verwendung physikalischer `<anchor-side>`-Parameter innerhalb logischer inset-Eigenschaftswerte, da die physikalische Seite mit der Achse übereinstimmen muss, zu der die inset-Eigenschaft im aktuellen Schreibmodus relevant ist. Zum Beispiel:

- In einem horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist unvereinbar. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wäre, läge der berechnete Wert bei `50px`, und das positionierte Element würde sich `50px` vom Block-Ende (unten) seines nächsten positionierten Vorfahren oder des Viewports, je nach gesetztem `position`-Wert, befinden.
- In einem vertikalen Schreibmodus verläuft die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist unvereinbar. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, läge der berechnete Wert bei `50px`, und das positionierte Element würde sich `50px` vom Block-Ende (links oder rechts, je nach Schreibmodus) seines nächsten positionierten Vorfahren oder des Viewports, je nach gesetztem `position`-Wert, befinden.

Um das mögliche Verwirrungspotential mit diesen Werten zu verringern, wird Ihnen empfohlen, logische inset-Eigenschaften mit logischen `<anchor-side>`-Werten und physikalische inset-Eigenschaften mit physikalischen `<anchor-side>`-Werten zu verwenden. Sie sollten die Verwendung von logischen Werten wann immer möglich favorisieren, da sie besser für die {{Glossary("Internationalisierung", "Internationalisierung")}} geeignet sind.

Die `center`- und `<percentage>`-Werte sind innerhalb der `anchor()`-Funktion innerhalb aller logischen und physikalischen inset-Eigenschaften gültig.

Die untenstehende Tabelle listet die inset-Eigenschaften und die `<anchor-side>`-Parameterwerte auf, die mit ihnen kompatibel sind. Wir haben nur die Langform-Inset-Eigenschaften aufgelistet; diese umfassen die Werte der Kurzformen der Inset-Eigenschaft.

| Inset-Eigenschaft                           | Kompatibler `<anchor-side>`-Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn sich die `anchor()`-Funktion auf eine Seite des Standardankers bezieht, können Sie eine {{cssxref("margin")}} hinzufügen, um bei Bedarf Abstände zwischen den Kanten des Ankers und des positionierten Elements zu erzeugen. Alternativ können Sie die `anchor()`-Funktion innerhalb einer {{cssxref("calc")}}-Funktion verwenden, um Abstände hinzuzufügen.

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

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie in der `anchor()`-Funktion der verschiedenen inset-Eigenschaften des gleichen Elements verschiedene `<anchor-element>`-Namen angeben (siehe [Element, das relativ zu mehreren Ankern positioniert ist](#element_relativ_zu_mehreren_ankern_positioniert) unten). Dies kann verwendet werden, um nützliche Funktionen wie Ziehgriffe an den Ecken eines positionierten Elements zu erstellen, die verwendet werden können, um es zu vergrößern oder zu verkleinern.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem einen Anker verbunden, der über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut) definiert ist. Dies ist der Anker, mit dem das Element mitrollt, wenn die Seite scrollt; es kann auch verwendet werden, um zu steuern, wann das Element [bedingt ausgeblendet](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines ankerpositionierten Elements auf die Höhe seines Ankers einzustellen, indem die unteren und oberen Kanten auf die unteren und oberen Kanten des Ankers gesetzt werden. Die `anchor()`-Funktion wird dann innerhalb einer `calc()`-Funktion verwendet, um das ankerpositionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element ein, das wir als unseren Anker setzen werden, und ein {{htmlelement("p")}}, das wir relativ zu diesem Anker positionieren wollen:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name`-Wert des Ankerelements als Wert der `position-anchor`-Eigenschaft des positionierten Elements, um die Elemente miteinander zu verbinden, und setzen dann drei inset-Eigenschaften auf dem ankerpositionierten Element. Die ersten beiden positionieren die obere Kante des Elements bündig zur oberen Kante des Ankers und die untere Kante bündig zur unteren Kante des Ankers. In der dritten inset-Eigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` rechts der rechten Kante des Ankers zu positionieren.

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

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mit `anchor()`-Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, die es Ihnen ermöglichen, die `<anchor-side>`-Werte innerhalb dieser `anchor()`-Funktionen zu variieren, sodass Sie sehen können, welche Auswirkungen sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als das Ankerelement und das positionierte Element, das wir damit verbinden wollen, gedacht.

Wir fügen auch etwas Fülltext um die beiden `<div>`-Elemente ein, um den {{htmlelement("body")}} zu vergrößern, damit er scrollt. Dieses Beispiel enthält auch zwei {{htmlelement("select")}}-Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>`-Werte ermöglichen, um das positionierte Element zu platzieren. Wir haben den Fülltext und die `<select>`-Elemente der Übersichtlichkeit halber verborgen.

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

Wir deklarieren das `anchor`-`<div>` als Ankerelement, indem wir mit der {{cssxref("anchor-name")}}-Eigenschaft einen Ankernamen darauf setzen. Wir verbinden es dann mit dem positionierten Element, indem wir denselben Wert für dessen {{cssxref("position-anchor")}}-Eigenschaft setzen. `top: anchor(--myAnchor bottom)` positioniert die obere Kante der Infobox bündig zur unteren Kante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig zur rechten Kante ihres Ankers positioniert. Dies bietet eine Anfangsposition, die überschrieben wird, wenn verschiedene Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir horchen auf das `change`-Ereignis, das eintritt, wenn ein neuer `<anchor-side>`-Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion innerhalb der entsprechenden inset-Eigenschaft (`top` oder `left`) der Infobox.

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

### Element relativ zu mehreren Ankern positioniert

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des ankerpositionierten Elements einzustellen. Die Anker können über Tastatursteuerungen oder durch Ziehen bewegt werden, wodurch die Größe des positionierten Elements geändert wird.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}}-Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse von `infobox` und wird als das positionierte Element definiert. Wir fügen das Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzu, um ihnen den Erhalt von Tastaturfokus zu ermöglichen.

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

Die Anker haben jeweils unterschiedliche {{cssxref("anchor-name")}}-Werte, einen {{cssxref("position")}}wert von `absolute` und unterschiedliche Inset-Werte, um die Anker in einer rechteckigen Formation zu positionieren.

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

Das ankerpositionierte Element, dessen `position` auf `fixed` gesetzt ist, wird mit einem Anker über seine {{cssxref("position-anchor")}}-Eigenschaft assoziiert. Es ist relativ zu zwei Ankern positioniert, indem zwei unterschiedliche `<anchor-name>`-Werte mit den `anchor()`-Funktionen auf seinen inset-Eigenschaften gesetzt sind. In diesem Fall haben wir {{cssxref("percentage")}}-Werte für den `<anchor-side>`-Parameter verwendet, der den Abstand vom Anfang der Achse der inset-Eigenschaft, auf die die Funktion gesetzt ist, angibt.

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

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder tabben Sie zu ihnen und verwenden Sie die W, A, S und D-Tasten, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie sich deren Position ändert und als Konsequenz die Fläche des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioniert relativ zu mehreren Ankern", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptnachweis und nicht dafür gedacht, in Produktionscode verwendet zu werden. Zu seinen Schwächen gehört, dass das Beispiel unterbricht, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Versuch von Fallbacks und bedingtem Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
