---
title: position-area
slug: Web/CSS/Reference/Properties/position-area
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem verankerten Element, relativ zu den Rändern seines zugehörigen Ankerelements positioniert zu werden, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3-Rasters gelegt wird, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine bequeme Alternative zum Binden und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "inset-Eigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Ränder des umgebenden Blocks des positionierten Elements relativ zu den Rändern seines Standardanker-Elements zu positionieren.

Wenn ein Element kein Standardanker-Element hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` mit denselben Eigenschaftswerten benannt und unterstützt. Beide Eigenschaftsnamen werden für kurze Zeit aus Gründen der Rückwärtskompatibilität unterstützt.

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

Der Eigenschaftswert sind zwei `<position-area>` Schlüsselbegriffe oder das Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff bereitgestellt wird, wird der zweite Schlüsselbegriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)

  - : Gibt den Bereich des Positionierungsrasters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Es wird kein Positionierungsbereich festgelegt.

## Beschreibung

Die Eigenschaft `position-area` bietet eine Alternative zur `anchor()`-Funktion für die Positionierung von Elementen relativ zu Ankern. `position-area` basiert auf dem Konzept eines 3x3-Kachelrasters, das als **Positionierungsraster** bezeichnet wird, mit dem Ankerelement als mittlere Kachel:

![Das Positionierungsraster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physische Werte](/de/docs/Web/CSS/Reference/Values/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/Reference/Values/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, sowie [Koordinatenentsprechungen](/de/docs/Web/CSS/Reference/Values/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end`, sowie Koordinatenentsprechungen — `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [umgebenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während die Dimensionen des äußeren Rands des Rasters durch den umgebenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert besteht aus ein oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in dem das positionierte Element platziert werden soll. Genauer gesagt wird der umgebende Block des positionierten Elements auf den Rasterbereich gesetzt.

Beispielsweise:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzelnen, spezifischen Rasterquadrat zu platzieren — zum Beispiel `top left` (logische Entsprechung `start start`) oder `bottom center` (logische Entsprechung `end center`) platziert das positionierte Element im oberen rechten oder unteren mittleren Quadrat.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in die das positionierte Element platziert wird und es zunächst in der Mitte platziert, während der andere die anderen Kacheln dieser Zeile oder Spalte zum Überspannen angibt. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die mittleren und linken Kacheln dieser Zeile gespannt wird.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Blockendzeile platziert und über die mittleren und inline end Kacheln dieser Zeile gespannt wird.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Zeile platziert wird und über drei Zellen gespannt wird, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Zeile.

Für detaillierte Informationen zu Ankerfunktionen, Nutzung und der `position-area` Eigenschaft siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul-Übersichtsseite und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden, insbesondere den Abschnitt zum [Festlegen einer `position-area`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_a_position-area).

### Anpassung des Standardverhaltens

Wenn ein [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert auf ein positioniertes Element gesetzt wird, werden einige seiner Eigenschaften ihr Standardverhalten angepasst, um eine gute Standardausrichtung bereitzustellen.

#### `normal` Wert der Selbst-Ausrichtungseigenschaft

Der `normal` Wert der Selbst-Ausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder wie `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert eine Selbst-Ausrichtungseigenschaft standardmäßig hat, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert die mittlere Region einer Achse spezifiziert, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls verhält sie sich entgegengesetzt zur Region, die durch die `position-area` Eigenschaft spezifiziert wird. Zum Beispiel, wenn der `position-area` Wert die Startregion seiner Achse spezifiziert, ist die Standardausrichtung in dieser Achse `end`.

