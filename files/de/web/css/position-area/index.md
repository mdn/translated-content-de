---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 9a23308bcdf92b9f10abbc5ecbed2343b9346dd4
---

{{CSSRef}}{{SeeCompatTable}}

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein Ankerelement relativ zu den Rändern seines assoziierten Ankerelementes zu positionieren, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3 Gitters gesetzt wird, wobei das Ankerelement die mittlere Zelle bildet.

`position-area` bietet eine bequeme Alternative zur Verankerung und Positionierung eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "inset-Eigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das gitterbasierte Konzept löst den üblichen Anwendungsfall der Positionierung der Ränder des umschließenden Blocks des positionierten Elements relativ zu den Rändern seines standardmäßigen Ankerelementes.

Wenn ein Element kein standardmäßiges Ankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` genannt und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für kurze Zeit unterstützt, um die Rückwärtskompatibilität zu gewährleisten.

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

  - : Gibt den Bereich des Positionierungsbereichsgitters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`

  - : Es wird kein Positionierungsbereich gesetzt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. `position-area` basiert auf dem Konzept eines 3x3 Gitters, das als **Positionierungsbereichsgitter** bezeichnet wird, wobei das Ankerelement die mittlere Kachel bildet:

![Das Positionierungsbereichsgitter, wie unten beschrieben](position-area.png)

