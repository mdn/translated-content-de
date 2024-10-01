---
title: "Grund: CORS-Header 'Access-Control-Allow-Origin' stimmt nicht mit 'xyz' überein"
slug: Web/HTTP/CORS/Errors/CORSAllowOriginNotMatchingOrigin
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
```

## Was ist schiefgelaufen?

Der Ursprung, der die Anfrage stellt, stimmt nicht mit dem Ursprung überein, der durch den {{HTTPHeader("Access-Control-Allow-Origin")}}-Header zugelassen wird. Dieser Fehler kann auch auftreten, wenn die Antwort mehr als einen `Access-Control-Allow-Origin`-Header enthält.

Wenn der Dienst, auf den Ihr Code zugreift, eine CORS-Anfrage unter Ihrer Kontrolle verwendet, stellen Sie sicher, dass er so konfiguriert ist, dass er Ihren Ursprung in seinem `Access-Control-Allow-Origin`-Header einschließt. Bestätigen Sie außerdem, dass nur ein solcher Header in Antworten enthalten ist und dass er nur einen einzigen Ursprung enthält.

Fügen Sie beispielsweise in Apache eine Zeile wie die folgende in die Serverkonfiguration ein (innerhalb des entsprechenden `<Directory>`, `<Location>`, `<Files>` oder `<VirtualHost>`-Abschnitts). Die Konfiguration befindet sich typischerweise in einer `.conf`-Datei (`httpd.conf` und `apache.conf` sind häufige Namen dafür) oder in einer `.htaccess`-Datei.

> [!WARNING]
> Sie müssen das HTTPS- oder HTTP-Protokoll als Teil des Ursprungs einschließen.

```apacheconf
Header set Access-Control-Allow-Origin 'origin'
```

Für Nginx lautet der Befehl zum Einrichten dieses Headers:

```nginx
add_header 'Access-Control-Allow-Origin' 'origin'
```

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
