---
title: display-mode
slug: Web/CSS/Reference/At-rules/@media/display-mode
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`display-mode`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu testen, ob eine Web-App in einem normalen Browser-Tab oder auf eine alternative Weise angezeigt wird, z. B. als eigenständige App oder im Vollbildmodus.

Zum Beispiel:

- Eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) [kann ihren Anzeigemodus festlegen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), indem das Mitglied [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) im Manifest gesetzt wird. In diesem Fall gibt der Wert von `display-mode` den gesetzten Wert an (beachten Sie jedoch, dass dies möglicherweise nicht mit dem im Manifest angeforderten Wert übereinstimmt, da ein Browser den angeforderten Modus möglicherweise nicht unterstützt).

- Jede Web-App kann die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) verwenden, um den Anzeigemodus festzulegen. In diesem Fall gibt der Wert von `display-mode` den gesetzten Modus an.

Der `display-mode`-Wert gilt für den obersten Browsing-Kontext sowie für alle untergeordneten Browsing-Kontexte.

## Syntax

Das `display-mode`-Feature wird als Schlüsselwortwert angegeben, der aus der folgenden Liste ausgewählt wird.

- `browser`
  - : Die Anwendung öffnet sich je nach Browser und Plattform in einem herkömmlichen Browser-Tab oder einem neuen Fenster.
- `fullscreen`
  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird kein User-Agent-{{Glossary("chrome", "Chrome")}} angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App durch die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder unter Verwendung des Werts `fullscreen` des [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Mitglieds des Web App Manifests in den Vollbildmodus versetzt wurde.
- `minimal-ui`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich anfühlen, wird jedoch nur eine minimale Anzahl von UI-Elementen zur Steuerung der Navigation haben. Die Elemente variieren je nach Browser.
- `picture-in-picture`
  - : Dieser Modus ermöglicht es den Nutzern, bestimmte Inhalte weiterhin zu konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren. Die App wird in einem schwebenden und immer im Vordergrund befindlichen Fenster angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App durch die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) in den Picture-in-Picture-Modus versetzt wurde.
- `standalone`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich anfühlen. Dies kann umfassen, dass die Anwendung ein eigenes Fenster, ein eigenes Symbol im Anwendungsstarter usw. hat. In diesem Modus wird der User-Agent UI-Elemente zur Steuerung der Navigation ausschließen, kann aber andere UI-Elemente wie eine Statusleiste einbeziehen.
- `window-controls-overlay`
  - : In diesem Modus sieht die Anwendung aus und fühlt sich an wie eine eigenständige Desktop-Anwendung, und das [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API)-Feature ist aktiviert.

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

### Ein helles und dunkles Farbschema für Picture-in-Picture-Inhalte bereitstellen

In diesem Beispiel kombinieren wir den Wert `display-mode: picture-in-picture` mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Media-Feature, um helle und dunkle Farbschemata zu erstellen, die je nach Farbschema-Präferenz des Nutzers angewendet werden, nur wenn die App im Picture-in-Picture-Modus angezeigt wird.

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

Siehe [Verwendung der Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für weitere Informationen und ein vollständiges Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
