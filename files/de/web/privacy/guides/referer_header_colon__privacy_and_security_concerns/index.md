---
title: "Referer-Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

Es gibt Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Referer). Dieser Artikel beschreibt diese und bietet Ratschläge zur Minderung dieser Risiken.

## Das Referrer-Problem

Der {{httpheader("Referer")}} (sic) Header enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der ein Link zur aktuell angeforderten Seite gefolgt wurde, oder die Adresse einer Seite, die ein Bild oder eine andere Ressource lädt). Dies hat viele recht harmlose Verwendungen, einschließlich Analytik, Protokollierung oder optimiertes Caching. Es gibt jedoch problematischere Verwendungen wie Tracking oder Informationsdiebstahl oder sogar nur Nebeneffekte wie das unbeabsichtigte Leaken sensibler Informationen.

Betrachten Sie beispielsweise eine "Passwort zurücksetzen"-Seite mit einem sozialen Medienlink im Fußbereich. Wenn dem Link gefolgt wurde, kann die Seite des sozialen Netzwerks, je nachdem, wie Informationen geteilt wurden, die URL für das Zurücksetzen des Passworts erhalten und die geteilten Informationen möglicherweise weiterhin verwenden, wodurch die Sicherheit eines Nutzers gefährdet werden könnte.

Nach der gleichen Logik könnte ein von einer Drittanbieter-Website eingebettetes Bild auf Ihrer Seite dazu führen, dass sensible Informationen an den Drittanbieter geleakt werden. Selbst wenn die Sicherheit nicht gefährdet ist, könnten dies Informationen sein, die der Nutzer nicht teilen möchte.

## Wie können wir dies beheben?

Ein Großteil dieses Risikos kann durch eine sinnvolle Gestaltung von Anwendungen gemindert werden. Eine sinnvolle Anwendung würde solche Risiken beseitigen, indem sie Einmal-URLs zum Zurücksetzen von Passwörtern erstellt oder diese mit einem eindeutigen Benutzertoken kombiniert. Das Risiko kann auch durch die Übertragung sensibler Daten auf sicherere Weise reduziert werden.

Sie sollten {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, wo immer möglich, um zu vermeiden, dass sensible Daten über URLs an andere Orte übergeben werden.

Sie sollten immer {{Glossary("HTTPS", "HTTPS")}} für Ihre Websites verwenden. Dies bietet viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Seiten niemals Referrer-Informationen an Nicht-HTTPS-Seiten senden. Obwohl dieser Ratschlag jetzt weniger relevant ist, da der Großteil des Webs HTTPS verwendet, bleibt er dennoch beachtenswert.

Darüber hinaus sollten Sie erwägen, alle Drittanbieter-Inhalte (z.B. in {{htmlelement("iframe")}} eingebettete soziale Netzwerk-Widgets) aus sicheren Bereichen Ihrer Website zu entfernen, wie Passwort-Zurücksetzen-Seiten, Zahlungsformulare, Anmeldungen, usw.

Solche Risiken können Sie auch mindern durch:

- Den {{httpheader("Referrer-Policy")}} Header auf Ihrem Server, um zu kontrollieren, welche Informationen über den {{httpheader("Referer")}} Header gesendet werden. Eine Direktive von `no-referrer` würde zum Beispiel den Referer-Header vollständig weglassen.
- Das `referrerpolicy` Attribut auf HTML-Elementen, die in Gefahr sind, solche Informationen zu leaken (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dieses kann z.B. auf `no-referrer` gesetzt werden, um den `Referer` Header vollständig zu unterbinden.
- Das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel) Attribut auf [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) auf HTML-Elementen, die in Gefahr sind, solche Informationen zu leaken (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}} Element mit einem [name](/de/docs/Web/HTML/Reference/Elements/meta/name) von `referrer` und dem Inhalt auf `no-referrer` gesetzt, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referrer-Policy Integration mit HTML](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_html).
- Die [Exit-Seiten](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect) Technik.

Sicherheitsbewusste serverseitige Frameworks tendieren dazu, eingebaute Maßnahmen zur Minderung derartiger Probleme zu haben, zum Beispiel:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (insbesondere siehe [Schutz vor Cross-Site-Request-Forgery (CSRF)](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [Helmet referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware zum Setzen der Referrer-Policy in Node.js/Express-Anwendungen (siehe auch [Helmet](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, ein Set von Sicherheits- und Datenschutzanforderungen für Ihr Projektteam/Ihre Projektteams zu schreiben, das die Nutzung solcher Funktionen zur Minderung der damit verbundenen Risiken vorschreibt. Sie sollten die Hilfe eines Websicherheitsexperten in Anspruch nehmen, um diese Anforderungen zu schreiben, und sowohl die Bedürfnisse und das Wohlergehen der Nutzer berücksichtigen als auch andere Themen wie Richtlinien und Vorschriften, die durch Gesetzgebung wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) durchgesetzt werden.

## Siehe auch

- [Mozilla Sicherheitsrichtlinien zur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
