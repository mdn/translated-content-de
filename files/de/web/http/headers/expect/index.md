---
title: Expect
slug: Web/HTTP/Headers/Expect
l10n:
  sourceCommit: 93e2eae70255b3e95c702fd7248bb90fff9a64a8
---

{{HTTPSidebar}}

Der **`Expect`** HTTP-Anfrage-Header zeigt Anforderungen an, die erfüllt werden müssen,
damit der Server die Anfrage erfolgreich verarbeiten kann.

Bei `Expect: 100-continue` antwortet der Server mit:

- {{HTTPStatus("100")}} (Continue), wenn die Informationen aus dem Anfrage-Header nicht ausreichen, um
  die Antwort zu lösen und der Client mit dem Senden des Körpers fortfahren soll.
- {{HTTPStatus("417")}} (Expectation Failed), wenn der Server die Anforderung nicht erfüllen kann,

oder einem anderen Status (z. B. ein 4xx-Status bei einem Clientfehler oder ein 2xx-Status, wenn die
Anfrage erfolgreich ohne weitere Verarbeitung gelöst werden kann).

Zum Beispiel kann der Server eine Anfrage ablehnen, wenn die {{HTTPHeader("Content-Length")}}
zu groß ist.

Keine gängigen Browser senden den `Expect`-Header, aber einige andere Clients wie
cURL tun dies standardmäßig.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>[Anfrage-Header](/de/docs/Glossary/Request_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Expect: 100-continue
```

## Direktiven

Es gibt nur eine definierte Anforderung:

- `100-continue`
  - : Informiert die Empfänger, dass der Client in dieser Anfrage im Begriff ist, einen (vermutlich großen) Nachrichtentext zu senden und wünscht sich, eine {{HTTPStatus("100")}} (Continue) Zwischenantwort zu erhalten.

## Beispiele

### Großer Nachrichtentext

Ein Client sendet eine Anfrage mit `Expect`-Header und wartet darauf, dass der Server antwortet,
bevor er den Nachrichtentext sendet.

```http
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

Der Server überprüft die Header und generiert die Antwort.
Der Server sendet {{HTTPStatus("100")}} (Continue), was den Client anweist, den Nachrichtentext zu senden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("417", "417 Expectation Failed")}}
- {{HTTPStatus("100", "100 Continue")}}
