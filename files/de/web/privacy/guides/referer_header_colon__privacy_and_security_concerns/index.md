---
title: "Referer-Header: Bedenken zur Privatsphäre und Sicherheit"
slug: Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

Es gibt Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Referer). Dieser Artikel beschreibt diese Risiken und bietet Ratschläge zur Minderung der Risiken an.

## Das Referrer-Problem

Der {{httpheader("Referer")}}-Header enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der ein Link zur aktuell angeforderten Seite gefolgt wurde, oder die Adresse einer Seite, die ein Bild oder eine andere Ressource lädt). Dies hat viele recht harmlose Anwendungen, einschließlich Analysen, Protokollierung oder optimiertem Caching. Es gibt jedoch problematischere Anwendungen wie Tracking oder das Stehlen von Informationen oder sogar nur Nebeneffekte wie das unbeabsichtigte Leaken sensibler Informationen.

Zum Beispiel, betrachten Sie eine "Passwort zurücksetzen"-Seite mit einem Social-Media-Link im Footer. Wenn der Link verfolgt wird, könnte die Social-Media-Seite je nach Art der freigegebenen Informationen die URL zum Zurücksetzen des Passworts erhalten und möglicherweise weiterhin die geteilten Informationen nutzen, was die Sicherheit eines Benutzers gefährden könnte.

Nach der gleichen Logik könnte ein auf Ihrer Seite eingebettetes Bild von einer Drittanbieter-Website zu einem Leck sensibler Informationen an diese Drittpartei führen. Selbst wenn die Sicherheit nicht kompromittiert wird, könnten die Informationen etwas sein, das der Benutzer nicht teilen möchte.

## Wie können wir dies beheben?

Vieles dieses Risikos kann durch ein sinnvolles Design von Anwendungen gemindert werden. Eine sinnvolle Anwendung würde solche Risiken beseitigen, indem Einmal-Passwort-Reset-URLs erstellt oder sie mit einem einzigartigen Benutzertoken kombiniert werden. Das Risiko kann auch reduziert werden, indem sensible Daten auf sicherere Weise übertragen werden.

Sie sollten {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, wo immer möglich, um zu vermeiden, dass sensible Daten über URLs an andere Orte übergeben werden.

Sie sollten immer {{Glossary("HTTPS", "HTTPS")}} für Ihre Websites verwenden. Dies hat viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Seiten niemals Referrer-Informationen an Nicht-HTTPS-Seiten übertragen. Dieser Rat ist heutzutage weniger relevant, da der Großteil des Webs HTTPS verwendet, aber es ist dennoch eine Überlegung wert.

Zusätzlich sollten Sie in Erwägung ziehen, jegliche Inhalte von Drittanbietern (z.B. in {{htmlelement("iframe")}} eingebettete Widgets sozialer Netzwerke) aus sicheren Bereichen Ihrer Website zu entfernen, wie Passwort-Reset-Seiten, Zahlungsformulare, Anmeldebereiche etc.

Sie können solche Risiken auch mindern, indem Sie:

- Den {{httpheader("Referrer-Policy")}}-Header auf Ihrem Server verwenden, um zu kontrollieren, welche Informationen durch den {{httpheader("Referer")}}-Header gesendet werden. Zum Beispiel würde eine Direktive `no-referrer` den Referer-Header vollständig weglassen.
- Das `referrerpolicy`-Attribut auf HTML-Elementen verwenden, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dieses kann zum Beispiel auf `no-referrer` gesetzt werden, um den `Referer`-Header völlig zu unterdrücken.
- Das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut auf [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) auf HTML-Elementen setzen, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Reference/Elements/meta/name) von `referrer` und dem Inhalt auf `no-referrer` setzen, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referrer-Policy Integration mit HTML](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_html).
- Die [Exit-Seite](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)-Technik verwenden.

Sicherheitsbewusste serverseitige Frameworks neigen dazu, integrierte Gegenmaßnahmen für solche Probleme zu haben, zum Beispiel:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (insbesondere sehen Sie [Cross-Site-Request-Forgery (CSRF) Schutz](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [Helmet referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware zum Setzen der Referrer-Policy in Node.js/Express-Apps (siehe auch [Helmet](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, eine Reihe von Sicherheits- und Datenschutzanforderungen für Ihre Projektteams zu schreiben, die die Nutzung solcher Funktionen zur Minderung der damit verbundenen Risiken spezifizieren. Sie sollten sich die Hilfe eines Web-Sicherheitsexperten holen, um diese Anforderungen zu schreiben, und sowohl die Bedürfnisse und das Wohl der Nutzer als auch andere Fragen wie Richtlinien und durch Gesetze wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) durchgesetzte Regelungen berücksichtigen.

## Siehe auch

- [Richtlinien des Mozilla-Sicherheitsteams zur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
