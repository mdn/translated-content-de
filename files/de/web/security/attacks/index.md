---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: 64fd73863a11d246e6f2c94ebb8cf60463ebb9e7
---

In der Websicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer verwendet, um sein Ziel zu erreichen. Zum Beispiel, wenn das Ziel darin besteht, die Daten eines Nutzers zu stehlen, könnte ein Cross-Site-Scripting (XSS) Angriff eine Methode sein, die er verwendet. Ein bestimmter Angriff kann mit einer oder mehreren Maßnahmen abgewehrt werden: Zum Beispiel kann XSS durch korrektes Bereinigen von Daten und Implementierung einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) abgewehrt werden.

Diese Seite verlinkt zu Seiten, die erklären, wie einige häufige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Lockvogel-Website, die die Zielseite innerhalb eines {{htmlelement("iframe")}}-Elements einbettet. Es versteckt das `<iframe>` und legt einige Lockvogelelemente darüber. Wenn der Benutzer mit diesen Lockvogelelementen interagiert, interagiert er ungewollt mit der Zielseite und wird möglicherweise dazu verleitet, auf der Zielseite Aktionen durchzuführen, die er nicht beabsichtigt hat.
- [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : Bei einem Cross-Site-Request-Forgery (CSRF) Angriff bringt ein Angreifer den Benutzer oder den Browser dazu, von einer bösartigen Seite aus eine HTTP-Anfrage an die Zielseite zu stellen. Die Anfrage enthält die Anmeldedaten des Nutzers und veranlasst den Server, eine schädliche Aktion auszuführen, da angenommen wird, dass der Nutzer diese beabsichtigt hat.
- [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site-Scripting (XSS) Angriff akzeptiert eine Website eine Eingabe, die vom Angreifer manipuliert wurde, und bindet diese fälschlicherweise in die eigenen Seiten der Website ein, sodass der Browser sie als Code ausführt. Der bösartige Code kann dann alles tun, was auch der eigene Front-End-Code der Website könnte.
