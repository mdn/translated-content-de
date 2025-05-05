---
title: "Referer-Header: Datenschutz- und Sicherheitsbedenken"
slug: Web/Security/Referer_header:_privacy_and_security_concerns
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Es gibt Datenschutz- und Sicherheitsrisiken im Zusammenhang mit dem [Referer-HTTP-Header](/de/docs/Web/HTTP/Reference/Headers/Referer). Dieser Artikel beschreibt diese Risiken und bietet Ratschläge zur Minderung dieser Risiken.

## Das Referrer-Problem

Der {{httpheader("Referer")}} (sic) Header enthält die Adresse einer Anfrage (zum Beispiel die Adresse der vorherigen Webseite, von der ein Link zur aktuell angeforderten Seite gefolgt wurde, oder die Adresse einer Seite, die ein Bild oder eine andere Ressource lädt). Dies hat viele relativ harmlose Verwendungen, darunter Analytik, Protokollierung oder optimiertes Caching. Es gibt jedoch problematischere Verwendungen wie das Tracking oder den Diebstahl von Informationen oder sogar nur Nebeneffekte wie das unbeabsichtigte Leaken von sensiblen Informationen.

Ein Beispiel: Betrachten Sie eine "Passwort zurücksetzen"-Seite mit einem sozialen Medien-Link im Footer. Wenn dem Link gefolgt wird, kann je nachdem, wie Informationen geteilt werden, die Social-Media-Site die URL zum Zurücksetzen des Passworts erhalten und möglicherweise die geteilten Informationen nutzen, was die Sicherheit eines Benutzers gefährden könnte.

Aus demselben Grund könnte ein Bild von einer Drittanbieter-Website, das auf Ihrer Seite eingebettet ist, dazu führen, dass sensible Informationen an den Dritten geleakt werden. Selbst wenn die Sicherheit nicht kompromittiert wird, könnten die Informationen für den Benutzer unangemessen sein, sie weiterzugeben.

## Wie können wir dies beheben?

Ein Großteil dieses Risikos kann durch ein sinnvolles Design von Anwendungen gemindert werden. Eine sinnvolle Anwendung würde solche Risiken beseitigen, indem sie Passwortrücksetz-URLs für den Einmalgebrauch erstellt oder sie mit einem eindeutigen Benutzertoken kombiniert. Das Risiko kann auch verringert werden, indem sensible Daten auf sicherere Weise übertragen werden.

Sie sollten {{HTTPMethod("POST")}} anstelle von {{HTTPMethod("GET")}} verwenden, wann immer dies möglich ist, um zu vermeiden, dass sensible Daten über URLs an andere Orte übergeben werden.

Sie sollten immer {{Glossary("HTTPS", "HTTPS")}} für Ihre Seiten verwenden. Dies bietet viele Sicherheitsvorteile, einschließlich der Tatsache, dass HTTPS-Seiten niemals Referrer-Informationen an Nicht-HTTPS-Seiten übertragen. Dieser Ratschlag ist weniger relevant, da mittlerweile der Großteil des Webs HTTPS verwendet, aber es ist dennoch eine Überlegung wert.

Darüber hinaus sollten Sie in Betracht ziehen, alle Inhalte von Drittanbietern (z. B. in {{htmlelement("iframe")}} eingebettete soziale Netzwerke-Widgets) von sicheren Bereichen Ihrer Website zu entfernen, wie z. B. Passwortrücksetzseiten, Zahlungsformulare, Anmeldungen usw.

Sie können solche Risiken auch durch Folgendes mindern:

- Der {{httpheader("Referrer-Policy")}}-Header auf Ihrem Server, um zu kontrollieren, welche Informationen durch den {{httpheader("Referer")}}-Header gesendet werden. Beispielsweise würde eine Anweisung `no-referrer` den Referer-Header vollständig weglassen.
- Das `referrerpolicy`-Attribut in HTML-Elementen, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("img")}} und {{HTMLElement("a")}}). Dies kann zum Beispiel auf `no-referrer` gesetzt werden, um den `Referer`-Header überhaupt nicht zu senden.
- Das [`rel`](/de/docs/Web/HTML/Reference/Attributes/rel)-Attribut, das auf [`noreferrer`](/de/docs/Web/HTML/Reference/Attributes/rel/noreferrer) in HTML-Elementen gesetzt ist, die Gefahr laufen, solche Informationen zu leaken (wie {{HTMLElement("form")}} und {{HTMLElement("a")}}).
- Ein {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Reference/Elements/meta#name) `referrer` und dem Inhalt, der auf `no-referrer` gesetzt ist, um den Referer-Header für das gesamte Dokument zu deaktivieren. Siehe [Referrer-Policy Integration with HTML](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy#integration_with_html).
- Die [Exit Page](https://geekthis.net/post/hide-http-referer-headers/#exit-page-redirect)-Technik.

Sicherheitsbewusste serverseitige Frameworks neigen dazu, integrierte Maßnahmen zur Minderung solcher Probleme zu haben, zum Beispiel:

- [Sicherheit in Django](https://docs.djangoproject.com/en/stable/topics/security/) (insbesondere siehe [Schutz vor Cross-Site-Request-Forgery (CSRF)](https://docs.djangoproject.com/en/stable/topics/security/#cross-site-request-forgery-csrf-protection)).
- [Helmet referrer-policy](https://github.com/helmetjs/helmet/tree/main/middlewares/referrer-policy) — Middleware zur Einstellung der Referrer-Policy in Node.js/Express-Apps (siehe auch [Helmet](https://github.com/helmetjs) für weitere Sicherheitsvorkehrungen).

## Richtlinien und Anforderungen

Es wäre sinnvoll, eine Reihe von Sicherheits- und Datenschutzanforderungen für Ihr(e) Projektteam(s) zu erstellen, die die Nutzung solcher Funktionen zur Minderung der damit verbundenen Risiken festlegen. Sie sollten die Hilfe eines Websicherheitsexperten in Anspruch nehmen, um diese Anforderungen zu erstellen, und sowohl die Bedürfnisse und das Wohlergehen der Benutzer als auch andere Themen wie Richtlinien und durch Gesetze wie die [EU-Datenschutz-Grundverordnung](https://gdpr.eu/) (GDPR) erzwungene Vorschriften berücksichtigen.

## Siehe auch

- [Richtlinien des Mozilla-Sicherheitsteams zur Referrer-Policy](https://infosec.mozilla.org/guidelines/web_security.html#referrer-policy)
