---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: be3f184d89979d413204b8f9cbecfc8dd0e5ecf9
---

Im Bereich der Web-Sicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer verwendet, um sein Ziel zu erreichen. Wenn zum Beispiel das Ziel darin besteht, die Daten eines Benutzers zu stehlen, könnte ein Cross-Site-Scripting- (XSS) Angriff eine Methode sein, die er verwendet. Ein bestimmter Angriff kann durch eine oder mehrere Maßnahmen abgewehrt werden: zum Beispiel könnte XSS durch das richtige Bereinigen von Daten und die Implementierung einer [Content-Security-Policy](/de/docs/Web/HTTP/CSP) abgewehrt werden.

Diese Seite verlinkt auf Seiten, die erklären, wie einige gängige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Köderseite, die die Zielseite innerhalb eines {{htmlelement("iframe")}}-Elements einbettet. Er verbirgt das `<iframe>` und überlagert einige Köderelemente darüber. Wenn der Benutzer mit diesen Köderelementen interagiert, interagiert er unbeabsichtigt mit der Zielseite und könnte dazu verleitet werden, Aktionen mit der Zielseite durchzuführen, die er nicht beabsichtigt hatte.
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site-Scripting- (XSS) Angriff akzeptiert eine Website einige vom Angreifer erstellte Eingaben und nimmt diese fälschlicherweise in die eigenen Seiten der Website auf, sodass der Browser sie als Code ausführt. Der bösartige Code kann dann alles tun, was der eigene Frontend-Code der Website tun könnte.
