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

Die Antwort auf die {{Glossary("CORS")}}-Anfrage fehlt der erforderliche
{{HTTPHeader("Access-Control-Allow-Origin")}}-Header, der verwendet wird, um zu bestimmen,
ob die Ressource durch Inhalte, die innerhalb des aktuellen Ursprungs betrieben werden, zugänglich ist.

Wenn der Server unter Ihrer Kontrolle ist, fügen Sie den Ursprung der anfragenden Website dem Satz
von Domains hinzu, die Zugriff haben, indem Sie ihn dem Wert des `Access-Control-Allow-Origin`
-Headers hinzufügen.

Zum Beispiel, um einer Website unter `https://example.com` den Zugriff auf die Ressource
mithilfe von CORS zu erlauben, sollte der Header folgendermaßen aussehen:

```http
Access-Control-Allow-Origin: https://example.com
```

Sie können eine Website auch so konfigurieren, dass jede Website darauf zugreifen kann, indem Sie
das `*`-Wildcard verwenden. Sie sollten dies nur für öffentliche APIs verwenden. Private APIs sollten
niemals `*` verwenden und stattdessen eine spezifische Domain oder Domains festgelegt haben. Zusätzlich
funktioniert das Wildcard nur für Anfragen, die mit dem
[`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut mit dem Wert `anonymous` gestellt werden, und verhindert,
dass Anmeldeinformationen wie Cookies in Anfragen gesendet werden.

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> Die Verwendung des Wildcards, um allen Websites den Zugriff auf eine private
> API zu ermöglichen, ist eine schlechte Idee.

Um jeder Website zu erlauben, CORS-Anfragen _ohne_ Verwendung des `*`-Wildcards zu stellen (zum Beispiel, um Anmeldeinformationen zu ermöglichen), muss Ihr Server den Wert des
`Origin`-Headers der Anfrage lesen und diesen Wert verwenden, um
`Access-Control-Allow-Origin` zu setzen und auch einen `Vary: Origin`
-Header setzen, um anzuzeigen, dass einige Header dynamisch abhängig vom Ursprung gesetzt werden.

## Beispiele für gängige Webserver

Die genaue Anweisung zur Festlegung von Headern hängt von Ihrem Webserver ab.

In den folgenden Beispielen,

Fügen Sie in **Apache** ([Dokumentation](https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header)) eine Zeile wie die folgende in die Serverkonfiguration ein (innerhalb des entsprechenden
`<Directory>`, `<Location>`,
`<Files>` oder `<VirtualHost>` Abschnitts). Die
Konfiguration befindet sich typischerweise in einer `.conf`-Datei (übliche Namen dafür sind `httpd.conf`
und `apache.conf`), oder in einer
`.htaccess`-Datei:

```apacheconf
Header set Access-Control-Allow-Origin 'https://example.com'
```

Für **Nginx** ([Dokumentation](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header)) lautet der Befehl zur Einrichtung dieses Headers:

```nginx
add_header 'Access-Control-Allow-Origin' 'https://example.com' always;
```

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
