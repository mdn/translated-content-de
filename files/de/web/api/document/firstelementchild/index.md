---
title: "Document: firstElementChild Eigenschaft"
short-title: firstElementChild
slug: Web/API/Document/firstElementChild
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Document.firstElementChild`**
gibt das erste Kind-[`Element`](/de/docs/Web/API/Element) des Dokuments zurück oder `null`, wenn keine Kindelemente vorhanden sind.

Bei HTML-Dokumenten handelt es sich in der Regel um das einzige Kind, das Wurzel-`<html>`-Element.

Siehe [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) für das erste Kindelement bestimmter Elemente innerhalb eines Dokuments.

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
