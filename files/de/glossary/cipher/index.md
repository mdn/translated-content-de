---
title: Cipher
slug: Glossary/Cipher
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

In der [Kryptographie](/de/docs/Glossary/cryptography) ist ein **Cipher** ein Algorithmus, der [Klartext](/de/docs/Glossary/plaintext) [verschlüsseln](/de/docs/Glossary/encryption) kann, um ihn unleserlich zu machen, und die codierten Daten wieder in Klartext [entschlüsseln](/de/docs/Glossary/decryption) kann.

Cipher waren weit verbreitet lange vor dem Informationszeitalter (z. B. [Substitutions-Chiffren](https://en.wikipedia.org/wiki/Substitution_cipher), [Transpositions-Chiffren](https://en.wikipedia.org/wiki/Transposition_cipher) und [Permutations-Chiffren](https://en.wikipedia.org/wiki/Permutation_cipher)), aber keine von ihnen war kryptographisch sicher, außer dem [One-Time-Pad](https://en.wikipedia.org/wiki/One-time_pad).

Im modernen Zeitalter haben sich Cipher dramatisch weiterentwickelt. [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard), [RSA](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>) und [Blowfish](<https://en.wikipedia.org/wiki/Blowfish_(cipher)>) sind Beispiele für Cipher, die integrale Bestandteile zeitgenössischer Verschlüsselungsstandards und -systeme sind.

Moderne Cipher sind so konzipiert, dass sie Angriffen widerstehen, die durch [Kryptanalyse](/de/docs/Glossary/cryptanalysis) entdeckt wurden. Es gibt keine Garantie, dass alle Angriffsmethoden entdeckt wurden, daher wird jeder Algorithmus [für unterschiedliche Zwecke empfohlen](/de/docs/Web/API/SubtleCrypto#supported_algorithms), basierend auf bekannten Angriffsklassen.

Cipher arbeiten entweder als [Block-Chiffren](https://en.wikipedia.org/wiki/Block_cipher) auf aufeinanderfolgenden Blöcken (oder Buffern) von Daten oder als [Strom-Chiffren](https://en.wikipedia.org/wiki/Stream_cipher) in einem kontinuierlichen Datenstrom (oft von Ton oder Video).

Cipher werden auch danach klassifiziert, wie ihre [Schlüssel](/de/docs/Glossary/key) gehandhabt werden:

- [Symmetrische Schlüssel-](/de/docs/Glossary/Symmetric-key_cryptography) Algorithmen verwenden denselben Schlüssel, um eine Nachricht zu codieren und zu decodieren. Der Schlüssel muss auch sicher übermittelt werden, wenn die Nachricht vertraulich bleiben soll.
- [Asymmetrische Schlüssel-](/de/docs/Glossary/Public-key_cryptography) Algorithmen verwenden einen Schlüssel zur Verschlüsselung und den anderen zur Entschlüsselung.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Unterstützte Algorithmen in SubtleCrypto](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - [Block-Chiffre-Betriebsmodi](/de/docs/Glossary/Block_cipher_mode_of_operation)
  - [Chiffretext](/de/docs/Glossary/Ciphertext)
  - [Chiffre-Suite](/de/docs/Glossary/Cipher_suite)
  - [Kryptanalyse](/de/docs/Glossary/Cryptanalysis)
  - [Kryptographie](/de/docs/Glossary/Cryptography)
  - [Entschlüsselung](/de/docs/Glossary/Decryption)
  - [Verschlüsselung](/de/docs/Glossary/Encryption)
  - [Schlüssel](/de/docs/Glossary/Key)
  - [Klartext](/de/docs/Glossary/Plaintext)
  - [Öffentlicher Schlüssel-Kryptographie](/de/docs/Glossary/Public-key_cryptography)
  - [Symmetrische Schlüssel-Kryptographie](/de/docs/Glossary/Symmetric-key_cryptography)
- [Cipher](https://en.wikipedia.org/wiki/Cipher) auf Wikipedia
