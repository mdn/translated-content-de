---
title: Cross-site Scripting (XSS)
slug: Glossary/Cross-site_scripting
l10n:
  sourceCommit: 86fa532a00024e7c85a4c0d6339adce8b1bd9f61
---

{{GlossarySidebar}}

Ein **Cross-site Scripting** (XSS) Angriff ist ein Angriff, bei dem ein Angreifer ein Ziel dazu bringt, bösartigen Code auszuführen, als ob dieser Teil der Website wäre. Der Code kann dann alles tun, was der eigene Code der Website tun kann. Zum Beispiel könnte der Angreifer:

- Auf alle Inhalte der geladenen Seiten der Website und auf jegliche Inhalte im lokalen Speicher zugreifen und diese ändern
- HTTP-Anfragen mit den Anmeldeinformationen des Benutzers stellen, wodurch er sich als der Benutzer ausgeben oder auf sensible Daten zugreifen kann

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Akzeptieren von Eingaben, die von einem Angreifer gefertigt worden sein könnten
2. Einschließen dieser Eingaben in eine Seite, ohne sie zu bereinigen: das bedeutet, ohne sicherzustellen, dass sie nicht als JavaScript ausführbar sind

## Siehe auch

- [Cross-site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [Cross-site Scripting auf OWASP](https://owasp.org/www-community/attacks/xss/)
