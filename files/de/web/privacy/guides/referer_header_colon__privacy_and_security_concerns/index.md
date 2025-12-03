---
title: "Referer-Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: bb435e7556282e5dbe5ae9476b0a185c3d3ede32
---

Es gibt Datenschutz- und Sicherheitsrisiken, die mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Referer) verbunden sind. Dieser Artikel beschreibt diese Risiken und bietet Ratschläge zur Minderung dieser Risiken an.

## Das Referrer-Problem

Der {{httpheader("Referer")}}-Header (sic) enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite gefolgt wurde, oder die Adresse einer Seite, die ein Bild oder eine andere Ressource lädt). Dies hat viele relativ harmlose Anwendungen, einschließlich Analytik, Protokollierung oder optimiertes Caching. Es gibt jedoch problematischere Anwendungen wie das Verfolgen oder Stehlen von Informationen oder auch nur Nebenwirkungen wie das unabsichtliche Offenlegen sensibler Informationen.

Betrachten Sie zum Beispiel eine "Passwort zurücksetzen"-Seite mit einem sozialen Medienlink im Footer. Wenn der Link gefolgt wurde, könnte die Seite der sozialen Medien, je nachdem, wie Informationen geteilt wurden, die URL zum Zurücksetzen des Passworts erhalten und möglicherweise immer noch in der Lage sein, die geteilten Informationen zu nutzen, was die Sicherheit eines Nutzers gefährden könnte.

Nach demselben Prinzip könnte ein Bild einer Drittanbieterseite, das in Ihre Seite eingebettet ist, dazu führen, dass sensible Informationen an den Drittanbieter weitergegeben werden. Selbst wenn die Sicherheit nicht gefährdet ist, möchten die Nutzer möglicherweise nicht, dass diese Informationen geteilt werden.

## Wie können wir das beheben?

Ein Großteil dieses Risikos kann durch eine sinnvolle Gestaltung von Anwendungen gemindert werden. Eine sinnvolle Anwendung würde solche Risiken eliminieren, indem sie URLs zum Zurücksetzen des Passworts einmalig verwendet oder sie mit einem einzigartigen Benutzertoken kombiniert. Das Risiko kann auch verringert werden, indem sensible Daten auf sicherere Weise übertragen werden.

Sie sollten {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, wann immer dies möglich ist, um zu vermeiden, dass sensible Daten über URLs an andere Orte übermittelt werden.

Sie sollten immer {{Glossary("HTTPS", "HTTPS")}} für Ihre Seiten verwenden. Dies hat viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Seiten niemals Referrer-Informationen an nicht-HTTPS-Seiten übertragen. Dieser Rat ist weniger relevant, da ein Großteil des Webs jetzt HTTPS verwendet, aber es ist immer noch eine Überlegung wert.

Darüber hinaus sollten Sie in Betracht ziehen, jeglichen Drittanbieterinhalt (z. B. soziale Netzwerk-Widgets, die in {{htmlelement("iframe")}} eingebettet sind) aus sicheren Bereichen Ihrer Website zu entfernen, wie Passwort-Zurücksetzen-Seiten, Zahlungsformulare, Login-Bereiche usw.

Sie können solche Risiken auch mindern, indem Sie:

- Den {{httpheader("Referrer-Policy")}}-Header auf Ihrem Server verwenden, um zu steuern, welche Informationen über den {{httpheader("Referer")}}-Header gesendet werden. Zum Beispiel würde eine Direktive von `no-referrer` den Referer-Header vollständig weglassen.
- Das `referrerpolicy`-Attribut auf HTML-Elementen, die Gefahr laufen, solche Informationen preiszugeben (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dies kann beispielsweise auf `no-referrer` gesetzt werden, um zu verhindern, dass der `Referer`-Header überhaupt gesendet wird.
- Das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut, das auf [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) gesetzt wird, bei HTML-Elementen, die Gefahr laufen, solche Informationen preiszugeben (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Reference/Elements/meta/name) von `referrer` und der Inhalt auf `no-referrer` gesetzt, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referrer-Policy Integration with HTML](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_html).
- Die [Exit page](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)-Technik.

Sicherheitsbewusste serverseitige Frameworks neigen dazu, eingebaute Maßnahmen gegen solche Probleme zu haben, zum Beispiel:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (besonders beachten Sie den Abschnitt [Schutz vor Cross-Site Request Forgery (CSRF)](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [Helmet referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware zum Setzen der Referrer-Policy in Node.js/Express-Apps (siehe auch [Helmet](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, eine Reihe von Sicherheits- und Datenschutzanforderungen für Ihre Projektteams zu schreiben, die die Nutzung solcher Funktionen zur Minderung der damit verbundenen Risiken spezifizieren. Sie sollten die Hilfe eines Web-Sicherheitsexperten in Anspruch nehmen, um diese Anforderungen zu schreiben, und sowohl die Bedürfnisse und das Wohlergehen der Nutzer als auch andere Themen wie die von Gesetzen auferlegten Richtlinien und Vorschriften, wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (GDPR), berücksichtigen.

## Siehe auch

- [Mozillas Sicherheitsrichtlinien zur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
