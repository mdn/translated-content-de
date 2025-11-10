---
title: "XRSystem: devicechange Ereignis"
short-title: devicechange
slug: Web/API/XRSystem/devicechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein **`devicechange`** Ereignis wird auf einem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt ausgelöst, wenn sich die Verfügbarkeit von immersiven XR-Geräten geändert hat; zum Beispiel, wenn ein VR-Headset oder AR-Brillen angeschlossen oder getrennt wurden. Es handelt sich um ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

> [!NOTE]
> Nicht zu verwechseln mit dem [`MediaDevices`](/de/docs/Web/API/MediaDevices) [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("devicechange", (event) => { })

ondevicechange = (event) => { }
```

Wenn die Nutzung von WebXR durch eine `xr-spatial-tracking` [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wurde, werden `devicechange` Ereignisse nicht ausgelöst.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn sich die Verfügbarkeit von immersiven XR-Geräten ändert. Beispielsweise, wenn ein VR-Headset oder AR-Brillen angeschlossen oder getrennt werden.

### Anwendungsfälle

Sie können dieses Ereignis nutzen, um beispielsweise die Verfügbarkeit eines mit WebXR kompatiblen Geräts zu überwachen, damit Sie ein UI-Element aktivieren können, mit dem der Benutzer den immersiven Modus aktivieren kann. Dies wird im [Beispiel](#beispiele) unten gezeigt.

## Beispiele

Das hier gezeigte Beispiel behandelt das `devicechange` Ereignis, indem es die Verfügbarkeit der "Enter XR"-Schaltfläche basierend darauf umschaltet, ob momentan immersive Geräte verfügbar sind oder nicht.

```js
if (navigator.xr) {
  navigator.xr.addEventListener("devicechange", (event) => {
    navigator.xr.isSessionSupported("immersive-vr").then((immersiveOK) => {
      enableXRButton.disabled = !immersiveOK;
    });
  });
}
```

Wenn `devicechange` empfangen wird, ruft der in diesem Code eingerichtete Handler die `XR`-Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf, um herauszufinden, ob ein Gerät verfügbar ist, das immersive VR-Präsentationen verarbeiten kann. Wenn ja, wird die Schaltfläche zum Betreten des XR-Modus aktiviert; andernfalls wird sie deaktiviert.

Sie können auch die `ondevicechange` Event-Handler-Eigenschaft verwenden, um einen einzelnen Handler für `devicechange` Ereignisse festzulegen:

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
