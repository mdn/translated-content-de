---
title: Leitfaden zur Fullscreen API
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: 8a12b2889c9dbcb7d9ed026cac3a8538ec5cb277
---

{{DefaultAPISidebar("Fullscreen API")}}

Dieser Artikel zeigt, wie Sie die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden, um ein bestimmtes Element im Vollbildmodus anzuzeigen, sowie wie Sie erkennen, wenn der Browser in den Vollbildmodus ein- oder austritt.

## Aktivierung des Vollbildmodus

Wenn Sie ein Element im Vollbildmodus anzeigen möchten (zum Beispiel ein {{HTMLElement("video")}}), können Sie es im Vollbildmodus präsentieren, indem Sie seine Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufrufen.

Betrachten Sie dieses {{HTMLElement("video")}}-Element:

```html
<video controls id="myvideo">
  <source src="somevideo.webm"></source>
  <source src="somevideo.mp4"></source>
</video>
```

Wir können dieses Video wie folgt in den Vollbildmodus versetzen:

```js
const elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

Dieser Code prüft das Vorhandensein der Methode `requestFullscreen()`, bevor er sie aufruft.

### Benachrichtigung

Wenn der Vollbildmodus erfolgreich aktiviert wird, erhält das Dokument, das das Element enthält, ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis. Wenn der Vollbildmodus beendet wird, erhält das Dokument erneut ein [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis. Beachten Sie, dass das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis selbst keine Informationen darüber liefert, ob das Dokument in den Vollbildmodus eintritt oder diesen verlässt. Wenn das Dokument jedoch ein nicht null [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) hat, wissen Sie, dass Sie sich im Vollbildmodus befinden.

### Wenn eine Vollbildanforderung fehlschlägt

Es ist nicht garantiert, dass Sie in den Vollbildmodus wechseln können. Zum Beispiel haben {{HTMLElement("iframe")}}-Elemente das Attribut [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen), um sich aktiv dafür zu entscheiden, dass ihr Inhalt im Vollbildmodus angezeigt werden kann. Darüber hinaus können bestimmte Arten von Inhalten, wie beispielsweise fensterbasierte Plug-ins, nicht im Vollbildmodus angezeigt werden. Der Versuch, ein Element, das nicht im Vollbildmodus angezeigt werden kann (oder das Eltern- oder Nachfahrelement eines solchen Elements), im Vollbildmodus darzustellen, wird nicht funktionieren. Stattdessen erhält das Element, das den Vollbildmodus angefordert hat, ein `fullscreenerror`-Ereignis. Wenn eine Vollbildanforderung fehlschlägt, protokolliert Firefox eine Fehlermeldung in der Webkonsole, die erklärt, warum die Anforderung fehlgeschlagen ist. In Chrome und neueren Versionen von Opera wird jedoch keine solche Warnung generiert.

> [!NOTE]
> Vollbildanforderungen müssen innerhalb eines Ereignishandlers aufgerufen werden, sonst werden sie abgelehnt.

## Rückkehr aus dem Vollbildmodus

Der Benutzer hat immer die Möglichkeit, den Vollbildmodus eigenhändig zu verlassen; siehe [Dinge, die Ihre Benutzer wissen möchten](#dinge,_die_ihre_benutzer_wissen_möchten). Sie können auch programmatisch den Vollbildmodus verlassen, indem Sie die Methode [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufrufen.

## Weitere Informationen

Das [`Document`](/de/docs/Web/API/Document) bietet einige zusätzliche Informationen, die beim Entwickeln von Vollbild-Webanwendungen nützlich sein können:

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` teilt Ihnen mit, welches [`Element`](/de/docs/Web/API/Element) derzeit im Vollbildmodus dargestellt wird. Wenn diese nicht null ist, befindet sich das Dokument (oder das Shadow-DOM) im Vollbildmodus. Wenn diese null ist, befindet sich das Dokument (oder das Shadow-DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` gibt an, ob sich das Dokument derzeit in einem Zustand befindet, der das Anfordern des Vollbildmodus ermöglichen würde.

### Skalierung im Ansichtsfenster bei mobilen Browsern

Einige mobile Browser ignorieren im Vollbildmodus Einstellungen des Ansichtsfenster-Meta-Tags und blockieren Benutzer-Skalierung; zum Beispiel: Eine "Pinch-to-Zoom"-Geste funktioniert möglicherweise nicht auf einer Seite, die im Vollbildmodus dargestellt wird — selbst wenn die Seite, sofern sie sich nicht im Vollbildmodus befindet, mit Pinch-to-Zoom skaliert werden kann.

## Dinge, die Ihre Benutzer wissen möchten

Sie möchten sicherstellen, dass Ihre Benutzer wissen, dass sie die <kbd>Esc</kbd>-Taste (oder <kbd>F11</kbd>) drücken können, um den Vollbildmodus zu verlassen.

Zusätzlich führt das Navigieren zu einer anderen Seite, das Wechseln zwischen Tabs oder das Wechseln zu einer anderen Anwendung (zum Beispiel mit <kbd>Alt</kbd>-<kbd>Tab</kbd>) im Vollbildmodus ebenfalls zum Verlassen des Vollbildmodus.

## Beispiel

In diesem Beispiel wird ein Video auf einer Webseite angezeigt. Durch Drücken der <kbd>Return</kbd>- oder <kbd>Enter</kbd>-Taste kann der Benutzer zwischen Fenster- und Vollbilddarstellung des Videos umschalten.

[Live-Beispiele anzeigen](https://mdn.dev/archives/media/samples/domref/fullscreen.html)

### Überwachen der Eingabetaste

Wenn die Seite geladen ist, wird dieser Code ausgeführt, um einen Ereignislistener einzurichten, der auf die <kbd>Enter</kbd>-Taste achtet.

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

Er beginnt damit, den Wert des Attributs `fullscreenElement` des [`Documents`](/de/docs/Web/API/Document) zu betrachten. Wenn es `null` ist, befindet sich das Dokument derzeit im Fenstermodus, sodass wir in den Vollbildmodus wechseln müssen. Der Wechsel in den Vollbildmodus erfolgt durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen).

Wenn der Vollbildmodus bereits aktiv ist (`fullscreenElement` ist nicht-`null`), rufen wir [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf.

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
