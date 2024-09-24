---
title: XRSubImage
slug: Web/API/XRSubImage
l10n:
  sourceCommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{APIRef("WebXR Device API")}} {{secureContext_header}}{{SeeCompatTable}}

Die **`XRSubImage`**-Schnittstelle der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) gibt an, welchen Viewport der GPU-Textur für das Rendering verwendet werden soll.

## Schnittstellen basierend auf `XRSubImage`

Unten ist eine Liste von Schnittstellen, die auf der <code>XRSubImage</code>-Schnittstelle basieren.

- {{domxref("XRWebGLSubImage")}}: Wird beim Rendern von WebGL-Schichten verwendet.

## Eigenschaften von Instanzen

- {{domxref("XRSubImage.viewport")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der {{domxref("XRViewport")}}, der beim Rendern des Teilbildes verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRWebGLSubImage")}}
