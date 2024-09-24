---
title: "Node: lastChild-Eigenschaft"
short-title: lastChild
slug: Web/API/Node/lastChild
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die schreibgeschützte **`lastChild`**-Eigenschaft des {{domxref("Node")}}-Interfaces gibt das letzte Kind des Knotens zurück oder `null`, wenn keine Kindknoten vorhanden sind.

> [!NOTE]
> Diese Eigenschaft gibt jeden Knoten zurück, der das letzte Kind dieses Knotens ist.
> Es könnte ein {{domxref("Text")}}- oder ein {{domxref("Comment")}}-Knoten sein.
> Wenn Sie das letzte {{domxref("Element")}}, das ein Kind eines anderen Elements ist, abrufen möchten,
> sollten Sie {{domxref("Element.lastElementChild")}} verwenden.

## Wert

Ein {{domxref("Node")}}, der das letzte Kind des Knotens ist, oder `null`, wenn keine Kindknoten vorhanden sind.

## Beispiel

```js
const tr = document.getElementById("row1");
const corner_td = tr.lastChild;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Node.firstChild")}}
- {{domxref("Element.lastElementChild")}}
