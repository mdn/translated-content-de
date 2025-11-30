---
title: "Element: requestFullscreen() Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Fullscreen API")}}

Die **`Element.requestFullscreen()`**
Methode sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Es ist nicht garantiert, dass das Element in den Vollbildmodus versetzt wird. Wenn die Erlaubnis zum Eintritt in den Vollbildmodus erteilt wird, wird das zurückgegebene {{JSxRef("Promise")}} aufgelöst und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) Ereignis, um mitzuteilen, dass es sich nun im Vollbildmodus befindet. Wenn die Erlaubnis verweigert wird, wird das Promise abgelehnt und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignis. Wenn das Element vom ursprünglichen Dokument entfernt wurde, erhält stattdessen das Dokument diese Ereignisse.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Übergangs in den Vollbildmodus steuert. Die verfügbaren Optionen sind:
    - `navigationUI` {{optional_inline}}
      - : Bestimmt, ob die Navigations-Benutzeroberfläche angezeigt werden soll, während sich das Element im Vollbildmodus befindet. Der Standardwert ist `"auto"`, was bedeutet, dass der Browser entscheiden soll.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird ausgeblendet und der gesamte Bildschirm wird zur Anzeige des Elements verwendet.
        - `"show"`
          - : Der Browser zeigt Seitennavigationssteuerelemente und möglicherweise andere Benutzeroberflächen an; die Abmessungen des Elements (und die wahrgenommene Größe des Bildschirms) werden angepasst, um Platz für diese Benutzeroberfläche zu lassen.
        - `"auto"`
          - : Der Browser wählt, welche der oben genannten Einstellungen angewendet werden soll. Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten. Dies erfordert ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekt als Wert, das den gewählten Bildschirm darstellt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird, wenn der Übergang zum Vollbildmodus abgeschlossen ist.

### Ausnahmen

_Anstatt eine herkömmliche Ausnahme auszulösen, kündigt die `requestFullscreen()` Methode Fehlerzustände an, indem sie das `Promise`, das sie zurückgegeben hat, ablehnt. Der Ablehnungshandler erhält einen der folgenden Ausnahme-Werte:_

- {{jsxref("TypeError")}}
  - : Die `TypeError` Ausnahme kann in einer der folgenden Situationen auftreten:
    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv, d.h. es ist nicht das aktuell aktive Dokument.
    - Das Element ist nicht in einem Dokument enthalten.
    - Dem Element ist es nicht gestattet, das `fullscreen`-Feature zu verwenden, entweder aufgrund der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind derselbe Knoten.
    - Das Element ist ein [popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

## Sicherheit

[Eingeschränkte Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Nutzungshinweise

### Kompatible Elemente

Ein Element, das Sie in den Vollbildmodus versetzen möchten, muss einige einfache Anforderungen erfüllen:

- Es muss eines der Standard-HTML-Elemente oder {{SVGElement("svg")}} oder {{MathMLElement("math")}} sein.
- Es darf _kein_ {{HTMLElement("dialog")}} Element sein.
- Es muss sich entweder im obersten Dokument befinden oder in einem {{HTMLElement("iframe")}}, das das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut besitzt.

Zusätzlich müssen alle festgelegten Berechtigungsrichtlinien die Nutzung dieses Features zulassen.

### Erkennung der Vollbildaktivierung

Sie können feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das von `requestFullscreen()` zurückgegebene {{jsxref("Promise")}} verwenden, wie in den [Beispielen](#beispiele) unten gezeigt.

Um zu erfahren, wann anderer Code den Vollbildmodus ein- und ausschaltet, sollten Sie Listener für das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event) Ereignis auf dem [`Document`](/de/docs/Web/API/Document) einrichten. Es ist auch wichtig, `fullscreenchange` zu hören, um informiert zu sein, wenn z.B. der Benutzer manuell den Vollbildmodus umschaltet oder die Anwendung wechselt, wodurch Ihre Anwendung den Vollbildmodus vorübergehend verlässt.

## Beispiele

### Anforderung des Vollbildmodus

Dieses Beispiel schaltet das {{HTMLElement("video")}} Element in den Vollbildmodus und wieder zurück, wenn die <kbd>Enter</kbd> oder <kbd>Shift</kbd> + <kbd>F</kbd> Tasten gedrückt werden. Das Skript überprüft, ob sich das Dokument derzeit im Vollbildmodus befindet, indem es [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) verwendet. Wenn das Dokument im Vollbildmodus ist, wird [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufgerufen, um den Modus zu verlassen. Andernfalls wird `requestFullscreen()` auf dem `<video>` Element aufgerufen:

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
  font-family:
    "Benton Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  margin: 2em;
}

video::backdrop {
  background-color: #444488;
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

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus geschaltet, indem `requestFullscreen()` auf dem [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) des Dokuments aufgerufen wird, was das Root-{{HTMLElement("html")}} Element des Dokuments ist.

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

Der Resolve-Handler des Promises tut nichts, aber wenn das Promise abgelehnt wird, wird eine Fehlermeldung durch Aufruf von [`alert()`](/de/docs/Web/API/Window/alert) angezeigt.

### Verwendung der Bildschirmoption

Wenn Sie das Element auf dem primären OS-Bildschirm im Vollbildmodus anzeigen möchten, könnten Sie den folgenden Code verwenden:

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

Die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) wird verwendet, um das [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) Objekt für das aktuelle Gerät abzurufen, das [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekte enthält, die die verschiedenen verfügbaren Bildschirme repräsentieren.

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
