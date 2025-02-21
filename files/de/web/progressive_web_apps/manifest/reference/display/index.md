---
title: display
slug: Web/Progressive_web_apps/Manifest/Reference/display
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `display` Manifestmitglied wird verwendet, um den bevorzugten Anzeigemodus für die Webanwendung anzugeben. Der Anzeigemodus bestimmt, wie viel der Browser-Benutzeroberfläche dem Benutzer angezeigt wird, wenn die App im Kontext eines Betriebssystems gestartet wird. Sie können wählen, ob die vollständige Browser-Oberfläche angezeigt oder ausgeblendet werden soll, um ein app-ähnlicheres Erlebnis zu ermöglichen.

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

      - : Öffnet die App mit ausgeblendeten Browser-UI-Elementen und nutzt den gesamten verfügbaren Anzeigebereich. Verwenden Sie diesen Wert für Apps, bei denen ein vollständiges Engagement im Vollbildmodus entscheidend und gewünscht ist. Zum Beispiel für eine Spiele-App, die den gesamten Bildschirm ohne sichtbare Browser-Steuerelemente einnimmt und ein vollständig immersives Spielerlebnis bietet.

        > [!NOTE]
        > Der `fullscreen` Wert des `display` Manifestmitglieds funktioniert unabhängig vom [Fullscreen API](/de/docs/Web/API/Fullscreen_API). Der `fullscreen` Anzeigemodus ändert den Zustand des gesamten Browserfensters auf Vollbild, während das Fullscreen API nur ein spezifisches Element im Fenster auf Vollbild setzt. Daher kann eine Web-App im `fullscreen` Anzeigemodus sein, während [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) `null` ist und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) `false` ist.

    - `standalone`

      - : Öffnet die App so, dass sie wie eine eigenständige native App aussieht und funktioniert. Dies kann beinhalten, dass die App ein eigenes Fenster hat und als eigenes Symbol im App-Launcher erscheint. Der Browser wird UI-Elemente wie die URL-Leiste ausschließen, kann jedoch andere UI-Elemente wie die Statusleiste enthalten. Verwenden Sie sie zum Beispiel für eine Aufgabenmanager-App, die sich in einem eigenen Fenster ohne die URL-Leiste des Browsers öffnet, während die Statusleiste des Geräts für Akkustand und Benachrichtigungen sichtbar bleibt, und dadurch ein integriertes Erlebnis bietet.

    - `minimal-ui`

      - : Öffnet die App, sodass sie wie eine eigenständige App aussieht und funktioniert, jedoch mit einem minimalen Satz von UI-Elementen zur Navigation. Die spezifischen Elemente können je nach Browser variieren, beinhalten jedoch typischerweise Navigationselemente wie Zurück, Weiter, Neu laden und möglicherweise eine Möglichkeit, die URL der App anzuzeigen. Darüber hinaus kann der Browser plattformspezifische UI-Elemente einschließen, die Funktionen zum Teilen und Drucken von Inhalten bieten. Verwenden Sie diesen Wert für Apps, bei denen die Anzeige einer minimalen Browser-Oberfläche von Vorteil ist. Zum Beispiel für Nachrichtenleser- oder andere allgemeine Lese-Apps, die nur die wesentlichen Browser-Steuerelemente wie Zurück- und Neu laden-Tasten anzeigen und so eine sauberere und weniger ablenkende Benutzeroberfläche bietet.

    - `browser`
      - : Öffnet die App in einem herkömmlichen Browser-Tab oder einem neuen Fenster und verwendet die plattformspezifische Konvention zum Öffnen von Links. Verwenden Sie diesen Wert für Apps, die dazu gedacht sind, im Browser-Kontext verwendet zu werden, wo die volle Browser-Funktionalität erforderlich ist. Dies ist der Standardwert, wenn kein `display` Modus angegeben ist.

## Beschreibung

Nachdem ein Browser einen `display` Modus auf einen {{Glossary("application_context", "Applikationskontext")}} angewendet hat, wird er zum Standardanzeigemodus für den obersten Browsing-Kontext. Der Browser kann diesen Anzeigemodus aus Sicherheitsgründen überschreiben oder den Benutzern eine Möglichkeit bieten, zu einem anderen `display` Modus zu wechseln.

Wenn ein Browser den angegebenen Anzeigemodus nicht unterstützt, folgt er einer vordefinierten Fallback-Kette: `fullscreen` → `standalone` → `minimal-ui` → `browser`.

Das {{cssxref("@media/display-mode", "display-mode")}} Medienmerkmal kann verwendet werden, um Ihre Anwendungsstile und anderes Verhalten basierend auf dem aktuellen `display` Modus zu konfigurieren. Dies kann dazu beitragen, ein konsistentes Benutzererlebnis zu bieten, unabhängig davon, ob die Website über eine URL oder über ein Desktop-Symbol gestartet wird.

> [!NOTE]
> Der Wert des `display-mode` Medienmerkmals spiegelt den tatsächlichen `display` Modus wider, der vom Browser verwendet wird.
> Dies kann sich von dem im Manifest angeforderten Modus unterscheiden, da der Browser den angeforderten Modus möglicherweise nicht unterstützt.

Wie im Code unten gezeigt, können Sie den Stil einer App an den verwendeten `display-mode` anpassen.

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

### Spezifizierung des Anzeigemodus als "standalone"

Das folgende Beispiel-Manifest für die Web-App "HackerWeb" definiert, wie die App erscheinen und sich verhalten soll, wenn sie auf einem Gerät des Benutzers installiert ist. Das `display` Mitglied ist auf `standalone` gesetzt, was angibt, dass die App in einem separaten Fenster ohne die typischen Browser-UI-Elemente wie die URL-Leiste geöffnet werden soll.

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
