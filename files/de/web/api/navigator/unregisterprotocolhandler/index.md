---
title: "Navigator: unregisterProtocolHandler()-Methode"
short-title: unregisterProtocolHandler()
slug: Web/API/Navigator/unregisterProtocolHandler
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

Die **{{domxref("Navigator")}}**-Methode **`unregisterProtocolHandler()`** entfernt einen Protokollhandler für ein gegebenes URL-[Schema](#erlaubte_schemas).

Diese Methode ist das Gegenstück zu **`registerProtocolHandler()`**.

## Syntax

```js-nolint
unregisterProtocolHandler(scheme, url)
```

### Parameter

- `scheme`
  - : Ein String, der das [erlaubte Schema](#erlaubte_schemas) im Protokoll-Handler enthält, das abgemeldet werden soll.
    Zum Beispiel kann man den Handler für SMS-Textnachrichten-Links abmelden, indem man das Schema `"sms"` übergibt.
- `url`
  - : Ein String, der die URL des Handlers enthält.
    **Diese URL sollte mit derjenigen übereinstimmen, die zum Registrieren des Handlers verwendet wurde (zum Beispiel muss sie `%s` enthalten).**

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `SecurityError` {{domxref("DOMException")}}
  - : Der Benutzeragent hat die Abmeldung blockiert.
    Dies könnte geschehen, wenn:
    - Das Schema (Protokoll) ungültig ist, wie etwa ein Schema, das der Browser selbst verwaltet (`https:`, `about:`, etc.)
    - Der {{Glossary("origin")}} der Handler-URL nicht mit dem Ursprung der Seite, die diese API aufruft, übereinstimmt.
    - Der Browser verlangt, dass diese Funktion aus einem sicheren Kontext aufgerufen wird.
    - Der Browser verlangt, dass die URL des Handlers über HTTPS erfolgt.
- `SyntaxError` {{domxref("DOMException")}}
  - : Der `%s`-Platzhalter fehlt in der Handler-URL.

## Erlaubte Schemas

Aus Sicherheitsgründen beschränkt `unregisterProtocolHandler()`, welche Schemas abgemeldet werden können.

Ein **benutzerdefiniertes Schema** kann abgemeldet werden, solange:

- Der Name des benutzerdefinierten Schemas mit `web+` beginnt
- Der Name des benutzerdefinierten Schemas mindestens einen Buchstaben nach dem `web+`-Präfix enthält
- Der Name des benutzerdefinierten Schemas nur aus Kleinbuchstaben im ASCII-Zeichensatz besteht.

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

Wenn Ihre Seite `burgers.example.com` ist und Sie ein `web+burger:`-Schema haben, können Sie den Handler dafür wie folgt abmelden:

```js
navigator.unregisterProtocolHandler(
  "web+burger",
  "https://burgers.example.com/?burger=%s",
);
```

Dieses Skript muss vom gleichen Ursprung wie die Handler-URL ausgeführt werden (also jede Seite unter `https://burgers.example.com`), und die Handler-URL muss `http` oder `https` sein.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
