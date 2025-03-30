---
title: Digitale Signatur
slug: Glossary/Digital_signature
l10n:
  sourceCommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{GlossarySidebar}}

Eine **digitale Signatur** ist ein Objekt, das verwendet werden kann, um den Autor eines Dokuments oder einer Nachricht zu {{Glossary("authentication", "authentifizieren")}}.

Digitale Signaturen basieren normalerweise auf der {{Glossary("public-key_cryptography", "Public-Key-Kryptographie")}}, bei der ein Schlüssel als ein Paar von Schlüsseln erstellt wird, mit der Eigenschaft, dass, wenn ein Eingang mit einem Schlüssel verschlüsselt wird, er nur mit dem anderen Schlüssel entschlüsselt werden kann und umgekehrt.

Der Ersteller des Schlüsselpaares macht einen der Schlüssel öffentlich und behält den anderen privat. Um ein Dokument zu signieren, erstellt der Besitzer des Schlüsselpaares einen {{Glossary("hash_function", "Hash")}} des Dokuments und verschlüsselt ihn mit dem privaten Schlüssel.

Das Dokument und die Signatur werden an den Verifizierer gesendet, der das Dokument hasht, den öffentlichen Schlüssel abruft und die Signatur entschlüsselt: wenn dies mit dem Hash übereinstimmt, dann wurde die Signatur verifiziert, und der Verifizierer kann sicher sein, dass sie von einer Entität mit Zugriff auf den privaten Schlüssel erstellt wurde.

Die Sicherheit eines digitalen Signatursystems hängt (unter anderem) davon ab:

- Dass der Besitzer des privaten Schlüssels ihn sicher aufbewahrt: Wenn andere Entitäten auf den privaten Schlüssel zugreifen können, können sie den Besitzer imitieren.

- Dass der vom Verifizierer verwendete öffentliche Schlüssel das echte Gegenstück zum privaten Schlüssel des Besitzers ist: wenn ein Angreifer den Verifizierer dazu bringen könnte, dem falschen öffentlichen Schlüssel zu vertrauen, könnte er den Besitzer imitieren.

Verifizierer verwenden oft {{Glossary("digital_certificate", "digitale Zertifikate")}}, um zu überprüfen, dass öffentliche Schlüssel echt sind.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Digital_certificate", "Digitales Zertifikat")}}
  - {{Glossary("Hash_function", "Hash-Funktion")}}
  - {{Glossary("Public-key_cryptography", "Public-Key-Kryptographie")}}
