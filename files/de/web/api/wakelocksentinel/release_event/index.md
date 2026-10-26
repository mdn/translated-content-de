---
title: "WakeLockSentinel: release-Ereignis"
short-title: release
slug: Web/API/WakeLockSentinel/release_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Screen Wake Lock API")}}{{SecureContext_Header}}

Das **`release`**-Ereignis der [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel)-Schnittstelle wird ausgelöst, wenn die Sperre des Sentinel-Objekts freigegeben wurde.

Ein [`WakeLockSentinel`](/de/docs/Web/API/WakeLockSentinel) kann manuell über die `release()`-Methode oder automatisch durch die Plattform freigegeben werden. Dies kann geschehen, wenn das Dokument inaktiv oder nicht mehr sichtbar wird, wenn der Akkustand des Geräts niedrig ist oder wenn der Benutzer einen Energiesparmodus aktiviert.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("release", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onrelease = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Dieses Beispiel aktualisiert die Benutzeroberfläche, wenn der Wake Lock freigegeben wird.

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

- [Mit der Screen Wake Lock API das Gerät aktiv halten](https://developer.chrome.com/docs/capabilities/web-apis/wake-lock/)
