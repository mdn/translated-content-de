---
title: display-mode
slug: Web/CSS/@media/display-mode
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

Die **`display-mode`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob eine Web-App in einem normalen Browser-Tab oder auf eine alternative Weise angezeigt wird, wie z. B. als eigenständige App oder im Vollbildmodus.

Zum Beispiel:

- Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) [kann ihren Anzeigemodus festlegen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), indem sie das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Element in ihrem Manifest setzt. In diesem Fall identifiziert der Wert von `display-mode` den gesetzten Wert (beachten Sie jedoch, dass dies nicht derselbe Wert wie der im Manifest angeforderte sein muss, da ein Browser den angeforderten Modus möglicherweise nicht unterstützt).

- Jede Web-App kann die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) oder die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) verwenden, um den Anzeigemodus einzustellen. In diesem Fall identifiziert der Wert von `display-mode` den eingestellten Modus.

Der `display-mode`-Wert gilt für den obersten Browsing-Kontext und alle untergeordneten Browsing-Kontexte.

## Syntax

Die `display-mode`-Funktion wird als Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `browser`
  - : Die Anwendung wird in einem herkömmlichen Browser-Tab oder einem neuen Fenster geöffnet, abhängig vom Browser und der Plattform.
- `fullscreen`
  - : Der gesamte verfügbare Bildschirmbereich wird genutzt und kein User-Agent-{{Glossary("chrome", "Chrome")}} wird angezeigt. Dies kann verwendet werden, um CSS nur anzuwenden, wenn die App im Vollbildmodus durch die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) oder unter Verwendung des `fullscreen`-Wertes des [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Elements des Web-App-Manifests gesetzt wurde.
- `minimal-ui`
  - : Die Anwendung sieht aus und fühlt sich an wie eine eigenständige Anwendung, hat aber eine minimale Menge an UI-Elementen zur Steuerung der Navigation. Die Elemente variieren je nach Browser.
- `picture-in-picture`
  - : Dieser Modus ermöglicht es Benutzern, spezifische Inhalte weiterhin zu konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren. Die App wird in einem schwebenden und immer im Vordergrund befindlichen Fenster angezeigt. Dies kann verwendet werden, um CSS nur anzuwenden, wenn die App im Bild-im-Bild-Modus durch die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) versetzt wurde.
- `standalone`
  - : Die Anwendung sieht aus und fühlt sich an wie eine eigenständige Anwendung. Dies kann beinhalten, dass die Anwendung ein eigenes Fenster hat, ihr eigenes Symbol im Anwendungsstarter, usw. In diesem Modus wird der User-Agent UI-Elemente zur Steuerung der Navigation ausschließen, kann aber andere UI-Elemente wie eine Statusleiste enthalten.
- `window-controls-overlay`
  - : In diesem Modus sieht die Anwendung aus und fühlt sich an wie eine eigenständige Desktop-Anwendung, und die [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API)-Funktion ist aktiviert.

## Beispiele

### CSS anwenden, wenn die Anwendung im Vollbildmodus ist

```css
@media (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

### Ein helles und dunkles Farbschema für Bild-in-Bild-Inhalte bereitstellen

In diesem Beispiel kombinieren wir den Wert `display-mode: picture-in-picture` mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienfunktion, um helle und dunkle Farbschemata zu erstellen, die basierend auf der Farbvorliebe des Benutzers angewendet werden, nur wenn die App im Bild-im-Bild-Modus angezeigt wird.

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

Weitere Informationen und ein vollständiges Beispiel finden Sie unter [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
