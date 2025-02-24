---
title: Expect
slug: Web/HTTP/Headers/Expect
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP **`Expect`** {{Glossary("request_header", "Anforderungsheader")}} gibt an, dass es Erwartungen gibt, die vom Server erfüllt werden müssen, um die vollständige Anforderung erfolgreich zu bearbeiten.

Wenn eine Anforderung einen `Expect: 100-continue` Header hat, sendet ein Server eine {{HTTPStatus("100", "100 Continue")}} Antwort, um anzuzeigen, dass der Server bereit oder in der Lage ist, den Rest des Anforderungsinhalts zu empfangen. Das Warten auf eine `100` Antwort kann hilfreich sein, wenn ein Kunde erwartet, dass ein Fehler wahrscheinlich ist, zum Beispiel beim Senden von zustandsändernden Operationen ohne zuvor überprüfte Authentifizierungsinformationen.

Eine {{HTTPStatus("417", "417 Expectation Failed")}} Antwort wird zurückgegeben, wenn der Server die Erwartung nicht erfüllen kann, oder ein anderer Status ansonsten (z.B. ein [4XX](/de/docs/Web/HTTP/Status#client_error_responses) Status für einen Client-Fehler oder ein [2XX](/de/docs/Web/HTTP/Status#successful_responses) Status, wenn die Anforderung erfolgreich ohne weitere Bearbeitung gelöst werden kann).

Keiner der geläufigeren Browser sendet den `Expect` Header, aber einige Clients (Kommandozeilen-Tools) tun dies standardmäßig.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Expect: 100-continue
```

## Direktiven

Es gibt nur eine definierte Erwartung:

- `100-continue`
  - : Informiert die Empfänger darüber, dass der Client dabei ist, einen (vermutlich großen) Nachrichtentext in dieser Anforderung zu senden und wünscht eine {{HTTPStatus("100", "100 Continue")}} Zwischenantwort zu erhalten.

## Beispiele

### Großer Nachrichtentext

Ein Client sendet eine Anfrage mit `Expect` Header und wartet, bis der Server antwortet, bevor der Nachrichtentext gesendet wird.

```http
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

Der Server überprüft die Header und generiert die Antwort, bei der ein {{HTTPStatus("100", "100 Continue")}} dem Client anweist, den Nachrichtentext zu senden:

```http
HTTP/1.1 100 Continue
```

Der Client vervollständigt die Anfrage, indem er die tatsächlichen Daten sendet:

```http
[Video data as content for PUT request]
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("417", "417 Expectation Failed")}}
- {{HTTPStatus("100", "100 Continue")}}
