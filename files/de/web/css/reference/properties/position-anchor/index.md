---
title: position-anchor
slug: Web/CSS/Reference/Properties/position-anchor
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`position-anchor`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt den Ankernamen des **Ankerelements** fest (d.h. ein Element, das einen **Ankernamen** über die {{cssxref("anchor-name")}}-Eigenschaft zugewiesen hat), mit dem ein positioniertes Element verknüpft ist.

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
  - : Verknüpft ein positioniertes Element mit seinem impliziten Ankerelement, falls vorhanden — zum Beispiel wie durch das nicht standardmäßige HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) festgelegt.

- `none`
  - : Der initiale (Standard-)Wert. Das positionierte Element ist nicht mit einem Ankerelement verknüpft.

- {{cssxref("dashed-ident")}}
  - : Der Name des Ankerelements, mit dem das positionierte Element verknüpft werden soll, wie im `anchor-name`-Attribut des Ankerelements aufgeführt. Dies wird als **Standardankerspezifizierer** bezeichnet.

## Beschreibung

Diese Eigenschaft ist nur für "positionierte" Elemente relevant — Elemente und Pseudo-Elemente, die eine {{cssxref("position")}} von `absolute` oder `fixed` haben.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verknüpfung, eine Position und einen Ort. Die Eigenschaften `position-anchor` und {{cssxref("anchor-name")}} bieten eine explizite Verknüpfung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>`-Ankernamen, die ihm über die `anchor-name`-Eigenschaft zugewiesen werden. Wenn einer dieser Namen dann als Wert der `position-anchor`-Eigenschaft des positionierten Elements gesetzt wird, sind die beiden Elemente verknüpft.

Wenn es mehrere Ankerelemente mit dem im `position-anchor`-Attribut aufgeführten Ankernamen gibt, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Um eine vorherige Verknüpfung zwischen einem Anker-positionierten Element und einem Anker aufzuheben, können Sie den Wert des `position-anchor` des Anker-positionierten Elements auf `none` setzen.

Um ein positioniertes Element an seinen Anker anzubinden, muss es relativ zu einem Ankerelement mithilfe einer Anker-Positionierungsfunktion platziert werden, wie zum Beispiel der {{cssxref("anchor()")}}-Funktion (gesetzt als Wert bei {{Glossary("inset_properties", "Inset-Eigenschaften")}}) oder der {{cssxref("position-area")}}-Eigenschaft.

Wenn der zugehörige Anker ausgeblendet ist, zum Beispiel mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er aufgrund von {{cssxref("content-visibility", "content-visibility: hidden")}} Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements ist, wird das Anker-positionierte Element nicht angezeigt.

Die `position-anchor`-Eigenschaft wird von allen positionierten Elementen unterstützt, einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudo-Elemente werden implizit an dasselbe Element wie das ursprüngliche Element des Pseudo-Elements verankert, es sei denn, es wird anders angegeben.

Für weitere Informationen zu Ankerfunktionen und deren Verwendung siehe das [CSS-Anker-Positionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul und den [Leitfaden zur Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sehen Sie sich die `anchor-name`-Dokumentation zur [grundlegenden Verwendung](/de/docs/Web/CSS/Reference/Properties/anchor-name#basic_usage) und zusätzliche [`position-anchor`-Beispiele](/de/docs/Web/CSS/Reference/Properties/anchor-name#examples) an.

### Verwendung eines Schiebereglers als Anker

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Schieberegler eines Bereichs-Schiebereglers ist.

#### HTML

Wir schließen ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element und ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output)-Element ein, um den Wert des Bereichs anzuzeigen. Der im `<output>`-Element angezeigte Wert wird über JavaScript aktualisiert, während sich der Schiebereglerswert ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Schieberegler, repräsentiert durch das {{cssxref("::-webkit-slider-thumb")}}-Pseudo-Element, einen Ankernamen von `--thumb`. Wir setzen dann diesen Namen als Wert der `position-anchor`-Eigenschaft des `<output>`-Elements und geben ihm einen {{cssxref("position")}}-Wert von `fixed`. Diese Schritte verbinden das `<output>` mit dem Schieberegler.

Schließlich verwenden wir die Eigenschaften {{cssxref("left")}} und {{cssxref("top")}} mit {{cssxref("anchor()")}}, um das `<output>` relativ zum Schieberegler zu positionieren.

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

Wir fügen einen Event-Listener hinzu, der den Inhalt des `<output>`-Elements aktualisiert, wenn sich der Wert des `<input>` ändert:

```js
const input = document.querySelector("input");
const output = document.querySelector("output");

input.addEventListener("input", (event) => {
  output.innerText = `${input.value}`;
});
```

#### Ergebnisse

Das Ausgabefeld ist an den Schieberegler angeheftet. Ändern Sie den Wert. Wenn Anker-Positionierung in Ihrem Browser unterstützt wird, ist der Wert über und rechts vom Schieberegler, egal wo er sich entlang des Schiebers befindet.

{{ EmbedLiveSample("Ein Schiebereglerkäppchen als Anker", "100%", "225") }}

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente herumbewegen und sie mit unterschiedlichen Ankern verknüpfen. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen verknüpft werden kann, aber ein Anker-positioniertes Element kann nur mit einem einzigen Anker zur gleichen Zeit verknüpft werden, dem Anker, der durch die `anchor-position`-Eigenschaft definiert ist.

#### HTML

Wir haben vier Anker und zwei positionierte Elemente, die durch verschiedene `id`-Werte unterschieden werden. Die positionierten Elemente enthalten {{htmlelement("select")}}-Boxen, die Ihnen ermöglichen, auszuwählen, mit welchem Anker Sie sie verknüpfen möchten.

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

Wir deklarieren das erste `anchor`-`<div>` als Anker unter Verwendung der `anchor-name`-Eigenschaft, der zwei durch Kommas getrennte Ankernamen zugewiesen werden, einer für jedes positionierte Element. Dies ist der anfängliche Zustand der Demo — beide positionierten Elemente werden an den ersten Anker gebunden.

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

Jedes der positionierten Elemente erhält eine `position-anchor`-Eigenschaft mit einem Wert, der einem der beiden Ankernamen entspricht. Die positionierten Elemente erhalten dann anker-relative Positionierungsinformationen mit Hilfe einer Kombination aus Inset-, Ausrichtungs- und Rand-Eigenschaften.

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

Wir ändern dynamisch, auf welchen Ankerelementen die `anchor-name`-Werte gesetzt sind, als Reaktion auf unterschiedliche Anker, die in den `<select>`-Menüs der positionierten Elemente ausgewählt werden. Die Schlüsselfunktion hier ist der [`change`](/de/docs/Web/API/HTMLElement/change_event)-Event-Handler, `updateAnchorNames()`. Er setzt beide Ankernamen auf einen Anker, wenn die Anker, die in den beiden `<select>`-Menüs ausgewählt werden, identisch sind. Andernfalls setzt er einen einzelnen Ankernamen auf zwei separate Anker, wie es angemessen ist.

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

{{ EmbedLiveSample("Mehrere positionierte Elemente und Anker", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)
- [CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)-Modul
- [Leitfaden zur Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
