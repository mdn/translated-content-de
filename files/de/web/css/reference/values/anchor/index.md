---
title: anchor()
slug: Web/CSS/Reference/Values/anchor
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann innerhalb der Werte einer **anchor-positionierten** Element-[Einfügeigenschaft](#properties_that_accept_anchor_function_values) verwendet werden, um einen Längenwert relativ zu den Positionen der Kanten des zugeordneten Ankerelements zurückzugeben.

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
  - : Der {{cssxref("anchor-name")}} Eigenschaftswert eines Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der in seiner {{cssxref("position-anchor")}} Eigenschaft referenziert wird oder mit dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut verknüpft ist.

    > [!NOTE]
    > Das Spezifizieren eines `<anchor-name>` innerhalb einer `anchor()`-Funktion assoziiert ein Element nicht mit einem Anker; es positioniert das Element nur relativ zu diesem Anker. Die {{cssxref("position-anchor")}} CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut wird weiterhin benötigt, um die Assoziation zu erstellen.

- `<anchor-side>`
  - : Gibt die Seite des Ankers oder die relative Entfernung von der `start` Seite an, zu der das Element relativ positioniert ist. Wenn ein physischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der Einfügeigenschaft ist, auf der `anchor()` angewendet wird, wird der Ersatzwert verwendet. Gültige Werte sind:
    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `inside`
      - : Die gleiche Seite wie die Einfügeeigenschaft.
    - `outside`
      - : Die gegenüberliegende Seite der Einfügeeigenschaft.
    - `start`
      - : Der logische Anfang des Ankerelements [Block, der es enthält](/de/docs/Web/CSS/Guides/Display/Containing_block) entlang der Achse der Einfügeeigenschaft, auf der die `anchor()`-Funktion angewendet wird.
    - `end`
      - : Das logische Ende des Ankerelements, das den Block entlang der Achse der Einfügeeigenschaft enthält, auf der die `anchor()`-Funktion angewendet wird.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Einfügeeigenschaft, auf der die `anchor()`-Funktion angewendet wird.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Einfügeeigenschaft, auf der die `anchor()`-Funktion angewendet wird.
    - `center`
      - : Das Zentrum der Achse der Einfügeeigenschaft, auf der die `anchor()`-Funktion angewendet wird.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der Einfügeeigenschaft an, auf der die `anchor()`-Funktion angewendet wird.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Ersatzwert an, den die Funktion auflösen soll, wenn die `anchor()`-Funktion andernfalls nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht die Positionierung eines Elements relativ zu den Kanten eines Ankerelements. Sie ist nur innerhalb der Werte von {{Glossary("inset_properties", "Einfügeeigenschaften")}} zulässig, die auf absolut oder fix positionierten Elementen gesetzt sind.

Sie gibt einen `<length>` Wert zurück, der die Entfernung zwischen der Seite des anchor-positionierten Elements, die durch den Einfügewert spezifiziert wird, und der Seite des Ankerelements, die durch den gewählten `<anchor-side>` Wert spezifiziert wird, angibt. Da sie einen `<length>` zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}}, usw.

