---
title: Digitale Signatur
slug: Glossary/Digital_signature
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine **digitale Signatur** ist ein Objekt, das verwendet werden kann, um den Autor eines Dokuments oder einer Nachricht zu [authentifizieren](/de/docs/Glossary/authentication).

Digitale Signaturen basieren in der Regel auf der [Public-Key-Kryptographie](/de/docs/Glossary/public-key_cryptography), bei der ein Schlüssel als Schlüsselpaar erstellt wird. Dabei gilt, dass, wenn eine Eingabe mit einem Schlüssel verschlüsselt wird, sie nur mit dem anderen Schlüssel entschlüsselt werden kann und umgekehrt.

Der Ersteller des Schlüsselpaares macht einen der Schlüssel öffentlich und behält den anderen privat. Um ein Dokument zu signieren, erstellt der Besitzer des Schlüsselpaares einen [Hash](/de/docs/Glossary/hash) des Dokuments und verschlüsselt diesen mit dem privaten Schlüssel.

Das Dokument und die Signatur werden an den Überprüfer gesendet, der das Dokument hasht, den öffentlichen Schlüssel abruft und die Signatur entschlüsselt: Wenn dies mit dem Hash übereinstimmt, wurde die Signatur verifiziert, und der Überprüfer kann sicher sein, dass sie von einer Entität mit Zugang zum privaten Schlüssel erstellt wurde.

Die Sicherheit eines digitalen Signatursystems hängt (unter anderem) ab von:

- Der sichere Aufbewahrung des privaten Schlüssels durch dessen Besitzer: Wenn andere Entitäten Zugriff auf den privaten Schlüssel haben, können sie den Besitzer imitieren.

- Der Echtheit des öffentlichen Schlüssels, der vom Überprüfer verwendet wird und das Gegenstück zum privaten Schlüssel des Besitzers ist: Wenn ein Angreifer den Überprüfer dazu verleiten könnte, einem falschen öffentlichen Schlüssel zu vertrauen, könnte er den Besitzer imitieren.

Überprüfer verwenden oft [digitale Zertifikate](/de/docs/Glossary/digital_certificate), um zu prüfen, ob öffentliche Schlüssel echt sind.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Digitales Zertifikat](/de/docs/Glossary/Digital_certificate)
  - [Hash](/de/docs/Glossary/Hash)
  - [Public-Key-Kryptographie](/de/docs/Glossary/Public-key_cryptography)
