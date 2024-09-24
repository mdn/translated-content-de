---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) kann innerhalb der Werteigenschaften eines **ankerpositionierten** Elements verwendet werden, um einen Längenwert relativ zur Position der Kanten seines zugeordneten Ankerelements zurückzugeben.

## Syntax

```css
/* Seite oder Prozentsatz */
top: anchor(bottom);
top: anchor(50%);
top: calc(anchor(bottom) + 10px)
inset-block-end: anchor(start);

/* Seite eines benannten Ankers */
top: anchor(--myAnchor bottom);
inset-block-end: anchor(--myAnchor start);

/* Seite eines benannten Ankers mit Fallback */
top: anchor(--myAnchor bottom, 50%);
inset-block-end: anchor(--myAnchor start, 200px);
left: calc(anchor(--myAnchor right, 0%) + 10px);
```

### Parameter

Die Syntax der `anchor()` Funktion ist wie folgt:

```plain
anchor(<anchor-element> <anchor-side>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-element>` {{optional_inline}}

  - : Der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaftswert eines Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn ausgelassen, wird der **Standardanker** des Elements verwendet, auf den in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft verwiesen wird, oder der über das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut dem Element zugeordnet ist.

    > [!NOTE]
    > Die Angabe eines `<anchor-element>` innerhalb einer `anchor()` Funktion assoziiert kein Element mit einem Anker; sie positioniert lediglich das Element relativ zu diesem Anker. Die CSS-Eigenschaft [`position-anchor`](/de/docs/Web/CSS/position-anchor) oder das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) ist weiterhin erforderlich, um die Assoziation herzustellen.

- `<anchor-side>`

  - : Gibt die Seite des Ankers an, oder die relative Entfernung von der `start`-Seite, zu der das Element relativ positioniert wird. Wenn ein physischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der inset-Eigenschaft ist, auf der `anchor()` gesetzt ist, wird der Fallback-Wert verwendet. Gültige Werte umfassen:

    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `start`
      - : Der logische Start des [Umschließenden Blocks](/de/docs/Web/CSS/Containing_block) des Ankerelements entlang der Achse der inset-Eigenschaft, auf die sich die `anchor()` Funktion bezieht.
    - `end`
      - : Das logische Ende des umschließenden Blocks des Ankerelements entlang der Achse der inset-Eigenschaft, auf die sich die `anchor()` Funktion bezieht.
    - `self-start`
      - : Der logische Start des Inhalts des Ankerelements entlang der Achse der inset-Eigenschaft, auf die sich die `anchor()` Funktion bezieht.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der inset-Eigenschaft, auf die sich die `anchor()` Funktion bezieht.
    - `center`
      - : Das Zentrum der Achse der inset-Eigenschaft, auf die sich die `anchor()` Funktion bezieht.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung, als Prozentsatz, vom Start des Inhalts des Elements entlang der Achse der inset-Eigenschaft an, auf die sich die `anchor()` Funktion bezieht.

    Das CSS Ankerpositionierungsmodul führt zwei zusätzliche `<anchor-side>` Werte, `inside` und `outside`, ein, die noch nicht implementiert wurden.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, zu dem die Funktion aufgelöst werden soll, wenn die `anchor()` Funktion sonst nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()` Funktion ermöglicht es, ein Element relativ zu den Kanten eines Ankerelements zu positionieren. Sie ist nur gültig innerhalb von {{glossary("inset properties", "inset property")}} Werten, die auf absolut oder fest positionierten Elementen eingestellt sind.

Sie gibt einen `<length>`-Wert zurück, der die Entfernung zwischen der vom inset-Wert angegebenen Seite des ankerpositionierten Elements und der durch den ausgewählten `<anchor-side>` Wert angegebenen Seite des Ankerelements angibt. Da sie einen `<length>` zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/CSS_Functions), die Längenwerte akzeptieren, verwendet werden, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn kein Anker mit dem durch das `<anchor-element>` angegebenen Namen existiert oder wenn dem positionierten Element kein Anker zugeordnet ist (d.h. über die Eigenschaft {{cssxref("position-anchor")}}), wird der erste Parameter als ungültig betrachtet und der Fallback-`<length-percentage>` Wert wird verwendet, wenn einer verfügbar ist. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf dem positionierten Element angegeben wäre, aber kein Anker damit verbunden wäre, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und -nutzung siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und den Leitfaden [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

### Eigenschaften, die `anchor()` Funktionswerte akzeptieren

Die CSS {{glossary("inset properties")}}, die eine `anchor()` Funktion als Wertkomponente akzeptieren, umfassen:

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

### Kompatibilität von inset Eigenschaften und `<anchor-side>` Werten

Wenn Sie eine `anchor()` Funktion innerhalb eines inset Eigenschaftswerts verwenden, muss der im Inneren der `anchor()` Funktion angegebene `<anchor-side>` Parameter mit der Achse kompatibel sein, auf der sich die inset Eigenschaft befindet.

Das bedeutet, dass physische `<anchor-side>` Werte innerhalb der Werte physischer inset Eigenschaften verwendet werden können, wenn die Eigenschaft die gleiche Achsenrichtung wie `<anchor-side>` hat. Mit anderen Worten, die `top` und `bottom` Seiten sind nicht innerhalb der `left` und `right` Eigenschaftswerte gültig, und die `left` und `right` Seiten sind nicht innerhalb der `top` und `bottom` Eigenschaftswerte gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da sie beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wäre, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhält. Sollte kein Fallback vorhanden sein, verhält sich die inset Eigenschaft so, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>` Werte innerhalb sowohl logischer als auch physischer inset Eigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der inset Eigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Beispielsweise funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle einwandfrei.

