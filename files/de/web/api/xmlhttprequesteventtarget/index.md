---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequestEventTarget` ist das Interface, das die gemeinsam genutzten Ereignishandler von [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) und [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload) beschreibt.

Sie verwenden `XMLHttpRequestEventTarget` nicht direkt; stattdessen interagieren Sie mit den Subklassen.

## Vererbung für `XMLHttpRequest`

{{InheritanceDiagram("XMLHttpRequest")}}

Die folgenden Ereignisse stehen für [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) zur Verfügung:

- [`abort`](/de/docs/Web/API/XMLHttpRequest/abort_event)
- [`error`](/de/docs/Web/API/XMLHttpRequest/error_event)
- [`load`](/de/docs/Web/API/XMLHttpRequest/load_event)
- [`loadend`](/de/docs/Web/API/XMLHttpRequest/loadend_event)
- [`loadstart`](/de/docs/Web/API/XMLHttpRequest/loadstart_event)
- [`progress`](/de/docs/Web/API/XMLHttpRequest/progress_event)
- [`readystatechange`](/de/docs/Web/API/XMLHttpRequest/readystatechange_event)
- [`timeout`](/de/docs/Web/API/XMLHttpRequest/timeout_event)

## Vererbung für `XMLHttpRequestUpload`

{{InheritanceDiagram("XMLHttpRequestUpload")}}

Die folgenden Ereignisse stehen für [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload) zur Verfügung:

- [`abort`](/de/docs/Web/API/XMLHttpRequestUpload/abort_event)
- [`error`](/de/docs/Web/API/XMLHttpRequestUpload/error_event)
- [`load`](/de/docs/Web/API/XMLHttpRequestUpload/load_event)
- [`loadend`](/de/docs/Web/API/XMLHttpRequestUpload/loadend_event)
- [`loadstart`](/de/docs/Web/API/XMLHttpRequestUpload/loadstart_event)
- [`progress`](/de/docs/Web/API/XMLHttpRequestUpload/progress_event)
- [`timeout`](/de/docs/Web/API/XMLHttpRequestUpload/timeout_event)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)
- [`XMLHttpRequestUpload`](/de/docs/Web/API/XMLHttpRequestUpload)
