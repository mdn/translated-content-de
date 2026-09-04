---
title: Content Security Policy (CSP) Implementierung
short-title: Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

Der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) HTTP-Header bietet eine feinkörnige Kontrolle darüber, welche Codes auf einer Website geladen werden können und was sie tun dürfen.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese resultieren in der Regel aus einem Mangel an Kontrolle und Bewusstsein für die Quellen, aus denen Seitenressourcen geladen werden. Dieses Problem wird schwieriger zu verwalten, je größer und komplexer Websites werden und je mehr sie auf Drittanbieter-Ressourcen wie JavaScript-Bibliotheken angewiesen sind.

> [!NOTE]
> CSP ist ein Teil einer umfassenden Strategie zum Schutz vor XSS-Angriffen. Es gibt weitere Faktoren, wie [Ausgabe-Codierung](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Bereinigung](/de/docs/Web/Security/Attacks/XSS#sanitization), die ebenfalls wichtig sind.

CSP kann auch zur Lösung anderer Probleme beitragen, die in anderen Artikeln behandelt werden:

- Verhinderung von [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking), indem verhindert wird, dass Ihre Seite in {{htmlelement("iframe")}}-Elemente eingebettet wird. Dies erfolgt mit der CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors).
- Verhinderung von [Manipulator-in-the-Middle](/de/docs/Web/Security/Attacks/MITM) (MiTM) Angriffen durch Upgraden aller HTTP-Verbindungen zu HTTPS. Dies wird durch die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) unterstützt. Siehe [Upgrading insecure requests](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests).

## Lösung

Eine [strenge CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp) implementieren ist der beste Weg, um XSS-Schwachstellen mit CSP zu minimieren. Dies verwendet [nonce-](/de/docs/Web/HTTP/Guides/CSP#nonces) oder [hash-](/de/docs/Web/HTTP/Guides/CSP#hashes) basierte Fetch-Direktiven, um sicherzustellen, dass nur Skripte und/oder Stile, die das richtige {{Glossary("Nonce", "Nonce")}} oder den richtigen Hash enthalten, ausgeführt werden. Von einem Hacker eingefügtes JavaScript wird einfach nicht ausgeführt.

Strenge CSPs:

- Deaktivieren die Verwendung von unsicherem [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript), was bedeutet, dass Inline-[Ereignis-Handler-Attribute](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) wie `onclick`. Dies verhindert, dass unsachgemäß escapte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Deaktivieren die Nutzung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis), was ein weiterer Effekt der `script-src`-Direktive ist.
- Deaktivieren alle Objekt-Einbettungen über `object-src 'none'`.
- Deaktivieren die Nutzung des `<base>`-Elements, um eine Basis-URI über `base-uri 'none';` festzulegen.

Strenge CSPs werden gegenüber [standortbasierten](/de/docs/Web/HTTP/Guides/CSP#location-based_policies) Richtlinien, auch Whitelist-Richtlinien genannt, bevorzugt, bei denen Sie angeben, von welchen Domains Skripte ausgeführt werden können. Dies liegt daran, dass Whitelist-Richtlinien oft dazu führen, unsichere Domains zuzulassen, was den gesamten Zweck einer CSP zunichtemacht, und diese sehr groß und unhandlich werden können, insbesondere wenn Sie versuchen, Dienste zu erlauben, die viele Drittanbieter-Skripte benötigen.

### Schritte zur Implementierung von CSP

Implementieren Sie eine strenge CSP und beginnen Sie dann, Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden, und unternehmen Sie Schritte, um diese Probleme zu umgehen.

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, sollten Sie diese zunächst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header testen; siehe [Report-only CSPs](#report-only_csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden möchten. Sie sollten Nonces verwenden, wenn Sie Inhalte dynamisch generieren können, oder Hashes, wenn Sie statische Inhalte bereitstellen müssen.
2. Implementieren Sie eine strenge CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (eingebunden über {{htmlelement("script")}}-Elemente), die Sie ausführen möchten, das richtige Nonce in die [`nonce`](/de/docs/Web/HTML/Reference/Elements/script#nonce) Attribute vom Server eingefügt haben. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den richtigen Hash in [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribute eingefügt haben.
3. Wenn ein erlaubtes Skript Drittanbieter-Skripte lädt, werden diese Skripte nicht geladen, da sie nicht das erforderliche Nonce oder den erforderlichen Hash haben. Beheben Sie dieses Problem, indem Sie die [`strict-dynamic`](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) Direktive hinzufügen, die Skripten, die vom ersten Skript geladen werden, dasselbe Vertrauensniveau gibt, ohne dass sie explizit ein Nonce oder einen Hash erhalten.
4. Überarbeiten Sie Muster, die von der strengen CSP nicht erlaubt sind, wie Inline-Event-Handler und `eval()`. Ersetzen Sie zum Beispiel Inline-Event-Handler durch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe innerhalb von Skripten.
5. Sofern Websites nicht die Möglichkeit benötigen, Einbettungen einzuschließen, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
6. Wenn Sie die Verwendung von `eval()` nicht entfernen können, können Sie das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) Schlüsselwort zu Ihrer strengen CSP hinzufügen, um sie zu erlauben, obwohl dies die CSP erheblich schwächer macht.
7. Wenn Sie Event-Handler-Attribute nicht entfernen können, können Sie das [`unsafe-hashes`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes) Schlüsselwort zu Ihrer strengen CSP hinzufügen, um sie zu erlauben. Dies ist etwas unsicher, aber wesentlich sicherer als alle Inline-JavaScript zuzulassen.

Wenn Sie es nicht schaffen, eine strenge CSP zum Laufen zu bringen, ist eine Whitelist-basierte CSP viel besser als keine, und eine CSP wie `default-src https:` bietet dennoch einen gewissen Schutz, deaktiviert unsicheres Inline/`eval()` und erlaubt nur das Laden von Ressourcen (Bilder, Schriften, Skripte usw.) über HTTPS.

> [!WARNING]
> Vermeiden Sie es nach Möglichkeit, unsichere Quellen in Ihre CSP aufzunehmen. Beispiele sind:
>
> - `unsafe-inline`.
> - `data:` URIs innerhalb von `script-src`, `object-src` oder `default-src`.
> - Übermäßig breite Quellen oder Ziele für Formularübermittlungen.

Wenn Sie den `Content-Security-Policy`-Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Element beinhalten. Dies sollte das erste {{htmlelement("meta")}} Element sein, das im Dokument {{htmlelement("head")}} erscheint.

### Report-only CSPs

Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy` Header implementieren, sollten Sie diese zunächst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP Header testen. Dies ermöglicht es Ihnen zu sehen, ob Verstöße mit dieser Richtlinie aufgetreten wären.

Seiten sollten die [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) {{Glossary("Reporting_directive", "Reporting-Direktiven")}} verwenden. Diese veranlassen den Browser dazu, JSON-Berichte über CSP-Verstöße an Endpunkte zu [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) (spezifiziert im {{httpheader("Reporting-Endpoints")}} Header im Fall von `report-to`) zu senden. Dies ermöglicht es, CSP-Verstöße schnell zu erfassen und zu beheben.

> [!NOTE]
> Die `report-to` Direktive wird gegenüber der veralteten `report-uri` Direktive bevorzugt. Beide sind jedoch noch erforderlich, da `report-to` noch keine vollständige plattformübergreifende Unterstützung hat.

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
