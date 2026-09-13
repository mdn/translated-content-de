---
title: Sicherheit
short-title: Security
slug: Web/Security
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

Websicherheit ist die Praxis, Websites und deren Nutzer vor Schäden zu schützen, die von böswilligen Dritten verursacht werden, die allgemein als _Angreifer_ bezeichnet werden.

Die Art der verursachten Schäden kann reputationsbezogen, finanziell oder sogar physisch sein. Sie kann auf Daten abzielen, die vertraulich für Nutzer bleiben sollten, oder auf Aktionen, die nur bestimmten Nutzern zur Verfügung stehen sollten. Die Motivationen der Angreifer können finanziell, politisch oder persönlich sein.

In diesem Teil von MDN haben wir Leitfäden erstellt, um Webentwicklern zu helfen, zu verstehen, wie sie ihre Websites und deren Nutzer vor diesen Angriffen schützen können.

Die Dokumentation ist in vier Hauptabschnitte unterteilt:

- [Angriffe](/de/docs/Web/Security/Attacks)
- [Verteidigungen](/de/docs/Web/Security/Defenses)
- [Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling)
- [Authentifizierung](/de/docs/Web/Security/Authentication)

Auf dieser Seite stellen wir jeden dieser Abschnitte vor und listen die enthaltenen Leitfäden auf. Zuerst jedoch listen wir die grundlegenden Sicherheitspraktiken auf, die Webentwickler befolgen sollten.

## Grundlegende Sicherheitspraktiken

Websicherheit kann überwältigend sein: Es gibt viele potenzielle Bedrohungen, Verteidigungen sind oft komplex und vielschichtig, und die Menge der Bedrohungen, die Sie berücksichtigen müssen, hängt stark davon ab, was genau Ihre Website tut. In diesem Abschnitt fassen wir zusammen, was unserer Meinung nach die wichtigsten Maßnahmen sind, die Sie ergreifen können, um gegen die meisten Bedrohungen, auf die Sie stoßen werden, Schutz zu bieten.

- **Verwenden Sie [HTTPS](/de/docs/Web/Security/Defenses/Transport_Layer_Security)**, um alle Seiten und Unterressourcen Ihrer Website bereitzustellen.

