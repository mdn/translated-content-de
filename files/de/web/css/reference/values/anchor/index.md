---
title: Die CSS-Funktion `anchor()`
short-title: anchor()
slug: Web/CSS/Reference/Values/anchor
l10n:
  sourceCommit: 93149226b6b94a770731d262508f5c4aa10bcbed
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`anchor()`** kann in den Werten von [Inset-Eigenschaften](#eigenschaften-die-anchor-funktionswerte-akzeptieren) eines **ankerpositionierten** Elements verwendet werden. Sie gibt einen Längenwert zurück, der sich auf die Position der Kanten des zugehörigen Ankerelements bezieht.

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

Die Syntax der Funktion `anchor()` lautet:

```plain
anchor(<anchor-name> <anchor-side>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}
  - : Der Wert der Eigenschaft {{cssxref("anchor-name")}} des Ankerelements, relativ zu dem Sie eine Seite des Elements positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wird er weggelassen, wird der **Standardanker** des Elements verwendet: der Anker, auf den seine Eigenschaft {{cssxref("position-anchor")}} verweist oder der ihm über das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) zugeordnet ist.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor()`-Funktion ordnet einem Element keinen Anker zu; sie positioniert das Element lediglich relativ zu diesem Anker. Um die Zuordnung herzustellen, ist weiterhin die CSS-Eigenschaft {{cssxref("position-anchor")}} oder das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) erforderlich.

