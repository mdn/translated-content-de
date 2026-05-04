---
title: "`:xr-overlay` CSS-Pseudoklasse"
short-title: :xr-overlay
slug: Web/CSS/Reference/Selectors/:xr-overlay
l10n:
  sourceCommit: c53bfa01f3bf436d486f4032c16f592855a2af2c
---

{{SeeCompatTable}}

Die **`:xr-overlay`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) stimmt mit dem DOM-Overlay-Element überein, wenn eine Webseite in einer immersiven AR- oder VR-Umgebung betrachtet wird.

## Syntax

```css
:xr-overlay {
  /* ... */
}
```

## Beschreibung

Die `:xr-overlay` Pseudoklasse stimmt während einer immersiven Sitzung mit dem Overlay-Element überein, das ein DOM-Overlay verwendet.

Das Overlay-Element ist eine Hintergrundwurzel. Jegliche {{cssxref("backdrop-filter")}} Effekte auf dem DOM-Overlay-Element oder dessen Nachkommen verändern nicht das AR-Kamerabild (falls zutreffend) oder die dargestellten Inhalte, die auf das [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) der immersiven Sitzung gezeichnet werden.

Das Overlay-Element selbst ist ein [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) aufgrund seiner festen {{cssxref("position")}}. Die Stacking-Kontexte für Vorfahren des Overlay-Elements, falls vorhanden, werden nicht auf das Display der immersiven Sitzung gemalt.

> [!NOTE]
> Auf einem System mit mehreren Displays können die Stacking-Kontexte für Vorfahren oder Geschwisterbäume des Overlay-Elements auf separaten Displays angezeigt werden.

## Beispiele

### Grundlegende Nutzung

In diesem Beispiel definieren wir das Overlay als halbtransparent schwarz, was es ermöglicht, dass Inhalte hinter dem Overlay teilweise sichtbar sind. Um genügend Kontrast zwischen Inhalt und Hintergrund sicherzustellen, setzen wir die {{cssxref("color")}} auf `white`.

```css
:xr-overlay {
  background-color: rgb(0 0 0 / 0.5);
  color: white;
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
- [WebXR-Geräte-API-Grundlagen](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [`XRSession.domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState)
