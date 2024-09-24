---
title: Chiffre
slug: Glossary/Cipher
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

In der {{glossary("cryptography", "Kryptographie")}} ist ein **Chiffre** ein Algorithmus, der {{glossary("encryption", "Verschlüsselung")}} von {{glossary("plaintext", "Klartext")}} ermöglicht, um ihn unleserlich zu machen, und der die {{glossary("decryption", "Entschlüsselung")}} der kodierten Daten zurück in Klartext erlaubt.

Chiffren waren lange vor dem Informationszeitalter üblich (z.B. [Substitutionschiffren](https://en.wikipedia.org/wiki/Substitution_cipher), [Transpositionschiffren](https://en.wikipedia.org/wiki/Transposition_cipher) und [Permutationschiffren](https://en.wikipedia.org/wiki/Permutation_cipher)), aber keine von ihnen war kryptographisch sicher, außer dem [One-Time-Pad](https://en.wikipedia.org/wiki/One-time_pad).

Im modernen Zeitalter haben sich Chiffren drastisch weiterentwickelt. [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard), [RSA](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)>) und [Blowfish](<https://en.wikipedia.org/wiki/Blowfish_(cipher)>) sind Beispiele für Chiffren, die ein integraler Bestandteil zeitgenössischer Verschlüsselungsstandards und -systeme sind.

Moderne Chiffren sind so konzipiert, dass sie Angriffen standhalten, die durch {{glossary("cryptanalysis", "Kryptanalyse")}} entdeckt werden. Es gibt keine Garantie, dass alle Angriffsmethoden entdeckt wurden, daher wird jeder Algorithmus [für unterschiedliche Zwecke empfohlen](/de/docs/Web/API/SubtleCrypto#supported_algorithms), basierend auf bekannten Angriffsklassen.

Chiffren arbeiten entweder als [Blockchiffren](https://en.wikipedia.org/wiki/Block_cipher) auf aufeinanderfolgenden Blöcken (oder Puffer) von Daten oder als [Stromchiffren](https://en.wikipedia.org/wiki/Stream_cipher) auf einem kontinuierlichen Datenfluss (oft von Ton oder Video).

Chiffren werden auch danach klassifiziert, wie ihre {{glossary("key", "Schlüssel")}} gehandhabt werden:

- Algorithmen der {{Glossary("Symmetric-key cryptography", "symmetrischen Kryptographie")}} verwenden denselben Schlüssel, um eine Nachricht zu codieren und zu decodieren. Der Schlüssel muss auch sicher übermittelt werden, wenn die Nachricht vertraulich bleiben soll.
- Algorithmen der {{Glossary("Public-key cryptography", "asymmetrischen Kryptographie")}} verwenden einen Schlüssel für die Verschlüsselung und einen anderen für die Entschlüsselung.

## Siehe auch

- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [SubtleCrypto unterstützte Algorithmen](/de/docs/Web/API/SubtleCrypto#supported_algorithms)
- Verwandte Glossarbegriffe:
  - {{Glossary("Block cipher mode of operation")}}
  - {{Glossary("Ciphertext")}}
  - {{Glossary("Cipher suite")}}
  - {{Glossary("Cryptanalysis")}}
  - {{Glossary("Cryptography")}}
  - {{Glossary("Decryption")}}
  - {{Glossary("Encryption")}}
  - {{Glossary("Key")}}
  - {{Glossary("Plaintext")}}
  - {{Glossary("Public-key cryptography")}}
  - {{Glossary("Symmetric-key cryptography")}}
- [Chiffre](https://en.wikipedia.org/wiki/Cipher) auf Wikipedia
