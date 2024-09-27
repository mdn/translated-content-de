---
title: "Referer-Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: 392ce991114e55e2187510b640ab545d09258a16
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Es gibt Datenschutz- und Sicherheitsrisiken, die mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Headers/Referer) verbunden sind. Dieser Artikel beschreibt sie und bietet Ratschläge zur Minderung dieser Risiken.

## Das Referrer-Problem

Der {{httpheader("Referer")}} (sic) Header enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite gefolgt wurde, oder die Adresse einer Seite, die ein Bild oder eine andere Ressource lädt). Dies hat viele relativ unbedenkliche Verwendungen, einschließlich Analytik, Protokollierung oder optimiertem Caching. Allerdings gibt es auch problematischere Verwendungen wie das Verfolgen oder Stehlen von Informationen oder unbeabsichtigte Nebeneffekte, wie das versehentliche Offenlegen sensibler Informationen.

Betrachten Sie zum Beispiel eine "Passwort zurücksetzen"-Seite mit einem Link zu sozialen Medien im Footer. Wenn dem Link gefolgt wird, kann die Seite der sozialen Medien je nach geteilten Informationen die URL zum Zurücksetzen des Passworts erhalten und möglicherweise weiterhin die geteilten Informationen nutzen, was die Sicherheit eines Nutzers gefährden kann.

Nach der gleichen Logik könnte ein Bild von einer Drittanbieter-Website, das in Ihre Seite eingebettet ist, dazu führen, dass sensible Informationen an den Drittanbieter weitergegeben werden. Selbst wenn die Sicherheit nicht gefährdet ist, könnten die Informationen etwas sein, das der Nutzer nicht teilen möchte.

## Wie können wir das beheben?

Ein Großteil dieses Risikos kann durch eine sinnvolle Gestaltung von Anwendungen gemildert werden. Eine sinnvolle Anwendung würde solche Risiken beseitigen, indem einmalig nutzbare URLs zum Zurücksetzen von Passwörtern erstellt oder mit einem eindeutigen Benutzertoken kombiniert werden. Das Risiko kann auch verringert werden, indem sensible Daten auf sicherere Weise übertragen werden.

Sie sollten {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, wo immer möglich, um zu vermeiden, dass sensible Daten über URLs an andere Orte weitergegeben werden.

Sie sollten immer [HTTPS](/de/docs/Glossary/HTTPS) für Ihre Seiten verwenden. Dies hat viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Seiten niemals Referrer-Informationen an nicht-HTTPS-Seiten übertragen. Dieser Rat ist weniger relevant, da der Großteil des Webs bereits HTTPS verwendet, aber es ist immer noch eine wichtige Überlegung.

Darüber hinaus sollten Sie erwägen, jegliche Inhalte von Drittanbietern (z. B. soziale Netzwerkelemente, die in einem {{htmlelement("iframe")}} eingebettet sind) aus sicheren Bereichen Ihrer Website zu entfernen, wie z. B. Passwort-zurücksetzen-Seiten, Zahlungsformulare, Anmeldebereiche usw.

Sie können solche Risiken auch mindern durch:

- Den {{httpheader("Referrer-Policy")}}-Header auf Ihrem Server, um zu steuern, welche Informationen durch den {{httpheader("Referer")}}-Header gesendet werden. Eine Direktive von `no-referrer` würde den Referer-Header komplett weglassen.
- Das `referrerpolicy`-Attribut in HTML-Elementen, die gefährdet sind, solche Informationen zu leaken (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dies kann zum Beispiel auf `no-referrer` gesetzt werden, um den `Referer`-Header komplett zu unterbinden.
- Das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut, das auf [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer) gesetzt ist, in HTML-Elementen, die gefährdet sind, solche Informationen zu leaken (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Element/meta#name) von `referrer` und dem Inhalt auf `no-referrer` gesetzt, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referrer-Policy Integration mit HTML](/de/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_html).
- Die [Exit page](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)-Technik.

Sicherheitsbewusste serverseitige Frameworks neigen dazu, eingebaute Schutzmechanismen für solche Probleme zu haben, zum Beispiel:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (insbesondere siehe [Cross-Site-Request-Forgery (CSRF)-Schutz](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [helmetjs referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware zum Setzen der Referrer-Policy in Node.js/Express-Apps (siehe auch [helmetjs](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, ein Set von Sicherheits- und Datenschutzanforderungen für Ihr Projektteam bzw. Ihre Projektteams zu schreiben, das die Nutzung solcher Funktionen zur Minderung der damit verbundenen Risiken spezifiziert. Sie sollten die Hilfe eines Websicherheitsexperten in Anspruch nehmen, um diese Anforderungen zu formulieren, und sowohl die Bedürfnisse und das Wohlergehen der Nutzer als auch andere Fragen wie Richtlinien und Vorschriften, die durch Gesetze wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) durchgesetzt werden, berücksichtigen.

## Siehe auch

- [Richtlinien des Mozilla-Sicherheitsteams zur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
