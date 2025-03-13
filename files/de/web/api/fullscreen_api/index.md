---
title: Fullscreen API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("Fullscreen API")}}

Die **Fullscreen-API** fügt Methoden hinzu, um ein bestimmtes [`Element`](/de/docs/Web/API/Element) (und dessen Nachkommen) im Vollbildmodus zu präsentieren und den Vollbildmodus zu verlassen, sobald er nicht mehr benötigt wird. Dies ermöglicht es, gewünschten Inhalt - wie z.B. ein Online-Spiel - im gesamten Bildschirm des Benutzers zu präsentieren. Dabei werden alle Benutzeroberflächenelemente des Browsers und andere Anwendungen vom Bildschirm entfernt, bis der Vollbildmodus beendet wird.

Details zur Nutzung der API finden Sie im Artikel [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide).

## Schnittstellen

_Die Fullscreen-API hat keine eigenen Schnittstellen. Stattdessen ergänzt sie mehrere andere Schnittstellen, um die Methoden, Eigenschaften und Ereignis-Handler hinzuzufügen, die für die Unterstützung der Vollbildfunktionalität benötigt werden. Diese sind in den folgenden Abschnitten aufgeführt._

## Instanzmethoden

Die Fullscreen-API fügt den Schnittstellen [`Document`](/de/docs/Web/API/Document) und [`Element`](/de/docs/Web/API/Element) Methoden hinzu, um den Vollbildmodus ein- und auszuschalten.

### Instanzmethoden auf der Document-Schnittstelle

- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Fordert den {{Glossary("user_agent", "User-Agent")}} auf, vom Vollbildmodus in den Fenstermodus zu wechseln. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus vollständig beendet ist.

### Instanzmethoden auf der Element-Schnittstelle

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den User-Agent auf, das angegebene Element (und damit auch dessen Nachkommen) im Vollbildmodus anzuzeigen und alle UI-Elemente des Browsers sowie andere Anwendungen vom Bildschirm zu entfernen. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus aktiviert wurde.

## Instanzeigenschaften

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` teilt Ihnen mit, welches [`Element`](/de/docs/Web/API/Element) derzeit im Vollbildmodus im DOM (oder Shadow-DOM) angezeigt wird. Wenn dies `null` ist, befindet sich das Dokument (oder Shadow-DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` teilt Ihnen mit, ob es möglich ist, in den Vollbildmodus zu wechseln. Dies ist `false`, wenn der Vollbildmodus aus irgendeinem Grund nicht verfügbar ist (z. B. wenn das Merkmal `"fullscreen"` nicht erlaubt ist oder der Vollbildmodus nicht unterstützt wird).

### Veraltete Eigenschaften

- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}

  - : Ein Boolean-Wert, der `true` ist, wenn das Dokument ein Element hat, das derzeit im Vollbildmodus angezeigt wird; andernfalls wird `false` zurückgegeben.

    > [!NOTE]
    > Verwenden Sie stattdessen die [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)-Eigenschaft des [`Document`](/de/docs/Web/API/Document) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot); wenn sie nicht `null` ist, wird ein [`Element`](/de/docs/Web/API/Element), das derzeit im Vollbildmodus angezeigt wird.

## Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird einem [`Element`](/de/docs/Web/API/Element) gesendet, wenn es in den oder aus dem Vollbildmodus wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem Vollbildmodus zu schalten.

## Zugangskontrolle

Die Verfügbarkeit des Vollbildmodus kann über eine [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Die Funktion Vollbildmodus wird durch die Zeichenkette `"fullscreen"` identifiziert, mit einem Standard-Wert von `"self"`, was bedeutet, dass der Vollbildmodus in Dokumentkontexten der obersten Ebene sowie in geschachtelten Kontexten erlaubt ist, die vom gleichen Ursprung wie das oberste Dokument geladen wurden.

## Nutzungshinweise

Benutzer können den Vollbildmodus verlassen, indem sie die <kbd>ESC</kbd>- (oder <kbd>F11</kbd>-) Taste drücken, anstatt darauf zu warten, dass die Website oder App dies programmatisch durchführt. Stellen Sie sicher, dass Sie an einer geeigneten Stelle in Ihrer Benutzeroberfläche entsprechende UI-Elemente bereitstellen, die den Benutzer darüber informieren, dass diese Option verfügbar ist.

> [!NOTE]
> Beim Navigieren zu einer anderen Seite, beim Wechseln von Tabs oder beim Umschalten zu einer anderen Anwendung über einen beliebigen Anwendungswechsler (oder <kbd>Alt</kbd>-<kbd>Tab</kbd>) wird ebenfalls der Vollbildmodus beendet.

## Beispiele

### Einfache Verwendung des Vollbildmodus

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Durch Drücken der <kbd>Enter</kbd>-Taste kann der Benutzer zwischen der Fenster- und der Vollbilddarstellung des Videos umschalten.

[Live-Beispiel ansehen](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Überwachung der Enter-Taste

Wenn die Seite geladen ist, wird dieser Code ausgeführt, um einen Ereignis-Listener einzurichten, der die <kbd>Enter</kbd>-Taste überwacht.

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

Dies beginnt mit dem Überprüfen des Werts des `fullscreenElement`-Attributs des [`document`](/de/docs/Web/API/Document). In einer realen Umgebung möchten Sie an dieser Stelle auch auf Präfix-Versionen überprüfen (`mozFullScreenElement`, `msFullscreenElement` oder `webkitFullscreenElement` zum Beispiel). Wenn der Wert `null` ist, befindet sich das Dokument derzeit im Fenstermodus, sodass wir in den Vollbildmodus wechseln müssen; andernfalls ist es das Element, das sich derzeit im Vollbildmodus befindet. Der Wechsel in den Vollbildmodus erfolgt durch Aufruf von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf dem {{HTMLElement("video")}}-Element.

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
