---
title: "Node: lastChild-Eigenschaft"
short-title: lastChild
slug: Web/API/Node/lastChild
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die schreibgeschützte **`lastChild`**-Eigenschaft des [`Node`](/de/docs/Web/API/Node)-Interfaces gibt das letzte Kind des Knotens zurück oder `null`, wenn es keine Kindknoten gibt.

> [!NOTE]
> Diese Eigenschaft gibt jeden Knotentyp zurück, der das letzte Kind des aktuellen Knotens ist.
> Es kann sich dabei um einen [`Text`](/de/docs/Web/API/Text)- oder einen [`Comment`](/de/docs/Web/API/Comment)-Knoten handeln.
> Wenn Sie das letzte [`Element`](/de/docs/Web/API/Element), das ein Kind eines anderen Elements ist, erhalten möchten,
> ziehen Sie in Betracht, [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) zu verwenden.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das letzte Kind des Knotens ist, oder `null`, wenn es keine Kindknoten gibt.

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

- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild)
