---
title: "HTMLImageElement: x-Eigenschaft"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: 11d748f9e217b6a9fd16291d7815a6f803f0136d
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`x`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die x-Koordinate des linken Randes des {{HTMLElement("img")}}-Elements relativ zum Ursprung des Root-Elements an.

Die `x`- und [`y`](/de/docs/Web/API/HTMLImageElement/y)-Eigenschaften sind nur für ein Bild gültig, wenn seine {{cssxref("display")}}-Eigenschaft den berechneten Wert `table-column` oder `table-column-group` hat. Mit anderen Worten: Sie hat entweder einen dieser Werte explizit gesetzt oder sie hat den Wert von einem umgebenden Element geerbt, oder weil es sich innerhalb einer Spalte befindet, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Wert

Ein ganzzahliger Wert, der die Entfernung in Pixel von der linken Kante des nächstgelegenen Root-Elements und dem linken Rand der Rahmenbox des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Root-Element ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Wenn sich das Bild in einem {{HTMLElement("iframe")}} befindet, ist sein `x` relativ zu diesem Frame.

Im unten stehenden Diagramm ist der linke Rand der blaue Bereich des Polsters. Der von `x` zurückgegebene Wert wäre also die Entfernung von diesem Punkt bis zur linken Kante des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen Kästen, die mit einem Element verbunden sind, zeigt](boxmodel-3.png)

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
  <thead>
    <tr>
      <th>UserID</th>
      <th>Name</th>
      <th>Avatar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>12345678</td>
      <td>Johnny Rocket</td>
      <td>
        <img src="/shared-assets/images/examples/grapefruit-slice.jpg" />
      </td>
    </tr>
  </tbody>
</table>
<pre id="log"></pre>
```

### JavaScript

Der unten stehende JavaScript-Code holt das Bild aus der Tabelle und ruft dessen `x`- und `y`-Werte ab.

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

Dies verwendet die [`rows`](/de/docs/Web/API/HTMLTableElement/rows)-Eigenschaft des {{HTMLElement("table")}}, um eine Liste der Zeilen in der Tabelle zu erhalten, aus der Zeile 1 abgerufen wird (was bei einem nullbasierten Index die zweite Zeile von oben bedeutet). Dann betrachtet es die [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Eigenschaft dieses {{HTMLElement("tr")}}- (Tabellenzeilen-)Elements, um eine Liste der Zellen in dieser Zeile zu erhalten. Die dritte Zelle wird aus dieser Zeile genommen (wobei wieder 2 als nullbasierten Versatz angegeben wird).

Von dort aus können wir das `<img>`-Element selbst durch Aufrufen von [`querySelector()`](/de/docs/Web/API/Element/querySelector) auf dem [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement), das diese Zelle repräsentiert, abrufen.

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

## Siehe auch

- {{cssxref("display")}}
- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- [`HTMLImageElement.y`](/de/docs/Web/API/HTMLImageElement/y)
