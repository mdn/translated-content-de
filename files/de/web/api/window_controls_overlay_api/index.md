---
title: Window Controls Overlay API
slug: Web/API/Window_Controls_Overlay_API
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{DefaultAPISidebar("Window Controls Overlay API")}}{{SeeCompatTable}}

Die Window Controls Overlay API gibt progressiven Web-Apps, die auf Desktop-Betriebssystemen installiert sind, die Möglichkeit, die standardmäßige Fenstertitelleiste zu verbergen und ihre eigenen Inhalte über die gesamte Fläche des App-Fensters anzuzeigen, wobei die Steuerungstasten (Maximieren, Minimieren und Schließen) in ein Overlay umgewandelt werden.

## Opt-In für die Funktion

Bevor Sie diese Funktion verwenden, müssen die folgenden Bedingungen erfüllt sein:

- Das `display_override`-Mitglied des Web-App-Manifests muss auf `window-controls-overlay` gesetzt sein. Weitere Informationen finden Sie unter [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override).
- Die Progressive Web App muss auf einem Desktop-Betriebssystem installiert sein.

## Hauptkonzepte

Progressive Web Apps, die auf Desktop-Geräten installiert sind, können in eigenständigen App-Fenstern angezeigt werden, ähnlich wie native Apps. So sieht ein Anwendungsfenster aus:

![Illustration einer PWA, die auf einem Desktop installiert ist, mit Fensterschaltflächen, einer Titelleiste und darunter liegenden Webinhalten](desktop-pwa-window.png)

Wie oben gezeigt, besteht das App-Fenster aus zwei Hauptbereichen:

- Der Titelleistenbereich oben.
- Der Anwendungsinhaltsbereich unten, der die HTML-Inhalte der PWA anzeigt.

Der Titelleistenbereich enthält die systemkritischen Schaltflächen zum Maximieren, Minimieren und Schließen (ihre Position kann je nach Betriebssystem variieren), den Namen der Anwendung (der aus dem `<title>` HTML-Element der Seite stammt) und möglicherweise benutzerspezifische PWA-Schaltflächen.

Mit der Window Controls Overlay-Funktion können Progressive Web Apps ihre Webinhalte über die gesamte Fläche der App-Fenster anzeigen. Da die Fensterschaltflächen und benutzerspezifische PWA-Schaltflächen sichtbar bleiben müssen, werden sie in ein Overlay verwandelt, das über den Webinhalten angezeigt wird.

![Illustration einer PWA, die auf einem Desktop mit der Window Controls Overlay-Funktion installiert ist, mit Fensterschaltflächen, ohne Titelleiste und Webinhalten, die das gesamte Fenster überspannen](desktop-pwa-window-wco.png)

Der Teil der Titelleiste, der normalerweise den Anwendungsnamen enthält, wird verborgen, und der Bereich, den er normalerweise einnimmt, wird durch die Window Controls Overlay API verfügbar gemacht.

PWAs können die API verwenden, um Inhalte in diesem Bereich zu positionieren und zu verhindern, dass Inhalte hinter dem Steuerschaltflächen-Overlay verborgen werden, ähnlich wie Webautoren die Präsenz von Notches auf bestimmten mobilen Geräten berücksichtigen können.

## CSS-Umgebungsvariablen

Progressive Web Apps können ihre Webinhalte in dem Bereich positionieren, den die Titelleiste normalerweise einnimmt, indem sie die CSS-Umgebungsvariablen `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` und `titlebar-area-height` verwenden. Weitere Informationen finden Sie unter [Using env() to ensure content is not obscured by window control buttons in desktop PWAs](/de/docs/Web/CSS/Reference/Values/env#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

## Schnittstellen

- [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay) {{Experimental_Inline}}
  - : Bietet Informationen über die Sichtbarkeit und Geometrie der Titelleiste und ein Ereignis, um zu erfahren, wann sich diese ändert.
- [`WindowControlsOverlayGeometryChangeEvent`](/de/docs/Web/API/WindowControlsOverlayGeometryChangeEvent) {{Experimental_Inline}}
  - : Stellt Ereignisse bereit, die Informationen zur Region der Titelleiste der Desktop-Progress-Web-App liefern, wenn sich deren Größe oder Sichtbarkeit ändert.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay)
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle zurück, die Informationen über die Geometrie der Titelleiste in Desktop-Progressive-Web-Apps bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Passen Sie das Fensterschaltflächen-Overlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
- [Anzeigen von Inhalten in der Titelleiste](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
