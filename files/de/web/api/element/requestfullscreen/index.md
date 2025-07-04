---
title: "Element: requestFullscreen() Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: d6edbe52e232b37563d53f15de89ec7f47254d75
---

{{APIRef("Fullscreen API")}}

Die **`Element.requestFullscreen()`**-Methode sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Es ist nicht garantiert, dass das Element in den Vollbildmodus geschaltet wird. Wenn die Erlaubnis erteilt wird, den Vollbildmodus zu betreten, wird das zurückgegebene {{JSxRef("Promise")}} aufgelöst und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis, um anzuzeigen, dass es sich jetzt im Vollbildmodus befindet. Wenn die Erlaubnis verweigert wird, wird das Versprechen abgelehnt und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)-Ereignis. Wenn das Element aus dem ursprünglichen Dokument entfernt wurde, erhält das Dokument stattdessen diese Ereignisse.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Übergangs in den Vollbildmodus steuert. Die verfügbaren Optionen sind:
    - `navigationUI` {{optional_inline}}
      - : Bestimmt, ob die Navigationsbenutzeroberfläche angezeigt werden soll, während sich das Element im Vollbildmodus befindet. Der Standardwert ist `"auto"`, was bedeutet, dass der Browser entscheiden sollte, was zu tun ist.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird ausgeblendet und die gesamten Dimensionen des Bildschirms werden zur Anzeige des Elements verwendet.
        - `"show"`
          - : Der Browser präsentiert Seitennavigationselemente und möglicherweise andere Benutzeroberflächen; die Abmessungen des Elements (und die wahrgenommene Größe des Bildschirms) werden gekürzt, um Platz für diese Benutzeroberfläche zu lassen.
        - `"auto"`
          - : Der Browser wählt aus, welche der obigen Einstellungen angewendet wird. Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Bestimmt, auf welchem Bildschirm das Element im Vollbildmodus angezeigt werden soll. Dies nimmt ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt als Wert, das den gewählten Bildschirm darstellt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird, wenn der Übergang in den Vollbildmodus abgeschlossen ist.

### Ausnahmen

_Anstatt eine herkömmliche Ausnahme auszulösen, kündigt die `requestFullscreen()`-Prozedur Fehlerbedingungen durch Ablehnen des zurückgegebenen `Promise` an. Der Ablehnungshandler erhält einen der folgenden Ausnahmewerte:_

- {{jsxref("TypeError")}}
  - : Die `TypeError`-Ausnahme kann in einer der folgenden Situationen auftreten:
    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv; das heißt, es ist nicht das aktuell aktive Dokument.
    - Das Element ist nicht in einem Dokument enthalten.
    - Das Element darf die `fullscreen`-Funktion nicht nutzen, entweder aufgrund der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind der gleiche Knoten.
    - Das Element ist ein [popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Verwendungshinweise

### Kompatible Elemente

Ein Element, das Sie in den Vollbildmodus versetzen möchten, muss eine kleine Anzahl einfacher Anforderungen erfüllen:

- Es muss eines der Standard-HTML-Elemente oder ein {{SVGElement("svg")}}- oder {{MathMLElement("math")}}-Element sein.
- Es ist _kein_ {{HTMLElement("dialog")}}-Element.
- Es muss sich entweder im obersten Dokument oder in einem {{HTMLElement("iframe")}} befinden, das das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)-Attribut angewendet hat.

Zusätzlich müssen alle gesetzten Berechtigungsrichtlinien die Verwendung dieser Funktion erlauben.

### Erkennung der Vollbildaktivierung

Sie können bestimmen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das von `requestFullscreen()` zurückgegebene {{jsxref("Promise")}} verwenden, wie in den [Beispielen](#beispiele) unten gezeigt.

Um zu erfahren, wann anderer Code den Vollbildmodus ein- und ausgeschaltet hat, sollten Sie Listener für das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis auf dem [`Document`](/de/docs/Web/API/Document) einrichten. Es ist auch wichtig, auf `fullscreenchange` zu hören, um zu wissen, wann der Benutzer manuell den Vollbildmodus umschaltet oder wann der Benutzer Anwendungen wechselt, sodass Ihre Anwendung vorübergehend den Vollbildmodus verlässt.

## Beispiele

### Anfordern des Vollbildmodus

Dieses Beispiel schaltet das {{HTMLElement("video")}}-Element in und aus dem Vollbildmodus, wenn die Tasten <kbd>Enter</kbd> oder <kbd>Shift</kbd> + <kbd>F</kbd> gedrückt werden. Das Skript prüft, ob das Dokument sich derzeit im Vollbildmodus mit [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) befindet. Wenn das Dokument im Vollbildmodus ist, wird [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufgerufen, um diesen zu verlassen. Andernfalls wird `requestFullscreen()` auf dem `<video>`-Element aufgerufen:

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
  box-shadow: #cdcdcd;
  box-shadow: inset 0 -1px 0 0 #cdcdcd;
  font-size: 0.825rem;
  padding: 0.25rem;
}
```

{{embedlivesample("requesting_fullscreen_mode", , "400", "", "", "", "fullscreen")}}

### Verwenden von navigationUI

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus versetzt, indem `requestFullscreen()` auf dem dokumenteneigenen [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) aufgerufen wird, welches das Wurzel-{{HTMLElement("html")}}-Element des Dokuments ist.

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

Der Auflösungshandler des Versprechens unternimmt nichts, aber wenn das Versprechen abgelehnt wird, wird eine Fehlermeldung angezeigt, indem [`alert()`](/de/docs/Web/API/Window/alert) aufgerufen wird.

### Verwendung der Bildschirmoption

Wenn Sie das Element im Vollbildmodus auf dem primären Betriebssystembildschirm anzeigen möchten, können Sie etwa folgenden Code verwenden:

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

Die [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails)-Methode wird verwendet, um das [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt für das aktuelle Gerät abzurufen, das [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekte darstellt, die die verschiedenen verfügbaren Bildschirme repräsentieren.

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
