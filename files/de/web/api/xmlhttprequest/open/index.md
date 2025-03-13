---
title: "XMLHttpRequest: open()-Methode"
short-title: open()
slug: Web/API/XMLHttpRequest/open
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methode **`open()`**
initialisiert eine neu erstellte Anfrage oder re-initialisiert eine bestehende.

> [!NOTE]
> Diese Methode für eine bereits aktive Anfrage aufzurufen
> (eine, für die `open()` bereits aufgerufen wurde), entspricht dem Aufruf von
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
  - : Die zu verwendende [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods), wie
    `"GET"`, `"POST"`, `"PUT"`, `"DELETE"`,
    etc. Wird für nicht HTTP(S)-URLs ignoriert.
- `url`
  - : Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts — das die URL der Ressource bereitstellt, an die die Anfrage gesendet werden soll.
- `async` {{optional_inline}}

  - : Ein optionaler boolescher Parameter, der standardmäßig auf `true` gesetzt ist und angibt, ob die Operation asynchron ausgeführt werden soll oder nicht. Wenn dieser Wert `false` ist,
    kehrt die `send()`-Methode nicht zurück, bis die Antwort empfangen wird. Wenn
    `true`, wird die Benachrichtigung einer abgeschlossenen Transaktion mithilfe von Event-Listenern bereitgestellt. Dies _muss_ wahr sein, wenn das `multipart`-Attribut
    `true` ist, andernfalls wird eine Ausnahme ausgelöst.

    > [!NOTE]
    > Synchrone Anfragen im Haupt-Thread können
    > die Benutzererfahrung leicht stören und sollten vermieden werden; tatsächlich haben viele
    > Browser die Unterstützung für synchrones XHR im Haupt-Thread vollständig eingestellt.
    > Synchrone Anfragen sind in [`Worker`](/de/docs/Web/API/Worker)n erlaubt.

- `user` {{optional_inline}}
  - : Der optionale Benutzername für Authentifizierungszwecke; standardmäßig ist dies der
    `null`-Wert.
- `password` {{optional_inline}}
  - : Das optionale Passwort für Authentifizierungszwecke; standardmäßig ist dies der
    `null`-Wert.

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
