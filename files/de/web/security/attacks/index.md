---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: df8445288d6a7c39ef7d7c711af2189790b23831
---

In der Websicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer verwendet, um sein Ziel zu erreichen. Wenn zum Beispiel das Ziel darin besteht, die Daten eines Benutzers zu stehlen, könnte ein Cross-Site-Scripting-(XSS)-Angriff eine Methode sein, die er verwendet. Ein bestimmter Angriff kann durch eine oder mehrere Gegenmaßnahmen abgewehrt werden: Ein Beispiel ist die Abwehr von XSS durch das ordnungsgemäße Bereinigen von Daten und die Implementierung einer [Content-Security-Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP).

Diese Seite verlinkt auf Seiten, die erklären, wie einige häufige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Köderseite, die die Zielseite in einem {{htmlelement("iframe")}}-Element einbettet. Er verbirgt das `<iframe>` und legt einige Köderelemente darüber. Wenn der Benutzer mit diesen Köderelementen interagiert, interagiert er unbeabsichtigt mit der Zielseite und könnte dazu verleitet werden, auf der Zielseite Handlungen auszuführen, die er nicht beabsichtigt hat.
- [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : Bei einem Cross-Site-Request-Forgery-(CSRF)-Angriff täuscht ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage an die Zielseite von einer bösartigen Seite zu stellen. Die Anfrage beinhaltet die Anmeldedaten des Benutzers und veranlasst den Server, eine schädliche Aktion auszuführen, in der Annahme, dass der Benutzer dies beabsichtigt hat.
- [Cross-Site-Leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
  - : Cross-Site-Leaks (XS-Leaks) sind eine Klasse von Angriffen, bei denen die Seite eines Angreifers Informationen über die Zielseite oder die Beziehung des Benutzers zur Zielseite ableiten kann, indem sie Web-Plattform-APIs nutzt, die es Seiten ermöglichen, miteinander zu interagieren.
- [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site-Scripting-(XSS)-Angriff akzeptiert eine Website eine vom Angreifer erstellte Eingabe und fügt diese fälschlicherweise in die eigenen Seiten der Website ein, auf eine Weise, die den Browser dazu bringt, sie als Code auszuführen. Der bösartige Code kann dann alles tun, was auch der eigene Frontend-Code der Website könnte.
- [Manipulator in the Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)
  - : Bei einem Manipulator-in-the-Middle-(MITM)-Angriff schaltet sich der Angreifer zwischen den Browser des Benutzers und den Server und kann jeglichen über HTTP ausgetauschten Datenverkehr sehen und möglicherweise ändern.
- [Subdomain-Übernahme](/de/docs/Web/Security/Attacks/Subdomain_takeover)
  - : Bei einem Subdomain-Übernahme-Angriff erlangt der Angreifer die Kontrolle über eine Subdomain einer Zieldomain.
