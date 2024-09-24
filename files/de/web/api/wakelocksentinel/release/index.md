---
title: "WakeLockSentinel: release() Methode"
short-title: release()
slug: Web/API/WakeLockSentinel/release
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Die **`release()`** Methode des {{domxref("WakeLockSentinel")}} Interface gibt den {{domxref("WakeLockSentinel")}} frei und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald die Sperre erfolgreich freigegeben wurde.

## Syntax

```js-nolint
release()
```

### Parameter

Keine.

### Rückgabewert

Gibt ein {{jsxref("Promise")}} zurück, das mit `undefined` aufgelöst wird.

### Ausnahmen

Es werden keine Ausnahmen ausgelöst.
Es sollten immer auf das {{domxref("WakeLockSentinel/release_event", "release")}}-Ereignis gehört werden, um zu prüfen, ob eine Wachhaltesperre freigegeben wurde.

## Beispiele

In diesem Beispiel wird der {{domxref("WakeLockSentinel")}} freigegeben, wenn ein Benutzer auf einen Button klickt.

```js
wakeLockOffButton.addEventListener("click", () => {
  WakeLockSentinel.release();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Bleiben Sie wach mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
