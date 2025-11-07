---
title: position-area
slug: Web/CSS/Reference/Properties/position-area
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem verankerten Element, relativ zu den Rändern seines zugehörigen Ankerelements positioniert zu werden, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3 Rasters gesetzt wird, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine bequeme Alternative zum Verankern und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Einfügeigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das auf Rastern basierende Konzept löst den häufigen Anwendungsfall, die Ränder des blockumfassenden positionierten Elements relativ zu den Rändern seines Standardanker-Elements zu positionieren.

Wenn ein Element kein Standardanker-Element hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit unterstützt, um die Rückwärtskompatibilität zu gewährleisten.

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
position-area: center self-y-end;

/* Two <position-area> keywords spanning two tiles */
position-area: top span-left;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* Two <position-area> keywords spanning three tiles */
position-area: top span-all;
position-area: block-end span-all;
position-area: self-x-start span-all;

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

Der Eigenschaftswert besteht aus zwei `<position-area>` Schlüsselbegriffen oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff angegeben ist, wird der zweite Schlüsselbegriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)
  - : Gibt den Bereich des Positionierungsrasterfelds an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Es wird kein Positionierungsbereich festgelegt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. `position-area` basiert auf dem Konzept eines 3x3-Rasters von Kacheln, genannt das **Positionierungsrasterfeld**, wobei das Ankerelement die mittlere Kachel ist:

![Das Positionierungsraster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln werden in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die [physischen Werte](/de/docs/Web/CSS/Reference/Values/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/Reference/Values/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end` sowie [Koordinaten-Entsprechungen](/de/docs/Web/CSS/Reference/Values/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinaten-Entsprechungen — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umfassenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Abmessungen des äußeren Rands des Rasters durch den umfassenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in dem das positionierte Element platziert werden soll. Genauer gesagt, wird der umfassende Block des positionierten Elements auf den Rasterbereich gesetzt.

Zum Beispiel:

- Sie können einen Reihenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzigen, spezifischen Rasterquadrat zu platzieren — zum Beispiel, `top left` (logische Entsprechung `start start`) oder `bottom center` (logische Entsprechung `end center`) platziert das positionierte Element im oberen linken oder unteren mittleren Quadrat.
- Sie können einen Reihen- oder Spaltenwert zusammen mit einem `span-*` Wert angeben, um zwei oder drei Zellen zu überbrücken. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, wobei es zunächst in der Mitte platziert wird, und der andere Wert gibt die anderen Kacheln dieser Reihe oder Spalte an, die überbrückt werden sollen. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der obersten Reihe platziert wird und über die mittlere und linke Kachel dieser Reihe reicht.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Blockendreihe platziert wird und über die mittlere und inline end Kachel dieser Reihe reicht.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Reihe platziert wird und über drei Zellen reicht, in diesem Fall die linke, mittlere und rechte Kachel der unteren Reihe.

Für detaillierte Informationen zu Anker-Funktionen, Nutzung und der `position-area` Eigenschaft, siehe das [CSS Anker-Positionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, speziell den Abschnitt über [Einstellung einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert auf einem positionierten Element gesetzt ist, werden einige seiner Eigenschaften ihr Standardverhalten angepasst, um eine gute Standardausrichtung zu bieten.

#### Selbst-Ausrichtungs Eigenschaft `normal` Wert

Der `normal` Wert der Selbst-Ausrichtungs-Eigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert eine Selbst-Ausrichtungs-Eigenschaft standardmäßig annimmt, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert die mittlere Region in einer Achse angibt, ist die standardmäßige Ausrichtung in dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil der durch die `position-area` Eigenschaft angegebenen Region. Zum Beispiel, wenn der `position-area` Wert die Startregion seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Reihe platziert wird und über die mittlere und start Kachel dieser Reihe reicht. In diesem Fall werden die Selbst-Ausrichtungs-Eigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### Einfügeigenschaften und Werte

Wenn ein verankertes Element unter Verwendung der `position-area` Eigenschaft positioniert wird, geben alle {{Glossary("inset_properties", "Einfügeigenschaften")}}, die gesetzt sind, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Abstände vom Positionierungsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/Reference/Properties/max-block-size), werden ebenfalls relativ zum Positionierungsbereich sein. Alle Einfügeigenschaften, die auf `auto` gesetzt sind oder standardmäßig darauf gesetzt werden, verhalten sich, als ob ihr Wert auf `0` gesetzt wäre.

### Eine Randbemerkung zur Breite positionierter Elemente

Wenn dem positionierten Element keine spezifische Größe zugewiesen ist, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} gesetzt, aber sie wird auch durch die Größe des Positionierungsrasterfelds beeinflusst.

Wenn das positionierte Element in einer einzigen oberen Mitte, unteren Mitte oder mittleren Zelle platziert wird, wird seine Blockgröße dieselbe sein wie die des Ankers umfassenden Blockgröße, wobei es nach oben, unten oder in beide Richtungen wächst. Das positionierte Element wird sich mit dem angegebenen Rasterquadrat ausrichten, aber dieselbe Breite wie das Ankerelement übernehmen. Es lässt jedoch nicht zu, dass sein Inhalt überläuft — seine minimale `width` wird ihr `min-content` sein (wie definiert durch die Breite seines längsten Wortes).

Wenn das positionierte Element in einem anderen einzelnen Rasterquadrat platziert wird (sagen wir mit `position-area: top left`) oder darauf eingestellt ist, über zwei oder mehr Rasterquadrat zu spannen (zum Beispiel mit `position-area: bottom span-all`), wird es sich mit dem angegebenen Rasterbereich ausrichten, jedoch verhalten, als ob es eine {{cssxref("width")}} von `max-content` darauf gesetzt hätte. Es wird entsprechend seiner umfassenden Blockgröße bemessen, die die Größe ist, die ihm zugewiesen wurde, als es auf `position: fixed` gesetzt wurde. Es wird sich so weit wie der Textinhalt strecken, obwohl es auch vom Rand des `<body>` eingeschränkt werden könnte.

### Verwendung von `position-area` zur Positionierung von Popovers

Bei der Verwendung von `position-area` zur Positionierung von [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover), beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der Position, die Sie erreichen möchten, in Konflikt geraten können. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.my-popover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [überlegt, wie man vermeiden kann, dass dieser Workaround erforderlich ist](https://github.com/w3c/csswg-drafts/issues/10258).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel wird ein positioniertes Element verankert und relativ zu seinem zugehörigen Anker mit der `position-area` Eigenschaft positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch einen Stilblock ein, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut direkt editierbar.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` zu einem Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Wir assoziieren dann das absolut positionierte `<p>` damit, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den initialen `position-area` Wert auf `top center`. Dieser Wert wird auf einen `p` Selektor gesetzt, wodurch der Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat als jeder Wert, der dem `<style>` Block's `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) hinzugefügt wird. Dadurch können Sie den initialen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

Versuchen Sie, die Menge des Textes im Anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den Wert der `position-area` Eigenschaft in etwas anderes zu ändern, wie `center`.

### Vergleich von `position-area` Werten

Dieses Demo erstellt einen Anker und verankert ein positioniertes Element daran. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area` Werte auszuwählen, die auf das positionierte Element angewendet werden sollen, um deren Effekt zu sehen. Eine der Optionen führt dazu, dass ein Textfeld erscheint, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, damit Sie sehen können, wie sich die Auswirkungen von `position-area` Werten bei verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als das Ankerelement und das positionierte Element gedacht, die wir jeweils miteinander assoziieren werden. Wir haben das `contenteditable` Attribut auf beiden eingeschlossen, wodurch sie direkt editierbar sind.

Wir haben auch zwei Formulare eingefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente zum Setzen verschiedener `position-area` Werte enthalten, sowie das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} ein und aus. Der Code dafür sowie das JavaScript wurden aus Gründen der Kürze verborgen.

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

Das positionierte Element wird dem Ankerelement zugeordnet, indem dessen Ankername als Wert der `position-anchor` Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine initiale Position mit `position-area: top left`; diese wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass, wenn das positionierte Element einen `position-area` Wert hat, der es über dem Anker platziert, Sie immer noch die Position der Elemente relativ zueinander sehen können.

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

Das Ergebnis sieht folgendermaßen aus:

{{ EmbedLiveSample("`position-area` Wertvergleich", "100%", "360") }}

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um deren Einfluss auf die Position der Infobox zu sehen. Wählen Sie den "Benutzerdefiniert"-Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Effekt zu sehen. Fügen Sie Text zum Anker und den Anker positionierten Elementen hinzu, um zu sehen, wie das Anker positionierte Element basierend auf dem `position-area` Wert wächst. Schließlich, markieren Sie das Kontrollkästchen und experimentieren Sie mit verschiedenen `position-area` Werten, um zu sehen, welche dieselben Ergebnisse bei verschiedenen Schreibmodi liefern und welche unterschiedliche Ergebnisse liefern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try-fallbacks")}}
- Die [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor) Funktion
- Der [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert
- [Verwendung der CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
