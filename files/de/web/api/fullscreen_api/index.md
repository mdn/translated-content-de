---
title: Fullscreen API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: 27d5cb7e9d523a629d8469e81508d3cc81250b5c
---

{{DefaultAPISidebar("Fullscreen API")}}

Die **Vollbild-API** fügt Methoden hinzu, um ein bestimmtes [`Element`](/de/docs/Web/API/Element) (und dessen Nachkommen) im Vollbildmodus darzustellen und um den Vollbildmodus zu beenden, wenn er nicht mehr benötigt wird. Damit ist es möglich, gewünschten Inhalt - wie beispielsweise ein Online-Spiel - auf dem gesamten Bildschirm des Nutzers darzustellen, wobei alle UI-Elemente des Browsers und andere Anwendungen vom Bildschirm entfernt werden, bis der Vollbildmodus ausgeschaltet wird.

Sehen Sie sich den Artikel [Leitfaden zur Vollbild-API](/de/docs/Web/API/Fullscreen_API/Guide) an, um mehr darüber zu erfahren, wie die API verwendet wird.

## Schnittstellen

_Die Vollbild-API hat keine eigenen Schnittstellen. Stattdessen erweitert sie mehrere andere Schnittstellen, um die Methoden, Eigenschaften und Ereignishandler hinzuzufügen, die für die Bereitstellung der Vollbildfunktionalität erforderlich sind. Diese sind in den folgenden Abschnitten aufgeführt._

## Instanzmethoden

Die Vollbild-API fügt den Schnittstellen [`Document`](/de/docs/Web/API/Document) und [`Element`](/de/docs/Web/API/Element) Methoden hinzu, um den Vollbildmodus ein- und auszuschalten.

### Instanzmethoden der Document-Schnittstelle

- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Fordert den {{Glossary("user_agent", "Benutzeragenten")}} auf, vom Vollbildmodus zurück in den Fenstermodus zu wechseln. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus vollständig beendet wurde.

### Instanzmethoden der Element-Schnittstelle

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den Benutzeragenten auf, das angegebene Element (und somit auch dessen Nachkommen) in den Vollbildmodus zu versetzen, wobei alle UI-Elemente des Browsers sowie alle anderen Anwendungen vom Bildschirm entfernt werden. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus aktiviert wurde.

## Instanzeigenschaften

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` gibt Ihnen das [`Element`](/de/docs/Web/API/Element) an, das derzeit im Vollbildmodus im DOM (oder Shadow DOM) angezeigt wird. Wenn dies `null` ist, befindet sich das Dokument (oder Shadow DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` zeigt Ihnen an, ob es möglich ist, den Vollbildmodus zu aktivieren. Dies ist `false`, wenn der Vollbildmodus aus irgendeinem Grund nicht verfügbar ist (z.B. wenn die `"fullscreen"`-Funktion nicht erlaubt ist oder der Vollbildmodus nicht unterstützt wird).

### Veraltete Eigenschaften

- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}

  - : Ein Boolescher Wert, der `true` ist, wenn das Dokument ein Element hat, das derzeit im Vollbildmodus angezeigt wird; andernfalls ist dieser Wert `false`.

    > [!NOTE]
    > Verwenden Sie stattdessen die Eigenschaft [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) auf dem [`Document`](/de/docs/Web/API/Document) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot); wenn dieser Wert nicht `null` ist, handelt es sich um ein [`Element`](/de/docs/Web/API/Element), das derzeit im Vollbildmodus angezeigt wird.

## Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein [`Element`](/de/docs/Web/API/Element) gesendet, wenn es in den oder aus dem Vollbildmodus wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem Vollbildmodus zu versetzen.

## Zugriffskontrolle

Die Verfügbarkeit des Vollbildmodus kann mit einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) kontrolliert werden. Die Funktion für den Vollbildmodus wird durch den String `"fullscreen"` identifiziert, mit einem standardmäßigen Zulassungslistenwert von `"self"`, was bedeutet, dass der Vollbildmodus in obersten Dokumentenkontexten sowie in verschachtelten Browsing-Kontexten erlaubt ist, die von demselben Ursprung wie das oberste Dokument geladen wurden.

## Anwendungshinweise

Benutzer können den Vollbildmodus beenden, indem sie die <kbd>ESC</kbd>- (oder <kbd>F11</kbd>)-Taste drücken, anstatt darauf zu warten, dass die Website oder App dies programmatisch tut. Stellen Sie sicher, dass Sie in Ihrem Benutzerinterface geeignete Elemente bereitstellen, die den Benutzer darüber informieren, dass diese Option verfügbar ist.

> [!NOTE]
> Das Navigieren zu einer anderen Seite, das Wechseln der Tabs oder das Wechseln zu einer anderen Anwendung mithilfe eines Anwendungsswitchers (oder <kbd>Alt</kbd>-<kbd>Tab</kbd>) beendet ebenfalls den Vollbildmodus.

## Beispiele

### Einfache Verwendung des Vollbildmodus

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Das Drücken der <kbd>Enter</kbd>-Taste ermöglicht es dem Benutzer, zwischen der Fenster- und der Vollbilddarstellung des Videos zu wechseln.

[Live-Beispiel anzeigen](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Überwachungsverfahren für die Enter-Taste

Wenn die Seite geladen wird, wird dieser Code ausgeführt, um einen Ereignis-Listener einzurichten, der auf die <kbd>Enter</kbd>-Taste achtet.

```js
const video = document.getElementById("video");

// On pressing ENTER call toggleFullScreen method
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    toggleFullScreen(video);
  }
});
```

#### Umschalten des Vollbildmodus

Dieser Code wird vom obigen Ereignishandler aufgerufen, wenn der Benutzer die <kbd>Enter</kbd>-Taste drückt.

```js
function toggleFullScreen(video) {
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    video.requestFullscreen();
  } else {
    // Otherwise exit the full screen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}
```

Dies beginnt mit dem Überprüfen des Wertes des `fullscreenElement`-Attributs des [`document`](/de/docs/Web/API/Document). Wenn der Wert `null` ist, befindet sich das Dokument derzeit im Fenstermodus, sodass wir in den Vollbildmodus wechseln müssen; andernfalls ist es das Element, das sich derzeit im Vollbildmodus befindet. Der Wechsel in den Vollbildmodus erfolgt durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf dem {{HTMLElement("video")}}-Element.

Wenn der Vollbildmodus bereits aktiv ist (`fullscreenElement` ist nicht `null`), rufen wir [`exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf dem `document` auf, um den Vollbildmodus zu beenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen)
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
