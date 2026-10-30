---
title: Leitfaden zur Fullscreen API
slug: Web/API/Fullscreen_API/Guide
l10n:
  sourceCommit: 9740186550ed818e727ecc9906b499cdbe951cfc
---

{{DefaultAPISidebar("Fullscreen API")}}

Dieser Artikel zeigt, wie Sie mit der [Fullscreen API](/de/docs/Web/API/Fullscreen_API) ein bestimmtes Element im Vollbildmodus anzeigen und erkennen, wann der Browser in den Vollbildmodus wechselt oder ihn verlässt.

## Vollbildmodus aktivieren

Wenn Sie ein Element wie beispielsweise ein {{HTMLElement("video")}} im Vollbildmodus anzeigen möchten, rufen Sie dessen Methode [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf.
Damit dies funktioniert, muss der Benutzer mit der Seite oder einem UI-Element interagieren (die Funktion erfordert eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)).

Betrachten wir dieses {{HTMLElement("video")}}-Element:

```html
<video controls id="my-video">
  <source src="somevideo.webm" />
  <source src="somevideo.mp4" />
</video>
```

So können wir das Video im Vollbildmodus anzeigen:

```js
const elem = document.getElementById("my-video");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
```

Dieser Code prüft, ob die Methode `requestFullscreen()` vorhanden ist, bevor er sie aufruft.

Sobald sich ein Element im Vollbildmodus befindet, trifft {{cssxref(":fullscreen")}} darauf zu. Dadurch erhält es einige Standardstile, etwa eine Darstellung über den gesamten Bildschirm. Außerdem wird es in der {{Glossary("top_layer", "obersten Ebene")}} platziert.

Wenn für mehrere Elemente der Vollbildmodus angefordert wird, trifft {{cssxref(":fullscreen")}} auf alle zu, und sie befinden sich alle in der obersten Ebene. Sie werden übereinander gestapelt, wobei zuletzt angeforderte Elemente über den zuvor angeforderten liegen. Das zuletzt angeforderte Element wird angezeigt und von [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) zurückgegeben.

### Benachrichtigung

