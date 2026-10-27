---
title: "XRSystem: devicechange-Ereignis"
short-title: devicechange
slug: Web/API/XRSystem/devicechange_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Ein **`devicechange`**-Ereignis wird auf einem [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt ausgelöst, wenn sich die Verfügbarkeit immersiver XR-Geräte ändert – beispielsweise, wenn ein VR-Headset oder eine AR-Brille verbunden oder getrennt wird. Es handelt sich um ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

> [!NOTE]
> Nicht zu verwechseln mit dem [`devicechange`](/de/docs/Web/API/MediaDevices/devicechange_event)-Ereignis von [`MediaDevices`](/de/docs/Web/API/MediaDevices).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("devicechange", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Handler zuweisen:

```js-nolint
ondevicechange = (event) => { }
```

Wenn die Verwendung von WebXR durch eine `xr-spatial-tracking`-[Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) blockiert wurde, werden keine `devicechange`-Ereignisse ausgelöst.

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event) ohne zusätzliche Eigenschaften.

## Beschreibung

### Auslöser

Das Ereignis wird ausgelöst, wenn sich die Verfügbarkeit immersiver XR-Geräte ändert – beispielsweise, wenn ein VR-Headset oder eine AR-Brille verbunden oder getrennt wird.

### Anwendungsfälle

Mit diesem Ereignis können Sie beispielsweise überwachen, ob ein WebXR-kompatibles Gerät verfügbar ist. So können Sie ein UI-Element aktivieren, mit dem Benutzer den immersiven Modus starten können. Das [Beispiel](#beispiele) unten zeigt, wie das funktioniert.

## Beispiele

Das folgende Beispiel verarbeitet das `devicechange`-Ereignis, indem es die Verfügbarkeit der Schaltfläche „Enter XR“ davon abhängig macht, ob derzeit immersive Geräte verfügbar sind.

```js
if (navigator.xr) {
  navigator.xr.addEventListener("devicechange", (event) => {
    navigator.xr.isSessionSupported("immersive-vr").then((immersiveOK) => {
      enableXRButton.disabled = !immersiveOK;
    });
  });
}
```

Wenn ein `devicechange`-Ereignis eintritt, ruft der hier eingerichtete Handler die `XR`-Methode [`isSessionSupported()`](/de/docs/Web/API/XRSystem/isSessionSupported) auf, um zu prüfen, ob ein Gerät verfügbar ist, das immersive VR-Darstellungen unterstützt. Falls ja, wird die Schaltfläche zum Starten des XR-Modus aktiviert; andernfalls wird sie deaktiviert.

Sie können auch über die Event-Handler-Eigenschaft `ondevicechange` einen einzelnen Handler für `devicechange`-Ereignisse festlegen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `ondevicechange` hinzugefügte Ereignis-Listener ersetzt werden:

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
