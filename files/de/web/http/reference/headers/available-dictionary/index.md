---
title: Available-Dictionary header
short-title: Available-Dictionary
slug: Web/HTTP/Reference/Headers/Available-Dictionary
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header **`Available-Dictionary`** erlaubt es dem Browser, das am besten passende Wörterbuch anzugeben, das er hat, um dem Server den Einsatz des {{Glossary("Compression_Dictionary_Transport", "Compression Dictionary Transport")}} für eine Ressourcenanfrage zu ermöglichen.

Clients können einen `Available-Dictionary`-Header senden, wenn sie `dcb`- oder `dcz`-Codierungen unterstützen. Der Header ist ein durch Doppelpunkte begrenzter, base-64 kodierter SHA-256 {{Glossary("Hash_function", "Hash")}} der Wörterbuchinhalte.

Weitere Informationen finden Sie im [Leitfaden zur Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport).

## Syntax

```http
Available-Dictionary: :<base64-hash>:
```

## Direktiven

- `<base64-hash>`
  - : Ein base-64 kodierter SHA-256 {{Glossary("Hash_function", "Hash")}} der Wörterbuchinhalte.

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
