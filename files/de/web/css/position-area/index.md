---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}{{SeeCompatTable}}

Die **`position-area`**-Eigenschaft von [CSS](/de/docs/Web/CSS) ermöglicht es, ein Ankerelement relativ zu den Rändern seines zugehörigen Ankerelements zu positionieren, indem das positionierte Element auf einem oder mehreren Kacheln eines impliziten 3x3-Rasters platziert wird, wobei das Ankerelement die mittlere Zelle darstellt.

`position-area` bietet eine praktische Alternative zum Anheften und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Inset-Eigenschaften")}} und die {{cssxref("anchor()")}}-Funktion. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Ränder des enthaltenden Blocks des positionierten Elements relativ zu den Rändern seines Standardankerelements zu positionieren.

Wenn ein Element kein Standardankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` mit denselben Eigenschaftswerten benannt und unterstützt. Beide Eigenschaftsnamen werden für eine kurze Zeit zur Rückwärtskompatibilität unterstützt.

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

Der Eigenschaftswert besteht aus zwei `<position-area>`-Schlüsselbegriffen oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>`-Schlüsselbegriff angegeben wird, wird der zweite Begriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)

  - : Gibt den Bereich des Positionierungsraster an, auf dem die ausgewählten positionierten Elemente platziert werden sollen.

- `none`

  - : Kein Positionierungsbereich wird festgelegt.

## Beschreibung

Die `position-area`-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion für das Positionieren von Elementen relativ zu Ankern. `position-area` basiert auf dem Konzept eines 3x3-Rasters von Kacheln, das als **position-area grid** bezeichnet wird, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area grid, wie unten beschrieben](position-area.png)

Die Rasterkacheln werden in Zeilen und Spalten aufgeteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, und [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end`, und Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Abmessungen des äußeren Rands des Rasters durch den umgebenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in den das positionierte Element platziert werden soll. Genauer gesagt wird der umgebende Block des positionierten Elements auf den Rasterbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzigen, spezifischen Rasterquadrat zu platzieren — zum Beispiel wird `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) das positionierte Element in das obere linke oder mittlere Quadrat unten platzieren.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*`-Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, zunächst in der Mitte, und der andere Wert gibt die anderen Kacheln dieser Zeile oder Spalte an, die überspannt werden sollen. Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und über die Mitte und die linken Kacheln dieser Zeile reicht.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Block-Ende-Zeile platziert wird und über die Mitte und die Inline-Ende-Kacheln dieser Zeile reicht.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Zeile platziert wird und über drei Zellen reicht, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Zeile.

Für detaillierte Informationen zu Ankerfunktionen, Anwendung und der `position-area`-Eigenschaft finden Sie die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, speziell den Abschnitt über [das Festlegen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert auf einem positionierten Element eingestellt ist, wird das Standardverhalten einiger seiner Eigenschaften angepasst, um eine gute Standardausrichtung zu gewährleisten.

#### Selbst-Ausrichtungs-Eigenschaft `normal`-Wert

Der `normal`-Wert der Selbst-Ausrichtungs-Eigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert einer Selbst-Ausrichtungs-Eigenschaft standardmäßig zugewiesen wird, hängt von der Positionierung des Elements ab:

- Wenn der `position-area`-Wert das Zentrum des Rasters auf einer Achse spezifiziert, ist die Standardausrichtung auf dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil der vom `position-area`-Eigenschaft spezifizierten Region. Beispielsweise, wenn der `position-area`-Wert die Startregion seiner Achse angibt, ist die Standardausrichtung auf dieser Achse `end`.

Beispielsweise, wenn der `Schreibmodus` auf `horizontal-tb` gesetzt ist, führt `position-area: top span-x-start` dazu, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und über die Mitte und den Anfangskacheln dieser Zeile reicht. In diesem Fall werden die Selbst-Ausrichtungs-Eigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### Inset-Eigenschaften und Werte

Wenn ein ankergesetzes Element mit der `position-area`-Eigenschaft positioniert wird, geben alle gesetzten {{Glossary("inset_properties", "Inset-Eigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Verschiebungen vom Positionierungsbereich an. Einige andere Eigenschaftswerte wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size) werden ebenfalls relativ zum Positionierungsbereich sein. Alle gesetzten Inset-Eigenschaften oder solche, die standardmäßig auf `auto` stehen, verhalten sich so, als wäre ihr Wert auf `0` gesetzt.

### Ein Exkurs zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} gesetzt, aber es wird auch durch die Größe des Positionierungsrasters beeinflusst.

Wenn das positionierte Element in einer einzelnen oberen mittleren, unteren mittleren oder mittleren/mittleren Zelle platziert wird, wird seine Blockgröße identisch mit der Blockgröße des Ankerelements sein und nach oben, unten oder in beide Richtungen wachsen. Das positionierte Element wird mit dem angegebenen quadratischen Raster ausgerichtet, übernimmt jedoch dieselbe Breite wie das Ankerelement. Es wird jedoch nicht zulassen, dass der Inhalt überläuft — seine minimale `Breite` wird seine `min-content` sein (wie durch die Breite seines längsten Wortes definiert).

Wenn das positionierte Element in einem anderen einzelnen Rasterquadrat platziert wird (z.B. mit `position-area: top left`) oder so eingestellt ist, dass es über zwei oder mehr Rasterquadrate reicht (z.B. unter Verwendung von `position-area: bottom span-all`), richtet es sich mit dem angegebenen Rasterbereich aus, verhält sich jedoch so, als ob es eine {{cssxref("width")}} von `max-content` darauf eingestellt hat. Es wird entsprechend seiner umgebenden Blockgröße bemessen, was die Größe ist, die darauf angewendet wurde, als es auf `position: fixed` gesetzt wurde. Es wird sich so breit wie der Textinhalt ausdehnen, obwohl es auch durch den Rand des `<body>` begrenzt sein kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element angeheftet und relativ zu seinem zugehörigen Anker unter Verwendung der `position-area`-Eigenschaft positioniert.

#### HTML

Das HTML umfasst ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch einen Stilblock hinzu, der sichtbar sein wird. Alle Elemente sind so eingestellt, dass sie über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut direkt bearbeitet werden können.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: CHANGEME;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` zu einem Ankerelement mit der {{cssxref("anchor-name")}}-Eigenschaft. Dann assoziieren wir das absolut positionierte `<p>` damit, indem wir seinen {{cssxref("position-anchor")}}-Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area`-Wert auf `top center`. Dieser Wert wird auf einem `p`-Selektor gesetzt, sodass der Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat als jeder Wert, der dem `<style>`-Block `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Dadurch können Sie den anfänglichen `position-area`-Wert überschreiben, indem Sie einen `position-area`-Wert innerhalb des Stilblocks festlegen.

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

