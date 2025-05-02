---
title: "WakeLockSentinel: release Ereignis"
short-title: release
slug: Web/API/WakeLockSentinel/release_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Das **`release`**-Ereignis der [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Schnittstelle wird ausgelöst, wenn der Handle des Sentinel-Objekts freigegeben wurde.

Ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) kann manuell über die `release()`-Methode oder automatisch über die Plattform-Wachsamkeitssperre freigegeben werden. Dies kann passieren, wenn das Dokument inaktiv wird oder die Sichtbarkeit verliert, wenn das Gerät wenig Strom hat oder der Benutzer den Energiesparmodus aktiviert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("release", (event) => { })

onrelease = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn die Wachsamkeitssperre freigegeben wird.

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

- [Wachbleiben mit der Screen Wake Lock API](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
