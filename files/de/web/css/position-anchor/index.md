---
title: position-anchor
slug: Web/CSS/position-anchor
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}{{seecompattable}}

Die **`position-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Ankernamen des **Ankerelements** an (d. h. ein Element, das einen **Ankernamen** über die {{cssxref("anchor-name")}} Eigenschaft aufweist), mit dem ein positioniertes Element verknüpft ist.

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

  - : Verknüpft ein positioniertes Element mit seinem impliziten Ankerelement, falls vorhanden — beispielsweise wie durch das nicht standardisierte HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut festgelegt.

- {{cssxref("dashed-ident")}}

  - : Der Name des Ankerelements, mit dem das positionierte Element verknüpft werden soll, wie in der Eigenschaft {{cssxref("anchor-name")}} des Ankerelements aufgeführt. Dies wird als der **Standardanker-Spezifikator** bezeichnet.

## Beschreibung

Diese Eigenschaft ist nur für "positionierte" Elemente relevant — Elemente und Pseudo-Elemente, die eine {{cssxref("position")}} von `absolute` oder `fixed` eingestellt haben.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verknüpfung, eine Position und eine Positionierung. Die `position-anchor` und {{cssxref("anchor-name")}} Eigenschaften bieten die Verknüpfung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die `anchor-name` Eigenschaft auf ihm festgelegt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft des positionierten Elements festgelegt wird, sind die beiden Elemente miteinander verknüpft.

Falls es mehrere Ankerelemente mit dem Ankernamen gibt, der in der `position-anchor` Eigenschaft aufgeführt ist, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Um ein positioniertes Element an seinen Anker zu binden, muss es relativ zu einem Ankerelement mit einer Anker-Positionierungsfunktion wie der {{cssxref("anchor()")}} Funktion (als Wert auf [Einpassungseigenschaften](/de/docs/Glossary/inset_properties) festgelegt) oder der {{cssxref("position-area")}} Eigenschaft positioniert werden.

Wenn der zugeordnete Anker ausgeblendet ist, z. B. mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, da darauf {{cssxref("content-visibility", "content-visibility: hidden")}} gesetzt ist, wird das ankerpositionierte Element nicht angezeigt.

Die `position-anchor` Eigenschaft wird auf allen positionierten Elementen unterstützt, einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudo-Elemente sind implizit an dasselbe Element wie das Ursprungs-Element des Pseudo-Elements gebunden, es sei denn, es wird anders angegeben.

Für weitere Informationen zu Ankerfunktionen und deren Nutzung, siehe die [CSS-Anker-Positionierungs-Modul](/de/docs/Web/CSS/CSS_anchor_positioning) Einstiegsseite und die [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe die `anchor-name` Dokumentation für [Grundlagen der Nutzung](/de/docs/Web/CSS/anchor-name#basic_usage) und zusätzliche [`position-anchor` Beispiele](/de/docs/Web/CSS/anchor-name#examples).

### Nutzung eines Regler-Daumens als Anker

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Daumen eines Bereichsreglers ist.

#### HTML

Wir fügen ein [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Element und ein [`<output>`](/de/docs/Web/HTML/Element/output) Element hinzu, um den Wert des Bereichs anzuzeigen. Der im `<output>` Element angezeigte Wert wird über JavaScript aktualisiert, während sich der Reglerwert ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Dem Daumen, dargestellt durch das [`::-webkit-slider-thumb`](/de/docs/Web/CSS/::-webkit-slider-thumb) Pseudo-Element, wird ein Ankername `--thumb` zugewiesen. Anschließend wird dieser Name als Wert der `position-anchor` Eigenschaft des `<output>` Elements festgelegt und ihm ein {{cssxref("position")}} Wert von `fixed` gegeben. Diese Schritte verknüpfen das `<output>` mit dem Daumen.

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

Das Ausgabe-Element ist an den Daumen gebunden. Ändern Sie den Wert. Wenn die Ankerpositionierung in Ihrem Browser unterstützt wird, wird der Wert oberhalb und rechts vom Daumen angezeigt, egal wo dieser entlang des Reglers ist.

{{ EmbedLiveSample("Ein Daumen als Anker", "100%", "225") }}

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente verschieben und sie mit verschiedenen Ankern verknüpfen. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen verknüpft werden kann, aber ein ankerpositioniertes Element nur mit einem einzelnen Anker zu einem Zeitpunkt verknüpft sein kann, dem Anker, der durch die `anchor-position` Eigenschaft definiert ist.

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

Wir deklarieren das erste `anchor` `<div>` als Anker unter Verwendung der `anchor-name` Eigenschaft, die zwei kommaseparierte Ankernamen erhält, einen für jedes positionierte Element. Dies ist der Anfangszustand der Demo — beide positionierten Elemente werden an den ersten Anker gebunden.

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

Jedes der positionierten Elemente erhält eine `position-anchor` Eigenschaft mit einem Wert, der einem der beiden Ankernamen entspricht. Die positionierten Elemente erhalten dann ankerbezogene Positionierungsinformationen unter Verwendung einer Kombination aus Einpassungs-, Ausrichtungs- und Randeigenschaften.

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

Wir ändern dynamisch, auf welche Ankerelemente die `anchor-name` Werte in Reaktion auf verschiedene, in den `<select>` Menüs der positionierten Elemente ausgewählte Anker eingestellt sind. Die Schlüsselfunktionalität hier ist der [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler, `updateAnchorNames()`. Es setzt beide Ankernamen auf einen Anker, falls die gewählten Anker in den beiden `<select>` Menüs gleich sind. Andernfalls wird ein einzelner Ankername auf zwei separate Anker, je nach Bedarf, gesetzt.

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

Wählen Sie verschiedene Werte aus den Dropdown-Menüs, um die Anker zu ändern, auf die sich die Elemente relativ positionieren.

{{ EmbedLiveSample("Mehrere positionierte Elemente und Anker", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut
- [CSS-Anker-Positionierungsmodul](/de/docs/Web/CSS/CSS_anchor_positioning)
- [Verwendung der CSS-Anker-Positionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Anleitung
