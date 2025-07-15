---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Anker-Positionierten Element, relativ zu den Kanten seines zugeordneten Ankerelements positioniert zu werden, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3 Gitters gesetzt wird, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine komfortable Alternative zum Anheften und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Einsetzeigenschaften")}} und die {{cssxref("anchor()")}}-Funktion. Das auf einem Gitter basierende Konzept löst den häufigen Anwendungsfall, die Kanten des umgebenden Blocks des positionierten Elements relativ zu den Kanten seines standardmäßigen Ankerelements zu positionieren.

Falls ein Element kein standardmäßiges Ankerelement hat oder nicht absolut positioniert ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` mit denselben Eigenschaftswerten benannt und unterstützt. Beide Eigenschaftsnamen werden für kurze Zeit unterstützt, um die Rückwärtskompatibilität zu gewährleisten.

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

Der Eigenschaftswert besteht aus zwei `<position-area>` Schlüsselwörtern oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselwort angegeben wird, wird das zweite Schlüsselwort impliziert.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)
  - : Gibt den Bereich des Positionsbereichs-Gitters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Kein Positionsbereich ist festgelegt.

## Beschreibung

Die `position-area`-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion für das Positionieren von Elementen relativ zu Ankern. `position-area` basiert auf dem Konzept eines 3x3-Gitters von Kacheln, genannt **position-area Gitter**, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area Gitter, wie unten beschrieben](position-area.png)

Die Gitterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, und [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end`, und Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Abmessungen der äußeren Kante des Gitters durch den umgebenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Gitters definieren, in dem das positionierte Element platziert werden soll. Genauer gesagt wird der umgebende Block des positionierten Elements auf den Gitterbereich gesetzt.

Zum Beispiel:

- Sie können einen Reihenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzelnen, spezifischen Gitterquadrat zu platzieren — zum Beispiel werden `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) das positionierte Element im oberen linken oder unteren mittleren Quadrat platzieren.
- Sie können einen Reihen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert wird, und die andere gibt die anderen Kacheln der Reihe oder Spalte an, die überspannt werden sollen. Beispielsweise:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Reihe platziert wird und sich über die Mitte und die linken Kacheln dieser Reihe erstreckt.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Blockendreihe platziert wird und sich über die Mitte und die Inline-Endkacheln dieser Reihe erstreckt.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Reihe platziert wird und sich über drei Zellen erstreckt, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Reihe.

Für detaillierte Informationen zu Ankermerkmalen, zur Verwendung und zur `position-area`-Eigenschaft siehe die [CSS-Ankerpositionierungs-](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Anleitung zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using), insbesondere den Abschnitt über das [Festlegen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasste Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf einem positionierten Element gesetzt wird, werden einige seiner Eigenschaften ihr Standardverhalten anpassen, um eine gute Standardausrichtung zu bieten.

#### `normal` Wert der Selbstausrichtungseigenschaft

Der `normal` Wert der Selbstausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end`, oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welchen Wert eine Selbstausrichtungseigenschaft standardmäßig annimmt, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert die mittlere Region auf einer Achse angibt, ist die Standardausrichtung auf dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten entgegengesetzt zur Region, die durch die `position-area` Eigenschaft spezifiziert wird. Zum Beispiel, wenn der `position-area` Wert die Startregion seiner Achse angibt, ist die Standardausrichtung auf dieser Achse `end`.

Zum Beispiel, wenn der `Schreibmodus` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Reihe platziert wird und sich über die Mitte und die Startkacheln dieser Reihe erstreckt. In diesem Fall werden die Selbstausrichtungseigenschaften auf `align-self: end` und `justify-self: anchor-center` voreingestellt.

#### Einsetzeigenschaften und Werte

