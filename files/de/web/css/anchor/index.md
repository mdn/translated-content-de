---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann innerhalb eines **ankerpositionierten** Elements in den Werten der [Einfügeigenschaft](#properties_that_accept_anchor_function_values) verwendet werden und gibt einen Längenwert relativ zur Position der Kanten des zugeordneten Ankerelements zurück.

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

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert eines Ankerelements, relativ zu dem Sie die Seite des Elements positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert oder dem Element über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor()` Funktion ordnet ein Element keinem Anker zu; es positioniert das Element nur relativ zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/position-anchor) CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut wird weiterhin benötigt, um die Zuordnung zu erstellen.

- `<anchor-side>`

  - : Gibt die Seite des Ankers oder die relative Entfernung von der `start` Seite an, zu der das Element relativ positioniert ist. Wenn ein physischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der Einfügeigenschaft ist, auf der `anchor()` festgelegt ist, wird der Rückfallwert verwendet. Gültige Werte umfassen:

    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `start`
      - : Der logische Beginn des [containing block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements entlang der Achse der Einfügeigenschaft, auf der die `anchor()` Funktion festgelegt ist.
    - `end`
      - : Das logische Ende des Containing Block des Ankerelements entlang der Achse der Einfügeigenschaft, auf der die `anchor()` Funktion festgelegt ist.
    - `self-start`
      - : Der logische Beginn des Inhalts des Ankerelements entlang der Achse der Einfügeigenschaft, auf der die `anchor()` Funktion festgelegt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Einfügeigenschaft, auf der die `anchor()` Funktion festgelegt ist.
    - `center`
      - : Das Zentrum der Achse der Einfügeigenschaft, auf der die `anchor()` Funktion festgelegt ist.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung als Prozentangabe vom Beginn des Inhalts des Elements entlang der Achse der Einfügeigenschaft an, auf der die `anchor()` Funktion festgelegt ist.

    Das CSS-Ankerpositionierungsmodul spezifiziert zwei zusätzliche `<anchor-side>` Werte, `inside` und `outside`, die noch nicht implementiert sind.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Rückfallwert an, auf den die Funktion zurückgreifen sollte, wenn die `anchor()` Funktion ansonsten nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die Funktion `anchor()` ermöglicht das Positionieren eines Elements relativ zu den Kanten eines Ankerelements. Sie ist nur innerhalb von {{Glossary("inset_properties", "Einfügeigenschaft")}}-Werten gültig, die auf absolut oder fest positionierten Elementen gesetzt sind.

Sie gibt einen `<length>` Wert zurück, der die Entfernung zwischen der durch den Einfügewert spezifizierten Seite des ankerpositionierten Elements und der durch den gewählten `<anchor-side>` Wert spezifizierten Seite des Ankerelements angibt. Da sie einen `<length>` zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn kein Anker mit dem durch `<anchor-name>` angegebenen Namen existiert oder wenn das positionierte Element keinem Anker zugeordnet ist (z. B. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig angesehen und der Rückfallwert `<length-percentage>` verwendet, falls vorhanden. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf dem positionierten Element angegeben wurde, aber kein Anker damit assoziiert ist, würde der Rückfallwert verwendet, sodass `top` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und -verwendung, siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor()` Funktionswerte akzeptieren

Die CSS {{Glossary("inset_properties", "Einfügeeigenschaften")}}, die eine `anchor()` Funktion als Wertkomponente akzeptieren, sind:

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

### Kompatibilität von Einfügeeigenschaften und `<anchor-side>` Werten

Beim Verwenden einer `anchor()` Funktion innerhalb eines Einfügeeigenschaftswertes muss der im `anchor()` Funktion angegebene `<anchor-side>` Parameter kompatibel mit der Achse sein, auf der die Einfügeeigenschaft liegt.

Dies bedeutet, dass physische `<anchor-side>` Werte innerhalb der Werte physischer Einfügeeigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Achsrichtung wie die `<anchor-side>` hat. Mit anderen Worten, die `top` und `bottom` Seiten sind innerhalb der `left` und `right` Eigenschaftswerte nicht gültig und die `left` und `right` Seiten sind innerhalb `top` und `bottom` Eigenschaftswerte nicht gültig. Beispielsweise ist `top: anchor(bottom)` in Ordnung, da beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wäre, würde der Rückfallwert benutzt, so dass `top` einen berechneten Wert von `50px` erhält. Wenn kein Rückfall vorhanden ist, verhält sich die Einfügeeigenschaft, als ob sie auf `auto` gesetzt wäre.

Sie können logische `<anchor-side>` Werte sowohl innerhalb logischer als auch physischer Einfügeeigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der Einfügeeigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Beispielsweise funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle problemlos.

Die Geschichte wird komplizierter, wenn physische `<anchor-side>` Parameter innerhalb logischer Einfügeeigenschaftswerte verwendet werden, da die physische Seite mit der Achse übereinstimmen muss, auf die die Einfügeeigenschaft im aktuellen Schreibmodus relevant ist. Zum Beispiel:

- In einem horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, somit funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist inkompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wäre, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (unten) seines nächstgelegenen positionierten Vorfahren oder des Viewports positioniert, abhängig vom gesetzten `position` Wert.
- In einem vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist inkompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (links oder rechts je nach Schreibmodus) seines nächstgelegenen positionierten Vorfahren oder des Viewports positioniert, abhängig vom gesetzten `position` Wert.

Um mögliche Verwirrungen mit diesen Werten zu vermeiden, wird empfohlen, logische Einfügeeigenschaften mit logischen `<anchor-side>` Werten und physische Einfügeeigenschaften mit physischen `<anchor-side>` Werten zu verwenden. Sie sollten logische Werte bevorzugen, wann immer möglich, da sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()` Funktion innerhalb aller logischen und physischen Einfügeeigenschaften gültig.

Die untenstehende Tabelle listet die Einfügeeigenschaften und die `<anchor-side>` Parameterwerte auf, die mit ihnen kompatibel sind. Wir haben nur die Langform Einfügeeigenschaften aufgeführt; diese umfassen die Kurzform Einfügeeigenschaftswerte.

| Einfügeeigenschaft                          | Kompatibler `<anchor-side>` Wert                                                                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Alle                                        | `center`                                                                                                                                         |
| Alle                                        | `<percentage>`                                                                                                                                   |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                        |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                        |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` im horizontalen Schreibmodus<br>`left` und `right` im vertikalen Schreibmodus |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` im horizontalen Schreibmodus<br>`top` und `bottom` im vertikalen Schreibmodus |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn sich die `anchor()` Funktion auf eine Seite des Standardankers bezieht, können Sie einen {{cssxref("margin")}} einfügen, um Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()` Funktion innerhalb einer {{cssxref("calc")}} Funktion einfügen, um Abstand hinzuzufügen.

In diesem Beispiel wird die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements positioniert und dann ein Abstand eingefügt, um etwas Platz zwischen den Kanten zu schaffen:

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

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie verschiedene `<anchor-name>` Werte innerhalb der `anchor()` Funktion verschiedener Einfügeeigenschaften auf demselben Element angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionen wie Ziehgriffe an den Ecken eines positionierten Elements zu erstellen, die zum Vergrößern oder Verkleinern verwendet werden können.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert sein kann, ist es immer nur mit dem einzelnen Anker verbunden, der über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut) definiert ist. Dies ist der Anker, mit dem das Element beim Bildlauf der Seite scrollt; er kann auch verwendet werden, um zu kontrollieren, wann das Element [bedingungsweise versteckt](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()` Funktion verwendet, um die Höhe eines ankerpositionierten Elements auf die Höhe seines Ankers festzulegen, indem die Unter- und Oberkanten auf die Unter- und Oberkanten des Ankers gesetzt werden. Die `anchor()` Funktion wird innerhalb einer `calc()` Funktion verwendet, um das ankerpositionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element ein, das als unser Anker festgelegt wird, und ein {{htmlelement("p")}} Element, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements als Wert der `position-anchor` Eigenschaft des positionierten Elements, um die Elemente zuzuordnen, und setzen dann drei Einfügeeigenschaften auf dem ankerpositionierten Element. Die ersten beiden positionieren die Oberkante des Elements bündig mit der Oberkante des Ankers und die Unterkante bündig mit der Unterkante des Ankers. In der dritten Einfügeeigenschaft wird die `anchor()` Funktion innerhalb einer `calc()` Funktion verwendet, um die linke Kante des Elements `10px` von der rechten Kante des Ankers zu positionieren.

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

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mit `anchor()` Funktionen definiert sind. Es enthält auch zwei Drop-Down-Menüs, mit denen Sie die `<anchor-side>` Werte innerhalb dieser `anchor()` Funktionen variieren können, um zu sehen, welche Wirkung sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als Ankerelement und das positionierte Element vorgesehen, die wir damit zuordnen.

Wir fügen auch einige Fülltexte um die beiden `<div>` Elemente ein, um den {{htmlelement("body")}} größer zu machen, damit es scrollt. Dieses Beispiel enthält auch zwei {{htmlelement("select")}} Elemente, um die Drop-Down-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>` Werte ermöglichen, mit denen das positionierte Element platziert wird. Wir haben den Fülltext und die `<select>` Elemente aus Gründen der Kürze verborgen.

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

Wir deklarieren das `anchor` `<div>` als ein Ankerelement, indem wir ihm einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft zuweisen. Dann ordnen wir es dem positionierten Element zu, indem wir denselben Wert für seine {{cssxref("position-anchor")}} Eigenschaft setzen. `top: anchor(--myAnchor bottom)` positioniert die Oberkante der Infobox bündig zur Unterkante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig zur rechten Kante ihres Ankers positioniert. Dies bietet eine Anfangsposition, die überschrieben wird, wenn andere Werte aus den Drop-Down-Menüs ausgewählt werden.

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

Wir hören das `change` Ereignis ab, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()` Funktion innerhalb der relevanten Einfügeeigenschaft der Infobox (`top` oder `left`) Wert.

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

Wählen Sie verschiedene Werte aus den Drop-Down-Menüs aus, um zu sehen, wie sie die Positionierung der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element positioniert relativ zu mehreren Ankern

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des ankerpositionierten Elements festzulegen. Die Anker können über Tastatursteuerungen oder durch Ziehen verschoben werden, wodurch das positionierte Element geändert wird.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Der letzte `<div>` hat eine Klasse von `infobox` und wird als positioniertes Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) Attribut hinzu, um ihnen zu ermöglichen, Tastaturfokus zu erhalten.

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

Die Anker erhalten jeweils einen anderen {{cssxref("anchor-name")}} Wert, einen {{cssxref("position")}} Wert von `absolute`, und unterschiedliche Einfügewerte, um die Anker in einer rechteckigen Formation zu positionieren.

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

Das ankerpositionierte Element, dessen `position` auf `fixed` gesetzt ist, wird über seine {{cssxref("position-anchor")}} Eigenschaft einem Anker zugeordnet. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>` Werte mit den `anchor()` Funktionen festgelegt werden, die auf seinen Einfügeeigenschaften gesetzt sind. In diesem Fall haben wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet, die die Entfernung vom Beginn der Achse der Einfügeeigenschaft angeben, auf der die Funktion gesetzt ist.

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

Das positionierte Element wird relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder tabben Sie zu ihnen und verwenden Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, und <kbd>D</kbd> Tasten, um sie nach oben, unten, links und rechts zu bewegen. Beobachten Sie, wie sich ihre Position ändert und infolgedessen der Bereich des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Proof-of-Concept und nicht zur Verwendung in Produktionscode gedacht. Unter seinen Mängeln bricht das Beispiel, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbei zu bewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Versuchen Sie Rückfälle und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
