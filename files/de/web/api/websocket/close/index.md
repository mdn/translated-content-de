---
title: "WebSocket: close()-Methode"
short-title: close()
slug: Web/API/WebSocket/close
l10n:
  sourceCommit: 54ef250ba91a42a7755b7dbd3fd6420c128b7d53
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

Die Methode **`WebSocket.close()`** schließt die [`WebSocket`](/de/docs/Web/API/WebSocket)-Verbindung oder einen Verbindungsversuch, sofern vorhanden. Wenn die Verbindung bereits `CLOSED` ist, bewirkt diese Methode nichts.

> [!NOTE]
> Das Schließen der Verbindung beginnt mit einem [Closing Handshake](https://www.rfc-editor.org/info/rfc6455/#section-1.4). Die Methode `close()` verwirft zuvor gesendete Nachrichten nicht, bevor dieser Handshake beginnt. Selbst wenn der User Agent noch damit beschäftigt ist, diese Nachrichten zu senden, beginnt der Handshake erst, nachdem sie gesendet wurden.

## Syntax

```js-nolint
close()
close(code)
close(code, reason)
```

### Parameter

- `code` {{optional_inline}}
  - : Ein ganzzahliger Wert für einen [WebSocket-Verbindungsschließcode](https://www.rfc-editor.org/info/rfc6455/#section-7.1.5), der den Grund für das Schließen angibt:
    - Wenn kein Wert angegeben wird, enthält der an den Server gesendete Close-Frame keinen Statuscode, und der Server behandelt den Schließcode als `1005` („No Status Received“).
      Der [`code`](/de/docs/Web/API/CloseEvent/code) des daraus resultierenden [`close`](/de/docs/Web/API/WebSocket/close_event)-Ereignisses wird aus der Antwort des Servers übernommen. Üblicherweise ist er ebenfalls `1005`, da Server den empfangenen Statuscode normalerweise zurückgeben; der Server kann jedoch einen anderen Code senden. Wenn die Verbindung nicht ordnungsgemäß geschlossen wird, wird der Code auf [einen anderen Standardwert](https://www.rfc-editor.org/info/rfc6455/#section-7.4.1) gesetzt, beispielsweise `1006`.
    - Wenn ein Wert angegeben wird, überschreibt dieser `code`-Parameter die automatische Festlegung des Schließcodes für die Verbindung und legt stattdessen einen benutzerdefinierten Code fest.
      Der Wert muss eine ganze Zahl sein: entweder `1000` oder ein benutzerdefinierter Code Ihrer Wahl im Bereich `3000`–`4999`. Wenn Sie einen Wert für `code` angeben, sollten Sie auch einen Wert für [`reason`](#reason) angeben.

- `reason` {{optional_inline}}
  - : Eine Zeichenfolge mit einem benutzerdefinierten [Grund für das Schließen der WebSocket-Verbindung](https://www.rfc-editor.org/info/rfc6455/#section-7.1.6) (eine kurze, für Menschen lesbare Erklärung für das Schließen). Der Wert darf UTF-8-codiert höchstens 123 Byte lang sein.

    > [!NOTE]
    > Da {{Glossary("UTF-8", "UTF-8 für die Codierung von Zeichen außerhalb von ASCII zwei bis vier Byte verwendet")}}, würde ein 123 Zeichen langer `reason`-Wert mit Nicht-{{Glossary("ASCII", "ASCII")}}-Zeichen die Grenze von 123 Byte überschreiten.

    Wenn Sie einen Wert für `reason` angeben, sollten Sie auch einen Wert für [`code`](#code) angeben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`code`](#code) weder die ganze Zahl `1000` noch eine ganze Zahl im Bereich `3000`–`4999` ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der UTF-8-codierte Wert von [`reason`](#reason) länger als 123 Byte ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455](https://www.rfc-editor.org/info/rfc6455/) (die Spezifikation des WebSocket-Protokolls)
