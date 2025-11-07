---
title: anchor()
slug: Web/CSS/Reference/Values/anchor
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`anchor()`**-Funktion in [CSS](/de/docs/Web/CSS) [funktioniert](/de/docs/Web/CSS/Reference/Values/Functions) innerhalb der Werteigenschaften eines **anchor-positionierten** Elements der [inset-Eigenschaft](#properties_that_accept_anchor_function_values) und liefert einen Längenwert relativ zur Position der Ränder des zugehörigen Anker-Elements.

## Syntax

```css
/* side or percentage */
top: anchor(bottom);
top: anchor(50%);
top: calc(anchor(bottom) + 10px)
inset-block-end: anchor(start);

/* side of named anchor */
top: anchor(--my-anchor bottom);
inset-block-end: anchor(--my-anchor start);

/* side of named anchor with fallback */
top: anchor(--my-anchor bottom, 50%);
inset-block-end: anchor(--my-anchor start, 200px);
left: calc(anchor(--my-anchor right, 0%) + 10px);
```

### Parameter

Die Syntax der `anchor()`-Funktion ist wie folgt:

```plain
anchor(<anchor-name> <anchor-side>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name)-Eigenschaft eines Anker-Elements, zu dem Sie die Seite des Elements positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wird er weggelassen, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor)-Eigenschaft referenziert oder dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor()`-Funktion verbindet ein Element nicht mit einem Anker; es positioniert das Element lediglich relativ zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor)-CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut wird weiterhin benötigt, um die Verbindung zu schaffen.

- `<anchor-side>`

  - : Gibt die Seite des Ankers an, oder die relative Distanz von der `start`-Seite, zu der das Element relativ positioniert ist. Wenn ein physischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der `inset`-Eigenschaft ist, bei der `anchor()` festgelegt ist, wird der Fallback-Wert verwendet. Gültige Werte sind:
    - `top`
      - : Die obere Kante des Anker-Elements.
    - `right`
      - : Die rechte Kante des Anker-Elements.
    - `bottom`
      - : Die untere Kante des Anker-Elements.
    - `left`
      - : Die linke Kante des Anker-Elements.
    - `inside`
      - : Die gleiche Seite wie die `inset`-Eigenschaft.
    - `outside`
      - : Die gegenüberliegende Seite der `inset`-Eigenschaft.
    - `start`
      - : Der logische Anfang des [enthältenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) des Anker-Elements entlang der Achse der `inset`-Eigenschaft, bei der die `anchor()`-Funktion festgelegt ist.
    - `end`
      - : Das logische Ende des enthaltenden Blocks des Anker-Elements entlang der Achse der `inset`-Eigenschaft, bei der die `anchor()`-Funktion festgelegt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Anker-Elements entlang der Achse der `inset`-Eigenschaft, bei der die `anchor()`-Funktion festgelegt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Anker-Elements entlang der Achse der `inset`-Eigenschaft, bei der die `anchor()`-Funktion festgelegt ist.
    - `center`
      - : Das Zentrum der Achse der `inset`-Eigenschaft, bei der die `anchor()`-Funktion festgelegt ist.
    - {{cssxref("percentage")}}
      - : Gibt die Distanz als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der `inset`-Eigenschaft an, bei der die `anchor()`-Funktion festgelegt ist.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, zu dem die Funktion lösen sollte, wenn die `anchor()`-Funktion sonst nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht es, ein Element relativ zu den Rändern eines Anker-Elements zu positionieren. Sie ist nur gültig innerhalb von {{Glossary("inset_properties", "inset-Eigenschafts")}}-Werten, die auf absolut oder fest positionierten Elementen gesetzt sind.

