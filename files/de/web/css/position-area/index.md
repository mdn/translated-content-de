---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 0ed2a2ba4bbaf6840dcc80583b682898d593d0df
---

{{CSSRef}}

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein ankergestütztes Element relativ zu den Rändern seines zugehörigen Ankerelements zu positionieren, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3-Rasters gesetzt wird, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine bequeme Alternative zum Verbinden und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Einsetzeigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Ränder des enthaltenen Blocks des positionierten Elements relativ zu den Rändern seines Standardankerelements zu positionieren.

Wenn ein Element kein Standardankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` benannt und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit aus Gründen der Rückwärtskompatibilität unterstützt.

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

Der Eigenschaftswert sind zwei `<position-area>` Schlüsselbegriffe oder das Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff angegeben wird, wird der zweite impliziert.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)

  - : Gibt den Bereich des Positionsrasterbereichs an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`

  - : Es wird kein Positionsbereich gesetzt.

## Beschreibung

Die Eigenschaft `position-area` bietet eine Alternative zur `anchor()` Funktion für die Positionierung von Elementen relativ zu Ankern. `position-area` basiert auf dem Konzept eines 3x3-Rasters von Kacheln, genannt **Positionsrasterbereich**, wobei das Ankerelement die mittlere Kachel ist:

![Das Positionsraster, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` repräsentiert. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, und [koordinatenbasierte Äquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end`, und koordinatenbasierte Äquivalente — `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [enthaltenden Block](/de/docs/Web/CSS/Containing_block) des Ankerelements definiert, während die Dimensionen des äußeren Rasterrandes durch den enthaltenen Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in dem das positionierte Element platziert werden soll. Genauer gesagt wird der enthaltene Block des positionierten Elements auf den Rasterbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzigen, spezifischen Rasterquadrat zu platzieren — zum Beispiel `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) wird das positionierte Element im oberen linken oder unteren mittleren Quadrat platzieren.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu umfassen. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, platziert es initial in der Mitte, und der andere spezifiziert die anderen Kacheln dieser Zeile oder Spalte, die überspannt werden sollen. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und sich über die mittleren und linken Kacheln dieser Zeile erstreckt.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Blockendzeile platziert wird und sich über die mittleren und Inline-Ende-Kacheln dieser Zeile erstreckt.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Zeile platziert wird und sich über drei Zellen erstreckt, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Zeile.

