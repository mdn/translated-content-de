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
{{HTTPHeader("Access-Control-Allow-Origin")}}-Header, der verwendet wird, um zu bestimmen, ob die Ressource von Inhalten, die innerhalb des aktuellen Ursprungs operieren, zugänglich ist.

Wenn der Server unter Ihrer Kontrolle steht, fügen Sie den Ursprung der anfragenden Website zu der Menge der Domänen hinzu, denen der Zugriff gestattet ist, indem Sie ihn dem Wert des `Access-Control-Allow-Origin`-Headers hinzufügen.

Um beispielsweise einer Website unter `https://example.com` den Zugriff auf die Ressource mit CORS zu erlauben, sollte der Header folgendermaßen aussehen:

```http
Access-Control-Allow-Origin: https://example.com
```

Sie können eine Website auch so konfigurieren, dass sie jeder Website den Zugriff erlaubt, indem Sie das
`*`-Wildcard verwenden. Dies sollte nur für öffentliche APIs verwendet werden. Private APIs sollten niemals `*` verwenden und stattdessen eine spezifische Domäne oder Domänen angeben. Darüber hinaus funktioniert das Wildcard nur für Anfragen, die mit dem [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut auf `anonymous` gesetzt wurden, und es verhindert das Senden von Anmeldeinformationen wie Cookies in Anfragen.

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> Die Verwendung des Wildcards, um allen Sites den Zugang zu einer privaten
> API zu erlauben, ist keine gute Idee.

Um jeder Site zu erlauben, CORS-Anfragen _ohne_ Verwendung des `*`
Wildcards zu stellen (zum Beispiel, um Anmeldedaten zu ermöglichen), muss Ihr Server den Wert des `Origin`-Headers der Anfrage lesen und diesen Wert verwenden, um `Access-Control-Allow-Origin` zu setzen, und er muss auch einen `Vary: Origin`-Header setzen, um anzuzeigen, dass einige Header dynamisch abhängig vom Ursprung gesetzt werden.

## Beispiele für gängige Webserver

Die genaue Anweisung zum Setzen von Headern hängt von Ihrem Webserver ab.

In den untenstehenden Beispielen verwenden Sie bei **Apache** ([Dokumentation](https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header)), eine Zeile wie die folgende in der Serverkonfiguration (innerhalb der entsprechenden
`<Directory>`, `<Location>`,
`<Files>`, oder `<VirtualHost>`-Sektion) hinzufügen. Die Konfiguration befindet sich typischerweise in einer `.conf`-Datei (`httpd.conf`
und `apache.conf` sind gängige Namen dafür) oder in einer
`.htaccess`-Datei:

```apacheconf
Header set Access-Control-Allow-Origin 'https://example.com'
```

Für **Nginx** ([Dokumentation](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header)) lautet der Befehl zum Einrichten dieses Headers:

```nginx
add_header 'Access-Control-Allow-Origin' 'https://example.com' always;
```

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
