---
title: XRMediaBinding
slug: Web/API/XRMediaBinding
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRMediaBinding`** Interface wird verwendet, um Ebenen zu erstellen, die den Inhalt eines [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) anzeigen.

> [!NOTE]
> Nur die Videoframes werden in der Ebene angezeigt. Videosteuerungen müssen separat implementiert und in einer anderen Ebene gezeichnet werden.

## Konstruktor

- [`XRMediaBinding()`](/de/docs/Web/API/XRMediaBinding/XRMediaBinding) {{Experimental_Inline}}
  - : Erstellt ein neues `XRMediaBinding` Objekt für die angegebene [`XRSession`](/de/docs/Web/API/XRSession).

## Instanzmethoden

- [`XRMediaBinding.createCylinderLayer()`](/de/docs/Web/API/XRMediaBinding/createCylinderLayer) {{Experimental_Inline}}
  - : Gibt ein [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer) Objekt zurück, das an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gebunden ist.
- [`XRMediaBinding.createEquirectLayer()`](/de/docs/Web/API/XRMediaBinding/createEquirectLayer) {{Experimental_Inline}}
  - : Gibt ein [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer) Objekt zurück, das an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gebunden ist.
- [`XRMediaBinding.createQuadLayer()`](/de/docs/Web/API/XRMediaBinding/createQuadLayer) {{Experimental_Inline}}
  - : Gibt ein [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer) Objekt zurück, das an ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) gebunden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer), [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer), [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)
