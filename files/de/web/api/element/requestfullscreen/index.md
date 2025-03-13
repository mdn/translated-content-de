---
title: "Element: requestFullscreen() Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fullscreen API")}}

Die **`Element.requestFullscreen()`** Methode stellt eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Es ist nicht garantiert, dass das Element im Vollbildmodus angezeigt wird. Wenn die Erlaubnis erteilt wird, den Vollbildmodus zu betreten, wird das zurückgegebene {{JSxRef("Promise")}} aufgelöst, und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) Ereignis, um anzuzeigen, dass es sich jetzt im Vollbildmodus befindet. Wenn die Erlaubnis verweigert wird, wird das Promise abgelehnt und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignis. Wenn das Element vom ursprünglichen Dokument getrennt wurde, empfängt das Dokument diese Ereignisse stattdessen.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Übergangs in den Vollbildmodus steuert. Die verfügbaren Optionen sind:
    - `navigationUI` {{optional_inline}}
      - : Bestimmt, ob die Navigation UI angezeigt wird, während das Element im Vollbildmodus ist.
        Der Standardwert ist `"auto"`, was bedeutet, dass der Browser entscheiden soll, was zu tun ist.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird ausgeblendet
            und die gesamten Bildschirmdimensionen werden zur Anzeige des Elements verwendet.
        - `"show"`
          - : Der Browser wird Seitennavigationssteuerungen und möglicherweise andere
            Benutzeroberflächen präsentieren; die Dimensionen des Elements (und die wahrgenommene Größe des Bildschirms) werden begrenzt, um Platz für diese Benutzeroberfläche zu lassen.
        - `"auto"`
          - : Der Browser wählt, welche der obigen Einstellungen anzuwenden ist.
            Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten. Dies nimmt ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekt als Wert, das den gewählten Bildschirm darstellt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird, wenn der Übergang zum Vollbildmodus abgeschlossen ist.

### Ausnahmen

_Anstatt eine traditionelle Ausnahme auszuwerfen, gibt das `requestFullscreen()`-Verfahren Fehlerbedingungen durch das Ablehnen des zurückgegebenen `Promise` bekannt. Der Rejection-Handler erhält einen der folgenden Ausnahme-Werte:_

- {{jsxref("TypeError")}}

  - : Die `TypeError`-Ausnahme kann in einer der folgenden Situationen auftreten:

    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv; das heißt, es ist nicht das derzeit aktive Dokument.
    - Das Element wird nicht von einem Dokument enthalten.
    - Dem Element ist es nicht gestattet, das `fullscreen`-Feature zu verwenden, entweder aufgrund der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind derselbe Knoten.
    - Das Element ist ein [Popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Hinweise zur Verwendung

### Kompatible Elemente

Ein Element, das Sie im Vollbildmodus anzeigen möchten, muss einige einfache Anforderungen erfüllen:

- Es muss eines der Standard-HTML-Elemente sein oder {{SVGElement("svg")}} oder
  {{MathMLElement("math")}}.
- Es ist _kein_ {{HTMLElement("dialog")}} Element.
- Es muss sich entweder im obersten Dokument befinden oder in einem
  {{HTMLElement("iframe")}}, bei dem das Attribut [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen) angewendet wurde.

Zusätzlich müssen alle festgelegten Berechtigungsrichtlinien die Verwendung dieser Funktion erlauben.

### Erkennen der Aktivierung des Vollbildmodus

Sie können feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das {{jsxref("Promise")}}, das von `requestFullscreen()` zurückgegeben wird, verwenden, wie in den [Beispielen](#beispiele) unten gezeigt.

Um zu erfahren, wann anderer Code den Vollbildmodus ein- und ausschaltet, sollten Sie Listener für das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event) Ereignis im [`Document`](/de/docs/Web/API/Document) einrichten. Es ist auch wichtig, auf `fullscreenchange` zu hören, um informiert zu bleiben, wenn beispielsweise der Benutzer den Vollbildmodus manuell umschaltet oder wenn der Benutzer Anwendungen wechselt, was dazu führt, dass Ihre Anwendung vorübergehend den Vollbildmodus verlässt.

## Beispiele

### Anfordern des Vollbildmodus

Diese Funktion schaltet das erste im Dokument gefundene {{HTMLElement("video")}} Element in und aus dem Vollbildmodus um.

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

Wenn sich das Dokument noch nicht im Vollbildmodus befindet – erkannt, indem überprüft wird, ob [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) einen Wert hat – rufen wir die `requestFullscreen()` Methode des Videos auf. Wir brauchen nichts Besonderes zu tun, wenn es erfolgreich ist, aber wenn die Anfrage fehlschlägt, zeigt der `catch()`-Handler unseres Promises einen Alarm mit einer entsprechenden Fehlermeldung an.

Wenn andererseits der Vollbildmodus bereits aktiv ist, rufen wir [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf, um den Vollbildmodus zu deaktivieren.

Sie können [dieses Beispiel in Aktion sehen](https://fullscreen-requestfullscreen-demo.glitch.me/) oder [den Code anzeigen oder remixen](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo) auf [Glitch](https://glitch.com/).

### Verwendung von navigationUI

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus versetzt, indem `requestFullscreen()` auf dem [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) des Dokuments aufgerufen wird, das das Wurzel-{{HTMLElement("html")}}-Element des Dokuments ist.

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

Der Resolve-Handler des Promises tut nichts, aber wenn das Promise abgelehnt wird, wird eine Fehlermeldung angezeigt, indem [`alert()`](/de/docs/Web/API/Window/alert) aufgerufen wird.

### Verwendung der Bildschirmoption

Wenn Sie das Element auf dem primären Betriebssystembildschirm im Vollbildmodus anzeigen möchten, könnten Sie Code wie den folgenden verwenden:

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

Die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) wird verwendet, um das [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) Objekt für das aktuelle Gerät abzurufen, das [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekte für die verschiedenen verfügbaren Bildschirme enthält.

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
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
