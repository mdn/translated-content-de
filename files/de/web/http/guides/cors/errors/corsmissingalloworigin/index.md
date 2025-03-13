---
title: "Reason: CORS header 'Access-Control-Allow-Origin' missing"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## Was ist schiefgelaufen?

Die Antwort auf die {{Glossary("CORS", "CORS")}}-Anfrage fehlt der erforderliche
{{HTTPHeader("Access-Control-Allow-Origin")}}-Header, der verwendet wird, um festzustellen, ob
die Ressource vom aktuellen Ursprung aus zugänglich ist.

Wenn der Server unter Ihrer Kontrolle steht, fügen Sie den Ursprung der anfragenden Seite zu dem Satz
von Domains hinzu, denen Zugriff gewährt wird, indem Sie ihn zum Wert des `Access-Control-Allow-Origin`-Headers hinzufügen.

Zum Beispiel, um einer Seite unter `https://example.com` den Zugriff auf die Ressource mittels CORS zu erlauben,
sollte der Header folgendes sein:

```http
Access-Control-Allow-Origin: https://example.com
```

Sie können auch eine Seite konfigurieren, die jedem beliebigen Standort den Zugriff erlaubt, indem Sie das
`*`-Wildcard verwenden. Dies sollten Sie nur für öffentliche APIs verwenden. Private APIs sollten
niemals `*` verwenden, sondern stattdessen eine spezifische Domain oder Domains festlegen. Darüber hinaus funktioniert das Wildcard nur für Anfragen mit dem
[`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut, das auf `anonymous` gesetzt ist, und es verhindert
das Senden von Anmeldeinformationen wie Cookies in Anfragen.

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> Das Verwenden des Wildcards, um allen Seiten den Zugriff auf eine private
> API zu erlauben, ist keine gute Idee.

Um jeder Seite zu erlauben, CORS-Anfragen _ohne_ Verwendung des `*`-Wildcards zu stellen (zum Beispiel, um Anmeldeinformationen zu ermöglichen), muss Ihr Server den Wert des
`Origin`-Headers der Anfrage lesen und diesen Wert verwenden, um
`Access-Control-Allow-Origin` zu setzen, und muss auch einen `Vary: Origin`-Header setzen, um anzuzeigen, dass einige Header je nach Ursprung dynamisch gesetzt werden.

## Beispiele für gängige Webserver

Die genaue Anweisung zum Setzen von Headern hängt von Ihrem Webserver ab.

In den folgenden Beispielen,

In **Apache** ([Dokumentation](https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header)) fügen Sie eine
Zeile wie die folgende zur Konfiguration des Servers hinzu (innerhalb des entsprechenden
`<Directory>`, `<Location>`,
`<Files>` oder `<VirtualHost>` Abschnitts). Die
Konfiguration befindet sich typischerweise in einer `.conf`-Datei (`httpd.conf`
und `apache.conf` sind gebräuchliche Namen dafür) oder in einer
`.htaccess`-Datei:

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
