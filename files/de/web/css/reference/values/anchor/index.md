---
title: anchor()
slug: Web/CSS/Reference/Values/anchor
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann in den Werten der [Inset-Eigenschaft](#properties_that_accept_anchor_function_values) eines **ankerpositionierten** Elements verwendet werden und gibt einen Längenwert relativ zur Position der Kanten des zugehörigen Ankerelements zurück.

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
  - : Der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name) Eigenschaftswert eines Ankerelements, zu dem die Seite des Elements positioniert werden soll. Dies ist ein `<dashed-ident>` Wert. Wird der Wert weggelassen, wird der **Standardanker** des Elements verwendet, der in seiner [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor) Eigenschaft referenziert oder dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor()` Funktion bewirkt nicht die Zuordnung eines Elements zu einem Anker; es positioniert nur das Element relativ zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor) CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut wird weiterhin benötigt, um die Zuordnung herzustellen.

- `<anchor-side>`
  - : Gibt die Seite des Ankers oder die relative Entfernung von der `start`-Seite an, zu der das Element positioniert wird. Wird ein physikalischer oder logischer Wert verwendet, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf die `anchor()` angewendet wird, wird der Fallback-Wert verwendet. Gültige Werte sind:
    - `top`
      - : Die obere Seite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die untere Seite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `inside`
      - : Die gleiche Seite wie die Inset-Eigenschaft.
    - `outside`
      - : Die gegenüberliegende Seite der Inset-Eigenschaft.
    - `start`
      - : Der logische Anfang des [enthaltenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements entlang der Achse der Inset-Eigenschaft, auf die die `anchor()` Funktion angewendet wird.
    - `end`
      - : Das logische Ende des enthaltenden Blocks des Ankerelements entlang der Achse der Inset-Eigenschaft, auf die die `anchor()` Funktion angewendet wird.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, auf die die `anchor()` Funktion angewendet wird.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, auf die die `anchor()` Funktion angewendet wird.
    - `center`
      - : Das Zentrum der Achse der Inset-Eigenschaft, auf die die `anchor()` Funktion angewendet wird.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der Inset-Eigenschaft an, auf die die `anchor()` Funktion angewendet wird.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, den die Funktion auflösen soll, falls die `anchor()` Funktion ansonsten nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()` Funktion ermöglicht die Positionierung eines Elements relativ zu den Kanten eines Ankerelements. Sie ist nur gültig innerhalb von {{Glossary("inset_properties", "Inset-Eigenschaft")}} Werten, die auf absolut oder fix positionierte Elemente gesetzt sind.

Sie gibt einen `<length>` Wert zurück, der die Entfernung zwischen der durch den Inset-Wert angegebenen Seite des ankerpositionierten Elements und der durch den gewählten `<anchor-side>` Wert angegebenen Seite des Ankerelements angibt. Da sie einen `<length>` Wert zurückgibt, kann sie innerhalb von [anderen CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}}, etc.

