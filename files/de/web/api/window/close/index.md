---
title: "Window: close()-Methode"
short-title: close()
slug: Web/API/Window/close
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die **`Window.close()`**-Methode schließt das aktuelle Fenster oder
das Fenster, auf dem sie aufgerufen wurde.

Diese Methode kann nur auf Fenstern aufgerufen werden, die durch ein Skript mit der [`Window.open()`](/de/docs/Web/API/Window/open)-Methode geöffnet wurden, oder auf Top-Level-Fenstern, die nur einen Eintrag in der Verlaufsliste haben. Wenn das Fenster diese Anforderungen nicht erfüllt, erscheint im Konsolenprotokoll ein Fehler ähnlich diesem:
`Scripts may not close windows that were not opened by script.`

Beachten Sie auch, dass `close()` keine Wirkung hat, wenn es auf [`Window`](/de/docs/Web/API/Window)
-Objekte angewendet wird, die von
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

Dieses Beispiel zeigt eine Methode, die ein Fenster öffnet, und eine zweite, die das Fenster schließt. Dies demonstriert, wie `Window.close()` verwendet wird, um ein Fenster zu schließen, das durch Aufrufen von [`window.open()`](/de/docs/Web/API/Window/open) geöffnet wurde.

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
