---
title: Symmetric-key cryptography
slug: Glossary/Symmetric-key_cryptography
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Der Begriff der symmetrischen Kryptographie bezieht sich auf kryptographische Algorithmen, die denselben Schlüssel für die Verschlüsselung und die Entschlüsselung verwenden. Dieser Schlüssel wird üblicherweise als "symmetrischer Schlüssel" oder "geheimer Schlüssel" bezeichnet.

Dies steht normalerweise im Gegensatz zur [asymmetrischen Kryptographie (Public-Key-Kryptographie)]( /de/docs/Glossary/public-key_cryptography), bei der Schlüssel paarweise generiert werden und die von einem Schlüssel durchgeführte Transformation nur mit dem anderen Schlüssel rückgängig gemacht werden kann.

Symmetrische Verschlüsselungsalgorithmen sollten bei richtiger Anwendung sicher sein und sind hoch effizient, sodass sie verwendet werden können, um große Datenmengen zu verschlüsseln, ohne die Leistung negativ zu beeinträchtigen.

Die meisten derzeit verwendeten symmetrischen Verschlüsselungsalgorithmen sind Block-[Chiffren](/de/docs/Glossary/Cipher): Das bedeutet, dass sie Daten blockweise verschlüsseln. Die Größe jedes Blocks ist festgelegt und wird durch den Algorithmus bestimmt: So verwendet AES beispielsweise 16-Byte-Blöcke. Blockchiffren werden immer mit einem _[Modus](/de/docs/Glossary/Block_cipher_mode_of_operation)_ verwendet, der festlegt, wie Nachrichten, die länger als die Blockgröße sind, sicher verschlüsselt werden. Beispielsweise ist AES eine Chiffre, während CTR, CBC und GCM Modi sind. Die Verwendung eines unangemessenen Modus oder die fehlerhafte Verwendung eines Modus kann die von der zugrunde liegenden Chiffre gebotene Sicherheit vollständig untergraben.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Unterstützte Algorithmen von SubtleCrypto](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - [Blockchiffrenmodus der Operation](/de/docs/Glossary/Block_cipher_mode_of_operation)
  - [Kryptographie](/de/docs/Glossary/Cryptography)
  - [Kryptographische Hashfunktion](/de/docs/Glossary/Cryptographic_hash_function)
