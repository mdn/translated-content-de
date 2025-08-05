---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem anchor-positionierten Element, relativ zu den Rändern eines zugehörigen Ankerelements positioniert zu werden, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3 Rasters platziert wird, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine bequeme Alternative zum Verankern und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Versatz-Eigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das auf Rastern basierende Konzept löst den häufigen Anwendungsfall, die Ränder des umgebenden Blocks des positionierten Elements relativ zu den Rändern seines Standardankerelements zu positionieren.

Wenn ein Element kein Standardankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` benannt und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit aus Gründen der Rückwärtskompatibilität unterstützt.

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

Der Eigenschaftswert besteht aus zwei `<position-area>` Schlüsselworten oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselwort angegeben wird, wird das zweite impliziert.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)
  - : Gibt den Bereich des Positionierungsrasters an, in dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Es wird kein Positionierungsbereich festgelegt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion zur Positionierung von Elementen relativ zu Ankern. `position-area` basiert auf dem Konzept eines 3x3 Kacheln umfassenden Gitters, dem **position-area Raster**, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Gitterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end` sowie [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end` sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden vom [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Abmessungen des äußeren Rands des Gitters vom umgebenden Block des positionierten Elements definiert werden.

Der Wert [`<position-area>`](/de/docs/Web/CSS/position-area_value) setzt sich aus einem oder zwei Schlüsselwörtern zusammen, die den Bereich des Gitters definieren, in dem das positionierte Element platziert werden soll. Genauer gesagt wird der umgebende Block des positionierten Elements auf den Gitterbereich gesetzt.

Beispielsweise:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzigen, bestimmten Rasterquadrat zu platzieren — zum Beispiel `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im oberen rechten oder unteren mittleren Quadrat.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert wird, initial in der Mitte, und der andere gibt die anderen Kacheln dieser Zeile oder Spalte an, die es überspannen soll. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und über die mittlere und die linke Kachel dieser Zeile gespannt wird.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Zeile am Ende des Blocks platziert wird und über die mittlere und die inline-end Kachel dieser Zeile gespannt wird.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Zeile platziert wird und über drei Zellen gespannt wird, in diesem Fall über die linke, mittlere und rechte Kachel der unteren Zeile.

Für detaillierte Informationen über Ankerfunktionen, deren Verwendung und die `position-area` Eigenschaft siehe die [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und den [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, insbesondere den Abschnitt zum [Festlegen eines `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf einem positionierten Element festgelegt ist, wird das Standardverhalten einiger seiner Eigenschaften angepasst, um eine gute Standardausrichtung zu bieten.

#### Selbstanpassungs-Eigenschaft `normal` Wert

Der `normal` Wert der Selbstanpassungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}, verhält sich entweder wie `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert eine Selbstanpassungseigenschaft standardmäßig verwendet, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert den Mittelbereich auf einer Achse angibt, ist die Standardausrichtung auf dieser Achse `anchor-center`.
- Ansonsten ist das Verhalten das Gegenteil von dem Bereich, der durch die `position-area` Eigenschaft angegeben wird. Beispielsweise, wenn der `position-area` Wert den Startbereich seiner Achse angibt, ist die Standardausrichtung auf dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, verursacht `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und über die mittlere und die Startkachel dieser Zeile gespannt wird. In diesem Fall werden die Selbstanpassungseigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### Versatz-Eigenschaften und Werte

Wenn ein anchor-positioniertes Element unter Verwendung der `position-area` Eigenschaft positioniert wird, geben alle {{Glossary("inset_properties", "Versatz-Eigenschaften")}}, die gesetzt sind, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Offsets vom Positionierungsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), werden ebenfalls relativ zum Positionierungsbereich bezogen. Jegliche Versatz-Eigenschaften, die auf `auto` gesetzt oder standardmäßig eingestellt sind, verhalten sich so, als ob ihr Wert auf `0` gesetzt wäre.

### Eine Anmerkung zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe aufweist, wird seine Größe standardmäßig auf seinen {{Glossary("Intrinsic_Size", "intrinsischen Größe")}} gesetzt, aber es wird auch von der Größe des position-area Gitters beeinflusst.

Wenn das positionierte Element in einer einzelnen oberen Mitte, unteren Mitte oder mittleren Mitte Zelle platziert ist, wird seine Blockgröße dieselbe wie die Blockgröße des Ankerblocks sein, sich nach oben, unten oder in beide Richtungen vergrößernd. Das positionierte Element wird mit dem angegebenen Rasterquadrat ausgerichtet sein, aber dieselbe Breite wie das Ankerelement annehmen. Es wird jedoch nicht zulassen, dass dessen Inhalt überläuft — seine Mindestbreite wird sein `min-content` (wie durch die Breite des längsten Wortes definiert).

Wenn das positionierte Element in einem anderen einzelnen Rasterquadrat platziert ist (zum Beispiel mit `position-area: top left`) oder so eingestellt ist, dass es zwei oder mehr Rasterquadrate überspannt (zum Beispiel mit `position-area: bottom span-all`), wird es mit dem angegebenen Rasterbereich ausgerichtet, aber so behandelt, als ob es eine {{cssxref("width")}} von `max-content` hätte. Es wird entsprechend der Größe des umgebenden Blocks bemessen, die ihm auferlegt ist, wenn es auf `position: fixed` eingestellt ist. Es wird sich so weit wie der Textinhalt erstrecken, obwohl es auch durch den Rand des `<body>` eingeschränkt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element verankert und relativ zu seinem zugehörigen Anker unter Verwendung der `position-area` Eigenschaft positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch einen Stilblock hinzu, der sichtbar gemacht wird. Alle Elemente sind direkt bearbeitbar über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` zu einem Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Wir verbinden das absolut positionierte `<p>` mit ihm, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area` Wert auf `top center`. Dieser Wert ist auf einem `p` Selektor gesetzt, sodass dieser Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat als jeder Wert, der dem `<style>` Block's `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Als Ergebnis können Sie den anfänglichen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

Versuchen Sie, die Menge des Textes im anchor-positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den Wert der `position-area` Eigenschaft auf etwas anderes zu ändern, wie `center`.

### `position-area` Wertvergleich

Dieses Demo erstellt einen Anker und verankert ein positioniertes Element daran. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area` Werte auszuwählen, um auf das positionierte Element angewendet zu werden, um deren Effekt zu sehen. Eine der Optionen verursacht, dass ein Textfeld erscheint, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, damit Sie beobachten können, wie `position-area` Wertwirkungen sich über verschiedene Schreibrichtungen unterscheiden.

#### HTML

Im HTML geben wir zwei {{htmlelement("div")}} Elemente an, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, die wir miteinander verbinden werden. Wir haben das `contenteditable` Attribut auf beide gesetzt, wodurch sie direkt bearbeitbar sind.

Wir haben auch zwei Formulare hinzugefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente zum Festlegen verschiedener `position-area` Werte und das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} enthalten. Der Code hierfür zusammen mit dem JavaScript wurde aus Gründen der Kürze versteckt.

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

Im CSS erklären wir zuerst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf mit der {{cssxref("anchor-name")}} Eigenschaft setzen.

Das positionierte Element wird mit dem Ankerelement verbunden, indem sein Ankername als Wert der `position-anchor` Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, damit, wenn das positionierte Element einen `position-area` Wert erhält, der es über das Ankerelement platziert, die Position der Elemente relativ zueinander noch sichtbar ist.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um die Auswirkungen auf die Position der Infobox zu sehen. Wählen Sie den "Custom" Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Effekt zu sehen. Fügen Sie Text zu dem Anker und den anchor-positionierten Elementen hinzu, um zu sehen, wie das anchor-positionierte Element basierend auf dem `position-area` Wert wächst. Schließlich aktivieren Sie das Kontrollkästchen und experimentieren mit verschiedenen `position-area` Werten, um zu sehen, welche denselben Effekt über verschiedene Schreibrichtungen haben und welche unterschiedliche Ergebnisse liefern.

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
- [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
