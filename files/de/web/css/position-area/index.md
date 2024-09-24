---
title: position-area
slug: Web/CSS/position-area
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`position-area`** [CSS](/de/docs/Web/CSS) Eigenschaft ermöglicht es einem Ankerelement, relativ zu den Rändern seines zugehörigen Ankerelements positioniert zu werden, indem es das positionierte Element auf einer oder mehreren Kacheln eines impliziten 3x3 Rasters platziert, wobei das Ankerelement die mittlere Zelle ist.

`position-area` bietet eine praktische Alternative zum Verankern und Positionieren eines Elements relativ zu seinem Anker über {{glossary("Einrückungseigenschaften")}} und die {{cssxref("anchor()")}} Funktion. Das rasterbasierte Konzept löst das häufige Anwendungsfall, den Block des positionierten Elements relativ zu den Rändern seines Standardanker-Elements zu positionieren.

Wenn ein Element kein Standardanker-Element hat oder kein absolut positioniertes Element ist, hat diese Eigenschaft keinen Effekt.

> [!NOTE]
> Diese Eigenschaft wurde ursprünglich in Chromium-Browsern als `inset-area` benannt und unterstützt, mit denselben Eigenschaftswerten. Beide Eigenschaftsnamen werden für eine kurze Zeit zur Rückwärtskompatibilität unterstützt.

## Syntax

```css
/* Standardwert */
position-area: none;

/* Zwei <position-area> Schlüsselwörter, die eine einzige spezifische Kachel definieren */
position-area: top left;
position-area: start end;
position-area: block-start center;
position-area: inline-start block-end;
position-area: x-start y-end;
position-area: center y-self-end;

/* Zwei <position-area> Schlüsselwörter, die zwei Kacheln überspannen */
position-area: top span-left;
position-area: center span-start;
position-area: inline-start span-block-end;
position-area: y-start span-x-end;

/* Zwei <position-area> Schlüsselwörter, die drei Kacheln überspannen */
position-area: top span-all;
position-area: block-end span-all;
position-area: x-self-start span-all;

/* Ein <position-area> Schlüsselwort mit einem impliziten zweiten <position-area> Schlüsselwort  */
position-area: top; /* gleichwertig: top span-all */
position-area: inline-start; /* gleichwertig: inline-start span-all */
position-area: center; /* gleichwertig: center center */
position-area: span-all; /* gleichwertig: center center */
position-area: end; /* gleichwertig: end end */

/* Globale Werte */
position-area: inherit;
position-area: initial;
position-area: revert;
position-area: revert-layer;
position-area: unset;
```

### Werte

Der Eigenschaftswert besteht aus zwei `<position-area>` Schlüsselbegriffen oder dem Schlüsselwort `none`. Wenn nur ein `<position-area>` Schlüsselbegriff angegeben wird, wird der zweite Schlüsselbegriff impliziert.

- [`<position-area>`](/de/docs/Web/CSS/position-area_value)

  - : Gibt den Bereich des Positionierungsbereichsrasters an, auf dem ausgewählte positionierte Elemente platziert werden sollen.

- `none`

  - : Es ist kein Positionierungsbereich festgelegt.

## Beschreibung

Die `position-area` Eigenschaft bietet eine Alternative zur `anchor()` Funktion, um Elemente relativ zu Ankern zu positionieren. `position-area` basiert auf dem Konzept eines 3x3 Rasters von Kacheln, dem **Positionierungsbereichsraster**, mit dem Ankerelement als mittlere Kachel:

![Das Positionierungsbereichsraster, wie unten beschrieben](position-area.png)

Die Rasterkacheln sind in Reihen und Spalten unterteilt:

