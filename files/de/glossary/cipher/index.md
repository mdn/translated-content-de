---
title: Cipher
slug: Glossary/Cipher
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

In der [Kryptographie](/de/docs/Glossary/cryptography) ist ein **Cipher** ein Algorithmus, der [Plaintext](/de/docs/Glossary/plaintext) [verschlüsseln](/de/docs/Glossary/encryption) kann, um ihn unlesbar zu machen, und die kodierten Daten wieder in Plaintext [entschlüsseln](/de/docs/Glossary/decryption) kann.

Cipher waren schon lange vor dem Informationszeitalter verbreitet (z. B. [Substitutionsverschlüsselungen](https://en.wikipedia.org/wiki/Substitution_cipher), [Transpositionsverschlüsselungen](https://en.wikipedia.org/wiki/Transposition_cipher) und [Permutationverschlüsselungen](https://en.wikipedia.org/wiki/Permutation_cipher)), aber keine von ihnen war kryptographisch sicher, mit Ausnahme des [One-Time-Pads](https://en.wikipedia.org/wiki/One-time_pad).

Im modernen Zeitalter haben sich Kryptosysteme dramatisch weiterentwickelt. [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard), [RSA](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>) und [Blowfish](<https://en.wikipedia.org/wiki/Blowfish_(cipher)>) sind Beispiele für Chiffren, die ein integraler Bestandteil zeitgenössischer Verschlüsselungsstandards und Systeme sind.

Moderne Verschlüsselungsverfahren sind darauf ausgelegt, Angriffen zu widerstehen, die durch [Kryptanalyse](/de/docs/Glossary/cryptanalysis) entdeckt wurden. Es gibt keine Garantie dafür, dass alle Angriffsarten entdeckt wurden, daher wird jeder Algorithmus [für unterschiedliche Zwecke empfohlen](/de/docs/Web/API/SubtleCrypto#supported_algorithms), basierend auf bekannten Klassen von Angriffen.

Cipher arbeiten entweder als [Blockchiffren](https://en.wikipedia.org/wiki/Block_cipher) in aufeinanderfolgenden Datenblöcken (oder Puffer) oder als [Stromchiffren](https://en.wikipedia.org/wiki/Stream_cipher) in einem kontinuierlichen Datenfluss (häufig Ton oder Video).

Chiffren werden auch danach klassifiziert, wie ihre [Schlüssel](/de/docs/Glossary/key) gehandhabt werden:

- [Symmetrische Schlüssel](/de/docs/Glossary/Symmetric-key_cryptography) Algorithmen verwenden denselben Schlüssel zum Kodieren und Dekodieren einer Nachricht. Der Schlüssel muss ebenfalls sicher übermittelt werden, wenn die Nachricht vertraulich bleiben soll.
- [Asymmetrische Schlüssel](/de/docs/Glossary/Public-key_cryptography) Algorithmen verwenden einen Schlüssel zur Verschlüsselung und den anderen zur Entschlüsselung.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - [Block Cipher Betriebsarten](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation)
  - [Ciphertext](/de/docs/Glossary/Ciphertext)
  - [Cipher Suite](/de/docs/Glossary/Cipher_suite)
  - [Kryptanalyse](/de/docs/Glossary/Cryptanalysis)
  - [Kryptographie](/de/docs/Glossary/Cryptography)
  - [Entschlüsselung](/de/docs/Glossary/Decryption)
  - [Verschlüsselung](/de/docs/Glossary/Encryption)
  - [Schlüssel](/de/docs/Glossary/Key)
  - [Plaintext](/de/docs/Glossary/Plaintext)
  - [Öffentlicher Schlüssel Kryptographie](/de/docs/Glossary/Public-key_cryptography)
  - [Symmetrische Schlüssel Kryptographie](/de/docs/Glossary/Symmetric-key_cryptography)
- [Cipher](https://en.wikipedia.org/wiki/Cipher) auf Wikipedia
