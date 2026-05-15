---
title: "Element: requestFullscreen() Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("Fullscreen API")}}

Die **`requestFullscreen()`** Methode der [`Element`](/de/docs/Web/API/Element) Schnittstelle sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Übergangs in den Vollbildmodus steuert.
    Die verfügbaren Optionen sind:
    - `keyboardLock` {{optional_inline}}
      - : Steuert den ausgewählten Modus der Tastaturverriegelung.
        - `"none"`
          - : Es wird keine Tastaturverriegelung angewendet.
            Dies ist der Standardmodus.
        - `"browser"`
          - : Der Browser-Tastaturverriegelungsmodus wird angewendet.
            In diesem Modus leitet der Browser Tastaturereignisse an die Anwendung weiter, die normalerweise vom Browser oder Systemcode verarbeitet werden würden.
            Anwendungen sollten Ereignisse für die Tasten und Tastenkombinationen abfangen, die sie verwenden möchten, und [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um alle Standardaktionen abzubrechen.

            Beachten Sie, dass einige Browser die Standardaktion für bestimmte Tasten deaktivieren können, wie zum Beispiel die Taste, die normalerweise zum Beenden des Vollbildmodus verwendet wird; dies ist nicht garantiert, daher sollten Sie immer `preventDefault()` aufrufen.
            Browser werden ebenfalls ermutigt, eine Möglichkeit zum Beenden des Vollbildmodus mit Tastaturverriegelung bereitzustellen.

            Weitere Informationen finden Sie im Abschnitt [Tastaturverriegelung](#tastaturverriegelung) unten.

    - `navigationUI` {{optional_inline}}
      - : Steuert, ob die Navigationsbenutzeroberfläche angezeigt wird, während sich das Element im Vollbildmodus befindet oder nicht.
        Der Standardwert ist `"auto"`, was darauf hinweist, dass der Browser entscheiden sollte, was zu tun ist.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird ausgeblendet und die gesamten Abmessungen des Bildschirms werden zur Anzeige des Elements verwendet.
        - `"show"`
          - : Der Browser zeigt Seitennavigationssteuerungen und möglicherweise andere Benutzeroberflächen an; die Abmessungen des Elements (und die wahrgenommene Größe des Bildschirms) werden eingeschränkt, um Platz für diese Benutzeroberfläche zu schaffen.
        - `"auto"`
          - : Der Browser wählt aus, welche der oben genannten Einstellungen angewendet werden soll.
            Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten.
        Dies nimmt ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekt als Wert, das den ausgewählten Bildschirm darstellt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird, wenn der Übergang in den Vollbildmodus abgeschlossen ist, oder mit einer Ausnahme verworfen wird.

### Ausnahmen

Bei einem Fehler wird das zurückgegebene `Promise` mit einem der folgenden Werte verworfen:

- {{jsxref("TypeError")}}
  - : Die `TypeError` Ausnahme kann in einer der folgenden Situationen auftreten:
    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv; das heißt, es ist nicht das aktuell aktive Dokument.
    - Das Element ist nicht Teil eines Dokuments.
    - Dem Element ist es nicht gestattet, die `fullscreen` Funktion zu verwenden, entweder aufgrund der [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind derselbe Knoten.
    - Das Element ist ein [Popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der übergebene `options.keyboardLock` Parameter wird vom Browser nicht unterstützt.

## Beschreibung

Die **`requestFullscreen()`** Methode sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Die Methode erfordert eine Erlaubnis.

- Wenn die Erlaubnis zum Wechsel in den Vollbildmodus erteilt wird, wird das zurückgegebene {{JSxRef("Promise")}} aufgelöst und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) Ereignis, um ihm mitzuteilen, dass es sich jetzt im Vollbildmodus befindet.
- Wenn die Erlaubnis verweigert wird, wird das Versprechen abgelehnt und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignis.

Wenn das Element vom ursprünglichen Dokument getrennt wurde, erhält dann das Dokument diese Ereignisse.

### Kompatible Elemente

Ein Element, das Sie im Vollbildmodus platzieren möchten, muss eine geringe Anzahl einfacher Anforderungen erfüllen:

- Es muss eines der Standard-HTML-Elemente oder {{SVGElement("svg")}} oder {{MathMLElement("math")}} sein.
- Es ist _kein_ {{HTMLElement("dialog")}} Element.
- Es muss sich entweder innerhalb des obersten Dokuments befinden oder in einem {{HTMLElement("iframe")}}, das das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut anwendet.

Zusätzlich muss jede festgelegte {{httpheader("Permissions-Policy")}} die Verwendung der `fullscreen` Funktion erlauben.

### Erkennung der Vollbildaktivierung

Sie können feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das von `requestFullscreen()` zurückgegebene {{jsxref("Promise")}} verwenden, wie in den [Beispielen](#beispiele) unten gezeigt.

Um herauszufinden, wann anderer Code den Vollbildmodus ein- und ausschaltet, sollten Sie auf das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event) Ereignis im [`Document`](/de/docs/Web/API/Document) lauschen.
Es ist auch wichtig, auf `fullscreenchange` zu achten, um sich darüber bewusst zu sein, wenn beispielsweise der Benutzer den Vollbildmodus manuell umschaltet oder wenn der Benutzer die Anwendung wechselt, wodurch Ihre Anwendung vorübergehend den Vollbildmodus verlässt.

### Tastaturverriegelung

Die Tastaturverriegelung ermöglicht es einer Vollbildanwendung, einige Tasten und Tastenkombinationen abzufangen und zu verarbeiten, die ansonsten ausschließlich durch den Browser oder das zugrunde liegende Betriebssystem verarbeitet würden.
Dies kann das Benutzererlebnis für Spiele verbessern, indem beispielsweise die <kbd>Esc</kbd>-Taste als Menütaste anstelle des Beendens des Vollbildmodus verwendet werden kann.
Es kann auch nützlich sein für Anwendungen wie Fernsteuerung von Desktops, bei denen man möchte, dass fast alle Tastaturereignisse an den entfernten Computer weitergeleitet werden.

Die Tastaturverriegelung wird aktiviert, indem dem `options.keyboardLock` Parameter beim Aktivieren des Vollbildmodus ein Tastaturverriegelungsmoduswert von `"browser"` übergeben wird.
Wenn die Tastaturverriegelung im Vollbildmodus aktiv ist, leitet der Browser „viel mehr“ Tastaturereignisse an die Anwendung weiter — die genaue Menge der Tasten ist vom Browser abhängig.
Die Webanwendung sollte das Ereignis verarbeiten, indem sie zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um die Standardaktion abzubrechen.
Manche Tastenkombinationen werden für Systemsteuerungen verwendet oder haben Datenschutzrisiken, und daher können sie mit diesem Mechanismus nicht abgefangen und deaktiviert werden (zum Beispiel <kbd>Strg+Alt+Entf</kbd> in Windows).

Beachten Sie, dass einige Browser die Standardaktion für die <kbd>Esc</kbd>-Taste immer deaktivieren, wenn die Tastaturverriegelung aktiv ist, sodass durch Drücken dieser Taste nicht automatisch der Vollbildmodus beendet wird.
Da dies jedoch nicht garantiert ist, sollten Sie trotzdem `preventDefault()` aufrufen, um zu verhindern, dass durch Drücken der <kbd>Esc</kbd>-Taste der Vollbildmodus beendet wird.
Allgemeiner gesagt, können Sie nicht davon ausgehen, dass die Standardaktion für ein Tastaturereignis standardmäßig deaktiviert ist.

Es wird erwartet, dass Browser eine alternative Möglichkeit zum Beenden des Vollbildmodus bereitstellen, wenn die Tastaturverriegelung aktiviert ist.
Die meisten Browser verwenden die <kbd>Esc</kbd>-Taste, um den normalen Vollbildmodus zu beenden, und ein langes Drücken der <kbd>Esc</kbd>-Taste, um die Tastaturverriegelung zu beenden.
Die Tastaturverriegelung wird deaktiviert, wenn der Browser den Vollbildmodus beendet.

### Sicherheitsüberlegungen

[Transiente Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich.
Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

Der Vollbildmodus wird durch die [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) Direktive {{HTTPHeader("Permissions-Policy/fullscreen","fullscreen")}} gesteuert.

Die Standardzugriffsliste für `screen-wake-lock` ist `self`.
Dies ermöglicht die Vollbildnutzung in nested frames mit demselben Ursprung, verhindert jedoch sie in Inhalten von Drittanbietern.
Die Nutzung durch Dritte kann vom Server aktiviert werden, indem zuerst der `Permissions-Policy` Header gesetzt wird, um einer bestimmten Drittanbieterherkunft die Erlaubnis zu erteilen.

```http
Permissions-Policy: fullscreen=(self b.example.com)
```

Dann muss das `allow="fullscreen"` Attribut dem Rahmen-Containerelement für Quellen von dieser Herkunft hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="fullscreen"></iframe>
```

Die [Permissions API](/de/docs/Web/API/Permissions_API) `fullscreen` Erlaubnis kann verwendet werden, um zu prüfen, ob der Zugriff zur Nutzung des Modus `granted`, `denied` oder `prompt` (erfordert Benutzerbestätigung) ist.

## Beispiele

### Anfordern des Vollbildmodus

Dieses Beispiel schaltet das {{HTMLElement("video")}} Element ein und aus dem Vollbildmodus um, wenn die <kbd>Enter</kbd> oder <kbd>Shift</kbd> + <kbd>F</kbd> Tasten gedrückt werden.
Das Skript überprüft, ob sich das Dokument derzeit im Vollbildmodus befindet, indem [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) verwendet wird.
Wenn sich das Dokument im Vollbildmodus befindet, wird [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) aufgerufen, um diesen zu beenden.
Andernfalls wird `requestFullscreen()` auf dem `<video>` Element aufgerufen:

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

### Verwenden der Tastaturverriegelung

Dieses Beispiel ist fast dasselbe wie das vorherige Beispiel, außer dass wir darum bitten, dass Vollbild mit Tastaturverriegelung geöffnet wird.

#### JavaScript

```js hidden
const video = document.querySelector("video");
```

Der geänderte Code für den Tastaturereignis-Listener wird unten gezeigt.

Der erste Unterschied besteht darin, dass wir das Ereignis für die <kbd>Esc</kbd>-Taste im Vollbildmodus behandeln, indem wir `event.preventDefault()` aufrufen, um die Standardaktion (die den Vollbildmodus beenden würde) zu deaktivieren.

Wie zuvor rufen wir `requestFullscreen()` auf, wenn die <kbd>Enter</kbd> oder <kbd>Shift+F</kbd> Tasten gedrückt werden, wenn sich nicht im Vollbildmodus befindet.
In diesem Fall übergeben wir jedoch die `keyboardLock` Option mit dem Wert `"browser"`.

```js
document.addEventListener("keydown", (event) => {
  // Check if we're in fullscreen mode
  if (document.fullscreenElement) {
    // Cancel exiting via the Escape key
    if (event.key === "Escape") {
      event.preventDefault();
      // Do whatever else you might want to do when escape is pressed
    }
  } else if (event.key === "Enter" || event.key === "F") {
    // Open full screen if Enter or F is pressed and not already fullscreen.
    // Note that "F" is case-sensitive (uppercase).
    video.requestFullscreen({ keyboardLock: "browser" }).catch((err) => {
      console.error(`Error enabling fullscreen: ${err.message}`);
    });
  }
});
```

```html hidden
<p>
  The video element below shows a time-lapse of a flower blooming. You can
  toggle fullscreen on and off using <kbd>Enter</kbd> or
  <kbd>Shift+F</kbd> (uppercase "F"). The embedded document needs to have
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

#### Ergebnisse

Wählen Sie den Rahmen aus und drücken Sie <kbd>Shift+F</kbd>.
Wenn die Seite im Vollbildmodus angezeigt wird, beachten Sie die temporäre Benachrichtigung oben auf der Seite, die erklärt, wie man den Vollbildmodus verlässt.

{{embedlivesample("Using keyboard lock", , "400", "", "", "", "fullscreen")}}

### Verwenden von navigationUI

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus versetzt, indem `requestFullscreen()` auf dem [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) des Dokuments aufgerufen wird, das das Stamm-{{HTMLElement("html")}}-Element des Dokuments ist.

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

Der Auflösevorgang des Versprechens tut nichts, aber wenn das Versprechen abgelehnt wird, wird eine Fehlermeldung durch Aufrufen von [`alert()`](/de/docs/Web/API/Window/alert) angezeigt.

### Verwenden der Bildschirmoption

Wenn Sie das Element auf dem primären Betriebssystemsbildschirm im Vollbildmodus anzeigen möchten, könnten Sie Code wie den folgenden verwenden:

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
