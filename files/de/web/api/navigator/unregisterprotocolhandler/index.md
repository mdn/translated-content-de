---
title: "Navigator: unregisterProtocolHandler() Methode"
short-title: unregisterProtocolHandler()
slug: Web/API/Navigator/unregisterProtocolHandler
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

Die **[`Navigator`](/de/docs/Web/API/Navigator)**-Methode **`unregisterProtocolHandler()`** entfernt einen Protokoll-Handler für ein bestimmtes URL-[Schema](#zugelassene_schemas).

Diese Methode ist das Gegenstück zu **`registerProtocolHandler()`**.

## Syntax

```js-nolint
unregisterProtocolHandler(scheme, url)
```

### Parameter

- `scheme`
  - : Ein String, der das [zugelassene Schema](#zugelassene_schemas) im Protokoll-Handler enthält, das abgemeldet wird.
    Zum Beispiel können Sie den Handler für SMS-Textnachrichten-Links abmelden, indem Sie das Schema `"sms"` übergeben.
- `url`
  - : Ein String, der die URL des Handlers enthält.
    **Diese URL sollte mit derjenigen übereinstimmen, die zur Registrierung des Handlers verwendet wurde (z.B. muss sie `%s` enthalten).**

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Benutzeragent hat die Abmeldung blockiert.
    Dies könnte passieren, wenn:
    - Das Schema (Protokoll) ungültig ist, wie ein Schema, das der Browser selbst verwaltet (`https:`, `about:`, etc.)
    - Der {{Glossary("origin", "Ursprung")}} der Handler-URL stimmt nicht mit dem Ursprung der Seite überein, die diese API aufruft.
    - Der Browser erfordert, dass diese Funktion aus einem sicheren Kontext aufgerufen wird.
    - Der Browser erfordert, dass die URL des Handlers über HTTPS erfolgt.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `%s`-Platzhalter fehlt in der Handler-URL.

## Zugelassene Schemas

Aus Sicherheitsgründen beschränkt `unregisterProtocolHandler()`, welche Schemas abgemeldet werden können.

Ein **benutzerdefiniertes Schema** kann abgemeldet werden, solange:

- Der Name des benutzerdefinierten Schemas mit `web+` beginnt.
- Der Name des benutzerdefinierten Schemas mindestens einen Buchstaben nach dem `web+`-Präfix enthält.
- Der Name des benutzerdefinierten Schemas nur Kleinbuchstaben aus dem ASCII-Zeichensatz enthält.

Zum Beispiel `web+burger`, wie im [Beispiel](#beispiele) unten gezeigt.

Andernfalls muss das Schema eines der folgenden sein:

- `bitcoin`
- `ftp`
- `ftps`
- `geo`
- `im`
- `irc`
- `ircs`
- `magnet`
- `mailto`
- `matrix`
- `mms`
- `news`
- `nntp`
- `openpgp4fpr`
- `sftp`
- `sip`
- `sms`
- `smsto`
- `ssh`
- `tel`
- `urn`
- `webcal`
- `wtai`
- `xmpp`

## Beispiele

Wenn Ihre Seite `burgers.example.com` ist und Sie ein `web+burger:`-Schema haben, können Sie den Handler dafür so abmelden:

```js
navigator.unregisterProtocolHandler(
  "web+burger",
  "https://burgers.example.com/?burger=%s",
);
```

Dieses Skript muss vom gleichen Ursprung wie die Handler-URL ausgeführt werden (also von jeder Seite unter `https://burgers.example.com`), und die Handler-URL muss `http` oder `https` sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
