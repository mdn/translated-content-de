---
title: Dictionary-ID
slug: Web/HTTP/Reference/Headers/Dictionary-ID
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Anforderungsheader **`Dictionary-ID`** verweist auf ein Wörterbuch, das im {{Glossary("Compression_Dictionary_Transport", "Compression Dictionary Transport")}} verwendet werden kann, um die Serverantwort zu komprimieren.

Im Compression Dictionary Transport kann ein Server angeben, dass eine Ressource als Wörterbuch verwendet werden kann, indem er den Header {{httpheader("Use-As-Dictionary")}} mit der Antwort sendet. Der Server kann eine `id`-Richtlinie im `Use-As-Dictionary`-Header aufnehmen und somit dem Wörterbuch einen ID-Wert zuweisen. Wenn der Server dies tut, muss bei einer Anfrage des Browsers auf eine Ressource, die mit dem Wörterbuch komprimiert werden kann, die Anforderungsheader `Dictionary-ID` enthalten, und dessen Wert muss die im `Use-As-Dictionary` angegebenen ID sein.

Weitere Informationen finden Sie im [Leitfaden für Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Syntax

```http
Dictionary-ID: "<string-identifier>"
```

## Richtlinien

- `<string-identifier>`
  - : Ein String, der die vom Server zugewiesene ID des Wörterbuchs darstellt.

## Beispiele

Angenommen, der Server hat einen `Use-As-Dictionary`-Header mit einer Direktive `id="dictionary-12345"` gesendet:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Wenn der Client eine passende Ressource anfordert, wird er diesen `id`-Wert in einem `Dictionary-ID`-Header einschließen:

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

- [Leitfaden für Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Use-As-Dictionary")}}
