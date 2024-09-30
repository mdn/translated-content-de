---
title: Window Controls Overlay API
slug: Web/API/Window_Controls_Overlay_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Window Controls Overlay API")}}{{SeeCompatTable}}

Die Window Controls Overlay API gibt Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind, die Möglichkeit, die standardmäßige Fenster-Titelleiste auszublenden und ihren eigenen Inhalt über die gesamte Oberfläche des App-Fensters anzuzeigen, wobei die Steuerungsschaltflächen (maximieren, minimieren und schließen) in ein Overlay umgewandelt werden.

## Aktivierung des Features

Vor der Verwendung dieses Features müssen die folgenden Bedingungen erfüllt sein:

- Das `display_override`-Mitglied im Web-App-Manifest muss auf `window-controls-overlay` gesetzt sein.
- Die Progressive Web App muss auf einem Desktop-Betriebssystem installiert sein.

## Hauptkonzepte

Progressive Web Apps, die auf Desktop-Geräten installiert sind, können in eigenständigen App-Fenstern angezeigt werden, ähnlich wie native Apps. So sieht ein Anwendungsfenster aus:

![Darstellung einer auf dem Desktop installierten PWA mit Fenstersteuerungstasten, einer Titelleiste und darunter angezeigtem Webinhalt](desktop-pwa-window.png)

Wie oben zu sehen ist, besteht das App-Fenster aus zwei Hauptbereichen:

- Der Titelleistenbereich oben.
- Der Anwendungsinhaltsbereich unten, der den HTML-Inhalt der PWA anzeigt.

Der Titelleistenbereich enthält die systemkritischen Schaltflächen zum Maximieren, Minimieren und Schließen (deren Position kann je nach Betriebssystem variieren), den Namen der Anwendung (der aus dem `<title>` HTML-Element der Seite stammt) und möglicherweise benutzerspezifische PWA-Schaltflächen.

Mit der Window Controls Overlay-Funktion können Progressive Web Apps ihren Webinhalt über die gesamte Oberfläche des App-Fensters anzeigen. Da die Fenstersteuerungsschaltflächen und benutzerspezifische PWA-Schaltflächen sichtbar bleiben müssen, werden sie in ein Overlay umgewandelt, das über dem Webinhalt angezeigt wird.

![Darstellung einer auf dem Desktop installierten PWA mit der Window Controls Overlay-Funktion, mit Fenstersteuerungstasten, keiner Titelleiste und Webinhalt, der das gesamte Fenster ausfüllt](desktop-pwa-window-wco.png)

Der Teil der Titelleiste, der normalerweise den Anwendungsnamen enthält, wird ausgeblendet, und der Bereich, den er normalerweise einnimmt, wird über die Window Controls Overlay API verfügbar.

PWAs können die API nutzen, um Inhalte in diesem Bereich zu positionieren und zu vermeiden, dass Inhalte hinter dem Steuerungstasten-Overlay verborgen werden, ähnlich wie Webautoren die Präsenz von Notches auf bestimmten Mobilgeräten berücksichtigen können.

## CSS-Umgebungsvariablen

Progressive Web Apps können ihren Webinhalt in dem Bereich positionieren, den die Titelleiste normalerweise einnimmt, indem sie die CSS-Umgebungsvariablen `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` und `titlebar-area-height` verwenden. Siehe [Verwendung von env(), um sicherzustellen, dass Inhalte nicht durch Fenstersteuerungstasten in Desktop-PWAs verdeckt werden](/de/docs/Web/CSS/env#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

## Schnittstellen

- [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay) {{Experimental_Inline}}
  - : Bietet Informationen über die Sichtbarkeit und Geometrie der Titelleiste und ein Ereignis, um zu wissen, wann sich diese ändert.
- [`WindowControlsOverlayGeometryChangeEvent`](/de/docs/Web/API/WindowControlsOverlayGeometryChangeEvent) {{Experimental_Inline}}
  - : Repräsentiert Ereignisse, die Informationen zur Titelvarregion der Desktop Progress Web App liefern, wenn sich deren Größe oder Sichtbarkeit ändert.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay)
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle zurück, die Informationen über die Titelleistengeometrie in Desktop Progressive Web Apps bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Passen Sie das Window Controls Overlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Ausbrechen aus der Box](https://alistapart.com/article/breaking-out-of-the-box/)
- [Anzeige von Inhalten in der Titelleiste](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
