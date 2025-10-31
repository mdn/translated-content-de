---
title: position-area
slug: Web/CSS/Reference/Properties/position-area
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es, ein Anker-positioniertes Element relativ zu den Kanten seines zugehörigen Ankerelements zu positionieren, indem das positionierte Element auf einem oder mehreren Feldern eines impliziten 3x3-Rasters platziert wird, wobei das Ankerelement die mittlere Zelle darstellt.

`position-area` bietet eine bequeme Alternative zum Verbinden und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Einsetz-Eigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Kanten des Blockcontainers des positionierten Elements relativ zu den Kanten seines Standardankerelements zu positionieren.

Wenn ein Element kein Standardankerelement hat oder kein absolut positioniertes Element ist, bleibt diese Eigenschaft ohne Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in den Chromium-Browsern als `inset-area` bezeichnet und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit unterstützt, um die Kompatibilität rückwärts zu gewährleisten.

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

Der Eigenschaftswert besteht aus zwei `<position-area>` Schlüsselbegriffen oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff angegeben wird, ist der zweite Schlüsselbegriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)
  - : Gibt den Bereich des Positionierungsrasters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Kein Positionierungsbereich wird festgelegt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion für die Positionierung von Elementen relativ zu Ankern. `position-area` basiert auf dem Konzept eines 3x3 Rasters von Feldern, das **Positionierungsraster** genannt wird, wobei das Ankerelement die mittlere Kachel ist:

