---
title: "EditContext: updateSelectionBounds()-Methode"
short-title: updateSelectionBounds()
slug: Web/API/EditContext/updateSelectionBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext.updateSelectionBounds()`**-Methode der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird verwendet, um das Betriebssystem über die Grenzen der Textauswahl innerhalb des bearbeitbaren Bereichs zu informieren, der mit dem `EditContext`-Objekt verbunden ist.

Rufen Sie diese Methode auf, um dem Betriebssystem die Grenzen der aktuellen Auswahl des Nutzers mitzuteilen. Sie sollten die Methode aufrufen, wann immer sich die Auswahl des Nutzers im bearbeitbaren Bereich ändert. Die Auswahlgrenzen werden vom Betriebssystem verwendet, um das IME-Fenster oder andere plattformspezifische Benutzeroberflächen für das Bearbeiten zu positionieren.

## Syntax

```js-nolint
updateSelectionBounds(selectionBounds)
```

### Parameter

- `selectionBounds`
  - : Ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt, das die neuen Auswahlgrenzen darstellt.

### Ausnahmen

- Wenn kein Argument angegeben wird, wird eine `TypeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- Wenn das angegebene Argument kein [`DOMRect`](/de/docs/Web/API/DOMRect) ist, wird eine `TypeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle, zu der es gehört.
