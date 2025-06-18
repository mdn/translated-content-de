---
title: position-anchor
slug: Web/CSS/position-anchor
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{CSSRef}}

Die **`position-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Anker-Namen des **Ankerelements** an (d.h. ein Element, das einen **Anker-Namen** über die {{cssxref("anchor-name")}} Eigenschaft gesetzt hat), mit dem ein positioniertes Element verknüpft ist.

## Syntax

```css
/* Single values */
position-anchor: auto;
position-anchor: --anchorName;

/* Global values */
position-anchor: inherit;
position-anchor: initial;
position-anchor: revert;
position-anchor: revert-layer;
position-anchor: unset;
```

### Werte

- `auto`

  - : Verknüpft ein positioniertes Element mit seinem impliziten Ankerelement, falls es eines hat — beispielsweise wie es durch das nicht standardisierte HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut gesetzt wird.

- {{cssxref("dashed-ident")}}

  - : Der Name des Ankerelements, mit dem das positionierte Element verknüpft werden soll, wie im `anchor-name`-Eigenschaft des Ankerelements aufgelistet. Dies ist als **Standardanker-Spezifizierer** bekannt.

## Beschreibung

Diese Eigenschaft ist nur für "positionierte" Elemente relevant — Elemente und Pseudo-Elemente, die eine {{cssxref("position")}} von `absolute` oder `fixed` gesetzt haben.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verknüpfung, eine Position und einen Standort. Die `position-anchor` und {{cssxref("anchor-name")}} Eigenschaften bieten eine explizite Verknüpfung.

Das Ankerelement nimmt eine oder mehrere `<dashed-ident>` Ankernamen an, die über die `anchor-name` Eigenschaft auf ihn gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft des positionierten Elements festgelegt wird, werden die beiden Elemente verknüpft.

Wenn es mehrere Ankerelemente mit dem in der `position-anchor` Eigenschaft aufgelisteten Ankernamen gibt, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Um ein positioniertes Element an seinen Anker zu binden, muss es relativ zu einem Ankerelement positioniert werden, indem eine Anker-Positionierungsfunktion, wie die {{cssxref("anchor()")}} Funktion (als Wert auf {{Glossary("inset_properties", "Inset-Eigenschaften")}} gesetzt) oder die {{cssxref("position-area")}} Eigenschaft, verwendet wird.

Wenn der zugehörige Anker verborgen ist, zum Beispiel mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, weil es {{cssxref("content-visibility", "content-visibility: hidden")}} auf ihm gesetzt hat, wird das Ankerpositionierte Element nicht angezeigt.

Die `position-anchor` Eigenschaft wird bei allen Elementen unterstützt, die positioniert sind, einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudo-Elemente sind implizit auf dasselbe Element wie das Ursprungs-Element des Pseudo-Elements verankert, es sei denn, es ist anders angegeben.

Für weitere Informationen zu Ankerfunktionen und deren Verwendung siehe das [CSS Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul und den [Verwendung von CSS Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe die `anchor-name` Dokumentation für [grundlegende Nutzung](/de/docs/Web/CSS/anchor-name#basic_usage) und zusätzliche [`position-anchor` Beispiele](/de/docs/Web/CSS/anchor-name#examples).

### Verwendung eines Schieberegler-Daumens als Anker

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Daumen eines Bereichsschiebers ist.

#### HTML

Wir fügen ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Element und ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output) Element hinzu, um den Wert des Bereichs anzuzeigen. Der im `<output>` Element angezeigte Wert wird über JavaScript aktualisiert, während sich der Schiebereglerwert ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Daumen, der durch das [`::-webkit-slider-thumb`](/de/docs/Web/CSS/::-webkit-slider-thumb) Pseudo-Element dargestellt wird, einen Ankernamen von `--thumb`. Dann setzen wir diesen Namen als den Wert der `position-anchor` Eigenschaft des `<output>` Elements und geben ihm einen {{cssxref("position")}} Wert von `fixed`. Diese Schritte verknüpfen das `<output>` mit dem Daumen.

Schließlich verwenden wir die {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften mit {{cssxref("anchor()")}} Werten, um das `<output>` relativ zum Daumen zu positionieren.

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

Wir fügen einen Event-Listener hinzu, der den Inhalt des `<output>` Elements aktualisiert, wenn sich der Wert des `<input>` ändert:

```js
const input = document.querySelector("input");
const output = document.querySelector("output");

