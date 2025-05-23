---
title: "PointerEvent: persistentDeviceId-Eigenschaft"
short-title: persistentDeviceId
slug: Web/API/PointerEvent/persistentDeviceId
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{ APIRef("Pointer Events") }}{{SeeCompatTable}}

Die schreibgeschützte **`persistentDeviceId`**-Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces ist ein eindeutiger Bezeichner für das Zeigegerät, das das `PointerEvent` erzeugt. Dies bietet eine sichere, zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren, zu identifizieren.

Ein `persistentDeviceId` bleibt für die Dauer einer Browsing-Session bestehen. Um das Risiko des Fingerabdrucks/Verfolgens zu vermeiden, werden den Zeigegeräten zu Beginn jeder Sitzung neue `persistentDeviceIds` zugewiesen.

Zeigerereignissen, deren erzeugendes Gerät nicht identifiziert werden konnte, wird der `persistentDeviceId`-Wert `0` zugewiesen.

## Wert

Ein Integer oder `0`, wenn das Gerät, das das `PointerEvent` erzeugt hat, nicht identifiziert werden konnte.

> [!NOTE]
> Aufgrund von Einschränkungen bei Digitalisierern und Zeigegeräten kann ein `persistentDeviceId` bei einigen Zeigerereignissen nicht verfügbar sein, insbesondere bei älterer Hardware. Zum Beispiel könnte das Zeigegerät seine Hardware-ID nicht rechtzeitig an den Digitalisierer melden, sodass `pointerdown` keinen `persistentDeviceId` erhält: es kann anfangs `0` sein und für spätere Ereignisse im Verlauf in einen gültigen Wert geändert werden.

## Beispiele

Angenommen, folgendes HTML:

```html
<canvas id="inking-surface" width="1280" height="720"></canvas>
```

Das folgende JavaScript weist einzigartigen Zeigern, die mit einer Leinwand interagieren, unterschiedliche Tintenfarben zu:

```js
const colorBlue = 0;
const colorGreen = 1;
const colorYellow = 2;
const colors = [colorBlue, colorGreen, colorYellow];

const pointerToColorMap = new Map();
let colorAssignmentIndex = 0;

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
