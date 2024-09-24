---
title: "Dokument: lastElementChild-Eigenschaft"
short-title: lastElementChild
slug: Web/API/Document/lastElementChild
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Document.lastElementChild`** gibt das letzte Kind-{{domxref("Element")}} des Dokuments zurück oder `null`, wenn keine Kindelemente vorhanden sind.

Bei HTML-Dokumenten handelt es sich dabei in der Regel um das einzige Kindelement, das Wurzel-`<html>`-Element.

Siehe {{domxref("Element.lastElementChild")}} für das letzte Kindelement bestimmter Elemente innerhalb eines Dokuments.

## Wert

Das Wurzel-`<html>`-Element.

## Beispiele

```js
document.lastElementChild;
// gibt das Wurzel-<html>-Element zurück, das einzige Kindelement des Dokuments
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("Element.lastElementChild")}}
