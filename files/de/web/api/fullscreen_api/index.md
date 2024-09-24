---
title: Vollbild-API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{DefaultAPISidebar("Fullscreen API")}}

Das **Fullscreen API** fügt Methoden hinzu, um ein bestimmtes {{DOMxRef("Element")}} (und seine Nachfahren) im Vollbildmodus darzustellen und den Vollbildmodus zu beenden, wenn er nicht mehr benötigt wird. Dadurch ist es möglich, gewünschte Inhalte – wie ein Online-Spiel – im gesamten Bildschirm des Benutzers zu präsentieren, wobei alle Elemente der Benutzeroberfläche des Browsers und andere Anwendungen vom Bildschirm entfernt werden, bis der Vollbildmodus beendet wird.

Siehe den Artikel [Leitfaden zum Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide) für Details zur Nutzung des API.

## Schnittstellen

_Das Fullscreen API hat keine eigenen Schnittstellen. Stattdessen erweitert es mehrere andere Schnittstellen, um die Methoden, Eigenschaften und Ereignishandler hinzuzufügen, die benötigt werden, um die Vollbildfunktionalität bereitzustellen. Diese sind in den folgenden Abschnitten aufgeführt._

## Instanzmethoden

Das Fullscreen API fügt den Schnittstellen {{DOMxRef("Document")}} und {{DOMxRef("Element")}} Methoden hinzu, die das Ein- und Ausschalten des Vollbildmodus ermöglichen.

### Instanzmethoden auf der Document-Schnittstelle

- {{DOMxRef("Document.exitFullscreen()")}}
  - : Fordert, dass der {{Glossary("user agent")}} vom Vollbildmodus zurück in den Fenstermodus wechselt. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus vollständig beendet ist.

### Instanzmethoden auf der Element-Schnittstelle

- {{DOMxRef("Element.requestFullscreen()")}}
  - : Fordert den Benutzeragenten auf, das angegebene Element (und seine Nachfahren) in den Vollbildmodus zu versetzen, wodurch alle UI-Elemente des Browsers sowie alle anderen Anwendungen vom Bildschirm entfernt werden. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus aktiviert wurde.

## Instanzeigenschaften

- {{DOMxRef("Document.fullscreenElement")}} / {{DOMxRef("ShadowRoot.fullscreenElement")}}
  - : Die `fullscreenElement`-Eigenschaft gibt das {{DOMxRef("Element")}} an, das derzeit im Vollbildmodus im DOM (oder Shadow DOM) angezeigt wird. Wenn dies `null` ist, befindet sich das Dokument (oder Shadow DOM) nicht im Vollbildmodus.
- {{DOMxRef("Document.fullscreenEnabled")}}
  - : Die `fullscreenEnabled`-Eigenschaft gibt an, ob es möglich ist, den Vollbildmodus zu aktivieren. Dies ist `false`, wenn der Vollbildmodus aus irgendeinem Grund nicht verfügbar ist (zum Beispiel, wenn das `"fullscreen"`-Feature nicht erlaubt ist oder der Vollbildmodus nicht unterstützt wird).

### Veraltete Eigenschaften

- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}

  - : Ein boolescher Wert, der `true` ist, wenn das Dokument ein Element hat, das derzeit im Vollbildmodus angezeigt wird; andernfalls wird `false` zurückgegeben.

    > [!NOTE]
    > Verwenden Sie stattdessen die {{DOMxRef("Document.fullscreenElement", "fullscreenElement")}}-Eigenschaft auf dem {{DOMxRef("Document")}} oder {{DOMxRef("ShadowRoot")}}; wenn sie nicht `null` ist, dann ist es ein {{DOMxRef("Element")}}, das derzeit im Vollbildmodus angezeigt wird.

## Ereignisse

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : Wird an ein {{DOMxRef("Element")}} gesendet, wenn es in den oder aus dem Vollbildmodus wechselt.
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem Vollbildmodus zu wechseln.

## Steuerung des Zugriffs

Die Verfügbarkeit des Vollbildmodus kann mit einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden. Die Vollbildmodus-Funktion wird durch den String `"fullscreen"` identifiziert, mit einem Standard-Wert von `"self"` in der Erlaubnisliste, was bedeutet, dass der Vollbildmodus in Dokumentkontexten auf hoher Ebene sowie in verschachtelten Browsing-Kontexten erlaubt ist, die aus dem gleichen Ursprung wie das oberste Dokument geladen werden.

## Nutzungshinweise

Benutzer können den Vollbildmodus durch Drücken der Taste <kbd>ESC</kbd> (oder <kbd>F11</kbd>) beenden, anstatt darauf zu warten, dass die Website oder App dies programmgesteuert tut. Stellen Sie sicher, dass Sie irgendwo in Ihrer Benutzeroberfläche geeignete Bedienelemente bereitstellen, die den Benutzer darüber informieren, dass diese Option für ihn verfügbar ist.

> [!NOTE]
> Das Navigieren zu einer anderen Seite, das Wechseln von Tabs oder das Umschalten zu einer anderen Anwendung mit einem beliebigen Anwendungsschalter (oder <kbd>Alt</kbd>-<kbd>Tab</kbd>) beendet ebenfalls den Vollbildmodus.

## Beispiele

### Einfache Nutzung des Vollbildmodus

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Durch Drücken der Taste <kbd>Enter</kbd> kann der Benutzer zwischen Fenster- und Vollbildpräsentation des Videos umschalten.

[Live-Beispiel ansehen](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Beobachten der Enter-Taste

Wenn die Seite geladen wird, wird dieser Code ausgeführt, um einen Ereignis-Listener einzurichten, der die Enter-Taste beobachtet.

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

#### Umschalten des Vollbildmodus

Dieser Code wird vom obigen Ereignishandler aufgerufen, wenn der Benutzer die Taste <kbd>Enter</kbd> drückt.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

Es beginnt damit, den Wert des `fullscreenElement`-Attributs des {{DOMxRef("Document", "document")}} zu betrachten. In einer realen Umgebung möchten Sie zu diesem Zeitpunkt auch auf geprefixte Versionen davon prüfen (`mozFullScreenElement`, `msFullscreenElement` oder `webkitFullscreenElement`, zum Beispiel). Wenn der Wert `null` ist, befindet sich das Dokument derzeit im Fenstermodus, daher müssen wir in den Vollbildmodus wechseln; andernfalls ist es das Element, das sich derzeit im Vollbildmodus befindet. In den Vollbildmodus zu wechseln, erfolgt durch Aufruf von {{DOMxRef("Element.requestFullscreen()")}} auf dem {{HTMLElement("video")}}-Element.

Wenn der Vollbildmodus bereits aktiv ist (`fullscreenElement` ist nicht `null`), rufen wir {{DOMxRef("Document.exitFullscreen", "exitFullscreen()")}} auf dem `document` auf, um den Vollbildmodus zu beenden.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Element.requestFullscreen()")}}
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}, {{CSSxRef("::backdrop")}}
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
