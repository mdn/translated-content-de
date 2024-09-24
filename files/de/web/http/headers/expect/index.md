---
title: Erwarten
slug: Web/HTTP/Headers/Expect
l10n:
  sourceCommit: 93e2eae70255b3e95c702fd7248bb90fff9a64a8
---

{{HTTPSidebar}}

Der **`Expect`** HTTP-Anforderungsheader zeigt Erwartungen an, die vom Server erfüllt werden müssen, um die Anfrage erfolgreich zu bearbeiten.

Bei `Expect: 100-continue` antwortet der Server mit:

- {{HTTPStatus("100")}} (Continue), wenn die Informationen aus dem Anforderungsheader nicht ausreichen, um die Antwort zu lösen und der Client mit dem Senden des Hauptteils fortfahren soll.
- {{HTTPStatus("417")}} (Expectation Failed), wenn der Server die Erwartung nicht erfüllen kann

oder einem anderen Status, falls anders (z.B. ein 4xx-Status für einen Client-Fehler oder ein 2xx-Status, wenn die Anfrage erfolgreich ohne weitere Verarbeitung gelöst werden kann).

Zum Beispiel kann der Server eine Anfrage ablehnen, wenn ihre {{HTTPHeader("Content-Length")}} zu groß ist.

Keine gängigen Browser senden den `Expect`-Header, aber einige andere Clients wie cURL tun dies standardmäßig.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>ja</td>
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
  - : Informiert die Empfänger, dass der Client im Begriff ist, einen (vermutlich großen) Nachrichtenkörper in dieser Anfrage zu senden und wünscht eine {{HTTPStatus("100")}} (Continue) Zwischenantwort zu erhalten.

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

Der Server überprüft die Header und erstellt die Antwort. Der Server sendet {{HTTPStatus("100")}} (Continue), was den Client anweist, den Nachrichtenkörper zu senden.

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPStatus("417", "417 Erwartung fehlgeschlagen")}}
- {{HTTPStatus("100", "100 Fortfahren")}}
