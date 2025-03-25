---
title: display
slug: Web/Progressive_web_apps/Manifest/Reference/display
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `display`-Manifestelement wird verwendet, um den bevorzugten Anzeigemodus für die Webanwendung anzugeben. Der Anzeigemodus bestimmt, wie viele der Browser-Bedienelemente dem Benutzer angezeigt werden, wenn die App im Kontext eines Betriebssystems gestartet wird. Sie können wählen, ob die vollständige Browser-Oberfläche angezeigt oder ausgeblendet werden soll, um ein mehr app-ähnliches Erlebnis zu bieten.

## Syntax

```json-nolint
/* Keyword values */
"display": "fullscreen"
"display": "standalone"
"display": "minimal-ui"
"display": "browser"
```

### Werte

- `display`

  - : Ein String mit Schlüsselwortwerten. Wenn nicht angegeben, wird der Standardwert `browser` verwendet. Zu den Schlüsselwortwerten gehören:

    - `fullscreen`

      - : Öffnet die App mit ausgeblendeten Browser-UI-Elementen und nutzt den gesamten verfügbaren Anzeigebereich. Verwenden Sie diesen Wert für Apps, bei denen eine vollständige Bildschirmnutzung entscheidend und erwünscht ist. Zum Beispiel für eine Spiele-App, die den gesamten Bildschirm ohne sichtbare Browser-Steuerelemente einnehmen kann und so eine vollständig immersive Spielerfahrung bietet.

        > [!NOTE]
        > Der `fullscreen`-Wert des `display`-Manifestelements arbeitet unabhängig von der [Fullscreen API](/de/docs/Web/API/Fullscreen_API). Der `fullscreen`-Anzeigemodus ändert den Zustand des gesamten Browser-Fensters auf Vollbild, während die Fullscreen API nur ein bestimmtes Element innerhalb des Fensters im Vollbildmodus anzeigt. Daher kann eine Web-App im `fullscreen`-Anzeigemodus sein, während [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) `null` ist und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) `false` ist.

    - `standalone`

      - : Öffnet die App, dass sie wie eine eigenständige native App aussieht und sich anfühlt. Dazu kann gehören, dass die App ein eigenes Fenster und ein eigenes Symbol im App-Launcher hat. Der Browser schließt UI-Elemente wie die URL-Leiste aus, kann jedoch andere UI-Elemente wie die Statusleiste enthalten. Verwenden Sie diesen Modus beispielsweise für eine Aufgabenmanager-App, die in einem eigenen Fenster ohne die URL-Leiste des Browsers öffnet, während die Statusleiste des Geräts für Batterie und Benachrichtigungen weiterhin angezeigt wird, wodurch ein integriertes Erlebnis entsteht.

    - `minimal-ui`

      - : Öffnet die App, dass sie wie eine eigenständige App mit einem minimalen Satz von UI-Elementen für die Navigation aussieht und sich anfühlt. Die spezifischen Elemente können je nach Browser variieren, beinhalten aber typischerweise Navigationselemente wie Zurück, Vorwärts, Neu laden und möglicherweise eine Möglichkeit, die URL der App anzuzeigen. Darüber hinaus kann der Browser plattformspezifische UI-Elemente einschließen, die Funktionalitäten zum Teilen und Drucken von Inhalten bieten. Verwenden Sie diesen Wert für Apps, bei denen das Anzeigen einer minimalen Browser-Oberfläche vorteilhaft ist. Zum Beispiel für eine Nachrichtenlese-App oder andere allgemeine Lese-Apps, die nur die wesentlichen Browser-Steuerelemente wie Zurück- und Neu laden-Tasten zeigen und so eine sauberere und weniger ablenkende Schnittstelle bieten.

    - `browser`
      - : Öffnet die App in einem herkömmlichen Browser-Tab oder einem neuen Fenster unter Verwendung des plattformspezifischen Konzepts zum Öffnen von Links. Verwenden Sie diesen Wert für Apps, die in einem Browser-Kontext verwendet werden sollen, wo volle Browser-Funktionalität benötigt wird. Dies ist der Standardwert, wenn kein `display`-Modus angegeben wird.

## Beschreibung

Nachdem ein Browser einen `display`-Modus auf einen {{Glossary("application_context", "Applikationskontext")}} angewendet hat, wird dieser zum Standard-Anzeigemodus für den obersten Browsing-Kontext. Der Browser kann diesen Anzeigemodus aus Sicherheitsgründen außer Kraft setzen oder den Benutzern eine Möglichkeit bieten, zu einem anderen `display`-Modus zu wechseln.

Unterstützt ein Browser den angegebenen Anzeigemodus nicht, folgt er einer vordefinierten Fallback-Kette: `fullscreen` → `standalone` → `minimal-ui` → `browser`.

Das {{cssxref("@media/display-mode", "display-mode")}} Medienmerkmal kann verwendet werden, um die Anwendungsstile und -verhalten basierend auf dem aktuellen `display`-Modus zu konfigurieren. Dies kann helfen, ein konsistentes Benutzererlebnis zu bieten, unabhängig davon, ob die Website über eine URL oder über ein Desktop-Symbol gestartet wird.

> [!NOTE]
> Der Wert des `display-mode` Medienmerkmals spiegelt den tatsächlichen `display`-Modus wider, der vom Browser verwendet wird.
> Dieser kann vom im Manifest angeforderten Modus abweichen, da der Browser den angeforderten Modus möglicherweise nicht unterstützt.

Wie im untenstehenden Code gezeigt wird, können Sie den Stil einer App je nachdem, welcher `display-mode` verwendet wird, anpassen.

```css
@media (display-mode: standalone) {
  body {
    background-color: #f0f0f0; /* Light grey background for standalone mode */
  }
}

@media (display-mode: fullscreen) {
  body {
    background-color: #000000; /* Black background for fullscreen mode */
  }
}
```

## Beispiele

### Angabe des standalone-Anzeigemodus

Das folgende Manifest-Beispiel für die Web-App namens "HackerWeb" definiert, wie die App aussehen und sich verhalten soll, wenn sie auf dem Gerät eines Benutzers installiert ist. Das `display`-Element ist auf `standalone` gesetzt, was angibt, dass die App in einem separaten Fenster ohne die typischen Browser-UI-Elemente wie die URL-Leiste geöffnet werden soll.

```json
{
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "description": "A readable Hacker News app",
  "icons": [
    {
      "src": "images/icons/homescreen192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
