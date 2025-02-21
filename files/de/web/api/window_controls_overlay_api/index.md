---
title: Window Controls Overlay API
slug: Web/API/Window_Controls_Overlay_API
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{DefaultAPISidebar("Window Controls Overlay API")}}{{SeeCompatTable}}

Die Window Controls Overlay API ermöglicht es Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind, die standardmäßige Fenstertitelleiste auszublenden und eigenen Inhalt über die gesamte Oberfläche des App-Fensters anzuzeigen, wodurch die Steuerelemente (Maximieren, Minimieren und Schließen) zu einem Overlay werden.

## Opt-in für das Feature

Bevor Sie dieses Feature verwenden, müssen die folgenden Bedingungen erfüllt sein:

- Das [`display_override`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display_override)-Mitglied des Web App Manifests muss auf `window-controls-overlay` gesetzt sein.
- Die Progressive Web App muss auf einem Desktop-Betriebssystem installiert sein.

## Hauptkonzepte

Progressive Web Apps, die auf Desktop-Geräten installiert sind, können in eigenständigen App-Fenstern angezeigt werden, genau wie native Apps. So sieht ein Anwendungsfenster aus:

![Illustration einer PWA, die auf einem Desktop installiert ist, mit Fenstersteuerungsschaltflächen, einer Titelleiste und darunter liegendem Webinhalt](desktop-pwa-window.png)

Wie oben zu sehen ist, besteht das App-Fenster aus zwei Hauptbereichen:

- Dem Titelleistenbereich oben.
- Dem Anwendungsinhaltsbereich unten, der den HTML-Inhalt der PWA anzeigt.

Der Titelleistenbereich enthält die systemkritischen Schaltflächen zum Maximieren, Minimieren und Schließen (deren Position kann je nach Betriebssystem variieren), den Namen der Anwendung (der aus dem `<title>`-HTML-Element auf der Seite stammt) und möglicherweise benutzeragentenspezifische PWA-Schaltflächen.

Mit dem Window Controls Overlay-Feature können Progressive Web Apps ihren Webinhalt über die gesamte Oberfläche des App-Fensters anzeigen. Da die Fenstersteuerungsschaltflächen und benutzeragentenspezifischen PWA-Schaltflächen sichtbar bleiben müssen, werden sie in ein Overlay umgewandelt, das über dem Webinhalt angezeigt wird.

![Illustration einer PWA, die auf einem Desktop mit dem Window Controls Overlay-Feature installiert ist, mit Fenstersteuerungsschaltflächen, keiner Titelleiste und Webinhalt, der das gesamte Fenster einnimmt](desktop-pwa-window-wco.png)

Der Teil der Titelleiste, der normalerweise den Anwendungsnamen enthält, wird ausgeblendet, und der Bereich, den er normalerweise einnimmt, wird über die Window Controls Overlay API verfügbar.

PWAs können die API verwenden, um Inhalte in diesem Bereich zu positionieren und zu vermeiden, dass Inhalte hinter dem Steuerelement-Overlay verborgen werden. Dies ist ähnlich wie bei Webautoren, die das Vorhandensein von Notches auf bestimmten Mobilgeräten berücksichtigen können.

## CSS-Umgebungsvariablen

Progressive Web Apps können ihren Webinhalt in dem Bereich positionieren, den die Titelleiste normalerweise einnimmt, indem sie die CSS-Umgebungsvariablen `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` und `titlebar-area-height` verwenden.
Siehe [Using env() to ensure content is not obscured by window control buttons in desktop PWAs](/de/docs/Web/CSS/env#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

## Schnittstellen

- [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay) {{Experimental_Inline}}
  - : Bietet Informationen über die Sichtbarkeit und Geometrie der Titelleiste und ein Ereignis, um zu wissen, wann sie sich ändert.
- [`WindowControlsOverlayGeometryChangeEvent`](/de/docs/Web/API/WindowControlsOverlayGeometryChangeEvent) {{Experimental_Inline}}
  - : Stellt Ereignisse bereit, die Informationen über die Region der Titelleiste der Desktop-Progressive-Web-App liefern, wenn sich ihre Größe oder Sichtbarkeit ändert.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.windowControlsOverlay`](/de/docs/Web/API/Navigator/windowControlsOverlay)
  - : Gibt die [`WindowControlsOverlay`](/de/docs/Web/API/WindowControlsOverlay)-Schnittstelle zurück, die Informationen über die Geometrie der Titelleiste in Desktop-Progressive-Web-Apps bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Passen Sie das Fenstersteuerungsoffset der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Aus dem Kasten ausbrechen](https://alistapart.com/article/breaking-out-of-the-box/)
- [Anzeige von Inhalten in der Titelleiste](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
