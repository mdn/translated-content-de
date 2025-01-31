---
title: display
slug: Web/Manifest/Reference/display
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Der `display`-Manifest-Eintrag wird verwendet, um den bevorzugten Anzeigemodus für die Webanwendung anzugeben. Der Anzeigemodus bestimmt, wie viel der Browser-Benutzeroberfläche dem Benutzer angezeigt wird, wenn die App im Kontext eines Betriebssystems gestartet wird. Sie können wählen, ob die vollständige Browser-Oberfläche angezeigt oder ausgeblendet wird, um ein app-ähnlicheres Erlebnis zu bieten.

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

      - : Öffnet die App mit ausgeblendeten Browser-Oberflächenelementen und nutzt den gesamten verfügbaren Anzeigebereich. Verwenden Sie diesen Wert für Apps, bei denen ein vollbildiges Engagement entscheidend und erwünscht ist. Zum Beispiel für eine Spiele-App, die den gesamten Bildschirm ohne sichtbare Browser-Steuerelemente einnehmen kann und so ein vollständig immersives Spielerlebnis bietet.

        > [!NOTE]
        > Der Wert `fullscreen` des Manifest-Eintrags `display` funktioniert unabhängig von der [Fullscreen-API](/de/docs/Web/API/Fullscreen_API). Der `fullscreen`-Anzeigemodus ändert den Zustand des gesamten Browser-Fensters auf Vollbild, während die Fullscreen-API nur ein bestimmtes Element innerhalb des Fensters in den Vollbildmodus versetzt. Daher kann eine Web-App im `fullscreen`-Anzeigemodus sein, während [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) `null` ist und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) `false` ist.

    - `standalone`

      - : Öffnet die App so, dass sie wie eine eigenständige native App aussieht und sich anfühlt. Dies kann beinhalten, dass die App ein eigenes Fenster und ihr eigenes Icon im App-Launcher hat. Der Browser wird UI-Elemente wie eine URL-Leiste ausschließen, kann aber andere UI-Elemente wie die Statusleiste enthalten. Zum Beispiel eine Aufgabenmanager-App, die in einem eigenen Fenster ohne die URL-Leiste des Browsers geöffnet wird, während die Statusleiste des Geräts für Batterie und Benachrichtigungen angezeigt wird und so ein integriertes Erlebnis bietet.

    - `minimal-ui`

      - : Öffnet die App, damit sie wie eine eigenständige App aussieht, aber mit einem minimalen Satz von UI-Elementen für die Navigation. Die spezifischen Elemente können je nach Browser variieren, enthalten typischerweise jedoch Navigationssteuerelemente wie Zurück, Vorwärts, Neu laden und möglicherweise eine Möglichkeit, die URL der App anzuzeigen. Zusätzlich kann der Browser plattformspezifische UI-Elemente enthalten, die Funktionen zum Teilen und Drucken von Inhalten bieten. Verwenden Sie diesen Wert für Apps, bei denen die Anzeige einer minimalen Browser-Oberfläche vorteilhaft ist. Zum Beispiel für Nachrichtenleser oder andere allgemeine Lese-Apps, die nur die wesentlichen Browser-Steuerelemente wie Zurück- und Neuladen-Buttons anzeigen, um eine klarere und weniger ablenkende Oberfläche zu bieten.

    - `browser`
      - : Öffnet die App in einem herkömmlichen Browsertab oder neuen Fenster und verwendet die plattformspezifische Konvention zum Öffnen von Links. Verwenden Sie diesen Wert für Apps, die dafür designt sind, innerhalb eines Browser-Kontexts genutzt zu werden, wo die vollständige Browser-Funktionalität benötigt wird. Dies ist der Standardwert, wenn kein `display`-Modus angegeben ist.

## Beschreibung

Nachdem ein Browser einen `display`-Modus auf einen {{Glossary("application_context", "Anwendungskontext")}} angewendet hat, wird er zum Standard-Anzeigemodus für den übergeordneten Browsing-Kontext. Der Browser kann diesen Anzeigemodus aus Sicherheitsgründen überschreiben oder Benutzern ein Mittel bieten, um zu einem anderen `display`-Modus zu wechseln.

Wenn ein Browser den angegebenen Anzeigemodus nicht unterstützt, folgt er einer vordefinierten Fallback-Kette: `fullscreen` → `standalone` → `minimal-ui` → `browser`.

Die {{cssxref("@media/display-mode", "display-mode")}} Media-Feature kann verwendet werden, um die Anwendungsstile und anderes Verhalten basierend auf dem aktuellen `display`-Modus zu konfigurieren. Dies kann helfen, ein konsistentes Benutzererlebnis zu bieten, unabhängig davon, ob die Website über eine URL oder ein Desktop-Symbol gestartet wird.

> [!NOTE]
> Der Wert der `display-mode` Media-Feature spiegelt den tatsächlichen `display`-Modus wider, der vom Browser verwendet wird.
> Dieser kann von dem im Manifest angeforderten Modus abweichen, da der Browser den angeforderten Modus möglicherweise nicht unterstützt.

Wie im folgenden Code gezeigt, können Sie den Stil einer App je nach verwendetem `display-mode` anpassen.

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

### Angeben des Standalone-Anzeigemodus

Das folgende Beispiel-Manifest für die Web-App namens "HackerWeb" definiert, wie die App erscheinen und sich verhalten soll, wenn sie auf einem Gerät eines Benutzers installiert wird. Der `display`-Eintrag ist auf `standalone` gesetzt, was angibt, dass die App in einem separaten Fenster ohne die typischen Browser-UI-Elemente wie die URL-Leiste geöffnet werden soll.

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
