---
title: anchor()
slug: Web/CSS/Reference/Values/anchor
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) kann innerhalb eines **positionierten Ankers** in den Werten der [Inset-Eigenschaft](#properties_that_accept_anchor_function_values) verwendet werden und gibt einen Längenwert relativ zur Position der Kanten des zugehörigen Ankerelements zurück.

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
  - : Der Wert der {{cssxref("anchor-name")}} Eigenschaft eines Ankerelements, an dem die Seite des Elements relativ positioniert werden soll. Dies ist ein `<dashed-ident>` Wert. Wenn weggelassen, wird der **Standardanker** des Elements verwendet, der in seiner {{cssxref("position-anchor")}} Eigenschaft referenziert oder dem Element über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut zugeordnet ist.

    > [!NOTE]
    > Das Angeben eines `<anchor-name>` innerhalb einer `anchor()`-Funktion verknüpft ein Element nicht mit einem Anker; es positioniert nur das Element relativ zu diesem Anker. Die CSS-Eigenschaft {{cssxref("position-anchor")}} oder das HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) sind weiterhin erforderlich, um die Zuordnung zu erstellen.

- `<anchor-side>`
  - : Gibt die Seite des Ankers an, oder die relative Entfernung von der `start`-Seite, zu der das Element relativ positioniert wird. Wenn ein physikalischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der Inset-Eigenschaft ist, auf die `anchor()` angewendet wird, wird der Rückfallwert verwendet. Gültige Werte umfassen:
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
      - : Die entgegengesetzte Seite der Inset-Eigenschaft.
    - `start`
      - : Der logische Start des Ankerelements im [containing block](/de/docs/Web/CSS/Guides/Display/Containing_block) entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des Ankerelements im containing block entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Ankerelements entlang der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - `center`
      - : Das Zentrum der Achse der Inset-Eigenschaft, auf der die `anchor()`-Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der Inset-Eigenschaft an, auf der die `anchor()`-Funktion gesetzt ist.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Rückfallwert an, auf den die Funktion auflösen sollte, wenn die `anchor()`-Funktion ansonsten nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}} Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht die Positionierung eines Elements relativ zu den Kanten eines Ankerelements. Sie ist nur innerhalb der Werte der {{Glossary("inset_properties", "Inset-Eigenschaft")}} gültig, die auf absolut oder fest positionierte Elemente gesetzt sind.

Sie gibt einen `<length>` Wert zurück, der den Abstand zwischen der durch den Inset-Wert angegebenen, ankerpositionierten Elementseite und der durch den gewählten `<anchor-side>` Wert angegebenen Seite des Ankerelements spezifiziert. Da sie einen `<length>` zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/Reference/Values/Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn kein Anker mit dem durch den `<anchor-name>` spezifizierten Namen existiert oder wenn das positionierte Element keinen mit ihm verbundenen Anker hat (d.h. über die {{cssxref("position-anchor")}} Eigenschaft), wird der erste Parameter als ungültig betrachtet und der Rückfallwert `<length-percentage>` wird verwendet, falls verfügbar. Zum Beispiel, wenn `top: anchor(bottom, 50px)` auf dem positionierten Element angegeben wäre, ohne dass ein Anker damit verbunden ist, würde der Rückfallwert verwendet werden, so dass `top` einen berechneten Wert von `50px` erhalten würde.

