---
title: Sicherheit
short-title: Security
slug: Web/Security
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Web-Sicherheit ist die Praxis, Websites und deren Benutzer vor Schäden durch böswillige Dritte zu schützen, die allgemein als _Angreifer_ bezeichnet werden.

Der verursachte Schaden kann reputationsschädigend, finanziell oder sogar physisch sein. Er kann Daten betreffen, die vertraulich bleiben sollten, oder Handlungen, die nur bestimmten Benutzern zugänglich sein sollten. Die Motive der Angreifer könnten finanzieller, politischer oder persönlicher Natur sein.

In diesem Teil von MDN haben wir Leitfäden geschrieben, um Webentwicklern zu helfen, ihre Websites und Benutzer gegen diese Angriffe zu schützen.

Die Dokumentation ist in vier Hauptabschnitte gegliedert:

- [Angriffe](/de/docs/Web/Security/Attacks)
- [Abwehrmaßnahmen](/de/docs/Web/Security/Defenses)
- [Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling)
- [Authentifizierung](/de/docs/Web/Security/Authentication)

Auf dieser Seite werden wir jeden dieser Abschnitte einführen und die Leitfäden auflisten, die sie enthalten. Zuerst werden wir jedoch die grundlegenden Sicherheitspraktiken auflisten, die Webentwickler befolgen sollten.

## Grundlegende Sicherheitspraktiken

Web-Sicherheit kann überwältigend sein: Es gibt viele potenzielle Bedrohungen, Abwehrmaßnahmen sind oft komplex und vielschichtig, und die Bedrohungen, die Sie berücksichtigen müssen, hängen stark davon ab, was Ihre Website genau macht. In diesem Abschnitt fassen wir zusammen, was wir für die wichtigsten Maßnahmen halten, die Sie ergreifen können, um Schutz gegen die meisten Bedrohungen zu bieten, denen Sie begegnen werden.

- **Nutzen Sie [HTTPS](/de/docs/Web/Security/Defenses/Transport_Layer_Security)**, um alle Seiten und Subressourcen Ihrer Website bereitzustellen.

