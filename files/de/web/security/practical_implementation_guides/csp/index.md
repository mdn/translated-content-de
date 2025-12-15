---
title: Implementierung der Content Security Policy (CSP)
short-title: Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

Der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) HTTP-Header bietet eine detaillierte Kontrolle über den Code, der auf einer Website geladen werden kann, und was damit gemacht werden darf.

## Problem

Das Hauptproblem, auf das dieser Artikel abzielt, sind Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese resultieren im Allgemeinen aus einem Mangel an Kontrolle und Bewusstsein über die Quellen, aus denen Website-Ressourcen geladen werden. Dieses Problem wird schwerer zu handhaben, je größer und komplexer Websites werden und immer mehr auf Drittpartei-Ressourcen wie JavaScript-Bibliotheken angewiesen sind.

> [!NOTE]
> CSP ist ein Teil einer umfassenden Strategie zum Schutz vor XSS-Angriffen. Es gibt noch andere Faktoren, wie [Ausgabe-Codierung](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Bereinigung](/de/docs/Web/Security/Attacks/XSS#sanitization), die ebenfalls wichtig sind.

CSP kann auch helfen, andere Probleme zu beheben, die in anderen Artikeln behandelt werden:

- Verhindern von [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) indem verhindert wird, dass Ihre Website in {{htmlelement("iframe")}}-Elemente eingebettet wird. Dies geschieht mithilfe der CSP-Richtlinie [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors).
- Verhindern von [Man-in-the-Middle](/de/docs/Web/Security/Attacks/MITM) (MiTM) Angriffen durch das Upgrade jeglicher HTTP-Verbindungen auf HTTPS. Dies wird durch die CSP-Richtlinie [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) unterstützt. Siehe [Upgrading insecure requests](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests).

## Lösung

Die Implementierung einer [strikten CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp) ist der beste Weg, um XSS-Schwachstellen mit CSP zu mildern. Dies verwendet nonce- oder hashbasierte Abrufrichtlinien, um sicherzustellen, dass nur Skripte und/oder Stile ausgeführt werden, die das korrekte {{Glossary("Nonce", "Nonce")}} oder den korrekten Hash enthalten. JavaScript, das von einem Hacker eingefügt wird, läuft einfach nicht.

Strikte CSPs:

- Deaktivieren die Verwendung von unsicherem [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript), das heißt Inline-[Ereignishandler-Attribute](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) wie `onclick`. Dies verhindert, dass nicht ordnungsgemäß maskierte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Deaktivieren die Verwendung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis), was ein weiterer Effekt der `script-src`-Richtlinie ist.
- Deaktivieren das Einbetten aller Objekte über `object-src 'none'`.
- Verhindern die Verwendung des `<base>`-Elements zur Setzung einer Basis-URI über `base-uri 'none';`.

Strikte CSPs werden gegenüber [standortbasierten](/de/docs/Web/HTTP/Guides/CSP#location-based_policies) Richtlinien, auch Erlaubnislistenrichtlinien genannt, bevorzugt, bei denen Sie angeben, von welchen Domains Skripte ausgeführt werden dürfen. Erlaubnislistenrichtlinien erlauben oft unsichere Domains, wodurch der gesamte Zweck einer CSP zunichtegemacht wird, und sie können sehr groß und unhandlich werden, besonders wenn Sie versuchen, Dienste zu erlauben, die viele Drittanbieter-Skripte benötigen.

### Schritte zur Implementierung von CSP

Implementieren Sie eine strikte CSP und beginnen Sie dann, Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden können, und ergreifen Sie Maßnahmen, um diese Probleme zu umgehen.

> [!NOTE]
> Bevor Sie irgendeine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, diese zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header zu testen; siehe [Bericht-only CSPs](#bericht-only_csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden möchten. Sie sollten Nonces verwenden, wenn Sie Inhalte dynamisch generieren können, oder Hashes, wenn Sie statische Inhalte bereitstellen müssen.
2. Implementieren Sie eine strikte CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (eingeschlossen über {{htmlelement("script")}}-Elemente), die Sie ausführen möchten, die korrekte Nonce in die [`nonce`](/de/docs/Web/HTML/Reference/Elements/script#nonce)-Attribute vom Server eingefügt haben. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den korrekten Hash im [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribut haben.
3. Wenn ein erlaubtes Skript Drittanbieter-Skripte lädt, werden diese Skripte nicht geladen, da ihnen die erforderliche Nonce oder der Hash fehlt. Beheben Sie dieses Problem, indem Sie die [`strict-dynamic`](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword)-Richtlinie hinzufügen, die Skripte, die vom ersten Skript geladen werden, ohne explizit eine Nonce oder einen Hash zu erhalten, dasselbe Vertrauensniveau gibt.
4. Überarbeiten Sie Muster, die durch die strikte CSP nicht erlaubt sind, wie Inline-Ereignishandler und `eval()`. Ersetzen Sie zum Beispiel Inline-Ereignishandler mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufen innerhalb von Skripten.
5. Sofern Websites nicht die Fähigkeit benötigen, Einbettungen einzuschließen, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
6. Wenn es Ihnen nicht möglich ist, die Verwendung von `eval()` zu entfernen, können Sie das Schlüsselwort [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) zu Ihrer strikten CSP hinzufügen, um diese zu erlauben, obwohl dies die CSP erheblich schwächt.
7. Wenn es Ihnen nicht möglich ist, Ereignishandler-Attribute zu entfernen, können Sie das Schlüsselwort [`unsafe-hashes`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes) zu Ihrer strikten CSP hinzufügen, um diese zu erlauben. Dies ist etwas unsicher, aber viel sicherer als alle Inline-JavaScript zu erlauben.

Wenn Sie es nicht schaffen, eine strikte CSP zum Funktionieren zu bringen, ist eine erlaubnisbasierte CSP viel besser als keine, und eine CSP wie `default-src https:` bietet trotzdem einen gewissen Schutz, indem unsicheres Inline/`eval()` deaktiviert wird und nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte, etc.) über HTTPS erlaubt wird.

> [!WARNING]
> Wenn irgendwie möglich, vermeiden Sie es, unsichere Quellen in Ihre CSP einzuschließen. Beispiele beinhalten:
>
> - `unsafe-inline`.
> - `data:` URIs innerhalb von `script-src`, `object-src` oder `default-src`.
> - Übermäßig breite Quellen oder Ziele für Formularübermittlungen.

Wenn Sie den `Content-Security-Policy`-Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv)-Element einschließen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im {{htmlelement("head")}} des Dokuments erscheint.

### Bericht-only CSPs

Bevor Sie irgendeine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, diese zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header zu testen. Dies ermöglicht es Ihnen zu sehen, ob irgendwelche Verstöße mit dieser Richtlinie aufgetreten wären.

Websites sollten die {{Glossary("Reporting_directive", "Berichterstattungsrichtlinien")}} [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) verwenden. Diese bewirken, dass der Browser JSON-Berichte über CSP-Verstöße an Endpunkte [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST), die im {{httpheader("Reporting-Endpoints")}}-Header im Fall von `report-to` angegeben sind, sendet. Dies ermöglicht es, CSP-Verstöße schnell zu erkennen und zu beheben.

> [!NOTE]
> Die `report-to`-Richtlinie wird gegenüber der veralteten `report-uri`-Richtlinie bevorzugt. Beide sind jedoch immer noch nötig, da `report-to` noch keine vollständige browserübergreifende Unterstützung hat.

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP-Evaluator](https://csp-evaluator.withgoogle.com/)
