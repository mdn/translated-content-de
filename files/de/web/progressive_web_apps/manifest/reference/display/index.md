---
title: display
slug: Web/Progressive_web_apps/Manifest/Reference/display
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

Das `display` Manifest-Mitglied wird verwendet, um Ihren bevorzugten Anzeigemodus für die Webanwendung anzugeben. Der Anzeigemodus bestimmt, wie viel der Browser-Benutzeroberfläche dem Benutzer angezeigt wird, wenn die App im Kontext eines Betriebssystems gestartet wird. Sie können wählen, ob die vollständige Browser-Oberfläche angezeigt oder ausgeblendet werden soll, um eine app-ähnlichere Erfahrung zu bieten.

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
      - : Öffnet die App mit ausgeblendeten Browser-UI-Elementen und nutzt den gesamten verfügbaren Anzeigebereich. Verwenden Sie diesen Wert für Apps, bei denen ein Vollbildmodus entscheidend und erwünscht ist. Zum Beispiel können Sie ihn für eine Spiele-App verwenden, die den gesamten Bildschirm ohne sichtbare Browser-Steuerungen beansprucht und so ein vollständig immersives Spielerlebnis bietet.

        > [!NOTE]
        > Der `fullscreen`-Wert des `display` Mitglieds des Manifests funktioniert unabhängig von der [Fullscreen API](/de/docs/Web/API/Fullscreen_API). Der `fullscreen` Anzeigemodus versetzt das gesamte Browserfenster in den Vollbildmodus, während die Fullscreen API nur ein bestimmtes Element innerhalb des Fensters auf Vollbild schaltet. Daher kann eine Web-App im `fullscreen`-Anzeigemodus sein, während [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) `null` ist und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) `false` ist.

    - `standalone`
      - : Öffnet die App so, dass sie wie eine eigenständige native App aussieht und sich anfühlt. Dies kann bedeuten, dass die App ein eigenes Fenster und ein eigenes Symbol im App-Launcher hat. Der Browser wird UI-Elemente wie eine URL-Leiste ausschließen, kann jedoch weiterhin andere UI-Elemente wie die Statusleiste enthalten. Verwenden Sie diesen Modus für eine Aufgabenverwaltungs-App, die in ihrem eigenen Fenster ohne die URL-Leiste des Browsers öffnet, während sie weiterhin die Statusleiste des Geräts zur Anzeige von Batteriestand und Benachrichtigungen nutzt, um eine integrierte Erfahrung zu bieten.

    - `minimal-ui`
      - : Öffnet die App so, dass sie wie eine eigenständige App aussieht und sich anfühlt, jedoch mit einer minimalen Anzahl von UI-Elementen für die Navigation. Die spezifischen Elemente können je nach Browser variieren, umfassen jedoch typischerweise Navigationselemente wie Zurück, Vorwärts, Neuladen und möglicherweise eine Möglichkeit, die URL der App anzuzeigen. Der Browser kann auch plattform-spezifische UI-Elemente einbeziehen, die Funktionen wie Teilen und Drucken von Inhalten bieten. Verwenden Sie diesen Wert für Apps, bei denen es vorteilhaft ist, eine minimale Browser-Oberfläche anzuzeigen. Zum Beispiel können Sie ihn für Nachrichtenleser oder andere allgemeine Lese-Apps verwenden, die nur die essenziellen Browser-Elemente wie Zurück- und Neuladen-Schaltflächen anzeigen, um eine sauberere und weniger ablenkende Oberfläche zu bieten.

    - `browser`
      - : Öffnet die App in einem herkömmlichen Browser-Tab oder neuen Fenster und nutzt die plattform-spezifische Konvention zum Öffnen von Links. Verwenden Sie diesen Wert für Apps, die innerhalb eines Browser-Kontexts genutzt werden sollen, bei dem die vollständige Browserfunktionalität benötigt wird. Dies ist der Standardwert, wenn kein `display` Modus angegeben ist.

## Beschreibung

Nachdem ein Browser einen `display` Modus auf einen {{Glossary("application_context", "Anwendungskontext")}} angewendet hat, wird er zum Standardanzeigemodus für den obersten Browsing-Kontext. Der Browser kann diesen Anzeigemodus aus Sicherheitsgründen außer Kraft setzen oder den Benutzern die Möglichkeit bieten, zu einem anderen `display` Modus zu wechseln.

Wenn ein Browser den angegebenen Anzeigemodus nicht unterstützt, folgt er einer vordefinierten Rückfall-Reihenfolge: `fullscreen` → `standalone` → `minimal-ui` → `browser`.

Das {{cssxref("@media/display-mode", "display-mode")}} Medienmerkmal kann verwendet werden, um Ihre Anwendungsstile und anderes Verhalten basierend auf dem aktuellen `display` Modus zu konfigurieren. Dies kann helfen, eine konsistente Benutzererfahrung zu bieten, unabhängig davon, ob die Website über eine URL oder ein Desktop-Symbol gestartet wird.

> [!NOTE]
> Der Wert des `display-mode` Medienmerkmals spiegelt den tatsächlichen `display` Modus wider, der vom Browser verwendet wird.
> Dieser kann von dem im Manifest angeforderten Modus abweichen, da der Browser den angeforderten Modus möglicherweise nicht unterstützt.

Wie im folgenden Code gezeigt, können Sie den Stil einer App abhängig vom verwendeten `display-mode` anpassen.

```css
@media (display-mode: standalone) {
  body {
    background-color: #f0f0f0; /* Light grey background for standalone mode */
  }
}

@media (display-mode: fullscreen) {
  body {
    background-color: black; /* Black background for fullscreen mode */
  }
}
```

## Beispiele

### Standalone-Anzeigemodus angeben

Die folgende Beispielmanifestdatei für die Web-App namens "HackerWeb" definiert, wie die App aussehen und sich verhalten soll, wenn sie auf dem Gerät eines Benutzers installiert wird. Das `display` Mitglied ist auf `standalone` gesetzt, was angibt, dass die App in einem separaten Fenster ohne die typischen UI-Elemente des Browsers wie die URL-Leiste geöffnet werden soll.

```json
{
  "name": "HackerWeb",
  "short_name": "HackerWeb",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "white",
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
