---
title: "Referer-Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: 4e61549e08920852380fc8255fe9b6376ffb73ec
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Es gibt Datenschutz- und Sicherheitsrisiken in Verbindung mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Headers/Referer). Dieser Artikel beschreibt diese und bietet Ratschläge zur Minderung dieser Risiken.

## Das Referrer-Problem

Der {{httpheader("Referer")}}-Header enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der ein Link zur aktuell angeforderten Seite gefolgt wurde, oder die Adresse einer Seite, die ein Bild oder andere Ressourcen lädt). Dies hat viele recht harmlose Anwendungen, einschließlich Analysen, Protokollierung oder optimiertes Caching. Es gibt jedoch auch problematischere Verwendungen wie Tracking oder Informationsdiebstahl oder sogar nur Nebenwirkungen wie das unbeabsichtigte Leaken von sensiblen Informationen.

Betrachten Sie zum Beispiel eine "Passwort zurücksetzen"-Seite mit einem sozialen Medienlink in einer Fußzeile. Wird der Link verfolgt, kann die Social-Media-Seite je nach Informationsaustausch die URL zum Zurücksetzen des Passworts erhalten und möglicherweise die geteilten Informationen nutzen, was die Sicherheit eines Benutzers gefährden könnte.

Nach derselben Logik könnte ein Bild von einer Drittanbieter-Website, das in Ihre Seite eingebettet ist, dazu führen, dass sensible Informationen an den Drittanbieter weitergegeben werden. Selbst wenn die Sicherheit nicht beeinträchtigt ist, könnten die Informationen etwas sein, das der Benutzer nicht teilen möchte.

## Wie können wir das beheben?

Ein Großteil dieses Risikos kann durch eine sinnvolle Gestaltung von Anwendungen gemindert werden. Eine sinnvolle Anwendung würde solche Risiken durch die Erstellung von Einweg-Passwort-Reset-URLs oder deren Kombination mit einem einzigartigen Benutzertoken beseitigen. Das Risiko kann auch durch die Übertragung sensibler Daten auf sicherere Weise verringert werden.

Sie sollten nach Möglichkeit {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, um zu vermeiden, dass sensible Daten über URLs an andere Orte weitergegeben werden.

Sie sollten immer {{glossary("HTTPS")}} für Ihre Websites nutzen. Dies bringt viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Websites keine Referer-Informationen an nicht-HTTPS-Websites übertragen. Dieser Rat ist heute weniger relevant, da der Großteil des Webs HTTPS nutzt, sollte aber dennoch in Betracht gezogen werden.

Darüber hinaus sollten Sie in Erwägung ziehen, jegliche Drittanbieter-Inhalte (z.B. soziale Netzwerk-Widgets, die in {{htmlelement("iframe")}} eingebettet sind) aus sicheren Bereichen Ihrer Website zu entfernen, wie Passwort-Zurücksetzen-Seiten, Zahlungsformulare, Login-Bereiche usw.

Sie können solche Risiken auch mindern, indem Sie:

- Den {{httpheader("Referrer-Policy")}}-Header auf Ihrem Server einsetzen, um zu steuern, welche Informationen durch den {{httpheader("Referer")}}-Header gesendet werden. Beispielsweise würde eine Direktive `no-referrer` den Referer-Header vollständig weglassen.
- Das `referrerpolicy`-Attribut an HTML-Elementen, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dies kann beispielsweise auf `no-referrer` gesetzt werden, um zu verhindern, dass der `Referer`-Header überhaupt gesendet wird.
- Das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut zu [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer) auf HTML-Elementen setzen, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Element/meta#name) von `referrer` und dem Inhalt auf `no-referrer` gesetzt, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referrer-Policy Integration with HTML](/de/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_html).
- Die [Exit page](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)-Technik.

Sicherheitsbewusste serverseitige Frameworks neigen dazu, eingebaute Maßnahmen zur Minderung solcher Probleme zu haben, zum Beispiel:

- [Security in Django](https://docs.djangoproject.com/en/stable/topics/security/) (insbesondere [Cross site request forgery (CSRF) protection](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [helmetjs referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware zur Einstellung von Referrer-Policies in Node.js/Express-Apps (siehe auch [helmetjs](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, für Ihr Projektteam(s) eine Reihe von Sicherheits- und Datenschutzanforderungen zu erstellen, die die Nutzung solcher Funktionen zur Minderung der damit verbundenen Risiken spezifizieren. Sie sollten die Hilfe eines Web-Sicherheitsexperten in Anspruch nehmen, um diese Anforderungen zu erstellen und sowohl die Bedürfnisse und das Wohl der Benutzer als auch andere Themen wie die durch Gesetze wie die [EU-Datenschutz-Grundverordnung (GDPR)](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN) vorgeschriebene Richtlinien und Regelungen zu berücksichtigen.

## Siehe auch

- [Mozilla security team guidelines on Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
