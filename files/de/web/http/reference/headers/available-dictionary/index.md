---
title: Available-Dictionary header
short-title: Available-Dictionary
slug: Web/HTTP/Reference/Headers/Available-Dictionary
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP **`Available-Dictionary`** Request-Header ermöglicht es dem Browser, das am besten passende Wörterbuch anzugeben, das er hat, damit der Server {{Glossary("Compression_Dictionary_Transport", "Compression Dictionary Transport")}} für eine Ressourcenanfrage verwenden kann.

Weitere Informationen finden Sie im [Leitfaden zu Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Syntax

Clients können einen `Available-Dictionary`-Header senden, wenn sie `dcb`- oder `dcz`-Kodierungen unterstützen. Der Header ist ein von Doppelpunkten umgebener base64-kodierter SHA-256 {{Glossary("Hash_function", "Hash")}} des Wörterbuchinhalts.

```http
Available-Dictionary: :<base64-hash>:
```

## Direktiven

- `<base64-hash>`
  - : Ein base64-kodierter SHA-256 {{Glossary("Hash_function", "Hash")}} des Wörterbuchinhalts.

## Beispiele

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Use-As-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
