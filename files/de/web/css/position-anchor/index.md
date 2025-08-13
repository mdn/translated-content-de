---
title: position-anchor
slug: Web/CSS/position-anchor
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`position-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert den Ankernamen des **Ankerelements** (d.h. ein Element, das einen **Ankernamen** über die {{cssxref("anchor-name")}} Eigenschaft festgelegt hat), mit dem ein positioniertes Element assoziiert ist.

## Syntax

```css
/* Single values */
position-anchor: auto;
position-anchor: --anchor-name;

/* Global values */
position-anchor: inherit;
position-anchor: initial;
position-anchor: revert;
position-anchor: revert-layer;
position-anchor: unset;
```

### Werte

- `auto`
  - : Assoziiert ein positioniertes Element mit seinem impliziten Ankerelement, falls es eines besitzt — zum Beispiel, wie es durch das nicht standardisierte HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) festgelegt wird.

- {{cssxref("dashed-ident")}}
  - : Der Name des Ankerelements, mit dem das positionierte Element assoziiert werden soll, wie er in der {{cssxref("anchor-name")}} Eigenschaft des Ankerelements aufgelistet ist. Dies ist bekannt als der **standardmäßige Ankerspezifizierer**.

## Beschreibung

Diese Eigenschaft ist nur für "positionierte" Elemente relevant — Elemente und Pseudo-Elemente, die eine {{cssxref("position")}} von `absolute` oder `fixed` haben.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Assoziation, eine Position und einen Ort. Die Eigenschaften `position-anchor` und {{cssxref("anchor-name")}} bieten eine explizite Assoziation.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die Eigenschaft `anchor-name` gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft des positionierten Elements festgelegt wird, sind die beiden Elemente assoziiert.

Wenn es mehrere Ankerelemente mit dem im `position-anchor` aufgeführten Ankernamen gibt, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge mit diesem Ankernamen assoziiert.

Um ein positioniertes Element mit seinem Anker zu verbinden, muss es relativ zu einem Ankerelement platziert werden, indem eine Ankerpositionierungsfunktion verwendet wird, wie die {{cssxref("anchor()")}} Funktion (als Wert auf {{Glossary("inset_properties", "inset properties")}}) oder die {{cssxref("position-area")}} Eigenschaft.

Wenn der assoziierte Anker verborgen ist, zum Beispiel durch {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, da es {{cssxref("content-visibility", "content-visibility: hidden")}} darauf gesetzt hat, wird das ankerpositionierte Element nicht angezeigt.

Die `position-anchor` Eigenschaft wird auf allen Elementen unterstützt, die positioniert sind, einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudo-Elemente sind implizit am gleichen Element verankert wie das Ursprungselement des Pseudo-Elements, es sei denn, es wurde anders angegeben.

Für weitere Informationen zu Ankerfunktionen und deren Verwendung siehe die [CSS Ankerpositionierungs]-Modul-Startseite und den [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe die `anchor-name` Dokumentation für [Grundlegende Verwendung](/de/docs/Web/CSS/anchor-name#basic_usage) und zusätzliche [`position-anchor` Beispiele](/de/docs/Web/CSS/anchor-name#examples).

### Verwendung eines Schieberegler-Daumens als Anker

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Daumen eines Bereichschiebers ist.

#### HTML

Wir fügen ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Element und ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output) Element hinzu, um den Wert des Bereichs anzuzeigen. Der im `<output>` Element angezeigte Wert wird über JavaScript aktualisiert, wenn sich der Schiebereglerwert ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Daumen, dargestellt durch das [`::-webkit-slider-thumb`](/de/docs/Web/CSS/::-webkit-slider-thumb) Pseudo-Element, einen Ankernamen von `--thumb`. Dann setzen wir diesen Namen als Wert der `position-anchor` Eigenschaft des `<output>` Elements und geben ihm einen {{cssxref("position")}} Wert von `fixed`. Diese Schritte assoziieren das `<output>` mit dem Daumen.

Schließlich verwenden wir die Eigenschaften {{cssxref("left")}} und {{cssxref("top")}} mit {{cssxref("anchor()")}} Werten, um das `<output>` relativ zum Daumen zu positionieren.

```css hidden
body {
  display: grid;
  place-items: center;
  height: 100vh;
  font-size: 1.4rem;
  font-family: sans-serif;
}
input {
  width: 33vw;
}
output {
  background: cyan;
  border: 2px solid darkblue;
  padding: 3px 6px;
  border-radius: 10px;
  font-size: 1.2rem;
}
```

```css
input::-webkit-slider-thumb {
  anchor-name: --thumb;
}

output {
  position-anchor: --thumb;
  position: absolute;
  left: anchor(right);
  bottom: anchor(top);
}
```

#### JavaScript

Wir fügen einen Ereignislistener hinzu, der den Inhalt des `<output>` Elements aktualisiert, wenn sich der Wert des `<input>` ändert:

```js
const input = document.querySelector("input");
const output = document.querySelector("output");

