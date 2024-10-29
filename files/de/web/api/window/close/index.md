---
title: "Window: close() Methode"
short-title: close()
slug: Web/API/Window/close
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{APIRef}}

Die **`Window.close()`** Methode schließt das aktuelle Fenster oder das Fenster, auf dem sie aufgerufen wurde.

Diese Methode kann nur auf Fenstern aufgerufen werden, die durch ein Skript mit der [`Window.open()`](/de/docs/Web/API/Window/open) Methode geöffnet wurden, oder auf obersten Fenstern, die nur einen Verlaufseintrag haben. Wenn das Fenster diese Anforderungen nicht erfüllt, erscheint ein Fehler, ähnlich diesem, in der Konsole:
`Scripts may not close windows that were not opened by script.`

Beachten Sie auch, dass `close()` keine Wirkung hat, wenn es auf [`Window`](/de/docs/Web/API/Window) Objekten aufgerufen wird, die von [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) zurückgegeben werden.

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

Dieses Beispiel zeigt eine Methode, die ein Fenster öffnet und eine zweite, die das Fenster schließt; es demonstriert, wie man `Window.close()` verwendet, um ein Fenster zu schließen, das durch Aufrufen von [`window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde.

```js
//Global variable to store a reference to the opened window
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
