---
title: Upgrade header
short-title: Upgrade
slug: Web/HTTP/Reference/Headers/Upgrade
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP-`Upgrade`-{{Glossary("request_header", "Anforderungs-")}} und {{Glossary("response_header", "Antwort-Header")}} kann verwendet werden, um eine bereits etablierte Client-/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) aufzurüsten. Beispielsweise kann ein Client eine Verbindung von HTTP/1.1 zu HTTP/2 oder eine HTTP(S)-Verbindung zu einer WebSocket-Verbindung aufrüsten.

> [!WARNING]
> HTTP/2 verbietet ausdrücklich die Verwendung dieses Mechanismus und Headers; er ist spezifisch für HTTP/1.1.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungs-Header")}},
        {{Glossary("Response_header", "Antwort-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine kommagetrennte Liste von einem oder mehreren Protokollen:

```http
Upgrade: <protocol>[/<protocol_version>]
Upgrade: <protocol>[/<protocol_version>], …, <protocolN>[/<protocol_versionN>]
```

## Direktiven

- `<protocol>`
  - : Protokolle werden kommagetrennt in absteigender Präferenzreihenfolge aufgelistet.
- `<protocol_version>` {{optional_inline}}
  - : Eine optionale Protokollversion kann mit einem `/` Schrägstrich versehen angegeben werden.

## Beschreibung

Das `Upgrade`-Header-Feld kann von Clients verwendet werden, um einen Server einzuladen, zu einem (oder mehreren) der aufgeführten Protokolle in absteigender Präferenzreihenfolge zu wechseln. Beispielsweise könnte der Client eine `GET`-Anforderung wie gezeigt senden und die bevorzugten Protokolle zum Wechsel auflisten (in diesem Fall `example/1` und `foo/2`):

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> [!NOTE]
> Der {{HTTPHeader("Connection")}}-Header mit dem Typ `upgrade` muss _immer_ zusammen mit dem `Upgrade`-Header gesendet werden.

Der Server kann die Anforderung aus beliebigen Gründen ignorieren und sollte dann so antworten, als wäre der `Upgrade`-Header nicht gesendet worden (z. B. mit einem {{HTTPStatus(200, "200 OK")}}). Wenn der Server die Verbindung aufrüsten wird, muss er:

1. Einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem `Upgrade`-Header senden, der das/die gewechselte(n) Protokoll(e) angibt. Zum Beispiel:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. Eine Antwort auf die ursprüngliche Anfrage _mit dem neuen Protokoll_ senden (der Server darf nur zu einem Protokoll wechseln, mit dem er die ursprüngliche Anfrage abschließen kann).

Ein Server kann den Header auch als Teil einer {{HTTPStatus("426")}} `Upgrade Required`-Antwort senden, um anzuzeigen, dass der Server die Anforderung mit dem aktuellen Protokoll nicht ausführen wird, dies aber tun könnte, wenn das Protokoll geändert wird. Der Client kann dann eine Protokolländerung wie oben beschrieben anfordern.

Weitere Details und Beispiele finden Sie im Thema [Protokollwechselmechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism).

## Beispiele

### Upgrade-Header mit mehreren Protokollen

Die folgende Anforderung listet mehrere Protokolle in absteigender Präferenz auf:

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

### Aufrüstung zu WebSocket

Dies ist eine gängige Kombination von Headers, um mit der Aufrüstung einer HTTP-Verbindung zu WebSockets zu beginnen. Weitere Informationen finden Sie unter [Aufrüstung zu einer WebSocket-Verbindung](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#upgrading_to_a_websocket_connection).

```http
Connection: Upgrade
Upgrade: websocket
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Protokollwechselmechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- {{HTTPStatus(101, "101 Switching Protocols")}}
- {{HTTPStatus(426, "426 Upgrade Required")}}
- {{HTTPHeader("Connection")}}
