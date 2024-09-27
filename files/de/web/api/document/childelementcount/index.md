---
title: "Document: childElementCount-Eigenschaft"
short-title: childElementCount
slug: Web/API/Document/childElementCount
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die **`Document.childElementCount`**-Eigenschaft ist schreibgeschützt und gibt die Anzahl der Kindelemente des Dokuments zurück.

Um die Anzahl der Kinder eines spezifischen Elements zu erhalten, siehe [`Element.childElementCount`](/de/docs/Web/API/Element/childElementCount).

## Wert

Eine Zahl.

## Beispiele

```js
document.children;
// HTMLCollection, usually containing an <html> element, the document's only child

document.childElementCount;
// 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.childElementCount`](/de/docs/Web/API/Element/childElementCount)
- [`DocumentFragment.childElementCount`](/de/docs/Web/API/DocumentFragment/childElementCount)
