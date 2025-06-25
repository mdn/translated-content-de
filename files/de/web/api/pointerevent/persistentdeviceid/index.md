---
title: "PointerEvent: persistentDeviceId-Eigenschaft"
short-title: persistentDeviceId
slug: Web/API/PointerEvent/persistentDeviceId
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte **`persistentDeviceId`**-Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces ist ein eindeutiger Bezeichner für das Zeigegerät, das das `PointerEvent` erzeugt. Dies bietet eine sichere und zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren, zu identifizieren.

Ein `persistentDeviceId` bleibt für die Dauer einer Browsersitzung bestehen. Um das Risiko von Fingerprinting/Tracking zu vermeiden, werden Zeigegeräten zu Beginn jeder Sitzung neue `persistentDeviceId`-Werte zugewiesen.

Zeigereignisse, deren erzeugendes Gerät nicht identifiziert werden konnte, erhalten einen `persistentDeviceId`-Wert von `0`.

## Wert

Ein ganzzahliger Wert oder `0`, wenn das Gerät, das das `PointerEvent` erzeugt hat, nicht identifiziert werden konnte.

> [!NOTE]
> Aufgrund von Einschränkungen der Hardware von Digitalisierern und Zeigegeräten ist möglicherweise keine `persistentDeviceId` für alle Pointer-Events verfügbar, insbesondere bei älterer Hardware. Zum Beispiel könnte das Zeigegerät seine Hardware-ID nicht rechtzeitig an den Digitalisierer übermitteln, damit `pointerdown` eine `persistentDeviceId` erhält: Sie könnte zunächst `0` sein und sich für spätere Ereignisse im Verlauf eines Strichs in einen gültigen Wert ändern.

## Beispiele

Angenommen, folgendes HTML ist gegeben:

```html
<canvas id="inking-surface" width="1280" height="720"></canvas>
```

Das folgende JavaScript weist verschiedenen einzigartigen Zeigegeräten, die mit einem Canvas interagieren, unterschiedliche Tintenfarben zu:

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
