---
title: position-anchor
slug: Web/CSS/Reference/Properties/position-anchor
l10n:
  sourceCommit: fa28e46ce15f17ba700156f93389a5ed26088cbd
---

Die **`position-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert den Ankernamen des **Ankerelements** (d.h. ein Element, das über die {{cssxref("anchor-name")}} Eigenschaft einen **Ankernamen** gesetzt hat), mit dem ein positioniertes Element verknüpft ist.

## Syntax

```css
/* Single values */
position-anchor: auto;
position-anchor: none;
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
  - : Verknüpft ein positioniertes Element mit seinem impliziten Ankerelement, falls es eines hat – zum Beispiel wie es durch das nicht standardisierte HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut gesetzt wird.

- `none`
  - : Der initiale (Standard-)Wert. Das positionierte Element ist nicht mit einem Ankerelement verknüpft.

- {{cssxref("dashed-ident")}}
  - : Der Name des Ankerelements, mit dem das positionierte Element verknüpft werden soll, wie er in der `anchor-name` Eigenschaft des Ankerelements aufgeführt ist. Dies ist als **Standard-Andocker-Spezifizierer** bekannt.

## Beschreibung

Diese Eigenschaft ist nur für "positionierte" Elemente relevant — Elemente und Pseudo-Elemente, die eine {{cssxref("position")}} von `absolute` oder `fixed` gesetzt haben.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verknüpfung, eine Position und einen Ort. Die `position-anchor` und {{cssxref("anchor-name")}} Eigenschaften bieten eine explizite Verknüpfung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die `anchor-name` Eigenschaft an ihm gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft des positionierten Elements gesetzt wird, sind die beiden Elemente verknüpft.

Gibt es mehrere Ankerelemente mit dem im `position-anchor` aufgelisteten Ankernamen, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Um eine zuvor erfolgte Verknüpfung zwischen einem verankerten positionierten Element und einem Anker zu lösen, kann der `position-anchor` Wert des verankerten positionierten Elements auf `none` gesetzt werden.

Um ein positioniertes Element an seinen Anker zu binden, muss es relativ zu einem Ankerelement positioniert werden, indem eine Ankerpositionierungsfunktion verwendet wird, wie zum Beispiel die {{cssxref("anchor()")}} Funktion (gesetzt als Wert auf {{Glossary("inset_properties", "inset properties")}}) oder die {{cssxref("position-area")}} Eigenschaft.

Ist der assoziierte Anker verborgen, beispielsweise durch {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements ist, weil {{cssxref("content-visibility", "content-visibility: hidden")}} darauf gesetzt ist, wird das Anker positionierte Element nicht angezeigt.

Die `position-anchor` Eigenschaft wird auf alle positionierten Elemente unterstützt, einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudo-Elemente sind implizit am gleichen Element verankert wie das Ursprungs-Element des Pseudo-Elements, es sei denn, es wird anders angegeben.

Für weitere Informationen über Ankerfunktionen und deren Nutzung, siehe das [CSS-Anker Positionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Anleitung zur CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe die `anchor-name` Dokumentation für [grundlegende Nutzung](/de/docs/Web/CSS/Reference/Properties/anchor-name#basic_usage) und zusätzliche [`position-anchor` Beispiele](/de/docs/Web/CSS/Reference/Properties/anchor-name#examples).

### Verwenden eines Schiebereglergreifers als Anker

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Greifer eines Bereichs-Schiebereglers ist.

#### HTML

Wir fügen ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Element und ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output) Element hinzu, um den Wert des Bereichs anzuzeigen. Der im `<output>` Element angezeigte Wert wird über JavaScript aktualisiert, wenn sich der Schiebereglerwert ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Greifer, repräsentiert durch das [`::-webkit-slider-thumb`](/de/docs/Web/CSS/Reference/Selectors/::-webkit-slider-thumb) Pseudo-Element, einen Ankernamen von `--thumb`. Wir setzen dann diesen Namen als Wert der `position-anchor` Eigenschaft des `<output>` Elements und geben ihm einen {{cssxref("position")}} Wert von `fixed`. Diese Schritte verknüpften das `<output>` mit dem Greifer.

Schließlich verwenden wir {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften mit {{cssxref("anchor()")}} Werten, um das `<output>` relativ zum Greifer zu positionieren.

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

Wir fügen einen Ereignis-Listener hinzu, der den Inhalt des `<output>` Elements aktualisiert, wenn sich der Wert des `<input>` ändert:

```js
const input = document.querySelector("input");
const output = document.querySelector("output");

input.addEventListener("input", (event) => {
  output.innerText = `${input.value}`;
});
```

#### Ergebnisse

Das Ergebnis ist am Greifer verankert. Ändern Sie den Wert. Wenn die Ankerpositionierung in Ihrem Browser unterstützt wird, wird der Wert über und rechts vom Greifer angezeigt, egal wo er sich entlang des Sliders befindet.

{{ EmbedLiveSample("A range thumb as anchor", "100%", "225") }}

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente bewegen und mit verschiedenen Ankern verknüpfen. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen verknüpft sein kann, wobei ein Anker-Positioniertes Element jedoch nur mit einem einzigen Anker gleichzeitig verknüpft sein kann, dem Anker, der durch die `anchor-position` Eigenschaft definiert ist.

#### HTML

Wir haben vier Anker und zwei positionierte Elemente, die sich durch verschiedene `id` Werte unterscheiden. Die positionierten Elemente enthalten {{htmlelement("select")}} Boxen, die es Ihnen ermöglichen, auszuwählen, mit welchem Anker Sie sie verknüpfen möchten.

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

Wir deklarieren das erste `anchor` `<div>` als Anker unter Verwendung der `anchor-name` Eigenschaft, die zwei mit Kommas getrennte Ankernamen erhält, einen für jedes positionierte Element. Dies ist der Anfangszustand der Demo — beide positionierten Elemente werden an den ersten Anker gebunden.

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

Jedes der positionierten Elemente erhält eine `position-anchor` Eigenschaft mit einem Wert, der einem der beiden Ankernamen entspricht. Die positionierten Elemente erhalten dann ankerrelative Positionsinformationen unter Verwendung einer Kombination von inset, alignment und margin Eigenschaften.

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

Wir ändern dynamisch, auf welchen Ankerelementen die `anchor-name` Werte gesetzt werden, in Reaktion auf unterschiedliche Anker, die in den `<select>` Menüs der positionierten Elemente ausgewählt werden. Die Schlüssel-Funktionalität hier ist der [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler, `updateAnchorNames()`. Er setzt beide Ankernamen auf einen Anker, wenn die in den beiden `<select>` Menüs gewählten Anker gleich sind. Andernfalls setzt er einen einzelnen Ankernamen auf zwei separate Anker, wie es angemessen ist.

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

Wählen Sie verschiedene Werte aus den Dropdown-Menüs, um die Anker zu ändern, relativ zu denen die Elemente positioniert sind.

{{ EmbedLiveSample("Multiple positioned elements and anchors", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS Ankerpositionierungs-](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Anleitung zur Verwendung von CSS Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
