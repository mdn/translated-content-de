---
title: "XRInputSource: Eigenschaft targetRaySpace"
short-title: targetRaySpace
slug: Web/API/XRInputSource/targetRaySpace
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`targetRaySpace`** des {{domxref("XRInputSource")}} gibt ein {{domxref("XRSpace")}} zurück (typischerweise ein {{domxref("XRReferenceSpace")}}), das die Position und Orientierung des Zielstrahls im virtuellen Raum darstellt. Der native Ursprung verfolgt die Position des Ursprungs des Zielstrahls, und seine Orientierung zeigt die Orientierung des Steuergeräts selbst an. Diese Werte, im Kontext des {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} der Eingabequelle interpretiert, können verwendet werden, um das Gerät vollständig als Eingabequelle zu interpretieren.

Um ein `XRSpace` zu erhalten, das die Position und Orientierung des Eingabesteuergeräts im virtuellen Raum darstellt, verwenden Sie die Eigenschaft {{domxref("XRInputSource.gripSpace", "gripSpace")}}.

## Wert

Ein {{domxref("XRSpace")}} Objekt—typischerweise ein {{domxref("XRReferenceSpace")}} oder {{domxref("XRBoundedReferenceSpace")}}—das die Position und Orientierung des Zielstrahls des Eingabesteuergeräts im virtuellen Raum darstellt.

Der native Ursprung des zurückgegebenen `XRSpace` befindet sich an dem Punkt, von dem der Zielstrahl ausgeht, und die Orientierung des Raums zeigt die Richtung an, in die der Zielstrahl zeigt.

## Verwendungshinweise

Alle Eingabequellen - unabhängig von ihrem {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} - haben einen gültigen `targetRaySpace`. Die genaue Bedeutung dieses Raums variiert jedoch je nach Modus:

- Jeder Blick-Eingang (`targetRayMode` Wert von `gaze`) teilt dasselbe {{domxref("XRSpace")}} Objekt als ihren Zielstrahlraum, da der Blick-Eingang vom Kopf des Betrachters ausgeht. Dieser gemeinsam genutzte Raum repräsentiert denselben Ort wie der Raum, der von der {{domxref("XRSession")}} Methode {{domxref("XRSession.requestReferenceSpace", "requestReferenceSpace()")}} zurückgegeben wird, wird jedoch als ein anderes Objekt aufrechterhalten, um zukünftige Erweiterungen der API zu ermöglichen.
- Der von erfassten Zeigereingaben gemeldete Zielstrahlraum (`targetRayMode` von `tracked-pointer`) basiert tatsächlich auf der tatsächlichen räumlichen Position und Orientierung des Eingabegeräts.

Um die Position und Orientierung des Zielstrahls während der Darstellung eines Rahmens zu bestimmen, geben Sie diesen in die {{domxref("XRFrame")}} Methode {{domxref("XRFrame.getPose", "getPose()")}} ein und verwenden Sie dann den zurückgegebenen {{domxref("XRPose")}} Objekt's {{domxref("XRPose.transform", "transform")}}, um die räumlichen Informationen zu sammeln, die Sie benötigen.

## Beispiele

Dieses Codefragment zeigt einen Teil einer Funktion, die in jedem Frame aufgerufen werden sollte. Es sucht nach Eingaben, die einen nicht-`null` `targetRaySpace` haben. Eingaben, die einen Wert für diese Eigenschaft haben, stellen Eingaben dar, die einen Zielstrahl vom Benutzer aus projizieren.

Für jede solche Eingabe sucht dieses Beispiel nach Eingaben, deren {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} `tracked-pointer` ist, was darauf hinweist, dass die Eingabe tatsächlich ein Zielgerät darstellt und nicht ein Blickgerät, Bildschirmtippen oder Mausklick. Für erfasste Zeiger wird eine Funktion `myRenderTargetRayAsBeam()` aufgerufen, um einen Strahl vom virtuellen Standort des Eingabesteuergeräts in die Richtung zu rendern, in die es zeigt.

Der Code sollte weiterhin Aufgaben wie das Zeichnen von Steuergeräten oder von Objekten, die die Positionen der Hände des Benutzers im virtuellen Raum repräsentieren, sowie andere eingabebezogene Aufgaben ausführen.

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
