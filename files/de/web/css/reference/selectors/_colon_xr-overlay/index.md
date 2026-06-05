---
title: "`:xr-overlay` CSS-Pseudoklasse"
short-title: :xr-overlay
slug: Web/CSS/Reference/Selectors/:xr-overlay
l10n:
  sourceCommit: f18c76e518179f2facc688464c5d382bf5a9b536
---

{{SeeCompatTable}}

Die **`:xr-overlay`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), definiert im Modul [WebXR DOM-Overlays](/de/docs/Web/CSS/Guides/WebXR_DOM_overlays), stimmt mit dem DOM-Overlay-Element überein, wenn eine Webseite in einer immersiven AR- oder VR-Umgebung betrachtet wird.

## Syntax

```css
:xr-overlay {
  /* ... */
}
```

## Beschreibung

Die `:xr-overlay`-Pseudoklasse stimmt mit dem Overlay-Element während der Dauer einer immersiven Sitzung überein, die ein DOM-Overlay verwendet.

Das Overlay-Element ist eine [backdrop root](/de/docs/Web/CSS/Reference/Properties/backdrop-filter#backdrop_root). Jegliche {{cssxref("backdrop-filter")}}-Effekte auf das DOM-Overlay-Element oder dessen Nachkommen verändern nicht das AR-Kamera-Bild (falls zutreffend) oder den gerenderten Inhalt, der zur immersiven Sitzung im [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) gezeichnet wird.

Das Overlay-Element selbst ist ein [stapelbarer Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) aufgrund seiner festen {{cssxref("position")}}. Die stapelbaren Kontexte für Vorfahren des Overlay-Elements, falls vorhanden, werden nicht auf das Display der immersiven Sitzung gemalt.

> [!NOTE]
> In einem Multi-Display-System können die stapelbaren Kontexte für Vorfahren oder Geschwisterbäume des Overlay-Elements auf separaten Displays angezeigt werden.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel definieren wir das Overlay als halbtransparentes Schwarz, wodurch der Inhalt hinter dem Overlay teilweise sichtbar wird. Um genügend Kontrast zwischen Inhalt und Hintergrund sicherzustellen, setzen wir die {{cssxref("color")}} auf `white`.

```css
:xr-overlay {
  background-color: rgb(0 0 0 / 0.5);
  color: white;
}
```

### Inhalt eines Overlays anvisieren

In diesem Beispiel verwenden wir den `:xr-overlay`-Selektor, um die {{htmlelement("button")}}-Elemente innerhalb eines XR DOM-Overlays zu stylen.

```css
:xr-overlay button {
  background-color: white;
  color: black;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef(":modal")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":picture-in-picture")}}
- [CSS-Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [WebXR DOM-Overlays](/de/docs/Web/CSS/Guides/WebXR_DOM_overlays) Modul
- [Grundlagen der WebXR-Geräte-API](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [`XRSession.domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState)
