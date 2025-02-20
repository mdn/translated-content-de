---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}{{SeeCompatTable}}

Die **`position-area`** [CSS](/de/docs/Web/CSS)-Eigenschaft ermöglicht es, ein ankerpositioniertes Element relativ zu den Kanten seines zugehörigen Ankerelements zu positionieren, indem das positionierte Element auf eine oder mehrere Kacheln eines impliziten 3x3-Rasters platziert wird, wobei das Ankerelement die zentrale Zelle einnimmt.

`position-area` bietet eine praktische Alternative zur Verankerung und Positionierung eines Elements relativ zu seinem Anker über {{Glossary("inset_properties", "Einfügeseigenschaften")}} und die {{cssxref("anchor()")}}-Funktion. Das auf einem Raster basierende Konzept löst den häufigen Anwendungsfall, die Kanten des enthaltenden Blocks des positionierten Elements relativ zu den Kanten seines Standardankerelements zu positionieren.

Wenn ein Element kein Standardankerelement hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keine Wirkung.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` bezeichnet und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit unterstützt, um die Abwärtskompatibilität zu gewährleisten.

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

Der Eigenschaftenwert besteht aus zwei `<position-area>` Schlüsselbegriffen oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff angegeben ist, wird der zweite implizit angenommen.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)

  - : Gibt den Bereich des Positionierungsrasters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`

  - : Kein Positionierungsbereich ist festgelegt.

## Beschreibung

Die `position-area`-Eigenschaft bietet eine Alternative zur `anchor()`-Funktion, um Elemente relativ zu Ankern zu positionieren. `position-area` basiert auf dem Konzept eines 3x3-Kachelraster, das als **Positionierungsraster** bezeichnet wird, wobei das Ankerelement die zentrale Kachel ist:

![Das Positionierungsraster, wie unten beschrieben](position-area.png)

Das Raster ist in Zeilen und Spalten unterteilt:

