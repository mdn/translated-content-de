---
title: "HTMLImageElement: x-Eigenschaft"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`x`** gibt die x-Koordinate des linken Randes des {{HTMLElement("img")}}-Elementes relativ zum Ursprung des Wurzelelements an.

Die `x`- und [`y`](/de/docs/Web/API/HTMLImageElement/y)-Eigenschaften sind nur für ein Bild gültig, wenn dessen {{cssxref("display")}}-Eigenschaft den berechneten Wert `table-column` oder `table-column-group` hat. Das bedeutet: Sie hat entweder einen dieser Werte explizit gesetzt, oder sie hat ihn von einem enthaltenen Element geerbt, oder indem sie sich in einer durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschriebenen Spalte befindet.

## Wert

Ein ganzzahliger Wert, der die Entfernung in Pixeln vom linken Rand des nächsten Wurzelelements bis zum linken Rand der Rahmenbox des {{HTMLElement("img")}}-Elements angibt. Das nächste Wurzelelement ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Befindet sich das Bild in einem {{HTMLElement("iframe")}}, ist sein `x` relativ zu diesem Frame.

In der untenstehenden Grafik ist der linke Rand des blauen Padding-Bereichs der linke Rand der Border-Box. Der von `x` zurückgegebene Wert wäre also der Abstand von diesem Punkt bis zum linken Rand des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen Boxen zeigt, die mit einem Element assoziiert sind](boxmodel-3.png)

> [!NOTE]
> Die `x`-Eigenschaft ist nur gültig, wenn der berechnete
> Wert der {{cssxref("display")}}-Eigenschaft des Bildes entweder
> `table-column` oder `table-column-group` ist; das heißt, einer dieser Werte
> ist direkt auf dem {{HTMLElement("img")}} gesetzt oder sie werden von einem
> enthaltenen Element geerbt oder dadurch, dass sie sich in einer durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschriebenen Spalte befinden.

## Beispiel

Das folgende Beispiel zeigt die Verwendung der `HTMLImageElement`-Eigenschaften `x` und [`y`](/de/docs/Web/API/HTMLImageElement/y).

### HTML

In diesem Beispiel sehen wir eine Tabelle, die Informationen über Benutzer einer Website zeigt, einschließlich ihrer Benutzer-ID, ihres vollständigen Namens und ihres Avatar-Bildes.

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

Der JavaScript-Code, der das Bild aus der Tabelle abruft und seine `x`- und `y`-Werte ermittelt, ist unten zu sehen.

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

Dies verwendet die [`rows`](/de/docs/Web/API/HTMLTableElement/rows)-Eigenschaft des {{HTMLElement("table")}}s, um eine Liste der Reihen in der Tabelle zu erhalten, aus der Zeile 1 gesucht wird (dies bedeutet, da es sich um einen nullbasierten Index handelt, die zweite Zeile von oben). Dann wird auf diese {{HTMLElement("tr")}} (Tabellenzeile) die [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Eigenschaft angewendet, um eine Liste der Zellen in dieser Zeile zu erhalten. Die dritte Zelle wird dann aus dieser Zeile entnommen (erneut wird als nullbasierter Index 2 angegeben).

Von dort aus können wir das `<img>`-Element selbst aus der Zelle abrufen, indem wir [`querySelector()`](/de/docs/Web/API/Element/querySelector) auf das [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement) aufrufen, das diese Zelle repräsentiert.

Schließlich können wir die Werte der `HTMLImageElement`-Eigenschaften `x` und `y` ermitteln und anzeigen.

### CSS

Das CSS, das das Aussehen der Tabelle definiert:

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
