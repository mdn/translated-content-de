---
title: "`position-anchor` CSS property"
short-title: position-anchor
slug: Web/CSS/Reference/Properties/position-anchor
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`position-anchor`** legt das standardmäßige **Ankerelement** für ein positioniertes Element fest.
Dieser Standardanker wird von {{cssxref("position-area")}} und {{cssxref("position-try")}} sowie von den Ankerfunktionen ({{cssxref("anchor()")}} und {{cssxref("anchor-size()")}}) verwendet, wenn für diese Funktionen kein `<anchor-name>`-Argument angegeben wird.

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
  - : Wenn {{cssxref("position-area")}} den Wert `none` hat, verhält sich dieser Wert wie `none`. Andernfalls verhält er sich wie `auto`.

- `auto`
  - : Verknüpft ein positioniertes Element mit seinem impliziten Ankerelement, sofern es eines hat – beispielsweise durch das nicht standardisierte HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor).

- `none`
  - : Das positionierte Element ist mit keinem Ankerelement verknüpft.

- {{cssxref("dashed-ident")}}
  - : Der Name des Ankerelements, mit dem das positionierte Element verknüpft werden soll. Der Name muss in der Eigenschaft {{cssxref("anchor-name")}} des Ankerelements aufgeführt sein. Er wird als **Standardankerbezeichner** bezeichnet.

