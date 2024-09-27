---
title: "Window: close() Methode"
short-title: close()
slug: Web/API/Window/close
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die **`Window.close()`**-Methode schließt das aktuelle Fenster oder das Fenster, auf dem sie aufgerufen wurde.

Diese Methode kann nur auf Fenstern aufgerufen werden, die durch ein Skript mit der [`Window.open()`](/de/docs/Web/API/Window/open)-Methode geöffnet wurden, oder auf obersten Fenstern, die nur einen einzelnen Verlaufseintrag haben. Wenn das Fenster diese Anforderungen nicht erfüllt, erscheint eine Fehlermeldung im Konsolenprotokoll, ähnlich wie diese: `Scripts may not close windows that were not opened by script.`

Beachten Sie auch, dass `close()` keine Wirkung hat, wenn es auf [`Window`](/de/docs/Web/API/Window)-Objekten aufgerufen wird, die von [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) zurückgegeben werden.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Schließen eines mit `window.open()` geöffneten Fensters

Dieses Beispiel zeigt eine Methode, die ein Fenster öffnet, und eine zweite Methode, die das Fenster schließt. Dies demonstriert, wie `Window.close()` verwendet wird, um ein von [`window.open()`](/de/docs/Web/API/Window/open) geöffnetes Fenster zu schließen.

```js
//Global variable to store a reference to the opened window
let openedWindow;

function openWindow() {
  openedWindow = window.open("moreinfo.htm");
}

function closeOpenedWindow() {
  openedWindow.close();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
