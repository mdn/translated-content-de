---
title: "XMLHttpRequest: Methode setRequestHeader()"
short-title: setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}} {{AvailableInWorkers("window_and_worker_except_service")}}

Die Methode **`setRequestHeader()`** von {{domxref("XMLHttpRequest")}} setzt den Wert eines HTTP-Anforderungs-Headers.
Wenn Sie `setRequestHeader()` verwenden, müssen Sie es nach dem Aufruf von {{domxref("XMLHttpRequest.open", "open()")}}, aber vor dem Aufruf von {{domxref("XMLHttpRequest.send", "send()")}} verwenden.
Wenn diese Methode mehrmals mit demselben Header aufgerufen wird, werden die Werte in einem einzigen Anforderungs-Header zusammengeführt.

Jedes Mal, wenn Sie `setRequestHeader()` nach dem ersten Mal aufrufen, wird der angegebene Text an das Ende des Inhalts des vorhandenen Headers angehängt.

Wenn kein {{HTTPHeader("Accept")}}-Header mithilfe dessen gesetzt wurde, wird ein `Accept`-Header mit dem Typ `"*/*"` mit der Anforderung gesendet, wenn {{domxref("XMLHttpRequest.send", "send()")}} aufgerufen wird.

Aus Sicherheitsgründen gibt es mehrere {{Glossary("Forbidden_header_name", "verbotene Header-Namen")}}, deren Werte vom Benutzeragenten kontrolliert werden. Jeder Versuch, einen Wert für einen dieser Header von Frontend-JavaScript-Code festzulegen, wird ohne Warnung oder Fehler ignoriert.

Zusätzlich kann der HTTP-Header [`Authorization`](/de/docs/Web/HTTP/Headers/Authorization) zu einer Anforderung hinzugefügt werden, wird jedoch entfernt, wenn die Anforderung länderübergreifend umgeleitet wird.

> [!NOTE]
> Für Ihre benutzerdefinierten Felder können Sie eine Ausnahme **"not allowed by Access-Control-Allow-Headers in preflight response"** erleben, wenn Sie Anfragen über Domains hinweg senden.
> In diesem Fall müssen Sie das {{HTTPHeader("Access-Control-Allow-Headers")}} in Ihrem Antwort-Header auf Serverseite einrichten.

## Syntax

```js-nolint
setRequestHeader(header, value)
```

### Parameter

- `header`
  - : Der Name des Headers, dessen Wert festgelegt werden soll.
- `value`
  - : Der Wert, der als Inhalt des Headers festgelegt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML in XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
