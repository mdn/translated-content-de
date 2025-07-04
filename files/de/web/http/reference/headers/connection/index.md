---
title: Connection header
short-title: Connection
slug: Web/HTTP/Reference/Headers/Connection
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-**`Connection`**-Header steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion offen bleibt. Wenn der gesendete Wert `keep-alive` ist, bleibt die Verbindung bestehen und wird nicht geschlossen, sodass nachfolgende Anfragen an denselben Server über dieselbe Verbindung gesendet werden können.

> [!WARNING]
> Verbindungsbezogene Header-Felder wie `Connection` und {{HTTPHeader("Keep-Alive")}} sind in [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten. Chrome und Firefox ignorieren sie in HTTP/2-Antworten, aber Safari hält sich an die Anforderungen der HTTP/2-Spezifikation und lädt keine Antwort, die sie enthält.

Alle [Hop-by-hop-Header](/de/docs/Web/HTTP/Guides/Compression#hop-by-hop_compression), einschließlich der Standard-Hop-by-hop-Header ({{HTTPHeader("Keep-Alive")}}, {{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, `Connection`, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}}, {{HTTPHeader("Proxy-Authorization")}}, und {{HTTPHeader("Proxy-Authenticate")}}) müssen im `Connection`-Header aufgelistet werden, damit der erste Proxy weiß, dass er sie verarbeiten und nicht weiterleiten muss.

Der Standardwert von `Connection` änderte sich zwischen HTTP/1.0 und HTTP/1.1. Um Kompatibilität zu gewährleisten, senden Browser oft `Connection: keep-alive` explizit, auch wenn es in HTTP/1.1 der Standard ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
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
Connection: keep-alive
Connection: close
```

## Direktiven

- `close`:
  - Gibt an, dass entweder der Client oder der Server die Verbindung schließen möchte. Dies ist der Standardwert bei HTTP/1.0-Anfragen.
- Jede kommagetrennte Liste von HTTP-Headern (normalerweise nur `keep-alive`):
  - Gibt an, dass der Client die Verbindung offen halten möchte. Das Offenhalten der Verbindung ist der Standard bei HTTP/1.1-Anfragen. Die Liste der Header sind die Namen der Header, die vom ersten nicht-transparenten Proxy oder Cache dazwischen entfernt werden sollen: Diese Header definieren die Verbindung zwischen dem Sender und der ersten Entität, nicht dem Zielknoten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbindungsverwaltung in HTTP/1.x](/de/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x)
- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
