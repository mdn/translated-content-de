---
title: "DeviceMotionEvent: requestPermission() statische Methode"
short-title: requestPermission()
slug: Web/API/DeviceMotionEvent/requestPermission_static
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{APIRef("Device Orientation Events")}}{{securecontext_header}}

Die **`requestPermission()`** statische Methode der [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) Schnittstelle fordert die Erlaubnis des Benutzers an, auf Bewegungsdaten des Geräts von den Beschleunigungs- und Gyroskop-Sensoren zuzugreifen. Diese Methode erfordert eine {{Glossary("transient_activation", "transiente Aktivierung")}}, was bedeutet, dass sie durch ein UI-Ereignis wie einen Button-Klick ausgelöst werden muss.

## Syntax

```js-nolint
DeviceMotionEvent.requestPermission()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem String aufgelöst wird, der entweder `"granted"` oder `"denied"` ist.

### Ausnahmen

Das zurückgegebene Promise wird mit den folgenden Ausnahmen abgelehnt:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Berechtigungsstatus ist `"prompt"` und die aufrufende Funktion hat keine {{Glossary("transient_activation", "transiente Aktivierung")}}.

## Sicherheit

Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktionalität funktioniert.

## Beispiele

### Anfordern der Erlaubnis für Bewegungsdaten bei Klick

```js
document.querySelector("button").addEventListener("click", async () => {
  if (typeof DeviceMotionEvent.requestPermission !== "function") {
    // The feature is not available, or does not need permission.
    return;
  }

  const permission = await DeviceMotionEvent.requestPermission();
  if (permission === "granted") {
    window.addEventListener("devicemotion", (event) => {
      console.log(`Acceleration X: ${event.acceleration.x}`);
      console.log(`Acceleration Y: ${event.acceleration.y}`);
      console.log(`Acceleration Z: ${event.acceleration.z}`);
    });
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent)
- [`DeviceOrientationEvent.requestPermission()`](/de/docs/Web/API/DeviceOrientationEvent/requestPermission_static)
- [`devicemotion`](/de/docs/Web/API/Window/devicemotion_event) Ereignis
- [Erkennung der Geräteausrichtung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
