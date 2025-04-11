---
title: "Reason: CORS header 'Access-Control-Allow-Origin' missing"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

## Ursache

```plain
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## Was ist schief gelaufen?

Die Antwort auf die {{Glossary("CORS", "CORS")}}-Anfrage fehlt der erforderliche {{HTTPHeader("Access-Control-Allow-Origin")}}-Header, der verwendet wird, um festzustellen, ob auf die Ressource durch Inhalte zugegriffen werden kann, die innerhalb der aktuellen Herkunft arbeiten.

Wenn der Server unter Ihrer Kontrolle steht, fügen Sie die Herkunft der anfordernden Website der Menge der berechtigten Domains hinzu, indem Sie sie dem Wert des `Access-Control-Allow-Origin`-Headers hinzufügen.

Beispielsweise, um einer Website unter `https://example.com` den Zugriff auf die Ressource mittels CORS zu erlauben, sollte der Header folgendermaßen aussehen:

```http
Access-Control-Allow-Origin: https://example.com
```

Sie können auch eine Website so konfigurieren, dass sie allen Websites den Zugriff erlaubt, indem Sie den `*`-Platzhalter verwenden. Dies sollten Sie nur für öffentliche APIs verwenden. Private APIs sollten niemals `*` verwenden und stattdessen einen bestimmten Domainnamen oder mehrere Domains festlegen. Außerdem funktioniert der Platzhalter nur für Anfragen, die mit dem [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin)-Attribut auf `anonymous` gesetzt werden, und er verhindert das Senden von Anmeldeinformationen wie Cookies in Anfragen.

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> Den Platzhalter zu verwenden, um allen Websites den Zugriff auf eine private
> API zu erlauben, ist eine schlechte Idee.

Um jeder Website zu ermöglichen, CORS-Anfragen _ohne_ Verwendung des `*`-Platzhalters zu stellen (zum Beispiel um Anmeldeinformationen zu ermöglichen), muss Ihr Server den Wert des `Origin`-Headers der Anfrage lesen und diesen Wert verwenden, um `Access-Control-Allow-Origin` zu setzen, und er muss auch einen `Vary: Origin`-Header setzen, um anzuzeigen, dass einige Header dynamisch abhängig von der Herkunft gesetzt werden.

## Beispiele für gängige Webserver

Die genaue Anweisung zum Setzen von Headers hängt von Ihrem Webserver ab.

In den folgenden Beispielen,

In **Apache** ([Dokumentation](https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header)), fügen Sie eine
Zeile wie die folgende zur Serverkonfiguration hinzu (innerhalb der entsprechenden `<Directory>`, `<Location>`, `<Files>` oder `<VirtualHost>`-Sektionen). Die
Konfiguration befindet sich normalerweise in einer `.conf`-Datei (`httpd.conf` und `apache.conf` sind gängige Namen dafür) oder in einer `.htaccess`-Datei:

```apacheconf
Header set Access-Control-Allow-Origin 'https://example.com'
```

Für **Nginx** ([Dokumentation](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header)), ist der Befehl zum Einrichten dieses Headers:

```nginx
add_header 'Access-Control-Allow-Origin' 'https://example.com' always;
```

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung zu CORS](/de/docs/Web/HTTP/Guides/CORS)
