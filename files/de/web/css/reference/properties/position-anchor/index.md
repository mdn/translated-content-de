---
title: "`position-anchor` CSS property"
short-title: position-anchor
slug: Web/CSS/Reference/Properties/position-anchor
l10n:
  sourceCommit: 31086145b865d6c5c2fec3ba700fd424d57fdf42
---

Die **`position-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft legt das Standard-**Ankerelement** für ein positioniertes Element fest. Dieser Standard wird von {{cssxref("position-area")}} und {{cssxref("position-try")}} genutzt und von Ankerfunktionen ({{cssxref("anchor()")}} und {{cssxref("anchor-size()")}}), wenn diesen Funktionen kein `<anchor-name>` Argument übergeben wird.

## Syntax

```css
/* Single values */
position-anchor: normal;
position-anchor: auto;
position-anchor: none;
position-anchor: --anchor-name;
position-anchor: match-parent;

/* Global values */
position-anchor: inherit;
position-anchor: initial;
position-anchor: revert;
position-anchor: revert-layer;
position-anchor: unset;
```

### Werte

- `normal`
  - : Wenn {{cssxref("position-area")}} `none` ist, verhält es sich wie `none`. Andernfalls verhält es sich wie `auto`.

- `auto`
  - : Verknüpft ein positioniertes Element mit seinem impliziten Ankerelement, sofern eines vorhanden ist — beispielsweise wie durch das nicht-standardisierte HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut festgelegt.

- `none`
  - : Das positionierte Element ist nicht mit einem Ankerelement verknüpft.

- {{cssxref("dashed-ident")}}
  - : Der Name des Ankerelements, mit dem das positionierte Element verknüpft werden soll, wie in der {{cssxref("anchor-name")}} Eigenschaft des Ankerelements angegeben. Dies wird als **Standardankerspezifikation** bezeichnet.

- `match-parent`
  - : Verwendet dasselbe Standardankerelement wie das Elternelement oder das Ursprungselement, wenn es sich um ein {{Glossary("Pseudo-element", "Pseudoelement")}} handelt, vorausgesetzt, dass dies ein zulässiges Ankerelement wäre (das heißt [Teil des Baums](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#tree-abiding_pseudo-elements)). Andernfalls hat es kein Standardankerelement.

## Beschreibung

Diese Eigenschaft ist nur bei "positionierten" Elementen relevant — Elemente und Pseudoelemente, die eine {{cssxref("position")}} von `absolute` oder `fixed` haben.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Assoziation, eine Position und einen Standort. Die Eigenschaften `position-anchor` und {{cssxref("anchor-name")}} bieten eine explizite Assoziation.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die ihm über die Eigenschaft `anchor-name` zugewiesen werden. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft des positionierten Elements festgelegt ist, sind die beiden Elemente verknüpft.

Wenn es mehrere Ankerelemente mit dem in der `position-anchor` Eigenschaft aufgeführten Ankernamen gibt, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Um eine zuvor getroffene Assoziation zwischen einem Anker-positionierten Element und einem Anker aufzuheben, können Sie den Wert `position-anchor` des Anker-positionierten Elements auf `none` setzen.

Um ein positioniertes Element an seinen Anker zu binden, muss es relativ zu einem Ankerelement unter Verwendung einer Ankerpositionierungsfunktion positioniert werden, wie der {{cssxref("anchor()")}} Funktion (als Wert auf {{Glossary("inset_properties", "Einsatzeigenschaften")}}) oder der {{cssxref("position-area")}} Eigenschaft.

Wenn der zugehörige Anker versteckt ist, beispielsweise mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er zu den [übersprungenen Inhalten](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements gehört, weil {{cssxref("content-visibility", "content-visibility: hidden")}} darauf gesetzt ist, wird das Anker-positionierte Element nicht angezeigt.

Die `position-anchor` Eigenschaft wird auf allen positionierten Elementen unterstützt, einschließlich [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudoelemente sind implizit an dasselbe Element wie das Ursprungselement des Pseudoelements verankert, es sei denn, es wird anders angegeben.

Für weitere Informationen über Ankerfunktionen und deren Verwendung, siehe das [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning) und den [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Sehen Sie die Dokumentation zu `anchor-name` für [grundlegende Nutzung](/de/docs/Web/CSS/Reference/Properties/anchor-name#basic_usage) und zusätzliche [`position-anchor` Beispiele](/de/docs/Web/CSS/Reference/Properties/anchor-name#examples).

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente verschieben, indem Sie sie mit verschiedenen Ankern verknüpfen. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen verknüpft werden kann, aber ein Anker-positioniertes Element kann jeweils nur mit einem einzigen Anker in Verbindung gebracht werden, dem durch die Eigenschaft `anchor-position` definierten Anker.

#### HTML

Wir haben vier Anker und zwei positionierte Elemente, die mit unterschiedlichen `id` Werten unterschieden werden. Die positionierten Elemente enthalten {{htmlelement("select")}} Felder, die Ihnen ermöglichen, auszuwählen, mit welchem Anker Sie sie verknüpfen möchten.

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

Wir deklarieren das erste `anchor` `<div>` als Anker unter Verwendung der `anchor-name` Eigenschaft, die zwei kommagetrennte Ankernamen erhält, einen für jedes positionierte Element. Dies ist der Anfangszustand der Demo — beide positionierten Elemente werden an den ersten Anker gebunden.

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

Jedes der positionierten Elemente erhält eine `position-anchor` Eigenschaft mit einem Wert, der einem der beiden Ankernamen entspricht. Die positionierten Elemente erhalten dann anker-relative Positionierungsinformationen unter Verwendung einer Kombination aus Inset-, Ausrichtungs- und Randeigenschaften.

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

Wir ändern dynamisch, auf welchen Ankerelementen die `anchor-name` Werte gesetzt sind, als Reaktion auf verschiedene ausgewählte Anker in den `<select>` Menüs der positionierten Elemente. Die Schlüsselfunktionalität hier ist der [`change`](/de/docs/Web/API/HTMLElement/change_event) Event-Handler, `updateAnchorNames()`. Es setzt beide Ankernamen auf einem Anker, wenn die in den beiden `<select>` Menüs gewählten Anker gleich sind. Andernfalls setzt es einen einzelnen Ankernamen auf zwei separate Anker, wie es angebracht ist.

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

### Verwendung eines Schieberegler-Daumens als Anker

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Daumen eines Bereichsschiebereglers ist.

#### HTML

Wir fügen ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Element und ein {{htmlelement("output")}} Element hinzu, um den Wert des Bereichs anzuzeigen. Der angezeigte Wert im `<output>` Element wird über JavaScript aktualisiert, wenn sich der Schieberegler-Wert ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Daumen, dargestellt durch die Pseudoelemente {{cssxref("::-webkit-slider-thumb")}} und {{cssxref("::-moz-range-thumb")}}, einen Ankernamen `--thumb`. Dann setzen wir diesen Namen als Wert der `position-anchor` Eigenschaft des `<output>` Elements und geben ihm einen {{cssxref("position")}} Wert von `fixed`. Diese Schritte verbinden das `<output>` mit dem Daumen.

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

Wir fügen einen Event-Listener hinzu, der den Inhalt des `<output>` Elements aktualisiert, wenn sich der Wert des `<input>` ändert:

```js
const input = document.querySelector("input");
const output = document.querySelector("output");

input.addEventListener("input", (event) => {
  output.innerText = `${input.value}`;
});
```

#### Ergebnisse

Die Ausgabe ist am Daumen verankert. Ändern Sie den Wert, und die Ausgabe bleibt über und rechts vom Daumen, egal wo er sich entlang des Schiebereglers befindet.

{{ EmbedLiveSample("Ein Bereichsdaumen als Anker", "100%", "225") }}

> [!NOTE]
> Das Ankerpositionierungs-CSS für diese Demo funktioniert derzeit nicht in Firefox. Der Schieberegler-Daumen kann in Firefox über das Pseudoelement {{cssxref("::-moz-range-thumb")}} gezielt werden, aber es ist derzeit nicht als Anker verfügbar (siehe [Firefox Bug 1993699](https://bugzil.la/1993699)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("anchor-scope")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS-Ankerpositionierungsmodul](/de/docs/Web/CSS/Guides/Anchor_positioning)
- [Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
