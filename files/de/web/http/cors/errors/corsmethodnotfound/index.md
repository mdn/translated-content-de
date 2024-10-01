---
title: "Grund: Methode im CORS-Header 'Access-Control-Allow-Methods' nicht gefunden"
slug: Web/HTTP/CORS/Errors/CORSMethodNotFound
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

## Grund

```plain
Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'
```

## Was ist schiefgelaufen?

Die HTTP-Methode, die von der {{Glossary("CORS", "CORS")}}-Anfrage verwendet wird, ist nicht in der Liste der Methoden enthalten, die im `Access-Control-Allow-Methods`-Header der Antwort angegeben sind. Dieser Header gibt eine durch Kommas getrennte Liste der HTTP-Methoden an, die verwendet werden dürfen, wenn CORS verwendet wird, um auf die im Antrag angegebene URL zuzugreifen; wenn der Antrag eine andere Methode verwendet, tritt dieser Fehler auf.

Wenn die Antwort zum Beispiel enthält:

```http
Access-Control-Allow-Methods: GET,HEAD,POST
```

Schlägt der Versuch, eine {{HTTPMethod("PUT")}}-Anfrage zu verwenden, aufgrund dieses Fehlers fehl.

Stellen Sie sicher, dass Ihr Code nur die erlaubten HTTP-Methoden beim Zugriff auf den Dienst verwendet.

> [!NOTE]
> Wenn der Server im `Access-Control-Allow-methods`-Header nicht erkannte oder undefinierte Methodennamen einschließt, tritt ein anderer Fehler auf: [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
- [HTTP-Anfrage-Methoden](/de/docs/Web/HTTP/Methods)
