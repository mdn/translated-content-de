---
title: position-anchor
slug: Web/CSS/Reference/Properties/position-anchor
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`position-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Ankernamen des **Ankerelements** an (d. h. ein Element, das einen **Ankernamen** hat, der durch die {{cssxref("anchor-name")}} Eigenschaft gesetzt wird), mit dem ein positioniertes Element verknüpft ist.

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
  - : Verknüpft ein positioniertes Element mit seinem impliziten Ankerelement, falls es eines hat — zum Beispiel, wie durch das nicht-standardmäßige HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut festgelegt.

- {{cssxref("dashed-ident")}}
  - : Der Name des Ankerelements, mit dem das positionierte Element verknüpft wird, wie im `anchor-name` Attribut des Ankerelements angegeben. Dies wird als **Standard-Ankerspezifikator** bezeichnet.

## Beschreibung

Diese Eigenschaft ist nur für "positionierte" Elemente relevant — Elemente und Pseudo-Elemente, die eine {{cssxref("position")}} von `absolute` oder `fixed` haben.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verbindung, eine Position, und einen Standort. Die `position-anchor` und {{cssxref("anchor-name")}} Eigenschaften bieten eine explizite Verbindung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die durch die `anchor-name` Eigenschaft gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft des positionierten Elements gesetzt wird, sind die beiden Elemente verbunden.

Falls es mehrere Ankerelemente mit dem im `position-anchor` Attribut aufgelisteten Ankernamen gibt, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Um ein positioniertes Element an seinen Anker zu binden, muss es relativ zu einem Ankerelement mit einer Ankerpositionierungsfunktion positioniert werden, wie etwa der {{cssxref("anchor()")}} Funktion (als Wert auf {{Glossary("inset_properties", "inset properties")}} gesetzt) oder der {{cssxref("position-area")}} Eigenschaft.

Wenn der verbundene Anker verborgen ist, zum Beispiel mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er Teil des [umgangenen Inhalts](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, weil es {{cssxref("content-visibility", "content-visibility: hidden")}} gesetzt hat, wird das Anker-positionierte Element nicht angezeigt.

Die `position-anchor` Eigenschaft wird auf alle positionierten Elemente unterstützt, einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudo-Elemente sind implizit an dasselbe Element wie das Ursprungs-Element des Pseudo-Elements verankert, sofern nicht anders angegeben.

Für weitere Informationen zu Ankerfunktionen und deren Verwendung siehe das Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) und den [Leitfaden zur Nutzung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe die Dokumentation zu `anchor-name` für [grundlegende Nutzung](/de/docs/Web/CSS/Reference/Properties/anchor-name#basic_usage) und zusätzliche [`position-anchor` Beispiele](/de/docs/Web/CSS/Reference/Properties/anchor-name#examples).

### Einen Slider-Thumb als Anker verwenden

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Thumb eines Range-Sliders ist.

#### HTML

Wir fügen ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Element und ein [`<output>`](/de/docs/Web/HTML/Reference/Elements/output) Element ein, um den Wert des Bereichs anzuzeigen. Der im `<output>` Element angezeigte Wert wird über JavaScript aktualisiert, wenn sich der Wert des Sliders ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Thumb, dargestellt durch das [`::-webkit-slider-thumb`](/de/docs/Web/CSS/::-webkit-slider-thumb) Pseudo-Element, einen Ankernamen von `--thumb`. Dann setzen wir diesen Namen als Wert der `position-anchor` Eigenschaft des `<output>` Elements und geben ihm einen {{cssxref("position")}} Wert von `fixed`. Diese Schritte verbinden das `<output>` mit dem Thumb.

Schließlich verwenden wir {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften mit {{cssxref("anchor()")}} Werten, um das `<output>` relativ zum Thumb zu positionieren.

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

Wir fügen einen Event-Listener hinzu, der den Inhalt des `<output>` Elements aktualisiert, wenn sich der Wert des `<input>` Elements ändert:

```js
const input = document.querySelector("input");
const output = document.querySelector("output");

input.addEventListener("input", (event) => {
  output.innerText = `${input.value}`;
});
```

#### Ergebnisse

Die Ausgabe ist an den Thumb verankert. Ändern Sie den Wert. Wenn die Ankerpositionierung in Ihrem Browser unterstützt wird, wird der Wert über und rechts vom Thumb angezeigt, egal wo er sich auf dem Slider befindet.

{{ EmbedLiveSample("Ein Range-Thumb als Anker", "100%", "225") }}

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente bewegen und sie mit verschiedenen Ankern verbinden. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen verbunden werden kann, aber ein anker-positioniertes Element kann zu einem Zeitpunkt nur mit einem einzigen Anker, dem durch die `anchor-position` Eigenschaft definierten Anker, verknüpft werden.

#### HTML

Wir haben vier Anker und zwei positionierte Elemente, unterschieden durch verschiedenen `id` Werte. Die positionierten Elemente enthalten {{htmlelement("select")}} Boxen, die es Ihnen erlauben auszuwählen, mit welchem Anker Sie sie verbinden möchten.

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

Wir deklarieren das erste `anchor` `<div>` als Anker unter Verwendung der `anchor-name` Eigenschaft, die zwei durch Kommas getrennte Ankernamen erhält, einen für jedes positionierte Element. Dies ist der Anfangszustand der Demo — beide positionierten Elemente werden an den ersten Anker angebunden.

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

Jedes der positionierten Elemente erhält eine `position-anchor` Eigenschaft mit einem Wert, der einem der beiden Ankernamen entspricht. Die positionierten Elemente erhalten dann Anker-relative Positionierungsinformationen unter Verwendung einer Kombination aus inset, Alignment und Margin-Eigenschaften.

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

Wir ändern dynamisch, auf welchen Ankerelementen die `anchor-name` Werte gesetzt werden, als Reaktion darauf, dass in den `<select>` Menüs der positionierten Elemente verschiedene Anker ausgewählt werden. Die Schlüsselfunktionalität hier ist der [`change`](/de/docs/Web/API/HTMLElement/change_event) Event-Handler, `updateAnchorNames()`. Er setzt beide Ankernamen auf einen Anker, wenn die in den beiden `<select>` Menüs gewählten Anker die gleichen sind. Andernfalls setzt er einen einzelnen Ankernamen auf zwei separate Anker entsprechend.

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

{{ EmbedLiveSample("Mehrere positionierte Elemente und Anker", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Leitfaden zur Nutzung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
