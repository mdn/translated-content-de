---
title: anchor()
slug: Web/CSS/Reference/Values/anchor
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann innerhalb eines **ankergedachten** Elements bei den Werten der [Eckeneigenschaft](#properties_that_accept_anchor_function_values) verwendet werden und gibt einen Längenwert relativ zur Position der Kanten ihres zugehörigen Ankerelements zurück.

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
  - : Der [`anchor-name`](/de/docs/Web/CSS/Reference/Properties/anchor-name) Eigenschaftswert eines Ankerelements, zu dem Sie die Seite des Elements relativ positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn er weggelassen wird, wird der **Standardanker** des Elements verwendet, der entweder in seiner [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor) Eigenschaft referenziert oder über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element assoziiert wird.

    > [!NOTE]
    > Wenn Sie einen `<anchor-name>` in einer `anchor()`-Funktion angeben, wird kein Element mit einem Anker assoziiert; es positioniert lediglich das Element relativ zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor) CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut ist weiterhin erforderlich, um die Assoziation zu erstellen.

- `<anchor-side>`
  - : Gibt die Seite des Ankers an oder den relativen Abstand von der `start`-Seite, zu der das Element relativ positioniert ist. Wenn ein physischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der Eckeneigenschaft ist, auf der `anchor()` gesetzt ist, wird der Fallback-Wert verwendet. Gültige Werte sind:
    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `inside`
      - : Die gleiche Seite wie die Eckeneigenschaft.
    - `outside`
      - : Die entgegengesetzte Seite der Eckeneigenschaft.
    - `start`
      - : Der logische Anfangsbereich des Ankerelements [enthält Block](/de/docs/Web/CSS/Guides/Display/Containing_block) entlang der Achse der Eckeneigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des Ankerelements enthaltenden Blocks entlang der Achse der Eckeneigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-start`
      - : Der logische Beginn des Inhalts des Ankerelements entlang der Achse der Eckeneigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Eckeneigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `center`
      - : Das Zentrum der Achse der Eckeneigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt den Abstand als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der Eckeneigenschaft an, auf der die `anchor()`-Funktion gesetzt ist.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, auf den die Funktion zurückgreifen soll, wenn die `anchor()`-Funktion andernfalls nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht die Positionierung eines Elements relativ zu den Kanten eines Ankerelements. Sie ist nur innerhalb der Werte von {{Glossary("inset_properties", "Eckeneigenschaften")}} gültig, die auf absolut oder fix positionierten Elementen gesetzt sind.

Sie gibt einen `<length>` Wert zurück, der den Abstand zwischen der durch den Eckentwert angegebenen Seite des ankerpositionierten Elements und der durch den gewählten `<anchor-side>` Wert angegebenen Seite des Ankerelements angibt. Da sie einen `<length>` zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) verwendet werden, die Längenwerte akzeptieren, darunter {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn kein Anker mit dem durch `<anchor-name>` angegebenen Namen existiert oder wenn das positionierte Element keinem Anker zugeordnet ist (d.h. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig betrachtet und der Fallback-`<length-percentage>` Wert wird verwendet, falls verfügbar. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf dem positionierten Element spezifiziert wurde, aber kein Anker damit verknüpft wäre, würde der Fallback-Wert verwendet, so dass `top` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung sehen Sie sich das [CSS-Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden an.

### Eigenschaften, die `anchor()`-Funktionswerte akzeptieren

Die CSS {{Glossary("inset_properties", "Eckeneigenschaften")}}, die eine `anchor()`-Funktion als Wertkomponente akzeptieren, umfassen:

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

### Kompatibilität der Eckeneigenschaften und `<anchor-side>` Werte

Wenn Sie eine `anchor()`-Funktion in einem Eckeneigenschaftswert verwenden, muss der `<anchor-side>` Parameter innerhalb der `anchor()`-Funktion mit der Achse, auf der sich die Eckeneigenschaft befindet, kompatibel sein.

Das bedeutet, dass physische `<anchor-side>` Werte innerhalb der Werte physischer Eckeneigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Achsrichtung wie der `<anchor-side>` aufweist. Mit anderen Worten, die `top`- und `bottom`-Seiten sind innerhalb der `left`- und `right`-Eigenschaftswerte nicht gültig, und die `left`- und `right`-Seiten sind innerhalb von `top`- und `bottom`-Eigenschaftswerten nicht gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da beide senkrechte Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wäre, würde der Fallback-Wert verwendet und `top` würde einen berechneten Wert von `50px` erhalten. Wenn kein Fallback vorhanden ist, verhält sich die Eckeneigenschaft, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>` Werte innerhalb sowohl logischer als auch physischer Eckeneigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der Eckeneigenschaft sind, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle problemlos.

