---
title: "WakeLockSentinel: type-Eigenschaft"
short-title: type
slug: Web/API/WakeLockSentinel/type
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`type`** der [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Schnittstelle gibt eine String-Darstellung des aktuell erworbenen [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Typs zurück.

## Wert

Eine String-Darstellung des aktuell erworbenen `wake lock`-Typs.
Derzeit ist der Wert immer `screen`, was einen Bildschirm-Wake-Lock darstellt.
Er verhindert, dass Geräte den Bildschirm dimmen oder sperren.

## Beispiele

Dieses Beispiel zeigt eine asynchrone Funktion, die einen [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) erwirbt und dann den Typ in der Konsole protokolliert.

```js
const requestWakeLock = async () => {
  wakeLock = await navigator.wakeLock.request("screen");
  console.log(wakeLock.type); // logs 'screen'
};

requestWakeLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Wach bleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
