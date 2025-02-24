---
title: "XMLHttpRequest: Methode setRequestHeader()"
short-title: setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die Methode **`setRequestHeader()`** des [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) setzt den Wert eines HTTP-Anforderungs-Headers. Wenn Sie `setRequestHeader()` verwenden, müssen Sie es nach dem Aufruf von [`open()`](/de/docs/Web/API/XMLHttpRequest/open) aufrufen, jedoch bevor Sie [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen. Wenn diese Methode mehrmals mit demselben Header aufgerufen wird, werden die Werte in einem einzigen Anforderungs-Header zusammengeführt.

Jedes Mal, wenn Sie `setRequestHeader()` nach dem ersten Aufruf aufrufen, wird der angegebene Text an das Ende des Inhalts des bestehenden Headers angehängt.

Wenn kein {{HTTPHeader("Accept")}}-Header mithilfe dieser Methode gesetzt wurde, wird ein `Accept`-Header mit dem Typ `"*/*"` mit der Anfrage gesendet, wenn [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen wird.

Aus Sicherheitsgründen gibt es mehrere {{Glossary("Forbidden_request_header", "verbotene Anforderungs-Header")}}, deren Werte durch den Benutzeragenten kontrolliert werden. Jeder Versuch, einen dieser Header-Werte aus dem Frontend-JavaScript-Code zu setzen, wird ohne Warnung oder Fehler ignoriert.

Zusätzlich kann der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Headers/Authorization) zu einer Anfrage hinzugefügt werden, wird jedoch entfernt, wenn die Anfrage über Herkunftsgrenzen hinweg umgeleitet wird.

> [!NOTE]
> Für Ihre benutzerdefinierten Felder kann es zu einer Ausnahme "**not allowed by Access-Control-Allow-Headers in preflight response**" kommen, wenn Sie Anforderungen über verschiedene Domains senden.
> In diesem Fall müssen Sie den {{HTTPHeader("Access-Control-Allow-Headers")}} in Ihrem Antwort-Header auf Serverseite einstellen.

## Syntax

```js-nolint
setRequestHeader(header, value)
```

### Parameter

- `header`
  - : Der Name des Headers, dessen Wert gesetzt werden soll.
- `value`
  - : Der Wert, der als Inhalt des Headers gesetzt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
