---
title: Implementierung der Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: a7c51be4aa79186586c9f8133f551bbdc4a9ddec
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der HTTP-Header [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) bietet eine detaillierte Kontrolle über den Code, der auf einer Website geladen werden kann, und über das, was er tun darf.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting- ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese sind im Allgemeinen auf einen Mangel an Kontrolle und Bewusstsein über die Quellen zurückzuführen, aus denen Ressourcen einer Website geladen werden. Dieses Problem wird schwieriger zu verwalten, wenn Websites größer und komplexer werden und zunehmend auf Drittanbieterressourcen wie JavaScript-Bibliotheken angewiesen sind.

> [!NOTE]
> CSP ist ein Teil einer umfassenden Strategie zum Schutz vor XSS-Angriffen. Es gibt auch andere wichtige Faktoren, wie [Output Encoding](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Sanitization](/de/docs/Web/Security/Attacks/XSS#sanitization).

CSP kann auch helfen, andere Probleme zu beheben, die in anderen Artikeln behandelt werden:

- [Verhinderung von Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking) durch das Verhindern des Einbettens Ihrer Website in {{htmlelement("iframe")}}-Elemente. Dies erfolgt durch die CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors).
- Verhinderung von {{Glossary("MitM", "Manipulator-in-the-Middle")}}-Angriffen (MiTM) durch das Upgrade aller HTTP-Verbindungen auf HTTPS. Dies wird durch die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) unterstützt. Siehe [Upgrade unsicherer Anfragen](/de/docs/Web/HTTP/CSP#upgrading_insecure_requests).

## Lösung

Die Implementierung einer [strikten CSP](/de/docs/Web/HTTP/CSP#strict_csp) ist der beste Weg, um XSS-Sicherheitslücken mit CSP zu minimieren. Dies nutzt auf `nonce-` oder `hash-` basierende Fetch-Direktiven, um sicherzustellen, dass nur Skripte und/oder Styles ausgeführt werden, die den richtigen Nonce oder Hash enthalten. Von Hackern eingefügtes JavaScript wird einfach nicht ausgeführt.

Strikte CSPs:

- Deaktivieren die Nutzung von unsicherem [Inline-JavaScript](/de/docs/Web/HTTP/CSP#inline_javascript), was inline [Ereignis-Handler-Attribute](/de/docs/Web/HTML/Attributes#event_handler_attributes) wie `onclick` bedeutet. Dadurch wird verhindert, dass falsch maskierte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Deaktivieren die Nutzung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/CSP#eval_and_similar_apis), was ein weiterer Effekt der `script-src`-Direktive ist.
- Deaktivieren alle Objekteinbettungen über `object-src 'none'`.
- Deaktivieren die Verwendung des `<base>`-Elements, um eine Basis-URI festzulegen, über `base-uri 'none';`.

Strikte CSPs sind gegenüber [standortbasierten](/de/docs/Web/HTTP/CSP#location-based_policies) Richtlinien vorzuziehen, die auch als Whitelist-Richtlinien bezeichnet werden, bei denen Sie angeben, von welchen Domains Skripte ausgeführt werden können. Dies liegt daran, dass Whitelist-Richtlinien oft unsichere Domains zulassen, was den gesamten Zweck einer CSP untergräbt, und sie können sehr groß und unhandlich werden, insbesondere wenn Sie versuchen, Dienste zu erlauben, die viele Drittanbieter-Skripte benötigen.

### Schritte zur Implementierung einer CSP

Implementieren Sie eine strikte CSP und beginnen Sie dann, Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden, und ergreifen Sie Maßnahmen, um diese Probleme zu umgehen.

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, diese zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only)-HTTP-Header zu testen; siehe [Nur-Bericht-CSPs](#nur-bericht-csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden möchten. Sie sollten Nonces verwenden, wenn Sie Inhalte dynamisch generieren können, oder Hashes, wenn Sie statische Inhalte bereitstellen müssen.
2. Implementieren Sie eine strikte CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (eingebunden über {{htmlelement("script")}}-Elemente), die Sie ausführen möchten, den richtigen Nonce in den vom Server eingefügten [`nonce`](/de/docs/Web/HTML/Element/script#nonce)-Attributen haben. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den richtigen Hash in den [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attributen haben.
3. Wenn ein erlaubtes Skript dazu übergeht, Drittanbieter-Skripte zu laden, werden diese Skripte nicht geladen, da sie nicht den erforderlichen Nonce oder Hash haben. Umgehen Sie dieses Problem, indem Sie die Direktive [`strict-dynamic`](/de/docs/Web/HTTP/CSP#the_strict-dynamic_keyword) hinzufügen, die Skripten, die vom ersten Skript geladen werden, dasselbe Maß an Vertrauen gibt, ohne dass ihnen explizit ein Nonce oder Hash gegeben werden muss.
4. Refaktorieren Sie Muster, die von der strikten CSP nicht erlaubt sind, wie Inline-Ereignis-Handler und `eval()`. Beispielsweise können Sie Inline-Ereignis-Handler durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) in Skripten ersetzen.
5. Sofern Websites nicht die Möglichkeit benötigen, Einbettungen einzuschließen, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
6. Wenn Sie die Verwendung von `eval()` nicht entfernen können, können Sie das Schlüsselwort [`unsafe-eval`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-eval) Ihrer strikten CSP hinzufügen, um sie zu erlauben, obwohl dies die CSP erheblich schwächt.
7. Wenn Sie Ereignis-Handler-Attribute nicht entfernen können, können Sie das Schlüsselwort [`unsafe-hashes`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes) Ihrer strikten CSP hinzufügen, um sie zu erlauben. Dies ist etwas unsicher, aber wesentlich sicherer als die Erlaubnis aller Inline-JavaScripts.

Wenn Sie eine strikte CSP nicht zum Laufen bringen können, ist eine auf Whitelists basierende CSP viel besser als keine, und eine CSP wie `default-src https:` bietet immer noch einen gewissen Schutz, indem unsicheres Inline- und `eval()` deaktiviert wird und nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) über HTTPS erlaubt wird.

> [!WARNING]
> Vermeiden Sie, wenn irgend möglich, das Einbinden unsicherer Quellen in Ihre CSP. Beispiele sind:
>
> - `unsafe-inline`.
> - `data:`-URIs innerhalb von `script-src`, `object-src` oder `default-src`.
> - zu breite Quellen oder Zielorte für Formularübermittlungen.
>
> Ebenso kann die Verwendung von `script-src 'self'` für Websites mit JSONP-Endpunkten unsicher sein. Diese Websites sollten ein `script-src` verwenden, das den Pfad zu ihren JavaScript-Quellordnern enthält.

Wenn Sie den `Content-Security-Policy`-Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="...">`](/de/docs/Web/HTML/Element/meta#http-equiv)-Element einschließen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das innerhalb des Dokuments im {{htmlelement("head")}} erscheint.

### Nur-Bericht-CSPs

Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, diese zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only)-HTTP-Header zu testen. Dies ermöglicht es Ihnen zu sehen, ob Verstöße gegen diese Richtlinie aufgetreten wären.

Websites sollten die {{Glossary("Reporting_directive", "Reporting-Direktiven")}} [`report-to`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) verwenden. Diese bewirken, dass der Browser JSON-Berichte über CSP-Verstöße an Endpunkte sendet (spezifiziert im {{httpheader("Reporting-Endpoints")}}-Header im Falle von `report-to`). Dies ermöglicht es, CSP-Verstöße schnell zu erkennen und zu beheben.

> [!NOTE]
> Die Direktive `report-to` wird gegenüber der veralteten Direktive `report-uri` bevorzugt. Beide werden jedoch noch benötigt, da `report-to` noch keine vollständige Unterstützung über alle Browser hinweg hat.

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
