---
title: Fullscreen API
slug: Web/API/Fullscreen_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Fullscreen API")}}

Die **Fullscreen-API** fügt Methoden hinzu, um ein bestimmtes [`Element`](/de/docs/Web/API/Element) (und dessen Nachkommen) im Vollbildmodus darzustellen und den Vollbildmodus zu beenden, wenn er nicht mehr benötigt wird. Dadurch wird es möglich, gewünschten Inhalt – wie ein Online-Spiel – im Vollbildmodus zu präsentieren, wobei alle Benutzeroberflächenelemente des Browsers und andere Anwendungen vom Bildschirm entfernt werden, bis der Vollbildmodus beendet wird.

Details zur Nutzung der API finden Sie im Artikel [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide).

## Schnittstellen

_Die Fullscreen-API hat keine eigenen Schnittstellen. Stattdessen erweitert sie mehrere andere Schnittstellen, um die Methoden, Eigenschaften und Ereignis-Handler hinzuzufügen, die benötigt werden, um Vollbildfunktionalität bereitzustellen. Diese sind in den folgenden Abschnitten aufgeführt._

## Instanzmethoden

Die Fullscreen-API fügt den Schnittstellen [`Document`](/de/docs/Web/API/Document) und [`Element`](/de/docs/Web/API/Element) Methoden hinzu, um den Vollbildmodus ein- und auszuschalten.

### Instanzmethoden auf der Document-Schnittstelle

- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Fordert den {{Glossary("user_agent", "User-Agent")}} auf, vom Vollbildmodus zurück in den Fenstermodus zu wechseln. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus vollständig beendet wurde.

### Instanzmethoden auf der Element-Schnittstelle

- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den User-Agent auf, das angegebene Element (und damit seine Nachkommen) in den Vollbildmodus zu versetzen, wobei alle Benutzeroberflächenelemente des Browsers sowie alle anderen Anwendungen vom Bildschirm entfernt werden. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, sobald der Vollbildmodus aktiviert wurde.

## Instanzeigenschaften

- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) / [`ShadowRoot.fullscreenElement`](/de/docs/Web/API/ShadowRoot/fullscreenElement)
  - : Die Eigenschaft `fullscreenElement` gibt Ihnen das [`Element`](/de/docs/Web/API/Element) an, das aktuell im Vollbildmodus im DOM (oder Shadow-DOM) angezeigt wird. Wenn dies `null` ist, befindet sich das Dokument (oder Shadow-DOM) nicht im Vollbildmodus.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled)
  - : Die Eigenschaft `fullscreenEnabled` gibt an, ob es möglich ist, den Vollbildmodus zu aktivieren. Dies ist `false`, wenn der Vollbildmodus aus irgendeinem Grund nicht verfügbar ist (wie etwa das Merkmal `"fullscreen"` nicht erlaubt ist oder der Vollbildmodus nicht unterstützt wird).

### Veraltete Eigenschaften

- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}

  - : Ein boolescher Wert, der `true` ist, wenn das Dokument ein Element hat, das aktuell im Vollbildmodus angezeigt wird; andernfalls wird `false` zurückgegeben.

    > [!NOTE]
    > Verwenden Sie stattdessen die [`fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) Eigenschaft auf dem [`Document`](/de/docs/Web/API/Document) oder [`ShadowRoot`](/de/docs/Web/API/ShadowRoot); wenn es nicht `null` ist, dann ist es ein [`Element`](/de/docs/Web/API/Element), das derzeit im Vollbildmodus angezeigt wird.

## Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein [`Element`](/de/docs/Web/API/Element) gesendet, wenn es in den oder aus dem Vollbildmodus wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler beim Versuch auftritt, es in den oder aus dem Vollbildmodus zu wechseln.

## Steuerung des Zugriffs

Die Verfügbarkeit des Vollbildmodus kann mit einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden. Die Funktion des Vollbildmodus wird durch die Zeichenkette `"fullscreen"` identifiziert, mit einem Standard-Wert von `"self"`, was bedeutet, dass der Vollbildmodus in Dokumentkontexten der obersten Ebene sowie in eingebetteten Browserkontexten, die vom gleichen Ursprung wie das oberste Dokument geladen sind, erlaubt ist.

## Nutzungshinweise

Benutzer können den Vollbildmodus beenden, indem sie die <kbd>ESC</kbd> (oder <kbd>F11</kbd>) Taste drücken, anstatt darauf zu warten, dass die Website oder App dies programmgesteuert tut. Stellen Sie sicher, dass Sie irgendwo in Ihrer Benutzeroberfläche geeignete Benutzeroberflächenelemente bereitstellen, die den Benutzer darüber informieren, dass diese Option verfügbar ist.

> [!NOTE]
> Das Navigieren zu einer anderen Seite, das Wechseln der Tabs oder das Umschalten zu einer anderen Anwendung über einen Anwendungsschalter (oder <kbd>Alt</kbd>-<kbd>Tab</kbd>) beendet ebenfalls den Vollbildmodus.

## Beispiele

### Einfache Nutzung des Vollbildmodus

In diesem Beispiel wird ein Video auf einer Webseite präsentiert. Durch Drücken der <kbd>Enter</kbd> Taste kann der Benutzer zwischen Fenster- und Vollbilddarstellung des Videos umschalten.

[Live-Beispiel ansehen](https://mdn.github.io/dom-examples/fullscreen-api/index.html)

#### Überwachung der Enter-Taste

Wenn die Seite geladen ist, wird dieser Code ausgeführt, um einen Ereignis-Listener einzurichten, der auf die <kbd>Enter</kbd> Taste achtet.

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

Dieser Code wird von dem oben genannten Ereignis-Handler aufgerufen, wenn der Benutzer die <kbd>Enter</kbd> Taste drückt.

```js
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
```

Dies beginnt mit der Überprüfung des Wertes des `fullscreenElement` Attributs des [`document`](/de/docs/Web/API/Document). In einer realen Implementierung möchten Sie an dieser Stelle die gepräfixelten Versionen überprüfen (`mozFullScreenElement`, `msFullscreenElement` oder `webkitFullscreenElement` zum Beispiel). Wenn der Wert `null` ist, befindet sich das Dokument derzeit im Fenstermodus, sodass wir in den Vollbildmodus wechseln müssen; andernfalls ist es das Element, das derzeit im Vollbildmodus ist. Der Wechsel in den Vollbildmodus erfolgt durch Aufrufen von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf dem {{HTMLElement("video")}} Element.

Wenn der Vollbildmodus bereits aktiv ist (`fullscreenElement` ist nicht `null`), rufen wir [`exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) am `document` auf, um den Vollbildmodus zu beenden.

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
