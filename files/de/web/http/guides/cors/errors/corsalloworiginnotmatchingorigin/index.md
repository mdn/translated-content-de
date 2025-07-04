---
title: "Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'"
slug: Web/HTTP/Guides/CORS/Errors/CORSAllowOriginNotMatchingOrigin
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: CORS header 'Access-Control-Allow-Origin' does not match 'xyz'
```

## Was ist schiefgelaufen?

Der Ursprung, der die Anfrage stellt, stimmt nicht mit dem Ursprung überein, der durch den {{HTTPHeader("Access-Control-Allow-Origin")}} Header erlaubt ist. Dieser Fehler kann auch auftreten, wenn die Antwort mehr als einen `Access-Control-Allow-Origin` Header enthält.

Wenn der Dienst, auf den Ihr Code zugreift, eine CORS-Anfrage unter Ihrer Kontrolle verwendet, stellen
Sie sicher, dass er so konfiguriert ist, dass Ihr Ursprung in seinem `Access-Control-Allow-Origin` Header enthalten ist. Bestätigen Sie zudem, dass in den Antworten nur ein solcher Header enthalten ist und dieser nur einen einzigen Ursprung enthält.

Zum Beispiel fügen Sie bei Apache eine Zeile wie die folgende in die Konfiguration des Servers ein
(innerhalb des entsprechenden `<Directory>`, `<Location>`,
`<Files>` oder `<VirtualHost>` Abschnitts). Die
Konfiguration befindet sich typischerweise in einer `.conf` Datei (`httpd.conf`
und `apache.conf` sind häufige Namen hierfür), oder in einer
`.htaccess` Datei.

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

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [Enable CORS: Ich möchte CORS-Unterstützung zu meinem Server hinzufügen](https://enable-cors.org/server.html)
