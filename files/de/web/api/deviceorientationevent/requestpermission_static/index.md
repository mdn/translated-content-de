---
title: "DeviceOrientationEvent: requestPermission() statische Methode"
short-title: requestPermission()
slug: Web/API/DeviceOrientationEvent/requestPermission_static
l10n:
  sourceCommit: bcfc05aac40b47aecad69d44c54e33bf5f9b4e41
---

{{APIRef("Device Orientation Events")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`requestPermission()`**-statische Methode des [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)-Interfaces fordert die Erlaubnis des Nutzers an, auf die Geräteorientierungsdaten von den Beschleunigungs- und Gyroskopsensoren zuzugreifen. Sie kann auch die Erlaubnis anfordern, auf Magnetometerdaten zuzugreifen, wenn eine absolute Orientierung benötigt wird. Diese Methode erfordert {{Glossary("transient_activation", "transiente Aktivierung")}}, was bedeutet, dass sie durch ein UI-Ereignis wie einen Button-Klick ausgelöst werden muss.

## Syntax

```js-nolint
DeviceOrientationEvent.requestPermission()
DeviceOrientationEvent.requestPermission(absolute)
```

### Parameter

- `absolute` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob absolute Orientierungsdaten benötigt werden. Wenn `true`, umfasst die Erlaubnisanfrage auch den Magnetometersensor. Standardmäßig auf `false`.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem String aufgelöst wird, der entweder `"granted"` oder `"denied"` ist.

### Ausnahmen

Das zurückgegebene Promise lehnt die folgenden Ausnahmen ab:

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Erlaubnisstatus ist `"prompt"` und die aufrufende Funktion hat keine {{Glossary("transient_activation", "transiente Aktivierung")}}.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Beispiele

### Anfordern der Geräteorientierungserlaubnis bei Klick

```js
document.querySelector("button").addEventListener("click", async () => {
  if (typeof DeviceOrientationEvent.requestPermission !== "function") {
    // The feature is not available, or does not need permission.
    return;
  }

  const permission = await DeviceOrientationEvent.requestPermission();
  if (permission === "granted") {
    window.addEventListener("deviceorientation", (event) => {
      console.log(`Alpha: ${event.alpha}`);
      console.log(`Beta: ${event.beta}`);
      console.log(`Gamma: ${event.gamma}`);
    });
  }
});
```

### Anfordern der absoluten Orientierungserlaubnis

Wenn absolute Orientierungsdaten benötigt werden (z.B. für kompassbasierte Anwendungen), übergeben Sie `true` als `absolute` Parameter. Dies fordert zusätzlich den Zugriff auf den Magnetometer an.

```js
document.querySelector("button").addEventListener("click", async () => {
  if (typeof DeviceOrientationEvent.requestPermission !== "function") {
    return;
  }

  const permission = await DeviceOrientationEvent.requestPermission(true);
  if (permission === "granted") {
    window.addEventListener("deviceorientationabsolute", (event) => {
      console.log(`Absolute alpha: ${event.alpha}`);
    });
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DeviceOrientationEvent`](/de/docs/Web/API/DeviceOrientationEvent)
- [`DeviceMotionEvent.requestPermission()`](/de/docs/Web/API/DeviceMotionEvent/requestPermission_static)
- [`deviceorientation`](/de/docs/Web/API/Window/deviceorientation_event) Ereignis
- [`deviceorientationabsolute`](/de/docs/Web/API/Window/deviceorientationabsolute_event) Ereignis
- [Erkennung der Geräteorientierung](/de/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
