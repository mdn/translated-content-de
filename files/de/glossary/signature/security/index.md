---
title: Signature (Sicherheit)
slug: Glossary/Signature/Security
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Eine **Signatur**, oder _digitale Signatur_, ist ein [Protokoll](/de/docs/Glossary/protocol), das zeigt, dass eine Nachricht authentisch ist.

Aus dem [Hash](/de/docs/Glossary/hash) einer gegebenen Nachricht erzeugt der **Signaturprozess** zuerst eine digitale Signatur, die mit der signierenden Entität verknüpft ist, indem er den privaten [Schlüssel](/de/docs/Glossary/key) der Entität verwendet.

Beim Empfang der Nachricht führt der **Verifikationsprozess** Folgendes durch:

- _authentifiziert den Absender -_ nutzt den öffentlichen Schlüssel des Absenders, um die Signatur zu [entschlüsseln](/de/docs/Glossary/decryption) und den Hash wiederherzustellen, der nur mit dem privaten Schlüssel des Absenders erstellt werden kann, und
- _überprüft die Integrität der Nachricht -_ vergleicht den Hash mit einem neu berechneten aus dem empfangenen Dokument (die beiden Hashes unterscheiden sich, wenn das Dokument manipuliert wurde).

Das System versagt, wenn der private Schlüssel kompromittiert wird oder der Empfänger betrügerisch mit dem falschen öffentlichen Schlüssel versehen wird.

Digitale Signaturen basieren auf asymmetrischer Kryptographie, auch bekannt als [Public-Key-Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography).

## Siehe auch

- [Digitale Signatur](https://en.wikipedia.org/wiki/Digital_signature) auf Wikipedia
- Verwandte Glossareinträge:
  - [digest](/de/docs/Glossary/digest)
  - [encryption](/de/docs/Glossary/encryption)
