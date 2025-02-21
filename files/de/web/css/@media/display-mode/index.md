---
title: display-mode
slug: Web/CSS/@media/display-mode
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{CSSRef}}

Die **`display-mode`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu überprüfen, ob eine Web-App auf einem normalen Browser-Tab oder auf andere Weise, wie beispielsweise als eigenständige App oder im Vollbildmodus, angezeigt wird.

Zum Beispiel:

- Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) [kann ihren Anzeigemodus festlegen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), indem sie das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Element in ihrem Manifest setzt. In diesem Fall identifiziert der Wert von `display-mode` den gesetzten Wert (beachten Sie jedoch, dass dies nicht unbedingt derselbe Wert sein muss, der im Manifest angefordert wurde, da ein Browser den angeforderten Modus möglicherweise nicht unterstützt).

- Jede Web-App kann die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) oder die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) verwenden, um den Anzeigemodus festzulegen. In diesem Fall identifiziert der Wert von `display-mode` den gesetzten Modus.

Der `display-mode`-Wert gilt für den obersten Browsing-Kontext und alle untergeordneten Browsing-Kontexte.

## Syntax

Die `display-mode`-Funktion wird als Schlüsselwortwert aus der folgenden Liste angegeben.

- `browser`
  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster, abhängig vom Browser und der Plattform.
- `fullscreen`
  - : Der gesamte verfügbare Anzeigebereich wird genutzt und keine User-Agent-{{Glossary("chrome", "Chrome")}} wird angezeigt. Dies kann verwendet werden, um CSS nur anzuwenden, wenn die App durch die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) oder durch Verwendung des `fullscreen`-Wertes des [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Elements des Web App Manifests in den Vollbildmodus versetzt wurde.
- `minimal-ui`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich anfühlen, aber eine minimale Menge an UI-Elementen zur Steuerung der Navigation haben. Die Elemente variieren je nach Browser.
- `picture-in-picture`
  - : Dieser Modus ermöglicht es Benutzern, spezifische Inhalte weiter konsumieren zu können, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren. Die App wird in einem schwebenden und immer im Vordergrund stehenden Fenster angezeigt. Dies kann verwendet werden, um CSS nur anzuwenden, wenn die App durch die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) in den Picture-in-Picture-Modus versetzt wurde.
- `standalone`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich anfühlen. Dies kann beinhalten, dass die Anwendung ein eigenes Fenster, ein eigenes Icon im Anwendungsstarter usw. hat. In diesem Modus wird der User Agent UI-Elemente zur Steuerung der Navigation ausschließen, kann aber andere UI-Elemente wie eine Statusleiste einschließen.
- `window-controls-overlay`
  - : In diesem Modus sieht die Anwendung aus und fühlt sich an wie eine eigenständige Desktop-Anwendung, und das [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API)-Feature ist aktiviert.

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

### Eine helle und dunkle Farbgestaltung für Picture-in-Picture-Inhalte bereitstellen

In diesem Beispiel kombinieren wir den `display-mode: picture-in-picture`-Wert mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienfunktion, um helle und dunkle Farbschemata zu erstellen, die basierend auf der Farbschemavorliebe des Benutzers angewendet werden, nur wenn die App im Picture-in-Picture-Modus angezeigt wird.

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
