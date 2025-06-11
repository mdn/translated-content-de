---
title: anchor()
slug: Web/CSS/anchor
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`anchor()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) kann innerhalb der Werte der [Einpassungseigenschaft](#properties_that_accept_anchor_function_values) eines **verankerungspositionierten** Elements verwendet werden. Sie gibt einen Längenwert relativ zur Position der Kanten ihres zugehörigen Verankerungselements zurück.

## Syntax

```css
/* side or percentage */
top: anchor(bottom);
top: anchor(50%);
top: calc(anchor(bottom) + 10px)
inset-block-end: anchor(start);

/* side of named anchor */
top: anchor(--myAnchor bottom);
inset-block-end: anchor(--myAnchor start);

/* side of named anchor with fallback */
top: anchor(--myAnchor bottom, 50%);
inset-block-end: anchor(--myAnchor start, 200px);
left: calc(anchor(--myAnchor right, 0%) + 10px);
```

### Parameter

Die Syntax der `anchor()`-Funktion ist wie folgt:

```plain
anchor(<anchor-name> <anchor-side>, <length-percentage>)
```

Die Parameter sind:

- `<anchor-name>` {{optional_inline}}

  - : Der Wert der [`anchor-name`](/de/docs/Web/CSS/anchor-name) Eigenschaft eines Verankerungselements, an denen die Seite des Elements relativ positioniert werden soll. Dies ist ein `<dashed-ident>` Wert. Wird dieser weggelassen, wird die **Standardverankerung** des Elements verwendet, die in seiner [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft referenziert ist oder über das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut mit dem Element verbunden ist.

    > [!NOTE]
    > Die Angabe eines `<anchor-name>` innerhalb einer `anchor()`-Funktion verbindet ein Element nicht mit einer Verankerung; es positioniert lediglich das Element relativ zu dieser Verankerung. Die [`position-anchor`](/de/docs/Web/CSS/position-anchor) CSS-Eigenschaft oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut wird weiterhin benötigt, um die Verbindung herzustellen.

- `<anchor-side>`

  - : Gibt die Seite der Verankerung an oder die relative Entfernung von der `start`-Seite, relativ zu der das Element positioniert wird. Wenn ein physikalischer oder logischer Wert verwendet wird, der nicht [kompatibel](#compatibility_of_inset_properties_and_anchor-side_values) mit der Einpassungseigenschaft ist, auf die `anchor()` gesetzt ist, wird der Rückfallwert verwendet. Gültige Werte sind:

    - `top`
      - : Oben des Verankerungselements.
    - `right`
      - : Rechts des Verankerungselements.
    - `bottom`
      - : Unten des Verankerungselements.
    - `left`
      - : Links des Verankerungselements.
    - `start`
      - : Der logische Anfang des Verankerungselements im [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) entlang der Achse der Einpassungseigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `end`
      - : Das logische Ende des Verankerungselements im enthältenden Block entlang der Achse der Einpassungseigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `self-start`
      - : Der logische Anfang des Inhalts des Verankerungselements entlang der Achse der Einpassungseigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `self-end`
      - : Das logische Ende des Inhalts des Verankerungselements entlang der Achse der Einpassungseigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - `center`
      - : Die Mitte der Achse der Einpassungseigenschaft, auf die die `anchor()`-Funktion gesetzt ist.
    - {{cssxref("percentage")}}
      - : Gibt die Entfernung als Prozentsatz vom Anfang des Inhalts des Elements entlang der Achse der Einpassungseigenschaft an, auf die die `anchor()`-Funktion gesetzt ist.

    Das CSS-Verankerungs-Positionierungs-Modul spezifiziert zwei zusätzliche `<anchor-side>`-Werte, `inside` und `outside`, die noch nicht implementiert wurden.

- {{cssxref("length-percentage")}} {{optional_inline}}
  - : Gibt einen Rückfallwert an, auf den die Funktion zurückgreifen sollte, wenn die `anchor()`-Funktion sonst nicht gültig wäre.

### Rückgabewert

Gibt einen {{cssxref("length")}}-Wert zurück.

## Beschreibung

Die `anchor()`-Funktion ermöglicht es, ein Element relativ zu den Kanten eines Verankerungselements zu positionieren. Sie ist nur innerhalb der Werte von {{Glossary("inset_properties", "Einpassungseigenschaften")}} gültig, die an absolut oder fest positionierte Elemente gesetzt sind.

Sie gibt einen `<length>`-Wert zurück, der die Entfernung zwischen der Seite des verankerungspositionierten Elements, die durch den Einpassungswert angegeben ist, und der Seite des Verankerungselements beschreibt, die durch den gewählten `<anchor-side>`-Wert angegeben ist. Da sie einen `<length>` zurückgibt, kann sie innerhalb [anderer CSS-Funktionen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) verwendet werden, die Längenwerte akzeptieren, einschließlich {{cssxref("calc()")}}, {{cssxref("clamp()")}} usw.

Wenn keine Verankerung mit dem durch `<anchor-name>` angegebenen Namen existiert oder wenn das positionierte Element nicht mit einer Verankerung (z.B. über die {{cssxref("position-anchor")}}-Eigenschaft) verbunden ist, wird der erste Parameter als ungültig betrachtet und, falls verfügbar, der Rückfallwert `<length-percentage>` verwendet. Wenn beispielsweise `top: anchor(bottom, 50px)` am positionierten Element angegeben wurde, aber keine Verankerung damit verbunden war, würde der Rückfallwert verwendet, sodass `top` einen berechneten Wert von `50px` erhält.

Für detaillierte Informationen zu Verankerungsfunktionen und deren Nutzung siehe das [CSS-Verankerungs-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Leitfaden zur Verwendung der CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

### Eigenschaften, die `anchor()`-Funktionswerte akzeptieren

Die CSS-{{Glossary("inset_properties", "Einpassungseigenschaften")}}, die eine `anchor()`-Funktion als Wertkomponente akzeptieren, umfassen:

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

### Kompatibilität von Einpassungseigenschaften und `<anchor-side>`-Werten

Bei Verwendung einer `anchor()`-Funktion innerhalb eines Einpassungseigenschaftswertes muss der im `anchor()`-Funktion angegebene `<anchor-side>`-Parameter mit der Achse kompatibel sein, auf der sich die Einpassungseigenschaft befindet.

Das bedeutet, dass physikalische `<anchor-side>`-Werte innerhalb der Werte physikalischer Einpassungseigenschaften verwendet werden können, wenn die Eigenschaft die gleiche Achsenrichtung wie das `<anchor-side>` hat. Beispielsweise sind die `top`- und `bottom`-Seiten in den `left`- und `right`-Eigenschaftswerten nicht gültig, und die `left`- und `right`-Seiten sind in den `top`- und `bottom`-Eigenschaftswerten nicht gültig. Zum Beispiel ist `top: anchor(bottom)` in Ordnung, da beide vertikale Werte sind, aber `top: anchor(left)` ist nicht gültig, da `left` ein horizontaler Wert ist. Wenn `top: anchor(left, 50px)` angegeben wäre, würde der Rückfallwert verwendet, sodass `top` einen berechneten Wert von `50px` erhält. Wenn kein Rückfall vorhanden ist, verhält sich die Einpassungseigenschaft so, als wäre sie auf `auto` gesetzt.

Sie können logische `<anchor-side>`-Werte innerhalb sowohl logischer als auch physikalischer Einpassungseigenschaften verwenden, da logische `<anchor-side>`-Werte relativ zur relevanten Achse der Einpassungseigenschaft sind, unabhängig davon, ob die Eigenschaft logisch oder relativ ist. Beispielsweise funktionieren `top: anchor(start)`, `top: anchor(self-end)`, `inset-block-start: anchor(end)` und `inset-inline-end: anchor(self-start)` alle einwandfrei.

Die Situation wird komplizierter, wenn physikalische `<anchor-side>`-Parameter innerhalb logischer Einpassungseigenschaftswerte verwendet werden, da die physikalische Seite mit der Achse übereinstimmen muss, auf die sich die Einpassungseigenschaft im aktuellen Schreibrichtung bezieht. Beispielsweise:

- In einer horizontalen Schreibrichtung ist die Blockrichtung von oben nach unten, daher funktioniert `inset-block-end: anchor(bottom)`, aber `inset-block-end: anchor(left)` ist inkompatibel. Wenn `inset-block-end: anchor(left, 50px)` gesetzt wurde, wäre der berechnete Wert `50px`, und das positionierte Element würde `50px` vom Blockende (unten) seines nächstgelegenen positionierten Vorfahren oder des Viewports, abhängig vom gesetzten `position`-Wert, positioniert werden.
- In einer vertikalen Schreibrichtung ist die Blockrichtung von rechts nach links oder von links nach rechts, daher funktioniert `inset-block-end: anchor(left)`, aber `inset-block-end: anchor(top)` ist inkompatibel. Wenn `inset-block-end: anchor(top, 50px)` gesetzt wurde, wäre der berechnete Wert `50px`, und das positionierte Element würde `50px` vom Blockende (links oder rechts, abhängig von der Schreibrichtung) seines nächstgelegenen positionierten Vorfahren oder des Viewports, abhängig vom gesetzten `position`-Wert, positioniert werden.

Um das Potenzial für Verwirrung mit diesen Werten zu minimieren, wird angeraten, logische Einpassungseigenschaften mit logischen `<anchor-side>`-Werten zu verwenden und physikalische Einpassungseigenschaften mit physikalischen `<anchor-side>`-Werten zu verwenden. Sie sollten nach Möglichkeit die Verwendung logischer Werte bevorzugen, da sie besser für die {{Glossary("Internationalization", "Internationalisierung")}} geeignet sind.

Die `center`- und `<percentage>`-Werte sind in der `anchor()`-Funktion innerhalb aller logischen und physikalischen Einpassungseigenschaften gültig.

Die untenstehende Tabelle listet die Einpassungseigenschaften auf, und die `<anchor-side>`-Parameterwerte, die mit ihnen kompatibel sind. Wir haben nur die Langhand-Einpassungseigenschaften aufgelistet; diese umfassen die Kurzhand-Einpassungseigenschaftswerte.

| Einpassungseigenschaft                      | Kompatibler `<anchor-side>`-Wert                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Alle                                        | `center`                                                                                                                                       |
| Alle                                        | `<percentage>`                                                                                                                                 |
| `top` and `bottom`                          | `top`, `bottom`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `left` and `right`                          | `left`, `right`, `start`, `end`, `self-start`, `self-end`                                                                                      |
| `inset-block-start` and `inset-block-end`   | `start`, `end`, `self-start`, and `self-end`<br>`top` and `bottom` in horizontal writing modes<br>`left` and `right` in vertical writing modes |
| `inset-inline-start` and `inset-inline-end` | `start`, `end`, `self-start`, and `self-end`<br>`left` and `right` in horizontal writing modes<br>`top` and `bottom` in vertical writing modes |

### Verwendung von `anchor()` innerhalb von `calc()`

Wenn sich die `anchor()`-Funktion auf eine Seite der Standardverankerung bezieht, können Sie einen {{cssxref("margin")}} einschließen, um Abstand zwischen den Kanten der Verankerung und dem positionierten Element zu schaffen, wie benötigt. Alternativ können Sie die `anchor()`-Funktion innerhalb einer {{cssxref("calc")}}-Funktion verwenden, um Abstand hinzuzufügen.

Dieses Beispiel positioniert die rechte Kante des positionierten Elements bündig zur linken Kante des Verankerungselements und fügt dann einen Rand hinzu, um etwas Platz zwischen den Kanten zu schaffen:

```css
.positionedElement {
  right: anchor(left);
  margin-left: 10px;
}
```

Dieses Beispiel positioniert die logische Blockendkante des positionierten Elements `10px` von der logischen Blockstartkante des Verankerungselements:

```css
.positionedElement {
  inset-block-end: calc(anchor(start) + 10px);
}
```

### Positionierung eines Elements relativ zu mehreren Verankerungen

Sie können ein Element relativ zu mehreren Verankerungen positionieren, indem Sie verschiedene `<anchor-name>`-Werte innerhalb der `anchor()`-Funktion von verschiedenen Einpassungseigenschaften am selben Element angeben (siehe [Element positioniert relativ zu mehreren Verankerungen](#element_positioniert_relativ_zu_mehreren_verankerungen) unten). Dies kann verwendet werden, um nützliche Funktionalitäten wie Ziehpunkte an den Ecken eines positionierten Elements zu erstellen, die verwendet werden können, um es in der Größe zu ändern.

Während ein positioniertes Element relativ zu mehr als einem Verankerungselement positioniert werden kann, ist es immer nur mit der einzelnen Verankerung verbunden, die über seine [`position-anchor`](/de/docs/Web/CSS/position-anchor) Eigenschaft (oder das [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) HTML-Attribut) definiert ist. Dies ist die Verankerung, mit der das Element beim Scrollen der Seite mit scrollt; es kann auch verwendet werden, um zu steuern, wann das Element [bedingt ausgeblendet](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding#conditionally_hiding_anchor-positioned_elements) wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Häufige Verwendung

In diesem Beispiel wird die `anchor()`-Funktion verwendet, um die Höhe eines verankerungspositionierten Elements auf die Höhe seiner Verankerung zu setzen, indem die unteren und oberen Kanten auf die unteren und oberen Kanten der Verankerung gesetzt werden. Die `anchor()`-Funktion innerhalb einer `calc()`-Funktion wird dann verwendet, um das verankerungspositionierte Element von seiner Verankerung zu versetzen.

#### HTML

Wir fügen ein {{htmlelement("div")}}-Element hinzu, das wir als unsere Verankerung setzen, und ein {{htmlelement("p")}}-Element, das wir relativ zu dieser Verankerung positionieren werden:

```html
<div class="anchor">⚓︎</div>

