---
title: "DeviceMotionEvent: Static-Methode requestPermission()"
short-title: requestPermission()
slug: Web/API/DeviceMotionEvent/requestPermission_static
l10n:
  sourceCommit: bcfc05aac40b47aecad69d44c54e33bf5f9b4e41
---

{{APIRef("Device Orientation Events")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`requestPermission()`**-Methode der Schnittstelle [`DeviceMotionEvent`](/de/docs/Web/API/DeviceMotionEvent) fordert die Erlaubnis des Benutzers an, auf Bewegungsdaten des Geräts von den Beschleunigungs- und Gyroskopsensoren zuzugreifen. Diese Methode erfordert eine {{Glossary("transient_activation", "transiente Aktivierung")}}, was bedeutet, dass sie durch eine Benutzeroberflächeninteraktion wie einen Klick auf eine Schaltfläche ausgelöst werden muss.

## Syntax

```js-nolint
DeviceMotionEvent.requestPermission()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem String aufgelöst wird, der entweder `"granted"` oder `"denied"` ist.

### Ausnahmen

Das zurückgegebene Promise wird mit den folgenden Ausnahmen abgelehnt:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Berechtigungsstatus ist `"prompt"` und die aufrufende Funktion hat keine {{Glossary("transient_activation", "transiente Aktivierung")}}.

## Sicherheit

Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Beispiele

### Anfordern der Bewegungsberechtigung des Geräts bei Klick

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
