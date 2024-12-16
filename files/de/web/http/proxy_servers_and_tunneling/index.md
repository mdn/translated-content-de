---
title: Proxy-Server und Tunneling
slug: Web/HTTP/Proxy_servers_and_tunneling
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}

Beim Navigieren durch verschiedene Netzwerke des Internets erleichtern Proxy-Server und HTTP-Tunnel den Zugriff auf Inhalte des World Wide Web. Ein Proxy kann entweder auf dem lokalen Computer des Benutzers oder an einem beliebigen Punkt zwischen dem Computer des Benutzers und einem Zielserver im Internet sein. Diese Seite skizziert einige Grundlagen über Proxies und stellt einige Konfigurationsoptionen vor.

Es gibt zwei Arten von Proxies: **Forward Proxies** (oder Tunnel, oder Gateway) und **Reverse Proxies** (werden verwendet, um den Zugriff auf einen Server für Lastverteilung, Authentifizierung, Entschlüsselung oder Zwischenspeicherung zu kontrollieren und schützen).

## Forward Proxies

Ein Forward Proxy, oder Gateway, oder einfach "Proxy", bietet Proxy-Dienste für einen Client oder eine Gruppe von Clients an. Es gibt wahrscheinlich Hunderttausende von offenen Forward Proxies im Internet. Sie speichern und leiten Internetdienste (wie den DNS oder Webseiten) weiter, um die genutzte Bandbreite der Gruppe zu reduzieren und zu kontrollieren.

Forward Proxies können auch anonym sein und es Benutzern ermöglichen, ihre IP-Adresse beim Surfen im Web oder bei anderen Internetdiensten zu verbergen. Beispielsweise leitet [Tor](https://www.torproject.org/) den Internetverkehr durch mehrere Proxies zur Anonymisierung.

## Reverse Proxies

Wie der Name schon sagt, macht ein Reverse Proxy das Gegenteil von dem, was ein Forward Proxy tut: Ein Forward Proxy agiert im Namen von Clients (oder anfordernden Hosts). Forward Proxies können die Identität von Clients verbergen, während Reverse Proxies die Identität von Servern verbergen können. Reverse Proxies haben mehrere Anwendungsfälle, einige davon sind:

- Lastverteilung: Verteilung der Last auf mehrere Webserver,
- Zwischenspeicherung statischer Inhalte: Entlastung der Webserver durch Zwischenspeicherung statischer Inhalte wie Bilder,
- Komprimierung: Komprimierung und Optimierung von Inhalten zur Beschleunigung der Ladezeit.

## Weiterleitung von Clientinformationen durch Proxies

Proxies können Anfragen so erscheinen lassen, als ob sie von der IP-Adresse des Proxies stammen. Dies kann nützlich sein, wenn ein Proxy verwendet wird, um die Anonymität des Clients zu gewährleisten. In anderen Fällen gehen jedoch Informationen aus der ursprünglichen Anfrage verloren. Die IP-Adresse des ursprünglichen Clients wird häufig für Debugging, Statistiken oder die Erstellung von standortabhängigen Inhalten verwendet. Eine gängige Methode, um diese Informationen offenzulegen, ist die Verwendung der folgenden HTTP-Header:

Der standardisierte Header:

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy in den Pfad der Anfrage eingebunden ist.

Oder die faktisch als Standard angenommenen Versionen:

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Load Balancer eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, den ein Client verwendet hat, um sich mit Ihrem Proxy oder Load Balancer zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Load Balancer zu verbinden.

Um Informationen über den Proxy selbst (nicht über den Client, der sich mit ihm verbindet) bereitzustellen, kann der `Via`-Header verwendet werden.

- {{HTTPHeader("Via")}}
  - : Wird von Proxies, sowohl Forward als auch Reverse Proxies, hinzugefügt und kann in den Anfrage- und Antwort-Headern erscheinen.

## HTTP-Tunneling

Tunneling überträgt private Netzwerkinformationen und Protokolldaten über ein öffentliches Netzwerk, indem die Daten gekapselt werden. HTTP-Tunneling nutzt ein höheres Protokoll (HTTP), um ein niedrigeres Protokoll (TCP) zu transportieren.

Das HTTP-Protokoll spezifiziert eine Anfragemethode namens {{HTTPMethod("CONNECT")}}. Es beginnt eine bidirektionale Kommunikation mit der angeforderten Ressource und kann verwendet werden, um einen Tunnel zu öffnen. So kann ein Client hinter einem HTTP-Proxy auf Websites zugreifen, die TLS verwenden (d.h. HTTPS, Port 443). Beachten Sie jedoch, dass nicht alle Proxy-Server die `CONNECT`-Methode unterstützen oder sie nur auf Port 443 beschränken.

Siehe auch den [Wikipedia-Artikel zu HTTP-Tunneln](https://en.wikipedia.org/wiki/HTTP_tunnel).

## Proxy Auto-Configuration (PAC)

Eine [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)-Datei ist eine [JavaScript](/de/docs/Web/JavaScript)-Funktion, die bestimmt, ob Anfragen des Webbrowsers (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder an einen Web-Proxy-Server weitergeleitet werden. Die JavaScript-Funktion, die in der PAC-Datei enthalten ist, definiert die Funktion:

Die Auto-Config-Datei sollte in einer Datei mit der `.pac`-Dateierweiterung gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Die Datei besteht aus einer Funktion namens `FindProxyForURL`. Das untenstehende Beispiel wird in einer Umgebung funktionieren, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist es, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

## Siehe auch

- [Proxy Auto-Configuration (PAC)-Datei](/de/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
- {{HTTPMethod("CONNECT")}}-Methode
- {{Glossary("Proxy_server", "Proxy-Server")}}
