---
title: "Document: firstElementChild Eigenschaft"
short-title: firstElementChild
slug: Web/API/Document/firstElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die **`Document.firstElementChild`**-Eigenschaft ist schreibgeschützt und gibt das erste Kindelement des Dokuments als [`Element`](/de/docs/Web/API/Element) zurück, oder `null`, wenn keine Kindelemente vorhanden sind.

Für HTML-Dokumente ist dies normalerweise das einzige Kindelement, das Wurzelelement `<html>`.

Siehe [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) für das erste Kindelement spezifischer Elemente innerhalb eines Dokuments.

## Wert

Ein [`Element`](/de/docs/Web/API/Element)-Objekt oder `null`.

## Beispiele

```js
document.firstElementChild;
// returns the root <html> element, the only child of the document
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild)
