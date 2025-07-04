---
title: Dictionary-ID header
short-title: Dictionary-ID
slug: Web/HTTP/Reference/Headers/Dictionary-ID
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP-**`Dictionary-ID`**-Anforderungsheader verweist auf ein Wörterbuch, das im {{Glossary("Compression_Dictionary_Transport", "Kompressionswörterbuchtransport")}} verwendet werden kann, um die Antwort des Servers zu komprimieren.

Ein Server kann angeben, dass eine Ressource als Wörterbuch verwendet werden kann, indem er den {{httpheader("Use-As-Dictionary")}}-Header mit der Antwort sendet. Der Server kann eine `id`-Anweisung im `Use-As-Dictionary`-Header einschließen und damit einen ID-Wert dem Wörterbuch zuweisen. Falls der Server dies tut, muss bei der Anforderung einer Ressource, die mit dem Wörterbuch komprimiert werden kann, die Anfrage der Ressource den `Dictionary-ID`-Header enthalten, und dessen Wert muss mit der im `Use-As-Dictionary` angegebenen ID übereinstimmen.

Dies ermöglicht es dem Server, ein Wörterbuch anhand eines beliebigen Schlüssels zu identifizieren und zu finden, anstatt den {{Glossary("hash_function", "Wörterbuch-Hash")}} als Schlüssel zu verwenden (wenn dieser Ansatz verwendet wird, muss der Server jede Antwort hashen, die den `Use-As-Dictionary`-Header enthält, nur für den Fall, dass die Ressource letztendlich als Wörterbuch verwendet wird).

Beachten Sie, dass der Server zwar das Wörterbuch anhand seiner `Dictionary-ID` identifizieren und lokalisieren kann, aber dennoch den Hash aus dem `Available-Dictionary`-Header überprüfen muss, um zu bestätigen, dass es eine korrekte Übereinstimmung ist.

Weitere Informationen finden Sie im [Kompressionswörterbuchtransport-Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Syntax

```http
Dictionary-ID: "<string-identifier>"
```

## Direktiven

- `<string-identifier>`
  - : Eine Zeichenfolge, die die serverseitig zugewiesene ID des Wörterbuchs darstellt.

## Beispiele

Angenommen, der Server hat einen `Use-As-Dictionary`-Header mit einer `id="dictionary-12345"`-Anweisung gesendet:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn der Client eine passende Ressource anfordert, wird dieser `id`-Wert in einem `Dictionary-ID-Header` enthalten sein:

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
