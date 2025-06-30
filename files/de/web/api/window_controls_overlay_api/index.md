---
title: Window Controls Overlay API
slug: Web/API/Window_Controls_Overlay_API
l10n:
  sourceCommit: 26f9fbee05fb92b584d44fba4359e86796484aa6
---

{{DefaultAPISidebar("Window Controls Overlay API")}}{{SeeCompatTable}}

Die Window Controls Overlay API gibt Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind, die Möglichkeit, die Standard-Titelleiste des Fensters auszublenden und eigenen Inhalt über die gesamte Oberfläche des App-Fensters anzuzeigen, wodurch die Steuerelementschaltflächen (Maximieren, Minimieren und Schließen) zu einer Overlay-Anzeige werden.

## Aktivierung der Funktion

Bevor Sie diese Funktion nutzen, müssen folgende Bedingungen erfüllt sein:

- Das `display_override`-Mitglied des Web App Manifests muss auf `window-controls-overlay` gesetzt sein. Siehe [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override).
- Die Progressive Web App muss auf einem Desktop-Betriebssystem installiert sein.

## Hauptkonzepte

Progressive Web Apps, die auf Desktop-Geräten installiert sind, können in eigenständigen App-Fenstern angezeigt werden, ähnlich wie native Apps. So sieht ein Anwendungsfenster aus:

![Darstellung einer PWA, die auf dem Desktop installiert ist, mit Fensterschaltflächen, einer Titelleiste und Web-Inhalt darunter](desktop-pwa-window.png)

Wie oben gezeigt, besteht das App-Fenster aus zwei Hauptbereichen:

- Der Titelleistenbereich oben.
- Der Anwendungsinhaltsbereich unten, der den HTML-Inhalt der PWA anzeigt.

Der Titelleistenbereich enthält die systemkritischen Schaltflächen zum Maximieren, Minimieren und Schließen (deren Position kann je nach Betriebssystem variieren), den Namen der Anwendung (der vom `<title>`-HTML-Element auf der Seite stammt) und möglicherweise benutzerspezifische PWA-Schaltflächen des User-Agents.

Mit der Window Controls Overlay-Funktion können Progressive Web Apps ihren Web-Inhalt über die gesamte Oberfläche des App-Fensters anzeigen. Da die Fensterschaltflächen und benutzerspezifische PWA-Schaltflächen des User-Agents sichtbar bleiben müssen, werden sie zu einer Overlay-Anzeige, die oben auf dem Web-Inhalt angezeigt wird.

![Darstellung einer auf dem Desktop installierten PWA mit der Window Controls Overlay-Funktion, mit Fensterschaltflächen, keiner Titelleiste und Web-Inhalt, der das gesamte Fenster einnimmt](desktop-pwa-window-wco.png)

Der Teil der Titelleiste, der normalerweise den Anwendungsnamen enthält, wird ausgeblendet, und der Bereich, den er normalerweise einnimmt, wird über die Window Controls Overlay API verfügbar gemacht.

PWAs können die API verwenden, um Inhalt in diesem Bereich zu positionieren und zu vermeiden, dass Inhalte hinter der Schaltflächen-Overlay-Anzeige verborgen werden, ähnlich wie Webautoren für das Vorhandensein von Notches auf bestimmten mobilen Geräten berücksichtigen können.

## CSS-Umgebungsvariablen

Progressive Web Apps können ihren Web-Inhalt in dem Bereich positionieren, den die Titelleiste normalerweise einnimmt, indem sie die CSS-Umgebungsvariablen `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` und `titlebar-area-height` verwenden.
Weitere Informationen finden Sie unter [Verwendung von env(), um sicherzustellen, dass Inhalte nicht von Fensterschaltflächen in Desktop-PWAs verdeckt werden](/de/docs/Web/CSS/env#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

## Schnittstellen

- [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay) {{Experimental_Inline}}
  - : Bietet Informationen über die Sichtbarkeit und Geometrie der Titelleiste und ein Ereignis, um zu erfahren, wann sich diese ändert.
- [`WindowControlsOverlayGeometryChangeEvent`](/de/docs/Web/API/WindowControlsOverlayGeometryChangeEvent) {{Experimental_Inline}}
  - : Stellt Ereignisse bereit, die Informationen im Zusammenhang mit dem Titelleistenbereich der Desktop Progress Web App liefern, wenn sich dessen Größe oder Sichtbarkeit ändert.

### Erweiterungen anderer Schnittstellen

- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay)
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle zurück, die Informationen über die Geometrie der Titelleiste in Desktop-Progressive-Web-Apps bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Anpassen des Fenstersteuerungs-Overlays der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
- [Breaking Out of the Box](https://alistapart.com/article/breaking-out-of-the-box/)
- [Inhalte in der Titelleiste anzeigen](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps/how-to/window-controls-overlay)