- **Setzen Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)** für Ihre Website.
  - Setzen Sie nach Möglichkeit eine [strikte CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp), aber wenn nicht, setzen Sie zumindest eine Richtlinie, die [Inline-JavaScript verbietet](/de/docs/Web/HTTP/Guides/CSP#inline_javascript).
  - Setzen Sie die [`frame-ancestors`](/de/docs/Web/HTTP/Guides/CSP#clickjacking_protection) CSP-Direktive, um zu steuern, ob Seiten in verschachtelten Browser-Kontexten eingebettet werden können.

  - Setzen Sie die [`require-trusted-types-for`](/de/docs/Web/HTTP/Guides/CSP#requiring_trusted_types) CSP-Direktive, um sicherzustellen, dass Inhalte gesäubert werden, bevor sie an potenziell gefährliche APIs übergeben werden.

- **Kontrollieren Sie Anfragen von anderen Ursprüngen**: überlegen Sie, ob und unter welchen Umständen Sie anderen {{Glossary("origin", "Ursprüngen")}} erlauben möchten, Anfragen an Ihre Website zu richten, und verwenden Sie [Fetch-Metadaten](/de/docs/Web/HTTP/Guides/Fetch_metadata), um dies zu steuern.

- **Beschränken Sie den Zugriff auf alle Cookies, die Ihre Website setzt**. Insbesondere:
  - Setzen Sie das [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesite)-Attribut auf `Strict`, wenn möglich, oder anderweitig auf `Lax`.
  - Setzen Sie die [`Secure`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#secure)- und [`HttpOnly`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#httponly)-Attribute, wenn möglich.
  - Minimieren Sie die Lebensdauer von Cookies, die zur Darstellung eingeloggter Benutzer verwendet werden.

- **Verarbeiten Sie Eingaben sicher**: wenn Ihre Website Eingaben von Benutzern oder einem anderen System akzeptiert, [validieren Sie diese](/de/docs/Web/Security/Defenses/Input_validation). Bevor Sie Eingaben in die Seiten Ihrer Website integrieren, führen Sie [Ausgabe-Codierung](/de/docs/Web/Security/Attacks/XSS#output_encoding) oder [Sanitisierung](/de/docs/Web/Security/Attacks/XSS#sanitization) durch.

- **Verwenden Sie [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)** für alle Skripte, die Sie aus externen Quellen laden (wie {{Glossary("CDN", "CDNs")}}).

- **Verwenden Sie starke Authentifizierungsmethoden**: wenn Sie Benutzer auf Ihrer Website authentifizieren, verwenden Sie nicht nur [Passwörter](/de/docs/Web/Security/Authentication/Passwords). [Passkeys](/de/docs/Web/Security/Authentication/Passkeys) sind die sicherste Authentifizierungsmethode, aber wenn Sie diese nicht verwenden können, sind [zeitbasierte Einmalkennwörter (TOTP)](/de/docs/Web/Security/Authentication/OTP#totp) sicherer als herkömmliche Passwörter.

- **Befolgen Sie gute [betriebliche Sicherheitspraktiken](/de/docs/Web/Security/Defenses/Operational_security)**: kontrollieren Sie den Zugriff auf den Quellcode Ihres Projekts, handhaben Sie Geheimnisse sicher und kontrollieren Sie Ihre Abhängigkeiten.

Siehe auch die [Richtlinien für sichere Webanwendungen](https://w3c-cg.github.io/swag/docs/swag.html).

## Angriffe

Der Abschnitt [Angriffe](/de/docs/Web/Security/Attacks) umfasst Leitfäden zu gängigen Angriffen auf Websites. Ein Angriff ist eine spezifische Technik, die ein Angreifer verwenden kann, um Websites oder deren Benutzer zu schaden.

Jeder Leitfaden behandelt einen spezifischen Angriff (oder eine Klasse verwandter Angriffe), erklärt, wie er funktioniert, die Bedingungen, unter denen eine Website anfällig wird, und wie man sich dagegen verteidigt.

Die beschriebenen Angriffe umfassen:

- [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking)
- [Cross-site request forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)
- [Cross-site leaks (XS-Leaks)](/de/docs/Web/Security/Attacks/XS-Leaks)
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [Insecure Direct Object Reference (IDOR)](/de/docs/Web/Security/Attacks/IDOR)
- [Man-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM)
- [Phishing](/de/docs/Web/Security/Attacks/Phishing)
- [Prototype pollution](/de/docs/Web/Security/Attacks/Prototype_pollution)
- [Server Side Request Forgery (SSRF)](/de/docs/Web/Security/Attacks/SSRF)
- [Subdomain takeover](/de/docs/Web/Security/Attacks/Subdomain_takeover)
- [Supply chain attacks](/de/docs/Web/Security/Attacks/Supply_chain_attacks)

## Abwehrmaßnahmen

Der Abschnitt [Abwehrmaßnahmen](/de/docs/Web/Security/Defenses) umfasst Leitfäden zu Funktionen oder Praktiken, die Sie nutzen können, um sich gegen verschiedene Angriffe zu schützen. Im Allgemeinen besteht eine Viele-zu-Viele-Beziehung zwischen Angriffen und Abwehrmaßnahmen. Das heißt, eine einzige Abwehrmaßnahme kann gegen mehrere Angriffe schützen, und um sich gegen einen einzelnen Angriff zu verteidigen, sind möglicherweise mehrere Abwehrmaßnahmen erforderlich, um eine Tiefenverteidigung zu gewährleisten.

In diesem Abschnitt dokumentieren wir die folgenden Abwehrmaßnahmen:

- [Zertifikattransparenz](/de/docs/Web/Security/Defenses/Certificate_Transparency)
- [Eingabevalidierung](/de/docs/Web/Security/Defenses/Input_validation)
- [Mixed Content Blocking](/de/docs/Web/Security/Defenses/Mixed_content)
- [Betriebliche Sicherheit](/de/docs/Web/Security/Defenses/Operational_security)
- [Same-origin policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
- [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
- [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
- [Transport Layer Security (TLS)](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
- [Benutzeraktivierung](/de/docs/Web/Security/Defenses/User_activation)

Beachten Sie, dass nicht alle Abwehrmaßnahmen in diesem Abschnitt beschrieben werden: Einige, wie [CSP](/de/docs/Web/HTTP/Guides/CSP) oder [trusted types](/de/docs/Web/API/Trusted_Types_API), werden im Rahmen der Technologie beschrieben, zu der sie gehören.

## Bedrohungsmodellierung

Nicht alle Websites sind anfällig für alle Angriffe: Welche Angriffe ein Entwickler berücksichtigen muss, hängt von den Funktionen ab, die die Website bietet und wie diese implementiert sind.

[Bedrohungsmodellierung](/de/docs/Web/Security/Threat_modeling) ist ein Prozess, den Webentwickler befolgen können, um eine strukturierte Darstellung der potenziellen Bedrohungen zu entwickeln, denen ihre Website ausgesetzt ist, und der entsprechenden Abwehrmaßnahmen, die sie ergreifen sollten.

Das heißt, Bedrohungsmodellierung hilft Ihnen zu verstehen, gegen welche Angriffe Sie sich verteidigen müssen und wie Sie sich gegen sie verteidigen können.

## Authentifizierung

Authentifizierung ist der Prozess der Überprüfung, ob eine Entität—wie ein Benutzer einer Website—tatsächlich diejenige ist, für die sie sich ausgibt. Sie werden wahrscheinlich über Authentifizierung nachdenken müssen, wenn Sie möchten, dass sich Benutzer auf Ihrer Website anmelden.

Wenn sich Benutzer auf Ihrer Website anmelden können, gibt es normalerweise Dinge, die angemeldete Benutzer tun können, oder Daten, auf die sie zugreifen können, die Sie nicht allgemein zugänglich machen möchten. Dies macht den Zugriff auf Benutzerkonten zu einem der wertvollsten Ziele für Angreifer.

In dieser Reihe von Leitfäden werden wir die Haupttechniken untersuchen, die zur Authentifizierung von Benutzern im Web zur Verfügung stehen, und gute Praktiken dafür. Wir beschreiben vier Methoden:

- [Passwörter](/de/docs/Web/Security/Authentication/Passwords)
- [Einmalkennwörter (OTP)](/de/docs/Web/Security/Authentication/OTP)
- [Federierter Identität](/de/docs/Web/Security/Authentication/Federated_identity)
- [Passkeys](/de/docs/Web/Security/Authentication/Passkeys)

In diesem Abschnitt skizzieren wir auch gute Praktiken für das [Sitzungsmanagement](/de/docs/Web/Security/Authentication/Session_management), mit dem sich eine Website den Anmeldestatus eines Benutzers merkt.

## HTTP Observatory

Das [HTTP Observatory](/en-US/observatory)-Werkzeug ermöglicht es Ihnen, Ihre Website zu scannen, um zu überprüfen, ob sie bestimmte gute Sicherheitspraktiken befolgt. Unsere [Praktischen Leitfäden zur Sicherheitsimplementierung](/de/docs/Web/Security/Practical_implementation_guides) bieten Erklärungen, wie diese Praktiken implementiert werden und gegen welche Bedrohungen sie schützen.

## Siehe auch

- [Privatsphäre im Web](/de/docs/Web/Privacy)
- [Lernen: Website-Sicherheit](/de/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security)
- [OWASP Cheat Sheet Serie](https://cheatsheetseries.owasp.org/index.html)
