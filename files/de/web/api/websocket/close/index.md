---
title: "WebSocket: close()-Methode"
short-title: close()
slug: Web/API/WebSocket/close
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die **`WebSocket.close()`**-Methode schließt die
[`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung oder den Verbindungsversuch, falls vorhanden. Wenn die Verbindung bereits `CLOSED` ist, tut diese Methode nichts.

> [!NOTE]
> Der Prozess des Schließens der Verbindung beginnt mit einem [Schließungshandshake](https://www.rfc-editor.org/rfc/rfc6455.html#section-1.4), und die `close()`-Methode verwirft keine zuvor gesendeten Nachrichten, bevor dieser Schließungshandshake beginnt; selbst wenn der User-Agent noch mit dem Senden dieser Nachrichten beschäftigt ist, beginnt der Handshake erst, nachdem die Nachrichten gesendet wurden.

## Syntax

```js-nolint
close()
close(code)
close(code, reason)
```

### Parameter

- `code` {{optional_inline}}

  - : Ein ganzzahliger [WebSocket-Verbindungs-Schließungscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5), der einen Grund für die Schließung angibt:
    - Wenn nicht angegeben, wird automatisch ein Schließungscode für die Verbindung festgelegt: `1000` für eine normale Schließung oder ein [anderer Standardwert im Bereich `1001`-`1015`](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1), der den tatsächlichen Grund dafür angibt, warum die Verbindung geschlossen wurde.
    - Wenn angegeben, überschreibt der Wert dieses `code`-Parameters die automatische Festlegung des Schließungscodes für die Verbindung und legt stattdessen einen benutzerdefinierten Code fest.
      Der Wert muss eine Ganzzahl sein: entweder `1000` oder ein benutzerdefinierter Code Ihrer Wahl im Bereich `3000`-`4999`. Wenn Sie einen `code`-Wert angeben, sollten Sie ebenfalls einen [`reason`](#reason)-Wert angeben.

- `reason` {{optional_inline}}

  - : Ein String, der einen benutzerdefinierten [WebSocket-Verbindungs-Schließungsgrund](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6) bereitstellt (eine kurze, leicht verständliche Erklärung für die Schließung). Der Wert darf nicht länger als 123 Bytes sein (kodiert in UTF-8).

    > [!NOTE]
    > Da [UTF-8 zwei bis vier Bytes verwendet](/de/docs/Glossary/UTF-8), um nicht-[ASCII](/de/docs/Glossary/ASCII)-Zeichen zu kodieren, würde ein `reason`-Wert von 123 Zeichen mit Nicht-ASCII-Zeichen das 123-Byte-Limit überschreiten.

    Wenn Sie einen `reason`-Wert angeben, sollten Sie ebenfalls einen [`code`](#code)-Wert angeben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`code`](#code) weder eine Ganzzahl gleich `1000` noch eine Ganzzahl im Bereich `3000` – `4999` ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der UTF-8-kodierte [`reason`](#reason)-Wert länger als 123 Bytes ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokollspezifikation)
