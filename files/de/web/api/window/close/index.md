---
title: "Window: close() Methode"
short-title: close()
slug: Web/API/Window/close
l10n:
  sourceCommit: 2d37dd97bab97f39457bef2d89e7f525362d8602
---

{{APIRef}}

Die **`Window.close()`**-Methode schließt das aktuelle Fenster oder das Fenster, auf dem sie aufgerufen wurde.

Fenster sind _skript-schließbar_, wenn sie durch Webinhalte erstellt wurden. Dies umfasst im Allgemeinen:

- Fenster, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurden
- Fenster, die über Webinhalte ohne Nutzer-Maßnahmen geöffnet wurden, wie Links (`<a target="_blank">`) oder Formulare (`<form target="_blank">`)

Fenster, die durch Browser-Oberflächenaktionen geöffnet wurden — wie Rechtsklick → In neuem Tab öffnen, Strg+Klick, Umschalt+Klick oder Mittelklick — sind oft nicht skript-schließbar. Sie können möglicherweise nur geschlossen werden, wenn sie nicht navigiert wurden (die Historienlänge bleibt 1). Ein Aufruf von `close()` zeigt ansonsten typischerweise eine Konsolenwarnung an: `Scripts may not close windows that were not opened by script.`

Beachten Sie auch, dass `close()` keine Wirkung hat, wenn es auf [`Window`](/de/docs/Web/API/Window) Objekte aufgerufen wird, die von [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) zurückgegeben werden.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Schließen eines Fensters, das mit `window.open()` geöffnet wurde

Dieses Beispiel zeigt eine Methode zum Öffnen eines Fensters und eine zweite, um das Fenster zu schließen; es demonstriert, wie `Window.close()` verwendet wird, um ein mit [`window.open()`](/de/docs/Web/API/Window/open) geöffnetes Fenster zu schließen.

```js
// Global variable to store a reference to the opened window
let openedWindow;

function openWindow() {
  openedWindow = window.open("more-info.htm");
}

function closeOpenedWindow() {
  openedWindow.close();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
