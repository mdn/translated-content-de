---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: f5fd4776d1c0cd6e4cffc9649f7c4f44badb7ae2
---

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht einem verankerten Element, relativ zu den Rändern des zugehörigen Ankerelements positioniert zu werden, indem das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3-Rasters platziert wird, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine praktische Alternative zum Anbinden und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Einpassungseigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das rasterbasierte Konzept löst den allgemeinen Anwendungsfall der Positionierung der Ränder des umschließenden Blocks des positionierten Elements relativ zu den Rändern seines Standardankerelements.

Hat ein Element kein Standardankerelement oder ist es kein absolut positioniertes Element, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` benannt und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit aus Gründen der Abwärtskompatibilität unterstützt.

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
  - : Gibt den Bereich des Positionierungsrasters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Kein Positionierungsbereich ist gesetzt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion zum Positionieren von Elementen relativ zu Ankern. `position-area` arbeitet mit dem Konzept eines 3x3 Kachelraster, das als **position-area raster** bezeichnet wird, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, sowie [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end` und Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umschließenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Abmessungen des äußeren Rands des Rasters durch den umschließenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in dem das positionierte Element platziert werden soll. Genau gesagt, der umschließende Block des positionierten Elements wird auf den Rasterbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einer einzigen, spezifischen Rasterzelle zu platzieren — beispielsweise `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element in der oberen linken oder unteren mittleren Zelle.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, zunächst in der Mitte, und der andere gibt die anderen Kacheln dieser Zeile oder Spalte an, die überspannt werden sollen. Beispielsweise:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die mittlere und linke Kachel dieser Zeile erstreckt wird.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Block-End-Zeile platziert und über die mittlere und Inline-End-Kachel dieser Zeile erstreckt wird.
  - `bottom span-all` and `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Zeile platziert und über drei Zellen erstreckt wird, in diesem Fall die linke, mittlere und rechte Kachel der unteren Zeile.

