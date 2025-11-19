---
title: Fullscreen API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Fullscreen API")}}

Die **Fullscreen-API** fügt Methoden hinzu, um ein bestimmtes [`Element`](/de/docs/Web/API/Element) (und dessen Nachkommen) im Vollbildmodus darzustellen und den Vollbildmodus wieder zu verlassen, wenn er nicht mehr benötigt wird. Dies macht es möglich, gewünschte Inhalte - wie zum Beispiel ein Online-Spiel - bildschirmfüllend darzustellen und dabei alle Browser-Benutzeroberflächenelemente und andere Anwendungen bis zum Verlassen des Vollbildmodus auszublenden.

Siehe den Artikel [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide) für Details zur Nutzung der API.

## Schnittstellen

_Die Fullscreen-API hat keine eigenen Schnittstellen. Stattdessen erweitert sie mehrere andere Schnittstellen, um die für die Vollbildfunktionalität benötigten Methoden, Eigenschaften und Ereignishandler hinzuzufügen. Diese sind in den folgenden Abschnitten aufgeführt._

## Instanzmethoden

Die Fullscreen-API fügt den Schnittstellen [`Document`](/de/docs/Web/API/Document) und [`Element`](/de/docs/Web/API/Element) Methoden hinzu, um den Vollbildmodus ein- und auszuschalten.

### Instanzmethoden der Document-Schnittstelle

- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Fordert den {{Glossary("user_agent", "User-Agent")}} auf, vom Vollbildmodus in den Fenster-Modus zu wechseln. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Vollbildmodus vollständig beendet wurde.

### Instanzmethoden der Element-Schnittstelle

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den User-Agent auf, das angegebene Element (und dessen Nachkommen) im Vollbildmodus darzustellen und dabei alle UI-Elemente des Browsers sowie alle anderen Anwendungen vom Bildschirm zu entfernen. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus aktiviert wurde.

## Instanzeigenschaften

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` gibt Ihnen das [`Element`](/de/docs/Web/API/Element) an, das derzeit im DOM (oder im Shadow-DOM) im Vollbildmodus dargestellt wird. Ist dies `null`, befindet sich das Dokument (oder Shadow-DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` gibt an, ob es möglich ist, den Vollbildmodus zu aktivieren. Dies ist `false`, wenn der Vollbildmodus aus irgendeinem Grund nicht verfügbar ist (wie zum Beispiel dem nicht erlaubten `"fullscreen"`-Feature oder fehlender Unterstützung des Vollbildmodus).

### Veraltete Eigenschaften

- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}
  - : Ein Boolean-Wert, der `true` ist, wenn das Dokument derzeit ein Element im Vollbildmodus darstellt; andernfalls wird `false` zurückgegeben.

    > [!NOTE]
    > Verwenden Sie stattdessen die [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)-Eigenschaft im [`Document`](/de/docs/Web/API/Document) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot); wenn sie nicht `null` ist, dann wird ein [`Element`](/de/docs/Web/API/Element) im Vollbildmodus dargestellt.

## Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein [`Element`](/de/docs/Web/API/Element) gesendet, wenn es in den oder aus dem Vollbildmodus wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem Vollbildmodus zu schalten.

## Zugriffskontrolle

Die Verfügbarkeit des Vollbildmodus kann mithilfe einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Das Feature "Vollbildmodus" wird durch den String `"fullscreen"` identifiziert, mit einem Standardwert für die Positivliste von `"self"`, was bedeutet, dass der Vollbildmodus in Dokumentkontexten auf oberster Ebene sowie in eingebetteten Browserkontexten, die aus demselben Ursprung wie das oberste Dokument geladen werden, erlaubt ist.

## Anwendungshinweise

Benutzer können den Vollbildmodus durch Drücken der <kbd>ESC</kbd> (oder <kbd>F11</kbd>) Taste verlassen, anstatt zu warten, bis die Seite oder App dies programmgesteuert tut. Stellen Sie sicher, dass Sie in Ihrer Benutzeroberfläche geeignete Bedienelemente bereitstellen, die den Benutzer darüber informieren, dass diese Option für ihn verfügbar ist.

> [!NOTE]
> Das Navigieren zu einer anderen Seite, das Wechseln von Tabs oder das Umschalten zu einer anderen Anwendung über einen Anwendungsschalter (oder <kbd>Alt</kbd>-<kbd>Tab</kbd>) beendet ebenfalls den Vollbildmodus.

## Beispiele

### Einfacher Vollbildgebrauch

In diesem Beispiel wird ein Video auf einer Webseite angezeigt. Durch Drücken der <kbd>Enter</kbd>-Taste kann der Benutzer zwischen Fenster- und Vollbildanzeige des Videos umschalten.

[Live-Beispiel ansehen](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Überwachen der Enter-Taste

Wenn die Seite geladen wird, wird dieser Code ausgeführt, um einen Ereignis-Listener zum Überwachen der <kbd>Enter</kbd>-Taste einzurichten.

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
    document.exitFullscreen?.();
  }
}
```

Dies beginnt mit dem Überprüfen des Wertes des `fullscreenElement`-Attributs des [`document`](/de/docs/Web/API/Document). Wenn der Wert `null` ist, befindet sich das Dokument derzeit im Fenstermodus und wir müssen in den Vollbildmodus wechseln; andernfalls ist es das Element, das derzeit im Vollbildmodus ist. Der Wechsel in den Vollbildmodus erfolgt durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf dem {{HTMLElement("video")}}-Element.

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
