---
title: "Document: lastElementChild-Eigenschaft"
short-title: lastElementChild
slug: Web/API/Document/lastElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Document.lastElementChild`** gibt das letzte Kind-`Element` des Dokuments zurück oder `null`, wenn es keine Kindelemente gibt.

Für HTML-Dokumente ist dies üblicherweise das einzige Kind, das Wurzelelement `<html>`.

Siehe [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) für das letzte Kindelement spezifischer Elemente innerhalb eines Dokuments.

## Wert

Das Wurzelelement `<html>`.

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
