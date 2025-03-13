---
title: "Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

## Grund

```plain
Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'
```

## Was ist schiefgelaufen?

Die HTTP-Methode, die von der {{Glossary("CORS", "CORS")}}-Anfrage verwendet wird, ist nicht in der Liste der Methoden enthalten, die durch den `Access-Control-Allow-Methods`-Header der Antwort spezifiziert sind. Dieser Header gibt eine durch Kommas getrennte Liste von HTTP-Methoden an, die bei der Verwendung von CORS zur Zugriff auf die in der Anfrage spezifizierte URL verwendet werden dürfen; wenn die Anfrage eine andere Methode verwendet, tritt dieser Fehler auf.

Wenn die Antwort beispielsweise enthält:

```http
Access-Control-Allow-Methods: GET,HEAD,POST
```

Wird der Versuch, eine {{HTTPMethod("PUT")}}-Anfrage zu verwenden, mit diesem Fehler scheitern.

Stellen Sie sicher, dass Ihr Code nur die erlaubten HTTP-Methoden verwendet, wenn Sie auf den Dienst zugreifen.

> [!NOTE]
> Wenn der Server unbekannte oder undefinierte Methodennamen in seinem `Access-Control-Allow-Methods`-Header enthält, tritt ein anderer Fehler auf: [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
