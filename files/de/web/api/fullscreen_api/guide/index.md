---
title: Leitfaden zur Fullscreen-API
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: c17bd570e356cdf3e1abb4c2dfe1e57a2cfb5bc7
---

{{DefaultAPISidebar("Fullscreen API")}}

Dieser Artikel zeigt, wie Sie die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) verwenden, um ein bestimmtes Element im Vollbildmodus anzuzeigen, sowie wie Sie erkennen, wann der Browser in den Vollbildmodus wechselt oder ihn verlässt.

## Aktivieren des Vollbildmodus

Um ein Element, das Sie im Vollbildmodus präsentieren möchten (wie z.B. ein {{HTMLElement("video")}}), im Vollbildmodus anzuzeigen, rufen Sie die Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf.

Betrachten wir dieses {{HTMLElement("video")}}-Element:

```html
<video controls id="my-video">
  <source src="somevideo.webm" />
  <source src="somevideo.mp4" />
</video>
```

Wir können dieses Video wie folgt im Vollbildmodus anzeigen:

```js
const elem = document.getElementById("my-video");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

Dieser Code überprüft das Vorhandensein der Methode `requestFullscreen()`, bevor er sie aufruft.

Sobald ein Element im Vollbildmodus ist, wird es durch {{cssxref(":fullscreen")}} erfasst, was ihm einige Standardstile verleiht, wie z.B. die gesamte Bildschirmfläche einzunehmen. Es wird auch in die {{Glossary("top_layer", "Top-Layer")}} verschoben.

Wenn mehrere Elemente im Vollbildmodus angezeigt werden sollen, werden sie alle durch {{cssxref(":fullscreen")}} erfasst und befinden sich alle in der Top-Layer. Sie stapeln sich übereinander, wobei die zuletzt angeforderten Elemente über den älteren liegen. Das zuletzt angeforderte Element wird angezeigt und von [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) zurückgegeben.

### Benachrichtigung

Wenn der Vollbildmodus erfolgreich aktiviert wird, erhält das Dokument, das das Element enthält, ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) Ereignis. Wenn der Vollbildmodus verlassen wird, erhält das Dokument erneut ein [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event) Ereignis. Beachten Sie, dass das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event) Ereignis selbst keine Informationen darüber liefert, ob das Dokument in den Vollbildmodus wechselt oder ihn verlässt, aber wenn das Dokument ein nicht-null [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) hat, wissen Sie, dass Sie sich im Vollbildmodus befinden.

### Wenn eine Vollbildanforderung fehlschlägt

Es ist nicht garantiert, dass Sie in den Vollbildmodus wechseln können. Zum Beispiel haben {{HTMLElement("iframe")}}-Elemente das [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen) Attribut, um das Anzeigen ihres Inhalts im Vollbildmodus zuzulassen. Außerdem können bestimmte Arten von Inhalten, wie beispielsweise Plug-ins mit Fenster, nicht im Vollbildmodus angezeigt werden. Der Versuch, ein Element, das nicht im Vollbildmodus angezeigt werden kann, oder das Eltern- oder Nachfolgeelement eines solchen Elements in den Vollbildmodus zu versetzen, funktioniert nicht. Stattdessen erhält das Element, das den Vollbildmodus angefordert hat, ein `fullscreenerror` Ereignis. Wenn eine Vollbildanforderung fehlschlägt, protokolliert Firefox eine Fehlermeldung in der Web-Konsole, die erklärt, warum die Anforderung fehlgeschlagen ist. In Chrome und neueren Versionen von Opera wird jedoch keine solche Warnung generiert.

> [!NOTE]
> Vollbildanforderungen müssen innerhalb eines Event-Handlers aufgerufen werden, ansonsten werden sie abgelehnt.

## Verlassen des Vollbildmodus

Der Benutzer hat immer die Möglichkeit, den Vollbildmodus selbst zu verlassen; siehe [Dinge, die Ihre Benutzer wissen möchten](#dinge,_die_ihre_benutzer_wissen_möchten). Sie können dies auch programmatisch tun, indem Sie die Methode [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufrufen.

Wenn sich mehrere Elemente im Vollbildmodus befinden, beendet ein Aufruf von `exitFullscreen()` nur das oberste Element und enthüllt das nächste darunter. Durch Drücken von <kbd>Esc</kbd> oder <kbd>F11</kbd> werden alle Vollbildelemente beendet.

## Weitere Informationen

Das [`Document`](/de/docs/Web/API/Document) stellt einige zusätzliche Informationen bereit, die bei der Entwicklung von Webanwendungen im Vollbildmodus nützlich sein können:

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die `fullscreenElement`-Eigenschaft gibt Ihnen das [`Element`](/de/docs/Web/API/Element) an, das derzeit im Vollbildmodus angezeigt wird. Wenn dies nicht null ist, befindet sich das Dokument (oder der Schatten-DOM) im Vollbildmodus. Wenn dies null ist, befindet sich das Dokument (oder der Schatten-DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` teilt Ihnen mit, ob das Dokument sich derzeit in einem Zustand befindet, der das Anfordern des Vollbildmodus ermöglichen würde.

### Viewport-Skalierung in mobilen Browsern

Einige mobile Browser ignorieren im Vollbildmodus die Einstellungen des Viewport-Meta-Tags und blockieren die Benutzervergrößerung; ein "Pinch-to-Zoom"-Gestus funktioniert möglicherweise auf einer im Vollbildmodus angezeigten Seite nicht - selbst wenn die Seite, wenn sie nicht im Vollbildmodus ist, mit Pinch-to-Zoom skaliert werden kann.

## Dinge, die Ihre Benutzer wissen möchten

Sie sollten sicherstellen, dass Ihre Benutzer wissen, dass sie die <kbd>Esc</kbd>-Taste (oder <kbd>F11</kbd>) drücken können, um den Vollbildmodus zu beenden.

Darüber hinaus führt das Navigieren zu einer anderen Seite, das Wechseln von Tabs oder das Umschalten zu einer anderen Anwendung (z.B. mit <kbd>Alt</kbd>-<kbd>Tab</kbd>) im Vollbildmodus ebenfalls zum Verlassen des Vollbildmodus.

## Beispiel

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Durch Drücken der <kbd>Return</kbd>- oder <kbd>Enter</kbd>-Taste kann der Benutzer zwischen Fenster- und Vollbilddarstellung des Videos umschalten.

[Beispiele live ansehen](https://mdn.dev/archives/media/samples/domref/fullscreen.html)

### Auf die Enter-Taste achten

Wenn die Seite geladen wird, wird dieser Code ausgeführt, um einen Event-Listener einzurichten, der auf die <kbd>Enter</kbd>-Taste achtet.

```js
document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
  },
  false,
);
```

### Umschalten des Vollbildmodus

Dieser Code wird aufgerufen, wenn der Benutzer die <kbd>Enter</kbd>-Taste drückt, wie oben gesehen.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

Dies beginnt mit dem Überprüfen des Werts des `fullscreenElement`-Attributs auf dem [`document`](/de/docs/Web/API/Document). Wenn es `null` ist, befindet sich das Dokument derzeit im Fenstermodus, und wir müssen in den Vollbildmodus wechseln. Der Wechsel in den Vollbildmodus erfolgt durch Aufrufen von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen).

Wenn der Vollbildmodus bereits aktiv ist (`fullscreenElement` ist nicht `null`), rufen wir [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Nutzung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen)
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
