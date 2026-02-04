---
title: position-anchor
slug: Web/CSS/Reference/Properties/position-anchor
l10n:
  sourceCommit: 117b521105f6b69d30ba058ccefce9d65e15a2cd
---

Die **`position-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Ankernamen des **Ankerelements** fest (d.h. ein Element, das einen **Ankernamen** über die {{cssxref("anchor-name")}} Eigenschaft besitzt) mit dem ein positioniertes Element verknüpft ist.

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
  - : Verknüpft ein positioniertes Element mit seinem impliziten Ankerelement, falls es eines hat – zum Beispiel wie durch das nicht-standardisierte HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut festgelegt.

- `none`
  - : Der initiale (Standard-)Wert. Das positionierte Element ist nicht mit einem Ankerelement verknüpft.

- {{cssxref("dashed-ident")}}
  - : Der Name des Ankerelements, mit dem das positionierte Element verknüpft werden soll, wie in der {{cssxref("anchor-name")}} Eigenschaft des Ankerelements aufgeführt. Dies wird als **Standardanker-Spezifizierer** bezeichnet.

## Beschreibung

Diese Eigenschaft ist nur für „positionierte“ Elemente relevant – Elemente und Pseudoelemente, die eine {{cssxref("position")}} von `absolute` oder `fixed` haben.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verknüpfung, eine Position und einen Ort. Die `position-anchor` und {{cssxref("anchor-name")}} Eigenschaften bieten eine explizite Verknüpfung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die `anchor-name` Eigenschaft gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft des positionierten Elements gesetzt wird, sind die beiden Elemente verknüpft.

Wenn es mehrere Ankerelemente mit dem im `position-anchor` aufgelisteten Ankernamen gibt, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Um eine zuvor hergestellte Verknüpfung zwischen einem Anker-positionierten Element und einem Anker zu lösen, können Sie den Wert des Anker-positionierten Elements `position-anchor` auf `none` setzen.

Um ein positioniertes Element an seinen Anker zu binden, muss es relativ zu einem Ankerelement unter Verwendung einer Anker-Positionierungsfunktion platziert werden, wie der {{cssxref("anchor()")}} Funktion (als Wert auf {{Glossary("inset_properties", "Einfügeeigenschaften")}} gesetzt) oder der {{cssxref("position-area")}} Eigenschaft.

Wenn der zugehörige Anker versteckt ist, beispielsweise mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements ist, da es {{cssxref("content-visibility", "content-visibility: hidden")}} darauf gesetzt hat, wird das Anker-positionierte Element nicht angezeigt.

Die `position-anchor` Eigenschaft wird von allen positionierten Elementen unterstützt, einschließlich [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudoelemente sind implizit an dasselbe Element wie das Ursprungselement des Pseudoelements verankert, es sei denn, es wird anders angegeben.

Für weitere Informationen zu Ankerfunktionen und deren Nutzung siehe das [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [Anleitung zur Nutzung von CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe die `anchor-name` Dokumentation für [grundlegende Nutzung](/de/docs/Web/CSS/Reference/Properties/anchor-name#basic_usage) und zusätzliche [`position-anchor` Beispiele](/de/docs/Web/CSS/Reference/Properties/anchor-name#examples).

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente verschieben und sie mit verschiedenen Ankern verknüpfen. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen verknüpft werden kann, ein Anker-positioniertes Element jedoch immer nur mit einem einzelnen Anker zu einem Zeitpunkt verknüpft werden kann, dem Anker der durch die `anchor-position` Eigenschaft definiert wird.

#### HTML

Wir haben vier Anker und zwei positionierte Elemente, unterschieden durch verschiedene `id` Werte. Die positionierten Elemente enthalten {{htmlelement("select")}} Boxen, mit denen Sie wählen können, mit welchen Ankern Sie sie verknüpfen möchten.

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

Wir deklarieren das erste `anchor` `<div>` als Anker mithilfe der `anchor-name` Eigenschaft, die zwei durch Kommas getrennte Ankernamen erhält, einen für jedes positionierte Element. Dies ist der Ausgangszustand des Demos — beide positionierten Elemente werden an den ersten Anker gebunden.

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

Jedem der positionierten Elemente wird eine `position-anchor` Eigenschaft mit einem Wert zugewiesen, der einem der beiden Ankernamen entspricht. Die positionierten Elemente erhalten dann ankerrelative Positionierungsinformationen mithilfe einer Kombination aus Einfüge-, Ausrichtungs- und Margin-Eigenschaften.

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

Wir ändern dynamisch welche Ankerelemente die `anchor-name` Werte gesetzt haben, als Reaktion darauf, dass verschiedene Anker in den `<select>` Menüs der positionierten Elemente ausgewählt werden. Die Schlüssel-Funktionalität hier ist der [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignis-Handler, `updateAnchorNames()`. Er setzt beide Ankernamen auf einen Anker, wenn die in den beiden `<select>` Menüs gewählten Anker gleich sind. Andernfalls setzt er einen einzelnen Ankernamen auf zwei separate Anker, wie es angemessen ist.

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

### Verwenden eines Schieberegler-Daumen als Anker

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Daumen eines Bereichsschiebereglers ist.

#### HTML

Wir fügen ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Element und ein {{htmlelement("output")}} Element ein, um den Wert des Bereichs anzuzeigen. Der im `<output>` Element angezeigte Wert wird per JavaScript aktualisiert, sobald sich der Schiebereglerwert ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Daumen, dargestellt durch die {{cssxref("::-webkit-slider-thumb")}} und {{cssxref("::-moz-range-thumb")}} Pseudoelemente, einen Ankernamen von `--thumb`. Wir setzen diesen Namen dann als Wert der `position-anchor` Eigenschaft des `<output>` Elements und geben ihm einen {{cssxref("position")}} Wert von `fixed`. Diese Schritte verknüpften das `<output>` mit dem Daumen.

Schließlich verwenden wir {{cssxref("left")}} und {{cssxref("top")}} Eigenschaften mit {{cssxref("anchor()")}} Werten, um das `<output>` relativ zum Daumen zu positionieren.

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

Die Ausgabe ist an den Daumen verankert. Ändern Sie den Wert und die Ausgabe bleibt über und rechts vom Daumen, egal wo sie sich entlang des Schiebereglers befindet.

{{ EmbedLiveSample("A range thumb as anchor", "100%", "225") }}

> [!NOTE]
> Das Ankerpositionierungs-CSS für dieses Demo funktioniert aktuell nicht in Firefox. Der Daumen des Schiebereglers kann über das {{cssxref("::-moz-range-thumb")}} Pseudoelement in Firefox angesprochen werden, ist jedoch derzeit nicht verankerbar (siehe [Firefox Fehler 1993699](https://bugzil.la/1993699)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("anchor-scope")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Anleitung zur Nutzung von CSS Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
