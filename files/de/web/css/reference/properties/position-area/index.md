---
title: position-area
slug: Web/CSS/Reference/Properties/position-area
l10n:
  sourceCommit: f28f4c26a3d95e41d01a505af3388881abd6e49c
---

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Anker-positionierten Element, relativ zu den Rändern seines zugehörigen Ankerelements positioniert zu werden, indem das positionierte Element auf ein oder mehrere Kacheln eines impliziten 3x3 Gitters platziert wird, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine bequeme Alternative zum Anbinden und Positionieren eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Einfügeigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das gitterbasierte Konzept löst den häufigen Anwendungsfall, die Kanten des umschließenden Blocks des positionierten Elements relativ zu den Kanten seines Standard-Ankerelements zu positionieren.

Wenn ein Element kein Standard-Ankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` bezeichnet und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit zur Rückwärtskompatibilität unterstützt.

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

Der Eigenschaftswert ist entweder zwei `<position-area>` Schlüsselbegriffe oder das Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff angegeben ist, wird der zweite Schlüsselbegriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value)
  - : Gibt den Bereich des Positionierungsbereichs-Gitters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`
  - : Kein Positionierungsbereich wird gesetzt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. `position-area` basiert auf dem Konzept eines 3x3 Gitters von Kacheln, genannt das **position-area Gitter**, wobei das Ankerelement die mittlere Kachel ist:

![Das position-area Gitter, wie unten beschrieben](/shared-assets/images/diagrams/css/anchor-positioning/position-area.svg)

