---
title: "XRSystem: devicechange-Ereignis"
short-title: devicechange
slug: Web/API/XRSystem/devicechange_event
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein **`devicechange`**-Ereignis wird auf einem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt ausgelöst, wenn sich die Verfügbarkeit von immersiven XR-Geräten geändert hat; beispielsweise wenn ein VR-Headset oder AR-Brillen angeschlossen oder getrennt wurden. Es handelt sich um ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

> [!NOTE]
> Nicht zu verwechseln mit dem [`MediaDevices`](/de/docs/Web/API/MediaDevices) [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event) Ereignis.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("devicechange", (event) => {});

ondevicechange = (event) => {};
```

Wenn die Verwendung von WebXR durch eine `xr-spatial-tracking` [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) blockiert wurde, werden keine `devicechange`-Ereignisse ausgelöst.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beschreibung

### Auslöser

Ausgelöst, wenn sich die Verfügbarkeit von immersiven XR-Geräten geändert hat. Zum Beispiel, wenn ein VR-Headset oder AR-Brillen angeschlossen oder getrennt wurden.

### Anwendungsfälle

Sie können dieses Ereignis verwenden, um beispielsweise die Verfügbarkeit eines WebXR-kompatiblen Geräts zu überwachen, sodass Sie ein UI-Element aktivieren können, mit dem der Benutzer den immersiven Modus aktivieren kann. Dies wird im folgenden [Beispiel](#beispiele) gezeigt.

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

Wenn ein `devicechange`-Ereignis empfangen wird, ruft der in diesem Code eingerichtete Handler die `XR`-Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf, um herauszufinden, ob ein Gerät verfügbar ist, das immersive VR-Darstellungen verarbeiten kann. Wenn dies der Fall ist, wird die Schaltfläche für den Einstieg in den XR-Modus aktiviert; andernfalls wird sie deaktiviert.

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
