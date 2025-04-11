---
title: "Referer-Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Es gibt Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Referer). Dieser Artikel beschreibt sie und bietet Beratung, wie diese Risiken gemindert werden können.

## Das Referrer-Problem

Der {{httpheader("Referer")}}-Header enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite verfolgt wurde, oder die Adresse einer Seite, die ein Bild oder andere Ressourcen lädt). Dies hat viele recht harmlose Anwendungen, einschließlich Analytics, Protokollierung oder optimiertes Caching. Es gibt jedoch problematischere Anwendungen wie Tracking oder das Stehlen von Informationen, oder sogar nur Nebenwirkungen wie das versehentliche Leaken sensibler Informationen.

Ein Beispiel: Betrachten Sie eine "Passwort zurücksetzen"-Seite mit einem sozialen Medien-Link im Footer. Wenn der Link verfolgt wird, könnte die Seite des sozialen Netzwerks die URL zum Zurücksetzen des Passworts erhalten, abhängig davon, wie Informationen geteilt wurden, und möglicherweise weiterhin die geteilten Informationen nutzen, was die Sicherheit eines Benutzer gefährden könnte.

Nach der gleichen Logik könnte ein Bild von einer Drittanbieter-Website, das in Ihre Seite eingebettet ist, dazu führen, dass sensible Informationen an den Drittanbieter geleakt werden. Selbst wenn die Sicherheit nicht gefährdet ist, könnten die Informationen nicht das sein, was der Benutzer geteilt wissen will.

## Wie können wir das beheben?

Ein großer Teil dieses Risikos kann durch eine sinnvolle Gestaltung von Anwendungen gemindert werden. Eine durchdachte Anwendung würde solche Risiken beseitigen, indem sie einmalige URLs für die Passwortzurücksetzung verwendet oder sie mit einem einzigartigen Benutzer-Token kombiniert. Das Risiko kann auch durch die sichere Übertragung sensibler Daten reduziert werden.

Sie sollten {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, wann immer dies möglich ist, um zu vermeiden, sensible Daten über URLs an andere Standorte zu übermitteln.

Sie sollten immer {{Glossary("HTTPS", "HTTPS")}} für Ihre Websites verwenden. Dies hat viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Sites niemals Referrer-Informationen an nicht-HTTPS-Sites übertragen. Dieser Rat ist heute weniger relevant, da der Großteil des Webs HTTPS verwendet, aber er bleibt dennoch eine überlegenswerte Empfehlung.

Zudem sollten Sie überlegen, jegliche Drittanbieterinhalte (z.B. Social Networking-Widgets, die in {{htmlelement("iframe")}} eingebettet sind) aus sicheren Bereichen Ihrer Website zu entfernen, wie Passwortrücksetzungsseiten, Zahlungsformulare, Anmeldebereiche usw.

Sie können solche Risiken auch mindern, indem Sie:

- Den {{httpheader("Referrer-Policy")}}-Header auf Ihrem Server verwenden, um zu kontrollieren, welche Informationen über den {{httpheader("Referer")}}-Header gesendet werden. Eine Anweisung wie `no-referrer` würde den Referer-Header vollständig weglassen.
- Das `referrerpolicy`-Attribut auf HTML-Elementen verwenden, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dies kann beispielsweise auf `no-referrer` gesetzt werden, um das Senden des `Referer`-Headers vollständig zu stoppen.
- Das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut auf [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) auf HTML-Elementen setzen, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Reference/Elements/meta#name) von `referrer` und dem Inhalt `no-referrer`, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referrer-Policy-Integration mit HTML](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_html).
- Die [Exit-Page](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)-Technik.

Sicherheitsbewusste serverseitige Frameworks neigen dazu, eingebaute Maßnahmen zur Minderung solcher Probleme zu haben, zum Beispiel:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (insbesondere [Schutz vor Cross Site Request Forgery (CSRF)](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [Helmet referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware zum Setzen von Referrer-Policy in Node.js/Express-Apps (siehe auch [Helmet](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, eine Reihe von Sicherheits- und Datenschutzanforderungen für Ihr Projektteam beziehungsweise Ihre Projektteams zu formulieren, die die Nutzung solcher Funktionen zur Minderung der verbundenen Risiken festlegen. Sie sollten die Hilfe eines Websicherheitsexperten hinzuziehen, um diese Anforderungen zu schreiben, und sowohl die Bedürfnisse und das Wohlergehen der Benutzer als auch andere Fragen wie Richtlinien und Vorschriften berücksichtigen, die durch Gesetze wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) durchgesetzt werden.

## Siehe auch

- [Mozilla-Sicherheitsteam-Richtlinien zur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
