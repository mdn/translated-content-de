---
title: "XRInputSource: targetRaySpace Eigenschaft"
short-title: targetRaySpace
slug: Web/API/XRInputSource/targetRaySpace
l10n:
  sourceCommit: 46a755ea71206e4512e3639596e6f68f4e71f041
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft **`targetRaySpace`** gibt ein [`XRSpace`](/de/docs/Web/API/XRSpace) zurück (typischerweise ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace)), das die Position und Orientierung des Ziellstrahls im virtuellen Raum darstellt. Der native Ursprung verfolgt die Position des Ursprungspunkts des Ziellstrahls, und seine Orientierung gibt die Ausrichtung des Controller-Geräts selbst an. Diese Werte, die im Kontext des [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) der Eingabequelle interpretiert werden, können verwendet werden, um das Gerät vollständig als Eingabequelle zu interpretieren.

Um ein `XRSpace` zu erhalten, das die Position und Orientierung des Eingabekontrollers im virtuellen Raum darstellt, verwenden Sie die [`gripSpace`](/de/docs/Web/API/XRInputSource/gripSpace)-Eigenschaft.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt—typischerweise ein [`XRReferenceSpace`](/de/docs/Web/API/XRReferenceSpace) oder [`XRBoundedReferenceSpace`](/de/docs/Web/API/XRBoundedReferenceSpace)—, das die Position und Orientierung des Ziellstrahls des Eingabekontrollers im virtuellen Raum darstellt.

Der native Ursprung des zurückgegebenen `XRSpace` befindet sich an dem Punkt, von dem der Ziellstrahl ausgeht, und die Orientierung des Raums gibt die Richtung an, in die der Ziellstrahl zeigt.

## Nutzungshinweise

Alle Eingabequellen—unabhängig von ihrem [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode)—haben einen gültigen `targetRaySpace`. Die genaue Bedeutung dieses Raums variiert jedoch je nach Modus:

- Jeder Gaze-Input (`targetRayMode`-Wert von `gaze`) teilt dasselbe [`XRSpace`](/de/docs/Web/API/XRSpace)-Objekt als ihren Ziellstrahl-Raum, da der Gaze-Input vom Kopf des Betrachters kommt. Dieser geteilte Raum repräsentiert denselben Ort wie der Raum, der von der [`XRSession`](/de/docs/Web/API/XRSession)-Methode [`requestReferenceSpace()`](/de/docs/Web/API/XRSession/requestReferenceSpace) zurückgegeben wird, wird jedoch als anderes Objekt beibehalten, um zukünftige Verbesserungen der API zu ermöglichen.
- Der von verfolgten Zeigervorrichtungen gemeldete Ziellstrahl-Raum (`targetRayMode` von `tracked-pointer`) basiert tatsächlich auf der wahren räumlichen Position und Orientierung des Eingabegeräts.

Um die Position und Orientierung des Ziellstrahls während der Darstellung eines Rahmens zu bestimmen, übergeben Sie es in die [`XRFrame`](/de/docs/Web/API/XRFrame)-Methode [`getPose()`](/de/docs/Web/API/XRFrame/getPose) und verwenden Sie das zurückgegebene [`XRPose`](/de/docs/Web/API/XRPose)-Objekt[`transform`](/de/docs/Web/API/XRPose/transform), um die benötigten räumlichen Informationen zu erhalten.

## Beispiele

Dieser Codeausschnitt zeigt einen Teil einer Funktion, die einmal pro Frame aufgerufen werden soll. Er sucht nach Eingaben, die einen nicht-`null` `targetRaySpace` haben. Eingaben, die für diese Eigenschaft einen Wert haben, repräsentieren Eingaben, die einen Ziellstrahl vom Benutzer aus projektiert.

Für jede solche Eingabe sucht dieses Beispiel nach Eingaben, deren [`targetRayMode`](/de/docs/Web/API/XRInputSource/targetRayMode) `tracked-pointer` ist, was anzeigt, dass die Eingabe tatsächlich dazu gedacht ist, ein Zielgerät darzustellen, anstatt ein Blickgerät, Bildschirmtippen oder Mausklick. Für verfolgte Zeiger wird eine Funktion `myRenderTargetRayAsBeam()` aufgerufen, um einen Strahl von der virtuellen Position des Eingabekontrollers aus in die Richtung zu rendern, in die er zeigt.

Der Code sollte weiterhin Aufgaben wie das Zeichnen von Controllern oder anderen Objekten, die die Positionen der Hände des Benutzers im virtuellen Raum darstellen, sowie alle anderen eingabebezogenen Aufgaben ausführen.

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
