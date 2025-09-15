---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: c07ef56cdbf6a52947f4e25d41893ef24852b2cf
---

In der Websicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer verwendet, um sein Ziel zu erreichen. Wenn das Ziel zum Beispiel darin besteht, die Daten eines Benutzers zu stehlen, könnte ein Cross-Site-Scripting (XSS)-Angriff eine der Methoden sein, die er nutzt. Ein gegebener Angriff kann durch eine oder mehrere Abwehrmaßnahmen begegnet werden: Zum Beispiel könnte XSS durch das korrekte Bereinigen von Daten und die Implementierung einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) abgewehrt werden.

Diese Seite verlinkt auf Seiten, die erklären, wie einige häufige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Tarnseite, die die Zielseite in einem {{htmlelement("iframe")}}-Element einbettet. Er verbirgt das `<iframe>` und legt einige Tarn-Elemente darüber. Wenn der Benutzer mit diesen Tarn-Elementen interagiert, interagiert er ungewollt mit der Zielseite und könnte dazu gebracht werden, Handlungen auf der Zielseite durchzuführen, die er nicht beabsichtigt hat.
- [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : Bei einem Cross-Site Request Forgery (CSRF)-Angriff bringt ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage an die Zielseite von einer bösartigen Seite aus zu stellen. Die Anfrage enthält die Anmeldedaten des Benutzers und veranlasst den Server, eine schädliche Aktion auszuführen, da er glaubt, der Benutzer habe sie beabsichtigt.
- [Cross-Site Leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
  - : Cross-Site Leaks (XS-Leaks) sind eine Klasse von Angriffen, bei denen die Seite eines Angreifers Informationen über die Zielseite oder über die Beziehung des Benutzers zur Zielseite ableiten kann, indem sie Web-Plattform-APIs nutzt, die es Seiten ermöglichen, miteinander zu interagieren.
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site Scripting (XSS)-Angriff akzeptiert eine Webseite eine von einem Angreifer erstellte Eingabe und fügt diese fälschlicherweise in die eigenen Seiten der Webseite ein, sodass der Browser sie als Code ausführt. Der schädliche Code kann dann alles tun, was auch der eigene Front-End-Code der Seite tun könnte.
- [Manipulator in the Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)
  - : Bei einem Manipulator in the Middle (MITM)-Angriff schiebt sich der Angreifer zwischen den Browser des Benutzers und den Server und kann jeglichen über HTTP ausgetauschten Datenverkehr sehen und möglicherweise verändern.
- [Server Side Request Forgery (SSRF)](/de/docs/Web/Security/Attacks/SSRF)
  - : Server-Side Request Forgery (SSRF) ist eine Schwachstelle, die es einem Angreifer ermöglicht, HTTP- (oder andere Netzwerk-) Anfragen an beliebige Ziele zu stellen. SSRF lässt diese Anfragen vom Server selbst ausgehen, der in der Regel breiteren Zugriff hat als ein externer Client.
- [Subdomain Takeover](/de/docs/Web/Security/Attacks/Subdomain_takeover)
  - : Bei einem Subdomain Takeover-Angriff erlangt der Angreifer die Kontrolle über eine Subdomain einer Ziel-Domain.
