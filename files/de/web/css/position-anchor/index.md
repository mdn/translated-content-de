---
title: position-anchor
slug: Web/CSS/position-anchor
l10n:
  sourceCommit: 839c5e88a078deead1bcf1b2837d05499cb859b1
---

{{CSSRef}}{{seecompattable}}

Die **`position-anchor`** [CSS](/de/docs/Web/CSS) Eigenschaft spezifiziert den Ankernamen des **Ankerelements** (d.h. ein Element, das über die {{cssxref("anchor-name")}} Eigenschaft einen **Ankernamen** gesetzt hat), mit dem ein positioniertes Element verknüpft ist.

## Syntax

```css
/* Einzelne Werte */
position-anchor: auto;
position-anchor: --anchorName;

/* Globale Werte */
position-anchor: inherit;
position-anchor: initial;
position-anchor: revert;
position-anchor: revert-layer;
position-anchor: unset;
```

### Werte

- `auto`

  - : Verknüpft ein positioniertes Element mit seinem impliziten Ankerelement, falls es eines hat — zum Beispiel wie durch das nicht-standardisierte HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut festgelegt.

- {{cssxref("dashed-ident")}}

  - : Der Name des Ankerelements, mit dem das positionierte Element verknüpft werden soll, wie in der {{cssxref("anchor-name")}} Eigenschaft des Ankerelements angegeben. Dies ist als **Standard-Ankerspezifizierer** bekannt.

## Beschreibung

Diese Eigenschaft ist nur für "positionierte" Elemente relevant — Elemente und Pseudo-Elemente, die eine {{cssxref("position")}} von `absolute` oder `fixed` haben.

Um ein Element relativ zu einem Ankerelement zu positionieren, benötigt das positionierte Element drei Merkmale: eine Verbindung, eine Position und eine Lage. Die Eigenschaften `position-anchor` und {{cssxref("anchor-name")}} bieten die Verbindung.

Das Ankerelement akzeptiert einen oder mehrere `<dashed-ident>` Ankernamen, die über die Eigenschaft `anchor-name` darauf gesetzt sind. Wenn einer dieser Namen dann als Wert der `position-anchor` Eigenschaft des positionierten Elements gesetzt wird, sind die beiden Elemente verbunden.

Wenn es mehrere Ankerelemente mit dem in der `position-anchor` Eigenschaft aufgeführten Ankernamen gibt, wird das positionierte Element mit dem letzten Ankerelement in der Quellreihenfolge mit diesem Ankernamen verknüpft.

Um ein positioniertes Element an seinen Anker zu binden, muss es relativ zu einem Ankerelement unter Verwendung einer Ankerpositionierungsfunktion platziert werden, wie z.B. der {{cssxref("anchor()")}} Funktion (als Wert auf {{glossary("inset properties")}} gesetzt) oder der {{cssxref("position-area")}} Eigenschaft.

Wenn der zugehörige Anker versteckt ist, beispielsweise mit {{cssxref("display", "display: none")}} oder {{cssxref("visibility", "visibility: hidden")}}, oder wenn er Teil der [übersprungenen Inhalte](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents) eines anderen Elements ist, weil es {{cssxref("content-visibility", "content-visibility: hidden")}} darauf gesetzt hat, wird das Anker-positionierte Element nicht angezeigt.

Die `position-anchor` Eigenschaft wird auf allen Elementen unterstützt, die positioniert sind, einschließlich [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) wie {{cssxref("::before")}} und {{cssxref("::after")}}. Pseudo-Elemente sind implizit an dasselbe Element wie das Ursprungselement des Pseudo-Elements verankert, sofern nicht anders angegeben.

