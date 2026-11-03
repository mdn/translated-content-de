---
title: Leitfaden zur Fullscreen API
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: 05b21c9303964f221febe77f053e5636f230afe9
---

{{DefaultAPISidebar("Fullscreen API")}}

Dieser Artikel zeigt, wie Sie mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ein bestimmtes Element im Vollbildmodus anzeigen und erkennen, wann der Browser in den Vollbildmodus wechselt oder ihn verlässt.

## Vollbildmodus aktivieren

Ein Element, das Sie im Vollbildmodus anzeigen möchten (beispielsweise ein {{HTMLElement("video")}}), können Sie durch Aufrufen seiner Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) in den Vollbildmodus versetzen.
Damit dies funktioniert, muss der Benutzer mit der Seite oder einem UI-Element interagieren (die Funktion erfordert eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)).

Betrachten wir dieses {{HTMLElement("video")}}-Element:

```html
<video controls id="my-video">
  <source src="somevideo.webm" />
  <source src="somevideo.mp4" />
</video>
```

Das Video lässt sich folgendermaßen im Vollbildmodus anzeigen:

```js
const elem = document.getElementById("my-video");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

Dieser Code prüft, ob die Methode `requestFullscreen()` vorhanden ist, bevor er sie aufruft.

Sobald sich ein Element im Vollbildmodus befindet, wird es von {{cssxref(":fullscreen")}} erfasst. Dadurch erhält es einige Standardstile, etwa die Darstellung über den gesamten Bildschirm. Außerdem wird es in der {{Glossary("top_layer", "obersten Ebene")}} platziert.

Wenn für mehrere Elemente der Vollbildmodus angefordert wird, werden sie alle von {{cssxref(":fullscreen")}} erfasst und befinden sich in der obersten Ebene. Sie werden übereinander angeordnet, wobei zuletzt angeforderte Elemente über älteren liegen. Das zuletzt angeforderte Element wird angezeigt und von [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) zurückgegeben.

### Benachrichtigung

Wenn der Vollbildmodus erfolgreich aktiviert wird, empfängt das Dokument, das das Element enthält, ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis. Beim Verlassen des Vollbildmodus empfängt das Dokument erneut ein [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis. Beachten Sie, dass das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis selbst keine Auskunft darüber gibt, ob das Dokument in den Vollbildmodus wechselt oder ihn verlässt. Wenn [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) für das Dokument jedoch nicht null ist, befindet es sich im Vollbildmodus.

### Wenn eine Vollbildanforderung fehlschlägt

Es ist nicht garantiert, dass ein Wechsel in den Vollbildmodus möglich ist. Beispielsweise verfügen {{HTMLElement("iframe")}}-Elemente über das Attribut [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen), mit dem die Anzeige ihres Inhalts im Vollbildmodus ausdrücklich erlaubt werden kann. Außerdem können bestimmte Arten von Inhalten, etwa Plug-ins mit eigenem Fenster, nicht im Vollbildmodus angezeigt werden. Der Versuch, ein Element, das nicht im Vollbildmodus angezeigt werden kann, oder ein über- oder untergeordnetes Element davon in den Vollbildmodus zu versetzen, schlägt fehl. Stattdessen empfängt das Element, für das der Vollbildmodus angefordert wurde, ein `fullscreenerror`-Ereignis. Wenn eine Vollbildanforderung fehlschlägt, protokolliert Firefox in der Web-Konsole eine Fehlermeldung mit dem Grund dafür. Chrome und neuere Versionen von Opera geben dagegen keine solche Warnung aus.

> [!NOTE]
> Vollbildanforderungen müssen innerhalb eines Event-Handlers aufgerufen werden, da sie andernfalls abgelehnt werden.

## Tastatursperre im Browser

Mit der Tastatursperre kann eine Webanwendung Tasten oder Tastenkombinationen empfangen und verarbeiten, die normalerweise vom Browser oder vom zugrunde liegenden Betriebssystem verarbeitet werden.

Einige dieser Tasten werden vom Browser normalerweise zum Verlassen des Vollbildmodus verwendet.
In diesem Fall muss der Browser dem Benutzer eine alternative Möglichkeit zum Verlassen des Vollbildmodus bieten, üblicherweise durch längeres Drücken derselben Taste.

Beispielsweise verwenden Browser zum Verlassen des Vollbildmodus typischerweise die Taste <kbd>Esc</kbd>. Eine Webanwendung möchte diese Taste möglicherweise verwenden, um ein Menü anzuzeigen.
Mit der Tastatursperre kann die Anwendung <kbd>Esc</kbd> abfangen und durch Aufrufen von `preventDefault()` verhindern, dass der Vollbildmodus verlassen wird.
Der Benutzer kann den Vollbildmodus weiterhin durch längeres Drücken von <kbd>Esc</kbd> verlassen.

Um die Tastatursperre zu aktivieren, setzen Sie beim Aufruf von [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) die Option [`keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock) auf `"browser"`.

Das folgende HTML zeigt ein Videoelement, das wir im Vollbildmodus anzeigen möchten.

```html
<p>
  The video element below shows a time-lapse of a flower blooming. You can
  toggle fullscreen on and off using <kbd>Enter</kbd> or
  <kbd>Shift+F</kbd> (uppercase "F"). The embedded document needs to have
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event">
    focus
  </a>
  for the example to work.
</p>

<video controls loop src="/shared-assets/videos/flower.mp4" width="420"></video>
```

