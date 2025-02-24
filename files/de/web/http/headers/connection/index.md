---
title: Connection
slug: Web/HTTP/Headers/Connection
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-Header **`Connection`** steuert, ob die Netzwerkverbindung offen bleibt, nachdem die aktuelle Transaktion abgeschlossen ist. Wenn der gesendete Wert `keep-alive` ist, bleibt die Verbindung bestehen und wird nicht geschlossen, wodurch nachfolgende Anfragen an denselben Server über die gleiche Verbindung möglich sind.

> [!WARNING]
> Verbindungsspezifische Header-Felder wie `Connection` und {{HTTPHeader("Keep-Alive")}} sind in [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten. Chrome und Firefox ignorieren sie in HTTP/2-Antworten, aber Safari entspricht den HTTP/2-Spezifikationsanforderungen und lädt keine Antwort, die sie enthält.

Alle [Hop-by-Hop-Header](/de/docs/Web/HTTP/Compression#hop-by-hop_compression), einschließlich der Standard-Hop-by-Hop-Header ({{HTTPHeader("Keep-Alive")}}, {{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, `Connection`, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}}, {{HTTPHeader("Proxy-Authorization")}} und {{HTTPHeader("Proxy-Authenticate")}}) müssen im `Connection`-Header aufgeführt sein, damit der erste Proxy weiß, dass er sie konsumieren und nicht weiterleiten soll.

Der Standardwert von `Connection` hat sich zwischen HTTP/1.0 und HTTP/1.1 geändert. Daher senden Browser häufig `Connection: keep-alive` explizit, um die Rückwärtskompatibilität sicherzustellen, obwohl es in HTTP/1.1 der Standard ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>
        {{Glossary("Request_header", "Anforderungsheader")}},
        {{Glossary("Response_header", "Antwortheader")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
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

- `close`
  - : Gibt an, dass entweder der Client oder der Server die Verbindung schließen möchte. Dies ist der Standard bei HTTP/1.0-Anfragen.
- jede durch Kommas getrennte Liste von HTTP-Headern (normalerweise nur `keep-alive`)
  - : Gibt an, dass der Client die Verbindung offen halten möchte. Die Verbindung offen zu halten ist der Standard bei HTTP/1.1-Anfragen. Die Liste der Header sind die Namen der Header, die vom ersten nicht transparenten Proxy oder Cache dazwischen entfernt werden müssen: Diese Header definieren die Verbindung zwischen dem Absender und der ersten Entität, nicht dem Zielknoten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwaltung von Verbindungen in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
- [Mechanismus zum Protokoll-Upgrade](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
