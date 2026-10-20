---
title: "`position-area` CSS property"
short-title: position-area
slug: Web/CSS/Reference/Properties/position-area
l10n:
  sourceCommit: 93149226b6b94a770731d262508f5c4aa10bcbed
---

Mit der [CSS](/de/docs/Web/CSS)-Eigenschaft **`position-area`** kann ein an einem Ankerelement positioniertes Element relativ zu dessen Kanten angeordnet werden. Dazu wird das positionierte Element auf einer oder mehreren Zellen eines impliziten 3×3-Rasters platziert, dessen mittlere Zelle das Ankerelement bildet.

`position-area` bietet eine praktische Alternative dazu, ein Element mit {{Glossary("inset_properties", "Inset-Eigenschaften")}} und der Funktion {{cssxref("anchor()")}} an seinem Ankerelement auszurichten und relativ dazu zu positionieren. Das Rasterkonzept deckt den häufigen Anwendungsfall ab, die Kanten des umschließenden Blocks eines positionierten Elements relativ zu den Kanten seines Standard-Ankerelements anzuordnen.

Wenn ein Element kein Standard-Ankerelement hat oder nicht absolut positioniert ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft hieß ursprünglich `inset-area` und wurde unter diesem Namen in Chromium-Browsern mit denselben Eigenschaftswerten unterstützt. Aus Gründen der Abwärtskompatibilität werden beide Eigenschaftsnamen noch für kurze Zeit unterstützt.

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

Der Eigenschaftswert besteht aus zwei `<position-area>`-Schlüsselwörtern oder dem Schlüsselwort `none`. Wird nur ein `<position-area>`-Schlüsselwort angegeben, wird das zweite implizit ergänzt.

- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)
  - : Gibt den Bereich des Positionierungsrasters an, in dem ausgewählte positionierte Elemente platziert werden.

- `none`
  - : Es ist kein Positionierungsbereich festgelegt.

## Beschreibung

Die Eigenschaft `position-area` bietet eine Alternative zur Funktion `anchor()`, um Elemente relativ zu Ankerelementen zu positionieren. `position-area` basiert auf einem 3×3-Raster aus Zellen, dem sogenannten **Positionierungsraster**, dessen mittlere Zelle das Ankerelement bildet:

