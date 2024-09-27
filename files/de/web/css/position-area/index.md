---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die CSS-Eigenschaft **`position-area`** ermöglicht es einem Anker-positionierten Element, relativ zu den Rändern seines zugeordneten Ankerelements positioniert zu werden, indem das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3-Rasters platziert wird, wobei das Ankerelement die mittlere Zelle darstellt.

`position-area` bietet eine praktische Alternative zum Verankern und Positionieren eines Elements relativ zu seinem Anker über [Einfügeigenschaften](/de/docs/Glossary/inset_properties) und die {{cssxref("anchor()")}}-Funktion. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Ränder des umschließenden Blocks des positionierten Elements relativ zu den Rändern seines Standardankerelements zu positionieren.

Falls ein Element kein Standardankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` eingeführt und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für kurze Zeit aus Gründen der Abwärtskompatibilität unterstützt.

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

  - : Gibt den Bereich des Positionsbereichrasters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`

  - : Es wird kein Positionsbereich gesetzt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion für die Positionierung von Elementen relativ zu Ankern. `position-area` basiert auf dem Konzept eines 3x3 Kachelraster, dem sogenannten **Positionsbereichraster**, wobei das Ankerelement die mittlere Kachel ist:

![Das Positionsbereichraster, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, sowie [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben ebenfalls logische Entsprechungen wie `inline-start`, `center` und `inline-end`, sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umschließenden Block](/de/docs/Web/CSS/Containing_block) des Ankerelements definiert, während die Abmessungen des äußeren Rands des Rasters durch den umschließenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert setzt sich aus einem oder zwei Schlüsselwörtern zusammen, die den Bereich des Rasters definieren, in dem das positionierte Element platziert werden soll. Genauer gesagt wird der umschließende Block des positionierten Elements auf den Rasterbereich gesetzt.

Beispielsweise:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzigen, spezifischen Rasterquadrat zu platzieren — zum Beispiel `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im oberen linken oder unteren mittleren Quadrat.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu erstrecken. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, wobei es zunächst in der Mitte platziert wird, und der andere gibt die anderen Kacheln dieser Zeile oder Spalte an, die gedehnt werden sollen. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die mittleren und linken Kacheln dieser Zeile gestreckt wird.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Ende-Zeile des Blocks platziert und über die mittleren und inline-Endkacheln dieser Zeile gestreckt wird.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Zeile platziert und über drei Zellen gestreckt wird, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Zeile.

Für detaillierte Informationen zu Ankerfunktionen, Verwendung und der `position-area` Eigenschaft, siehe das Modul zur [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, insbesondere den Abschnitt über das [Setzen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf einem positionierten Element gesetzt ist, werden einige seiner Eigenschaften ihr Standardverhalten anpassen, um eine gute Standardausrichtung zu bieten.

#### Selbst-Ausrichtungseigenschaft `normal` Wert

Der `normal` Wert der Selbst-Ausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end`, oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert eine Selbst-Ausrichtungseigenschaft standardmäßig annimmt, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert die mittlere Region in einer Achse angibt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil der Region, die durch die `position-area` Eigenschaft angegeben wird. Beispielsweise, wenn der `position-area` Wert den Startbereich seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die mittleren und anfänglichen Kacheln dieser Zeile gestreckt wird. In diesem Fall werden die Selbst-Ausrichtungseigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### Einfügeigenschaften und Werte

Wenn ein Anker-positioniertes Element mit der `position-area` Eigenschaft positioniert wird, legen alle [Einfügeigenschaften](/de/docs/Glossary/inset_properties) wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}} Offsets vom Positionsbereich fest. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), werden sich ebenfalls relativ zum Positionsbereich verhalten. Alle Einfügeigenschaften, die auf `auto` gesetzt oder standardmäßig auf `auto` sind, verhalten sich, als wäre ihr Wert auf `0` gesetzt.

### Ein Exkurs zur Breite von positionierten Elementen

Wenn das positionierte Element keine spezifische Größe darauf gesetzt hat, wird seine Größe standardmäßig auf seine [intrinsische Größe](/de/docs/Glossary/Intrinsic_Size) gesetzt, jedoch wird es auch von der Größe des Positionsbereichrasters beeinflusst.

