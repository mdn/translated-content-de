---
title: "XMLHttpRequest: open()-Methode"
short-title: open()
slug: Web/API/XMLHttpRequest/open
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die {{domxref("XMLHttpRequest")}}-Methode **`open()`**
initialisiert eine neu erstellte Anfrage oder re-initialisiert eine bereits bestehende.

> [!NOTE]
> Das Aufrufen dieser Methode für eine bereits aktive Anfrage
> (eine, für die `open()` bereits aufgerufen wurde) entspricht dem Aufruf von
> {{domxref("XMLHttpRequest.abort", "abort()")}}.

## Syntax

```js-nolint
open(method, url)
open(method, url, async)
open(method, url, async, user)
open(method, url, async, user, password)
```

### Parameter

- `method`
  - : Die [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods), die verwendet werden soll, wie
    `"GET"`, `"POST"`, `"PUT"`, `"DELETE"`,
    usw. Wird für nicht-HTTP(S)-URLs ignoriert.
- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier")}} — einschließlich eines {{domxref("URL")}}-Objekts — das die URL der Ressource bereitstellt, an die die Anfrage gesendet werden soll.
- `async` {{optional_inline}}

  - : Ein optionaler Boolean-Parameter, der standardmäßig auf `true` gesetzt ist und angibt, ob die Operation asynchron durchgeführt werden soll oder nicht. Wenn dieser Wert `false` ist,
    kehrt die `send()`-Methode nicht zurück, bis die Antwort empfangen wurde. Wenn
    `true`, wird die Benachrichtigung über eine abgeschlossene Transaktion mithilfe von Event-Listenern bereitgestellt. Dies _muss_ auf true gesetzt sein, wenn das `multipart`-Attribut
    `true` ist, oder es wird eine Ausnahme ausgelöst.

    > [!NOTE]
    > Synchrone Anfragen im Haupt-Thread können die Benutzererfahrung leicht stören und sollten vermieden werden; tatsächlich haben viele
    > Browser die Unterstützung für synchrone XHR im Haupt-Thread vollständig eingestellt.
    > Synchrone Anfragen sind in {{domxref("Worker")}}s erlaubt.

- `user` {{optional_inline}}
  - : Der optionale Benutzername, der für Authentifizierungszwecke verwendet wird; standardmäßig ist dies der
    `null`-Wert.
- `password` {{optional_inline}}
  - : Das optionale Passwort, das für Authentifizierungszwecke verwendet wird; standardmäßig ist dies der
    `null`-Wert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Verwandte {{domxref("XMLHttpRequest")}}-Methoden:
  {{domxref("XMLHttpRequest.setRequestHeader","setRequestHeader()")}},
  {{domxref("XMLHttpRequest.send", "send()")}}, und
  {{domxref("XMLHttpRequest.abort", "abort()")}}
