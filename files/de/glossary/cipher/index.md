---
title: Cipher
slug: Glossary/Cipher
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der {{Glossary("cryptography", "Kryptografie")}} ist ein **Cipher** ein Algorithmus, der {{Glossary("plaintext", "Klartext")}} verschlüsseln kann, um ihn unleserlich zu machen, und der die verschlüsselten Daten wieder zurück in Klartext entschlüsseln kann.

Cipher waren schon lange vor dem Informationszeitalter weit verbreitet (z. B. [Substitutionschiffren](https://en.wikipedia.org/wiki/Substitution_cipher), [Transpositionschiffren](https://en.wikipedia.org/wiki/Transposition_cipher) und [Permutationschiffren](https://en.wikipedia.org/wiki/Permutation_cipher)), jedoch war keiner von ihnen kryptografisch sicher, außer dem [One-Time-Pad](https://en.wikipedia.org/wiki/One-time_pad).

Im modernen Zeitalter haben sich Cipher dramatisch weiterentwickelt. [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard), [RSA](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>) und [Blowfish](<https://en.wikipedia.org/wiki/Blowfish_(cipher)>) sind Beispiele für Cipher, die integraler Bestandteil zeitgenössischer Verschlüsselungsstandards und -systeme sind.

Moderne Cipher sind darauf ausgelegt, Angriffen zu widerstehen, die durch {{Glossary("cryptanalysis", "Kryptoanalyse")}} entdeckt werden. Es gibt keine Garantie dafür, dass alle Angriffsmethoden entdeckt wurden, daher wird jeder Algorithmus basierend auf bekannten Arten von Angriffen [für unterschiedliche Zwecke empfohlen](/de/docs/Web/API/SubtleCrypto#supported_algorithms).

Cipher arbeiten entweder als [Block-Chiffren](https://en.wikipedia.org/wiki/Block_cipher) auf aufeinanderfolgenden Datenblöcken (oder Puffern) oder als [Stromchiffren](https://en.wikipedia.org/wiki/Stream_cipher) auf einem kontinuierlichen Datenstrom (oft Ton oder Video).

Cipher werden auch danach klassifiziert, wie ihre {{Glossary("key", "Schlüssel")}} gehandhabt werden:

- {{Glossary("Symmetric-key_cryptography", "Symmetrische Schlüssel")}} Algorithmen verwenden denselben Schlüssel, um eine Nachricht zu verschlüsseln und zu entschlüsseln. Der Schlüssel muss auch sicher übermittelt werden, wenn die Nachricht vertraulich bleiben soll.
- {{Glossary("Public-key_cryptography", "Asymmetrische Schlüssel")}} Algorithmen verwenden einen Schlüssel für die Verschlüsselung und einen anderen für die Entschlüsselung.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossareinträge:
  - {{Glossary("Block_cipher_mode_of_operation", "Betriebsart von Blockchiffren")}}
  - {{Glossary("Ciphertext", "Chiffretext")}}
  - {{Glossary("Cipher_suite", "Cipher Suite")}}
  - {{Glossary("Cryptanalysis", "Kryptoanalyse")}}
  - {{Glossary("Cryptography", "Kryptografie")}}
  - {{Glossary("Decryption", "Entschlüsselung")}}
  - {{Glossary("Encryption", "Verschlüsselung")}}
  - {{Glossary("Key", "Schlüssel")}}
  - {{Glossary("Plaintext", "Klartext")}}
  - {{Glossary("Public-key_cryptography", "Public-Key-Kryptografie")}}
  - {{Glossary("Symmetric-key_cryptography", "Symmetrische Kryptografie")}}
- [Cipher](https://en.wikipedia.org/wiki/Cipher) auf Wikipedia