Das Gitter wird in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physischen Werte](/de/docs/Web/CSS/Reference/Values/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` repräsentiert. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/Reference/Values/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end` sowie [Koordinaten-Entsprechungen](/de/docs/Web/CSS/Reference/Values/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` repräsentiert. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinaten-Entsprechungen — `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [umschließenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Ankerelements definiert, während die Dimensionen des äußeren Rands des Gitters durch den umschließenden Block des positionierten Elements bestimmt werden.

Der [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert wird aus einem oder zwei Schlüsselwörtern zusammengesetzt, die festlegen, in welchem Bereich des Gitters das positionierte Element platziert werden soll. Genauer gesagt wird der umschließende Block des positionierten Elements auf den Gitterbereich gesetzt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einem einzigen, spezifischen Gitterquadrat zu platzieren — zum Beispiel wird `top left` (logische Entsprechung `start start`) oder `bottom center` (logische Entsprechung `end center`) das positionierte Element im oberen linken oder unteren mittleren Quadrat platzieren.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Zeile oder Spalte an, in der das positionierte Element platziert werden soll, indem es zunächst in die Mitte gesetzt wird, und der andere gibt die anderen Kacheln dieser Zeile oder Spalte an, die überspannt werden sollen. Zum Beispiel:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die Mittel- und die linke Kachel dieser Zeile überspannt wird.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der block-end Zeile platziert und über die Mittel- und inline-end Kachel dieser Zeile überspannt wird.
  - `bottom span-all` und `y-end span-all` bewirkt, dass das positionierte Element in der Mitte der unteren Zeile platziert und über drei Zellen überspannt wird, in diesem Fall die linke, mittlere und rechte Kachel der unteren Zeile.

Für detaillierte Informationen zu Ankerfunktionen, zur Verwendung und zur `position-area` Eigenschaft, siehe die [CSS Ankerpositionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul-Landing-Seite und den [Leitfaden zur Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using), speziell den Abschnitt über das [Setzen eines `position-area`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/Reference/Values/position-area_value) Wert auf ein positioniertes Element gesetzt ist, werden einige seiner Eigenschaften ihr Standardverhalten angepasst haben, um eine gute Standardausrichtung zu bieten.

#### Selbst-Ausrichtungs-Eigenschaft `normal` Wert

Der `normal` Wert der Selbst-Ausrichtungs-Eigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welchen Wert eine Selbst-Ausrichtungs-Eigenschaft standardmäßig hat, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert den mittleren Bereich auf einer Achse angibt, ist die Standardausrichtung auf dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil des vom `position-area` Wert angegeben Bereichs. Zum Beispiel, wenn der `position-area` Wert den Startbereich seiner Achse angibt, ist die Standardausrichtung auf dieser Achse `end`.

Zum Beispiel, wenn der `writing-mode` auf `horizontal-tb` gesetzt ist, verursacht `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Zeile platziert und über die Mittel- und Start-Kachel dieser Zeile überspannt wird. In diesem Fall werden die Selbst-Ausrichtungs-Eigenschaften standardmäßig auf `align-self: end` und `justify-self: anchor-center` gesetzt.

#### Einfügeigenschaften und Werte

Wenn ein Anker-positioniertes Element mithilfe der `position-area` Eigenschaft positioniert wird, geben alle gesetzten {{Glossary("inset_properties", "Einfügeigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Offsets vom Positionierungsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/Reference/Properties/max-block-size), werden ebenfalls relativ zum Positionierungsbereich sein. Alle Einfügeigenschaften, die gesetzt sind oder standardmäßig auf `auto` stehen, verhalten sich so, als ob ihr Wert auf `0` gesetzt wäre.

### Eine Randbemerkung zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe darauf gesetzt hat, wird seine Größe standardmäßig seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} sein, aber es wird auch von der Größe des position-area Gitters beeinflusst.

Wenn das positionierte Element in einer einzigen oberen-mittleren, unteren-mittleren oder mittleren-mittleren Zelle platziert wird, wird seine Blockgröße gleich der Blockgröße des Ankers sein, sich nach oben, unten oder in beide Richtungen entsprechend ausdehnend. Das positionierte Element wird sich mit dem angegebenen Gitterquadrat ausrichten, jedoch die gleiche Breite wie das Ankerelement übernehmen. Es wird jedoch nicht erlauben, dass sein Inhalt überläuft — seine minimale `width` wird sein `min-content` (wie durch die Breite seines längsten Wortes definiert) sein.

Wenn das positionierte Element in einem anderen einzelnen Gitterquadrat platziert wird (zum Beispiel mit `position-area: top left`) oder so eingestellt ist, dass es zwei oder mehr Gitterquadrate überspannt (zum Beispiel mit `position-area: bottom span-all`), wird es sich mit dem angegebenen Gitterbereich ausrichten, sich jedoch verhalten, als ob darauf eine {{cssxref("width")}} von `max-content` gesetzt wäre. Es wird entsprechend seiner umschließenden Blockgröße dimensioniert, was die Größe ist, die ihm aufgezwungen wurde, als es auf `position: fixed` gesetzt wurde. Es wird sich so weit wie der Textinhalt strecken, obwohl es auch durch die Kante des `<body>` eingeschränkt werden kann.

### Verwendung von `position-area` zur Positionierung von Popovers

Wenn Sie `position-area` zur Positionierung von [Popovers](/de/docs/Web/HTML/Reference/Global_attributes/popover) verwenden, seien Sie sich bewusst, dass [die Standardstile für Popovers](https://html.spec.whatwg.org/multipage/rendering.html#flow-content-3:~:text=%5Bpopover%5D%20%7B) mit der von Ihnen zu erreichenden Positionierung in Konflikt stehen könnten. Die üblichen Übeltäter sind die Standardstile für `margin` und `inset`, daher ist es ratsam, diese zurückzusetzen:

```css
.my-popover {
  margin: 0;
  inset: auto;
}
```

Die CSS-Arbeitsgruppe [untersucht Möglichkeiten, um dieses Workaround zu vermeiden](https://github.com/w3c/csswg-drafts/issues/10258).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element angebunden und relativ zu seinem zugehörigen Anker mithilfe der `position-area` Eigenschaft positioniert.

#### HTML

Das HTML beinhaltet ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird relativ zum `<div>` mit CSS positioniert. Wir fügen auch einen Stilblock hinzu, der sichtbar gemacht wird. Alle Elemente sind über das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) Attribut direkt bearbeitbar.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: top center;
  }
</style>
```

#### CSS

Wir konvertieren das `<div>` zu einem Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft. Wir verbinden dann das absolut positionierte `<p>` mit dem Anker, indem wir seinen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den initialen `position-area` Wert auf `top center`. Dieser Wert wird auf einen `p` Selektor gesetzt, sodass der Wert weniger [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) hat als alle Werte, die dem `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) im `<style>` Block hinzugefügt werden. Dadurch können Sie den initialen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Stilblocks setzen.

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

Versuchen Sie, die Textmenge im Anker-positionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den Wert der `position-area` Eigenschaft zu ändern, um zu sehen, wie sich die Position ändert.

### Vergleich der `position-area` Werte

Dieses Demo erstellt einen Anker und bindet ein positioniertes Element daran. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area` Werte auszuwählen, um deren Effekt zu sehen. Eine der Optionen lässt ein Textfeld erscheinen, das Ihnen erlaubt, einen benutzerdefinierten Wert einzugeben. Schließlich gibt es ein Kontrollkästchen, um `writing-mode: vertical-lr` ein- und auszuschalten, damit Sie beobachten können, wie sich die `position-area` Werte über verschiedene Schreibmodi hinweg unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}} Elemente, eines mit einem Anker und eines mit einer `infobox` Klasse. Diese sind dafür vorgesehen, das Ankerelement und das positionierte Element zu sein, die wir miteinander assoziieren werden. Wir haben das `contenteditable` Attribut für beide eingeschlossen, um sie direkt bearbeitbar zu machen.

Wir haben auch zwei Formulare eingebaut, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Reference/Elements/input/text) Elemente für das Setzen verschiedener `position-area` Werte sowie das [`<input type="checkbox">`](/de/docs/Web/HTML/Reference/Elements/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} enthalten. Der Code dafür, zusammen mit dem JavaScript, wurde aus Gründen der Kürze versteckt.

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

In dem CSS deklarieren wir zuerst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf über die {{cssxref("anchor-name")}} Eigenschaft setzen.

Das positionierte Element wird durch Setzen seines Ankernamens als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements mit dem Ankerelement assoziiert. Wir geben ihm auch eine Anfangsposition mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü gewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, damit, wenn dem positionierten Element ein `position-area` Wert zugewiesen wird, das es über den Anker legt, Sie immer noch die Position der Elemente relativ zueinander sehen können.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um die Auswirkungen auf die Infobox-Position zu sehen. Wählen Sie den "Benutzerdefiniert" Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzugeben, um deren Auswirkungen zu sehen. Fügen Sie Text zu den Anker- und dem Anker-positionierten Elementen hinzu, um zu sehen, wie das Anker-positionierte Element basierend auf dem `position-area` Wert wächst. Schließlich können Sie das Kontrollkästchen aktivieren und dann mit verschiedenen `position-area` Werten experimentieren, um zu sehen, welche dieselben Ergebnisse über verschiedene Schreibmodi hinweg geben und welche unterschiedliche Ergebnisse liefern.

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
