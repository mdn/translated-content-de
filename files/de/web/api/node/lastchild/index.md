---
title: "Node: lastChild Eigenschaft"
short-title: lastChild
slug: Web/API/Node/lastChild
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("DOM")}}

Die schreibgeschützte **`lastChild`**-Eigenschaft der [`Node`](/de/docs/Web/API/Node)-Schnittstelle gibt das letzte Kind des Knotens zurück oder `null`, wenn keine Kindknoten vorhanden sind.

> [!NOTE]
> Diese Eigenschaft gibt jeden Knoten zurück, der das letzte Kind von diesem ist.
> Es kann ein [`Text`](/de/docs/Web/API/Text)- oder ein [`Comment`](/de/docs/Web/API/Comment)-Knoten sein.
> Wenn Sie das letzte [`Element`](/de/docs/Web/API/Element) abrufen möchten, das ein Kind eines anderen Elements ist, ziehen Sie die Verwendung von [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) in Betracht.

## Wert

Ein [`Node`](/de/docs/Web/API/Node)-Objekt, das das letzte Kind des Knotens ist, oder `null`, wenn keine Kindknoten vorhanden sind.

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
