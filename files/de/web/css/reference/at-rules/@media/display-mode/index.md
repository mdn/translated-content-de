---
title: "`display-mode` CSS-Medienmerkmal"
short-title: display-mode
slug: Web/CSS/Reference/At-rules/@media/display-mode
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`display-mode`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob eine Web-App in einem normalen Browser-Tab oder auf alternative Weise angezeigt wird, wie zum Beispiel als eigenständige App oder im Vollbildmodus.

Beispielsweise:

- Eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) [kann ihren Anzeigemodus festlegen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), indem das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Mitglied in ihrem Manifest gesetzt wird. In diesem Fall identifiziert der Wert von `display-mode` den gesetzten Wert (beachten Sie jedoch, dass dies möglicherweise nicht dem im Manifest angeforderten Wert entspricht, da ein Browser den angeforderten Modus möglicherweise nicht unterstützt).

- Jede Web-App kann die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) verwenden, um den Anzeigemodus festzulegen. In diesem Fall identifiziert der Wert von `display-mode` den gesetzten Modus.

Der `display-mode`-Wert gilt für den obersten Browsing-Kontext und alle untergeordneten Browsing-Kontexte.

## Syntax

Das `display-mode`-Merkmal wird als Schlüsselwortwert spezifiziert, der aus der unten stehenden Liste ausgewählt wird.

- `browser`
  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder in einem neuen Fenster, abhängig vom Browser und der Plattform.
- `fullscreen`
  - : Der gesamte verfügbare Anzeigebereich wird genutzt und kein User-Agent-{{Glossary("chrome", "Chrome")}} wird angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App durch die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder durch Verwendung des `fullscreen`-Werts des [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Mitglieds des Web-App-Manifests in den Vollbildmodus versetzt wurde.
- `minimal-ui`
  - : Die Anwendung sieht wie eine eigenständige Anwendung aus und fühlt sich auch so an, enthält jedoch nur eine minimale Anzahl von UI-Elementen zur Steuerung der Navigation. Die Elemente variieren je nach Browser.
- `picture-in-picture`
  - : Dieser Modus ermöglicht es den Nutzern, bestimmte Inhalte weiterhin zu konsumieren, während sie mit anderen Seiten oder Anwendungen auf ihrem Gerät interagieren. Die App wird in einem schwebenden und immer im Vordergrund befindlichen Fenster angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App durch die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) in den Picture-in-Picture-Modus versetzt wurde.
- `standalone`
  - : Die Anwendung sieht wie eine eigenständige Anwendung aus und fühlt sich auch so an. Dies kann beinhalten, dass die Anwendung ein eigenes Fenster hat, ein eigenes Icon im Anwendungsstarter, etc. In diesem Modus schließt der User-Agent UI-Elemente zur Steuerung der Navigation aus, kann jedoch andere UI-Elemente wie eine Statusleiste einbeziehen.
- `window-controls-overlay`
  - : In diesem Modus sieht die Anwendung wie eine eigenständige Desktop-Anwendung aus und fühlt sich auch so an, und das [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API)-Feature ist aktiviert.

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

### Helle und dunkle Farbschemata für Picture-in-Picture-Inhalte bereitstellen

In diesem Beispiel kombinieren wir den Wert `display-mode: picture-in-picture` mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienmerkmal, um helle und dunkle Farbschemata zu erstellen, die basierend auf der Farbpräferenz des Benutzers angezeigt werden, nur wenn die App im Picture-in-Picture-Modus angezeigt wird.

```css
@media (display-mode: picture-in-picture) and (prefers-color-scheme: light) {
  body {
    background: antiquewhite;
  }
}

@media (display-mode: picture-in-picture) and (prefers-color-scheme: dark) {
  body {
    background: #333333;
  }

  a {
    color: antiquewhite;
  }
}
```

Siehe [Using the Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für weitere Informationen und ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
