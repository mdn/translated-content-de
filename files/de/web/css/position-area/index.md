---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}{{SeeCompatTable}}

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem verankerten Element, relativ zu den Rändern seines zugeordneten Ankerelements positioniert zu werden, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3 Rasters platziert wird, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine praktische Alternative, um ein Element relativ zu seinem Anker über {{Glossary("inset_properties", "Inset-Eigenschaften")}} und die {{cssxref("anchor()")}}-Funktion zu verankern und zu positionieren. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Ränder des enthaltenen Blocks des positionierten Elements relativ zu den Rändern seines Standard-Ankerelements zu positionieren.

Wenn ein Element kein Standard-Ankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` mit denselben Eigenschaftswerten benannt und unterstützt. Beide Eigenschaftsnamen werden aus Gründen der Rückwärtskompatibilität für kurze Zeit unterstützt.

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
position-area: center y-self-end;

/* Two <position-area> keywords spanning two tiles */
position-area: top span-left;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* Two <position-area> keywords spanning three tiles */
position-area: top span-all;
position-area: block-end span-all;
position-area: x-self-start span-all;

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

Der Eigenschaftswert ist zwei `<position-area>` Schlüsselbegriffe oder das Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff angegeben wird, wird der zweite Schlüsselbegriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)

  - : Gibt den Bereich des Positionsrastergitters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`

  - : Es wird kein Positionsbereich festgelegt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()`-Funktion für die Positionierung von Elementen relativ zu Ankern. `position-area` arbeitet mit dem Konzept eines 3x3-Rastergitters, des sogenannten **position-area grids**, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area grid, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, und [Koordinatenentsprechungen](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end`, und Koordinatenentsprechungen — `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [enthaltenen Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Dimensionen der äußeren Kante des Rasters durch den enthaltenen Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in den das positionierte Element platziert werden soll. Genauer gesagt wird der enthaltene Block des positionierten Elements auf den Rasterbereich eingestellt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzigen, spezifischen Rasterquadrat zu platzieren — zum Beispiel `top left` (logische Entsprechung `start start`) oder `bottom center` (logische Entsprechung `end center`) platziert das positionierte Element in der oberen rechten oder unteren mittleren Zelle.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in die das positionierte Element platziert wird, und platziert es zunächst in der Mitte, während der andere die anderen Kacheln dieser Zeile oder Spalte angibt, die überspannt werden sollen. Zum Beispiel:
  - `top span-left` führt dazu, dass das positionierte Element in der Mitte der obersten Zeile platziert wird und über die mittlere und linke Kachel dieser Zeile spannt.
  - `block-end span-inline-end` führt dazu, dass das positionierte Element in der Mitte der Block-Ende-Zeile platziert wird und über die mittlere und Inline-Ende-Kachel dieser Zeile spannt.
  - `bottom span-all` und `y-end span-all` führen dazu, dass das positionierte Element in der Mitte der unteren Zeile platziert wird und über drei Zellen spannt, in diesem Fall die linke, mittlere und rechte Kachel der unteren Zeile.

Für ausführliche Informationen zu Ankerfunktionen, Nutzung und der `position-area` Eigenschaft, sehen Sie die [CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Verwenden der CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, insbesondere den Abschnitt über [Einstellen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn auf einem positionierten Element ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert eingestellt ist, wird das Standardverhalten einiger seiner Eigenschaften angepasst, um eine gute Standardausrichtung zu gewährleisten.

#### Selbst-Ausrichtungseigenschaft `normal` Wert

Der `normal` Wert der Selbst-Ausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welchen Wert eine Selbst-Ausrichtungseigenschaft standardmäßig annimmt, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert die mittlere Region in einer Achse festlegt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil der durch die `position-area` Eigenschaft festgelegten Region. Zum Beispiel, wenn der `position-area` Wert die Startregion seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` eingestellt ist, verursacht `position-area: top span-x-start`, dass das positionierte Element in der Mitte der obersten Zeile platziert wird und über die mittlere und Start-Kachel dieser Zeile spannt. In diesem Fall werden die Selbst-Ausrichtungseigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### inset Eigenschaften und Werte

