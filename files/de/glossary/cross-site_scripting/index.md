---
title: Cross-Site Scripting (XSS)
slug: Glossary/Cross-site_scripting
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

Ein Angriff durch **Cross-Site Scripting** (XSS) liegt vor, wenn ein Angreifer eine Zielwebsite dazu bringen kann, bösartigen Code so auszuführen, als wäre er Teil der Website. Der Code kann dann alles tun, was der eigene Code der Website tun kann. Beispielsweise könnte der Angreifer:

- Auf den gesamten Inhalt der geladenen Seiten der Website sowie auf Inhalte im lokalen Speicher zugreifen und diese ändern
- HTTP-Anfragen mit den Anmeldedaten des Benutzers stellen, wodurch er den Benutzer imitieren oder auf sensible Daten zugreifen kann

Alle XSS-Angriffe setzen voraus, dass eine Website zwei Dinge tut:

1. Eingaben akzeptieren, die von einem Angreifer erstellt worden sein könnten
2. Diese Eingaben ohne Bereinigung in eine Seite einfügen: also ohne sicherzustellen, dass sie nicht als JavaScript ausführbar sind

## Siehe auch

- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [Cross-Site Scripting bei OWASP](https://community.owasp.org/attacks/xss/)
