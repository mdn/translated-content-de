---
title: "HTMLImageElement: x-Eigenschaft"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Eigenschaft
**`x`** gibt die x-Koordinate der linken Begrenzungskante des
{{HTMLElement("img")}}-Elements relativ zum Ursprung des Wurzelelements an.

Die `x`- und [`y`](/de/docs/Web/API/HTMLImageElement/y)-Eigenschaften sind nur dann für ein Bild gültig, wenn seine {{cssxref("display")}}-Eigenschaft den berechneten Wert
`table-column` oder `table-column-group` hat. Mit anderen Worten: Es hat entweder explizit einen dieser Werte gesetzt, oder es hat ihn von einem enthaltenen Element geerbt oder indem es sich innerhalb einer Spalte befindet, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Wert

Ein ganzzahliger Wert, der den Abstand in Pixeln von der linken Kante des nächstgelegenen Wurzelelements zur linken Kante des Rahmenbereichs des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Wurzelelement ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Befindet sich das Bild in einem {{HTMLElement("iframe")}}, ist sein `x` relativ zu diesem Rahmen.

Im unten stehenden Diagramm ist die linke Begrenzungskante die linke Kante des blauen Polsterbereichs. Der von `x` zurückgegebene Wert wäre also der Abstand von diesem Punkt zur linken Kante des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen mit einem Element verbundenen Kästchen zeigt](boxmodel-3.png)

> [!NOTE]
> Die `x`-Eigenschaft ist nur gültig, wenn der berechnete Wert der {{cssxref("display")}}-Eigenschaft des Bildes entweder `table-column` oder `table-column-group` ist; mit anderen Worten, einer dieser Werte wird direkt auf das {{HTMLElement("img")}} gesetzt oder sie werden von einem enthaltenen Element geerbt oder indem sie sich innerhalb einer Spalte befinden, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Beispiel

Das folgende Beispiel zeigt die Verwendung der `HTMLImageElement`-Eigenschaften `x` und [`y`](/de/docs/Web/API/HTMLImageElement/y).

### HTML

In diesem Beispiel sehen wir eine Tabelle mit Informationen über Benutzer einer Website, einschließlich ihrer Benutzer-ID, ihrem vollständigen Namen und ihrem Avatar-Bild.

```html
<table id="userinfo">
  <colgroup>
    <col span="2" class="group1" />
    <col />
  </colgroup>
  <tr>
    <th>UserID</th>
    <th>Name</th>
    <th>Avatar</th>
  </tr>
  <tr>
    <td>12345678</td>
    <td>Johnny Rocket</td>
    <td>
      <img
        src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg" />
    </td>
  </tr>
</table>
<pre id="log"></pre>
```

### JavaScript

Der JavaScript-Code, der das Bild aus der Tabelle abruft und seine `x`- und `y`-Werte nachschlägt, ist unten dargestellt.

```js
const logBox = document.querySelector("pre");
const tbl = document.getElementById("userinfo");

const log = (msg) => {
  logBox.innerText += `${msg}\n`;
};

const cell = tbl.rows[1].cells[2];
const image = cell.querySelector("img");

log(`Image's global X: ${image.x}`);
log(`Image's global Y: ${image.y}`);
```

Dieser benutzt die [`rows`](/de/docs/Web/API/HTMLTableElement/rows)-Eigenschaft des {{HTMLElement("table")}}, um eine Liste der Zeilen in der Tabelle zu erhalten, aus der die Zeile 1 nachgeschlagen wird (was, da es sich um einen nullbasierten Index handelt, die zweite Zeile von oben ist). Dann wird die [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Eigenschaft des {{HTMLElement("tr")}} (Tabellenzeilen-) Elements verwendet, um eine Liste der Zellen in dieser Zeile zu erhalten. Die dritte Zelle wird aus dieser Zeile genommen (wieder unter Angabe von 2 als nullbasierter Offset).

Von dort aus können wir das `<img>`-Element selbst aus der Zelle über einen Aufruf von [`querySelector()`](/de/docs/Web/API/Element/querySelector) auf dem [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement), das diese Zelle darstellt, erhalten.

Letztendlich können wir die Werte der `x`- und `y`-Eigenschaften des `HTMLImageElement` nachschlagen und anzeigen.

### CSS

Das CSS, das das Erscheinungsbild der Tabelle definiert:

```css
.group1 {
  background-color: #d7d9f2;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(100 100 100);
  font-family: sans-serif;
}

td,
th {
  border: 1px solid rgb(100 100 100);
  padding: 10px 14px;
}

td > img {
  max-width: 4em;
}
```

### Ergebnis

Die resultierende Tabelle sieht folgendermaßen aus:

{{EmbedLiveSample("Example", 600, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
