---
title: "Element: requestFullscreen()-Methode"
short-title: requestFullscreen()
slug: Web/API/Element/requestFullscreen
l10n:
  sourceCommit: 9740186550ed818e727ecc9906b499cdbe951cfc
---

{{APIRef("Fullscreen API")}}

Die Methode **`requestFullscreen()`** der Schnittstelle [`Element`](/de/docs/Web/API/Element) fordert asynchron an, das Element im Vollbildmodus anzuzeigen.

## Syntax

```js-nolint
requestFullscreen()
requestFullscreen(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das den Übergang in den Vollbildmodus steuert.
    Die folgenden Optionen sind verfügbar:
    - `keyboardLock` {{optional_inline}}
      - : Legt den Modus für die Tastatursperre fest.
        - `"none"`
          - : Es wird keine Tastatursperre aktiviert.
            Dies ist der Standardmodus.
        - `"browser"`
          - : Die Tastatursperre des Browsers wird aktiviert.
            In diesem Modus leitet der Browser Tastaturereignisse an die Anwendung weiter, die normalerweise vom Browser oder Betriebssystem verarbeitet würden.
            Anwendungen sollten Ereignisse für die Tasten und Tastenkombinationen abfangen, die sie verwenden möchten, und [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um die jeweiligen Standardaktionen zu verhindern.

            Beachten Sie, dass einige Browser die Standardaktion für bestimmte Tasten deaktivieren können, beispielsweise für die Taste, mit der normalerweise der Vollbildmodus beendet wird. Da dies nicht garantiert ist, sollten Sie immer `preventDefault()` aufrufen.
            Browser sollten außerdem eine Möglichkeit bereitstellen, den Vollbildmodus bei aktiver Tastatursperre zu beenden.

            Weitere Informationen finden Sie im Abschnitt [Tastatursperre](#tastatursperre).

    - `navigationUI` {{optional_inline}}
      - : Legt fest, ob die Navigationsoberfläche angezeigt wird, während sich das Element im Vollbildmodus befindet.
        Der Standardwert ist `"auto"`; damit entscheidet der Browser über die Anzeige.
        - `"hide"`
          - : Die Navigationsoberfläche des Browsers wird ausgeblendet, und die gesamte Bildschirmfläche steht für die Anzeige des Elements zur Verfügung.
        - `"show"`
          - : Der Browser zeigt Steuerelemente zur Seitennavigation und gegebenenfalls weitere Oberflächenelemente an. Die Abmessungen des Elements (und die wahrgenommene Bildschirmgröße) werden begrenzt, um Platz für diese Oberfläche zu lassen.
        - `"auto"`
          - : Der Browser wählt eine der oben genannten Einstellungen.
            Dies ist der Standardwert.
    - `screen` {{optional_inline}} {{experimental_inline}}
      - : Gibt an, auf welchem Bildschirm das Element im Vollbildmodus angezeigt werden soll.
        Als Wert wird ein [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekt übergeben, das den ausgewählten Bildschirm repräsentiert.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit dem Wert `undefined` erfüllt wird, sobald der Übergang in den Vollbildmodus abgeschlossen ist, oder andernfalls mit einer Ausnahme zurückgewiesen wird.

### Ausnahmen

Bei einem Fehler wird das zurückgegebene `Promise` mit einem der folgenden Werte zurückgewiesen:

- {{jsxref("TypeError")}}
  - : Die Ausnahme `TypeError` kann in den folgenden Situationen auftreten:
    - Das Dokument, das das Element enthält, ist nicht vollständig aktiv, also nicht das derzeit aktive Dokument.
    - Das Element ist in keinem Dokument enthalten.
    - Das Element darf die Funktion `fullscreen` nicht verwenden, entweder aufgrund der Konfiguration der [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) oder aufgrund anderer Zugriffskontrollen.
    - Das Element und sein Dokument sind derselbe Knoten.
    - Das Element ist ein [Popover](/de/docs/Web/API/Popover_API), das bereits über [`HTMLElement.showPopover()`](/de/docs/Web/API/HTMLElement/showPopover) angezeigt wird.

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der übergebene Parameter `options.keyboardLock` wird vom Browser nicht unterstützt.

## Beschreibung

Die Methode **`requestFullscreen()`** fordert asynchron an, das Element im Vollbildmodus anzuzeigen.

Für die Methode ist eine Berechtigung erforderlich.

- Wird die Berechtigung zum Aktivieren des Vollbildmodus erteilt, wird das zurückgegebene {{JSxRef("Promise")}} erfüllt und das Element empfängt ein [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)-Ereignis, das den Wechsel in den Vollbildmodus signalisiert.
- Wird die Berechtigung verweigert, wird das Promise zurückgewiesen und das Element empfängt stattdessen ein [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)-Ereignis.

Wenn das Element vom ursprünglichen Dokument getrennt wurde, empfängt stattdessen das Dokument diese Ereignisse.

### Geeignete Elemente

Ein Element, das im Vollbildmodus angezeigt werden soll, muss einige einfache Voraussetzungen erfüllen:

- Es muss eines der Standard-HTML-Elemente oder {{SVGElement("svg")}} oder {{MathMLElement("math")}} sein.
- Es darf _kein_ {{HTMLElement("dialog")}}-Element sein.
- Es muss sich entweder im obersten Dokument oder in einem {{HTMLElement("iframe")}} befinden, das über das Attribut [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen) verfügt.

Außerdem muss ein gegebenenfalls gesetzter {{httpheader("Permissions-Policy")}}-Header die Verwendung der Funktion `fullscreen` erlauben.

### Aktivierung des Vollbildmodus erkennen

Ob der Wechsel in den Vollbildmodus erfolgreich war, können Sie anhand des von `requestFullscreen()` zurückgegebenen {{jsxref("Promise")}} feststellen, wie in den folgenden [Beispielen](#beispiele) gezeigt.

Wenn Sie erkennen möchten, wann anderer Code den Vollbildmodus aktiviert oder deaktiviert, sollten Sie auf dem [`Document`](/de/docs/Web/API/Document) einen Listener für das Ereignis [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event) einrichten.
Auf `fullscreenchange` zu reagieren ist auch wichtig, um beispielsweise zu erkennen, wenn Benutzer den Vollbildmodus manuell umschalten oder zu einer anderen Anwendung wechseln, sodass Ihre Anwendung den Vollbildmodus vorübergehend verlässt.

### Tastatursperre

Mit der Tastatursperre kann eine Anwendung im Vollbildmodus bestimmte Tasten und Tastenkombinationen abfangen und verarbeiten, die andernfalls ausschließlich vom Browser oder vom zugrunde liegenden Betriebssystem verarbeitet würden.
Dies kann beispielsweise die Benutzererfahrung bei Spielen verbessern, weil die Taste <kbd>Esc</kbd> dann als Menütaste verwendet werden kann, statt den Vollbildmodus zu beenden.
Auch für Anwendungen zur Fernsteuerung eines Desktops ist dies nützlich, wenn nahezu alle Tastaturereignisse an den entfernten Computer weitergeleitet werden sollen.

Die Tastatursperre wird aktiviert, indem beim Aktivieren des Vollbildmodus für den Parameter [`options.keyboardLock`](#keyboardlock) der Wert `"browser"` übergeben wird.
Ist die Tastatursperre im Vollbildmodus aktiv, leitet der Browser „wesentlich mehr“ Tastaturereignisse an die Anwendung weiter. Welche Tasten genau betroffen sind, hängt vom Browser ab.
Die Webanwendung sollte bei der Verarbeitung eines solchen Ereignisses zunächst [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um dessen Standardaktion zu verhindern.
Einige Tastenkombinationen dienen der Systemsteuerung oder bergen Datenschutzrisiken. Sie können daher mit diesem Mechanismus nicht abgefangen und deaktiviert werden (beispielsweise <kbd>Ctrl+Alt+Delete</kbd> unter Windows).

Beachten Sie, dass einige Browser bei aktiver Tastatursperre die Standardaktion für <kbd>Esc</kbd> immer deaktivieren, sodass ein Tastendruck den Vollbildmodus nicht automatisch beendet.
Da dies jedoch nicht garantiert ist, müssen Sie weiterhin `preventDefault()` aufrufen, um zu verhindern, dass ein Druck auf <kbd>Esc</kbd> den Vollbildmodus beendet.
Allgemein können Sie nicht davon ausgehen, dass die Standardaktion eines Tastaturereignisses automatisch deaktiviert ist.

Von Browsern wird erwartet, dass sie bei aktivierter Tastatursperre eine alternative Möglichkeit zum Beenden des Vollbildmodus bereitstellen.
Die meisten Browser verwenden <kbd>Esc</kbd>, um den normalen Vollbildmodus zu beenden, und ein längeres Gedrückthalten von <kbd>Esc</kbd>, um die Tastatursperre zu verlassen.
Die Tastatursperre wird deaktiviert, wenn der Browser den Vollbildmodus verlässt.

### Sicherheitsaspekte

Eine [vorübergehende Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation) ist erforderlich.
Damit diese Funktion verwendet werden kann, müssen Benutzer mit der Seite oder einem Oberflächenelement interagieren.

Der Vollbildmodus wird durch die [Permissions-Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)-Direktive {{HTTPHeader("Permissions-Policy/fullscreen","fullscreen")}} gesteuert.

Die standardmäßige Zulassungsliste für `fullscreen` lautet `self`.
Damit ist die Verwendung des Vollbildmodus in eingebetteten Frames desselben Ursprungs möglich, nicht jedoch in Inhalten von Drittanbietern.
Die Verwendung durch Drittanbieter kann aktiviert werden, indem der Server zunächst den Header `Permissions-Policy` so setzt, dass er einem bestimmten Drittanbieter-Ursprung die Berechtigung erteilt.

```http
Permissions-Policy: fullscreen=(self b.example.com)
```

Anschließend muss dem Frame-Container-Element für Quellen von diesem Ursprung das Attribut `allow="fullscreen"` hinzugefügt werden:

```html
<iframe src="https://b.example.com" allow="fullscreen"></iframe>
```

Mit der Berechtigung `fullscreen` der [Permissions API](/de/docs/Web/API/Permissions_API) können Sie prüfen, ob der Zugriff auf den Modus `granted` (gewährt), `denied` (verweigert) oder `prompt` (Benutzerbestätigung erforderlich) ist.

## Beispiele

### Vollbildmodus anfordern

Dieses Beispiel schaltet das {{HTMLElement("video")}}-Element in den Vollbildmodus und wieder zurück, wenn <kbd>Enter</kbd> oder <kbd>Shift</kbd> + <kbd>F</kbd> gedrückt wird.
Das Skript prüft mithilfe von [`document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement), ob sich das Dokument derzeit im Vollbildmodus befindet.
Ist dies der Fall, ruft es [`document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen) auf, um den Modus zu beenden.
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

Dieses Beispiel entspricht weitgehend dem vorherigen. Allerdings wird der Vollbildmodus hier mit Tastatursperre angefordert.

#### JavaScript

```js hidden
const video = document.querySelector("video");
```

Der angepasste Code für den Listener für Tastaturereignisse ist unten dargestellt.

Der erste Unterschied besteht darin, dass wir das Ereignis für <kbd>Esc</kbd> im Vollbildmodus verarbeiten und `event.preventDefault()` aufrufen, um die Standardaktion zu verhindern (die den Vollbildmodus beenden würde).

Wie zuvor rufen wir `requestFullscreen()` auf, wenn außerhalb des Vollbildmodus <kbd>Enter</kbd> oder <kbd>Shift+F</kbd> gedrückt wird.
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

#### Ergebnis

Wählen Sie den Frame aus und drücken Sie <kbd>Shift+F</kbd>.
Wenn die Seite den Frame vollständig ausfüllt, beachten Sie den vorübergehenden Hinweis am oberen Seitenrand, der erklärt, wie Sie den Vollbildmodus beenden können.

{{embedlivesample("Using keyboard lock", , "400", "", "", "", "fullscreen")}}

### navigationUI verwenden

In diesem Beispiel wird das gesamte Dokument in den Vollbildmodus versetzt, indem `requestFullscreen()` für [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) aufgerufen wird, das {{HTMLElement("html")}}-Wurzelelement des Dokuments.

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

Der Handler für die Erfüllung des Promise führt keine Aktion aus. Wird das Promise jedoch zurückgewiesen, wird durch einen Aufruf von [`alert()`](/de/docs/Web/API/Window/alert) eine Fehlermeldung angezeigt.

### Die Option screen verwenden

Wenn Sie das Element auf dem primären Bildschirm des Betriebssystems im Vollbildmodus anzeigen möchten, können Sie beispielsweise folgenden Code verwenden:

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

Die Methode [`Window.getScreenDetails()`](/de/docs/Web/API/Window/getScreenDetails) wird verwendet, um das [`ScreenDetails`](/de/docs/Web/API/ScreenDetails)-Objekt für das aktuelle Gerät abzurufen. Dieses enthält [`ScreenDetailed`](/de/docs/Web/API/ScreenDetailed)-Objekte, die die verschiedenen verfügbaren Bildschirme repräsentieren.

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
