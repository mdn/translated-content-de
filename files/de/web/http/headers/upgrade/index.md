---
title: Upgrade
slug: Web/HTTP/Headers/Upgrade
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP `Upgrade`-{{Glossary("request_header", "Request-Header")}} und der {{Glossary("response_header", "Response-Header")}} können verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) aufzurüsten. Zum Beispiel kann ein Client sie verwenden, um eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung auf eine WebSocket-Verbindung zu upgraden.

> [!WARNING]
> HTTP/2 verbietet ausdrücklich die Verwendung dieses Mechanismus und Headers; er ist spezifisch für HTTP/1.1.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Request-Header")}},
        {{Glossary("Response_header", "Response-Header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine durch Kommas getrennte Liste von einem oder mehreren Protokollen:

```http
Upgrade: <protocol>[/<protocol_version>]
Upgrade: <protocol>[/<protocol_version>], …, <protocolN>[/<protocol_versionN>]
```

## Direktiven

- `<protocol>`
  - : Protokolle werden in absteigender Präferenz in kommagetrennter Reihenfolge aufgelistet.
- `<protocol_version>` {{optional_inline}}
  - : Eine optionale Protokollversion kann mit einem `/` Schrägstrich vorangestellt werden.

## Beschreibung

Das `Upgrade`-Headerfeld kann von Clients verwendet werden, um den Server einzuladen, zu einem (oder mehreren) der aufgelisteten Protokolle in absteigender Präferenzreihenfolge zu wechseln. Zum Beispiel könnte der Client eine `GET`-Anfrage wie gezeigt senden, in der er die bevorzugten Protokolle zum Wechseln auflistet (in diesem Fall `example/1` und `foo/2`):

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> [!NOTE]
> Der {{HTTPHeader("Connection")}}-Header mit dem Typ `upgrade` muss _immer_ mit dem `Upgrade`-Header gesendet werden.

Der Server kann die Anfrage aus jedem Grund ignorieren, in diesem Fall sollte er antworten, als wäre der `Upgrade`-Header nicht gesendet worden (zum Beispiel mit einem {{HTTPStatus(200, "200 OK")}}). Wenn der Server die Verbindung upgrade möchte, muss er:

1. Einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem `Upgrade`-Header senden, der das/die Protokoll(e) angibt, zu dem/denen gewechselt wird. Zum Beispiel:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. Eine Antwort auf die ursprüngliche Anfrage _unter Verwendung des neuen Protokolls_ senden (der Server darf nur zu einem Protokoll wechseln, mit dem er die ursprüngliche Anfrage abschließen kann).

Ein Server kann den Header auch als Teil einer {{HTTPStatus("426")}} `Upgrade Required`-Antwort senden, um anzuzeigen, dass der Server die Anfrage mit dem aktuellen Protokoll nicht ausführen wird, dies aber möglicherweise tut, wenn das Protokoll geändert wird. Der Client kann dann wie oben beschrieben eine Protokolländerung anfordern.

Weitere Details und Beispiele finden Sie im Thema [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism).

## Beispiele

### Upgrade-Header mit mehreren Protokollen

Die folgende Anfrage listet mehrere Protokolle in absteigender Präferenz auf:

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

### Upgrade zu WebSocket

Dies ist eine gängige Kombination von Headers, um mit der Aufrüstung einer HTTP-Verbindung zu WebSockets zu beginnen. Siehe [Upgrade zu einer WebSocket-Verbindung](/de/docs/Web/HTTP/Protocol_upgrade_mechanism#upgrading_to_a_websocket_connection) für weitere Informationen.

```http
Connection: Upgrade
Upgrade: websocket
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
- {{HTTPStatus(101, "101 Switching Protocols")}}
- {{HTTPStatus(426, "426 Upgrade Required")}}
- {{HTTPHeader("Connection")}}
