---
title: "Referer-Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Es gibt Datenschutz- und Sicherheitsrisiken, die mit dem [Referer HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Referer) verbunden sind. Dieser Artikel beschreibt diese und bietet Ratschläge, um diese Risiken zu mindern.

## Das Referrer-Problem

Der {{httpheader("Referer")}}-Header (sic) enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der aus ein Link zur aktuell angeforderten Seite gefolgt wurde, oder die Adresse einer Seite, die ein Bild oder eine andere Ressource lädt). Dies hat viele eher harmlose Verwendungen, einschließlich Analysen, Protokollierungen oder optimiertem Caching. Es gibt jedoch problematischere Verwendungen wie Tracking oder den Diebstahl von Informationen oder einfach nur Nebeneffekte wie das unabsichtliche Leaken sensibler Informationen.

Beispielsweise betrachten Sie eine "Passwort zurücksetzen"-Seite mit einem Social-Media-Link im Footer. Wenn dem Link gefolgt wurde, kann die Social-Media-Seite je nach Art der geteilten Informationen die URL zum Zurücksetzen des Passworts erhalten und könnte immer noch in der Lage sein, die geteilten Informationen zu nutzen, was potenziell die Sicherheit eines Nutzers gefährden könnte.

Nach derselben Logik könnte ein Bild von einer Drittanbieter-Website, das in Ihre Seite eingebettet ist, dazu führen, dass sensible Informationen an den Drittanbieter weitergegeben werden. Selbst wenn die Sicherheit nicht gefährdet ist, möchte der Nutzer möglicherweise nicht, dass die Informationen weitergegeben werden.

## Wie können wir das beheben?

Ein Großteil dieses Risikos kann durch eine sinnvolle Anwendungsarchitektur vermindert werden. Eine sinnvolle Anwendung würde solche Risiken beseitigen, indem Einmal-URLs zum Zurücksetzen des Passworts erstellt oder diese mit einem eindeutigen Benutzer-Token kombiniert werden. Das Risiko kann auch verringert werden, indem sensible Daten auf sicherere Weise übertragen werden.

Sie sollten nach Möglichkeit {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, um zu vermeiden, dass sensible Daten über URLs an andere Orte übermittelt werden.

Sie sollten immer {{Glossary("HTTPS", "HTTPS")}} für Ihre Websites verwenden. Dies hat viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Seiten niemals Referrer-Informationen an Nicht-HTTPS-Seiten übermitteln. Dieser Rat ist heutzutage weniger relevant, da der Großteil des Webs HTTPS verwendet, aber es ist immer noch eine Überlegung wert.

Darüber hinaus sollten Sie in Erwägung ziehen, jegliche Inhalte von Drittanbietern (z.B. eingebettete Social-Networking-Widgets in {{htmlelement("iframe")}}) aus sicheren Bereichen Ihrer Website, wie Passwort-Zurücksetzen-Seiten, Zahlungsformulare, Login-Bereiche usw., zu entfernen.

Sie können solche Risiken auch mit folgenden Maßnahmen mindern:

- Den {{httpheader("Referrer-Policy")}}-Header auf Ihrem Server verwenden, um zu steuern, welche Informationen über den {{httpheader("Referer")}}-Header gesendet werden. Eine Direktive wie `no-referrer` würde den Referer-Header komplett weglassen.
- Das `referrerpolicy`-Attribut auf HTML-Elementen verwenden, die Gefahr laufen, solche Informationen preiszugeben (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dies kann beispielsweise auf `no-referrer` gesetzt werden, um das Senden des `Referer`-Headers gänzlich zu unterbinden.
- Das [`rel`](/de/docs/Web/HTML/Attributes/rel)-Attribut auf [`noreferrer`](/de/docs/Web/HTML/Attributes/rel/noreferrer) setzen, auf HTML-Elementen, die Gefahr laufen, solche Informationen preiszugeben (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Element/meta#name) von `referrer` und dem Inhalt auf `no-referrer` setzen, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referrer-Policy Integration mit HTML](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_html).
- Die [Exit-Page](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)-Technik.

Sicherheitsbewusste serverseitige Frameworks tendieren dazu, eingebaute Lösungen für solche Probleme zu haben, zum Beispiel:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (siehe insbesondere [Cross Site Request Forgery (CSRF)-Schutz](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [Helmet referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware zum Setzen der Referrer-Policy in Node.js/Express-Anwendungen (siehe auch [Helmet](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, eine Reihe von Sicherheits- und Datenschutzanforderungen für Ihr Projektteam/Ihre Projektteams zu erstellen, die die Nutzung solcher Funktionen spezifizieren, um die damit verbundenen Risiken zu mindern. Sie sollten die Hilfe eines Web-Sicherheitsexperten in Anspruch nehmen, um diese Anforderungen zu formulieren, und sowohl die Bedürfnisse und das Wohl der Nutzer, als auch andere Themen wie Politik und durch Gesetze wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) erzwungene Regelungen berücksichtigen.

## Siehe auch

- [Richtlinien des Mozilla-Sicherheitsteams zur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
