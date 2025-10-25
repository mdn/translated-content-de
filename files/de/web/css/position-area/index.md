---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 2ce8a423f814edd1738c96561998ff7db1009cff
---

Die **`position-area`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, ein ankerpositioniertes Element relativ zu den Rändern seines zugeordneten Ankerelements zu positionieren, indem das positionierte Element auf einem oder mehreren Feldern eines impliziten 3x3-Rasters platziert wird, wobei das Ankerelement die zentrale Zelle ist.

`position-area` bietet eine bequeme Alternative zur Befestigung und Positionierung eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "inset properties")}} und der {{cssxref("anchor()")}}-Funktion. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Ränder des Containerelements des positionierten Elements relativ zu den Rändern seines Standardankerelements zu positionieren.

Wenn ein Element kein Standardankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` benannt und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit zur Rückwärtskompatibilität unterstützt.

## Syntax

```css
/* Default value */
position-area: none;

/* Two <position-area> keywords defining a single specific tile */
position-area: top left;
position-area: start end;
position-area: block-start center;
position-area: inline-start block-end;
position-area: x-start y-end;
position-area: center self-y-end;

/* Two <position-area> keywords spanning two tiles */
position-area: top span-left;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* Two <position-area> keywords spanning three tiles */
position-area: top span-all;
position-area: block-end span-all;
position-area: self-x-start span-all;

/* One <position-area> keyword with an implicit second <position-area> keyword  */
position-area: top; /* equiv: top span-all */
position-area: inline-start; /* equiv: inline-start span-all */
position-area: center; /* equiv: center center */
position-area: span-all; /* equiv: center center */
position-area: end; /* equiv: end end */

/* Global values */
position-area: inherit;
position-area: initial;
position-area: revert;
position-area: revert-layer;
position-area: unset;
```

### Werte

Der Eigenschaftswert besteht aus zwei `<position-area>` Schlüsselbegriffen oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>`-Schlüsselbegriff angegeben wird, wird der zweite Schlüsselbegriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)
  - : Gibt den Bereich des Positionierungsrasters an, auf dem die ausgewählten positionierten Elemente platziert werden sollen.

- `none`
  - : Es wird kein Positionierungsbereich festgelegt.

## Beschreibung

Die `position-area`-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. `position-area` arbeitet mit dem Konzept eines 3x3-Rasters von Feldern, genannt **position-area grid**, wobei das Ankerelement das zentrale Feld ist:

![Das position-area grid, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterzellen sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die [physischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` repräsentiert. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, sowie [Koordinaten-Entsprechungen](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end`, und Koordinaten-Entsprechungen — `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [Umgebungsblock](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Dimensionen des äußeren Randes des Rasters durch den Umgebungsblock des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in den das positionierte Element platziert werden soll. Genauer gesagt wird der Umgebungsblock des positionierten Elements auf den Rasterbereich gesetzt.

Beispielsweise:

- Sie können einen Reihenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzelnen, spezifischen Rasterfeld zu platzieren — zum Beispiel `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im oberen rechten oder unteren mittleren Feld.
- Sie können einen Reihen- oder Spaltenwert plus einen `span-*`-Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, wobei es zunächst in der Mitte platziert wird, und der andere gibt die anderen Kacheln dieser Reihe oder Spalte an, die überspannt werden sollen. Zum Beispiel:
  - `top span-left` führt dazu, dass das positionierte Element in die Mitte der oberen Reihe gesetzt und quer über die mittlere und linke Kachel dieser Reihe gespannt wird.
  - `block-end span-inline-end` verursacht, dass das positionierte Element in die Mitte der block-end-Reihe gesetzt und quer über die mittlere und inline-end-Kachel dieser Reihe gespannt wird.
  - `bottom span-all` und `y-end span-all` führen dazu, dass das positionierte Element in die Mitte der unteren Reihe gesetzt und quer über drei Zellen gespannt wird, in diesem Fall die linke, mittlere und rechte Kachel der unteren Reihe.

Für detaillierte Informationen zu Ankerfunktionen, Verwendung und der `position-area`-Eigenschaft siehe das [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, insbesondere den Abschnitt zum [Setzen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert auf ein positioniertes Element gesetzt wird, wird das Standardverhalten einiger seiner Eigenschaften angepasst, um eine gute Standardausrichtung zu gewährleisten.

#### Selbst-Ausrichtungseigenschaft `normal` Wert

Der `normal`-Wert der Selbst-Ausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welchen Wert eine Selbst-Ausrichtungseigenschaft annimmt, hängt von der Positionierung des Elements ab:

- Wenn der `position-area`-Wert den mittleren Bereich einer Achse angibt, ist die Standardausrichtung auf dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil des vom `position-area`-Wert angegebenen Bereichs auf der jeweiligen Achse. Beispiel: Wenn der `position-area`-Wert den Anfangsbereich seiner Achse angibt, ist die Standardausrichtung auf dieser Achse `end`.

Beispielsweise, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, verursacht `position-area: top span-x-start`, dass das positionierte Element in die Mitte der oberen Reihe gesetzt und quer über die mittlere und start-Kacheln dieser Reihe gespannt wird. In diesem Fall werden die Selbst-Ausrichtungseigenschaften standardmäßig `align-self: end` und `justify-self: anchor-center` sein.

#### Einfügeigenschaften und Werte

Wenn ein ankerpositioniertes Element unter Verwendung der `position-area`-Eigenschaft positioniert wird, geben alle {{Glossary("inset_properties", "Einfügeigenschaften")}}, die festgelegt sind, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Abstände vom position-area-Bereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), werden ebenfalls relativ zum position-area sein. Alle Einfügeigenschaften, die auf `auto` gesetzt sind oder standardmäßig `auto` sind, verhalten sich so, als wäre ihr Wert auf `0` gesetzt.

### Eine Anmerkung zur Breite des positionierten Elements

Wenn das positionierte Element keine bestimmte Größe hat, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} gesetzt, aber es wird auch von der Größe des position-area Rasters beeinflusst.

Wenn das positionierte Element in einer einzelnen oberen, unteren oder mittleren Zelle der Mitte platziert wird, ist seine Blockgröße dieselbe wie die Blockgröße des Ankers, wächst in Richtung oben, unten oder in beiden Richtungen. Das positionierte Element wird sich mit dem angegebenen Rasterquadrat ausrichten, aber die gleiche Breite wie das Ankerelement annehmen. Es wird jedoch nicht zulassen, dass sein Inhalt überläuft — seine minimale `width` ist sein `min-content` (wie durch die Breite seines längsten Worts definiert).

Wenn das positionierte Element in einem anderen einzelnen Rasterquadrat platziert wird (beispielsweise mit `position-area: top left`) oder so eingestellt ist, dass es zwei oder mehr Rasterquadrate überspannt (zum Beispiel mit `position-area: bottom span-all`), richtet es sich mit dem angegebenen Rasterbereich aus, verhält sich aber so, als ob es eine {{cssxref("width")}} von `max-content` hätte. Es wird gemäß der Größe seines Containerelements bemessen, das die Größe ist, die ihm zugewiesen wird, wenn es auf `position: fixed` gesetzt wird. Es dehnt sich so weit wie der Textinhalt aus, kann jedoch auch durch den Rand des `<body>` begrenzt sein.

### Verwendung von `position-area` zum Positionieren von Popovers

Bei der Verwendung von `position-area`, um [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) zu positionieren, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der gewünschten Position in Konflikt stehen. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher wird empfohlen, diese zurückzusetzen:

```css
.my-popover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [untersucht Wege, um diese Umgehungslösung zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element mit der `position-area`-Eigenschaft relativ zu seinem zugeordneten Anker platziert und befestigt.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zum `<div>` positioniert. Ein Stilblock wird sichtbar gemacht. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut direkt bearbeitbar gemacht worden.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}}-Eigenschaft. Wir verknüpfen dann das absolut positionierte `<p>` damit, indem wir dessen {{cssxref("position-anchor")}}-Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area`-Wert auf `top center`. Dieser Wert ist auf einen `p`-Selektor gesetzt, daher hat der Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) als jeder Wert, der dem `<style>`-Block `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Daher können Sie den anfänglichen `position-area`-Wert überschreiben, indem Sie einen `position-area`-Wert innerhalb des Stilblocks festlegen.

```css
.anchor {
  anchor-name: --infobox;
  background: palegoldenrod;
  font-size: 3em;
  width: fit-content;
  border: 1px solid goldenrod;
  margin: 100px auto;
}

p {
  position: absolute;
  position-anchor: --infobox;
  position-area: top center;
  margin: 0;
  background-color: darkkhaki;
  border: 1px solid darkolivegreen;
}

style {
  display: block;
  white-space: pre;
  font-family: monospace;
  background-color: #ededed;
  -webkit-user-modify: read-write-plaintext-only;
  line-height: 1.5;
  padding: 10px;
}
```

#### Ergebnisse

{{ EmbedLiveSample("Basic example", "100%", "360") }}

Versuchen Sie, die Textmenge im ankerpositionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den Wert der `position-area`-Eigenschaft auf etwas anderes zu ändern, wie `center`.

### Vergleich von `position-area`-Werten

Dieses Demo erstellt einen Anker und verbindet ein positioniertes Element mit ihm. Es bietet auch ein Dropdown-Menü, mit dem Sie verschiedene `position-area`-Werte auswählen können, um sie auf das positionierte Element anzuwenden und deren Effekt zu sehen. Eine der Optionen verursacht das Erscheinen eines Textfeldes, das Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich steht ein Kontrollkästchen zur Verfügung, um `writing-mode: vertical-lr` ein- und auszuschalten, sodass Sie beobachten können, wie sich die `position-area`-Wertwirkungen in verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als das Ankerelement und das positionierte Element gedacht, die wir miteinander verknüpfen werden. Wir haben das `contenteditable`-Attribut auf beide gesetzt, um sie direkt editierbar zu machen.

Wir haben auch zwei Formulare enthalten, die die {{htmlelement("select")}}- und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)-Elemente zum Setzen verschiedener `position-area`-Werte enthalten, und das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Element zum Ein- und Ausschalten des vertikalen {{cssxref("writing-mode")}}. Der Code dafür, zusammen mit dem JavaScript, wurde der Kürze halber verborgen.

```html
<div class="anchor" contenteditable>⚓︎</div>

<div class="infobox">
  <p contenteditable>You can edit this text.</p>
</div>
```

```html hidden
<form id="position-area-form">
  <div>
    <label for="position-area-select">Choose a position-area:</label>
    <select id="position-area-select" name="position-area-select">
      <optgroup label="Enter custom value">
        <option>Custom</option>
      </optgroup>
      <optgroup label="Physical, single tile">
        <option selected>top left</option>
        <option>bottom right</option>
      </optgroup>
      <optgroup label="Physical, span two">
        <option>bottom span-right</option>
        <option>left span-top</option>
      </optgroup>
      <optgroup label="Physical, span all">
        <option>top</option>
        <option>left</option>
      </optgroup>
      <optgroup label="Logical, single tile">
        <option>start center</option>
        <option>inline-start block-end</option>
      </optgroup>
      <optgroup label="Logical, span two">
        <option>start span-end</option>
        <option>center span-start</option>
        <option>inline-start span-block-end</option>
        <option>span-block-start center</option>
      </optgroup>
      <optgroup label="Logical, span all">
        <option>start span-all</option>
        <option>block-end</option>
      </optgroup>
      <optgroup label="Coordinates, single tile">
        <option>x-start center</option>
        <option>x-end y-end</option>
      </optgroup>
      <optgroup label="Coordinates, span two">
        <option>center span-y-start</option>
        <option>y-start span-x-end</option>
      </optgroup>
      <optgroup label="Coordinates, span all">
        <option>x-start span-all</option>
        <option>y-end</option>
      </optgroup>
    </select>
  </div>
  <div id="position-area-custom-container">
    <label for="position-area-custom">Enter a custom position-area:</label
    ><br />
    <input type="text" id="position-area-custom" name="position-area-custom" />
  </div>
</form>

<form id="writing-mode-form">
  <label for="writing-mode-checkbox">writing-mode: vertical-lr</label><br />
  <input
    type="checkbox"
    id="writing-mode-checkbox"
    name="writing-mode-checkbox" />
</form>
```

#### CSS

Im CSS deklarieren wir zunächst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen daran mittels der {{cssxref("anchor-name")}}-Eigenschaft setzen.

Das positionierte Element wird dem Ankerelement zugeordnet, indem sein Ankername als der Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>`-Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass, wenn das positionierte Element einen `position-area`-Wert erhält, der es über den Anker legt, Sie die Position der Elemente relativ zueinander noch sehen können.

```css hidden
.anchor {
  font-size: 1.8rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  min-width: 50px;
  min-height: 50px;
  line-height: 50px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}

html {
  height: 100%;
}

body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background: white;
  border: 1px solid black;
  padding: 5px;
  position: fixed;
}

#position-area-form {
  top: 0;
  right: 2px;
}

#position-area-form div:last-child {
  margin-top: 10px;
}

#position-area-form div :last-child {
  margin-top: 5px;
}

#writing-mode-form {
  bottom: 0;
  left: 2px;
  writing-mode: horizontal-tb;
}

#position-area-custom-container {
  display: none;
}

.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 5px 2px;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}
```

```css
.anchor {
  anchor-name: --my-anchor;
}

.infobox {
  position-anchor: --my-anchor;
  position: fixed;
  opacity: 0.8;
  position-area: top left;
}
```

```js hidden
const anchorContainer = document.querySelector("body");
const infobox = document.querySelector(".infobox");

const positionAreaForm = document.querySelector("#position-area-form");
const selectElem = document.querySelector("select");
const inputElemContainer = document.querySelector(
  "#position-area-custom-container",
);
const inputElem = document.querySelector("#position-area-custom");
const checkboxElem = document.querySelector("#writing-mode-checkbox");

// Stop form from submitting when enter is pressed on it
positionAreaForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Update positioned element position-area to value selected in drop-down
selectElem.addEventListener("change", () => {
  const area = selectElem.value;

  if (area === "Custom") {
    // Show the custom value input field
    inputElemContainer.style.display = "block";
  } else {
    // Hide the custom value input field
    inputElemContainer.style.display = "none";
    // Set the position-area to the value chosen in the select box
    infobox.style.positionArea = area;
  }
});

// Update positioned element position-area to entered custom value
inputElem.addEventListener("change", () => {
  const customArea = inputElem.value;

  // Set the position-area to the value in the input box
  infobox.style.positionArea = customArea;
});

// Change writing-mode to match checkbox setting
checkboxElem.addEventListener("change", () => {
  if (checkboxElem.checked) {
    anchorContainer.style.writingMode = "vertical-lr";
  } else {
    anchorContainer.style.writingMode = "horizontal-tb";
  }
});
```

#### Ergebnis

Das Ergebnis ist wie folgt:

{{ EmbedLiveSample("`position-area` value comparison", "100%", "360") }}

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um die Wirkung auf die Position des Infokastens zu sehen. Wählen Sie den Wert "Custom" und versuchen Sie, einige benutzerdefinierte `position-area`-Werte in das Texteingabefeld einzugeben, um ihre Wirkung zu beobachten. Fügen Sie Text zum Anker und den ankerpositionierten Elementen hinzu, um zu sehen, wie das ankerpositionierte Element basierend auf dem `position-area`-Wert wächst. Aktivieren Sie schließlich das Kontrollkästchen und experimentieren Sie mit verschiedenen `position-area`-Werten, um zu sehen, welche in verschiedenen Schreibmodi das gleiche Ergebnis liefern und welche unterschiedliche Ergebnisse liefern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try-fallbacks")}}
- Die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion
- Der [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert
- [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen für Überfluss](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