Die Geschichte wird komplizierter, wenn physische `<anchor-side>` Parameter innerhalb logischer inset Eigenschaftswerte verwendet werden, da die physische Seite mit der Achse übereinstimmen muss, auf die sich die inset Eigenschaft im aktuellen Schreibmodus bezieht. Zum Beispiel:

- Im horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist nicht kompatibel. Wenn `inset-block-end: anchor(left, 50px)` festgelegt würde, wäre der berechnete Wert `50px` und das positionierte Element würde `50px` vom Blockende (unten) seines nächstgelegenen positionierten Vorfahrens oder des Ansichtsfensters positioniert, abhängig vom `position`-Wert.
- Im vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist nicht kompatibel. Wenn `inset-block-end: anchor(top, 50px)` festgelegt würde, wäre der berechnete Wert `50px` und das positionierte Element würde `50px` vom Blockende (links oder rechts, je nach Schreibmodus) seines nächstgelegenen positionierten Vorfahrens oder des Ansichtsfensters positioniert, abhängig vom `position`-Wert.

Um die Verwirrungspotentiale mit diesen Werten zu minimieren, wird empfohlen, logische inset Eigenschaften mit logischen `<anchor-side>` Werten und physische inset Eigenschaften mit physischen `<anchor-side>` Werten zu verwenden. Sie sollten die Verwendung logischer Werte bevorzugen, wann immer dies möglich ist, weil sie besser für die [Internationalisierung](/de/docs/Glossary/Internationalization) geeignet sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()` Funktion in allen logischen und physischen inset Eigenschaften gültig.

Die folgende Tabelle listet die inset Eigenschaften und die `<anchor-side>` Parameterwerte auf, die mit ihnen kompatibel sind. Wir haben nur die Langform der inset Eigenschaften aufgelistet; diese umfassen die Werte der Kurzform der inset Eigenschaften.

| Inset Eigenschaft                           | Kompatibler `<anchor-side>` Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn sich die `anchor()` Funktion auf eine Seite des Standardankers bezieht, können Sie eine {{cssxref("margin")}} verwenden, um bei Bedarf einen Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()` Funktion innerhalb einer `calc()` Funktion einfügen, um Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements und fügt dann einen Rand hinzu, um etwas Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logische Block-Endkante des positionierten Elements `10px` von der logischen Block-Startkante des Ankerelements entfernt:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie im Inneren der `anchor()` Funktion der verschiedenen inset Eigenschaften auf demselben Element verschiedene `<anchor-element>` Namen angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann nützliche Funktionen schaffen, wie z.B. Ziehgriffe an den Ecken eines positionierten Elements, die zum Vergrößern oder Verkleinern verwendet werden können.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem einzigen Anker verbunden, der über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) HTML-Attribut) definiert ist. Dies ist der Anker, mit dem das Element scrollt, wenn die Seite scrollt; er kann auch verwendet werden, um zu steuern, wann das Element [bedingungsgemäß ausgeblendet](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()` Funktion verwendet, um die Höhe eines ankerpositionierten Elements auf die Höhe seines Ankers festzulegen, indem die unteren und oberen Kanten mit den unteren und oberen Kanten des Ankers abgeglichen werden. Die `anchor()` Funktion in einer `calc()` Funktion wird dann verwendet, um das ankerpositionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element ein, das wir als unseren Anker definieren, und ein {{htmlelement("p")}}, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">Dies ist ein positioniertes Element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements als den Wert der `position-anchor` Eigenschaft des positionierten Elements, um die Elemente zu verknüpfen, und setzen dann drei inset Eigenschaften auf dem ankerpositionierten Element. Die ersten beiden positionieren die Oberkante des Elements bündig mit der Oberkante des Ankers und die Unterkante bündig mit der Unterkante des Ankers. In der dritten inset Eigenschaft wird die `anchor()` Funktion in einer `calc()` Funktion verwendet, um die linke Kante des Elements `10px` von der rechten Kante des Ankers zu positionieren.

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

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mit `anchor()`-Funktionen definiert sind. Es beinhaltet auch zwei Dropdown-Menüs, die es ermöglichen, die `<anchor-side>` Werte innerhalb dieser `anchor()`-Funktionen zu variieren, um zu sehen, welche Auswirkungen sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse `anchor` und eines mit einer Klasse `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, das wir damit verknüpfen werden.

Wir fügen auch etwas Fülltext um die beiden `<div>` Elemente ein, um den {{htmlelement("body")}} höher zu machen, damit er scrollbar ist. Dieses Beispiel enthält auch zwei {{htmlelement("select")}} Elemente, um die Dropdown-Menüs zu erstellen, mit denen verschiedene `<anchor-side>` Werte ausgewählt werden können, die zur Platzierung des positionierten Elements verwendet werden. Wir haben den Fülltext und die `<select>` Elemente der Kürze halber ausgeblendet.

```html hidden
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
```

```html
<div class="anchor">⚓︎</div>

<div class="infobox">
  <p>Dies ist ein Informationsfenster.</p>
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
      Wählen Sie einen vertikalen <code>anchor()</code> Wert:
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
      Wählen Sie einen horizontalen <code>anchor()</code> Wert:
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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft festlegen. Wir verbinden es dann mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}} Eigenschaft festlegen. `top: anchor(--myAnchor bottom)` positioniert die obere Kante der Infobox bündig an der unteren Kante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig an der rechten Kante ihres Ankers positioniert. Dies bietet eine Ausgangsposition, die überschrieben wird, wenn in den Dropdown-Menüs andere Werte ausgewählt werden.

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

Wir hören auf das `change`-Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()` Funktion innerhalb der entsprechenden inset Eigenschaft (`top` oder `left`) Wert der Infobox.

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

Wählen Sie verschiedene Werte aus den Dropdown-Menüs, um zu sehen, wie sie die Position der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element positioniert relativ zu mehreren Ankern

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und der unteren rechten Ecke des ankerpositionierten Elements festzulegen. Die Anker können über Tastatursteuerungen bewegt oder gezogen werden, was das positionierte Element vergrößert oder verkleinert.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben eine Klasse `anchor` und werden als Anker definiert; jeder hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse `infobox` und wird als das positionierte Element definiert. Wir fügen das Attribut [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex) hinzu, um ihnen zu ermöglichen, den Tastaturfokus zu erhalten.

```html
<div id="anchor1" class="anchor" tabindex="0">⚓︎1</div>

<div id="anchor2" class="anchor" tabindex="0">⚓︎2</div>

<div class="infobox">
  <p>Dies ist ein Informationsfenster.</p>
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

Den Ankern werden jeweils unterschiedliche {{cssxref("anchor-name")}} Werte gegeben, ein {{cssxref("position")}} Wert von `absolute`, und verschiedene inset Werte, um die Anker in einer rechteckigen Formation zu positionieren.

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

Das ankerpositionierte Element mit `position` auf `fixed` eingestellt, ist mit einem Anker über seine {{cssxref("position-anchor")}} Eigenschaft verbunden. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>` Werte mit den `anchor()` Funktionen eingestellt auf seinen inset Eigenschaften hinzugefügt werden. In diesem Fall haben wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet, um die Entfernung vom Start der Achse der inset Eigenschaft anzugeben, auf der die Funktion eingestellt ist.

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
// alle Anker greifen und jeden einzeln verschiebbar machen
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
    // die neue Cursorposition berechnen:
    pos1 = pos3 - e.offsetLeft;
    pos2 = pos4 - e.offsetTop;
    pos3 = e.offsetLeft;
    pos4 = e.offsetTop;
    // die neue Position des Elements festlegen:
    elem.style.top = elem.offsetTop - pos2 + "px";
    elem.style.left = elem.offsetLeft - pos1 + "px";
  }

  function dragMouseDown(e) {
    // die Mauszeigerposition beim Start holen:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // eine Funktion aufrufen, wann immer die Maus bewegt wird:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    // die neue Cursorposition berechnen:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // die neue Position des Elements festlegen:
    elem.style.top = elem.offsetTop - pos2 + "px";
    elem.style.left = elem.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // aufhören sich zu bewegen, wenn die Maustaste losgelassen wird:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
```

#### Ergebnis

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder verwenden Sie die Tabulatortaste und die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> Tasten, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie sich dies auf ihre Position auswirkt und infolgedessen auf das Gebiet des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptnachweis und nicht zur Verwendung in Produktionscode gedacht. Zu seinen Mängeln gehört, dass das Beispiel bricht, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Fallbacks und bedingtes Ausblenden versuchen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
