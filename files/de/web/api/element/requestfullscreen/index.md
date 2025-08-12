---
title: "Element: requestFullscreen() Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("Fullscreen API")}}

Die **`Element.requestFullscreen()`**-Methode gibt eine asynchrone Anfrage aus, um das Element im Vollbildmodus anzuzeigen.

Es gibt keine Garantie, dass das Element in den Vollbildmodus versetzt wird. Wenn die Berechtigung zum Wechsel in den Vollbildmodus erteilt wird, wird das zurückgegebene {{JSxRef("Promise")}} aufgelöst und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) Ereignis, um anzuzeigen, dass es sich jetzt im Vollbildmodus befindet. Wenn die Erlaubnis verweigert wird, wird das Promise abgelehnt und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignis. Wenn das Element vom ursprünglichen Dokument getrennt wurde, empfängt dann das Dokument diese Ereignisse stattdessen.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Übergangs in den Vollbildmodus steuert. Die verfügbaren Optionen sind:
    - `navigationUI` {{optional_inline}}
      - : Steuert, ob die Navigations-UI angezeigt wird, während das Element im Vollbildmodus ist.
        Der Standardwert ist `"auto"`, was bedeutet, dass der Browser entscheiden soll, was zu tun ist.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird ausgeblendet und die gesamten Dimensionen des Bildschirms werden zur Anzeige des Elements genutzt.
        - `"show"`
          - : Der Browser präsentiert Seitennavigationselemente und möglicherweise andere Benutzeroberflächen; die Dimensionen des Elements (und die wahrgenommene Größe des Bildschirms) werden angepasst, um Platz für diese Benutzeroberfläche zu lassen.
        - `"auto"`
          - : Der Browser wählt aus, welche der oben genannten Einstellungen angewendet werden. Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm das Element im Vollbildmodus angezeigt werden soll. Dies nimmt ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekt als Wert, das den gewählten Bildschirm darstellt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird, wenn der Übergang in den Vollbildmodus abgeschlossen ist.

### Ausnahmen

_Statt eine traditionelle Ausnahme auszulösen, kündigt das `requestFullscreen()`-Verfahren Fehlerzustände an, indem das `Promise` abgelehnt wird. Der Ablehnungs-Handler erhält einen der folgenden Ausnahme-Werte:_

- {{jsxref("TypeError")}}
  - : Die `TypeError`-Ausnahme kann in einer der folgenden Situationen aufgetreten:
    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv; das heißt, es ist nicht das aktuell aktive Dokument.
    - Das Element ist nicht in einem Dokument enthalten.
    - Dem Element ist nicht gestattet, die `fullscreen`-Funktion zu verwenden, entweder aufgrund der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind derselbe Knoten.
    - Das Element ist ein [Popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Nutzungshinweise

### Kompatible Elemente

Ein Element, das Sie in den Vollbildmodus versetzen möchten, muss einige einfache Anforderungen erfüllen:

- Es muss eines der standardmäßigen HTML-Elemente oder {{SVGElement("svg")}} oder {{MathMLElement("math")}} sein.
- Es ist _kein_ {{HTMLElement("dialog")}}-Element.
- Es muss entweder im Top-Level-Dokument enthalten sein oder in einem {{HTMLElement("iframe")}}, das das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut hat.

Zusätzlich müssen alle festgelegten Berechtigungsrichtlinien die Verwendung dieser Funktion erlauben.

### Erkennung der Vollbildaktivierung

Sie können feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das von `requestFullscreen()` zurückgegebene {{jsxref("Promise")}} verwenden, wie in den [Beispielen](#beispiele) unten gezeigt.

Um zu erfahren, wann anderer Code den Vollbildmodus ein- und ausschaltet, sollten Sie Listener für das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event) Ereignis auf dem [`Document`](/de/docs/Web/API/Document) einrichten. Es ist auch wichtig, auf `fullscreenchange` zu hören, um zu wissen, wann beispielsweise der Benutzer manuell den Vollbildmodus umschaltet oder wenn der Benutzer Anwendungen wechselt, wodurch Ihre Anwendung vorübergehend den Vollbildmodus verlässt.

## Beispiele

### Anforderung des Vollbildmodus

Dieses Beispiel schaltet das {{HTMLElement("video")}}-Element in den Vollbildmodus um und aus, wenn die <kbd>Enter</kbd>- oder <kbd>Shift</kbd> + <kbd>F</kbd>-Tasten gedrückt werden. Das Skript überprüft, ob sich das Dokument derzeit im Vollbildmodus befindet, indem es [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) verwendet. Wenn sich das Dokument im Vollbildmodus befindet, wird [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufgerufen, um den Modus zu verlassen. Andernfalls wird `requestFullscreen()` auf dem `<video>`-Element aufgerufen:

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

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus versetzt, indem `requestFullscreen()` auf dem [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) des Dokuments aufgerufen wird, welches das Wurzel-{{HTMLElement("html")}}-Element des Dokuments ist.

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

Wenn Sie das Element auf dem primären OS-Bildschirm im Vollbildmodus anzeigen möchten, können Sie Code wie den folgenden verwenden:

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
