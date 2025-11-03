---
title: position-area
slug: Web/CSS/Reference/Properties/position-area
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Anker-Positionierten Element, relativ zu den Rändern seines zugehörigen Ankerelements positioniert zu werden, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3-Rasters gelegt wird, wobei das Ankerelement die mittlere Zelle bildet.

`position-area` bietet eine bequeme Alternative zur Verankerung und Positionierung eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Einsetzeigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das auf einem Raster basierende Konzept löst den häufigen Anwendungsfall der Anordnung der Ränder des enthaltenen Blocks des positionierten Elements relativ zu den Rändern seines Standard-Ankerelements.

Wenn ein Element kein Standard-Ankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` benannt und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für kurze Zeit unterstützt, um die Abwärtskompatibilität zu gewährleisten.

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

Der Eigenschaftswert ist zwei `<position-area>` Schlüsselbegriffe oder das Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff angegeben wird, wird der zweite implizit.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)
  - : Gibt den Bereich des Positionierungs-Rasters an, in dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Es wird kein Positionierungsbereich festgelegt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion zur Positionierung von Elementen relativ zu Ankern. `position-area` basiert auf dem Konzept eines 3x3 Kachelrasters, genannt das **position-area grid**, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area Grid, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, sowie [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Dimensionen des äußeren Rands des Rasters durch den enthältenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in dem das positionierte Element platziert werden soll. Genau genommen wird der enthältende Block des positionierten Elements auf den Rasterbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einer einzigen, spezifischen Rasterzelle zu platzieren — beispielsweise wird `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) das positionierte Element in der oberen linken oder unteren mittleren Zelle platzieren.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu umfassen. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert wird, wobei es zunächst in der Mitte platziert wird, und der andere gibt die anderen Kacheln dieser Zeile oder Spalte an, die umspannt werden sollen. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die Mitte und die linke Kachel dieser Zeile umspannt wird.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Block-End-Zeile platziert und über die Mitte und die Inline-End-Kacheln dieser Zeile umspannt wird.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Zeile platziert wird und über drei Zellen umspannt wird, in diesem Fall über die linke, mittlere und rechte Kachel der unteren Zeile.