Existiert kein Anker mit dem angegebenen `<anchor-name>`, oder ist dem positionierten Element kein Anker zugeordnet (d.h. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig angesehen und der Fallback `<length-percentage>` Wert wird verwendet, wenn einer verfügbar ist. Beispielsweise wird, wenn `top: anchor(bottom, 50px)` auf das positionierte Element spezifiziert wurde, jedoch kein Anker zugeordnet ist, der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe das [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Einstiegsseite und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor()` Funktionswerte akzeptieren

Die CSS {{Glossary("inset_properties", "Inset-Eigenschaften")}}, die eine `anchor()` Funktion als Wertkomponente akzeptieren, umfassen:

- {{cssxref("top")}}
- {{cssxref("left")}}
- {{cssxref("bottom")}}
- {{cssxref("right")}}
- {{cssxref("inset")}} Kurzschreibweise
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block")}} Kurzschreibweise
- {{cssxref("inset-inline-start")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline")}} Kurzschreibweise

### Kompatibilität von Inset-Eigenschaften und `<anchor-side>` Werten

Beim Verwenden einer `anchor()` Funktion innerhalb eines Inset-Eigenschaftswertes muss der innerhalb der `anchor()` Funktion angegebene `<anchor-side>` Parameter mit der Achse kompatibel sein, auf der sich die Inset-Eigenschaft befindet.

Das bedeutet, dass physikalische `<anchor-side>` Werte innerhalb der Werte physikalischer Inset-Eigenschaften verwendet werden können, wenn die Eigenschaft die gleiche Achsenrichtung wie `<anchor-side>` hat. Mit anderen Worten, die `top` und `bottom` Seiten sind innerhalb der `left` und `right` Eigenschaftswerte nicht gültig, und die `left` und `right` Seiten sind innerhalb von `top` und `bottom` Eigenschaftswerten nicht gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` spezifiziert wird, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhält. Wenn kein Fallback vorhanden ist, verhält sich die Inset-Eigenschaft, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>` Werte sowohl innerhalb logischer als auch physikalischer Inset-Eigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der Inset-Eigenschaft werden, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Beispiel: `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` funktionieren alle einwandfrei.

Die Verwendung physikalischer `<anchor-side>` Parameter innerhalb logischer Inset-Eigenschaftswerte wird komplizierter, da die physikalische Seite mit der Achse übereinstimmen muss, die die Inset-Eigenschaft im aktuellen Schreibmodus betrifft. Beispiel:

- In einem horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)` aber `inset-block-end: anchor(left)` ist nicht kompatibel. Ist `inset-block-end: anchor(left, 50px)` gesetzt, wäre der berechnete Wert `50px` und das positionierte Element würde `50px` vom Blockende (unten) seines nächst gelegenen positionierten Vorfahren oder des Viewports, je nach gesetztem `position` Wert, positioniert werden.
- In einem vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist nicht kompatibel. Ist `inset-block-end: anchor(top, 50px)` gesetzt, wäre der berechnete Wert `50px` und das positionierte Element würde `50px` vom Blockende (links oder rechts, je nach Schreibmodus) seines nächst gelegenen positionierten Vorfahren oder des Viewports, je nach gesetztem `position` Wert, positioniert werden.

Um das Potenzial für Verwirrung mit diesen Werten zu mindern, wird geraten, logische Inset-Eigenschaften mit logischen `<anchor-side>` Werten und physikalische Inset-Eigenschaften mit physikalischen `<anchor-side>` Werten zu verwenden. Sie sollten die Verwendung logischer Werte wann immer möglich bevorzugen, da sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} geeignet sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()` Funktion in allen logischen und physikalischen Inset-Eigenschaften gültig.

Die untenstehende Tabelle listet die Inset-Eigenschaften auf und die dazu kompatiblen `<anchor-side>` Parameterwerte. Wir haben nur die Langform-Inset-Eigenschaften aufgelistet; diese umfassen die Kurzform-Inset-Eigenschaftswerte.

| Inset-Eigenschaft                           | Kompatibler `<anchor-side>` Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` zur Positionierung von Popovers

Beim Einsatz von `anchor()` zur Positionierung von [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) sollten Sie darauf achten, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der Position kollidieren, die Sie erreichen möchten. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.positionedPopover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [untersucht Möglichkeiten, dieses Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

### Verwendung von `anchor()` in `calc()`

Wenn die `anchor()` Funktion auf eine Seite des Standardankers verweist, können Sie ein {{cssxref("margin")}} einfügen, um bei Bedarf einen Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()` Funktion innerhalb einer {{cssxref("calc")}} Funktion einfügen, um Abstände hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann einen Rand hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

In diesem Beispiel wird die logische Blockendkante des positionierten Elements `10px` von der logischen Blockanfangkante des Ankerelements entfernt positioniert:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie verschiedene `<anchor-name>` Werte innerhalb der `anchor()` Funktion unterschiedlicher Inset-Eigenschaften auf demselben Element angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionen wie Ziehgriffe an den Ecken eines positionierten Elements zu erstellen, die zur Größenänderung verwendet werden können.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem einen Anker verbunden, der über seine [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor) Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut) definiert ist. Dies ist der Anker, mit dem das Element scrollt, wenn die Seite scrollt; er kann auch verwendet werden, um zu steuern, wann das Element [bedingungsgemäß ausgeblendet](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Allgemeine Verwendung

In diesem Beispiel wird die `anchor()` Funktion verwendet, um die Höhe eines ankerpositionierten Elements auf die Höhe seines Ankers festzulegen, indem die unteren und oberen Kanten auf die unteren und oberen Kanten des Ankers gesetzt werden. Die `anchor()` Funktion innerhalb einer `calc()` Funktion wird dann verwendet, um das ankerpositionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element ein, das wir als unseren Anker festlegen, und ein {{htmlelement("p")}} Element, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements als Wert der `position-anchor` Eigenschaft des positionierten Elements, um die Elemente zu verbinden, und setzen dann drei Inset-Eigenschaften auf dem ankerpositionierten Element. Die ersten beiden positionieren die Oberkante des Elements bündig zur oberen Kante des Ankers und die Unterkante bündig zur unteren Kante des Ankers. In der dritten Inset-Eigenschaft wird die `anchor()` Funktion innerhalb einer `calc()` Funktion verwendet, um die linke Kante des Elements `10px` von der rechten Kante des Ankers zu platzieren.

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

### Vergleich unterschiedlicher `<anchor-side>` Werte

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert wurde, die durch `anchor()` Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, mit denen Sie die `<anchor-side>` Werte innerhalb dieser `anchor()` Funktionen variieren können, um ihre Auswirkungen zu sehen.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente, eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, das wir damit verbinden werden.

Wir fügen auch etwas Fülltext um die beiden `<div>` Elemente ein, um den {{htmlelement("body")}} höher zu machen, sodass es scrollt. Dieses Beispiel enthält auch zwei {{htmlelement("select")}} Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>` Werte ermöglichen, mit denen das positionierte Element platziert wird. Wir haben den Fülltext und die `<select>` Elemente zur Übersichtlichkeit ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft zuweisen. Anschließend verbinden wir es mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}} Eigenschaft setzen. `top: anchor(--my-anchor bottom)` positioniert die obere Kante der Infobox bündig zur unteren Kante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig zur rechten Kante ihres Ankers positioniert. Dies liefert eine anfängliche Position, die überschrieben wird, wenn unterschiedliche Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir warten auf das `change` Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen dann den ausgewählten Wert als `<anchor-side>` in der `anchor()` Funktion innerhalb des relevanten Inset-Eigenschaftswertes (`top` oder `left`) der Infobox.

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

