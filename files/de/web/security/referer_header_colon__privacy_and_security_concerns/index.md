---
title: "Referer-Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

Es gibt Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Referer). Dieser Artikel beschreibt sie und bietet Ratschläge zur Minderung dieser Risiken.

## Das Referrer-Problem

Der {{httpheader("Referer")}}-Header (sic) enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorhergehenden Webseite, von der aus ein Link zur derzeit angeforderten Seite gefolgt wurde, oder die Adresse einer Seite, die ein Bild oder eine andere Ressource lädt). Dies hat viele recht harmlose Verwendungen, einschließlich Analytik, Protokollierung oder optimiertes Caching. Allerdings gibt es problematischere Verwendungen wie Tracking oder das Stehlen von Informationen oder sogar nur Nebeneffekte wie das versehentliche Offenlegen sensibler Informationen.

Betrachten Sie beispielsweise eine "Passwort zurücksetzen"-Seite mit einem Social-Media-Link im Footer. Wenn dem Link gefolgt wurde, könnte die Social-Media-Seite, abhängig davon, wie Informationen geteilt wurden, die URL zum Zurücksetzen des Passworts erhalten und die geteilten Informationen möglicherweise weiterhin nutzen, was die Sicherheit eines Benutzers gefährden könnte.

Nach demselben Prinzip könnte ein Bild von einer Drittanbieter-Website, das auf Ihrer Seite eingebettet ist, dazu führen, dass sensible Informationen an den Drittanbieter preisgegeben werden. Selbst wenn die Sicherheit nicht gefährdet ist, sind die Informationen möglicherweise nicht etwas, das der Benutzer teilen möchte.

## Wie können wir das beheben?

Ein Großteil dieses Risikos kann durch eine vernünftige Gestaltung von Anwendungen gemindert werden. Eine sinnvolle Anwendung würde solche Risiken durch einmalig verwendbare URLs zum Zurücksetzen des Passworts beseitigen oder sie mit einem eindeutigen Benutzertoken kombinieren. Das Risiko kann auch durch die Übertragung sensibler Daten auf sicherere Weise reduziert werden.

Sie sollten {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, wann immer möglich, um zu vermeiden, dass sensible Daten über URLs an andere Standorte weitergegeben werden.

Sie sollten immer {{Glossary("HTTPS", "HTTPS")}} für Ihre Seiten verwenden. Dies hat viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Seiten niemals Referrer-Informationen an nicht-HTTPS-Seiten übertragen. Dieser Ratschlag ist weniger relevant, da der Großteil des Webs mittlerweile HTTPS verwendet, aber es ist dennoch eine Überlegung wert.

Darüber hinaus sollten Sie erwägen, jegliche Inhalte von Drittanbietern (z. B. in {{htmlelement("iframe")}} eingebettete Social-Networking-Widgets) von sicheren Bereichen Ihrer Website zu entfernen, wie z. B. Passwort-Zurücksetzungsseiten, Zahlungsformulare, Anmeldebereiche usw.

Sie können solche Risiken auch mithilfe der folgenden Methoden mindern:

- Der {{httpheader("Referrer-Policy")}}-Header auf Ihrem Server, um zu kontrollieren, welche Informationen über den {{httpheader("Referer")}}-Header gesendet werden. Zum Beispiel würde eine Direktive von `no-referrer` den Referer-Header vollständig weglassen.
- Das `referrerpolicy`-Attribut in HTML-Elementen, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dieses kann zum Beispiel auf `no-referrer` gesetzt werden, um das Senden des `Referer`-Headers insgesamt zu stoppen.
- Das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut auf [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) in HTML-Elementen, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Reference/Elements/meta/name) von `referrer` und dem Inhalt auf `no-referrer` gesetzt, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referer-Richtlinien-Integration mit HTML](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_html).
- Die [Exit-Seiten](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)-Technik.

Sicherheitsbewusste serverseitige Frameworks neigen dazu, eingebaute Milderungen für solche Probleme zu haben, zum Beispiel:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (insbesondere siehe [Schutz vor Cross-Site Request Forgery (CSRF)](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [Helmet referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware für das Setzen der Referrer-Policy in Node.js/Express-Anwendungen (siehe auch [Helmet](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, für Ihr(e) Projektteam(s) eine Reihe von Sicherheits- und Datenschutzanforderungen zu schreiben, die die Nutzung solcher Funktionen zur Minderung der damit verbundenen Risiken spezifizieren. Sie sollten die Hilfe eines Web-Sicherheitsexperten in Anspruch nehmen, um diese Anforderungen zu schreiben, und sowohl die Bedürfnisse und das Wohlbefinden der Benutzer als auch andere Fragen wie Richtlinien und Vorschriften berücksichtigen, die durch Gesetze wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) durchgesetzt werden.

## Siehe auch

- [Richtlinien des Mozilla-Sicherheitsteams zur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
