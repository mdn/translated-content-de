---
title: Implementierung der Content Security Policy (CSP)
short-title: Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: ad2ee21660739777fc8874a93670cd518a6d3fff
---

Der HTTP-Header [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) bietet eine detaillierte Kontrolle über den Code, der auf einer Website geladen werden kann, und was dieser ausführen darf.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}})-Angriffe. Diese ergeben sich im Allgemeinen aus mangelnder Kontrolle und unzureichendem Bewusstsein über die Quellen, aus denen Website-Ressourcen geladen werden. Dieses Problem wird schwerer zu bewältigen, wenn Websites größer und komplexer werden und zunehmend auf Drittanbieter-Ressourcen wie JavaScript-Bibliotheken angewiesen sind.

> [!NOTE]
> CSP ist ein Teil einer umfassenden Strategie zum Schutz vor XSS-Angriffen. Es gibt auch andere Faktoren, wie [Output-Encoding](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Sanitization](/de/docs/Web/Security/Attacks/XSS#sanitization), die ebenfalls wichtig sind.

CSP kann auch helfen, andere Probleme zu beheben, die in anderen Artikeln behandelt werden:

- Verhinderung von [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking), indem Ihre Website daran gehindert wird, in {{htmlelement("iframe")}}-Elemente eingebettet zu werden. Dies geschieht mit der CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors).
- Verhinderung von [Manipulator-in-the-Middle](/de/docs/Web/Security/Attacks/MITM) (MiTM)-Angriffen, indem alle HTTP-Verbindungen auf HTTPS hochgestuft werden. Dies wird durch die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) unterstützt. Siehe [Upgrading insecure requests](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests).

## Lösung

Die Implementierung einer [strikten CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp) ist der beste Weg, um XSS-Sicherheitslücken mit CSP zu mindern. Diese verwendet auf [nonces](/de/docs/Web/HTTP/Guides/CSP#nonces) oder [hashes](/de/docs/Web/HTTP/Guides/CSP#hashes) basierende Abrufdirektiven, um sicherzustellen, dass nur Skripte und/oder Styles ausgeführt werden, die den korrekten Nonce oder Hash enthalten. Von einem Hacker eingefügtes JavaScript wird einfach nicht ausgeführt.

Strikte CSPs:

- Deaktivieren die Verwendung von unsicherem [inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript), was bedeutet inline event handler attributes wie z.B. `onclick`. Dies verhindert, dass unsachgemäß entschlüsselte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Deaktivieren die Verwendung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis), was eine weitere Wirkung der Direktive `script-src` ist.
- Deaktivieren alle Objekt-Einbettungen über `object-src 'none'`.
- Deaktivieren die Verwendung des `<base>`-Elements zur Festlegung einer Basis-URI über `base-uri 'none';`.

Strikte CSPs werden gegenüber [standortbasierten](/de/docs/Web/HTTP/Guides/CSP#location-based_policies) Richtlinien bevorzugt, auch bekannt als Whitelist-Policies, bei denen Sie angeben, von welchen Domains Skripte ausgeführt werden können. Dies liegt daran, dass Whitelist-Policies oft dazu führen, dass unsichere Domains erlaubt werden, was den gesamten Zweck einer CSP zunichtemacht, und sie können sehr groß und unhandlich werden, besonders wenn Sie versuchen, Dienste zu erlauben, die viele Drittanbieter-Skripte benötigen, um zu funktionieren.

### Schritte zur Implementierung von CSP

Implementieren Sie eine strikte CSP und beginnen Sie dann, Ressourcen zu identifizieren, die infolge der Richtlinie nicht geladen werden, und ergreifen Sie Maßnahmen, um diese Probleme zu umgehen.

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, sie zuerst mit dem HTTP-Header [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) zu testen; siehe [Report-only CSPs](#report-only_csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden möchten. Sie sollten Nonces verwenden, wenn Sie Inhalte dynamisch generieren können, oder Hashes, wenn Sie statische Inhalte bereitstellen müssen.
2. Implementieren Sie eine strikte CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (die über {{htmlelement("script")}}-Elemente eingebunden werden) den korrekten Nonce in den [`nonce`](/de/docs/Web/HTML/Reference/Elements/script#nonce)-Attributen enthalten, die vom Server eingefügt werden. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den korrekten Hash in [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attributen enthalten.
3. Wenn ein erlaubtes Skript Drittanbieter-Skripte laden soll, werden diese Skripte aufgrund des fehlenden Nonces oder Hashes nicht geladen. Lösen Sie dieses Problem, indem Sie die Direktive [`strict-dynamic`](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) hinzufügen, die den von dem ersten Skript geladenen Skripten das gleiche Maß an Vertrauen gibt, ohne dass ihnen explizit ein Nonce oder Hash gegeben wird.
4. Refaktorisieren Sie Muster, die von der strikten CSP nicht erlaubt sind, wie Inline-Event-Handler und `eval()`. Ersetzen Sie beispielsweise Inline-Event-Handler durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) innerhalb von Skripten.
5. Sofern Websites nicht die Möglichkeit benötigen, Einbettungen zu enthalten, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
6. Wenn Sie die Verwendung von `eval()` nicht entfernen können, können Sie das Schlüsselwort [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) zu Ihrer strikten CSP hinzufügen, um sie zu erlauben, obwohl dies die CSP erheblich schwächt.
7. Wenn Sie die Verwendung von Event-Handler-Attributen nicht entfernen können, können Sie das Schlüsselwort [`unsafe-hashes`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes) zu Ihrer strikten CSP hinzufügen, um sie zu erlauben. Dies ist etwas unsicher, aber viel sicherer als die Erlaubnis aller inline JavaScripts.

Wenn Sie es nicht schaffen, eine strikte CSP zu Verwenden, ist eine auf Whitelist basierende CSP immer noch viel besser als keine, und eine CSP wie `default-src https:` bietet dennoch einigen Schutz, indem sie unsichere Inline/`eval()` deaktiviert und nur das Laden von Ressourcen (Bilder, Schriften, Skripte usw.) über HTTPS zulässt.

> [!WARNING]
> Vermeiden Sie es nach Möglichkeit, unsichere Quellen in Ihre CSP aufzunehmen. Beispiele sind:
>
> - `unsafe-inline`.
> - `data:`-URIs in `script-src`, `object-src` oder `default-src`.
> - Übermäßig breite Quellen oder Ziele für Formularübermittlungen.

Wenn Sie den `Content-Security-Policy`-Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)Element einschließen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokument-{{htmlelement("head")}} erscheint.

### Report-only CSPs

Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, sie zuerst mit dem HTTP-Header [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) zu testen. Dies ermöglicht es Ihnen zu sehen, ob Verstöße mit dieser Richtlinie aufgetreten wären.

Websites sollten die {{Glossary("Reporting_directive", "Reporting-Direktiven")}} [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) verwenden. Diese veranlassen den Browser dazu, JSON-Berichte über CSP-Verstöße an Endpunkte zu [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)en (angegeben im {{httpheader("Reporting-Endpoints")}}-Header im Fall von `report-to`). Dies ermöglicht es, CSP-Verstöße schnell zu erkennen und zu beheben.

> [!NOTE]
> Die Direktive `report-to` wird gegenüber der veralteten Direktive `report-uri` bevorzugt. Beide sind jedoch nach wie vor erforderlich, da `report-to` noch keine vollständige plattformübergreifende Unterstützung hat.

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP-Evaluator](https://csp-evaluator.withgoogle.com/)
