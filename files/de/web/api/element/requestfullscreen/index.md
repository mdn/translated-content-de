---
title: "Element: requestFullscreen() Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Fullscreen API")}}

Die **`Element.requestFullscreen()`** Methode sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Es wird nicht garantiert, dass das Element im Vollbildmodus angezeigt wird. Wenn die Berechtigung für den Vollbildmodus erteilt wird, wird das zurückgegebene {{JSxRef("Promise")}} aufgelöst und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) Ereignis, um es darüber zu informieren, dass es nun im Vollbildmodus ist. Wenn die Erlaubnis verweigert wird, wird das Promise abgelehnt und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignis. Wenn das Element vom ursprünglichen Dokument getrennt wurde, empfängt das Dokument diese Ereignisse stattdessen.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Übergangs in den Vollbildmodus steuert. Die verfügbaren Optionen sind:
    - `navigationUI` {{optional_inline}}
      - : Bestimmt, ob die Navigations-Benutzeroberfläche während des Vollbildmodus angezeigt werden soll.
        Der Standardwert ist `"auto"`, was bedeutet, dass der Browser entscheiden soll, was zu tun ist.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird ausgeblendet
            und die gesamten Abmessungen des Bildschirms werden für die Anzeige des Elements verwendet.
        - `"show"`
          - : Der Browser präsentiert Seiten-Navigationselemente und möglicherweise andere
            Benutzeroberflächen; die Maße des Elements (und die wahrgenommene Größe des Bildschirms) werden angepasst,
            um Platz für diese Benutzeroberfläche zu lassen.
        - `"auto"`
          - : Der Browser wählt aus, welche der oben genannten Einstellungen angewendet werden soll.
            Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm das Element im Vollbildmodus angezeigt werden soll. Dies nimmt ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekt als Wert, das den gewählten Bildschirm darstellt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, der mit einem Wert von `undefined` aufgelöst wird, wenn der Übergang zum Vollbildmodus abgeschlossen ist.

### Ausnahmen

_Anstatt eine traditionelle Ausnahme zu werfen, meldet das `requestFullscreen()` Verfahren Fehlerbedingungen, indem es das zurückgegebene `Promise` ablehnt. Der Ablehnungshandler erhält einen der folgenden Ausnahmewerte:_

- {{jsxref("TypeError")}}
  - : Die `TypeError` Ausnahme kann in einer der folgenden Situationen auftreten:
    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv; das heißt, es ist nicht das
      aktuelle aktive Dokument.
    - Das Element gehört zu keinem Dokument.
    - Dem Element ist es nicht erlaubt, die `fullscreen` Funktion zu verwenden,
      entweder aufgrund der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind ein und dasselbe Knoten.
    - Das Element ist ein [popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

## Sicherheit

[Flüchtige Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Verwendungshinweise

### Kompatible Elemente

Ein Element, das Sie in den Vollbildmodus versetzen möchten, muss eine kleine Anzahl einfacher Anforderungen erfüllen:

- Es muss eines der Standard-HTML-Elemente oder {{SVGElement("svg")}} oder {{MathMLElement("math")}} sein.
- Es ist _nicht_ ein {{HTMLElement("dialog")}} Element.
- Es muss entweder im obersten Dokument oder in einem
  {{HTMLElement("iframe")}} liegen, das das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut angewendet hat.

Zusätzlich müssen alle festgelegten Berechtigungsrichtlinien die Nutzung dieser Funktion erlauben.

### Erkennung der Vollbildaktivierung

Sie können feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das von `requestFullscreen()` zurückgegebene {{jsxref("Promise")}} verwenden, wie in den [Beispielen](#beispiele) unten gezeigt.

Um zu erfahren, wann anderer Code den Vollbildmodus umgeschaltet hat, sollten Sie Listener für das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event) Ereignis auf dem [`Document`](/de/docs/Web/API/Document) einrichten. Es ist auch wichtig, auf `fullscreenchange` zu hören, um informiert zu bleiben, wenn zum Beispiel der Benutzer den Vollbildmodus manuell umschaltet oder wenn der Benutzer die Anwendungen wechselt, wodurch Ihre Anwendung vorübergehend den Vollbildmodus verlässt.

## Beispiele

### Anforderung des Vollbildmodus

Diese Funktion schaltet das erste {{HTMLElement("video")}} Element im Dokument in den Vollbildmodus und zurück.

```js
function toggleFullscreen() {
  let elem = document.querySelector("video");

  if (!document.fullscreenElement) {
    elem.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
      );
    });
  } else {
    document.exitFullscreen();
  }
}
```

Wenn sich das Dokument noch nicht im Vollbildmodus befindet – festgestellt durch Überprüfen, ob [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) einen Wert hat –, rufen wir die `requestFullscreen()` Methode des Videos auf. Wir müssen nichts Besonderes tun, wenn es erfolgreich ist, aber wenn die Anfrage fehlschlägt, zeigt der `catch()` Handler unseres Promises eine Warnung mit einer entsprechenden Fehlermeldung an.

Wenn hingegen bereits der Vollbildmodus aktiv ist, rufen wir [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf, um den Vollbildmodus zu deaktivieren.

Sie können [dieses Beispiel in Aktion sehen](https://fullscreen-requestfullscreen-demo.glitch.me/) oder [den Code anzeigen oder remixen](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo) auf [Glitch](https://glitch.com/).

### Verwendung von navigationUI

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus versetzt, indem `requestFullscreen()` auf [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) aufgerufen wird, das das Stamm-{{HTMLElement("html")}} Element des Dokuments ist.

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

Der resolve Handler des Promise macht nichts, aber wenn das Promise abgelehnt wird, wird eine Fehlermeldung angezeigt, indem [`alert()`](/de/docs/Web/API/Window/alert) aufgerufen wird.

### Verwendung der Bildschirmoption

Wenn Sie das Element im Vollbildmodus auf dem primären Betriebssystembildschirm anzeigen wollten, könnten Sie Code wie den folgenden verwenden:

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

Die [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) Methode wird verwendet, um das [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) Objekt für das aktuelle Gerät abzurufen, das [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekte darstellt, die die verschiedenen verfügbaren Bildschirme repräsentieren.

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
