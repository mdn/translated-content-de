---
title: "WakeLockSentinel: release-Ereignis"
short-title: release
slug: Web/API/WakeLockSentinel/release_event
l10n:
  sourceCommit: 55c52058769cbd20b5c85393b5fbb34f969cfdb2
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Das **`release`**-Ereignis der Schnittstelle [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) wird ausgelöst, wenn das Handle des Sentinel-Objekts freigegeben wurde.

Ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) kann manuell über die Methode `release()` oder automatisch über die Wake Lock der Plattform freigegeben werden.
Dies kann geschehen, wenn das Dokument inaktiv wird oder seine Sichtbarkeit verliert, wenn der Akku des Geräts schwach ist oder die Benutzerin bzw. der Benutzer einen Energiesparmodus aktiviert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("release", (event) => { })

onrelease = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn die Wake Lock freigegeben wird.

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

- [Mit der Screen Wake Lock API wach bleiben](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
