---
title: "XMLHttpRequest: XMLHttpRequest()-Konstruktor"
short-title: XMLHttpRequest()
slug: Web/API/XMLHttpRequest/XMLHttpRequest
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Der **`XMLHttpRequest()`**-Konstruktor
erstellt ein neues [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest).

## Syntax

```js-nolint
new XMLHttpRequest()
// Non-standard
new XMLHttpRequest(options)
```

### Parameter

Es gibt keine standardmäßigen Parameter. Allerdings erlaubt Firefox einen nicht standardmäßigen Parameter:

- `options` {{non-standard_inline}}
  - : Ein Objekt, das die folgende Option enthalten kann:
    - `mozAnon`
      - : Ein boolean. Wenn Sie diesen Wert auf `true` setzen, wird der Browser dazu veranlasst, die {{Glossary("origin", "origin")}} und Benutzeranmeldeinformationen beim Abrufen von Ressourcen nicht offenzulegen. Am wichtigsten ist, dass {{Glossary("Cookie", "Cookies")}} nicht gesendet werden, es sei denn, diese wurden explizit mit `setRequestHeader` hinzugefügt.

### Rückgabewert

Ein neues [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Objekt. Das Objekt muss vorbereitet werden, indem mindestens [`open()`](/de/docs/Web/API/XMLHttpRequest/open) aufgerufen wird, um es zu initialisieren, bevor [`send()`](/de/docs/Web/API/XMLHttpRequest/send) verwendet wird, um die Anfrage an den Server zu senden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