Für detaillierte Informationen zu Ankerfunktionen und -nutzung siehe die Modul-Landingpage [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden.

### Eigenschaften, die `anchor()` Funktionswerte akzeptieren

Die CSS-{{Glossary("inset_properties", "Inset-Eigenschaften")}}, die eine `anchor()`-Funktion als Wertkomponente akzeptieren, umfassen:

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

### Kompatibilität der Inset-Eigenschaften und `<anchor-side>` Werte

Beim Verwenden einer `anchor()`-Funktion innerhalb eines Inset-Eigenschaftswerts muss der im `anchor()`-Funktion angegebene `<anchor-side>` Parameter mit der Achse kompatibel sein, auf der die Inset-Eigenschaft liegt.

Das bedeutet, dass physikalische `<anchor-side>` Werte innerhalb der Werte physikalischer Inset-Eigenschaften verwendet werden können, wenn die Eigenschaft dieselbe Achsenrichtung wie der `<anchor-side>` hat. Mit anderen Worten: die `top`- und `bottom`-Seiten sind nicht innerhalb der `left`- und `right`-Eigenschaftswerte gültig, und die `left`- und `right`-Seiten sind nicht innerhalb der `top`- und `bottom`-Eigenschaftswerte gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wäre, würde der Rückfallwert verwendet, so dass `top` einen berechneten Wert von `50px` erhalten würde. Wenn kein Rückfall vorhanden ist, verhält sich die Inset-Eigenschaft so, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>` Werte sowohl innerhalb logischer als auch physikalischer Inset-Eigenschaften verwenden, da logische `<anchor-side>` Werte relativ zur relevanten Achse der Inset-Eigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Zum Beispiel funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle einwandfrei.

Die Geschichte wird komplizierter, wenn physikalische `<anchor-side>` Parameter innerhalb logischer Inset-Eigenschaftswerte verwendet werden, da die physikalische Seite zur Achse passen muss, auf die sich die Inset-Eigenschaft im aktuellen Schreibmodus bezieht. Zum Beispiel:

- In einem horizontalen Schreibmodus verläuft die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist inkompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wäre, würde der berechnete Wert `50px` sein, und das positionierte Element würde `50px` vom Blockende (unten) seines nächstgelegenen positionierten Vorfahren oder des Viewports, abhängig vom gesetzten `position`-Wert, positioniert.
- In einem vertikalen Schreibmodus verläuft die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist inkompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wäre, würde der berechnete Wert `50px` sein, und das positionierte Element würde `50px` vom Blockende (links oder rechts, je nach Schreibmodus) seines nächstgelegenen positionierten Vorfahren oder des Viewports, abhängig vom gesetzten `position`-Wert, positioniert.

Um das Potenzial für Verwirrungen mit diesen Werten zu verringern, wird empfohlen, logische Inset-Eigenschaften mit logischen `<anchor-side>` Werten und physikalische Inset-Eigenschaften mit physikalischen `<anchor-side>` Werten zu verwenden. Sie sollten die Verwendung logischer Werte so weit wie möglich bevorzugen, da diese besser für die {{Glossary("Internationalization", "Internationalisierung")}} geeignet sind.

Die Werte `center` und `<percentage>` sind innerhalb der `anchor()`-Funktion innerhalb aller logischen und physikalischen Inset-Eigenschaften gültig.

Die folgende Tabelle listet die Inset-Eigenschaften auf und die `<anchor-side>` Parameterwerte, die mit ihnen kompatibel sind. Wir haben nur die ausgeschriebenen Inset-Eigenschaften aufgeführt; diese umfassen die zusammengefassten Inset-Eigenschaftswerte.

| Inset-Eigenschaft                           | Kompatibler `<anchor-side>` Wert                                                                                                              |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                      |
| Alle                                        | `<percentage>`                                                                                                                                |
| `top` und `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                     |
| `left` und `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                     |
| `inset-block-start` und `inset-block-end`   | `start`, `end`, `self-start` und `self-end`<br>`top` und `bottom` in horizontalen Schreibmodi<br>`left` und `right` in vertikalen Schreibmodi |
| `inset-inline-start` und `inset-inline-end` | `start`, `end`, `self-start` und `self-end`<br>`left` und `right` in horizontalen Schreibmodi<br>`top` und `bottom` in vertikalen Schreibmodi |

### `anchor()` zur Positionierung von Popups verwenden

Wenn Sie `anchor()` zur Positionierung von [Popups](/de/docs/Web/HTML/Reference/Global_attributes/popover) verwenden, beachten Sie, dass [die Standardstile für Popups](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der Position, die Sie erreichen möchten, in Konflikt stehen können. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.positionedPopover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [prüft Möglichkeiten, um dieses Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

### `anchor()` innerhalb von `calc()` verwenden

Wenn sich die `anchor()`-Funktion auf eine Seite des Standardankers bezieht, können Sie ein {{cssxref("margin")}} einschließen, um bei Bedarf Abstand zwischen den Kanten des Ankers und des positionierten Elements zu schaffen. Alternativ können Sie die `anchor()`-Funktion innerhalb einer {{cssxref("calc")}}-Funktion einfügen, um den Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig mit der linken Kante des Ankerelements und fügt dann Abstand hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logische Block-Ende-Kante des positionierten Elements `10px` von der logischen Block-Start-Kante des Ankerelements entfernt:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Ein Element relativ zu mehreren Ankern positionieren

Sie können ein Element relativ zu mehreren Ankern positionieren, indem Sie unterschiedliche `<anchor-name>` Werte innerhalb der `anchor()`-Funktion verschiedener Inset-Eigenschaften auf demselben Element angeben (siehe [Element relativ zu mehreren Ankern positioniert](#element_relativ_zu_mehreren_ankern_positioniert) unten). Dies kann verwendet werden, um nützliche Funktionalitäten wie Ziehpunkte an den Ecken eines positionierten Elements zu erstellen, die zur Größenanpassung verwendet werden können.

Während ein positioniertes Element relativ zu mehr als einem Ankerelement positioniert werden kann, ist es immer nur mit dem einzelnen Anker verbunden, der über seine {{cssxref("position-anchor")}} Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut) definiert wird. Dies ist der Anker, mit dem das Element scrollt, wenn die Seite scrollt; er kann auch verwendet werden, um zu steuern, wann das Element [bedingungsgemäß ausgeblendet wird](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements).

## Formale Syntax

{{csssyntax}}

## Beispiele

### Allgemeine Nutzung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines ankerpositionierten Elements auf die Höhe seines Ankers zu setzen, indem die unteren und oberen Kanten mit den unteren und oberen Kanten des Ankers abgeglichen werden. Die `anchor()`-Funktion wird dann innerhalb einer `calc()`-Funktion verwendet, um das ankerpositionierte Element von seinem Anker zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}} Element ein, das wir als unseren Anker setzen, und ein {{htmlelement("p")}} Element, das wir relativ zu diesem Anker positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name` Wert des Ankerelements als den Wert der `position-anchor` Eigenschaft des positionierten Elements, um die Elemente zu verknüpfen, und setzen dann drei Inset-Eigenschaften auf dem ankerpositionierten Element. Die ersten beiden positionieren die obere Kante des Elements bündig mit der oberen Kante des Ankers und die untere Kante bündig mit der unteren Kante des Ankers. In der dritten Inset-Eigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` rechts von der rechten Kante des Ankers zu positionieren.

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

Dieses Beispiel zeigt ein Element, das relativ zu einem Anker über seine {{cssxref("top")}} und {{cssxref("left")}} Eigenschaften positioniert ist, die mithilfe von `anchor()`-Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, die es ermöglichen, die `<anchor-side>` Werte innerhalb dieser `anchor()`-Funktionen zu variieren, damit Sie sehen können, welchen Effekt sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, mit dem wir es verknüpfen werden.

Wir fügen auch etwas Fülltext um die beiden `<div>` Elemente hinzu, um den {{htmlelement("body")}} so hoch zu machen, dass er scrollt. Dieses Beispiel beinhaltet auch zwei {{htmlelement("select")}} Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>` Werte ermöglichen, mit denen das positionierte Element platziert werden soll. Wir haben den Fülltext und die `<select>` Elemente der Kürze halber ausgeblendet.

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

Wir deklarieren das `anchor` `<div>` als Ankerelement, indem wir ihm einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft zuweisen. Wir verknüpfen es dann mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}} Eigenschaft setzen. `top: anchor(--my-anchor bottom)` positioniert die obere Kante der Infobox bündig mit der unteren Kante ihres Ankers, während `left: anchor(right)` die linke Kante der Infobox bündig mit der rechten Kante ihres Ankers positioniert. Dies bietet eine ursprünglich gesetzte Position, die überschrieben wird, wenn unterschiedliche Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir lauschen dem `change`-Ereignis, das auftritt, wenn ein neuer `<anchor-side>` Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion innerhalb des entsprechenden Inset-Eigenschaftswerts (`top` oder `left`) der Infobox.

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

