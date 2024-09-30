---
title: "XRViewerPose: views-Eigenschaft"
short-title: views
slug: Web/API/XRViewerPose/views
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Eigenschaft **`views`** gibt ein Array zurück, das jedes [`XRView`](/de/docs/Web/API/XRView) enthält, das gerendert werden muss, um die Szene vollständig aus der durch die Viewer-Pose definierten Perspektive darzustellen. Bei monokularen Geräten enthält dieses Array eine einzige Ansicht.

> [!WARNING]
> Es gibt keine Garantie dafür, dass die Anzahl der Ansichten während der Lebensdauer einer [`XRSession`](/de/docs/Web/API/XRSession) konstant bleibt. Für jedes Frame sollten Sie immer die aktuelle Länge dieses Arrays verwenden, anstatt den Wert zwischenzuspeichern.

Stereoskopische Ansichten erfordern zwei Ansichten, um korrekt gerendert zu werden, wobei die Ansicht für das linke Auge den [`eye`](/de/docs/Web/API/XRView/eye)-Wert `left` und die Ansicht für das rechte Auge den Wert `right` hat.

## Wert

Ein Array von [`XRView`](/de/docs/Web/API/XRView)-Objekten, eines für jede verfügbare Ansicht, die Teil der Szene für die aktuelle Viewer-Pose ist. Die Länge dieses Arrays kann sich potenziell über die Lebensdauer der [`XRSession`](/de/docs/Web/API/XRSession) ändern (zum Beispiel, wenn der Benutzer den Stereo-Modus auf seinem XR-Ausgabegerät aktiviert oder deaktiviert).

## Beispiele

Siehe [`XRViewerPose`](/de/docs/Web/API/XRViewerPose#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