Sie gibt einen `<length>`-Wert zurück, der die Distanz zwischen der durch den inset-Wert spezifizierten Seite des anchor-positionierten Elements und der durch den gewählten `<anchor-side>`-Wert spezifizierten Seite des Anker-Elements angibt. Da sie einen `<length>` zurückgibt, kann sie innerhalb anderer [CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn kein Anker mit dem durch `<anchor-name>` spezifizierten Namen existiert oder das positionierte Element keinem Anker zugeordnet wurde (d.h. über die {{cssxref("position-anchor")}}-Eigenschaft), wird der erste Parameter als ungültig betrachtet und der Fallback-`<length-percentage>`-Wert verwendet, falls verfügbar. Wenn beispielsweise `top: anchor(bottom, 50px)` auf dem positionierten Element angegeben wäre, aber kein Anker damit verbunden wäre, würde der Fallback-Wert verwendet werden, sodass `top` einen berechneten Wert von `50px` erhalten würde.

Für detaillierte Informationen über Ankerfunktionen und -anwendungen siehe das Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und die [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

### Eigenschaften, die `anchor()`-Funktionswerte akzeptieren

Die CSS-{{Glossary("inset_properties", "inset-Eigenschaften")}}, die eine `anchor()`-Funktion als Wertkomponente akzeptieren, umfassen:

- {{cssxref("top")}}
- {{cssxref("left")}}
- {{cssxref("bottom")}}
- {{cssxref("right")}}
- {{cssxref("inset")}} shorthand
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block")}} shorthand
- {{cssxref("inset-inline-start")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline")}} shorthand

### Kompatibilität von `inset`-Eigenschaften und `<anchor-side>`-Werten

Bei Verwendung einer `anchor()`-Funktion innerhalb eines `inset`-Eigenschaftswerts muss der innerhalb der `anchor()`-Funktion angegebene `<anchor-side>`-Parameter mit der Achse kompatibel sein, auf der die `inset`-Eigenschaft liegt.

Das bedeutet, dass physische `<anchor-side>`-Werte innerhalb der Werte physischer `inset`-Eigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Achsrichtung wie die `<anchor-side>` hat. Mit anderen Worten: Die `top`- und `bottom`-Seiten sind innerhalb der `left`- und `right`-Eigenschaftswerte nicht gültig, und die `left`- und `right`-Seiten sind innerhalb `top`- und `bottom`-Eigenschaftswerte nicht gültig. Wenn zum Beispiel `top: anchor(bottom)` angegeben ist, ist das in Ordnung, da beides vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wäre, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhalten würde. Wenn kein Fallback vorhanden ist, verhält sich die `inset`-Eigenschaft, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>`-Werte innerhalb sowohl logischer als auch physischer `inset`-Eigenschaften verwenden, da logische `<anchor-side>`-Werte relativ zur relevanten Achse der `inset`-Eigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Beispielsweise funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle gut.

Die Geschichte wird komplizierter, wenn physische `<anchor-side>`-Parameter innerhalb logischer `inset`-Eigenschaftswerte verwendet werden, da die physische Seite zur Achse passen muss, zu der die `inset`-Eigenschaft im aktuellen Schreibrichtungmodus relevant ist. Beispielsweise:

- In einem horizontalen Schreibrichtungmodus ist die Blockrichtung von oben nach unten. Daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist inkompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wäre, wäre der berechnete Wert `50px`, und das positionierte Element würde `50px` vom Blockende (unten) seines nächsten positionierten Vorfahren oder des Viewports entfernt positioniert, abhängig vom `position`-Wert.
- In einem vertikalen Schreibrichtungmodus ist die Blockrichtung rechts-zu-links oder links-zu-rechts. Daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist inkompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, wäre der berechnete Wert `50px`, und das positionierte Element würde `50px` vom Blockende (links oder rechts abhängig vom Schreibrichtungmodus) seines nächsten positionierten Vorfahren oder des Viewports entfernt positioniert, abhängig vom `position`-Wert.

Um das Potenzial für Verwirrung mit diesen Werten zu mindern, wird empfohlen, logische `inset`-Eigenschaften mit logischen `<anchor-side>`-Werten und physische `inset`-Eigenschaften mit physischen `<anchor-side>`-Werten zu verwenden. Sie sollten die Verwendung logischer Werte wann immer möglich bevorzugen, weil sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} sind.

Die `center`- und `<percentage>`-Werte sind innerhalb der `anchor()`-Funktion innerhalb aller logischen und physischen `inset`-Eigenschaften gültig.

Die folgende Tabelle listet die `inset`-Eigenschaften auf und die `<anchor-side>`-Parameterwerte, die mit ihnen kompatibel sind. Wir haben nur die Langhand-`inset`-Eigenschaften aufgelistet; diese enthalten die Kurzhand-`inset`-Eigenschaftswerte.

| `Inset`-Eigenschaft                         | Kompatibler `<anchor-side>`-Wert                                                                                                                           |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                                   |
| Alle                                        | `<percentage>`                                                                                                                                             |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                                  |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                                  |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibrichtungen<br>`left` und `right` in vertikalen Schreibrichtungen |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibrichtungen<br>`top` und `bottom` in vertikalen Schreibrichtungen |

### Verwenden von `anchor()`, um Popovers zu positionieren

Wenn Sie `anchor()` verwenden, um [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) zu positionieren, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der Position, die Sie erreichen möchten, in Konflikt stehen können. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.positionedPopover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [überlegt, wie sich dieses Workaround vermeiden lässt](https://github.com/w3c/csswg-drafts/issues/10258).

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn sich die `anchor()`-Funktion auf eine Seite des Standardankers bezieht, können Sie einen {{cssxref("margin")}} einschließen, um den Abstand zwischen den Rändern des Ankers und des positionierten Elements nach Bedarf zu schaffen. Alternativ können Sie die `anchor()`-Funktion innerhalb einer {{cssxref("calc()")}}-Funktion einschließen, um einen Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements und fügt dann einen Margin hinzu, um etwas Platz zwischen den Kanten zu schaffen:

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

### Positionieren eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern platzieren, indem Sie innerhalb der `anchor()`-Funktion bei verschiedenen `inset`-Eigenschaften auf demselben Element verschiedene `<anchor-name>`-Werte angeben (siehe [Element relativ zu mehreren Ankern positioniert](#element_relativ_zu_mehreren_ankern_positioniert) unten). Dies kann genutzt werden, um nützliche Funktionen zu schaffen, wie zum Beispiel Ziehgriffe an den Ecken eines positionierten Elements, die verwendet werden können, um es zu vergrößern oder zu verkleinern.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem Anker verbunden, der über seine [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor)-Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut) definiert ist. Dies ist der Anker, mit dem das Element beim Scrollen der Seite scrollen wird; er kann auch verwendet werden, um zu kontrollieren, wann das Element [bedingt verborgen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) werden soll.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines anchor-positionierten Elements an die Höhe seines Ankers anzupassen, indem die unteren und oberen Kanten an die unteren und oberen Kanten des Ankers gesetzt werden. Die `anchor()`-Funktion wird dann innerhalb einer `calc()`-Funktion verwendet, um das anchor-positionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element hinzu, das wir als unseren Anker setzen, und ein {{htmlelement("p")}}-Element, das wir relativ zu diesem Anker positionieren:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name`-Wert des Ankerelements als den Wert der `position-anchor`-Eigenschaft des positionierten Elements, um die Elemente zu verbinden, und setzen dann drei inset-Eigenschaften auf das anchor-positionierte Element. Die ersten beiden positionieren die obere Kante des Elements bündig mit der oberen Kante des Ankers und die untere Kante bündig mit der unteren Kante des Ankers. In der dritten inset-Eigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` zur rechten Kante des Ankers zu positionieren.

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

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}}-Eigenschaften positioniert ist, die mit `anchor()`-Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, die es Ihnen ermöglichen, die `<anchor-side>`-Werte innerhalb dieser `anchor()`-Funktionen zu variieren, damit Sie sehen können, welche Auswirkungen sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, das wir damit verbinden wollen.

Wir fügen auch einige Fülltexte um die beiden `<div>`-Elemente hinzu, um den {{htmlelement("body")}} größer zu machen, sodass er scrollt. Dieses Beispiel enthält auch zwei {{htmlelement("select")}}-Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>`-Werte ermöglichen, um das positionierte Element zu platzieren. Wir haben den Fülltext und die `<select>`-Elemente der Kürze wegen ausgeblendet.

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

Wir deklarieren das `anchor`-`<div>` als ein Ankerelement, indem wir ihm einen Ankernamen über die {{cssxref("anchor-name")}}-Eigenschaft setzen. Wir verbinden es dann mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}}-Eigenschaft setzen. `top: anchor(--my-anchor bottom)` positioniert die obere Kante der Infobox bündig zur unteren Kante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig zur rechten Kante ihres Ankers positioniert. Dies bietet eine Anfangsposition, die überschrieben wird, wenn verschiedene Werte aus den Dropdown-Menüs gewählt werden.

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
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
}

.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  top: anchor(--my-anchor bottom);
  left: anchor(right);
}
```

#### JavaScript

Wir lauschen dem `change`-Ereignis, das eintritt, wenn ein neuer `<anchor-side>`-Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion innerhalb des relevanten inset-Eigenschaftswerts (`top` oder `left`) der Infobox.

```js
const infobox = document.querySelector(".infobox");
const topSelect = document.querySelector("#top-anchor-side");
const leftSelect = document.querySelector("#left-anchor-side");

