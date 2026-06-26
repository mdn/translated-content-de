---
title: Expect header
short-title: Expect
slug: Web/HTTP/Reference/Headers/Expect
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-**`Expect`**-{{Glossary("request_header", "Request-Header")}} zeigt an, dass es Erwartungen gibt, die vom Server erfüllt werden müssen, um die vollständige Anfrage erfolgreich zu verarbeiten.

Wenn eine Anfrage einen `Expect: 100-continue`-Header hat, sendet ein Server eine {{HTTPStatus("100", "100 Continue")}}-Antwort, um anzuzeigen, dass der Server bereit oder fähig ist, den Rest des Anfrage-Inhalts zu empfangen. Das Warten auf eine `100`-Antwort kann hilfreich sein, wenn ein Client erwartet, dass ein Fehler wahrscheinlich ist, zum Beispiel beim Senden von zustandsverändernden Operationen ohne vorher verifizierte Authentifizierungsdaten.

Eine {{HTTPStatus("417", "417 Expectation Failed")}}-Antwort wird zurückgegeben, wenn der Server die Erwartung nicht erfüllen kann, oder ein anderer Status (z.B. ein [4XX](/de/docs/Web/HTTP/Reference/Status#client_error_responses)-Status für einen Client-Fehler oder ein [2XX](/de/docs/Web/HTTP/Reference/Status#successful_responses)-Status, wenn die Anfrage erfolgreich abgeschlossen werden kann, ohne weitere Verarbeitung).

Keiner der gängigeren Browser sendet den `Expect`-Header, aber einige Clients (Kommandozeilen-Tools) tun dies standardmäßig.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
  - : Informiert die Empfänger, dass der Client im Begriff ist, einen (vermutlich großen) Nachrichtentext in dieser Anfrage zu senden und wünscht eine {{HTTPStatus("100", "100 Continue")}} zwischenzeitliche Antwort zu erhalten.

## Beispiele

### Großer Nachrichtentext

Ein Client sendet eine Anfrage mit `Expect`-Header und wartet auf die Antwort des Servers, bevor der Nachrichtentext gesendet wird.

```http
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

Der Server überprüft die Header und erzeugt die Antwort, wobei eine {{HTTPStatus("100", "100 Continue")}}-Antwort den Client anweist, den Nachrichtentext zu senden:

```http
HTTP/1.1 100 Continue
```

Der Client vervollständigt die Anfrage, indem er die eigentlichen Daten sendet:

```http
[Video data as content for PUT request]
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("417", "417 Expectation Failed")}}
- {{HTTPStatus("100", "100 Continue")}}
