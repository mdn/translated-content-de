---
title: "XMLHttpRequest: XMLHttpRequest() Konstruktor"
short-title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Der **`XMLHttpRequest()`** Konstruktor
erstellt ein neues [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

## Syntax

```js-nolint
new XMLHttpRequest()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt. Das Objekt muss mindestens durch einen Aufruf von [`open()`](/de/docs/Web/API/XMLHttpRequest/open) vorbereitet werden, um es zu initialisieren, bevor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen wird, um die Anfrage an den Server zu senden.

## Nicht-standardisierte Firefox-Syntax

Firefox 16 fügte dem Konstruktor einen nicht-standardisierten Parameter hinzu, der den anonymen
Modus aktivieren kann (siehe [Firefox Bug 692677](https://bugzil.la/692677)). Das Setzen des `mozAnon` Flags auf `true` ähnelt effektiv dem [`AnonXMLHttpRequest()`](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest)
Konstruktor, der in älteren Versionen der XMLHttpRequest-Spezifikation beschrieben wird.

```js
const request = new XMLHttpRequest(paramsDictionary);
```

### Parameter (nicht-standardisiert)

- `objParameters`

  - : Ein Flag, das Sie setzen können:

    - `mozAnon`
      - : Boolean: Wenn dieses Flag auf `true` gesetzt wird, wird der Browser den [Ursprung](/de/docs/Glossary/origin) und [Benutzeranmeldedaten](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials) beim Abrufen von Ressourcen nicht offenlegen. Am wichtigsten, dies bedeutet, dass
        [Cookies](/de/docs/Glossary/Cookie) nicht gesendet werden, es sei denn, sie werden ausdrücklich mit setRequestHeader hinzugefügt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
