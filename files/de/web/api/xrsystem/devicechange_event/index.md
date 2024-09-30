---
title: "XRSystem: devicechange-Ereignis"
short-title: devicechange
slug: Web/API/XRSystem/devicechange_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein **`devicechange`**-Ereignis wird an einem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt ausgelöst, wenn sich die Verfügbarkeit von immersiven XR-Geräten geändert hat; zum Beispiel, wenn ein VR-Headset oder AR-Brille verbunden oder getrennt wurde. Es handelt sich um ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

> [!NOTE]
> Nicht zu verwechseln mit dem [`MediaDevices`](/de/docs/Web/API/MediaDevices) [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Event-Handler-Eigenschaft fest.

```js
addEventListener("devicechange", (event) => {});

ondevicechange = (event) => {};
```

Wenn die Nutzung von WebXR durch eine `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert wurde, werden `devicechange`-Ereignisse nicht ausgelöst.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beschreibung

### Auslöser

Wird ausgelöst, wenn sich die Verfügbarkeit von immersiven XR-Geräten geändert hat. Zum Beispiel, wenn ein VR-Headset oder AR-Brille verbunden oder getrennt wurde.

### Anwendungsfälle

Sie können dieses Ereignis nutzen, um beispielsweise die Verfügbarkeit eines WebXR-kompatiblen Geräts zu überwachen, damit Sie ein UI-Element aktivieren können, das der Benutzer verwenden kann, um den immersiven Modus zu aktivieren. Dies wird im [Beispiel](#beispiele) unten gezeigt.

## Beispiele

Das hier gezeigte Beispiel behandelt das `devicechange`-Ereignis, indem es basierend auf der Verfügbarkeit von immersiven Geräten die Verfügbarkeit der "Enter XR"-Schaltfläche umschaltet.

```js
if (navigator.xr) {
  navigator.xr.addEventListener("devicechange", (event) => {
    navigator.xr.isSessionSupported("immersive-vr").then((immersiveOK) => {
      enableXRButton.disabled = !immersiveOK;
    });
  });
}
```

Wenn `devicechange` empfangen wird, ruft der in diesem Code eingerichtete Handler die `XR`-Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf, um festzustellen, ob ein Gerät verfügbar ist, das immersive VR-Präsentationen handhaben kann. Wenn ja, wird der Button, um den XR-Modus zu betreten, aktiviert; andernfalls wird er deaktiviert.

Sie können auch die `ondevicechange`-Event-Handler-Eigenschaft verwenden, um einen einzigen Handler für `devicechange`-Ereignisse festzulegen:

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
