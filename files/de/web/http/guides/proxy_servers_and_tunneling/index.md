---
title: Proxy-Server und Tunneling
slug: Web/HTTP/Guides/Proxy_servers_and_tunneling
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}

Beim Navigieren durch verschiedene Netzwerke des Internets erleichtern Proxy-Server und HTTP-Tunnel den Zugriff auf Inhalte im World Wide Web. Ein Proxy kann sich auf dem lokalen Computer des Benutzers befinden oder irgendwo zwischen dem Computer des Benutzers und einem Zielserver im Internet. Diese Seite skizziert einige Grundlagen zu Proxys und führt einige Konfigurationsoptionen ein.

Es gibt zwei Arten von Proxys: **Forward Proxys** (auch Tunnel oder Gateway genannt) und **Reverse Proxys** (verwendet zur Steuerung und zum Schutz des Zugriffs auf einen Server für Lastverteilung, Authentifizierung, Entschlüsselung oder Zwischenspeicherung).

## Forward Proxys

Ein Forward-Proxy, Gateway oder einfach "Proxy" bietet Proxy-Dienste für einen Client oder eine Gruppe von Clients. Es gibt wahrscheinlich Hunderttausende offene Forward-Proxys im Internet. Sie speichern und leiten Internetdienste (wie das DNS oder Webseiten) weiter, um die von der Gruppe genutzte Bandbreite zu reduzieren und zu kontrollieren.

Forward-Proxys können auch anonym sein und es Benutzern ermöglichen, ihre IP-Adresse beim Surfen im Web oder bei der Nutzung anderer Internetdienste zu verbergen. Zum Beispiel leitet [Tor](https://www.torproject.org/) den Internetverkehr über mehrere Proxys zur Anonymisierung weiter.

## Reverse Proxys

Wie der Name andeutet, macht ein Reverse-Proxy das Gegenteil von dem, was ein Forward-Proxy tut: Ein Forward-Proxy agiert im Namen von Clients (oder anfragenden Hosts). Forward-Proxys können die Identitäten von Clients verbergen, während Reverse-Proxys die Identitäten von Servern verbergen können. Reverse-Proxys haben mehrere Anwendungsfälle, einige davon sind:

- Lastverteilung: Verteilung der Last auf mehrere Webserver,
- Zwischenspeicherung von statischen Inhalten: Entlastung von Webservern durch Zwischenspeicherung von statischen Inhalten wie Bildern,
- Kompression: Komprimierung und Optimierung von Inhalten zur Beschleunigung der Ladezeit.

## Weiterleitung von Client-Informationen durch Proxys

Proxys können Anfragen so erscheinen lassen, als ob sie von der IP-Adresse des Proxy stammen. Dies kann nützlich sein, wenn ein Proxy zur Bereitstellung von Client-Anonymität verwendet wird, in anderen Fällen gehen jedoch Informationen aus der ursprünglichen Anfrage verloren. Die IP-Adresse des ursprünglichen Clients wird häufig für Debugging, Statistiken oder die Generierung von standortabhängigen Inhalten verwendet. Eine übliche Methode zur Offenlegung dieser Informationen ist die Verwendung der folgenden HTTP-Header:

Der standardisierte Header:

- {{HTTPHeader("Forwarded")}}
  - : Enthält Informationen von der clientseitigen Seite von Proxy-Servern, die verändert oder verloren gehen, wenn ein Proxy im Pfad der Anfrage beteiligt ist.

Oder die de-facto Standardversionen:

- {{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}
  - : Identifiziert die ursprünglichen IP-Adressen eines Clients, der über einen HTTP-Proxy oder einen Lastverteiler mit einem Webserver verbunden ist.
- {{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}
  - : Identifiziert den ursprünglichen Host, der angefordert wurde, den ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastverteiler zu verbinden.
- {{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}
  - : Identifiziert das Protokoll (HTTP oder HTTPS), das ein Client verwendet hat, um sich mit Ihrem Proxy oder Lastverteiler zu verbinden.

Um Informationen über den Proxy selbst bereitzustellen (nicht über den Client, der sich damit verbindet), kann der `Via`-Header verwendet werden.

- {{HTTPHeader("Via")}}
  - : Hinzugefügt von Proxys, sowohl Forward- als auch Reverse-Proxys, und kann sowohl in den Anfrage- als auch in den Antwort-Headern erscheinen.

## HTTP-Tunneling

Tunneling überträgt private Netzwerkdaten und Protokollinformationen über ein öffentliches Netzwerk, indem die Daten encapsuliert werden. HTTP-Tunneling verwendet ein höherstufiges Protokoll (HTTP), um ein niedrigerstufiges Protokoll (TCP) zu transportieren.

Das HTTP-Protokoll spezifiziert eine Anfrage-Methode namens {{HTTPMethod("CONNECT")}}. Sie startet eine bidirektionale Kommunikation mit der angeforderten Ressource und kann verwendet werden, um einen Tunnel zu öffnen. So kann ein Client hinter einem HTTP-Proxy auf Webseiten zugreifen, die TLS verwenden (d.h. HTTPS, Port 443). Beachten Sie jedoch, dass nicht alle Proxy-Server die `CONNECT`-Methode unterstützen oder sie nur auf Port 443 beschränken.

Siehe auch den [Wikipedia-Artikel über HTTP-Tunnel](https://en.wikipedia.org/wiki/HTTP_tunnel).

## Proxy Auto-Configuration (PAC)

Eine [Proxy Auto-Configuration (PAC)](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)-Datei ist eine [JavaScript](/de/docs/Web/JavaScript)-Funktion, die bestimmt, ob Webbrowser-Anfragen (HTTP, HTTPS und FTP) direkt an das Ziel gehen oder an einen Web-Proxy-Server weitergeleitet werden. Die in der PAC-Datei enthaltene JavaScript-Funktion definiert die Funktion:

Die Auto-Konfigurationsdatei sollte in einer Datei mit der Dateinamenerweiterung `.pac` gespeichert werden: `proxy.pac`.

Und der MIME-Typ auf `application/x-ns-proxy-autoconfig` gesetzt werden.

Die Datei besteht aus einer Funktion namens `FindProxyForURL`. Das untenstehende Beispiel funktioniert in einer Umgebung, in der der interne DNS-Server so eingerichtet ist, dass er nur interne Hostnamen auflösen kann, und das Ziel darin besteht, einen Proxy nur für Hosts zu verwenden, die nicht auflösbar sind:

```js
function FindProxyForURL(url, host) {
  if (isResolvable(host)) {
    return "DIRECT";
  }
  return "PROXY proxy.mydomain.com:8080";
}
```

## Siehe auch

- [Proxy Auto-Configuration (PAC) file](/de/docs/Web/HTTP/Guides/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
- {{HTTPMethod("CONNECT")}} Methode
- {{Glossary("Proxy_server", "Proxy-Server")}}
