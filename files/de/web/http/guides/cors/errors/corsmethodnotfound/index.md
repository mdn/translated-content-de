---
title: "Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'"
slug: Web/HTTP/Guides/CORS/Errors/CORSMethodNotFound
l10n:
  sourceCommit: 92396cf8979e107c3ac42c2b9fc382013ea1c234
---

## Grund

```plain
Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'
```

## Was ist schiefgelaufen?

Die HTTP-Methode, die von der {{Glossary("CORS", "CORS")}}-Anfrage verwendet wird, ist nicht in der Liste der Methoden enthalten, die im {{HTTPHeader("Access-Control-Allow-Methods")}}-Header der Antwort angegeben sind. Dieser Header legt eine durch Kommas getrennte Liste der HTTP-Methoden fest, die beim Zugriff auf die im Antrag angegebene URL mit CORS verwendet werden dürfen; wenn die Anfrage eine andere Methode verwendet, tritt dieser Fehler auf.

Zum Beispiel, wenn die Antwort folgendes beinhaltet:

```http
Access-Control-Allow-Methods: GET,HEAD,POST
```

Der Versuch, eine {{HTTPMethod("PUT")}}-Anfrage zu verwenden, wird mit diesem Fehler fehlschlagen.

Stellen Sie sicher, dass Ihr Code nur die zulässigen HTTP-Methoden beim Zugriff auf den Dienst verwendet.

> [!NOTE]
> Wenn der Server im Header `Access-Control-Allow-methods` irgendwelche nicht erkannten oder undefinierten Methodennamen aufführt, tritt ein anderer Fehler auf: [Grund: ungültiges Token 'xyz' im CORS-Header 'Access-Control-Allow-Methods'](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSInvalidAllowMethod).

Wenn der Server nicht unter Ihrer Kontrolle steht, lesen Sie [Client-seitige Überlegungen](/de/docs/Web/HTTP/Guides/CORS/Errors#client-side_considerations) für alternative Ansätze.

## Siehe auch

- [CORS-Fehler](/de/docs/Web/HTTP/Guides/CORS/Errors)
- Glossar: {{Glossary("CORS", "CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP-Anfragemethoden](/de/docs/Web/HTTP/Reference/Methods)
