---
title: "XMLHttpRequest: open() Methode"
short-title: open()
slug: Web/API/XMLHttpRequest/open
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die Methode [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) **`open()`**
initialisiert eine neu erstellte Anfrage oder reinitialisiert eine bestehende.

> [!NOTE]
> Wenn diese Methode für eine bereits aktive Anfrage aufgerufen wird
> (eine, für die `open()` bereits aufgerufen wurde), entspricht dies dem Aufruf von
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
  - : Die zu verwendende [HTTP-Anfragemethode](/de/docs/Web/HTTP/Methods), wie
    zum Beispiel `"GET"`, `"POST"`, `"PUT"`, `"DELETE"` usw. Wird für nicht-HTTP(S)-URLs ignoriert.
- `url`
  - : Ein String oder ein anderes Objekt mit einem [Stringifizierer](/de/docs/Glossary/stringifier) — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts —, das die URL der Ressource angibt, an die die Anfrage gesendet werden soll.
- `async` {{optional_inline}}

  - : Ein optionaler Boolescher Parameter, der standardmäßig `true` ist und angibt, ob die Operation asynchron durchgeführt werden soll oder nicht. Wenn dieser Wert `false` ist,
    kehrt die `send()`-Methode erst zurück, wenn die Antwort empfangen wurde. Wenn
    `true`, erfolgt die Benachrichtigung über eine abgeschlossene Transaktion über Event-Listener. Dies muss `true` sein, wenn das `multipart`-Attribut
    `true` ist, andernfalls wird eine Ausnahme ausgelöst.

    > [!NOTE]
    > Synchrone Anfragen im Haupt-Thread können
    > leicht störend für die Benutzererfahrung sein und sollten vermieden werden; tatsächlich haben viele
    > Browser die Unterstützung für synchrone XHR im Haupt-Thread vollständig eingestellt.
    > Synchrone Anfragen sind in [`Worker`](/de/docs/Web/API/Worker) erlaubt.

- `user` {{optional_inline}}
  - : Der optionale Benutzername, der für Authentifizierungszwecke verwendet werden soll; standardmäßig ist dieser Wert
    `null`.
- `password` {{optional_inline}}
  - : Das optionale Passwort, das für Authentifizierungszwecke verwendet werden soll; standardmäßig ist dieser Wert
    `null`.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- Verwandte Methoden von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest):
  [`setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader),
  [`send()`](/de/docs/Web/API/XMLHttpRequest/send) und
  [`abort()`](/de/docs/Web/API/XMLHttpRequest/abort)
