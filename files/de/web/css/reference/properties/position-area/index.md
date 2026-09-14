---
title: "`position-area` CSS property"
short-title: position-area
slug: Web/CSS/Reference/Properties/position-area
l10n:
  sourceCommit: c9f812354ae36bbafc6f6d9b0961f3b25f350f4c
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`position-area`** ermöglicht es, ein per Anker positioniertes Element relativ zu den Kanten seines zugehörigen Ankerelements zu positionieren, indem das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3-Rasters platziert wird, dessen mittlere Zelle das Ankerelement ist.

`position-area` bietet eine praktische Alternative zum Anheften und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Inset-Eigenschaften")}} und die Funktion {{cssxref("anchor()")}}. Das rasterbasierte Konzept löst den häufigen Anwendungsfall, die Kanten des Containing Blocks des positionierten Elements relativ zu den Kanten seines Standardankerelements zu positionieren.

Wenn ein Element kein Standardankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft hieß ursprünglich `inset-area` und wurde unter diesem Namen in Chromium-Browsern unterstützt; die Eigenschaftswerte sind identisch. Beide Eigenschaftsnamen werden aus Gründen der Abwärtskompatibilität noch für kurze Zeit unterstützt.

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
position-area: span-all; /* equiv: span-all span-all */
position-area: end; /* equiv: end end */

/* Global values */
position-area: inherit;
position-area: initial;
position-area: revert;
position-area: revert-layer;
position-area: unset;
```

### Werte

Der Eigenschaftswert besteht aus zwei `<position-area>`-Schlüsselbegriffen oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>`-Schlüsselbegriff angegeben wird, wird der zweite Schlüsselbegriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)
  - : Gibt den Bereich des Positionierungsbereichsrasters an, auf dem ausgewählte positionierte Elemente platziert werden.

- `none`
  - : Es wird kein Positionierungsbereich festgelegt.

## Beschreibung

Die Eigenschaft `position-area` stellt eine Alternative zur Funktion `anchor()` für die Positionierung von Elementen relativ zu Ankern bereit. `position-area` basiert auf einem 3x3-Raster aus Kacheln, dem sogenannten **Positionierungsbereichsraster**, wobei das Ankerelement die mittlere Kachel bildet:

