---
title: display-mode
slug: Web/CSS/@media/display-mode
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`display-mode`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob eine Web-App in einem normalen Browser-Tab oder auf eine alternative Weise, wie zum Beispiel als eigenständige App oder im Vollbildmodus, angezeigt wird.

Zum Beispiel:

- Eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) [kann ihren Anzeigemodus festlegen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), indem sie das [`display`](/de/docs/Web/Manifest/display)-Mitglied in ihrem Manifest setzt. In diesem Fall identifiziert der Wert von `display-mode` den eingestellten Wert (beachten Sie jedoch, dass dies möglicherweise nicht der gleiche Wert ist, der im Manifest angefordert wurde, da ein Browser den angeforderten Modus möglicherweise nicht unterstützt).

- Jede Web-App kann die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) verwenden, um den Anzeigemodus festzulegen, und in diesem Fall identifiziert der Wert von `display-mode` den eingestellten Modus.

Der `display-mode`-Wert gilt für den obersten Browsing-Kontext und alle untergeordneten Browsing-Kontexte.

## Syntax

Die Funktion `display-mode` wird als Schlüsselwortwert angegeben, der aus der untenstehenden Liste ausgewählt wird.

- `browser`
  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder in einem neuen Fenster, abhängig vom Browser und der Plattform.
- `fullscreen`
  - : Der gesamte verfügbare Anzeigebereich wird genutzt, und es wird keine Benutzeroberflächen-{{glossary("chrome")}} angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App vom [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder mit dem `fullscreen`-Wert des [`display`](/de/docs/Web/Manifest/display)-Mitglieds des Web App Manifests in den Vollbildmodus gesetzt wurde.
- `minimal-ui`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich anfühlen, jedoch mit einer minimalen Menge an UI-Elementen zur Steuerung der Navigation. Die Elemente variieren je nach Browser.
- `picture-in-picture`
  - : Dieser Modus ermöglicht es Benutzern, weiterhin bestimmte Inhalte zu konsumieren, während sie mit anderen Seiten oder Anwendungen auf ihrem Gerät interagieren. Die App wird in einem schwebenden und immer im Vordergrund befindlichen Fenster angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App vom [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) in den Picture-in-Picture-Modus gesetzt wurde.
- `standalone`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich anfühlen. Dies kann beinhalten, dass die Anwendung ein eigenes Fenster hat, ein eigenes Icon im Anwendungsstarter usw. In diesem Modus werden Benutzeroberflächenelemente zur Navigation ausgeschlossen, es können jedoch andere UI-Elemente wie eine Statusleiste enthalten sein.
- `window-controls-overlay`
  - : In diesem Modus sieht die Anwendung wie eine eigenständige Desktop-Anwendung aus und fühlt sich so an, und die [Window Controls Overlay](/de/docs/Web/API/Window_Controls_Overlay_API)-Funktion ist aktiviert.

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

### Ein leichtes und dunkles Farbschema für Picture-in-Picture-Inhalte bereitstellen

In diesem Beispiel kombinieren wir den `display-mode: picture-in-picture`-Wert mit der {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medienfunktion, um helle und dunkle Farbschemata zu erstellen, die basierend auf der Farbpräferenz des Benutzers nur dann angewendet werden, wenn die App im Picture-in-Picture-Modus angezeigt wird.

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
