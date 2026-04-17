---
title: "`:xr-overlay` CSS-Pseudoklasse"
short-title: :xr-overlay
slug: Web/CSS/Reference/Selectors/:xr-overlay
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:xr-overlay`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) stimmt mit dem DOM-Overlay-Element überein, wenn eine Webseite in einer immersiven AR- oder VR-Umgebung betrachtet wird.

## Syntax

```css
:xr-overlay {
  /* ... */
}
```

## Beschreibung

Die Pseudoklasse `:xr-overlay` stimmt mit dem Overlay-Element während einer immersiven Sitzung überein, bei der ein DOM-Overlay verwendet wird.

Das Overlay-Element ist eine Hintergrundwurzel. Jegliche {{cssxref("backdrop-filter")}}-Effekte auf das DOM-Overlay-Element oder seine Nachkommen ändern nicht das AR-Kamerabild (falls zutreffend) oder den gerenderten Inhalt, der zur immersiven Sitzung auf die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) gezeichnet wird.

Das Overlay-Element selbst ist aufgrund seiner festen {{cssxref("position")}} ein [Stacking-Kontext](/de/docs/Web/CSS/Guides/Positioned_layout/Stacking_context). Die Stacking-Kontexte für Vorfahren des Overlay-Elements, falls vorhanden, werden nicht auf das Display der immersiven Sitzung gemalt.

> [!NOTE]
> In einem System mit mehreren Displays können die Stacking-Kontexte für Vorfahren oder Geschwisterzweige des Overlay-Elements auf separaten Displays angezeigt werden.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel definieren wir das Overlay als halbtransparentes Schwarz, sodass der Inhalt hinter dem Overlay teilweise sichtbar ist. Um ausreichenden Kontrast zwischen Inhalt und Hintergrund sicherzustellen, setzen wir die {{cssxref("color")}} auf `white`.

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
- [Grundlagen der WebXR-Geräte-API](/de/docs/Web/API/WebXR_Device_API/Fundamentals)
- [`XRSession.domOverlayState`](/de/docs/Web/API/XRSession/domOverlayState)
