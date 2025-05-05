---
title: display
slug: Web/Progressive_web_apps/Manifest/Reference/display
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `display` Manifestmitglied wird verwendet, um den bevorzugten Anzeigemodus für die Webanwendung anzugeben. Der Anzeigemodus bestimmt, wie viel der Benutzeroberfläche des Browsers dem Benutzer angezeigt wird, wenn die App im Kontext eines Betriebssystems gestartet wird. Sie können wählen, ob die vollständige Browser-Oberfläche angezeigt oder ausgeblendet werden soll, um ein stärker an eine App erinnerndes Erlebnis zu bieten.

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

      - : Öffnet die App mit ausgeblendeten UI-Elementen des Browsers und nutzt den gesamten verfügbaren Anzeigebereich. Verwenden Sie diesen Wert für Apps, bei denen eine vollständige Bildschirmnutzung wichtig und gewünscht ist. Zum Beispiel für eine Spiele-App, die den gesamten Bildschirm ohne sichtbare Browser-Steuerelemente einnehmen kann, um ein vollständig immersives Spielerlebnis zu bieten.

        > [!NOTE]
        > Der `fullscreen` Wert des `display` Manifestmitglieds arbeitet separat von der [Fullscreen API](/de/docs/Web/API/Fullscreen_API). Der `fullscreen` Anzeigemodus ändert den Status des gesamten Browserfensters auf Vollbild, während die Fullscreen API nur ein bestimmtes Element innerhalb des Fensters in den Vollbildmodus versetzt. Eine Web-App kann sich also im `fullscreen` Anzeigemodus befinden, während [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) `null` ist und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) `false` ist.

    - `standalone`

      - : Öffnet die App so, dass sie wie eine eigenständige native App aussieht und sich anfühlt. Dies kann bedeuten, dass die App ein eigenes Fenster und ein eigenes Symbol im App-Launcher hat. Der Browser schließt UI-Elemente wie eine URL-Leiste aus, kann aber weiterhin andere UI-Elemente wie die Statusleiste enthalten. Zum Beispiel für eine Aufgabenverwaltung-App, die in einem eigenen Fenster ohne die URL-Leiste des Browsers geöffnet wird, dabei aber weiterhin die Statusleiste des Geräts für Batterie und Benachrichtigungen anzeigt und so eine integrierte Erfahrung bietet.

    - `minimal-ui`

      - : Öffnet die App so, dass sie wie eine eigenständige App aussieht und sich anfühlt, jedoch mit einem minimalen Satz von UI-Elementen zur Navigation. Die spezifischen Elemente können je nach Browser variieren, umfassen jedoch typischerweise Navigationselemente wie Zurück, Vorwärts, Neu laden und möglicherweise eine Möglichkeit, die URL der App anzuzeigen. Zusätzlich kann der Browser plattformspezifische UI-Elemente enthalten, die Funktionen zum Teilen und Drucken von Inhalten bieten. Verwenden Sie diesen Wert für Apps, bei denen das Anzeigen einer minimalen Browser-Oberfläche von Vorteil ist. Zum Beispiel für eine Nachrichtenleser-App oder andere allgemeine Lese-Apps, die nur die wesentlichen Browser-Steuerelemente wie Zurück- und Neu laden-Buttons zeigen und so eine sauberere und weniger ablenkende Oberfläche bieten.

    - `browser`
      - : Öffnet die App in einem herkömmlichen Browser-Tab oder neuen Fenster, unter Verwendung des plattformspezifischen Konventions zum Öffnen von Links. Verwenden Sie diesen Wert für Apps, die innerhalb eines Browsers verwendet werden sollen, wo vollständige Browser-Funktionalität benötigt wird. Dies ist der Standardwert, wenn kein `display`-Modus angegeben ist.

## Beschreibung

Nachdem ein Browser einen `display`-Modus auf einen {{Glossary("application_context", "Anwendungskontext")}} angewendet hat, wird dieser zum Standardanzeigemodus für den übergeordneten Browsing-Kontext. Der Browser kann diesen Anzeigemodus aus Sicherheitsgründen überschreiben oder den Benutzern eine Möglichkeit bieten, zu einem anderen `display`-Modus zu wechseln.

Wenn ein Browser den angegebenen Anzeigemodus nicht unterstützt, folgt er einer vordefinierten Rückfallkette: `fullscreen` → `standalone` → `minimal-ui` → `browser`.

Das {{cssxref("@media/display-mode", "display-mode")}} Medien-Feature kann verwendet werden, um die Stilgestaltung und das Verhalten Ihrer Anwendung basierend auf dem aktuellen `display`-Modus zu konfigurieren. Dies kann dazu beitragen, ein konsistentes Benutzererlebnis zu bieten, unabhängig davon, ob die Website von einer URL oder von einem Desktopsymbol aus gestartet wird.

> [!NOTE]
> Der Wert des `display-mode` Medien-Features spiegelt den tatsächlich vom Browser verwendeten `display`-Modus wider.
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

### Angabe des standalone Anzeigemodus

Das folgende Beispiel eines Manifestdateien für die Web-App "HackerWeb" definiert, wie die App aussehen und sich verhalten soll, wenn sie auf einem Gerät des Benutzers installiert wird. Das `display`-Mitglied ist auf `standalone` gesetzt, was angibt, dass die App in einem separaten Fenster ohne typische UI-Elemente des Browsers wie die URL-Leiste geöffnet werden soll.

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