Wenn ein Anker-positioniertes Element mithilfe der `position-area` Eigenschaft positioniert wird, geben alle festgelegten {{Glossary("inset_properties", "Inset-Eigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Verschiebungen vom Positionsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), werden ebenfalls relativ zum Positionsbereich sein. Alle Inset-Eigenschaften, die auf `auto` gesetzt oder standardmäßig auf `auto` stehen, verhalten sich, als wäre ihr Wert auf `0` gesetzt.

### Eine Randbemerkung zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} gesetzt, aber es wird auch von der Größe des Positionsrastergitters beeinflusst.

Wenn das positionierte Element in einem einzigen oberen mittleren, unteren mittleren oder zentralen mittleren Bereich platziert wird, entspricht seine Blockgröße der Blockgröße des Ankerelements und wächst nach oben, unten oder in beide Richtungen. Das positionierte Element wird sich mit dem angegebenen Rasterquadrat ausrichten, übernimmt jedoch dieselbe Breite wie das Ankerelement. Es wird jedoch keinen Überlauf seines Inhalts zulassen — seine minimale `width` wird seine `min-content` sein (wie durch die Breite seines längsten Wortes definiert).

Wenn das positionierte Element in einem anderen Einzelrasterquadrat platziert wird (z.B. mit `position-area: top left`) oder darauf eingestellt ist, zwei oder mehr Rasterquadrate zu überspannen (zum Beispiel mit `position-area: bottom span-all`), wird es sich mit dem angegebenen Rasterbereich ausrichten, aber so verhalten, als ob es eine {{cssxref("width")}} von `max-content` hätte. Es wird entsprechend seiner enthaltenen Blockgröße bemessen, die die Größe ist, die ihm zugewiesen wurde, als es auf `position: fixed` gesetzt wurde. Es wird sich so weit wie der Textinhalt dehnen, obwohl es auch durch die Kante des `<body>` eingeschränkt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element verankert und relativ zu seinem zugeordneten Anker mithilfe der `position-area` Eigenschaft positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch einen Stilblock hinzu, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut direkt editierbar festgelegt.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: CHANGEME;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Wir ordnen dann das absolut positionierte `<p>` mit ihm zu, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den initialen `position-area` Wert auf `top center`. Dieser Wert wird auf einem `p` Selektor gesetzt, sodass der Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) als jeder Wert hat, der dem `<style>` Block's `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Als Ergebnis können Sie den initialen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

Versuchen Sie, die Menge an Text im Anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Ändern Sie auch den ungültigen "CHANGEME"-Wert der `position-area` Eigenschaft in einen gültigen Wert.

### `position-area` Wertvergleich

Diese Demo erstellt einen Anker und verankert ein positioniertes Element daran. Es bietet auch ein Dropdown-Menü, mit dem Sie verschiedene `position-area` Werte auswählen können, um sie auf das positionierte Element anzuwenden und deren Effekt zu sehen. Eine der Optionen führt dazu, dass ein Textfeld erscheint, welches es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, sodass Sie beobachten können, wie `position-area` Werteffektunterschiede in verschiedenen Schreibrichtungen ausfallen.

#### HTML

Im HTML geben wir zwei {{htmlelement("div")}} Elemente an, eines mit einer Klasse `anchor` und eines mit einer Klasse `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, die wir damit verknüpfen werden. Wir haben das `contenteditable` Attribut auf beiden festgelegt, was sie direkt editierbar macht.

Wir haben auch zwei Formulare eingebunden, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente zum Festlegen verschiedener `position-area` Werte und das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} enthalten. Der Code für diese, zusammen mit dem JavaScript, wurde aus Gründen der Kürze verborgen.

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

Im CSS erklärend wir zuerst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen.

Das positionierte Element wird durch das Setzen seines Ankernamens als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements mit dem Ankerelement verbunden. Wir geben ihm auch eine initiale Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, so dass, wenn dem positionierten Element ein `position-area` Wert gegeben wird, der es über dem Anker platziert, Sie die Beziehung der Positionen der Elemente zueinander weiterhin sehen können.

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
  border: 1px solid #ddd;
  padding: 5px 2px;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}
```

```css
.anchor {
  anchor-name: --myAnchor;
}

.infobox {
  position-anchor: --myAnchor;
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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um deren Effekt auf die Position der Infobox zu sehen. Wählen Sie den "Custom"-Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Effekt zu sehen. Fügen Sie Text zum Anker und den Anker positionierten Elementen hinzu, um zu sehen, wie das Anker positionierte Element basierend auf dem `position-area` Wert wächst. Schließlich aktivieren Sie das Kontrollkästchen und experimentieren mit verschiedenen `position-area` Werten, um zu sehen, welche gleiche Ergebnisse über verschiedene Schreibrichtungen geben und welche unterschiedliche Ergebnisse liefern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try-fallbacks")}}
- Die [`anchor()`](/de/docs/Web/CSS/anchor) Funktion
- Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert
- [Verwendung der CSS-Anchor-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Fallbacks versuchen und bedingtes Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Anchor-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
