---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor()`**-Funktion [CSS](/de/docs/Web/CSS) [function](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann innerhalb von Werten einer **anchor-positioned**-Element-[[inset property](#properties_that_accept_anchor_function_values) verwendet werden, um einen Längenwert relativ zur Position der Kanten des zugehörigen Ankerelements zurückzugeben.

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

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name)-Eigenschaft eines Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn ausgelassen, wird der **Standardanker** des Elements verwendet, auf den in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft verwiesen wird oder der dem Element über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor()`-Funktion ordnet ein Element nicht einem Anker zu; es positioniert lediglich das Element relativ zu diesem Anker. Die CSS-Eigenschaft [`position-anchor`](/de/docs/Web/CSS/position-anchor) oder das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) wird weiterhin benötigt, um die Zuordnung zu erstellen.

- `<anchor-side>`

  - : Gibt die Seite des Ankers oder die relative Entfernung von der `start`-Seite an, zu der das Element relativ positioniert wird. Wenn ein physikalischer oder logischer Wert verwendet wird, der nicht mit der Einsetzeigenschaft kompatibel ist, auf der `anchor()` gesetzt ist, wird der Fallback-Wert verwendet. Gültige Werte sind:

    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements
    - `start`
      - : Der logische Anfang des enthaltenden Blocks des Ankerelements entlang der Achse der Einsetzeigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des enthaltenden Blocks des Ankerelements entlang der Achse der Einsetzeigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Einsetzeigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Einsetzeigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `center`
      - : Das Zentrum der Achse der Einsetzeigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - {{cssxref("prozent")}}
      - : Gibt die Entfernung als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der Einsetzeigenschaft an, auf der die `anchor()`-Funktion gesetzt ist.

    Das CSS-Ankerpositionierungsmodul spezifiziert zwei zusätzliche `<anchor-side>`-Werte, `inside` und `outside`, die noch nicht implementiert wurden.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, zu dem die Funktion aufgelöst werden soll, wenn die `anchor()`-Funktion ansonsten nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht die Positionierung eines Elements relativ zu den Kanten eines Ankerelements. Sie ist nur innerhalb von Werten der {{Glossary("inset_properties", "inset property")}} gültig, die auf absolut oder fix positionierte Elemente gesetzt sind.

Sie gibt einen `<length>`-Wert zurück, der den Abstand zwischen der Seite des Anker-positionierten Elements, die durch den Einsetzwert spezifiziert wird, und der Seite des Ankerelements, die durch den gewählten `<anchor-side>`-Wert spezifiziert wird, angibt. Da sie einen `<length>` zurückgibt, kann sie innerhalb anderer CSS-Funktionen verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}}, usw.

Wenn kein Anker mit dem durch `<anchor-name>` spezifizierten Namen existiert oder wenn dem positionierten Element kein Anker zugeordnet ist (d.h. über die {{cssxref("position-anchor")}}-Eigenschaft), wird der erste Parameter als ungültig angesehen und der Fallback-`<length-percentage>`-Wert wird verwendet, falls einer verfügbar ist. Wenn zum Beispiel `top: anchor(bottom, 50px)` auf dem positionierten Element spezifiziert wäre, aber kein Anker damit verknüpft wäre, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhielte.

Für detaillierte Informationen zu Ankerfunktionen und -verwendung siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modulseite und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

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

### Kompatibilität von Einsetzeigenschaften und `<anchor-side>`-Werte

Bei der Verwendung einer `anchor()`-Funktion innerhalb eines Einsetz-Bereichswertes muss der innerhalb der `anchor()`-Funktion angegebene `<anchor-side>`-Parameter mit der Achse kompatibel sein, auf der die Einsetzeigenschaft liegt.

