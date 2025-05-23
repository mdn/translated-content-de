---
title: Fullscreen API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{DefaultAPISidebar("Fullscreen API")}}

Die **Fullscreen-API** fügt Methoden hinzu, um ein bestimmtes [`Element`](/de/docs/Web/API/Element) (und seine Nachfahren) im Vollbildmodus darzustellen und den Vollbildmodus zu beenden, sobald er nicht mehr benötigt wird. Dies ermöglicht es, gewünschte Inhalte – wie z. B. ein Online-Spiel – im gesamten Bildschirm des Benutzers zu präsentieren und alle Benutzeroberflächenelemente des Browsers sowie andere Anwendungen vom Bildschirm zu entfernen, bis der Vollbildmodus beendet wird.

Details zur Nutzung der API finden Sie im Artikel [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide).

## Schnittstellen

_Die Fullscreen-API hat keine eigenen Schnittstellen. Stattdessen erweitert sie mehrere andere Schnittstellen, um die Methoden, Eigenschaften und Ereignishandler hinzuzufügen, die für die Bereitstellung der Vollbild-Funktionalität erforderlich sind. Diese sind in den folgenden Abschnitten aufgeführt._

## Instanzmethoden

Die Fullscreen-API fügt den Schnittstellen [`Document`](/de/docs/Web/API/Document) und [`Element`](/de/docs/Web/API/Element) Methoden hinzu, die das Ein- und Ausschalten des Vollbildmodus ermöglichen.

### Instanzmethoden der Document-Schnittstelle

- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Fordert, dass der {{Glossary("user_agent", "User-Agent")}} vom Vollbildmodus in den Fenstermodus wechselt. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus vollständig beendet wurde.

### Instanzmethoden der Element-Schnittstelle

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den User-Agent auf, das angegebene Element (und seine Nachfahren) in den Vollbildmodus zu versetzen und alle UI-Elemente des Browsers sowie alle anderen Anwendungen vom Bildschirm zu entfernen. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus aktiviert wurde.

## Instanzeigenschaften

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die `fullscreenElement`-Eigenschaft zeigt das [`Element`](/de/docs/Web/API/Element) an, das derzeit im Vollbildmodus im DOM (oder Shadow DOM) angezeigt wird. Wenn dies `null` ist, befindet sich das Dokument (oder Shadow DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die `fullscreenEnabled`-Eigenschaft zeigt an, ob es möglich ist, den Vollbildmodus zu aktivieren. Diese Eigenschaft ist `false`, wenn der Vollbildmodus aus irgendeinem Grund nicht verfügbar ist (z. B. wenn die "fullscreen"-Funktion nicht erlaubt ist oder der Vollbildmodus nicht unterstützt wird).

### Veraltete Eigenschaften

- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}

  - : Ein boolescher Wert, der `true` ist, wenn das Dokument ein Element aktuell im Vollbildmodus anzeigt; andernfalls gibt er `false` zurück.

    > [!NOTE]
    > Verwenden Sie stattdessen die [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)-Eigenschaft im [`Document`](/de/docs/Web/API/Document) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot); wenn sie nicht `null` ist, wird ein [`Element`](/de/docs/Web/API/Element) derzeit im Vollbildmodus angezeigt.

## Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird einem [`Element`](/de/docs/Web/API/Element) gesendet, wenn es in den oder aus dem Vollbildmodus wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem Vollbildmodus zu wechseln.

## Zugriffskontrolle

Die Verfügbarkeit des Vollbildmodus kann mithilfe einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Die Funktion für den Vollbildmodus wird durch den String `"fullscreen"` identifiziert, wobei der Standard-Wert der Zulassungsliste `"self"` ist, was bedeutet, dass der Vollbildmodus in Top-Level-Dokumentkontexten sowie in eingebetteten Browsing-Kontexten, die aus demselben Ursprung wie das oberste Dokument geladen werden, erlaubt ist.

## Nutzungshinweise

Benutzer können den Vollbildmodus durch Drücken der <kbd>ESC</kbd> (oder <kbd>F11</kbd>)-Taste beenden, anstatt darauf zu warten, dass die Website oder App dies programmgesteuert tut. Stellen Sie sicher, dass Sie irgendwo in Ihrer Benutzeroberfläche geeignete UI-Elemente bereitstellen, die den Benutzer darüber informieren, dass diese Option verfügbar ist.

> [!NOTE]
> Das Navigieren zu einer anderen Seite, das Wechseln von Tabs oder das Wechseln zu einer anderen Anwendung mit einem beliebigen Anwendungswechsler (oder <kbd>Alt</kbd>-<kbd>Tab</kbd>) beendet ebenfalls den Vollbildmodus.

## Beispiele

### Einfache Nutzung des Vollbildmodus

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Durch Drücken der <kbd>Enter</kbd>-Taste kann der Benutzer zwischen der Fenster- und der Vollbilddarstellung des Videos umschalten.

[Live-Beispiel anzeigen](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Abfragen der Enter-Taste

Wenn die Seite geladen wird, wird dieser Code ausgeführt, um einen Ereignis-Listener einzurichten, der auf die <kbd>Enter</kbd>-Taste wartet.

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

Dieser Code wird von dem obigen Ereignishandler aufgerufen, wenn der Benutzer die <kbd>Enter</kbd>-Taste drückt.

```js
function toggleFullScreen(video) {
  if (!document.fullscreenElement) {
    // If the document is not in full screen mode
    // make the video full screen
    video.requestFullscreen();
  } else {
    // Otherwise exit the full screen
    document.exitFullscreen?.();
  }
}
```

Zunächst wird der Wert des `fullscreenElement`-Attributs des [`document`](/de/docs/Web/API/Document) überprüft. Ist der Wert `null`, befindet sich das Dokument aktuell im Fenstermodus, sodass wir in den Vollbildmodus wechseln müssen; andernfalls ist es das Element, das aktuell im Vollbildmodus ist. Der Wechsel in den Vollbildmodus erfolgt durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf dem {{HTMLElement("video")}}-Element.

Falls der Vollbildmodus bereits aktiv ist (`fullscreenElement` ist nicht `null`), rufen wir [`exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf das `document` auf, um den Vollbildmodus zu beenden.

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