Für weitere Informationen zu Ankerfunktionen und deren Nutzung siehe die [CSS-Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modulseite und den [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using).

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Siehe die Dokumentation zu `anchor-name` für [grundlegende Nutzung](/de/docs/Web/CSS/anchor-name#basic_usage) und zusätzliche [`position-anchor` Beispiele](/de/docs/Web/CSS/anchor-name#examples).

### Verwenden eines Regler-Daumens als Anker

In diesem Beispiel wird ein {{htmlelement("output")}} relativ zu einem Anker positioniert, der der Daumen eines Reichweitenreglers ist.

#### HTML

Wir verwenden ein [`<input type="range">`](/de/docs/Web/HTML/Element/input/range) Element und ein [`<output>`](/de/docs/Web/HTML/Element/output) Element, um den Wert des Bereichs anzuzeigen. Der im `<output>` Element angezeigte Wert wird per JavaScript aktualisiert, während sich der Reglerwert ändert.

```html
<label for="slider">Ändern Sie den Wert:</label>
<input type="range" min="0" max="100" value="25" id="slider" />
<output>25</output>
```

#### CSS

Wir geben dem Daumen, dargestellt durch das [`::-webkit-slider-thumb`](/de/docs/Web/CSS/::-webkit-slider-thumb) Pseudo-Element, den Ankernamen `--thumb`. Dann setzen wir diesen Namen als den Wert der `position-anchor` Eigenschaft des `<output>` Elements und geben ihm einen {{cssxref("position")}} Wert von `fixed`. Diese Schritte verbinden das `<output>` mit dem Daumen.

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

Wir binden einen Event-Listener ein, der den Inhalt des `<output>` Elements aktualisiert, wenn sich der Wert des `<input>` ändert:

```js
const input = document.querySelector("input");
const output = document.querySelector("output");

input.addEventListener("input", (event) => {
  output.innerText = `${input.value}`;
});
```

#### Ergebnisse

Das `Output` ist am Daumen verankert. Ändern Sie den Wert. Wenn die Ankerpositionierung in Ihrem Browser unterstützt wird, wird der Wert über und rechts vom Daumen sein, egal wo er sich auf dem Schieberegler befindet.

{{ EmbedLiveSample("Ein Bereichsdaumen als Anker", "100%", "225") }}

### Mehrere positionierte Elemente und Anker

In diesem Beispiel können Sie mehrere positionierte Elemente verschieben und sie mit verschiedenen Ankern verknüpfen. Dieses Beispiel zeigt, wie ein Anker mit mehreren positionierten Elementen verknüpft werden kann, aber ein Anker-positioniertes Element kann jeweils nur mit einem einzelnen Anker verbunden sein, dem Anker, der durch die `anchor-position` Eigenschaft definiert ist.

#### HTML

Wir haben vier Anker und zwei positionierte Elemente, die mit verschiedenen `id`-Werten unterschieden werden. Die positionierten Elemente enthalten {{htmlelement("select")}} Felder, die es Ihnen ermöglichen, auszuwählen, mit welchem Anker Sie sie verknüpfen möchten.

```html
<div id="anchor-container">
  <div class="anchor" id="anchor1">⚓︎</div>
  <div class="anchor" id="anchor2">⚓︎</div>
  <div class="anchor" id="anchor3">⚓︎</div>
  <div class="anchor" id="anchor4">⚓︎</div>
</div>

<div class="infobox" id="infobox1">
  <form>
    <label for="anchor1-anchor-select">Platzieren Sie die Infobox auf:</label>
    <select id="anchor1-anchor-select">
      <option value="1">Anker 1</option>
      <option value="2">Anker 2</option>
      <option value="3">Anker 3</option>
      <option value="4">Anker 4</option>
    </select>
  </form>
</div>

<div class="infobox" id="infobox2">
  <form>
    <label for="anchor2-anchor-select">Platzieren Sie die Infobox auf:</label>
    <select id="anchor2-anchor-select">
      <option value="1">Anker 1</option>
      <option value="2">Anker 2</option>
      <option value="3">Anker 3</option>
      <option value="4">Anker 4</option>
    </select>
  </form>
</div>
```

#### CSS

Wir deklarieren das erste `anchor` `<div>` als Anker unter Verwendung der `anchor-name` Eigenschaft, die zwei kommagetrennte Ankernamen erhält, jeweils einen Namen für ein positioniertes Element. Dies ist der Anfangszustand der Demo — beide positionierten Elemente werden an den ersten Anker gebunden.

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

Jedes der positionierten Elemente erhält eine `position-anchor` Eigenschaft mit einem Wert, der mit einem der beiden Ankernamen übereinstimmt. Die positionierten Elemente erhalten dann ankerbezogene Positionsinformationen mit einer Kombination von Einfüge-, Ausrichtungs- und Randwerten.

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

Wir ändern dynamisch, auf welchen Ankerelementen die `anchor-name` Werte gesetzt werden, als Reaktion auf die Auswahl verschiedener Anker in den `<select>` Menüs der positionierten Elemente. Die Schlüssel-Funktionalität hier ist der [`change`](/de/docs/Web/API/HTMLElement/change_event) Event-Handler, `updateAnchorNames()`. Er setzt beide Ankernamen auf einen Anker, wenn in den beiden `<select>` Menüs dieselben Anker ausgewählt werden. Andernfalls setzt er einen einzelnen Ankernamen auf zwei separate Anker, wie es angemessen ist.

```js
// Referenzen auf die beiden Select-Menüs erhalten
const select1 = document.querySelector("#anchor1-anchor-select");
const select2 = document.querySelector("#anchor2-anchor-select");
// Referenzen auf alle Anker in einer NodeList (array-ähnlich) speichern
const anchors = document.querySelectorAll("#anchor-container > div");

// Den gleichen Change-Event-Handler auf beide Select-Menüs setzen
select1.addEventListener("change", updateAnchorNames);
select2.addEventListener("change", updateAnchorNames);

function updateAnchorNames() {
  // Entfernen Sie alle Ankernamen von allen Ankern
  for (const anchor of anchors) {
    anchor.style.anchorName = "none";
  }

  // Konvertieren Sie die Select-Menü-Werte in Zahlen und ziehen Sie eine ab,
  // um sie mit den ausgewählten Ankern zu vergleichen, die Indexpositionen in der NodeList entsprechen
  const value1 = Number(select1.value) - 1;
  const value2 = Number(select2.value) - 1;

  if (value1 === value2) {
    // Wenn die gewählten Anker beide gleich sind, setzen Sie beide Ankernamen
    // auf denselben Anker
    anchors[value1].style.anchorName = "--myAnchor1, --myAnchor2";
  } else {
    // Wenn sie nicht gleich sind, setzen Sie die Ankernamen separat
    // auf jeden ausgewählten Anker
    anchors[value1].style.anchorName = "--myAnchor1";
    anchors[value2].style.anchorName = "--myAnchor2";
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
- HTML [`anchor`](/de/docs/Web/HTML/Global_attributes/anchor) Attribut
- [CSS-Ankerpositionierungs](/de/docs/Web/CSS/CSS_anchor_positioning) Modul
- [Leitfaden zur Verwendung von CSS-Ankerpositionierung](/de/docs/Web/CSS/CSS_anchor_positioning/Using)