Die Gitterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Diese haben auch [logische Äquivalente](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, sowie [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Diese haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end`, und Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umfassenden Block](/de/docs/Web/CSS/Containing_block) des Ankerelements definiert, während die Abmessungen des äußeren Rands des Gitters durch den umfassenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert setzt sich aus ein oder zwei Schlüsselwörtern zusammen, die den Bereich des Gitters definieren, in dem das positionierte Element platziert werden soll. Genauer gesagt, wird der umfassende Block des positionierten Elements auf den Gitterbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzelnen, spezifischen Gitterquadrat zu platzieren — zum Beispiel `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) wird das positionierte Element im oberen linken oder im unteren mittleren Quadrat platzieren.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, und setzt es zunächst in die Mitte, und der andere gibt die anderen Kacheln dieser Zeile oder Spalte an, die überspannt werden sollen. Zum Beispiel:
  - `top span-left` führt dazu, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und die mittleren und linken Kacheln dieser Zeile überspannt.
  - `block-end span-inline-end` führt dazu, dass das positionierte Element in der Mitte der Block-End-Zeile platziert wird und die mittleren und Inline-End-Kacheln dieser Zeile überspannt.
  - `bottom span-all` und `y-end span-all` führen dazu, dass das positionierte Element in der Mitte der unteren Zeile platziert wird und über drei Zellen überspannt, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Zeile.

Für detaillierte Informationen zu Ankereigenschaften, Verwendung und der `position-area` Eigenschaft, siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul Startseite und den [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, insbesondere den Abschnitt über [Festlegen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Anpassung des Standardverhaltens

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf ein positioniertes Element gesetzt wird, wird das Standardverhalten einiger seiner Eigenschaften angepasst, um eine gute Standardausrichtung zu bieten.

#### Selbst-Ausrichtungs-Eigenschaft `normal` Wert

Der `normal` Wert der Selbst-Ausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert eine Selbst-Ausrichtungseigenschaft standardmäßig annimmt, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert den mittleren Bereich auf einer Achse angibt, ist die Standardausrichtung auf dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil des vom `position-area` Wert spezifizierten Bereichs auf seiner Achse. Zum Beispiel, wenn der `position-area` Wert den Startbereich seiner Achse angibt, ist die Standardausrichtung auf dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, verursacht `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und die mittleren und Start-Kacheln dieser Zeile überspannt. In diesem Fall werden die Selbst-Ausrichtungseigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### Inset-Eigenschaften und Werte

Wenn ein Anker-Positioniertes Element unter Verwendung der `position-area` Eigenschaft positioniert wird, geben alle gesetzten {{Glossary("inset_properties", "Inset-Eigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Verschiebungen vom Positionierungsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), beziehen sich ebenfalls auf den Positionierungsbereich. Alle Inset-Eigenschaften, die gesetzt oder standardmäßig auf `auto` gesetzt sind, verhalten sich, als wäre ihr Wert auf `0` gesetzt.

### Eine Anmerkung zur Breite von positionierten Elementen

Wenn das positionierte Element keine spezifische Größe aufweist, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} gesetzt, aber sie wird auch von der Größe des Positionierungsbereichsgitters beeinflusst.

Wenn das positionierte Element in einer einzigen oberen Mitte, unteren Mitte oder mittleren Mitte-Zelle platziert wird, entspricht seine Blockgröße der Größe des Anker-umfassenden Blocks und wächst nach oben, unten oder in beide Richtungen. Das positionierte Element wird sich mit dem angegebenen Gitterquadrat ausrichten, aber dieselbe Breite wie das Ankerelement annehmen. Es wird jedoch nicht zulassen, dass sein Inhalt überläuft — seine minimale `width` wird sein `min-content` (wie durch die Breite seines längsten Wortes definiert) sein.

Wenn das positionierte Element in einem anderen einzelnen Gitterquadrat platziert wird (sagen wir mit `position-area: top left`) oder so eingestellt ist, dass es zwei oder mehr Gitterquadrate überspannt (zum Beispiel mit `position-area: bottom span-all`), wird es sich mit dem spezifizierten Gitterbereich ausrichten, aber sich verhalten, als hätte es eine {{cssxref("width")}} von `max-content` gesetzt. Es wird entsprechend der Größe seines umfassenden Blocks bemessen, die Größe, die ihm auferlegt wurde, als es auf `position: fixed` gesetzt wurde. Es wird sich verbreitern, soweit es der Textinhalt erlaubt, obwohl es auch durch den Rand des `<body>` begrenzt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element an sein zugehöriges Ankerelement gebunden und relativ positioniert, indem die `position-area` Eigenschaft verwendet wird.

#### HTML

Das HTML beinhaltet ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch einen Stilblock hinzu, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut direkt bearbeitbar.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: CHANGEME;
  }
</style>
```

#### CSS

Wir wandeln das `<div>` in ein Ankerelement um, indem wir die {{cssxref("anchor-name")}} Eigenschaft darauf anwenden. Dann assoziieren wir das absolut positionierte `<p>` damit, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area` Wert auf `top center`. Dieser Wert wird auf einem `p` Selektor gesetzt, daher hat der Wert weniger [Spezifität](/de/docs/Web/CSS/Specificity) als jeder Wert, der dem `<style>` Block's `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Dadurch können Sie den anfänglichen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

Versuchen Sie, die Textmenge in dem Anker-Positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch den ungültigen "CHANGEME" Wert der `position-area` Eigenschaft in einen gültigen Wert zu ändern.

### `position-area` Wertvergleich

Dieses Demo erstellt einen Anker und bindet ein positioniertes Element daran. Es bietet auch ein Dropdown-Menü, das Ihnen ermöglicht, verschiedene `position-area` Werte auszuwählen, um ihre Wirkung zu sehen. Eine der Optionen verursacht, dass ein Textfeld erscheint, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, so dass Sie beobachten können, wie sich die `position-area` Werte über verschiedene Schreibrichtungen hinweg unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse `anchor` und eines mit einer Klasse `infobox`. Diese sind dafür gedacht, das Ankerelement und das positionierte Element darzustellen, das wir damit assoziieren werden. Wir haben das `contenteditable` Attribut auf beiden aufgenommen, was sie direkt bearbeitbar macht.

Wir haben auch zwei Formulare aufgenommen, die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) Elemente zum Setzen verschiedener `position-area` Werte, und das [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) Element zum Umschalten der vertikalen {{cssxref("writing-mode")}} ein- und ausschalten. Der Code dafür sowie der JavaScript Code wurden der Kürze halber versteckt.

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

Das positionierte Element wird mit dem Ankerelement assoziiert, indem sein Ankername als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü gewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, so dass, wenn das positionierte Element einen `position-area` Wert bekommt, der es über dem Anker platziert, Sie die Position der Elemente relativ zueinander immer noch sehen können.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü zu wählen, um ihre Wirkung auf die Position der Infobox zu sehen. Wählen Sie den "Custom"-Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Textfeld einzugeben, um ihre Wirkung zu sehen. Fügen Sie Text zu den Anker- und Anker-positionierten Elementen hinzu, um zu sehen, wie das Anker-positionierte Element basierend auf dem `position-area` Wert wächst. Überprüfen Sie schließlich das Kontrollkästchen und experimentieren Sie dann mit verschiedenen `position-area` Werten, um zu sehen, welche in verschiedenen Schreibrichtungen dasselbe Ergebnis liefern und welche unterschiedliche Ergebnisse erzielen.

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
- [Umgang mit Überlauf: Versuchen Sie, Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