- `<anchor-side>`
  - : Gibt die Seite des Ankers oder den relativen Abstand von der `start`-Seite an, zu der das Element positioniert wird. Wenn ein physischer oder logischer Wert verwendet wird, der mit der Inset-Eigenschaft, für die `anchor()` festgelegt ist, nicht [kompatibel](#kompatibilität-von-inset-eigenschaften-und-anchor-side-werten) ist, wird der Ersatzwert verwendet. Gültige Werte sind:
    - `top`
      - : Die Oberkante des Ankerelements.
    - `right`
      - : Die rechte Kante des Ankerelements.
    - `bottom`
      - : Die Unterkante des Ankerelements.
    - `left`
      - : Die linke Kante des Ankerelements.
    - `inside`
      - : Dieselbe Seite wie die Inset-Eigenschaft.
    - `outside`
      - : Die gegenüberliegende Seite der Inset-Eigenschaft.
    - `start`
      - : Der logische Anfang des [umfassenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements entlang der Achse der Inset-Eigenschaft, für die die Funktion `anchor()` festgelegt ist.
    - `end`
      - : Das logische Ende des umfassenden Blocks des Ankerelements entlang der Achse der Inset-Eigenschaft, für die die Funktion `anchor()` festgelegt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, für die die Funktion `anchor()` festgelegt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, für die die Funktion `anchor()` festgelegt ist.
    - `center`
      - : Die Mitte der Achse der Inset-Eigenschaft, für die die Funktion `anchor()` festgelegt ist.
    - {{cssxref("percentage")}}
      - : Gibt den Abstand als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der Inset-Eigenschaft an, für die die Funktion `anchor()` festgelegt ist.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Ersatzwert an, auf den die Funktion zurückgreifen soll, wenn die `anchor()`-Funktion andernfalls ungültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Mit der Funktion `anchor()` lässt sich ein Element relativ zu den Kanten eines Ankerelements positionieren. Sie ist nur innerhalb der Werte von {{Glossary("inset_properties", "Inset-Eigenschaften")}} für absolut oder fest positionierte Elemente gültig.

Sie gibt einen `<length>`-Wert zurück, der den Abstand zwischen der zur Inset-Eigenschaft gehörenden Kante des umfassenden Blocks und der durch den Wert `<anchor-side>` angegebenen Kante des Ankerelements beschreibt. Da sie einen `<length>`-Wert zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) verwendet werden, die Längenwerte akzeptieren, darunter {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn kein Anker mit dem durch `<anchor-name>` angegebenen Namen existiert oder dem positionierten Element kein Anker zugeordnet ist (z. B. über die Eigenschaft {{cssxref("position-anchor")}}), gilt der erste Parameter als ungültig. Falls vorhanden, wird dann der Ersatzwert `<length-percentage>` verwendet. Wenn beispielsweise für das positionierte Element `top: anchor(bottom, 50px)` angegeben ist, ihm aber kein Anker zugeordnet wurde, wird der Ersatzwert verwendet. `top` erhält dann den berechneten Wert `50px`.

Ausführliche Informationen zu den Funktionen und zur Verwendung von Ankern finden Sie im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und im Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

### Eigenschaften, die `anchor()`-Funktionswerte akzeptieren

Die folgenden CSS-{{Glossary("inset_properties", "Inset-Eigenschaften")}} akzeptieren eine `anchor()`-Funktion als Wertbestandteil:

- {{cssxref("top")}}
- {{cssxref("left")}}
- {{cssxref("bottom")}}
- {{cssxref("right")}}
- {{cssxref("inset")}}-Kurzschreibweise
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block")}}-Kurzschreibweise
- {{cssxref("inset-inline-start")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline")}}-Kurzschreibweise

### Kompatibilität von Inset-Eigenschaften und `<anchor-side>`-Werten

Wenn Sie eine `anchor()`-Funktion im Wert einer Inset-Eigenschaft verwenden, muss der in der Funktion angegebene Parameter `<anchor-side>` mit der Achse kompatibel sein, auf der die Inset-Eigenschaft liegt.

Das bedeutet, dass physische `<anchor-side>`-Werte in Werten physischer Inset-Eigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Achsenrichtung wie `<anchor-side>` hat. Anders ausgedrückt: Die Seiten `top` und `bottom` sind in Werten der Eigenschaften `left` und `right` ungültig; die Seiten `left` und `right` sind in Werten der Eigenschaften `top` und `bottom` ungültig. Beispielsweise ist `top: anchor(bottom)` gültig, weil beide Werte vertikal sind. `top: anchor(left)` ist dagegen ungültig, weil `left` ein horizontaler Wert ist. Bei `top: anchor(left, 50px)` wird der Ersatzwert verwendet, sodass `top` den berechneten Wert `50px` erhält. Ist kein Ersatzwert vorhanden, verhält sich die Inset-Eigenschaft so, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>`-Werte sowohl in logischen als auch in physischen Inset-Eigenschaften verwenden. Logische `<anchor-side>`-Werte beziehen sich nämlich auf die jeweilige Achse der Inset-Eigenschaft, unabhängig davon, ob diese logisch oder physisch ist. Beispielsweise funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)`.

Komplizierter wird es bei physischen `<anchor-side>`-Parametern in Werten logischer Inset-Eigenschaften: Die physische Seite muss zur Achse passen, auf die sich die Inset-Eigenschaft im aktuellen Schreibmodus bezieht. Zum Beispiel:

- In einem horizontalen Schreibmodus verläuft die Blockrichtung von oben nach unten. Daher funktioniert `inset-block-end: anchor(bottom)`, während `inset-block-end: anchor(left)` inkompatibel ist. Wird `inset-block-end: anchor(left, 50px)` festgelegt, lautet der berechnete Wert `50px`. Das positionierte Element wird dann im Abstand von `50px` zum Blockende (unten) seines nächstgelegenen positionierten Vorfahren oder des Viewports positioniert, abhängig vom festgelegten `position`-Wert.
- In einem vertikalen Schreibmodus verläuft die Blockrichtung von rechts nach links oder von links nach rechts. Daher funktioniert `inset-block-end: anchor(left)`, während `inset-block-end: anchor(top)` inkompatibel ist. Wird `inset-block-end: anchor(top, 50px)` festgelegt, lautet der berechnete Wert `50px`. Das positionierte Element wird dann im Abstand von `50px` zum Blockende (je nach Schreibmodus links oder rechts) seines nächstgelegenen positionierten Vorfahren oder des Viewports positioniert, abhängig vom festgelegten `position`-Wert.

Um mögliche Verwirrung bei diesen Werten zu vermeiden, sollten Sie logische Inset-Eigenschaften mit logischen `<anchor-side>`-Werten und physische Inset-Eigenschaften mit physischen `<anchor-side>`-Werten kombinieren. Bevorzugen Sie nach Möglichkeit logische Werte, da sie die {{Glossary("Internationalization", "Internationalisierung")}} besser unterstützen.

Die Werte `center` und `<percentage>` sind innerhalb der Funktion `anchor()` in allen logischen und physischen Inset-Eigenschaften gültig.

Die folgende Tabelle zeigt die Inset-Eigenschaften und die mit ihnen kompatiblen `<anchor-side>`-Parameterwerte. Aufgeführt sind nur die einzelnen Inset-Eigenschaften; aus ihren Werten setzen sich die Werte der Kurzschreibweisen zusammen.

| Inset-Eigenschaft                           | Kompatible `<anchor-side>`-Werte                                                                                                              |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                      |
| Alle                                        | `<percentage>`                                                                                                                                |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                     |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                     |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start` und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start` und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Popovers mit `anchor()` positionieren

Wenn Sie `anchor()` zum Positionieren von [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) verwenden, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) der gewünschten Positionierung entgegenstehen können. Häufig liegt dies an den Standardstilen für `margin` und `inset`. Daher empfiehlt es sich, diese zurückzusetzen:

```css
.positionedPopover {
  margin: 0;
  inset: auto;
}
```

### `anchor()` innerhalb von `calc()` verwenden

Wenn sich die Funktion `anchor()` auf eine Seite des Standardankers bezieht, können Sie mit {{cssxref("margin")}} nach Bedarf einen Abstand zwischen den Kanten des Ankers und des positionierten Elements schaffen. Alternativ können Sie die Funktion `anchor()` innerhalb einer {{cssxref("calc")}}-Funktion verwenden, um einen Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements und fügt dann einen Außenabstand hinzu, um Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-right: 10px;
}
```

Dieses Beispiel positioniert die logische Blockendkante des positionierten Elements `10px` von der logischen Blockanfangskante des Ankerelements entfernt:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Ein Element relativ zu mehreren Ankern positionieren

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie in den `anchor()`-Funktionen verschiedener Inset-Eigenschaften desselben Elements unterschiedliche `<anchor-name>`-Werte angeben (siehe unten [Element relativ zu mehreren Ankern positioniert](#element-relativ-zu-mehreren-ankern-positioniert)). Damit lassen sich beispielsweise Ziehpunkte an den Ecken eines positionierten Elements erstellen, mit denen seine Größe verändert werden kann.

Ein positioniertes Element kann zwar relativ zu mehreren Ankerelementen positioniert werden, ist aber immer nur dem einzelnen Anker zugeordnet, der über seine Eigenschaft {{cssxref("position-anchor")}} (oder das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)) definiert ist. Mit diesem Anker bewegt sich das Element beim Scrollen der Seite mit. Über ihn lässt sich auch steuern, wann das Element [bedingt ausgeblendet](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird mit der Funktion `anchor()` die Höhe eines ankerpositionierten Elements an die Höhe seines Ankers angepasst: Seine Ober- und Unterkante werden an den entsprechenden Kanten des Ankers ausgerichtet. Anschließend wird `anchor()` innerhalb einer `calc()`-Funktion verwendet, um das ankerpositionierte Element mit einem Abstand zum Anker zu platzieren.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element ein, das als Anker dient, sowie ein {{htmlelement("p")}}-Element, das wir relativ zu diesem Anker positionieren:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir legen den `anchor-name`-Wert des Ankerelements als Wert der Eigenschaft `position-anchor` des positionierten Elements fest, um die Elemente einander zuzuordnen. Anschließend legen wir drei Inset-Eigenschaften für das ankerpositionierte Element fest. Die ersten beiden richten seine Oberkante bündig an der Oberkante des Ankers und seine Unterkante bündig an der Unterkante des Ankers aus. In der dritten Inset-Eigenschaft wird die Funktion `anchor()` innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` rechts von der rechten Kante des Ankers zu positionieren.

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

#### Ergebnis

{{EmbedLiveSample("common_usage", "100%", '240')}}

### Vergleich verschiedener anchor-side-Werte

Dieses Beispiel zeigt ein Element, das über seine Eigenschaften {{cssxref("top")}} und {{cssxref("left")}} relativ zu einem Anker positioniert wird. Die Eigenschaften werden mit `anchor()`-Funktionen definiert. Außerdem enthält das Beispiel zwei Dropdown-Menüs, mit denen Sie die `<anchor-side>`-Werte in diesen Funktionen ändern und ihre Auswirkungen beobachten können.

#### HTML

Wir definieren zwei {{htmlelement("div")}}-Elemente: eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Sie dienen als Ankerelement beziehungsweise als positioniertes Element, das wir dem Anker zuordnen.

Um die beiden `<div>`-Elemente herum fügen wir Fülltext ein, damit das {{htmlelement("body")}}-Element höher und scrollbar wird. Das Beispiel enthält außerdem zwei {{htmlelement("select")}}-Elemente für Dropdown-Menüs, über die sich verschiedene `<anchor-side>`-Werte zur Positionierung des Elements auswählen lassen. Der Kürze halber haben wir den Fülltext und die `<select>`-Elemente ausgeblendet.

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

Wir deklarieren das `anchor`-`<div>` als Ankerelement, indem wir ihm über die Eigenschaft {{cssxref("anchor-name")}} einen Ankernamen zuweisen. Anschließend ordnen wir es dem positionierten Element zu, indem wir dessen Eigenschaft {{cssxref("position-anchor")}} auf denselben Wert setzen. `top: anchor(--my-anchor bottom)` richtet die Oberkante der Infobox bündig an der Unterkante ihres Ankers aus, während `left: anchor(right)` ihre linke Kante bündig an der rechten Kante des Ankers ausrichtet. So entsteht eine Ausgangsposition, die überschrieben wird, sobald Sie in den Dropdown-Menüs andere Werte auswählen.

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

Wir reagieren auf das `change`-Ereignis, das bei der Auswahl eines neuen `<anchor-side>`-Werts eintritt, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion der entsprechenden Inset-Eigenschaft (`top` oder `left`) der Infobox.

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

Wählen Sie verschiedene Werte in den Dropdown-Menüs aus, um zu sehen, wie sie die Position der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element relativ zu mehreren Ankern positioniert

In diesem Beispiel wird ein Element relativ zu zwei verschiedenen Ankern positioniert. Diese bestimmen die Position der oberen linken und der unteren rechten Ecke des ankerpositionierten Elements. Die Anker lassen sich über die Tastatur oder durch Ziehen verschieben, wodurch sich die Größe des positionierten Elements ändert.

#### HTML

Wir definieren insgesamt drei {{htmlelement("div")}}-Elemente. Die ersten beiden haben die Klasse `anchor` und werden als Anker definiert. Jedes besitzt eine eigene `id`, über die unterschiedliche Angaben zu seiner Positionierung bereitgestellt werden. Das letzte `<div>` hat die Klasse `infobox` und wird als positioniertes Element definiert. Mit dem Attribut [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) ermöglichen wir es den Elementen, den Tastaturfokus zu erhalten.

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

Die Anker erhalten jeweils einen anderen {{cssxref("anchor-name")}}-Wert, den {{cssxref("position")}}-Wert `absolute` sowie unterschiedliche Inset-Werte, damit sie die Eckpunkte eines Rechtecks bilden.

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

Das ankerpositionierte Element, dessen `position` auf `fixed` gesetzt ist, wird über seine Eigenschaft {{cssxref("position-anchor")}} einem Anker zugeordnet. Es wird relativ zu zwei Ankern positioniert, indem in den `anchor()`-Funktionen seiner Inset-Eigenschaften zwei unterschiedliche `<anchor-name>`-Werte angegeben werden. In diesem Fall verwenden wir {{cssxref("percentage")}}-Werte für den Parameter `<anchor-side>`. Sie geben den Abstand vom Anfang der Achse der Inset-Eigenschaft an, für die die Funktion festgelegt ist.

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

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie die Anker mit der Maus oder wählen Sie sie mit der Tabulatortaste aus und bewegen Sie sie mit den Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> nach oben, unten, links und rechts. Beobachten Sie, wie sich dadurch ihre Position und folglich die Fläche des positionierten Elements verändert. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel dient als Machbarkeitsnachweis und ist nicht für den Einsatz in produktivem Code gedacht. Eine seiner Einschränkungen ist, dass es nicht mehr funktioniert, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- Funktion {{cssxref("anchor-size()")}}
- Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Leitfaden [Ersatzoptionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
