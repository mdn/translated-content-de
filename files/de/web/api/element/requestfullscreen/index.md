---
title: "Element: requestFullscreen()-Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Fullscreen API")}}

Die **`Element.requestFullscreen()`**-Methode sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Es ist nicht garantiert, dass das Element in den Vollbildmodus versetzt wird. Wenn die Erlaubnis zum Eintritt in den Vollbildmodus erteilt wird, wird das zurückgegebene {{JSxRef("Promise")}} aufgelöst und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis, um mitzuteilen, dass es sich jetzt im Vollbildmodus befindet. Wenn die Erlaubnis verweigert wird, wird das Promise abgelehnt und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)-Ereignis. Wenn das Element aus dem ursprünglichen Dokument entfernt wurde, erhält das Dokument stattdessen diese Ereignisse.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Übergangs in den Vollbildmodus steuert. Die verfügbaren Optionen sind:
    - `navigationUI` {{optional_inline}}
      - : Steuert, ob die Navigations-Benutzeroberfläche angezeigt wird, während sich das Element im Vollbildmodus befindet.
        Der Standardwert ist `"auto"`, was bedeutet, dass der Browser entscheiden sollte, was zu tun ist.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird ausgeblendet
            und die gesamten Abmessungen des Bildschirms werden zur Anzeige des Elements genutzt.
        - `"show"`
          - : Der Browser präsentiert Seitennavigationssteuerelemente und möglicherweise andere
            Benutzeroberflächen; die Abmessungen des Elements (und die wahrgenommene Größe des Bildschirms) werden angepasst, um Platz für diese Benutzeroberfläche zu lassen.
        - `"auto"`
          - : Der Browser wählt, welche der oben genannten Einstellungen angewendet werden sollen.
            Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten. Dies nimmt ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt als Wert, das den ausgewählten Bildschirm darstellt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird, wenn der Übergang zum Vollbildmodus abgeschlossen ist.

### Ausnahmen

_Anstatt eine herkömmliche Ausnahme zu werfen, gibt das `requestFullscreen()`-Verfahren Fehlerbedingungen durch Ablehnen des zurückgegebenen `Promise` bekannt. Der Ablehnungshandler erhält einen der folgenden Ausnahme-Werte:_

- {{jsxref("TypeError")}}

  - : Die `TypeError`-Ausnahme kann in einer der folgenden
    Situationen auftreten:

    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv, das heißt, es ist nicht das aktuelle aktive Dokument.
    - Das Element ist nicht in einem Dokument enthalten.
    - Das Element darf das `fullscreen`-Feature nicht verwenden,
      entweder aufgrund der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind derselbe Knoten.
    - Das Element ist ein [Popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

## Sicherheit

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit dieses Feature funktioniert.

## Anwendungsnotizen

### Kompatible Elemente

Ein Element, das Sie im Vollbildmodus anzeigen möchten, muss eine kleine Anzahl einfacher Anforderungen erfüllen:

- Es muss eines der Standard-HTML-Elemente oder ein {{SVGElement("svg")}} oder
  {{MathMLElement("math")}} sein.
- Es ist _kein_ {{HTMLElement("dialog")}}-Element.
- Es muss entweder im Top-Level-Dokument platziert sein oder in einem
  {{HTMLElement("iframe")}}, das das [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)-Attribut aufweist.

Zusätzlich müssen alle festgelegten Berechtigungsrichtlinien die Verwendung dieses Features zulassen.

### Erkennung der Vollbildaktivierung

Sie können feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das von `requestFullscreen()` zurückgegebene {{jsxref("Promise")}} verwenden, wie in den [Beispielen](#beispiele) unten gezeigt.

Um zu erfahren, wann anderer Code den Vollbildmodus umgeschaltet hat, sollten Sie Listener für das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis im [`Document`](/de/docs/Web/API/Document) einrichten. Es ist auch wichtig, `fullscreenchange` zu lauschen, um z.B. zu erfahren, wann der Benutzer den Vollbildmodus manuell umschaltet oder wenn der Benutzer die Anwendung wechselt, wodurch Ihre Anwendung vorübergehend den Vollbildmodus verlässt.

## Beispiele

### Anforderung des Vollbildmodus

Diese Funktion schaltet das erste {{HTMLElement("video")}}-Element, das im Dokument gefunden wird, in den und aus dem Vollbildmodus.

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

Wenn sich das Dokument noch nicht im Vollbildmodus befindet — erkennbar daran, ob [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) einen Wert hat — rufen wir die `requestFullscreen()`-Methode des Videos auf. Wir müssen nichts Besonderes tun, wenn es erfolgreich ist, aber wenn die Anfrage fehlschlägt, zeigt der `catch()`-Handler unseres Promises eine Warnung mit einer entsprechenden Fehlermeldung an.

Wenn andererseits bereits der Vollbildmodus aktiviert ist, rufen wir [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf, um den Vollbildmodus zu deaktivieren.

Sie können [dieses Beispiel in Aktion sehen](https://fullscreen-requestfullscreen-demo.glitch.me/) oder [den Code ansehen oder remixen](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo) auf [Glitch](https://glitch.com/).

### Verwendung von navigationUI

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus versetzt, indem `requestFullscreen()` auf dem [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) des Dokuments aufgerufen wird, das das Root-{{HTMLElement("html")}}-Element des Dokuments ist.

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

Der Besätigungs-Handler des Promises tut nichts, aber wenn das Promise abgelehnt wird, wird eine Fehlermeldung durch Aufruf von [`alert()`](/de/docs/Web/API/Window/alert) angezeigt.

### Verwendung der Bildschirmoption

Wenn Sie das Element im Vollbildmodus auf dem primären Betriebssystembildschirm anzeigen möchten, könnten Sie Code wie folgt verwenden:

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

Die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) wird verwendet, um das [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt für das aktuelle Gerät abzurufen, das [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekte für die verschiedenen verfügbaren Bildschirme enthält.

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
