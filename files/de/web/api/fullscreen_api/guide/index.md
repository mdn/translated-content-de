---
title: Leitfaden zur Fullscreen-API
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: 27d5cb7e9d523a629d8469e81508d3cc81250b5c
---

{{DefaultAPISidebar("Fullscreen API")}}

Dieser Artikel zeigt, wie Sie die [Fullscreen-API](/de/docs/Web/API/Fullscreen_API) verwenden können, um ein bestimmtes Element im Vollbildmodus darzustellen und wie Sie feststellen können, wann der Browser den Vollbildmodus betritt oder verlässt.

## Aktivieren des Vollbildmodus

Für ein Element, das Sie im Vollbildmodus präsentieren möchten (wie zum Beispiel ein {{HTMLElement("video")}}), können Sie den Vollbildmodus starten, indem Sie die Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) des Elements aufrufen.

Betrachten wir dieses {{HTMLElement("video")}}-Element:

```html
<video controls id="my-video">
  <source src="somevideo.webm" />
  <source src="somevideo.mp4" />
</video>
```

Wir können dieses Video wie folgt in den Vollbildmodus versetzen:

```js
const elem = document.getElementById("my-video");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

Dieser Code prüft, ob die Methode `requestFullscreen()` existiert, bevor sie aufgerufen wird.

Sobald sich ein Element im Vollbildmodus befindet, wird es durch {{cssxref(":fullscreen")}} erkannt, was ihm einige Standardstile verleiht, wie zum Beispiel, den gesamten Bildschirm einzunehmen. Es wird auch in die {{Glossary("top_layer", "oberste Ebene")}} verschoben.

Wenn mehrere Elemente im Vollbildmodus angezeigt werden sollen, werden sie alle durch {{cssxref(":fullscreen")}} erkannt und befinden sich in der obersten Ebene. Sie stapeln sich übereinander, wobei das zuletzt angeforderte Element über den älteren liegt. Das zuletzt angeforderte Element wird angezeigt und durch [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) zurückgegeben.

### Benachrichtigung

Wenn der Vollbildmodus erfolgreich aktiviert wird, erhält das Dokument, das das Element enthält, ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis. Wenn der Vollbildmodus beendet wird, erhält das Dokument erneut ein [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis. Beachten Sie, dass das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis selbst keine Informationen darüber liefert, ob das Dokument in den Vollbildmodus wechselt oder diesen verlässt, aber wenn das Dokument ein nicht nullwertiges [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) hat, wissen Sie, dass Sie sich im Vollbildmodus befinden.

### Wenn eine Vollbildanfrage fehlschlägt

Es ist nicht garantiert, dass Sie in den Vollbildmodus wechseln können. Zum Beispiel haben {{HTMLElement("iframe")}}-Elemente das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)-Attribut, um explizit zuzulassen, dass ihr Inhalt im Vollbildmodus angezeigt werden kann. Darüber hinaus können bestimmte Arten von Inhalten, wie fensterbasierte Plug-ins, nicht im Vollbildmodus präsentiert werden. Der Versuch, ein Element, das nicht im Vollbildmodus angezeigt werden kann (oder dessen Eltern- oder Kindelemente), in den Vollbildmodus zu wechseln, funktioniert nicht. Stattdessen erhält das Element, das den Vollbildmodus angefordert hat, ein `fullscreenerror`-Ereignis. Wenn eine Vollbildanfrage fehlschlägt, protokolliert Firefox eine Fehlermeldung in der Webkonsole, die erklärt, warum die Anfrage fehlgeschlagen ist. In Chrome und neueren Versionen von Opera wird jedoch keine solche Warnung generiert.

> [!NOTE]
> Vollbildanfragen müssen innerhalb eines Ereignishandlers aufgerufen werden, ansonsten werden sie abgelehnt.

## Verlassen des Vollbildmodus

Der Benutzer hat immer die Möglichkeit, den Vollbildmodus eigenständig zu verlassen; siehe [Wissenswertes für Ihre Benutzer](#wissenswertes_für_ihre_benutzer). Sie können dies auch programmgesteuert tun, indem Sie die Methode [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufrufen.

Wenn sich mehrere Elemente im Vollbildmodus befinden, beendet das Aufrufen von `exitFullscreen()` nur das oberste Element und gibt das nächste darunter frei. Durch Drücken von <kbd>Esc</kbd> oder <kbd>F11</kbd> werden alle Vollbildelemente beendet.

## Weitere Informationen

Das [`Document`](/de/docs/Web/API/Document) liefert einige zusätzliche Informationen, die beim Entwickeln von Webanwendungen im Vollbildmodus nützlich sein können:

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die `fullscreenElement`-Eigenschaft gibt das [`Element`](/de/docs/Web/API/Element) zurück, das derzeit im Vollbildmodus angezeigt wird. Wenn dies nicht null ist, befindet sich das Dokument (oder der Schatten-DOM) im Vollbildmodus. Wenn dies null ist, befindet sich das Dokument (oder der Schatten-DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die `fullscreenEnabled`-Eigenschaft gibt an, ob das Dokument derzeit in einem Zustand ist, der den Wechsel in den Vollbildmodus zulassen würde.

### Viewport-Skalierung in mobilen Browsern

Einige mobile Browser ignorieren im Vollbildmodus die Einstellungen des Metatags für den Viewport und blockieren die Benutzerskalierung. Beispielsweise funktioniert eine "Pinch-to-Zoom"-Geste möglicherweise nicht auf einer Seite, die im Vollbildmodus dargestellt wird, selbst wenn die Seite im Nicht-Vollbildmodus mit "Pinch-to-Zoom" skaliert werden kann.

## Wissenswertes für Ihre Benutzer

Sie sollten sicherstellen, dass Ihre Benutzer wissen, dass sie die <kbd>Esc</kbd>-Taste (oder <kbd>F11</kbd>) drücken können, um den Vollbildmodus zu verlassen.

Darüber hinaus führt das Navigieren zu einer anderen Seite, das Wechseln von Tabs oder der Wechsel zu einer anderen Anwendung (zum Beispiel durch <kbd>Alt</kbd>-<kbd>Tab</kbd>) im Vollbildmodus ebenfalls zum Verlassen des Vollbildmodus.

## Beispiel

Das [mdn/dom-examples GitHub-Repository](https://github.com/mdn/) enthält ein vollständiges Beispiel zur Fullscreen-API.

[Führen Sie das Beispiel aus](https://mdn.github.io/dom-examples/fullscreen-api/index.html) und [sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/fullscreen-api).

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
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
