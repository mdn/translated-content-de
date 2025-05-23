---
title: Dictionary-ID header
short-title: Dictionary-ID
slug: Web/HTTP/Reference/Headers/Dictionary-ID
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Dictionary-ID`** Request-Header verweist auf ein Wörterbuch, das im {{Glossary("Compression_Dictionary_Transport", "Kompressionswörterbuchtransport")}} verwendet werden kann, um die Antwort des Servers zu komprimieren.

Ein Server kann anzeigen, dass eine Ressource als Wörterbuch verwendet werden kann, indem er den {{httpheader("Use-As-Dictionary")}} Header mit der Antwort sendet. Der Server kann eine `id`-Anweisung im `Use-As-Dictionary` Header hinzufügen und so dem Wörterbuch einen ID-Wert zuweisen. Wenn der Server dies tut, muss bei Anforderung einer Ressource, die mit diesem Wörterbuch komprimiert werden kann, der `Dictionary-ID` Header im Ressourcenantrag enthalten sein, und sein Wert muss mit der ID übereinstimmen, die in `Use-As-Dictionary` angegeben wurde.

Dies ermöglicht es dem Server, ein Wörterbuch zu identifizieren und zu finden, das durch einen beliebigen Schlüssel referenziert wird, anstatt den {{Glossary("hash_function", "Wörterbuch-Hash")}} als Schlüssel zu verwenden (wenn dieser Ansatz verwendet wird, müsste der Server jede Antwort, die den `Use-As-Dictionary` Header enthält, hashen, für den Fall, dass die Ressource schließlich als Wörterbuch verwendet werden könnte).

Beachten Sie, dass der Server, auch wenn er das Wörterbuch anhand seiner `Dictionary-ID` identifizieren und finden kann, dennoch den Hash aus dem `Available-Dictionary` Header überprüfen muss, um sicherzustellen, dass es eine korrekte Übereinstimmung ist.

Sehen Sie sich den [Kompressionswörterbuchtransport-Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) für weitere Informationen an.

## Syntax

```http
Dictionary-ID: "<string-identifier>"
```

## Direktiven

- `<string-identifier>`
  - : Ein String, der die serverseitig zugewiesene ID des Wörterbuchs darstellt.

## Beispiele

Angenommen, der Server hat einen `Use-As-Dictionary` Header mit einer `id="dictionary-12345"`-Anweisung gesendet:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn der Client eine passende Ressource anfordert, wird er diesen `id`-Wert in einen `Dictionary-ID` Header einfügen:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Kompressionswörterbuchtransport-Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Use-As-Dictionary")}}
