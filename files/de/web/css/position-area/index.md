---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem verankerten Positionselement, relativ zu den Kanten seines zugeordneten Ankerelements positioniert zu werden, indem das positionierte Element auf einer oder mehreren Fliesen eines impliziten 3x3-Rasters platziert wird, bei dem das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine bequeme Alternative zum Verknüpfen und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Einfügeeigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das grid-basierte Konzept löst den häufigen Anwendungsfall, die Kanten des enthaltenden Blocks des positionierten Elements relativ zu den Kanten seines Standard-Ankerelements zu positionieren.

Wenn ein Element kein Standard-Ankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` mit denselben Eigenschaftswerten benannt und unterstützt. Beide Eigenschaftsnamen werden eine Zeit lang unterstützt, um die Abwärtskompatibilität zu gewährleisten.

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

  - : Gibt den Bereich des Positionierungsrasters an, in dem die ausgewählten positionierten Elemente platziert werden sollen.

- `none`

  - : Es wird kein Positionierungsbereich festgelegt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. `position-area` basiert auf dem Konzept eines 3x3 Fliesenrasters, das als **Positionierungsraster** bezeichnet wird, wobei das Ankerelement die mittlere Fliese ist:

![Das Positionierungsraster, wie unten beschrieben](position-area.png)

Die Rasterfliesen sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, und [Koordinaten-Äquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end`, und Koordinaten-Äquivalente — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Fliese werden durch den [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Abmessungen der äußeren Kante des Rasters durch den enthaltenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die die Region des Rasters definieren, in der das positionierte Element platziert werden soll. Genauer gesagt, wird der enthaltende Block des positionierten Elements auf den Rasterbereich gesetzt.

Zum Beispiel:

- Sie können einen Reihen- und einen Spaltenwert angeben, um das positionierte Element in einem einzigen, bestimmten Rasterquadrat zu platzieren — zum Beispiel wird `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) das positionierte Element in das obere linke oder untere mittlere Quadrat platzieren.
- Sie können einen Reihen- oder Spaltenwert plus einen `span-*` Wert angeben, um über zwei oder drei Zellen zu spannen. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, und platziert es zunächst in der Mitte, während der andere die anderen Zellen dieser Reihe oder Spalte angibt, über die es spannt. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Reihe platziert wird und über die mittleren und linken Zellen dieser Reihe spannt.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Block-Ende-Reihe platziert wird und über die mittleren und Inline-Ende-Zellen dieser Reihe spannt.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Reihe platziert wird und über drei Zellen, in diesem Fall die linken, mittleren und rechten Zellen der unteren Reihe, spannt.

Für detaillierte Informationen zu Ankerfunktionen, Verwendung und der `position-area` Eigenschaft, siehe das [CSS Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul Hauptseite und den [Leitfaden zur Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using), speziell den Abschnitt über das [Setzen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf ein positioniertes Element gesetzt wird, werden einige seiner Eigenschaften ihr Standardverhalten angepasst, um eine gute Standardausrichtung zu bieten.

#### Normalwert der Selbst-Ausrichtungseigenschaft

Der `normal` Wert der Selbst-Ausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end`, oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert eine Selbst-Ausrichtungseigenschaft standardmäßig hat, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert den mittleren Bereich in einer Achse angibt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil des Bereichs, der durch die `position-area` Eigenschaft angegeben wird. Zum Beispiel, wenn der `position-area` Wert den Startbereich seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Reihe platziert wird und über die mittleren und Start-Zellen dieser Reihe spannt. In diesem Fall werden die Selbst-Ausrichtungseigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### Einfügeeigenschaften und Werte

Wenn ein Anker-positioniertes Element mit der `position-area` Eigenschaft positioniert wird, geben alle gesetzten {{Glossary("inset_properties", "Einfügeeigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Offsets vom position-area an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), werden ebenfalls relativ zum position-area sein. Alle Einfügeeigenschaften, die gesetzt sind oder standardmäßig auf `auto` stehen, werden sich verhalten, als ob ihr Wert auf `0` gesetzt wurde.

### Ein Exkurs über die Breite von positionierten Elementen

Wenn das positionierte Element keine spezifische Größe eingestellt hat, wird seine Größe auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} standardmäßig gesetzt, aber auch von der Größe des position-area Rasters beeinflusst.

Wenn das positionierte Element in einer einzigen oberen Mitte, unteren Mitte oder mittigen mittleren Zelle platziert wird, wird seine Blockgröße gleich der enthaltenden Blockgröße des Ankerelements sein und sich nach oben, unten oder in beide Richtungen ausdehnen. Das positionierte Element wird sich mit dem angegebenen Rasterquadrat ausrichten, übernimmt aber dieselbe Breite wie das Ankerelement. Es wird jedoch nicht zulassen, dass sein Inhalt überläuft — seine minimale `width` wird sein `min-content` (definiert durch die Breite seines längsten Wortes) sein.

Wenn das positionierte Element in irgendeinem anderen einzelnen Rasterquadrat platziert wird (z.B. mit `position-area: top left`) oder so eingestellt ist, dass es zwei oder mehr Rasterquadrate überspannt (zum Beispiel mit `position-area: bottom span-all`), wird es sich mit dem angegebenen Rasterbereich ausrichten, sich aber so verhalten, als ob es eine {{cssxref("width")}} von `max-content` auf sich gesetzt hätte. Es wird gemäß seiner enthaltenden Blockgröße dimensioniert, die die Größe ist, die auf es auferlegt wurde, als es auf `position: fixed` gesetzt wurde. Es wird sich so weit wie der Textinhalt strecken, obwohl es auch durch die Kante des `<body>` eingeschränkt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel ist ein positioniertes Element mit seinem zugeordneten Anker über die `position-area` Eigenschaft verknüpft und positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zu dem `<div>` positioniert. Wir fügen auch einen Stilblock ein, der sichtbar gemacht wird. Alle Elemente werden über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut direkt editierbar gemacht.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: CHANGEME;
  }
</style>
```

#### CSS

Wir verwandeln das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Dann verknüpfen wir das absolut positionierte `<p>` damit, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den initialen `position-area` Wert auf `top center`. Dieser Wert wird auf einen `p` Selektor gesetzt, daher hat der Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) als jeder Wert, der zum `<style>` Blockes `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Dadurch können Sie den initialen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

Versuchen Sie, die Menge an Text im Anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den ungültigen "CHANGEME" Wert der `position-area` Eigenschaft auf einen gültigen Wert zu ändern.

### `position-area` Wertvergleich

Dieses Demo erstellt einen Anker und verbindet ein positioniertes Element damit. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area` Werte auszuwählen, die auf das positionierte Element angewendet werden, um deren Wirkung zu sehen. Eine der Optionen bewirkt, dass ein Textfeld erscheint, in dem Sie einen benutzerdefinierten Wert eingeben können. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, sodass Sie beobachten können, wie sich die `position-area` Werteffekte je nach Schreibmodus unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Diese sind als das Ankerelement und das positionierte Element gedacht, die wir damit verknüpfen werden. Wir haben auch das `contenteditable` Attribut auf beiden eingefügt, was sie direkt editierbar macht.

Wir haben auch zwei Formulare eingefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente zum Setzen verschiedener `position-area` Werte enthalten, und das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} ein- und auszuschalten. Der Code für diese, zusammen mit dem JavaScript, wurde aus Gründen der Kürze verborgen.

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

Das positionierte Element wird dem Ankerelement zugeordnet, indem sein Ankername als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü gewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, damit, wenn das positionierte Element einen `position-area` Wert erhält, der es über dem Anker platziert, Sie immer noch die Position der Elemente relativ zueinander sehen können.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um die Auswirkungen auf die Position der Infobox zu sehen. Wählen Sie den "Custom" Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Auswirkungen zu sehen. Fügen Sie Text zu den Anker- und Anker-positionierten Elementen hinzu, um zu sehen, wie das Anker-positionierte Element basierend auf dem `position-area` Wert wächst. Aktivieren Sie schließlich das Kontrollkästchen und experimentieren Sie dann mit verschiedenen `position-area` Werten, um zu sehen, welche in verschiedenen Schreibmodi dasselbe Ergebnis liefern und welche unterschiedliche Ergebnisse liefern.

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
- [Leitfaden zur Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Leitfaden zu Fallback-Optionen und bedingtem Verstecken bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
