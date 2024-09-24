---
title: "Document: childElementCount-Eigenschaft"
short-title: childElementCount
slug: Web/API/Document/childElementCount
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Document.childElementCount`** gibt die Anzahl der Kindelemente des Dokuments zurück.

Um die Anzahl der Kinder eines bestimmten Elements zu erhalten, siehe {{domxref("Element.childElementCount")}}.

## Wert

Eine Zahl.

## Beispiele

```js
document.children;
// HTMLCollection, enthält normalerweise ein <html>-Element, das einzige Kindelement des Dokuments

document.childElementCount;
// 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.childElementCount")}}
- {{domxref("DocumentFragment.childElementCount")}}
