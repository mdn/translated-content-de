---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
l10n:
  sourceCommit: 260f4700362dffe26227ad3b9cf15335916cef44
---

{{HTTPSidebar}}

Die **`CONNECT`** HTTP-Methode fordert, dass ein [Proxy](/de/docs/Glossary/Proxy_server) einen HTTP-Tunnel zu einem Zielserver herstellt und, falls erfolgreich, Daten in beide Richtungen blind weiterleitet, bis der Tunnel geschlossen wird.

Das Ziel der Anfrage ist bei dieser Methode einzigartig, da es nur aus dem Host und der Portnummer des Zielservers des Tunnels besteht, getrennt durch einen Doppelpunkt (siehe [Syntax](#syntax) für Details).
Jeder [2XX erfolgreiche Antwort-Statuscode](/de/docs/Web/HTTP/Status#successful_responses) bedeutet, dass der Proxy in den "Tunnelmodus" wechselt und alle Daten im erfolgreichen Antwortkörper von dem Server stammen, der durch das Anforderungsziel identifiziert wird.

Wenn eine Website hinter einem Proxy steht und es per Netzwerkregeln erzwungen wird, dass der gesamte externe Verkehr durch den Proxy geleitet werden muss, ermöglicht die `CONNECT`-Methode das Herstellen einer [TLS](/de/docs/Glossary/TLS) ([HTTPS](/de/docs/Glossary/HTTPS))-Verbindung mit dieser Website:

- Der Client fordert den Proxy auf, die [TCP](/de/docs/Glossary/TCP)-Verbindung zum gewünschten Ziel zu tunneln.
- Der Proxy-Server stellt im Namen des Clients eine sichere Verbindung zum Server her.
- Sobald die Verbindung hergestellt ist, leitet der Proxy-Server den TCP-Datenstrom weiterhin zum und vom Client.

Neben der Ermöglichung des sicheren Zugriffs auf Websites hinter Proxys bietet ein HTTP-Tunnel eine Möglichkeit, Verkehr zuzulassen, der ansonsten eingeschränkt wäre (SSH oder FTP) über das HTTP(S)-Protokoll.

`CONNECT` ist eine hop-by-hop Methode, was bedeutet, dass Proxys die `CONNECT`-Anfrage nur weiterleiten, wenn ein weiterer eingehender Proxy vor dem Ursprungsserver existiert, da die meisten Ursprungsserver `CONNECT` nicht implementieren.

> [!WARNING]
> Wenn Sie einen Proxy betreiben, der `CONNECT` unterstützt, beschränken Sie seine Nutzung auf eine Auswahl bekannter Ports oder eine konfigurierbare Liste sicherer Anforderungsziele.
> Es gibt erhebliche Risiken beim Einrichten eines Tunnels zu beliebigen Servern, insbesondere wenn das Ziel ein bekannter oder vorbehaltener TCP-Port ist, der nicht für Webverkehr bestimmt ist.
> Ein locker konfigurierter Proxy kann missbraucht werden, um Verkehr wie SMTP weiterzuleiten, um beispielsweise Spam-E-Mails zu versenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Body</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Body</th>
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
      <th scope="row">[Cacheable](/de/docs/Glossary/Cacheable)</th>
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
  - : Eine Portnummer im Dezimalformat (z.B. `80`, `443`). Es gibt keinen Standardport, daher **muss** ein Client einen senden.

## Beispiele

### Proxy-Authentifizierung

Eine Anfrage für Proxy-Server, die zur Erstellung eines Tunnels eine Authentifizierung erfordern, sieht folgendermaßen aus.
Siehe den {{HTTPHeader("Proxy-Authorization")}} Header für weitere Informationen.

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
- [Glossareintrag Proxy-Server](/de/docs/Glossary/Proxy_server)
- {{HTTPHeader("Proxy-Authorization")}} Header
- [Anleitung zur Nutzung von SSH über einen HTTP-Proxy](https://www.dimoulis.net/posts/ssh-over-proxy/) dimoulis.net (2023)
