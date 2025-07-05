---
title: "Element: requestFullscreen() Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{APIRef("Fullscreen API")}}

Die **`Element.requestFullscreen()`** Methode sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Es ist nicht garantiert, dass das Element in den Vollbildmodus versetzt wird. Wenn die Erlaubnis erteilt wird, den Vollbildmodus zu betreten, wird der zurückgegebene {{JSxRef("Promise")}} aufgelöst und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis, um mitzuteilen, dass es sich nun im Vollbildmodus befindet. Wenn die Erlaubnis verweigert wird, wird das Promise abgelehnt und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)-Ereignis. Wenn das Element vom ursprünglichen Dokument getrennt wurde, erhält stattdessen das Dokument diese Ereignisse.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Übergangs in den Vollbildmodus steuert. Die verfügbaren Optionen sind:
    - `navigationUI` {{optional_inline}}
      - : Steuert, ob die Navigation UI angezeigt wird, während das Element im Vollbildmodus ist. Der Standardwert ist `"auto"`, was bedeutet, dass der Browser entscheiden soll, was zu tun ist.
        - `"hide"`
          - : Die Navigationsschnittstelle des Browsers wird ausgeblendet und die gesamten Abmessungen des Bildschirms werden der Anzeige des Elements zugewiesen.
        - `"show"`
          - : Der Browser präsentiert Seitennavigationselemente und möglicherweise andere Benutzeroberflächen; die Abmessungen des Elements (und die wahrgenommene Größe des Bildschirms) werden angepasst, um Platz für diese Benutzeroberfläche zu lassen.
        - `"auto"`
          - : Der Browser wählt, welche der oben genannten Einstellungen angewendet werden soll. Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten. Dies nimmt ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt als Wert an, das den ausgewählten Bildschirm repräsentiert.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird, wenn der Übergang in den Vollbildmodus abgeschlossen ist.

### Ausnahmen

_Anstatt eine traditionelle Ausnahme zu werfen, meldet das `requestFullscreen()`
Verfahren Fehlbedingungen, indem es das zurückgegebene `Promise` ablehnt. Der Ablehnungs-Handler erhält einen der folgenden Ausnahme-Werte:_

- {{jsxref("TypeError")}}
  - : Die `TypeError`-Ausnahme kann in einer der folgenden Situationen ausgeliefert werden:
    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv; das heißt, es ist nicht das aktuelle aktive Dokument.
    - Das Element ist nicht in einem Dokument enthalten.
    - Dem Element ist es nicht gestattet, das `fullscreen`-Feature zu verwenden, entweder aufgrund der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind derselbe Knoten.
    - Das Element ist ein [Popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Nutzungshinweise

### Kompatible Elemente

Ein Element, das Sie in den Vollbildmodus versetzen möchten, muss eine kleine Anzahl einfacher Anforderungen erfüllen:

- Es muss eines der Standard-HTML-Elemente oder {{SVGElement("svg")}} oder {{MathMLElement("math")}} sein.
- Es ist _kein_ {{HTMLElement("dialog")}}-Element.
- Es muss entweder sich im obersten Dokument befinden oder in einem {{HTMLElement("iframe")}}, dem das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)-Attribut zugewiesen ist.

Zusätzlich müssen alle gesetzten Berechtigungsrichtlinien die Verwendung dieses Features zulassen.

### Erkennung der Vollbildaktivierung

Sie können feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das von `requestFullscreen()` zurückgegebene {{jsxref("Promise")}} verwenden, wie in den [Beispielen](#beispiele) unten gezeigt.

Um zu erfahren, wann anderer Code den Vollbildmodus umschaltet, sollten Sie Listener für das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis auf dem [`Document`](/de/docs/Web/API/Document) einrichten. Es ist auch wichtig, auf `fullscreenchange` zu achten, um informiert zu sein, wenn beispielsweise der Benutzer den Vollbildmodus manuell umschaltet oder wenn der Benutzer die Anwendung wechselt, wodurch Ihre Anwendung den Vollbildmodus vorübergehend verlässt.

## Beispiele

### Anfordern des Vollbildmodus

Dieses Beispiel schaltet das {{HTMLElement("video")}}-Element in den Vollbildmodus und aus diesem heraus, wenn die Tasten <kbd>Enter</kbd> oder <kbd>Shift</kbd> + <kbd>F</kbd> gedrückt werden. Das Skript überprüft, ob das Dokument derzeit im Vollbildmodus ist, indem es [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) verwendet. Wenn das Dokument im Vollbildmodus ist, wird [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufgerufen, um diesen zu verlassen. Andernfalls wird `requestFullscreen()` auf dem `<video>`-Element aufgerufen:

```js
const video = document.querySelector("video");

document.addEventListener("keydown", (event) => {
  // Note that "F" is case-sensitive (uppercase):
  if (event.key === "Enter" || event.key === "F") {
    // Check if we're in fullscreen mode
    if (document.fullscreenElement) {
      document.exitFullscreen();
      return;
    }
    // Otherwise enter fullscreen mode
    video.requestFullscreen().catch((err) => {
      console.error(`Error enabling fullscreen: ${err.message}`);
    });
  }
});
```

```html
<p>
  The video element below shows a time-lapse of a flower blooming. You can
  toggle fullscreen on and off using <kbd>Enter</kbd> or <kbd>Shift</kbd> +
  <kbd>F</kbd> (uppercase "F"). The embedded document needs to have
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/API/Element/focus_event">
    focus
  </a>
  for the example to work.
</p>

<video controls loop src="/shared-assets/videos/flower.mp4" width="420"></video>
```

```css hidden
body {
  font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;
  margin: 2em;
}

video::backdrop {
  background-color: #448;
}
button {
  display: block;
}
kbd {
  border: 2px solid #cdcdcd;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 0 #cdcdcd;
  font-size: 0.825rem;
  padding: 0.25rem;
}
```

{{embedlivesample("requesting_fullscreen_mode", , "400", "", "", "", "fullscreen")}}

### Verwendung von navigationUI

In diesem Beispiel wird das gesamte Dokument durch Aufruf von `requestFullscreen()` auf dem [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) des Dokuments in den Vollbildmodus versetzt, das das Wurzelelement des Dokuments {{HTMLElement("html")}} ist.

```js
let elem = document.documentElement;

elem
  .requestFullscreen({ navigationUI: "show" })
  .then(() => {})
  .catch((err) => {
    alert(
      `An error occurred while trying to switch into fullscreen mode: ${err.message} (${err.name})`,
    );
  });
```

Der Resolve-Handler des Promises macht nichts, aber wenn das Promise abgelehnt wird, wird eine Fehlermeldung angezeigt, indem [`alert()`](/de/docs/Web/API/Window/alert) aufgerufen wird.

### Verwendung der Bildschirmoption

Wenn Sie das Element auf dem primären OS-Bildschirm im Vollbildmodus anzeigen möchten, könnten Sie einen Code wie den folgenden verwenden:

```js
try {
  const primaryScreen = (await getScreenDetails()).screens.find(
    (screen) => screen.isPrimary,
  );
  await document.body.requestFullscreen({ screen: primaryScreen });
} catch (err) {
  console.error(err.name, err.message);
}
```

Die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) wird verwendet, um das [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt für das aktuelle Gerät abzurufen, das [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekte repräsentiert, die die verschiedenen verfügbaren Bildschirme darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen)
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- {{CSSxRef(":fullscreen")}}
- [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
