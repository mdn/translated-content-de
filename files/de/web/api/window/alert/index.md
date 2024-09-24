---
title: "Window: alert()-Methode"
short-title: alert()
slug: Web/API/Window/alert
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{ APIRef }}

Die `window.alert()`-Methode veranlasst den Browser, ein Dialogfenster mit einer optionalen Nachricht anzuzeigen und darauf zu warten, dass der Benutzer das Dialogfenster schließt.

Unter bestimmten Bedingungen — zum Beispiel, wenn der Benutzer die Tabs wechselt — könnte der Browser tatsächlich keinen Dialog anzeigen oder nicht auf die Bestätigung des Benutzers warten.

## Syntax

```js-nolint
alert()
alert(message)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein String, den Sie im Dialogfenster anzeigen möchten, oder alternativ ein Objekt, das in einen String konvertiert und angezeigt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
window.alert("Hello world!");
alert("Hello world!");
```

Beide erzeugen:

![Schwarzes Dialogfenster. Oben links ein kleines Kreissymbol, gefolgt von weißen offenen und geschlossenen eckigen Klammern mit folgendem weißen Text: JavaScript-Anwendung. Links unten ein weißer Text: Hello world!. Und unten rechts ein kleiner blauer Knopf. Der Text des Knopfes ist: ok in schwarz.](alerthelloworld.png)

## Anmerkungen

Das Alert-Dialogfenster sollte für Nachrichten verwendet werden, die keine weitere Reaktion vom Benutzer erfordern, außer der Bestätigung der Nachricht.

Dialogfelder sind modale Fenster - sie verhindern, dass der Benutzer auf die restliche Benutzeroberfläche des Programms zugreift, bis das Dialogfeld geschlossen wird. Aus diesem Grund sollten Sie keine Funktion übermäßig benutzen, die ein Dialogfeld (oder modales Fenster) erstellt.

Alternativ kann das {{HTMLElement("dialog")}}-Element verwendet werden, um Warnungen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}}-Element
- {{domxref("window.confirm","confirm")}}
- {{domxref("window.prompt","prompt")}}