Das bedeutet, dass physikalische `<anchor-side>`-Werte innerhalb der Werte physikalischer Einsetzeigenschaften verwendet werden können, wenn die Eigenschaft die gleiche Achsenrichtung wie der `<anchor-side>` hat. Mit anderen Worten, die oberen und unteren Seiten sind innerhalb der linken und rechten Eigenschaftswerte nicht gültig, und die linken und rechten Seiten sind innerhalb der oberen und unteren Eigenschaftswerte nicht gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da beide vertikale Werte sind, `top: anchor(left)` ist jedoch nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` spezifiziert würde, würde der Fallback-Wert verwendet und `top` erhielte einen berechneten Wert von `50px`. Wenn kein Fallback vorhanden ist, verhält sich die Einsetzeigenschaft so, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>`-Werte sowohl innerhalb logischer als auch physikalischer Einsetzeigenschaften verwenden, da logische `<anchor-side>`-Werte relativ zur relevanten Achse der Einsetzeigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle gut.

Die Situation wird komplizierter, wenn physikalische `<anchor-side>`-Parameter innerhalb logischer Einsetzwerte verwendet werden, da die physikalische Seite mit der Achse übereinstimmen muss, auf die sich die Einsetzeigenschaft im aktuellen Schreibmodus bezieht. Zum Beispiel:

- Im horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, während `inset-block-end: anchor(left)` nicht kompatibel ist. Wenn `inset-block-end: anchor(left, 50px)` festgelegt wäre, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (unten) seines nächsten positionierten Vorgängers oder des Viewports, abhängig vom gesetzten `position`-Wert, positioniert werden.
- Im vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist nicht kompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (links oder rechts, je nach Schreibmodus) seines nächsten positionierten Vorgängers oder des Viewports, abhängig vom gesetzten `position`-Wert, positioniert werden.

Um Verwirrungspotential bei diesen Werten zu minimieren, empfiehlt es sich, logische Einsetzeigenschaften mit logischen `<anchor-side>`-Werten und physikalische Einsetzeigenschaften mit physikalischen `<anchor-side>`-Werten zu verwenden. Sie sollten wann immer möglich logische Werte bevorzugen, da sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} sind.

Die `center`- und `<percentage>`-Werte sind innerhalb der `anchor()`-Funktion in allen logischen und physikalischen Einsetzeigenschaften gültig.

Die Tabelle unten listet die Einsetzeigenschaften und die `<anchor-side>`-Parameterwerte, die mit ihnen kompatibel sind. Wir haben nur die Langform-Einsetzeigenschaften aufgeführt; diese umfassen die Kurzform-Einsetzeigenschaftswerte.

