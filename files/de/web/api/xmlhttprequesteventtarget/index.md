---
title: XMLHttpRequestEventTarget
slug: Web/API/XMLHttpRequestEventTarget
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

`XMLHttpRequestEventTarget` ist das Interface, das die gemeinsamen Ereignishandler von {{domxref("XMLHttpRequest")}} und {{domxref("XMLHttpRequestUpload")}} beschreibt.

Sie verwenden `XMLHttpRequestEventTarget` nicht direkt; stattdessen interagieren Sie mit den Unterklassen.

## Vererbung für `XMLHttpRequest`

{{InheritanceDiagram("XMLHttpRequest")}}

Die folgenden Ereignisse sind für {{domxref("XMLHttpRequest")}} verfügbar:

- {{domxref("XMLHttpRequest/abort_event", "abort")}}
- {{domxref("XMLHttpRequest/error_event", "error")}}
- {{domxref("XMLHttpRequest/load_event", "load")}}
- {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
- {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}
- {{domxref("XMLHttpRequest/progress_event", "progress")}}
- {{domxref("XMLHttpRequest/readystatechange_event", "readystatechange")}}
- {{domxref("XMLHttpRequest/timeout_event", "timeout")}}

## Vererbung für `XMLHttpRequestUpload`

{{InheritanceDiagram("XMLHttpRequestUpload")}}

Die folgenden Ereignisse sind für {{domxref("XMLHttpRequestUpload")}} verfügbar:

- {{domxref("XMLHttpRequestUpload/abort_event", "abort")}}
- {{domxref("XMLHttpRequestUpload/error_event", "error")}}
- {{domxref("XMLHttpRequestUpload/load_event", "load")}}
- {{domxref("XMLHttpRequestUpload/loadend_event", "loadend")}}
- {{domxref("XMLHttpRequestUpload/loadstart_event", "loadstart")}}
- {{domxref("XMLHttpRequestUpload/progress_event", "progress")}}
- {{domxref("XMLHttpRequestUpload/timeout_event", "timeout")}}

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLHttpRequestUpload")}}
