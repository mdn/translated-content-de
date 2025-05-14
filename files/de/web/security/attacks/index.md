---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: 8a9c5148c19f3bb8ff86cc4bee4cb5cb436b714b
---

In der Websicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer verwendet, um sein Ziel zu erreichen. Zum Beispiel, wenn das Ziel darin besteht, die Daten eines Benutzers zu stehlen, ist ein Cross-Site Scripting (XSS) Angriff eine Methode, die er nutzen könnte. Ein bestimmter Angriff kann durch eine oder mehrere Gegenmaßnahmen abgewehrt werden: zum Beispiel kann XSS durch das ordnungsgemäße Bereinigen von Daten und die Implementierung einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) abgewehrt werden.

Diese Seite verlinkt zu Seiten, die erklären, wie einige häufige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Tarnseite, die die Zielseite in einem {{htmlelement("iframe")}}-Element einbettet. Er verbirgt das `<iframe>` und legt einige Tarnelemente darüber. Wenn der Benutzer mit diesen Tarnelementen interagiert, interagiert er unabsichtlich mit der Zielseite und kann dazu verleitet werden, dort Aktionen auszuführen, die er nicht beabsichtigte.
- [Cross-site request forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : Bei einem Cross-Site Request Forgery (CSRF)-Angriff wird der Benutzer oder der Browser von einem Angreifer dazu verleitet, eine HTTP-Anfrage von einer böswilligen Seite an die Zielseite zu senden. Die Anfrage enthält die Anmeldedaten des Benutzers und führt dazu, dass der Server eine schädliche Aktion ausführt, in dem Glauben, dass der Benutzer dies beabsichtigte.
- [Cross-site leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
  - : Cross-Site Leaks (XS-Leaks) sind eine Klasse von Angriffen, bei denen die Seite eines Angreifers Informationen über die Zielseite oder über die Beziehung des Benutzers zur Zielseite ableiten kann, indem Webplattform-APIs genutzt werden, die es den Seiten ermöglichen, miteinander zu interagieren.
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site Scripting (XSS)-Angriff akzeptiert eine Website eine vom Angreifer gestaltete Eingabe und fügt diese fälschlicherweise in die eigenen Seiten der Website ein, sodass der Browser sie als Code ausführt. Der bösartige Code kann dann alles tun, was der eigene Front-End-Code der Seite tun könnte.
