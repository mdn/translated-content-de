---
title: "`anchor()` CSS-Funktion"
short-title: anchor()
slug: Web/CSS/Reference/Values/anchor
l10n:
  sourceCommit: 7dbcde5a0aa6855447d015d99eba6fb8be6c2185
---

Die **`anchor()`**-Funktion [CSS](/de/docs/Web/CSS) [function](/de/docs/Web/CSS/Reference/Values/Functions) kann innerhalb eines **an einem Anker positionierten** Elements in den [Inset-Eigenschaftswerten](#properties_that_accept_anchor_function_values) verwendet werden und gibt einen Längenwert relativ zur Position der Ränder des zugehörigen Ankerelements zurück.

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
  - : Der Wert der {{cssxref("anchor-name")}}-Eigenschaft eines Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>`-Wert. Wenn ausgelassen, wird der **Standardanker** des Elements, der in seiner {{cssxref("position-anchor")}}-Eigenschaft referenziert wird oder dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut zugeordnet ist, verwendet.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor()`-Funktion verknüpft ein Element nicht mit einem Anker; es positioniert das Element nur relativ zu diesem Anker. Die {{cssxref("position-anchor")}}-CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut wird weiterhin benötigt, um die Zuordnung zu erstellen.

- `<anchor-side>`
  - : Gibt die Seite des Ankers oder die relative Entfernung von der `start`-Seite an, zu der das Element relativ positioniert wird. Wenn ein physikalischer oder logischer Wert verwendet wird, der mit der Inset-Eigenschaft, auf die `anchor()` gesetzt ist, nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) ist, wird der Fallback-Wert verwendet. Gültige Werte sind:
    - `top`
      - : Oben vom Ankerelement.
    - `right`
      - : Rechts vom Ankerelement.
    - `bottom`
      - : Unten vom Ankerelement.
    - `left`
      - : Links vom Ankerelement.
    - `inside`
      - : Die gleiche Seite wie die Inset-Eigenschaft.
    - `outside`
      - : Die gegenüberliegende Seite der Inset-Eigenschaft.
    - `start`
      - : Der logische Start des [Enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des enthaltenden Blocks des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `center`
      - : Das Zentrum der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der Inset-Eigenschaft an, auf der die `anchor()`-Funktion gesetzt ist.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, auf den die Funktion zurückgreifen sollte, wenn die `anchor()`-Funktion andernfalls nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht es, ein Element relativ zu den Rändern eines Ankerelements zu positionieren. Sie ist nur innerhalb von {{Glossary("inset_properties", "Inset-Eigenschaftswerten")}} gültig, die auf absolute oder fixierte Positionselemente gesetzt sind.

Sie gibt einen `<length>`-Wert an, der den Abstand zwischen der durch den Inset-Wert angegebenen Seite des an einem Anker positionierten Elements und der durch den gewählten `<anchor-side>`-Wert angegebenen Seite des Ankerelements angibt. Da sie einen `<length>`-Wert zurückgibt, kann sie in [anderen CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) verwendet werden, die Längenwerte akzeptieren, darunter {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn kein Anker mit dem durch `<anchor-name>` angegebenen Namen existiert oder das positionierte Element keinen zugehörigen Anker hat (d.h. über die {{cssxref("position-anchor")}}-Eigenschaft), wird der erste Parameter als ungültig betrachtet und der Fallback-`<length-percentage>`-Wert verwendet, falls einer verfügbar ist. Wenn beispielsweise `top: anchor(bottom, 50px)` auf dem positionierten Element angegeben wurde, aber kein Anker damit verbunden war, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe das [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul und der [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)-Leitfaden.

### Eigenschaften, die `anchor()`-Funktionswerte akzeptieren

Die CSS-{{Glossary("inset_properties", "Inset-Eigenschaften")}}, die eine `anchor()`-Funktion als Wertkomponente akzeptieren, umfassen:

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

Wenn eine `anchor()`-Funktion innerhalb eines Inset-Eigenschaftswerts verwendet wird, muss der innerhalb der `anchor()`-Funktion angegebene `<anchor-side>`-Parameter mit der Achse kompatibel sein, auf der sich die Inset-Eigenschaft befindet.

Das bedeutet, dass physikalische `<anchor-side>`-Werte innerhalb der Werte physikalischer Inset-Eigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Achsrichtung wie der `<anchor-side>`-Wert hat. Mit anderen Worten, die `top`- und `bottom`-Seiten sind innerhalb der `left`- und `right`-Eigenschaftswerte nicht gültig, und die `left`- und `right`-Seiten sind innerhalb der `top`- und `bottom`-Eigenschaftswerte nicht gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da beides vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wurde, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhält. Wenn kein Fallback vorhanden ist, verhält sich die Inset-Eigenschaft, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>`-Werte sowohl innerhalb logischer als auch physikalischer Inset-Eigenschaften verwenden, da logische `<anchor-side>`-Werte relativ zur relevanten Achse der Inset-Eigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle einwandfrei.

Die Sache wird komplizierter, wenn physikalische `<anchor-side>`-Parameter innerhalb logischer Inset-Eigenschaftswerte verwendet werden, da die physikalische Seite mit der Achse übereinstimmen muss, zu der die Inset-Eigenschaft im aktuellen Schreibmodus relevant ist. Zum Beispiel:

- In einem horizontalen Schreibmodus ist die Block-Richtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist nicht kompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wäre, wäre der berechnete Wert `50px` und das positionierte Element würde `50px` vom Blockende (unten) seines nächsten positionierten Vorfahren oder des Viewports positioniert, abhängig vom Wert des `position`.
- In einem vertikalen Schreibmodus ist die Block-Richtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist nicht kompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, wäre der berechnete Wert `50px` und das positionierte Element würde `50px` vom Blockende (links oder rechts, je nach Schreibmodus) seines nächsten positionierten Vorfahren oder des Viewports positioniert, abhängig vom Wert des `position`.

Um die Möglichkeit von Verwirrung mit diesen Werten zu minimieren, wird empfohlen, logische Inset-Eigenschaften mit logischen `<anchor-side>`-Werten und physikalische Inset-Eigenschaften mit physikalischen `<anchor-side>`-Werten zu verwenden. Es sollte vorzugsweise auf die Verwendung logischer Werte gesetzt werden, wann immer dies möglich ist, da sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} geeignet sind.

Die Werte `center` und `<percentage>` sind innerhalb der `anchor()`-Funktion innerhalb aller logischen und physikalischen Inset-Eigenschaften gültig.

Die folgende Tabelle führt die Inset-Eigenschaften und die `<anchor-side>`-Parameterwerte auf, die mit ihnen kompatibel sind. Wir haben nur die langen Inset-Eigenschaften aufgelistet; diese umfassen die Inset-Eigenschaftswerte in Kurzform.

| Inset-Eigenschaft                           | Kompatibler `<anchor-side>`-Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` zur Positionierung von Popovers

Bei der Verwendung von `anchor()` zur Positionierung von [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) sollten Sie beachten, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der von Ihnen angestrebten Position kollidieren. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.positionedPopover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [untersucht Möglichkeiten, diese Umgehung zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn die `anchor()`-Funktion sich auf eine Seite des Standardankers bezieht, können Sie einen {{cssxref("margin")}}-Wert hinzufügen, um den erforderlichen Abstand zwischen den Rändern des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()`-Funktion innerhalb einer {{cssxref("calc")}}-Funktion verwenden, um Abstände hinzuzufügen.

In diesem Beispiel wird der rechte Rand des positionierten Elements an die linke Kante des Ankerelements angepasst, dann wird ein Abstand hinzugefügt, um Platz zwischen den Rändern zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-right: 10px;
}
```

Dieses Beispiel positioniert den logischen Blockendrand des positionierten Elements `10px` vom logischen Blockanfang des Ankerelements entfernt:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie verschiedene `<anchor-name>`-Werte innerhalb der `anchor()`-Funktion verschiedener Inset-Eigenschaften auf demselben Element spezifizieren (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionen zu schaffen, wie z.B. Ziehpunkte an den Ecken eines positionierten Elements, die verwendet werden können, um es zu vergrößern oder zu verkleinern.

Obwohl ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem einzelnen Anker verbunden, der über seine {{cssxref("position-anchor")}}-Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)-HTML-Attribut) definiert wird. Dies ist der Anker, mit dem das Element scrollt, wenn die Seite scrollt; er kann auch verwendet werden, um zu steuern, wann das Element [bedingungsgemäß ausgeblendet](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines an einem Anker positionierten Elements auf die Höhe seines Ankers zu setzen, indem die unteren und oberen Kanten an die unteren und oberen Kanten des Ankers gesetzt werden. Die `anchor()`-Funktion wird innerhalb einer `calc()`-Funktion verwendet, um das an einem Anker positionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element ein, das wir als Anker festlegen, und ein {{htmlelement("p")}}-Element, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name`-Wert des Ankerelements als Wert der `position-anchor`-Eigenschaft des positionierten Elements, um die Elemente zu verknüpfen, und setzen dann drei Inset-Eigenschaften auf das an einem Anker positionierte Element. Die ersten beiden positionieren den oberen Rand des Elements bündig mit dem oberen Rand des Ankers und den unteren Rand bündig mit dem unteren Rand des Ankers. In der dritten Inset-Eigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um den linken Rand des Elements `10px` nach rechts vom Anker zu positionieren.

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

### Vergleich verschiedener Ankerseitenwerte

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaften positioniert ist, die mithilfe von `anchor()`-Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, mit denen Sie die `<anchor-side>`-Werte innerhalb dieser `anchor()`-Funktionen variieren können, um zu sehen, welchen Effekt sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, die wir damit verbinden werden.

Wir fügen auch etwas Platzhaltertext um die beiden `<div>`-Elemente ein, um den {{htmlelement("body")}} höher zu machen, damit er scrollt. Dieses Beispiel enthält auch zwei {{htmlelement("select")}}-Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl unterschiedlicher `<anchor-side>`-Werte ermöglichen, mit denen das positionierte Element gesetzt wird. Wir haben den Platzhaltertext und die `<select>`-Elemente der Übersichtlichkeit halber ausgeblendet.

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

Wir deklarieren das `anchor`-`<div>` als ein Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}}-Eigenschaft setzen. Dann verknüpfen wir es mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}}-Eigenschaft setzen. `top: anchor(--my-anchor bottom)` positioniert die obere Kante des Infoboxes bündig zur unteren Kante ihres Ankers, während `left: anchor(right)` die linke Kante des Infoboxes bündig zur rechten Kante ihres Ankers positioniert. Dies bietet eine Standardposition, die überschrieben wird, wenn verschiedene Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir hören auf das `change`-Ereignis, das auftritt, wenn ein neuer `<anchor-side>`-Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion innerhalb des relevanten Inset-Eigenschaftswerts (`top` oder `left`) der Infobox.

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

Wählen Sie verschiedene Werte aus den Dropdown-Menüs aus, um zu sehen, wie sie die Positionierung der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element positioniert relativ zu mehreren Ankern

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des an einem Anker positionierten Elements festzulegen. Die Anker können über Tastatursteuerungen verschoben oder gezogen werden und ändern die Größe des positionierten Elements.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}}-Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen bereitzustellen. Das letzte `<div>` hat eine Klasse von `infobox` und wird als positioniertes Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um ihnen die Tastaturfokussierung zu ermöglichen.

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

Die Anker erhalten jeweils einen anderen {{cssxref("anchor-name")}}-Wert, einen {{cssxref("position")}}-Wert von `absolute` und verschiedene Inset-Werte, um die Anker in einer Rechteckformation zu positionieren.

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

Das an einem Anker positionierte Element, mit einem `position` auf `fixed` gesetzt, ist mit einem Anker über seine {{cssxref("position-anchor")}}-Eigenschaft verknüpft. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>`-Werte mit den `anchor()`-Funktionen auf seinen Inset-Eigenschaften gesetzt werden. In diesem Fall haben wir {{cssxref("percentage")}}-Werte für den `<anchor-side>`-Parameter verwendet, um den Abstand vom Anfang der Achse der Inset-Eigenschaft anzugeben, auf der die Funktion gesetzt ist.

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

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder tabben Sie zu ihnen und verwenden Sie die <kbd>W</kbd>-, <kbd>A</kbd>-, <kbd>S</kbd>-, und <kbd>D</kbd>-Tasten, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie sich dadurch ihre Position verändert, und als Folge die Fläche des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente erhalten bleiben.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> This example is a proof-of-concept and not intended to be used in production code. Among its shortcomings, the example breaks if you try to move the anchors past each other horizontally or vertically.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
