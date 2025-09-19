---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: 5e3308146f872a133a3221e612ea8c6ee85dd77d
---

In der Web-Sicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer nutzt, um sein Ziel zu erreichen. Zum Beispiel, wenn das Ziel ist, Daten eines Nutzers zu stehlen, könnte ein Cross-Site Scripting (XSS) Angriff eine Methode sein, die sie nutzen. Ein bestimmter Angriff kann durch eine oder mehrere Gegenmaßnahmen abgewehrt werden: beispielsweise kann XSS durch korrektes Bereinigen von Daten und die Implementierung einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) abgewehrt werden.

Diese Seite verlinkt zu Seiten, die erklären, wie einige gängige Angriffe funktionieren und wie sie gemindert werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Täuschungsseite, die die Zielseite in einem {{htmlelement("iframe")}} Element einbettet. Er versteckt das `<iframe>` und legt einige Täuschungselemente darüber. Wenn der Benutzer mit diesen Täuschungselementen interagiert, interagiert er unbeabsichtigt mit der Zielseite und könnte dazu gebracht werden, auf der Zielseite Aktionen auszuführen, die er nicht beabsichtigt hat.
- [Cross-site request forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : Bei einem Cross-Site-Request-Forgery (CSRF)-Angriff bringt ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage an die Zielseite von einer bösartigen Seite aus zu senden. Die Anfrage enthält die Anmeldeinformationen des Benutzers und veranlasst den Server, eine schädliche Aktion auszuführen, im Glauben, dass der Benutzer dies beabsichtigt hat.
- [Cross-site leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
  - : Cross-Site Leaks (XS-Leaks) sind eine Klasse von Angriffen, bei denen die Seite des Angreifers Informationen über die Zielseite oder über die Beziehung des Benutzers zur Zielseite ableiten kann, indem sie Web-Plattform-APIs nutzt, die es Seiten ermöglichen, miteinander zu interagieren.
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site-Scripting (XSS)-Angriff akzeptiert eine Webseite eine vom Angreifer erstellte Eingabe und fügt diese versehentlich in die eigenen Seiten der Webseite ein, in einer Weise, die den Browser veranlasst, sie als Code auszuführen. Der bösartige Code kann dann alles tun, was auch der eigene Front-End-Code der Seite tun könnte.
- [Manipulator in the Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)
  - : Bei einem Manipulator in the Middle (MITM) Angriff fügt sich der Angreifer zwischen den Browser des Benutzers und den Server ein und kann jeglichen über HTTP ausgetauschten Datenverkehr sehen und potenziell modifizieren.
- [Phishing](/de/docs/Web/Security/Attacks/Phishing)
  - : Phishing ist ein {{Glossary("social_engineering", "Social Engineering")}} Angriff, bei dem der Angreifer die {{Glossary("credential", "Anmeldeinformationen")}} eines Benutzers stiehlt, indem er ihn dazu verleitet zu glauben, er melde sich auf der Zielseite an, während er in Wirklichkeit mit einer vom Angreifer kontrollierten gefälschten Seite interagiert.
- [Server Side Request Forgery (SSRF)](/de/docs/Web/Security/Attacks/SSRF)
  - : Server-Side Request Forgery (SSRF) ist eine Schwachstelle, die es einem Angreifer ermöglicht, HTTP- (oder andere Netzwerk-)Anfragen an beliebige Ziele zu senden. SSRF verursacht, dass diese Anfragen von innerhalb eines Servers selbst stammen, der typischerweise einen breiteren Zugriff hat als ein externer Client.
- [Subdomain takeover](/de/docs/Web/Security/Attacks/Subdomain_takeover)
  - : Bei einem Subdomain-Übernahmeangriff übernimmt der Angreifer die Kontrolle über eine Subdomain einer Zieldomain.
