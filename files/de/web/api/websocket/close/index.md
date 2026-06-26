---
title: "WebSocket: close()-Methode"
short-title: close()
slug: Web/API/WebSocket/close
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die **`WebSocket.close()`**-Methode schließt die
[`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung oder einen Verbindungsversuch, falls vorhanden. Wenn die Verbindung bereits `CLOSED` ist, tut diese Methode nichts.

> [!NOTE]
> Der Prozess des Schließens der Verbindung beginnt mit einem [Schließungshandshake](https://www.rfc-editor.org/info/rfc6455/#section-1.4), und die `close()`-Methode verwirft keine zuvor gesendeten Nachrichten, bevor der Schließungshandshake beginnt; selbst wenn der Benutzeragent immer noch mit dem Senden dieser Nachrichten beschäftigt ist, wird der Handshake erst nach dem Versenden der Nachrichten gestartet.

## Syntax

```js-nolint
close()
close(code)
close(code, reason)
```

### Parameter

- `code` {{optional_inline}}
  - : Ein ganzzahliger [WebSocket-Verbindungsschlusscode](https://www.rfc-editor.org/info/rfc6455/#section-7.1.5) der einen Grund für die Schließung angibt:
    - Falls nicht angegeben, wird automatisch ein Schlusscode für die Verbindung festgelegt: `1000` für eine normale Schließung oder ansonsten [ein anderer Standardwert im Bereich `1001`-`1015`](https://www.rfc-editor.org/info/rfc6455/#section-7.4.1), der den tatsächlichen Grund für die Schließung der Verbindung angibt.
    - Wenn angegeben, überschreibt der Wert dieses `code`-Parameters die automatische Festlegung des Schlusscodes für die Verbindung und legt stattdessen einen benutzerdefinierten Code fest.
      Der Wert muss eine Ganzzahl sein: entweder `1000` oder ein benutzerdefinierter Code Ihrer Wahl im Bereich `3000`-`4999`. Wenn Sie einen `code`-Wert angeben, sollten Sie auch einen [`reason`](#reason)-Wert angeben.

- `reason` {{optional_inline}}
  - : Ein String, der einen benutzerdefinierten [WebSocket-Verbindungsschließungsgrund](https://www.rfc-editor.org/info/rfc6455/#section-7.1.6) (eine prägnante, für Menschen lesbare Erklärung der Schließung) angibt. Der Wert darf nicht länger als 123 Bytes (in UTF-8 kodiert) sein.

    > [!NOTE]
    > Da {{Glossary("UTF-8", "UTF-8 zwei bis vier Bytes verwendet")}}, um nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen zu kodieren, würde ein `reason`-Wert von 123 Zeichen, der nicht-ASCII-Zeichen enthält, das Limit von 123 Bytes überschreiten.

    Wenn Sie einen `reason`-Wert angeben, sollten Sie auch einen [`code`](#code)-Wert angeben.

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

- [RFC 6455](https://www.rfc-editor.org/info/rfc6455/) (die WebSocket-Protokollspezifikation)
