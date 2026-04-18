---
title: "`:xr-overlay` CSS Pseudo-Klasse"
short-title: :xr-overlay
slug: Web/CSS/Reference/Selectors/:xr-overlay
l10n:
  sourceCommit: 8bc4a2b996edcb9bae1769200bbc7b29ed5d7097
---

{{SeeCompatTable}}

Die **`:xr-overlay`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) entspricht dem DOM-Overlay-Element, wenn eine Webseite in einer immersiven AR- oder VR-Umgebung betrachtet wird.

## Syntax

```css
:xr-overlay {
  /* ... */
}
```

## Beschreibung

Die `:xr-overlay` Pseudo-Klasse entspricht dem Overlay-Element für die Dauer einer immersiven Sitzung, die ein DOM-Overlay verwendet.

Das Overlay-Element ist eine Kulissenwurzel. Jegliche {{cssxref("backdrop-filter")}} Effekte auf das DOM-Overlay-Element oder dessen Nachkommen ändern nicht das AR-Kamerabild (falls zutreffend) oder den gerenderten Inhalt, der zur immersiven Sitzungsschicht des [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) gezeichnet wird.

Das Overlay-Element selbst ist ein [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) aufgrund seiner festen {{cssxref("position")}}. Die Stacking-Kontexte für Vorfahren des Overlay-Elements, falls vorhanden, werden nicht auf das Display der immersiven Sitzung gezeichnet.

> [!NOTE]
> Auf einem System mit mehreren Displays können die Stacking-Kontexte für Vorfahren oder Geschwisterbäume des Overlay-Elements auf separaten Displays angezeigt werden.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel definieren wir das Overlay als halbdurchsichtiges Schwarz, wodurch der hinter dem Overlay befindliche Inhalt teilweise sichtbar wird. Um ausreichend Kontrast zwischen Inhalt und Hintergrund zu gewährleisten, setzen wir die {{cssxref("color")}} auf `white`.

```css
:xr-overlay {
  background-color: rgba(0 0 0 / 0.5);
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
- [WebXR Device API Grundlagen](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [`XRSession.domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState)
