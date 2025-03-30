---
title: Symmetrische Kryptographie
slug: Glossary/Symmetric-key_cryptography
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{GlossarySidebar}}

Die symmetrische Kryptographie ist ein Begriff für kryptographische Algorithmen, die denselben Schlüssel zur Verschlüsselung und Entschlüsselung verwenden. Dieser Schlüssel wird in der Regel als "symmetrischer Schlüssel" oder "geheimer Schlüssel" bezeichnet.

Dies steht normalerweise im Gegensatz zur {{Glossary("public-key_cryptography", "Public-Key-Kryptographie")}}, bei der Schlüssel paarweise generiert werden und die durch einen Schlüssel vorgenommene Transformation nur durch den anderen Schlüssel rückgängig gemacht werden kann.

Symmetrische Algorithmen sollten sicher sein, wenn sie ordnungsgemäß verwendet werden, und sie sind sehr effizient, sodass sie genutzt werden können, um große Datenmengen zu verschlüsseln, ohne die Leistung negativ zu beeinflussen.

Die meisten derzeit verwendeten symmetrischen Algorithmen sind Block-{{Glossary("Cipher", "Chiffren")}}: Das bedeutet, dass sie Daten jeweils einen Block verschlüsseln. Die Größe jedes Blocks ist fest und wird durch den Algorithmus bestimmt; zum Beispiel verwendet AES 16-Byte-Blöcke. Blockchiffren werden immer mit einem _{{Glossary("Block_cipher_mode_of_operation", "Modus")}}_ verwendet, der angibt, wie Nachrichten, die länger sind als die Blockgröße, sicher verschlüsselt werden können. Beispielsweise ist AES eine Chiffre, während CTR, CBC und GCM alle Modi sind. Die Verwendung eines unangemessenen Modus oder die falsche Verwendung eines Modus kann die Sicherheit der zugrunde liegenden Chiffre vollständig untergraben.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Unterstützte Algorithmen von SubtleCrypto](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - {{Glossary("Block_cipher_mode_of_operation", "Blockchiffre-Betriebsmodus")}}
  - {{Glossary("Kryptographie", "Kryptographie")}}
  - {{Glossary("Hash_function", "Hash-Funktion")}}