- Die drei Reihen werden durch die [physikalischen Werte](/de/docs/Web/CSS/position-area_value#physical_grid_keywords) `top`, `center` und `bottom` dargestellt. Sie haben auch [logische Entsprechungen](/de/docs/Web/CSS/position-area_value#logical_grid_keywords) wie `block-start`, `center` und `block-end` sowie [Koordinatenentsprechungen](/de/docs/Web/CSS/position-area_value#coordinate_grid_keywords) — `y-start`, `center` und `y-end`.
- Die drei Spalten werden durch die physikalischen Werte `left`, `center` und `right` dargestellt. Sie haben auch logische Entsprechungen wie `inline-start`, `center` und `inline-end` sowie Koordinatenentsprechungen — `x-start`, `center` und `x-end`.

Die Dimensionen der mittleren Kachel werden durch den [enthältenden Block](/de/docs/Web/CSS/Containing_block) des Ankerelements definiert, während die Dimensionen des äußeren Rändern des Rasters durch den enthältenden Block des positionierten Elements definiert werden.

Der [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert besteht aus einem oder zwei Schlüsselwörtern, die den Bereich des Rasters definieren, in dem das positionierte Element platziert werden soll. Genauer gesagt wird der enthältende Block des positionierten Elements auf den Rasterbereich gesetzt.

Beispielsweise:

- Sie können einen Reihenwert und einen Spaltenwert angeben, um das positionierte Element in einer einzigen, spezifischen Rasterzelle zu platzieren — zum Beispiel `top left` (logische Entsprechung `start start`) oder `bottom center` (logische Entsprechung `end center`) platziert das positionierte Element in der rechten oberen oder unteren mittleren Zelle.
- Sie können einen Reihen- oder Spaltenwert plus einen `span-*` Wert angeben, um zwei oder drei Zellen zu überspannen. Der erste Wert gibt die Reihe oder Spalte an, in der das positionierte Element platziert werden soll, indem es zunächst in der Mitte platziert wird, und der andere gibt die anderen Kacheln dieser Reihe oder Spalte an, die überspannt werden sollen. Beispielsweise:
  - `top span-left` bewirkt, dass das positionierte Element in der Mitte der oberen Reihe platziert wird und sich über die mittlere und linke Kachel dieser Reihe erstreckt.
  - `block-end span-inline-end` bewirkt, dass das positionierte Element in der Mitte der Blockendreihe platziert wird und sich über die mittlere und Inlineendkachel dieser Reihe erstreckt.
  - `bottom span-all` und `y-end span-all` bewirken, dass das positionierte Element in der Mitte der unteren Reihe platziert wird und sich über drei Zellen erstreckt, in diesem Fall die linke, mittlere und rechte Kachel der unteren Reihe.

Für detaillierte Informationen zu Ankerfunktionen, Verwendung und der `position-area` Eigenschaft, siehe die [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den Leitfaden [CSS Ankerpositionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using), insbesondere den Abschnitt über das [Setzen eines `position-area`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#setting_a_position-area).

### Angepasstes Standardverhalten

Wenn ein [`<position-area>`](/de/docs/Web/CSS/position-area_value) Wert auf einem positionierten Element gesetzt wird, werden einige seiner Eigenschaften ein angepasstes Standardverhalten haben, um eine gute Standardausrichtung bereitzustellen.

#### Selbst-Ausrichtungseigenschaft `normal` Wert

Der `normal` Wert der Selbst-Ausrichtungseigenschaften, einschließlich {{cssxref("align-items")}}, {{cssxref("align-self")}}, {{cssxref("justify-items")}}, und {{cssxref("justify-self")}}, verhält sich entweder als `start`, `end` oder [`anchor-center`](/de/docs/Web/CSS/CSS_anchor_positioning/Using#centering_on_the_anchor_using_anchor-center). Welcher Wert für eine Selbst-Ausrichtungseigenschaft standardmäßig angenommen wird, hängt von der Positionierung des Elements ab:

- Wenn der `position-area` Wert die zentrale Region in einer Achse angibt, ist die Standardausrichtung in dieser Achse `anchor-center`.
- Andernfalls ist das Verhalten das Gegenteil der Region, die durch die `position-area` Eigenschaft angegeben wird. Zum Beispiel, wenn der `position-area` Wert die Startregion seiner Achse angibt, ist die Standardausrichtung in dieser Achse `end`.

Zum Beispiel, wenn der `Schreibmodus` auf `horizontal-tb` eingestellt ist, bewirkt `position-area: top span-x-start`, dass das positionierte Element in der Mitte der oberen Reihe platziert wird und sich über die mittlere und Startkacheln dieser Reihe erstreckt. In diesem Fall werden die Selbst-Ausrichtungseigenschaften standardmäßig `align-self: end` und `justify-self: anchor-center` sein.

#### Einrückungseigenschaften und Werte

Wenn ein ankerpositioniertes Element unter Verwendung der `position-area` Eigenschaft positioniert wird, geben alle {{glossary("Einrückungseigenschaften")}}, wie {{cssxref("top")}} oder {{cssxref("inset-inline-end")}}, Verschiebungen vom Positionierungsbereich an. Einige andere Eigenschaftswerte, wie [`max-block-size: 100%`](/de/docs/Web/CSS/max-block-size), sind ebenfalls relativ zum Positionierungsbereich. Alle Einrückungseigenschaften, die auf `auto` gesetzt sind oder standardmäßig auf `auto` stehen, verhalten sich so, als ob ihr Wert auf `0` gesetzt wäre.

### Ein Exkurs zur Breite des positionierten Elements

Wenn das positionierte Element keine spezifische Größe hat, wird seine Größe standardmäßig auf seine [intrinsische Größe](/de/docs/Glossary/Intrinsic_Size) eingestellt, aber sie wird auch von der Größe des Positionierungsbereichsrasters beeinflusst.

Wenn das positionierte Element in einer einzigen oberen Mittelkachel, unteren Mittelkachel oder zentralen Kachel platziert wird, wird seine Blockgröße dieselbe wie die Größe des Anker enthältenden Blocks sein, wobei es nach oben, unten oder in beide Richtungen wächst. Das positionierte Element wird sich mit dem angegebenen Rasterquadrat ausrichten, aber dieselbe Breite wie das Ankerelement annehmen. Es erlaubt jedoch nicht, dass sein Inhalt überläuft — seine Mindestbreite wird seine `min-content` (wie durch die Breite seines längsten Wortes definiert) sein.

Wenn das positionierte Element in einem anderen einzelnen Rasterquadrat platziert wird (z.B. mit `position-area: top left`) oder so eingestellt wird, dass es zwei oder mehr Rasterquadrate überspannt (z.B. mit `position-area: bottom span-all`), wird es sich mit dem angegebenen Rasterbereich ausrichten, aber so verhalten, als hätte es eine {{cssxref("width")}} von `max-content` auf sich gesetzt. Es wird entsprechend seiner enthältenden Blockgröße bemessen, die die Größe ist, die ihm auferlegt wurde, als es auf `position: fixed` gesetzt wurde. Es wird sich so weit strecken wie der Textinhalt, obwohl es möglicherweise auch durch den Rand des `<body>` eingeschränkt wird.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

In diesem Beispiel wird ein positioniertes Element angehängt und relativ zu seinem zugehörigen Anker mithilfe der `position-area` Eigenschaft positioniert.

#### HTML

Das HTML enthält ein {{htmlelement("div")}} und ein {{htmlelement("p")}}. Der `<p>` wird relativ zu dem `<div>` mit CSS positioniert. Wir fügen auch einen Style-Block hinzu, der sichtbar gemacht wird. Alle Elemente sind so eingestellt, dass sie direkt über das [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) Attribut bearbeitet werden können.

```html-nolint
<div class="anchor" contenteditable="true">⚓︎</div>

<p class="positionedElement" contenteditable="true">This can be edited.</p>

<style contenteditable="true">.positionedElement {
    position-area: CHANGEME;
  }
</style>
```

#### CSS

Wir wandeln das `<div>` in ein Ankerelement mit der {{cssxref("anchor-name")}} Eigenschaft um. Wir assoziieren dann das absolut positionierte `<p>` damit, indem wir dessen {{cssxref("position-anchor")}} Wert auf denselben Ankernamen setzen.

Wir setzen den initialen `position-area` Wert auf `top center`. Dieser Wert wird auf einem `p` Selektor gesetzt, sodass der Wert eine geringere [Spezifität](/de/docs/Web/CSS/Specificity) hat als ein beliebiger Wert, der dem `<style>` Block's `.positionedElement` [Klassenselektor](/de/docs/Web/CSS/Class_selectors) hinzugefügt wird. Dadurch können Sie den initialen `position-area` Wert überschreiben, indem Sie einen `position-area` Wert innerhalb des Style-Blocks festlegen.

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

Versuchen Sie, die Textmenge im ankerpositionierten Element zu ändern, um zu sehen, wie es wächst. Versuchen Sie auch, den ungültigen "CHANGEME" Wert der `position-area` Eigenschaft in einen gültigen Wert zu ändern.

### Vergleich der `position-area` Werte

Dieses Demo erstellt einen Anker und verankert ein positioniertes Element daran. Es bietet auch ein Dropdown-Menü, das es Ihnen ermöglicht, verschiedene `position-area` Werte auszuwählen, um sie auf das positionierte Element anzuwenden und deren Effekt zu sehen. Eine der Optionen führt dazu, dass ein Textfeld erscheint, das es Ihnen ermöglicht, einen benutzerdefinierten Wert einzugeben. Schließlich wird ein Kontrollkästchen bereitgestellt, um `writing-mode: vertical-lr` ein- und auszuschalten, sodass Sie beobachten können, wie sich die `position-area` Werteffekte in verschiedenen Schreibmodi unterscheiden.

#### HTML

Im HTML geben wir zwei {{htmlelement("div")}} Elemente an, eines mit einer Klasse von `anchor` und eines mit einer Klasse von `infobox`. Diese sollen das Ankerelement und das positionierte Element sein, die wir damit assoziieren werden. Wir haben das `contenteditable` Attribut auf beiden hinzugefügt, was sie direkt bearbeitbar macht.

Wir haben auch zwei Formulare hinzugefügt, die die {{htmlelement("select")}} und [`<input type="text">`](/de/docs/Web/HTML/Element/input/text) Elemente zum Festlegen verschiedener `position-area` Werte sowie das [`<input type="checkbox">`](/de/docs/Web/HTML/Element/input/checkbox) Element zum Umschalten des vertikalen {{cssxref("writing-mode")}} enthalten. Der Code für diese Elemente sowie für das JavaScript wurde der Kürze halber ausgeblendet.

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

Im CSS erklären wir zuerst das `anchor` `<div>` als Ankerelement, indem wir einen Ankernamen darauf mit der {{cssxref("anchor-name")}} Eigenschaft festlegen.

Das positionierte Element wird dem Ankerelement zugeordnet, indem sein Ankername als Wert der {{cssxref("position-anchor")}} Eigenschaft des positionierten Elements festgelegt wird. Wir geben ihm auch eine Anfangsposition mit `position-area: top left`; dies wird überschrieben, wenn neue Werte aus dem `<select>` Menü gewählt werden. Schließlich setzen wir seine {{cssxref("opacity")}} auf `0.8`, sodass, wenn das positionierte Element einen `position-area` Wert erhält, der es über dem Anker platziert, Sie immer noch die relative Position der Elemente zueinander sehen können.

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

Versuchen Sie, neue `position-area` Werte aus dem `<select>` Menü auszuwählen, um zu sehen, welchen Effekt sie auf die Position der Infobox haben. Wählen Sie den „Custom“-Wert und versuchen Sie, einige benutzerdefinierte `position-area` Werte in das Texteingabefeld einzutragen, um deren Effekt zu sehen. Fügen Sie Text zum Anker und den ankerpositionierten Elementen hinzu, um zu sehen, wie das ankerpositionierte Element basierend auf dem `position-area` Wert wächst. Überprüfen Sie das Kontrollkästchen und experimentieren Sie dann mit verschiedenen `position-area` Werten, um zu sehen, welche im selben Ergebnis in verschiedenen Schreibmodi enden und welche unterschiedliche Ergebnisse produzieren.

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
- [CSS Ankerpositionierung verwenden](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
- [Umgang mit Überlauf: Try-Fallbacks und bedingtes Verstecken](/de/docs/Web/CSS/CSS_anchor_positioning/Try_options_hiding) Leitfaden
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