Wenn kein Anker mit dem im `<anchor-name>` spezifizierten Namen existiert oder wenn das positionierte Element nicht mit einem Anker assoziiert ist (d.h. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig betrachtet und der Ersatzwert `<length-percentage>` wird verwendet, wenn einer verfügbar ist. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf dem positionierten Element spezifiziert wäre, aber kein Anker damit assoziiert wäre, würde der Ersatzwert verwendet, sodass `top` einen berechneten Wert von `50px` ergeben würde.

Für detaillierte Informationen zu Ankerfunktionen und -verwendungen siehe das [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Anleitung zur Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

### Eigenschaften, die `anchor()` Funktionswerte akzeptieren

Die CSS {{Glossary("inset_properties", "Einfügeeigenschaften")}}, die eine `anchor()` Funktion als Wertkomponente akzeptieren, beinhalten:

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

Bei Verwendung einer `anchor()`-Funktion innerhalb eines Werts einer Einfügeeigenschaft muss der im `anchor()`-Funktion spezifizierte `<anchor-side>` Parameter mit der Achse kompatibel sein, auf der sich die Einfügeeigenschaft befindet.

Das bedeutet, dass physische `<anchor-side>` Werte innerhalb der Werte physischer Einfügeeigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Achsenrichtung wie `<anchor-side>` hat. Mit anderen Worten, die `top` und `bottom` Seiten sind nicht in den `left` und `right` Eigenschaftswerten gültig, und die `left` und `right` Seiten sind nicht in `top` und `bottom` Eigenschaftswerten gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da sie beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` spezifiziert wäre, würde der Ersatzwert verwendet, sodass `top` einen berechneten Wert von `50px` ergibt. Wenn kein Ersatz vorhanden ist, verhält sich die Einfügeeigenschaft, als ob sie auf `auto` gesetzt wäre.

Sie können logische `<anchor-side>` Werte sowohl in logischen als auch in physischen Einfügeeigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der Einfügeeigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel, `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` funktionieren alle einwandfrei.

Die Sache wird komplizierter, wenn physische `<anchor-side>` Parameter innerhalb logischer Einfügeeigenschaftswerte verwendet werden, da die physische Seite mit der Achse übereinstimmen muss, zu der sich die Einfügeeigenschaft im aktuellen Schreibmodus bezieht. Zum Beispiel:

- In einem horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist nicht kompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wäre, würde der berechnete Wert `50px` betragen und das positionierte Element würde `50px` vom Blockende (unten) seines nächsten positionierten Vorfahren oder des Ansichtsbereichs positioniert, abhängig vom gesetzten Wert `position`.
- In einem vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist nicht kompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, würde der berechnete Wert `50px` betragen und das positionierte Element würde `50px` vom Blockende (links oder rechts, abhängig vom Schreibmodus) seines nächsten positionierten Vorfahren oder des Ansichtsbereichs positioniert, abhängig vom gesetzten Wert `position`.

Um das Potenzial für Verwirrung mit diesen Werten zu minimieren, wird empfohlen, logische Einfügeeigenschaften mit logischen `<anchor-side>` Werten und physische Einfügeeigenschaften mit physischen `<anchor-side>` Werten zu verwenden. Sie sollten die logischen Werte bevorzugen, wann immer möglich, weil sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()` Funktion innerhalb aller logischen und physischen Einfügeeigenschaften gültig.

Die untenstehende Tabelle listet die Einfügeeigenschaften auf und die `<anchor-side>` Parameterwerte, die mit ihnen kompatibel sind. Wir haben nur die langformigen Einfügeeigenschaften aufgelistet; diese bilden die Werte der kurzformigen Einfügeeigenschaften.

| Einfügeeigenschaft                          | Kompatibler `<anchor-side>` Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` zur Positionierung von Popovers

Wenn Sie `anchor()` zur Positionierung von [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) verwenden, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der Position, die Sie erreichen möchten, in Konflikt stehen können. Die üblichen Übeltäter sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.positionedPopover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [überlegt, wie man diese Umgehungslösung vermeiden kann](https://github.com/w3c/csswg-drafts/issues/10258).

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn die `anchor()` Funktion sich auf eine Seite des Standardankers bezieht, können Sie eine {{cssxref("margin")}} einschließen, um bei Bedarf einen Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()` Funktion innerhalb einer {{cssxref("calc")}} Funktion einschließen, um Abstände hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann einen Rand hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logische Blockendkante des positionierten Elements `10px` von der logischen Blockanfangskante des Ankerelements entfernt:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie innerhalb der `anchor()` Funktion der verschiedenen Einfügeeigenschaften desselben Elements unterschiedliche `<anchor-name>` Werte angeben (siehe [Element relativ zu mehreren Ankern positioniert](#element_relativ_zu_mehreren_ankern_positioniert) unten). Dies kann verwendet werden, um nützliche Funktionen wie Ziehpunkte in den Ecken eines positionierten Elements zu erstellen, mit denen es vergrößert oder verkleinert werden kann.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem einzelnen Anker verbunden, der über seine {{cssxref("position-anchor")}} Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut) definiert ist. Dies ist der Anker, mit dem das Element bei Bildlauf der Seite scrollt; es kann auch verwendet werden, um zu steuern, wann das Element [bedingungsgemäß verborgen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Nutzung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines anchor-positionierten Elements auf die Höhe seines Ankers zu setzen, indem die unteren und oberen Kanten mit den unteren und oberen Kanten des Ankers gesetzt werden. Die `anchor()`-Funktion wird dann innerhalb einer `calc()` Funktion verwendet, um das anchor-positionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element hinzu, das wir als unseren Anker festlegen werden, und ein {{htmlelement("p")}} Element, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements als den Wert der `position-anchor` Eigenschaft des positionierten Elements, um die Elemente zu verknüpfen, und setzen dann drei Einfügeeigenschaften auf dem anchor-positionierten Element. Die ersten beiden positionieren die obere Kante des Elements bündig mit der oberen Kante des Ankers und die untere Kante bündig mit der unteren Kante des Ankers. In der dritten Einfügeeigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()` Funktion verwendet, um die linke Kante des Elements `10px` zur rechten Kante des Ankers zu positionieren.

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

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mit `anchor()` Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, mit denen Sie die `<anchor-side>` Werte innerhalb dieser `anchor()` Funktionen variieren können, um zu sehen, welchen Effekt sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse `anchor` und eines mit einer Klasse `infobox`. Diese sind als das Ankerelement und das positionierte Element, die wir assoziieren werden, gedacht.

Wir fügen auch etwas Platzhaltertext um die beiden `<div>` Elemente hinzu, um den {{htmlelement("body")}} höher zu machen, sodass er scrollt. Dieses Beispiel umfasst auch zwei {{htmlelement("select")}} Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>` Werte ermöglichen, mit denen das positionierte Element platziert wird. Wir haben den Platzhaltertext und die `<select>` Elemente der Kürze halber verborgen.

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

Wir deklarieren das `anchor` `<div>` als ein Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen. Dann assoziieren wir es mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}} Eigenschaft festlegen. `top: anchor(--my-anchor bottom)` positioniert die obere Kante der Infobox bündig zur unteren Kante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig zur rechten Kante ihres Ankers positioniert. Dies bietet eine anfängliche Position, die überschrieben wird, wenn unterschiedliche Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir hören auf das `change` Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()` Funktion innerhalb der relevanten Einfügeeigenschaft (`top` oder `left`) der Infobox.

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

Wählen Sie unterschiedliche Werte aus den Dropdown-Menüs, um zu sehen, wie sie das Positionieren der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element relativ zu mehreren Ankern positioniert

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des anchor-positionierten Elements festzulegen. Die Anker können über Tastatursteuerungen bewegt oder gezogen werden und dadurch das positionierte Element vergrößern oder verkleinern.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben eine Klasse `anchor` und werden als Anker definiert; jeder hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um ihnen zu ermöglichen, Tastaturfokus zu erhalten.

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

Den Ankern wird jeweils ein unterschiedlicher {{cssxref("anchor-name")}} Wert, ein {{cssxref("position")}} Wert von `absolute` und unterschiedliche Einfügewerte gegeben, um die Anker in einer rechteckigen Formation zu positionieren.

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

Das anchor-positionierte Element, dessen `position` auf `fixed` gesetzt ist, wird mit einem Anker über seine {{cssxref("position-anchor")}} Eigenschaft assoziiert. Es wird relativ zu zwei Ankern positioniert, indem zwei unterschiedliche `<anchor-name>` Werte bei den `anchor()` Funktionen der Einfügeeigenschaften gesetzt werden. In diesem Fall verwenden wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter, der die Entfernung vom Anfang der Achse der Einfügeeigenschaft angibt, auf der die Funktion gesetzt ist.

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

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder bewegen Sie den Fokus auf sie und verwenden Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> Tasten, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie sich diese Positionen ändern und folglich auch die Fläche des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptnachweis und nicht für die Verwendung im Produktionscode gedacht. Unter seinen Schwachstellen bricht das Beispiel, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbei zu bewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Anleitung zur Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
