---
title: Expect
slug: Web/HTTP/Headers/Expect
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{HTTPSidebar}}

Der HTTP-**`Expect`**-{{Glossary("request_header", "Anforderungsheader")}} zeigt an, dass es Erwartungen gibt, die vom Server erfüllt werden müssen, um die vollständige Anfrage erfolgreich zu bearbeiten.

Wenn eine Anfrage einen `Expect: 100-continue`-Header enthält, sendet ein Server eine {{HTTPStatus("100", "100 Continue")}}-Antwort, um anzuzeigen, dass der Server bereit oder in der Lage ist, den Rest des Anfrageinhalts zu empfangen. Das Warten auf eine `100`-Antwort kann hilfreich sein, wenn ein Client mit einem Fehler rechnet, zum Beispiel, wenn zustandsverändernde Operationen ohne vorher verifizierte Authentifizierungsanmeldeinformationen gesendet werden.

Eine {{HTTPStatus("417", "417 Expectation Failed")}}-Antwort wird zurückgegeben, wenn der Server die Erwartung nicht erfüllen kann, oder anderweitig ein anderer Status (z.B. ein [4XX](/de/docs/Web/HTTP/Status#client_error_responses)-Status für einen Client-Fehler oder ein [2XX](/de/docs/Web/HTTP/Status#successful_responses)-Status, wenn die Anfrage erfolgreich ohne weitere Verarbeitung gelöst werden kann).

Keine der gängigeren Browser sendet den `Expect`-Header, aber einige Clients (Kommandozeilenwerkzeuge) tun dies standardmäßig.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request_header", "Anforderungsheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
  - : Informiert die Empfänger, dass der Client im Begriff ist, einen (vermutlich großen) Nachrichteninhalt in dieser Anfrage zu senden und eine vorläufige {{HTTPStatus("100", "100 Continue")}}-Antwort erhalten möchte.

## Beispiele

### Großer Nachrichteninhalt

Ein Client sendet eine Anfrage mit `Expect`-Header und wartet, bis der Server antwortet, bevor er den Nachrichteninhalt sendet.

```http
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

Der Server überprüft die Header und erzeugt die Antwort, wobei ein {{HTTPStatus("100", "100 Continue")}} den Client anweist, den Nachrichteninhalt zu senden:

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
