---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{CSSRef}}

Die **`position-area`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es einem Anker-positionierten Element, relativ zu den Rändern seines zugehörigen Ankerelements positioniert zu werden, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3-Rasters gelegt wird, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine bequeme Alternative zum Verankern und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "inset properties")}} und die {{cssxref("anchor()")}}-Funktion. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Ränder des umgebenden Blocks des positionierten Elements relativ zu den Rändern seines Standard-Ankerelements zu positionieren.

Wenn ein Element kein Standard-Ankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

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

Der Eigenschaftswert besteht aus zwei `<position-area>` Schlüsselbegriffe oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselwort angegeben wird, wird der zweite Schlüsselbegriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)
  - : Gibt den Bereich des Positionierungsrasters an, in dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Es wird kein Positionierungsbereich festgelegt.

## Beschreibung

Die `position-area`-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion zur Positionierung von Elementen relativ zu Ankern. `position-area` basiert auf dem Konzept eines 3x3 Kachelraster, dem **position-area grid**, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area grid, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` repräsentiert. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end` und [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` und Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Dimensionen des äußeren Rands des Rasters durch den umgebenen Block des positionierten Elements definiert sind.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters angeben, innerhalb dessen das positionierte Element platziert werden soll. Genauer gesagt, wird der umgebende Block des positionierten Elements auf den Rasterbereich festgelegt.

Beispielsweise:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzelnen, spezifischen Rasterquadrat zu platzieren — zum Beispiel wird `top left` (logische Entsprechung `start start`) oder `bottom center` (logische Entsprechung `end center`) das positionierte Element in das obere rechte oder untere mittlere Quadrat platzieren.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert wird, zunächst in der Mitte, und der andere die anderen Kacheln dieser Zeile oder Spalte, die überspannt werden sollen. Zum Beispiel:
  - `top span-left` führt dazu, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die mittlere und linke Kachel dieser Zeile überspannt wird.
  - `block-end span-inline-end` führt dazu, dass das positionierte Element in der Mitte der Blockend-Zeile platziert und über die mittlere und Inline-End-Kachel dieser Zeile überspannt wird.
  - `bottom span-all` und `y-end span-all` führen dazu, dass das positionierte Element in der Mitte der unteren Zeile platziert und über drei Zellen überspannt wird, in diesem Fall die linke, mittlere und rechte Kachel der unteren Zeile.

Für detaillierte Informationen zu Ankerfunktionen, deren Nutzung und der `position-area` Eigenschaft, siehe die [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Hauptseite und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, insbesondere den Abschnitt über das [Festlegen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf ein positioniertes Element gesetzt wird, werden einige seiner Eigenschaften ihr Standardverhalten so angepasst, dass eine gute Standardausrichtung erzielt wird.

#### Selbst-Ausrichtungseigenschaft `normal` Wert

Der `normal` Wert der Selbst-Ausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert für eine Selbst-Ausrichtungseigenschaft als Standard gewählt wird, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert die mittlere Region einer Achse angibt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil der von der `position-area` Eigenschaft angegebenen Region. Zum Beispiel, wenn der `position-area` Wert die Startregion seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, verursacht `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die mittlere und Startkachel dieser Zeile überspannt wird. In diesem Fall werden die Selbst-Ausrichtungseigenschaften standardmäßig `align-self: end` und `justify-self: anchor-center` sein.

#### Einsetzeigenschaften und Werte

Wenn ein Anker-positioniertes Element mit der `position-area` Eigenschaft positioniert wird, geben alle festgelegten {{Glossary("inset_properties", "Einsetzeigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, die Versätze vom Positionierungsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), beziehen sich ebenfalls auf den Positionierungsbereich. Alle Einsetzeigenschaften, die auf `auto` gesetzt oder als Standardwert haben, verhalten sich so, als ob ihr Wert auf `0` gesetzt wäre.

### Ein Exkurs zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe standardmäßig seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} sein, aber sie wird auch von der Größe des position-area Rasters beeinflusst.

Wenn das positionierte Element in einer einzelnen obersten Mitte, unteren Mitte oder zentralen Zelle platziert wird, entspricht seine Blockgröße der des umgebenden Blocks des Ankers und wächst nach oben, unten oder in beide Richtungen. Das positionierte Element wird sich mit dem angegebenen Rasterquadrat ausrichten, aber die gleiche Breite wie das Ankerelement annehmen. Es wird jedoch nicht zulassen, dass sein Inhalt überläuft — seine minimale `width` wird ihr `min-content` sein (wie durch die Breite seines längsten Wortes definiert).

Wenn das positionierte Element in einem anderen einzelnen Rasterquadrat platziert wird (sagen wir mit `position-area: top left`) oder so eingestellt ist, dass es zwei oder mehr Rasterquadrate überspannt (zum Beispiel mit `position-area: bottom span-all`), wird es sich mit dem angegebenen Rasterbereich ausrichten, aber verhalten, als ob es eine {{cssxref("width")}} von `max-content` darauf gesetzt hat. Es wird entsprechend der Größe seines umgebenden Blocks bestimmt, die die Größe ist, die ihm zugewiesen wird, wenn es auf `position: fixed` gesetzt wurde. Es wird sich so weit wie der Textinhalt erstrecken, obwohl es möglicherweise auch durch den Rand des `<body>` eingeschränkt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element verankert und relativ zu seinem zugehörigen Anker mit der `position-area` Eigenschaft positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch ein Stil-Block hinzu, der sichtbar gemacht wird. Alle Elemente sind direkt bearbeitbar über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Dann assoziieren wir das absolut positionierte `<p>` mit ihm, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den initialen `position-area` Wert auf `top center`. Dieser Wert wird auf einen `p`-Selektor gesetzt, sodass der Wert eine geringere [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) als jeder Wert hat, der dem `<style>`-Block `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Infolgedessen können Sie den initialen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stil-Blocks setzen.

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

Versuchen Sie, die Menge des Textes im Anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den Wert der `position-area` Eigenschaft zu etwas anderem zu ändern, wie z. B. `center`.

### Vergleich der `position-area` Werte

Dieses Demo erstellt einen Anker und verankert ein positioniertes Element daran. Es bietet auch ein Dropdown-Menü, mit dem verschiedene `position-area` Werte auf das positionierte Element angewendet werden können, um deren Effekt zu sehen. Eine der Optionen führt dazu, dass ein Texteingabefeld erscheint, das Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich gibt es ein Kontrollkästchen, um `writing-mode: vertical-lr` ein- und auszuschalten, sodass Sie beobachten können, wie sich die `position-area` Werteffekte in verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse `anchor` und eines mit einer Klasse `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, das wir damit assoziieren werden. Wir haben das `contenteditable` Attribut auf beide gesetzt, sodass sie direkt bearbeitbar sind.

Wir haben auch zwei Formulare hinzugefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente zum Setzen unterschiedlicher `position-area` Werte enthalten, sowie das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}}. Der Code für diese, zusammen mit dem JavaScript, wurde um der Kürze willen versteckt.

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

Im CSS deklarieren wir zunächst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen.

Das positionierte Element wird mit dem Ankerelement assoziiert, indem der Ankername als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, so dass, wenn das positionierte Element einen `position-area` Wert erhält, der es über dem Anker platziert, Sie immer noch die relative Position der Elemente zueinander sehen können.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um den Effekt auf die Position der Infobox zu sehen. Wählen Sie den "Custom"-Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Textfeld einzugeben, um deren Effekt zu sehen. Fügen Sie dem Anker und den Anker-positionierten Elementen Text hinzu, um zu sehen, wie das Anker-positionierte Element basierend auf dem `position-area` Wert wächst. Schließlich aktivieren Sie das Kontrollkästchen und experimentieren Sie mit verschiedenen `position-area` Werten, um zu sehen, welche denselben Effekt in verschiedenen Schreibmodi haben und welche unterschiedliche Ergebnisse erzeugen.

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
- [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
