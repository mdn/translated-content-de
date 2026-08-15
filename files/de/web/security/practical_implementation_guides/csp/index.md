---
title: Inhaltssicherheitsrichtlinie (CSP) Implementierung
short-title: Inhaltssicherheitsrichtlinie (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

Der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) HTTP-Header bietet eine fein abgestimmte Kontrolle darüber, welcher Code auf einer Seite geladen werden kann und was er tun darf.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese entstehen in der Regel durch fehlende Kontrolle und Unkenntnis über die Quellen, von denen Seitenressourcen geladen werden. Dieses Problem wird schwieriger zu handhaben, je größer und komplexer Websites werden und je stärker sie auf Ressourcen Dritter wie JavaScript-Bibliotheken angewiesen sind.

> [!NOTE]
> CSP ist ein Teil einer umfassenden Strategie zum Schutz vor XSS-Angriffen. Es gibt auch andere wichtige Faktoren, wie z.B. [Output-Encoding](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Sanitization](/de/docs/Web/Security/Attacks/XSS#sanitization).

CSP kann auch helfen, andere Probleme zu lösen, die in anderen Artikeln behandelt werden:

- Verhinderung von [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking), indem verhindert wird, dass Ihre Seite in {{htmlelement("iframe")}}-Elemente eingebettet wird. Dies wird mit der CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) erreicht.
- Verhinderung von [Man-in-the-Middle](/de/docs/Web/Security/Attacks/MITM) (MiTM) Angriffen durch Hochstufen von HTTP-Verbindungen auf HTTPS. Dies wird durch die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) unterstützt. Siehe [Veraltete unsichere Anforderungen hochstufen](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests).

## Lösung

Die Implementierung einer [strengen CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp) ist der beste Weg, um XSS-Schwachstellen mit CSP zu begegnen. Dabei werden [nonce-](/de/docs/Web/HTTP/Guides/CSP#nonces) oder [hash-](/de/docs/Web/HTTP/Guides/CSP#hashes)basierte Lade-Direktiven verwendet, um sicherzustellen, dass nur Scripts und/oder Styles ausgeführt werden, die den richtigen {{Glossary("Nonce", "Nonce")}} oder Hash enthalten. Von einem Hacker eingefügtes JavaScript wird einfach nicht ausgeführt.

Strenge CSPs:

- Deaktivieren die Verwendung unsicheren [Inline-JavaScripts](/de/docs/Web/HTTP/Guides/CSP#inline_javascript), wie Inline [Ereignis-Handler-Attribute](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) wie `onclick`. Dies verhindert, dass unsachgemäß escapte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Deaktivieren die Nutzung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis), was ein weiterer Effekt der `script-src`-Direktive ist.
- Deaktivieren alle Objekteinbettungen über `object-src 'none'`.
- Deaktivieren die Verwendung des `<base>`-Elements zur Festlegung einer Basis-URI über `base-uri 'none';`.

Strenge CSPs sind bevorzugt gegenüber [standortbasierten](/de/docs/Web/HTTP/Guides/CSP#location-based_policies) Richtlinien, auch als Positivlisten-Richtlinien bekannt, bei denen Sie festlegen, von welchen Domains Skripte ausgeführt werden dürfen. Das liegt daran, dass Positivlisten-Richtlinien oft dazu führen, dass unsichere Domains erlaubt werden, was den gesamten Sinn einer CSP zunichte macht, und sie können sehr groß und unübersichtlich werden, insbesondere wenn Sie versuchen, Dienste zuzulassen, die viele Drittanbieter-Skripte zum Funktionieren benötigen.

### Schritte zur Implementierung der CSP

Implementieren Sie eine strenge CSP und beginnen Sie, Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden können. Unternehmen Sie Schritte, um diese Probleme zu umgehen.

> [!NOTE]
> Bevor Sie irgendeine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, sie zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header zu testen; siehe [Nur-Bericht CSPs](#nur-bericht_csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden möchten. Sie sollten Nonces verwenden, wenn Sie Inhalte dynamisch generieren können, oder Hashes, wenn Sie statische Inhalte bereitstellen müssen.
2. Implementieren Sie eine strenge CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (eingefügt über {{htmlelement("script")}}-Elemente), die Sie ausführen möchten, den richtigen Nonce in den [`nonce`](/de/docs/Web/HTML/Reference/Elements/script#nonce) Attributen durch den Server eingefügt haben. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den richtigen Hash in den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attributen haben.
3. Wenn ein erlaubtes Skript weitere Drittanbieter-Skripte lädt, werden diese Skripte nicht geladen, da sie den erforderlichen Nonce oder Hash nicht haben. Beheben Sie dieses Problem, indem Sie die [`strict-dynamic`](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) Direktive hinzufügen, die Skripten, die vom ersten Skript geladen werden, das gleiche Vertrauensniveau gibt, ohne ihnen explizit einen Nonce oder Hash zu geben.
4. Überarbeiten Sie Muster, die von der strengen CSP nicht zugelassen werden, wie Inline-Ereignis-Handler und `eval()`. Ersetzen Sie beispielsweise Inline-Ereignis-Handler durch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe innerhalb von Skripten.
5. Sofern Websites nicht die Möglichkeit benötigen, Einbettungen zu enthalten, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
6. Wenn Sie die Verwendung von `eval()` nicht entfernen können, können Sie das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) Schlüsselwort zu Ihrer strengen CSP hinzufügen, um sie zuzulassen, obwohl dies die CSP erheblich schwächt.
7. Wenn Sie die Verwendung von Ereignis-Handler-Attributen nicht entfernen können, können Sie das [`unsafe-hashes`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes) Schlüsselwort zu Ihrer strengen CSP hinzufügen, um sie zuzulassen. Dies ist etwas unsicher, aber viel sicherer als die Erlaubnis aller Inline-JavaScripts.

Wenn Sie keine strenge CSP zum Laufen bringen können, ist eine Positivlisten-basierte CSP viel besser als keine, und eine CSP wie `default-src https:` bietet dennoch einen gewissen Schutz, indem unsichere Inline-/`eval()`-Ausführungen deaktiviert werden und nur das Laden von Ressourcen (Bilder, Schriften, Skripte usw.) über HTTPS erlaubt wird.

> [!WARNING]
> Wenn möglich, vermeiden Sie es, unsichere Quellen in Ihrer CSP aufzunehmen. Beispiele beinhalten:
>
> - `unsafe-inline`.
> - `data:` URIs innerhalb von `script-src`, `object-src` oder `default-src`.
> - Zu breite Quellen oder Zieladressen für Formulareinsendungen.

Falls Sie den `Content-Security-Policy`-Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Element einschließen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokument {{htmlelement("head")}} erscheint.

### Nur-Bericht CSPs

Bevor Sie irgendeine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, sie zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header zu testen. Auf diese Weise können Sie sehen, ob mit dieser Richtlinie Verstöße aufgetreten wären.

Websites sollten die {{Glossary("Reporting_directive", "Berichts-Direktiven")}} [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) verwenden. Diese veranlassen den Browser, JSON-Berichte über CSP-Verstöße an Endpunkte zu [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST)en (wie im {{httpheader("Reporting-Endpoints")}} Header im Fall von `report-to` angegeben). Dadurch können CSP-Verstöße schnell erkannt und behoben werden.

> [!NOTE]
> Die `report-to` Direktive wird der veralteten `report-uri` Direktive vorgezogen. Beide sind jedoch weiterhin erforderlich, da `report-to` noch keine vollständige browserübergreifende Unterstützung hat.

## Siehe auch

- [Inhaltssicherheitsrichtlinie (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
