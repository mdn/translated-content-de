---
title: Digest
slug: Glossary/Digest
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Digest** ist ein kleiner Wert, der durch eine {{glossary("cryptographic hash function", "Hashfunktion")}} aus einer gesamten Nachricht erzeugt wird. Idealerweise ist ein Digest schnell zu berechnen, irreversibel und unvorhersehbar und zeigt daher an, ob jemand mit einer gegebenen Nachricht manipuliert hat.

Ein Digest kann verwendet werden, um mehrere Aufgaben durchzuführen:

- in nicht-verschlüsselungsrelevanten Anwendungen (z. B. das Indexieren von Hashtabellen oder ein Fingerabdruck, der zur Erkennung doppelter Daten oder zur eindeutigen Identifizierung von Dateien genutzt wird)
- Verifizierung der Nachrichtenintegrität (eine manipulierte Nachricht hat einen anderen Hash)
- Speichern von Passwörtern, sodass sie nicht abgerufen, aber dennoch überprüft werden können (Um dies sicher zu tun, muss das Passwort auch gesalzen werden.)
- Generierung von Pseudozufallszahlen
- Generierung von {{glossary("key","Schlüsseln")}}

Es ist entscheidend, die geeignete Hashfunktion für Ihren Anwendungsfall zu wählen, um Kollisionen und Vorhersehbarkeit zu vermeiden.

## Siehe auch

- Siehe {{glossary("Cryptographic hash function")}}
- [Hashfunktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) auf Wikipedia
