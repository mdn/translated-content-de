---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: 79f65d8322a4e55e9f3f4c91441c9188dbe670e0
---

In der Web-Sicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer verwendet, um sein Ziel zu erreichen. Wenn das Ziel beispielsweise ist, Daten eines Benutzers zu stehlen, könnte ein Cross-Site-Scripting (XSS) Angriff eine Methode sein, die sie verwenden. Ein bestimmter Angriff kann durch eine oder mehrere Gegenmaßnahmen abgewehrt werden: Zum Beispiel kann XSS durch ordnungsgemäße Datenbereinigung und Implementierung einer [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) abgewehrt werden.

Diese Seite verlinkt auf Seiten, die erklären, wie einige gängige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine gefälschte Website, die die Zielseite in einem {{htmlelement("iframe")}}-Element einbettet. Es versteckt das `<iframe>` und legt einige gefälschte Elemente darüber. Wenn der Benutzer mit diesen gefälschten Elementen interagiert, interagiert er unbeabsichtigt mit der Zielseite und kann dazu verleitet werden, auf der Zielseite Handlungen vorzunehmen, die er nicht beabsichtigt hat.
- [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : Bei einem Cross-Site-Request-Forgery (CSRF)-Angriff trickst ein Angreifer den Benutzer oder den Browser aus, eine HTTP-Anfrage an die Zielseite von einer bösartigen Website aus zu stellen. Die Anfrage enthält die Zugangsdaten des Benutzers und veranlasst den Server, eine schädliche Aktion auszuführen, da er glaubt, dass der Benutzer dies beabsichtigt.
- [Cross-Site Leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
  - : Cross-Site Leaks (XS-Leaks) sind eine Klasse von Angriffen, bei denen die Website eines Angreifers Informationen über die Zielseite oder die Beziehung des Benutzers zur Zielseite ableiten kann, indem Webplattform-APIs verwendet werden, die den Austausch zwischen Websites ermöglichen.
- [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site-Scripting (XSS)-Angriff akzeptiert eine Website eine vom Angreifer gestaltete Eingabe und integriert diese versehentlich in die eigenen Seiten der Website, sodass der Browser sie als Code ausführt. Der bösartige Code kann dann alles tun, was der eigene Frontend-Code der Website tun könnte.
- [Insecure Direct Object Reference (IDOR)](/de/docs/Web/Security/Attacks/IDOR)
  - : Bei einem Insecure Direct Object Reference (IDOR)-Angriff nutzt der Angreifer unzureichende Zugriffskontrollen und unsichere Aussetzung von Objekt-Identifikatoren, wie Datenbankschlüssel oder Dateipfade aus.
- [Manipulator in the Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)
  - : Bei einem Manipulator in the Middle (MITM)-Angriff schaltet sich der Angreifer zwischen den Browser des Benutzers und den Server und kann alle über HTTP ausgetauschten Daten sehen und möglicherweise auch modifizieren.
- [Phishing](/de/docs/Web/Security/Attacks/Phishing)
  - : Phishing ist ein {{Glossary("social_engineering", "Social-Engineering")}}-Angriff, bei dem der Angreifer die {{Glossary("credential", "Anmeldedaten")}} eines Benutzers stiehlt, indem er sie dazu bringt zu glauben, dass sie sich auf der Zielseite anmelden, während sie in Wirklichkeit mit einer vom Angreifer kontrollierten gefälschten Seite interagieren.
- [Server Side Request Forgery (SSRF)](/de/docs/Web/Security/Attacks/SSRF)
  - : Server-Side Request Forgery (SSRF) ist eine Schwachstelle, die es einem Angreifer ermöglicht, HTTP (oder andere Netzwerk-) Anfragen an beliebige Ziele zu stellen. SSRF lässt diese Anfragen von innerhalb eines Servers selbst ausgehen, der typischerweise breiteren Zugriff hat als ein externer Client.
- [Subdomain-Übernahme](/de/docs/Web/Security/Attacks/Subdomain_takeover)
  - : Bei einem Subdomain-Übernahme-Angriff erlangt der Angreifer die Kontrolle über eine Subdomain einer Zieldomain.
- [Supply-Chain-Angriffe](/de/docs/Web/Security/Attacks/Supply_chain_attacks)
  - : Bei einem Supply-Chain-Angriff kompromittiert der Angreifer einen Teil der Lieferkette der Website, wie z.B. jede Drittanbieter-Abhängigkeit, die sie verwendet.
