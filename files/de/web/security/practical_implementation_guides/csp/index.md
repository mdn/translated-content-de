---
title: Implementierung der Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) HTTP-Header bietet eine feingranulare Kontrolle über den Code, der auf einer Website geladen werden kann, und was er tun darf.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese resultieren im Allgemeinen aus einem Mangel an Kontrolle und Bewusstsein über die Quellen, aus denen Webseitenressourcen geladen werden. Dieses Problem wird schwieriger zu handhaben, je größer und komplexer Websites werden und je mehr sie auf Drittanbieter-Ressourcen wie JavaScript-Bibliotheken angewiesen sind.

> [!NOTE]
> CSP ist ein Teil einer vollständigen Strategie zum Schutz vor XSS-Angriffen. Es gibt andere Faktoren, wie [Ausgabe-Codierung](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Bereinigung](/de/docs/Web/Security/Attacks/XSS#sanitization), die ebenfalls wichtig sind.

CSP kann auch helfen, andere Probleme zu beheben, die in anderen Artikeln behandelt werden:

- [Verhindern von Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking), indem das Einbetten Ihrer Seite in {{htmlelement("iframe")}}-Elemente verhindert wird. Dies wird durch die CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) erreicht.
- Verhindern von {{Glossary("MitM", "Manipulator-in-the-Middle")}} (MiTM) Angriffen, indem alle HTTP-Verbindungen auf HTTPS aufgerüstet werden. Dies wird durch die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) unterstützt. Siehe [Aufrüsten unsicherer Anfragen](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests).

## Lösung

Die Implementierung einer [strengen CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp) ist der beste Weg, um XSS-Schwachstellen mit CSP zu mindern. Diese verwendet [Nonce-](/de/docs/Web/HTTP/Guides/CSP#nonces) oder [Hash-](/de/docs/Web/HTTP/Guides/CSP#hashes)basierte Fetch-Direktiven, um sicherzustellen, dass nur Skripte und/oder Stile ausgeführt werden, die den korrekten Nonce oder Hash enthalten. JavaScript, das von einem Hacker eingefügt wurde, wird einfach nicht ausgeführt.

Strenge CSPs:

- Deaktivieren die Verwendung von unsicherem [inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript), was bedeutet, dass inline [Event-Handler Attribute](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) wie `onclick` deaktiviert sind. Dies verhindert, dass unsachgemäß kodierte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Deaktivieren die Verwendung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis), was ein weiterer Effekt der `script-src`-Direktive ist.
- Deaktivieren alle Objekteinbettungen über `object-src 'none'`.
- Deaktivieren die Verwendung des `<base>`-Elements zur Festlegung eines Basis-URI über `base-uri 'none';`.

Strenge CSPs werden bevorzugt gegenüber [standortbasierten](/de/docs/Web/HTTP/Guides/CSP#location-based_policies) Richtlinien, auch als Whitelist-Richtlinien bezeichnet, bei denen Sie angeben, von welchen Domains Skripte ausgeführt werden können. Dies liegt daran, dass Whitelist-Richtlinien oft am Ende unsichere Domains zulassen, was den gesamten Zweck einer CSP zunichte macht, und sie können sehr groß und unhandlich werden, besonders wenn Sie versuchen, Dienste zuzulassen, die viele Drittanbieterskripte erfordern.

### Schritte zur Implementierung der CSP

Implementieren Sie eine strenge CSP und beginnen Sie dann damit, Ressourcen zu identifizieren, die infolge der Richtlinie nicht geladen werden können, und ergreifen Sie Maßnahmen, um diese Probleme zu umgehen.

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, es zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header zu testen; siehe [Nur-Bericht-CSPs](#nur-bericht-csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden möchten. Sie sollten Nonces verwenden, wenn Sie Inhalte dynamisch generieren können, oder Hashes, wenn Sie statische Inhalte bereitstellen müssen.
2. Implementieren Sie eine strenge CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (eingefügt über {{htmlelement("script")}}-Elemente), die Sie ausführen möchten, den korrekten Nonce in die [`nonce`](/de/docs/Web/HTML/Reference/Elements/script#nonce) Attribute durch den Server eingefügt haben. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den korrekten Hash in die [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribute eingefügt haben.
3. Wenn ein erlaubtes Skript andere Drittanbieterskripte lädt, können diese Skripte nicht geladen werden, da sie nicht den erforderlichen Nonce oder Hash haben. Mildern Sie dieses Problem, indem Sie die [`strict-dynamic`](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) Direktive hinzufügen, die geladene Skripte des ersten Skripts auf demselben Vertrauensniveau hält, ohne explizit ein Nonce oder Hash zugewiesen zu bekommen.
4. Überarbeiten Sie Muster, die durch die strenge CSP untersagt sind, wie Inline-Event-Handler und `eval()`. Zum Beispiel ersetzen Sie Inline-Event-Handler durch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) Aufrufe innerhalb von Skripten.
5. Sofern Websites nicht die Möglichkeit benötigen, Einbettungen zu verwenden, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
6. Wenn Sie nicht in der Lage sind, die Verwendung von `eval()` zu entfernen, können Sie das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) Schlüsselwort zu Ihrer strengen CSP hinzufügen, um sie zu erlauben, obwohl dies die CSP erheblich schwächer macht.
7. Wenn Sie nicht in der Lage sind, Ereignis-Handler-Attribute zu entfernen, können Sie das [`unsafe-hashes`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes) Schlüsselwort zu Ihrer strengen CSP hinzufügen, um sie zu erlauben. Dies ist zwar etwas unsicher, aber viel sicherer, als alle Inline-JavaScript zuzulassen.

Wenn Sie es nicht schaffen, eine strenge CSP zu implementieren, ist eine Whitelist-basierte CSP viel besser als keine, und eine CSP wie `default-src https:` bietet immer noch einen gewissen Schutz, indem sie unsicheres Inline/`eval()` deaktiviert und nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) über HTTPS zulässt.

> [!WARNING]
> Wenn es überhaupt möglich ist, vermeiden Sie, unsichere Quellen in Ihre CSP aufzunehmen. Beispiele hierfür sind:
>
> - `unsafe-inline`.
> - `data:` URIs in `script-src`, `object-src` oder `default-src`.
> - Zu breite Quellen oder Einreichungsziele von Formularen.

Wenn Sie den `Content-Security-Policy`-Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv) Element einfügen. Dies sollte das erste {{htmlelement("meta")}} Element sein, das im Dokument {{htmlelement("head")}} erscheint.

### Nur-Bericht-CSPs

Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, sie zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header zu testen. Dies erlaubt Ihnen zu sehen, ob Verstöße mit dieser Richtlinie aufgetreten wären.

Websites sollten die {{Glossary("Reporting_directive", "Berichts-Direktiven")}} [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) verwenden. Diese veranlassen den Browser, JSON-Berichte über CSP-Verstöße an Endpunkte zu [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)en (angegeben im {{httpheader("Reporting-Endpoints")}} Header im Fall von `report-to`). Dadurch können CSP-Verstöße schnell erfasst und behoben werden.

> [!NOTE]
> Die `report-to` Direktive wird über die veraltete `report-uri` Direktive bevorzugt. Beide sind jedoch noch erforderlich, da `report-to` noch keinen vollständigen Cross-Browser-Support hat.

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP evaluator](https://csp-evaluator.withgoogle.com/)
