---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Anker-positionierten Element, relativ zu den Rändern seines zugehörigen Ankerelements positioniert zu werden, indem das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3 Rasters platziert wird, wobei das Ankerelement die mittlere Zelle darstellt.

`position-area` bietet eine komfortable Alternative zum Anbinden und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "inset-Eigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das rasterbasierte Konzept löst den häufigen Anwendungsfall der Positionierung der Kanten des umschließenden Blocks des positionierten Elements relativ zu den Kanten seines Standard-Ankerelements.

Wenn ein Element kein Standard-Ankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keinen Effekt.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` benannt und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit unterstützt, um die Rückwärtskompatibilität zu gewährleisten.

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
  - : Gibt den Bereich des Positionsrasters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Es wird kein Positionsbereich festgelegt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. `position-area` basiert auf dem Konzept eines 3x3 Kachelrasters, das als **position-area grid** bezeichnet wird, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Reihen und Spalten aufgeteilt:

- Die drei Reihen werden vertreten durch die [physischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom`. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, sowie [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center`, und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end`, sowie Koordinatenäquivalente — `x-start`, `center`, und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Dimensionen des äußeren Randes des Gitters durch den umgebenden Block des positionierten Elements festgelegt werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Gitters definieren, in dem sich das positionierte Element befinden soll. Genauer gesagt wird der umgebende Block des positionierten Elements auf den Gitterbereich gesetzt.

Zum Beispiel:

- Man kann einen Reihenwert und einen Spaltenwert angeben, um das positionierte Element in ein einzelnes, spezifisches Gitterquadrat zu setzen — z.B. `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) wird das positionierte Element im oberen rechten oder unteren mittleren Quadrat platzieren.
- Man kann einen Reihen- oder Spaltenwert plus einen `span-*` Wert angeben, um sich über zwei oder drei Zellen zu spannen. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert wird, und initial in der Mitte positioniert wird, und der andere gibt die anderen Kacheln dieser Reihe oder Spalte an, die sich spannen. Zum Beispiel:
  - `top span-left` setzt das positionierte Element in die Mitte der oberen Reihe und spannt sich über die mittleren und linken Kacheln dieser Reihe.
  - `block-end span-inline-end` platziert das positionierte Element in die Mitte der Blockendreihe und strot über die mittleren und Inline-End-Kacheln dieser Reihe.
  - `bottom span-all` und `y-end span-all` positionieren das positionierte Element in der Mitte der unteren Reihe und spannen sich über drei Zellen, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Reihe.

Für detaillierte Informationen zu Ankerfunktionen, Nutzung und der `position-area` Eigenschaft, siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, insbesondere den Abschnitt über [Festlegen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Anpassung des Standardverhaltens

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf einem positionierten Element gesetzt wird, werden einige seiner Eigenschaften ihr Standardverhalten anpassen, um eine gute Standardausrichtung zu ermöglichen.

#### Selbst-Ausrichtungs-Eigenschaft `normal` Wert

Der `normal` Wert der Selbst-Ausrichtungs-Eigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end`, oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welchen Wert die Selbst-Ausrichtungs-Eigenschaft standardmäßig annimmt, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert das mittlere Gebiet auf einer Achse spezifiziert, ist die Standardausrichtung auf dieser Achse `anchor-center`.
- Ansonsten verhält sich das Gegenteil der Region, die durch die `position-area` Eigenschaft spezifiziert wird. Zum Beispiel, wenn der `position-area` Wert den Startbereich seiner Achse angibt, ist die Standardausrichtung auf dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, verursacht `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Reihe platziert wird und sich über die mittleren und Startkacheln dieser Reihe spannt. In diesem Fall werden die Selbst-Ausrichtungs-Eigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### inset-Eigenschaften und Werte

Wenn ein Anker-positioniertes Element unter Verwendung der `position-area` Eigenschaft positioniert wird, geben alle festgelegten {{Glossary("inset_properties", "inset-Eigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Offsets vom Positionsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), werden ebenfalls relativ zum Positionsbereich sein. Alle auf `auto` gesetzten oder standardmäßig auf `auto` gesetzten inset-Eigenschaften werden sich so verhalten, als ob ihr Wert auf `0` gesetzt worden wäre.

### Ein Exkurs zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}}, aber es wird auch von der Größe des position-area-Rasters beeinflusst.

Wenn das positionierte Element in einer einzelnen oberen mittleren, unteren mittleren oder mittleren mittleren Zelle platziert wird, wird seine Blockgröße dieselbe wie die Blockgröße des Ankerelements sein, wachsen nach oben, unten oder in beide Richtungen. Das positionierte Element wird sich mit dem angegebenen Gitterquadrat ausrichten, aber die gleiche Breite wie das Ankerelement annehmen. Es wird jedoch nicht zulassen, dass sein Inhalt überläuft — seine minimale `width` wird sein `min-content` sein (wie durch die Breite seines längsten Wortes definiert).

Wenn das positionierte Element in einem anderen einzelnen Gitterquadrat platziert wird (sagen wir mit `position-area: top left`) oder es so eingestellt ist, dass es sich über zwei oder mehr Gitterquadrate spannt (zum Beispiel mit `position-area: bottom span-all`), wird es sich mit dem angegebenen Gitterbereich ausrichten, sich jedoch so verhalten, als ob es eine {{cssxref("width")}} von `max-content` aufgesetzt hätte. Es wird entsprechend seiner umgebenden Blockgröße dimensioniert, die die Größe ist, die ihm zugewiesen wird, wenn es auf `position: fixed` gesetzt wurde. Es wird sich so weit wie der Textinhalt strecken, obwohl es auch durch den Rand des `<body>` eingeschränkt sein kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element relativ zu seinem zugehörigen Anker durch die `position-area` Eigenschaft angebunden und positioniert.

#### HTML

Das HTML umfasst ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch ein sichtbares Stilblock hinzu. Alle Elemente werden direkt bearbeitbar über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut gesetzt.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir verwandeln das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Dann verbinden wir das absolut positionierte `<p>` mit ihm, indem wir den {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den ursprünglichen `position-area` Wert auf `top center`. Dieser Wert wird auf einen `p` Selektor gesetzt, sodass der Wert eine geringere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat als jeder Wert, der dem `<style>` Block's `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Als Ergebnis können Sie den anfänglichen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

Versuchen Sie, die Menge an Text im anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den Wert der `position-area` Eigenschaft auf etwas anderes zu ändern, wie `center`.

### `position-area` Wertevergleich

Diese Demo erstellt einen Anker und verbindet ein positioniertes Element damit. Es bietet auch ein Dropdown-Menü, mit dem Sie verschiedene `position-area` Werte auswählen können, um ihren Effekt auf das positionierte Element zu sehen. Eine der Optionen verursacht das Erscheinen eines Textfeldes, das es ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, damit Sie beobachten können, wie `position-area` Werte in verschiedenen Schreibmodi unterschiedliche Effekte haben.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse `anchor` und eines mit einer Klasse `infobox`. Diese sind als das Ankerelement und das positionierte Element gedacht, die wir jeweils damit verbinden werden. Wir haben das Attribut `contenteditable` auf beiden eingefügt, womit sie direkt bearbeitbar sind.

Wir haben auch zwei Formulare eingefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente zum Einstellen verschiedener `position-area` Werte enthalten, und das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}}. Der Code für diese, zusammen mit dem JavaScript, wurde der Kürze halber versteckt.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf durch die {{cssxref("anchor-name")}} Eigenschaft setzen.

Das positionierte Element wird mit dem Ankerelement dadurch verbunden, dass sein Ankername als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass, wenn das positionierte Element einen `position-area` Wert erhält, der es über dem Anker platziert, Sie immer noch die Position der Elemente relativ zueinander sehen können.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um die Wirkung auf die Position der Infobox zu sehen. Wählen Sie den "Custom"-Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um ihre Wirkung zu sehen. Fügen Sie Text zum Anker und den anker positionierten Elementen hinzu, um zu sehen, wie sich das anker positionierte Element basierend auf dem `position-area` Wert vergrößert. Schließlich aktivieren Sie das Kontrollkästchen und experimentieren mit verschiedenen `position-area` Werten, um zu sehen, welche dieselben Ergebnisse über unterschiedliche Schreibmodi hinweg liefern und welche unterschiedliche Ergebnisse erzielen.

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
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
