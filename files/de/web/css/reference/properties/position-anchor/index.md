---
title: "`position-anchor` CSS property"
short-title: position-anchor
slug: Web/CSS/Reference/Properties/position-anchor
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`position-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert den Namen des Ankers des **Ankerelements** (d.h. ein Element, das über die {{cssxref("anchor-name")}} Eigenschaft einen **Ankernamen** gesetzt hat), mit dem ein positioniertes Element assoziiert wird.

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
  - : Verbindet ein positioniertes Element mit seinem impliziten Ankerelement, sofern es eines hat — beispielsweise wie durch das nicht-standardisierte HTML-Attribut [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) festgelegt.

- `none`
  - : Der initiale (Standard-)Wert. Das positionierte Element ist nicht mit einem Ankerelement assoziiert.

- {{cssxref("dashed-ident")}}
  - : Der Name des Ankerelements, mit dem das positionierte Element assoziiert werden soll, wie im {{cssxref("anchor-name")}} des Ankerelements aufgeführt. Dies wird als der **Standardankerspezifikator** bezeichnet.

## Beschreibung

Diese Eigenschaft ist nur für "positionierte" Elemente relevant — Elemente und Pseudo-Elemente, bei denen die {{cssxref("position")}} auf `absolute` oder `fixed` gesetzt ist.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Assoziation, eine Position und einen Ort. Die `position-anchor`- und {{cssxref("anchor-name")}}-Eigenschaften bieten eine explizite Assoziation.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die Eigenschaft `anchor-name` gesetzt werden. Wenn einer dieser Namen dann als Wert der `position-anchor`-Eigenschaft des positionierten Elements festgelegt wird, sind die beiden Elemente verbunden.

Wenn es mehrere Ankerelemente mit dem in der `position-anchor`-Eigenschaft aufgeführten Ankernamen gibt, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge mit diesem Ankernamen assoziiert.

Um eine zuvor hergestellte Verbindung zwischen einem Anker-positionierten Element und einem Anker aufzuheben, können Sie den Wert der `position-anchor`-Eigenschaft des Anker-positionierten Elements auf `none` setzen.

Um ein positioniertes Element an seinen Anker zu binden, muss es relativ zu einem Ankerelement platziert werden, indem eine Anker-Positionierungsfunktion wie die {{cssxref("anchor()")}}-Funktion (als Wert für {{Glossary("inset_properties", "Einfügeigenschaften")}} festgelegt) oder die {{cssxref("position-area")}}-Eigenschaft verwendet wird.

Wenn der zugehörige Anker ausgeblendet ist, beispielsweise mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents) eines anderen Elements ist, weil auf ihm {{cssxref("content-visibility", "content-visibility: hidden")}} gesetzt ist, wird das Anker-positionierte Element nicht angezeigt.

Die `position-anchor` Eigenschaft wird bei allen positionierten Elementen unterstützt, einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudo-Elemente sind implizit an dasselbe Element verankert wie das Ursprungselement des Pseudo-Elements, sofern nicht anderweitig angegeben.

Für weitere Informationen über Anker-Funktionen und -Verwendung siehe das [CSS-Anker-Positionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul und den [CSS-Anker-Positionierungs-](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe die Dokumentation zu `anchor-name` für [Grundlagen der Anwendung](/de/docs/Web/CSS/Reference/Properties/anchor-name#basic_usage) und zusätzliche [`position-anchor` Beispiele](/de/docs/Web/CSS/Reference/Properties/anchor-name#examples).

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente bewegen, indem Sie sie mit verschiedenen Ankern verbinden. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen assoziiert werden kann, aber ein Anker-positioniertes Element kann nur mit einem einzelnen Anker zu einem Zeitpunkt verbunden sein, dem durch die `anchor-position` Eigenschaft angegebenen Anker.

#### HTML

Wir haben vier Anker und zwei positionierte Elemente, die durch unterschiedliche `id`-Werte unterschieden werden. Die positionierten Elemente enthalten {{htmlelement("select")}}-Boxen, mit denen Sie auswählen können, mit welchem Anker Sie sie verbinden möchten.

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

Wir deklarieren das erste `anchor` `<div>` als Anker mithilfe der `anchor-name` Eigenschaft, die mit zwei durch Komma getrennten Ankernamen versehen wird, einer für jedes positionierte Element. Dies ist der Anfangszustand der Vorführung — beide positionierten Elemente werden am ersten Anker befestigt.

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

Jedem der positionierten Elemente wird eine `position-anchor` Eigenschaft mit einem Wert zugewiesen, der einem der beiden Ankernamen entspricht. Die positionierten Elemente erhalten dann Anker-relative Positionierungsinformationen durch eine Kombination von Einfüge-, Ausrichtungs- und Rand-Eigenschaften.

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

Wir ändern dynamisch, auf welche Ankerelemente die `anchor-name`-Werte gesetzt sind, wenn in den `<select>`-Menüs der positionierten Elemente unterschiedliche Anker ausgewählt werden. Die Hauptfunktionalität hier ist der [`change`](/de/docs/Web/API/HTMLElement/change_event) Ereignishandler `updateAnchorNames()`. Er setzt beide Ankernamen auf einen Anker, wenn die gewählten Anker in den beiden `<select>`-Menüs gleich sind. Andernfalls setzt er einen einzelnen Ankernamen wie zutreffend auf zwei separate Anker.

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

Wählen Sie unterschiedliche Werte aus den Dropdown-Menüs, um die Anker zu ändern, auf die sich die Elemente beziehen.

{{ EmbedLiveSample("Mehrere positionierte Elemente und Anker", "100%", "400") }}

### Verwenden eines Schiebereglerzeigers als Anker

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Schiebereglerzeiger eines Bereichs-Sliders ist.

#### HTML

Wir fügen ein [`<input type="range">`](/de/docs/Web/HTML/Reference/Elements/input/range) Element und ein {{htmlelement("output")}} Element hinzu, um den Wert des Bereichs anzuzeigen. Der angezeigte Wert im `<output>` Element wird durch JavaScript aktualisiert, wenn sich der Slider-Wert ändert.

```html
<label for="slider">Change the value:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Zeiger, der durch die {{cssxref("::-webkit-slider-thumb")}} und {{cssxref("::-moz-range-thumb")}} Pseudo-Elemente repräsentiert wird, einen Ankernamen `--thumb`. Dann setzen wir diesen Namen als Wert der `position-anchor`-Eigenschaft des `<output>` Elements und geben ihm einen {{cssxref("position")}} Wert von `fixed`. Diese Schritte verknüpfen das `<output>` mit dem Zeiger.

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

Die Ausgabe ist an den Zeiger verankert. Ändern Sie den Wert und die Ausgabe bleibt über und rechts vom Zeiger, egal wo er auf dem Slider positioniert ist.

{{ EmbedLiveSample("Ein Bereichszeiger als Anker", "100%", "225") }}

> [!NOTE]
> Das Ankerpositionierungs-CSS für diese Demo funktioniert derzeit nicht in Firefox. Der Zeiger des Sliders kann in Firefox über das {{cssxref("::-moz-range-thumb")}} Pseudo-Element angesprochen werden, ist jedoch derzeit nicht als Anker verfügbar (siehe [Firefox Bug 1993699](https://bugzil.la/1993699)).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("anchor-name")}}
- {{cssxref("anchor-scope")}}
- HTML [`anchor`](/de/docs/Web/HTML/Reference/Global_attributes/anchor) Attribut
- [CSS-Anker-Positionierungs](/de/docs/Web/CSS/Guides/Anchor_positioning) Modul
- [Verwendung von CSS-Anker-Positionierung](/de/docs/Web/CSS/Guides/Anchor_positioning/Using) Leitfaden
