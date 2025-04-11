---
title: Leitfaden zur Fullscreen-API
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Fullscreen API")}}

Dieser Artikel zeigt, wie Sie die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden, um ein bestimmtes Element im Vollbildmodus darzustellen und wie Sie erkennen, wann der Browser in den oder aus dem Vollbildmodus wechselt.

## Aktivieren des Vollbildmodus

Um ein Element im Vollbildmodus darzustellen (wie beispielsweise ein {{HTMLElement("video")}}), können Sie dessen Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) aufrufen.

Betrachten wir dieses {{HTMLElement("video")}}-Element:

```html
<video controls id="my-video">
  <source src="somevideo.webm" />
  <source src="somevideo.mp4" />
</video>
```

Wir können dieses Video folgendermaßen in den Vollbildmodus versetzen:

```js
const elem = document.getElementById("my-video");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

Dieser Code überprüft das Vorhandensein der Methode `requestFullscreen()`, bevor sie aufgerufen wird.

Sobald ein Element im Vollbildmodus ist, wird es durch {{cssxref(":fullscreen")}} erkannt, was ihm einige Standardstile verleiht, wie etwa die komplette Ausfüllung des Bildschirms. Es wird auch in der {{Glossary("top_layer", "obersten Ebene")}} platziert.

Wenn mehrere Elemente im Vollbildmodus dargestellt werden sollen, werden sie alle durch {{cssxref(":fullscreen")}} erkannt und befinden sich alle in der obersten Ebene. Sie stapeln sich, wobei die zuletzt angeforderten Elemente oben auf den älteren liegen. Das zuletzt angeforderte Element wird angezeigt und durch [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) zurückgegeben.

### Benachrichtigung

Wenn der Vollbildmodus erfolgreich aktiviert wird, erhält das Dokument, das das Element enthält, ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis. Wenn der Vollbildmodus beendet wird, erhält das Dokument erneut ein [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis. Beachten Sie, dass das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis selbst keine Informationen darüber liefert, ob das Dokument in den oder aus dem Vollbildmodus wechselt. Aber wenn das Dokument ein nicht-`null` [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) besitzt, wissen Sie, dass Sie sich im Vollbildmodus befinden.

### Wenn eine Vollbildanforderung fehlschlägt

Es ist nicht garantiert, dass der Wechsel in den Vollbildmodus gelingt. Zum Beispiel haben {{HTMLElement("iframe")}}-Elemente das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)-Attribut, um sich bewusst dafür zu entscheiden, ihren Inhalt im Vollbildmodus darzustellen. Zusätzlich können bestimmte Arten von Inhalten, wie fensterbasierte Plug-ins, nicht im Vollbildmodus angezeigt werden. Der Versuch, ein Element im Vollbildmodus darzustellen, das nicht angezeigt werden kann (oder dessen Eltern- oder Kinderelement dies nicht kann), wird nicht funktionieren. Stattdessen erhält das Element, das Vollbild angefordert hat, ein `fullscreenerror`-Ereignis. Wenn eine Vollbildanforderung fehlschlägt, protokolliert Firefox eine Fehlermeldung in der Webkonsole, die erklärt, warum die Anforderung fehlgeschlagen ist. In Chrome und neueren Versionen von Opera wird jedoch keine solche Warnung generiert.

> [!NOTE]
> Vollbildanforderungen müssen innerhalb eines Ereignis-Handlers aufgerufen werden, andernfalls werden sie abgelehnt.

## Beenden des Vollbildmodus

Der Benutzer hat jederzeit die Möglichkeit, den Vollbildmodus aus eigener Initiative zu verlassen; siehe [Dinge, die Ihre Benutzer wissen möchten](#dinge,_die_ihre_benutzer_wissen_möchten). Sie können dies auch programmatisch tun, indem Sie die Methode [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufrufen.

Wenn sich mehrere Elemente im Vollbildmodus befinden, beendet der Aufruf von `exitFullscreen()` nur das oberste Element und gibt das darunterliegende Element frei. Das Drücken von <kbd>Esc</kbd> oder <kbd>F11</kbd> beendet alle Vollbildelemente.

## Weitere Informationen

Das [`Document`](/de/docs/Web/API/Document) bietet einige zusätzliche Informationen, die beim Entwickeln von Webanwendungen im Vollbildmodus nützlich sein können:

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die `fullscreenElement`-Eigenschaft gibt Ihnen das [`Element`](/de/docs/Web/API/Element) an, das derzeit im Vollbildmodus angezeigt wird. Wenn dieser Wert nicht null ist, befindet sich das Dokument (oder der Shadow-DOM) im Vollbildmodus. Ist dieser Wert null, befindet sich das Dokument (oder der Shadow-DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die `fullscreenEnabled`-Eigenschaft zeigt an, ob das Dokument derzeit in einem Zustand ist, der den Anruf des Vollbildmodus zulassen würde.

### Viewport-Skalierung in mobilen Browsern

Einige mobile Browser ignorieren im Vollbildmodus die Einstellungen des Viewport-Meta-Tags und blockieren das Skalieren durch den Benutzer; zum Beispiel könnte eine "Pinch-to-Zoom"-Geste auf einer Seite im Vollbildmodus nicht funktionieren — selbst wenn sie im Normalmodus skalierbar ist.

## Dinge, die Ihre Benutzer wissen möchten

Stellen Sie sicher, dass Ihre Benutzer wissen, dass sie die <kbd>Esc</kbd>-Taste (oder <kbd>F11</kbd>) drücken können, um den Vollbildmodus zu verlassen.

Zudem führt das Navigieren zu einer anderen Seite, das Wechseln von Tabs oder das Wechseln zu einer anderen Anwendung (zum Beispiel mit <kbd>Alt</kbd>-<kbd>Tab</kbd>) während des Vollbildmodus ebenfalls zum Beenden des Vollbilds.

## Beispiel

In diesem Beispiel wird ein Video auf einer Webseite dargestellt. Das Drücken der <kbd>Return</kbd>- oder <kbd>Enter</kbd>-Taste ermöglicht es dem Benutzer, zwischen Fenstermodus und Vollbildmodus des Videos zu wechseln.

[Live-Beispiele ansehen](https://mdn.dev/archives/media/samples/domref/fullscreen.html)

### Überwachung der Eingabetaste

Wenn die Seite geladen ist, wird dieser Code ausgeführt, um einen Ereignis-Listener einzurichten, der auf die <kbd>Enter</kbd>-Taste achtet.

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

Dieser Code wird aufgerufen, wenn der Benutzer, wie oben beschrieben, die <kbd>Enter</kbd>-Taste drückt.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

Dies beginnt damit, den Wert des `fullscreenElement`-Attributs im [`document`](/de/docs/Web/API/Document) zu überprüfen. Ist es `null`, befindet sich das Dokument derzeit im Fenstermodus, daher müssen wir in den Vollbildmodus wechseln. Der Wechsel in den Vollbildmodus erfolgt durch den Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen).

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
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
