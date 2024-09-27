---
title: "XRViewerPose: views-Eigenschaft"
short-title: views
slug: Web/API/XRViewerPose/views
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Eigenschaft **`views`**
gibt ein Array zurück, das alle [`XRView`](/de/docs/Web/API/XRView) enthält, die gerendert werden müssen, um die Szene vollständig aus der vom Viewer-Pose definierten Perspektive darzustellen. Bei monokularen Geräten enthält dieses Array nur eine Ansicht.

> [!WARNING]
> Es gibt keine Garantie, dass die Anzahl der Ansichten über die Lebensdauer einer [`XRSession`](/de/docs/Web/API/XRSession) konstant bleibt. Für jeden Frame sollten Sie immer die aktuelle Länge dieses Arrays verwenden, anstatt den Wert zwischenzuspeichern.

Stereoansichten erfordern zwei Ansichten, um korrekt gerendert zu werden, wobei die Ansicht des linken Auges den [`eye`](/de/docs/Web/API/XRView/eye)-Wert `left` und die Ansicht des rechten Auges den Wert `right` hat.

## Wert

Ein Array von [`XRView`](/de/docs/Web/API/XRView)-Objekten, eines für jede verfügbare Ansicht als Teil der Szene für die aktuelle Viewer-Pose. Die Länge dieses Arrays kann sich potenziell über die Lebensdauer der [`XRSession`](/de/docs/Web/API/XRSession) ändern (zum Beispiel, wenn der Benutzer den Stereo-Modus auf seinem XR-Ausgabegerät aktiviert oder deaktiviert).

## Beispiele

Siehe [`XRViewerPose`](/de/docs/Web/API/XRViewerPose#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