input.addEventListener("input", (event) => {
  output.innerText = `${input.value}`;
});
```

#### Ergebnisse

Die Ausgabe ist am Daumen verankert. Ändern Sie den Wert. Wenn Ankerpositionierung in Ihrem Browser unterstützt wird, wird der Wert über und rechts vom Daumen sein, egal wo er sich entlang des Schiebers befindet.

{{ EmbedLiveSample("A range thumb as anchor", "100%", "225") }}

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente bewegen und sie mit verschiedenen Ankern assoziieren. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen assoziiert werden kann, während ein ankerpositioniertes Element nur mit einem einzigen Anker gleichzeitig assoziiert werden kann, dem Anker, der durch die `anchor-position` Eigenschaft definiert ist.

#### HTML

Wir haben vier Anker und zwei positionierte Elemente, die durch verschiedene `id` Werte unterschieden werden. Die positionierten Elemente enthalten {{htmlelement("select")}} Boxen, die es Ihnen erlauben, auszuwählen, mit welchem Anker Sie sie assoziieren wollen.

```html
<div id="anchor-container">
  <div class="anchor" id="anchor1">⚓︎</div>
  <div class="anchor" id="anchor2">⚓︎</div>
  <div class="anchor" id="anchor3">⚓︎</div>
  <div class="anchor" id="anchor4">⚓︎</div>
</div>

<div class="infobox" id="infobox1">
  <form>
    <label for="anchor1-anchor-select">Place infobox on:</label>
    <select id="anchor1-anchor-select">
      <option value="1">Anchor 1</option>
      <option value="2">Anchor 2</option>
      <option value="3">Anchor 3</option>
      <option value="4">Anchor 4</option>
    </select>
  </form>
</div>

<div class="infobox" id="infobox2">
  <form>
    <label for="anchor2-anchor-select">Place infobox on:</label>
    <select id="anchor2-anchor-select">
      <option value="1">Anchor 1</option>
      <option value="2">Anchor 2</option>
      <option value="3">Anchor 3</option>
      <option value="4">Anchor 4</option>
    </select>
  </form>
</div>
```

#### CSS

Wir deklarieren das erste `anchor` `<div>` als Anker mit der Eigenschaft `anchor-name`, die zwei durch Kommas getrennte Ankernamen enthält, einen für jedes positionierte Element. Dies ist der Ausgangszustand der Demo — beide positionierten Elemente werden mit dem ersten Anker verbunden.

```css hidden
body {
  height: 100vh;
}

#anchor-container {
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
}

.anchor {
  font-size: 1.8rem;
  color: white;
  text-shadow: 1px 1px 1px black;
  background-color: hsl(240 100% 75%);
  width: fit-content;
  border-radius: 10px;
  border: 1px solid black;
  padding: 3px;
}
```

```css
#anchor1 {
  anchor-name: --my-anchor1, --my-anchor2;
}
```

Jedes der positionierten Elemente bekommt eine `position-anchor` Eigenschaft mit einem Wert, der einem der beiden Ankernamen entspricht. Die positionierten Elemente erhalten dann ankerbezogene Positionierungsinformationen unter Verwendung einer Kombination aus Insets, Ausrichtung und Randeigenschaften.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #dddddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  width: 120px;
}
```

```css
#infobox1 {
  position-anchor: --my-anchor1;
  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --my-anchor2;
  position: fixed;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### JavaScript

Wir ändern dynamisch, auf welchen Ankerelementen die `anchor-name` Werte in Antwort auf die Auswahl verschiedener Anker in den `<select>` Menüs der positionierten Elemente gesetzt werden. Die Schlüsselrolle spielt der [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler, `updateAnchorNames()`. Er setzt beide Ankernamen auf einen Anker, falls die in den zwei `<select>` Menüs gewählten Anker gleich sind. Andernfalls setzt er einen einzelnen Ankernamen auf zwei separate Anker, wie es angemessen ist.

```js
// Get references to the two select menus
const select1 = document.querySelector("#anchor1-anchor-select");
const select2 = document.querySelector("#anchor2-anchor-select");
// Store references to all the anchors in a NodeList (array-like)
const anchors = document.querySelectorAll("#anchor-container > div");

// Set the same change event handler on both select menus
select1.addEventListener("change", updateAnchorNames);
select2.addEventListener("change", updateAnchorNames);

function updateAnchorNames() {
  // Remove all anchor names from all anchors
  for (const anchor of anchors) {
    anchor.style.anchorName = "none";
  }

  // convert the select menu values to numbers, and remove one to
  // make them match the selected anchors' index positions in the NodeList
  const value1 = Number(select1.value) - 1;
  const value2 = Number(select2.value) - 1;

  if (value1 === value2) {
    // If the chosen anchors are both the same, set both anchor
    // names on the same anchor
    anchors[value1].style.anchorName = "--my-anchor1, --my-anchor2";
  } else {
    // If they are not the same, set the anchor names separately
    // on each selected anchor
    anchors[value1].style.anchorName = "--my-anchor1";
    anchors[value2].style.anchorName = "--my-anchor2";
  }
}
```

#### Ergebnis

Wählen Sie unterschiedliche Werte aus den Dropdown-Menüs, um die Anker zu ändern, relativ zu denen die Elemente positioniert sind.

{{ EmbedLiveSample("Multiple positioned elements and anchors", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
