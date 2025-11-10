---
title: "Knoten: lastChild-Eigenschaft"
short-title: lastChild
slug: Web/API/Node/lastChild
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}

Die schreibgeschützte **`lastChild`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle
gibt das letzte Kind des Knotens zurück, oder `null`, wenn keine Knoten vorhanden sind.

> [!NOTE]
> Diese Eigenschaft gibt jeden Knotentyp zurück, der das letzte Kind dieses Knotens ist.
> Es kann sich um einen [`Text`](/de/docs/Web/API/Text) oder einen [`Comment`](/de/docs/Web/API/Comment)-Knoten handeln.
> Wenn Sie das letzte [`Element`](/de/docs/Web/API/Element) erhalten möchten, das ein Kind eines anderen Elements ist,
> sollten Sie [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) verwenden.

## Wert

Ein [`Node`](/de/docs/Web/API/Node), der das letzte Kind des Knotens darstellt, oder `null`, wenn keine Kindknoten vorhanden sind.

## Beispiel

```js
const tr = document.getElementById("row1");
const cornerTd = tr.lastChild;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Node.firstChild`](/de/docs/Web/API/Node/firstChild)
- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild)