topSelect.addEventListener("change", (e) => {
  const anchorSide = e.target.value;
  infobox.style.top = `anchor(--my-anchor ${anchorSide})`;
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

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des anchor-positionierten Elements zu bestimmen. Die Anker können über Tastatursteuerungen bewegt oder gezogen werden und das positionierte Element wird entsprechend der Änderung der Ankergröße angepasst.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}}-Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse von `infobox` und wird als positioniertes Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um ihnen Keyboard-Fokus zu ermöglichen.

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
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

Die Anker erhalten jeweils verschiedene {{cssxref("anchor-name")}}-Werte, einen {{cssxref("position")}}-Wert von `absolute` und unterschiedliche `inset`-Werte, um die Anker in einer rechteckigen Formation zu positionieren.

```css
.anchor {
  position: absolute;
}

#anchor1 {
  anchor-name: --my-anchor1;
  top: 50px;
  left: 100px;
}

#anchor2 {
  anchor-name: --my-anchor2;
  top: 200px;
  left: 350px;
}
```

Das anchor-positionierte Element, mit seiner `position` auf `fixed` gesetzt, ist mit einem Anker über seine {{cssxref("position-anchor")}}-Eigenschaft verbunden. Es wird relativ zu zwei Ankern positioniert, indem innerhalb der `inset`-Eigenschaft `anchor()`-Funktionen mit verschiedenen `<anchor-name>`-Werten verwendet werden. In diesem Fall haben wir {{cssxref("percentage")}}-Werte für den `<anchor-side>`-Parameter verwendet, um die Distanz vom Anfang der Achse der `inset`-Eigenschaft anzugeben, auf der die Funktion gesetzt ist.

```css
.infobox {
  position-anchor: --my-anchor1;
  position: fixed;
  top: anchor(--my-anchor1 100%);
  left: anchor(--my-anchor1 100%);
  bottom: anchor(--my-anchor2 0%);
  right: anchor(--my-anchor2 0%);
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

Das positionierte Element wird relativ zu beiden Anker-Elementen positioniert. Ziehen Sie sie mit der Maus oder wechseln Sie mit <kbd>Tab</kbd> zu ihnen und verwenden Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>, um sie nach oben, unten, links und rechts zu bewegen. Beobachten Sie, wie sich dadurch ihre Position ändert und folglich die Fläche des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptnachweis und soll nicht in Produktionscode verwendet werden. Unter anderem bricht das Beispiel, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizuschieben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}}-Funktion
- [Anleitung zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- [Fallback-Optionen und das bedingte Verbergen bei Überlaufen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
