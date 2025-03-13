---
title: "Referer-Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Es gibt Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Referer). Dieser Artikel beschreibt diese und bietet Ratschläge zur Minderung dieser Risiken.

## Das Referrer-Problem

Der {{httpheader("Referer")}} (sic) Header enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite gefolgt wurde, oder die Adresse einer Seite, die ein Bild oder eine andere Ressource lädt). Dies hat viele eher harmlose Verwendungen, wie Analysen, Protokollierung oder optimiertes Caching. Es gibt jedoch problematischere Verwendungen wie das Verfolgen oder Stehlen von Informationen oder sogar nur Nebeneffekte wie das unbeabsichtigte Leaken sensibler Informationen.

Betrachten Sie zum Beispiel eine "Passwort zurücksetzen"-Seite mit einem Social-Media-Link in der Fußzeile. Wenn dem Link gefolgt wurde, könnte die Social-Media-Seite, abhängig davon, wie Informationen geteilt werden, die URL zum Zurücksetzen des Passworts erhalten und möglicherweise die geteilten Informationen weiterhin nutzen, was die Sicherheit eines Benutzers gefährden könnte.

Nach derselben Logik könnte ein Bild von einer Drittanbieter-Website, das in Ihre Seite eingebettet ist, dazu führen, dass sensible Informationen an den Drittanbieter gelangen. Auch wenn die Sicherheit nicht gefährdet ist, könnte es sich um Informationen handeln, die der Benutzer nicht teilen möchte.

## Wie können wir das beheben?

Ein Großteil dieses Risikos kann durch eine sinnvolle Gestaltung der Anwendungen gemindert werden. Eine durchdachte Anwendung würde solche Risiken eliminieren, indem sie Einmal-Passwort-Reset-URLs erstellt oder durch Kombination mit einem einzigartigen Benutzertoken. Das Risiko kann auch durch die Übertragung sensibler Daten auf sicherere Weise verringert werden.

Sie sollten, wann immer möglich, {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, um zu vermeiden, dass sensible Daten über URLs an andere Orte weitergegeben werden.

Sie sollten immer {{Glossary("HTTPS", "HTTPS")}} für Ihre Websites verwenden. Dies hat viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Websites niemals Referrer-Informationen an Nicht-HTTPS-Websites übertragen. Dieser Rat ist weniger relevant, da der Großteil des Webs mittlerweile HTTPS nutzt, aber dennoch eine Überlegung wert.

Außerdem sollten Sie in Betracht ziehen, jeglichen Drittanbieter-Inhalt (z.B. in {{htmlelement("iframe")}} eingebettete Social-Networking-Widgets) aus sicheren Bereichen Ihrer Website zu entfernen, wie Passwort-Zurücksetzen-Seiten, Zahlungsformularen, Login-Bereichen usw.

Sie können solche Risiken auch mindern durch:

- Den {{httpheader("Referrer-Policy")}} Header auf Ihrem Server, um zu kontrollieren, welche Informationen durch den {{httpheader("Referer")}} Header gesendet werden. Beispielsweise würde eine Direktive von `no-referrer` den Referer-Header vollständig weglassen.
- Das `referrerpolicy` Attribut an HTML-Elementen, die in Gefahr sind, solche Informationen zu leaken (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dies kann beispielsweise auf `no-referrer` gesetzt werden, um zu verhindern, dass der `Referer` Header überhaupt gesendet wird.
- Das [`rel`](/de/docs/Web/HTML/Attributes/rel) Attribut, gesetzt auf [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer), an HTML-Elementen, die in Gefahr sind, solche Informationen zu leaken (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}} Element mit einem [name](/de/docs/Web/HTML/Element/meta#name) von `referrer` und der Einstellung des Inhalts auf `no-referrer`, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Integration der Referrer-Policy mit HTML](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_html).
- Die [Exit-Seite](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)-Technik.

Sicherheitsbewusste serverseitige Frameworks neigen dazu, eingebaute Maßnahmen für solche Probleme zu haben, zum Beispiel:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (insbesondere [Cross-Site-Request-Forgery (CSRF)-Schutz](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [Helmet referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware zur Einstellung der Referrer-Policy in Node.js/Express-Apps (siehe auch [Helmet](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, ein Set von Sicherheits- und Datenschutzanforderungen für Ihr Projektteam beziehungsweise Ihre Projektteams zu erstellen, das die Nutzung solcher Funktionen spezifiziert, um die damit verbundenen Risiken zu mindern. Sie sollten die Hilfe eines Web-Sicherheitsexperten in Anspruch nehmen, um diese Anforderungen zu formulieren, und sowohl die Bedürfnisse und das Wohl der Benutzer als auch andere Aspekte wie Richtlinien und Vorschriften berücksichtigen, die durch Gesetze wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) durchgesetzt werden.

## Siehe auch

- [Mozilla Security Team Richtlinien zur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
