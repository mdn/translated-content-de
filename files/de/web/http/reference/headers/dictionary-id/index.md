---
title: Dictionary-ID
slug: Web/HTTP/Reference/Headers/Dictionary-ID
l10n:
  sourceCommit: ae1d2366289e37ed587e24c2a02e4ec2fda6812c
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Dictionary-ID`** Anforderungsheader verweist auf ein Wörterbuch, das im {{Glossary("Compression_Dictionary_Transport", "Komprimierungswörterbuch-Transport")}} verwendet werden kann, um die Antwort des Servers zu komprimieren.

Ein Server kann angeben, dass eine Ressource als Wörterbuch verwendet werden kann, indem er den {{httpheader("Use-As-Dictionary")}} Header mit der Antwort sendet. Der Server kann eine `id` Direktive im `Use-As-Dictionary` Header einschließen und damit dem Wörterbuch eine ID zuweisen. Wenn der Server dies tut, muss die Anfrage nach einer Ressource, die mithilfe des Wörterbuchs komprimiert werden kann, den `Dictionary-ID` Header enthalten und dessen Wert muss der ID entsprechen, die im `Use-As-Dictionary` angegeben wurde.

Dies ermöglicht es dem Server, ein Wörterbuch anhand eines beliebigen Schlüssels zu identifizieren und zu finden, anstatt den {{Glossary("hash_function", "Wörterbuch-Hash")}} als Schlüssel zu verwenden (wenn dieser Ansatz verwendet wird, muss der Server jede Antwort hashen, die den `Use-As-Dictionary` Header enthält, nur für den Fall, dass die Ressource schließlich als Wörterbuch verwendet wird).

Beachten Sie, dass der Server, obwohl er das Wörterbuch anhand seiner `Dictionary-ID` identifizieren und lokalisieren kann, den Hash aus dem `Available-Dictionary` Header überprüfen muss, um sicherzustellen, dass es eine korrekte Übereinstimmung ist.

Weitere Informationen finden Sie im [Leitfaden für Komprimierungswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Syntax

```http
Dictionary-ID: "<string-identifier>"
```

## Direktiven

- `<string-identifier>`
  - : Eine Zeichenfolge, die die vom Server zugewiesene ID des Wörterbuchs repräsentiert.

## Beispiele

Zum Beispiel, nehmen wir an, der Server hat einen `Use-As-Dictionary` Header mit einer `id="dictionary-12345"` Direktive gesendet:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn der Client eine passende Ressource anfordert, wird er diesen `id` Wert in einem `Dictionary-ID` Header einschließen:

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

- [Leitfaden für Komprimierungswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Use-As-Dictionary")}}
