---
title: display-mode
slug: Web/CSS/@media/display-mode
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{CSSRef}}

Die **`display-mode`** [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob eine Web-App in einem normalen Browser-Tab oder auf alternative Weise, wie etwa als eigenständige App oder im Vollbildmodus, angezeigt wird.

Zum Beispiel:

- Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) [kann ihren Anzeigemodus festlegen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), indem sie das [`display`](/de/docs/Web/Manifest/Reference/display)-Element in ihrem Manifest setzt. In diesem Fall gibt der Wert von `display-mode` den Wert an, der gesetzt wurde (beachten Sie jedoch, dass dies nicht unbedingt derselbe Wert wie der im Manifest angeforderte sein muss, da ein Browser den angeforderten Modus möglicherweise nicht unterstützt).

- Jede Web-App kann die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) verwenden, um den Anzeigemodus festzulegen, und in diesem Fall gibt der Wert von `display-mode` den Modus an, der gesetzt wurde.

Der `display-mode`-Wert gilt für den obersten Browser-Kontext und alle eingebetteten Browser-Kontexte.

## Syntax

Das `display-mode`-Feature wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `browser`
  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster, je nach Browser und Plattform.
- `fullscreen`
  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird keine Benutzer-Agent-{{Glossary("chrome", "Chrome")}} angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App durch die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder durch die Verwendung des `fullscreen`-Wertes des [`display`](/de/docs/Web/Manifest/Reference/display)-Elements des Web App Manifests in den Vollbildmodus versetzt wurde.
- `minimal-ui`
  - : Die Anwendung sieht aus und fühlt sich an wie eine eigenständige Anwendung, wird jedoch nur über eine minimale Anzahl von UI-Elementen zur Navigation verfügen. Diese Elemente variieren je nach Browser.
- `picture-in-picture`
  - : In diesem Modus können Benutzer weiterhin spezifische Inhalte konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren. Die App wird in einem schwebenden und immer im Vordergrund befindlichen Fenster angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App durch die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) in den Picture-in-Picture-Modus versetzt wurde.
- `standalone`
  - : Die Anwendung wird aussehen und sich anfühlen wie eine eigenständige Anwendung. Dies kann beinhalten, dass die Anwendung ein eigenes Fenster, ein eigenes Symbol im Anwendungsstarter, etc. hat. In diesem Modus wird der Benutzer-Agent UI-Elemente zur Navigation ausschließen, kann jedoch andere UI-Elemente wie eine Statusleiste enthalten.
- `window-controls-overlay`
  - : In diesem Modus sieht die Anwendung aus und fühlt sich an wie eine eigenständige Desktop-Anwendung und die [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API)-Funktion ist aktiviert.

## Beispiele

### CSS anwenden, wenn die Anwendung im Vollbildmodus ist

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

### Bereitstellung eines hellen und dunklen Farbschemas für Picture-in-Picture-Inhalte

In diesem Beispiel kombinieren wir den `display-mode: picture-in-picture`-Wert mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienfeature, um helle und dunkle Farbschemata zu erstellen, die basierend auf der Farbschema-Präferenz des Benutzers angewendet werden, nur wenn die App im Picture-in-Picture-Modus angezeigt wird.

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

Siehe [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für weitere Informationen und ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