- `match-parent`
  - : Verwendet dasselbe Standardankerelement wie das Elternelement oder, falls es sich um ein {{Glossary("Pseudo-element", "Pseudoelement")}} handelt, wie dessen Ursprungselement. Voraussetzung ist, dass dieses Element als Ankerelement zulässig ist, also [Teil des Baums](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#tree-abiding_pseudo-elements) ist. Andernfalls gibt es kein Standardankerelement.

## Beschreibung

Diese Eigenschaft ist nur für „positionierte“ Elemente relevant – Elemente und Pseudoelemente, deren {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist.

Um ein Element relativ zu einem Ankerelement zu positionieren, sind drei Dinge erforderlich: eine Verknüpfung, eine Position und eine Platzierung. Die Eigenschaften `position-anchor` und {{cssxref("anchor-name")}} stellen eine explizite Verknüpfung her.

Dem Ankerelement werden über die Eigenschaft `anchor-name` ein oder mehrere `<dashed-ident>`-Ankernamen zugewiesen. Wird einer dieser Namen anschließend als Wert der Eigenschaft `position-anchor` des positionierten Elements festgelegt, sind die beiden Elemente miteinander verknüpft.

Wenn mehrere Ankerelemente den in der Eigenschaft `position-anchor` angegebenen Ankernamen haben, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge verknüpft, das diesen Namen trägt.

Um eine bestehende Verknüpfung zwischen einem ankerpositionierten Element und einem Anker aufzuheben, können Sie den Wert von `position-anchor` für das ankerpositionierte Element auf `none` setzen.

Damit ein positioniertes Element an seinem Anker ausgerichtet wird, muss es mithilfe einer Funktion der Ankerpositionierung relativ zu einem Ankerelement platziert werden, beispielsweise mit der Funktion {{cssxref("anchor()")}} als Wert einer {{Glossary("inset_properties", "Inset-Eigenschaft")}} oder mit der Eigenschaft {{cssxref("position-area")}}.

Wenn Sie Elemente mithilfe von `anchor()` relativ zu [impliziten Ankern](/de/docs/Web/CSS/Guides/Anchor_positioning/Using#implicit_anchor_association) positionieren, setzen Sie `position-anchor: auto` für das ankerpositionierte Element, um die implizite Verknüpfung zu aktivieren. Weitere Informationen finden Sie unter [Ankerpositionierung von Popovern](/de/docs/Web/API/Popover_API/Using#popover_anchor_positioning).

Wenn der verknüpfte Anker ausgeblendet ist, etwa durch {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er zu den [übersprungenen Inhalten](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements gehört, für das {{cssxref("content-visibility", "content-visibility: hidden")}} festgelegt ist, wird das ankerpositionierte Element nicht angezeigt.

Die Eigenschaft `position-anchor` wird für alle positionierten Elemente unterstützt, einschließlich [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudoelemente sind implizit mit demselben Element verankert wie ihr Ursprungselement, sofern nichts anderes angegeben ist.

Weitere Informationen zu Ankerfunktionen und ihrer Verwendung finden Sie im Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning) und im Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

In der Dokumentation zu `anchor-name` finden Sie eine [grundlegende Verwendung](/de/docs/Web/CSS/Reference/Properties/anchor-name#basic_usage) und weitere [Beispiele für `position-anchor`](/de/docs/Web/CSS/Reference/Properties/anchor-name#examples).

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente verschieben und mit verschiedenen Ankern verknüpfen. Es zeigt, dass ein Anker mit mehreren positionierten Elementen verknüpft sein kann, ein ankerpositioniertes Element jedoch jeweils nur mit einem einzigen Anker: dem durch die Eigenschaft `anchor-position` festgelegten Anker.

#### HTML

Es gibt vier Anker und zwei positionierte Elemente, die sich durch unterschiedliche `id`-Werte unterscheiden. Die positionierten Elemente enthalten {{htmlelement("select")}}-Felder, mit denen Sie auswählen können, mit welchem Anker sie verknüpft werden sollen.

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

Wir deklarieren das erste `anchor`-`<div>` mithilfe der Eigenschaft `anchor-name` als Anker und weisen ihm zwei durch Kommas getrennte Ankernamen zu – einen für jedes positionierte Element. Dies ist der Ausgangszustand des Beispiels: Beide positionierten Elemente sind am ersten Anker ausgerichtet.

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

Jedes der positionierten Elemente erhält eine Eigenschaft `position-anchor`, deren Wert einem der beiden Ankernamen entspricht. Anschließend legen wir die Positionierung relativ zum Anker durch eine Kombination aus Inset-, Ausrichtungs- und Margin-Eigenschaften fest.

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

Wir ändern dynamisch, welchen Ankerelementen die `anchor-name`-Werte zugewiesen sind, wenn in den `<select>`-Menüs der positionierten Elemente andere Anker ausgewählt werden. Entscheidend ist dabei der Event-Handler `updateAnchorNames()` für das Ereignis [`change`](/de/docs/Web/API/HTMLElement/change_event). Wenn in beiden `<select>`-Menüs derselbe Anker ausgewählt wurde, weist er diesem Anker beide Ankernamen zu. Andernfalls weist er zwei verschiedenen Ankern jeweils den entsprechenden Ankernamen zu.

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

Wählen Sie in den Dropdown-Menüs unterschiedliche Werte aus, um die Anker zu ändern, relativ zu denen die Elemente positioniert werden.

{{ EmbedLiveSample("Multiple positioned elements and anchors", "100%", "400") }}

### Einen Schiebereglergriff als Anker verwenden

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, bei dem es sich um den Griff eines Schiebereglers handelt.

#### HTML

Wir fügen ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range)-Element und ein {{htmlelement("output")}}-Element hinzu, um den Wert des Wertebereichs anzuzeigen. Der im `<output>`-Element angezeigte Wert wird per JavaScript aktualisiert, wenn sich der Wert des Schiebereglers ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Griff, der durch die Pseudoelemente {{cssxref("::-webkit-slider-thumb")}} und {{cssxref("::-moz-range-thumb")}} dargestellt wird, den Ankernamen `--thumb`. Anschließend setzen wir diesen Namen als Wert der Eigenschaft `position-anchor` des `<output>`-Elements und weisen ihm für {{cssxref("position")}} den Wert `fixed` zu. Dadurch wird das `<output>`-Element mit dem Griff verknüpft.

Schließlich verwenden wir die Eigenschaften {{cssxref("left")}} und {{cssxref("top")}} mit {{cssxref("anchor()")}}-Werten, um das `<output>`-Element relativ zum Griff zu positionieren.

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

Wir fügen einen Event-Listener hinzu, der den Inhalt des `<output>`-Elements aktualisiert, wenn sich der Wert des `<input>`-Elements ändert:

```js
const input = document.querySelector("input");
const output = document.querySelector("output");

input.addEventListener("input", (event) => {
  output.innerText = `${input.value}`;
});
```

#### Ergebnis

Die Ausgabe ist am Griff verankert. Wenn Sie den Wert ändern, bleibt die Ausgabe oberhalb und rechts vom Griff – unabhängig davon, wo sich dieser auf dem Schieberegler befindet.

{{ EmbedLiveSample("using_a_slider_thumb_as_an_anchor", "100%", "225") }}

> [!NOTE]
> Das CSS für die Ankerpositionierung in diesem Beispiel funktioniert derzeit nicht in Firefox. Der Griff des Schiebereglers kann in Firefox zwar über das Pseudoelement {{cssxref("::-moz-range-thumb")}} angesprochen werden, steht derzeit aber nicht als Anker zur Verfügung (siehe [Firefox-Bug 1993699](https://bugzil.la/1993699)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("anchor-scope")}}
- HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor)
- Modul [CSS-Ankerpositionierung](/de/docs/Web/CSS/Guides/Anchor_positioning)
- Leitfaden [CSS-Ankerpositionierung verwenden](/de/docs/Web/CSS/Guides/Anchor_positioning/Using)