- Die drei Zeilen werden durch die [physischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Äquivalente](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end` sowie [Koordinatenäquivalente](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Äquivalente wie `inline-start`, `center` und `inline-end` sowie Koordinatenäquivalente — `x-start`, `center` und `x-end`.

Die Dimensionen der zentralen Kachel werden durch den [enthaltenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Ankerelements definiert, während die Maße der äußeren Kanten des Rasters durch den enthaltenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in dem das positionierte Element platziert werden soll. Ganz genau wird der enthaltende Block des positionierten Elements auf den Rasterbereich eingestellt.

Zum Beispiel:

- Sie können einen Zeilenwert und einen Spaltenwert angeben, um das positionierte Element in einer einzelnen, spezifischen Rasterzelle zu platzieren — zum Beispiel `top left` (logisches Äquivalent `start start`) oder `bottom center` (logisches Äquivalent `end center`) platziert das positionierte Element in der oberen linken oder der unteren mittleren Zelle.
- Sie können einen Zeilen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert spezifiziert die Zeile oder Spalte, in der das positionierte Element platziert werden soll, und die andere gibt die zu überspannenden Kacheln dieser Reihe oder Spalte an. Beispiele:
  - `top span-left` platziert das positionierte Element in der Mitte der oberen Reihe und spannt sich über die mittlere und linke Kachel dieser Reihe.
  - `block-end span-inline-end` platziert das positionierte Element in der Mitte der unteren Reihe und spannt sich über die mittlere und inline-end Kachel dieser Reihe.
  - `bottom span-all` und `y-end span-all` platzieren das positionierte Element in der Mitte der unteren Reihe und spannen sich über drei Zellen, in diesem Fall die linken, mittleren und rechten Kacheln der unteren Reihe.

Für detaillierte Informationen zu Anker-Funktionalitäten, Nutzung und der `position-area`-Eigenschaft, siehe die [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modulseite und den [Leitfaden zur Nutzung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using), insbesondere den Abschnitt zum [Festlegen eines `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Adjustiertes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert auf einem positionierten Element festgelegt ist, werden einige seiner Eigenschaften ihr Standardverhalten anpassen, um eine gute Standardausrichtung zu gewährleisten.

#### Eigenschaft `normal` für die Selbstausrichtung

Der `normal`-Wert der Selbstausrichtungs-Eigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder wie `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert als Standard angenommen wird, hängt von der Positionierung des Elements ab:

- Wenn der `position-area`-Wert den zentralen Bereich einer Achse spezifiziert, so ist die Standardausrichtung für diese Achse `anchor-center`.
- Andernfalls verhält sich der Standard entgegengesetzt zum Bereich, der durch die `position-area`-Eigenschaft spezifiziert wird. Zum Beispiel, wenn der `position-area`-Wert den Startbereich seiner Achse spezifiziert, so ist die Standardausrichtung für diese Achse `end`.

Beispielsweise, wenn `writing-mode` auf `horizontal-tb` gesetzt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Reihe platziert wird und über die mittlere und Start-Kacheln dieser Reihe gespannt wird. In diesem Fall sind die Standardwerte der Selbstausrichtungs-Eigenschaften `align-self: end` und `justify-self: anchor-center`.

#### Einfügeseigenschaften und Werte

Wenn ein ankerpositioniertes Element unter Verwendung der `position-area`-Eigenschaft positioniert wird, geben alle festgelegten {{Glossary("inset_properties", "Einfügeseigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, die Verschiebungen aus dem Positionierungsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), beziehen sich ebenfalls auf den Positionierungsbereich. Alle Einfügeseigenschaften, die festgelegt oder auf `auto` eingestellt sind, verhalten sich, als wäre ihr Wert auf `0` gesetzt.

### Anmerkung zur Breite des positionierten Elements

Wenn das positionierte Element keine explizite Größe festgelegt hat, wird seine Größe standardmäßig auf seine {{Glossary("Intrinsic_Size", "intrinsische Größe")}} eingestellt, die jedoch auch von der Größe des Positionierungsrasters beeinflusst wird.

Wenn das positionierte Element in einer einzigen oberen mittleren, unteren mittleren oder zentralen zentralen Zelle platziert wird, entspricht seine Blockgröße der Größe des enthaltenden Blocks des Anker-Elements, wobei es nach oben, unten oder in beide Richtungen wächst. Das positionierte Element richtet sich an der angegebenen Rasterzelle aus, übernimmt jedoch dieselbe Breite wie das Ankerelement. Es lässt seinen Inhalt jedoch nicht überlaufen — seine minimale `width` ist die `min-content` (definiert durch die Breite seines längsten Wortes).

Wenn das positionierte Element in einer anderen einzelnen Rasterzelle platziert wird (zum Beispiel mit `position-area: top left`) oder so eingestellt wird, dass es zwei oder mehr Rasterzellen überspannt (zum Beispiel mit `position-area: bottom span-all`), richtet es sich auf den angegebenen Rasterbereich aus, verhält sich jedoch, als hätte es {{cssxref("width")}} mit `max-content` gesetzt. Es wird gemäß seiner enthaltenden Blockgröße dimensioniert, was die von ihm vermittelte Größe ist, wenn es auf `position: fixed` gesetzt wurde. Es dehnt sich so weit aus, wie der Textinhalt es erfordert, kann jedoch auch durch die Kante des `<body>` begrenzt werden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grundlegendes Beispiel

In diesem Beispiel wird ein positioniertes Element relativ zu seinem zugeordneten Anker mit der `position-area`-Eigenschaft verankert und positioniert.

#### HTML

Das HTML beinhaltet ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Das `<p>` wird mit CSS relativ zum `<div>` positioniert. Wir schließen außerdem einen Stil-Block ein, der sichtbar gemacht wird. Alle Elemente sind direkt bearbeitbar mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut ausgestattet.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: CHANGEME;
  }
</style>
```

#### CSS

Wir verwandeln das `<div>` mit der Eigenschaft {{cssxref("anchor-name")}} in ein Ankerelement. Anschließend verknüpfen wir das absolut positionierte `<p>` mit dem Ankerelement, indem wir den Wert von {{cssxref("position-anchor")}} auf denselben Ankernamen setzen.

Wir setzen den initialen `position-area`-Wert auf `top center`. Dieser Wert wird in einem `p`-Selektor gesetzt, sodass er weniger [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) hat als ein Wert, der dem `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) im `<style>`-Block hinzugefügt wird. Folglich kann der initiale `position-area`-Wert überschrieben werden, indem ein `position-area`-Wert im Stil-Block gesetzt wird.

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

Versuchen Sie, die Textmenge im ankerpositionierten Element zu ändern, um zu sehen, wie es wächst. Ändern Sie auch den ungültigen "CHANGEME"-Wert der `position-area`-Eigenschaft in einen gültigen Wert.

### Vergleich von `position-area`-Werten

Dieses Demo erstellt einen Anker und verbindet ein positioniertes Element mit diesem. Ein Dropdown-Menü ermöglicht das Auswählen verschiedener `position-area`-Werte, um ihre Auswirkung zu sehen. Eine der Optionen zeigt ein Texteingabefeld an, in das Sie benutzerdefinierte Werte für `position-area` eingeben können. Außerdem gibt es ein Kontrollkästchen, um `writing-mode: vertical-lr` ein- und auszuschalten, was es Ihnen ermöglicht zu sehen, wie sich die Effekte von `position-area`-Werten zwischen verschiedenen Schreibrichtungen unterscheiden.

#### HTML

Im HTML spezifizieren wir zwei {{htmlelement("div")}}-Elemente, eines mit der Klasse `anchor` und eines mit der Klasse `infobox`. Diese sind als Ankerelement und das positionierte Element vorgesehen, die miteinander verbunden werden. Wir haben das `contenteditable`-Attribut für beide Elemente hinzugefügt, um sie direkt bearbeitbar zu machen.

Wir haben auch zwei Formulare eingefügt, die die {{htmlelement("select")}}- und [`<input type="text">`](/de/docs/Web/HTML/Element/input/text)-Elemente zum Festlegen verschiedener `position-area`-Werte sowie das [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox)-Element zum Wechseln der vertikalen {{cssxref("writing-mode")}} enthalten. Der Code dafür sowie das zugehörige JavaScript ist der Kürze halber ausgeblendet.

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

Im CSS deklarieren wir zuerst das `anchor` `<div>` als Ankerelement, indem wir über die Eigenschaft {{cssxref("anchor-name")}} einen Ankernamen festlegen.

Das positionierte Element wird dem Ankerelement zugeordnet, indem wir seinen Ankernamen als Wert der {{cssxref("position-anchor")}}-Eigenschaft des positionierten Elements festlegen. Außerdem wird ihm eine anfängliche Position mit `position-area: top left` zugewiesen; dies wird überschrieben, wenn neue Werte aus dem `<select>`-Menü ausgewählt werden. Schließlich setzen wir die {{cssxref("opacity")}} auf `0.8`, sodass Sie, wenn das positionierte Element einen `position-area`-Wert hat, der es über dem Anker positioniert, trotzdem ihre entsprechenden Positionen sehen können.

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

{{ EmbedLiveSample("`position-area` value comparison", "100%", "360") }}

Versuchen Sie, neue `position-area`-Werte aus dem `<select>`-Menü auszuwählen, um die Auswirkungen auf die Position des Infobox zu sehen. Wählen Sie den Wert "Custom" und versuchen Sie, benutzerdefinierte `position-area`-Werte in das Textfeld einzugeben, um deren Auswirkungen zu beobachten. Fügen Sie dem Anker und den ankerpositionierten Elementen Text hinzu, um zu sehen, wie sich das ankerpositionierte Element basierend auf dem `position-area`-Wert vergrößert. Aktivieren Sie schließlich das Kontrollkästchen und experimentieren Sie mit verschiedenen `position-area`-Werten, um zu sehen, welche dieselben Ergebnisse in unterschiedlichen Schreibmodi liefern und welche unterschiedliche Ergebnisse liefern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("position-anchor")}}
- {{cssxref("position-try-fallbacks")}}
- Die [`anchor()`](/de/docs/Web/CSS/anchor)-Funktion
- Der [`<position-area>`](/de/docs/Web/CSS/position-area_value)-Wert
- [Leitfaden zur Nutzung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
- [Overflow behandeln: Versuch mit alternativen und bedingtem Ausblenden](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding)
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning)-Modul
