---
title: Proxy-Server und Tunneling
slug: Web/HTTP/Proxy_servers_and_tunneling
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{HTTPSidebar}}

Bei der Navigation durch verschiedene Netzwerke des Internets erleichtern Proxy-Server und HTTP-Tunnel den Zugriff auf Inhalte im World Wide Web. Ein Proxy kann sich auf dem lokalen Computer des Benutzers befinden oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet. Diese Seite gibt einen Überblick über einige Grundlagen zu Proxys und stellt einige Konfigurationsmöglichkeiten vor.

Es gibt zwei Arten von Proxys: **Forward Proxies** (oder Tunnel, oder Gateways) und **Reverse Proxies** (die verwendet werden, um den Zugriff auf einen Server für Lastverteilung, Authentifizierung, Entschlüsselung oder Caching zu steuern und zu schützen).

## Forward Proxies

Ein Forward Proxy, oder Gateway, oder einfach "Proxy", bietet Proxy-Dienste für einen Client oder eine Gruppe von Clients an. Im Internet gibt es wahrscheinlich Hunderttausende von offenen Forward Proxies. Sie speichern und leiten Internetdienste (wie das DNS oder Webseiten) weiter, um die von der Gruppe verwendete Bandbreite zu reduzieren und zu steuern.

Forward Proxies können auch anonym sein und es Benutzern ermöglichen, ihre IP-Adresse beim Surfen im Internet oder bei der Nutzung anderer Internetdienste zu verbergen. Beispielsweise leitet [Tor](https://www.torproject.org/) den Internetverkehr über mehrere Proxys für Anonymität weiter.

## Reverse Proxies

Wie der Name schon sagt, tut ein Reverse Proxy das Gegenteil von dem, was ein Forward Proxy tut: Ein Forward Proxy handelt im Auftrag von Clients (oder anfragenden Hosts). Forward Proxies können die Identität von Clients verbergen, während Reverse Proxies die Identität von Servern verbergen können. Reverse Proxies haben mehrere Anwendungsfälle, einige davon sind:

- Lastverteilung: Verteilung der Last auf mehrere Webserver,
- Caching von statischen Inhalten: Entlastung der Webserver durch Caching von statischen Inhalten wie Bildern,
- Kompression: Komprimierung und Optimierung von Inhalten, um die Ladezeit zu beschleunigen.

## Weiterleitung von Clientinformationen durch Proxies

Proxys können Anfragen so erscheinen lassen, als ob sie von der IP-Adresse des Proxys stammen. Dies kann nützlich sein, wenn ein Proxy verwendet wird, um die Anonymität des Clients zu gewährleisten, allerdings gehen in anderen Fällen Informationen aus der ursprünglichen Anfrage verloren. Die IP-Adresse des ursprünglichen Clients wird oft für Debugging, Statistiken oder die Generierung ortsabhängiger Inhalte verwendet. Eine gängige Methode, um diese Informationen offenzulegen, ist die Verwendung der folgenden HTTP-Header:

Der standardisierte Header:

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der dem Client zugewandten Seite von Proxy-Servern, die geändert oder verloren gehen, wenn ein Proxy im Pfad der Anfrage beteiligt ist.

Oder die de-facto Standardversionen:

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Load Balancer eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, den ein Client zur Verbindung mit Ihrem Proxy oder Load Balancer verwendet hat.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client zur Verbindung mit Ihrem Proxy oder Load Balancer verwendet hat.

Um Informationen über den Proxy selbst bereitzustellen (nicht über den Client, der sich verbindet), kann der `Via`-Header verwendet werden.

- {{HTTPHeader("Via")}}
  - : Von Proxys hinzugefügt, sowohl Forward als auch Reverse Proxies, und kann in den Anforderungs- und Antwortheadern erscheinen.

## HTTP-Tunneling

Tunneling überträgt private Netzwerkdaten und Protokollinformationen durch ein öffentliches Netzwerk, indem die Daten kapselt werden. HTTP-Tunneling verwendet ein Protokoll höherer Ebene (HTTP), um ein Protokoll niedrigerer Ebene (TCP) zu transportieren.

Das HTTP-Protokoll spezifiziert eine Anfragemethode namens {{HTTPMethod("CONNECT")}}. Es startet zweiseitige Kommunikation mit der angeforderten Ressource und kann verwendet werden, um einen Tunnel zu öffnen. Auf diese Weise kann ein Client hinter einem HTTP-Proxy auf Websites zugreifen, die TLS (d.h. HTTPS, Port 443) verwenden. Beachten Sie jedoch, dass nicht alle Proxy-Server die `CONNECT`-Methode unterstützen oder sie nur auf Port 443 beschränken.

Siehe auch den [Artikel zum HTTP-Tunnel auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_tunnel).

## Proxy Auto-Configuration (PAC)

Eine [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)-Datei ist eine [JavaScript](/de/docs/Web/JavaScript)-Funktion, die bestimmt, ob Webbrowser-Anfragen (HTTP, HTTPS und FTP) direkt zum Ziel gehen oder zu einem Webproxy-Server weitergeleitet werden. Die in der PAC-Datei enthaltene JavaScript-Funktion definiert die Funktion:

Die Autokonfigurationsdatei sollte unter einer `.pac` Dateinamenerweiterung gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Die Datei besteht aus einer Funktion namens `FindProxyForURL`. Das untenstehende Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel ist es, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

Siehe [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) für mehr Beispiele.

## Siehe auch

- {{HTTPMethod("CONNECT")}}
- [Proxy-Server auf Wikipedia](https://en.wikipedia.org/wiki/Proxy_server)
