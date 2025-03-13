---
title: "Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'"
slug: Web/HTTP/Guides/CORS/Errors/CORSAllowOriginNotMatchingOrigin
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
```

## Was ist schiefgelaufen?

Der Ursprung, von dem die Anfrage ausgeht, stimmt nicht mit dem Ursprung überein, der durch den {{HTTPHeader("Access-Control-Allow-Origin")}}-Header erlaubt ist. Dieser Fehler kann auch auftreten, wenn die Antwort mehr als einen `Access-Control-Allow-Origin`-Header enthält.

Falls der Dienst, auf den Ihr Code zugreift, eine CORS-Anfrage unter Ihrer Kontrolle verwendet, stellen Sie sicher, dass er so konfiguriert ist, dass Ihr Ursprung im `Access-Control-Allow-Origin`-Header enthalten ist. Bestätigen Sie außerdem, dass in den Antworten nur ein solcher Header enthalten ist und dass er nur einen einzigen Ursprung enthält.

Beispielsweise fügen Sie in Apache eine Zeile wie die folgende zur Serverkonfiguration hinzu (in der entsprechenden `<Directory>`, `<Location>`, `<Files>` oder `<VirtualHost>`-Sektion). Die Konfiguration ist typischerweise in einer `.conf`-Datei zu finden (`httpd.conf` und `apache.conf` sind gängige Namen dafür), oder in einer `.htaccess`-Datei.

> [!WARNING]
> Sie müssen das HTTPS- oder HTTP-Protokoll als Teil des Ursprungs einschließen.

```apacheconf
Header set Access-Control-Allow-Origin 'origin'
```

Für Nginx ist der Befehl zur Einrichtung dieses Headers:

```nginx
add_header 'Access-Control-Allow-Origin' 'origin'
```

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [CORS aktivieren: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
