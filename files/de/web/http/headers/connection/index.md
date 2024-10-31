---
title: Connection
slug: Web/HTTP/Headers/Connection
l10n:
  sourceCommit: 92b03e46cef6be37de60799363e3e33e3415b491
---

{{HTTPSidebar}}

Der HTTP-Header **`Connection`** steuert, ob die Netzwerkverbindung nach Abschluss der aktuellen Transaktion geöffnet bleibt. Wenn der gesendete Wert `keep-alive` ist, bleibt die Verbindung bestehen und wird nicht geschlossen, wodurch nachfolgende Anfragen an denselben Server über dieselbe Verbindung ermöglicht werden.

> [!WARNING]
> Verbindungsspezifische Header-Felder wie `Connection` und {{HTTPHeader("Keep-Alive")}} sind in [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) und [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) verboten. Chrome und Firefox ignorieren sie in HTTP/2-Antworten, aber Safari entspricht den Anforderungen der HTTP/2-Spezifikationen und lädt keine Antwort, die sie enthält.

Alle [Hop-by-Hop-Header](/de/docs/Web/HTTP/Compression#hop-by-hop_compression), einschließlich der standardmäßigen Hop-by-Hop-Header ({{HTTPHeader("Keep-Alive")}}, {{HTTPHeader("Transfer-Encoding")}}, {{HTTPHeader("TE")}}, `Connection`, {{HTTPHeader("Trailer")}}, {{HTTPHeader("Upgrade")}}, {{HTTPHeader("Proxy-Authorization")}}, und {{HTTPHeader("Proxy-Authenticate")}}) müssen im `Connection`-Header aufgelistet werden, damit der erste Proxy weiß, dass er sie konsumieren und nicht weiterleiten muss.

Der Standardwert von `Connection` änderte sich zwischen HTTP/1.0 und HTTP/1.1. Um die Rückwärtskompatibilität sicherzustellen, senden Browser daher häufig explizit `Connection: keep-alive`, auch wenn dies in HTTP/1.1 der Standard ist.

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
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Connection: keep-alive
Connection: close
```

## Anweisungen

- `close`
  - : Gibt an, dass entweder der Client oder der Server die Verbindung schließen möchten. Dies ist der Standard bei HTTP/1.0-Anfragen.
- jede komma-separierte Liste von HTTP-Headern (normalerweise nur `keep-alive`)
  - : Gibt an, dass der Client die Verbindung offen halten möchte. Das Offenhalten der Verbindung ist der Standard bei HTTP/1.1-Anfragen. Die Liste der Header sind die Namen der Header, die vom ersten nicht-transparenten Proxy oder Cache dazwischen entfernt werden sollen: Diese Header definieren die Verbindung zwischen dem Sender und der ersten Einheit, nicht dem Zielknoten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
