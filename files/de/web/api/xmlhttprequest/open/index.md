---
title: "XMLHttpRequest: open() Methode"
short-title: open()
slug: Web/API/XMLHttpRequest/open
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methode **`open()`**
initialisiert eine neu erstellte Anfrage oder initialisiert eine bestehende Anfrage neu.

> [!NOTE]
> Wenn diese Methode für eine bereits aktive Anfrage aufgerufen wird
> (eine, für die `open()` bereits aufgerufen wurde), ist dies gleichbedeutend mit dem Aufruf von
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
    usw. Wird für nicht-HTTP(S)-URLs ignoriert.
- `url`
  - : Ein String oder ein beliebiges anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts —, das die URL der Ressource angibt, an die die Anfrage gesendet werden soll.
- `async` {{optional_inline}}
  - : Ein optionaler Boolean-Parameter, der standardmäßig auf `true` gesetzt ist und angibt, ob die Operation asynchron ausgeführt werden soll. Wenn dieser Wert `false` ist,
    gibt die `send()`-Methode erst zurück, wenn die Antwort empfangen wurde. Wenn
    `true`, wird die Benachrichtigung über eine abgeschlossene Transaktion mithilfe von Ereignislistenern bereitgestellt. Dies _muss_ true sein, wenn das `multipart`-Attribut
    `true` ist, da sonst eine Ausnahme ausgelöst wird.

    > [!NOTE]
    > Synchrone Anfragen im Hauptthread können
    > die Benutzererfahrung leicht stören und sollten vermieden werden; tatsächlich haben viele
    > Browser die Unterstützung für synchrone XHR im Hauptthread vollständig aufgehoben.
    > Synchrone Anfragen sind in [`Worker`](/de/docs/Web/API/Worker)s erlaubt.

- `user` {{optional_inline}}
  - : Der optionale Benutzername, der für Authentifizierungszwecke verwendet werden soll; standardmäßig ist dies der
    `null`-Wert.
- `password` {{optional_inline}}
  - : Das optionale Passwort, das für Authentifizierungszwecke verwendet werden soll; standardmäßig ist dies der
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
