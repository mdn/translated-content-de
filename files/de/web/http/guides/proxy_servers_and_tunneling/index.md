---
title: Proxy-Server und Tunneling
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

Beim Navigieren durch verschiedene Netzwerke des Internets erleichtern Proxy-Server und HTTP-Tunnel den Zugriff auf Inhalte im World Wide Web. Ein Proxy kann sich auf dem lokalen Computer des Benutzers oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet befinden. Diese Seite skizziert einige Grundlagen zu Proxys und stellt einige Konfigurationsoptionen vor.

Es gibt zwei Arten von Proxys: **Forward Proxies** (oder Tunnel, oder Gateway) und **Reverse Proxies** (die verwendet werden, um den Zugriff auf einen Server für Lastverteilung, Authentifizierung, Entschlüsselung oder Zwischenspeicherung zu steuern und zu schützen).

## Forward Proxies

Ein Forward Proxy, auch Gateway oder einfach "Proxy" genannt, bietet Proxy-Dienste für einen Client oder eine Gruppe von Clients. Es gibt wahrscheinlich Hunderttausende von offenen Forward Proxies im Internet. Sie speichern und leiten Internetdienste (wie das DNS oder Webseiten) weiter, um die Bandbreitennutzung der Gruppe zu reduzieren und zu kontrollieren.

Forward Proxies können auch anonym sein und es Benutzern ermöglichen, ihre IP-Adresse beim Surfen im Web oder bei der Nutzung anderer Internetdienste zu verbergen. Zum Beispiel leitet [Tor](https://www.torproject.org/) Internetverkehr über mehrere Proxys, um Anonymität zu gewährleisten.

## Reverse Proxies

Wie der Name schon sagt, macht ein Reverse Proxy das Gegenteil von dem, was ein Forward Proxy macht: Ein Forward Proxy handelt im Namen von Clients (oder anfragenden Hosts). Forward Proxies können die Identität von Clients verbergen, während Reverse Proxies die Identität von Servern verbergen können. Reverse Proxies haben mehrere Anwendungsfälle, einige davon sind:

- Lastverteilung: Verteilung der Last auf mehrere Webserver,
- Zwischenspeichern statischer Inhalte: Entlastung der Webserver durch Zwischenspeicherung statischer Inhalte wie Bilder,
- Komprimierung: Komprimierung und Optimierung von Inhalten zur Beschleunigung der Ladezeiten.

## Weiterleitung von Client-Informationen durch Proxys

Proxys können Anfragen so erscheinen lassen, als ob sie von der IP-Adresse des Proxys stammen. Dies kann nützlich sein, wenn ein Proxy zur Bereitstellung von Client-Anonymität verwendet wird, aber in anderen Fällen gehen Informationen aus der ursprünglichen Anfrage verloren. Die IP-Adresse des ursprünglichen Clients wird häufig für Debugging, Statistiken oder zur Erstellung von standortabhängigen Inhalten verwendet. Eine gängige Methode zur Weitergabe dieser Informationen ist die Verwendung der folgenden HTTP-Header:

Der standardisierte Header:

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der dem Client zugewandten Seite von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy im Pfad der Anfrage beteiligt ist.

Oder die faktischen Standardversionen:

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der sich über einen HTTP-Proxy oder einen Lastverteiler mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der von einem Client genutzt wurde, um sich mit Ihrem Proxy oder Lastverteiler zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastverteiler zu verbinden.

Um Informationen über den Proxy selbst bereitzustellen (nicht über den Client, der sich mit ihm verbindet), kann der `Via`-Header verwendet werden.

- {{HTTPHeader("Via")}}
  - : Hinzugefügt von Proxys, sowohl Forward als auch Reverse Proxies, und kann in den Anforderungs- und Antwort-Headern erscheinen.

## HTTP-Tunneling

Tunneling übermittelt private Netzdaten und Protokollinformationen durch öffentliche Netze, indem die Daten gekapselt werden. HTTP-Tunneling verwendet ein höheres Protokoll (HTTP), um ein niedrigeres Protokoll (TCP) zu transportieren.

Das HTTP-Protokoll definiert eine Anfragemethode namens {{HTTPMethod("CONNECT")}}. Diese Methode startet eine bidirektionale Kommunikation mit der angeforderten Ressource und kann verwendet werden, um einen Tunnel zu öffnen. So kann ein Client hinter einem HTTP-Proxy auf Websites zugreifen, die TLS verwenden (d.h. HTTPS, Port 443). Beachten Sie jedoch, dass nicht alle Proxy-Server die `CONNECT`-Methode unterstützen oder sie nur auf Port 443 beschränken.

Siehe auch den [HTTP-Tunnel-Artikel auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_tunnel).

## Proxy Auto-Configuration (PAC)

Eine [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) Datei ist eine [JavaScript](/de/docs/Web/JavaScript) Funktion, die bestimmt, ob Webbrowser-Anfragen (HTTP, HTTPS und FTP) direkt zum Ziel oder an einen Webproxy-Server weitergeleitet werden. Die JavaScript-Funktion in der PAC-Datei definiert die Funktion:

Die Auto-Konfigurationsdatei sollte unter dem Namen `.pac` gespeichert werden: `proxy.pac`.

Und der MIME-Typ auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Die Datei besteht aus einer Funktion namens `FindProxyForURL`. Das untenstehende Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist, einen Proxy nur für nicht auflösbare Hosts zu verwenden:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.example.com:8080";
}
```

## Siehe auch

- [Proxy Auto-Configuration (PAC)-Datei](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
- {{HTTPMethod("CONNECT")}} Methode
- {{Glossary("Proxy_server", "Proxy-Server")}}