Die Geschichte wird komplizierter, wenn physische `<anchor-side>` Parameter innerhalb logischer Eckeneigenschaftswerte verwendet werden, da die physische Seite mit der Achse übereinstimmen muss, zu der die Eckeneigenschaft innerhalb des aktuellen Schreibmodus gehört. Zum Beispiel:

- In einem horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist inkompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wäre, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (unten) seines nächsten positionierten Vorfahren oder des Ansichtsfensters entfernt positioniert sein, abhängig vom gesetzten `position`-Wert.
- In einem vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist inkompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (links oder rechts je nach Schreibmodus) seines nächsten positionierten Vorfahren oder des Ansichtsfensters entfernt positioniert sein, abhängig vom gesetzten `position`-Wert.

Um die potenzielle Verwirrung mit diesen Werten zu vermeiden, wird empfohlen, logische Eckeneigenschaften mit logischen `<anchor-side>` Werten zu verwenden und physische Eckeneigenschaften mit physischen `<anchor-side>` Werten. Sie sollten logische Werte wann immer möglich bevorzugen, da sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} geeignet sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()`-Funktion in allen logischen und physischen Eckeneigenschaften gültig.

Die unten stehende Tabelle listet die Eckeneigenschaften auf und die `<anchor-side>` Parameterwerte, die mit ihnen kompatibel sind. Wir haben nur die Langform-Eckeneigenschaften aufgelistet; diese umfassen die Werte der Kurzform-Eckeneigenschaften.

| Eckeneigentümer                             | Kompatibler `<anchor-side>` Wert                                                                                                                 |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Alle                                        | `center`                                                                                                                                         |
| Alle                                        | `<percentage>`                                                                                                                                   |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                        |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                        |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, and `self-end`<br>`top` und `bottom` im horizontalen Schreibmodus<br>`left` und `right` im vertikalen Schreibmodus |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, and `self-end`<br>`left` und `right` im horizontalen Schreibmodus<br>`top` und `bottom` im vertikalen Schreibmodus |

### Verwendung von `anchor()` zur Positionierung von Popovers

Wenn Sie `anchor()` verwenden, um [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) zu positionieren, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der Position, die Sie erreichen möchten, in Konflikt stehen. Die üblichen Übeltäter sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.positionedPopover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe untersucht [Möglichkeiten, dieses Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

### Verwendung von `anchor()` innerhalb `calc()`

Wenn die `anchor()`-Funktion auf eine Seite des Standardankers verweist, können Sie einen {{cssxref("margin")}} einschließen, um bei Bedarf einen Abstand zwischen den Rändern des Ankers und dem positionierten Element zu erzeugen. Alternativ können Sie die `anchor()`-Funktion innerhalb einer {{cssxref("calc")}}-Funktion verwenden, um Abstände hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig an der linken Kante des Ankerelements und fügt dann einen Rand hinzu, um etwas Abstand zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logische Blockende-Kante des positionierten Elements `10px` von der logischen Blockanfangskante des Ankerelements entfernt:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie verschiedene `<anchor-name>` Werte innerhalb der `anchor()`-Funktion in verschiedene Eckeneigenschaften desselben Elements spezifizieren (siehe [Element, das relativ zu mehreren Ankern positioniert ist](#element,_das_relativ_zu_mehreren_ankern_positioniert_ist) unten). Dies kann verwendet werden, um nützliche Funktionalitäten wie Ziehgriffe an den Ecken eines positionierten Elements zu erstellen, mit denen es vergrößert oder verkleinert werden kann.

Obwohl ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, wird es immer nur dem einzigen Anker zugeordnet, der über seine [`position-anchor`](/de/docs/Web/CSS/Reference/Properties/position-anchor) Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut) definiert wird. Dies ist der Anker, mit dem das Element scrollt, wenn die Seite scrollt; er kann auch verwendet werden, um zu kontrollieren, wann das Element [bedingt ausgeblendet](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines ankerpositionierten Elements auf die Höhe seines Ankers festzulegen, indem die unteren und oberen Kanten an die unteren und oberen Kanten des Ankers angepasst werden. Die `anchor()`-Funktion innerhalb einer `calc()`-Funktion wird dann verwendet, um das ankerpositionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element ein, das wir als unseren Anker festlegen, und ein {{htmlelement("p")}} Element, das wir relativ zu diesem Anker positionieren:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir legen den `anchor-name` Wert des Ankerelements als Wert der `position-anchor` Eigenschaft des positionierten Elements fest, um die Elemente zu verknüpfen, und setzen dann drei Eckeneigenschaften am ankerpositionierten Element. Die ersten beiden positionieren die obere Kante des Elements bündig mit der oberen Kante des Ankers und die untere Kante bündig mit der unteren Kante des Ankers. In der dritten Eckeneigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` zur rechten Kante des Ankers zu positionieren.

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

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mit `anchor()`-Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, die es ermöglichen, die `<anchor-side>` Werte innerhalb dieser `anchor()`-Funktionen zu variieren, so dass Sie sehen können, welchen Effekt sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse `anchor` und eines mit einer Klasse `infobox`. Diese sollen das Ankerelement und das zugehörige positionierte Element darstellen.