Für detaillierte Informationen zu Ankerfunktionen, Verwendung und der `position-area` Eigenschaft siehe die [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und die [Verwenden der CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung, insbesondere den Abschnitt zum [Setzen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf ein positioniertes Element angewendet wird, werden einige seiner Eigenschaften ihr Standardverhalten anpassen, um eine gute Standardausrichtung zu bieten.

#### Selbstausrichtungseigenschaft `normal` Wert

Der `normal` Wert der Selbstausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder wie `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welchen Wert eine Selbstausrichtungseigenschaft standardmäßig annimmt, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert das mittlere Gebiet in einer Achse angibt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil des Bereichs, der durch die `position-area` Eigenschaft angegeben wird. Wenn zum Beispiel der `position-area` Wert das Startgebiet seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die mittlere und Startkachel dieser Zeile erstreckt wird. In diesem Fall werden die Selbstausrichtungseigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### Einpassungseigenschaften und Werte

Wenn ein Anker-positioniertes Element unter Verwendung der `position-area` Eigenschaft positioniert wird, spezifizieren alle festgelegten {{Glossary("inset_properties", "Einpassungseigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Offsets von der position-area. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), werden ebenfalls relativ zur position-area sein. Alle Einpassungseigenschaften, die auf `auto` gesetzt oder standardmäßig auf `auto` sind, verhalten sich, als ob ihr Wert auf `0` gesetzt wurde.

### Eine Anmerkung zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} gesetzt, aber es wird auch durch die Größe des position-area Rasters beeinflusst.

Wenn das positionierte Element in einer einzigen oberen mittleren, unteren mittleren oder mittleren mittleren Zelle platziert wird, entspricht seine Blockgröße der Blockgröße des Ankers. Das positionierte Element wird mit dem angegebenen Rasterbereich ausgerichtet, aber die gleiche Breite wie das Ankerelement übernehmen. Es wird jedoch nicht zulassen, dass sein Inhalt überläuft — seine minimale `width` wird seine `min-content` (wie durch die Breite seines längsten Wortes definiert) sein.

Wenn das positionierte Element in einer anderen einzelnen Rasterzelle platziert wird (sagen wir mit `position-area: top left`) oder so eingestellt wird, dass es zwei oder mehr Rasterzellen überspannt (zum Beispiel mit `position-area: bottom span-all`), wird es mit dem angegebenen Rasterbereich ausgerichtet, sich aber so verhalten, als hätte es eine {{cssxref("width")}} von `max-content` darauf gesetzt. Es wird gemäß seiner umschließenden Blockgröße dimensioniert, die die Größe ist, die ihm zugewiesen wurde, als es auf `position: fixed` gesetzt wurde. Es wird sich so weit wie der Textinhalt strecken, obwohl es auch durch den Rand des `<body>` eingeschränkt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element relativ zu seinem zugehörigen Anker unter Verwendung der `position-area` Eigenschaft verankert und positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch einen Stilblock hinzu, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut direkt bearbeitbar eingestellt.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir wandeln das `<div>` in ein Ankerelement um, indem wir die {{cssxref("anchor-name")}} Eigenschaft darauf setzen. Dann assoziieren wir das absolut positionierte `<p>` damit, indem wir seinen Wert von {{cssxref("position-anchor")}} auf denselben Ankernamen setzen.

Wir setzen den initialen `position-area` Wert auf `top center`. Dieser Wert wird auf einen `p` Selektor gesetzt, sodass der Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) als jeder Wert hat, der dem `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) im `<style>` Block hinzugefügt wird. Dadurch können Sie den initialen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks festlegen.

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

Versuchen Sie, die Menge des Textes im Anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Probieren Sie auch aus, den Wert der `position-area` Eigenschaft auf etwas anderes zu ändern, wie `center`.

### `position-area` Wertevergleich

Diese Demo erstellt einen Anker und koppelt ein positioniertes Element daran. Sie bietet auch ein Dropdown-Menü, mit dem Sie verschiedene `position-area` Werte auswählen können, die auf das positionierte Element angewendet werden, um deren Effekt zu sehen. Eine der Optionen bewirkt, dass ein Textfeld erscheint, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um das `writing-mode: vertical-lr` Ein- und Ausschalten zu erlauben, damit Sie beobachten können, wie sich `position-area` Werteffekte in verschiedenen Schreibrichtungen unterscheiden.

#### HTML

Im HTML geben wir zwei {{htmlelement("div")}} Elemente an, eines mit einer Klasse `anchor` und eines mit einer Klasse `infobox`. Diese sind als das Ankerelement und das positionierte Element gedacht, die wir jeweils verknüpfen werden. Wir haben das `contenteditable` Attribut auf beiden eingefügt, um sie direkt bearbeitbar zu machen.

Wir haben auch zwei Formulare eingefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente für das Setzen verschiedener `position-area` Werte und das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element für das Ein- und Ausschalten des vertikalen {{cssxref("writing-mode")}} enthalten. Der Code dafür, zusammen mit dem JavaScript, wurde der Kürze halber ausgeblendet.

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

Im CSS erklären wir zuerst das `anchor` `<div>` als ein Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen.

Das positionierte Element wird mit dem Ankerelement verknüpft, indem sein Ankername als der Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass, wenn dem positionierten Element ein `position-area` Wert gegeben wird, der es über dem Anker platziert, Sie trotzdem die Position der Elemente zueinander sehen können.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um den Effekt auf die Position der Infobox zu sehen. Wählen Sie den "Custom" Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Effekt zu sehen. Fügen Sie Text zu den Anker- und den Anker-positionierten Elementen hinzu, um zu sehen, wie das Anker-positionierte Element basierend auf dem `position-area` Wert wächst. Schließlich aktivieren Sie das Kontrollkästchen und experimentieren mit verschiedenen `position-area` Werten, um zu sehen, welche gleiches Ergebnis in verschiedenen Schreibrichtungen liefern und welche unterschiedliche Ergebnisse geben.

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
- [Verwenden der CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
- [Fallback-Optionen und bedingtes Verstecken bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Anleitung
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
