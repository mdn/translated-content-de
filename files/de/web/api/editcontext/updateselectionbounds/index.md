---
title: "EditContext: updateSelectionBounds()-Methode"
short-title: updateSelectionBounds()
slug: Web/API/EditContext/updateSelectionBounds
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

Die **`EditContext.updateSelectionBounds()`**-Methode der [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle wird verwendet, um das Betriebssystem über die Grenzen der Textauswahl innerhalb des bearbeitbaren Bereichs, der mit dem `EditContext`-Objekt verknüpft ist, zu informieren.

Rufen Sie diese Methode auf, um dem Betriebssystem die Grenzen der aktuellen Auswahl des Benutzers mitzuteilen. Sie sollten die Methode aufrufen, sobald sich die Auswahl des Benutzers im bearbeitbaren Bereich ändert. Die Auswahlgrenzen werden vom Betriebssystem verwendet, um bei der Positionierung des IME-Fensters oder anderer plattformabhängiger, mit der Bearbeitung zusammenhängender Benutzeroberflächenoberflächen zu helfen.

## Syntax

```js-nolint
updateSelectionBounds(selectionBounds)
```

### Parameter

- `selectionBounds`
  - : Ein [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekt, das die neuen Auswahlgrenzen darstellt.

### Ausnahmen

- Wenn kein Argument bereitgestellt wird, wird ein `TypeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- Wenn das bereitgestellte Argument kein [`DOMRect`](/de/docs/Web/API/DOMRect) ist, wird ein `TypeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`EditContext`](/de/docs/Web/API/EditContext)-Schnittstelle, zu der sie gehört.
