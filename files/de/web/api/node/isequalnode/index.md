---
title: "Node: isEqualNode()-Methode"
short-title: isEqualNode()
slug: Web/API/Node/isEqualNode
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`isEqualNode()`**-Methode des [`Node`](/de/docs/Web/API/Node)-Interfaces prüft, ob zwei Knoten gleich sind. Zwei Knoten sind gleich, wenn sie denselben Typ, definierende Merkmale (für Elemente wären dies ihre ID, die Anzahl der Kinder usw.), gleiche Attribute und so weiter haben. Die spezifische Menge an Datenpunkten, die übereinstimmen müssen, variiert je nach Typ der Knoten.

## Syntax

```js-nolint
isEqualNode(otherNode)
```

### Parameter

- `otherNode`
  - : Der [`Node`](/de/docs/Web/API/Node), mit dem die Gleichheit verglichen wird.
    > [!NOTE]
    > Dieser Parameter ist nicht optional, kann jedoch auf `null` gesetzt werden.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn die beiden Knoten gleich sind, oder `false`, wenn nicht. Wenn `otherNode` `null` ist, gibt `isEqualNode()` immer false zurück.

## Beispiel

In diesem Beispiel erstellen wir drei {{HTMLElement("div")}}-Blöcke. Der erste und der dritte haben denselben Inhalt und dieselben Attribute, während der zweite unterschiedlich ist. Dann führen wir etwas JavaScript aus, um die Knoten mithilfe von `isEqualNode()` zu vergleichen und die Ergebnisse auszugeben.

### HTML

```html
<div>This is the first element.</div>
<div>This is the second element.</div>
<div>This is the first element.</div>

<p id="output"></p>
```

```css hidden
#output {
  width: 440px;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  display: block;
}
```

### JavaScript

```js
const output = document.getElementById("output");
const divList = document.getElementsByTagName("div");

output.innerText += `div 0 equals div 0: ${divList[0].isEqualNode(
  divList[0],
)}\n`;
output.innerText += `div 0 equals div 1: ${divList[0].isEqualNode(
  divList[1],
)}\n`;
output.innerText += `div 0 equals div 2: ${divList[0].isEqualNode(
  divList[2],
)}\n`;
```

### Ergebnisse

{{ EmbedLiveSample('Example', "100%", "210") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.isSameNode()`](/de/docs/Web/API/Node/isSameNode)
