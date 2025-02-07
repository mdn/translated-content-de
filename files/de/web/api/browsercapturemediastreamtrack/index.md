---
title: BrowserCaptureMediaStreamTrack
slug: Web/API/BrowserCaptureMediaStreamTrack
l10n:
  sourceCommit: d9879ec9fe29b627ea1bde790d981dd13d602794
---

{{APIRef("Screen Capture API")}}{{SeeCompatTable}}

Das **`BrowserCaptureMediaStreamTrack`**-Interface der [Screen Capture API](/de/docs/Web/API/Screen_Capture_API) repräsentiert eine einzelne Videospur. Es erweitert die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Klasse mit Methoden, um den Teil eines Self-Capture-Streams (zum Beispiel den Bildschirm oder ein Fenster eines Benutzers) zu begrenzen, der erfasst wird.

{{InheritanceDiagram}}

## Instanzmethoden

- [`clone()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/clone) {{Experimental_Inline}}
  - : Gibt eine unbeschnittene, unbeschränkte Kopie des ursprünglichen `BrowserCaptureMediaStreamTrack` zurück.
- [`cropTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/cropTo) {{Experimental_Inline}}
  - : Schneidet einen Self-Capture-Stream auf den Bereich zu, in dem ein bestimmtes DOM-Element gerendert wird.
- [`restrictTo()`](/de/docs/Web/API/BrowserCaptureMediaStreamTrack/restrictTo) {{Experimental_Inline}}
  - : Beschränkt einen Self-Capture-Stream auf ein bestimmtes DOM-Element.

## Beispiele

Siehe [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture) für Beispielcode im Kontext.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Capture API](/de/docs/Web/API/Screen_Capture_API)
- [Verwendung der Element Capture und Region Capture APIs](/de/docs/Web/API/Screen_Capture_API/Element_Region_Capture)
