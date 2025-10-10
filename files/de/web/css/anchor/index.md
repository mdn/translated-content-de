---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) kann innerhalb der Werteigenschaften eines **ankerpositionierten** Elements [inset property](#properties_that_accept_anchor_function_values) verwendet werden. Sie gibt einen Längenwert zurück, der sich relativ zur Position der Kanten des zugeordneten Ankerelements bezieht.

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

Die Syntax der `anchor()` Funktion ist wie folgt:

```plain
anchor(<anchor-name> <anchor-side>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}
  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert eines Ankerelements, zu dem Sie die Seite des Elements beziehen möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der in dessen [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert oder dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor()` Funktion ordnet ein Element nicht einem Anker zu; sie positioniert das Element nur relativ zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/position-anchor) CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut wird weiterhin benötigt, um die Zuordnung zu erstellen.

- `<anchor-side>`
  - : Gibt die Seite des Ankers oder die relative Entfernung von der `start` Seite an, relativ zu der das Element positioniert wird. Wenn ein physischer oder logischer Wert verwendet wird, der nicht mit der Inset-Eigenschaft kompatibel ist, auf der `anchor()` festgelegt ist, wird der Ersatzwert verwendet. Gültige Werte sind:
    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `inside`
      - : Die gleiche Seite wie die Inset-Eigenschaft.
    - `outside`
      - : Die gegenüberliegende Seite der Inset-Eigenschaft.
    - `start`
      - : Der logische Anfang des Ankerelements, gemessen entlang der Achse der Inset-Eigenschaft auf der die `anchor()` Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des Ankerelements, gemessen entlang der Achse der Inset-Eigenschaft auf der die `anchor()` Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements, gemessen entlang der Achse der Inset-Eigenschaft auf der die `anchor()` Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements, gemessen entlang der Achse der Inset-Eigenschaft auf der die `anchor()` Funktion gesetzt ist.
    - `center`
      - : Die Mitte der Achse der Inset-Eigenschaft auf der die `anchor()` Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung in Prozent vom Anfang des Inhalts des Elements gemessen, entlang der Achse der Inset-Eigenschaft auf der die `anchor()` Funktion gesetzt ist.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Ersatzwert an, zu dem die Funktion aufgelöst werden sollte, wenn die `anchor()` Funktion andernfalls nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()` Funktion ermöglicht das Positionieren eines Elements relativ zu den Kanten eines Ankerelements. Sie ist nur innerhalb der Werte für {{Glossary("inset_properties", "Inset-Eigenschaften")}} gültig, die auf absolut oder fest positionierten Elementen gesetzt sind.

Sie gibt einen `<length>`-Wert zurück, der den Abstand zwischen der ankerpositionierten Elementseite, die durch den Inset-Wert angegeben wird, und der Seite des Ankerelements, die durch den gewählten `<anchor-side>`-Wert spezifiziert wird. Da sie einen `<length>` zurückgibt, kann sie innerhalb von [anderen CSS-Funktionen](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn kein Anker mit dem Wert des `<anchor-name>` existiert oder wenn das positionierte Element keinen Anker zugeordnet hat (d.h. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig betrachtet und der Ersatzwert `<length-percentage>` wird verwendet, falls einer vorhanden ist. Wenn zum Beispiel `top: anchor(bottom, 50px)` auf das positionierte Element angewendet wurde, aber kein Anker zugeordnet ist, würde der Ersatzwert verwendet, sodass `top` einen berechneten Wert von `50px` hätte.

Für detaillierte Informationen zu Ankerfunktionen und Nutzung siehe das [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor()` Funktionswerte akzeptieren

Die CSS {{Glossary("inset_properties", "Inset-Eigenschaften")}}, die eine `anchor()` Funktion als Wertkomponente akzeptieren, sind:

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

### Kompatibilität von Inset-Eigenschaften und `<anchor-side>` Werten

Beim Verwenden einer `anchor()` Funktion innerhalb eines Inset-Eigenschaftswerts muss der `<anchor-side>` Parameter, der innerhalb der `anchor()` Funktion angegeben ist, mit der Achse kompatibel sein, auf der die Inset-Eigenschaft liegt.

