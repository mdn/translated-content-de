---
title: display
slug: Web/Manifest/display
l10n:
  sourceCommit: 7742fc98db494e89b706131c18811e2b853ab1d0
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `display` Manifestmitglied wird verwendet, um den bevorzugten Anzeigemodus für die Webanwendung festzulegen. Der Anzeigemodus bestimmt, wie viel der Browser-Benutzeroberfläche dem Benutzer angezeigt wird, wenn die App im Kontext eines Betriebssystems gestartet wird. Sie können wählen, ob die vollständige Browser-Oberfläche angezeigt oder verborgen werden soll, um ein eher app-ähnliches Erlebnis zu bieten.

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

  - : Ein String mit Schlüsselwortwerten. Wenn nicht angegeben, wird der Standardwert `browser` verwendet. Die Schlüsselwortwerte umfassen:

    - `fullscreen`

      - : Öffnet die App mit versteckten Browser-UI-Elementen und nutzt den gesamten verfügbaren Anzeigebereich. Verwenden Sie diesen Wert für Apps, bei denen ein vollbildiges Engagement wesentlich und erwünscht ist. Zum Beispiel für eine Spiele-App, die den gesamten Bildschirm ohne sichtbare Browser-Steuerelemente einnehmen kann und so ein vollständig immersives Spielerlebnis bietet.

        > [!NOTE]
        > Der `fullscreen` Wert des `display` Manifestmitglieds funktioniert unabhängig von der [Fullscreen API](/de/docs/Web/API/Fullscreen_API). Der `fullscreen` Anzeigemodus ändert den Zustand des gesamten Browserfensters auf Vollbild, während die Fullscreen-API nur ein bestimmtes Element innerhalb des Fensters im Vollbild anzeigt. Daher kann eine Web-App im `fullscreen` Anzeigemodus sein, während [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) `null` und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) `false` ist.

    - `standalone`

      - : Öffnet die App, um wie eine eigenständige native App auszusehen und sich anzufühlen. Dies kann beinhalten, dass die App ein eigenes Fenster und eigenes Symbol im App-Starter hat. Der Browser wird UI-Elemente wie eine URL-Leiste ausschließen, kann jedoch weiterhin andere UI-Elemente wie die Statusleiste enthalten. Zum Beispiel bei einer Aufgabenmanager-App, die in ihrem eigenen Fenster ohne die URL-Leiste des Browsers geöffnet wird, dabei jedoch weiterhin die Statusleiste des Geräts für Akku und Benachrichtigungen anzeigt und so ein integriertes Erlebnis bietet.

    - `minimal-ui`

      - : Öffnet die App wie eine eigenständige App, jedoch mit einem minimalen Satz an UI-Elementen zur Navigation. Die spezifischen Elemente können je nach Browser variieren, enthalten jedoch typischerweise Navigationselemente wie Zurück, Vorwärts, Neu laden und möglicherweise eine Möglichkeit zum Anzeigen der URL der App. Zusätzlich kann der Browser plattformspezifische UI-Elemente enthalten, die Funktionen zum Teilen und Drucken von Inhalten bieten. Verwenden Sie diesen Wert für Apps, bei denen die Anzeige einer minimalen Browser-Oberfläche vorteilhaft ist. Zum Beispiel für eine Nachrichtenlese-App oder andere Lese-Apps, die nur die wesentlichen Browser-Steuerelemente wie Zurück- und Neu laden-Tasten anzeigen und so eine sauberere und weniger ablenkende Benutzeroberfläche bieten.

    - `browser`
      - : Öffnet die App in einem herkömmlichen Browser-Tab oder neuen Fenster, unter Verwendung der plattformspezifischen Konvention zum Öffnen von Links. Verwenden Sie diesen Wert für Apps, die innerhalb eines Browser-Kontexts verwendet werden sollen, wo die volle Browser-Funktionalität benötigt wird. Dies ist der Standardwert, wenn kein `display` Modus angegeben wird.

## Beschreibung

Nachdem ein Browser einen `display` Modus auf einen {{Glossary("application_context", "Anwendungskontext")}} angewendet hat, wird dieser zum Standard-Anzeigemodus für den top-level Browsingkontext. Der Browser kann diesen Anzeigemodus aus Sicherheitsgründen überschreiben oder den Benutzern eine Möglichkeit geben, zu einem anderen `display` Modus zu wechseln.

Wenn ein Browser den angegebenen Anzeigemodus nicht unterstützt, folgt er einer vordefinierten Fallback-Kette: `fullscreen` → `standalone` → `minimal-ui` → `browser`.

Das {{cssxref("@media/display-mode", "display-mode")}} Medien-Feature kann verwendet werden, um Ihre Anwendungsstile und anderes Verhalten basierend auf dem aktuellen `display` Modus zu konfigurieren. Dies kann helfen, ein konsistentes Benutzererlebnis zu bieten, unabhängig davon, ob die Website von einer URL oder von einem Desktop-Symbol gestartet wird.

> [!NOTE]
> Der Wert des `display-mode` Medien-Features spiegelt den tatsächlich vom Browser verwendeten `display` Modus wider.
> Dies kann sich von dem im Manifest angeforderten Modus unterscheiden, da der Browser den angeforderten Modus möglicherweise nicht unterstützt.

Wie im nachfolgenden Code gezeigt, können Sie den Stil einer App je nach verwendetem `display-mode` anpassen.

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

### Standalone-Anzeigemodus festlegen

Das folgende Beispiel eines Manifestdatei für die Web-App namens "HackerWeb" definiert, wie die App erscheinen und sich verhalten soll, wenn sie auf dem Gerät eines Benutzers installiert ist. Das `display` Mitglied ist auf `standalone` gesetzt, was angibt, dass die App in einem eigenen Fenster ohne die typischen Browser-UI-Elemente wie die URL-Leiste geöffnet werden soll.

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
