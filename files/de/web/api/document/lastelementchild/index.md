---
title: "Document: lastElementChild-Eigenschaft"
short-title: lastElementChild
slug: Web/API/Document/lastElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Document.lastElementChild`** gibt das letzte Kindelement des Dokuments zurück, ein [`Element`](/de/docs/Web/API/Element), oder `null`, wenn keine Kindelemente vorhanden sind.

Bei HTML-Dokumenten ist dies in der Regel das einzige Kindelement, das Wurzel-`<html>`-Element.

Siehe [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) für das letzte Kindelement bestimmter Elemente innerhalb eines Dokuments.

## Wert

Das Wurzel-`<html>`-Element.

## Beispiele

```js
document.lastElementChild;
// returns the root <html> element, the only child of the document
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild)
