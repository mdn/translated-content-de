---
title: "Node: isSameNode() Methode"
short-title: isSameNode()
slug: Web/API/Node/isSameNode
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`isSameNode()`** Methode der {{domxref("Node")}} Schnittstelle ist ein veraltetes Alias für den [strict Gleichheitsoperator `===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality). Das heißt, sie prüft, ob zwei Knoten identisch sind (mit anderen Worten, ob sie auf dasselbe Objekt verweisen).

> [!NOTE]
> Es ist nicht notwendig, `isSameNode()` zu verwenden; verwenden Sie stattdessen den `===` strict Gleichheitsoperator.

## Syntax

```js-nolint
isSameNode(otherNode)
```

### Parameter

- `otherNode`
  - : Der {{domxref("Node")}}, gegen den getestet werden soll.
    > [!NOTE]
    > Dieser Parameter ist nicht optional, kann aber auf `null` gesetzt werden.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn beide Knoten streng gleich sind, `false`, wenn nicht.

## Beispiel

In diesem Beispiel erstellen wir drei {{HTMLElement("div")}} Blöcke. Der erste und der dritte haben denselben Inhalt und dieselben Attribute, während der zweite unterschiedlich ist. Dann führen wir einige JavaScript-Befehle aus, um die Knoten mit `isSameNode()` zu vergleichen und die Ergebnisse auszugeben.

### HTML

```html
<div>Das ist das erste Element.</div>
<div>Das ist das zweite Element.</div>
<div>Das ist das erste Element.</div>

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

output.innerText += `div 0 gleiche wie div 0: ${divList[0].isSameNode(
  divList[0],
)}\n`;
output.innerText += `div 0 gleiche wie div 1: ${divList[0].isSameNode(
  divList[1],
)}\n`;
output.innerText += `div 0 gleiche wie div 2: ${divList[0].isSameNode(
  divList[2],
)}\n`;
```

### Ergebnisse

{{ EmbedLiveSample('Example', "100%", "205") }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.isEqualNode()")}}
