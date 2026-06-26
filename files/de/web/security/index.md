---
title: Sicherheit
short-title: Security
slug: Web/Security
l10n:
  sourceCommit: 9b3f226141b5a609e173fd40de31b342abddcf44
---

Web-Sicherheit ist die Praxis, Websites und ihre Benutzer vor Schäden zu schützen, die durch bösartige Dritte, die allgemein _Angreifer_ genannt werden, verursacht werden können.

Die Art der Schäden kann rufschädigend, finanziell oder sogar physisch sein. Sie können auf Daten abzielen, die für Benutzer privat gehalten werden sollten, oder auf Aktionen, die nur bestimmten Benutzern zur Verfügung stehen sollten. Die Motivationen der Angreifer können finanzieller, politischer oder persönlicher Natur sein.

In diesem Teil von MDN haben wir Leitfäden geschrieben, um Webentwicklern zu helfen zu verstehen, wie sie ihre Websites und ihre Benutzer vor diesen Angriffen schützen können.

Die Dokumentation ist in vier Hauptabschnitte unterteilt:

- [Angriffe](/de/docs/Web/Security/Attacks)
- [Verteidigungen](/de/docs/Web/Security/Defenses)
- [Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling)
- [Authentifizierung](/de/docs/Web/Security/Authentication)

Auf dieser Seite werden wir jeden dieser Abschnitte einführen und die darin enthaltenen Leitfäden auflisten. Zuerst werden wir jedoch die grundlegenden Sicherheitspraktiken auflisten, die Webentwickler befolgen sollten.

## Grundlegende Sicherheitspraktiken

Web-Sicherheit kann überwältigend sein: Es gibt viele potenzielle Bedrohungen, Verteidigungen sind oft komplex und vielschichtig, und die Bedrohungen, die Sie berücksichtigen müssen, hängen stark davon ab, was Ihre Website genau macht. In diesem Abschnitt fassen wir zusammen, was unserer Meinung nach die wichtigsten Maßnahmen sind, die Sie ergreifen können, um den meisten Bedrohungen zu begegnen, denen Sie begegnen werden.

- **Verwenden Sie [HTTPS](/de/docs/Web/Security/Defenses/Transport_Layer_Security)**, um alle Seiten und Unterressourcen Ihrer Website bereitzustellen.

- **Setzen Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)** für Ihre Website.
  - Wenn möglich, setzen Sie eine [strikte CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp), aber wenn nicht, setzen Sie zumindest eine Richtlinie, die [Inline-JavaScript verbietet](/de/docs/Web/HTTP/Guides/CSP#inline_javascript).
  - Setzen Sie die CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection), um zu steuern, ob Seiten in verschachtelten Browser-Kontexten eingebettet werden können.

  - Setzen Sie die CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Guides/CSP#requiring_trusted_types), um sicherzustellen, dass Inhalte bereinigt wurden, bevor sie potenziell gefährlichen APIs übergeben werden.

- **Kontrollieren Sie Cross-Origin-Anfragen**: Überlegen Sie, ob und unter welchen Umständen Sie andere {{Glossary("origin", "Herkünfte")}} zulassen möchten, um Anfragen an Ihre Website zu stellen, und verwenden Sie [Fetch Metadata](/de/docs/Web/HTTP/Guides/Fetch_metadata), um dies zu steuern.

- **Beschränken Sie den Zugriff auf Cookies, die Ihre Website setzt**. Insbesondere:
  - Setzen Sie das Attribut [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesite) auf `Strict`, wenn möglich, oder `Lax` sonst.
  - Setzen Sie die Attribute [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure) und [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly), wenn möglich.
  - Minimieren Sie die Lebensdauer von Cookies, die verwendet werden, um angemeldete Benutzer darzustellen.

