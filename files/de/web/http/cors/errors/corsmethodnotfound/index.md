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

Die im {{Glossary("CORS")}}-Anfrage verwendete HTTP-Methode ist nicht in der Liste der Methoden enthalten, die im {{HTTPHeader("Access-Control-Allow-Methods")}}-Header der Antwort angegeben sind. Dieser Header gibt eine durch Kommas getrennte Liste der HTTP-Methoden an, die bei der Verwendung von CORS für den Zugang zur in der Anfrage angegebenen URL verwendet werden dürfen. Wird eine andere Methode verwendet, tritt dieser Fehler auf.

Wenn die Antwort zum Beispiel Folgendes enthält:

```http
Access-Control-Allow-Methods: GET,HEAD,POST
```

Wird der Versuch, eine {{HTTPMethod("PUT")}}-Anfrage zu verwenden, mit diesem Fehler fehlschlagen.

Stellen Sie sicher, dass Ihr Code nur die zugelassenen HTTP-Methoden verwendet, um auf den Dienst zuzugreifen.

> [!NOTE]
> Falls der Server nicht erkannte oder undefinierte Methodennamen in seinem `Access-Control-Allow-Methods`-Header enthält, tritt ein anderer Fehler auf: [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod).

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [Einführung in CORS](/de/docs/Web/HTTP/CORS)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Methods)
