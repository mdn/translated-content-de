---
title: "Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'"
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

Die im {{Glossary("CORS", "CORS")}}-Anfrage verwendete HTTP-Methode ist nicht in der Liste der Methoden enthalten, die im {{HTTPHeader("Access-Control-Allow-Methods")}}-Header der Antwort angegeben sind. Dieser Header gibt eine durch Kommas getrennte Liste der HTTP-Methoden an, die verwendet werden dürfen, um mit CORS auf die in der Anfrage angegebene URL zuzugreifen; wenn die Anfrage eine andere Methode verwendet, tritt dieser Fehler auf.

Wenn beispielsweise die Antwort Folgendes enthält:

```http
Access-Control-Allow-Methods: GET,HEAD,POST
```

wird der Versuch, eine {{HTTPMethod("PUT")}}-Anfrage zu verwenden, mit diesem Fehler fehlschlagen.

Stellen Sie sicher, dass Ihr Code nur die erlaubten HTTP-Methoden verwendet, wenn Sie auf den Dienst zugreifen.

> [!NOTE]
> Wenn der Server im Header `Access-Control-Allow-Methods` nicht erkannte oder undefinierte Methodennamen einschließt, tritt ein anderer Fehler auf: [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung zu CORS](/de/docs/Web/HTTP/CORS)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
