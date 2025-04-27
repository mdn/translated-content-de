---
title: "Window: close() Methode"
short-title: close()
slug: Web/API/Window/close
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef}}

Die **`Window.close()`**-Methode schließt das aktuelle Fenster oder das Fenster, auf dem sie aufgerufen wurde.

Diese Methode kann nur für Fenster aufgerufen werden, die durch ein Skript mit der Methode [`Window.open()`](/de/docs/Web/API/Window/open) geöffnet wurden oder für top-level Fenster, die nur einen einzigen Verlaufseintrag haben. Wenn das Fenster diese Anforderungen nicht erfüllt, erscheint ein Fehler ähnlich diesem in der Konsole: `Scripts may not close windows that were not opened by script.`

Beachten Sie auch, dass `close()` keine Wirkung hat, wenn sie auf [`Window`](/de/docs/Web/API/Window)-Objekten aufgerufen wird, die von [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) zurückgegeben werden.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Schließen eines Fensters, das mit `window.open()` geöffnet wurde

Dieses Beispiel zeigt eine Methode, die ein Fenster öffnet, und eine zweite, die das Fenster schließt; dies demonstriert, wie `Window.close()` verwendet wird, um ein Fenster zu schließen, das durch Aufruf von [`window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde.

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
