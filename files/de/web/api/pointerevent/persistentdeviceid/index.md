---
title: "PointerEvent: persistentDeviceId Eigenschaft"
short-title: persistentDeviceId
slug: Web/API/PointerEvent/persistentDeviceId
l10n:
  sourceCommit: ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{ APIRef("Pointer Events") }}{{SeeCompatTable}}

Die **`persistentDeviceId`**-Schreibgeschützte Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle ist eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt. Dies bietet eine sichere und zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren, zu identifizieren.

Eine `persistentDeviceId` bleibt für die Dauer einer Browsersitzung bestehen. Um das Risiko von Fingerprinting/Tracking zu vermeiden, erhalten Zeigegeräte zu Beginn jeder Sitzung eine neue `persistentDeviceId`.

Pointer-Ereignisse, deren erzeugendes Gerät nicht identifiziert werden konnte, wird ein `persistentDeviceId`-Wert von `0` zugewiesen.

## Wert

Ein Ganzzahlwert oder `0`, wenn das Gerät, das das `PointerEvent` erzeugt, nicht identifiziert werden konnte.

> [!NOTE]
> Aufgrund von Einschränkungen bei Digitalisier- und Zeigegerätehardware ist eine `persistentDeviceId` möglicherweise nicht für alle Pointer-Ereignisse verfügbar, insbesondere bei älterer Hardware. Beispielsweise könnte das Zeigegerät seine Hardware-ID nicht rechtzeitig an den Digitalisierer melden, damit `pointerdown` eine `persistentDeviceId` erhält: Diese könnte anfangs `0` sein und sich zu einem späteren Zeitpunkt im Verlauf des Strichs in einen gültigen Wert ändern.

## Beispiele

Unter der Annahme des folgenden HTML:

```html
<canvas id="inking-surface" width="1280" height="720"></canvas>
```

Das folgende JavaScript weist unterschiedlichen Zeigern, die mit einer Leinwand interagieren, verschiedene Zeichenfarben zu:

```js
const colorBlue = 0;
const colorGreen = 1;
const colorYellow = 2;
const colors = [colorBlue, colorGreen, colorYellow];

const pointerToColorMap = new Map();
const colorAssignmentIndex = 0;

const canvas = document.querySelector("#inking-surface");

// Listen for a pointerdown event and map the persistentDeviceId to a color
// if it exists and has not been mapped yet
canvas.addEventListener("pointerdown", (e) => {
  if (e.persistentDeviceId && !pointerToColorMap.has(e.persistentDeviceId)) {
    pointerToColorMap.set(e.persistentDeviceId, colors[colorAssignmentIndex]);

    // Bump the color assignment index and loop back over if needed
    colorAssignmentIndex = (colorAssignmentIndex + 1) % colors.length;
  }
});

// Listen for a `pointermove` and get the color assigned to this pointer
// if persistentDeviceId exists and the pointer has been color mapped
canvas.addEventListener("pointermove", (e) => {
  if (e.persistentDeviceId && pointerToColorMap.has(e.persistentDeviceId)) {
    const pointerColor = pointerToColorMap.get(e.persistentDeviceId);
    // Do some inking on the <canvas>
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
