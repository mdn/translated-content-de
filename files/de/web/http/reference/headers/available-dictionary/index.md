---
title: Available-Dictionary header
short-title: Available-Dictionary
slug: Web/HTTP/Reference/Headers/Available-Dictionary
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP **`Available-Dictionary`** Anfrage-Header ermöglicht es dem Browser, das am besten passende Wörterbuch zu spezifizieren, das er hat, um dem Server die Nutzung des {{Glossary("Compression_Dictionary_Transport", "Compression Dictionary Transport")}} für eine Ressourcenanfrage zu erlauben.

Clients können einen `Available-Dictionary` Header senden, wenn sie `dcb` oder `dcz` Kodierungen unterstützen. Der Header ist ein durch Doppelpunkte umschlossener base-64 kodierter SHA-256 {{Glossary("Hash_function", "Hash")}} der Wörterbuchinhalte.

Siehe den [Compression Dictionary Transport Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) für weitere Informationen.

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

- [Compression Dictionary Transport Leitfaden](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Use-As-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
