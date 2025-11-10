---
title: Symmetrische Verschlüsselung
slug: Glossary/Symmetric-key_cryptography
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Symmetrische Verschlüsselung ist ein Begriff für kryptografische Algorithmen, die denselben Schlüssel sowohl für die Verschlüsselung als auch für die Entschlüsselung verwenden. Der Schlüssel wird üblicherweise als "symmetrischer Schlüssel" oder "geheimer Schlüssel" bezeichnet.

Dies wird normalerweise der {{Glossary("public-key_cryptography", "asymmetrischen Verschlüsselung")}} gegenübergestellt, bei der Schlüssel paarweise generiert werden und die Transformation, die durch einen Schlüssel vorgenommen wird, nur durch den anderen Schlüssel rückgängig gemacht werden kann.

Symmetrische Verschlüsselungsalgorithmen sollten bei korrekter Anwendung sicher sein und sind äußerst effizient, sodass sie verwendet werden können, um große Datenmengen zu verschlüsseln, ohne die Leistung negativ zu beeinflussen.

Die meisten aktuell verwendeten symmetrischen Verschlüsselungsalgorithmen sind Block-{{Glossary("Cipher", "Chiffren")}}: Das bedeutet, dass sie Daten jeweils blockweise verschlüsseln. Die Größe jedes Blocks ist festgelegt und wird durch den Algorithmus bestimmt: Zum Beispiel verwendet AES 16-Byte-Blöcke. Blockchiffren werden immer mit einem _{{Glossary("Block_cipher_mode_of_operation", "Modus")}}_ verwendet, der angibt, wie Nachrichten, die länger als die Blockgröße sind, sicher verschlüsselt werden können. Zum Beispiel ist AES eine Chiffre, während CTR, CBC und GCM Modi sind. Die Verwendung eines unangemessenen Modus oder die falsche Anwendung eines Modus kann die Sicherheit, die durch die zugrunde liegende Chiffre geboten wird, vollständig untergraben.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - {{Glossary("Block_cipher_mode_of_operation", "Blockchiffre-Betriebsmodus")}}
  - {{Glossary("Cryptography", "Kryptografie")}}
  - {{Glossary("Hash_function", "Hash-Funktion")}}
