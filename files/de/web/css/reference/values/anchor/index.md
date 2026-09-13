---
title: "`anchor()` CSS-Funktion"
short-title: anchor()
slug: Web/CSS/Reference/Values/anchor
l10n:
  sourceCommit: 25ad29eedf5897f5b0ca23c3295261cbd01c6031
---

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann innerhalb der Werte einer **anker-positionierten** [Einbettungseigenschaft](#properties_that_accept_anchor_function_values) verwendet werden und gibt einen Längenwert relativ zur Position der Kanten des zugehörigen Ankerelements zurück.

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
  - : Der Wert der {{cssxref("anchor-name")}} Eigenschaft eines Ankerelements, auf das Sie die Seite des Elements relativ ausrichten möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der in seiner {{cssxref("position-anchor")}} Eigenschaft referenziert wird oder über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element verbunden ist.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor()` Funktion verknüpft kein Element mit einem Anker; es positioniert lediglich das Element relativ zu diesem Anker. Die CSS-Eigenschaft {{cssxref("position-anchor")}} oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut ist weiterhin erforderlich, um die Verknüpfung herzustellen.

- `<anchor-side>`
  - : Gibt die Seite des Ankers oder den relativen Abstand von der `start`-Seite an, zu der das Element relativ positioniert ist. Wenn ein physischer oder logischer Wert verwendet wird, der nicht mit der Einbettungseigenschaft kompatibel ist, auf die `anchor()` gesetzt ist, wird der Ausweichwert verwendet. Gültige Werte sind:
    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `inside`
      - : Dieselbe Seite wie die Einbettungseigenschaft.
    - `outside`
      - : Die gegenüberliegende Seite der Einbettungseigenschaft.
    - `start`
      - : Der logische Anfang des [umgebenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements entlang der Achse der Einbettungseigenschaft, auf der die `anchor()` Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des umgebenden Blocks des Ankerelements entlang der Achse der Einbettungseigenschaft, auf der die `anchor()` Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Einbettungseigenschaft, auf der die `anchor()` Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Einbettungseigenschaft, auf der die `anchor()` Funktion gesetzt ist.
    - `center`
      - : Die Mitte der Achse der Einbettungseigenschaft, auf der die `anchor()` Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt den Abstand als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der Einbettungseigenschaft an, auf der die `anchor()` Funktion gesetzt ist.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Ausweichwert an, auf den die Funktion zurückgreifen sollte, falls die `anchor()` Funktion ansonsten ungültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()` Funktion ermöglicht es, ein Element relativ zu den Kanten eines Ankerelements zu positionieren. Sie ist nur innerhalb von {{Glossary("inset_properties", "Einbettungseigenschaft")}} Werten gültig, die auf absolut oder fest positionierten Elementen gesetzt sind.

Sie gibt einen `<length>` Wert zurück, der den Abstand von der Kante des umgebenden Blocks, die der Einbettungseigenschaft entspricht, zur Kante des Ankerelements angibt, die durch den `<anchor-side>` Wert spezifiziert ist. Da sie einen `<length>` zurückgibt, kann sie innerhalb von [anderen CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Existiert kein Anker mit dem durch den `<anchor-name>` angegebenen Namen oder hat das positionierte Element keinen mit ihm verbundenen Anker (z.B. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig angesehen, und der Ausweichwert `<length-percentage>` wird verwendet, falls vorhanden. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf das positionierte Element angewendet wird, aber kein Anker zugeordnet ist, wird der Ausweichwert verwendet und `top` würde einen berechneten Wert von `50px` erhalten.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung siehe das [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor()` Funktionswerte akzeptieren

Die CSS {{Glossary("inset_properties", "Einbettungseigenschaften")}}, die eine `anchor()` Funktion als Wertkomponente akzeptieren, umfassen:

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

### Kompatibilität von Einbettungseigenschaften und `<anchor-side>` Werten

Wenn Sie eine `anchor()` Funktion innerhalb eines Einbettungseigenschaftswerts verwenden, muss der innerhalb der `anchor()` Funktion angegebene `<anchor-side>` Parameter mit der Achse kompatibel sein, auf der die Einbettungseigenschaft liegt.

Das bedeutet, dass physische `<anchor-side>` Werte innerhalb der Werte physischer Einbettungseigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Achsenrichtung wie das `<anchor-side>` hat. Mit anderen Worten sind die Seiten `top` und `bottom` nicht innerhalb der Werte der `left` und `right` Eigenschaften valide, und die Seiten `left` und `right` sind innerhalb der `top` und `bottom` Werte nicht gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben würde, würde der Ausweichwert verwendet, so dass `top` einen berechneten Wert von `50px` erhalten würde. Wenn kein Ausweichwert vorhanden ist, verhält sich die Einbettungseigenschaft so, als ob sie auf `auto` gesetzt wäre.

Sie können logische `<anchor-side>` Werte sowohl innerhalb logischer als auch physischer Einbettungseigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der Einbettungseigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle problemlos.

Die Situation wird komplizierter, wenn physische `<anchor-side>` Parameter innerhalb logischer Einbettungseigenschaftswerte verwendet werden, da die physische Seite die Achse entsprechen muss, zu der die Einbettungseigenschaft im aktuellen Schreibmodus relevant ist. Beispielsweise:

- In einem horizontalen Schreibmodus ist die Blockrichtung von oben nach unten; daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist inkompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wäre, läge der berechnete Wert bei `50px` und das positionierte Element wäre `50px` vom Blockende (unten) seines nächsten positionierten Vorgängers oder des Viewports entfernt, abhängig vom gesetzten `position`-Wert.
- In einem vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder von links nach rechts; daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist inkompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, läge der berechnete Wert bei `50px` und das positionierte Element wäre `50px` vom Blockende (links oder rechts, abhängig vom Schreibmodus) seines nächsten positionierten Vorgängers oder des Viewports entfernt, abhängig vom gesetzten `position`-Wert.

Um das Potenzial für Verwirrungen mit diesen Werten zu mildern, wird empfohlen, logische Einbettungseigenschaften mit logischen `<anchor-side>` Werten zu verwenden und physische Einbettungseigenschaften mit physischen `<anchor-side>` Werten. Sie sollten die Verwendung logischer Werte bevorzugen, wann immer dies möglich ist, da sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} geeignet sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()` Funktion in allen logischen und physischen Einbettungseigenschaften gültig.

Die folgende Tabelle listet die Einbettungseigenschaften und die mit ihnen kompatiblen `<anchor-side>` Parameterwerte auf. Wir haben nur die langen Einbettungseigenschaften aufgelistet; diese umfassen die Kurzform der Einbettungseigenschaftswerte.

| Einbettungseigenschaft                      | Kompatibler `<anchor-side>` Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` zur Positionierung von Popovers

Wenn Sie `anchor()` verwenden, um [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) zu positionieren, seien Sie sich bewusst, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der Position, die Sie erreichen möchten, in Konflikt stehen können. Die üblichen Übeltäter sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.positionedPopover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [untersucht Möglichkeiten, um dieses Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn sich die `anchor()` Funktion auf eine Seite des Standardankers bezieht, können Sie einen {{cssxref("margin")}} einfügen, um bei Bedarf Abstände zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()` Funktion innerhalb einer {{cssxref("calc")}} Funktion einschließen, um Abstände hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig an der linken Kante des Ankerelements und fügt dann einen Rand hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-right: 10px;
}
```

Dieses Beispiel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Startkante des Ankerelements entfernt:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie innerhalb der `anchor()` Funktion unterschiedliche `<anchor-name>` Werte für verschiedene Einbettungseigenschaften desselben Elements angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionen wie Zuggriffe an den Ecken eines positionierten Elements zu erstellen, mit denen es in der Größe verändert werden kann.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es nur jemals mit dem einzelnen Anker verbunden, der über seine {{cssxref("position-anchor")}} Eigenschaft definiert ist (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut). Dies ist der Anker, mit dem das Element beim Scrollen der Seite mitscrollt; er kann auch verwendet werden, um zu steuern, wann das Element [bedingt verborgen](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Nutzung

In diesem Beispiel wird die `anchor()` Funktion verwendet, um die Höhe eines anker-positionierten Elements auf die Höhe seines Ankers zu setzen, indem die unteren und oberen Kanten auf die unteren und oberen Kanten des Ankers gesetzt werden. Die `anchor()` Funktion wird dann innerhalb einer `calc()` Funktion verwendet, um das anker-positionierte Element von seinem Anker zu verschieben.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element ein, das wir als unseren Anker setzen, und ein {{htmlelement("p")}}-Element, das wir relativ zu diesem Anker positionieren:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements als Wert der Eigenschaft `position-anchor` des positionierten Elements ein, um die Elemente zu verknüpfen, und setzen dann drei Einbettungseigenschaften auf das anker-positionierte Element. Die ersten beiden positionieren die obere Kante des Elements bündig zur oberen Kante des Ankers und die untere Kante bündig zur unteren Kante des Ankers. In der dritten Einbettungseigenschaft wird die `anchor()` Funktion innerhalb einer `calc()` Funktion verwendet, um die linke Kante des Elements `10px` zur rechten Kante des Ankers zu positionieren.

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

### Vergleich verschiedener `<anchor-side>` Werte

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mithilfe von `anchor()` Funktionen definiert sind. Es enthält auch zwei Drop-Down-Menüs, mit denen Sie die `<anchor-side>` Werte innerhalb dieser `anchor()` Funktionen variieren können, um deren Auswirkungen zu sehen.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als das Ankerelement und das positionierte Element gedacht, die wir miteinander verknüpfen werden.

Wir fügen auch einige Fülltexte um die beiden `<div>`-Elemente ein, um den {{htmlelement("body")}} höher zu machen, damit es scrollen kann. Dieses Beispiel enthält auch zwei {{htmlelement("select")}}-Elemente, um die Drop-Down-Menüs zu erstellen, die es ermöglichen, verschiedene `<anchor-side>` Werte auszuwählen, mit denen das positionierte Element platziert wird. Wir haben die Fülltexte und die `<select>`-Elemente aus Platzgründen ausgeblendet.

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

Wir erklären das `anchor` `<div>` als ein Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen. Dann verknüpfen wir es mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}} Eigenschaft einstellen. `top: anchor(--my-anchor bottom)` positioniert die Oberkante der Infobox bündig mit der Unterkante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig mit der rechten Kante ihres Ankers positioniert. Dies stellt eine anfängliche Position dar, die überschrieben wird, wenn unterschiedliche Werte aus den Drop-Down-Menüs ausgewählt werden.

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

Wir lauschen dem `change` Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()` Funktion innerhalb der entsprechenden Einbettungseigenschaft (`top` oder `left`) der Infobox.

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

Wählen Sie unterschiedliche Werte aus den Drop-Down-Menüs, um zu sehen, wie sie die Positionierung der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element positioniert relativ zu mehreren Ankern

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des anker-positionierten Elements festzulegen. Die Anker können über Tastatursteuerung oder durch Ziehen bewegt werden, was die Größe des positionierten Elements verändert.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}}-Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse von `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um es zu erlauben, Tastaturfokus zu erhalten.

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

Die Anker erhalten jeweils einen anderen {{cssxref("anchor-name")}} Wert, einen {{cssxref("position")}} Wert von `absolute` und verschiedene Einbettungswerte, um die Anker in einer rechteckigen Formation zu positionieren.

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

Das anker-positionierte Element, dessen `position` auf `fixed` gesetzt ist, wird über seine {{cssxref("position-anchor")}} Eigenschaft mit einem Anker verbunden. Es wird relativ zu zwei Ankern positioniert, indem innerhalb der `anchor()` Funktionen auf seinen Einbettungseigenschaften zwei unterschiedliche `<anchor-name>` Werte angegeben werden. In diesem Fall haben wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet, der den Abstand vom Anfang der Achse der Einbettungseigenschaft angibt, auf der die Funktion gesetzt ist.

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

Das positionierte Element wird relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder navigieren Sie mit der Tabulatortaste und verwenden Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie sich dadurch ihre Position und folglich das Bereich des positionierten Elements ändert. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Machbarkeitsnachweis und nicht für die Verwendung in Produktionscode vorgesehen. Zu seinen Schwachstellen gehört, dass das Beispiel nicht funktioniert, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Ausweichoptionen und bedingtes Verbergen für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
