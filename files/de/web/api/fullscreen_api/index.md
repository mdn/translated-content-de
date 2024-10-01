---
title: Fullscreen API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{DefaultAPISidebar("Fullscreen API")}}

Die **Fullscreen API** fügt Methoden hinzu, um ein spezifisches [`Element`](/de/docs/Web/API/Element) (und seine Nachfahren) im Vollbildmodus darzustellen und um den Vollbildmodus zu beenden, wenn er nicht mehr benötigt wird. Dies ermöglicht es, Inhalte wie beispielsweise ein Online-Spiel über den gesamten Bildschirm des Benutzers anzeigen zu lassen und dabei alle Benutzeroberflächenelemente des Browsers und andere Anwendungen vom Bildschirm zu entfernen, bis der Vollbildmodus beendet wird.

Siehe den Artikel [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide) für Details zur Nutzung der API.

## Schnittstellen

_Die Fullscreen API hat keine eigenen Schnittstellen. Stattdessen erweitert sie mehrere andere Schnittstellen, um die Methoden, Eigenschaften und Ereignishandler hinzuzufügen, die für die Bereitstellung der Vollbildfunktionalität erforderlich sind. Diese sind in den folgenden Abschnitten aufgeführt._

## Instanzmethoden

Die Fullscreen API fügt den Schnittstellen von [`Document`](/de/docs/Web/API/Document) und [`Element`](/de/docs/Web/API/Element) Methoden hinzu, um den Vollbildmodus ein- und auszuschalten.

### Instanzmethoden auf der Document-Schnittstelle

- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Fordert den {{Glossary("user_agent", "User Agent")}} auf, vom Vollbildmodus zurück zum Fenstermodus zu wechseln. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus vollständig beendet ist.

### Instanzmethoden auf der Element-Schnittstelle

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den User Agent auf, das angegebene Element (und damit seine Nachfahren) in den Vollbildmodus zu versetzen, wodurch alle UI-Elemente des Browsers sowie alle anderen Anwendungen vom Bildschirm entfernt werden. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus aktiviert ist.

## Instanzeigenschaften

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` gibt Ihnen das [`Element`](/de/docs/Web/API/Element) an, das derzeit im Vollbildmodus im DOM (oder Shadow DOM) angezeigt wird. Wenn dies `null` ist, befindet sich das Dokument (oder Shadow DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` gibt an, ob es möglich ist, den Vollbildmodus zu aktivieren. Dies ist `false`, wenn der Vollbildmodus aus irgendeinem Grund nicht verfügbar ist (z. B. wenn die Funktion `"fullscreen"` nicht erlaubt ist oder der Vollbildmodus nicht unterstützt wird).

### Veraltete Eigenschaften

- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}

  - : Ein Boolescher Wert, der `true` ist, wenn das Dokument ein Element hat, das derzeit im Vollbildmodus angezeigt wird; andernfalls wird `false` zurückgegeben.

    > [!NOTE]
    > Verwenden Sie stattdessen die Eigenschaft [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) auf dem [`Document`](/de/docs/Web/API/Document) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot); wenn es nicht `null` ist, handelt es sich um ein [`Element`](/de/docs/Web/API/Element), das derzeit im Vollbildmodus angezeigt wird.

## Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein [`Element`](/de/docs/Web/API/Element) gesendet, wenn es in den oder aus dem Vollbildmodus wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem Vollbildmodus zu schalten.

## Steuerung des Zugriffs

Die Verfügbarkeit des Vollbildmodus kann über eine [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden. Die Vollbildmodus-Funktion wird durch den String `"fullscreen"` identifiziert, mit einem Standard-Zulassungswert von `"self"`, was bedeutet, dass der Vollbildmodus in Dokumentenkontexten der obersten Ebene sowie in geschachtelten Browsing-Kontexten erlaubt ist, die vom selben Ursprung wie das oberste Dokument geladen werden.

## Nutzungshinweise

Benutzer können den Vollbildmodus durch Drücken der <kbd>ESC</kbd> (oder <kbd>F11</kbd>)-Taste beenden, anstatt zu warten, dass die Website oder Anwendung dies programmgesteuert tut. Stellen Sie sicher, dass Sie irgendwo in Ihrer Benutzeroberfläche geeignete Benutzeroberflächenelemente bereitstellen, die den Benutzer darüber informieren, dass diese Option zur Verfügung steht.

> [!NOTE]
> Das Navigieren zu einer anderen Seite, der Wechsel zwischen Tabs oder das Umschalten zu einer anderen Anwendung mit einem Anwendungswechsler (oder <kbd>Alt</kbd>-<kbd>Tab</kbd>) führt ebenfalls dazu, dass der Vollbildmodus verlassen wird.

## Beispiele

### Einfacher Vollbildmodus

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Durch Drücken der <kbd>Enter</kbd>-Taste kann der Benutzer zwischen Fenster- und Vollbildanzeige des Videos umschalten.

[Live-Beispiel ansehen](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Überwachung der Enter-Taste

Wenn die Seite geladen wird, wird dieser Code ausgeführt, um einen Ereignis-Listener einzurichten, der auf die <kbd>Enter</kbd>-Taste achtet.

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

Dieser Code wird von dem oben genannten Ereignishandler aufgerufen, wenn der Benutzer die <kbd>Enter</kbd>-Taste drückt.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

Dieser beginnt mit der Überprüfung des Werts des `fullscreenElement`-Attributs des [`document`](/de/docs/Web/API/Document). In einem realen Einsatz sollten Sie zu diesem Zeitpunkt auch nach prefixed Versionen hiervon (wie `mozFullScreenElement`, `msFullscreenElement` oder `webkitFullscreenElement`) suchen. Wenn der Wert `null` ist, befindet sich das Dokument derzeit im Fenstermodus und wir müssen in den Vollbildmodus wechseln; andernfalls ist es das Element, das derzeit im Vollbildmodus ist. Der Wechsel in den Vollbildmodus erfolgt durch Aufrufen von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf dem {{HTMLElement("video")}}-Element.

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
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
