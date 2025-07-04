---
title: "Reason: CORS header 'Access-Control-Allow-Origin' missing"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## Was ist schiefgelaufen?

Die Antwort auf die {{Glossary("CORS", "CORS")}}-Anfrage fehlt der erforderliche {{HTTPHeader("Access-Control-Allow-Origin")}}-Header, der verwendet wird, um festzustellen, ob die Ressource von Inhalten, die im aktuellen Origin betrieben werden, zugänglich ist oder nicht.

Wenn der Server unter Ihrer Kontrolle steht, fügen Sie den Origin der anfragenden Seite der Menge der Domains hinzu, denen der Zugriff erlaubt ist, indem Sie ihn dem Wert des `Access-Control-Allow-Origin`-Headers hinzufügen.

Um beispielsweise einer Seite bei `https://example.com` zu erlauben, die Ressource mithilfe von CORS zuzugreifen, sollte der Header so aussehen:

```http
Access-Control-Allow-Origin: https://example.com
```

Sie können eine Seite auch so konfigurieren, dass sie jeder Seite Zugriff gewährt, indem Sie das `*`-Wildcard verwenden. Sie sollten dies nur für öffentliche APIs verwenden. Private APIs sollten niemals `*` verwenden, sondern stattdessen eine spezifische Domain oder Domains festlegen. Darüber hinaus funktioniert das Wildcard nur für Anfragen, die mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut, das auf `anonymous` gesetzt ist, gestellt werden, und es verhindert das Senden von Anmeldeinformationen wie Cookies in Anfragen.

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> Es ist keine gute Idee, das Wildcard zu verwenden, um allen Seiten Zugriff auf eine private API zu gewähren.

Um einer beliebigen Seite das Stellen von CORS-Anfragen _ohne_ Verwendung des `*`-Wildcards zu ermöglichen (z. B. um Anmeldeinformationen zu aktivieren), muss Ihr Server den Wert des `Origin`-Headers der Anfrage lesen und diesen Wert verwenden, um `Access-Control-Allow-Origin` zu setzen, und muss auch einen `Vary: Origin`-Header setzen, um anzuzeigen, dass einige Header dynamisch abhängig vom Origin gesetzt werden.

## Beispiele für gängige Webserver

Die genaue Direktive zum Setzen von Headern hängt von Ihrem Webserver ab.

In den folgenden Beispielen,

In **Apache** ([Dokumentation](https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header)) fügen Sie eine Zeile wie die folgende zur Serverkonfiguration hinzu (innerhalb des entsprechenden `<Directory>`, `<Location>`, `<Files>` oder `<VirtualHost>`-Abschnitts). Die Konfiguration befindet sich typischerweise in einer `.conf`-Datei (`httpd.conf` und `apache.conf` sind gängige Namen dafür) oder in einer `.htaccess`-Datei:

```apacheconf
Header set Access-Control-Allow-Origin 'https://example.com'
```

Für **Nginx** ([Dokumentation](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header)) lautet der Befehl zum Einrichten dieses Headers:

```nginx
add_header 'Access-Control-Allow-Origin' 'https://example.com' always;
```

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
