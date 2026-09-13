---
title: Upgrade header
short-title: Upgrade
slug: Web/HTTP/Reference/Headers/Upgrade
l10n:
  sourceCommit: 44a853a7fce4ef042b6eeddc96f0a587f25704d3
---

Der HTTP-`Upgrade`-{{Glossary("request_header", "Request-Header")}} und {{Glossary("response_header", "Response-Header")}} kann verwendet werden, um eine bereits etablierte Client/Server-Verbindung auf ein anderes Protokoll (über dasselbe Transportprotokoll) aufzurüsten. Zum Beispiel kann ein Client eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung auf eine WebSocket-Verbindung aufrüsten.

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

```http
Upgrade: <protocol>[/<protocol_version>]
Upgrade: <protocol>[/<protocol_version>], …, <protocolN>[/<protocol_versionN>]
```

## Anweisungen

- `<protocol>`
  - : Protokolle werden kommagetrennt in absteigender Prioritätsreihenfolge aufgelistet.
- `<protocol_version>` {{optional_inline}}
  - : Eine optionale Protokollversion kann angegeben werden, der ein `/` Schrägstrich vorangestellt ist.

## Beschreibung

Das `Upgrade`-Header-Feld kann von Clients verwendet werden, um einen Server einzuladen, zu einem (oder mehreren) der aufgelisteten Protokolle in absteigender Präferenzreihenfolge zu wechseln. Zum Beispiel kann der Client eine `GET`-Anfrage senden, wie gezeigt, und die bevorzugten Protokolle auflisten, zu denen gewechselt werden soll (in diesem Fall `example/1` und `foo/2`):

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> [!NOTE]
> Der {{HTTPHeader("Connection")}}-Header vom Typ `upgrade` muss _immer_ mit dem `Upgrade`-Header gesendet werden.

Der Server kann die Anfrage aus beliebigem Grund ignorieren, in diesem Fall sollte er antworten, als ob der `Upgrade`-Header nicht gesendet worden wäre (zum Beispiel mit einem {{HTTPStatus(200, "200 OK")}}). Wenn der Server die Verbindung aufrüsten möchte, muss er:

1. Einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus zurücksenden mit einem `Upgrade`-Header, der die Protokolle angibt, zu denen gewechselt wird. Zum Beispiel:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. Eine Antwort auf die ursprüngliche Anfrage _unter Verwendung des neuen Protokolls_ senden (der Server darf nur zu einem Protokoll wechseln, mit dem er die ursprüngliche Anfrage abschließen kann).

Ein Server kann den Header auch als Teil einer {{HTTPStatus("426")}} `Upgrade Required`-Antwort senden, um anzuzeigen, dass er die Anfrage nicht mit dem aktuellen Protokoll ausführen wird, dies aber möglicherweise tut, wenn das Protokoll geändert wird. Der Client kann dann einen Protokollwechsel unter Verwendung des oben beschriebenen Prozesses anfordern.

Mehr Details und Beispiele finden Sie im Thema [Mechanismus zum Protokollwechsel](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism).

## Beispiele

### Upgrade-Header mit mehreren Protokollen

Die folgende Anfrage listet mehrere Protokolle in absteigender Präferenz auf:

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

### Aufrüstung zu WebSocket

Dies ist eine häufige Kombination von Headers, um mit der Aufrüstung einer HTTP-Verbindung zu WebSockets zu beginnen. Siehe [Aufrüsten zu einer WebSocket-Verbindung](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#upgrading_to_a_websocket_connection) für weitere Informationen.

```http
Connection: Upgrade
Upgrade: websocket
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mechanismus zum Protokollwechsel](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- {{HTTPStatus(101, "101 Switching Protocols")}}
- {{HTTPStatus(426, "426 Upgrade Required")}}
- {{HTTPHeader("Connection")}}
