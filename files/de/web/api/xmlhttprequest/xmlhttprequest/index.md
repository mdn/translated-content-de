---
title: "XMLHttpRequest: XMLHttpRequest() Konstruktor"
short-title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
l10n:
  sourceCommit: 5e270e3cdab4f3c8ad3f5752976c72c6e8312eb9
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Der **`XMLHttpRequest()`** Konstruktor
erstellt ein neues [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

## Syntax

```js-nolint
new XMLHttpRequest()
// Non-standard
new XMLHttpRequest(options)
```

### Parameter

Es gibt keine standardisierten Parameter. Allerdings erlaubt Firefox einen nicht-standardisierten Parameter:

- `options` {{non-standard_inline}}
  - : Ein Objekt, das die folgenden Flags enthalten kann:
    - `mozAnon`
      - : Ein Boolean. Wenn dieses Flag auf `true` gesetzt wird, wird der Browser die {{Glossary("origin", "Origin")}} und Benutzeranmeldedaten beim Abrufen von Ressourcen nicht preisgeben. Das Wichtigste ist, dass {{Glossary("Cookie", "Cookies")}} nicht gesendet werden, es sei denn, sie werden explizit mit `setRequestHeader` hinzugefügt.
    - `mozSystem`
      - : Ein Boolean. Wenn dieses Flag auf `true` gesetzt wird, wird die Same-Origin-Policy bei der Anfrage nicht durchgesetzt.

### Rückgabewert

Ein neues [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) Objekt. Das Objekt muss mindestens durch Aufrufen von [`open()`](/de/docs/Web/API/XMLHttpRequest/open) vorbereitet werden, um es zu initialisieren, bevor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen wird, um die Anfrage an den Server zu senden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
