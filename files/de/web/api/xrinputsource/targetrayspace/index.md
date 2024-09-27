---
title: "XRInputSource: targetRaySpace-Eigenschaft"
short-title: targetRaySpace
slug: Web/API/XRInputSource/targetRaySpace
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource) Eigenschaft
**`targetRaySpace`** gibt ein [`XRSpace`](/de/docs/Web/API/XRSpace) zurück
(typischerweise ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)), welches die Position und
Orientierung des Zielstrahls im virtuellen Raum darstellt. Sein nativer Ursprung verfolgt
die Position des Ursprungs des Zielstrahls, und seine Orientierung zeigt die
Ausrichtung des Controllers an. Diese Werte, im Kontext des
[`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) der Eingabequelle interpretiert, können
verwendet werden, um das Gerät vollständig als Eingabequelle zu interpretieren.

Um ein `XRSpace` zu erhalten, das die Position und
Orientierung des Eingabegeräts im virtuellen Raum darstellt, verwenden Sie die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace) Eigenschaft.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace) Objekt - typischerweise ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) oder
[`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace) - welches die Position und Orientierung des
Zielstrahls des Eingabegeräts im virtuellen Raum darstellt.

Der native Ursprung des zurückgegebenen `XRSpace` befindet sich an dem Punkt, von
dem aus der Zielstrahl emittiert wird, und die Orientierung des Raums zeigt die
Richtung, in die der Zielstrahl zeigt.

## Verwendungshinweise

Alle Eingabequellen - unabhängig von ihrem [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) - haben einen gültigen `targetRaySpace`.
Die genaue Bedeutung dieses Raums variiert jedoch abhängig vom Modus:

- Jeder Blick-Eingabe (`targetRayMode` Wert von `gaze`), teilt das
  gleiche [`XRSpace`](/de/docs/Web/API/XRSpace) Objekt als ihren Zielstrahlraum, da die Blickrichtung des
  Nutzers vom Kopf kommt. Dieser gemeinsame Raum repräsentiert denselben Ort wie der
  Raum, der von der [`XRSession`](/de/docs/Web/API/XRSession) Methode
  [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) zurückgegeben wird, wird
  jedoch als separates Objekt gehalten, um zukünftige Erweiterungen der API zu ermöglichen.
- Der von verfolgten Zeigereingaben gemeldete Zielstrahlraum (`targetRayMode`
  von `tracked-pointer`) basiert tatsächlich auf der wahren räumlichen Position und
  Orientierung des Eingabegeräts.

Um die Position und Orientierung des Zielstrahls während der Rahmendarstellung zu bestimmen,
geben Sie ihn in die [`XRFrame`](/de/docs/Web/API/XRFrame) Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) ein,
und verwenden Sie das zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose) Objekt's
[`transform`](/de/docs/Web/API/XRPose/transform), um die benötigten räumlichen Informationen zu sammeln.

## Beispiele

Dieses Codefragment zeigt einen Teil einer Funktion, die einmal pro Frame aufgerufen werden soll. Es sucht nach Eingaben, die ein nicht-`null` `targetRaySpace` haben. Eingaben, die einen Wert für diese Eigenschaft haben, repräsentieren Eingaben, die einen Zielstrahl vom Benutzer aus projizieren.

Für jede solche Eingabe sucht dieses Beispiel nach Eingaben, deren [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) `tracked-pointer` ist, was darauf hinweist, dass die Eingabe tatsächlich dazu bestimmt ist, ein Zielgerät darzustellen, anstatt ein Blickgerät, einen Bildschirmtipp oder einen Mausklick. Für verfolgte Zeiger wird eine Funktion `myRenderTargetRayAsBeam()` aufgerufen, um einen Strahl von der virtuellen Position des Eingabegeräts aus in die Richtung zu rendern, in die es zeigt.

Der Code sollte weiterhin Aufgaben wie das Zeichnen von Controllern oder Objekten, die die Positionen der Hände des Benutzers im virtuellen Raum darstellen, sowie alle anderen eingabebezogenen Aufgaben ausführen.

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