{{ EmbedLiveSample("Basisbeispiel", "100%", "360") }}

Versuchen Sie, die Menge des Textes im ankergesetzten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den ungültigen "CHANGEME"-Wert der `position-area`-Eigenschaft in einen gültigen Wert zu ändern.

### Vergleich der `position-area`-Werte

Diese Demo erstellt einen Anker und heftet ein positioniertes Element an diesen. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area`-Werte auszuwählen, die auf das positionierte Element angewendet werden sollen, um ihren Effekt zu sehen. Eine der Optionen löst ein Textfeld aus, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich gibt es ein Kontrollkästchen, das `writing-mode: vertical-lr` ein- und ausschaltet, sodass Sie beobachten können, wie sich die `position-area`-Werteffekte bei unterschiedlichen Schreibmodi unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, das wir damit verknüpfen werden. Wir haben das `contenteditable`-Attribut auf beiden eingefügt, damit sie direkt bearbeitet werden können.

Wir haben auch zwei Formulare eingefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)-Elemente für das Einstellen unterschiedlicher `position-area`-Werte und das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Element zum Ein- und Ausschalten des vertikalen {{cssxref("writing-mode")}} enthalten. Der Code dafür sowie der JavaScript wurden der Kürze halber ausgeblendet.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als Ankerelement, indem wir über die {{cssxref("anchor-name")}}-Eigenschaft einen Ankernamen darauf setzen.

Das positionierte Element wird dem Ankerelement zugeordnet, indem sein Ankername als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements festgelegt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dieser wird überschrieben, wenn neue Werte aus dem `<select>`-Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, damit, wenn dem positionierten Element ein `position-area`-Wert zugewiesen wird, der es über dem Anker platziert, Sie immer noch die Position der Elemente zueinander sehen können.

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

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um zu sehen, welche Auswirkungen sie auf die Position der Infobox haben. Wählen Sie den "Custom"-Wert aus und versuchen Sie, einige benutzerdefinierte `position-area`-Werte in das Texteingabefeld einzugeben, um deren Wirkung zu sehen. Fügen Sie Text zum Anker- und Anker-positionierten Element hinzu, um zu sehen, wie sich das Anker-positionierte Element abhängig vom `position-area`-Wert erweitert. Markieren Sie schließlich das Kontrollkästchen und experimentieren Sie dann mit verschiedenen `position-area`-Werten, um zu sehen, welche Ergebnisse bei unterschiedlichen Schreibmodi gleich bleiben und welche unterschiedlichen Ergebnisse liefern.

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
- [Fallback-Optionen und bedingtes Verstecken für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
