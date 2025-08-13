---
title: display-mode
slug: Web/CSS/@media/display-mode
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Das **`display-mode`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um zu testen, ob eine Web-App in einem normalen Browser-Tab oder auf eine alternative Weise angezeigt wird, wie zum Beispiel als eigenständige App oder im Vollbildmodus.

Beispielsweise:

- Eine [Progressive Web App](/de/docs/Web/Progressive_web_apps) [kann ihren Anzeigemodus einstellen](/de/docs/Web/Progressive_web_apps/How_to/Create_a_standalone_app), indem das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Mitglied in ihrem Manifest gesetzt wird. In diesem Fall identifiziert der Wert von `display-mode` den gesetzten Wert (jedoch kann dies von dem im Manifest angeforderten Wert abweichen, da ein Browser den angeforderten Modus möglicherweise nicht unterstützt).

- Jede Web-App kann die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) verwenden, um den Anzeigemodus festzulegen. In diesem Fall identifiziert der Wert von `display-mode` den gesetzten Modus.

Der `display-mode`-Wert gilt für den obersten Browsing-Kontext und alle untergeordneten Browsing-Kontexte.

## Syntax

Das `display-mode`-Feature wird als Schlüsselwortwert spezifiziert, der aus der folgenden Liste ausgewählt wird.

- `browser`
  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster, abhängig vom Browser und der Plattform.
- `fullscreen`
  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird keine Benutzeroberflächen-Chrome angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App durch die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) oder durch Verwendung des `fullscreen`-Wertes des [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Mitglieds des Web-App-Manifests im Vollbildmodus ist.
- `minimal-ui`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und wirken, wird jedoch eine minimale Anzahl von UI-Elementen zur Steuerung der Navigation haben. Die Elemente variieren je nach Browser.
- `picture-in-picture`
  - : Dieser Modus erlaubt Benutzern, spezifische Inhalte weiterhin zu konsumieren, während sie mit anderen Seiten oder Anwendungen auf ihrem Gerät interagieren. Die App wird in einem schwebenden und immer im Vordergrund stehenden Fenster angezeigt. Dies kann verwendet werden, um CSS nur dann anzuwenden, wenn die App durch die [Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API) in den Picture-in-Picture-Modus versetzt wurde.
- `standalone`
  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und wirken. Dies kann beinhalten, dass die Anwendung ein eigenes Fenster, ein eigenes Symbol im App-Launcher usw. hat. In diesem Modus wird der Benutzeragent UI-Elemente zur Steuerung der Navigation ausschließen, kann jedoch andere UI-Elemente wie eine Statusleiste einschließen.
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

### Ein helles und dunkles Farbschema für Picture-in-Picture-Inhalte bereitstellen

In diesem Beispiel kombinieren wir den `display-mode: picture-in-picture`-Wert mit dem {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}-Medien-Feature, um helle und dunkle Farbschemas zu erstellen, die basierend auf der Farbschema-Präferenz des Benutzers angewendet werden, nur wenn die App im Picture-in-Picture-Modus angezeigt wird.

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

Sehen Sie sich [Using the Document Picture-in-Picture API](/de/docs/Web/API/Document_Picture-in-Picture_API/Using) für weitere Informationen und ein vollständiges Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [@media](/de/docs/Web/CSS/@media)
