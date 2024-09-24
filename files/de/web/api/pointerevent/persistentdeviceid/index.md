---
title: "PointerEvent: persistentDeviceId Eigenschaft"
short-title: persistentDeviceId
slug: Web/API/PointerEvent/persistentDeviceId
l10n:
  sourceCommit: ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{ APIRef("Pointer Events") }}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`persistentDeviceId`** des {{domxref("PointerEvent")}}-Interfaces ist ein eindeutiger Bezeichner für das Zeigegerät, das das `PointerEvent` erzeugt. Dies bietet eine sichere und verlässliche Methode, um mehrere Zeigegeräte (wie Stifte), die gleichzeitig mit dem Bildschirm interagieren, zu identifizieren.

Ein `persistentDeviceId` bleibt während der gesamten Browsersitzung bestehen. Um das Risiko von Fingerprinting/Tracking zu vermeiden, werden Zeigegeräten zu Beginn jeder Sitzung neue `persistentDeviceId`s zugewiesen.

Zeigereignisse, deren erzeugendes Gerät nicht identifiziert werden konnte, erhalten einen `persistentDeviceId`-Wert von `0`.

## Wert

Ein Integer oder `0`, wenn das Gerät, das das `PointerEvent` erzeugt, nicht identifiziert werden konnte.

> [!NOTE]
> Aufgrund von Einschränkungen der Hardware von Digitalisierern und Zeigegeräten ist ein `persistentDeviceId` möglicherweise nicht für alle Zeigereignisse verfügbar, insbesondere bei älterer Hardware. Beispielsweise könnte das Zeigegerät seine Hardware-ID nicht rechtzeitig an den Digitalisierer melden, damit `pointerdown` einen `persistentDeviceId` erhält: Es könnte zunächst `0` sein und sich für spätere Ereignisse im Vorgang zu einem gültigen Wert ändern.

## Beispiele

Angenommen, der folgende HTML-Code ist gegeben:

```html
<canvas id="inking-surface" width="1280" height="720"></canvas>
```

Der folgende JavaScript-Code weist unterschiedlichen Zeigern, die mit einer Leinwand interagieren, unterschiedliche Farbzuweisungen zu:

```js
const colorBlue = 0;
const colorGreen = 1;
const colorYellow = 2;
const colors = [colorBlue, colorGreen, colorYellow];

const pointerToColorMap = new Map();
const colorAssignmentIndex = 0;

const canvas = document.querySelector("#inking-surface");

// Hören Sie auf ein pointerdown-Ereignis und ordnen Sie den persistentDeviceId eine Farbe zu,
// wenn sie existiert und noch nicht zugeordnet ist
canvas.addEventListener("pointerdown", (e) => {
  if (e.persistentDeviceId && !pointerToColorMap.has(e.persistentDeviceId)) {
    pointerToColorMap.set(e.persistentDeviceId, colors[colorAssignmentIndex]);

    // Erhöhen Sie den Farbzuweisungsindex und durchlaufen Sie ihn bei Bedarf erneut
    colorAssignmentIndex = (colorAssignmentIndex + 1) % colors.length;
  }
});

// Hören Sie auf ein `pointermove` und erhalten Sie die diesem Zeiger zugewiesene Farbe,
// wenn persistentDeviceId existiert und der Zeiger farbzugeordnet wurde
canvas.addEventListener("pointermove", (e) => {
  if (e.persistentDeviceId && pointerToColorMap.has(e.persistentDeviceId)) {
    const pointerColor = pointerToColorMap.get(e.persistentDeviceId);
    // Führen Sie einige Zeichenarbeiten auf dem <canvas> durch
  }
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