Für detaillierte Informationen zu Ankerfunktionen, ihrer Verwendung und der `position-area` Eigenschaft, siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Landingpage und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, speziell den Abschnitt über [die Einstellung einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasste Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf einem positionierten Element gesetzt ist, werden einige seiner Eigenschaften ihr Standardverhalten angepasst, um eine gute Standardausrichtung zu bieten.

#### Self-Alignment Eigenschaft `normal` Wert

Der `normal` Wert der Self-Alignment Eigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end`, oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welchen Wert eine Self-Alignment Eigenschaft als Standard hat, hängt von der Position des Elements ab:

- Wenn der `position-area` Wert die Mittelregion in einer Achse angibt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Ansonsten ist das Verhalten das Gegenteil der von der `position-area` Eigenschaft angegebenen Region. Zum Beispiel, wenn der `position-area` Wert die Anfangsregion seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und sich über die mittleren und Anfangs-Kacheln dieser Zeile erstreckt. In diesem Fall werden die Self-Alignment Eigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### Einsetzeigenschaften und Werte

Wenn ein Anker-element mit der `position-area` Eigenschaft positioniert wird, geben alle gesetzten {{Glossary("inset_properties", "Einsetzeigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Versätze vom Positionsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), werden ebenfalls relativ zum Positionsbereich sein. Alle Einsetzeigenschaften, die gesetzt oder auf `auto` standardisiert sind, verhalten sich so, als wäre ihr Wert auf `0` gesetzt.

### Ein Exkurs zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe standardmäßig seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} sein, aber es wird auch von der Größe des Positionsrasterbereichs beeinflusst.

Wenn das positionierte Element in einem einzelnen oberen mittleren, unteren mittleren oder mittleren mittleren Feld platziert ist, wird seine Blockgröße der enthaltenen Blockgröße des Ankers entsprechen und nach oben, unten oder in beide Richtungen wachsen. Das positionierte Element wird sich mit dem angegebenen Rasterquadrat ausrichten, aber dieselbe Breite wie das Ankerelement übernehmen. Es wird jedoch nicht erlauben, seinen Inhalt überlaufen zu lassen — seine minimale `width` wird ihre `min-content` sein (wie durch die Breite ihres längsten Wortes definiert).

Wenn das positionierte Element in einem anderen einzelnen Rasterquadrat platziert ist (zum Beispiel mit `position-area: top left`) oder so eingestellt ist, dass es zwei oder mehr Rasterquadrate umspannt (zum Beispiel mit `position-area: bottom span-all`), wird es sich mit dem angegebenen Rasterbereich ausrichten, aber sich so verhalten, als ob es eine {{cssxref("width")}} von `max-content` darauf gesetzt hat. Es wird gemäß seiner enthaltenen Blockgröße bemessen, was die Größe ist, die ihm auferlegt wurde, als es auf `position: fixed` gesetzt wurde. Es wird sich so breit dehnen wie der Textinhalt, obwohl es auch durch den Rand des `<body>` beschränkt werden kann.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel wird ein positioniertes Element über die `position-area` Eigenschaft relativ zu seinem zugehörigen Anker verankert und positioniert.

#### HTML

Das HTML beinhaltet ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zum `<div>` positioniert. Wir fügen auch einen Style-Block hinzu, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut direkt editierbar.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: CHANGEME;
  }
</style>
```

#### CSS

Wir wandeln das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft um. Wir assoziieren dann das absolut positionierte `<p>` damit, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area` Wert auf `top center`. Dieser Wert wird auf einen `p` Selektor gesetzt, sodass der Wert weniger [Spezifität](/de/docs/Web/CSS/Specificity) hat als jeder Wert, der dem `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) im `<style>` Block hinzugefügt wird. Daher können Sie den anfänglichen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Style-Blocks setzen.

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

Versuchen Sie, die Textmenge im anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Ändern Sie auch den ungültigen "CHANGEME"-Wert der `position-area` Eigenschaft in einen gültigen Wert.

### `position-area` Wertvergleich

Diese Demo erstellt einen Anker und verbindet ein positioniertes Element damit. Es enthält auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area` Werte auszuwählen, um sie auf das positionierte Element anzuwenden, um deren Effekt zu sehen. Eine der Optionen öffnet ein Textfeld, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, sodass Sie beobachten können, wie sich die `position-area` Werteffekte in verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sollen das Ankerelement und das damit verbundene positionierte Element sein. Wir haben das `contenteditable` Attribut bei beiden hinzugefügt, was sie direkt bearbeitbar macht.

Wir haben auch zwei Formulare inkludiert, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) Elemente zum Setzen verschiedener `position-area` Werte enthalten, und das [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} ein- und auszuschalten. Der Code für diese und das JavaScript wurde der Kürze halber verborgen.

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

Das positionierte Element wird mit dem Ankerelement verbunden, indem sein Ankername als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, damit Sie, wenn das positionierte Element einen `position-area` Wert erhält, der es über den Anker legt, die relativen Positionen der Elemente noch sehen können.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um den Effekt zu sehen, den sie auf die Position der Infobox haben. Wählen Sie den "Custom"-Wert aus und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Effekt zu sehen. Fügen Sie Text zum Anker und den anker-positionierten Elementen hinzu, um zu sehen, wie das anker-positionierte Element auf Grundlage des `position-area` Werts wächst. Aktivieren Sie schließlich das Kontrollkästchen und experimentieren Sie mit verschiedenen `position-area` Werten, um zu sehen, welche im gleichen Ergebnis in verschiedenen Schreibmodi resultieren und welche unterschiedliche Ergebnisse liefern.

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
- [Umgang mit Überlauf: Ausweichoptionen und bedingtes Verbergen](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
