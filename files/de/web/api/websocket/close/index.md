---
title: "WebSocket: close() Methode"
short-title: close()
slug: Web/API/WebSocket/close
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die **`WebSocket.close()`** Methode schließt die
[`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung oder den Verbindungsversuch, falls vorhanden. Wenn die Verbindung bereits `CLOSED` ist, macht diese Methode nichts.

> [!NOTE]
> Der Vorgang zum Schließen der Verbindung beginnt mit einem [closing handshake](https://www.rfc-editor.org/rfc/rfc6455.html#section-1.4), und die `close()` Methode verwirft keine zuvor gesendeten Nachrichten, bevor der closing handshake beginnt; selbst wenn der Benutzeragent noch damit beschäftigt ist, diese Nachrichten zu senden, beginnt der Handshake erst, nachdem die Nachrichten gesendet wurden.

## Syntax

```js-nolint
close()
close(code)
close(code, reason)
```

### Parameter

- `code` {{optional_inline}}
  - : Ein ganzzahliger [WebSocket-Verbindungs-Schließcode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5), der einen Grund für die Schließung angibt:
    - Wenn nicht angegeben, wird der Schließcode für die Verbindung automatisch auf `1000` für eine normale Schließung gesetzt; andernfalls auf [einen anderen Standardwert im Bereich `1001`-`1015`](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1), der den tatsächlichen Grund für die Schließung der Verbindung angibt.
    - Wenn angegeben, überschreibt der Wert dieses `code`-Parameters die automatische Einstellung des Schließcodes für die Verbindung und setzt stattdessen einen benutzerdefinierten Code.
      Der Wert muss eine Ganzzahl sein: entweder `1000` oder ein benutzerdefinierter Code Ihrer Wahl im Bereich `3000`-`4999`. Wenn Sie einen `code`-Wert angeben, sollten Sie auch einen [`reason`](#reason)-Wert angeben.

- `reason` {{optional_inline}}
  - : Ein String, der einen benutzerdefinierten [WebSocket-Verbindungs-Schließungsgrund](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6) bietet (eine kurze, für Menschen lesbare Erklärung für die Schließung). Der Wert darf nicht länger als 123 Bytes (in UTF-8 kodiert) sein.

    > [!NOTE]
    > Da {{Glossary("UTF-8", "UTF-8 zwei bis vier Bytes verwendet")}}, um nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen zu kodieren, würde ein 123-Zeichen-langer `reason`-Wert, der nicht-ASCII-Zeichen enthält, das 123-Byte-Limit überschreiten.

    Wenn Sie einen `reason`-Wert angeben, sollten Sie auch einen [`code`](#code)-Wert angeben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`code`](#code) weder eine Ganzzahl gleich `1000` noch eine Ganzzahl im Bereich `3000` – `4999` ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der in UTF-8-kodierte [`reason`](#reason)-Wert länger als 123 Bytes ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokoll-Spezifikation)
