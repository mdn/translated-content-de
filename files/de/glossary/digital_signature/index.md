---
title: Digitale Signatur
slug: Glossary/Digital_signature
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **digitale Signatur** ist ein Objekt, das verwendet werden kann, um den Autor eines Dokuments oder einer Nachricht zu {{Glossary("authentication", "authentifizieren")}}.

Digitale Signaturen basieren normalerweise auf der {{Glossary("public-key_cryptography", "Public-Key-Kryptografie")}}, bei der ein Schlüssel als Schlüsselpaar erstellt wird, mit der Eigenschaft, dass, wenn einige Eingaben mit einem Schlüssel verschlüsselt werden, sie nur mit dem anderen Schlüssel entschlüsselt werden können, und umgekehrt.

Der Ersteller des Schlüsselpaares macht einen der Schlüssel öffentlich und behält den anderen privat. Um ein Dokument zu signieren, erstellt der Eigentümer des Schlüsselpaares einen {{Glossary("hash_function", "Hash")}} des Dokuments und verschlüsselt ihn mit dem privaten Schlüssel.

Das Dokument und die Signatur werden an den Prüfer gesendet, der das Dokument hashiert, den öffentlichen Schlüssel abruft und die Signatur entschlüsselt: Wenn dies mit dem Hash übereinstimmt, wurde die Signatur verifiziert, und der Prüfer kann sicher sein, dass sie von einem Wesen mit Zugang zum privaten Schlüssel erstellt wurde.

Die Sicherheit eines digitalen Signatursystems hängt (unter anderem) davon ab:

- Dass der Eigentümer des privaten Schlüssels diesen sicher aufbewahrt: Wenn andere Entitäten auf den privaten Schlüssel zugreifen können, können sie den Eigentümer imitieren.

- Dass der vom Prüfer verwendete öffentliche Schlüssel das echte Gegenstück zum privaten Schlüssel des Eigentümers ist: Wenn ein Angreifer den Prüfer dazu bringen könnte, dem falschen öffentlichen Schlüssel zu vertrauen, könnten sie den Eigentümer imitieren.

Prüfer verwenden oft {{Glossary("digital_certificate", "digitale Zertifikate")}}, um zu überprüfen, dass öffentliche Schlüssel echt sind.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Digital_certificate", "Digitales Zertifikat")}}
  - {{Glossary("Hash_function", "Hash-Funktion")}}
  - {{Glossary("Public-key_cryptography", "Public-Key-Kryptografie")}}
