---
title: :xr-overlay
slug: Web/CSS/Reference/Selectors/:xr-overlay
l10n:
  sourceCommit: a75edf682e5e346b4f97582db6cbccaae800ef73
---

Die **`:xr-overlay`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) entspricht dem DOM-Overlay-Element, wenn eine Webseite in einer immersiven AR- oder VR-Umgebung betrachtet wird.

## Syntax

```css
:xr-overlay {
  /* ... */
}
```

## Beschreibung

Die `:xr-overlay` Pseudo-Klasse entspricht dem Overlay-Element während einer immersiven Sitzung mit einem DOM-Overlay.

Das Overlay-Element ist eine Wurzel des Hintergrundbereichs. Jegliche {{cssxref("backdrop-filter")}} Effekte auf dem DOM-Overlay-Element oder seinen Nachkommen verändern nicht das AR-Kamerabild (falls zutreffend) oder den gerenderten Inhalt, der in der immersiven Sitzung auf die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) gezeichnet wird.

Das Overlay-Element selbst ist ein [Stapelkontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context) aufgrund seiner festen {{cssxref("position")}}. Die Stapelkontexte für Vorfahren des Overlay-Elements, falls vorhanden, werden nicht auf das Display der immersiven Sitzung gezeichnet.

> [!NOTE]
> Auf einem System mit mehreren Displays können die Stapelkontexte für Vorfahren oder Geschwisterbäume des Overlay-Elements auf separaten Displays angezeigt werden.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel definieren wir das Overlay als halbtransparentes Schwarz, was ermöglicht, dass der Inhalt hinter dem Overlay teilweise sichtbar ist. Um ausreichend Kontrast zwischen dem Inhalt und seinem Hintergrund sicherzustellen, setzen wir die {{cssxref("color")}} auf `weiß`.

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
- [CSS-Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [WebXR-Geräte-API-Grundlagen](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [`XRSession.domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState)
