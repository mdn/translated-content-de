---
title: WebXR DOM-Überlagerungen
slug: Web/CSS/Guides/WebXR_DOM_overlays
l10n:
  sourceCommit: f18c76e518179f2facc688464c5d382bf5a9b536
---

Das Modul **WebXR DOM-Überlagerungen**, eine immersive Web-Spezifikation, erweitert die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API), um HTML-Inhalte — wie Text und Steuerelemente — während einer immersiven Virtual-Reality- (VR) oder Augmented-Reality- (AR) Sitzung anzuzeigen.

In einer typischen WebXR-Sitzung werden Inhalte auf eine WebGL-Leinwand gerendert, die auf dem Echtzeit-Kamerabild (in AR) überlagert ist oder als vollständige immersive Ansicht (in VR) angezeigt wird, wobei das Gerät die Position und Orientierung des Benutzers verfolgt.
Die DOM-Überlagerung rendert ein einzelnes DOM-Element und seine Nachkommen als 2D-Rechteck mit transparentem Hintergrund über dieser Ansicht und ermöglicht somit das Erscheinen interaktiver, gestaltbarer Elemente wie Menüs und Dialoge innerhalb der immersiven Erfahrung.

Die Pseudo-Klasse {{cssxref(":xr-overlay")}} entspricht dem DOM-Überlagerungselement, wenn eine Webseite in einer immersiven AR- oder VR-Umgebung betrachtet wird, sodass es entsprechend seinem zugrunde liegenden Inhalt gestylt werden kann.

## Referenz

### Pseudo-Klassen

- {{cssxref(":xr-overlay")}}

### Events

- [`Element`](/de/docs/Web/API/Element)-Ereignisse
  - [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event)

### Schnittstellen

- [`XRSession`](/de/docs/Web/API/XRSession)
  - [`domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState)-Eigenschaft

## Leitfäden

- [Grundlagen von WebXR](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
  - : Einführung in die Grundlagen der WebXR Device API.

## Verwandte Konzepte

- [CSS-Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
  - {{CSSxRef(":modal")}}
  - {{CSSxRef(":fullscreen")}}
  - {{CSSxRef(":picture-in-picture")}}

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
  - [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Schnittstelle

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [CSSOM-View-Modul](/de/docs/Web/CSS/Guides/CSSOM_view)
- [CSSOM View API](/de/docs/Web/API/CSSOM_view_API)
