---
title: "HTMLImageElement: x Eigenschaft"
short-title: x
slug: Web/API/HTMLImageElement/x
l10n:
  sourceCommit: e68530dbce2b661c8860e9c6a1c70b1caca5a199
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Eigenschaft **`x`** gibt die x-Koordinate des linken Randes des {{HTMLElement("img")}}-Elements relativ zum Ursprung des Wurzelelements an.

Die `x`- und [`y`](/de/docs/Web/API/HTMLImageElement/y)-Eigenschaften sind nur dann für ein Bild gültig, wenn dessen {{cssxref("display")}}-Eigenschaft den berechneten Wert `table-column` oder `table-column-group` hat. Mit anderen Worten: Es hat entweder einen dieser Werte explizit gesetzt, oder es hat ihn von einem umgebenden Element geerbt, oder indem es sich in einer Spalte befindet, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Wert

Ein Ganzzahlwert, der die Entfernung in Pixeln vom linken Rand des nächstgelegenen Wurzelelements und dem linken Rand der Rahmenbox des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Wurzelelement ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Wenn das Bild in einem {{HTMLElement("iframe")}} ist, ist dessen `x` relativ zu diesem Rahmen.

Im Diagramm unten ist der linke Rand der linke Rand des blauen Innenabstandsbereichs. Der Wert, der durch `x` zurückgegeben wird, wäre also die Entfernung von diesem Punkt zum linken Rand des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen Boxen, die mit einem Element verbunden sind, zeigt](boxmodel-3.png)

> [!NOTE]
> Die `x`-Eigenschaft ist nur gültig, wenn der berechnete Wert der {{cssxref("display")}}-Eigenschaft des Bildes entweder `table-column` oder `table-column-group` ist; mit anderen Worten, einer dieser Werte ist direkt auf dem {{HTMLElement("img")}} gesetzt, oder sie werden von einem umgebenden Element geerbt, oder indem es sich in einer Spalte befindet, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Beispiel

Das folgende Beispiel demonstriert die Verwendung der `HTMLImageElement`-Eigenschaften `x` und [`y`](/de/docs/Web/API/HTMLImageElement/y).

### HTML

In diesem Beispiel sehen wir eine Tabelle, die Informationen über Benutzer einer Website anzeigt, einschließlich ihrer Benutzer-ID, ihres vollständigen Namens und ihres Avatarbildes.

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

Dieser nutzt die [`rows`](/de/docs/Web/API/HTMLTableElement/rows)-Eigenschaft des {{HTMLElement("table")}}, um eine Liste der Zeilen in der Tabelle zu erhalten, aus der Zeile 1 (was bei einem nullbasierten Index die zweite Zeile von oben bedeutet) nachgeschlagen wird. Dann wird auf das {{HTMLElement("tr")}}-Element (Tabellenzeile) zugegriffen und über dessen [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Eigenschaft eine Liste der Zellen in dieser Zeile abgerufen. Die dritte Zelle wird aus dieser Zeile entnommen (wiederum unter Angabe von 2 als nullbasiertem Offset).

Von dort aus kann das `<img>`-Element selbst aus der Zelle durch Aufruf von [`querySelector()`](/de/docs/Web/API/Element/querySelector) auf dem [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement), das diese Zelle darstellt, abgerufen werden.

Schließlich können wir die Werte der `x`- und `y`-Eigenschaften des `HTMLImageElement` ermitteln und anzeigen.

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
