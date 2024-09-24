---
title: display
slug: Web/Manifest/display
l10n:
  sourceCommit: 7742fc98db494e89b706131c18811e2b853ab1d0
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `display`-Manifestfeld wird verwendet, um den bevorzugten Anzeigemodus für die Webanwendung anzugeben. Der Anzeigemodus bestimmt, wie viel der Browser-Benutzeroberfläche dem Benutzer angezeigt wird, wenn die App im Kontext eines Betriebssystems gestartet wird. Sie können wählen, ob Sie die vollständige Browser-Oberfläche anzeigen oder ausblenden möchten, um ein app-ähnlicheres Erlebnis zu bieten.

## Syntax

```json-nolint
/* Schlüsselwortwerte */
"display": "fullscreen"
"display": "standalone"
"display": "minimal-ui"
"display": "browser"
```

### Werte

- `display`

  - : Ein String mit Schlüsselwortwerten. Wenn nicht angegeben, wird der Standardwert `browser` verwendet. Die Schlüsselwortwerte umfassen:

    - `fullscreen`

      - : Öffnet die App mit ausgeblendeten Browser-Oberflächenelementen und nutzt den gesamten verfügbaren Anzeigebereich. Verwenden Sie diesen Wert für Apps, bei denen ein Vollbild-Engagement entscheidend und erwünscht ist. Zum Beispiel für eine Spiel-App, die den gesamten Bildschirm ohne sichtbare Browser-Steuerelemente einnehmen kann, um ein vollständig immersives Spielerlebnis zu bieten.

        > [!NOTE]
        > Der `fullscreen`-Wert des `display`-Manifestsfeldes funktioniert unabhängig von der [Fullscreen API](/de/docs/Web/API/Fullscreen_API). Der `fullscreen`-Anzeigemodus ändert den Zustand des gesamten Browserfensters auf Vollbild, während die Fullscreen API nur ein bestimmtes Element innerhalb des Fensters auf Vollbild umschaltet. Daher kann sich eine Web-App im `fullscreen`-Anzeigemodus befinden, während {{DOMxRef("Document.fullscreenElement")}} `null` ist und {{DOMxRef("Document.fullscreenEnabled")}} `false` ist.

    - `standalone`

      - : Öffnet die App so, dass sie aussieht und sich anfühlt wie eine eigenständige native App. Dazu kann gehören, dass die App ein eigenes Fenster und ihr eigenes Symbol im App-Launcher hat. Der Browser wird UI-Elemente wie die URL-Leiste ausschließen, kann jedoch weiterhin andere UI-Elemente wie die Statusleiste einschließen. Zum Beispiel für eine Aufgabenmanager-App, die in einem eigenen Fenster geöffnet wird, ohne die URL-Leiste des Browsers anzuzeigen, jedoch weiterhin die Statusleiste des Geräts für Batterie- und Benachrichtigungen anzeigt, um ein integriertes Erlebnis zu bieten.

    - `minimal-ui`

      - : Öffnet die App so, dass sie wie eine eigenständige App aussieht und sich so anfühlt, jedoch mit einem minimalen Satz von UI-Elementen für die Navigation. Die spezifischen Elemente können je nach Browser variieren, umfassen jedoch typischerweise Navigationselemente wie Zurück, Vorwärts, Neu laden und möglicherweise eine Möglichkeit, die URL der App anzuzeigen. Darüber hinaus kann der Browser plattformspezifische UI-Elemente enthalten, die Funktionen zum Teilen und Drucken von Inhalten bieten. Verwenden Sie diesen Wert für Apps, bei denen die Anzeige einer minimalistischen Browser-Oberfläche vorteilhaft ist. Zum Beispiel für Nachrichtenleser- oder andere Lese-Apps, die nur die wesentlichen Browsersteuerungen wie Zurück- und Neu laden-Tasten anzeigen und dadurch eine sauberere und weniger ablenkende Oberfläche bieten.

    - `browser`
      - : Öffnet die App in einem herkömmlichen Browsertab oder neuen Fenster, basierend auf der plattformspezifischen Konvention zum Öffnen von Links. Verwenden Sie diesen Wert für Apps, die innerhalb eines Browser-Kontexts genutzt werden sollen, wo volle Browserfunktionalität benötigt wird. Dies ist der Standardwert, wenn kein `display`-Modus angegeben ist.

## Beschreibung

Nachdem ein Browser einen `display`-Modus auf einen {{Glossary("application context")}} angewandt hat, wird dieser zum Standard-Anzeigemodus für den obersten Browsing-Kontext. Der Browser kann diesen Anzeigemodus aus Sicherheitsgründen überschreiben oder Benutzern eine Möglichkeit bieten, zu einem anderen `display`-Modus zu wechseln.

Wenn ein Browser den angegebenen Anzeigemodus nicht unterstützt, folgt er einer vordefinierten Fallback-Kette: `fullscreen` → `standalone` → `minimal-ui` → `browser`.

Die {{cssxref("@media/display-mode", "display-mode")}} Medienfunktion kann verwendet werden, um die Stile Ihrer Anwendung und andere Verhaltensweisen basierend auf dem aktuellen `display`-Modus zu konfigurieren. Dies kann dazu beitragen, ein konsistentes Benutzererlebnis zu bieten, unabhängig davon, ob die Website von einer URL oder von einem Desktop-Symbol aus gestartet wird.

> [!NOTE]
> Der Wert der `display-mode`-Medienfunktion spiegelt den tatsächlich vom Browser verwendeten `display`-Modus wider.
> Dies kann sich von dem im Manifest angeforderten Modus unterscheiden, da der Browser den angeforderten Modus möglicherweise nicht unterstützt.

Wie im folgenden Code gezeigt, können Sie den Stil einer App je nach verwendetem `display-mode` anpassen.

```css
@media (display-mode: standalone) {
  body {
    background-color: #f0f0f0; /* Hellgrauer Hintergrund für den Standalone-Modus */
  }
}

@media (display-mode: fullscreen) {
  body {
    background-color: #000000; /* Schwarzer Hintergrund für den Vollbildmodus */
  }
}
```

## Beispiele

### Festlegen des Standalone-Anzeigemodus

Das folgende Manifestbeispiel für die Web-App namens "HackerWeb" definiert, wie die App erscheinen und sich verhalten soll, wenn sie auf einem Gerät eines Benutzers installiert wird. Das `display`-Element ist auf `standalone` gesetzt, was angibt, dass die App in einem separaten Fenster ohne die typischen Browser-UI-Elemente wie die URL-Leiste geöffnet werden soll.

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

## Browserkompatibilität

{{Compat}}
