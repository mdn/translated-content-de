---
title: CONNECT
slug: Web/HTTP/Reference/Methods/CONNECT
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Die **`CONNECT`** HTTP-Methode fordert, dass ein {{Glossary("Proxy_server", "Proxy")}} einen HTTP-Tunnel zu einem Zielserver herstellt und, falls erfolgreich, Daten in beide Richtungen blind weiterleitet, bis der Tunnel geschlossen wird.

Das Ziel der Anfrage ist bei dieser Methode einzigartig, da es nur aus dem Host und der Portnummer des Tunnelziels besteht, getrennt durch einen Doppelpunkt (siehe [Syntax](#syntax) für Details).
Jeder [2XX Erfolgsstatuscode](/de/docs/Web/HTTP/Reference/Status#successful_responses) bedeutet, dass der Proxy in den „Tunnelmodus“ wechselt und alle Daten im Erfolgsantwortkörper stammen von dem Server, der durch das Anforderungsziel identifiziert wird.

Wenn eine Website hinter einem Proxy steht und es durch Netzwerkrichtlinien erzwungen wird, dass der gesamte externe Verkehr durch den Proxy gehen muss, ermöglicht die `CONNECT`-Methode Ihnen, eine {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) Verbindung mit dieser Website herzustellen:

- Der Client bittet den Proxy, die {{Glossary("TCP", "TCP")}} Verbindung zum gewünschten Ziel zu tunneln.
- Der Proxy-Server stellt im Namen des Clients eine sichere Verbindung zum Server her.
- Sobald die Verbindung hergestellt ist, setzt der Proxy-Server fort, den TCP-Datenstrom zum und vom Client zu übermitteln.

Abgesehen davon, dass sie einen sicheren Zugang zu hinter Proxys befindlichen Websites ermöglichen, bietet ein HTTP-Tunnel eine Möglichkeit, Verkehr zu erlauben, der sonst eingeschränkt wäre (z.B. SSH oder FTP) über das HTTP(S)-Protokoll.

`CONNECT` ist eine hop-by-hop Methode, was bedeutet, dass Proxys nur die `CONNECT`-Anfrage weiterleiten, wenn sich ein weiterer eingehender Proxy vor dem Ursprungsserver befindet, da die meisten Ursprungsserver `CONNECT` nicht implementieren.

> [!WARNING]
> Wenn Sie einen Proxy betreiben, der `CONNECT` unterstützt, beschränken Sie dessen Nutzung auf eine Reihe bekannter Ports oder eine konfigurierbare Liste sicherer Anforderungsziele.
> Es bestehen erhebliche Risiken beim Aufbau eines Tunnels zu beliebigen Servern, insbesondere wenn das Ziel ein bekannter oder reservierter TCP-Port ist, der nicht für Webverkehr bestimmt ist.
> Ein schwach konfigurierter Proxy kann missbraucht werden, um Verkehr wie SMTP zu leiten, um zum Beispiel Spam-E-Mails zu versenden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage hat einen Inhalt</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgreiche Antwort hat einen Inhalt</th>
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
      <th scope="row">{{Glossary("Cacheable", "Cachefähig")}}</th>
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
  - : Eine Portnummer in Dezimalform (z.B. `80`, `443`). Es gibt keinen Standardport, daher **muss** ein Client einen senden.

## Beispiele

### Proxy-Autorisierung

Eine Anfrage für Proxys, die eine Autorisierung erfordern, um einen Tunnel zu erstellen, sieht wie folgt aus.
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

- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{Glossary("Proxy_server", "Proxy-Server")}} Glossar-Eintrag
- {{HTTPHeader("Proxy-Authorization")}} Header
- [How To Use SSH Over An HTTP Proxy](https://www.dimoulis.net/posts/ssh-over-proxy/) dimoulis.net (2023)
