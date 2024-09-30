---
title: "WakeLockSentinel: release() Methode"
short-title: release()
slug: Web/API/WakeLockSentinel/release
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Die **`release()`**-Methode der [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Schnittstelle gibt die [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) frei und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Sentinel erfolgreich freigegeben wurde.

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
Sie sollten immer auf das [`release`](/de/docs/Web/API/WakeLockSentinel/release_event) Ereignis hören, um zu überprüfen, ob ein Wachschutz freigegeben wurde.

## Beispiele

In diesem Beispiel wird der [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) freigegeben, wenn ein Benutzer auf einen Knopf klickt.

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
