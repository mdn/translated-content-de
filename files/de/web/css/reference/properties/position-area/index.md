---
title: "`position-area` CSS property"
short-title: position-area
slug: Web/CSS/Reference/Properties/position-area
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`position-area`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, ein Anker-positioniertes Element relativ zu den Rändern seines zugehörigen Ankerelements zu positionieren, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3-Gitters gelegt wird, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine bequeme Alternative zum Verankern und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Einsetzungs-Eigenschaften")}} und die {{cssxref("anchor()")}}-Funktion. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Ränder des Enthaltungsblocks des positionierten Elements relativ zu den Rändern seines Standardankerelements zu positionieren.

Wenn ein Element kein Standardankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

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

Der Eigenschaftswert besteht aus zwei `<position-area>` Schlüsselbegriffen oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff angegeben wird, wird der zweite Schlüsselbegriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)
  - : Gibt den Bereich des Positionierungsbereichrasters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Kein Positionierungsbereich ist festgelegt.

## Beschreibung

Die `position-area`-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Anchors zu positionieren. `position-area` arbeitet mit dem Konzept eines 3x3-Kachel-Rasters, genannt das **Positionierungsbereichs-Raster**, wobei das Ankerelement die mittlere Kachel ist:

![Das Positionierungsbereichs-Raster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Zeilen und Spalten aufgeteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/Reference/Values/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/Reference/Values/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, sowie [Koordinaten-Äquivalente](/de/docs/Web/CSS/Reference/Values/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end`, und Koordinaten-Äquivalente — `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [Enthaltungsblock](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während die Dimensionen des äußeren Rands des Rasters durch den Enthaltungsblock des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)-Wert besteht aus einem oder zwei Schlüsselwörtern, die die Region des Rasters definieren, in der das positionierte Element platziert werden soll. Genauer gesagt wird der Enthaltungsblock des positionierten Elements auf den Rasternbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einer einzelnen, spezifischen Rasterzelle zu platzieren — zum Beispiel `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) wird das positionierte Element in der oberen rechten oder unteren mittleren Zelle platzieren.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*`-Wert angeben, um sich über zwei oder drei Zellen zu erstrecken. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, wobei es zunächst in der Mitte platziert wird; der andere gibt die anderen Kacheln dieser Zeile oder Spalte an, die es überspannen soll. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und sich über die mittleren und linken Kacheln dieser Zeile erstreckt.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Block-End-Zeile platziert wird und sich über die mittleren und Inline-End-Kacheln dieser Zeile erstreckt.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Zeile platziert wird und sich über drei Zellen erstreckt, in diesem Fall über die linken, mittleren und rechten Kacheln der unteren Zeile.

Für detaillierte Informationen über Anker-Funktionen, Verwendung und die `position-area`-Eigenschaft siehe das [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) und den [Verwendung von CSS-Anker-Positionierungsleitfaden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using), insbesondere den Abschnitt über das [Festlegen einer `position-area`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_a_position-area).

### Angepasste Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert auf einem positionierten Element gesetzt ist, werden einige seiner Eigenschaften ihr Standardverhalten anpassen, um eine gute Standardausrichtung zu bieten.

#### Selbst-Ausrichtungs-Eigenschaft `normal`-Wert

Der `normal`-Wert der Selbst-Ausrichtungs-Eigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welchen Wert eine Selbst-Ausrichtungs-Eigenschaft standardmäßig hat, hängt von der Positionierung des Elements ab:

- Wenn der `position-area`-Wert die mittlere Region auf einer Achse angibt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil der durch die `position-area`-Eigenschaft angegebenen Region. Zum Beispiel, wenn der `position-area`-Wert die Startregion seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` eingestellt ist, verursacht `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und sich über die mittleren und Start-Kacheln dieser Zeile erstreckt. In diesem Fall werden die Selbst-Ausrichtungs-Eigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` eingestellt.

#### Einsetzungs-Eigenschaften und -Werte

Wenn ein Anker-positioniertes Element mit der `position-area`-Eigenschaft positioniert wird, geben alle festgelegten {{Glossary("inset_properties", "Einsetzungs-Eigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Offsets vom Positionierungsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/Reference/Properties/max-block-size), beziehen sich ebenfalls auf den Positionierungsbereich. Jegliche Einsetzungs-Eigenschaften, die auf `auto` gesetzt sind oder standardmäßig auf `auto` sind, verhalten sich, als ob ihr Wert auf `0` gesetzt wäre.

### Eine Randbemerkung zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe standardmäßig zu seiner {{Glossary("Intrinsic_Size", "intrinsischen Größe")}}, aber sie wird auch durch die Größe des Positionierungsbereichrasters beeinflusst.

Wenn das positionierte Element in einer einzelnen oben-mittleren, unten-mittleren oder mitte-mittleren Zelle platziert wird, wird seine Blockgröße dieselbe sein wie die Blockgröße des Ankers, wächst nach oben, unten oder in beide Richtungen. Das positionierte Element wird mit der angegebenen Rasterzelle ausgerichtet, aber die gleiche Breite wie das Ankerelement übernehmen. Es erlaubt jedoch nicht, dass sein Inhalt überläuft — seine minimale `width` wird seine `min-content` sein (wie durch die Breite seines längsten Wortes definiert).

Wenn das positionierte Element in einer anderen einzelnen Rasterzelle platziert wird (zum Beispiel mit `position-area: top left`) oder auf zwei oder mehr Rasterzellen ausgedehnt wird (zum Beispiel mit `position-area: bottom span-all`), wird es mit der angegebenen Rasterfläche ausgerichtet sein, aber so verhalten, als ob es eine {{cssxref("width")}} von `max-content` hätte. Es wird entsprechend seiner Enthaltungsblockgröße, die die Größe ist, die ihm auferlegt wird, wenn es auf `position: fixed` gesetzt ist, dimensioniert. Es wird sich so weit dehnen wie der Textinhalt, obwohl es auch durch den Rand des `<body>` eingeschränkt sein kann.

### Verwendung von `position-area` zur Positionierung von Popups

Bei der Verwendung von `position-area` zur Positionierung von [Popups](/de/docs/Web/HTML/Reference/Global_attributes/popover) sollten Sie beachten, dass [die Standardstile für Popups](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise den Versuch, die gewünschte Position zu erreichen, beeinträchtigen können. Die üblichen Verdächtigen hierfür sind die Standardstile für `margin` und `inset`, so dass es ratsam ist, diese zurückzusetzen:

```css
.my-popover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe sucht nach Möglichkeiten, [diesen Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel wird ein positioniertes Element mithilfe der `position-area`-Eigenschaft an seinen zugehörigen Anker verankert und positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zum `<div>` positioniert. Wir fügen auch einen Stilblock hinzu, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut direkt bearbeitbar.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` zu einem Ankerelement mit der {{cssxref("anchor-name")}}-Eigenschaft. Dann verknüpfen wir das absolut positionierte `<p>` damit, indem wir seinen {{cssxref("position-anchor")}}-Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area`-Wert auf `top center`. Dieser Wert wird auf einem `p`-Selektor gesetzt, so dass der Wert eine geringere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) hat als jeder Wert im `<style>`-Block's `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors). Infolgedessen können Sie den anfänglichen `position-area`-Wert überschreiben, indem Sie einen `position-area`-Wert innerhalb des Stilblocks setzen.

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

Versuchen Sie, die Menge des Textes im Anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Ändern Sie auch den Wert der `position-area`-Eigenschaft in etwas anderes, wie `center`.

### Vergleich von `position-area`-Werten

Dieses Demo erstellt einen Anker und verankert ein positioniertes Element daran. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area`-Werte auf das positionierte Element anzuwenden, um deren Effekt zu sehen. Eine der Optionen bewirkt, dass ein Textfeld erscheint, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um den `writing-mode: vertical-lr` ein- und auszuschalten, damit Sie beobachten können, wie sich die `position-area`-Werteffekte in verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, das wir damit verknüpfen wollen. Wir haben das `contenteditable`-Attribut auf beide gesetzt, um sie direkt bearbeitbar zu machen.

Wir haben auch zwei Formulare hinzugefügt, die die {{htmlelement("select")}}- und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text)-Elemente zum Festlegen verschiedener `position-area`-Werte enthalten, sowie das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox)-Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} ein und aus. Der Code hierfür, zusammen mit dem JavaScript, wurde der Kürze wegen versteckt.

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

Im CSS deklarieren wir zunächst das `anchor` `<div>` als Ankerelement, indem wir über die {{cssxref("anchor-name")}}-Eigenschaft einen Ankernamen darauf setzen.

Das positionierte Element wird mit dem Ankerelement verknüpft, indem unser Ankername als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>`-Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, damit Sie, wenn das positionierte Element einen `position-area`-Wert erhält, der es über dem Anker platziert, immer noch die Position der Elemente relativ zueinander sehen können.

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

{{ EmbedLiveSample("Vergleich von `position-area` Werten", "100%", "360") }}

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um zu sehen, welchen Effekt sie auf die Position der Infobox haben. Wählen Sie den "Custom"-Wert und versuchen Sie, benutzerdefinierte `position-area`-Werte in das Texteingabefeld einzugeben, um deren Effekt zu sehen. Fügen Sie dem Anker und den Anker-positionierten Elementen Text hinzu, um zu sehen, wie das Anker-positionierte Element basierend auf dem `position-area`-Wert wächst. Aktivieren Sie schließlich das Kontrollkästchen und experimentieren Sie mit verschiedenen `position-area`-Werten, um zu sehen, welche die gleichen Ergebnisse über verschiedene Schreibmodi hinweg geben und welche unterschiedliche Ergebnisse liefern.

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
- [Fallback-Optionen und bedingtes Verstecken für Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
