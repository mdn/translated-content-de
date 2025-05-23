---
title: Expect header
short-title: Expect
slug: Web/HTTP/Reference/Headers/Expect
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Expect`** {{Glossary("request_header", "Request-Header")}} zeigt an, dass bestimmte Erwartungen vom Server erfüllt werden müssen, um die gesamte Anfrage erfolgreich zu bearbeiten.

Wenn eine Anfrage einen `Expect: 100-continue` Header enthält, sendet ein Server eine {{HTTPStatus("100", "100 Continue")}}-Antwort, um anzuzeigen, dass der Server bereit oder in der Lage ist, den Rest des Anfrageninhalts zu empfangen. Auf eine `100`-Antwort zu warten, kann hilfreich sein, wenn ein Client voraussieht, dass ein Fehler wahrscheinlich ist, zum Beispiel beim Senden von zustandsändernden Operationen ohne vorher verifizierte Authentifizierungsdaten.

Eine {{HTTPStatus("417", "417 Expectation Failed")}}-Antwort wird zurückgegeben, wenn der Server die Erwartung nicht erfüllen kann, oder jeder andere Status ansonsten (z. B. ein [4XX](/de/docs/Web/HTTP/Reference/Status#client_error_responses)-Status für einen Client-Fehler, oder ein [2XX](/de/docs/Web/HTTP/Reference/Status#successful_responses)-Status, wenn die Anfrage erfolgreich bearbeitet werden kann, ohne weitere Verarbeitung).

Keiner der gängigeren Browser sendet den `Expect`-Header, aber einige Clients (Kommandozeilen-Tools) tun dies standardmäßig.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Request-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
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
  - : Informiert Empfänger, dass der Client im Begriff ist, einen (vermutlich großen) Nachrichteninhalt in dieser Anfrage zu senden und wünscht eine {{HTTPStatus("100", "100 Continue")}} Zwischenantwort zu erhalten.

## Beispiele

### Großer Nachrichteninhalt

Ein Client sendet eine Anfrage mit `Expect`-Header und wartet darauf, dass der Server antwortet, bevor der Nachrichteninhalt gesendet wird.

```http
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

Der Server überprüft die Header und generiert die Antwort, wobei eine {{HTTPStatus("100", "100 Continue")}} den Client anweist, den Nachrichteninhalt zu senden:

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
