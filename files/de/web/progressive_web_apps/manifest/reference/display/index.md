---
title: display
slug: Web/Progressive_web_apps/Manifest/Reference/display
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `display`-Manifestmitglied wird verwendet, um den bevorzugten Darstellungsmodus für die Webanwendung festzulegen. Der Darstellungsmodus bestimmt, wie viel der Browser-Oberfläche dem Nutzer angezeigt wird, wenn die App im Kontext eines Betriebssystems gestartet wird. Sie können wählen, ob die vollständige Browser-Oberfläche angezeigt oder versteckt werden soll, um ein mehr app-ähnliches Erlebnis zu bieten.

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

      - : Öffnet die App mit versteckten Browser-UI-Elementen und nutzt die gesamte verfügbare Anzeigefläche. Verwenden Sie diesen Wert für Apps, bei denen ein Bildschirmfüllerlebnis entscheidend und erwünscht ist. Beispielsweise kann dies für eine Spiele-App, die den gesamten Bildschirm ohne sichtbare Browser-Steuerelemente einnimmt, verwendet werden, um ein vollständig immersives Spielerlebnis zu bieten.

        > [!NOTE]
        > Der `fullscreen`-Wert des `display`-Mitglieds im Manifest arbeitet separat von der [Fullscreen API](/de/docs/Web/API/Fullscreen_API). Der `fullscreen`-Darstellungsmodus ändert den Zustand des gesamten Browserfensters auf Vollbild, während die Fullscreen API nur ein bestimmtes Element im Fenster auf Vollbild setzt. Daher kann eine Web-App sich im `fullscreen`-Darstellungsmodus befinden, während [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) `null` ist und [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) `false` ist.

    - `standalone`

      - : Öffnet die App, sodass sie wie eine eigenständige native App aussieht und sich anfühlt. Dies kann beinhalten, dass die App ein eigenes Fenster und ein eigenes Icon im App-Launcher hat. Der Browser wird UI-Elemente wie eine URL-Leiste ausschließen, kann aber dennoch andere UI-Elemente wie die Statusleiste einbeziehen. Beispielsweise könnte dies für eine Aufgabenmanager-App verwendet werden, die in einem eigenen Fenster ohne die URL-Leiste des Browsers geöffnet wird, während die Statusleiste des Geräts für Batterie- und Benachrichtigungen weiterhin angezeigt wird, um ein integriertes Erlebnis zu bieten.

    - `minimal-ui`

      - : Öffnet die App, sodass sie wie eine eigenständige App aussieht und sich anfühlt, jedoch mit einem minimalen Satz von UI-Elementen zur Navigation. Die spezifischen Elemente können je nach Browser variieren, beinhalten aber typischerweise Navigationselemente wie Zurück, Vorwärts, Neuladen und möglicherweise eine Möglichkeit, die URL der App anzuzeigen. Zusätzlich kann der Browser plattformspezifische UI-Elemente einbeziehen, die Funktionen zum Teilen und Drucken von Inhalten bieten. Verwenden Sie diesen Wert für Apps, bei denen die Anzeige einer minimalen Browseroberfläche von Vorteil ist. Beispielweise für eine Nachrichtenlese-App oder andere allgemeine Leseseiten, die nur die wesentlichen Browser-Steuerungen wie Zurück- und Neulade-Buttons anzeigen und somit eine sauberere und weniger ablenkende Oberfläche bieten.

    - `browser`
      - : Öffnet die App in einem herkömmlichen Browser-Tab oder einem neuen Fenster, gemäß der plattformspezifischen Konvention zum Öffnen von Links. Verwenden Sie diesen Wert für Apps, die dazu bestimmt sind, im Browser-Kontext verwendet zu werden, wo die volle Browser-Funktionalität benötigt wird. Dies ist der Standardwert, wenn kein `display`-Modus angegeben ist.

## Beschreibung

Nachdem ein Browser einen `display`-Modus auf einen {{Glossary("application_context", "Anwendungskontext")}} angewendet hat, wird dieser der Standardanzeigemodus für den obersten Browsing-Kontext. Der Browser kann diesen Anzeigemodus aus Sicherheitsgründen überschreiben oder den Benutzern eine Möglichkeit bieten, zu einem anderen `display`-Modus zu wechseln.

Wenn ein Browser den angegebenen Darstellungsmodus nicht unterstützt, folgt er einer vordefinierten Fallback-Kette: `fullscreen` → `standalone` → `minimal-ui` → `browser`.

Das {{cssxref("@media/display-mode", "display-mode")}} Media-Feature kann verwendet werden, um die Stile Ihrer Anwendung und weiteres Verhalten basierend auf dem aktuellen `display`-Modus zu konfigurieren. Dies kann dazu beitragen, eine konsistente Benutzererfahrung bereitzustellen, unabhängig davon, ob die Website von einer URL oder von einer Desktop-Verknüpfung gestartet wird.

> [!NOTE]
> Der Wert des `display-mode` Media-Feature spiegelt den tatsächlichen `display`-Modus wider, der vom Browser verwendet wird.
> Dieser kann sich von dem im Manifest angeforderten Modus unterscheiden, da der Browser den angeforderten Modus möglicherweise nicht unterstützt.

Wie im unten stehenden Code gezeigt, können Sie den Stil einer App je nach verwendetem `display-mode` anpassen.

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

### Spezifizieren des `standalone`-Darstellungsmodus

Das folgende Beispiel-Manifest für die Web-App namens "HackerWeb" definiert, wie die App erscheinen und sich verhalten sollte, wenn sie auf einem Gerät des Benutzers installiert wird. Das `display`-Mitglied ist auf `standalone` gesetzt, was angibt, dass die App in einem eigenen Fenster ohne die typischen Browser-UI-Elemente wie die URL-Leiste geöffnet werden soll.

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
