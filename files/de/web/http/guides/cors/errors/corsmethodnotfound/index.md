---
title: "Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Grund

```plain
Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'
```

## Was ist schiefgelaufen?

Die HTTP-Methode, die von der {{Glossary("CORS", "CORS")}}-Anfrage verwendet wird, ist nicht in der Liste der Methoden enthalten, die im {{HTTPHeader("Access-Control-Allow-Methods")}} Header der Antwort angegeben sind. Dieser Header gibt eine kommagetrennte Liste der HTTP-Methoden an, die beim Zugriff per CORS auf die in der Anfrage angegebene URL verwendet werden dürfen; wenn die Anfrage eine andere Methode verwendet, tritt dieser Fehler auf.

Zum Beispiel, wenn die Antwort folgendes enthält:

```http
Access-Control-Allow-Methods: GET,HEAD,POST
```

Wird der Versuch, eine {{HTTPMethod("PUT")}}-Anfrage zu verwenden, mit diesem Fehler fehlschlagen.

Stellen Sie sicher, dass Ihr Code nur die erlaubten HTTP-Methoden beim Zugriff auf den Dienst verwendet.

> [!NOTE]
> Wenn der Server in seinem `Access-Control-Allow-methods` Header nicht erkannte oder undefinierte Methodennamen einschließt, tritt ein anderer Fehler auf: [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [CORS Einführung](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
