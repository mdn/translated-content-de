---
title: "Element: requestFullscreen()-Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Fullscreen API")}}

Die **`Element.requestFullscreen()`**-Methode sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Es ist nicht garantiert, dass das Element in den Vollbildmodus geschaltet wird. Wenn die Erlaubnis für den Vollbildmodus erteilt wird, wird das zurückgegebene {{JSxRef("Promise")}} aufgelöst und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis, um anzuzeigen, dass es nun im Vollbildmodus ist. Wenn die Erlaubnis verweigert wird, wird das Promise abgelehnt und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)-Ereignis. Wenn das Element vom ursprünglichen Dokument getrennt wurde, erhält das Dokument diese Ereignisse anstelle des Elements.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Übergangs in den Vollbildmodus steuert. Die verfügbaren Optionen sind:
    - `navigationUI` {{optional_inline}}
      - : Steuert, ob die Navigations-UI während des Vollbildmodus des Elements angezeigt wird oder nicht. Der Standardwert ist `"auto"`, was bedeutet, dass der Browser entscheiden soll, was zu tun ist.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird verborgen, und die gesamten Bildschirmabmessungen werden zur Anzeige des Elements genutzt.
        - `"show"`
          - : Der Browser zeigt Navigationssteuerungen der Seite und möglicherweise andere Benutzeroberflächen an; die Abmessungen des Elements (und die wahrgenommene Bildschirmgröße) werden begrenzt, um Platz für diese Benutzeroberfläche zu lassen.
        - `"auto"`
          - : Der Browser wählt, welche der oben genannten Einstellungen angewendet wird. Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten. Dies nimmt ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt als Wert an, das den ausgewählten Bildschirm repräsentiert.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird, wenn der Übergang in den Vollbildmodus abgeschlossen ist.

### Ausnahmen

_Anstatt eine herkömmliche Ausnahme auszuwerfen, kündigt das `requestFullscreen()`-Verfahren Fehlerbedingungen an, indem das zurückgegebene `Promise` abgelehnt wird. Der Ablehnungshandler erhält einen der folgenden Ausnahmewerte:_

- {{jsxref("TypeError")}}

  - : Die `TypeError`-Ausnahme kann in einer der folgenden Situationen ausgeliefert werden:

    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv; das heißt, es ist nicht das aktuelle aktive Dokument.
    - Das Element wird nicht von einem Dokument enthalten.
    - Dem Element ist es nicht erlaubt, die `fullscreen`-Funktionalität zu verwenden, entweder aufgrund der [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)-Konfiguration oder anderer Zugriffskontrollmerkmale.
    - Das Element und sein Dokument sind der gleiche Knoten.
    - Das Element ist ein [Popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

## Sicherheit

Ein [vorübergehender Benutzeraktivierungszustand](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion arbeitet.

## Nutzungshinweise

### Kompatible Elemente

Ein Element, das Sie in den Vollbildmodus schalten möchten, muss eine kleine Anzahl einfacher Anforderungen erfüllen:

- Es muss eines der standardmäßigen HTML-Elemente oder {{SVGElement("svg")}} oder {{MathMLElement("math")}} sein.
- Es ist _kein_ {{HTMLElement("dialog")}}-Element.
- Es muss entweder innerhalb des obersten Dokuments platziert sein oder in einem {{HTMLElement("iframe")}}, das das [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)-Attribut hat.

Zusätzlich müssen alle festgelegten Berechtigungsrichtlinien die Nutzung dieser Funktion erlauben.

### Erkennung der Vollbildaktivierung

Sie können feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das {{jsxref("Promise")}} verwenden, das von `requestFullscreen()` zurückgegeben wird, wie in den [Beispielen](#beispiele) unten zu sehen ist.

Um zu erfahren, wann anderer Code den Vollbildmodus ein- und ausschaltet, sollten Sie Listener für das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis im [`Document`](/de/docs/Web/API/Document) einrichten. Es ist auch wichtig, `fullscreenchange` zu überwachen, um sich darüber im Klaren zu sein, wenn der Benutzer beispielsweise manuell den Vollbildmodus umschaltet oder die Anwendung wechselt, was dazu führt, dass Ihre Anwendung vorübergehend den Vollbildmodus verlässt.

## Beispiele

### Anfordern des Vollbildmodus

Diese Funktion schaltet das erste {{HTMLElement("video")}}-Element im Dokument in den Vollbildmodus und wieder zurück.

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

Wenn das Dokument nicht bereits im Vollbildmodus ist – was erkannt wird, indem überprüft wird, ob [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) einen Wert hat – rufen wir die `requestFullscreen()`-Methode des Videos auf. Wir müssen nichts Besonderes tun, wenn es erfolgreich ist, aber wenn die Anfrage fehlschlägt, zeigt der `catch()`-Handler unseres Promises eine Warnung mit einer entsprechenden Fehlermeldung an.

Wenn hingegen der Vollbildmodus bereits aktiv ist, rufen wir [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf, um den Vollbildmodus zu deaktivieren.

Sie können [dieses Beispiel in Aktion sehen](https://fullscreen-requestfullscreen-demo.glitch.me/) oder [den Code ansehen oder bearbeiten](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo) auf [Glitch](https://glitch.com/).

### Verwendung von navigationUI

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus versetzt, indem `requestFullscreen()` auf dem [`Document.documentElement`](/de/docs/Web/API/Document/documentElement), dem Root-{{HTMLElement("html")}}-Element des Dokuments, aufgerufen wird.

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

Der Auflösungs-Handler des Promises macht nichts, aber wenn das Promise abgelehnt wird, wird eine Fehlermeldung angezeigt, indem [`alert()`](/de/docs/Web/API/Window/alert) aufgerufen wird.

### Verwendung der Bildschirmoption

Wenn Sie das Element auf dem primären Betriebssystem-Bildschirm im Vollbildmodus anzeigen möchten, könnten Sie einen Code wie den folgenden verwenden:

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

Die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) wird verwendet, um das [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt für das aktuelle Gerät abzurufen, das [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekte enthält, welche die verschiedenen verfügbaren Bildschirme darstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen)
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- {{CSSxRef(":fullscreen")}}
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
