---
title: "Referer-Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: 392ce991114e55e2187510b640ab545d09258a16
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Es gibt Datenschutz- und Sicherheitsrisiken, die mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Headers/Referer) verbunden sind. Dieser Artikel beschreibt diese und bietet Ratschläge zur Minderung dieser Risiken.

## Das Referrer-Problem

Der {{httpheader("Referer")}} (sic)-Header enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der ein Link zur derzeit angeforderten Seite gefolgt wurde, oder die Adresse einer Seite, die ein Bild oder eine andere Ressource lädt). Dies hat viele recht harmlose Verwendungen, einschließlich Analytik, Protokollierung oder optimiertes Caching. Es gibt jedoch problematischere Verwendungen wie das Tracking oder den Diebstahl von Informationen oder auch nur Nebeneffekte wie das unbeabsichtigte Leaken sensibler Informationen.

Betrachten Sie zum Beispiel eine "Passwort zurücksetzen"-Seite mit einem sozialen Medienlink in einer Fußzeile. Wenn der Link gefolgt wird, könnte die Social-Media-Seite je nach Weitergabe der Informationen die URL zum Zurücksetzen des Passworts erhalten und möglicherweise die freigegebenen Informationen nutzen, was die Sicherheit eines Benutzers gefährden könnte.

Nach demselben Prinzip könnte ein Bild von einer Drittanbieter-Seite, das in Ihre Seite eingebettet ist, dazu führen, dass sensible Informationen an den Drittanbieter weitergeleitet werden. Selbst wenn die Sicherheit nicht gefährdet ist, könnten die Informationen etwas sein, was der Benutzer nicht teilen möchte.

## Wie können wir dies beheben?

Ein Großteil dieses Risikos kann durch eine sinnvolle Gestaltung von Anwendungen gemindert werden. Eine sinnvolle Anwendung würde solche Risiken beseitigen, indem sie Einmal-Passwort-Zurücksetzen-URLs erstellt oder sie mit einem einzigartigen Benutzertoken kombiniert. Das Risiko kann auch durch die Übertragung sensibler Daten auf sicherere Weise reduziert werden.

Sie sollten wann immer möglich {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, um zu vermeiden, dass sensible Daten über URLs an andere Orte weitergegeben werden.

Sie sollten immer [HTTPS](/de/docs/Glossary/HTTPS) für Ihre Websites verwenden. Dies hat viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Sites niemals Referrer-Informationen an nicht-HTTPS-Sites übertragen. Dieser Rat ist jetzt, da der Großteil des Webs HTTPS verwendet, weniger relevant, aber immer noch eine Überlegung wert.

Darüber hinaus sollten Sie in Erwägung ziehen, jegliche Drittanbieterinhalte (z. B. in {{htmlelement("iframe")}} eingebettete soziale Netzwerk-Widgets) von sicheren Bereichen Ihrer Website, wie Passwort-Zurücksetzen-Seiten, Zahlungsformulare, Login-Bereichen usw., zu entfernen.

Sie können solche Risiken auch durch folgende Maßnahmen mindern:

- Den {{httpheader("Referrer-Policy")}}-Header auf Ihrem Server verwenden, um zu steuern, welche Informationen über den {{httpheader("Referer")}}-Header gesendet werden. Eine Direktive wie `no-referrer` würde den Referer-Header vollständig weglassen.
- Das `referrerpolicy`-Attribut an HTML-Elementen verwenden, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dieses kann beispielsweise auf `no-referrer` eingestellt werden, um den Versand des `Referer`-Headers vollständig zu stoppen.
- Das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut auf [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer) an HTML-Elementen setzen, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Element/meta#name) von `referrer` und dem Inhalt `no-referrer` verwenden, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referrer-Policy Integration with HTML](/de/docs/Web/HTTP/Headers/Referrer-Policy#integration_with_html).
- Die [Exit page](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)-Technik.

Sicherheitsbewusste serverseitige Frameworks tendieren dazu, eingebaute Maßnahmen gegen solche Probleme zu haben, zum Beispiel:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (siehe besonders [Schutz vor Cross-Site-Request-Forgery (CSRF)](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [helmetjs referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) – Middleware zur Einstellung der Referrer-Policy in Node.js/Express-Apps (siehe auch [helmetjs](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, eine Reihe von Sicherheits- und Datenschutzanforderungen für Ihr Projektteam/Ihre Projektteams zu schreiben, die den Einsatz solcher Funktionen zur Minderung der damit verbundenen Risiken spezifizieren. Sie sollten sich die Hilfe eines Web-Sicherheitsexperten holen, um diese Anforderungen zu formulieren, und sowohl die Bedürfnisse und das Wohl der Benutzer als auch andere Themen wie Richtlinien und Vorschriften berücksichtigen, die durch Gesetze wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (GDPR) durchgesetzt werden.

## Siehe auch

- [Mozilla-Sicherheitsteam-Richtlinien zur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
