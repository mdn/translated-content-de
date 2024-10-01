---
title: Digital signature
slug: Glossary/Digital_signature
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Eine **digitale Signatur** ist ein Objekt, das verwendet werden kann, um den Autor eines Dokuments oder einer Nachricht zu {{Glossary("authentication", "authentifizieren")}}.

Digitale Signaturen basieren in der Regel auf der {{Glossary("public-key_cryptography", "Public-Key-Kryptografie")}}, bei der ein Schlüssel als Paar von Schlüsseln erstellt wird. Diese haben die Eigenschaft, dass, wenn eine Eingabe mit einem Schlüssel verschlüsselt wird, sie nur mit dem anderen Schlüssel entschlüsselt werden kann, und umgekehrt.

Der Ersteller des Schlüsselpaares macht einen der Schlüssel öffentlich und behält den anderen geheim. Um ein Dokument zu signieren, erstellt der Eigentümer des Schlüsselpaares einen {{Glossary("hash", "Hash")}} des Dokuments und verschlüsselt ihn mit dem privaten Schlüssel.

Das Dokument und die Signatur werden an den Verifizierer gesendet, der das Dokument hasht, den öffentlichen Schlüssel abruft und die Signatur entschlüsselt: Wenn dies mit dem Hash übereinstimmt, wurde die Signatur verifiziert, und der Verifizierer kann sicher sein, dass sie von einer Entität erstellt wurde, die Zugang zum privaten Schlüssel hat.

Die Sicherheit eines digitalen Signatursystems hängt (unter anderem) von folgenden Faktoren ab:

- Der Besitzer des privaten Schlüssels bewahrt diesen sicher auf: Wenn andere Entitäten auf den privaten Schlüssel zugreifen können, können sie den Besitzer imitieren.

- Der vom Verifizierer verwendete öffentliche Schlüssel ist das authentische Gegenstück zum privaten Schlüssel des Besitzers: Wenn ein Angreifer den Verifizierer dazu bringen könnte, einem falschen öffentlichen Schlüssel zu vertrauen, könnten sie den Besitzer imitieren.

Verifizierer verwenden oft {{Glossary("digital_certificate", "digitale Zertifikate")}}, um zu überprüfen, ob öffentliche Schlüssel echt sind.

## Siehe auch

- Verwandte Begriffe im Glossar:
  - {{Glossary("Digital_certificate", "Digitales Zertifikat")}}
  - {{Glossary("Hash", "Hash")}}
  - {{Glossary("Public-key_cryptography", "Public-Key-Kryptografie")}}