### Element positioniert relativ zu mehreren Ankern

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die zur Positionierung der oberen linken und unteren rechten Ecken des ankerpositionierten Elements verwendet werden. Die Anker können über die Tastatursteuerung oder durch Ziehen verschoben werden, was die Größe des positionierten Elements verändert.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben die Klasse `anchor` und werden als Anker definiert; jedem wird eine individuelle `id` zugewiesen, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat die Klasse `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um ihnen Tastaturfokus zu ermöglichen.

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

Die Anker erhalten jeweils einen anderen {{cssxref("anchor-name")}} Wert, einen {{cssxref("position")}} Wert von `absolute` und verschiedene Inset-Werte, um die Anker in einer rechteckigen Formation zu positionieren.

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

Das ankerpositionierte Element, dessen `position` auf `fixed` gesetzt ist, wird mit einem Anker über seine {{cssxref("position-anchor")}} Eigenschaft verbunden. Es wird relativ zu zwei Ankern positioniert, indem innerhalb der `anchor()` Funktionen auf seinen Inset-Eigenschaften unterschiedliche `<anchor-name>` Werte eingeschlossen werden. In diesem Fall haben wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet, um die Entfernung vom Anfang der Achse der Inset-Eigenschaft zu spezifizieren, auf die die Funktion gesetzt ist.

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

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder navigieren Sie mit der Tabulatortaste zu ihnen und verwenden Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, und <kbd>D</kbd>, um sie nach oben, unten, links und rechts zu bewegen. Beobachten Sie, wie sich ihre Position ändert und damit auch der Bereich des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptbeweis und nicht für die Verwendung in Produktionscode gedacht. Zu seinen Schwächen gehört, dass das Beispiel fehlerhaft wird, wenn versucht wird, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
