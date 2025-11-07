---
title: display-mode
slug: Web/CSS/Reference/At-rules/@media/display-mode
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`display-mode`** [CSS](/de/docs/Web/CSS) [Medieneigenschaft](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um zu prüfen, ob eine Web-App in einem normalen Browser-Tab oder auf eine alternative Weise angezeigt wird, z. B. als eigenständige App oder im Vollbildmodus.

Zum Beispiel:

- Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) [kann ihren Anzeigemodus festlegen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), indem sie das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Element in ihrem Manifest setzt. In diesem Fall identifiziert der Wert von `display-mode` den Wert, der festgelegt wurde (beachten Sie jedoch, dass dies möglicherweise nicht mit dem im Manifest angeforderten Wert übereinstimmt, da ein Browser den angeforderten Modus möglicherweise nicht unterstützt).

- Jede Web-App kann die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) verwenden, um den Anzeigemodus festzulegen. In diesem Fall identifiziert der Wert von `display-mode` den gesetzten Modus.

Der `display-mode`-Wert gilt für den obersten Browsing-Kontext und alle untergeordneten Browsing-Kontexte.

## Syntax

Das `display-mode`-Feature wird als Schlüsselwortwert aus der folgenden Liste angegeben.

- `browser`
  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster, abhängig vom Browser und der Plattform.
- `fullscreen`
  - : Der gesamte verfügbare Anzeigebereich wird verwendet und es wird keine Benutzeroberfläche des {{Glossary("chrome", "User Agents (chrome)")}} angezeigt. Dies kann verwendet werden, um CSS nur anzuwenden, wenn die App im Vollbildmodus durch die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder durch die Verwendung des Werts `fullscreen` des [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Elements des Web App Manifest in den Vollbildmodus versetzt wurde.
- `minimal-ui`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich so anfühlen, hat jedoch eine minimale Anzahl von UI-Elementen zur Navigation. Die Elemente variieren je nach Browser.
- `picture-in-picture`
  - : Dieser Modus ermöglicht es den Benutzern, bestimmte Inhalte weiterhin zu konsumieren, während sie mit anderen Websites oder Anwendungen auf ihrem Gerät interagieren. Die App wird in einem schwebenden und immer im Vordergrund befindlichen Fenster angezeigt. Dies kann verwendet werden, um CSS nur anzuwenden, wenn die App im Bild-im-Bild-Modus durch die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) versetzt wurde.
- `standalone`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich so anfühlen. Dies kann beinhalten, dass die Anwendung ein anderes Fenster hat, ihr eigenes Symbol im Anwendungsstarter usw. In diesem Modus schließt der User Agent UI-Elemente zur Navigation aus, kann aber andere UI-Elemente wie eine Statusleiste einschließen.
- `window-controls-overlay`
  - : In diesem Modus sieht die Anwendung aus und fühlt sich an wie eine eigenständige Desktop-Anwendung, und die [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API)-Funktion ist aktiviert.

## Beispiele

### Anwenden von CSS, wenn die Anwendung im Vollbildmodus ist

```css
@media (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

### Bereitstellen eines hellen und dunklen Farbschemas für Bild-im-Bild-Inhalte

In diesem Beispiel kombinieren wir den Wert `display-mode: picture-in-picture` mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} Medieneigenschaft, um helle und dunkle Farbschemas zu erstellen, die basierend auf der Farbschema-Präferenz des Benutzers nur dann angewendet werden, wenn die App im Bild-im-Bild-Modus angezeigt wird.

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

Für weitere Informationen und ein vollständiges Beispiel siehe [Using the Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/Reference/At-rules/@media)
