---
title: "XMLHttpRequest: XMLHttpRequest() Konstruktor"
short-title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Der **`XMLHttpRequest()`** Konstruktor
erstellt ein neues {{domxref("XMLHttpRequest")}}.

## Syntax

```js-nolint
new XMLHttpRequest()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{domxref("XMLHttpRequest")}} Objekt. Das Objekt muss vorbereitet werden, indem
mindestens {{domxref("XMLHttpRequest.open", "open()")}} aufgerufen wird, um es zu initialisieren,
bevor {{domxref("XMLHttpRequest.send", "send()")}} aufgerufen wird, um die Anfrage an den Server zu senden.

## Nicht-standardmäßige Firefox-Syntax

Firefox 16 hat einen nicht-standardmäßigen Parameter zum Konstruktor hinzugefügt, der den anonymen Modus aktivieren kann (siehe [Firefox-Bug 692677](https://bugzil.la/692677)). Das Setzen des `mozAnon`-Flags auf `true`
ähnelt effektiv dem [`AnonXMLHttpRequest()`](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest)
Konstruktor, der in älteren Versionen der XMLHttpRequest-Spezifikation beschrieben ist.

```js
const request = new XMLHttpRequest(paramsDictionary);
```

### Parameter (nicht-standardmäßig)

- `objParameters`

  - : Ein Flag, das Sie setzen können:

    - `mozAnon`
      - : Boolean: Wenn Sie dieses Flag auf `true` setzen, wird der Browser beim Abrufen von
        Ressourcen nicht den {{Glossary("origin")}} und [Benutzeranmeldeinformationen](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials) offenlegen. Das bedeutet insbesondere, dass
        {{Glossary("Cookie", "Cookies")}} nicht gesendet werden, es sei denn, sie werden explizit mit
        setRequestHeader hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)