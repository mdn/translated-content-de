---
title: Symmetrische Kryptografie
slug: Glossary/Symmetric-key_cryptography
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Symmetrische Kryptografie ist ein Begriff für kryptografische Algorithmen, die denselben Schlüssel sowohl für die Verschlüsselung als auch für die Entschlüsselung verwenden. Der Schlüssel wird üblicherweise als "symmetrischer Schlüssel" oder "geheimer Schlüssel" bezeichnet.

Dies wird normalerweise der {{Glossary("public-key cryptography", "asymmetrischen Kryptografie")}} gegenübergestellt, bei der Schlüssel paarweise generiert werden und die durch einen Schlüssel vorgenommene Transformation nur mit dem anderen Schlüssel rückgängig gemacht werden kann.

Symmetrische Algorithmen sollten bei ordnungsgemäßer Anwendung sicher sein und sind hochgradig effizient, sodass sie verwendet werden können, um große Datenmengen zu verschlüsseln, ohne die Leistung zu beeinträchtigen.

Die meisten derzeit verwendeten symmetrischen Algorithmen sind Block{{Glossary("Cipher", "chiffren")}}: Das bedeutet, dass sie Daten Block für Block verschlüsseln. Die Größe jedes Blocks ist fest und wird durch den Algorithmus bestimmt: Zum Beispiel verwendet AES 16-Byte-Blöcke. Blockchiffren werden immer mit einem _{{Glossary("Block cipher mode of operation", "Modus")}}_ verwendet, der angibt, wie Nachrichten, die länger als die Blockgröße sind, sicher verschlüsselt werden können. Beispielsweise ist AES eine Chiffre, während CTR, CBC und GCM Modi sind. Die Verwendung eines unangemessenen Modus oder die falsche Anwendung eines Modus kann die durch die zugrunde liegende Chiffre gebotene Sicherheit vollständig untergraben.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - {{Glossary("Block cipher mode of operation")}}
  - {{Glossary("Cryptography")}}
  - {{Glossary("Cryptographic hash function")}}
