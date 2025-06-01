---
title: Umsetzung der Content Security Policy (CSP)
short-title: Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: 8727d7ce8d1d632438befc82b311b18429b18a4b
---

Der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) HTTP-Header bietet eine detaillierte Kontrolle über den Code, der auf einer Seite geladen werden kann, und was er ausführen darf.

## Problem

Das Hauptproblem, mit dem sich dieser Artikel befasst, sind Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese resultieren in der Regel aus einem Mangel an Kontrolle und Bewusstsein über die Quellen, aus denen Site-Ressourcen geladen werden. Dieses Problem wird schwerer zu bewältigen, je größer und komplexer eine Website wird und je stärker sie auf Drittanbieter-Ressourcen wie JavaScript-Bibliotheken angewiesen ist.

> [!NOTE]
> CSP ist ein Teil einer vollständigen Strategie zum Schutz vor XSS-Angriffen. Es gibt andere Faktoren, wie [Ausgabe-Codierung](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Sanitization](/de/docs/Web/Security/Attacks/XSS#sanitization), die ebenfalls wichtig sind.

CSP kann auch helfen, andere Probleme zu lösen, die in anderen Artikeln behandelt werden:

- [Verhindern von Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking) durch Verhindern des Einbettens Ihrer Website in {{htmlelement("iframe")}}-Elementen. Dies wird mithilfe der CSP [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) Direktive umgesetzt.
- Verhinderung von {{Glossary("MitM", "Manipulator-in-the-Middle")}} (MiTM) Angriffen durch Upgrade aller HTTP-Verbindungen auf HTTPS. Dies wird durch die CSP [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) Direktive unterstützt. Siehe [Upgrading insecure requests](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests).

## Lösung

Die Implementierung einer [strikten CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp) ist der beste Weg, um XSS-Schwachstellen mit CSP zu mildern. Dabei werden [Nonce-](/de/docs/Web/HTTP/Guides/CSP#nonces) oder [Hash-](/de/docs/Web/HTTP/Guides/CSP#hashes)-basierte Abrufrichtlinien verwendet, um sicherzustellen, dass nur Skripte und/oder Stile ausgeführt werden, die die korrekte Nonce oder den korrekten Hash enthalten. Von einem Hacker hinzugefügtes Javascript wird einfach nicht ausgeführt.

Strikte CSPs:

- Deaktivieren die Verwendung von unsicherem [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript), also Inline-[Ereignishandler-Attribute](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) wie `onclick`. Dies verhindert, dass unsachgemäß entschlüsselte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Deaktivieren die Verwendung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis), was ein weiterer Effekt der `script-src` Direktive ist.
- Deaktivieren alle Objekteinbettungen durch `object-src 'none'`.
- Deaktivieren die Verwendung des `<base>`-Elements zum Festlegen einer Basis-URL durch `base-uri 'none';`.

Strikte CSPs sind gegenüber [standortbasierten](/de/docs/Web/HTTP/Guides/CSP#location-based_policies) Richtlinien, auch als Allowlist-Richtlinien bekannt, vorzuziehen, bei denen Sie angeben, von welchen Domains Skripte ausgeführt werden dürfen. Dies liegt daran, dass Allowlist-Richtlinien häufig unsichere Domains zulassen, was den Zweck einer CSP vollständig untergräbt, und sie können sehr groß und unhandlich werden, insbesondere wenn Sie versuchen, Dienste zuzulassen, die viele Drittanbieter-Skripte erfordern.

### Schritte zur Umsetzung von CSP

Setzen Sie eine strikte CSP um und beginnen Sie dann damit, Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden, und ergreifen Sie Maßnahmen, um diese Probleme zu umgehen.

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy` Header umsetzen, sollten Sie diese zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header testen; siehe [Report-only CSPs](#report-only_csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden möchten. Sie sollten Nonces verwenden, wenn Sie Inhalte dynamisch generieren können, oder Hashes, wenn Sie statische Inhalte bereitstellen müssen.
2. Implementieren Sie eine strikte CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (eingeschlossen über {{htmlelement("script")}}-Elemente), die Sie ausführen möchten, die korrekte Nonce im [`nonce`](/de/docs/Web/HTML/Reference/Elements/script#nonce) Attribut durch den Server eingefügt haben. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den korrekten Hash im [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribut haben.
3. Wenn ein erlaubtes Skript weiterhin Drittanbieter-Skripte lädt, können diese Skripte nicht geladen werden, da ihnen die erforderliche Nonce oder der Hash fehlt. Beheben Sie dieses Problem, indem Sie die [`strict-dynamic`](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) Direktive hinzufügen, die den durch das erste Skript geladenen Skripten das gleiche Vertrauensniveau gibt, ohne dass ihnen explizit eine Nonce oder ein Hash gegeben wird.
4. Überarbeiten Sie Muster, die durch die strikte CSP verboten sind, wie Inline-Ereignishandler und `eval()`. Beispielsweise können Inline-Ereignishandler durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) innerhalb von Skripten ersetzt werden.
5. Sofern Websites nicht die Möglichkeit benötigen, Einbettungen einzuschließen, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
6. Wenn Sie die Verwendung von `eval()` nicht entfernen können, können Sie das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) Schlüsselwort zu Ihrer strikten CSP hinzufügen, um sie zu erlauben, obwohl dies die CSP erheblich schwächer macht.
7. Wenn Sie Ereignishandler-Attribute nicht entfernen können, können Sie das [`unsafe-hashes`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes) Schlüsselwort zu Ihrer strikten CSP hinzufügen, um sie zuzulassen. Dies ist etwas unsicher, aber viel sicherer, als alle Inline-JavaScript zu erlauben.

Wenn Sie es nicht schaffen, eine strikte CSP zum Laufen zu bringen, ist eine Allowlist-basierte CSP viel besser als keine, und eine CSP wie `default-src https:` bietet immer noch gewissen Schutz, deaktiviert unsichere Inline-`eval()` und erlaubt nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte, etc.) über HTTPS.

> [!WARNING]
> Vermeiden Sie es, wenn möglich, unsichere Quellen in Ihre CSP aufzunehmen. Beispiele sind:
>
> - `unsafe-inline`.
> - `data:` URIs in `script-src`, `object-src` oder `default-src`.
> - Übermäßig breite Quellen oder Formularzeichenziele.

Wenn Sie den `Content-Security-Policy` Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv) Element einschließen. Dies sollte das erste {{htmlelement("meta")}} Element sein, das im Dokument {{htmlelement("head")}} erscheint.

### Report-only CSPs

Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy` Header umsetzen, sollten Sie diese zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header testen. Dies erlaubt es Ihnen zu sehen, ob irgendwelche Verstöße mit dieser Richtlinie aufgetreten wären.

Websites sollten die [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) {{Glossary("Reporting_directive", "Reporting-Direktiven")}} verwenden. Diese lassen den Browser JSON-Berichte über CSP-Verstöße an Endpunkte senden (angegeben im {{httpheader("Reporting-Endpoints")}} Header im Falle von `report-to`). Dies ermöglicht es, CSP-Verstöße schnell zu erkennen und zu beheben.

> [!NOTE]
> Die `report-to` Direktive wird gegenüber der veralteten `report-uri` Direktive bevorzugt. Beide werden jedoch weiterhin benötigt, da `report-to` noch keine vollständige browserübergreifende Unterstützung hat.

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP-Evaluator](https://csp-evaluator.withgoogle.com/)
