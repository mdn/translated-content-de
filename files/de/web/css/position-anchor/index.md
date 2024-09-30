---
title: position-anchor
slug: Web/CSS/position-anchor
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{CSSRef}}{{seecompattable}}

Die **`position-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft gibt den Ankernamen des **Ankerelements** an (also eines Elements, das durch die {{cssxref("anchor-name")}} Eigenschaft einen **Ankernamen** erhalten hat), mit dem ein positioniertes Element verknüpft ist.

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

  - : Verknüpft ein positioniertes Element mit seinem impliziten Ankerelement, falls es eines hat — zum Beispiel, wie es durch das nicht-standardisierte HTML-Attribut [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) festgelegt wird.

- {{cssxref("dashed-ident")}}

  - : Der Name des Ankerelements, mit dem das positionierte Element verknüpft wird, wie im `anchor-name`-Attribut des Ankerelements angegeben. Dies ist als **Standardankerspezifizierer** bekannt.

## Beschreibung

Diese Eigenschaft ist nur für "positionierte" Elemente relevant — also Elemente und Pseudoelemente, die eine {{cssxref("position")}} von `absolute` oder `fixed` haben.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verknüpfung, eine Position und einen Ort. Die `position-anchor` und {{cssxref("anchor-name")}} Eigenschaften stellen die Verknüpfung bereit.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die ihm über die `anchor-name` Eigenschaft zugewiesen werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft des positionierten Elements gesetzt wird, sind die beiden Elemente verknüpft.

Wenn es mehrere Ankerelemente mit dem im `position-anchor` Attribut gelisteten Ankernamen gibt, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Um ein positioniertes Element an seinen Anker zu binden, muss es relativ zu einem Ankerelement unter Verwendung einer Ankerpositionierungsfunktion platziert werden, wie z. B. mit der {{cssxref("anchor()")}} Funktion (als Wert auf [inset properties](/de/docs/Glossary/inset_properties)) oder der {{cssxref("position-area")}} Eigenschaft.

Wenn der zugehörige Anker versteckt ist, z. B. durch {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, weil dieses {{cssxref("content-visibility", "content-visibility: hidden")}} eingestellt hat, wird das Anker positionierte Element nicht angezeigt.

Die Eigenschaft `position-anchor` wird bei allen Elementen unterstützt, die positioniert sind, einschließlich [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudoelemente sind implizit an dasselbe Element verankert wie das Ursprungselement des Pseudoelements, es sei denn, es ist anders angegeben.

Für weitere Informationen über Ankerfunktionen und ihre Verwendung sehen Sie sich die [CSS-Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul-Startseite und den [Verwendung von CSS-Ankerpositionierungen](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden an.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sehen Sie die `anchor-name` Dokumentation für [grundlegende Verwendung](/de/docs/Web/CSS/anchor-name#basic_usage) und zusätzliche [`position-anchor` Beispiele](/de/docs/Web/CSS/anchor-name#examples).

### Verwenden eines Schiebereglerzeigers als Anker

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Zeiger eines Bereichsschiebereglers ist.

#### HTML

Wir fügen ein [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Element und ein [`<output>`](/de/docs/Web/HTML/Element/output) Element hinzu, um den Wert des Bereichs anzuzeigen. Der im `<output>` Element angezeigte Wert wird über JavaScript aktualisiert, wenn sich der Schiebereglerwert ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Zeiger, dargestellt durch das [`::-webkit-slider-thumb`](/de/docs/Web/CSS/::-webkit-slider-thumb) Pseudoelement, einen Ankernamen `--thumb`. Wir setzen diesen Namen dann als Wert der `position-anchor` Eigenschaft des `<output>` Elements und geben ihm einen {{cssxref("position")}} Wert von `fixed`. Diese Schritte verknüpfen das `<output>` mit dem Zeiger.

Schließlich verwenden wir {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften mit {{cssxref("anchor()")}} Werten, um das `<output>` relativ zum Zeiger zu positionieren.

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

Der Output ist am Zeiger verankert. Ändern Sie den Wert. Wenn Ankerpositionierung in Ihrem Browser unterstützt wird, wird der Wert über und rechts vom Zeiger angezeigt, egal wo er sich entlang des Schiebereglers befindet.

{{ EmbedLiveSample("Ein Bereichszeiger als Anker", "100%", "225") }}

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente verschieben und sie mit verschiedenen Ankern verknüpfen. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen verknüpft werden kann, aber ein Anker-positioniertes Element kann jeweils nur mit einem einzelnen Anker verknüpft werden, der durch die `anchor-position` Eigenschaft definiert wird.

#### HTML

Wir haben vier Anker und zwei positionierte Elemente, die durch verschiedene `id` Werte unterschieden werden. Die positionierten Elemente enthalten {{htmlelement("select")}} Boxen, die es Ihnen erlauben, auszuwählen, mit welchem Anker Sie sie verknüpfen möchten.

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

Wir deklarieren das erste `anchor` `<div>` als Anker mithilfe der `anchor-name` Eigenschaft, die mit zwei durch Kommas getrennten Ankernamen versehen wird, einen für jedes positionierte Element. Dies ist der anfängliche Zustand der Demo — beide positionierten Elemente sind an den ersten Anker gebunden.

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

Jedes der positionierten Elemente erhält eine `position-anchor` Eigenschaft, deren Wert einem der beiden Ankernamen entspricht. Die positionierten Elemente erhalten dann anker-relative Positionierungsinformationen unter Verwendung einer Kombination von Inset-, Ausrichtungs- und Rand-Eigenschaften.

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

Wir ändern dynamisch, welche Ankerelemente die `anchor-name` Werte auf sich gesetzt haben, als Antwort auf unterschiedliche Anker, die in den `<select>` Menüs der positionierten Elemente ausgewählt werden. Die Hauptfunktionalität hier ist der [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler, `updateAnchorNames()`. Er setzt beide Ankernamen auf einen Anker, wenn die in den beiden `<select>` Menüs ausgewählten Anker gleich sind. Ansonsten setzt er einen einzelnen Ankernamen auf zwei separate Anker, wie sie ausgewählt wurden.

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

Wählen Sie unterschiedliche Werte aus den Dropdown-Menüs aus, um die Anker zu ändern, relativ zu denen die Elemente positioniert sind.

{{ EmbedLiveSample("Mehrere positionierte Elemente und Anker", "100%", "400") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut
- [CSS-Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Verwendung von CSS-Ankerpositionierungen](/de/docs/Web/CSS/CSS_anchor_positioning/Using) Leitfaden
