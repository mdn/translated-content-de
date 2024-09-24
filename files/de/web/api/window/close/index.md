---
title: "Window: close()-Methode"
short-title: close()
slug: Web/API/Window/close
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Die **`Window.close()`**-Methode schließt das aktuelle Fenster oder das Fenster, auf dem sie aufgerufen wurde.

Diese Methode kann nur auf Fenstern aufgerufen werden, die durch ein Skript mit der Methode {{domxref("Window.open()")}} geöffnet wurden oder auf obersten Fenstern, die nur einen einzigen Verlaufseintrag haben. Wenn das Fenster diese Anforderungen nicht erfüllt, erscheint eine Fehlermeldung im Konsolenprotokoll, ähnlich dieser:
`Scripts may not close windows that were not opened by script.`

Beachten Sie auch, dass `close()` keine Wirkung hat, wenn sie auf {{domxref("Window")}}-Objekten aufgerufen wird, die von [`HTMLIFrameElement.contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) zurückgegeben werden.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

### Schließen eines Fensters, das mit `window.open()` geöffnet wurde

Dieses Beispiel zeigt eine Methode, die ein Fenster öffnet, und eine zweite, die das Fenster schließt. Dies demonstriert, wie `Window.close()` verwendet wird, um ein Fenster zu schließen, das durch den Aufruf von {{domxref("window.open()")}} geöffnet wurde.

```js
// Globale Variable zur Speicherung einer Referenz auf das geöffnete Fenster
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
