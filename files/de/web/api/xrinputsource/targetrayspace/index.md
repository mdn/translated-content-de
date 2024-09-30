---
title: "XRInputSource: targetRaySpace-Eigenschaft"
short-title: targetRaySpace
slug: Web/API/XRInputSource/targetRaySpace
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft **`targetRaySpace`** gibt ein [`XRSpace`](/de/docs/Web/API/XRSpace) (typischerweise ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)) zurück, das die Position und Orientierung des Zielstrahls im virtuellen Raum darstellt. Sein nativer Ursprung verfolgt die Position des Ursprungspunktes des Zielstrahls, und seine Orientierung zeigt die Ausrichtung des Controllers an. Diese Werte, interpretiert im Kontext des `targetRayMode` der Eingabequelle, können verwendet werden, um das Gerät vollständig als Eingabequelle zu interpretieren.

Um ein `XRSpace` zu erhalten, das die Position und Orientierung des Eingabegeräts im virtuellen Raum repräsentiert, verwenden Sie die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt – typischerweise ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) – welches die Position und Orientierung des Zielstrahls des Eingabegeräts im virtuellen Raum darstellt.

Der native Ursprung des zurückgegebenen `XRSpace` befindet sich an dem Punkt, von dem der Zielstrahl ausgesendet wird, und die Orientierung des Raums gibt die Richtung an, in die der Zielstrahl zeigt.

## Verwendungshinweise

Alle Eingabequellen – unabhängig von ihrem [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) – haben einen gültigen `targetRaySpace`. Die genaue Bedeutung dieses Raumes variiert jedoch je nach Modus:

- Bei jedem Blick-Eingabegerät (`targetRayMode`-Wert von `gaze`) wird derselbe [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt als ihr Zielstrahlraum geteilt, da der Blick-Eingang vom Kopf des Betrachters kommt. Dieser gemeinsame Raum repräsentiert denselben Ort wie der Raum, der von der [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) zurückgegeben wird, wird jedoch als separates Objekt beibehalten, um zukünftige Erweiterungen der API zu ermöglichen.
- Der von verfolgten Zeigereingaben (`targetRayMode` von `tracked-pointer`) gemeldete Zielstrahlraum basiert tatsächlich auf der tatsächlichen räumlichen Position und Orientierung des Eingabegeräts.

Um die Position und Orientierung des Zielstrahls beim Rendern eines Frames zu bestimmen, übergeben Sie ihn an die [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose), und verwenden Sie dann das zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose)-Objekt und dessen [`transform`](/de/docs/Web/API/XRPose/transform), um die räumlichen Informationen zu sammeln, die Sie benötigen.

## Beispiele

Dieser Codeausschnitt zeigt einen Teil einer Funktion, die einmal pro Frame aufgerufen wird. Er sucht nach Eingaben, die einen nicht-`null` `targetRaySpace` haben. Eingaben, die einen Wert für diese Eigenschaft haben, repräsentieren Eingaben, die einen Zielstrahl vom Benutzer aus nach außen projizieren.

Für jede solche Eingabe sucht dieses Beispiel nach Eingaben, deren [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) `tracked-pointer` ist, was anzeigt, dass die Eingabe tatsächlich ein Zielgerät darstellen soll und nicht ein Betrachtungsgerät, Bildschirmtipp oder Mausklick. Für verfolgte Zeigegeräte wird eine Funktion `myRenderTargetRayAsBeam()` aufgerufen, um einen Strahl von der virtuellen Position des Eingabegeräts in die Richtung zu rendern, in die es zeigt.

Der Code sollte weiterhin Aufgaben wie das Zeichnen von Controllern oder von Objekten, die die Position der Hände des Benutzers im virtuellen Raum repräsentieren, sowie alle anderen eingabebezogenen Aufgaben ausführen.

```js
function updateInputSources(session, frame, refSpace) {
  for (const source of session.getInputSources()) {
    const targetRayPose = frame.getPose(inputSource.targetRaySpace, refSpace);

    if (targetRayPose) {
      if (source.targetRayMode === "tracked-pointer") {
        myRenderTargetRayAsBeam(targetRayPose);
      }
    }

    // …
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
- [Verwendung von Gamepads in WebXR-Anwendungen](/de/docs/Web/API/WebXR_Device_API/Gamepads)
