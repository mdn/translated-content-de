---
title: "Element: requestFullscreen() Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: 0383405cdb7e96b2f572206c0f35d2076edee953
---

{{APIRef("Fullscreen API")}}

Die **`requestFullscreen()`** Methode des [`Element`](/de/docs/Web/API/Element) Interface sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das das Verhalten des Wechsels in den Vollbildmodus steuert.
    Die verfügbaren Optionen sind:
    - `keyboardLock` {{optional_inline}}
      - : Steuert den ausgewählten Keyboard-Lock-Modus.
        - `"none"`
          - : Es wird kein Keyboard-Lock angewendet.
            Dies ist der Standardmodus.
        - `"browser"`
          - : Der Browser-Keyboard-Lock-Modus wird angewendet.
            In diesem Modus leitet der Browser Tastenereignisse an die Anwendung weiter, die normalerweise vom Browser- oder Systemcode verarbeitet würden.
            Anwendungen sollten Ereignisse für die Tasten und Tastenkombinationen abfangen, die sie verwenden möchten, und [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um alle Standardaktionen zu unterbrechen.

            Beachten Sie, dass einige Browser die Standardaktion für einige Tasten deaktivieren können, z.B. die Taste, die normalerweise verwendet wird, um den Vollbildmodus zu beenden; dies ist nicht garantiert, daher sollten Sie immer `preventDefault()` aufrufen.
            Browser werden auch dazu angehalten, einen Mechanismus bereitzustellen, um den Vollbildmodus mit Keyboard-Lock zu beenden.

            Weitere Informationen finden Sie im Abschnitt [Keyboard-Locking](#keyboard-locking) unten.

    - `navigationUI` {{optional_inline}}
      - : Steuert, ob die Navigations-Benutzeroberfläche angezeigt wird, während sich das Element im Vollbildmodus befindet.
        Der Standardwert ist `"auto"`, was bedeutet, dass der Browser entscheidet, was zu tun ist.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird ausgeblendet und die gesamten Abmessungen des Bildschirms werden zur Anzeige des Elements verwendet.
        - `"show"`
          - : Der Browser zeigt Seiten-Navigationssteuerungen und möglicherweise andere Benutzeroberflächen an; die Abmessungen des Elements (und die wahrgenommene Größe des Bildschirms) werden angepasst, um Platz für diese Benutzeroberfläche zu lassen.
        - `"auto"`
          - : Der Browser wählt, welche der obigen Einstellungen angewendet werden soll.
            Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus anzeigen möchten.
        Dies nimmt ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekt als Wert an, das den gewählten Bildschirm darstellt.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Wert von `undefined` aufgelöst wird, wenn der Übergang zum Vollbild abgeschlossen ist, oder mit einer Ausnahme zurückgewiesen wird.

### Ausnahmen

Bei einem Fehler lehnt das zurückgegebene `Promise` mit einem der folgenden Werte ab:

- {{jsxref("TypeError")}}
  - : Die Ausnahme `TypeError` kann in einer der folgenden Situationen ausgegeben werden:
    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv; das heißt, es ist nicht das aktuelle aktive Dokument.
    - Das Element ist nicht in einem Dokument enthalten.
    - Dem Element ist nicht gestattet, die `fullscreen`-Funktion zu verwenden, entweder wegen der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind derselbe Knoten.
    - Das Element ist ein [Popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der übergebene `options.keyboardLock`-Parameter wird vom Browser nicht unterstützt.

## Beschreibung

Die Methode **`requestFullscreen()`** sendet eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Die Methode erfordert eine Erlaubnis.

- Wenn die Erlaubnis zum Betreten des Vollbildmodus erteilt wird, wird das zurückgegebene {{JSxRef("Promise")}} aufgelöst und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event) Ereignis, um zu wissen, dass es sich jetzt im Vollbildmodus befindet.
- Wenn die Erlaubnis verweigert wird, wird das Promise zurückgewiesen und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignis.

Wenn das Element vom ursprünglichen Dokument getrennt wurde, erhält stattdessen das Dokument diese Ereignisse.

### Kompatible Elemente

Ein Element, das Sie im Vollbildmodus anzeigen möchten, muss eine kleine Anzahl einfacher Anforderungen erfüllen:

- Es muss eines der Standard-HTML-Elemente oder {{SVGElement("svg")}} oder {{MathMLElement("math")}} sein.
- Es ist _kein_ {{HTMLElement("dialog")}} Element.
- Es muss sich entweder im obersten Dokument befinden oder in einem {{HTMLElement("iframe")}}, dem das [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) Attribut zugewiesen ist.

Zusätzlich muss jede gesetzte {{httpheader("Permissions-Policy")}} die Nutzung der `fullscreen`-Funktion erlauben.

### Erkennung der Vollbildaktivierung

Sie können feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, indem Sie das von `requestFullscreen()` zurückgegebene {{jsxref("Promise")}} verwenden, wie in den [Beispielen](#beispiele) unten gezeigt.

Um festzustellen, wann anderer Code den Vollbildmodus ein- und ausschaltet, sollten Sie Zuhörer für das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event) Ereignis am [`Document`](/de/docs/Web/API/Document) einrichten.
Es ist auch wichtig, `fullscreenchange` zu überwachen, um zu wissen, wann z.B. der Benutzer den Vollbildmodus manuell umschaltet oder wenn der Benutzer die Anwendung wechselt, was dazu führt, dass Ihre Anwendung vorübergehend den Vollbildmodus verlässt.

### Keyboard-Locking

Keyboard-Locking ermöglicht es einer Vollbildanwendung, einige Tasten und Tastenkombinationen abzufangen und zu behandeln, die ansonsten ausschließlich vom Browser oder dem darunterliegenden Betriebssystem verarbeitet würden.
Dies kann die Benutzererfahrung für Spiele verbessern, indem beispielsweise die <kbd>Esc</kbd>-Taste als Menütaste verwendet werden kann, anstatt den Vollbildmodus zu verlassen.
Es kann auch für Anwendungen wie Remote-Desktop-Steuerung nützlich sein, bei denen nahezu alle Tastaturereignisse an den entfernten Computer weitergeleitet werden sollen.

Der Tastatursperre wird aktiviert, indem beim Aktivieren des Vollbildmodus der Wert `"browser"` an den [`options.keyboardLock`](#keyboardlock) Parameter übergeben wird.
Wenn die Tastatursperre im Vollbildmodus aktiv ist, leitet der Browser "viel mehr" Tastaturereignisse an die Anwendung weiter – das genaue Set an Tasten ist browserabhängig.
Die Webanwendung sollte das Ereignis abfangen, indem sie zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um die Standardaktion abzubrechen.
Einige Tastenkombinationen werden für Systemsteuerungen verwendet oder haben Datenschutzrisiken und können daher nicht mit diesem Mechanismus abgefangen und deaktiviert werden (zum Beispiel <kbd>Ctrl+Alt+Delete</kbd> unter Windows).

Beachten Sie, dass einige Browser im Tastatursperrenmodus immer die Standardaktion der <kbd>Esc</kbd>-Taste deaktivieren, sodass das Drücken dieser nicht automatisch den Vollbildmodus beendet.
Da dies jedoch nicht garantiert ist, müssen Sie dennoch `preventDefault()` aufrufen, um zu verhindern, dass <kbd>Esc</kbd>-Tastendrücke den Vollbildmodus beenden.
Allgemeiner gilt, dass Sie nicht davon ausgehen können, dass die Standardaktion für ein Tastaturereignis standardmäßig deaktiviert ist.

Es wird erwartet, dass Browser einen alternativen Mechanismus zum Beenden des Vollbildmodus bereitstellen, wenn die Tastatursperre aktiviert ist.
Die meisten Browser verwenden die <kbd>Esc</kbd>-Taste, um den normalen Vollbildmodus zu beenden, und eine lange gedrückte <kbd>Esc</kbd>-Taste, um den Tastatursperre zu beenden.
Der Tastatursperre wird deaktiviert, wenn der Browser den Vollbildmodus verlässt.

### Sicherheitsaspekte

[Temporäre Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich.
Der Benutzer muss mit der Seite oder einem UI-Element interagieren, damit diese Funktion funktioniert.

Der Vollbildmodus wird durch die [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) Direktive {{HTTPHeader("Permissions-Policy/fullscreen","fullscreen")}} gesteuert.

Die Standard-Zulassungsliste für `screen-wake-lock` ist `self`.
Dies erlaubt die Verwendung des Vollbildmodus in gleichnamigen verschachtelten Frames, verhindert jedoch dessen Einsatz in Inhalten von Drittanbietern.
Die Nutzung durch Dritte kann aktiviert werden, indem der Server zuerst den `Permissions-Policy`-Header so setzt, dass er einer bestimmten Drittanbieter-Origin die Erlaubnis erteilt.

```http
Permissions-Policy: fullscreen=(self b.example.com)
```

Dann muss das `allow="fullscreen"` Attribut dem Rahmencontainer-Element für Quellen von diesem Ursprung hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="fullscreen"></iframe>
```

Die [Permissions API](/de/docs/Web/API/Permissions_API) `fullscreen` Erlaubnis kann verwendet werden, um zu testen, ob der Zugriff auf den Modus als `granted`, `denied` oder `prompt` (benötigt Benutzerbestätigung einer Aufforderung) eingestuft wird.

## Beispiele

### Anfordern des Vollbildmodus

Dieses Beispiel wechselt das {{HTMLElement("video")}} Element in den und aus dem Vollbildmodus, wenn die <kbd>Enter</kbd>- oder <kbd>Shift</kbd> + <kbd>F</kbd>-Tasten gedrückt werden.
Das Skript überprüft, ob das Dokument derzeit im Vollbildmodus ist, indem es [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) verwendet.
Wenn sich das Dokument im Vollbildmodus befindet, ruft es [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf, um es zu beenden.
Andernfalls ruft es `requestFullscreen()` auf dem `<video>`-Element auf:

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

### Verwenden der Tastatursperre

Dieses Beispiel ist fast dasselbe wie das vorherige Beispiel, außer dass wir anfordern, dass der Vollbildmodus mit Tastatursperre geöffnet wird.

#### JavaScript

```js hidden
const video = document.querySelector("video");
```

Der geänderte Tastenereignis-Listener-Code ist unten gezeigt.

Der erste Unterschied besteht darin, dass wir das Ereignis für die <kbd>Esc</kbd>-Taste im Vollbildmodus behandeln und `event.preventDefault()` aufrufen, um die Standardaktion zu deaktivieren (die darin bestehen würde, den Vollbildmodus zu beenden).

Wie zuvor rufen wir `requestFullscreen()` auf, wenn <kbd>Enter</kbd> oder <kbd>Shift+F</kbd> gedrückt werden, wenn sich das Dokument nicht im Vollbildmodus befindet.
In diesem Fall übergeben wir jedoch die `keyboardLock`-Option mit dem Wert `"browser"`.

```js
document.addEventListener("keydown", (event) => {
  // Check if we're in fullscreen mode
  if (document.fullscreenElement) {
    // Cancel exiting via the Escape key
    if (event.key === "Escape") {
      event.preventDefault();
      // Do whatever else you might want to do when escape is pressed
    }
  } else {
    // Open full screen if Enter or F is pressed.
    // Note that "F" is case-sensitive (uppercase):
    if (event.key === "Enter" || event.key === "F") {
      // Otherwise enter fullscreen mode
      video.requestFullscreen({ keyboardLock: "browser" }).catch((err) => {
        console.error(`Error enabling fullscreen: ${err.message}`);
      });
    }
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

Wählen Sie den Frame aus und drücken Sie <kbd>Shift+F</kbd>.
Wenn die Seite den Vollbildrahmen anzeigt, beachten Sie die vorübergehende Benachrichtigung oben auf der Seite, die erklärt, wie Sie den Vollbildmodus beenden können.

{{embedlivesample("Using keyboard lock", , "400", "", "", "", "fullscreen")}}

### Verwenden des navigationUI

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus versetzt, indem `requestFullscreen()` auf dem [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) des Dokuments aufgerufen wird, das das Wurzel-{{HTMLElement("html")}} Element des Dokuments ist.

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

Der Resolve-Handler des Promise macht nichts, aber wenn das Promise zurückgewiesen wird, wird eine Fehlermeldung durch Aufrufen von [`alert()`](/de/docs/Web/API/Window/alert) angezeigt.

### Verwenden der Bildschirme-Option

Wenn Sie das Element auf dem primären Betriebssystembildschirm im Vollbildmodus anzeigen möchten, könnten Sie solch einen Code verwenden:

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

Die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) wird verwendet, um das [`ScreenDetails`](/de/docs/Web/API/ScreenDetails) Objekt für das aktuelle Gerät abzurufen, welches [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed) Objekte enthält, die die verschiedenen verfügbaren Bildschirme darstellen.

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
