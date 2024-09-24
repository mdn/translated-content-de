---
title: XRMediaBinding
slug: Web/API/XRMediaBinding
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Das **`XRMediaBinding`** Interface wird verwendet, um Layer zu erstellen, die den Inhalt eines {{domxref("HTMLVideoElement")}} anzeigen.

> [!NOTE]
> Nur die Video-Frames werden im Layer angezeigt. Videosteuerungen müssen separat implementiert und in einem anderen Layer gezeichnet werden.

## Konstruktor

- {{domxref("XRMediaBinding.XRMediaBinding", "XRMediaBinding()")}} {{Experimental_Inline}}
  - : Erstellt ein neues `XRMediaBinding` Objekt für die angegebene {{domxref("XRSession")}}.

## Instanzmethoden

- {{domxref("XRMediaBinding.createCylinderLayer()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRCylinderLayer")}} Objekt zurück, das an ein {{domxref("HTMLVideoElement")}} gebunden ist.
- {{domxref("XRMediaBinding.createEquirectLayer()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XREquirectLayer")}} Objekt zurück, das an ein {{domxref("HTMLVideoElement")}} gebunden ist.
- {{domxref("XRMediaBinding.createQuadLayer()")}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("XRQuadLayer")}} Objekt zurück, das an ein {{domxref("HTMLVideoElement")}} gebunden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLVideoElement")}}
- {{domxref("XRCylinderLayer")}}, {{domxref("XREquirectLayer")}}, {{domxref("XRQuadLayer")}}
