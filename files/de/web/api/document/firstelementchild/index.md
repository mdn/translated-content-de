---
title: "Dokument: firstElementChild-Eigenschaft"
short-title: firstElementChild
slug: Web/API/Document/firstElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Document.firstElementChild`** gibt das erste Kind-{{domxref("Element")}} des Dokuments zurück oder `null`, wenn keine Kindelemente vorhanden sind.

Bei HTML-Dokumenten ist dies normalerweise das einzige Kind, das Wurzel-<html>-Element.

Siehe {{domxref("Element.firstElementChild")}} für das erste Kindelement bestimmter Elemente innerhalb eines Dokuments.

## Wert

Ein {{domxref("Element")}}-Objekt oder `null`.

## Beispiele

```js
document.firstElementChild;
// gibt das Wurzel-<html>-Element zurück, das einzige Kind des Dokuments
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Element.firstElementChild")}}
