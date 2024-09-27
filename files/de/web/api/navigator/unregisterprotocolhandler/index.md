---
title: "Navigator: unregisterProtocolHandler()-Methode"
short-title: unregisterProtocolHandler()
slug: Web/API/Navigator/unregisterProtocolHandler
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

Die **[`Navigator`](/de/docs/Web/API/Navigator)**-Methode **`unregisterProtocolHandler()`** entfernt einen Protokoll-Handler für ein gegebenes URL-[Schema](#erlaubte_schemas).

Diese Methode ist das Gegenteil von **`registerProtocolHandler()`**.

## Syntax

```js-nolint
unregisterProtocolHandler(scheme, url)
```

### Parameter

- `scheme`
  - : Ein String, der das [erlaubte Schema](#erlaubte_schemas) im Protokoll-Handler enthält, der abgemeldet wird.
    Zum Beispiel können Sie den Handler für SMS-Nachrichtenlinks abmelden, indem Sie das `"sms"`-Schema übergeben.
- `url`
  - : Ein String, der die URL des Handlers enthält.
    **Diese URL sollte mit derjenigen übereinstimmen, die zur Registrierung des Handlers verwendet wurde (z. B. muss sie `%s` enthalten).**

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der Benutzeragent hat die Abmeldung blockiert.
    Dies könnte passieren, wenn:
    - Das Schema (Protokoll) ungültig ist, wie ein Schema, das der Browser selbst handhabt (`https:`, `about:`, etc.)
    - Der [Origin](/de/docs/Glossary/origin) der Handler-URL nicht mit dem Origin der Seite übereinstimmt, die diese API aufruft.
    - Der Browser erfordert, dass diese Funktion aus einem sicheren Kontext aufgerufen wird.
    - Der Browser erfordert, dass die URL des Handlers über HTTPS ist.
- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `%s`-Platzhalter fehlt in der Handler-URL.

## Erlaubte Schemas

Aus Sicherheitsgründen beschränkt `unregisterProtocolHandler()`, welche Schemas abgemeldet werden können.

Ein **benutzerdefiniertes Schema** kann abgemeldet werden, solange:

- Der Name des benutzerdefinierten Schemas mit `web+` beginnt
- Der Name des benutzerdefinierten Schemas mindestens 1 Buchstaben nach dem `web+`-Präfix enthält
- Das benutzerdefinierte Schema nur Kleinbuchstaben des ASCII-Codes in seinem Namen hat.

Zum Beispiel, `web+burger`, wie im [Beispiel](#beispiele) unten gezeigt.

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

Wenn Ihre Seite `burgers.example.com` ist und Sie ein `web+burger:`-Schema haben, können Sie den Handler dafür wie folgt abmelden:

```js
navigator.unregisterProtocolHandler(
  "web+burger",
  "https://burgers.example.com/?burger=%s",
);
```

Dieses Skript muss vom gleichen Origin aus ausgeführt werden wie die Handler-URL (also von jeder Seite unter `https://burgers.example.com`), und die Handler-URL muss `http` oder `https` sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
