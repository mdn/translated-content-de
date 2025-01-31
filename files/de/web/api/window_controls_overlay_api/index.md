---
title: Window Controls Overlay API
slug: Web/API/Window_Controls_Overlay_API
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{DefaultAPISidebar("Window Controls Overlay API")}}{{SeeCompatTable}}

Die Window Controls Overlay API ermöglicht es Progressiven Web Apps, die auf Desktop-Betriebssystemen installiert sind, die Standardfenstertitelleiste auszublenden und ihre eigenen Inhalte über die gesamte Oberfläche des App-Fensters anzuzeigen, wobei die Steuerungsschaltflächen (Maximieren, Minimieren und Schließen) zu einer Überlagerung werden.

## Aktivierung des Features

Bevor Sie dieses Feature nutzen, müssen die folgenden Bedingungen erfüllt sein:

- Das `display_override`-Mitglied des Web App Manifests muss auf `window-controls-overlay` gesetzt sein. Weitere Informationen finden Sie auf der [Referenzseite](/de/docs/Web/Manifest/Reference/display_override).
- Die Progressive Web App muss auf einem Desktop-Betriebssystem installiert sein.

## Hauptkonzepte

Progressive Web Apps, die auf Desktop-Geräten installiert sind, können in eigenständigen App-Fenstern dargestellt werden, ähnlich wie native Apps. So sieht ein Anwendungsfenster aus:

![Illustration einer PWA, die auf einem Desktop installiert ist, mit Fensterschaltflächen, einer Titelleiste und darunter liegenden Webinhalten](desktop-pwa-window.png)

Wie oben zu sehen, besteht das App-Fenster aus zwei Hauptbereichen:

- Der Titelleistenbereich oben.
- Der Anwendungsinhaltsbereich unten, der den HTML-Inhalt der PWA anzeigt.

Der Titelleistenbereich enthält die systemkritischen Maximieren-, Minimieren- und Schließen-Schaltflächen (deren Position kann je nach Betriebssystem variieren), den Namen der Anwendung (der aus dem `<title>` HTML-Element auf der Seite stammt) und möglicherweise agentenspezifische PWA-Schaltflächen.

Mit dem Window Controls Overlay Feature können Progressive Web Apps ihre Webinhalte über die gesamte App-Fensteroberfläche anzeigen. Da die Fenstersteuerungsschaltflächen und agentenspezifische PWA-Schaltflächen sichtbar bleiben müssen, werden sie zu einer Überlagerung, die über den Webinhalten angezeigt wird.

![Illustration einer PWA, die auf einem Desktop installiert ist, mit dem Window Controls Overlay-Feature, mit Fensterschaltflächen, keiner Titelleiste und Webinhalten, die das gesamte Fenster einnehmen](desktop-pwa-window-wco.png)

Der Teil der Titelleiste, der normalerweise den Anwendungsnamen enthält, wird ausgeblendet, und der Bereich, den er normalerweise einnimmt, wird über die Window Controls Overlay API zugänglich.

PWAs können die API nutzen, um Inhalte in diesem Bereich zu positionieren und zu vermeiden, dass Inhalte hinter den Steuerungsschaltflächen überlagert werden, ähnlich wie Webautoren auf das Vorhandensein von Notches auf bestimmten mobilen Geräten Rücksicht nehmen können.

## CSS Umgebungsvariablen

Progressive Web Apps können ihre Webinhalte in dem Bereich positionieren, den die Titelleiste normalerweise einnimmt, indem sie die CSS-Umgebungsvariablen `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` und `titlebar-area-height` verwenden.
Siehe [Verwendung von env(), um sicherzustellen, dass Inhalte nicht durch Fenstersteuerungsschaltflächen in Desktop-PWAs verdeckt werden](/de/docs/Web/CSS/env#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

## Schnittstellen

- [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay) {{Experimental_Inline}}
  - : Bietet Informationen zur Sichtbarkeit und Geometrie der Titelleiste und ein Event, um zu wissen, wann sich diese ändert.
- [`WindowControlsOverlayGeometryChangeEvent`](/de/docs/Web/API/WindowControlsOverlayGeometryChangeEvent) {{Experimental_Inline}}
  - : Repräsentiert Events, die Informationen über den Titelleistenbereich der Desktop Progressive Web App bereitstellen, wenn sich deren Größe oder Sichtbarkeit ändert.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay)
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay) Schnittstelle zurück, die Informationen über die Geometrie der Titelleiste in Desktop Progressive Web Apps bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Anpassen der Fenstersteuerungsüberlagerung der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Das Ausbrechen aus dem Kasten](https://alistapart.com/article/breaking-out-of-the-box/)
- [Anzeigen von Inhalten in der Titelleiste](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
