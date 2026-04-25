---
title: Fullscreen API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: 2c6874c58a262083450afcc76789d4399adb6583
---

{{DefaultAPISidebar("Fullscreen API")}}

Die **Fullscreen-API** fügt Methoden hinzu, um ein bestimmtes [`Element`](/de/docs/Web/API/Element) (und seine Nachkommen) im Vollbildmodus anzuzeigen und den Vollbildmodus zu verlassen, wenn er nicht mehr benötigt wird. Dies ermöglicht es, gewünschte Inhalte – wie beispielsweise ein Online-Spiel – auf dem gesamten Bildschirm des Benutzers darzustellen, wodurch alle Benutzeroberflächenelemente des Browsers und andere Anwendungen vom Bildschirm entfernt werden, bis der Vollbildmodus beendet wird.

Lesen Sie den Artikel [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide) für Details zur Verwendung der API.

## Schnittstellen

_Die Fullscreen-API hat keine eigenen Schnittstellen. Stattdessen erweitert sie mehrere andere Schnittstellen, um die Methoden, Eigenschaften und Ereignishandler hinzuzufügen, die zur Bereitstellung der Vollbildfunktionalität benötigt werden. Diese sind in den folgenden Abschnitten aufgeführt._

## Instanz-Methoden

Die Fullscreen-API fügt den [`Document`](/de/docs/Web/API/Document) und [`Element`](/de/docs/Web/API/Element)-Schnittstellen Methoden hinzu, um den Vollbildmodus ein- und auszuschalten.

### Instanz-Methoden in der Document-Schnittstelle

- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Fordert, dass der {{Glossary("user_agent", "Benutzer-Agent")}} vom Vollbildmodus in den Fenstermodus wechselt. Gibt ein {{jsxref("Promise")}} zurück, welches aufgelöst wird, sobald der Vollbildmodus vollständig beendet ist.

### Instanz-Methoden in der Element-Schnittstelle

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den Benutzer-Agent auf, das angegebene Element (und damit auch seine Nachkommen) in den Vollbildmodus zu versetzen, wodurch alle UI-Elemente des Browsers sowie alle anderen Anwendungen vom Bildschirm entfernt werden. Gibt ein {{jsxref("Promise")}} zurück, welches aufgelöst wird, sobald der Vollbildmodus aktiviert wurde.

## Instanz-Eigenschaften

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` gibt das [`Element`](/de/docs/Web/API/Element) an, das momentan im Vollbildmodus im DOM (oder Shadow DOM) angezeigt wird. Wenn dies `null` ist, befindet sich das Dokument (oder Shadow DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` gibt an, ob es möglich ist, in den Vollbildmodus zu wechseln. Dies ist `false`, wenn der Vollbildmodus aus irgendeinem Grund nicht verfügbar ist (z. B. wenn die Funktion `"fullscreen"` nicht erlaubt ist oder der Vollbildmodus nicht unterstützt wird).

### Veraltete Eigenschaften

- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}
  - : Ein Boolescher Wert, der `true` ist, wenn das Dokument ein Element hat, das momentan im Vollbildmodus angezeigt wird; andernfalls gibt er `false` zurück.

    > [!NOTE]
    > Verwenden Sie stattdessen die Eigenschaft [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) auf dem [`Document`](/de/docs/Web/API/Document) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot); wenn es nicht `null` ist, dann handelt es sich um ein [`Element`](/de/docs/Web/API/Element), das momentan im Vollbildmodus angezeigt wird.

## Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein [`Element`](/de/docs/Web/API/Element) gesendet, wenn es in den oder aus dem Vollbildmodus wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler beim Wechseln in den oder aus dem Vollbildmodus auftritt.

## Zugriffskontrolle

Die Verfügbarkeit des Vollbildmodus kann mit einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Das Feature für den Vollbildmodus wird durch den String `"fullscreen"` identifiziert, mit einem standardmäßigen Allowlist-Wert von `"self"`, was bedeutet, dass der Vollbildmodus in höchstebenen Dokumentenkontexten sowie in eingebetteten Browsing-Kontexten erlaubt ist, die von derselben Herkunft wie das oberste Dokument geladen werden.

## Verwendungshinweise

Benutzer können den Vollbildmodus beenden, indem sie die <kbd>ESC</kbd> (oder <kbd>F11</kbd>) Taste drücken, anstatt darauf zu warten, dass die Website oder App dies programmgesteuert tut. Stellen Sie sicher, dass Sie in Ihrer Benutzeroberfläche geeignete Elemente bereitstellen, die den Benutzer darüber informieren, dass diese Möglichkeit besteht.

> [!NOTE]
> Das Navigieren zu einer anderen Seite, das Wechseln von Tabs oder das Umschalten zu einer anderen Anwendung über einen beliebigen Anwendungsumschalter (oder <kbd>Alt</kbd>-<kbd>Tab</kbd>) wird ebenfalls den Vollbildmodus beenden.

## Beispiele

### Einfache Nutzung des Vollbildmodus

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Durch Drücken der <kbd>Enter</kbd>-Taste kann der Benutzer zwischen der Fenster- und der Vollbilddarstellung des Videos umschalten.

[Beispiel live ansehen](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Überwachen der Enter-Taste

Wenn die Seite geladen ist, wird dieser Code ausgeführt, um einen Ereignislistener einzurichten, der auf die <kbd>Enter</kbd>-Taste achtet.

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

Dieser Code wird von dem oben genannten Ereignishandler aufgerufen, wenn der Benutzer die <kbd>Enter</kbd>-Taste drückt.

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

Das beginnt mit der Untersuchung des Wertes des `fullscreenElement`-Attributs des [`document`](/de/docs/Web/API/Document). Wenn der Wert `null` ist, befindet sich das Dokument derzeit im Fenstermodus, weshalb wir in den Vollbildmodus wechseln müssen; andernfalls ist es das Element, das derzeit im Vollbildmodus ist. Der Wechsel in den Vollbildmodus erfolgt durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf dem {{HTMLElement("video")}} Element.

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
