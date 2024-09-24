---
title: "Element: Methode requestFullscreen()"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Fullscreen API")}}

Die **`Element.requestFullscreen()`**-Methode sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Es ist nicht garantiert, dass das Element in den Vollbildmodus versetzt wird. Wenn die Erlaubnis zum Wechsel in den Vollbildmodus erteilt wird, löst das zurückgegebene {{JSxRef("Promise")}} auf, und das Element erhält ein {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}-Ereignis, um anzuzeigen, dass es jetzt im Vollbildmodus ist. Wenn die Erlaubnis verweigert wird, wird das Versprechen abgelehnt, und das Element erhält stattdessen ein {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}-Ereignis. Wenn das Element aus dem ursprünglichen Dokument entfernt wurde, empfängt das Dokument diese Ereignisse stattdessen.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Übergangs in den Vollbildmodus steuert. Die verfügbaren Optionen sind:
    - `navigationUI` {{optional_inline}}
      - : Steuert, ob die Navigations-UI angezeigt wird, während das Element im Vollbildmodus ist. Der Standardwert ist `"auto"`, was bedeutet, dass der Browser entscheiden sollte, was zu tun ist.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird ausgeblendet, und die gesamten Dimensionen des Bildschirms werden für die Anzeige des Elements genutzt.
        - `"show"`
          - : Der Browser zeigt die Seitennavigationskontrollen und möglicherweise weitere Benutzeroberflächen an; die Maße des Elements (und die wahrgenommene Größe des Bildschirms) werden so angepasst, dass Platz für diese Benutzeroberfläche bleibt.
        - `"auto"`
          - : Der Browser wählt aus, welche der obigen Einstellungen angewendet wird. Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm das Element im Vollbildmodus angezeigt werden soll. Dies nimmt ein {{domxref("ScreenDetailed")}}-Objekt als Wert an, das den gewählten Bildschirm darstellt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird, wenn der Übergang in den Vollbildmodus abgeschlossen ist.

### Ausnahmen

_Anstatt eine traditionelle Ausnahme zu werfen, kündigt das `requestFullscreen()`-Verfahren Fehlerbedingungen an, indem es das zurückgegebene `Promise` ablehnt. Der Ablehnungshandler erhält einen der folgenden Ausnahme-Werte:_

- {{jsxref("TypeError")}}

  - : Die Ausnahme `TypeError` kann in einer der folgenden Situationen auftreten:

    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv; das heißt, es ist nicht das aktuelle aktive Dokument.
    - Das Element wird nicht durch ein Dokument enthalten.
    - Dem Element ist es nicht gestattet, die `fullscreen`-Funktion zu verwenden, entweder aufgrund der [Permissions-Policy](/de/docs/Web/HTTP/Permissions_Policy)-Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind derselbe Knoten.
    - Das Element ist ein [Popover](/de/docs/Web/API/Popover_API), das bereits über {{domxref("HTMLElement.showPopover()")}} angezeigt wird.

## Sicherheit

Eine [transiente Benutzeraktivierung](/de/docs/Web/Security/User_activation) ist erforderlich. Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

## Hinweise zur Verwendung

### Kompatible Elemente

Ein Element, das Sie in den Vollbildmodus versetzen möchten, muss eine kleine Anzahl einfacher Anforderungen erfüllen:

- Es muss eines der standardmäßigen HTML-Elemente oder ein {{SVGElement("svg")}} oder {{MathMLElement("math")}} sein.
- Es ist _kein_ {{HTMLElement("dialog")}}-Element.
- Es muss sich entweder innerhalb des obersten Dokuments befinden oder in einem {{HTMLElement("iframe")}}, das das Attribut [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen) hat.

Zusätzlich müssen alle festgelegten Berechtigungsrichtlinien die Verwendung dieser Funktion erlauben.

### Erkennen der Aktivierung des Vollbildmodus

Sie können feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das von `requestFullscreen()` zurückgegebene {{jsxref("Promise")}} verwenden, wie in den [Beispielen](#beispiele) unten zu sehen.

Um zu erfahren, wann anderer Code den Vollbildmodus aktiviert oder deaktiviert, sollten Sie Listener für das {{domxref("Document/fullscreenchange_event", "fullscreenchange")}}-Ereignis auf dem {{domxref("Document")}} einrichten. Es ist auch wichtig, auf `fullscreenchange` zu achten, um informiert zu werden, wenn beispielsweise der Benutzer manuell den Vollbildmodus umschaltet oder die Anwendung wechselt, was dazu führt, dass Ihre Anwendung vorübergehend den Vollbildmodus verlässt.

## Beispiele

### Anfordern des Vollbildmodus

Diese Funktion schaltet das erste {{HTMLElement("video")}}-Element im Dokument in den Vollbildmodus um und zurück.

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

Wenn das Dokument nicht bereits im Vollbildmodus ist – festgestellt durch Überprüfung, ob {{domxref("document.fullscreenElement")}} einen Wert hat – rufen wir die `requestFullscreen()`-Methode des Videos auf. Wir müssen nichts Besonderes tun, wenn erfolgreich, aber wenn die Anfrage fehlschlägt, zeigt der `catch()`-Handler unseres Versprechens eine Warnung mit einer entsprechenden Fehlermeldung an.

Wenn hingegen der Vollbildmodus bereits aktiv ist, rufen wir {{domxref("document.exitFullscreen()")}} auf, um den Vollbildmodus zu deaktivieren.

Sie können [dieses Beispiel in Aktion sehen](https://fullscreen-requestfullscreen-demo.glitch.me/) oder [den Code anzeigen oder remixen](https://glitch.com/edit/#!/fullscreen-requestfullscreen-demo) auf [Glitch](https://glitch.com/).

### Verwendung von navigationUI

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus gesetzt, indem `requestFullscreen()` auf dem {{DOMxRef("Document.documentElement")}} des Dokuments aufgerufen wird, das das Wurzelelement {{HTMLElement("html")}} des Dokuments ist.

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

Der Resolve-Handler des Versprechens macht nichts, aber wenn das Versprechen abgelehnt wird, wird eine Fehlermeldung durch Aufruf von {{DOMxRef("Window.alert", "alert()")}} angezeigt.

### Verwendung der Bildschirmoption

Wenn Sie das Element auf dem primären Betriebssystembildschirm im Vollbildmodus anzeigen möchten, könnten Sie einen Code wie den folgenden verwenden:

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

Die Methode {{domxref("Window.getScreenDetails()")}} wird verwendet, um das {{domxref("ScreenDetails")}}-Objekt für das aktuelle Gerät abzurufen, das {{domxref("ScreenDetailed")}}-Objekte enthält, die die verschiedenen verfügbaren Bildschirme darstellen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- {{DOMxRef("Document.exitFullscreen()")}}
- {{DOMxRef("Document.fullscreen")}}
- {{DOMxRef("Document.fullscreenElement")}}
- {{CSSxRef(":fullscreen")}}
- [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
