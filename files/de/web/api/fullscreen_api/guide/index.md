---
title: Leitfaden zur Fullscreen-API
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: d4d05693841eba16c40260d48cd29b353d50dd03
---

{{DefaultAPISidebar("Fullscreen API")}}

Dieser Artikel zeigt, wie Sie die [Fullscreen API](/de/docs/Web/API/Fullscreen_API) verwenden, um ein bestimmtes Element im Vollbildmodus anzuzeigen, sowie wie Sie erkennen können, wann der Browser in den oder aus dem Vollbildmodus wechselt.

## Aktivieren des Vollbildmodus

Wenn Sie ein Element im Vollbildmodus präsentieren möchten (zum Beispiel ein {{HTMLElement("video")}}), können Sie es in den Vollbildmodus versetzen, indem Sie dessen [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)-Methode aufrufen.

Lassen Sie uns dieses {{HTMLElement("video")}}-Element betrachten:

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

Dieser Code überprüft, ob die Methode `requestFullscreen()` existiert, bevor sie aufgerufen wird.

Sobald sich ein Element im Vollbildmodus befindet, wird es durch {{cssxref(":fullscreen")}} erfasst, wodurch es einige Standardstile erhält, wie zum Beispiel den gesamten Bildschirm einzunehmen. Es wird außerdem in die {{Glossary("top_layer", "oberste Ebene")}} verschoben.

Wenn mehrere Elemente im Vollbildmodus angezeigt werden sollen, werden sie alle durch {{cssxref(":fullscreen")}} erfasst und befinden sich alle in der obersten Ebene. Sie stapeln sich übereinander, wobei kürzlich angeforderte Elemente über älteren liegen. Das zuletzt angeforderte Element wird angezeigt und wird von [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) zurückgegeben.

### Benachrichtigung

Wenn der Vollbildmodus erfolgreich aktiviert wird, erhält das Dokument, das das Element enthält, ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis. Wenn der Vollbildmodus verlassen wird, erhält das Dokument erneut ein [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis. Beachten Sie, dass das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis selbst keine Informationen darüber liefert, ob das Dokument in den Vollbildmodus wechselt oder ihn verlässt. Wenn das Dokument jedoch ein nicht nullwertiges [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) hat, wissen Sie, dass Sie im Vollbildmodus sind.

### Wenn eine Vollbild-Anforderung fehlschlägt

Es ist nicht garantiert, dass Sie in den Vollbildmodus wechseln können. Zum Beispiel haben {{HTMLElement("iframe")}}-Elemente das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)-Attribut, um zuzulassen, dass deren Inhalt im Vollbildmodus angezeigt werden darf. Darüber hinaus können bestimmte Arten von Inhalten, wie zum Beispiel fensterbasierte Plug-ins, nicht im Vollbildmodus präsentiert werden. Der Versuch, ein Element in den Vollbildmodus zu versetzen, das nicht im Vollbildmodus angezeigt werden kann (oder der Elternteil oder Nachfahre eines solchen Elements), wird nicht funktionieren. Stattdessen empfängt das Element, das den Vollbildmodus angefordert hat, ein `fullscreenerror`-Ereignis. Wenn eine Vollbildanfrage fehlschlägt, protokolliert Firefox eine Fehlermeldung in der Webkonsole, die erklärt, warum die Anfrage fehlschlug. In Chrome und neueren Versionen von Opera wird jedoch keine solche Warnung generiert.

> [!NOTE]
> Vollbildanfragen müssen innerhalb eines Ereignishandlers aufgerufen werden, andernfalls werden sie abgelehnt.

## Beenden des Vollbildmodus

Der Benutzer hat immer die Möglichkeit, den Vollbildmodus selbst zu verlassen; siehe [Dinge, die Ihre Nutzer wissen möchten](#dinge,_die_ihre_nutzer_wissen_möchten). Sie können dies auch programmgesteuert tun, indem Sie die [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)-Methode aufrufen.

Wenn sich mehrere Elemente im Vollbildmodus befinden, beendet der Aufruf von `exitFullscreen()` nur das oberste Element und zeigt das nächste darunter liegende Element an. Durch Drücken von <kbd>Esc</kbd> oder <kbd>F11</kbd> werden alle volle Bildschirmelemente beendet.

## Weitere Informationen

Das [`Document`](/de/docs/Web/API/Document) bietet einige zusätzliche Informationen, die nützlich sein können, wenn Sie Vollbild-Webanwendungen entwickeln:

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die `fullscreenElement`-Eigenschaft gibt das [`Element`](/de/docs/Web/API/Element) an, das derzeit im Vollbildmodus angezeigt wird. Wenn dies nicht null ist, befindet sich das Dokument (oder Shadow DOM) im Vollbildmodus. Wenn dies null ist, befindet sich das Dokument (oder Shadow DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die `fullscreenEnabled`-Eigenschaft gibt an, ob das Dokument derzeit einen Zustand hat, der es erlaubt, den Vollbildmodus anzufordern.

### Viewport-Skalierung in mobilen Browsern

Einige mobile Browser ignorieren im Vollbildmodus die Einstellungen des Viewport-Meta-Tags und blockieren die Benutzerskalierung; beispielsweise kann eine "Pinch-to-Zoom"-Geste auf einer im Vollbildmodus dargestellten Seite nicht funktionieren - selbst wenn die Seite im normalen Modus mit Pinch-to-Zoom skaliert werden kann.

## Dinge, die Ihre Nutzer wissen möchten

Sie sollten sicherstellen, dass Ihre Nutzer wissen, dass sie die <kbd>Esc</kbd>-Taste (oder <kbd>F11</kbd>) drücken können, um den Vollbildmodus zu verlassen.

Darüber hinaus führt das Navigieren zu einer anderen Seite, das Wechseln der Tabs oder das Wechseln zu einer anderen Anwendung (z. B. mit <kbd>Alt</kbd>-<kbd>Tab</kbd>) im Vollbildmodus ebenfalls zum Beenden des Vollbildmodus.

## Beispiel

Das [mdn/dom-examples GitHub-Repo](https://github.com/mdn/) enthält ein vollständiges Beispiel zur Fullscreen-API.

[Führen Sie das Beispiel aus](https://mdn.github.io/dom-examples/fullscreen-api/index.html) und [durchsuchen Sie den Quellcode](https://github.com/mdn/dom-examples/tree/main/fullscreen-api).

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