Wenn ein Anker-Positioniertes Element mit der `position-area` Eigenschaft positioniert wird, geben alle gesetzten {{Glossary("inset_properties", "Einsetzeigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Offsets vom Positionsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), werden ebenfalls relativ zum Positionsbereich definiert. Alle Einsetzeigenschaften, die auf `auto` gesetzt oder standardmäßig auf `auto` sind, verhalten sich so, als wäre ihr Wert auf `0` gesetzt.

### Ein Exkurs zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe festgelegt hat, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} gesetzt, und es wird auch von der Größe des position-area Gitters beeinflusst.

Wenn das positionierte Element in einer einzigen Zelle in der oberen Mitte, unteren Mitte oder mittleren Mitte platziert wird, entspricht seine Blockgröße der Anker-Block-Größe, die nach oben, unten oder in beide Richtungen wächst. Das positionierte Element wird mit der angegebenen Gitterzelle ausgerichtet, aber übernimmt die gleiche Breite wie das Ankerelement. Es wird jedoch nicht zulassen, dass sein Inhalt überläuft — seine minimale `Breite` wird seine `min-content` sein (wie durch die Breite seines längsten Wortes definiert).

Wenn das positionierte Element in einer anderen einzelnen Gitterzelle (zum Beispiel mit `position-area: top left`) oder so eingestellt ist, dass es sich über zwei oder mehr Gitterzellen erstreckt (beispielsweise unter Verwendung von `position-area: bottom span-all`), wird es mit dem angegebenen Gitterbereich ausgerichtet, aber es verhält sich, als ob es eine {{cssxref("width")}} von `max-content` hätte. Es wird nach der Größe seines umgebenden Blocks bemessen, die ihm auferlegt wurde, als es auf `position: fixed` gesetzt wurde. Es wird sich so weit wie möglich strecken, um den Textinhalt aufzunehmen, obwohl es auch durch die Kante des `<body>` eingeschränkt sein kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel ist ein positioniertes Element auf seinem zugeordneten Anker mit der `position-area` Eigenschaft verankert und positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch einen Stilblock hinzu, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut direkt bearbeitbar.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir wandeln das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft um. Wir ordnen dann das absolut positionierte `<p>` diesem zu, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area` Wert auf `top center`. Dieser Wert wird auf einem `p` Selektor gesetzt, sodass der Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat als jeder Wert, der dem `<style>` Block `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Als Ergebnis können Sie den anfänglichen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

Versuchen Sie, die Menge an Text im Anker-Positionierten Element zu ändern, um zu sehen, wie es wächst. Ändern Sie auch den Wert der `position-area` Eigenschaft in etwas anderes, wie `center`.

### `position-area` Wertvergleich

Dieses Demo erstellt einen Anker und verbindet ein positioniertes Element damit. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area` Werte auf das positionierte Element anzuwenden, um deren Effekt zu sehen. Eine der Optionen bewirkt, dass ein Textfeld erscheint, welches es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, sodass Sie beobachten können, wie sich `position-area` Werteffekte je nach Schreibmodus unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, die wir miteinander verbinden werden. Wir haben das `contenteditable` Attribut auf beiden gesetzt, sodass sie direkt bearbeitbar sind.

Wir haben auch zwei Formulare eingeschlossen, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)-Elemente für das Setzen verschiedener `position-area` Werte und das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} enthalten. Der Code für diese sowie für das JavaScript wurde aus Gründen der Kürze ausgeblendet.

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

Das positionierte Element wird mit dem Ankerelement verbunden, indem sein Ankername als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; diese wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass Sie, wenn das positionierte Element einen `position-area` Wert erhält, der es über dem Anker platziert, die Position der Elemente zueinander immer noch sehen können.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um die Auswirkung auf die Position der Infobox zu sehen. Wählen Sie den „Custom“-Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Wirkung zu sehen. Fügen Sie dem Anker und den Ankerpositionierten Elementen Text hinzu, um zu sehen, wie das Ankerpositionierte Element basierend auf dem `position-area` Wert wächst. Aktivieren Sie schließlich das Kontrollkästchen und experimentieren Sie mit verschiedenen `position-area` Werten, um zu sehen, welche denselben Effekt in verschiedenen Schreibmodi haben und welche unterschiedliche Ergebnisse liefern.

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
- [Anleitung zur Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
