---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die **`position-area`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es einem verankerten, positionierten Element, sich relativ zu den Rändern seines zugehörigen Ankerelements zu positionieren, indem es das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3-Rasters platziert, wobei das Ankerelement das mittige Feld ist.

`position-area` bietet eine bequeme Alternative zum Verankern und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Inset-Eigenschaften")}} und der {{cssxref("anchor()")}}-Funktion. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Ränder des einem positionierten Element umgebenden Blocks relativ zu den Rändern seines Standardankerelements zu positionieren.

Wenn ein Element kein Standardankerelement hat oder nicht absolut positioniert ist, hat diese Eigenschaft keinen Effekt.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` benannt und unterstützt, mit den gleichen Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit aus Gründen der Rückwärtskompatibilität unterstützt.

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

Der Eigenschaftswert ist ein oder zwei `<position-area>` Schlüsselbegriffe oder das Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff angegeben wird, wird der zweite Schlüsselbegriff angenommen.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)

  - : Gibt den Bereich des Positionierungsrasters an, auf dem die ausgewählten, positionierten Elemente platziert werden sollen.

- `none`
  - : Es wird kein Positionierungsbereich festgelegt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion für das Positionieren von Elementen relativ zu Ankerpunkten. `position-area` basiert auf dem Konzept eines 3x3-Kachelrasters, dem **position-area Raster**, wobei das Ankerelement das mittlere Feld ist:

![Das position-area Raster, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Zeilen und Spalten aufgeteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, sowie [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end`, sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Dimensionen der äußeren Kanten des Rasters durch den umgebenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die die Region des Rasters definieren, in das das positionierte Element platziert werden soll. Genau genommen wird der umgebende Block des positionierten Elements auf den Rasterbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilen- und einen Spaltenwert angeben, um das positionierte Element in einem einzelnen, spezifischen Rasterquadrat zu platzieren — zum Beispiel `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) platzieren das positionierte Element im obersten linken oder unteren mittleren Quadrat.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in die das positionierte Element platziert werden soll, indem es zunächst in der Mitte platziert und der andere die anderen Kacheln der Zeile oder Spalte überspannt. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und sich über die mittlere und linke Kachel dieser Zeile erstreckt.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Block-End-Zeile platziert wird und sich über die mittlere und rechte Kachel dieser Zeile erstreckt.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Zeile platziert und über drei Zellen erstreckt wird, in diesem Fall die linke, mittlere und rechte Kachel der unteren Zeile.

Für detaillierte Informationen zu Anker-Funktionen, Verwendung und der `position-area` Eigenschaft, siehe das [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning) und den Abschnitt [Anwenden einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf ein positioniertes Element gesetzt ist, wird das Standardverhalten einiger seiner Eigenschaften angepasst, um eine gute Standardausrichtung zu gewährleisten.

#### Eigenschaftswert "normal" der Selbstausrichtung

Der `normal`-Wert der Selbstausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert eine Selbstausrichtungseigenschaft als Standard hat, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert die mittlere Region in einer Achse angibt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil der Region, die durch die `position-area` Eigenschaft angegeben wird. Zum Beispiel, wenn der `position-area` Wert die Startregion seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und sich über die mittlere und linke Kachel dieser Zeile erstreckt. In diesem Fall würden die Selbstausrichtungseigenschaften standardmäßig `align-self: end` und `justify-self: anchor-center` sein.

#### inset-Eigenschaften und Werte

Wenn ein verankert positioniertes Element unter Verwendung der `position-area` Eigenschaft positioniert wird, geben alle gesetzten {{Glossary("inset_properties", "Inset-Eigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, die Versatz von der position-area an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), beziehen sich ebenfalls auf die position-area. Alle auf `auto` gesetzten oder standardmäßig `auto` inset-Eigenschaften verhalten sich, als ob ihr Wert auf `0` gesetzt wurde.

### Ein Exkurs zur Breite von positionierten Elementen

Wenn das positionierte Element keine spezifische Größe hat, erhält es standardmäßig seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}}, wird aber auch von der Größe des position-area Rasters beeinflusst.

Wenn das positionierte Element in einem einzigen oberen, mittleren, unteren, oder mittleren Rasterquadrat platziert wird, hat seine Blockgröße die gleiche Größe wie der umgebende Block des Ankers. Das positionierte Element wird mit dem angegebenen Rasterquadrat ausgerichtet, aber dieselbe Breite wie das Ankerelement übernehmen. Allerdings wird es nicht zulassen, dass sein Inhalt überläuft — seine minimale `width` wird sein `min-content` (wie durch die Breite seines längsten Wortes definiert).

Wenn das positionierte Element in einem anderen einzelnen Rasterquadrat (z. B. mit `position-area: top left`) platziert oder so eingestellt wird, dass es zwei oder mehr Rasterquadrate überspannt (z. B. mit `position-area: bottom span-all`), wird es mit dem angegebenen Rasterbereich ausgerichtet, verhält sich jedoch, als ob es eine {{cssxref("width")}} von `max-content` hätte. Es wird entsprechend der Größe seines umgebenden Blocks dimensioniert, was die Größe ist, die ihm auferlegt wird, wenn es auf `position: fixed` gesetzt wurde. Es dehnt sich so breit aus wie der Textinhalt, kann jedoch durch den Rand des `<body>` eingeschränkt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element relativ zu seinem zugehörigen Anker mithilfe der `position-area` Eigenschaft verankert und positioniert.

#### HTML

Das HTML beinhaltet ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zu dem `<div>` mit CSS positioniert. Wir inkludieren auch einen Stilblock, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut direkt editierbar.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: CHANGEME;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` zu einem Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Dann assoziieren wir das absolut positionierte `<p>` damit, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area` Wert auf `top center`. Dieser Wert ist auf einem `p` Selektor gesetzt, daher hat der Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) als jeder Wert, der im Stilblock `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Als Ergebnis können Sie den anfänglichen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

