---
title: XRAnchor
slug: Web/API/XRAnchor
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`XRAnchor`**-Schnittstelle erstellt Anker, die die Pose verfolgen, die relativ zur realen Welt fixiert ist. Mit Ankern können Sie Posen in der Welt spezifizieren, die aktualisiert werden müssen, um das sich entwickelnde Verständnis der Welt korrekt widerzuspiegeln, sodass die Posen mit dem gleichen Ort in der physischen Welt ausgerichtet bleiben. Das hilft, die Illusion zu erzeugen, dass die platzierten Objekte wirklich in der Umgebung des Benutzers vorhanden sind.

## Instanzeigenschaften

- [`XRAnchor.anchorSpace`](/de/docs/Web/API/XRAnchor/anchorSpace) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt zurück, um den Anker relativ zu anderen `XRSpace`-Objekten zu lokalisieren.

## Instanzmethoden

- [`XRAnchor.delete()`](/de/docs/Web/API/XRAnchor/delete) {{Experimental_Inline}}
  - : Entfernt den Anker.

## Beispiele

### Eine Sitzung mit aktivierten Ankern anfordern

```js
navigator.xr.requestSession("immersive-ar", {
  requireFeatures: ["anchors"],
});
```

### Anker hinzufügen

Sie können [`XRFrame.createAnchor()`](/de/docs/Web/API/XRFrame/createAnchor) verwenden, um einen Anker zu erstellen.

```js
frame.createAnchor(anchorPose, referenceSpace).then(
  (anchor) => {
    // Do stuff with the anchor (assign objects that will be relative to this anchor)
  },
  (error) => {
    console.error(`Could not create anchor: ${error}`);
  },
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRAnchorSet`](/de/docs/Web/API/XRAnchorSet)
- [`XRFrame.createAnchor()`](/de/docs/Web/API/XRFrame/createAnchor)
- [`XRFrame.trackedAnchors`](/de/docs/Web/API/XRFrame/trackedAnchors)
- [`XRHitTestResult.createAnchor()`](/de/docs/Web/API/XRHitTestResult/createAnchor)