Wenn zum Beispiel der `writing-mode` auf `horizontal-tb` gesetzt ist, verursacht `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und über die mittleren und Startkacheln dieser Zeile gespannt wird. In diesem Fall werden die Selbst-Ausrichtungseigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### inset Eigenschaften und Werte

Wenn ein Anker-positioniertes Element unter Verwendung der `position-area` Eigenschaft positioniert wird, geben alle gesetzten {{Glossary("inset_properties", "inset Eigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Offsets vom Positionierungsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/Reference/Properties/max-block-size), werden ebenfalls relativ zum Positionierungsbereich sein. Alle inset Eigenschaften, die auf `auto` gesetzt oder standardmäßig auf `auto` stehen, verhalten sich so, als ob ihr Wert auf `0` gesetzt wäre.

### Ein Hinweis zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} gesetzt, wird jedoch auch von der Größe des Positionierungsrasters beeinflusst.

Wenn das positionierte Element in einer einzigen oberen-mittleren, unteren-mittleren oder Mitte-Mitte Zelle platziert wird, entspricht seine Blockgröße der umgebenden Blockgröße des Ankers und wächst nach oben, unten, oder in beide Richtungen entsprechend. Das positionierte Element stimmt mit dem angegebenen Rasterquadrat überein, übernimmt jedoch dieselbe Breite wie das Ankerelement. Es wird jedoch nicht zulassen, dass sein Inhalt überläuft — seine minimale `width` wird seine `min-content` sein (wie durch die Breite seines längsten Wortes definiert).

Wenn das positionierte Element in einem anderen einzelnen Rasterquadrat platziert wird (zum Beispiel mit `position-area: top left`) oder so eingestellt ist, dass es zwei oder mehr Rasterquadrat überdeckt (zum Beispiel mit `position-area: bottom span-all`), wird es mit dem angegebenen Rasterbereich ausgerichtet und verhält sich, als ob es eine {{cssxref("width")}} von `max-content` hätte. Es wird gemäß seiner umgebenden Blockgröße dimensioniert, die die Größe ist, die ihm auferlegt wird, wenn es auf `position: fixed` eingestellt ist. Es wird sich so weit strecken wie der Textinhalt, obwohl es möglicherweise auch durch den Rand des `<body>` eingeschränkt wird.

### Verwendung von `position-area` zur Positionierung von Popovers

Bei der Verwendung von `position-area` zur Positionierung von [Popovern](/de/docs/Web/HTML/Reference/Global_attributes/popover) beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der gewünschten Positionierung kollidieren können. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.my-popover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe prüft [Möglichkeiten, um dieses Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element mittels der `position-area` Eigenschaft an seinen zugehörigen Anker gebunden und positioniert.

#### HTML

Das HTML beinhaltet ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zu dem `<div>` positioniert. Außerdem haben wir einen Stilblock eingefügt, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut direkt editierbar.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir wandeln das `<div>` durch die {{cssxref("anchor-name")}} Eigenschaft in ein Ankerelement um. Danach verbinden wir das absolut positionierte `<p>` damit, indem wir dessen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area` Wert auf `top center`. Dieser Wert wird auf einem `p`-Selektor festgelegt, sodass der Wert eine geringere [Spezifizität](/de/docs/Web/CSS/Guides/Cascade/Specificity) hat als jeder Wert, der zum `<style>` Block `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) hinzugefügt wird. Dadurch können Sie den anfänglichen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks festlegen.

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

Versuchen Sie, die Anzahl der Texte im Anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch den Wert der `position-area` Eigenschaft auf etwas anderes zu ändern, wie zum Beispiel `center`.

### `position-area` Wertvergleich

Dieses Demo erstellt einen Anker und bindet ein positioniertes Element daran. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area` Werte auszuwählen, die auf das positionierte Element angewendet werden sollen, um deren Wirkung zu sehen. Eine der Optionen führt dazu, dass ein Textfeld angezeigt wird, in das Sie einen benutzerdefinierten Wert eingeben können. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, sodass Sie beobachten können, wie sich die `position-area` Werte in verschiedenen Schriftmodi unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als das Ankerelement bzw. das positionierte Element vorgesehen, das wir damit verbinden werden. Wir haben das `contenteditable` Attribut auf beide gesetzt, um sie direkt bearbeitbar zu machen.

Wir haben auch zwei Formulare eingefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente zum Festlegen verschiedener `position-area` Werte sowie das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} ein- und ausschalten. Der Code für diese, zusammen mit JavaScript, wurde aus Gründen der Kürze verborgen.

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

Im CSS deklarieren wir zunächst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen.

Das positionierte Element wird mit dem Ankerelement verbunden, indem sein Ankername als Wert der {{cssxref("position-anchor")}} des positionierten Elements gesetzt wird. Wir geben ihm eine Anfangsposition mit `position-area: top left`; diese wird überschrieben, wenn neue Werte aus dem `<select>` Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass, wenn das positionierte Element einen `position-area` Wert erhält, der es über den Anker platziert, Sie die Position der Elemente zueinander dennoch sehen können.

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

Das Ergebnis ist folgendes:

{{ EmbedLiveSample("`position-area` value comparison", "100%", "360") }}

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um die Auswirkungen auf die Position der Infobox zu sehen. Wählen Sie den "Benutzerdefiniert" Wert aus und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Wirkung zu sehen. Fügen Sie dem Ankertext und den Anker-Positionselementen hinzu, um zu sehen, wie sich das Anker-Positionselement basierend auf dem `position-area` Wert vergrößert. Schließlich aktivieren Sie das Kontrollkästchen und experimentieren Sie mit verschiedenen `position-area` Werten, um zu sehen, welche in verschiedenen Schriftmodi dasselbe Ergebnis liefern und welche unterschiedliche Ergebnisse liefern.

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
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
- [Fallback-Optionen und bedingtes Verbergen bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
