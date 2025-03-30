---
title: Signatur (Sicherheit)
slug: Glossary/Signature/Security
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{GlossarySidebar}}

Eine **Signatur** oder _digitale Signatur_ ist ein {{Glossary("protocol", "Protokoll")}}, das zeigt, dass eine Nachricht authentisch ist.

Aus dem {{Glossary("hash_function", "Hash")}} einer gegebenen Nachricht generiert der **Signaturprozess** zunächst eine digitale Signatur, die mit der signierenden Entität verbunden ist, unter Verwendung des privaten {{Glossary("key", "Schlüssels")}} der Entität.

Beim Empfang der Nachricht umfasst der **Überprüfungsprozess**

- _die Authentifizierung des Absenders -_ verwendet den öffentlichen Schlüssel des Absenders, um die Signatur zu {{Glossary("decryption", "entschlüsseln")}} und den Hash wiederherzustellen, der nur mit dem privaten Schlüssel des Absenders erstellt werden kann, und
- _die Überprüfung der Nachrichtenintegrität -_ vergleicht den Hash mit einem neu berechneten aus dem empfangenen Dokument (die beiden Hashes unterscheiden sich, wenn das Dokument manipuliert wurde)

Das System versagt, wenn der private Schlüssel kompromittiert wird oder dem Empfänger täuschenderweise der falsche öffentliche Schlüssel gegeben wird.

Digitale Signaturen basieren auf asymmetrischer Kryptografie, auch bekannt als [Public-Key-Kryptografie](https://en.wikipedia.org/wiki/Public-key_cryptography).

## Siehe auch

- [Digitale Signatur](https://en.wikipedia.org/wiki/Digital_signature) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Hash_function", "Hashfunktion")}}
  - {{Glossary("Encryption", "Verschlüsselung")}}