Wir fügen auch Some-Text als Füller rund um die beiden `<div>` Elemente hinzu, um den {{htmlelement("body")}} höher zu machen, damit er scrollt. Dieses Beispiel enthält auch zwei {{htmlelement("select")}} Elemente, um die Dropdown-Menüs zu erstellen, mit denen verschiedene `<anchor-side>` Werte zur Platzierung des positionierten Elements ausgewählt werden können. Wir haben den Fülltext und die `<select>` Elemente der Kürze halber ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft darauf setzen. Wir verbinden es dann mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}} Eigenschaft setzen. `top: anchor(--my-anchor bottom)` positioniert die obere Kante der Infobox bündig zur unteren Kante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig zur rechten Kante ihres Ankers positioniert. Dies bietet eine erste Position, die überschrieben wird, wenn unterschiedliche Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir horchen auf das `change`-Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion innerhalb des relevanten Eckeneigenschaftswerts (`top` oder `left`) der Infobox.

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

Wählen Sie verschiedene Werte aus den Dropdown-Menüs, um zu sehen, wie sie sich auf die Positionierung der Infobox auswirken.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element, das relativ zu mehreren Ankern positioniert ist

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des ankerpositionierten Elements festzulegen. Die Anker können über Tastatursteuerungen bewegt oder gezogen werden, wodurch das positionierte Element neu dimensioniert wird.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben eine Klasse `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionsinformationen bereitzustellen. Das letzte `<div>` hat eine Klasse `infobox` und wird als positioniertes Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um ihnen zu ermöglichen, Tastaturfokus zu empfangen.

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

Die Anker erhalten jeweils einen unterschiedlichen {{cssxref("anchor-name")}} Wert, einen {{cssxref("position")}} Wert von `absolute` und unterschiedliche Eckeneigenschaftswerte, um die Anker in einer Rechteckformation zu positionieren.

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

Das ankerpositionierte Element, dessen `position` auf `fixed` eingestellt ist, ist mit einem Anker über seine {{cssxref("position-anchor")}} Eigenschaft assoziiert. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>` Werte mit den `anchor()`-Funktionen auf seinen Eckeneigenschaften gesetzt werden. In diesem Fall haben wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet, der den Abstand vom Anfang der Achse der Eckeneigenschaft angibt, an der die Funktion festgelegt ist.

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

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder tabben Sie zu ihnen und verwenden Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> Tasten, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie sich dies auf ihre Position auswirkt und infolgedessen auf den Bereich des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptnachweis und nicht für die Verwendung in Produktivcode gedacht. Zu seinen Mängeln gehört, dass das Beispiel nicht funktioniert, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbei zu bewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Ausblenden für Overflow](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
