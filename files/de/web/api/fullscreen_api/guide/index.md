---
title: Leitfaden zur Fullscreen API
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: 8a12b2889c9dbcb7d9ed026cac3a8538ec5cb277
---

{{DefaultAPISidebar("Fullscreen API")}}

Dieser Artikel zeigt, wie Sie die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden, um ein gegebenes Element im Vollbildmodus darzustellen und wie Sie erkennen, wann der Browser den Vollbildmodus betritt oder verlässt.

## Aktivierung des Vollbildmodus

Angenommen, Sie möchten ein Element im Vollbildmodus präsentieren (wie zum Beispiel ein {{HTMLElement("video")}}), können Sie dieses im Vollbildmodus anzeigen, indem Sie seine Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufrufen.

Betrachten wir dieses {{HTMLElement("video")}}-Element:

```html
<video controls id="myvideo">
  <source src="somevideo.webm"></source>
  <source src="somevideo.mp4"></source>
</video>
```

Wir können dieses Video im Vollbildmodus wie folgt darstellen:

```js
const elem = document.getElementById("myvideo");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

Dieser Code überprüft, ob die Methode `requestFullscreen()` existiert, bevor sie aufgerufen wird.

### Benachrichtigung

Wenn der Vollbildmodus erfolgreich aktiviert wird, erhält das Dokument, das das Element enthält, ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis. Beim Verlassen des Vollbildmodus erhält das Dokument erneut ein [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis. Beachten Sie, dass das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis selbst keine Informationen darüber liefert, ob das Dokument in den oder aus dem Vollbildmodus wechselt. Wenn das Dokument jedoch ein nicht nullbares [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) hat, wissen Sie, dass Sie sich im Vollbildmodus befinden.

### Wenn eine Vollbildanforderung fehlschlägt

Es ist nicht garantiert, dass Sie in den Vollbildmodus wechseln können. Zum Beispiel haben {{HTMLElement("iframe")}}-Elemente das Attribut [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen), um zu ermöglichen, dass ihr Inhalt im Vollbildmodus angezeigt wird. Darüber hinaus können bestimmte Arten von Inhalten, wie fensterbezogene Plugins, nicht im Vollbildmodus präsentiert werden. Der Versuch, ein Element in den Vollbildmodus zu versetzen, das nicht im Vollbildmodus angezeigt werden kann (oder Elternteil oder Nachkomme eines solchen Elements ist), wird nicht funktionieren. Stattdessen erhält das Element, das den Vollbildmodus angefordert hat, ein `fullscreenerror`-Ereignis. Wenn eine Vollbildanforderung fehlschlägt, wird im Webkonsole von Firefox eine Fehlermeldung protokolliert, die erklärt, warum die Anforderung fehlgeschlagen ist. In Chrome und neueren Versionen von Opera wird jedoch keine solche Warnung generiert.

> [!NOTE]
> Vollbildanforderungen müssen innerhalb eines Ereignis-Handlers aufgerufen werden, sonst werden sie abgelehnt.

## Verlassen des Vollbildmodus

Der Benutzer hat immer die Möglichkeit, den Vollbildmodus selbst zu verlassen; siehe [Dinge, die Ihre Benutzer wissen möchten](#dinge,_die_ihre_benutzer_wissen_möchten). Sie können dies auch programmgesteuert tun, indem Sie die Methode [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufrufen.

## Weitere Informationen

Das [`Document`](/de/docs/Web/API/Document) bietet einige zusätzliche Informationen, die nützlich sein können, wenn Sie Vollbild-Webanwendungen entwickeln:

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` teilt Ihnen mit, welches [`Element`](/de/docs/Web/API/Element) derzeit im Vollbildmodus dargestellt wird. Wenn dies nicht null ist, befindet sich das Dokument (oder das Schatten-DOM) im Vollbildmodus. Wenn dies null ist, befindet sich das Dokument (oder das Schatten-DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` teilt Ihnen mit, ob das Dokument derzeit in einem Zustand ist, in dem der Vollbildmodus angefordert werden kann.

### Viewport-Skalierung in mobilen Browsern

Einige mobile Browser ignorieren im Vollbildmodus die Einstellungen des Viewport-Meta-Tags und blockieren die Benutzerskalierung; zum Beispiel: Eine "Pinch to Zoom"-Geste funktioniert möglicherweise auf einer Seite, die im Vollbildmodus präsentiert wird, nicht – selbst wenn die Seite, wenn sie nicht im Vollbildmodus ist, durch Pinch to Zoom skaliert werden kann.

## Dinge, die Ihre Benutzer wissen möchten

Sie sollten sicherstellen, dass Ihre Benutzer wissen, dass sie die <kbd>Esc</kbd>-Taste (oder <kbd>F11</kbd>) drücken können, um den Vollbildmodus zu verlassen.

Außerdem führt das Navigieren zu einer anderen Seite, das Wechseln der Tabs oder das Wechseln zu einer anderen Anwendung (zum Beispiel durch <kbd>Alt</kbd>-<kbd>Tab</kbd>) ebenfalls zum Verlassen des Vollbildmodus.

## Beispiel

In diesem Beispiel wird ein Video auf einer Webseite angesprochen. Durch Drücken der <kbd>Return</kbd>- oder <kbd>Enter</kbd>-Taste kann der Benutzer zwischen Fenster- und Vollbilddarstellung des Videos umschalten.

[Live-Beispiele anzeigen](https://mdn.dev/archives/media/samples/domref/fullscreen.html)

### Auf die Eingabetaste achten

Beim Laden der Seite wird dieser Code ausgeführt, um einen Ereignis-Listener einzurichten, der auf die <kbd>Enter</kbd>-Taste achtet.

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

### Umschalten in den Vollbildmodus

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

Dies beginnt mit dem Überprüfen des Wertes des Attributs `fullscreenElement` im [`document`](/de/docs/Web/API/Document). Wenn es `null` ist, befindet sich das Dokument derzeit im Fenstermodus, sodass wir in den Vollbildmodus wechseln müssen. Der Wechsel in den Vollbildmodus erfolgt durch Aufrufen von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen).

Wenn der Vollbildmodus bereits aktiv ist (`fullscreenElement` ist nicht `null`), rufen wir [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf.

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
