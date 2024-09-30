---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem anker-positionierten Element, relativ zu den Kanten seines zugeordneten Anchorelements positioniert zu werden, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3-Rasters gesetzt wird, wobei das Anchorelement die mittlere Zelle ist.

`position-area` bietet eine bequeme Alternative zum Befestigen und Positionieren eines Elements relativ zu seinem Anker mittels [Einsetzeigenschaften](/de/docs/Glossary/inset_properties) und der {{cssxref("anchor()")}} Funktion. Das auf Raster basierte Konzept löst den häufigen Anwendungsfall, die Kanten des enthaltenen Blocks des positionierten Elements relativ zu den Kanten seines Standard-Anchor-Elements zu positionieren.

Wenn ein Element kein Standard-Anchor-Element hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Ursprünglich wurde diese Eigenschaft in Chromium-Browsern als `inset-area` benannt und unterstützt, mit den gleichen Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit unterstützt, um die Abwärtskompatibilität zu gewährleisten.

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

Der Eigenschaftswert besteht aus zwei `<position-area>` Schlüsselbegriffen oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff angegeben wird, wird der zweite Schlüsselbegriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)

  - : Gibt den Bereich des Positionsraster an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`

  - : Es wird kein Positionierungsbereich festgelegt.

## Beschreibung

Die Eigenschaft `position-area` bietet eine Alternative zur `anchor()` Funktion für das Positionieren von Elementen relativ zu Ankern. `position-area` arbeitet mit dem Konzept eines 3x3 Kachelrasters, genannt das **position-area Raster**, wobei das Anchorelement die mittlere Kachel ist:

![Das position-area Raster, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end` sowie [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end` sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umfassenden Block](/de/docs/Web/CSS/Containing_block) des Anchor-Elements definiert, während die Abmessungen des äußeren Rands des Rasters durch den umfassenden Block des positionierten Elements definiert werden.

Der Wert [`<position-area>`](/de/docs/Web/CSS/position-area_value) besteht aus einem oder zwei Schlüsselwörtern, die definieren, in welchem Bereich des Rasters das positionierte Element platziert werden soll. Genauer gesagt wird der umfassende Block des positionierten Elements auf den Rasterbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzelnen, spezifischen Rasterquadrat zu platzieren — zum Beispiel `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im oberen rechten oder unteren mittleren Quadrat.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert wird, es wird zunächst in der Mitte platziert, und der andere gibt die anderen Kacheln jener Zeile oder Spalte an, die überspannt werden sollen. Zum Beispiel:
  - `top span-left` führt dazu, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und über die mittleren und linken Kacheln dieser Zeile spannt.
  - `block-end span-inline-end` führt dazu, dass das positionierte Element in der Mitte der Block-Ende-Zeile platziert wird und über die mittleren und Inline-End-Kacheln dieser Zeile spannt.
  - `bottom span-all` und `y-end span-all` führen dazu, dass das positionierte Element in der Mitte der unteren Zeile platziert wird und über drei Zellen spannt, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Zeile.

Für detaillierte Informationen zu Ankermöglichkeiten, Verwendung und der Eigenschaft `position-area`, siehe die Seite des [CSS-Anker-Positionierungsmoduls](/de/docs/Web/CSS/CSS_anchor_positioning) und die [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung, insbesondere den Abschnitt zum [Festlegen eines `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf ein positioniertes Element gesetzt wird, werden einige seiner Eigenschaften ihr Standardverhalten anpassen, um eine gute Standardausrichtung zu bieten.

#### Selbst-Ausrichtungs-Eigenschaft `normal` Wert

Der `normal` Wert der Selbst-Ausrichtungs-Eigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end`, oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welchen Wert eine Selbst-Ausrichtungs-Eigenschaft als Standard verwendet, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert den mittleren Bereich auf einer Achse angibt, ist die Standardausrichtung auf dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil des durch die `position-area` Eigenschaft angegebenen Bereichs. Zum Beispiel, wenn der `position-area` Wert den Startbereich seiner Achse angibt, ist die Standardausrichtung auf dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, führt `position-area: top span-x-start` dazu, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und über die mittleren und Anfangskacheln dieser Zeile spannt. In diesem Fall werden die Selbst-Ausrichtungs-Eigenschaften standardmäßig `align-self: end` und `justify-self: anchor-center` sein.

#### inset-Eigenschaften und Werte

Wenn ein anker-positioniertes Element mit der Eigenschaft `position-area` positioniert wird, geben alle gesetzten [Einsetzeigenschaften](/de/docs/Glossary/inset_properties), wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Offsets vom Positionierungsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), werden ebenfalls relativ zum Positionierungsbereich sein. Alle Einsetzeigenschaften, die auf `auto` gesetzt sind oder standardmäßig als `auto` gelten, verhalten sich so, als ob ihr Wert auf `0` gesetzt wäre.

### Ein Hinweis zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe auf seine [intrinsische Größe](/de/docs/Glossary/Intrinsic_Size) standardmäßig gesetzt, aber sie wird auch durch die Größe des `position-area` Rasters beeinflusst.

Wenn das positionierte Element in einem einzelnen oberen mittleren, unteren mittleren oder mittleren mittleren Rasterfeld platziert wird, wird seine Blockgröße dieselbe sein wie die Blockgröße des umfassenden Blocks des Anker-Elements, die nach oben, unten oder in beide Richtungen wächst. Das positionierte Element wird mit dem angegebenen Rasterfeld ausgerichtet, aber dieselbe Breite wie das Anker-Element annehmen. Es wird jedoch nicht zulassen, dass der Inhalt überläuft — seine minimale `width` wird sein `min-content` (wie durch die Länge seines längsten Wortes definiert).

Wenn das positionierte Element in einem anderen einzelnen Rasterfeld platziert wird (zum Beispiel mit `position-area: top left`) oder auf zwei oder mehr Rasterfelder erstreckt wird (zum Beispiel unter Verwendung von `position-area: bottom span-all`), wird es mit dem angegebenen Rasterbereich ausgerichtet, sich aber verhalten, als ob es eine {{cssxref("width")}} von `max-content` hätte. Es wird entsprechend der Größe seines umfassenden Blocks dimensioniert, die die Größe ist, die ihm aufgezwungen wird, wenn es auf `position: fixed` gesetzt wurde. Es wird sich so weit wie der Textinhalt strecken, obwohl es möglicherweise auch durch den Rand des `<body>` begrenzt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element mit der `position-area` Eigenschaft relativ zu seinem zugeordneten Anker verankert und positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch einen Stilblock hinzu, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut direkt bearbeitbar.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: CHANGEME;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` zu einem Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Dann ordnen wir das absolut positionierte `<p>` ihm zu, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area` Wert auf `top center`. Dieser Wert wird auf einem `p` Selektor gesetzt, sodass der Wert weniger [Spezifizität](/de/docs/Web/CSS/Specificity) hat als irgendein Wert, der dem `<style>` Block `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Infolgedessen können Sie den anfänglichen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

Versuchen Sie, die Menge an Text im anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Ebenso, ändern Sie den ungültigen "CHANGEME" Wert der `position-area` Eigenschaft in einen gültigen Wert.

### `position-area` Wertvergleich

Diese Demo erstellt einen Anker und befestigt ein positioniertes Element daran. Es bietet auch ein Dropdown-Menü, mit dem Sie verschiedene `position-area` Werte auswählen können, die auf das positionierte Element angewendet werden sollen, um ihre Wirkung zu sehen. Eine der Optionen führt dazu, dass ein Textfeld erscheint, das Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, damit Sie beobachten können, wie sich `position-area` Werteffekte über unterschiedliche Schreibmodi hinweg unterscheiden.

#### HTML

Im HTML geben wir zwei {{htmlelement("div")}} Elemente an, eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, die wir jeweils zuordnen werden. Wir haben das `contenteditable` Attribut an beiden eingefügt, was sie direkt bearbeitbar macht.

Wir haben auch zwei Formulare mit den {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) Elementen für das Festlegen verschiedener `position-area` Werte und das [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} bereitgestellt. Der Code für diese, zusammen mit dem JavaScript, wurde der Kürze halber ausgeblendet.

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

Im CSS erklären wir zuerst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen.

Das positionierte Element wird mit dem Ankerelement verbunden, indem sein Ankername als der Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine Anfangsposition mit `position-area: top left`; dieser wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass, wenn das positionierte Element einen `position-area` Wert hat, der es über dem Anker platziert, Sie die Position der Elemente relativ zueinander noch sehen können.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um den Effekt auf die Position der Infobox zu sehen. Wählen Sie den "Custom" Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Wirkung zu sehen. Fügen Sie Text zu den Anker- und den ankerpositionierten Elementen hinzu, um zu sehen, wie das ankerpositionierte Element wächst, basierend auf dem `position-area` Wert. Markieren Sie schließlich das Kontrollkästchen und experimentieren Sie dann mit verschiedenen `position-area` Werten, um zu sehen, welche in verschiedenen Schreibmodi dasselbe Ergebnis erzielen und welche unterschiedliche Ergebnisse liefern.

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
- [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [Umgang mit Überlauf: Try Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
