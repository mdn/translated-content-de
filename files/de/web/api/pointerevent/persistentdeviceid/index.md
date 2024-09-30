---
title: "PointerEvent: persistentDeviceId-Eigenschaft"
short-title: persistentDeviceId
slug: Web/API/PointerEvent/persistentDeviceId
l10n:
  sourceCommit: ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{ APIRef("Pointer Events") }}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`persistentDeviceId`** der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle ist eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt. Dies bietet eine sichere und zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte) zu identifizieren, die gleichzeitig mit dem Bildschirm interagieren.

Eine `persistentDeviceId` bleibt für die Dauer einer Browsingsitzung bestehen. Um das Risiko des Fingerprintings/Trackings zu vermeiden, werden Zeigegeräten zu Beginn jeder Sitzung neue `persistentDeviceId`-Werte zugewiesen.

Zeigerereignisse, deren erzeugendes Gerät nicht identifiziert werden konnte, erhalten einen `persistentDeviceId`-Wert von `0`.

## Wert

Ein Integer oder `0`, wenn das Gerät, das das `PointerEvent` erzeugt, nicht identifiziert werden konnte.

> [!NOTE]
> Aufgrund von Beschränkungen im digitalen und Zeigegeräte-Hardwarebereich kann es vorkommen, dass eine `persistentDeviceId` für alle Zeigerereignisse nicht verfügbar ist, insbesondere bei älterer Hardware. Beispielsweise könnte das Zeigegerät seine Hardware-ID dem Digitalisierer nicht rechtzeitig melden, damit `pointerdown` eine `persistentDeviceId` erhält: Diese kann zunächst `0` sein und sich für spätere Ereignisse in der Zeichenfolge in einen gültigen Wert ändern.

## Beispiele

Angenommen folgendes HTML:

```html
<canvas id="inking-surface" width="1280" height="720"></canvas>
```

Das folgende JavaScript weist eindeutigen Zeigern, die mit einer Leinwand interagieren, eine unterschiedliche Zeichenfarbe zu:

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
