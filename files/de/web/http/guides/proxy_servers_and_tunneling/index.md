---
title: Proxy-Server und Tunneling
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Beim Navigieren durch verschiedene Netzwerke des Internets erleichtern Proxy-Server und HTTP-Tunnel den Zugriff auf Inhalte im World Wide Web. Ein Proxy kann sich auf dem lokalen Computer des Benutzers oder überall zwischen dem Computer des Benutzers und einem Zielserver im Internet befinden. Diese Seite skizziert einige Grundlagen zu Proxys und stellt einige Konfigurationsoptionen vor.

Es gibt zwei Arten von Proxys: **Forward Proxies** (oder Tunnel, oder Gateway) und **Reverse Proxies** (wird zur Kontrolle und zum Schutz des Zugriffs auf einen Server für Lastenausgleich, Authentifizierung, Entschlüsselung oder Caching genutzt).

## Forward Proxies

Ein Forward Proxy, oder Gateway, oder einfach „Proxy“ bietet Proxy-Dienste für einen Client oder eine Gruppe von Clients an. Es gibt wahrscheinlich Hunderttausende von offenen Forward Proxies im Internet. Sie speichern und leiten Internetdienste (wie das DNS oder Webseiten) weiter, um die von der Gruppe verwendete Bandbreite zu reduzieren und zu kontrollieren.

Forward Proxies können auch anonym sein und es Benutzern ermöglichen, ihre IP-Adresse beim Surfen im Web oder bei der Nutzung anderer Internetdienste zu verbergen. Beispielsweise leitet [Tor](https://www.torproject.org/) den Internetverkehr für Anonymität durch mehrere Proxys.

## Reverse Proxies

Wie der Name schon sagt, tut ein Reverse Proxy das Gegenteil eines Forward Proxys: Ein Forward Proxy handelt im Namen von Clients (oder anfragenden Hosts). Forward Proxies können die Identität von Clients verbergen, während Reverse Proxies die Identität von Servern verbergen können. Reverse Proxies haben mehrere Anwendungsfälle, einige davon sind:

- Lastenausgleich: Last auf mehrere Webserver verteilen,
- Statische Inhalte cachen: Webserver entlasten, indem statische Inhalte wie Bilder zwischengespeichert werden,
- Kompression: Inhalte komprimieren und optimieren, um die Ladezeit zu verkürzen.

## Weiterleitung von Client-Informationen über Proxys

Proxys können Anfragen so wirken lassen, als ob sie von der IP-Adresse des Proxys stammen. Dies kann nützlich sein, wenn ein Proxy zur Anonymität des Clients verwendet wird, aber in anderen Fällen gehen Informationen aus der ursprünglichen Anfrage verloren. Die IP-Adresse des ursprünglichen Clients wird häufig zum Debuggen, für Statistiken oder zur Erstellung ortsabhängiger Inhalte genutzt. Eine gängige Methode, um diese Informationen offenzulegen, besteht in der Verwendung der folgenden HTTP-Header:

Der standardisierte Header:

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der Client-seitigen Seite von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy in den Anfragepfad eingebunden ist.

Oder die de-facto Standardversionen:

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Load Balancer eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der angefordert wurde und den ein Client zur Verbindung mit Ihrem Proxy oder Load Balancer verwendete.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client zur Verbindung mit Ihrem Proxy oder Load Balancer verwendete.

Um Informationen über den Proxy selbst (nicht über den Client, der sich mit ihm verbindet) bereitzustellen, kann der `Via`-Header verwendet werden.

- {{HTTPHeader("Via")}}
  - : Wird von Proxys hinzugefügt, sowohl von Forward- als auch Reverse-Proxys, und kann in den Anfrage- und den Antwort-Headern erscheinen.

## HTTP-Tunneling

Tunneling überträgt private Netzwerkdaten und Protokollinformationen über ein öffentliches Netzwerk, indem die Daten gekapselt werden. HTTP-Tunneling verwendet ein Protokoll höherer Ebene (HTTP), um ein Protokoll niedrigerer Ebene (TCP) zu transportieren.

Das HTTP-Protokoll spezifiziert eine Anfragemethode namens {{HTTPMethod("CONNECT")}}. Es startet eine Zwei-Wege-Kommunikation mit der angeforderten Ressource und kann verwendet werden, um einen Tunnel zu öffnen. So kann ein Client hinter einem HTTP-Proxy Websites mit TLS (d.h. HTTPS, Port 443) aufrufen. Beachten Sie jedoch, dass nicht alle Proxy-Server die `CONNECT`-Methode unterstützen oder sie nur auf Port 443 beschränken.

Weitere Informationen finden Sie im [Artikel über HTTP-Tunnel auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_tunnel).

## Proxy Auto-Configuration (PAC)

Eine [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)-Datei ist eine [JavaScript](/de/docs/Web/JavaScript)-Funktion, die bestimmt, ob Web-Browser-Anfragen (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder an einen Web-Proxy-Server weitergeleitet werden. Die JavaScript-Funktion, die in der PAC-Datei enthalten ist, definiert die Funktion:

Die Auto-Konfigurationsdatei sollte in einer Datei mit der Erweiterung `.pac` gespeichert werden: `proxy.pac`.

Und der MIME-Typ auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Die Datei besteht aus einer Funktion namens `FindProxyForURL`. Das folgende Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel darin besteht, nur für Hosts, die nicht aufgelöst werden können, einen Proxy zu verwenden:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

## Siehe auch

- [Proxy Auto-Configuration (PAC)-Datei](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
- {{HTTPMethod("CONNECT")}}-Methode
- {{Glossary("Proxy_server", "Proxy-Server")}}
