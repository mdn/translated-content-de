---
title: "Window: alert() Methode"
short-title: alert()
slug: Web/API/Window/alert
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{ APIRef }}

`window.alert()` weist den Browser an, einen Dialog mit einer optionalen Nachricht anzuzeigen und zu warten, bis der Benutzer den Dialog schließt.

Unter bestimmten Bedingungen – zum Beispiel, wenn der Benutzer die Tabs wechselt – kann es vorkommen, dass der Browser tatsächlich keinen Dialog anzeigt oder nicht darauf wartet, dass der Benutzer den Dialog schließt.

## Syntax

```js-nolint
alert()
alert(message)
```

### Parameter

- `message` {{optional_inline}}
  - : Ein String, den Sie im Alert-Dialog anzeigen möchten, oder alternativ ein Objekt, das in einen String umgewandelt und angezeigt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
window.alert("Hello world!");
alert("Hello world!");
```

Beide erzeugen:

![Schwarzes Alarmdialogfeld. Oben links ein kleines Kreissymbol, gefolgt von weißen offenen und geschlossenen eckigen Klammern, die diesen weißen Text enthalten: JavaScript-Anwendung. Darunter links ein "Hello world!"-Text in Weiß. Und unten rechts ein kleiner blauer Knopf. Der Text des Knopfs ist: ok in Schwarz.](alerthelloworld.png)

## Hinweise

Der Alert-Dialog sollte für Nachrichten verwendet werden, die keine Antwort des Benutzers erfordern, abgesehen von der Bestätigung der Nachricht.

Dialogboxen sind modale Fenster - sie verhindern, dass der Benutzer auf den Rest der Programmoberfläche zugreift, bis die Dialogbox geschlossen wird. Aus diesem Grund sollten Sie eine Funktion, die eine Dialogbox (oder ein modales Fenster) erzeugt, nicht übermäßig verwenden.

Alternativ kann das {{HTMLElement("dialog")}} Element verwendet werden, um Alarme anzuzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("dialog")}} element
- [`confirm`](/de/docs/Web/API/Window/confirm)
- [`prompt`](/de/docs/Web/API/Window/prompt)
