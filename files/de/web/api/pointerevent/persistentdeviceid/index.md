---
title: "PointerEvent: persistentDeviceId-Eigenschaft"
short-title: persistentDeviceId
slug: Web/API/PointerEvent/persistentDeviceId
l10n:
  sourceCommit: 6bcde9f05718c4d2c29ed083a6e2ef945c10efa7
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`persistentDeviceId`** der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle ist ein eindeutiger Bezeichner für das Zeigegerät, das das `PointerEvent` erzeugt. Dies bietet eine sichere und zuverlässige Möglichkeit, mehrere Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren, zu identifizieren.

Ein `persistentDeviceId` bleibt für die Dauer einer Browsersitzung bestehen. Um das Risiko von Fingerprinting/Tracking zu vermeiden, werden Zeigegeräten zu Beginn jeder Sitzung neue `persistentDeviceId` zugewiesen.

Zeigerereignisse, bei denen das erzeugende Gerät nicht identifiziert werden konnte, erhalten den `persistentDeviceId`-Wert `0`.

## Wert

Ein Integer oder `0`, falls das Gerät, das das `PointerEvent` erzeugt hat, nicht identifiziert werden konnte.

> [!NOTE]
> Aufgrund von Einschränkungen der Digitalisierungs- und Zeigegerätehardware ist möglicherweise nicht für alle Zeigerereignisse ein `persistentDeviceId` verfügbar, insbesondere bei älterer Hardware. Zum Beispiel könnte das Zeigegerät seine Hardware-ID dem Digitalisierer nicht rechtzeitig melden, damit `pointerdown` einen `persistentDeviceId` erhält: Er könnte zunächst `0` sein und sich für spätere Ereignisse im gleichen Strich in einen gültigen Wert ändern.

## Beispiele

### Farbe für jeden persistentDeviceId zuweisen

Angenommen, der folgende HTML-Code ist gegeben:

```html
<canvas id="inking-surface" width="1280" height="720"></canvas>
```

Der folgende JavaScript-Code weist bis zu drei einzigartigen Zeigern, die mit einem Canvas interagieren, unterschiedliche Eingabefarben zu:

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
