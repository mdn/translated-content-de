---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`CONNECT`** HTTP-Methode fordert, dass ein [Proxy](/de/docs/Glossary/Proxy_server) einen HTTP-Tunnel zu einem Zielserver aufbaut und im Erfolgsfall Daten in beide Richtungen blind weiterleitet, bis der Tunnel geschlossen ist.

Das Request-Ziel ist für diese Methode einzigartig, da es nur aus dem Host und der Portnummer des Tunneldestinations besteht, getrennt durch einen Doppelpunkt (siehe [Syntax](#syntax) für Details).
Jeder [2XX erfolgreiche Antwortstatuscode](/de/docs/Web/HTTP/Status#successful_responses) bedeutet, dass der Proxy in den "Tunnelmodus" wechselt und alle Daten im Erfolgsantwortkörper von dem Server stammen, der durch das Request-Ziel identifiziert wird.

Wenn eine Website hinter einem Proxy liegt und es durch Netzwerkrichtlinien erzwungen wird, dass aller ausgehender Verkehr durch den Proxy geleitet werden muss, ermöglicht die `CONNECT`-Methode, eine [TLS](/de/docs/Glossary/TLS) ([HTTPS](/de/docs/Glossary/HTTPS)) Verbindung mit dieser Website aufzubauen:

- Der Client bittet den Proxy, die [TCP](/de/docs/Glossary/TCP)-Verbindung zum gewünschten Ziel zu tunneln.
- Der Proxyserver stellt im Auftrag des Clients eine sichere Verbindung zum Server her.
- Sobald die Verbindung eingerichtet ist, leitet der Proxyserver den TCP-Strom an den Client und vom Client zurück.

Abgesehen von der Sicherstellung eines sicheren Zugangs zu Websites hinter Proxys bietet ein HTTP-Tunnel eine Möglichkeit, Verkehr zuzulassen, der sonst eingeschränkt wäre (SSH oder FTP) über das HTTP(S)-Protokoll.

`CONNECT` ist eine hop-by-hop Methode, was bedeutet, dass Proxys die `CONNECT`-Anfrage nur weiterleiten, wenn sich ein weiterer eingehender Proxy vor dem Ursprungsserver befindet, da die meisten Ursprungsserver `CONNECT` nicht implementieren.

> [!WARNING]
> Wenn Sie einen Proxy betreiben, der `CONNECT` unterstützt, beschränken Sie seine Verwendung auf eine Reihe von bekannten Ports oder eine konfigurierbare Liste sicherer Anforderungsziele.
> Es gibt erhebliche Risiken beim Aufbau eines Tunnels zu beliebigen Servern, insbesondere wenn das Ziel ein bekannter oder reservierter TCP-Port ist, der nicht für Webverkehr vorgesehen ist.
> Ein locker konfigurierter Proxy könnte missbraucht werden, um Verkehr wie SMTP weiterzuleiten, um beispielsweise Spam-E-Mails zu versenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">[Sicher](/de/docs/Glossary/Safe/HTTP)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">[Idempotent](/de/docs/Glossary/Idempotent)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">[Zwischenspeicherbar](/de/docs/Glossary/Cacheable)</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        Erlaubt in <a href="/de/docs/Learn/Forms">HTML-Formularen</a>
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
  - : Eine Portnummer in Dezimalform (z.B. `80`, `443`). Es gibt keinen Standardport, daher **muss** ein Client eine angeben.

## Beispiele

### Proxy-Authentifizierung

Eine Anfrage an Proxy-Server, die eine Authentifizierung erfordern, um einen Tunnel zu erstellen, sieht wie folgt aus.
Sehen Sie sich den {{HTTPHeader("Proxy-Authorization")}} Header für weitere Informationen an.

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

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- [Proxy-Server](/de/docs/Glossary/Proxy_server) Glossareintrag
- {{HTTPHeader("Proxy-Authorization")}} Header
- [Anleitung zur Nutzung von SSH über einen HTTP-Proxy](https://www.dimoulis.net/posts/ssh-over-proxy/) dimoulis.net (2023)
