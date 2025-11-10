---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Im Bereich der Web-Sicherheit ist ein Angriff eine spezifische Methode, die ein Angreifer einsetzt, um sein Ziel zu erreichen. Wenn zum Beispiel das Ziel ist, die Daten eines Benutzers zu stehlen, könnte ein Cross-Site-Scripting (XSS) Angriff eine Methode sein, die sie nutzen. Ein bestimmter Angriff kann durch eine oder mehrere Maßnahmen abgewehrt werden: Zum Beispiel kann XSS durch ordnungsgemäße Datenbereinigung und Implementierung einer [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verhindert werden.

Diese Seite listet Links zu Seiten auf, die erklären, wie einige häufige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Täuschungsseite, die die Zielseite in einem {{htmlelement("iframe")}}-Element einbettet. Das `<iframe>` wird verborgen und darüber werden einige Täuschungselemente gelegt. Wenn der Benutzer mit diesen Täuschungselementen interagiert, interagiert er unwissentlich mit der Zielseite und kann dazu gebracht werden, auf der Zielseite Aktionen auszuführen, die er nicht beabsichtigt hat.
- [Cross-site request forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : Bei einem Cross-site request forgery (CSRF)-Angriff bringt ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage an die Zielseite von einer bösartigen Seite aus zu stellen. Die Anfrage enthält die Anmeldedaten des Benutzers und veranlasst den Server, eine schädliche Handlung auszuführen, in dem Glauben, dass der Benutzer dies beabsichtigt hat.
- [Cross-site leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
  - : Cross-site leaks (XS-Leaks) sind eine Klasse von Angriffen, bei denen die Seite eines Angreifers Informationen über die Zielseite oder die Beziehung des Benutzers zur Zielseite ableiten kann, indem sie Web-Platform-APIs verwendet, die es Seiten ermöglichen, miteinander zu interagieren.
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-site scripting (XSS)-Angriff akzeptiert eine Webseite eine vom Angreifer gestaltete Eingabe und bindet diese irrtümlicherweise in die eigenen Seiten der Seite ein, sodass der Browser sie als Code ausführt. Der bösartige Code kann dann alles tun, was der eigene Frontend-Code der Seite tun könnte.
- [Insecure Direct Object Reference (IDOR)](/de/docs/Web/Security/Attacks/IDOR)
  - : Bei einem Insecure Direct Object Reference (IDOR)-Angriff nutzt der Angreifer unzureichende Zugriffskontrolle und unsichere Offenlegung von Objektkennungen wie Datenbankschlüssel oder Dateipfade aus.
- [Manipulator in the Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)
  - : Bei einem Man-in-the-Middle (MITM)-Angriff schaltet sich der Angreifer zwischen den Browser des Benutzers und den Server und kann jeglichen über HTTP ausgetauschten Datenverkehr sehen und möglicherweise ändern.
- [Phishing](/de/docs/Web/Security/Attacks/Phishing)
  - : Phishing ist ein {{Glossary("social_engineering", "social engineering")}} Angriff, bei dem der Angreifer die Anmeldedaten eines Benutzers stiehlt, indem er ihn dazu bringt, zu glauben, er melde sich bei der Zielseite an, während er in Wirklichkeit mit einer vom Angreifer kontrollierten gefälschten Seite interagiert.
- [Prototype pollution](/de/docs/Web/Security/Attacks/Prototype_pollution)
  - : JavaScript-Prototypenverschmutzung ist eine Schwachstelle, bei der ein Angreifer Eigenschaften am Prototyp eines Objekts hinzufügen oder verändern kann. Dies bedeutet, dass bösartige Werte unerwartet auf Objekten in Ihrer Anwendung erscheinen können, was häufig zu Logikfehlern oder weiteren Angriffen wie [cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) führt.
- [Server Side Request Forgery (SSRF)](/de/docs/Web/Security/Attacks/SSRF)
  - : Server‑Side Request Forgery (SSRF) ist eine Schwachstelle, die einem Angreifer erlaubt, HTTP- (oder andere Netzwerk-)Anfragen an beliebige Ziele zu stellen. SSRF lässt diese Anfragen von innerhalb eines Servers selbst ausgehen, der typischerweise breiteren Zugriff hat als ein externer Client.
- [Subdomain takeover](/de/docs/Web/Security/Attacks/Subdomain_takeover)
  - : Bei einem Subdomain-Takeover-Angriff erlangt der Angreifer Kontrolle über eine Subdomain einer Zieldomain.
- [Supply chain attacks](/de/docs/Web/Security/Attacks/Supply_chain_attacks)
  - : Bei einem Supply Chain-Angriff kompromittiert der Angreifer einen Teil der Versorgungskette der Seite, wie etwa jegliche Drittanbieter-Dependencies, die sie nutzt.
