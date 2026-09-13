---
title: "Element: requestFullscreen() method"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: 3957d6261191fdf1252362e7d2092b5d59daca89
---

{{APIRef("Fullscreen API")}}

Die Methode **`requestFullscreen()`** des Interfaces [`Element`](/de/docs/Web/API/Element) stellt eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

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
      - : Steuert den ausgewählten Tastatursperrmodus.
        - `"none"`
          - : Es wird keine Tastatursperre angewendet.
            Dies ist der Standardmodus.
        - `"browser"`
          - : Der Tastatursperrmodus des Browsers wird angewendet.
            In diesem Modus leitet der Browser Tastaturereignisse an die Anwendung weiter, die normalerweise vom Browser- oder Systemcode verarbeitet würden.
            Anwendungen sollten Ereignisse für die Tasten und Tastenkombinationen abfangen, die sie verwenden möchten, und [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um Standardaktionen abzubrechen.

            Beachten Sie, dass einige Browser die Standardaktion für bestimmte Tasten deaktivieren können, beispielsweise für die Taste, die normalerweise zum Verlassen des Vollbildmodus verwendet wird; dies ist nicht garantiert, daher sollten Sie immer `preventDefault()` aufrufen.
            Browser werden außerdem dazu angehalten, einen Mechanismus zum Verlassen des Vollbildmodus bei aktivierter Tastatursperre bereitzustellen.

            Weitere Informationen finden Sie im Abschnitt [Tastatursperre](#tastatursperre) weiter unten.

    - `navigationUI` {{optional_inline}}
      - : Steuert, ob die Navigations-Benutzeroberfläche angezeigt werden soll, während sich das Element im Vollbildmodus befindet.
        Der Standardwert ist `"auto"`, was angibt, dass der Browser entscheiden soll, was zu tun ist.
        - `"hide"`
          - : Die Navigations-Benutzeroberfläche des Browsers wird ausgeblendet, und die gesamten Bildschirmabmessungen werden für die Anzeige des Elements verwendet.
        - `"show"`
          - : Der Browser zeigt Steuerelemente zur Seitennavigation und möglicherweise weitere Benutzeroberflächenelemente an; die Abmessungen des Elements (und die wahrgenommene Größe des Bildschirms) werden begrenzt, um Platz für diese Benutzeroberfläche zu lassen.
        - `"auto"`
          - : Der Browser wählt aus, welche der oben genannten Einstellungen angewendet werden soll.
            Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm Sie das Element im Vollbildmodus platzieren möchten.
        Als Wert wird ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt erwartet, das den ausgewählten Bildschirm repräsentiert.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit dem Wert `undefined` erfüllt wird, wenn der Übergang in den Vollbildmodus abgeschlossen ist, oder mit einer Ausnahme abgelehnt wird.

### Ausnahmen

Bei einem Fehler wird das zurückgegebene `Promise` mit einem der folgenden Werte abgelehnt:

- {{jsxref("TypeError")}}
  - : Die `TypeError`-Ausnahme kann in jeder der folgenden Situationen ausgelöst werden:
    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv; das heißt, es ist nicht das aktuell aktive Dokument.
    - Das Element ist nicht in einem Dokument enthalten.
    - Das Element darf die Funktion `fullscreen` nicht verwenden, entweder aufgrund einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Konfiguration oder anderer Zugriffskontrollfunktionen.
    - Das Element und sein Dokument sind derselbe Knoten.
    - Das Element ist ein [Popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der übergebene Parameter `options.keyboardLock` wird vom Browser nicht unterstützt.

## Beschreibung

Die Methode **`requestFullscreen()`** stellt eine asynchrone Anfrage, um das Element im Vollbildmodus anzuzeigen.

Die Methode erfordert eine Berechtigung.

- Wenn die Berechtigung zum Wechsel in den Vollbildmodus erteilt wird, wird das zurückgegebene {{JSxRef("Promise")}} erfüllt und das Element erhält ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis, das es darüber informiert, dass es sich jetzt im Vollbildmodus befindet.
- Wenn die Berechtigung verweigert wird, wird das Promise abgelehnt und das Element erhält stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)-Ereignis.

Wenn das Element vom ursprünglichen Dokument getrennt wurde, erhält stattdessen das Dokument diese Ereignisse.

### Kompatible Elemente

Ein Element, das Sie in den Vollbildmodus versetzen möchten, muss einige wenige einfache Anforderungen erfüllen:

- Es muss eines der Standard-HTML-Elemente, {{SVGElement("svg")}} oder {{MathMLElement("math")}} sein.
- Es ist _kein_ {{HTMLElement("dialog")}}-Element.
- Es muss sich entweder innerhalb des Dokuments der obersten Ebene befinden oder in einem {{HTMLElement("iframe")}}, auf das das Attribut [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) angewendet wurde.

Zusätzlich muss jede gesetzte {{httpheader("Permissions-Policy")}} die Verwendung der Funktion `fullscreen` erlauben.

### Erkennen der Vollbildaktivierung

Sie können anhand des von `requestFullscreen()` zurückgegebenen {{jsxref("Promise")}} feststellen, ob Ihr Versuch, in den Vollbildmodus zu wechseln, erfolgreich ist, wie in den [Beispielen](#beispiele) unten gezeigt.

Um zu erfahren, wann anderer Code den Vollbildmodus ein- oder ausgeschaltet hat, sollten Sie Listener für das [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)-Ereignis auf dem [`Document`](/de/docs/Web/API/Document) einrichten.
Es ist außerdem wichtig, auf `fullscreenchange` zu lauschen, um beispielsweise zu erkennen, wenn der Benutzer den Vollbildmodus manuell umschaltet oder wenn der Benutzer Anwendungen wechselt, wodurch Ihre Anwendung den Vollbildmodus vorübergehend verlässt.

### Tastatursperre

Die Tastatursperre ermöglicht es einer Vollbildanwendung, einige Tasten und Tastenkombinationen abzufangen und zu verarbeiten, die andernfalls ausschließlich vom Browser oder dem zugrunde liegenden Betriebssystem verarbeitet würden.
Dies kann beispielsweise die Benutzererfahrung bei Spielen verbessern, indem die Taste <kbd>Esc</kbd> als Menütaste verwendet werden kann, statt den Vollbildmodus zu verlassen.
Sie kann auch für Anwendungen wie die Fernsteuerung eines Desktops nützlich sein, bei denen fast alle Tastenereignisse an den Remote-Computer weitergeleitet werden sollen.

Die Tastatursperre wird aktiviert, indem beim Aktivieren des Vollbildmodus für den Parameter [`options.keyboardLock`](#keyboardlock) ein Tastatursperrmoduswert von `"browser"` übergeben wird.
Wenn die Tastatursperre im Vollbildmodus aktiv ist, leitet der Browser „viel mehr“ Tastaturereignisse an die Anwendung weiter — die genaue Menge der Tasten hängt vom Browser ab.
Die Webanwendung sollte das Ereignis verarbeiten, indem sie zuerst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufruft, um dessen Standardaktion abzubrechen.
Einige Tastenkombinationen werden zur Systemsteuerung verwendet oder bergen Datenschutzrisiken und können daher mit diesem Mechanismus nicht abgefangen und deaktiviert werden, beispielsweise <kbd>Ctrl+Alt+Delete</kbd> unter Windows.

Beachten Sie, dass einige Browser die Standardaktion für die Taste <kbd>Esc</kbd> bei aktiver Tastatursperre immer deaktivieren, sodass deren Drücken den Vollbildmodus nicht automatisch verlässt.
Da dies jedoch nicht garantiert ist, müssen Sie weiterhin `preventDefault()` aufrufen, um zu verhindern, dass das Drücken der Taste <kbd>Esc</kbd> den Vollbildmodus beendet.
Allgemeiner gesagt können Sie nicht davon ausgehen, dass die Standardaktion für irgendein Tastaturereignis standardmäßig deaktiviert ist.

Von Browsern wird erwartet, dass sie einen alternativen Mechanismus zum Verlassen des Vollbildmodus bereitstellen, wenn die Tastatursperre aktiviert ist.
Die meisten Browser verwenden die Taste <kbd>Esc</kbd>, um den normalen Vollbildmodus zu verlassen, und ein langes Drücken der Taste <kbd>Esc</kbd>, um die Tastatursperre zu verlassen.
Die Tastatursperre wird deaktiviert, wenn der Browser den Vollbildmodus verlässt.

### Sicherheitsaspekte

[Vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich.
Der Benutzer muss mit der Seite oder einem Benutzeroberflächenelement interagieren, damit diese Funktion funktioniert.

Der Vollbildmodus wird durch die [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/fullscreen","fullscreen")}} gesteuert.

Die Standard-Zulassungsliste für `screen-wake-lock` ist `self`.
Dies ermöglicht die Verwendung des Vollbildmodus in verschachtelten Frames derselben Herkunft, verhindert sie jedoch in Inhalten von Drittanbietern.
Die Verwendung durch Dritte kann aktiviert werden, indem der Server zunächst den Header `Permissions-Policy` setzt, um einer bestimmten Drittanbieter-Herkunft die Berechtigung zu erteilen.

```http
Permissions-Policy: fullscreen=(self b.example.com)
```

Anschließend muss dem Frame-Containerelement für Quellen dieser Herkunft das Attribut `allow="fullscreen"` hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="fullscreen"></iframe>
```

Die Berechtigung `fullscreen` der [Permissions API](/de/docs/Web/API/Permissions_API) kann verwendet werden, um zu prüfen, ob der Zugriff zur Verwendung des Modus `granted`, `denied` oder `prompt` ist (erfordert die Bestätigung einer Aufforderung durch den Benutzer).

## Beispiele

### Vollbildmodus anfordern

Dieses Beispiel schaltet das {{HTMLElement("video")}}-Element in den Vollbildmodus und wieder heraus, wenn die Tasten <kbd>Enter</kbd> oder <kbd>Shift</kbd> + <kbd>F</kbd> gedrückt werden.
Das Skript prüft mithilfe von [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement), ob sich das Dokument derzeit im Vollbildmodus befindet.
Wenn sich das Dokument im Vollbildmodus befindet, ruft es [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf, um diesen zu verlassen.
Andernfalls ruft es `requestFullscreen()` für das `<video>`-Element auf:

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

### Tastatursperre verwenden

Dieses Beispiel ist fast identisch mit dem vorherigen Beispiel, außer dass wir anfordern, den Vollbildmodus mit Tastatursperre zu öffnen.

#### JavaScript

```js hidden
const video = document.querySelector("video");
```

Der geänderte Code für den Tastenereignis-Listener wird unten gezeigt.

Der erste Unterschied besteht darin, dass wir das Ereignis für die Taste <kbd>Esc</kbd> im Vollbildmodus verarbeiten und `event.preventDefault()` aufrufen, um die Standardaktion zu deaktivieren, die darin bestehen würde, den Vollbildmodus zu verlassen.

Wie zuvor rufen wir `requestFullscreen()` auf, wenn <kbd>Enter</kbd> oder <kbd>Shift+F</kbd> gedrückt werden und der Vollbildmodus nicht aktiv ist.
In diesem Fall übergeben wir jedoch die Option `keyboardLock` mit dem Wert `"browser"`.

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

Wählen Sie den Frame aus und drücken Sie <kbd>Shift+F</kbd>.
Wenn die Seite den vollständigen Frame anzeigt, beachten Sie die vorübergehende Benachrichtigung oben auf der Seite, die erklärt, wie Sie den Vollbildmodus verlassen können.

{{embedlivesample("Using keyboard lock", , "400", "", "", "", "fullscreen")}}

### navigationUI verwenden

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus versetzt, indem `requestFullscreen()` auf dem [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) des Dokuments aufgerufen wird, dem Wurzel-{{HTMLElement("html")}}-Element des Dokuments.

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

Der Erfüllungs-Handler des Promise führt keine Aktion aus, aber wenn das Promise abgelehnt wird, wird durch den Aufruf von [`alert()`](/de/docs/Web/API/Window/alert) eine Fehlermeldung angezeigt.

### Die Option screen verwenden

Wenn Sie das Element auf dem primären Betriebssystembildschirm im Vollbildmodus anzeigen möchten, könnten Sie folgenden Code verwenden:

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

Die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) wird verwendet, um das [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt für das aktuelle Gerät abzurufen, das [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekte enthält, welche die verschiedenen verfügbaren Bildschirme repräsentieren.

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
