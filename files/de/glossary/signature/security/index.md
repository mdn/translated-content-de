---
title: Signature (security)
slug: Glossary/Signature/Security
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Eine **Signature**, oder _digitale Signatur_, ist ein {{Glossary("protocol", "Protokoll")}}, das zeigt, dass eine Nachricht authentisch ist.

Aus dem {{Glossary("hash", "Hash")}} einer gegebenen Nachricht erzeugt der **Signaturprozess** zuerst eine digitale Signatur, die mit der signierenden Entität verknüpft ist, unter Verwendung des privaten {{Glossary("key", "Schlüssels")}} der Entität.

Beim Empfang der Nachricht

- _authentifiziert der Verifizierungsprozess den Absender -_ er verwendet den öffentlichen Schlüssel des Absenders, um die Signatur zu {{Glossary("decryption", "entschlüsseln")}} und den Hash wiederherzustellen, der nur mit dem privaten Schlüssel des Absenders erstellt werden kann, und
- _überprüft die Integrität der Nachricht -_ vergleicht den Hash mit einem neu berechneten aus dem empfangenen Dokument (die beiden Hashes unterscheiden sich, wenn das Dokument manipuliert wurde)

Das System versagt, wenn der private Schlüssel kompromittiert ist oder der Empfänger betrügerisch den falschen öffentlichen Schlüssel erhält.

Digitale Signaturen basieren auf asymmetrischer Kryptografie, auch bekannt als [Public-Key-Kryptografie](https://en.wikipedia.org/wiki/Public-key_cryptography).

## Siehe auch

- [Digitale Signatur](https://en.wikipedia.org/wiki/Digital_signature) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("digest", "digest")}}
  - {{Glossary("encryption", "Verschlüsselung")}}
