---
title: CONNECT request method
short-title: CONNECT
slug: Web/HTTP/Reference/Methods/CONNECT
l10n:
  sourceCommit: 44a853a7fce4ef042b6eeddc96f0a587f25704d3
---

Die **`CONNECT`** HTTP-Methode fordert, dass ein {{Glossary("Proxy_server", "Proxy")}} einen HTTP-Tunnel zu einem Zielserver herstellt, und wenn erfolgreich, Daten in beide Richtungen blind weiterleitet, bis der Tunnel geschlossen wird.

Das Anforderungsziel ist bei dieser Methode einzigartig, da es nur aus dem Host und der Portnummer des Tunnelziels besteht, die durch einen Doppelpunkt getrennt sind (siehe [Syntax](#syntax) für Details).
Jeder [2XX erfolgreiche Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status#successful_responses) bedeutet, dass der Proxy in den 'Tunnelmodus' wechselt und alle Daten im Erfolgsantwortkörper stammen von dem Server, der durch das Anforderungsziel identifiziert wird.

Wenn eine Website hinter einem Proxy steht und durch Netzwerkregeln erzwungen wird, dass der gesamte externe Datenverkehr über den Proxy laufen muss, ermöglicht die `CONNECT`-Methode Ihnen eine {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) Verbindung mit dieser Website aufzubauen:

- Der Client bittet den Proxy, die {{Glossary("TCP", "TCP")}}-Verbindung zum gewünschten Ziel zu tunneln.
- Der Proxy-Server stellt im Namen des Clients eine sichere Verbindung zum Server her.
- Sobald die Verbindung hergestellt ist, leitet der Proxy-Server den TCP-Datenstrom weiterhin an den Client und vom Client weiter.

Abgesehen davon, dass ein sicherer Zugriff auf hinter Proxys liegende Websites ermöglicht wird, bietet ein HTTP-Tunnel eine Möglichkeit, den über das HTTP(S)-Protokoll eingeschränkten Verkehr (SSH oder FTP) zuzulassen.

`CONNECT` ist eine Hop-by-Hop-Methode, was bedeutet, dass Proxys die `CONNECT`-Anfrage nur weiterleiten, wenn vor dem Ursprungsserver ein weiterer eingehender Proxy vorhanden ist, da die meisten Ursprungsserver `CONNECT` nicht implementieren.

> [!WARNING]
> Wenn Sie einen Proxy betreiben, der `CONNECT` unterstützt, beschränken Sie dessen Nutzung auf eine Reihe von bekannten Ports oder eine konfigurierbare Liste sicherer Anforderungsziele.
> Es bestehen erhebliche Risiken beim Aufbau eines Tunnels zu beliebigen Servern, insbesondere wenn das Ziel ein bekannter oder reservierter TCP-Port ist, der nicht für Webdatenverkehr vorgesehen ist.
> Ein locker konfigurierter Proxy kann missbraucht werden, um Verkehr wie SMTP weiterzuleiten, um beispielsweise Spam-E-Mails zu senden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anforderung hat einen Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe/HTTP", "Sicher")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "Idempotent")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "Cache-fähig")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        Erlaubt in <a href="/de/docs/Learn_web_development/Extensions/Forms">HTML-Formularen</a>
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
CONNECT <host>:<port> HTTP/1.1
```

- `<host>`
  - : Ein Host, der ein registrierter Hostname (z.B. `example.com`) oder eine IP-Adresse (IPv4, IPv6) sein kann.
- `<port>`
  - : Eine Portnummer in Dezimalnotation (z.B. `80`, `443`). Es gibt keinen Standardport, daher muss ein Client unbedingt einen angeben.

## Beispiele

### Proxy-Authentifizierung

Eine Anfrage an Proxy-Server, die zur Erstellung eines Tunnels eine Authentifizierung erfordern, sieht folgendermaßen aus. Weitere Informationen finden Sie im {{HTTPHeader("Proxy-Authorization")}}-Header.

```http
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{Glossary("Proxy_server", "Eintrag im Glossar zum Proxy-Server")}}
- {{HTTPHeader("Proxy-Authorization")}} Header
- [Anleitung zur Nutzung von SSH über einen HTTP-Proxy](https://www.dimoulis.net/posts/ssh-over-proxy/) dimoulis.net (2023)
