---
title: Expect
slug: Web/HTTP/Reference/Headers/Expect
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Expect`** {{Glossary("request_header", "Request-Header")}} gibt an, dass es Erwartungen gibt, die vom Server erfüllt werden müssen, um die vollständige Anfrage erfolgreich zu bearbeiten.

Wenn eine Anfrage einen `Expect: 100-continue` Header enthält, sendet ein Server eine {{HTTPStatus("100", "100 Continue")}} Antwort, um anzuzeigen, dass der Server bereit oder in der Lage ist, den Rest des Anfrageinhalts zu empfangen. Auf eine `100` Antwort zu warten, kann hilfreich sein, wenn ein Client erwartet, dass wahrscheinlich ein Fehler auftritt, zum Beispiel wenn Status-verändernde Operationen ohne vorher verifizierte Authentifizierungs-Credentials gesendet werden.

Eine {{HTTPStatus("417", "417 Expectation Failed")}} Antwort wird zurückgegeben, falls der Server die Erwartung nicht erfüllen kann oder jede andere Statusantwort, wie z.B. ein [4XX](/de/docs/Web/HTTP/Reference/Status#client_error_responses) Status für einen Client-Fehler oder ein [2XX](/de/docs/Web/HTTP/Reference/Status#successful_responses) Status, wenn die Anfrage erfolgreich ohne weitere Verarbeitung gelöst werden kann.

Keiner der gebräuchlicheren Browser sendet den `Expect` Header, aber einige Clients (Kommandozeilenwerkzeuge) tun dies standardmäßig.

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
  - : Informiert Empfänger darüber, dass der Client im Begriff ist, einen (vermutlich großen) Nachrichtenkörper in dieser Anfrage zu senden und eine {{HTTPStatus("100", "100 Continue")}} Zwischenantwort wünscht.

## Beispiele

### Großer Nachrichtenkörper

Ein Client sendet eine Anfrage mit `Expect` Header und wartet, bis der Server antwortet, bevor er den Nachrichtenkörper sendet.

```http
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

Der Server überprüft die Header und erzeugt die Antwort, wobei eine {{HTTPStatus("100", "100 Continue")}} den Client anweist, den Nachrichtenkörper zu senden:

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
