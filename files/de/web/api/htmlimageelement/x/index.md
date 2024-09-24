---
title: "HTMLImageElement: x-Eigenschaft"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte {{domxref("HTMLImageElement")}}-Eigenschaft
**`x`** gibt die x-Koordinate des linken Randes des
{{HTMLElement("img")}}-Elements relativ zum Ursprung des Wurzelelements an.

Die `x`- und {{domxref("HTMLImageElement.y", "y")}}-Eigenschaften sind nur für ein Bild gültig, wenn dessen {{cssxref("display")}}-Eigenschaft den berechneten Wert
`table-column` oder `table-column-group` hat. Mit anderen Worten: Es hat einen dieser Werte explizit gesetzt, oder es hat ihn von einem enthaltenen
Element geerbt oder befindet sich in einer Spalte, die entweder durch {{HTMLElement("col")}}
oder {{HTMLElement("colgroup")}} beschrieben wird.

## Wert

Ein ganzzahliger Wert, der die Entfernung in Pixeln vom linken Rand des nächstgelegenen Wurzelelements des Elements bis zum linken Rand des Rahmenkastens des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Wurzelelement ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Wenn sich das Bild in einem {{HTMLElement("iframe")}} befindet, ist dessen `x` relativ zu diesem Rahmen.

Im untenstehenden Diagramm ist der linke Rand des blauen Polsterbereichs zu sehen. Der von `x` zurückgegebene Wert wäre also der Abstand von diesem Punkt zum
linken Rand des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen Boxen eines Elements zeigt](boxmodel-3.png)

> [!NOTE]
> Die `x`-Eigenschaft ist nur gültig, wenn der berechnete
> Wert der {{cssxref("display")}}-Eigenschaft des Bildes entweder
> `table-column` oder `table-column-group` ist; mit anderen Worten, wenn einer dieser Werte direkt auf das {{HTMLElement("img")}} gesetzt ist oder sie von einem
> enthaltenen Element geerbt wurden oder durch die Positionierung in einer Spalte, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Beispiel

Das folgende Beispiel demonstriert die Verwendung der `HTMLImageElement`-Eigenschaften
`x` und {{domxref("HTMLImageElement.y", "y")}}.

### HTML

In diesem Beispiel sehen wir eine Tabelle, die Informationen über Benutzer einer Website anzeigt, einschließlich ihrer Benutzer-ID, ihres vollständigen Namens und ihres Avatar-Bildes.

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

Der JavaScript-Code, der das Bild aus der Tabelle abruft und dessen `x`- und `y`-Werte ermittelt, ist unten.

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

Hierbei wird die {{HTMLElement("table")}}'s {{domxref("HTMLTableElement.rows", "rows")}}-Eigenschaft verwendet, um eine Liste der Reihen in der Tabelle abzurufen, aus der die Reihe 1 (was aufgrund des nullbasierten Indexes die zweite Reihe von oben bedeutet) nachgeschlagen wird. Dann wird das {{HTMLElement("tr")}} (Tabellenreihe)-Element anhand der {{domxref("HTMLTableRowElement.cells", "cells")}}-Eigenschaft betrachtet, um eine Liste der Zellen in dieser Reihe zu erhalten. Aus dieser Reihe wird die dritte Zelle genommen (wobei 2 als nullbasierter Versatz angegeben wird).

Von dort aus kann das `<img>`-Element selbst aus der Zelle abgerufen werden, indem man {{domxref("Element.querySelector", "querySelector()")}} auf das
{{domxref("HTMLTableCellElement")}} aufruft, das diese Zelle repräsentiert.

Schließlich können die Werte der `HTMLImageElement`-Eigenschaften `x` und `y` nachgeschlagen und angezeigt werden.

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
