---
title: Fullscreen API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{DefaultAPISidebar("Fullscreen API")}}

Die **Fullscreen API** fügt Methoden hinzu, um ein spezifisches [`Element`](/de/docs/Web/API/Element) (und dessen Nachkommen) im Vollbildmodus darzustellen und um den Vollbildmodus zu verlassen, wenn er nicht mehr benötigt wird. Damit ist es möglich, gewünschten Inhalt - wie z.B. ein Online-Spiel - unter Verwendung des gesamten Bildschirms des Benutzers darzustellen, alle Elemente der Benutzeroberfläche des Browsers und andere Anwendungen vom Bildschirm zu entfernen, bis der Vollbildmodus beendet wird.

Sehen Sie sich den Artikel [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide) für Details zur Nutzung der API an.

## Schnittstellen

_Die Fullscreen API hat keine eigenen Schnittstellen. Stattdessen erweitert sie mehrere andere Schnittstellen, um die Methoden, Eigenschaften und Ereignishandler bereitzustellen, die für die Vollbildfunktionalität benötigt werden. Diese sind in den folgenden Abschnitten aufgeführt._

## Instanzmethoden

Die Fullscreen API fügt den Schnittstellen [`Document`](/de/docs/Web/API/Document) und [`Element`](/de/docs/Web/API/Element) Methoden hinzu, um den Vollbildmodus ein- und auszuschalten.

### Instanzmethoden auf der Document-Schnittstelle

- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Fordert den [User-Agent](/de/docs/Glossary/user_agent) auf, vom Vollbildmodus zurück in den Fenstermodus zu wechseln. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus vollständig beendet ist.

### Instanzmethoden auf der Element-Schnittstelle

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den User-Agent auf, das angegebene Element (und damit auch seine Nachkommen) in den Vollbildmodus zu setzen, wodurch alle UI-Elemente des Browsers sowie alle anderen Anwendungen vom Bildschirm entfernt werden. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus aktiviert wurde.

## Instanzeigenschaften

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` zeigt das [`Element`](/de/docs/Web/API/Element) an, das derzeit im Vollbildmodus auf dem DOM (oder Shadow DOM) angezeigt wird. Ist dies `null`, befindet sich das Dokument (oder Shadow DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` zeigt an, ob es möglich ist, den Vollbildmodus zu aktivieren. Dies ist `false`, wenn der Vollbildmodus aus irgendeinem Grund nicht verfügbar ist (z.B. wenn die Funktion `"fullscreen"` nicht erlaubt ist oder der Vollbildmodus nicht unterstützt wird).

### Veraltete Eigenschaften

- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}

  - : Ein Boolean-Wert, der `true` ist, wenn das Dokument derzeit ein Element im Vollbildmodus darstellt; sonst wird `false` zurückgegeben.

    > [!NOTE]
    > Verwenden Sie die Eigenschaft [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) am [`Document`](/de/docs/Web/API/Document) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot); wenn sie nicht `null` ist, dann ist es ein [`Element`](/de/docs/Web/API/Element), das derzeit im Vollbildmodus angezeigt wird.

## Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein [`Element`](/de/docs/Web/API/Element) gesendet, wenn es in den oder aus dem Vollbildmodus wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem Vollbildmodus zu schalten.

## Zugriffssteuerung

Die Verfügbarkeit des Vollbildmodus kann unter Verwendung einer [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) gesteuert werden. Das Feature des Vollbildmodus wird durch den String `"fullscreen"` identifiziert, mit einem Standardwert der Erlaubnisliste von `"self"`, was bedeutet, dass der Vollbildmodus in top-level Dokumentkontexten sowie in verschachtelten Browserkontexten, die vom gleichen Ursprung wie das oberste Dokument geladen wurden, erlaubt ist.

## Nutzungshinweise

Benutzer können den Vollbildmodus beenden, indem sie die Taste <kbd>ESC</kbd> (oder <kbd>F11</kbd>) drücken, anstatt darauf zu warten, dass die Webseite oder App dies programmatisch tut. Stellen Sie sicher, dass Sie irgendwo in Ihrer Benutzeroberfläche geeignete Bedienelemente bereitstellen, die den Benutzer darüber informieren, dass diese Option zur Verfügung steht.

> [!NOTE]
> Durch das Navigieren zu einer anderen Seite, das Wechseln von Tabs oder das Umschalten zu einer anderen Anwendung mit einem Anwendungswechsler (oder <kbd>Alt</kbd>-<kbd>Tab</kbd>) wird ebenfalls der Vollbildmodus beendet.

## Beispiele

### Einfache Vollbildnutzung

In diesem Beispiel wird ein Video auf einer Webseite dargestellt. Durch das Drücken der <kbd>Enter</kbd>-Taste kann der Benutzer zwischen Fenster- und Vollbilddarstellung des Videos umschalten.

[Live-Beispiel ansehen](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Überwachen der Enter-Taste

Wenn die Seite geladen wird, wird dieser Code ausgeführt, um einen Ereignislistener einzurichten, der die <kbd>Enter</kbd>-Taste überwacht.

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

Dieser Code wird von dem oben genannten Ereignis-Handler aufgerufen, wenn der Benutzer die <kbd>Enter</kbd>-Taste drückt.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

Dies beginnt mit dem Überprüfen des Wertes des `fullscreenElement` Attributs des [`document`](/de/docs/Web/API/Document)s. In einer realen Bereitstellung möchten Sie zu diesem Zeitpunkt nach vorangestellten Versionen dieser (`mozFullScreenElement`, `msFullscreenElement` oder `webkitFullscreenElement`, zum Beispiel) suchen. Wenn der Wert `null` ist, befindet sich das Dokument derzeit im Fenstermodus, sodass wir in den Vollbildmodus wechseln müssen; andernfalls ist es das Element, das derzeit im Vollbildmodus ist. Das Umschalten in den Vollbildmodus erfolgt durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf dem {{HTMLElement("video")}}-Element.

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
