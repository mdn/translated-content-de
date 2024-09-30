---
title: "HTMLImageElement: x Eigenschaft"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Eigenschaft **`x`** gibt die x-Koordinate des linken Randes des {{HTMLElement("img")}}-Elements relativ zum Ursprung des Wurzelelements an.

Die Eigenschaften `x` und [`y`](/de/docs/Web/API/HTMLImageElement/y) sind nur für ein Bild gültig, wenn seine {{cssxref("display")}}-Eigenschaft den berechneten Wert `table-column` oder `table-column-group` hat. Mit anderen Worten: Es hat entweder explizit einen dieser Werte festgelegt, oder es hat ihn von einem umschließenden Element geerbt oder befindet sich in einer Spalte, die durch entweder {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Wert

Ein ganzzahliger Wert, der den Abstand in Pixeln vom linken Rand des nächstgelegenen Wurzelelements zum linken Rand des Rahmenkastens des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Wurzelelement ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Befindet sich das Bild in einem {{HTMLElement("iframe")}}, ist sein `x` relativ zu diesem Frame.

In der unten stehenden Abbildung ist der linke Rand der linke Rand des blauen Polsterbereichs. Der von `x` zurückgegebene Wert ist also der Abstand von diesem Punkt bis zum linken Rand des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen Kästen, die mit einem Element verbunden sind, zeigt](boxmodel-3.png)

> [!NOTE]
> Die `x`-Eigenschaft ist nur gültig, wenn der berechnete Wert der {{cssxref("display")}}-Eigenschaft des Bildes entweder `table-column` oder `table-column-group` ist; mit anderen Worten, entweder sind diese direkt auf dem {{HTMLElement("img")}} gesetzt oder sie werden von einem umschließenden Element geerbt oder indem sie sich in einer Spalte befinden, die durch entweder {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Beispiel

Das folgende Beispiel demonstriert die Verwendung der `HTMLImageElement`-Eigenschaften `x` und [`y`](/de/docs/Web/API/HTMLImageElement/y).

### HTML

In diesem Beispiel sehen wir eine Tabelle, die Informationen über Benutzer einer Website anzeigt, einschließlich ihrer Benutzer-ID, ihres vollständigen Namens und ihres Avatarbildes.

```html
<table id="userinfo">
  <colgroup>
    <col span="2" class="group1">
    <col>
  </colgroup>
  <tr>
    <th>UserID</th>
    <th>Name</th>
    <th>Avatar</th>
  </tr>
  <tr>
    <td>12345678</td>
    <td>Johnny Rocket</td>
    <td><img src="https://interactive-examples.mdn.mozilla.net/media/examples/grapefruit-slice-332-332.jpg"></td>
  </th>
</table>
<pre id="log">
</pre>
```

### JavaScript

Der JavaScript-Code, der das Bild aus der Tabelle abruft und seine `x`- und `y`-Werte ermittelt, ist unten angegeben.

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

Dies verwendet die [`rows`](/de/docs/Web/API/HTMLTableElement/rows)-Eigenschaft des {{HTMLElement("table")}}, um eine Liste der Zeilen in der Tabelle zu erhalten, von der aus Zeile 1 abgerufen wird (was aufgrund des nullbasierten Indexes die zweite Zeile von oben bedeutet). Dann wird die [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Eigenschaft des {{HTMLElement("tr")}} (Tabellenzeile) verwendet, um eine Liste der Zellen in dieser Zeile zu erhalten. Die dritte Zelle wird aus dieser Zeile entnommen (wieder unter Angabe von 2 als nullbasiertem Offset).

Von dort aus können wir das `<img>`-Element selbst aus der Zelle abrufen, indem wir [`querySelector()`](/de/docs/Web/API/Element/querySelector) für das [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement) aufrufen, das diese Zelle darstellt.

Schließlich können wir die Werte der `HTMLImageElement`-Eigenschaften `x` und `y` abrufen und anzeigen.

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
