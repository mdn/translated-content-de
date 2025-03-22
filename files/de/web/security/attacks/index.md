---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: 041cf35a6932dfc59c00df24eebe381ea252cd29
---

In der Web-Sicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer verwendet, um sein Ziel zu erreichen. Wenn zum Beispiel das Ziel darin besteht, die Daten eines Benutzers zu stehlen, könnte ein Cross-Site Scripting (XSS)-Angriff eine Methode sein, die sie verwenden. Ein gegebener Angriff kann durch eine oder mehrere Maßnahmen abgewehrt werden: Zum Beispiel könnte XSS durch die ordnungsgemäße Bereinigung von Daten und die Implementierung einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) entschärft werden.

Diese Seite verlinkt auf Seiten, die erklären, wie einige gängige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Tarnseite, die die Zielseite innerhalb eines {{htmlelement("iframe")}}-Elements einbettet. Es versteckt das `<iframe>` und legt einige Tarn-Elemente darüber. Wenn der Benutzer mit diesen Tarn-Elementen interagiert, interagiert er unabsichtlich mit der Zielseite und könnte dazu gebracht werden, auf der Zielseite Handlungen auszuführen, die er nicht beabsichtigt hat.
- [Cross-site request forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : Bei einem Cross-Site Request Forgery (CSRF)-Angriff bringt ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage von einer schädlichen Seite an die Zielseite zu senden. Die Anfrage enthält die Anmeldeinformationen des Benutzers und veranlasst den Server, eine schädliche Handlung durchzuführen, weil er denkt, dass der Benutzer es beabsichtigt hat.
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site Scripting (XSS)-Angriff akzeptiert eine Website einige vom Angreifer erstellte Eingaben und beinhaltet diese fälschlicherweise auf ihren eigenen Seiten auf eine Weise, die den Browser veranlasst, sie als Code auszuführen. Der schädliche Code kann dann alles tun, was der eigene Front-End-Code der Seite tun könnte.

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Security", "1", "0", "1")}}
</section>
