---
title: "Dokument: exitPointerLock() Methode"
short-title: exitPointerLock()
slug: Web/API/Document/exitPointerLock
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Pointer Lock API")}}

Die **`exitPointerLock()`** Methode der {{domxref("Document")}} Schnittstelle gibt asynchron eine zuvor durch {{domxref("Element.requestPointerLock")}} angeforderte Zeigersperre frei.

> [!NOTE]
> Während die **`exitPointerLock()`** Methode auf das Dokument aufgerufen wird, wird die **`requestPointerLock()`** Methode auf ein Element aufgerufen.

Um den Erfolg oder das Scheitern der Anforderung zu verfolgen, ist es notwendig, auf die Ereignisse {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} und {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} zu hören.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{ domxref("Document.pointerLockElement") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