Wenn der Vollbildmodus erfolgreich aktiviert wurde, empfängt das Dokument, das das Element enthält, ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis. Beim Verlassen des Vollbildmodus empfängt das Dokument erneut ein [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis. Das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis selbst gibt nicht an, ob das Dokument in den Vollbildmodus wechselt oder ihn verlässt. Wenn [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) für das Dokument jedoch nicht null ist, befindet es sich im Vollbildmodus.

### Wenn eine Vollbildanforderung fehlschlägt

Es ist nicht garantiert, dass Sie in den Vollbildmodus wechseln können. Beispielsweise verfügen {{HTMLElement("iframe")}}-Elemente über das Attribut [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen), mit dem die Darstellung ihres Inhalts im Vollbildmodus ausdrücklich erlaubt wird. Außerdem können bestimmte Arten von Inhalten, etwa Plug-ins mit eigenem Fenster, nicht im Vollbildmodus angezeigt werden. Der Versuch, ein solches Element (oder ein übergeordnetes oder untergeordnetes Element davon) im Vollbildmodus anzuzeigen, schlägt fehl. Stattdessen empfängt das Element, das den Vollbildmodus angefordert hat, ein `fullscreenerror`-Ereignis. Wenn eine Vollbildanforderung fehlschlägt, protokolliert Firefox in der Webkonsole eine Fehlermeldung, die den Grund erklärt. In Chrome und neueren Versionen von Opera wird dagegen keine solche Warnung ausgegeben.

> [!NOTE]
> Vollbildanforderungen müssen innerhalb eines Event-Handlers aufgerufen werden; andernfalls werden sie abgelehnt.

## Tastatursperre im Browser

Mit der Tastatursperre kann eine Webanwendung Tasten und Tastenkombinationen empfangen und verarbeiten, die normalerweise vom Browser oder vom zugrunde liegenden Betriebssystem verarbeitet werden.

Einige dieser Tasten werden normalerweise vom Browser verwendet, um den Vollbildmodus zu verlassen.
In diesem Fall sollte der Browser dem Benutzer eine andere Möglichkeit zum Verlassen bieten, üblicherweise durch längeres Drücken derselben Taste.

Beispielsweise verwenden Browser normalerweise die Taste <kbd>Esc</kbd>, um den Vollbildmodus zu verlassen. Eine Webanwendung könnte sie jedoch verwenden wollen, um ein Menü anzuzeigen.
Mit der Tastatursperre kann die Anwendung <kbd>Esc</kbd> abfangen und `preventDefault()` aufrufen, um zu verhindern, dass der Vollbildmodus verlassen wird.
Der Benutzer kann ihn weiterhin verlassen, indem er <kbd>Esc</kbd> länger gedrückt hält.

Um die Tastatursperre zu aktivieren, setzen Sie die Option [`keyboardLock`](/de/docs/Web/API/Element/requestFullscreen#keyboardlock) beim Aufruf von [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf `"browser"`.

Das folgende HTML zeigt ein Videoelement, das wir möglicherweise im Vollbildmodus anzeigen möchten.

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

Der folgende Code fügt dem Dokument einen Event-Handler für `keydown` hinzu.
Wenn der Vollbildmodus nicht aktiv ist und <kbd>Enter</kbd> oder <kbd>Shift+F</kbd> gedrückt wird, ruft der Handler `requestFullscreen({ keyboardLock: "browser" })` für das Videoelement auf.
Im Vollbildmodus prüfen wir, ob <kbd>Esc</kbd> gedrückt wurde, und rufen `event.preventDefault()` auf, um die Standardaktion (das Verlassen des Vollbildmodus) zu verhindern.

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

Unten können Sie sehen, wie dies funktioniert.
Wählen Sie den Frame aus und drücken Sie <kbd>Shift+F</kbd>, um den Vollbildmodus zu aktivieren.
Beachten Sie die vorübergehende Benachrichtigung oben auf der Vollbildseite, die erklärt, wie Sie den Vollbildmodus verlassen können.

{{embedlivesample("Browser keyboard locking", , "400", "", "", "", "fullscreen")}}

## Vollbildmodus verlassen

Browser bieten Benutzern eine Möglichkeit, den Vollbildmodus manuell zu verlassen. Diese wird beim Aktivieren des Vollbildmodus in einer vorübergehenden Benachrichtigung angezeigt.
Üblicherweise ist dies die Taste <kbd>Esc</kbd> (oder ein längeres Drücken von <kbd>Esc</kbd> im [Modus mit Browser-Tastatursperre](/de/docs/Web/API/Element/requestFullscreen#keyboard_locking)).

Ein Browser kann auch andere Tasten oder Tastenkombinationen zum Verlassen des Vollbildmodus unterstützen, etwa <kbd>F11</kbd> oder <kbd>Alt+Tab</kbd>.
Er kann den Vollbildmodus auch aus anderen Gründen verlassen, beispielsweise beim Navigieren zu einer anderen Seite, beim Wechseln des Tabs oder beim Wechseln zu einer anderen Anwendung.

Sie können den Vollbildmodus programmgesteuert verlassen, indem Sie die Methode [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufrufen.
Wenn sich mehrere Elemente im Vollbildmodus befinden, beendet ein Aufruf von `exitFullscreen()` den Vollbildmodus nur für das oberste Element, sodass das darunterliegende Element sichtbar wird.
Durch Drücken der browserspezifischen Taste zum Verlassen des Vollbildmodus, die beim Aktivieren in der Benachrichtigung angezeigt wurde (normalerweise <kbd>Esc</kbd>), wird der Vollbildmodus für alle Elemente beendet.

## Weitere Informationen

[`Document`](/de/docs/Web/API/Document) stellt zusätzliche Informationen bereit, die bei der Entwicklung von Webanwendungen mit Vollbildmodus nützlich sein können:

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` gibt das [`Element`](/de/docs/Web/API/Element) an, das derzeit im Vollbildmodus angezeigt wird. Wenn ihr Wert nicht null ist, befindet sich das Dokument (oder Shadow DOM) im Vollbildmodus. Wenn ihr Wert null ist, befindet es sich nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` gibt an, ob sich das Dokument derzeit in einem Zustand befindet, in dem der Vollbildmodus angefordert werden kann.

### Viewport-Skalierung in mobilen Browsern

Einige mobile Browser ignorieren im Vollbildmodus die Einstellungen des Viewport-Meta-Tags und verhindern, dass Benutzer die Ansicht skalieren. So funktioniert eine „Pinch-to-Zoom“-Geste auf einer im Vollbildmodus angezeigten Seite möglicherweise nicht – selbst wenn sich die Seite außerhalb des Vollbildmodus damit skalieren lässt.

## Beispiel

Das [GitHub-Repository mdn/dom-examples](https://github.com/mdn/) enthält ein vollständiges Beispiel für die Fullscreen API.

[Führen Sie das Beispiel aus](https://mdn.github.io/dom-examples/fullscreen-api/index.html) und [sehen Sie sich den Quellcode an](https://github.com/mdn/dom-examples/tree/main/fullscreen-api).

## Siehe auch

- [Vollbildmodus verwenden](/de/docs/Web/API/Fullscreen_API)
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen)
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
