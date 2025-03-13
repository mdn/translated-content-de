---
title: "XMLHttpRequest: setRequestHeader() Methode"
short-title: setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Methode **`setRequestHeader()`** setzt den Wert eines HTTP-Anforderungsheaders.
Wenn `setRequestHeader()` verwendet wird, muss es nach dem Aufruf von [`open()`](/de/docs/Web/API/XMLHttpRequest/open), aber vor dem Aufruf von [`send()`](/de/docs/Web/API/XMLHttpRequest/send) aufgerufen werden.
Wenn diese Methode mehrmals mit dem gleichen Header aufgerufen wird, werden die Werte zu einem einzigen Anforderungsheader zusammengeführt.

Bei jedem Aufruf von `setRequestHeader()` nach dem ersten Aufruf wird der angegebene Text an das Ende des bestehenden Headerinhalts angehängt.

Wenn kein {{HTTPHeader("Accept")}}-Header mit dieser Methode gesetzt wurde, wird beim Aufruf von [`send()`](/de/docs/Web/API/XMLHttpRequest/send) ein `Accept`-Header mit dem Typ `"*/*"` mit der Anfrage gesendet.

Aus Sicherheitsgründen gibt es mehrere {{Glossary("Forbidden_request_header", "verbotene Anforderungsheader")}}, deren Werte vom Benutzeragenten kontrolliert werden. Jeder Versuch, einen Wert für einen dieser Header aus Frontend-JavaScript-Code festzulegen, wird ohne Warnung oder Fehler ignoriert.

Zusätzlich kann der [`Authorization`](/de/docs/Web/HTTP/Reference/Headers/Authorization)-HTTP-Header zu einer Anfrage hinzugefügt werden, wird jedoch entfernt, wenn die Anfrage serverübergreifend umgeleitet wird.

> [!NOTE]
> Bei Ihren benutzerdefinierten Feldern kann es zu einer Ausnahme kommen: "**not allowed by Access-Control-Allow-Headers in preflight response**", wenn Sie domainübergreifende Anfragen senden.
> In diesem Fall müssen Sie den {{HTTPHeader("Access-Control-Allow-Headers")}} in Ihrem Antwortheader auf Serverseite einrichten.

## Syntax

```js-nolint
setRequestHeader(header, value)
```

### Parameter

- `header`
  - : Der Name des Headers, dessen Wert festgelegt werden soll.
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
