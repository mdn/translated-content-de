---
title: "Reason: CORS header 'Access-Control-Allow-Origin' missing"
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

Die Antwort auf die {{Glossary("CORS", "CORS")}}-Anfrage fehlt der erforderliche
{{HTTPHeader("Access-Control-Allow-Origin")}}-Header, der verwendet wird, um zu bestimmen, ob die Ressource von Inhalten im aktuellen Ursprung abgerufen werden kann.

Wenn der Server unter Ihrer Kontrolle steht, fügen Sie den Ursprung der anfordernden Seite zu der Menge der zugelassenen Domänen hinzu, indem Sie ihn zum Wert des `Access-Control-Allow-Origin`-Headers hinzufügen.

Zum Beispiel, um einer Seite unter `https://example.com` zu erlauben, die Ressource mit CORS abzurufen, sollte der Header folgendermaßen aussehen:

```http
Access-Control-Allow-Origin: https://example.com
```

Sie können eine Seite auch so konfigurieren, dass jede Seite darauf zugreifen kann, indem Sie das `*`-Wildcard verwenden. Dies sollte nur für öffentliche APIs genutzt werden. Private APIs sollten niemals `*` verwenden und stattdessen eine spezifische Domäne oder Domänen festlegen. Zusätzlich funktioniert das Wildcard nur für Anfragen, die mit dem [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut auf `anonymous` gesetzt sind, und es verhindert das Senden von Anmeldeinformationen wie Cookies in Anfragen.

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> Das Verwenden des Wildcards, um allen Seiten den Zugriff auf eine private
> API zu erlauben, ist eine schlechte Idee.

Um jeder Seite zu erlauben, CORS-Anfragen _ohne_ Verwendung des `*`-Wildcards zu stellen (zum Beispiel zur Erlaubnis von Anmeldedaten), muss Ihr Server den Wert des `Origin`-Headers der Anfrage lesen und diesen Wert verwenden, um `Access-Control-Allow-Origin` zu setzen, und muss auch einen `Vary: Origin`-Header setzen, um anzuzeigen, dass einige Header je nach Ursprung dynamisch gesetzt werden.

## Beispiele für gängige Webserver

Die genaue Anweisung zum Setzen von Headers hängt von Ihrem Webserver ab.

In den folgenden Beispielen,

In **Apache** ([Dokumentation](https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header)), fügen Sie eine Zeile wie die folgende zur Serverkonfiguration hinzu (innerhalb des entsprechenden `<Directory>`, `<Location>`, `<Files>` oder `<VirtualHost>`-Abschnitts). Die Konfiguration befindet sich typischerweise in einer `.conf`-Datei (häufige Namen sind `httpd.conf` und `apache.conf`) oder in einer `.htaccess`-Datei:

```apacheconf
Header set Access-Control-Allow-Origin 'https://example.com'
```

Für **Nginx** ([Dokumentation](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header)), ist der Befehl zum Einrichten dieses Headers:

```nginx
add_header 'Access-Control-Allow-Origin' 'https://example.com' always;
```

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
