---
title: "WakeLockSentinel: release Ereignis"
short-title: release
slug: Web/API/WakeLockSentinel/release_event
l10n:
  sourceCommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Das **`release`**-Ereignis der [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Schnittstelle wird ausgelöst, wenn der Handle des Sentinel-Objekts freigegeben wurde.

Ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) kann manuell über die `release()`-Methode oder automatisch über das Plattform-Wake-Lock freigegeben werden.
Dies kann passieren, wenn das Dokument inaktiv wird oder die Sichtbarkeit verliert, wenn das Gerät wenig Strom hat oder der Benutzer den Energiesparmodus aktiviert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("release", (event) => {});

onrelease = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn das Wake-Lock freigegeben wird.

```js
wakeLock.addEventListener("release", () => {
  // if wake lock is released alter the UI accordingly
  statusElement.textContent = "Wake Lock has been released";
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Wach bleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
