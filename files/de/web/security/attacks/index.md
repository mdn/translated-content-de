---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

In der Web-Sicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer verwendet, um sein Ziel zu erreichen. Wenn das Ziel zum Beispiel darin besteht, die Daten eines Benutzers zu stehlen, könnte ein Cross-Site-Scripting (XSS) Angriff eine Methode sein, die sie anwenden. Ein bestimmter Angriff kann durch eine oder mehrere Abwehrmaßnahmen bekämpft werden: Zum Beispiel könnte XSS durch korrektes Sanitieren von Daten und die Implementierung einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) abgewehrt werden.

Diese Seite verlinkt auf Seiten, die erklären, wie einige häufige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Schein-Website, die die Ziel-Website in einem {{htmlelement("iframe")}}-Element einbettet. Er verbirgt das `<iframe>` und legt einige Schein-Elemente darüber. Wenn der Benutzer mit diesen Schein-Elementen interagiert, interagiert er unbeabsichtigt mit der Ziel-Website und kann dazu verleitet werden, Aktionen auf der Ziel-Website durchzuführen, die er nicht beabsichtigt hat.
- [Cross-site request forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : Bei einem Cross-Site-Request-Forgery (CSRF)-Angriff bringt ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage von einer böswilligen Seite an die Ziel-Website zu senden. Die Anfrage enthält die Anmeldedaten des Benutzers und veranlasst den Server, eine schädliche Aktion auszuführen, wobei angenommen wird, dass der Benutzer die Anfrage beabsichtigt hat.
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site-Scripting (XSS)-Angriff akzeptiert eine Website eine vom Angreifer gestaltete Eingabe und fügt diese fälschlicherweise in die Seiten der Website ein, sodass der Browser sie als Code ausführt. Der schädliche Code kann dann alles tun, was der eigene Front-End-Code der Website tun könnte.
