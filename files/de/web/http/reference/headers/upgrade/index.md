---
title: Upgrade header
short-title: Upgrade
slug: Web/HTTP/Reference/Headers/Upgrade
l10n:
  sourceCommit: dd65cba1d9aafa2efd4432ab52bb1c034ef5a3b6
---

Der HTTP-**`Upgrade`**-{{Glossary("request_header", "Request-Header")}} und -{{Glossary("response_header", "Response-Header")}} können verwendet werden, um eine bereits bestehende Verbindung zwischen Client und Server auf ein anderes Protokoll umzustellen (unter Verwendung desselben Transportprotokolls).
Beispielsweise kann ein Client damit eine Verbindung von HTTP/1.1 auf HTTP/2 oder eine HTTP(S)-Verbindung auf eine WebSocket-Verbindung umstellen.

> [!WARNING]
> HTTP/2 untersagt die Verwendung dieses Mechanismus und dieses Headers ausdrücklich; sie sind spezifisch für HTTP/1.1.

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

## Direktiven

- `<protocol>`
  - : Protokolle werden durch Kommas getrennt und in absteigender Reihenfolge ihrer Präferenz aufgeführt.
- `<protocol_version>` {{optional_inline}}
  - : Optional kann eine Protokollversion angegeben werden, der ein Schrägstrich `/` vorangestellt ist.

## Beschreibung

Clients können den `Upgrade`-Header verwenden, um einen Server aufzufordern, zu einem oder mehreren der aufgeführten Protokolle zu wechseln, geordnet nach absteigender Präferenz.
Beispielsweise könnte der Client eine `GET`-Anfrage wie gezeigt senden und dabei die bevorzugten Protokolle für den Wechsel angeben (in diesem Fall `example/1` und `foo/2`):

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

> [!NOTE]
> Der {{HTTPHeader("Connection")}}-Header mit dem Wert `upgrade` muss _immer_ zusammen mit dem `Upgrade`-Header gesendet werden.

Der Server kann die Anfrage aus beliebigem Grund ignorieren. In diesem Fall sollte er so antworten, als wäre der `Upgrade`-Header nicht gesendet worden (beispielsweise mit einem {{HTTPStatus(200, "200 OK")}}).
Wenn der Server die Verbindung umstellt, muss er:

1. Einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem `Upgrade`-Header zurücksenden, der das Protokoll bzw. die Protokolle angibt, zu denen gewechselt wird. Zum Beispiel:

   ```http
   HTTP/1.1 101 Switching Protocols
   Upgrade: foo/2
   Connection: Upgrade
   ```

2. Eine Antwort auf die ursprüngliche Anfrage _unter Verwendung des neuen Protokolls_ senden (der Server darf nur zu einem Protokoll wechseln, mit dem er die ursprüngliche Anfrage abschließen kann).

Ein Server kann den Header auch als Teil einer {{HTTPStatus("426")}}-Antwort (`Upgrade Required`) senden, um anzugeben, dass er die Anfrage mit dem aktuellen Protokoll nicht ausführt, dies nach einem Protokollwechsel aber möglicherweise tun würde. Der Client kann dann mithilfe des oben beschriebenen Verfahrens einen Protokollwechsel anfordern.

Weitere Einzelheiten und Beispiele finden Sie unter [Mechanismus zum Protokollwechsel](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism).

## Beispiele

### Upgrade-Header mit mehreren Protokollen

Die folgende Anfrage führt mehrere Protokolle in absteigender Reihenfolge ihrer Präferenz auf:

```http
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

### Wechsel zu WebSocket

Diese Kombination von Headern wird häufig verwendet, um den Wechsel einer HTTP-Verbindung zu WebSocket einzuleiten.
Weitere Informationen finden Sie unter [Wechsel zu einer WebSocket-Verbindung](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#upgrading_to_a_websocket_connection).

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