Wählen Sie unterschiedliche Werte aus den Dropdown-Menüs aus, um zu sehen, wie sie die Positionierung der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element relativ zu mehreren Ankern positioniert

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Ankern, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des ankerpositionierten Elements festzulegen. Die Anker können über Tastatursteuerungen verschoben oder gezogen werden und die Größe des positionierten Elements ändern.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}} Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Anker definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse von `infobox` und wird als das positionierte Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex) Attribut hinzu, um ihnen Tastaturfokus zu ermöglichen.

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

Die Anker erhalten jeweils einen unterschiedlichen {{cssxref("anchor-name")}} Wert, einen {{cssxref("position")}} Wert von `absolute` und unterschiedliche Inset-Werte, um die Anker in einer rechteckigen Formation zu positionieren.

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

Das ankerpositionierte Element, dessen `position` auf `fixed` gesetzt ist, ist über seine {{cssxref("position-anchor")}} Eigenschaft mit einem Anker verknüpft. Es wird relativ zu zwei Ankern positioniert, indem zwei verschiedene `<anchor-name>` Werte mit den `anchor()`-Funktionen auf seinen Inset-Eigenschaften gesetzt werden. In diesem Fall haben wir {{cssxref("percentage")}} Werte für den `<anchor-side>` Parameter verwendet, der den Abstand vom Anfang der Achse der Inset-Eigenschaft definiert, auf der die Funktion gesetzt ist.

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

Das positionierte Element ist relativ zu beiden Ankerelementen positioniert. Ziehen Sie sie mit der Maus oder wechseln Sie zu ihnen und verwenden Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> Tasten, um sie nach oben, unten, links und rechts zu bewegen. Sehen Sie, wie dies ihre Position verändert und infolgedessen die Fläche des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Konzeptbeweis und nicht für die Verwendung im Produktivcode vorgesehen. Zu seinen Mängeln gehört, dass das Beispiel zusammenbricht, wenn Sie versuchen, die Anker horizontal oder vertikal aneinander vorbei zu bewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Rückfalloptionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
