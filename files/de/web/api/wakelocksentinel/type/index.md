---
title: "WakeLockSentinel: Typ-Eigenschaft"
short-title: Typ
slug: Web/API/WakeLockSentinel/type
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`type`** der {{domxref("WakeLockSentinel")}} Schnittstelle gibt eine Zeichenfolgen-Darstellung des aktuell erworbenen {{domxref("WakeLockSentinel")}} Typs zurück.

## Wert

Eine Zeichenfolgen-Darstellung des aktuell erworbenen Wake-Lock-Typs.
Derzeit ist der Wert immer `screen`, was ein Bildschirm-Wake-Lock darstellt.
Dies verhindert, dass Geräte den Bildschirm dimmen oder sperren.

## Beispiele

Dieses Beispiel zeigt eine asynchrone Funktion, die eine {{domxref("WakeLockSentinel")}} anfordert und dann den Typ in die Konsole protokolliert.

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

- [Sorgen Sie mit der Screen Wake Lock API dafür, dass der Bildschirm wach bleibt](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
