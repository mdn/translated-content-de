---
title: "Reason: CORS header 'Access-Control-Allow-Origin' missing"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin
l10n:
  sourceCommit: 92396cf8979e107c3ac42c2b9fc382013ea1c234
---

## Grund

```plain
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## Was ist schiefgelaufen?

Die Antwort auf die {{Glossary("CORS", "CORS")}}-Anfrage fehlt der erforderliche
{{HTTPHeader("Access-Control-Allow-Origin")}}-Header, der verwendet wird, um zu bestimmen, ob
die Ressource durch Inhalte, die innerhalb des aktuellen Ursprungs arbeiten, abgerufen werden kann.

Wenn der Server unter Ihrer Kontrolle steht, fügen Sie den Ursprung der anfragenden Seite zu der Menge der Domänen hinzu, denen der Zugriff gestattet ist, indem Sie ihn zum Wert des `Access-Control-Allow-Origin`-Headers hinzufügen.

Beispielsweise sollte der Header wie folgt aussehen, um einer Seite unter `https://example.com` den Zugriff auf die Ressource mithilfe von CORS zu erlauben:

```http
Access-Control-Allow-Origin: https://example.com
```

Sie können auch eine Seite so konfigurieren, dass sie von jeder Seite aus zugänglich ist, indem Sie den `*`-Wildcard verwenden. Dies sollte nur für öffentliche APIs genutzt werden. Private APIs sollten niemals `*` verwenden und stattdessen eine bestimmte Domäne oder Domänen festlegen. Darüber hinaus funktioniert der Wildcard nur bei Anfragen, die mit dem Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) auf `anonymous` gesetzt sind, und es verhindert das Senden von Anmeldeinformationen wie Cookies in Anfragen.

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> Die Verwendung des Wildcards, um allen Seiten den Zugriff auf eine private
> API zu ermöglichen, ist eine schlechte Idee.

Um jeder Seite zu erlauben, CORS-Anfragen _ohne_ Verwendungs des `*`-Wildcards zu stellen (zum Beispiel, um Anmeldeinformationen zu ermöglichen), muss Ihr Server den Wert des `Origin`-Headers der Anfrage lesen und diesen Wert verwenden, um `Access-Control-Allow-Origin` festzulegen. Außerdem muss ein `Vary: Origin`-Header gesetzt werden, um darauf hinzuweisen, dass einige Header dynamisch, abhängig vom Ursprung, gesetzt werden.

## Beispiele für gängige Webserver

Die genaue Anweisung zum Setzen von Headern hängt von Ihrem Webserver ab.

In den untenstehenden Beispielen,

In **Apache** ([Dokumentation](https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header)), fügen Sie eine Zeile wie die folgende zur Serverkonfiguration hinzu (innerhalb des entsprechenden `<Directory>`, `<Location>`, `<Files>` oder `<VirtualHost>`-Abschnitts). Die Konfiguration befindet sich typischerweise in einer `.conf`-Datei (`httpd.conf` und `apache.conf` sind gängige Namen dafür) oder in einer `.htaccess`-Datei:

```apacheconf
Header set Access-Control-Allow-Origin 'https://example.com'
```

Für **Nginx** ([Dokumentation](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header)), lautet der Befehl zum Einrichten dieses Headers:

```nginx
add_header 'Access-Control-Allow-Origin' 'https://example.com' always;
```

## Wenn Sie den Server nicht kontrollieren

Wenn der entfernte Server nicht unter Ihrer Kontrolle ist und den `Access-Control-Allow-Origin`-Header nicht enthält, können Sie diesen Fehler nicht auf Serverseite beheben. Ziehen Sie diese Alternativen in Betracht:

- Strukturieren Sie Ihre Anfrage als [einfache Anfrage](/de/docs/Web/HTTP/Guides/CORS#simple_requests) um, um das Auslösen einer Vorab-Anfrage zu vermeiden, falls der Server einfache Cross-Origin-Anfragen handhabt.
- Wenn Sie die Antwort nicht lesen müssen, verwenden Sie `mode: "no-cors"` in Ihrem `fetch()`-Aufruf. Die Antwort wird undurchsichtig (unlesbar) sein, aber die Anfrage wird erfolgreich sein.
- Leiten Sie die Anfrage über einen Proxy-Server, den Sie kontrollieren, der die Ressource abruft und sie mit geeigneten CORS-Headern zurückgibt.

Siehe [Client-seitige Überlegungen](/de/docs/Web/HTTP/Guides/CORS/Errors#client-side_considerations) für mehr Details.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