| Einsetzeigenschaft                          | Kompatibler `<anchor-side>`-Wert                                                                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Alle                                        | `center`                                                                                                                                         |
| Alle                                        | `<percentage>`                                                                                                                                   |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                        |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                        |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` im horizontalen Schreibmodus<br>`left` und `right` im vertikalen Schreibmodus |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` im horizontalen Schreibmodus<br>`top` und `bottom` im vertikalen Schreibmodus |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn die `anchor()`-Funktion auf eine Seite des Standardankers verweist, können Sie eine {{cssxref("margin")}} einfügen, um den Abstand zwischen den Kanten des Ankers und des positionierten Elements nach Bedarf zu schaffen. Alternativ können Sie die `anchor()`-Funktion innerhalb einer {{cssxref("calc")}}-Funktion einfügen, um Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements und fügt dann einen Rand hinzu, um etwas Platz zwischen den Kanten zu schaffen:

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

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie unterschiedliche `<anchor-name>`-Werte in der `anchor()`-Funktion verschiedener Einsetzeigenschaften auf demselben Element angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionalitäten wie Ziehgriffe an den Ecken eines positionierten Elements zu erstellen, die verwendet werden können, um es zu skalieren.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit einem einzelnen Anker über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor)-Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor)-HTML-Attribut) verbunden. Dies ist der Anker, mit dem das Element scrollt, wenn die Seite scrollt; es kann auch verwendet werden, um zu steuern, wann das Element [bedingt ausgeblendet](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines Anker-positionierten Elements auf die Höhe seines Ankers zu setzen, indem die unteren und oberen Kanten auf die unteren und oberen Kanten des Ankers gesetzt werden. Die `anchor()`-Funktion innerhalb einer `calc()`-Funktion wird dann verwendet, um das Anker-positionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element ein, das wir als unseren Anker festlegen, und ein {{htmlelement("p")}}-Element, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name`-Wert des Ankerelements als Wert der `position-anchor`-Eigenschaft des positionierten Elements, um die Elemente zu verknüpfen, und setzen dann drei Einsetzeigenschaften auf das Anker-positionierte Element. Die ersten beiden positionieren die obere Kante des Elements bündig mit der oberen Kante des Ankers und die untere Kante bündig mit der unteren Kante des Ankers. In der dritten Einsetzeigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` zur rechten Kante des Ankers zu positionieren.

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

### Vergleich von verschiedenen `anchor-side`-Werten

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaften positioniert ist, die mithilfe von `anchor()`-Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, mit denen Sie die `<anchor-side>`-Werte innerhalb dieser `anchor()`-Funktionen variieren können, um zu sehen, welche Auswirkungen sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente, eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, mit dem wir es verbinden wollen.

Wir fügen auch einige Fülltexte um die beiden `<div>`-Elemente herum hinzu, um den {{htmlelement("body")}} größer zu machen, sodass er scrollt. Dieses Beispiel enthält auch zwei {{htmlelement("select")}}-Elemente, um die Dropdown-Menüs zu erstellen, mit denen die Auswahl unterschiedlicher `<anchor-side>`-Werte zur Positionierung des positionierten Elements ermöglicht wird. Wir haben die Fülltexte und die `<select>`-Elemente wegen Kürze ausgeblendet.

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

Wir deklarieren das `anchor`-`<div>` als Ankerelement, indem wir ihm einen Ankernamen über die {{cssxref("anchor-name")}}-Eigenschaft zuweisen. Dann verknüpfen wir es mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}}-Eigenschaft setzen. `top: anchor(--myAnchor bottom)` positioniert die obere Kante der Infobox bündig mit der unteren Kante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig mit der rechten Kante ihres Ankers positioniert. Dies bietet eine Ausgangsposition, die überschrieben wird, wenn verschiedene Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir hören das `change`-Ereignis ab, das auftritt, wenn ein neuer `<anchor-side>`-Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>`-Wert in der `anchor()`-Funktion innerhalb der relevanten Einsetzeigenschaft (`top` oder `left`) der Infobox.

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

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecke des Anker-positionierten Elements zu bestimmen. Die Anker können über Tastatursteuerungen oder durch Ziehen bewegt werden, wobei das positionierte Element neu skaliert wird.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}}-Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jeder von ihnen hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse von `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attribut hinzu, um ihnen zu ermöglichen, den Tastaturfokus zu erhalten.

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

Die Anker erhalten jeweils einen anderen {{cssxref("anchor-name")}}-Wert, einen {{cssxref("position")}}-Wert von `absolute` und unterschiedliche Einsetzeinstellungen, um die Anker in einer rechteckigen Anordnung zu positionieren.

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

Das Anker-positionierte Element, dessen `position` auf `fixed` gesetzt ist, wird über seine {{cssxref("position-anchor")}}-Eigenschaft mit einem Anker verknüpft. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>`-Werte mit den `anchor()`-Funktionen, die auf seine Einsetzeigenschaften gesetzt sind, einbezogen werden. In diesem Fall haben wir {{cssxref("percent")}}-Werte für den `<anchor-side>`-Parameter verwendet, die den Abstand vom Anfang der Achse der Einsetzeigenschaft angeben, auf der die Funktion gesetzt ist.

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

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder navigieren Sie zu ihnen und verwenden Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D>, um sie nach oben, unten, links und rechts zu bewegen. Beobachten Sie, wie sich ihre Position verändert und infolgedessen die Fläche des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente erhalten bleiben.

{{EmbedLiveSample("Element positioniert relativ zu mehreren Ankern", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Prototyp und nicht zur Verwendung in Produktivcode bestimmt. Zu seinen Mängeln gehört, dass das Beispiel bricht, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizuschieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Overflow: Versuchen Sie Fallbacks und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
