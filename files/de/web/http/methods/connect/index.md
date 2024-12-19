---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTTPSidebar}}

Die **`CONNECT`** HTTP-Methode fordert, dass ein {{Glossary("Proxy_server", "Proxy")}} einen HTTP-Tunnel zu einem Zielserver aufbaut und, falls erfolgreich, blind Daten in beide Richtungen weiterleitet, bis der Tunnel geschlossen wird.

Das Anforderungsziel ist bei dieser Methode einzigartig, da es nur aus dem Host und der Portnummer des Tunneldestinations besteht, getrennt durch einen Doppelpunkt (siehe [Syntax](#syntax) für Details).
Jeder [2XX erfolgreicher Antwortstatuscode](/de/docs/Web/HTTP/Status#successful_responses) bedeutet, dass der Proxy in den "Tunnelmodus" wechselt und alle Daten im Erfolgsantwortkörper von dem durch das Anforderungsziel identifizierten Server stammen.

Wenn sich eine Website hinter einem Proxy befindet und es durch Netzwerkrichtlinien erzwungen wird, dass aller externer Datenverkehr über den Proxy geleitet werden muss, ermöglicht die `CONNECT`-Methode Ihnen, eine {{Glossary("TLS", "TLS")}} ({{Glossary("HTTPS", "HTTPS")}}) Verbindung mit dieser Website herzustellen:

- Der Client bittet den Proxy, die {{Glossary("TCP", "TCP")}}-Verbindung zum gewünschten Ziel zu tunneln.
- Der Proxy-Server stellt im Namen des Clients eine sichere Verbindung zum Server her.
- Sobald die Verbindung hergestellt ist, leitet der Proxy-Server den TCP-Stream weiterhin zum und vom Client weiter.

Abgesehen davon, dass sie einen sicheren Zugriff auf Websites hinter Proxies ermöglicht, bietet ein HTTP-Tunnel eine Möglichkeit, Verkehr, der ansonsten eingeschränkt wäre (SSH oder FTP), über das HTTP(S)-Protokoll zuzulassen.

`CONNECT` ist eine Hop-by-Hop-Methode, was bedeutet, dass Proxies die `CONNECT`-Anfrage nur weiterleiten, wenn ein weiterer eingehender Proxy vor dem Ursprung-Server steht, da die meisten Ursprung-Server `CONNECT` nicht implementieren.

> [!WARNING]
> Wenn Sie einen Proxy betreiben, der `CONNECT` unterstützt, beschränken Sie dessen Nutzung auf eine festgelegte Anzahl bekannter Ports oder eine konfigurierbare Liste sicherer Anforderungsziele.
> Es gibt erhebliche Risiken beim Aufbau eines Tunnels zu beliebigen Servern, insbesondere wenn das Ziel ein bekannter oder reservierter TCP-Port ist, der nicht für Web-Verkehr gedacht ist.
> Ein locker konfigurierter Proxy kann missbraucht werden, um Verkehr wie SMTP weiterzuleiten und etwa Spam-E-Mails zu verschicken.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anfrage enthält einen Körper</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Erfolgsantwort enthält einen Körper</th>
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
  - : Eine Portnummer im Dezimalsystem (z.B. `80`, `443`). Es gibt keinen Standardport, daher **muss** ein Client einen angeben.

## Beispiele

### Proxy-Authentifizierung

Eine Anfrage für Proxy-Server, die zur Erstellung eines Tunnels eine Authentifizierung erfordern, sieht folgendermaßen aus.
Weitere Informationen finden Sie im Header {{HTTPHeader("Proxy-Authorization")}}.

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
- {{Glossary("Proxy_server", "Proxy-Server")}} Glossareintrag
- {{HTTPHeader("Proxy-Authorization")}} Header
- [Anleitung zur Nutzung von SSH über einen HTTP-Proxy](https://www.dimoulis.net/posts/ssh-over-proxy/) dimoulis.net (2023)
