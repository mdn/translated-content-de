---
title: "XMLHttpRequest: setRequestHeader() Methode"
short-title: setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methode **`setRequestHeader()`** setzt den Wert eines HTTP-Anforderungs-Headers.
Wenn Sie `setRequestHeader()` verwenden, müssen Sie es nach dem Aufruf von [`open()`](/de/docs/Web/API/XMLHttpRequest/open), aber vor dem Aufruf von [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufrufen.
Wenn diese Methode mehrmals mit demselben Header aufgerufen wird, werden die Werte zu einem einzigen Anforderungs-Header zusammengeführt.

Jedes Mal, wenn Sie `setRequestHeader()` nach dem ersten Aufruf verwenden, wird der angegebene Text an das Ende des bestehenden Header-Inhalts angehängt.

Wenn kein {{HTTPHeader("Accept")}}-Header mit dieser Methode gesetzt wurde, wird ein `Accept`-Header mit dem Typ `"*/*"` mit der Anforderung gesendet, wenn [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen wird.

Aus Sicherheitsgründen gibt es mehrere {{Glossary("Forbidden_header_name", "verbotene Header-Namen")}}, deren Werte durch den Benutzeragent gesteuert werden. Jeder Versuch, einen Wert für diese Header aus Frontend-JavaScript-Code zu setzen, wird ohne Warnung oder Fehler ignoriert.

Zusätzlich kann der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Headers/Authorization) zu einer Anforderung hinzugefügt werden, wird aber entfernt, wenn die Anforderung plattformübergreifend weitergeleitet wird.

> [!NOTE]
> Bei Ihren benutzerdefinierten Feldern kann beim Senden von Anfragen über Domänen hinweg eine Ausnahme "nicht erlaubt durch Access-Control-Allow-Headers in der Preflight-Antwort" auftreten.
> In diesem Fall müssen Sie den {{HTTPHeader("Access-Control-Allow-Headers")}} in Ihrem Antwort-Header auf der Serverseite einrichten.

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
