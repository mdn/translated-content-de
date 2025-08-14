---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: c71bdfc071c3d86009286734f2c8437243e4ad1f
---

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Anker-positionierten Element, relativ zu den Rändern des zugehörigen Ankerelements positioniert zu werden, indem das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3-Gitters platziert wird, wobei das Ankerelement die mittlere Zelle bildet.

`position-area` bietet eine bequeme Alternative zum Verankern und Positionieren eines Elements relativ zum Anker über {{Glossary("inset_properties", "Einsatz-Eigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das gitterbasierte Konzept löst den häufigen Anwendungsfall, die Ränder des Enthaltensblocks des positionierten Elements relativ zu den Rändern seines Standardankerelements zu positionieren.

Wenn ein Element kein Standardankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` mit denselben Eigenschaftswerten unterstützt und benannt. Beide Eigenschaftsnamen werden für kurze Zeit aus Gründen der Abwärtskompatibilität unterstützt.

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
  - : Gibt den Bereich des Positionsbereichsgitters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Es wird kein Positionsbereich festgelegt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. `position-area` basiert auf dem Konzept eines 3x3-Gitters von Kacheln, genannt **position-area grid**, wobei das Ankerelement die mittlere Kachel bildet:

![Das position-area Gitter, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Die Gitterkacheln sind in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden repräsentiert durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom`. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end`, und [Koordinaten-Entsprechungen](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden repräsentiert durch die physikalischen Werte `left`, `center` und `right`. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end`, und Koordinaten-Entsprechungen — `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [Enthaltensblock](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Dimensionen des äußeren Rands des Gitters durch den Enthaltensblock des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Gitters definieren, in dem das positionierte Element platziert werden soll. Genau genommen wird der Enthaltensblock des positionierten Elements auf den Gitterbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einer einzelnen, spezifischen Gitterzelle zu platzieren — zum Beispiel, `top left` (logische Entsprechung `start start`) oder `bottom center` (logische Entsprechung `end center`) werden das positionierte Element in der oberen linken oder unteren mittleren Zelle platzieren.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, in der Mitte platziert, und der andere gibt die anderen Kacheln dieser Zeile oder Spalte an, die überspannt werden sollen. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die mittleren und linken Kacheln dieser Zeile überspannt wird.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Block-Endzeile platziert und über die mittleren und inline-Endkacheln dieser Zeile überspannt wird.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Zeile platziert und über drei Zellen überspannt wird, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Zeile.

Für detaillierte Informationen zu Ankerfunktionen, Nutzung und der `position-area` Eigenschaft, sehen Sie sich das Modul für [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Leitfaden zur Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) an, insbesondere den Abschnitt über [das Festlegen einer `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf einem positionierten Element eingestellt ist, wird das Standardverhalten einiger seiner Eigenschaften angepasst, um eine gute Standardausrichtung zu gewährleisten.

#### Selbstausrichtungs-Eigenschaft `normal` Wert

Der `normal` Wert der Selbstausrichtungs-Eigenschaften, darunter {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welchen Wert eine Selbstausrichtungs-Eigenschaft standardmäßig annimmt, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert den mittleren Bereich in einer Achse angibt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil des durch die `position-area` Eigenschaft spezifizierten Bereichs. Zum Beispiel, wenn der `position-area` Wert den Startbereich seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die mittleren und startenden Kacheln dieser Zeile überspannt wird. In diesem Fall werden die Selbstausrichtungs-Eigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` eingestellt.

#### Einsatz-Eigenschaften und Werte

Wenn ein anker-positioniertes Element mit der `position-area` Eigenschaft positioniert wird, spezifizieren alle gesetzten {{Glossary("inset_properties", "Einsatz-Eigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Versätze vom Positionsbereich. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), werden ebenfalls relativ zum Positionsbereich sein. Alle Einsatz-Eigenschaften, die auf `auto` gesetzt oder standardmäßig auf `auto` eingestellt sind, verhalten sich so, als ob ihr Wert auf `0` gesetzt wäre.

### Ein Exkurs zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe aufweist, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} gesetzt, aber auch von der Größe des Positionsbereichsgitters beeinflusst.

Wenn das positionierte Element in einer einzelnen Top-Center, Bottom-Center oder Center-Center Zelle platziert wird, wird seine Blockgröße die gleiche wie die Größe des Enthaltensblocks des Ankers sein, der nach oben, unten oder in beide Richtungen wächst. Das positionierte Element wird mit der angegebenen Gitterzelle ausgerichtet, aber die gleiche Breite wie das Ankerelement haben. Es wird jedoch nicht erlauben, dass sein Inhalt überläuft — seine minimale `width` wird sein `min-content` (wie durch die Breite des längsten Wortes definiert).

Wenn das positionierte Element in einer anderen einzelnen Gitterzelle (zum Beispiel mit `position-area: top left`) platziert wird oder so eingestellt ist, dass es zwei oder mehr Gitterzellen überspannt (zum Beispiel mit `position-area: bottom span-all`), wird es mit dem angegebenen Gitterbereich ausgerichtet, aber sich verhalten, als ob es eine {{cssxref("width")}} von `max-content` darauf gesetzt hat. Es wird entsprechend der Größe seines Enthaltensblocks dimensioniert, der die Größe ist, die ihm zugewiesen wurde, als es auf `position: fixed` gesetzt war. Es wird so breit wie der Textinhalt gestreckt, obwohl es auch durch den Rand des `<body>` eingeschränkt werden kann.

### Verwendung von `position-area` zur Positionierung von Popovers

Wenn Sie `position-area` zur Positionierung von [popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) verwenden, beachten Sie, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) möglicherweise mit der Position, die Sie zu erzielen versuchen, in Konflikt stehen können. Die üblichen Verdächtigen sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.my-popover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe untersucht [Möglichkeiten, um zu vermeiden, dass dieses Workaround erforderlich ist](https://github.com/w3c/csswg-drafts/issues/10258).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element mit der `position-area` Eigenschaft relativ zu seinem zugehörigen Anker verankert und positioniert.

#### HTML

Das HTML umfasst ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zum `<div>` positioniert. Wir fügen auch ein sichtbares Stil-Block hinzu. Allen Elementen ist das direkte Bearbeiten über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut erlaubt.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Dann assoziieren wir das absolut positionierte `<p>` damit, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den anfänglichen `position-area` Wert auf `top center`. Dieser Wert wird auf einem `p` Selektor gesetzt, sodass der Wert weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) als jeder im `<style>` Block hinzugefügte Wert der `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hat. Daher können Sie den anfänglichen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert im Stil-Block setzen.

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

{{ EmbedLiveSample("Einfaches Beispiel", "100%", "360") }}

Versuchen Sie, die Menge an Text im anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den Wert der `position-area` Eigenschaft in etwas anderes wie `center` zu ändern.

### `position-area` Wertvergleich

Diese Demo erstellt einen Anker und verknüpft ein positioniertes Element damit. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area` Werte auszuwählen, um zu sehen, wie sie das positionierte Element beeinflussen. Eine der Optionen zeigt ein Textfeld an, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, damit Sie beobachten können, wie sich `position-area` Werte in verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sind als das Ankerelement und das positionierte Element vorgesehen, die wir miteinander assoziieren werden. Wir haben das `contenteditable` Attribut auf beide gesetzt, um sie direkt bearbeitbar zu machen.

Wir haben auch zwei Formulare hinzugefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente zum Festlegen verschiedener `position-area` Werte sowie das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} enthalten. Der Code dafür, zusammen mit dem JavaScript, wurde der Kürze halber ausgeblendet.

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

Im CSS erklären wir zuerst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen.

Das positionierte Element wird mit dem Ankerelement assoziiert, indem sein Ankername als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements gesetzt wird. Wir geben ihm auch eine anfängliche Position mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü gewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass, wenn das positionierte Element einen `position-area` Wert erhält, der es über dem Anker platziert, Sie die Position der Elemente relativ zueinander sehen können.

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

{{ EmbedLiveSample("`position-area` Wertvergleich", "100%", "360") }}

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um zu sehen, wie sie die Position der Infobox beeinflussen. Wählen Sie den "Custom"-Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um ihre Wirkung zu sehen. Fügen Sie Text zum Anker und zu den anker-positionierten Elementen hinzu, um zu sehen, wie das anker-positionierte Element basierend auf dem `position-area` Wert wächst. Überprüfen Sie schließlich das Kontrollkästchen und experimentieren Sie dann mit verschiedenen `position-area` Werten, um zu sehen, welche in verschiedenen Schreibmodi dasselbe Ergebnis liefern und welche unterschiedliche Ergebnisse liefern.

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
- [Fallback-Optionen und bedingtes Verbergen für Überlauf](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
