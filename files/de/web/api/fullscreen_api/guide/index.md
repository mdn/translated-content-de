---
title: Leitfaden zur Fullscreen-API
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{DefaultAPISidebar("Fullscreen API")}}

Dieser Artikel zeigt, wie Sie die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden, um ein bestimmtes Element im Vollbildmodus anzuzeigen, sowie wie Sie erkennen, wann der Browser den Vollbildmodus betritt oder verlässt.

## Aktivieren des Vollbildmodus

Angenommen, Sie haben ein Element, das Sie im Vollbildmodus präsentieren möchten (zum Beispiel ein {{HTMLElement("video")}}), können Sie es im Vollbildmodus anzeigen, indem Sie seine Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufrufen.

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

Dieser Code überprüft, ob die Methode `requestFullscreen()` existiert, bevor sie aufgerufen wird.

### Benachrichtigung

Wenn der Vollbildmodus erfolgreich aktiviert wird, erhält das Dokument, das das Element enthält, ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis. Wenn der Vollbildmodus verlassen wird, erhält das Dokument erneut ein [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis. Beachten Sie, dass das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis keine Informationen darüber liefert, ob das Dokument den Vollbildmodus betritt oder verlässt. Wenn das Dokument jedoch ein nicht null `fullscreenElement` hat, wissen Sie, dass Sie sich im Vollbildmodus befinden.

### Wenn eine Vollbildanfrage fehlschlägt

Es ist nicht garantiert, dass Sie in der Lage sind, in den Vollbildmodus zu wechseln. Zum Beispiel haben {{HTMLElement("iframe")}}-Elemente das [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)-Attribut, um auszuwählen, ob ihr Inhalt im Vollbildmodus angezeigt werden darf. Darüber hinaus können bestimmte Arten von Inhalten, wie z.B. fensterorientierte Plug-ins, nicht im Vollbildmodus dargestellt werden. Der Versuch, ein Element, das nicht im Vollbildmodus angezeigt werden kann (oder ein Eltern- oder Nachfahrelement eines solchen Elements), im Vollbildmodus darzustellen, funktioniert nicht. Stattdessen erhält das Element, das den Vollbildmodus angefordert hat, ein `fullscreenerror`-Ereignis. Wenn eine Vollbildanfrage fehlschlägt, protokolliert Firefox eine Fehlermeldung in der Webkonsole, die erklärt, warum die Anfrage fehlgeschlagen ist. In Chrome und neueren Versionen von Opera wird jedoch keine solche Warnung erzeugt.

> [!NOTE]
> Vollbildanfragen müssen innerhalb eines Ereignishandlers aufgerufen werden, andernfalls werden sie abgelehnt.

## Beenden des Vollbildmodus

Der Benutzer hat immer die Möglichkeit, den Vollbildmodus nach eigenem Ermessen zu verlassen; siehe [Was Ihre Benutzer wissen möchten](#was_ihre_benutzer_wissen_möchten). Sie können dies auch programmatisch durch Aufruf der Methode [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) tun.

## Weitere Informationen

Das [`Document`](/de/docs/Web/API/Document) stellt einige zusätzliche Informationen bereit, die bei der Entwicklung von Webanwendungen im Vollbildmodus nützlich sein können:

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die `fullscreenElement`-Eigenschaft gibt das [`Element`](/de/docs/Web/API/Element) an, das derzeit im Vollbildmodus angezeigt wird. Wenn dies nicht null ist, befindet sich das Dokument (oder das Shadow DOM) im Vollbildmodus. Wenn dies null ist, befindet sich das Dokument (oder das Shadow DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die `fullscreenEnabled`-Eigenschaft gibt an, ob das Dokument sich derzeit in einem Zustand befindet, der es ermöglichen würde, den Vollbildmodus anzufordern.

### Skalierung des Viewports in mobilen Browsern

Einige mobile Browser ignorieren im Vollbildmodus die Einstellungen des Viewport-Meta-Tags und blockieren die Skalierung durch den Benutzer; beispielsweise kann eine „Pinch-to-Zoom“-Geste auf einer Seite, die im Vollbildmodus präsentiert wird, nicht funktionieren — auch wenn die Seite, wenn sie nicht im Vollbildmodus ist, mit „Pinch-to-Zoom“ skaliert werden kann.

## Was Ihre Benutzer wissen möchten

Sie sollten Ihre Benutzer darüber informieren, dass sie die <kbd>Esc</kbd>-Taste (oder <kbd>F11</kbd>) drücken können, um den Vollbildmodus zu verlassen.

Darüber hinaus führt das Navigieren zu einer anderen Seite, das Wechseln der Tabs oder das Umschalten zu einer anderen Anwendung (zum Beispiel durch <kbd>Alt</kbd>-<kbd>Tab</kbd>) im Vollbildmodus ebenfalls zum Verlassen des Vollbildmodus.

## Beispiel

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Durch Drücken der <kbd>Return</kbd>- oder <kbd>Enter</kbd>-Taste kann der Benutzer zwischen Fenster- und Vollbilddarstellung des Videos wechseln.

[Live-Beispiele anzeigen](https://mdn.dev/archives/media/samples/domref/fullscreen.html)

### Überwachen der Eingabetaste

Wenn die Seite geladen wird, wird dieser Code ausgeführt, um einen Ereignislistener einzurichten, der die <kbd>Enter</kbd>-Taste überwacht.

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

Dieser Code wird aufgerufen, wenn der Benutzer die <kbd>Enter</kbd>-Taste drückt, wie oben gezeigt.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

Dies beginnt mit der Prüfung des Werts des `fullscreenElement`-Attributs im [`document`](/de/docs/Web/API/Document). Wenn es `null` ist, befindet sich das Dokument derzeit im Fenstermodus, und wir müssen in den Vollbildmodus wechseln. Der Wechsel in den Vollbildmodus erfolgt durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen).

Wenn der Vollbildmodus bereits aktiv ist (`fullscreenElement` ist nicht`null`), rufen wir [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen)
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