<p class="positionedElement">This is a positioned element.</p>
```

#### CSS

Wir setzen den `anchor-name`-Wert des Verankerungselements als Wert der `position-anchor`-Eigenschaft des positionierten Elements, um die Elemente zu verbinden, dann setzen wir drei Einpassungseigenschaften auf dem verankerungspositionierten Element. Die ersten beiden positionieren die obere Kante des Elements bündig zur oberen Kante der Verankerung und die untere Kante bündig zur unteren Kante der Verankerung. In der dritten Einpassungseigenschaft wird die `anchor()`-Funktion innerhalb einer `calc()`-Funktion verwendet, um die linke Kante des Elements `10px` zur rechten Kante der Verankerung zu positionieren.

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

### Vergleich verschiedener `<anchor-side>`-Werte

Dieses Beispiel zeigt ein Element, das relativ zu einer Verankerung über seine {{cssxref("top")}}- und {{cssxref("left")}}-Eigenschaften positioniert ist, die mithilfe von `anchor()`-Funktionen definiert sind. Es enthält auch zwei Dropdown-Menüs, die es Ihnen ermöglichen, die `<anchor-side>`-Werte innerhalb dieser `anchor()`-Funktionen zu variieren, damit Sie sehen können, welche Auswirkung sie haben.

#### HTML

Wir spezifizieren zwei {{htmlelement("div")}}-Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als das Verankerungselement und das positionierte Element gedacht, die wir miteinander verbinden werden.

Wir fügen auch etwas Fülltext um die beiden `<div>`-Elemente hinzu, um den {{htmlelement("body")}} größer zu machen, sodass er scrollt. Dieses Beispiel enthält auch zwei {{htmlelement("select")}}-Elemente, um die Dropdown-Menüs zu erstellen, die die Auswahl verschiedener `<anchor-side>`-Werte ermöglichen, um das positionierte Element zu platzieren. Wir haben den Fülltext und die `<select>`-Elemente aus Gründen der Kürze versteckt.

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

Wir deklarieren das `anchor`-`<div>` als Verankerungselement, indem wir via der {{cssxref("anchor-name")}}-Eigenschaft einen Verankerungsnamen darauf setzen. Dann assoziieren wir es mit dem positionierten Element, indem wir denselben Wert für seine {{cssxref("position-anchor")}}-Eigenschaft setzen. `top: anchor(--myAnchor bottom)` positioniert die obere Kante der Infobox bündig zur unteren Kante ihrer Verankerung, während `left: anchor(right)` die linke Kante der Infobox bündig zur rechten Kante ihrer Verankerung positioniert. Dies bietet eine Anfangsposition, die überschrieben wird, wenn unterschiedliche Werte aus den Dropdown-Menüs ausgewählt werden.

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

Wir hören auf das `change`-Ereignis, das auftritt, wenn ein neuer `<anchor-side>`-Wert ausgewählt wird, und setzen den ausgewählten Wert als `<anchor-side>` in der `anchor()`-Funktion innerhalb des relevanten Einpassungseigenschafts-Werts (`top` oder `left`) der Infobox.

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

Wählen Sie verschiedene Werte aus den Dropdown-Menüs aus, um zu sehen, wie sie die Positionierung der Infobox beeinflussen.

{{EmbedLiveSample("Comparison of different anchor-side values", "100%", '240')}}

### Element positioniert relativ zu mehreren Verankerungen

Dieses Beispiel positioniert ein Element relativ zu zwei verschiedenen Verankerungen, die verwendet werden, um die Position der oberen linken und unteren rechten Ecken des verankerungspositionierten Elements festzulegen. Die Verankerungen können über Tastatursteuerungen oder durch Ziehen verschoben werden, wodurch das positionierte Element in der Größe geändert wird.

#### HTML

Wir spezifizieren insgesamt drei {{htmlelement("div")}}-Elemente. Die ersten beiden haben eine Klasse von `anchor` und werden als Verankerungen definiert; jedes hat eine individuelle `id`, die verwendet wird, um ihnen unterschiedliche Positionierungsinformationen zu geben. Das letzte `<div>` hat eine Klasse von `infobox` und wird als positioniertes Element definiert. Wir fügen das [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attribut hinzu, um ihnen Tastaturfokus zu ermöglichen.

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
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
}
```

