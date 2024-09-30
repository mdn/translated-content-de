---
title: Digest
slug: Glossary/Digest
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Digest** ist ein kleiner Wert, der von einer [Hashfunktion](/de/docs/Glossary/cryptographic_hash_function) aus einer gesamten Nachricht generiert wird. Idealerweise ist ein Digest schnell zu berechnen, irreversibel und unvorhersehbar und zeigt daher an, ob jemand eine gegebene Nachricht manipuliert hat.

Ein Digest kann für verschiedene Aufgaben verwendet werden:

- in nicht-kryptographischen Anwendungen (z. B. der Index von Hashtabellen oder ein Fingerabdruck zur Erkennung von doppelten Daten oder zur eindeutigen Identifizierung von Dateien)
- um die Integrität von Nachrichten zu überprüfen (eine manipulierte Nachricht wird einen anderen Hash haben)
- um Passwörter zu speichern, sodass sie nicht abgerufen, aber dennoch überprüft werden können (Um dies sicher zu tun, müssen Sie das Passwort auch salzen.)
- um pseudozufällige Zahlen zu generieren
- um [Schlüssel](/de/docs/Glossary/key) zu generieren

Es ist entscheidend, die richtige Hashfunktion für Ihren Anwendungsfall zu wählen, um Kollisionen und Vorhersehbarkeit zu vermeiden.

## Siehe auch

- Siehe [Kryptographische Hashfunktion](/de/docs/Glossary/Cryptographic_hash_function)
- [Hashfunktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) auf Wikipedia