![Das Positionierungsbereichsraster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physischen Werte](/de/docs/Web/CSS/Reference/Values/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben außerdem [logische Entsprechungen](/de/docs/Web/CSS/Reference/Values/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end` sowie [Koordinatenentsprechungen](/de/docs/Web/CSS/Reference/Values/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben außerdem logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinatenentsprechungen — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Kachel werden durch den [Containing Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während die Abmessungen der Außenkante des Rasters durch den Containing Block des positionierten Elements definiert werden.

Der Wert [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters festlegen, in dem das positionierte Element platziert werden soll. Genauer gesagt wird der Containing Block des positionierten Elements auf den Rasterbereich festgelegt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzelnen, bestimmten Rasterfeld zu platzieren — beispielsweise platzieren `top left` (logische Entsprechung `start start`) oder `bottom center` (logische Entsprechung `end center`) das positionierte Element im oberen rechten beziehungsweise im unteren mittleren Feld.
- Sie können einen Zeilen- oder Spaltenwert zusammen mit einem `span-*`-Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert wird, wodurch es zunächst in der Mitte platziert wird, und der andere gibt die weiteren Kacheln dieser Zeile oder Spalte an, die überspannt werden sollen. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und die mittlere sowie die linke Kachel dieser Zeile überspannt.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Zeile am Blockende platziert wird und die mittlere sowie die Kachel am Inline-Ende dieser Zeile überspannt.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Zeile platziert wird und drei Zellen überspannt, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Zeile.

Detaillierte Informationen zu Ankerfunktionen, ihrer Verwendung und der Eigenschaft `position-area` finden Sie im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) sowie im Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using), insbesondere im Abschnitt zum [Festlegen einer `position-area`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)-Wert für ein positioniertes Element festgelegt wird, wird das Standardverhalten einiger seiner Eigenschaften angepasst, um eine passende Standardausrichtung bereitzustellen.

#### Wert `normal` der Selbstausrichtungseigenschaften

Der Wert `normal` der Selbstausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Der Standardwert einer Selbstausrichtungseigenschaft hängt von der Positionierung des Elements ab:

- Wenn der Wert `position-area` in einer Achse den mittleren Bereich angibt, ist die Standardausrichtung auf dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten dem durch die Eigenschaft `position-area` angegebenen Bereich entgegengesetzt. Wenn der Wert `position-area` beispielsweise den Startbereich seiner Achse angibt, ist die Standardausrichtung auf dieser Achse `end`.

Wenn beispielsweise `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und die mittlere sowie die Startkacheln dieser Zeile überspannt. In diesem Fall haben die Selbstausrichtungseigenschaften standardmäßig die Werte `align-self: end` und `justify-self: anchor-center`.

#### Inset-Eigenschaften und -Werte

Wenn ein per Anker positioniertes Element mit der Eigenschaft `position-area` positioniert wird, geben alle festgelegten {{Glossary("inset_properties", "Inset-Eigenschaften")}}, etwa {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Versätze vom Positionierungsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/Reference/Properties/max-block-size), beziehen sich ebenfalls auf den Positionierungsbereich. Alle Inset-Eigenschaften, die auf `auto` gesetzt sind oder standardmäßig `auto` verwenden, verhalten sich so, als wäre ihr Wert auf `0` gesetzt.

### Hinweis zur Breite positionierter Elemente

Wenn für das positionierte Element keine bestimmte Größe festgelegt ist, entspricht seine Größe standardmäßig seiner {{Glossary("Intrinsic_Size", "intrinsischen Größe")}}, wird jedoch auch durch die Größe des Positionierungsbereichsrasters beeinflusst.

Wenn das positionierte Element in einer einzelnen Zelle oben-mittig, unten-mittig oder mittig-mittig platziert wird, entspricht seine Blockgröße der Größe des Containing Blocks des Ankers und wächst jeweils nach oben, nach unten oder in beide Richtungen. Das positionierte Element wird am angegebenen Rasterfeld ausgerichtet, übernimmt jedoch dieselbe Breite wie das Ankerelement. Sein Inhalt darf jedoch nicht überlaufen — seine minimale `width` entspricht seinem `min-content` (definiert durch die Breite seines längsten Wortes).

Wenn das positionierte Element in einem anderen einzelnen Rasterfeld platziert wird, etwa mit `position-area: top left`, oder so eingestellt wird, dass es zwei oder mehr Rasterfelder überspannt, beispielsweise mit `position-area: bottom span-all`, wird es am angegebenen Rasterbereich ausgerichtet, verhält sich aber so, als wäre für es eine {{cssxref("width")}} von `max-content` gesetzt. Seine Größe richtet sich nach der Größe seines Containing Blocks, also der Größe, die ihm bei `position: fixed` zugewiesen worden wäre. Es wird so breit wie der Textinhalt, kann jedoch auch durch die Kante von `<body>` eingeschränkt werden.

### Verwendung von `position-area` zum Positionieren von Popovers

Beachten Sie bei der Verwendung von `position-area` zum Positionieren von [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover), dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der gewünschten Positionierung kollidieren. Die üblichen Ursachen sind die Standardstile für `margin` und `inset`; daher empfiehlt es sich, diese zurückzusetzen:

```css
.my-popover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [prüft Möglichkeiten, um diesen Workaround überflüssig zu machen](https://github.com/w3c/csswg-drafts/issues/10258).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel wird ein positioniertes Element mithilfe der Eigenschaft `position-area` relativ zu seinem zugehörigen Anker angeheftet und positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zum `<div>` positioniert. Außerdem fügen wir einen Stilblock ein, der sichtbar gemacht wird. Alle Elemente werden über das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) direkt bearbeitbar gemacht.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir wandeln das `<div>` mit der Eigenschaft {{cssxref("anchor-name")}} in ein Ankerelement um. Anschließend verknüpfen wir das absolut positionierte `<p>` damit, indem wir seinen Wert für {{cssxref("position-anchor")}} auf denselben Ankernamen setzen.

Wir setzen den anfänglichen Wert von `position-area` auf `top center`. Dieser Wert wird für einen `p`-Selektor festgelegt und hat daher eine geringere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) als jeder Wert, der dem `.positionedElement`-[Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) des `<style>`-Blocks hinzugefügt wird. Daher können Sie den anfänglichen Wert von `position-area` überschreiben, indem Sie innerhalb des Stilblocks einen `position-area`-Wert festlegen.

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

Versuchen Sie, die Textmenge im per Anker positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie außerdem, den Wert der Eigenschaft `position-area` in einen anderen Wert wie `center` zu ändern.

### Vergleich von `position-area`-Werten

Diese Demo erstellt einen Anker und heftet ein positioniertes Element daran an. Außerdem stellt sie ein Dropdown-Menü bereit, mit dem Sie verschiedene `position-area`-Werte auswählen und auf das positionierte Element anwenden können, um deren Wirkung zu sehen. Eine der Optionen lässt ein Textfeld erscheinen, in das Sie einen benutzerdefinierten Wert eingeben können. Schließlich gibt es ein Kontrollkästchen, mit dem Sie `writing-mode: vertical-lr` ein- und ausschalten können, sodass Sie beobachten können, wie sich die Auswirkungen der `position-area`-Werte zwischen verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML geben wir zwei {{htmlelement("div")}}-Elemente an, eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Diese sind jeweils als Ankerelement und als damit zu verknüpfendes positioniertes Element vorgesehen. Beide enthalten das Attribut `contenteditable`, wodurch sie direkt bearbeitbar sind.

Außerdem haben wir zwei Formulare eingefügt, die die Elemente {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) zum Festlegen verschiedener `position-area`-Werte sowie das Element [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) zum Ein- und Ausschalten des vertikalen {{cssxref("writing-mode")}} enthalten. Der Code dafür sowie das JavaScript wurden der Kürze halber ausgeblendet.

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

Im CSS deklarieren wir zunächst das `<div>` `anchor` als Ankerelement, indem wir ihm über die Eigenschaft {{cssxref("anchor-name")}} einen Ankernamen zuweisen.

Das positionierte Element wird mit dem Ankerelement verknüpft, indem dessen Ankername als Wert der Eigenschaft {{cssxref("position-anchor")}} des positionierten Elements festgelegt wird. Außerdem geben wir ihm mit `position-area: top left` eine anfängliche Position; diese wird überschrieben, wenn neue Werte im `<select>`-Menü ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass Sie die Position der Elemente relativ zueinander weiterhin sehen können, wenn dem positionierten Element ein `position-area`-Wert zugewiesen wird, der es über dem Anker platziert.

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

Das Ergebnis sieht wie folgt aus:

{{ EmbedLiveSample("`position-area` value comparison", "100%", "360") }}

Wählen Sie im `<select>`-Menü neue `position-area`-Werte aus, um zu sehen, wie sie sich auf die Position der Infobox auswirken. Wählen Sie den Wert „Custom“ aus und versuchen Sie, einige benutzerdefinierte `position-area`-Werte in die Texteingabe einzugeben, um deren Wirkung zu sehen. Fügen Sie Text zum Anker und zu den per Anker positionierten Elementen hinzu, um zu sehen, wie das per Anker positionierte Element anhand des `position-area`-Werts wächst. Aktivieren Sie schließlich das Kontrollkästchen und experimentieren Sie dann mit unterschiedlichen `position-area`-Werten, um zu sehen, welche in verschiedenen Schreibmodi dasselbe Ergebnis liefern und welche unterschiedliche Ergebnisse liefern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try-fallbacks")}}
- Die Funktion [`anchor()`](/de/docs/Web/CSS/Reference/Values/anchor)
- Der Wert [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)
- Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
- Leitfaden [Fallback-Optionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
