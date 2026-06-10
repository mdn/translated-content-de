---
title: WebXR-DOM-Overlays
slug: Web/CSS/Guides/WebXR_DOM_overlays
l10n:
  sourceCommit: 52a247932646cc4cb4b3a9bb50d7bd66d1fdc713
---

Das **WebXR-DOM-Overlays**-Modul, eine immersive Web-Spezifikation, erweitert die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API), um HTML-Inhalte — wie Text und Bedienelemente — während einer immersiven Virtual-Reality- (VR) oder Augmented-Reality- (AR) Sitzung anzuzeigen.

In einer typischen WebXR-Sitzung wird der Inhalt auf eine WebGL-Leinwand gerendert, die auf den Echtzeit-Kamerastream (in AR) überlagert oder als vollständig immersives Ansichtsbild (in VR) angezeigt wird, wobei das Gerät die Position und Ausrichtung des Nutzers verfolgt.
Das DOM-Overlay rendert ein einzelnes DOM-Element und dessen Nachkommen als 2D-Rechteck mit transparentem Hintergrund über dieser Ansicht und ermöglicht es, interaktive, stilisierbare Elemente wie Menüs und Dialoge innerhalb der immersiven Erfahrung erscheinen zu lassen.

Die {{cssxref(":xr-overlay")}}-Pseudoklasse entspricht dem DOM-Overlay-Element, wenn eine Webseite in einer immersiven AR- oder VR-Umgebung betrachtet wird und ermöglicht es, dieses Element entsprechend seinem zugrundeliegenden Inhalt zu stylen.

## Referenz

### Pseudoklassen

- {{cssxref(":xr-overlay")}}

### Ereignisse

- [`Element`](/de/docs/Web/API/Element)-Ereignisse
  - [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)

### Schnittstellen

- [`XRSession`](/de/docs/Web/API/XRSession)
  - [`domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState)-Eigenschaft

## Leitfäden

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
  - : Einführung in die Grundlagen der WebXR-Device-API.

## Verwandte Konzepte

- [CSS-Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - {{CSSxRef(":modal")}}
  - {{CSSxRef(":fullscreen")}}
  - {{CSSxRef(":picture-in-picture")}}

- [WebXR-Device-API](/de/docs/Web/API/WebXR_Device_API)
  - [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [CSSOM-View-Modul](/de/docs/Web/CSS/Guides/CSSOM_view)
- [CSSOM-View-API](/de/docs/Web/API/CSSOM_view_API)
