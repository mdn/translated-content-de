---
title: "XRSystem: devicechange-Ereignis"
short-title: devicechange
slug: Web/API/XRSystem/devicechange_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein **`devicechange`**-Ereignis wird auf einem {{DOMxRef("XRSystem")}}-Objekt ausgelöst, wenn sich die Verfügbarkeit von immersiven XR-Geräten geändert hat; zum Beispiel, wenn ein VR-Headset oder AR-Brille angeschlossen oder getrennt wurde. Es handelt sich um ein generisches {{DOMxRef("Event")}} ohne zusätzliche Eigenschaften.

> [!NOTE]
> Nicht zu verwechseln mit dem {{domxref("MediaDevices")}} {{DOMxRef("MediaDevices.devicechange_event", "devicechange")}}-Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("devicechange", (event) => {});

ondevicechange = (event) => {};
```

Falls die Nutzung von WebXR durch eine `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert wurde, werden `devicechange`-Ereignisse nicht ausgelöst.

## Ereignistyp

Ein generisches {{DOMxRef("Event")}} ohne zusätzliche Eigenschaften.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn sich die Verfügbarkeit von immersiven XR-Geräten geändert hat. Zum Beispiel, wenn ein VR-Headset oder AR-Brille angeschlossen oder getrennt wurde.

### Anwendungsfälle

Sie können dieses Ereignis beispielsweise verwenden, um die Verfügbarkeit eines WebXR-kompatiblen Geräts zu überwachen, sodass Sie ein UI-Element aktivieren können, mit dem der Benutzer den immersiven Modus aktivieren kann. Dies wird im [Beispiel](#beispiele) unten gezeigt.

## Beispiele

Das hier gezeigte Beispiel behandelt das `devicechange`-Ereignis, indem die Verfügbarkeit der "Enter XR"-Schaltfläche basierend darauf umgeschaltet wird, ob derzeit immersive Geräte verfügbar sind oder nicht.

```js
if (navigator.xr) {
  navigator.xr.addEventListener("devicechange", (event) => {
    navigator.xr.isSessionSupported("immersive-vr").then((immersiveOK) => {
      enableXRButton.disabled = !immersiveOK;
    });
  });
}
```

Wenn `devicechange` empfangen wird, ruft der in diesem Code eingerichtete Handler die `XR`-Methode {{domxref("XRSystem.isSessionSupported", "isSessionSupported()")}} auf, um herauszufinden, ob ein Gerät verfügbar ist, das immersive VR-Präsentationen handhaben kann. Wenn ja, wird die Schaltfläche zum Betreten des XR-Modus aktiviert; andernfalls wird sie deaktiviert.

Sie können auch die `ondevicechange`-Ereignishandlereigenschaft verwenden, um einen einzelnen Handler für `devicechange`-Ereignisse festzulegen:

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
