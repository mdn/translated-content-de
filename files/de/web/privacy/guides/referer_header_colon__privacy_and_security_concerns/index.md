---
title: "Referer-Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

Es gibt Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Referer). Dieser Artikel beschreibt diese und bietet Ratschläge zur Minderung der Risiken.

## Das Referrer-Problem

Der {{httpheader("Referer")}}-Header (sic) enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite verfolgt wurde, oder die Adresse einer Seite, die ein Bild oder andere Ressourcen lädt). Dies hat viele relativ harmlose Verwendungszwecke, wie Analysen, Protokollierung oder optimiertes Caching. Es gibt jedoch problematischere Verwendungen wie das Nachverfolgen oder Stehlen von Informationen oder sogar Nebeneffekte wie das unabsichtliche Leaken von sensiblen Informationen.

Betrachten Sie beispielsweise eine Seite zum Zurücksetzen des Passworts mit einem sozialen Medienlink in der Fußzeile. Wenn der Link gefolgt wird, kann die Social-Media-Seite je nach Art der Informationsweitergabe die URL zum Zurücksetzen des Passworts erhalten und möglicherweise die geteilten Informationen nutzen, was die Sicherheit eines Nutzers gefährden könnte.

Nach derselben Logik könnte ein Bild von einer Drittanbieter-Website, das auf Ihrer Seite eingebettet ist, dazu führen, dass sensible Informationen an die Drittpartei geleakt werden. Selbst wenn die Sicherheit nicht gefährdet ist, handelt es sich möglicherweise um Informationen, die der Nutzer nicht teilen möchte.

## Wie können wir das beheben?

Ein Großteil dieses Risikos kann durch eine sinnvolle Gestaltung von Anwendungen gemindert werden. Eine sinnvolle Anwendung würde solche Risiken durch die Erstellung von Einmal-URLs für das Zurücksetzen von Passwörtern oder die Kombination mit einem einzigartigen Benutzertoken beseitigen. Das Risiko kann auch durch die Übertragung sensibler Daten auf sicherere Weise reduziert werden.

Sie sollten {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, wann immer dies möglich ist, um zu vermeiden, dass sensible Daten über URLs an andere Orte weitergegeben werden.

Sie sollten immer {{Glossary("HTTPS", "HTTPS")}} für Ihre Seiten verwenden. Dies bietet viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Seiten niemals Verweis-Informationen an Nicht-HTTPS-Seiten übertragen. Dieser Ratschlag ist heutzutage weniger relevant, da der Großteil des Webs HTTPS nutzt, aber dennoch eine Überlegung wert.

Darüber hinaus sollten Sie erwägen, alle Drittanbieter-Inhalte (z. B. in {{htmlelement("iframe")}} eingebettete soziale Netzwerk-Widgets) von sicheren Bereichen Ihrer Website zu entfernen, wie Seiten zum Zurücksetzen von Passwörtern, Zahlungsformulare, Anmeldebereiche usw.

Sie können solche Risiken auch mit den folgenden Maßnahmen mindern:

- Der {{httpheader("Referrer-Policy")}}-Header auf Ihrem Server, um zu kontrollieren, welche Informationen durch den {{httpheader("Referer")}}-Header gesendet werden. Zum Beispiel würde eine Anweisung `no-referrer` den Referer-Header vollständig weglassen.
- Das `referrerpolicy`-Attribut auf HTML-Elementen, die in Gefahr sind, solche Informationen zu leaken (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dies kann beispielsweise auf `no-referrer` gesetzt werden, um das Senden des `Referer`-Headers vollständig zu unterbinden.
- Das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut, das auf [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) gesetzt ist, auf HTML-Elementen, die in Gefahr sind, solche Informationen zu leaken (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Reference/Elements/meta/name) von `referrer` und einem Inhalt, der auf `no-referrer` gesetzt ist, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referrer-Policy Integration mit HTML](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_html).
- Die [Exit-Page](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)-Technik.

Sicherheitsbewusste serverseitige Frameworks neigen dazu, eingebaute Maßnahmen zur Minderung solcher Probleme zu haben, beispielsweise:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (insbesondere siehe [Cross-site request forgery (CSRF) Schutz](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [Helmet referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware zum Setzen der Referrer-Policy in Node.js/Express-Anwendungen (siehe auch [Helmet](https://github.com/helmetjs) für weitere Sicherheitsmaßnahmen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, ein Set von Sicherheits- und Datenschutzanforderungen für Ihr(e) Projektteam(s) zu erstellen, das die Nutzung solcher Funktionen zur Minderung der damit verbundenen Risiken spezifiziert. Sie sollten die Hilfe eines Websecurity-Experten in Anspruch nehmen, um diese Anforderungen zu schreiben, und sowohl die Bedürfnisse und das Wohl der Nutzer als auch andere Themen wie Richtlinien und Vorschriften, die durch Gesetze wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) vorgegeben werden, berücksichtigen.

## Siehe auch

- [Mozilla Security Team Richtlinien zu Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
