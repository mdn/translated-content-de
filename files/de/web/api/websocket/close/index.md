---
title: "WebSocket: close()-Methode"
short-title: close()
slug: Web/API/WebSocket/close
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebSockets API")}}

Die **`WebSocket.close()`**-Methode schließt die {{domxref("WebSocket")}}-Verbindung oder den Verbindungsversuch, falls vorhanden. Wenn die Verbindung bereits `CLOSED` ist, bewirkt diese Methode nichts.

> [!NOTE]
> Der Prozess des Schließens der Verbindung beginnt mit einem [Schluss-Handshake](https://www.rfc-editor.org/rfc/rfc6455.html#section-1.4), und die `close()`-Methode verwirft keine zuvor gesendeten Nachrichten, bevor dieser Schluss-Handshake beginnt; selbst wenn der Benutzeragent noch mit dem Senden dieser Nachrichten beschäftigt ist, wird der Handshake erst nach dem Versand der Nachrichten gestartet.

## Syntax

```js-nolint
close()
close(code)
close(code, reason)
```

### Parameter

- `code` {{optional_inline}}

  - : Ein ganzzahliger [WebSocket-Verbindungsschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5)-Wert, der einen Grund für die Schließung angibt:
    - Falls nicht angegeben, wird der Schlusscode für die Verbindung automatisch auf `1000` für eine normale Schließung gesetzt oder ansonsten auf [einen anderen Standardwert im Bereich `1001`-`1015`](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1), der den tatsächlichen Grund angibt, warum die Verbindung geschlossen wurde.
    - Falls angegeben, überschreibt der Wert dieses `code`-Parameters die automatische Einstellung des Schlusscodes für die Verbindung und legt stattdessen einen benutzerdefinierten Code fest. Der Wert muss eine Ganzzahl sein: entweder `1000` oder ein benutzerdefinierter Code aus dem Bereich `3000`-`4999`. Falls Sie einen `code`-Wert angeben, sollten Sie auch einen [`reason`](#reason)-Wert angeben.

- `reason` {{optional_inline}}

  - : Ein String, der einen benutzerdefinierten [WebSocket-Verbindungsschlussgrund](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6) bereitstellt (eine prägnante, für Menschen lesbare Erklärung für die Schließung). Der Wert darf nicht länger als 123 Bytes sein (in UTF-8 codiert).

    > [!NOTE]
    > Da [UTF-8 zwei bis vier Bytes verwendet](/de/docs/Glossary/UTF-8), um Zeichen zu kodieren, die nicht [ASCII](/de/docs/Glossary/ASCII) sind, würde ein `reason`-Wert von 123 Zeichen, der nicht-ASCII-Zeichen enthält, das Limit von 123 Bytes überschreiten.

    Falls Sie einen `reason`-Wert angeben, sollten Sie auch einen [`code`](#code)-Wert angeben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn [`code`](#code) weder eine Ganzzahl von `1000` noch eine Ganzzahl im Bereich `3000` – `4999` ist.
- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der UTF-8-codierte [`reason`](#reason)-Wert länger als 123 Bytes ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokollspezifikation)