- **Verarbeiten Sie Eingaben sicher**: Wenn Ihre Website Eingaben vom Benutzer oder einem anderen System akzeptiert, [validieren](/de/docs/Web/Security/Defenses/Input_validation) Sie diese. Bevor Sie Eingaben in die Seiten Ihrer Website integrieren, führen Sie [Ausgabe-Codierung](/de/docs/Web/Security/Attacks/XSS#output_encoding) oder [Bereinigung](/de/docs/Web/Security/Attacks/XSS#sanitization) durch.

- **Verwenden Sie [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)** für alle Skripte, die Sie aus externen Quellen laden (wie {{Glossary("CDN", "CDNs")}}).

- **Verwenden Sie starke Authentifizierungsmethoden**: Wenn Sie Benutzer auf Ihrer Website authentifizieren, verwenden Sie nicht nur [Passwörter](/de/docs/Web/Security/Authentication/Passwords). [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) sind die sicherste Authentifizierungsmethode, aber wenn Sie diese nicht verwenden können, sind [zeitbasierte Einmalpasswörter (TOTP)](/de/docs/Web/Security/Authentication/OTP#totp) sicherer als traditionelle Passwörter.

- **Befolgen Sie gute [operationelle Sicherheitspraktiken](/de/docs/Web/Security/Defenses/Operational_security)**: Kontrollieren Sie den Zugriff auf den Quellcode Ihres Projekts, verwalten Sie Geheimnisse sicher und kontrollieren Sie Ihre Abhängigkeiten.

Siehe auch die [Secure Web Application Guidelines](https://w3c-cg.github.io/swag/docs/swag.html).

## Angriffe

Der Abschnitt [Angriffe](/de/docs/Web/Security/Attacks) enthält Leitfäden zu häufigen Angriffen auf Websites. Ein Angriff ist eine spezielle Technik, die ein Angreifer verwenden kann, um Websites oder deren Benutzer zu schädigen.

Jeder Leitfaden behandelt einen bestimmten Angriff (oder eine Klasse verwandter Angriffe), erklärt, wie er funktioniert, unter welchen Bedingungen eine Website anfällig wird und wie man sich dagegen verteidigen kann.

Die beschriebenen Angriffe umfassen:

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
- [Cross-Site Request Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
- [Cross-Site Leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [Insecure Direct Object Reference (IDOR)](/de/docs/Web/Security/Attacks/IDOR)
- [Manipulator in the Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)
- [Phishing](/de/docs/Web/Security/Attacks/Phishing)
- [Prototype Pollution](/de/docs/Web/Security/Attacks/Prototype_pollution)
- [Server Side Request Forgery (SSRF)](/de/docs/Web/Security/Attacks/SSRF)
- [Subdomain-Übernahme](/de/docs/Web/Security/Attacks/Subdomain_takeover)
- [Lieferkettenangriffe](/de/docs/Web/Security/Attacks/Supply_chain_attacks)

## Verteidigungen

Der Abschnitt [Verteidigungen](/de/docs/Web/Security/Defenses) enthält Leitfäden zu Funktionen oder Praktiken, die Sie verwenden können, um sich vor verschiedenen Angriffen zu schützen. Im Allgemeinen gibt es eine viele-zu-viele Beziehung zwischen Angriff und Verteidigungen. Das bedeutet, dass eine einzelne Verteidigung gegen mehrere Angriffe schützen kann und die Verteidigung gegen einen einzelnen Angriff mehrere Verteidigungen erfordern kann, um eine tiefgehende Verteidigung zu gewährleisten.

In diesem Abschnitt dokumentieren wir die folgenden Verteidigungen:

- [Zertifikatstransparenz](/de/docs/Web/Security/Defenses/Certificate_Transparency)
- [Eingabevalidierung](/de/docs/Web/Security/Defenses/Input_validation)
- [Blockierung gemischter Inhalte](/de/docs/Web/Security/Defenses/Mixed_content)
- [Operationelle Sicherheit](/de/docs/Web/Security/Defenses/Operational_security)
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
- [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
- [Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
- [Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)

Beachten Sie, dass nicht alle Verteidigungen in diesem Abschnitt beschrieben werden: Einige, wie [CSP](2/de/docs/Web/HTTP/Guides/CSP) oder [Trusted Types](/de/docs/Web/API/Trusted_Types_API), werden innerhalb des jeweiligen Technologiebereichs beschrieben.

## Bedrohungsmodellierung

Nicht alle Websites sind anfällig für alle Angriffe: Welche Angriffe ein Entwickler berücksichtigen muss, hängt von den Funktionen ab, die die Website bietet, und wie diese implementiert sind.

[Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling) ist ein Prozess, den Webentwickler befolgen können, um eine strukturierte Darstellung der potenziellen Bedrohungen, denen ihre Website ausgesetzt ist, und der entsprechenden Verteidigungen zu entwickeln, die sie anwenden sollten.

Das bedeutet, Bedrohungsmodellierung hilft Ihnen zu verstehen, gegen welche Angriffe Sie sich verteidigen müssen und wie Sie sich gegen sie verteidigen können.

## Authentifizierung

Authentifizierung ist der Prozess der Überprüfung, dass eine Entität — wie ein Benutzer einer Website — tatsächlich diejenige ist, die sie vorgibt zu sein. Sie müssen wahrscheinlich über Authentifizierung nachdenken, wenn Sie möchten, dass Benutzer sich auf Ihrer Website anmelden können.

Wenn Benutzer sich auf Ihrer Website anmelden können, gibt es in der Regel Dinge, die angemeldete Benutzer tun können, oder Daten, auf die sie zugreifen können, die Sie nicht allgemein zugänglich machen möchten. Dies macht den Zugriff auf Benutzerkonten zu einem der wertvollsten Ziele für Angreifer.

In diesem Set von Leitfäden betrachten wir die Haupttechniken zur Benutzerauthentifizierung im Web und gute Praktiken dafür. Wir beschreiben vier Methoden:

- [Passwörter](/de/docs/Web/Security/Authentication/Passwords)
- [Einmalpasswörter (OTP)](/de/docs/Web/Security/Authentication/OTP)
- [Föderierte Identität](/de/docs/Web/Security/Authentication/Federated_identity)
- [Passkeys](/de/docs/Web/Security/Authentication/Passkeys)

In diesem Abschnitt skizzieren wir auch gute Praktiken für das [Sitzungsmanagement](/de/docs/Web/Security/Authentication/Session_management), das beschreibt, wie eine Website den Anmeldestatus eines Benutzers speichert.

## HTTP Observatory

Mit dem [HTTP Observatory](/en-US/observatory) Tool können Sie Ihre Website scannen, um zu überprüfen, ob sie bestimmte gute Sicherheitspraktiken befolgt. Unsere [praktischen Sicherheitsimplementierungsleitfäden](/de/docs/Web/Security/Practical_implementation_guides) bieten Erklärungen dazu, wie Sie diese Praktiken implementieren und gegen welche Bedrohungen sie schützen.

## Siehe auch

- [Datenschutz im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [OWASP Cheat Sheet-Serie](https://cheatsheetseries.owasp.org/index.html)
