---
title: display-mode
slug: Web/CSS/@media/display-mode
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Das **`display-mode`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob eine Web-App in einem normalen Browser-Tab oder auf andere Weise angezeigt wird, z. B. als eigenständige App oder im Vollbildmodus.

Zum Beispiel:

- Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) [kann ihren Anzeigemodus festlegen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), indem sie das [`display`](/de/docs/Web/Manifest/display) Element in ihrem Manifest setzt. In diesem Fall identifiziert der Wert von `display-mode` den festgelegten Wert (beachten Sie jedoch, dass dies möglicherweise nicht dem im Manifest angeforderten Wert entspricht, da ein Browser den angeforderten Modus möglicherweise nicht unterstützt).

- Jede Web-App kann die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) verwenden, um den Anzeigemodus festzulegen. In diesem Fall identifiziert der Wert von `display-mode` den festgelegten Modus.

Der `display-mode` Wert gilt für den obersten Browsing-Kontext und alle untergeordneten Browsing-Kontexte.

## Syntax

Das `display-mode` Merkmal wird als ein Schlüsselwortwert aus der unten stehenden Liste angegeben.

- `browser`
  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster, abhängig vom Browser und der Plattform.
- `fullscreen`
  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird kein User-Agent-{{Glossary("chrome", "Chrome")}} angezeigt. Dies kann verwendet werden, um CSS nur anzuwenden, wenn die App durch die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) in den Vollbildmodus gebracht wurde oder durch Verwendung des `fullscreen` Werts des [`display`](/de/docs/Web/Manifest/display) Elements des Web App Manifests.
- `minimal-ui`
  - : Die Anwendung sieht aus und fühlt sich an wie eine eigenständige App, verfügt jedoch über eine minimalistische Reihe von UI-Elementen zur Navigation. Die Elemente variieren je nach Browser.
- `picture-in-picture`
  - : Dieser Modus ermöglicht es Nutzern, bestimmte Inhalte weiter zu konsumieren, während sie mit anderen Seiten oder Anwendungen auf ihrem Gerät interagieren. Die App wird in einem schwebenden und immer im Vordergrund befindlichen Fenster angezeigt. Dies kann verwendet werden, um CSS nur anzuwenden, wenn die App durch die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) in den Picture-in-Picture-Modus gebracht wurde.
- `standalone`
  - : Die Anwendung sieht aus und fühlt sich an wie eine eigenständige App. Dies kann beinhalten, dass die Anwendung ein eigenes Fenster hat, ihr eigenes Symbol im Anwendungsstarter, usw. In diesem Modus schließt der User-Agent Navigationselemente aus, kann jedoch andere UI-Elemente wie eine Statusleiste enthalten.
- `window-controls-overlay`
  - : In diesem Modus sieht die Anwendung aus und fühlt sich an wie eine eigenständige Desktop-Anwendung, und die [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API) Funktion ist aktiviert.

## Beispiele

### CSS anwenden, wenn sich die Anwendung im Vollbildmodus befindet

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

### Ein leichtes und dunkles Farbschema für Picture-in-Picture-Inhalte bereitstellen

In diesem Beispiel kombinieren wir den `display-mode: picture-in-picture` Wert mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medienmerkmal, um helle und dunkle Farbschemata zu erstellen, die je nach Farbvorliebe des Nutzers angewendet werden, nur wenn die App im Picture-in-Picture-Modus angezeigt wird.

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