```css hidden
body {
  font-family:
    "Benton Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 2em;
}

video::backdrop {
  background-color: #444488;
}
button {
  display: block;
}
kbd {
  border: 2px solid #cdcdcd;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 0 #cdcdcd;
  font-size: 0.825rem;
  padding: 0.25rem;
}
```

Der folgende Code fügt dem Dokument einen `keydown`-Event-Handler hinzu.
Wenn sich das Video nicht im Vollbildmodus befindet und <kbd>Enter</kbd> oder <kbd>Shift+F</kbd> gedrückt wird, ruft der Handler `requestFullscreen({ keyboardLock: "browser" })` für das Videoelement auf.
Im Vollbildmodus prüfen wir, ob <kbd>Esc</kbd> gedrückt wurde, und rufen `event.preventDefault()` auf, um die Standardaktion – das Verlassen des Vollbildmodus – zu verhindern.

```js
const video = document.querySelector("video");
document.addEventListener("keydown", (event) => {
  // Check if we're in fullscreen mode
  if (document.fullscreenElement) {
    // Cancel exiting via the Escape key
    if (event.key === "Escape") {
      event.preventDefault();
      // Do whatever else you might want to do when escape is pressed
    }
  } else if (event.key === "Enter" || event.key === "F") {
    // Open full screen if Enter or F is pressed and not already fullscreen.
    // Note that "F" is case-sensitive (uppercase).
    video.requestFullscreen({ keyboardLock: "browser" }).catch((err) => {
      console.error(`Error enabling fullscreen: ${err.message}`);
    });
  }
});
```

Unten können Sie dies ausprobieren.
Wählen Sie den Frame aus und drücken Sie <kbd>Shift+F</kbd>, um in den Vollbildmodus zu wechseln.
Beachten Sie die vorübergehende Benachrichtigung am oberen Rand der Vollbildseite, die erklärt, wie Sie den Vollbildmodus verlassen.

{{embedlivesample("Browser keyboard locking", , "400", "", "", "", "fullscreen")}}

## Vollbildmodus verlassen

Browser bieten Benutzern eine Möglichkeit, den Vollbildmodus manuell zu verlassen. Diese wird beim Wechsel in den Vollbildmodus in einer vorübergehenden Benachrichtigung angezeigt.
Üblicherweise ist dies die Taste <kbd>Esc</kbd> (oder, wenn die [Tastatursperre des Browsers](/de/docs/Web/API/Element/requestFullscreen#keyboard_locking) aktiv ist, ein längeres Drücken von <kbd>Esc</kbd>).

Ein Browser kann weitere Tasten oder Tastenkombinationen zum Verlassen des Vollbildmodus unterstützen, etwa <kbd>F11</kbd> oder <kbd>Alt+Tab</kbd>.
Er kann den Vollbildmodus auch aus anderen Gründen verlassen, beispielsweise beim Navigieren zu einer anderen Seite, beim Wechseln des Tabs oder beim Wechseln zu einer anderen Anwendung.

Sie können den Vollbildmodus programmgesteuert verlassen, indem Sie die Methode [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufrufen.
Wenn sich mehrere Elemente im Vollbildmodus befinden, wird durch Aufrufen von `exitFullscreen()` nur das oberste Element aus dem Vollbildmodus entfernt, sodass das darunterliegende Element sichtbar wird.
Durch Drücken der browserspezifischen Taste zum Verlassen des Vollbildmodus, die beim Wechsel in den Vollbildmodus in der Benachrichtigung angezeigt wurde (üblicherweise <kbd>Esc</kbd>), wird der Vollbildmodus für alle Elemente beendet.

## Weitere Informationen

[`Document`](/de/docs/Web/API/Document) stellt einige zusätzliche Informationen bereit, die bei der Entwicklung von Vollbild-Webanwendungen nützlich sein können:

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` gibt das [`Element`](/de/docs/Web/API/Element) an, das derzeit im Vollbildmodus angezeigt wird. Ist der Wert nicht null, befindet sich das Dokument (oder Shadow DOM) im Vollbildmodus. Ist der Wert null, befindet sich das Dokument (oder Shadow DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` gibt an, ob sich das Dokument derzeit in einem Zustand befindet, in dem der Vollbildmodus angefordert werden kann.

### Viewport-Skalierung in mobilen Browsern

Einige mobile Browser ignorieren im Vollbildmodus die Einstellungen des Viewport-Meta-Tags und verhindern, dass Benutzer die Ansicht skalieren. Beispielsweise funktioniert die „Pinch-to-Zoom“-Geste auf einer im Vollbildmodus angezeigten Seite möglicherweise nicht – selbst wenn sich die Seite außerhalb des Vollbildmodus damit skalieren lässt.

## Beispiel

Das [GitHub-Repository mdn/dom-examples](https://github.com/mdn/) enthält ein vollständiges Beispiel für die Fullscreen API.

[Probieren Sie das Beispiel aus](https://mdn.github.io/dom-examples/fullscreen-api/index.html) und [sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/fullscreen-api).

## Siehe auch

- [Vollbildmodus verwenden](/de/docs/Web/API/Fullscreen_API)
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen)
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
