---
title: "EditContext: updateSelectionBounds() Methode"
short-title: updateSelectionBounds()
slug: Web/API/EditContext/updateSelectionBounds
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext.updateSelectionBounds()`** Methode der [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle wird verwendet, um dem Betriebssystem die Ränder der Textauswahl innerhalb des bearbeitbaren Bereichs mitzuteilen, der mit dem `EditContext` Objekt verknüpft ist.

Rufen Sie diese Methode auf, um dem Betriebssystem die Grenzen der aktuellen Auswahl des Benutzers mitzuteilen. Sie sollten die Methode immer dann aufrufen, wenn sich die Auswahl des Benutzers im bearbeitbaren Bereich ändert. Die Auswahlgrenzen werden vom Betriebssystem verwendet, um das IME-Fenster oder andere plattformspezifische bearbeitungsbezogene UI-Oberflächen zu positionieren.

## Syntax

```js-nolint
updateSelectionBounds(selectionBounds)
```

### Parameter

- `selectionBounds`
  - : Ein [`DOMRect`](/de/docs/Web/API/DOMRect) Objekt, das die neuen Auswahlgrenzen darstellt.

### Rückgabewert

Keiner (`undefined`).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Methode ohne Argumente aufgerufen wird oder wenn das bereitgestellte Argument kein [`DOMRect`](/de/docs/Web/API/DOMRect) Objekt ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`EditContext`](/de/docs/Web/API/EditContext) Schnittstelle, zu der sie gehört.
