---
title: "Window: alert()-Methode"
short-title: alert()
slug: Web/API/Window/alert
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{ APIRef }}

`window.alert()` weist den Browser an, ein Dialogfeld mit einer optionalen Nachricht anzuzeigen und zu warten, bis der Benutzer das Dialogfeld schließt.

Unter bestimmten Bedingungen – zum Beispiel, wenn der Benutzer die Tabs wechselt – kann es sein, dass der Browser tatsächlich kein Dialogfeld anzeigt oder nicht darauf wartet, dass der Benutzer das Dialogfeld schließt.

## Syntax

```js-nolint
alert()
alert(message)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein String, den Sie im Warnungsdialog anzeigen möchten, oder alternativ ein Objekt, das in einen String konvertiert und angezeigt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
window.alert("Hello world!");
alert("Hello world!");
```

Beide erzeugen:

![Schwarzes Warnungsdialogfeld. Oben links ein kleines Kreissymbol, gefolgt von weißen geöffneten und geschlossenen eckigen Klammern, die diesen weißen Text enthalten: JavaScript-Anwendung. Unten links ein weißer Text: Hallo Welt! Und unten rechts ein kleiner blauer Button. Der Text des Buttons ist: ok in schwarz.](alerthelloworld.png)

## Hinweise

Der Warnungsdialog sollte für Nachrichten verwendet werden, die keine Antwort des Benutzers erfordern, außer der Bestätigung der Nachricht.

Dialogfelder sind modale Fenster – sie verhindern, dass der Benutzer auf den Rest der Benutzeroberfläche des Programms zugreift, bis das Dialogfeld geschlossen wird. Aus diesem Grund sollten Sie nicht übermäßig viele Funktionen verwenden, die ein Dialogfeld (oder modales Fenster) erstellen.

Alternativ kann das {{HTMLElement("dialog")}}-Element verwendet werden, um Warnungen anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}}-Element
- [`confirm`](/de/docs/Web/API/Window/confirm)
- [`prompt`](/de/docs/Web/API/Window/prompt)