![Das Positionierungsraster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterfelder sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` repräsentiert. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end` sowie [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [umgebenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Abmessungen der äußeren Kanten des Rasters durch den umgebenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in dem das positionierte Element platziert werden soll. Genauer gesagt ist der umgebende Block des positionierten Elements auf den Rasterbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzelnen, speziellen Rasterquadrat zu platzieren — zum Beispiel `top left` (logische Entsprechung `start start`) oder `bottom center` (logische Entsprechung `end center`) wird das positionierte Element im oberen rechten oder unteren mittleren Quadrat platzieren.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um sich über zwei oder drei Zellen zu erstrecken. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert wird, wobei es zunächst in der Mitte platziert wird, und der andere Wert gibt die anderen Kacheln dieser Zeile oder Spalte an, über die sich das Element erstrecken soll. Zum Beispiel:
  - `top span-left` lässt das positionierte Element in der Mitte der oberen Zeile platzieren und erstreckt sich über die mittleren und linken Kacheln dieser Zeile.
  - `block-end span-inline-end` lässt das positionierte Element in der Mitte der Block-Endzeile platzieren und erstreckt sich über die mittleren und inline-Endkacheln dieser Zeile.
  - `bottom span-all` und `y-end span-all` lassen das positionierte Element in der Mitte der unteren Zeile platzieren und sich über drei Zellen erstrecken, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Zeile.

Für detaillierte Informationen zu Ankerfunktionen, Verwendung und der `position-area` Eigenschaft, siehe die [CSS Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modulstartseite und den [Using CSS anchor positioning](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden, speziell den Abschnitt über [Festlegen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn auf einem positionierten Element ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert festgelegt ist, werden einige seiner Eigenschaften in ihrem Standardverhalten angepasst, um eine gute Standardausrichtung zu bieten.

#### Selbst-Ausrichtungs-Eigenschaft `normal` Wert

Der `normal` Wert der Selbst-Ausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder wie `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welchen Wert eine Selbst-Ausrichtungseigenschaft standardmäßig annimmt, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert den mittleren Bereich in einer Achse angibt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls verhält sich die Ausrichtung entgegengesetzt zu dem Bereich, der durch die `position-area` Eigenschaft angegeben wird. Zum Beispiel: Wenn der `position-area` Wert den Startbereich seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel: Wenn der `Schreibmodus` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und sich über die mittleren und anfänglichen Kacheln dieser Zeile erstreckt. In diesem Fall wird die Selbst-Ausrichtungseigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### Einsetz-Eigenschaften und Werte

Wenn ein Anker-positioniertes Element unter Verwendung der `position-area` Eigenschaft platziert wird, geben alle festgelegten {{Glossary("inset_properties", "Einsetz-Eigenschaften")}} wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}} Offsets von der Positionierungsfläche an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/Reference/Properties/max-block-size), beziehen sich auch auf die Positionierungsfläche. Alle Einsetz-Eigenschaften, die auf `auto` gesetzt sind oder standardmäßig `auto` sind, verhalten sich so, als ob ihr Wert auf `0` gesetzt ist.

### Ein Exkurs zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} gesetzt, wird aber auch von der Größe des Positionierungsraster beeinflusst.

Wenn das positionierte Element in einem einzelnen oberen mittleren, unteren mittleren oder mittleren mittleren Feld platziert wird, entspricht seine Blockgröße der Größe des umgebenden Blocks des Ankers und wächst nach oben, unten oder in beiden Richtungen. Das positionierte Element wird mit dem angegebenen Rasterfeld ausgerichtet, aber die gleiche Breite wie das Ankerelement annehmen. Es lässt jedoch keinen Inhalt überlaufen — seine minimale `width` wird auf `min-content` gesetzt (wie definiert durch die Breite seines längsten Wortes).

Wenn das positionierte Element in einem anderen einzigen Rasterfeld platziert wird (zum Beispiel mit `position-area: top left`) oder so eingestellt ist, dass es sich über zwei oder mehr Rasterfelder erstreckt (z.B. mit `position-area: bottom span-all`), wird es mit dem angegebenen Rasterbereich ausgerichtet, sich aber so verhalten, als ob es eine {{cssxref("width")}} von `max-content` hätte. Es wird gemäß seiner umgebenden Blockgröße dimensioniert, die die Größe ist, die ihm auferlegt wurde, als es auf `position: fixed` eingestellt wurde. Es wird sich so weit wie der Textinhalt ausdehnen, obwohl es auch durch den Rand des `<body>` eingeschränkt werden kann.

### Verwendung von `position-area` zur Positionierung von Popovers

Wenn Sie `position-area` verwenden, um [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) zu positionieren, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der Position, die Sie erreichen möchten, in Konflikt stehen können. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.my-popover {
  margin: 0;
  inset: auto;
}
```

Die CSS Arbeitsgruppe [untersucht Möglichkeiten, diesen Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element mit der `position-area` Eigenschaft an seinem zugehörigen Anker befestigt und positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zum `<div>` positioniert. Wir fügen auch einen Stilblock hinzu, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut direkt bearbeitbar eingestellt.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Dann verknüpfen wir das absolut positionierte `<p>` mit ihm, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area` Wert auf `top center`. Dieser Wert wird auf einem `p` Selektor gesetzt, daher hat der Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) als jeder Wert, der dem `<style>` Block's `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Folglich können Sie den anfänglichen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks festlegen.

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

Versuchen Sie, die Menge an Text im Anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den Wert der `position-area` Eigenschaft in etwas anderes zu ändern, wie `center`.

### Vergleich der `position-area` Werte

Diese Demo erstellt einen Anker und verbindet ein positioniertes Element mit ihm. Es bietet auch ein Dropdown-Menü, das Ihnen ermöglicht, verschiedene `position-area` Werte zu wählen, um sie auf das positionierte Element anzuwenden und ihre Wirkung zu sehen. Eine der Optionen führt dazu, dass ein Textfeld erscheint, in dem Sie einen benutzerdefinierten Wert eingeben können. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, damit Sie beobachten können, wie sich die Auswirkungen der `position-area` Werte in verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als das Ankerelement bzw. das positionierte Element gedacht, das wir mit ihm verknüpfen werden. Wir haben das `contenteditable` Attribut auf beiden eingeschlossen, was sie direkt bearbeitbar macht.

Wir haben auch zwei Formulare hinzugefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente zum Festlegen verschiedener `position-area` Werte und das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} enthalten. Der Code dafür sowie das JavaScript wurden der Übersichtlichkeit halber verborgen.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als ein Ankerelement, indem wir einen Ankernamen darauf setzen durch die {{cssxref("anchor-name")}} Eigenschaft.

Das positionierte Element ist mit dem Ankerelement verbunden, indem es seinen Ankernamen als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements setzt. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, so dass, wenn dem positionierten Element ein `position-area` Wert zugewiesen wird, der es über dem Anker platziert, Sie die Position der Elemente relativ zueinander noch sehen können.

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

{{ EmbedLiveSample("`position-area` value comparison", "100%", "360") }}

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um deren Wirkung auf die Position der Infobox zu sehen. Wählen Sie den "Custom" Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Wirkung zu sehen. Fügen Sie Text zum Anker und den Anker-positionierten Elementen hinzu, um zu sehen, wie das Anker-positionierte Element basierend auf dem `position-area` Wert wächst. Schließlich aktivieren Sie das Kontrollkästchen und experimentieren Sie mit verschiedenen `position-area` Werten, um zu sehen, welche im gleichen Ergebnis in unterschiedlichen Schreibmodi resultieren und welche unterschiedliche Ergebnisse liefern.

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
- [Verwendung der CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
