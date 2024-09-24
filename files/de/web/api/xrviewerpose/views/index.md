---
title: "XRViewerPose: views-Eigenschaft"
short-title: views
slug: Web/API/XRViewerPose/views
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRViewerPose")}}-Eigenschaft **`views`** gibt ein Array zurück, das jede {{domxref("XRView")}} enthält, die gerendert werden muss, um die Szene vollständig aus dem durch die Betrachterpose definierten Standpunkt darzustellen. Für monokulare Geräte enthält dieses Array eine einzelne Ansicht.

> [!WARNING]
> Es gibt keine Garantie dafür, dass die Anzahl der Ansichten über die Lebensdauer einer {{domxref("XRSession")}} konstant bleibt. Für jeden Frame sollten Sie stets die aktuelle Länge dieses Arrays verwenden, anstatt den Wert zwischenzuspeichern.

Stereoansichten erfordern zwei Ansichten, um korrekt gerendert zu werden, wobei die Ansicht des linken Auges ihre {{domxref("XRView.eye", "eye")}} auf den String `left` gesetzt hat und die Ansicht des rechten Auges den Wert `right`.

## Wert

Ein Array von {{domxref("XRView")}}-Objekten, eines für jede in der Szene für die aktuelle Betrachterpose verfügbare Ansicht. Die Länge dieses Arrays kann über die Lebensdauer der {{domxref("XRSession")}} variieren (zum Beispiel, wenn der Betrachter den Stereomodus auf seinem XR-Ausgabegerät aktiviert oder deaktiviert).

## Beispiele

Siehe [`XRViewerPose`](/de/docs/Web/API/XRViewerPose#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Bewegung, Orientierung und Bewegung](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion)
