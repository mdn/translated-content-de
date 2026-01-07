---
title: position-area
slug: Web/CSS/Reference/Properties/position-area
l10n:
  sourceCommit: 3e0ba995376cace7f08f0771635f86f0fb1753b3
---

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem verankerten Element, relativ zu den Rändern seines zugehörigen Ankerelements positioniert zu werden, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3 Rasters gelegt wird, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine praktische Alternative zum Verknüpfen und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Inset-Eigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Ränder des begrenzenden Blocks des positionierten Elements relativ zu den Rändern seines Standardankerelements zu positionieren.

Wenn ein Element kein Standardankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` benannt und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für kurze Zeit unterstützt, um Rückwärtskompatibilität zu gewährleisten.

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

Der Eigenschaftswert besteht aus zwei `<position-area>` Schlüsselbegriffen oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff bereitgestellt wird, wird der zweite Schlüsselbegriff angenommen.

- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)
  - : Gibt den Bereich des Positionsraster an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Es wird kein Positionsbereich festgelegt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. `position-area` arbeitet mit dem Konzept eines 3x3 Kachelrasters, genannt das **position-area grid**, wobei das Ankerelement die zentrale Kachel ist:

![Das position-area Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/Reference/Values/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/Reference/Values/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end` und [Koordinatenäquivalente](/de/docs/Web/CSS/Reference/Values/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end` und Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Abmessungen der zentralen Kachel werden durch den [begrenzenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während die Abmessungen des äußeren Randes des Rasters durch den begrenzenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in dem das positionierte Element platziert werden soll. Genauer gesagt, wird der begrenzende Block des positionierten Elements auf den Rasterbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzelnen, spezifischen Rasterquadrat zu platzieren — zum Beispiel `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element im oberen rechten oder unteren mittleren Quadrat.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, und platziert es zunächst in der Mitte, und der andere gibt die anderen Kacheln dieser Reihe oder Spalte an, die überspannt werden sollen. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Reihe platziert wird und sich über die Mitte und die linken Kacheln dieser Reihe erstreckt.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Blockendreihe platziert wird und sich über die Mitte und die Inline-End-Kacheln dieser Reihe erstreckt.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Reihe platziert wird und sich über drei Zellen erstreckt, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Reihe.

Für detaillierte Informationen zu Ankerfunktionen, Verwendung und der `position-area` Eigenschaft, sehen Sie sich das [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Verwendung von CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden an, speziell den Abschnitt über [das Festlegen einer `position-area`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_a_position-area).

### Anpassung des Standardverhaltens

Wenn ein [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert auf ein positioniertes Element gesetzt ist, werden einige seiner Eigenschaften ihr Standardverhalten anpassen, um eine gute Standardausrichtung zu gewährleisten.

#### Selbst-Ausrichtungseigenschaft `normal` Wert

Der `normal` Wert der Selbst-Ausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert einer Selbst-Ausrichtungseigenschaft standardmäßig zugeordnet wird, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert den mittleren Bereich in einer Achse spezifiziert, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil des durch die `position-area` Eigenschaft angegebenen Bereichs. Wenn zum Beispiel der `position-area` Wert den Startbereich seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Reihe platziert wird und sich über die Mitte und Start-Kacheln dieser Reihe erstreckt. In diesem Fall werden die Selbst-Ausrichtungseigenschaften standardmäßig `align-self: end` und `justify-self: anchor-center` sein.

#### Inset-Eigenschaften und Werte

Wenn ein anker-positioniertes Element mit der `position-area` Eigenschaft positioniert wird, spezifizieren alle festgelegten {{Glossary("inset_properties", "Inset-Eigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Offsets von der Position-Area. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/Reference/Properties/max-block-size), werden ebenfalls relativ zur Position-Area sein. Alle Inset-Eigenschaften, die auf `auto` gesetzt oder standardmäßig `auto` sind, verhalten sich, als ob ihr Wert auf `0` gesetzt wurde.

### Eine Bemerkung zur Breite von positionierten Elementen

Wenn das positionierte Element keine spezifische Größe festgelegt hat, wird seine Größe auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} standardmäßig, aber sie wird auch durch die Größe des Position-Area-Rasters beeinflusst.

Wenn das positionierte Element in einer einzigen oberen mittleren, unteren mittleren oder mittleren Zelle platziert wird, wird seine Blockgröße dieselbe sein wie die Blockgröße des Ankers, und es wird nach oben, unten oder in beide Richtungen wachsen. Das positionierte Element richtet sich nach dem angegebenen Rasterquadrat aus, wird jedoch dieselbe Breite wie das Ankerelement annehmen. Es wird jedoch nicht zulassen, dass sein Inhalt überläuft — seine minimale `Breite` wird sein `min-content` (wie durch die Breite seines längsten Wortes definiert) sein.

Wenn das positionierte Element in einem anderen einzelnen Rasterquadrat platziert wird (sagen wir mit `position-area: top left`) oder wenn es auf zwei oder mehr Rasterquadrate erweitert wird (zum Beispiel mit `position-area: bottom span-all`), wird es sich mit dem angegebenen Rasterbereich ausrichten, aber sich so verhalten, als ob es eine {{cssxref("width")}} von `max-content` auf sich gesetzt hätte. Es wird gemäß seiner begrenzten Blockgröße dimensioniert, die die Größe ist, die ihm auferlegt wurde, als es auf `position: fixed` gesetzt wurde. Es wird sich so weit wie der Textinhalt erstrecken, obwohl es auch durch den Rand des `<body>` eingeschränkt werden kann.

### Verwendung von `position-area` zum Positionieren von Popovers

Bei der Verwendung von `position-area` zum Positionieren von [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) sollte bedacht werden, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der Position, die Sie erreichen möchten, in Konflikt geraten könnten. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.my-popover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [prüft Möglichkeiten, dieses Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element verankert und relativ zu seinem zugehörigen Anker mit der `position-area` Eigenschaft positioniert.

#### HTML

Das HTML umfasst ein {{htmlelement("div")}} und einen {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch einen Stilblock hinzu, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut direkt editierbar.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Dann verknüpfen wir das absolut positionierte `<p>` damit, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den initialen `position-area` Wert auf `top center`. Dieser Wert wird auf einen `p`-Selektor gesetzt, sodass der Wert eine geringere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) hat als jeder Wert, der dem `<style>` Block `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) hinzugefügt wird. Dadurch können Sie den initialen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

Versuchen Sie, die Menge des Textes im anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den Wert der `position-area` Eigenschaft auf etwas anderes, wie `center`, zu ändern.

### `position-area` Wertvergleich

Diese Demo erstellt einen Anker und verknüpft ein positioniertes Element damit. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area` Werte auszuwählen, um sie auf das positionierte Element anzuwenden, um ihre Wirkung zu sehen. Eine der Optionen bewirkt, dass ein Textfeld erscheint, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird eine Checkbox bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, damit Sie beobachten können, wie `position-area` Werteffekte sich zwischen verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse `anchor` und eines mit einer Klasse `infobox`. Diese sollen das Ankerelement und das mit ihm verknüpfte positionierte Element darstellen. Wir haben das `contenteditable` Attribut für beide hinzugefügt, um sie direkt bearbeitbar zu machen.

Wir haben auch zwei Formulare eingefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente enthalten, um verschiedene `position-area` Werte festzulegen, und das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element, um das vertikale {{cssxref("writing-mode")}} ein- und auszuschalten. Der Code für diese, zusammen mit dem JavaScript, wurde der Kürze halber verborgen.

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

Das positionierte Element wird mit dem Ankerelement verbunden, indem sein Ankername als Wert der Eigenschaft {{cssxref("position-anchor")}} des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, so dass, wenn das positionierte Element einen `position-area` Wert erhält, der es über dem Anker platziert, immer noch die Position der Elemente zueinander sichtbar bleibt.

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

#### Resultat

Das Resultat ist wie folgt:

{{ EmbedLiveSample("`position-area` value comparison", "100%", "360") }}

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um deren Einfluss auf die Position der Infobox zu sehen. Wählen Sie den "Custom" Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Textfeld einzugeben, um deren Wirkung zu sehen. Fügen Sie dem Anker und den anker-positionierten Elementen Text hinzu, um zu sehen, wie das anker-positionierte Element basierend auf dem `position-area` Wert wächst. Schließlich aktivieren Sie das Kontrollkästchen und experimentieren mit verschiedenen `position-area` Werten, um zu sehen, welche die gleichen Ergebnisse über verschiedene Schreibmodi hinweg geben, und welche unterschiedliche Ergebnisse liefern.

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
- [Verwendung von CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verstecken bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
