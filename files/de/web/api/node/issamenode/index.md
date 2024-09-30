---
title: "Node: isSameNode()-Methode"
short-title: isSameNode()
slug: Web/API/Node/isSameNode
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die **`isSameNode()`** Methode der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
ist ein veraltetes Alias für den [strikten Gleichheitsoperator `===`](/de/docs/Web/JavaScript/Reference/Operators/Strict_equality).
Das heißt, sie prüft, ob zwei Knoten dieselben sind
(mit anderen Worten, ob sie auf dasselbe Objekt verweisen).

> [!NOTE]
> Es ist nicht notwendig, `isSameNode()` zu verwenden; stattdessen verwenden Sie den strikten Gleichheitsoperator `===`.

## Syntax

```js-nolint
isSameNode(otherNode)
```

### Parameter

- `otherNode`
  - : Der zu prüfende [`Node`](/de/docs/Web/API/Node).
    > [!NOTE]
    > Dieser Parameter ist nicht optional, kann jedoch auf `null` gesetzt werden.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn beide Knoten strikt gleich sind, `false`, wenn nicht.

## Beispiel

In diesem Beispiel erstellen wir drei {{HTMLElement("div")}}-Blöcke. Der erste und dritte
haben denselben Inhalt und dieselben Attribute, während der zweite unterschiedlich ist. Dann führen wir etwas
JavaScript aus, um die Knoten mit `isSameNode()` zu vergleichen und die Ergebnisse auszugeben.

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

output.innerText += `div 0 same as div 0: ${divList[0].isSameNode(
  divList[0],
)}\n`;
output.innerText += `div 0 same as div 1: ${divList[0].isSameNode(
  divList[1],
)}\n`;
output.innerText += `div 0 same as div 2: ${divList[0].isSameNode(
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

- [`Node.isEqualNode()`](/de/docs/Web/API/Node/isEqualNode)
