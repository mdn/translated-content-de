---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann innerhalb von **ankerpositionierten** Elementwerten der [Einfügungseigenschaft](#properties_that_accept_anchor_function_values) verwendet werden und gibt einen Längenwert relativ zur Position der Kanten des zugehörigen Ankerelements zurück.

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
  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Ankerelements, zu dem Sie die Seite des Elements positionieren möchten. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, auf den in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft verwiesen wird oder der dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor()`-Funktion ordnet ein Element nicht einem Anker zu; es positioniert lediglich das Element im Verhältnis zu diesem Anker. Die [`position-anchor`](/de/docs/Web/CSS/position-anchor) CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut wird weiterhin benötigt, um die Zuordnung zu erstellen.

- `<anchor-side>`
  - : Gibt die Seite des Ankers oder die relative Entfernung von der `start`-Seite an, zu der das Element positioniert ist. Wenn ein physischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der Einfügungseigenschaft ist, auf die `anchor()` angewendet wird, wird der Fallback-Wert verwendet. Gültige Werte umfassen:
    - `top`
      - : Die Oberseite des Ankerelements.
    - `right`
      - : Die rechte Seite des Ankerelements.
    - `bottom`
      - : Die Unterseite des Ankerelements.
    - `left`
      - : Die linke Seite des Ankerelements.
    - `inside`
      - : Dieselbe Seite wie die Einfügungseigenschaft.
    - `outside`
      - : Die gegenüberliegende Seite der Einfügungseigenschaft.
    - `start`
      - : Der logische Anfang des enthaltenden Blocks des Ankerelements entlang der Achse der Einfügungseigenschaft, auf die die `anchor()`-Funktion angewendet wird.
    - `end`
      - : Das logische Ende des enthaltenden Blocks des Ankerelements entlang der Achse der Einfügungseigenschaft, auf die die `anchor()`-Funktion angewendet wird.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Einfügungseigenschaft, auf die die `anchor()`-Funktion angewendet wird.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Einfügungseigenschaft, auf die die `anchor()`-Funktion angewendet wird.
    - `center`
      - : Das Zentrum der Achse der Einfügungseigenschaft, auf die die `anchor()`-Funktion angewendet wird.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der Einfügungseigenschaft an, auf die die `anchor()`-Funktion angewendet wird.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Fallback-Wert an, zu dem die Funktion aufgelöst werden sollte, wenn die `anchor()`-Funktion sonst nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht es, ein Element relativ zu den Kanten eines Ankerelements zu positionieren. Sie ist nur innerhalb von {{Glossary("inset_properties", "Einfügungseigenschaft")}} Werten gültig, die auf absolut oder fest positionierten Elementen festgelegt sind.

Sie gibt einen `<length>`-Wert zurück, der den Abstand zwischen der durch den Einfügungswert angegebenen ankerpositionierten Elementseite und der durch den gewählten `<anchor-side>`-Wert angegebenen Seite des Ankerelements angibt. Da sie einen `<length>`-Wert zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn kein Anker mit dem durch `<anchor-name>` angegebenen Namen existiert oder wenn dem positionierten Element kein Anker zugeordnet ist (z.B. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig angesehen und der Fallback-`<length-percentage>`-Wert verwendet, falls vorhanden. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf dem positionierten Element angegeben wurde, aber kein Anker damit assoziiert war, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhalten würde.

Für detaillierte Informationen zu Ankerfunktionen und deren Verwendung, siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor()` Funktionswerte akzeptieren

Die CSS {{Glossary("inset_properties", "Einfügungseigenschaften")}}, die eine `anchor()`-Funktion als Wertkomponente akzeptieren, umfassen:

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

### Kompatibilität von Einfügungseigenschaften und `<anchor-side>` Werten

Bei Verwendung einer `anchor()`-Funktion innerhalb eines Einfügungswertes muss der im `anchor()`-Funktion angegebene `<anchor-side>`-Parameter mit der Achse kompatibel sein, auf der die Einfügungseigenschaft liegt.

Das bedeutet, dass physische `<anchor-side>`-Werte innerhalb der Werte physischer Einfügungseigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Achsenrichtung wie der `<anchor-side>` hat. Mit anderen Worten sind die Seiten `top` und `bottom` innerhalb der Eigenschaftswerte `left` und `right` nicht zulässig, und die Seiten `left` und `right` sind innerhalb der Eigenschaftswerte `top` und `bottom` nicht zulässig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da sie beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wäre, würde der Fallback-Wert verwendet, sodass `top` einen berechneten Wert von `50px` erhalten würde. Wenn kein Fallback vorhanden ist, verhält sich die Einfügungseigenschaft so, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>` Werte sowohl innerhalb logischer als auch physischer Einfügungseigenschaften verwenden, da logische `<anchor-side>` Werte relativ zu der relevanten Achse der Einfügungseigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle einwandfrei.

Die Situation wird komplizierter, wenn physische `<anchor-side>` Parameter innerhalb von logischen Einfügungseigenschaftswerten verwendet werden, da die physische Seite mit der Achse übereinstimmen muss, auf die die Einfügungseigenschaft im aktuellen Schreibmodus relevant ist. Zum Beispiel:

- In einem horizontalen Schreibmodus ist die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)` , aber `inset-block-end: anchor(left)` ist inkompatibel. Wenn `inset-block-end: anchor(left, 50px)` eingestellt wäre, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (unten) des nächstgelegenen positionierten Vorfahren oder des Ansichtsfensters positioniert, abhängig vom festgelegten `position`-Wert.
- In einem vertikalen Schreibmodus ist die Blockrichtung von rechts nach links oder links nach rechts, daher funktioniert `inset-block-end: anchor(left)` , aber `inset-block-end: anchor(top)` ist inkompatibel. Wenn `inset-block-end: anchor(top, 50px)` eingestellt wäre, würde der berechnete Wert `50px` betragen, und das positionierte Element würde `50px` vom Blockende (links oder rechts je nach Schreibrichtung) des nächstgelegenen positionierten Vorfahren oder des Ansichtsfensters positioniert, abhängig vom festgelegten `position`-Wert.

Um Verwirrung mit diesen Werten zu vermeiden, wird empfohlen, logische Einfügungseigenschaften mit logischen `<anchor-side>` Werten und physische Einfügungseigenschaften mit physischen `<anchor-side>` Werten zu verwenden. Sie sollten den Gebrauch logischer Werte wann immer möglich bevorzugen, da diese besser für die {{Glossary("Internationalization", "Internationalisierung")}} geeignet sind.

Die `center` und `<percentage>` Werte sind innerhalb der `anchor()` Funktion innerhalb aller logischen und physischen Einfügungseigenschaften gültig.

Die unten stehende Tabelle listet die Einfügungseigenschaften und die `<anchor-side>` Parameterwerte auf, die mit ihnen kompatibel sind. Wir haben nur die Langform der Einfügungseigenschaften aufgelistet; diese umfassen die Kurzform der Einfügungseigenschaftswerte.

| Einfügungseigenschaft                       | Kompatibler `<anchor-side>` Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start`, und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start`, und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn die `anchor()`-Funktion auf eine Seite des Standardankers verweist, können Sie einen {{cssxref("margin")}} einschließen, um bei Bedarf Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()`-Funktion in eine {{cssxref("calc()")}}-Funktion einfügen, um Abstand hinzuzufügen.

In diesem Beispiel wird die rechte Kante des positionierten Elements bündig zur linken Kante des Ankerelements positioniert und dann wird ein Rand hinzugefügt, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

In diesem Beispiel wird die logische Block-End-Kante des positionierten Elements `10px` von der logischen Block-Start-Kante des Ankerelements positioniert:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Ankern

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie unterschiedliche `<anchor-name>` Werte innerhalb der `anchor()`-Funktion für verschiedene Einfügungseigenschaften auf demselben Element angeben (siehe [Element positioniert relativ zu mehreren Ankern](#element_positioniert_relativ_zu_mehreren_ankern) unten). Dies kann verwendet werden, um nützliche Funktionen zu erstellen, wie z.B. Ziehpunkte an den Ecken eines positionierten Elements, die verwendet werden können, um dessen Größe zu ändern.

Obwohl ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit einem einzigen Anker über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut) assoziiert. Dies ist der Anker, mit dem das Element scrollt, wenn die Seite scrollt; er kann auch verwendet werden, um zu steuern, wann das Element [bedingt ausgeblendet](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Allgemeine Verwendung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines ankerpositionierten Elements auf die Höhe seines Ankers einzustellen, indem die unteren und oberen Kanten auf die unteren und oberen Kanten des Ankers eingestellt werden. Die `anchor()`-Funktion innerhalb einer `calc()`-Funktion wird dann verwendet, um das ankerpositionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element ein, das wir als unseren Anker festlegen, und ein {{htmlelement("p")}} Element, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements als Wert der `position-anchor` Eigenschaft des positionierten Elements, um die Elemente zuzuordnen, und setzen dann drei Einfügungseigenschaften auf das ankerpositionierte Element. Die ersten zwei positionieren die obere Kante des Elements bündig mit der oberen Kante des Ankers und die untere Kante bündig mit der unteren Kante des Ankers. In der dritten Einfügungseigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` von der rechten Kante des Ankers zu positionieren.

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

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mit `anchor()`-Funktionen definiert sind. Dazu gehören auch zwei Dropdown-Menüs, mit denen Sie die `<anchor-side>` Werte innerhalb dieser `anchor()`-Funktionen variieren können, um zu sehen, welche Wirkung sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente, eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Diese sind als Ankerelement und als positioniertes Element, das wir damit assoziieren werden, vorgesehen.

Wir fügen auch einige Fülltexte um die beiden `<div>` Elemente hinzu, um den {{htmlelement("body")}} größer zu machen, damit es scrollt. Dieses Beispiel enthält auch zwei {{htmlelement("select")}} Elemente, um die Dropdown-Menüs zu schaffen, die die Auswahl verschiedener `<anchor-side>` Werte ermöglichen, mit denen das positionierte Element platziert werden soll. Wir haben den Fülltext und die `<select>` Elemente der Kürze halber versteckt.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft zuweisen. Anschließend ordnen wir es dem positionierten Element zu, indem wir denselben Wert für seine {{cssxref("position-anchor")}} Eigenschaft setzen. `top: anchor(--my-anchor bottom)` positioniert die Oberkante der Infobox bündig zur Unterkante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig zur rechten Kante ihres Ankers positioniert. Dies bietet eine Anfangsposition, die überschrieben wird, wenn verschiedene Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir hören auf das `change` Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion innerhalb des entsprechenden Einfügungswertes der Infobox (`top` oder `left`).

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

In diesem Beispiel wird ein Element relativ zu zwei verschiedenen Ankern positioniert, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des ankerpositionierten Elements festzulegen. Die Anker können über Tastatursteuerungen oder durch Ziehen verschoben werden, um die Größe des positionierten Elements anzupassen.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen bereitzustellen. Das letzte `<div>` hat eine Klasse von `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um ihnen die Tastaturfokussierung zu ermöglichen.

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

Die Anker erhalten jeweils einen anderen {{cssxref("anchor-name")}} Wert, einen {{cssxref("position")}} Wert von `absolut` und unterschiedliche Einfügewertpositionen, um die Anker in einer rechteckigen Formation zu platzieren.

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

Das ankerpositionierte Element, dessen `position` auf `fixed` gesetzt ist, wird über seine {{cssxref("position-anchor")}} Eigenschaft mit einem Anker assoziiert. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>` Werte mit den `anchor()` Funktionen eingestellt auf seinen Einfügungseigenschaften verwendet werden. In diesem Fall haben wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet, um den Abstand vom Anfang der Achse der Einfügungseigenschaft anzugeben, auf der die Funktion eingestellt ist.

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

Das positionierte Element wird relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder Tab zu ihnen und verwenden Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> Tasten, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie sich dies auf ihre Position auswirkt, und damit die Fläche des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente erhalten bleiben.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptnachweis und nicht zur Verwendung in Produktivcode gedacht. Zu den Mängeln gehört, dass das Beispiel auseinanderbricht, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback Optionen und bedingtes Ausblenden für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
