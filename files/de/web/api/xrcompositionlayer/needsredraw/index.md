---
title: "XRCompositionLayer: needsRedraw-Eigenschaft"
short-title: needsRedraw
slug: Web/API/XRCompositionLayer/needsRedraw
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`needsRedraw`**-Eigenschaft des {{domxref("XRCompositionLayer")}}-Interfaces ist ein boolescher Wert, der signalisiert, dass die Ebene im nächsten Frame neu gerendert werden sollte.

Der Bedarf für das Neuzeichnen kann auftreten, wenn die zugrunde liegenden Ressourcen einer Ebene verloren gehen, weil Texturen vom Kompositor im Hintergrund freigegeben wurden. Dies kann passieren, wenn das Gerät in den Ruhezustand wechselt oder wenn der Browser den Kontext wechselt (zu einem Betriebssystemdialog oder Ähnlichem) und dann zurückkehrt.

Das Neuzeichnen ist kein Problem für Ebenen, die mit jedem Frame aktualisiert werden. Jedoch für Ebenen, die nur selten aktualisiert werden, oder für statische Ebenen (wo Sie nur einmal nach der Erstellung oder nach einem `redraw`-Ereignis zeichnen können), könnte der Inhalt der Ebene verloren gehen und muss neu gezeichnet werden. Wenn die Ressourcen der Ebene verloren gehen, wird die `needsRedraw`-Eigenschaft `true` sein und ein `redraw`-Ereignis wird auf der Ebene ausgelöst.

## Wert

Ein boolescher Wert. `true` zeigt an, dass ein Neurendern im nächsten Frame erforderlich ist, `false` bedeutet, dass kein Neurendern erforderlich ist.

## Beispiele

### Ebenen neu zeichnen

Verwenden Sie die `needsRedraw`-Eigenschaft, um zu überprüfen, ob eine Ebene neu gezeichnet werden muss und zeichnen Sie sie dann neu.

```js
function onXRFrame(time, frame) {
  // …

  if (quadLayer.needsRedraw) {
    // redraw the layer
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XREquirectLayer")}}: {{domxref("XREquirectLayer.redraw_event", "redraw")}}-Ereignis
- {{domxref("XRCubeLayer")}}: {{domxref("XRCubeLayer.redraw_event", "redraw")}}-Ereignis
- {{domxref("XRCylinderLayer")}}: {{domxref("XRCylinderLayer.redraw_event", "redraw")}}-Ereignis
- {{domxref("XRQuadLayer")}}: {{domxref("XRQuadLayer.redraw_event", "redraw")}}-Ereignis
