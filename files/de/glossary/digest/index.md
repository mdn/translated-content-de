---
title: Digest
slug: Glossary/Digest
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein **Digest** ist ein kleiner Wert, der durch eine [Hash-Funktion](/de/docs/Glossary/cryptographic_hash_function) aus einer gesamten Nachricht generiert wird. Idealerweise ist ein Digest schnell zu berechnen, unumkehrbar und unvorhersehbar und zeigt daher an, ob jemand eine gegebene Nachricht manipuliert hat.

Ein Digest kann verwendet werden, um mehrere Aufgaben zu erfüllen:

- in nicht-kryptografischen Anwendungen (z.B. der Index von Hash-Tabellen oder ein Fingerabdruck, der verwendet wird, um doppelte Daten zu erkennen oder Dateien eindeutig zu identifizieren)
- zur Überprüfung der Nachrichtenintegrität (eine manipulierte Nachricht hat einen anderen Hash)
- zur Speicherung von Passwörtern, so dass sie nicht abgerufen, aber dennoch überprüft werden können (Um dies sicher zu tun, müssen Sie das Passwort auch salzen.)
- zur Generierung pseudo-zufälliger Zahlen
- zur Generierung von [Schlüsseln](/de/docs/Glossary/key)

Es ist entscheidend, die richtige Hash-Funktion für Ihren Anwendungsfall auszuwählen, um Kollisionen und Vorhersehbarkeit zu vermeiden.

## Siehe auch

- Siehe [Kryptografische Hash-Funktion](/de/docs/Glossary/Cryptographic_hash_function)
- [Hash-Funktion](https://en.wikipedia.org/wiki/Cryptographic_hash_function) auf Wikipedia
