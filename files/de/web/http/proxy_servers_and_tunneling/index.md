---
title: Proxy-Server und Tunneling
slug: Web/HTTP/Proxy_servers_and_tunneling
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{HTTPSidebar}}

Beim Navigieren durch verschiedene Netzwerke des Internets erleichtern Proxy-Server und HTTP-Tunnel den Zugriff auf Inhalte im World Wide Web. Ein Proxy kann entweder auf dem lokalen Computer des Benutzers oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet sein. Diese Seite bietet einige Grundlagen zu Proxys und stellt einige Konfigurationsmöglichkeiten vor.

Es gibt zwei Arten von Proxys: **Forward Proxies** (oder Tunnel, oder Gateway) und **Reverse Proxies** (verwendet, um den Zugriff auf einen Server für Load-Balancing, Authentifizierung, Entschlüsselung oder Caching zu kontrollieren und zu schützen).

## Forward Proxies

Ein Forward Proxy, oder Gateway, oder einfach „Proxy“ bietet Proxy-Dienste für einen Client oder eine Gruppe von Clients. Es gibt wahrscheinlich Hunderttausende von offenen Forward Proxies im Internet. Sie speichern und leiten Internetdienste (wie DNS oder Webseiten) weiter, um die vom Client verwendete Bandbreite zu reduzieren und zu kontrollieren.

Forward Proxies können auch anonym sein und Benutzern erlauben, ihre IP-Adresse beim Surfen im Web oder bei der Nutzung anderer Internetdienste zu verbergen. Zum Beispiel leitet [Tor](https://www.torproject.org/) den Internetverkehr zur Anonymität durch mehrere Proxys.

## Reverse Proxies

Wie der Name schon sagt, macht ein Reverse Proxy das Gegenteil eines Forward Proxies: Ein Forward Proxy handelt im Namen von Clients (oder anfragenden Hostsystemen). Forward Proxies können die Identitäten von Clients verbergen, während Reverse Proxies die Identitäten von Servern verbergen können. Reverse Proxies haben mehrere Anwendungsfälle, einige davon sind:

- Load Balancing: Verteilung der Last auf mehrere Webserver,
- Cache statischer Inhalte: Entlastung der Webserver durch das Cachen statischer Inhalte wie Bilder,
- Komprimierung: Komprimierung und Optimierung von Inhalten zur Beschleunigung der Ladezeit.

## Weiterleitung von Client-Informationen über Proxys

Proxys können Anfragen so erscheinen lassen, als ob sie von der IP-Adresse des Proxys stammen. Dies kann nützlich sein, wenn ein Proxy zur Bereitstellung von Client-Anonymität verwendet wird, aber in anderen Fällen gehen Informationen aus der ursprünglichen Anfrage verloren. Die IP-Adresse des ursprünglichen Clients wird oft zum Debuggen, für Statistiken oder zur Generierung standortabhängiger Inhalte verwendet. Eine gängige Methode zur Offenlegung dieser Informationen ist die Verwendung der folgenden HTTP-Header:

Der standardisierte Header:

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite von Proxy-Servern, die geändert oder verloren gehen, wenn ein Proxy am Pfad der Anfrage beteiligt ist.

Oder die De-facto-Standardversionen:

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Load Balancer mit einem Webserver verbunden ist.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, den ein Client verwendet hat, um sich mit Ihrem Proxy oder Load Balancer zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Load Balancer zu verbinden.

Um Informationen über den Proxy selbst (nicht über den sich mit ihm verbindenden Client) bereitzustellen, kann der `Via`-Header verwendet werden.

- {{HTTPHeader("Via")}}
  - : Wird von Proxys hinzugefügt, sowohl Forward als auch Reverse Proxies, und kann in den Anfrage- und den Antwort-Headern erscheinen.

## HTTP-Tunneling

Tunneling überträgt private Netzwerkdaten und Protokollinformationen durch öffentliche Netzwerke, indem die Daten gekapselt werden. HTTP-Tunneling verwendet ein Protokoll höherer Ebene (HTTP), um ein Protokoll niedrigerer Ebene (TCP) zu transportieren.

Das HTTP-Protokoll spezifiziert eine Anfrage-Methode namens {{HTTPMethod("CONNECT")}}. Diese startet eine Zwei-Wege-Kommunikation mit der angeforderten Ressource und kann verwendet werden, um einen Tunnel zu öffnen. So kann ein Client hinter einem HTTP-Proxy auf Websites zugreifen, die TLS verwenden (d. h. HTTPS, Port 443). Beachten Sie jedoch, dass nicht alle Proxy-Server die `CONNECT`-Methode unterstützen oder sie nur auf Port 443 beschränken.

Siehe auch den [HTTP-Tunnel-Artikel auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_tunnel).

## Proxy Auto-Configuration (PAC)

Eine [Proxy Auto-Configuration (PAC)-Datei](/de/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) ist eine [JavaScript](/de/docs/Web/JavaScript)-Funktion, die bestimmt, ob Webbrowser-Anfragen (HTTP, HTTPS und FTP) direkt zum Ziel oder zu einem Webproxy-Server weitergeleitet werden. Die im PAC enthaltene JavaScript-Funktion definiert die Funktion:

Die Auto-Konfigurationsdatei sollte in einer Datei mit der `.pac`-Dateinamenerweiterung gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt sein.

Die Datei besteht aus einer Funktion, die `FindProxyForURL` genannt wird. Das folgende Beispiel wird in einer Umgebung funktionieren, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Weitere Beispiele finden Sie unter [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file).

## Siehe auch

- {{HTTPMethod("CONNECT")}}
- [Proxy-Server auf Wikipedia](https://en.wikipedia.org/wiki/Proxy_server)