{{ EmbedLiveSample("Einfaches Beispiel", "100%", "360") }}

Versuchen Sie, die Textmenge im verankert positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den ungültigen "CHANGEME" Wert der `position-area` Eigenschaft in einen gültigen zu ändern.

### `position-area` Wertvergleich

Dieses Demo erstellt einen Anker und verknüpft ein positioniertes Element damit. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area` Werte auszuwählen, die auf das positionierte Element angewendet werden, um deren Effekt zu sehen. Eine der Optionen erzeugt ein Textfeld, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, sodass Sie beobachten können, wie sich `position-area` Werte in verschiedenen Schreibrichtungen unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Diese sind vorgesehen, um das Ankerelement und das positionierte Element, das wir damit assoziieren werden, darzustellen. Wir haben das `contenteditable` Attribut auf beiden gesetzt, um sie direkt bearbeitbar zu machen.

Wir haben auch zwei Formulare hinzugefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente zum Setzen verschiedener `position-area` Werte sowie das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Ein- und Ausschalten des vertikalen {{cssxref("writing-mode")}} enthalten. Der Code für diese, zusammen mit dem JavaScript, wurde der Kürze halber versteckt.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen.

Das positionierte Element wird mit dem Ankerelement assoziiert, indem sein Ankername als Wert in der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass, wenn das positionierte Element einen `position-area` Wert erhält, der es über dem Anker platziert, Sie immer noch die relative Position der Elemente zueinander sehen können.

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

{{ EmbedLiveSample("`position-area` Wertvergleich", "100%", "360") }}

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um den Einfluss auf die Position der Infobox zu sehen. Wählen Sie den "Custom"-Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Textfeld einzugeben, um deren Einfluss zu sehen. Fügen Sie Text zum Anker und den verankert positionierten Elementen hinzu, um zu sehen, wie das verankert positionierte Element basierend auf dem `position-area` Wert wächst. Schließlich aktivieren Sie das Kontrollkästchen und experimentieren Sie mit verschiedenen `position-area` Werten, um zu sehen, welche gleichen Ergebnisse in verschiedenen Schreibrichtungen erzielen und welche unterschiedliche Ergebnisse erzielen.

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
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
