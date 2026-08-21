---
title: "Window: close() Methode"
short-title: close()
slug: Web/API/Window/close
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

Die **`Window.close()`** Methode schließt das aktuelle Fenster oder
das Fenster, auf dem sie aufgerufen wurde.

Fenster sind _skript-schließbar_, wenn sie durch Webinhalte erstellt wurden. Dies umfasst im Allgemeinen:

- Fenster, die mit [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurden
- Fenster, die über Webinhalte wie Links (`<a target="_blank">`) oder Formulare (`<form target="_blank">`) geöffnet wurden, ohne Benutzeraktionen mit Modifikator

Fenster, die durch Browser-UI-Aktionen geöffnet werden — wie Rechtsklick → In neuem Tab öffnen, Strg+Klick, Umschalt+Klick oder Mittelklick — sind oft nicht skript-schließbar. Sie können nur geschlossen werden, wenn sie nicht navigiert wurden (Verlaufslänge bleibt 1). Ein Aufruf von `close()` zeigt andernfalls typischerweise eine Konsolenwarnung: `Scripts may not close windows that were not opened by script.`

Beachten Sie auch, dass `close()` keine Wirkung zeigt, wenn es auf [`Window`](/de/docs/Web/API/Window)
Objekte angewendet wird, die durch
[`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) zurückgegeben werden.

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

Dieses Beispiel zeigt eine Methode zum Öffnen eines Fensters und eine zweite, die das Fenster schließt; dies demonstriert, wie `Window.close()` verwendet werden kann, um ein Fenster zu schließen, das durch Aufruf von [`window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde.

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
