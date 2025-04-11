---
title: "Element: requestFullscreen() Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Fullscreen API")}}

Die **`Element.requestFullscreen()`** Methode sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Es ist nicht garantiert, dass das Element in den Vollbildmodus wechselt. Wenn die Berechtigung für den Vollbildmodus erteilt wird, wird das zurückgegebene {{JSxRef("Promise")}} gelöst und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) Ereignis, um anzuzeigen, dass es sich jetzt im Vollbildmodus befindet. Wenn die Berechtigung verweigert wird, wird das Versprechen abgelehnt und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignis. Wenn das Element aus dem ursprünglichen Dokument entfernt wurde, erhält das Dokument diese Ereignisse stattdessen.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Übergangs in den Vollbildmodus steuert. Die verfügbaren Optionen sind:
    - `navigationUI` {{optional_inline}}
      - : Steuert, ob die Navigations-Benutzeroberfläche angezeigt werden soll, während sich das Element im Vollbildmodus befindet. Der Standardwert ist `"auto"`, was anzeigt, dass der Browser entscheiden sollte, was zu tun ist.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird versteckt und der gesamte Bildschirm wird für die Anzeige des Elements genutzt.
        - `"show"`
          - : Der Browser wird Seitennavigationssteuerelemente und möglicherweise andere Benutzeroberflächen präsentieren; die Dimensionen des Elements (und die wahrgenommene Größe des Bildschirms) werden angepasst, um Platz für diese Benutzeroberfläche zu lassen.
        - `"auto"`
          - : Der Browser wird wählen, welche der oben genannten Einstellungen angewendet wird. Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten. Dies nimmt ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekt als Wert an, das den ausgewählten Bildschirm darstellt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Wert von `undefined` gelöst wird, wenn der Übergang zum Vollbildmodus abgeschlossen ist.

### Ausnahmen

_Anstatt eine traditionelle Ausnahme auszulösen, kündigt der `requestFullscreen()`-Prozess Fehlerbedingungen an, indem das `Promise`, das zurückgegeben wird, abgelehnt wird. Der Ablehnungs-Handler erhält einen der folgenden Ausnahmewerte:_

- {{jsxref("TypeError")}}

  - : Die `TypeError`-Ausnahme kann in einer der folgenden Situationen auftreten:

    - Das Dokument, das das Element enthält, ist nicht voll aktiv; das heißt, es ist nicht das aktuell aktive Dokument.
    - Das Element ist nicht in einem Dokument enthalten.
    - Dem Element ist die Nutzung der `fullscreen`-Funktion nicht gestattet, entweder wegen der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind der gleiche Knoten.
    - Das Element ist ein [Popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

## Sicherheit

[Transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Hinweise zur Verwendung

### Kompatible Elemente

Ein Element, das Sie in den Vollbildmodus versetzen möchten, muss einige einfache Anforderungen erfüllen:

- Es muss eines der standardmäßigen HTML-Elemente oder {{SVGElement("svg")}} oder {{MathMLElement("math")}} sein.
- Es ist _kein_ {{HTMLElement("dialog")}} Element.
- Es muss entweder innerhalb des Hauptdokuments oder in einem {{HTMLElement("iframe")}} sein, das das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut angewendet hat.

Darüber hinaus müssen alle festgelegten Berechtigungsrichtlinien die Verwendung dieser Funktion ermöglichen.

### Erkennen der Vollbildaktivierung

Sie können feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das von `requestFullscreen()` zurückgegebene {{jsxref("Promise")}} verwenden, wie in den [Beispielen](#beispiele) unten zu sehen.

Um zu erfahren, wann anderer Code den Vollbildmodus ein- und ausblendet, sollten Sie Zuhörer für das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event) Ereignis im [`Document`](/de/docs/Web/API/Document) einrichten. Es ist auch wichtig, `fullscreenchange` zu überwachen, um zu erfahren, wenn beispielsweise der Benutzer den Vollbildmodus manuell umschaltet oder die Anwendung wechselt, wodurch Ihre Anwendung vorübergehend den Vollbildmodus verlässt.

## Beispiele

### Anfordern des Vollbildmodus

Diese Funktion schaltet das erste im Dokument gefundene {{HTMLElement("video")}} Element in den und aus dem Vollbildmodus um.

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

Wenn sich das Dokument nicht bereits im Vollbildmodus befindet – erkannt durch das Prüfen, ob [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) einen Wert hat – rufen wir die `requestFullscreen()`-Methode des Videos auf. Wenn wir erfolgreich sind, müssen wir nichts Besonderes tun. Wenn die Anfrage fehlschlägt, präsentiert der `catch()`-Handler unseres Versprechens eine Warnung mit einer entsprechenden Fehlermeldung.

Wenn hingegen der Vollbildmodus bereits aktiv ist, rufen wir [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf, um den Vollbildmodus zu beenden.

Sie können [dieses Beispiel in Aktion sehen](https://fullscreen-requestfullscreen-demo.glitch.me/) oder [den Code ansehen oder remixen](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo) auf [Glitch](https://glitch.com/).

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

Der Resolver des Versprechens tut nichts, aber wenn das Versprechen abgelehnt wird, wird eine Fehlermeldung über das Aufrufen von [`alert()`](/de/docs/Web/API/Window/alert) angezeigt.

### Verwendung der Bildschirmoption

Wenn Sie das Element auf dem primären OS-Bildschirm im Vollbildmodus anzeigen möchten, könnten Sie folgenden Code verwenden:

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
