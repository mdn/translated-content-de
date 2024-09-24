---
title: "Node: isEqualNode()-Methode"
short-title: isEqualNode()
slug: Web/API/Node/isEqualNode
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`isEqualNode()`**-Methode der {{domxref("Node")}}-Schnittstelle prüft, ob zwei Knoten gleich sind.
Zwei Knoten sind gleich, wenn sie denselben Typ, bestimmte definierende Merkmale (bei
Elementen wäre dies z.B. ihre ID, die Anzahl der Kinder usw.), ihre Attribute
übereinstimmen und so weiter. Der spezifische Satz von Datenpunkten, die übereinstimmen müssen, variiert je nach
Typ der Knoten.

## Syntax

```js-nolint
isEqualNode(otherNode)
```

### Parameter

- `otherNode`
  - : Der {{domxref("Node")}}, mit dem die Gleichheit verglichen wird.
    > [!NOTE]
    > Dieser Parameter ist nicht optional, kann jedoch auf `null` gesetzt werden.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn die beiden Knoten gleich sind, oder `false`, wenn nicht.
Wenn `otherNode` `null` ist, gibt `isEqualNode()` immer false zurück.

## Beispiel

In diesem Beispiel erstellen wir drei {{HTMLElement("div")}}-Blöcke. Der erste und dritte
haben denselben Inhalt und Attribute, während der zweite unterschiedlich ist. Dann führen wir etwas
JavaScript aus, um die Knoten mit `isEqualNode()` zu vergleichen und die Ergebnisse auszugeben.

### HTML

```html
<div>Dies ist das erste Element.</div>
<div>Dies ist das zweite Element.</div>
<div>Dies ist das erste Element.</div>

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

- {{domxref("Node.isSameNode()")}}
