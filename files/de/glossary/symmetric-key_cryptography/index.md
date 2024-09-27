---
title: Symmetrische Verschlüsselung
slug: Glossary/Symmetric-key_cryptography
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Die symmetrische Verschlüsselung ist ein Begriff für kryptografische Algorithmen, die denselben Schlüssel sowohl für die Verschlüsselung als auch für die Entschlüsselung verwenden. Der Schlüssel wird in der Regel als "symmetrischer Schlüssel" oder "geheimer Schlüssel" bezeichnet.

Dies steht im Gegensatz zur [asymmetrischen Verschlüsselung](/de/docs/Glossary/public-key_cryptography), bei der Schlüssel im Paar erzeugt werden und die von einem Schlüssel vorgenommene Transformation nur mit dem anderen Schlüssel rückgängig gemacht werden kann.

Symmetrische Algorithmen sollten bei richtiger Anwendung sicher sein und sind hoch effizient, sodass sie große Datenmengen verschlüsseln können, ohne die Leistung negativ zu beeinflussen.

Die meisten derzeit verwendeten symmetrischen Algorithmen sind Block-[Chiffren](/de/docs/Glossary/Cipher): Das bedeutet, dass sie Daten blockweise verschlüsseln. Die Größe jedes Blocks ist festgelegt und wird durch den Algorithmus bestimmt: Zum Beispiel verwendet AES 16-Byte-Blöcke. Blockchiffren werden immer mit einem _[Modus](/de/docs/Glossary/Block_cipher_mode_of_operation)_ verwendet, der angibt, wie Nachrichten, die länger als die Blockgröße sind, sicher verschlüsselt werden können. Zum Beispiel ist AES eine Chiffre, während CTR, CBC und GCM Modi sind. Die Verwendung eines ungeeigneten Modus oder die falsche Anwendung eines Modus kann die Sicherheit der zugrunde liegenden Chiffre vollständig untergraben.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Von SubtleCrypto unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - [Blockchiffren-Betriebsmodus](/de/docs/Glossary/Block_cipher_mode_of_operation)
  - [Kryptografie](/de/docs/Glossary/Cryptography)
  - [Kryptografische Hash-Funktion](/de/docs/Glossary/Cryptographic_hash_function)
