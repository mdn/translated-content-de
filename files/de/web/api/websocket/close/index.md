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
> Der Prozess des Schließens der Verbindung beginnt mit einem [Schließhandshake](https://www.rfc-editor.org/rfc/rfc6455.html#section-1.4), und die `close()`-Methode verwirft keine zuvor gesendeten Nachrichten, bevor dieser Schließhandshake beginnt; auch wenn der Benutzeragent noch damit beschäftigt ist, diese Nachrichten zu senden, wird der Handshake erst gestartet, nachdem die Nachrichten gesendet wurden.

## Syntax

```js-nolint
close()
close(code)
close(code, reason)
```

### Parameter

- `code` {{optional_inline}}

  - : Ein ganzzahliger [WebSocket-Verbindungsschlusscode](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.5), der einen Grund für die Schließung angibt:
    - Wenn nicht angegeben, wird der Verbindung automatisch ein Schlusscode zugewiesen: `1000` für eine normale Schließung oder ansonsten ein [anderer Standardwert im Bereich `1001`-`1015`](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.4.1), der den tatsächlichen Grund für die Beendigung der Verbindung angibt.
    - Wenn angegeben, überschreibt der Wert dieses `code`-Parameters die automatische Festlegung des Schlusscodes der Verbindung und setzt stattdessen einen benutzerdefinierten Code.
      Der Wert muss eine Ganzzahl sein: entweder `1000` oder ein benutzerdefinierter Code Ihrer Wahl im Bereich `3000`-`4999`. Wenn Sie einen `code`-Wert angeben, sollten Sie auch einen [`reason`](#reason)-Wert angeben.

- `reason` {{optional_inline}}

  - : Eine Zeichenkette, die einen benutzerdefinierten [Grund für die Beendigung der WebSocket-Verbindung](https://www.rfc-editor.org/rfc/rfc6455.html#section-7.1.6) (eine prägnante und menschenlesbare Erklärung für die Schließung) liefert. Der Wert darf nicht länger als 123 Byte (in UTF-8 kodiert) sein.

    > [!NOTE]
    > Da {{Glossary("UTF-8", "UTF-8 zwei bis vier Bytes")}} benötigt, um beliebige nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen zu kodieren, würde ein 123-Zeichen `reason`-Wert, der nicht-ASCII-Zeichen enthält, das 123-Byte-Limit überschreiten.

    Wenn Sie einen `reason`-Wert angeben, sollten Sie auch einen [`code`](#code)-Wert angeben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`code`](#code) weder eine Ganzzahl gleich `1000` noch eine Ganzzahl im Bereich `3000` – `4999` ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der in UTF-8 kodierte [`reason`](#reason)-Wert länger als 123 Bytes ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455](https://www.rfc-editor.org/rfc/rfc6455.html) (die WebSocket-Protokollspezifikation)
