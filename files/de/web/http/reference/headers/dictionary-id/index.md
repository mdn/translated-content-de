---
title: Dictionary-ID
slug: Web/HTTP/Reference/Headers/Dictionary-ID
l10n:
  sourceCommit: 3b950288ff28e6984e35acd8fa56fa885a935978
---

{{HTTPSidebar}}

Der HTTP-Request-Header **`Dictionary-ID`** verweist auf ein Wörterbuch, das im {{Glossary("Compression_Dictionary_Transport", "Kompressionswörterbuch-Transport")}} zur Komprimierung der Serverantwort verwendet werden kann.

Im Kompressionswörterbuch-Transport kann ein Server angeben, dass eine Ressource als Wörterbuch verwendet werden kann, indem er den Header {{httpheader("Use-As-Dictionary")}} mit der Antwort sendet. Der Server kann eine `id`-Anweisung im `Use-As-Dictionary`-Header einschließen und damit dem Wörterbuch einen ID-Wert zuweisen. Wenn der Server dies tut, muss der Browser bei Anforderung einer Ressource, die mit dem Wörterbuch komprimiert werden kann, den `Dictionary-ID`-Header einfügen, dessen Wert der ID entspricht, die in `Use-As-Dictionary` vergeben wurde.

Siehe den [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) für weitere Informationen.

## Syntax

```http
Dictionary-ID: "<string-identifier>"
```

## Richtlinien

- `<string-identifier>`
  - : Ein String, der die vom Server zugewiesene ID des Wörterbuchs darstellt.

## Beispiele

Angenommen, der Server hat einen `Use-As-Dictionary`-Header mit einer `id="dictionary-12345"`-Anweisung gesendet:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn der Client eine übereinstimmende Ressource anfordert, wird er diesen `id`-Wert in einem `Dictionary-ID`-Header einschließen:

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

- [Leitfaden zum Kompressionswörterbuch-Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Use-As-Dictionary")}}
