---
title: "HTMLImageElement: x-Eigenschaft"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`x`**-Eigenschaft der [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Schnittstelle gibt die x-Koordinate des linken Randes des {{HTMLElement("img")}}-Elements relativ zum Ursprung des Wurzelelements an.

Die `x`- und [`y`](/de/docs/Web/API/HTMLImageElement/y)-Eigenschaften sind nur für ein Bild gültig, wenn seine {{cssxref("display")}}-Eigenschaft den berechneten Wert `table-column` oder `table-column-group` hat. Mit anderen Worten: Es hat entweder explizit einen dieser Werte gesetzt, es hat ihn von einem enthaltenen Element geerbt, oder es befindet sich innerhalb einer Spalte, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Wert

Ein ganzzahliger Wert, der den Abstand in Pixeln vom linken Rand des nächstgelegenen Wurzelelements und dem linken Rand der Randbox des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Wurzelelement ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Wenn sich das Bild in einem {{HTMLElement("iframe")}} befindet, ist sein `x` relativ zu diesem Frame.

Im Diagramm unten ist der linke Rand die linke Kante des blauen Polsterbereichs. Der von `x` zurückgegebene Wert wäre also der Abstand von diesem Punkt zur linken Kante des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen mit einem Element verbundenen Kästen zeigt](boxmodel-3.png)

## Beispiel

Das folgende Beispiel demonstriert die Verwendung der `HTMLImageElement`-Eigenschaften `x` und [`y`](/de/docs/Web/API/HTMLImageElement/y).

### HTML

In diesem Beispiel sehen wir eine Tabelle, die Informationen über Benutzer einer Website zeigt, einschließlich ihrer Benutzer-ID, ihres vollständigen Namens und ihres Avatar-Bildes.

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
      <img src="/shared-assets/images/examples/grapefruit-slice.jpg" />
    </td>
  </tr>
</table>
<pre id="log"></pre>
```

### JavaScript

Der JavaScript-Code, der das Bild aus der Tabelle abruft und seine `x`- und `y`-Werte nachschlägt, ist unten aufgeführt.

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

Dies verwendet die [`rows`](/de/docs/Web/API/HTMLTableElement/rows)-Eigenschaft des {{HTMLElement("table")}}, um eine Liste der Zeilen in der Tabelle zu erhalten, aus der Zeile 1 (was, da es sich um einen Null-basierten Index handelt, die zweite Zeile von oben bedeutet) nachgeschlagen wird. Dann wird auf die [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Eigenschaft des {{HTMLElement("tr")}} (Tabellenzeile)-Elements zugegriffen, um eine Liste der Zellen in dieser Zeile zu erhalten. Die dritte Zelle wird aus dieser Zeile genommen (wobei erneut 2 als Null-basierter Offset angegeben wird).

Von dort aus können wir das `<img>`-Element selbst aus der Zelle abrufen, indem wir [`querySelector()`](/de/docs/Web/API/Element/querySelector) auf das die Zelle darstellende [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement) aufrufen.

Schließlich können die Werte der `x`- und `y`-Eigenschaften des `HTMLImageElement` nachgeschlagen und angezeigt werden.

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

Die resultierende Tabelle sieht so aus:

{{EmbedLiveSample("Example", 600, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("display")}}
- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y)