Die Verankerungen erhalten jeweils einen unterschiedlichen {{cssxref("anchor-name")}}-Wert, einen {{cssxref("position")}}-Wert von `absolute` und unterschiedliche Einpassungswerte, um die Verankerungen in einer rechteckigen Anordnung zu positionieren.

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

Das verankerungspositionierte Element, dessen `position` auf `fixed` gesetzt ist, wird über seine {{cssxref("position-anchor")}}-Eigenschaft mit einer Verankerung assoziiert. Es wird relativ zu zwei Verankerungen positioniert, indem zwei verschiedene `<anchor-name>`-Werte mit den `anchor()`-Funktionen auf seine Einpassungseigenschaften gesetzt werden. In diesem Fall haben wir {{cssxref("percentage")}}-Werte für den `<anchor-side>`-Parameter verwendet, der die Entfernung vom Anfang der Achse der Einpassungseigenschaft angibt, auf der die Funktion eingestellt ist.

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

Das positionierte Element wird relativ zu beiden Verankerungselementen positioniert. Ziehen Sie sie mit der Maus oder aktivieren Sie sie und verwenden Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>, um sie nach oben, unten, links und rechts zu bewegen. Beobachten Sie, wie sich ihre Position verändert und als Folge davon auch die Fläche des positionierten Elements. Scrollen Sie, um zu sehen, wie die Positionen aller Elemente beibehalten werden.

{{EmbedLiveSample("Element positioned relative to multiple anchors", "100%", '350')}}

> [!NOTE]
> Dieses Beispiel ist ein Machbarkeitsnachweis und nicht zur Verwendung in Produktivcode gedacht. Zu seinen Schwächen gehört, dass das Beispiel fehlschlägt, wenn Sie versuchen, die Verankerungen horizontal oder vertikal aneinander vorbeizubewegen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("position-anchor")}}
- {{cssxref("position-area")}}
- {{cssxref("anchor-size()")}} Funktion
- [Leitfaden zur Verwendung der CSS-Verankerungspositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Leitfaden für Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [CSS-Verankerungs-Positionierungs-Modul](/de/docs/Web/CSS/CSS_anchor_positioning)