Wenn das positionierte Element in einer einzelnen oberen, unteren oder mittleren Zelle platziert ist, entspricht seine Blockgröße der Größe des umschließenden Blocks des Ankers, wächst nach oben, unten oder in beide Richtungen entsprechend. Das positionierte Element wird mit dem angegebenen Rasterquadrat ausgerichtet, nimmt jedoch dieselbe Breite wie das Ankermodul an. Der Inhalt darf jedoch nicht überlaufen — seine minimale `width` wird ihre `min-content` (wie durch die Breite ihres längsten Wortes definiert) sein.

Wenn das positionierte Element in einem anderen einzelnen Rasterquadrat platziert wird (z.B. mit `position-area: top left`) oder auf zwei oder mehr Rasterquadrate erstreckt wird (z.B. mit `position-area: bottom span-all`), wird es mit dem angegebenen Rasterbereich ausgerichtet, jedoch verhalten sich, als hätte es eine {{cssxref("width")}} von `max-content` gesetzt darauf. Es wird basierend auf seiner umgebenden Blockgröße dimensioniert, die die Größe ist, die darauf verhängt wurde, als es auf `position: fixed` gesetzt wurde. Es wird so breit wie der Textinhalt gestreckt, obwohl es auch durch den Rand des `<body>` begrenzt sein kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel wird ein positioniertes Element mit der `position-area`-Eigenschaft relativ zu seinem zugeordneten Anker verankert und positioniert.

#### HTML

Das HTML beinhaltet ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zum `<div>` positioniert. Wir integrieren auch einen Stilblock, der sichtbar gemacht wird. Alle Elemente sind über das Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) direkt editierbar gesetzt.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: CHANGEME;
  }
</style>
```

#### CSS

Wir wandeln das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft um. Wir verknüpfen dann das absolut positionierte `<p>` mit ihm, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den initialen `position-area` Wert auf `top center`. Dieser Wert wird auf einen `p` Selektor gesetzt, sodass der Wert weniger [Spezifität](/de/docs/Web/CSS/Specificity) hat als jeder Wert, der dem `<style>` Block's `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wurde. Als Ergebnis können Sie den initialen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

{{ EmbedLiveSample("Grundlegendes Beispiel", "100%", "360") }}

Versuchen Sie, die Textmenge im Anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den ungültigen "CHANGEME" Wert der `position-area` Eigenschaft durch einen gültigen Wert zu ersetzen.

### `position-area` Wertvergleich

Dieses Demo erstellt einen Anker und verankert ein positioniertes Element daran. Es bietet auch ein Dropdown-Menü, mit dem Sie verschiedene `position-area` Werte auswählen können, um sie auf das positionierte Element anzuwenden und deren Effekt zu sehen. Eine der Optionen bewirkt, dass ein Textfeld erscheint, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich steht ein Ankreuzfeld zur Verfügung, um `writing-mode: vertical-lr` ein- und auszuschalten, sodass Sie beobachten können, wie sich die `position-area` Werte je nach verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML geben wir zwei {{htmlelement("div")}} Elemente an, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als Ankerelement und das positionierte Element gedacht, die wir damit verknüpfen werden. Wir haben das `contenteditable` Attribut auf beide Elemente gesetzt, sodass sie direkt editierbar sind.

Wir haben auch zwei Formulare hinzugefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) Elemente zum Festlegen verschiedener `position-area` Werte, sowie das [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) Element zum Umstellen des vertikalen {{cssxref("writing-mode")}}, enthalten. Der Code für diese, zusammen mit dem JavaScript, wurde aus Gründen der Übersichtlichkeit verborgen.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als ein Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen.

Das positionierte Element ist mit dem Ankerelement verknüpft, indem sein Ankername als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass, wenn das positionierte Element einen `position-area` Wert erhält, der es über dem Anker platziert, Sie die Position der Elemente relativ zueinander immer noch sehen können.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um den Effekt zu sehen, den sie auf die Position des Infokastens haben. Wählen Sie den "Benutzerdefinierten" Wert aus und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Effekt zu sehen. Fügen Sie Text zu den Anker- und den Anker-positionierten Elementen hinzu, um zu sehen, wie das Anker-positionierte Element basierend auf dem `position-area` Wert wächst. Abschließend, markieren Sie das Ankreuzfeld und experimentieren Sie dann mit verschiedenen `position-area` Werten, um zu sehen, welche in verschiedenen Schreibmodi das gleiche Ergebnis liefern und welche unterschiedliche Ergebnisse liefern.

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
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Probieren Sie Fallbacks und bedingte Ausblendung](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
