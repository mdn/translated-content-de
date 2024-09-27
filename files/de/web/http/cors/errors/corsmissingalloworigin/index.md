---
title: "Grund: CORS-Header 'Access-Control-Allow-Origin' fehlt"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## Was ist schiefgelaufen?

Die Antwort auf die [CORS](/de/docs/Glossary/CORS)-Anfrage fehlt der erforderliche
{{HTTPHeader("Access-Control-Allow-Origin")}}-Header, der verwendet wird, um festzustellen, ob der Zugriff auf die Ressource durch Inhalte der aktuellen Origin erlaubt ist.

Wenn der Server unter Ihrer Kontrolle steht, fügen Sie die Origin der anfragenden Seite zu der Menge der Domains hinzu, denen der Zugriff im `Access-Control-Allow-Origin`-Header gestattet ist.

Zum Beispiel, um einer Seite unter `https://example.com` den Zugriff auf die Ressource mit CORS zu erlauben, sollte der Header folgendermaßen aussehen:

```http
Access-Control-Allow-Origin: https://example.com
```

Sie können eine Seite auch so konfigurieren, dass jede Seite darauf zugreifen kann, indem Sie den `*`-Wildcard verwenden. Dies sollte nur für öffentliche APIs verwendet werden. Private APIs sollten niemals `*` verwenden und stattdessen eine spezifische Domain oder Domains festlegen. Zudem funktioniert der Wildcard nur für Anfragen, die mit dem [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut auf `anonymous` gesetzt sind und verhindert das Senden von Anmeldeinformationen wie Cookies in Anfragen.

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> Die Verwendung des Wildcards, um allen Seiten den Zugriff auf eine private API zu ermöglichen, ist eine schlechte Idee.

Um jeder Seite CORS-Anfragen ohne Nutzung des `*`-Wildcards zu erlauben (zum Beispiel, um Anmeldeinformationen zu ermöglichen), muss Ihr Server den Wert des `Origin`-Headers der Anfrage lesen und diesen Wert verwenden, um `Access-Control-Allow-Origin` zu setzen, und muss außerdem einen `Vary: Origin`-Header setzen, um anzuzeigen, dass einige Header dynamisch abhängig von der Origin gesetzt werden.

## Beispiele für gängige Webserver

Die exakte Anweisung zum Setzen von Headers hängt von Ihrem Webserver ab.

In den untenstehenden Beispielen,

In **Apache** ([Dokumentation](https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header)) fügen Sie eine Zeile wie die folgende in die Serverkonfiguration ein (innerhalb der entsprechenden `<Directory>`, `<Location>`, `<Files>`, oder `<VirtualHost>`-Sektion). Die Konfiguration befindet sich typischerweise in einer `.conf`-Datei (`httpd.conf` und `apache.conf` sind gebräuchliche Namen dafür) oder in einer `.htaccess`-Datei:

```apacheconf
Header set Access-Control-Allow-Origin 'https://example.com'
```

Für **Nginx** ([Dokumentation](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header)), ist der Befehl zum Einrichten dieses Headers:

```nginx
add_header 'Access-Control-Allow-Origin' 'https://example.com' always;
```

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung zu CORS](/de/docs/Web/HTTP/CORS)
