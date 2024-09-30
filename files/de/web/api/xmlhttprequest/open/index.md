---
title: "XMLHttpRequest: open() Methode"
short-title: open()
slug: Web/API/XMLHttpRequest/open
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methode **`open()`** initialisiert eine neu erstellte Anfrage oder reinitialisiert eine bestehende.

> [!NOTE]
> Der Aufruf dieser Methode für eine bereits aktive Anfrage
> (eine, für die `open()` bereits aufgerufen wurde) entspricht dem Aufruf von
> [`abort()`](/de/docs/Web/API/XMLHttpRequest/abort).

## Syntax

```js-nolint
open(method, url)
open(method, url, async)
open(method, url, async, user)
open(method, url, async, user, password)
```

### Parameter

- `method`
  - : Die zu verwendende [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods) wie
    `"GET"`, `"POST"`, `"PUT"`, `"DELETE"`,
    usw. Wird für nicht-http(s) URLs ignoriert.
- `url`
  - : Ein String oder ein anderes Objekt mit einem [Stringifier](/de/docs/Glossary/stringifier) — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts —, das die URL der Ressource bereitstellt, an die die Anfrage gesendet werden soll.
- `async` {{optional_inline}}

  - : Ein optionaler boolescher Parameter, der standardmäßig auf `true` gesetzt ist und angibt, ob die Operation asynchron durchgeführt werden soll oder nicht. Wenn dieser Wert `false` ist, kehrt die `send()`-Methode erst zurück, wenn die Antwort empfangen wurde. Bei `true` wird die Benachrichtigung über eine abgeschlossene Transaktion über Event-Listener bereitgestellt. Dies _muss_ wahr sein, wenn das `multipart`-Attribut `true` ist, andernfalls wird eine Ausnahme ausgelöst.

    > [!NOTE]
    > Synchrone Anfragen im Hauptthread können die Benutzererfahrung leicht stören und sollten vermieden werden; tatsächlich haben viele Browser die Unterstützung synchroner XHR-Anfragen im Hauptthread vollständig eingestellt.
    > Synchrone Anfragen sind in [`Workers`](/de/docs/Web/API/Worker) erlaubt.

- `user` {{optional_inline}}
  - : Der optionale Benutzername für Authentifizierungszwecke; standardmäßig ist dies der Wert `null`.
- `password` {{optional_inline}}
  - : Das optionale Passwort für Authentifizierungszwecke; standardmäßig ist dies der Wert `null`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Verwandte [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methoden:
  [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader),
  [`send()`](/de/docs/Web/API/XMLHttpRequest/send) und
  [`abort()`](/de/docs/Web/API/XMLHttpRequest/abort)