![Das Positionierungsraster, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Rasterzellen sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physischen Werte](/de/docs/Web/CSS/Reference/Values/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/Reference/Values/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end` sowie [Koordinatenentsprechungen](/de/docs/Web/CSS/Reference/Values/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben ebenfalls logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinatenentsprechungen — `x-start`, `center` und `x-end`.

Die Abmessungen der mittleren Zelle werden durch den [umschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements bestimmt, während die Abmessungen der äußeren Rastergrenzen durch den umschließenden Block des positionierten Elements bestimmt werden.

Der Wert [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) besteht aus einem oder zwei Schlüsselwörtern, die den Rasterbereich festlegen, in dem das positionierte Element platziert werden soll. Genauer gesagt wird der umschließende Block des positionierten Elements auf diesen Rasterbereich festgelegt.

Beispiele:

- Sie können einen Zeilen- und einen Spaltenwert angeben, um das positionierte Element in einer bestimmten einzelnen Rasterzelle zu platzieren. Beispielsweise platziert `top left` (logische Entsprechung `start start`) oder `bottom center` (logische Entsprechung `end center`) das positionierte Element in der oberen rechten beziehungsweise unteren mittleren Zelle.
- Sie können einen Zeilen- oder Spaltenwert zusammen mit einem `span-*`-Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert legt die Zeile oder Spalte fest, in der das positionierte Element zunächst mittig platziert wird. Der andere Wert gibt an, welche weiteren Zellen dieser Zeile oder Spalte überspannt werden. Zum Beispiel:
  - `top span-left` platziert das positionierte Element in der Mitte der oberen Zeile und lässt es die mittlere und die linke Zelle dieser Zeile überspannen.
  - `block-end span-inline-end` platziert das positionierte Element in der Mitte der Zeile am Blockende und lässt es die mittlere Zelle und die Zelle am Inline-Ende dieser Zeile überspannen.
  - `bottom span-all` und `y-end span-all` platzieren das positionierte Element in der Mitte der unteren Zeile und lassen es alle drei Zellen dieser Zeile überspannen: die linke, die mittlere und die rechte Zelle.

Ausführliche Informationen zu Ankerfunktionen, ihrer Verwendung und der Eigenschaft `position-area` finden Sie im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und im Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using), insbesondere im Abschnitt zum [Festlegen einer `position-area`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn für ein positioniertes Element ein Wert für [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) festgelegt wird, ändert sich das Standardverhalten einiger seiner Eigenschaften, damit es standardmäßig passend ausgerichtet wird.

#### Wert `normal` bei Eigenschaften zur Selbstausrichtung

Der Wert `normal` der Eigenschaften zur Selbstausrichtung, darunter {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}, verhält sich wie `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert standardmäßig für eine Eigenschaft zur Selbstausrichtung gilt, hängt von der Positionierung des Elements ab:

- Wenn der Wert von `position-area` in einer Achse den mittleren Bereich angibt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls entspricht das Verhalten dem Gegenstück des durch `position-area` angegebenen Bereichs. Gibt der Wert von `position-area` beispielsweise den Anfangsbereich einer Achse an, ist die Standardausrichtung in dieser Achse `end`.

Wenn beispielsweise `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert wird und die mittlere Zelle sowie die Zelle am Anfang dieser Zeile überspannt. In diesem Fall gelten für die Eigenschaften zur Selbstausrichtung standardmäßig `align-self: end` und `justify-self: anchor-center`.

#### Inset-Eigenschaften und -Werte

Wenn ein an einem Ankerelement positioniertes Element mit der Eigenschaft `position-area` angeordnet wird, geben festgelegte {{Glossary("inset_properties", "Inset-Eigenschaften")}} wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}} Abstände vom Positionierungsbereich an. Auch einige andere Eigenschaftswerte wie [`max-block-size: 100%`](/de/docs/Web/CSS/Reference/Properties/max-block-size) beziehen sich dann auf den Positionierungsbereich. Inset-Eigenschaften, die auf `auto` gesetzt sind oder standardmäßig diesen Wert haben, verhalten sich so, als wäre ihr Wert `0`.

### Ein Hinweis zur Breite des positionierten Elements

Wenn für das positionierte Element keine bestimmte Größe festgelegt ist, entspricht seine Größe standardmäßig seiner {{Glossary("Intrinsic_Size", "intrinsischen Größe")}}. Sie wird jedoch auch von der Größe des Positionierungsrasters beeinflusst.

Wird das positionierte Element in einer einzelnen oberen mittleren, unteren mittleren oder zentralen Zelle platziert, entspricht seine Blockgröße der Größe des umschließenden Blocks des Ankerelements; dabei erstreckt es sich entsprechend nach oben, nach unten oder in beide Richtungen. Das positionierte Element wird an der angegebenen Rasterzelle ausgerichtet und übernimmt die Breite des Ankerelements. Sein Inhalt darf jedoch nicht überlaufen — seine minimale `width` entspricht seiner `min-content`-Breite (die durch die Breite seines längsten Wortes bestimmt wird).

Wird das positionierte Element in einer anderen einzelnen Rasterzelle platziert (etwa mit `position-area: top left`) oder so festgelegt, dass es zwei oder mehr Rasterzellen überspannt (beispielsweise mit `position-area: bottom span-all`), wird es am angegebenen Rasterbereich ausgerichtet, verhält sich aber so, als wäre seine {{cssxref("width")}} auf `max-content` gesetzt. Seine Größe richtet sich nach der Größe seines umschließenden Blocks, die ihm bei `position: fixed` vorgegeben wurde. Es wird so breit wie sein Textinhalt, kann jedoch auch durch den Rand des `<body>` begrenzt werden.

### Popovers mit `position-area` positionieren

Wenn Sie [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) mit `position-area` positionieren, beachten Sie: Der verwendete Wert `auto` für {{Glossary("Inset_properties", "Inset-")}} und {{cssxref("margin")}}-Eigenschaften wird bei jedem Element, dessen `position-area`-Wert nicht `none` ist, zu `0` aufgelöst. Dadurch stehen [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) nicht im Widerspruch zur Position, die Sie mit `position-area` festlegen möchten.

Bei der Funktion {{cssxref("anchor()")}} ist das anders — siehe [Popovers mit `anchor()` positionieren](/de/docs/Web/CSS/Reference/Values/anchor#using_anchor_to_position_popovers).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element mit der Eigenschaft `position-area` an seinem zugehörigen Ankerelement ausgerichtet und relativ dazu positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zum `<div>` positioniert. Außerdem fügen wir einen Style-Block hinzu, dessen Inhalt sichtbar gemacht wird. Alle Elemente können über das Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) direkt bearbeitet werden.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Mit der Eigenschaft {{cssxref("anchor-name")}} machen wir das `<div>` zu einem Ankerelement. Anschließend verknüpfen wir das absolut positionierte `<p>` damit, indem wir für seine Eigenschaft {{cssxref("position-anchor")}} denselben Ankernamen festlegen.

Wir setzen `position-area` zunächst auf `top center`. Dieser Wert wird mit einem `p`-Selektor festgelegt und hat daher eine geringere [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) als jeder Wert, der im `<style>`-Block mit dem [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) `.positionedElement` hinzugefügt wird. Sie können den anfänglichen `position-area`-Wert daher überschreiben, indem Sie im Style-Block einen anderen Wert für `position-area` festlegen.

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

#### Ergebnis

{{ EmbedLiveSample("Basic example", "100%", "360") }}

Ändern Sie die Textmenge im am Ankerelement positionierten Element, um zu sehen, wie es wächst. Versuchen Sie auch, die Eigenschaft `position-area` auf einen anderen Wert wie `center` zu setzen.

### Vergleich von `position-area`-Werten

Diese Demo erstellt ein Ankerelement und richtet ein positioniertes Element daran aus. Über ein Dropdown-Menü können Sie verschiedene `position-area`-Werte für das positionierte Element auswählen und deren Wirkung beobachten. Bei einer der Optionen erscheint ein Textfeld, in das Sie einen eigenen Wert eingeben können. Außerdem können Sie mit einem Kontrollkästchen `writing-mode: vertical-lr` ein- und ausschalten. So lässt sich beobachten, wie sich `position-area`-Werte bei unterschiedlichen Schreibrichtungen auswirken.

#### HTML

Im HTML definieren wir zwei {{htmlelement("div")}}-Elemente: eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Sie dienen als Ankerelement beziehungsweise als positioniertes Element, das damit verknüpft wird. Beide haben das Attribut `contenteditable` und können daher direkt bearbeitet werden.

Außerdem haben wir zwei Formulare hinzugefügt. Sie enthalten die Elemente {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) zum Festlegen verschiedener `position-area`-Werte sowie das Element [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox), mit dem sich der vertikale {{cssxref("writing-mode")}} ein- und ausschalten lässt. Der zugehörige Code und das JavaScript sind der Kürze halber ausgeblendet.

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

Im CSS erklären wir zunächst das `anchor`-`<div>` zum Ankerelement, indem wir ihm über die Eigenschaft {{cssxref("anchor-name")}} einen Ankernamen zuweisen.

Das positionierte Element wird mit dem Ankerelement verknüpft, indem dessen Ankername als Wert der Eigenschaft {{cssxref("position-anchor")}} des positionierten Elements festgelegt wird. Mit `position-area: top left` geben wir ihm außerdem eine Anfangsposition; diese wird überschrieben, wenn im `<select>`-Menü neue Werte ausgewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`. So bleibt die Position der beiden Elemente zueinander erkennbar, wenn ein `position-area`-Wert das positionierte Element über dem Ankerelement platziert.

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

Wählen Sie im `<select>`-Menü andere `position-area`-Werte aus, um deren Wirkung auf die Position der Infobox zu sehen. Wählen Sie die Option „Custom“ und geben Sie eigene `position-area`-Werte in das Textfeld ein, um deren Wirkung zu prüfen. Fügen Sie dem Ankerelement und dem daran positionierten Element Text hinzu, um zu sehen, wie Letzteres abhängig vom `position-area`-Wert wächst. Aktivieren Sie schließlich das Kontrollkästchen und probieren Sie verschiedene `position-area`-Werte aus. So können Sie feststellen, welche Werte bei unterschiedlichen Schreibrichtungen zum gleichen Ergebnis führen und welche nicht.

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
- Leitfaden [Ausweichoptionen und bedingtes Ausblenden bei Überlauf](/de/docs/Web/CSS/Guides/Anchor_positioning/Try_options_hiding)
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
