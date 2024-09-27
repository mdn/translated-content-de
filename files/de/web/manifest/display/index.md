---
title: display
slug: Web/Manifest/display
l10n:
  sourceCommit: 7742fc98db494e89b706131c18811e2b853ab1d0
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `display`-Manifestmitglied wird verwendet, um den bevorzugten Anzeigemodus für die Webanwendung anzugeben. Der Anzeigemodus bestimmt, wie viel der Browser-Benutzeroberfläche dem Benutzer angezeigt wird, wenn die App im Kontext eines Betriebssystems gestartet wird. Sie können wählen, ob die vollständige Browser-Oberfläche angezeigt oder ausgeblendet werden soll, um eine app-ähnlichere Erfahrung zu bieten.

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

      - : Öffnet die App mit ausgeblendeten Browser-UI-Elementen und nutzt die gesamte verfügbare Anzeigefläche. Verwenden Sie diesen Wert für Apps, bei denen ein Vollbildmodus entscheidend und gewünscht ist. Zum Beispiel für eine Spiele-App, die den gesamten Bildschirm einnehmen kann, ohne dass Browser-Steuerelemente sichtbar sind, und so ein vollständig immersives Spielerlebnis bietet.

        > [!NOTE]
        > Der `fullscreen`-Wert des `display`-Manifestsmitglieds funktioniert unabhängig von der [Fullscreen API](/de/docs/Web/API/Fullscreen_API). Der `fullscreen`-Anzeigemodus ändert den Zustand des gesamten Browserfensters in den Vollbildmodus, während die Fullscreen-API nur ein spezifisches Element innerhalb des Fensters in den Vollbildmodus versetzt. Daher kann sich eine Web-App im `fullscreen`-Anzeigemodus befinden, während [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) `null` ist und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) `false` ist.

    - `standalone`

      - : Öffnet die App, so dass sie wie eine eigenständige native App wirkt. Dies kann beinhalten, dass die App über ein anderes Fenster und ihr eigenes Symbol im App-Launcher verfügt. Der Browser schließt UI-Elemente wie eine URL-Leiste aus, kann jedoch weiterhin andere UI-Elemente wie die Statusleiste einbeziehen. Verwenden Sie dies beispielsweise für eine Aufgabenmanagement-App, die in ihrem eigenen Fenster ohne die URL-Leiste des Browsers geöffnet wird, während die Statusleiste des Geräts für Akkustand und Benachrichtigungen angezeigt wird, um ein integriertes Erlebnis zu bieten.

    - `minimal-ui`

      - : Öffnet die App so, dass sie wie eine eigenständige App aussieht, jedoch mit einer minimalen Anzahl von UI-Elementen für die Navigation. Die spezifischen Elemente können je nach Browser variieren, beinhalten aber typischerweise Navigationskontrollen wie Zurück, Vorwärts, Neu laden und möglicherweise eine Möglichkeit, die URL der App anzuzeigen. Außerdem kann der Browser plattformspezifische UI-Elemente einschließen, die Funktionen zum Teilen und Drucken von Inhalten bereitstellen. Verwenden Sie diesen Wert für Apps, bei denen das Anzeigen einer minimalen Browser-Oberfläche von Vorteil ist. Zum Beispiel für eine Nachrichtenlese-App oder andere allgemeine Lese-Apps, die nur die wesentlichen Browser-Steuerelemente wie Zurück- und Neu laden-Tasten zeigen, um eine sauberere und weniger ablenkende Oberfläche zu bieten.

    - `browser`
      - : Öffnet die App in einem herkömmlichen Browser-Tab oder einem neuen Fenster, wobei die plattformspezifische Konvention zum Öffnen von Links verwendet wird. Verwenden Sie diesen Wert für Apps, die innerhalb eines Browsers konzipiert sind und die volle Browserfunktionalität benötigen. Dies ist der Standardwert, wenn kein `display`-Modus angegeben ist.

## Beschreibung

Nachdem ein Browser einen `display`-Modus auf einen [application context](/de/docs/Glossary/application_context) angewendet hat, wird dies der Standard-Anzeigemodus für den obersten Browsing-Kontext. Der Browser kann diesen Anzeigemodus aus Sicherheitsgründen überschreiben oder den Benutzern die Möglichkeit bieten, zu einem anderen `display`-Modus zu wechseln.

Wenn ein Browser den angegebenen Anzeigemodus nicht unterstützt, folgt er einer vordefinierten Fallback-Kette: `fullscreen` → `standalone` → `minimal-ui` → `browser`.

Das {{cssxref("@media/display-mode", "display-mode")}} Media-Feature kann verwendet werden, um die Stile und anderes Verhalten Ihrer Anwendung basierend auf dem aktuellen `display`-Modus zu konfigurieren. Dies kann helfen, ein konsistentes Benutzererlebnis bereitzustellen, unabhängig davon, ob die Website von einer URL oder einem Desktop-Symbol aus gestartet wird.

> [!NOTE]
> Der Wert des `display-mode`-Media-Features spiegelt den tatsächlich von dem Browser verwendeten `display`-Modus wider.
> Dies kann sich von dem im Manifest angeforderten Modus unterscheiden, da der Browser den angeforderten Modus möglicherweise nicht unterstützt.

Wie im untenstehenden Code gezeigt, können Sie den Stil einer App je nach verwendetem `display-mode` anpassen.

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

### Angabe des Standalone-Anzeigemodus

Das folgende Beispiel-Manifestdatei für die Web-App namens "HackerWeb" definiert, wie die App beim Installieren auf dem Gerät eines Benutzers aussehen und sich verhalten soll. Das `display`-Mitglied ist auf `standalone` gesetzt, was angibt, dass die App in einem separaten Fenster ohne die typischen Browser-UI-Elemente wie die URL-Leiste geöffnet werden soll.

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
