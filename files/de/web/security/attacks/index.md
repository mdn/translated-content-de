---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: 00c3b9fb6ead031e43863460add87321f262696c
---

In der Websicherheit ist ein Angriff eine spezielle Methode, die ein Angreifer verwendet, um sein Ziel zu erreichen. Wenn beispielsweise das Ziel darin besteht, die Daten eines Benutzers zu stehlen, könnte ein Cross-Site-Scripting (XSS) Angriff eine Methode sein, die er verwendet. Ein gegebener Angriff kann durch eine oder mehrere Gegenmaßnahmen abgewehrt werden: Zum Beispiel könnte XSS durch das richtige Bereinigen von Daten und die Implementierung einer [Content-Sicherheitsrichtlinie](/de/docs/Web/HTTP/Guides/CSP) abgewehrt werden.

Diese Seite verlinkt auf Seiten, die erklären, wie einige gängige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Ablenkungsseite, die die Zielseite innerhalb eines {{htmlelement("iframe")}} Elements einbettet. Er verbirgt das `<iframe>` und legt einige täuschende Elemente darüber. Wenn der Benutzer mit diesen täuschenden Elementen interagiert, interagiert er unbeabsichtigt mit der Zielseite und könnte dazu verleitet werden, Aktionen auszuführen, die er nicht beabsichtigt hat.
- [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : Bei einem Cross-Site-Request-Forgery (CSRF)-Angriff täuscht ein Angreifer den Benutzer oder den Browser, eine HTTP-Anfrage von einer bösartigen Seite an die Zielseite zu senden. Die Anfrage enthält die Anmeldeinformationen des Benutzers und veranlasst den Server, eine schädliche Aktion auszuführen, in dem Glauben, dass der Benutzer dies beabsichtigt hat.
- [Cross-site leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
  - : Cross-site Leaks (XS-Leaks) sind eine Klasse von Angriffen, bei denen die Seite eines Angreifers Informationen über die Zielseite oder die Beziehung des Benutzers zur Zielseite ableiten kann, indem Web-Plattform-APIs genutzt werden, die es Seiten ermöglichen, miteinander zu interagieren.
- [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site-Scripting (XSS)-Angriff akzeptiert eine Website eine vom Angreifer gestaltete Eingabe und fügt diese fälschlicherweise in die eigenen Seiten der Website ein, sodass der Browser sie als Code ausführt. Der bösartige Code kann dann alles tun, was der eigene Frontend-Code der Seite tun könnte.
- [Insecure Direct Object Reference (IDOR)](/de/docs/Web/Security/Attacks/IDOR)
  - : Bei einem Angriff durch unsichere direkte Objektverweise (IDOR) nutzt der Angreifer unzureichende Zugangskontrollen und unsichere Exposition von Objektidentifikatoren, wie Datenbankschlüssel oder Dateipfade, aus.
- [Manipulator in the Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)
  - : Bei einem Manipulator in the Middle (MITM)-Angriff schaltet sich der Angreifer zwischen den Browser des Benutzers und den Server und kann den gesamten über HTTP ausgetauschten Datenverkehr sehen und möglicherweise verändern.
- [Phishing](/de/docs/Web/Security/Attacks/Phishing)
  - : Phishing ist ein {{Glossary("social_engineering", "Social-Engineering")}}-Angriff, bei dem der Angreifer die Anmeldedaten eines Benutzers stiehlt, indem er ihn dazu bringt, zu glauben, er melde sich bei der Zielseite an, obwohl er in Wirklichkeit mit einer vom Angreifer kontrollierten gefälschten Seite interagiert.
- [Prototype pollution](/de/docs/Web/Security/Attacks/Prototype_pollution)
  - : JavaScript-Prototypen-Verschmutzung ist eine Schwachstelle, bei der ein Angreifer Eigenschaften zu einem Objektprototyp hinzufügen oder ändern kann. Das bedeutet, dass bösartige Werte unerwartet auf Objekten in Ihrer Anwendung erscheinen können, was oft zu Logikfehlern oder zusätzlichen Angriffen wie [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) führen kann.
- [Server Side Request Forgery (SSRF)](/de/docs/Web/Security/Attacks/SSRF)
  - : Server-Side Request Forgery (SSRF) ist eine Schwachstelle, die einem Angreifer erlaubt, HTTP- (oder andere Netzwerk-)Anfragen an beliebige Ziele zu senden. SSRF lässt diese Anfragen vom Server selbst ausgehen, der typischerweise einen breiteren Zugriff hat als ein externer Client.
- [Subdomain takeover](/de/docs/Web/Security/Attacks/Subdomain_takeover)
  - : Bei einem Subdomain-Übernahmeangriff erlangt der Angreifer die Kontrolle über eine Subdomain einer Zieldomain.
- [Supply Chain Attacks](/de/docs/Web/Security/Attacks/Supply_chain_attacks)
  - : Bei einem Supply-Chain-Angriff kompromittiert der Angreifer einen Teil der Lieferkette der Seite, wie z.B. Drittanbieter-Abhängigkeiten, die sie nutzt.
