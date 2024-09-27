---
title: Window Controls Overlay API
slug: Web/API/Window_Controls_Overlay_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Window Controls Overlay API")}}{{SeeCompatTable}}

Die Window Controls Overlay API ermöglicht es Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind, die standardmäßige Fenster-Titelleiste auszublenden und ihren eigenen Inhalt über die gesamte Oberflächenfläche des App-Fensters anzuzeigen, wobei die Steuerelemente (Maximieren, Minimieren und Schließen) zu einer Überlagerung werden.

## Aktivieren der Funktion

Bevor Sie diese Funktion nutzen, müssen die folgenden Bedingungen erfüllt sein:

- Das `display_override`-Element des Web App Manifest muss auf `window-controls-overlay` gesetzt werden.
- Die Progressive Web App muss auf einem Desktop-Betriebssystem installiert sein.

## Hauptkonzepte

Progressive Web Apps, die auf Desktop-Geräten installiert sind, können in eigenständigen App-Fenstern angezeigt werden, ähnlich wie native Apps. So sieht ein Anwendungsfenster aus:

![Illustration einer PWA, die auf einem Desktop installiert ist, mit Fensterschaltflächen, einer Titelleiste und darunter liegendem Webinhalt](desktop-pwa-window.png)

Wie oben zu sehen ist, besteht das App-Fenster aus zwei Hauptbereichen:

- Der Titelleistenbereich oben.
- Der Anwendungsinhaltbereich unten, der den HTML-Inhalt der PWA anzeigt.

Der Titelleistenbereich enthält die systemkritischen Schaltflächen zum Maximieren, Minimieren und Schließen (deren Position kann je nach Betriebssystem variieren), den Namen der Anwendung (der aus dem `<title>` HTML-Element der Seite stammt) und möglicherweise benutzerspezifische PWA-Schaltflächen.

Mit der Window Controls Overlay-Funktion können Progressive Web Apps ihre Webinhalte über die gesamte Oberflächenfläche des App-Fensters anzeigen. Da die Fensterschaltflächen und benutzerspezifischen PWA-Schaltflächen sichtbar bleiben müssen, werden sie zu einer Überlagerung, die über dem Webinhalt angezeigt wird.

![Illustration einer PWA, die auf einem Desktop mit der Window Controls Overlay-Funktion installiert ist, mit Fensterschaltflächen, keiner Titelleiste und Webinhalt, der das gesamte Fenster ausfüllt](desktop-pwa-window-wco.png)

Der Teil der Titelleiste, der normalerweise den Anwendungsnamen enthält, wird ausgeblendet, und der Bereich, den er normalerweise einnimmt, wird über die Window Controls Overlay API verfügbar.

PWAs können die API verwenden, um Inhalte in diesem Bereich zu positionieren und zu vermeiden, dass Inhalte hinter der Überlagerung der Steuerelemente verborgen werden, ähnlich wie Webautoren die Anwesenheit von Kerben auf bestimmten mobilen Geräten berücksichtigen können.

## CSS-Umgebungsvariablen

Progressive Web Apps können ihre Webinhalte in dem Bereich positionieren, der normalerweise die Titelleiste einnimmt, indem sie die CSS-Umgebungsvariablen `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` und `titlebar-area-height` verwenden.
Siehe [Verwendung von env(), um sicherzustellen, dass Inhalte nicht von Fensterschaltflächen in Desktop-PWAs verdeckt werden](/de/docs/Web/CSS/env#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

## Schnittstellen

- [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay) {{Experimental_Inline}}
  - : Bietet Informationen über die Sichtbarkeit und Geometrie der Titelleiste und ein Ereignis, um zu wissen, wann es sich ändert.
- [`WindowControlsOverlayGeometryChangeEvent`](/de/docs/Web/API/WindowControlsOverlayGeometryChangeEvent) {{Experimental_Inline}}
  - : Stellt Ereignisse dar, die Informationen über den Titelbereich der Desktop Progressive Web App liefern, wenn sich dessen Größe oder Sichtbarkeit ändert.

### Erweiterungen anderer Schnittstellen

- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay)
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay) Schnittstelle zurück, die Informationen über die Geometrie der Titelleiste in Desktop Progressive Web Apps bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Anpassen der Überlagerung der Fensterschaltflächen in der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Ausbrechen aus der Box](https://alistapart.com/article/breaking-out-of-the-box/)
- [Anzeige von Inhalten in der Titelleiste](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
