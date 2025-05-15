---
title: Fullscreen API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: 05592fd7b1209ec79982925762b96825a756cb81
---

{{DefaultAPISidebar("Fullscreen API")}}

Die **Fullscreen-API** fügt Methoden hinzu, um ein spezielles [`Element`](/de/docs/Web/API/Element) (und seine Nachkommen) im Vollbildmodus zu präsentieren und den Vollbildmodus zu beenden, wenn er nicht mehr benötigt wird. Dadurch wird es möglich, gewünschte Inhalte – wie ein Online-Spiel – auf dem gesamten Bildschirm des Nutzers darzustellen und alle Elemente der Benutzeroberfläche des Browsers sowie andere Anwendungen vom Bildschirm zu entfernen, bis der Vollbildmodus deaktiviert wird.

Details zur Nutzung der API finden Sie im Artikel [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide).

## Schnittstellen

_Die Fullscreen-API verfügt über keine eigenen Schnittstellen. Stattdessen erweitert sie mehrere andere Schnittstellen, um die Methoden, Eigenschaften und Ereignishandler hinzuzufügen, die für die Bereitstellung der Vollbildfunktionalität erforderlich sind. Diese sind in den folgenden Abschnitten aufgelistet._

## Instanzmethoden

Die Fullscreen-API fügt den Schnittstellen [`Document`](/de/docs/Web/API/Document) und [`Element`](/de/docs/Web/API/Element) Methoden hinzu, um den Vollbildmodus ein- und auszuschalten.

### Instanzmethoden der Document-Schnittstelle

- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Fordert den {{Glossary("user_agent", "Benutzeragenten")}} auf, vom Vollbildmodus in den Fenstermodus zu wechseln. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus vollständig beendet ist.

### Instanzmethoden der Element-Schnittstelle

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den Nutzeragenten auf, das angegebene Element (und in der Folge seine Nachkommen) in den Vollbildmodus zu versetzen, wodurch alle Benutzeroberflächenelemente des Browsers sowie alle anderen Anwendungen vom Bildschirm entfernt werden. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus aktiviert wurde.

## Instanzeigenschaften

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` gibt Ihnen das [`Element`](/de/docs/Web/API/Element) an, das derzeit im Vollbildmodus auf dem DOM (oder shadow DOM) angezeigt wird. Wenn dies `null` ist, befindet sich das Dokument (oder shadow DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` zeigt an, ob es möglich ist, den Vollbildmodus zu aktivieren. Dies ist `false`, wenn der Vollbildmodus aus irgendeinem Grund nicht verfügbar ist (wie das Fehlen der `"fullscreen"`-Funktion oder die fehlende Unterstützung des Vollbildmodus).

### Veraltete Eigenschaften

- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}

  - : Ein boolescher Wert, der `true` ist, wenn das Dokument ein Element hat, das derzeit im Vollbildmodus angezeigt wird; andernfalls gibt es `false` zurück.

    > [!NOTE]
    > Verwenden Sie stattdessen die Eigenschaft [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) auf dem [`Document`](/de/docs/Web/API/Document) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot); wenn es nicht `null` ist, dann ist es ein [`Element`](/de/docs/Web/API/Element), das derzeit im Vollbildmodus angezeigt wird.

## Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein [`Element`](/de/docs/Web/API/Element) gesendet, wenn es in den oder aus dem Vollbildmodus wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn beim Versuch, es in den oder aus dem Vollbildmodus zu schalten, ein Fehler auftritt.

## Zugriffssteuerung

Die Verfügbarkeit des Vollbildmodus kann mit einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) kontrolliert werden. Die Funktion des Vollbildmodus wird durch den String `"fullscreen"` identifiziert, mit einem Standard-Wert von `"self"`, was bedeutet, dass der Vollbildmodus in Dokumentkontexten der obersten Ebene sowie in geschachtelten Browsing-Kontexten, die aus der gleichen Herkunft wie das oberste Dokument geladen sind, erlaubt ist.

## Anwendungshinweise

Benutzer können den Vollbildmodus verlassen, indem sie die <kbd>ESC</kbd> (oder <kbd>F11</kbd>)-Taste drücken, anstatt zu warten, bis die Website oder App dies programmatisch tut. Stellen Sie sicher, dass Sie irgendwo in Ihrer Benutzeroberfläche geeignete Elemente bereitstellen, die den Benutzer darüber informieren, dass diese Option verfügbar ist.

> [!NOTE]
> Das Navigieren zu einer anderen Seite, das Wechseln der Registerkarten oder das Wechseln zu einer anderen Anwendung mit einem beliebigen Anwendungswechsler (oder <kbd>Alt</kbd>-<kbd>Tab</kbd>) wird ebenfalls den Vollbildmodus beenden.

## Beispiele

### Einfaches Vollbild-Beispiel

In diesem Beispiel wird ein Video in einer Webseite präsentiert. Durch Drücken der <kbd>Enter</kbd>-Taste kann der Benutzer zwischen der fensterweisen und der Vollbilddarstellung des Videos umschalten.

[Live-Beispiel anzeigen](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Überwachung der Enter-Taste

Wenn die Seite geladen ist, wird dieser Code ausgeführt, um einen Ereignislistener zur Überwachung der <kbd>Enter</kbd>-Taste einzurichten.

```js
const video = document.getElementById("video");
document.addEventListener(
  "keypress",
  function (e) {
    if (e.key === "Enter") {
      toggleFullScreen(video);
    }
  },
  false,
);
```

#### Umschaltung des Vollbildmodus

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

Diese beginnt mit dem Überprüfen des Wertes des `fullscreenElement`-Attributs des [`document`](/de/docs/Web/API/Document). In einer realen Implementierung möchten Sie in diesem Moment nach prefixierten Versionen prüfen (`mozFullScreenElement`, `msFullscreenElement` oder `webkitFullscreenElement`, zum Beispiel). Wenn der Wert `null` ist, befindet sich das Dokument derzeit im Fenstermodus, und wir müssen in den Vollbildmodus schalten; andernfalls ist es das Element, das sich derzeit im Vollbildmodus befindet. Der Wechsel in den Vollbildmodus erfolgt durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf dem {{HTMLElement("video")}}-Element.

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
