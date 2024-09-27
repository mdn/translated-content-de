---
title: "Document: exitPointerLock() Methode"
short-title: exitPointerLock()
slug: Web/API/Document/exitPointerLock
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Pointer Lock API")}}

Die **`exitPointerLock()`** Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle gibt asynchron eine zuvor über [`Element.requestPointerLock`](/de/docs/Web/API/Element/requestPointerLock) angeforderte Zeigersperre frei.

> [!NOTE]
> Während die **`exitPointerLock()`** Methode am Dokument aufgerufen wird, wird die **`requestPointerLock()`** Methode an einem Element aufgerufen.

Um den Erfolg oder das Scheitern der Anforderung zu verfolgen, ist es notwendig, auf die Ereignisse [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event) und [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event) zu hören.

## Syntax

```js-nolint
exitPointerLock()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement)
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