Für detaillierte Informationen zu Ankerfunktionen, Verwendung und der `position-area` Eigenschaft siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, speziell den Abschnitt über das [Setzen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf ein positioniertes Element gesetzt wird, wird das Standardverhalten einiger seiner Eigenschaften angepasst, um eine gute Standardausrichtung zu liefern.

#### `normal` Wert der Eigenschaft für die Eigenpositionierung

Der `normal`-Wert der Eigenpositionierungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert einer Eigenpositionierungseigenschaft als Standardwert verwendet wird, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert den mittleren Bereich auf einer Achse angibt, ist die Standardausrichtung auf dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil des durch die `position-area` Eigenschaft angegebenen Bereichs. Zum Beispiel, wenn der `position-area` Wert den Startbereich seiner Achse spezifiziert, ist die Standardausrichtung auf dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Reihe platziert und über die Mitte und die Startkacheln dieser Reihe umspannt wird. In diesem Fall werden die Eigenpositionierungseigenschaften standardmäßig `align-self: end` und `justify-self: anchor-center` verwenden.

#### Einsetzeigenschaften und Werte

Wenn ein ankerpositioniertes Element mit der `position-area` Eigenschaft positioniert wird, spezifizieren alle festgelegten {{Glossary("inset_properties", "Einsetzeigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Versatzwerte vom Positionierungsbereich. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/Reference/Properties/max-block-size), werden ebenfalls relativ zum Positionierungsbereich sein. Alle Einsetzeigenschaften, die gesetzt oder standardmäßig auf `auto` sind, verhalten sich so, als ob ihr Wert auf `0` gesetzt wurde.

### Eine Nebenbemerkung zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} gesetzt, sie wird aber auch von der Größe des `position-area` Rasters beeinflusst.

Wenn das positionierte Element in einer einzelnen oberen Mitte-, unteren Mitte- oder Mittel-Mittelzelle platziert wird, ist seine Blockgröße dieselbe wie die Größe des Anker-Containblöckelements, wachsend nach oben, unten oder in beide Richtungen. Das positionierte Element wird mit der angegebenen Rasterzelle ausgerichtet, übernimmt jedoch dieselbe Breite wie das Ankerelement. Es lässt jedoch seinen Inhalt nicht überlaufen — seine minimale `Breite` wird sein `min-content` (wie durch die Breite seines längsten Wortes definiert) sein.

Wenn das positionierte Element in einer anderen einzelnen Rasterzelle (etwa mit `position-area: top left`) platziert oder so eingestellt wird, dass es zwei oder mehr Rasterzellen umspannt (zum Beispiel mit `position-area: bottom span-all`), wird es mit dem angegebenen Rasterbereich ausgerichtet, verhält sich jedoch so, als ob es eine {{cssxref("width")}} von `max-content` darauf gesetzt hat. Es wird entsprechend der Größe seines enthältenden Blocks bemessen, was die Größe ist, die ihm auferlegt wird, wenn es auf `position: fixed` gesetzt wurde. Es wird so breit wie der Textinhalt, obwohl es möglicherweise auch durch den Rand des `<body>` eingeschränkt wird.

### Verwendung von `position-area` zur Positionierung von Popovers

Beim Verwenden von `position-area` zur Positionierung von [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) seien Sie sich bewusst, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der von Ihnen angestrebten Positionierung in Konflikt stehen können. Die gewöhnlichen Schuldigen sind die Standardstile für `margin` und `inset`, daher empfiehlt es sich, diese zurückzusetzen:

```css
.my-popover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [untersucht Möglichkeiten, diesen Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element mit der `position-area` Eigenschaft relativ zu seinem zugehörigen Anker verankert und positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zum `<div>` positioniert. Wir inkludieren auch einen Stilblock, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut direkt bearbeitbar.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` zu einem Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Dann verknüpfen wir das absolut positionierte `<p>` mit ihm, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area` Wert auf `top center`. Dieser Wert wird auf einen `p` Selektor gesetzt, sodass der Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat als jeder Wert, der dem `<style>` Block's `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) hinzugefügt wird. Dadurch können Sie den anfänglichen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks festlegen.

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

{{EmbedLiveSample("Basic example", "100%", "360")}}

Versuchen Sie, die Menge an Text im ankerpositionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den Wert der `position-area` Eigenschaft auf etwas anderes wie `center` zu ändern.

### Vergleich von `position-area` Werten

Dieses Demo erstellt einen Anker und verknüpft ein positioniertes Element damit. Es bietet auch ein Dropdown-Menü, mit dem Sie verschiedene `position-area` Werte auswählen können, um sie auf das positionierte Element anzuwenden, um ihre Wirkung zu sehen. Eine der Optionen verursacht das Erscheinen eines Textfelds, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, damit Sie beobachten können, wie sich `position-area` Wertwirkungen in verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Diese sollen das Ankerelement und das von uns damit verknüpfte positionierte Element sein. Wir haben das `contenteditable` Attribut auf beide gesetzt, wodurch sie direkt bearbeitbar sind.

Wir haben auch zwei Formulare eingeschlossen, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente für das Setzen verschiedener `position-area` Werte enthalten, sowie das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}}. Der Code dafür sowie das JavaScript wurden der Kürze halber versteckt.

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

In CSS deklarieren wir zuerst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen über die {{cssxref("anchor-name")}} Eigenschaft darauf setzen.

Das positionierte Element wird mit dem Ankerelement verknüpft, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements setzen. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass, wenn das positionierte Element einen `position-area` Wert erhält, der es über dem Anker platziert, Sie die Position der Elemente zueinander sehen können.

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

{{EmbedLiveSample("`position-area` value comparison", "100%", "360")}}

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um die Auswirkung auf die Position der Infobox zu sehen. Wählen Sie den "Benutzerdefinierten" Wert und versuchen Sie, benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Wirkung zu sehen. Fügen Sie dem Anker- und den ankerpositionierten Elementen Text hinzu, um zu sehen, wie das ankerpositionierte Element basierend auf dem `position-area` Wert wächst. Überprüfen Sie schließlich das Kontrollkästchen und experimentieren Sie dann mit verschiedenen `position-area` Werten, um zu sehen, welche denselben Effekt über verschiedene Schreibmodi haben und welche unterschiedliche Ergebnisse liefern.

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
- [Verwendung der CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
