---
title: "`Referer` Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Es gibt Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Headers/Referer). Dieser Artikel beschreibt diese und bietet Ratschläge zur Minderung dieser Risiken.

## Das Referrer-Problem

Der {{httpheader("Referer")}}-Header enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der ein Link zur aktuell angeforderten Seite gefolgt wurde, oder die Adresse einer Seite, die ein Bild oder eine andere Ressource lädt). Dies hat viele ziemlich harmlose Verwendungen, einschließlich Analysen, Protokollierung oder optimiertes Caching. Es gibt jedoch auch problematischere Verwendungen wie Tracking oder Informationsdiebstahl, oder auch Nebenwirkungen wie das ungewollte Leaken von sensiblen Informationen.

Zum Beispiel kann eine "Passwort zurücksetzen"-Seite mit einem sozialen Medienlink im Footer, wenn der Link gefolgt wurde, je nachdem wie Informationen geteilt werden, dazu führen, dass die soziale Medienseite die URL zum Zurücksetzen des Passworts erhält und möglicherweise die geteilten Informationen weiterhin nutzen kann, was die Sicherheit eines Nutzers beeinträchtigen könnte.

Nach derselben Logik könnte ein Bild von einer Drittanbieter-Website, das in Ihre Seite eingebettet ist, dazu führen, dass sensible Informationen an den Drittanbieter geleakt werden. Selbst wenn die Sicherheit nicht gefährdet ist, könnten es Informationen sein, die der Benutzer nicht teilen möchte.

## Wie können wir das beheben?

Ein Großteil dieses Risikos kann durch ein vernünftiges Design von Anwendungen gemindert werden. Eine sinnvolle Anwendung würde solche Risiken durch die Erstellung von einmaligen URLs zum Zurücksetzen von Passwörtern beseitigen oder sie mit einem eindeutigen Benutzertoken kombinieren. Das Risiko kann auch durch die sichere Übertragung sensibler Daten verringert werden.

Sie sollten {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, wo immer dies möglich ist, um zu vermeiden, dass sensible Daten über URLs an andere Orte übermittelt werden.

Sie sollten immer {{Glossary("HTTPS", "HTTPS")}} für Ihre Websites verwenden. Dies hat viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Seiten niemals Referrer-Informationen an nicht-HTTPS-Seiten übertragen. Dieser Rat ist jetzt weniger relevant, da ein Großteil des Webs HTTPS verwendet, aber es ist dennoch eine berücksichtigenswerte Überlegung.

Zusätzlich sollten Sie in Betracht ziehen, jeglichen Drittanbieter-Inhalt (z.B. soziale Netzwerkwidgets, die in {{htmlelement("iframe")}} eingebettet sind) aus sicheren Bereichen Ihrer Website zu entfernen, wie z.B. Passwortzurücksetzungsseiten, Zahlungsformulare, Login-Bereiche usw.

Sie können solche Risiken auch mit folgenden Maßnahmen mindern:

- Der {{httpheader("Referrer-Policy")}}-Header auf Ihrem Server, um zu kontrollieren, welche Informationen über den {{httpheader("Referer")}}-Header gesendet werden. Beispielsweise würde eine Direktive von `no-referrer` den Referer-Header vollständig weglassen.
- Das `referrerpolicy`-Attribut an HTML-Elementen, die in Gefahr sind, solche Informationen zu leaken (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dieses kann zum Beispiel auf `no-referrer` gesetzt werden, um das Senden des `Referer`-Headers vollständig zu stoppen.
- Das [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut auf [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer) gesetzt für HTML-Elemente, die in Gefahr sind, solche Informationen zu leaken (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Element/meta#name) von `referrer` und dem Inhalt `no-referrer`, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referrer-Policy Integration mit HTML](/de/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_html).
- Die [Exit-Page](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect) Technik.

Sicherheitsbewusste serverseitige Frameworks tendieren dazu, eingebaute Milderungen für solche Probleme zu haben, zum Beispiel:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (insbesondere siehe [Cross site request forgery (CSRF) Schutz](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [Helmet referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware zum Setzen der Referrer-Policy in Node.js/Express-Anwendungen (siehe auch [Helmet](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, für Ihr Projektteam Sicherheits- und Datenschutzanforderungen zu formulieren, die den Einsatz solcher Funktionen zur Minderung der verbundenen Risiken festlegen. Sie sollten die Hilfe eines Websicherheitsexperten in Anspruch nehmen, um diese Anforderungen zu formulieren, und sowohl die Bedürfnisse und das Wohl der Nutzer als auch andere Themen wie Richtlinien und durch Gesetze wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (GDPR) durchgesetzte Vorschriften berücksichtigen.

## Siehe auch

- [Richtlinien des Mozilla-Sicherheitsteams zur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
