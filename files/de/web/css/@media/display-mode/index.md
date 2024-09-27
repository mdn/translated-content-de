---
title: display-mode
slug: Web/CSS/@media/display-mode
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Das **`display-mode`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob eine Web-App in einem normalen Browsertab oder in einer alternativen Weise angezeigt wird, wie zum Beispiel als eigenständige App oder im Vollbildmodus.

Zum Beispiel:

- Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) [kann ihren Anzeigemodus festlegen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), indem sie das [`display`](/de/docs/Web/Manifest/display)-Element im Manifest setzt. In diesem Fall identifiziert der Wert `display-mode` den gesetzten Wert (beachten Sie, dass dies möglicherweise nicht der gleiche wie der im Manifest angeforderte Wert ist, da ein Browser den angeforderten Modus möglicherweise nicht unterstützt).

- Jede Web-App kann die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) verwenden, um den Anzeigemodus festzulegen, und in diesem Fall identifiziert der Wert von `display-mode` den gesetzten Modus.

Der `display-mode`-Wert gilt für den obersten Browsing-Kontext und alle untergeordneten Browsing-Kontexte.

## Syntax

Das `display-mode`-Feature wird als Schlüsselwortwert aus der unten stehenden Liste angegeben.

- `browser`
  - : Die Anwendung öffnet sich in einem herkömmlichen Browsertab oder neuen Fenster, abhängig vom Browser und der Plattform.
- `fullscreen`
  - : Der gesamte verfügbare Anzeigebereich wird genutzt und kein User-Agent-[Chrome](/de/docs/Glossary/chrome) wird angezeigt. Dies kann verwendet werden, um CSS nur anzuwenden, wenn die App im Vollbildmodus durch die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder durch Verwendung des `fullscreen`-Wertes des [`display`](/de/docs/Web/Manifest/display)-Elements des Web-App-Manifests gesetzt wurde.
- `minimal-ui`
  - : Die Anwendung sieht aus und fühlt sich an wie eine eigenständige Anwendung, verfügt jedoch über eine minimale Anzahl von UI-Elementen zur Steuerung der Navigation. Die Elemente variieren je nach Browser.
- `picture-in-picture`
  - : Dieser Modus ermöglicht es den Nutzern, spezifische Inhalte weiterhin zu konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren. Die App wird in einem schwebenden und immer im Vordergrund stehenden Fenster angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App durch die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) in Picture-in-Picture-Mode versetzt wurde.
- `standalone`
  - : Die Anwendung sieht aus und fühlt sich an wie eine eigenständige Anwendung. Dies kann beinhalten, dass die Anwendung ein separates Fenster hat, ihr eigenes Icon im Anwendungsstarter, etc. In diesem Modus schließt der User-Agent UI-Elemente zur Navigation aus, kann jedoch andere UI-Elemente wie eine Statusleiste einbeziehen.
- `window-controls-overlay`
  - : In diesem Modus sieht die Anwendung aus und fühlt sich an wie eine eigenständige Desktop-Anwendung, und das [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API)-Feature ist aktiviert.

## Beispiele

### Wenden Sie CSS an, wenn die Anwendung im Vollbildmodus ist

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

### Stellen Sie ein helles und dunkles Farbschema für Picture-in-Picture-Inhalte bereit

In diesem Beispiel kombinieren wir den Wert `display-mode: picture-in-picture` mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media-Feature, um helle und dunkle Farbschemata zu erstellen, die basierend auf der Farbschema-Präferenz des Nutzers angewendet werden, nur wenn die App im Picture-in-Picture-Modus angezeigt wird.

```css
@media (display-mode: picture-in-picture) and (prefers-color-scheme: light) {
  body {
    background: antiquewhite;
  }
}

@media (display-mode: picture-in-picture) and (prefers-color-scheme: dark) {
  body {
    background: #333;
  }

  a {
    color: antiquewhite;
  }
}
```

Weitere Informationen und ein vollständiges Beispiel finden Sie unter [Using the Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
