---
title: Expect header
short-title: Expect
slug: Web/HTTP/Reference/Headers/Expect
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Expect`**-{{Glossary("request_header", "Request-Header")}} zeigt an, dass bestimmte Erwartungen erfüllt werden müssen, damit der Server die vollständige Anfrage erfolgreich bearbeiten kann.

Wenn eine Anfrage einen `Expect: 100-continue`-Header hat, sendet der Server eine {{HTTPStatus("100", "100 Continue")}}-Antwort, um anzuzeigen, dass der Server bereit ist, den Rest des Anfrageinhalts zu empfangen.
Das Warten auf eine `100`-Antwort kann hilfreich sein, wenn ein Client erwartet, dass ein Fehler wahrscheinlich ist, z. B. beim Senden von zustandsändernden Operationen ohne zuvor verifizierte Authentifizierungsdaten.

Eine {{HTTPStatus("417", "417 Expectation Failed")}}-Antwort wird zurückgegeben, wenn der Server die Erwartung nicht erfüllen kann, oder ein anderer Status (z. B. ein [4XX](/de/docs/Web/HTTP/Reference/Status#client_error_responses)-Status für einen Clientfehler oder ein [2XX](/de/docs/Web/HTTP/Reference/Status#successful_responses)-Status, wenn die Anfrage erfolgreich ohne weitere Verarbeitung abgeschlossen werden kann).

Keine der gängigeren Browser sendet den `Expect`-Header, aber einige Clients (Kommandozeilenwerkzeuge) tun dies standardmäßig.

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
  - : Informiert den Empfänger, dass der Client dabei ist, einen (vermutlich großen) Nachrichtenkörper in dieser Anfrage zu senden und wünscht, eine {{HTTPStatus("100", "100 Continue")}}-Zwischenantwort zu erhalten.

## Beispiele

### Großer Nachrichtenkörper

Ein Client sendet eine Anfrage mit `Expect`-Header und wartet darauf, dass der Server antwortet, bevor er den Nachrichtenkörper sendet.

```http
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

Der Server prüft die Header und generiert die Antwort, wobei ein {{HTTPStatus("100", "100 Continue")}} den Client anweist, den Nachrichtenkörper zu senden:

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
