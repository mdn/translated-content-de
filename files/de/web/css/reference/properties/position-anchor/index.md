---
title: position-anchor
slug: Web/CSS/Reference/Properties/position-anchor
l10n:
  sourceCommit: abfd162ded5c1ba744f06d8b3fd8ff3470b7d2fa
---

Die **`position-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ankernamen des **Ankerelements** fest (das heißt, ein Element, das über die {{cssxref("anchor-name")}} Eigenschaft einen **Ankernamen** gesetzt hat), mit dem ein positioniertes Element verknüpft ist.

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
  - : Verknüpft ein positioniertes Element mit seinem impliziten Ankerelement, falls es eines hat — zum Beispiel wie durch das nicht-standard HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut festgelegt.

- `none`
  - : Der initiale (Standard-)Wert. Das positionierte Element ist nicht mit einem Ankerelement verknüpft.

- {{cssxref("dashed-ident")}}
  - : Der Name des Ankerelements, mit dem das positionierte Element verknüpft werden soll, wie im Ankerelement durch die {{cssxref("anchor-name")}} Eigenschaft aufgeführt. Dies ist als der **Standardanker-Spezifikator** bekannt.

## Beschreibung

Diese Eigenschaft ist nur für "positionierte" Elemente relevant — Elemente und Pseudo-Elemente, die über eine {{cssxref("position")}} von `absolute` oder `fixed` verfügen.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verknüpfung, eine Position und eine Lage. Die Eigenschaften `position-anchor` und {{cssxref("anchor-name")}} bieten eine explizite Verknüpfung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die `anchor-name` Eigenschaft darauf gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft des positionierten Elements gesetzt ist, sind die beiden Elemente verknüpft.

Falls es mehrere Ankerelemente mit dem im `position-anchor` Eigenschaft genannten Ankernamen gibt, wird das positionierte Element mit dem letzten Ankerelement im Quelltext verknüpft, das diesen Ankernamen besitzt.

Um eine zuvor hergestellte Verbindung zwischen einem anchor-positionierten Element und einem Anker zu lösen, können Sie den `position-anchor` Wert des anchor-positionierten Elements auf `none` setzen.

Um ein positioniertes Element an seinen Anker zu binden, muss es relativ zu einem Ankerelement mithilfe eines Anker-Positionierungs-Features positioniert werden, wie etwa der {{cssxref("anchor()")}} Funktion (gesetzt als Wert auf {{Glossary("inset_properties", "inset properties")}}) oder die {{cssxref("position-area")}} Eigenschaft.

Wenn der zugehörige Anker versteckt ist, zum Beispiel mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements ist, da es die {{cssxref("content-visibility", "content-visibility: hidden")}} Eigenschaft gesetzt hat, wird das anchor-positionierte Element nicht angezeigt.

Die `position-anchor` Eigenschaft wird auf allen positionierten Elementen unterstützt, einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudo-Elemente sind implizit an dasselbe Element wie das Ursprünglichelement des Pseudo-Elements verankert, es sei denn, es ist anders festgelegt.

Für weitere Informationen über Anker-Funktionen und -Verwendung, siehe das [CSS Anker-Positionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [CSS Anker-Positionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sehen Sie in der `anchor-name` Dokumentation nach für [Basisverwendung](/de/docs/Web/CSS/Reference/Properties/anchor-name#basic_usage) und weitere [`position-anchor` Beispiele](/de/docs/Web/CSS/Reference/Properties/anchor-name#examples).

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente verschieben, indem Sie sie mit verschiedenen Ankern verknüpfen. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen verbunden werden kann, aber ein anchor-positioniertes Element kann nur mit einem einzelnen Anker gleichzeitig verbunden sein, der durch die `anchor-position` Eigenschaft definiert ist.

#### HTML

Wir haben vier Anker und zwei positionierte Elemente, die durch verschiedene `id` Werte unterschieden werden. Die positionierten Elemente enthalten {{htmlelement("select")}} Felder, die es Ihnen ermöglichen zu wählen, mit welchem Anker Sie sie verknüpfen möchten.

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

Wir deklarieren das erste `anchor` `<div>` als Anker, indem wir die `anchor-name` Eigenschaft verwenden, die zwei durch Kommata getrennte Ankernamen erhält, einen für jedes positionierte Element. Dies ist der Anfangszustand der Demo — beide positionierten Elemente werden an den ersten Anker gebunden sein.

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

Jedes der positionierten Elemente erhält eine `position-anchor` Eigenschaft mit einem Wert, der mit einem der beiden Ankernamen übereinstimmt. Die positionierten Elemente erhalten dann anker-relative Positionierungsinformationen durch eine Kombination aus Inset-, Ausrichtungs- und Rand-Eigenschaften.

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

Wir ändern dynamisch, auf welchen Ankerelementen die `anchor-name` Werte gesetzt sind, als Reaktion auf unterschiedliche Anker, die in den `<select>` Menüs der positionierten Elemente ausgewählt werden. Der Schlüssel der Funktionalität hier ist der [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler, `updateAnchorNames()`. Es setzt beide Ankernamen auf einen Anker, wenn die in den beiden `<select>` Menüs gewählten Anker identisch sind. Ansonsten setzt es einen einzelnen Ankernamen auf zwei verschiedene Anker, wie es geeignet ist.

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

Wählen Sie unterschiedliche Werte aus den Drop-Down Menüs, um die Anker zu ändern, zu denen die Elemente relativ positioniert sind.

{{ EmbedLiveSample("Multiple positioned elements and anchors", "100%", "400") }}

### Verwenden eines Slider-Thums als Anker

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Daumen eines Bereichssliders ist.

#### HTML

Wir schließen ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Element und ein {{htmlelement("output")}} Element ein, um den Wert des Bereichs anzuzeigen. Der im `<output>` Element angezeigte Wert wird via JavaScript aktualisiert, wenn sich der Schiebereglerwert ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Daumen, repräsentiert durch die {{cssxref("::-webkit-slider-thumb")}} und {{cssxref("::-moz-range-thumb")}} Pseudo-Elemente, einen Ankernamen `--thumb`. Wir setzen diesen Namen dann als Wert der `position-anchor` Eigenschaft des `<output>` Elements und geben ihm einen {{cssxref("position")}} Wert von `fixed`. Diese Schritte verbinden das `<output>` mit dem Daumen.

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

input::-moz-range-thumb {
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

Die Ausgabe ist am Daumen verankert. Ändern Sie den Wert und die Ausgabe bleibt über und rechts neben dem Daumen, egal wo er sich entlang des Sliders befindet.

{{ EmbedLiveSample("A range thumb as anchor", "100%", "225") }}

> [!NOTE]
> Das CSS zur Ankerpositionierung für diese Demo funktioniert derzeit nicht in Firefox. Das `::-webkit-slider-thumb` Pseudo-Element wird in Firefox nicht unterstützt und, obwohl es ein Firefox-spezifisches Äquivalent gibt — {{cssxref("::-moz-range-thumb")}} — ist es derzeit nicht verankerbar (siehe [Firefox Fehler 1993699](https://bugzil.la/1993699)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("anchor-scope")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS Anchor Positioning](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [CSS Anker Positionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
