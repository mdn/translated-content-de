---
title: Anleitung zur Fullscreen-API
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{DefaultAPISidebar("Fullscreen API")}}

Dieser Artikel zeigt, wie Sie die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) verwenden, um ein gegebenes Element im Vollbildmodus anzuzeigen, sowie wie Sie erkennen können, wann der Browser in den oder aus dem Vollbildmodus wechselt.

## Aktivierung des Vollbildmodus

Für ein Element, das Sie im Vollbildmodus präsentieren möchten (zum Beispiel ein {{HTMLElement("video")}}), können Sie es im Vollbildmodus darstellen, indem Sie die Methode {{DOMxRef("Element.requestFullscreen", "requestFullscreen()")}} aufrufen.

Betrachten wir dieses {{HTMLElement("video")}}-Element:

```html
<video controls id="myvideo">
  <source src="somevideo.webm"></source>
  <source src="somevideo.mp4"></source>
</video>
```

Wir können dieses Video wie folgt im Vollbildmodus anzeigen:

```js
const elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

Dieser Code prüft das Vorhandensein der `requestFullscreen()`-Methode, bevor er sie aufruft.

### Benachrichtigung

Wenn der Vollbildmodus erfolgreich aktiviert wurde, erhält das Dokument, das das Element enthält, ein {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}-Ereignis. Beim Beenden des Vollbildmodus erhält das Dokument erneut ein {{domxref("Document/fullscreenchange_event", "fullscreenchange")}}-Ereignis. Beachten Sie, dass das {{domxref("Document/fullscreenchange_event", "fullscreenchange")}}-Ereignis selbst keine Informationen darüber liefert, ob das Dokument in den oder aus dem Vollbildmodus wechselt, aber wenn das Dokument ein nicht-nullwertiges {{DOMxRef("document.fullscreenElement", "fullscreenElement")}} hat, wissen Sie, dass Sie sich im Vollbildmodus befinden.

### Wenn eine Fullscreen-Anforderung fehlschlägt

Es ist nicht garantiert, dass Sie in den Vollbildmodus wechseln können. Zum Beispiel haben {{HTMLElement("iframe")}}-Elemente das [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)-Attribut, um zu erlauben, dass ihr Inhalt im Vollbildmodus angezeigt wird. Darüber hinaus können bestimmte Arten von Inhalten, wie beispielsweise fensterbasierte Plug-Ins, nicht im Vollbildmodus dargestellt werden. Der Versuch, ein solches Element oder ein Elternelement oder einen Nachkommen davon im Vollbildmodus darzustellen, wird nicht funktionieren. Stattdessen erhält das Element, das den Vollbildmodus angefordert hat, ein `mozfullscreenerror`-Ereignis. Wenn eine Fullscreen-Anforderung fehlschlägt, wird Firefox eine Fehlermeldung an die Web-Konsole ausgeben, die erklärt, warum die Anforderung fehlschlug. In Chrome und neueren Versionen von Opera wird jedoch keine solche Warnung generiert.

> [!NOTE]
> Fullscreen-Anforderungen müssen innerhalb eines Event-Handlers aufgerufen werden, andernfalls werden sie abgelehnt.

## Verlassen des Vollbildmodus

Der Benutzer hat immer die Möglichkeit, den Vollbildmodus eigenständig zu verlassen; siehe [Was Ihre Benutzer wissen möchten](#was_ihre_benutzer_wissen_möchten). Sie können dies auch programmatisch tun, indem Sie die Methode {{DOMxRef("Document.exitFullscreen()")}} aufrufen.

## Weitere Informationen

Das {{DOMxRef("Document")}} stellt einige zusätzliche Informationen bereit, die bei der Entwicklung von Vollbild-Webanwendungen nützlich sein können:

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : Die `fullscreenElement`-Eigenschaft gibt an, welches {{DOMxRef("Element")}} derzeit im Vollbildmodus angezeigt wird. Wenn dies nicht null ist, befindet sich das Dokument (oder der Shadow-DOM) im Vollbildmodus. Wenn es null ist, befindet sich das Dokument (oder der Shadow-DOM) nicht im Vollbildmodus.
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : Die `fullscreenEnabled`-Eigenschaft gibt an, ob sich das Dokument derzeit in einem Zustand befindet, der das Anfordern des Vollbildmodus zulässt oder nicht.

### Viewport-Skalierung in mobilen Browsern

Einige mobile Browser ignorieren im Vollbildmodus die Einstelllungen des Viewport-Meta-Tags und blockieren die Benutzerskalierung; zum Beispiel funktioniert eine "Zoom-Geste" möglicherweise nicht auf einer Seite, die im Vollbildmodus dargestellt wird — auch wenn die Seite ohne Vollbildmodus mit der Pinch-Zoom-Geste skaliert werden kann.

## Was Ihre Benutzer wissen möchten

Sie sollten sicherstellen, dass Ihre Benutzer wissen, dass sie die <kbd>Esc</kbd>-Taste (oder <kbd>F11</kbd>) drücken können, um den Vollbildmodus zu verlassen.

Darüber hinaus wird das Navigieren zu einer anderen Seite, das Wechseln von Tabs oder das Umschalten zu einer anderen Anwendung (zum Beispiel durch <kbd>Alt</kbd>-<kbd>Tab</kbd>) im Vollbildmodus den Vollbildmodus ebenfalls beenden.

## Beispiel

In diesem Beispiel wird ein Video auf einer Webseite dargestellt. Durch Drücken der <kbd>Return</kbd>- oder <kbd>Enter</kbd>-Taste kann der Benutzer zwischen Fenster- und Vollbilddarstellung des Videos umschalten.

[Live-Beispiele ansehen](https://mdn.dev/archives/media/samples/domref/fullscreen.html)

### Überwachung der Eingabetaste

Wenn die Seite geladen ist, wird dieser Code ausgeführt, um einen Event-Listener einzurichten, der auf die Eingabetaste (<kbd>Enter</kbd>) achtet.

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

Dies beginnt mit der Überprüfung des Werts des `fullscreenElement`-Attributs auf dem {{DOMxRef("document")}}. Wenn es `null` ist, befindet sich das Dokument derzeit im Fenstermodus, also müssen wir in den Vollbildmodus wechseln. Der Wechsel in den Vollbildmodus erfolgt durch Aufruf von {{DOMxRef("element.requestFullscreen()")}}.

Wenn der Vollbildmodus bereits aktiv ist (`fullscreenElement` ist nicht `null`), rufen wir {{DOMxRef("document.exitFullscreen()")}} auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung des Vollbildmodus](/de/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
