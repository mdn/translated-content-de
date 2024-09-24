---
title: XRAnchor
slug: Web/API/XRAnchor
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Das **`XRAnchor`**-Interface erstellt Anker, die eine Pose verfolgen, die relativ zur realen Welt fest bleibt. Mit Ankern können Sie Posen in der Welt angeben, die aktualisiert werden müssen, um das sich entwickelnde Verständnis der Welt korrekt widerzuspiegeln, sodass die Posen mit derselben Stelle in der physischen Welt übereinstimmen. Das hilft, die Illusion zu schaffen, dass die platzierten Objekte wirklich in der Umgebung des Benutzers vorhanden sind.

## Instanz-Eigenschaften

- {{domxref("XRAnchor.anchorSpace")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRSpace")}}-Objekt zurück, um den Anker relativ zu anderen `XRSpace`-Objekten zu lokalisieren.

## Instanz-Methoden

- {{domxref("XRAnchor.delete()")}} {{Experimental_Inline}}
  - : Entfernt den Anker.

## Beispiele

### Anfordern einer Sitzung mit aktivierten Ankern

```js
navigator.xr.requestSession("immersive-ar", {
  requireFeatures: ["anchors"],
});
```

### Hinzufügen von Ankern

Sie können {{domxref("XRFrame.createAnchor()")}} verwenden, um einen Anker zu erstellen.

```js
frame.createAnchor(anchorPose, referenceSpace).then(
  (anchor) => {
    // Arbeiten Sie mit dem Anker (Weisen Sie Objekte zu, die relativ zu diesem Anker sein werden)
  },
  (error) => {
    console.error(`Could not create anchor: ${error}`);
  },
);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("XRAnchorSet")}}
- {{domxref("XRFrame.createAnchor()")}}
- {{domxref("XRFrame.trackedAnchors")}}
- {{domxref("XRHitTestResult.createAnchor()")}}
