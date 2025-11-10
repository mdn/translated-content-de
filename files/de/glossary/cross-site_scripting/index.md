---
title: Cross-site Scripting (XSS)
slug: Glossary/Cross-site_scripting
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Cross-site Scripting** (XSS) Angriff ist ein Angriff, bei dem ein Angreifer in der Lage ist, eine Zielseite dazu zu bringen, bösartigen Code auszuführen, als ob er Teil der Website wäre. Der Code kann dann alles tun, was auch der eigene Code der Seite tun kann. Beispielsweise könnte der Angreifer:

- Auf den gesamten Inhalt der geladenen Seiten der Website und jeglichen Inhalt im lokalen Speicher zugreifen und diesen ändern
- HTTP-Anfragen mit den Anmeldedaten des Benutzers stellen, um den Benutzer zu imitieren oder auf sensible Daten zuzugreifen

Alle XSS-Angriffe hängen davon ab, dass eine Website zwei Dinge tut:

1. Eingaben akzeptiert, die von einem Angreifer manipuliert worden sein könnten
2. Diese Eingaben in eine Seite einfügt, ohne sie zu bereinigen: das heißt, ohne sicherzustellen, dass sie nicht als JavaScript ausführbar sind

## Siehe auch

- [Cross-site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [Cross-site Scripting auf OWASP](https://owasp.org/www-community/attacks/xss/)
