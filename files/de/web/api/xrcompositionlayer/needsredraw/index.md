---
title: "XRCompositionLayer: needsRedraw-Eigenschaft"
short-title: needsRedraw
slug: Web/API/XRCompositionLayer/needsRedraw
l10n:
  sourceCommit: 6788d086c530ae04793a497d12863db3d8adf040
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`needsRedraw`**-Eigenschaft der [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)-Schnittstelle ist ein boolescher Wert, der signalisiert, dass die Ebene im nächsten Frame neu gerendert werden soll.

Das Bedürfnis nach Neuzeichnung kann auftreten, wenn die zugrunde liegenden Ressourcen einer Ebene verloren gehen, da Texturen möglicherweise im Hintergrund vom Kompositor freigegeben wurden. Dies könnte passieren, wenn das Gerät in den Schlafmodus geht oder wenn der Browser den Kontext wechselt (zu einem Betriebssystem-Dialog oder ähnlichem) und dann zurückkommt.

Das Neuzeichnen ist kein Problem für Ebenen, die mit jedem Frame aktualisiert werden. Für Ebenen, die selten aktualisiert werden, oder für statische Ebenen (bei denen Sie nur einmal nach der Erstellung oder nach einem `redraw`-Ereignis zeichnen können), könnten die Inhalte der Ebene verloren gehen und müssen neu gezeichnet werden. Wenn die Ressourcen der Ebene verloren gehen, wird die `needsRedraw`-Eigenschaft `true` und ein `redraw`-Ereignis wird auf der Ebene ausgelöst.

## Wert

Ein boolescher Wert. `true` zeigt an, dass im nächsten Frame ein Neurendering erforderlich ist, `false` zeigt an, dass kein Neurendering erforderlich ist.

## Beispiele

### Ebenen neu zeichnen

Verwenden Sie die `needsRedraw`-Eigenschaft, um zu überprüfen, ob eine Ebene neu gezeichnet werden muss, und zeichnen Sie sie dann neu.

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

- [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer): [`redraw`](/de/docs/Web/API/XREquirectLayer/redraw_event)-Ereignis
- [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer): [`redraw`](/de/docs/Web/API/XRCubeLayer/redraw_event)-Ereignis
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer): [`redraw`](/de/docs/Web/API/XRCylinderLayer/redraw_event)-Ereignis
- [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer): [`redraw`](/de/docs/Web/API/XRQuadLayer/redraw_event)-Ereignis
