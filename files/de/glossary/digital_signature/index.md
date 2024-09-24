---
title: Digitale Signatur
slug: Glossary/Digital_signature
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine **digitale Signatur** ist ein Objekt, das verwendet werden kann, um den Autor eines Dokuments oder einer Nachricht zu {{glossary("authentication", "authentifizieren")}}.

Digitale Signaturen basieren normalerweise auf der {{glossary("public-key cryptography", "Public-Key-Kryptographie")}}, bei der ein Schlüssel als Schlüsselpaar erstellt wird. Diese haben die Eigenschaft, dass, wenn einige Eingaben mit einem Schlüssel verschlüsselt werden, sie nur mit dem anderen Schlüssel entschlüsselt werden können, und umgekehrt.

Der Ersteller des Schlüsselpaares macht einen der Schlüssel öffentlich und hält den anderen privat. Um ein Dokument zu signieren, erstellt der Besitzer des Schlüsselpaares einen {{glossary("hash", "Hash")}} des Dokuments und verschlüsselt ihn mit dem privaten Schlüssel.

Das Dokument und die Signatur werden an den Prüfer gesendet, der das Dokument hasht, den öffentlichen Schlüssel abruft und die Signatur entschlüsselt: Wenn dies mit dem Hash übereinstimmt, wurde die Signatur verifiziert und der Prüfer kann sicher sein, dass sie von einer Entität mit Zugang zum privaten Schlüssel erstellt wurde.

Die Sicherheit eines digitalen Signatursystems hängt (unter anderem) von folgenden Faktoren ab:

- Der Eigentümer des privaten Schlüssels muss ihn sicher aufbewahren: Wenn andere Entitäten auf den privaten Schlüssel zugreifen können, können sie den Eigentümer imitieren.

- Der vom Prüfer verwendete öffentliche Schlüssel muss das echte Gegenstück zum privaten Schlüssel des Eigentümers sein: Wenn ein Angreifer den Prüfer dazu bringen könnte, einem falschen öffentlichen Schlüssel zu vertrauen, könnte er den Eigentümer imitieren.

Prüfer verwenden oft {{glossary("digital certificate", "digitale Zertifikate")}}, um zu überprüfen, dass öffentliche Schlüssel echt sind.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{glossary("Digital certificate", "Digitale Zertifikate")}}
  - {{glossary("Hash", "Hash")}}
  - {{glossary("Public-key cryptography", "Public-Key-Kryptographie")}}
