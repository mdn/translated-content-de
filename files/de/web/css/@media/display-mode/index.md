---
title: display-mode
slug: Web/CSS/@media/display-mode
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`display-mode`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob eine Web-App in einem normalen Browser-Tab oder auf alternative Weise angezeigt wird, wie beispielsweise als eigenständige App oder im Vollbildmodus.

Zum Beispiel:

- Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) [kann ihren Anzeigemodus festlegen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), indem sie das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Mitglied in ihrem Manifest setzt. In diesem Fall identifiziert der Wert von `display-mode` den gesetzten Wert (beachten Sie jedoch, dass dieser möglicherweise nicht mit dem im Manifest angeforderten Wert übereinstimmt, da ein Browser den angeforderten Modus möglicherweise nicht unterstützt).

- Jede Web-App kann die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) verwenden, um den Anzeigemodus festzulegen, und in diesem Fall identifiziert der Wert von `display-mode` den festgelegten Modus.

Der `display-mode` Wert gilt für den obersten Browsing-Kontext und alle untergeordneten Browsing-Kontexte.

## Syntax

Das `display-mode` Merkmal wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

- `browser`
  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder neuen Fenster, abhängig vom Browser und der Plattform.
- `fullscreen`
  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird kein User-Agent-{{Glossary("chrome", "Chrome")}} angezeigt. Dies kann verwendet werden, um CSS nur anzuwenden, wenn die App vom [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder durch Verwendung des `fullscreen` Werts des [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Mitglieds des Web App Manifests in den Vollbildmodus versetzt wurde.
- `minimal-ui`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich anfühlen, hat jedoch eine minimale Anzahl von UI-Elementen zur Steuerung der Navigation. Die Elemente variieren je nach Browser.
- `picture-in-picture`
  - : Dieser Modus ermöglicht es Benutzern, spezifische Inhalte weiterhin zu konsumieren, während sie mit anderen Sites oder Anwendungen auf ihrem Gerät interagieren. Die App wird in einem schwebenden und immer im Vordergrund befindlichen Fenster angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App vom [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) in den Picture-in-Picture-Modus versetzt wurde.
- `standalone`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich anfühlen. Dies kann beinhalten, dass die Anwendung ein anderes Fenster und ihr eigenes Icon im Anwendungsstarter hat, etc. In diesem Modus wird der User-Agent UI-Elemente zur Steuerung der Navigation ausschließen, kann jedoch andere UI-Elemente wie eine Statusleiste umfassen.
- `window-controls-overlay`
  - : In diesem Modus sieht die Anwendung aus und fühlt sich an wie eine eigenständige Desktop-Anwendung, und das [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) Feature ist aktiviert.

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

### Helles und dunkles Farbschema für Picture-in-Picture-Inhalte bereitstellen

In diesem Beispiel kombinieren wir den Wert `display-mode: picture-in-picture` mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienmerkmal, um helle und dunkle Farbschemata zu erstellen, die basierend auf der Farbschema-Präferenz des Benutzers angewendet werden, nur wenn die App im Picture-in-Picture-Modus angezeigt wird.

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
