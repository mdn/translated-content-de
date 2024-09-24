---
title: Signatur (Sicherheit)
slug: Glossary/Signature/Security
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Eine **Signatur**, oder _digitale Signatur_, ist ein {{glossary("protocol","Protokoll")}}, das zeigt, dass eine Nachricht authentisch ist.

Aus dem {{glossary("hash","Hash")}} einer bestimmten Nachricht erzeugt der **Signaturprozess** zunächst eine digitale Signatur, die mit der signierenden Entität verknüpft ist, indem der private {{glossary("key","Schlüssel")}} der Entität verwendet wird.

Beim Empfang der Nachricht umfasst der **Verifizierungsprozess**

- _die Authentifizierung des Absenders -_ verwendet den öffentlichen Schlüssel des Absenders, um die Signatur zu {{glossary("decryption","entschlüsseln")}} und den Hash wiederherzustellen, der nur mit dem privaten Schlüssel des Absenders erstellt werden kann, und
- _die Überprüfung der Nachrichtenintegrität -_ vergleicht den Hash mit einem neu berechneten aus dem empfangenen Dokument (die beiden Hashes werden unterschiedlich sein, wenn das Dokument verfälscht wurde)

Das System scheitert, wenn der private Schlüssel kompromittiert ist oder dem Empfänger betrügerisch der falsche öffentliche Schlüssel übermittelt wird.

Digitale Signaturen basieren auf asymmetrischer Kryptographie, auch bekannt als [Public-Key-Kryptographie](https://en.wikipedia.org/wiki/Public-key_cryptography).

## Siehe auch

- [Digitale Signatur](https://en.wikipedia.org/wiki/Digital_signature) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{glossary("digest","digest")}}
  - {{glossary("encryption","encryption")}}