Das bedeutet, dass physische `<anchor-side>` Werte innerhalb der Werte von physischen Inset-Eigenschaften verwendet werden können, wenn die Eigenschaft die gleiche Achsrichtung hat wie der `<anchor-side>`. Mit anderen Worten, die `top` und `bottom` Seiten sind innerhalb der `left` und `right` Eigenschaftswerte nicht gültig, und die `left` und `right` Seiten sind innerhalb der `top` und `bottom` Eigenschaftswerte nicht gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wäre, würde der Ersatzwert verwendet, sodass `top` einen berechneten Wert von `50px` hätte. Wenn kein Ersatzwert vorhanden ist, verhält sich die Inset-Eigenschaft so, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>` Werte sowohl in logischen als auch physischen Inset-Eigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der Inset-Eigenschaft sind, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle gut.

Die Geschichte wird komplizierter, wenn physische `<anchor-side>` Parameter innerhalb von logischen Inset-Eigenschaftswerten verwendet werden, da die physische Seite zur Achse passen muss, zu der die Inset-Eigenschaft im aktuellen Schreibmodus relevant ist. Zum Beispiel:

- In einem horizontalen Schreibmodus läuft die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist nicht kompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt würde, wäre der berechnete Wert `50px`, und das positionierte Element würde `50px` vom Blockende (unten) seines nächsten positionierten Vorfahren oder des Viewports positioniert, abhängig vom gesetzten `position` Wert.
- In einem vertikalen Schreibmodus läuft die Blockrichtung von rechts nach links oder links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist nicht kompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt würde, wäre der berechnete Wert `50px`, und das positionierte Element würde `50px` vom Blockende (links oder rechts, abhängig vom Schreibmodus) seines nächsten positionierten Vorfahren oder des Viewports positioniert, abhängig vom gesetzten `position` Wert.

Um das Potenzial für Verwirrungen mit diesen Werten zu begrenzen, wird empfohlen, logische Inset-Eigenschaften mit logischen `<anchor-side>` Werten zu verwenden und physische Inset-Eigenschaften mit physischen `<anchor-side>` Werten. Sie sollten die Verwendung logischer Werte bevorzugen, wann immer möglich, da diese besser für {{Glossary("Internationalization", "Internationalisierung")}} sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()` Funktion in allen logischen und physischen Inset-Eigenschaften gültig.

Die untenstehende Tabelle listet die Inset-Eigenschaften und die `<anchor-side>` Parameterwerte, die mit ihnen kompatibel sind. Wir haben nur die Langform-Inset-Eigenschaften aufgelistet; diese umfassen die Kurzform-Inset-Eigenschaftswerte.

| Inset-Eigenschaft                           | Kompatible `<anchor-side>` Werte                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` and `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` and `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` and `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` and `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` zum Positionieren von Popovers

Beim Verwenden von `anchor()` zum Positionieren von [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der Position kollidieren, die Sie erreichen möchten. Die üblichen Übeltäter sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.positionedPopover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [untersucht Möglichkeiten, um diese Umgehungslösung zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn die `anchor()` Funktion auf eine Seite des Standardankers verweist, können Sie einen {{cssxref("margin")}} einfügen, um bei Bedarf Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()` Funktion innerhalb einer {{cssxref("calc")}} Funktion einfügen, um Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig an der linken Kante des Ankerelements und fügt dann margin hinzu, um Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Startkante des Ankerelements:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionieren eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie verschiedene `<anchor-name>` Werte innerhalb der `anchor()` Funktion der verschiedenen Inset-Eigenschaften auf demselben Element angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionen wie Ziehpunkte an den Ecken eines positionierten Elements zu erstellen, die verwendet werden können, um es zu vergrößern bzw. zu verkleinern.

