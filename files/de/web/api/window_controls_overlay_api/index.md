---
title: Window Controls Overlay API
slug: Web/API/Window_Controls_Overlay_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("Window Controls Overlay API")}}{{SeeCompatTable}}

Die Window Controls Overlay API ermöglicht es Progressive Web Apps, die auf Desktop-Betriebssystemen installiert sind, die Standard-Fenstertitelleiste auszublenden und ihren eigenen Inhalt über der gesamten Oberfläche des App-Fensters anzuzeigen, wobei die Steuerungstasten (Maximieren, Minimieren und Schließen) zu einem Overlay werden.

## Aktivierung des Features

Bevor Sie dieses Feature verwenden, müssen die folgenden Bedingungen erfüllt sein:

- Das `display_override`-Mitglied des Web App Manifests muss auf `window-controls-overlay` gesetzt sein.
- Die Progressive Web App muss auf einem Desktop-Betriebssystem installiert sein.

## Hauptkonzepte

Progressive Web Apps, die auf Desktop-Geräten installiert sind, können in eigenständigen App-Fenstern angezeigt werden, ähnlich wie native Apps. Hier ist, wie ein Anwendungsfenster aussieht:

![Illustration einer PWA, die auf einem Desktop installiert ist, mit Fenstersteuerungstasten, einer Titelleiste und Webinhalten darunter](desktop-pwa-window.png)

Wie oben zu sehen ist, besteht das App-Fenster aus zwei Hauptbereichen:

- Der Titelleistenbereich oben.
- Der Anwendungsinhaltbereich unten, der den HTML-Inhalt der PWA anzeigt.

Der Titelleistenbereich enthält die systemkritischen Maximieren-, Minimieren- und Schließen-Tasten (deren Position je nach Betriebssystem variieren kann), den Namen der Anwendung (der aus dem `<title>` HTML-Element auf der Seite stammt) und möglicherweise benutzeragentspezifische PWA-Tasten.

Mit dem Window Controls Overlay-Feature können Progressive Web Apps ihre Webinhalte über die gesamte Fensteroberfläche der App anzeigen. Da die Fenstersteuerungstasten und benutzeragentspezifischen PWA-Tasten sichtbar bleiben müssen, werden sie als Overlay über den Webinhalten angezeigt.

![Illustration einer PWA, die auf einem Desktop mit dem Window Controls Overlay-Feature installiert ist, mit Fenstersteuerungstasten, keiner Titelleiste und Webinhalten, die das gesamte Fenster einnehmen](desktop-pwa-window-wco.png)

Der Teil der Titelleiste, der normalerweise den Anwendungsnamen enthält, wird ausgeblendet, und der Bereich, den er normalerweise einnimmt, wird über die Window Controls Overlay API verfügbar.

PWAs können die API verwenden, um Inhalte in diesem Bereich zu positionieren und zu vermeiden, dass Inhalte hinter dem Steuerungstasten-Overlay verborgen werden, ähnlich wie Webautoren die Anwesenheit von Kerben auf bestimmten mobilen Geräten berücksichtigen können.

## CSS-Umgebungsvariablen

Progressive Web Apps können ihre Webinhalte in dem Bereich positionieren, den die Titelleiste normalerweise einnimmt, indem sie die CSS-Umgebungsvariablen `titlebar-area-x`, `titlebar-area-y`, `titlebar-area-width` und `titlebar-area-height` verwenden.
Sehen Sie [Verwenden von env(), um sicherzustellen, dass Inhalte nicht durch Fenstersteuerungstasten in Desktop-PWAs verdeckt werden](/de/docs/Web/CSS/env#using_env_to_ensure_content_is_not_obscured_by_window_control_buttons_in_desktop_pwas).

## Schnittstellen

- {{domxref("WindowControlsOverlay")}} {{Experimental_Inline}}
  - : Bietet Informationen über die Sichtbarkeit und Geometrie der Titelleiste und ein Ereignis, um zu wissen, wann sich dies ändert.
- {{domxref("WindowControlsOverlayGeometryChangeEvent")}} {{Experimental_Inline}}
  - : Repräsentiert Ereignisse, die Informationen über den Desktop Progress Web App-Titelleistenbereich liefern, wenn sich dessen Größe oder Sichtbarkeit ändert.

### Erweiterungen für andere Schnittstellen

- {{domxref("Navigator.windowControlsOverlay")}}
  - : Gibt die {{domxref("WindowControlsOverlay")}}-Schnittstelle zurück, die Informationen über die Titelleistengeometrie in Desktop-Progressive Web Apps offenlegt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Passen Sie das Fenstersteuerungsoverlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
- [Aus der Box ausbrechen](https://alistapart.com/article/breaking-out-of-the-box/)
- [Zeigen Sie Inhalte in der Titelleiste an](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/window-controls-overlay)