input.addEventListener("input", (event) => {
  output.innerText = `${input.value}`;
});
```

#### Ergebnisse

Das Ergebnis ist an den Daumen verankert. Ändern Sie den Wert. Wenn die Ankerpositionierung in Ihrem Browser unterstützt wird, wird der Wert über und rechts vom Daumen angezeigt, egal wo er sich entlang des Schiebers befindet.

{{ EmbedLiveSample("Ein Bereichs-Daumen als Anker", "100%", "225") }}

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente herumschieben und sie mit verschiedenen Ankern verknüpfen. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen verknüpft werden kann, aber ein Anker-Positioniertes Element kann jeweils nur mit einem einzigen Anker, dem durch die `anchor-position` Eigenschaft definierten, verknüpft werden.

#### HTML

Wir haben vier Anker und zwei positionierte Elemente, die durch verschiedene `id` Werte unterschieden werden. Die positionierten Elemente enthalten {{htmlelement("select")}} Boxen, die es ermöglichen, den Anker auszuwählen, mit dem sie verknüpft werden sollen.

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

Wir deklarieren das erste `anchor` `<div>` als Anker mit der `anchor-name` Eigenschaft, die zwei durch Kommata getrennte Ankernamen enthält, einen für jedes positionierte Element. Dies ist der Anfangszustand der Demonstration – beide positionierten Elemente werden mit dem ersten Anker verbunden.

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
  anchor-name: --myAnchor1, --myAnchor2;
}
```

Jedes der positionierten Elemente erhält eine `position-anchor` Eigenschaft mit einem Wert, der einem der beiden Ankernamen entspricht. Die positionierten Elemente erhalten dann ankerrelativ positionierende Informationen unter Verwendung einer Kombination aus Insets, Ausrichtung und Rand-Eigenschaften.

```css hidden
.infobox {
  color: darkblue;
  background-color: azure;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  font-size: 1rem;
  width: 120px;
}
```

```css
#infobox1 {
  position-anchor: --myAnchor1;
  position: fixed;
  left: anchor(right);
  align-self: anchor-center;
  margin-left: 10px;
}

#infobox2 {
  position-anchor: --myAnchor2;
  position: fixed;
  bottom: anchor(top);
  justify-self: anchor-center;
  margin-bottom: 15px;
}
```

#### JavaScript

Wir ändern dynamisch, auf welchen Ankerelementen die `anchor-name` Werte gesetzt sind, als Reaktion auf unterschiedliche Anker, die in den `<select>` Menüs der positionierten Elemente ausgewählt werden. Die Schlüssel-Funktionalität hier ist der [`change`](/de/docs/Web/API/HTMLElement/change_event) Event Handler, `updateAnchorNames()`. Er setzt beide Ankernamen auf einen Anker, wenn die in den beiden `<select>` Menüs gewählten Anker gleich sind. Andernfalls setzt er einen einzelnen Ankernamen auf zwei separate Anker, wie es angemessen ist.

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
    anchors[value1].style.anchorName = "--myAnchor1, --myAnchor2";
  } else {
    // If they are not the same, set the anchor names separately
    // on each selected anchor
    anchors[value1].style.anchorName = "--myAnchor1";
    anchors[value2].style.anchorName = "--myAnchor2";
  }
}
```

#### Ergebnis

Wählen Sie verschiedene Werte aus den Dropdown-Menüs aus, um die Anker zu ändern, auf die sich die Elemente beziehen.

{{ EmbedLiveSample("Mehrere positionierte Elemente und Anker", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