- **Setzen Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)** für Ihre Website fest.
  - Wenn möglich, setzen Sie eine [strenge CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp), aber wenn nicht, setzen Sie zumindest eine Richtlinie fest, die [inline JavaScript verbietet](/de/docs/Web/HTTP/Guides/CSP#inline_javascript).
  - Setzen Sie die [`frame-ancestors`](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection)-CSP-Direktive, um zu steuern, ob Seiten in verschachtelten Browsing-Kontexten eingebettet werden können.

  - Setzen Sie die [`require-trusted-types-for`](/de/docs/Web/HTTP/Guides/CSP#requiring_trusted_types)-CSP-Direktive, um sicherzustellen, dass Inhalte vor der Weitergabe an potenziell gefährliche APIs bereinigt wurden.

- **Kontrollieren Sie Cross-Origin-Anfragen**: Überlegen Sie, ob und unter welchen Umständen Sie anderen {{Glossary("origin", "Ursprüngen")}} erlauben möchten, Anfragen an Ihre Website zu stellen, und verwenden Sie [Fetch-Metadaten](/de/docs/Web/HTTP/Guides/Fetch_metadata), um dies zu steuern.

- **Beschränken Sie den Zugriff auf alle Cookies, die Ihre Website setzt**. Insbesondere:
  - Setzen Sie das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Attribut auf `Strict`, wenn möglich, oder `Lax` ansonsten.
  - Setzen Sie die Attribute [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) und [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly), wenn möglich.
  - Minimieren Sie die Lebensdauer von Cookies, die verwendet werden, um eingeloggte Nutzer darzustellen.

- **Handhaben Sie Eingaben sicher**: Wenn Ihre Website Eingaben vom Nutzer oder einem anderen System annimmt, [validieren Sie sie](/de/docs/Web/Security/Defenses/Input_validation). Bevor Sie Eingaben in die Seiten Ihrer Website integrieren, führen Sie [Ausgabe-Codierung](/de/docs/Web/Security/Attacks/XSS#output_encoding) oder [Bereinigung](/de/docs/Web/Security/Attacks/XSS#sanitization) durch.

- **Verwenden Sie [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)** für alle Skripte, die Sie von externen Quellen laden (wie beispielsweise {{Glossary("CDN", "CDNs")}}).

- **Verwenden Sie starke Authentifizierungsmethoden**: Wenn Sie Nutzer auf Ihrer Website authentifizieren, verwenden Sie nicht nur [Passwörter](/de/docs/Web/Security/Authentication/Passwords). [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) sind die sicherste Authentifizierungsmethode, aber wenn Sie diese nicht verwenden können, sind [zeitbasierte Einmalpasswörter (TOTP)](/de/docs/Web/Security/Authentication/OTP#totp) sicherer als traditionelle Passwörter.

- **Befolgen Sie gute [betriebssicherheitstechnische Praktiken](/de/docs/Web/Security/Defenses/Operational_security)**: Kontrollieren Sie den Zugriff auf den Quellcode Ihres Projekts, handhaben Sie Geheimnisse sicher und kontrollieren Sie Ihre Abhängigkeiten.

Siehe auch die [Leitlinien für sichere Webanwendungen](https://w3c-cg.github.io/swag/docs/swag.html).

## Angriffe

Der Abschnitt [Angriffe](/de/docs/Web/Security/Attacks) enthält Leitfäden zu häufigen Angriffen auf Websites. Ein Angriff ist eine spezifische Technik, die ein Angreifer verwenden kann, um Websites oder ihren Nutzern zu schaden.

Jeder Leitfaden behandelt einen spezifischen Angriff (oder eine Klasse verwandter Angriffe), erklärt, wie er funktioniert, die Bedingungen, unter denen eine Website anfällig wird, und wie man sich dagegen verteidigt.

Die beschriebenen Angriffe umfassen:

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
- [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
- [Cross-site Leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [Insecure Direct Object Reference (IDOR)](/de/docs/Web/Security/Attacks/IDOR)
- [Manipulator in der Mitte (MITM)](/de/docs/Web/Security/Attacks/MITM)
- [Phishing](/de/docs/Web/Security/Attacks/Phishing)
- [Prototype Pollution](/de/docs/Web/Security/Attacks/Prototype_pollution)
- [Server Side Request Forgery (SSRF)](/de/docs/Web/Security/Attacks/SSRF)
- [Subdomain-Übernahme](/de/docs/Web/Security/Attacks/Subdomain_takeover)
- [Supply-Chain-Angriffe](/de/docs/Web/Security/Attacks/Supply_chain_attacks)

## Verteidigungen

Der Abschnitt [Verteidigungen](/de/docs/Web/Security/Defenses) enthält Leitfäden zu Funktionen oder Praktiken, die Sie verwenden können, um sich gegen verschiedene Angriffe zu schützen. Im Allgemeinen gibt es eine viele-zu-viele-Beziehung zwischen Angriffen und Verteidigungen. Das bedeutet, dass eine einzelne Verteidigung gegen mehrere Angriffe schützen kann und die Verteidigung gegen einen einzelnen Angriff möglicherweise mehrere Verteidigungen erfordert, um eine Verteidigung in der Tiefe bereitzustellen.

In diesem Abschnitt dokumentieren wir die folgenden Verteidigungen:

- [Zertifikatstransparenz](/de/docs/Web/Security/Defenses/Certificate_Transparency)
- [Eingabevalidierung](/de/docs/Web/Security/Defenses/Input_validation)
- [Blockierung von gemischten Inhalten](/de/docs/Web/Security/Defenses/Mixed_content)
- [Betriebssicherheit](/de/docs/Web/Security/Defenses/Operational_security)
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
- [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
- [Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
- [Nutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)

Beachten Sie, dass nicht alle Verteidigungen in diesem Abschnitt beschrieben sind: Einige, wie [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [trusted types](/de/docs/Web/API/Trusted_Types_API), werden im Bereich der Technologie beschrieben, zu der sie gehören.

## Bedrohungsmodellierung

Nicht alle Websites sind anfällig für alle Angriffe: Welche Angriffe ein Entwickler berücksichtigen muss, hängt von den Funktionen ab, die die Website bietet und wie sie implementiert sind.

[Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling) ist ein Prozess, dem Webentwickler folgen können, um eine strukturierte Darstellung der potenziellen Bedrohungen zu entwickeln, denen ihre Website ausgesetzt ist, und der entsprechenden Verteidigungen, die sie einsetzen sollten.

Das heißt, Bedrohungsmodellierung hilft Ihnen zu verstehen, gegen welche Angriffe Sie sich verteidigen müssen und wie Sie sich dagegen verteidigen können.

## Authentifizierung

Authentifizierung ist der Prozess der Überprüfung, dass eine Entität — wie beispielsweise ein Nutzer einer Website — tatsächlich die Person ist, die sie vorgibt zu sein. Sie müssen wahrscheinlich über Authentifizierung nachdenken, wenn Sie möchten, dass Nutzer sich auf Ihrer Website anmelden.

Wenn sich Nutzer auf Ihrer Website anmelden können, gibt es in der Regel Dinge, die angemeldete Nutzer tun können oder auf Daten zugreifen können, die Sie nicht allgemein zugänglich machen möchten. Dadurch wird der Zugriff auf Nutzerkonten zu einem der wertvollsten Ziele für Angreifer.

In dieser Reihe von Leitfäden werden wir uns die Haupttechniken für die Authentifizierung von Nutzern im Web und deren gute Praktiken ansehen. Wir beschreiben vier Methoden:

- [Passwörter](/de/docs/Web/Security/Authentication/Passwords)
- [Einmalpasswörter (OTP)](/de/docs/Web/Security/Authentication/OTP)
- [Föderierte Identität](/de/docs/Web/Security/Authentication/Federated_identity)
- [Passkeys](/de/docs/Web/Security/Authentication/Passkeys)

In diesem Abschnitt umreißen wir auch gute Praktiken für das [Sitzungsmanagement](/de/docs/Web/Security/Authentication/Session_management), also wie eine Website den Anmeldestatus eines Nutzers speichert.

## HTTP Observatory

Das [HTTP Observatory](/en-US/observatory)-Tool ermöglicht es Ihnen, Ihre Website zu scannen, um zu überprüfen, ob sie bestimmten guten Sicherheitspraktiken folgt. Unsere [Praktische Sicherheitsimplementierungs-Leitfäden](/de/docs/Web/Security/Practical_implementation_guides) bieten Erklärungen dazu, wie man diese Praktiken implementiert und gegen welche Bedrohungen sie schützen.

## Siehe auch

- [Datenschutz im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [OWASP Cheat Sheet Serie](https://cheatsheetseries.owasp.org/index.html)
