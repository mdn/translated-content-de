---
title: "XRSystem: devicechange Ereignis"
short-title: devicechange
slug: Web/API/XRSystem/devicechange_event
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein **`devicechange`** Ereignis wird auf einem [`XRSystem`](/de/docs/Web/API/XRSystem) Objekt ausgelöst, wann immer sich die Verfügbarkeit von immersiven XR-Geräten geändert hat. Zum Beispiel, wenn ein VR-Headset oder AR-Brillen angeschlossen oder getrennt wurden. Es handelt sich um ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

> [!NOTE]
> Nicht zu verwechseln mit dem [`MediaDevices`](/de/docs/Web/API/MediaDevices) [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("devicechange", (event) => {});

ondevicechange = (event) => {};
```

Wenn die Nutzung von WebXR durch eine `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wurde, werden `devicechange` Ereignisse nicht ausgelöst.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beschreibung

### Auslöser

Ausgelöst, wann immer sich die Verfügbarkeit von immersiven XR-Geräten geändert hat. Zum Beispiel, wenn ein VR-Headset oder AR-Brillen angeschlossen oder getrennt wurden.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um zum Beispiel die Verfügbarkeit eines WebXR-kompatiblen Geräts zu überwachen, damit Sie ein UI-Element aktivieren können, das der Benutzer zur Aktivierung des immersiven Modus verwenden kann. Dies wird im [Beispiel](#beispiele) unten gezeigt.

## Beispiele

Im hier gezeigten Beispiel wird das `devicechange` Ereignis behandelt, indem die Verfügbarkeit der Schaltfläche "Enter XR" basierend darauf umgeschaltet wird, ob immersive Geräte derzeit verfügbar sind oder nicht.

```js
if (navigator.xr) {
  navigator.xr.addEventListener("devicechange", (event) => {
    navigator.xr.isSessionSupported("immersive-vr").then((immersiveOK) => {
      enableXRButton.disabled = !immersiveOK;
    });
  });
}
```

Wenn `devicechange` empfangen wird, ruft der in diesem Code eingerichtete Handler die `XR` Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf, um herauszufinden, ob ein Gerät verfügbar ist, das immersive VR-Präsentationen handhaben kann. Wenn ja, wird die Schaltfläche zum Betreten des XR-Modus aktiviert; andernfalls wird sie deaktiviert.

Sie können auch die `ondevicechange` Ereignishandler-Eigenschaft verwenden, um einen einzigen Handler für `devicechange` Ereignisse festzulegen:

```js
if (navigator.xr) {
  navigator.xr.ondevicechange = (event) => {
    // …
  };
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
