---
title: Cipher
slug: Glossary/Cipher
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

In der {{Glossary("cryptography", "Kryptographie")}} ist ein **Cipher** ein Algorithmus, der {{Glossary("plaintext", "Klartext")}} {{Glossary("encryption", "verschlüsseln")}} kann, um ihn unleserlich zu machen, und die codierten Daten wieder in Klartext {{Glossary("decryption", "entschlüsseln")}} kann.

Cipher waren weit verbreitet lange vor dem Informationszeitalter (z. B. [Substitutions-Chiffren](https://en.wikipedia.org/wiki/Substitution_cipher), [Transpositions-Chiffren](https://en.wikipedia.org/wiki/Transposition_cipher) und [Permutations-Chiffren](https://en.wikipedia.org/wiki/Permutation_cipher)), aber keine von ihnen war kryptographisch sicher, außer dem [One-Time-Pad](https://en.wikipedia.org/wiki/One-time_pad).

Im modernen Zeitalter haben sich Cipher dramatisch weiterentwickelt. [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard), [RSA](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>) und [Blowfish](<https://en.wikipedia.org/wiki/Blowfish_(cipher)>) sind Beispiele für Cipher, die integrale Bestandteile zeitgenössischer Verschlüsselungsstandards und -systeme sind.

Moderne Cipher sind so konzipiert, dass sie Angriffen widerstehen, die durch {{Glossary("cryptanalysis", "Kryptanalyse")}} entdeckt wurden. Es gibt keine Garantie, dass alle Angriffsmethoden entdeckt wurden, daher wird jeder Algorithmus [für unterschiedliche Zwecke empfohlen](/de/docs/Web/API/SubtleCrypto#supported_algorithms), basierend auf bekannten Angriffsklassen.

Cipher arbeiten entweder als [Block-Chiffren](https://en.wikipedia.org/wiki/Block_cipher) auf aufeinanderfolgenden Blöcken (oder Buffern) von Daten oder als [Strom-Chiffren](https://en.wikipedia.org/wiki/Stream_cipher) in einem kontinuierlichen Datenstrom (oft von Ton oder Video).

Cipher werden auch danach klassifiziert, wie ihre {{Glossary("key", "Schlüssel")}} gehandhabt werden:

- {{Glossary("Symmetric-key_cryptography", "Symmetrische Schlüssel-")}} Algorithmen verwenden denselben Schlüssel, um eine Nachricht zu codieren und zu decodieren. Der Schlüssel muss auch sicher übermittelt werden, wenn die Nachricht vertraulich bleiben soll.
- {{Glossary("Public-key_cryptography", "Asymmetrische Schlüssel-")}} Algorithmen verwenden einen Schlüssel zur Verschlüsselung und den anderen zur Entschlüsselung.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Unterstützte Algorithmen in SubtleCrypto](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - {{Glossary("Block_cipher_mode_of_operation", "Block-Chiffre-Betriebsmodi")}}
  - {{Glossary("Ciphertext", "Chiffretext")}}
  - {{Glossary("Cipher_suite", "Chiffre-Suite")}}
  - {{Glossary("Cryptanalysis", "Kryptanalyse")}}
  - {{Glossary("Cryptography", "Kryptographie")}}
  - {{Glossary("Decryption", "Entschlüsselung")}}
  - {{Glossary("Encryption", "Verschlüsselung")}}
  - {{Glossary("Key", "Schlüssel")}}
  - {{Glossary("Plaintext", "Klartext")}}
  - {{Glossary("Public-key_cryptography", "Öffentlicher Schlüssel-Kryptographie")}}
  - {{Glossary("Symmetric-key_cryptography", "Symmetrische Schlüssel-Kryptographie")}}
- [Cipher](https://en.wikipedia.org/wiki/Cipher) auf Wikipedia
