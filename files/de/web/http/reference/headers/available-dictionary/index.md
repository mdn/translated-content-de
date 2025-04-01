---
title: Available-Dictionary
slug: Web/HTTP/Reference/Headers/Available-Dictionary
l10n:
  sourceCommit: 2d206626c7da8d076e51511a1aead7fa36e262e1
---

{{HTTPSidebar}}

Der HTTP **`Available-Dictionary`** Anfrage-Header ermöglicht es dem Browser, das am besten passende Wörterbuch anzugeben, das er hat, um dem Server die Verwendung des {{Glossary("Compression_Dictionary_Transport", "Compression Dictionary Transport")}} für eine Ressourcenanfrage zu erlauben.

Finden Sie weitere Informationen im [Leitfaden zur Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Syntax

Clients können einen `Available-Dictionary` Header senden, wenn sie `dcb` oder `dcz` Kodierungen unterstützen. Der Header ist ein von Doppelpunkten umschlossener base-64 kodierter SHA-256 {{Glossary("Hash_function", "Hash")}} des Wörterbuchinhalts.

```http
Available-Dictionary: :<base64-hash>:
```

## Direktiven

- `<base64-hash>`
  - : Ein base-64 kodierter SHA-256 {{Glossary("Hash_function", "Hash")}} des Wörterbuchinhalts.

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

- [Leitfaden zur Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Use-As-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
