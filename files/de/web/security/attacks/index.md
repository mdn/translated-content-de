---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

In der Web-Sicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer benutzt, um sein Ziel zu erreichen. Zum Beispiel, wenn ihr Ziel ist, die Daten eines Benutzers zu stehlen, könnte ein Cross-Site-Scripting-(XSS)-Angriff eine Methode sein, die sie verwenden könnten. Ein gegebener Angriff kann durch eine oder mehrere Gegenmaßnahmen abgewehrt werden: zum Beispiel kann XSS durch korrektes Bereinigen von Daten und die Implementierung einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) abgewehrt werden.

Diese Seite verlinkt zu Seiten, die erklären, wie einige häufige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Täuschungsseite, die die Zielsite in einem {{htmlelement("iframe")}}-Element einbettet. Es versteckt das `<iframe>` und legt einige Täuschungselemente darüber. Wenn der Benutzer mit diesen Täuschungselementen interagiert, interagiert er unbeabsichtigt mit der Zielsite und könnte dazu verleitet werden, Aktionen auf der Zielsite auszuführen, die er nicht beabsichtigt hat.
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site-Scripting-(XSS)-Angriff akzeptiert eine Website eine vom Angreifer gestaltete Eingabe und fügt diese fälschlicherweise in die eigenen Seiten der Site ein, sodass der Browser sie als Code ausführt. Der bösartige Code kann dann alles tun, was der eigene Frontend-Code der Site tun könnte.
