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

Der Ursprung, der die Anfrage stellt, stimmt nicht mit dem Ursprung überein, der durch den {{HTTPHeader("Access-Control-Allow-Origin")}}-Header zugelassen ist. Dieser Fehler kann auch auftreten, wenn die Antwort mehr als einen `Access-Control-Allow-Origin`-Header enthält.

Falls der Dienst, auf den Ihr Code zugreift, eine CORS-Anfrage unter Ihrer Kontrolle nutzt, stellen Sie sicher, dass er so konfiguriert ist, dass Ihr Ursprung in seinem `Access-Control-Allow-Origin`-Header enthalten ist. Überprüfen Sie außerdem, dass nur ein solcher Header in den Antworten enthalten ist und dass er nur einen einzelnen Ursprung enthält.

Zum Beispiel, fügen Sie in Apache eine Zeile wie die folgende zur Server-Konfiguration hinzu (innerhalb des entsprechenden Abschnitts `<Directory>`, `<Location>`, `<Files>`, oder `<VirtualHost>`). Die Konfiguration befindet sich typischerweise in einer `.conf`-Datei (`httpd.conf` und `apache.conf` sind gängige Namen dafür) oder in einer `.htaccess`-Datei.

> [!WARNING]
> Sie müssen das HTTPS- oder HTTP-Protokoll als Teil des Ursprungs einschließen.

```apacheconf
Header set Access-Control-Allow-Origin 'origin'
```

Für Nginx lautet der Befehl zur Einrichtung dieses Headers:

```nginx
add_header 'Access-Control-Allow-Origin' 'origin'
```

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [Einführung zu CORS](/de/docs/Web/HTTP/CORS)
- [Enable CORS: Ich möchte meinem Server CORS-Unterstützung hinzufügen](https://enable-cors.org/server.html)
