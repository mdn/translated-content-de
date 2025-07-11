---
title: Signature (Sicherheit)
slug: Glossary/Signature/Security
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **Signatur** oder _digitale Signatur_ ist ein {{Glossary("protocol", "Protokoll")}}, das zeigt, dass eine Nachricht authentisch ist.

Aus dem {{Glossary("hash_function", "Hash")}} einer gegebenen Nachricht erzeugt der **Signaturprozess** zunächst eine digitale Signatur, die mit der signierenden Entität verknüpft ist, unter Verwendung des privaten {{Glossary("key", "Schlüssels")}} der Entität.

Beim Empfang der Nachricht besteht der **Überprüfungsprozess** aus:

- _Authentifizierung des Absenders -_ es wird der öffentliche Schlüssel des Absenders verwendet, um die Signatur zu {{Glossary("decryption", "entschlüsseln")}} und den Hash zurückzugewinnen, der nur mit dem privaten Schlüssel des Absenders erstellt werden kann, und
- _Überprüfung der Integrität der Nachricht -_ der Hash wird mit einem neu berechneten aus dem empfangenen Dokument verglichen (die beiden Hashes unterscheiden sich, wenn das Dokument manipuliert wurde)

Das System versagt, wenn der private Schlüssel kompromittiert wird oder dem Empfänger täuschungsvoll der falsche öffentliche Schlüssel gegeben wird.

Digitale Signaturen basieren auf asymmetrischer Kryptographie, auch bekannt als [Public-Key-Verschlüsselung](https://en.wikipedia.org/wiki/Public-key_cryptography).

## Siehe auch

- [Digitale Signatur](https://en.wikipedia.org/wiki/Digital_signature) auf Wikipedia
- Verwandte Glossarbegriffe:
  - {{Glossary("Hash_function", "Hash-Funktion")}}
  - {{Glossary("Encryption", "Verschlüsselung")}}