Während ein positioniertes Element relativ zu mehr als nur einem Ankerelement positioniert sein kann, ist es immer nur mit dem einzelnen Anker verbunden, der über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft definiert ist (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut). Dies ist der Anker, mit dem das Element beim Scrollen der Seite scrollt; er kann auch verwendet werden, um zu steuern, wann das Element [bedingungsgemäß ausgeblendet](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Allgemeine Nutzung

In diesem Beispiel wird die `anchor()` Funktion verwendet, um die Höhe eines ankerpositionierten Elements auf die Höhe seines Ankers festzulegen, indem die Unter- und Oberkante auf die Unter- und Oberkante des Ankers gesetzt werden. Die `anchor()` Funktion innerhalb einer `calc()` Funktion wird dann verwendet, um das ankerpositionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element ein, das wir als unseren Anker setzen, und ein {{htmlelement("p")}} Element, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements als den Wert der `position-anchor` Eigenschaft des positionierten Elements, um die Elemente zu verknüpfen, und setzen dann drei Inset-Eigenschaften auf dem ankerpositionierten Element. Die ersten beiden positionieren die Oberkante des Elements bündig mit der Oberkante des Ankers und die Unterkante bündig mit der Unterkante des Ankers. In der dritten Inset-Eigenschaft wird die `anchor()` Funktion innerhalb einer `calc()` Funktion verwendet, um die linke Kante des Elements `10px` rechts neben der rechten Kante des Ankers zu positionieren.

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

### Vergleich verschiedener Anchor-Side-Werte

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mit `anchor()` Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, mit denen Sie die `<anchor-side>` Werte in diesen `anchor()` Funktionen variieren können, um die Auswirkungen zu sehen.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als das Ankerelement und das positionierte Element, das wir damit verknüpfen werden, vorgesehen.

Wir schließen auch einige Fülltexte um die beiden `<div>` Elemente ein, um den {{htmlelement("body")}} größer zu machen, sodass er scrollen wird. Dieses Beispiel enthält auch zwei {{htmlelement("select")}} Elemente, um die Dropdown-Menüs zu erstellen, mit denen verschiedene `<anchor-side>` Werte ausgewählt werden können, um das positionierte Element zu positionieren. Wir haben den Fülltext und die `<select>` Elemente der Kürze halber ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als ein Ankerelement, indem wir einen Ankernamen darauf festlegen, und assoziieren es dann mit dem positionierten Element, indem wir den gleichen Wert für seine {{cssxref("position-anchor")}} Eigenschaft setzen. `top: anchor(--my-anchor bottom)` positioniert die Oberkante der Infobox bündig mit der Unterkante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig mit der rechten Kante ihres Ankers positioniert. Dies bietet eine Anfangsposition, die überschrieben wird, wenn verschiedene Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir hören auf das `change` Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()` Funktion innerhalb der entsprechenden Inset-Eigenschaft (`top` oder `left`) der Infobox.

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

Wählen Sie verschiedene Werte aus den Dropdown-Menüs, um zu sehen, wie sie die Position der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element positioniert relativ zu mehreren Ankern

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des ankerpositionierten Elements festzulegen. Die Anker können über Tastatursteuerung oder durch Ziehen bewegt werden und dabei die Größe des positionierten Elements verändern.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jeder hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse von `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um ihnen zu ermöglichen, Tastaturfokus zu erhalten.

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

Die Anker erhalten jeweils einen anderen {{cssxref("anchor-name")}} Wert, einen {{cssxref("position")}} Wert von `absolute`, und verschiedene Inset-Werte, um die Anker in einer rechteckigen Formation zu positionieren.

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

Das ankerpositionierte Element, mit auf `fixed` gesetzter `position`, wird mit einem Anker über seine {{cssxref("position-anchor")}} Eigenschaft assoziiert. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>` Werte innerhalb der `anchor()` Funktionen auf dessen Inset-Eigenschaften gesetzt werden. In diesem Fall wurden {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet, die die Entfernung von der Startachse der Inset-Eigenschaft angeben, auf der die Funktion gesetzt ist.

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

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder navigieren Sie zu ihnen und verwenden Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, und <kbd>D</kbd> Tasten, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie sich deren Position verändert und als Folge davon die Fläche des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Proof-of-Concept und nicht dazu gedacht, in Produktionscode verwendet zu werden. Zu seinen Mängeln gehört, dass das Beispiel bricht, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überläufen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
