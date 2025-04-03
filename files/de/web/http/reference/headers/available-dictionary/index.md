---
title: Available-Dictionary
slug: Web/HTTP/Reference/Headers/Available-Dictionary
l10n:
  sourceCommit: 43f272adb6ac15537cff3728c78ddf234485fff8
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Anforderungsheader **`Available-Dictionary`** ermöglicht es dem Browser, das am besten passende Wörterbuch anzugeben, das er besitzt, sodass der Server {{Glossary("Compression_Dictionary_Transport", "Compression Dictionary Transport")}} für eine Ressourcenanforderung verwenden kann.

Siehe den [Leitfaden für Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport) für weitere Informationen.

## Syntax

Clients können einen `Available-Dictionary`-Header senden, wenn sie `dcb`- oder `dcz`-Codierungen unterstützen. Der Header ist ein durch Doppelpunkte eingeschlossener base-64-kodierter SHA-256-{{Glossary("Hash_function", "Hash")}} des Wörterbuchinhalts.

```http
Available-Dictionary: :<base64-hash>:
```

## Direktiven

- `<base64-hash>`
  - : Ein base-64-kodierter SHA-256-{{Glossary("Hash_function", "Hash")}} des Wörterbuchinhalts.

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

- [Leitfaden für Compression Dictionary Transport](/de/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- {{HTTPHeader("Use-As-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
