---
title: Proxy-Server und Tunneling
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Beim Navigieren durch verschiedene Netzwerke des Internets ermöglichen Proxy-Server und HTTP-Tunnel den Zugriff auf Inhalte im World Wide Web. Ein Proxy kann sich auf dem lokalen Rechner des Benutzers oder irgendwo zwischen dem Rechner des Benutzers und einem Zielserver im Internet befinden. Diese Seite skizziert einige Grundlagen zu Proxies und stellt einige Konfigurationsoptionen vor.

Es gibt zwei Arten von Proxies: **Forward-Proxies** (oder Tunnel, oder Gateway) und **Reverse-Proxies** (die verwendet werden, um den Zugriff auf einen Server für Lastenausgleich, Authentifizierung, Entschlüsselung oder Caching zu steuern und zu schützen).

## Forward-Proxies

Ein Forward-Proxy, Gateway oder einfach "Proxy" bietet Proxy-Dienste für einen Client oder eine Gruppe von Clients. Es gibt wahrscheinlich Hunderttausende von offenen Forward-Proxies im Internet. Sie speichern und leiten Internetdienste (wie das DNS oder Webseiten) weiter, um die vom Netzwerk verwendete Bandbreite zu reduzieren und zu kontrollieren.

Forward-Proxies können auch anonym sein und es Benutzern ermöglichen, ihre IP-Adresse beim Surfen im Web oder bei der Nutzung anderer Internetdienste zu verbergen. Beispielsweise leitet [Tor](https://www.torproject.org/) den Internetverkehr zur Anonymität durch mehrere Proxies.

## Reverse-Proxies

Wie der Name schon sagt, macht ein Reverse-Proxy das Gegenteil von dem, was ein Forward-Proxy macht: Ein Forward-Proxy handelt im Namen von Clients (oder anfragenden Hosts). Forward-Proxies können die Identitäten von Clients verbergen, wohingegen Reverse-Proxies die Identitäten von Servern verbergen können. Reverse-Proxies haben mehrere Anwendungsfälle, einige sind:

- Lastenausgleich: Verteilung der Last auf mehrere Webserver,
- Caching von statischen Inhalten: Entlastung der Webserver durch das Caching von statischen Inhalten wie Bildern,
- Kompression: Komprimierung und Optimierung von Inhalten zur Beschleunigung der Ladezeit.

## Weiterleitung von Client-Informationen über Proxies

Proxies können Anfragen so erscheinen lassen, als ob sie von der IP-Adresse des Proxies stammen. Dies kann nützlich sein, wenn ein Proxy genutzt wird, um die Anonymität des Clients zu gewährleisten, aber in anderen Fällen gehen Informationen aus der ursprünglichen Anfrage verloren. Die IP-Adresse des ursprünglichen Clients wird oft für Debugging, Statistiken oder das Generieren von ortsabhängigen Inhalten verwendet. Eine gängige Methode, diese Informationen preiszugeben, ist die Verwendung der folgenden HTTP-Header:

Der standardisierte Header:

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der dem Client zugewandten Seite von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy in den Anfragepfad involviert ist.

Oder die de-facto Standardversionen:

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der sich über einen HTTP-Proxy oder einen Load-Balancer mit einem Webserver verbindet.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, den ein Client verwendet hat, um sich mit Ihrem Proxy oder Load-Balancer zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Load-Balancer zu verbinden.

Um Informationen über den Proxy selbst bereitzustellen (nicht über den Client, der sich mit ihm verbindet), kann der `Via`-Header verwendet werden.

- {{HTTPHeader("Via")}}
  - : Wird von Proxies, sowohl Forward- als auch Reverse-Proxies, hinzugefügt und kann sowohl in den Anfrage- als auch in den Antwort-Headern erscheinen.

## HTTP-Tunneling

Tunneling überträgt Daten und Protokollinformationen eines privaten Netzwerks durch ein öffentliches Netzwerk, indem es die Daten kapselt. HTTP-Tunneling verwendet ein höheres Protokoll (HTTP), um ein niedrigeres Protokoll (TCP) zu transportieren.

Das HTTP-Protokoll spezifiziert eine Anfragemethode namens {{HTTPMethod("CONNECT")}}. Diese startet eine bidirektionale Kommunikation mit der angeforderten Ressource und kann verwendet werden, um einen Tunnel zu öffnen. So kann ein Client hinter einem HTTP-Proxy auf Websites zugreifen, die TLS verwenden (d.h. HTTPS, Port 443). Beachten Sie jedoch, dass nicht alle Proxy-Server die `CONNECT`-Methode unterstützen oder sie nur auf Port 443 beschränken.

Siehe auch den [HTTP-Tunnel-Artikel auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_tunnel).

## Proxy Auto-Configuration (PAC)

Eine [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) Datei ist eine [JavaScript](/de/docs/Web/JavaScript) Funktion, die bestimmt, ob Webbrowser-Anfragen (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder an einen Webproxy-Server weitergeleitet werden. Die im PAC-File enthaltene JavaScript-Funktion definiert die Funktion:

Die Auto-Konfigurationsdatei sollte in einer Datei mit der Erweiterung `.pac` gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Die Datei besteht aus einer Funktion namens `FindProxyForURL`. Das folgende Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server nur interne Hostnamen auflösen kann, und das Ziel ist, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

## Siehe auch

- [Proxy Auto-Configuration (PAC) Datei](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
- {{HTTPMethod("CONNECT")}} Methode
- {{Glossary("Proxy_server", "Proxy-Server")}}
