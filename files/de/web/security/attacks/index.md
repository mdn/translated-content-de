---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: 3a85d6936bfd1caec0727291cbfb65e3f7e70c4a
---

In der Websicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer verwendet, um sein Ziel zu erreichen. Zum Beispiel, wenn ihr Ziel darin besteht, die Daten eines Benutzers zu stehlen, könnte ein Cross-Site Scripting (XSS)-Angriff eine Methode sein, die sie verwenden. Ein bestimmter Angriff kann durch eine oder mehrere Maßnahmen abgewehrt werden: beispielsweise kann XSS durch ordnungsgemäße Datenbereinigung und die Implementierung einer [Content-Sicherheitsrichtlinie](/de/docs/Web/HTTP/Guides/CSP) abgewehrt werden.

Diese Seite verlinkt zu Seiten, die erklären, wie einige häufige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Tarnseite, die die Zielseite in ein {{htmlelement("iframe")}}-Element einbettet. Er versteckt das `<iframe>` und legt einige Tarn-Elemente darüber. Wenn der Benutzer mit diesen Tarn-Elementen interagiert, interagiert er unbeabsichtigt mit der Zielseite und kann dazu verleitet werden, Aktionen auf der Zielseite auszuführen, die er nicht beabsichtigt hat.
- [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : In einem Cross-Site Request Forgery (CSRF)-Angriff führt ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage von einer bösartigen Seite an die Zielseite zu senden. Die Anfrage enthält die Benutzeranmeldedaten und veranlasst den Server dazu, eine schädliche Aktion auszuführen, in dem Glauben, dass diese vom Benutzer beabsichtigt war.
- [Cross-Site Leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
  - : Cross-Site Leaks (XS-Leaks) sind eine Klasse von Angriffen, bei denen die Seite des Angreifers Informationen über die Zielseite oder über die Beziehung des Benutzers zur Zielseite ableiten kann, indem sie Web-API-Plattformen verwendet, die es Seiten ermöglichen, miteinander zu interagieren.
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site Scripting (XSS)-Angriff akzeptiert eine Website eine vom Angreifer erstellte Eingabe und inkludiert diese versehentlich in die eigenen Seiten der Website so, dass der Browser sie als Code ausführt. Der bösartige Code kann dann alles tun, was der eigene Front-End-Code der Site tun könnte.
- [Manipulator in der Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM)
  - : Bei einem Manipulator in der Mitte (MITM)-Angriff schaltet sich der Angreifer zwischen den Browser des Benutzers und den Server und kann den gesamten über HTTP ausgetauschten Datenverkehr einsehen und potenziell modifizieren.
