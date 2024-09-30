---
title: Proxy-Server und Tunneling
slug: Web/HTTP/Proxy_servers_and_tunneling
l10n:
  sourceCommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{HTTPSidebar}}

Bei der Navigation durch verschiedene Netzwerke des Internets erleichtern Proxy-Server und HTTP-Tunnel den Zugriff auf Inhalte des World Wide Web. Ein Proxy kann sich auf dem lokalen Computer des Benutzers befinden oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet. Diese Seite gibt einen Überblick über die Grundlagen von Proxys und stellt einige Konfigurationsoptionen vor.

Es gibt zwei Arten von Proxys: **Forward-Proxys** (oder Tunnel, oder Gateway) und **Reverse-Proxys** (verwendet zur Steuerung und zum Schutz des Zugriffs auf einen Server für Lastverteilung, Authentifizierung, Entschlüsselung oder Caching).

## Forward-Proxys

Ein Forward-Proxy, ein Gateway oder einfach nur "Proxy" bietet Proxy-Dienste für einen Client oder eine Gruppe von Clients. Es gibt wahrscheinlich Hunderttausende von offenen Forward-Proxys im Internet. Sie speichern und leiten Internetdienste (wie DNS oder Webseiten) weiter, um den Bandbreitenverbrauch der Gruppe zu reduzieren und zu kontrollieren.

Forward-Proxys können auch anonym sein und ermöglichen es Nutzern, ihre IP-Adresse beim Surfen im Web oder bei der Nutzung anderer Internetdienste zu verbergen. Zum Beispiel leitet [Tor](https://www.torproject.org/) den Internetverkehr durch mehrere Proxys zur Anonymität.

## Reverse-Proxys

Wie der Name schon sagt, macht ein Reverse-Proxy das Gegenteil eines Forward-Proxys: Ein Forward-Proxy handelt im Namen von Clients (oder anfragenden Hosts). Forward-Proxys können die Identitäten der Clients verbergen, während Reverse-Proxys die Identitäten der Server verbergen können. Reverse-Proxys haben mehrere Anwendungsfälle, einige davon sind:

- Lastverteilung: die Last auf mehrere Webserver verteilen,
- Cache statischer Inhalte: die Webserver durch das Caching statischer Inhalte wie Bilder entlasten,
- Komprimierung: Inhalte komprimieren und optimieren, um die Ladezeit zu verkürzen.

## Weiterleitung von Client-Informationen durch Proxys

Proxys können Anfragen so erscheinen lassen, als kämen sie von der IP-Adresse des Proxys. Dies kann nützlich sein, wenn ein Proxy zur Gewährleistung der Anonymität des Clients verwendet wird, jedoch gehen in anderen Fällen Informationen aus der ursprünglichen Anfrage verloren. Die IP-Adresse des ursprünglichen Clients wird häufig für Debugging, Statistiken oder zur Generierung standortabhängiger Inhalte verwendet. Eine übliche Methode zur Offenlegung dieser Informationen ist die Verwendung der folgenden HTTP-Header:

Der standardisierte Header:

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der Client-seitigen Seite von Proxy-Servern, die geändert oder verloren gehen, wenn ein Proxy in den Weg der Anfrage eingebunden wird.

Oder die de-facto Standardversionen:

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Lastverteiler eine Verbindung zu einem Webserver herstellt.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, den ein Client zur Verbindung mit Ihrem Proxy oder Lastverteiler verwendet hat.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client zur Verbindung mit Ihrem Proxy oder Lastverteiler verwendet hat.

Um Informationen über den Proxy selbst bereitzustellen (nicht über den Client, der sich mit ihm verbindet), kann der `Via`-Header verwendet werden.

- {{HTTPHeader("Via")}}
  - : Hinzugefügt von Proxys, sowohl Forward- als auch Reverse-Proxys, und kann in den Anforderungs- und Antwort-Headern erscheinen.

## HTTP-Tunneling

Tunneling überträgt Daten und Protokollinformationen des privaten Netzwerks durch ein öffentliches Netzwerk, indem die Daten gekapselt werden. HTTP-Tunneling verwendet ein Protokoll höherer Ebene (HTTP), um ein Protokoll niedrigerer Ebene (TCP) zu transportieren.

Das HTTP-Protokoll spezifiziert eine Anfragemethode namens {{HTTPMethod("CONNECT")}}. Sie startet eine Zwei-Wege-Kommunikation mit der angeforderten Ressource und kann verwendet werden, um einen Tunnel zu öffnen. Auf diese Weise kann ein Client hinter einem HTTP-Proxy Zugriff auf Websites unter Verwendung von TLS (d. h. HTTPS, Port 443) erhalten. Beachten Sie jedoch, dass nicht alle Proxy-Server die `CONNECT`-Methode unterstützen oder sie nur auf Port 443 beschränken.

Siehe auch den [Artikel zu HTTP-Tunneln auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_tunnel).

## Proxy Auto-Configuration (PAC)

Eine [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file) Datei ist eine [JavaScript](/de/docs/Web/JavaScript) Funktion, die bestimmt, ob Anfragen des Webbrowsers (HTTP, HTTPS und FTP) direkt zum Ziel oder über einen Web-Proxy-Server weitergeleitet werden. Die im PAC-File enthaltene JavaScript-Funktion definiert die Funktion:

Die Auto-Konfigurationsdatei sollte unter der Dateierweiterung `.pac` gespeichert werden: `proxy.pac`.

Und der MIME-Typ sollte auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Die Datei besteht aus einer Funktion namens `FindProxyForURL`. Das folgende Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann und das Ziel ist, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

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
