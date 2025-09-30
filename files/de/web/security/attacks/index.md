---
title: Angriffe
slug: Web/Security/Attacks
l10n:
  sourceCommit: aa6c136a56b7861893376386fc572e9a505d39db
---

Im Bereich der Websicherheit ist ein Angriff eine spezielle Methode, die ein Angreifer verwendet, um sein Ziel zu erreichen. Zum Beispiel, wenn sein Ziel darin besteht, die Daten eines Nutzers zu stehlen, könnte ein Cross-Site Scripting (XSS)-Angriff eine Methode sein, die er verwenden könnte. Ein bestimmter Angriff kann durch eine oder mehrere Gegenmaßnahmen abgewehrt werden: Zum Beispiel könnte XSS durch korrektes Sanitieren von Daten und die Implementierung einer [Content-Sicherheitsrichtlinie](/de/docs/Web/HTTP/Guides/CSP) abgewehrt werden.

Diese Seite verweist auf Seiten, die erklären, wie einige häufige Angriffe funktionieren und wie sie abgewehrt werden können.

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
  - : Bei einem Clickjacking-Angriff erstellt ein Angreifer eine Täuschungsseite, die die Zielseite in einem {{htmlelement("iframe")}}-Element einbettet. Er versteckt das `<iframe>` und legt einige Täuschungselemente darüber. Wenn der Benutzer mit diesen Täuschungselementen interagiert, interagiert er unbeabsichtigt mit der Zielseite und könnte dazu gebracht werden, auf der Zielseite Aktionen durchzuführen, die er nicht beabsichtigte.
- [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
  - : Bei einem Cross-Site Request Forgery (CSRF)-Angriff trickst ein Angreifer den Benutzer oder den Browser dazu, eine HTTP-Anfrage von einer bösartigen Seite an die Zielseite zu senden. Die Anfrage enthält die Anmeldedaten des Benutzers und führt dazu, dass der Server eine schädliche Aktion ausführt, da er denkt, dass der Benutzer diese beabsichtigt.
- [Cross-Site Leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
  - : Cross-Site Leaks (XS-Leaks) sind eine Klasse von Angriffen, bei denen die Seite eines Angreifers Informationen über die Zielseite oder die Beziehung des Benutzers zur Zielseite ableiten kann, indem sie Web-Platform-APIs verwendet, die es Seiten ermöglichen, miteinander zu interagieren.
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
  - : Bei einem Cross-Site Scripting (XSS)-Angriff akzeptiert eine Website eine vom Angreifer erstellte Eingabe und fügt diese irrtümlich in die eigenen Seiten der Website ein, sodass der Browser sie als Code ausführt. Der bösartige Code kann dann alles tun, was der eigene Frontend-Code der Website tun könnte.
- [Unsicherer direkter Objektverweis (IDOR)](/de/docs/Web/Security/Attacks/IDOR)
  - : Bei einem Unsicheren direkten Objektverweis (IDOR)-Angriff nutzt der Angreifer unzureichende Zugangskontrollen und unsichere Offenlegungen von Objektkennungen, wie z.B. Datenbankschlüssel oder Dateipfade, aus.
- [Manipulator in der Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM)
  - : Bei einem Manipulator in der Mitte (MITM)-Angriff schaltet sich der Angreifer zwischen den Browser des Benutzers und den Server und kann jeden über HTTP ausgetauschten Datenverkehr einsehen und potenziell modifizieren.
- [Phishing](/de/docs/Web/Security/Attacks/Phishing)
  - : Phishing ist ein {{Glossary("social_engineering", "Social-Engineering")}}-Angriff, bei dem der Angreifer die {{Glossary("credential", "Anmeldedaten")}} eines Benutzers stiehlt, indem er ihn dazu bringt zu glauben, er melde sich bei der Zielseite an, während er in Wirklichkeit mit einer gefälschten Seite interagiert, die vom Angreifer kontrolliert wird.
- [Serverseitige Request Forgery (SSRF)](/de/docs/Web/Security/Attacks/SSRF)
  - : Serverseitige Request Forgery (SSRF) ist eine Schwachstelle, die es einem Angreifer ermöglicht, HTTP-(oder andere Netzwerk-)Anfragen an beliebige Ziele zu senden. SSRF lässt diese Anfragen vom Server selbst ausgehen, der typischerweise über einen breiteren Zugriff verfügt als ein externer Client.
- [Subdomänen-Übernahme](/de/docs/Web/Security/Attacks/Subdomain_takeover)
  - : Bei einem Subdomänen-Übernahmeangriff übernimmt der Angreifer die Kontrolle über eine Subdomäne einer Ziel-Domain.
