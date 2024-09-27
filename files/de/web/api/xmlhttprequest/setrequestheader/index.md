---
title: "XMLHttpRequest: setRequestHeader() Methode"
short-title: setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die Methode **`setRequestHeader()`** der [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) setzt den Wert eines HTTP-Anforderungsheaders. Wenn Sie `setRequestHeader()` verwenden, müssen Sie es nach dem Aufruf von [`open()`](/de/docs/Web/API/XMLHttpRequest/open) aufrufen, aber vor dem Aufruf von [`send()`](/de/docs/Web/API/XMLHttpRequest/send). Wenn diese Methode mehrmals mit demselben Header aufgerufen wird, werden die Werte zu einem einzigen Anforderungsheader zusammengeführt.

Jedes Mal, wenn Sie `setRequestHeader()` nach dem ersten Aufruf aufrufen, wird der angegebene Text an das Ende des bestehenden Header-Inhalts angehängt.

Wenn kein {{HTTPHeader("Accept")}}-Header gesetzt wurde, wird ein `Accept`-Header mit dem Typ „`*/*`“ mit der Anforderung gesendet, wenn [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen wird.

Aus Sicherheitsgründen gibt es mehrere [verbotene Header-Namen](/de/docs/Glossary/Forbidden_header_name), deren Werte vom User-Agent kontrolliert werden. Jeder Versuch, einen dieser Header-Werte aus dem Frontend-JavaScript-Code festzulegen, wird ohne Warnung oder Fehlermeldung ignoriert.

Zusätzlich kann der [`Authorization`](/de/docs/Web/HTTP/Headers/Authorization) HTTP-Header zu einer Anforderung hinzugefügt werden, wird jedoch entfernt, wenn die Anforderung über einen Cross-Origin-Redirect weitergeleitet wird.

> [!NOTE]
> Für Ihre benutzerdefinierten Felder kann es zu einer Ausnahme "**nicht erlaubt von Access-Control-Allow-Headers in der Preflight-Antwort**" kommen, wenn Sie domänenübergreifende Anfragen senden. In diesem Fall müssen Sie den {{HTTPHeader("Access-Control-Allow-Headers")}} im Antwortheader auf der Serverseite festlegen.

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
