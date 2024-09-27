---
title: "Grund: Methode nicht in CORS-Header 'Access-Control-Allow-Methods' gefunden"
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

Die im [CORS](/de/docs/Glossary/CORS)-Antrag verwendete HTTP-Methode ist nicht in der Liste der Methoden enthalten, die durch den `Access-Control-Allow-Methods`-Header der Antwort angegeben werden. Dieser Header gibt eine kommagetrennte Liste der HTTP-Methoden an, die bei der Verwendung von CORS für den Zugriff auf die im Antrag angegebene URL verwendet werden dürfen; wenn der Antrag eine andere Methode verwendet, tritt dieser Fehler auf.

Beispielsweise, wenn die Antwort enthält:

```http
Access-Control-Allow-Methods: GET,HEAD,POST
```

Ein Versuch, eine {{HTTPMethod("PUT")}}-Anfrage zu verwenden, wird mit diesem Fehler fehlschlagen.

Stellen Sie sicher, dass Ihr Code nur die erlaubten HTTP-Methoden beim Zugriff auf den Dienst verwendet.

> [!NOTE]
> Wenn der Server im Header `Access-Control-Allow-methods` irgendwelche nicht erkannten oder undefinierten Methodennamen einfügt, tritt ein anderer Fehler auf: [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: [CORS](/de/docs/Glossary/CORS)
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
