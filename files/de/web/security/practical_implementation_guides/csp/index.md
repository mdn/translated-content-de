---
title: Implementierung der Content Security Policy (CSP)
short-title: Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: 86fa532a00024e7c85a4c0d6339adce8b1bd9f61
---

Der HTTP-Header [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) bietet eine feinkörnige Kontrolle über den Code, der auf einer Website geladen werden kann, und darüber, was er tun darf.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting-({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese entstehen in der Regel aufgrund eines Mangels an Kontrolle und Bewusstsein über die Quellen, von denen Site-Ressourcen geladen werden. Dieses Problem wird schwieriger zu verwalten, wenn Sites größer und komplexer werden und zunehmend auf Drittanbieter-Ressourcen wie JavaScript-Bibliotheken angewiesen sind.

> [!NOTE]
> CSP ist ein Teil einer umfassenden Strategie zum Schutz vor XSS-Angriffen. Es gibt andere Faktoren, wie z.B. [Ausgabeencoding](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Bereinigung](/de/docs/Web/Security/Attacks/XSS#sanitization), die ebenfalls wichtig sind.

CSP kann auch helfen, andere Probleme zu lösen, die in anderen Artikeln behandelt werden:

- Verhinderung von [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking) durch das Verhindern, dass Ihre Website in {{htmlelement("iframe")}}-Elemente eingebettet wird. Dies geschieht mithilfe der CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors).
- Verhinderung von [Manipulator-in-the-Middle](/de/docs/Web/Security/Attacks/MITM)-(MiTM) Angriffen durch das Upgrade von HTTP-Verbindungen auf HTTPS. Dabei hilft die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests). Siehe [Upgrading insecure requests](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests).

## Lösung

Die Implementierung einer [strikten CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp) ist der beste Weg, um XSS-Schwachstellen mit CSP zu mindern. Diese verwendet auf [Nonce-](/de/docs/Web/HTTP/Guides/CSP#nonces) oder [Hash-](/de/docs/Web/HTTP/Guides/CSP#hashes)basierende Fetch-Direktiven, um sicherzustellen, dass nur Skripte und/oder Styles, die das richtige Nonce oder den richtigen Hash enthalten, ausgeführt werden. Von einem Hacker eingefügtes JavaScript wird einfach nicht ausgeführt.

Strikte CSPs:

- Deaktivieren die Verwendung von unsicherem [inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript), d.h. inline [Event-Handler-Attribute](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) wie `onclick`. Dies verhindert, dass nicht ordnungsgemäß entschärfte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Deaktivieren die Nutzung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis), was ein weiterer Effekt der `script-src` Direktive ist.
- Deaktivieren alle Objekt-Einbettungen über `object-src 'none'`.
- Deaktivieren die Nutzung des `<base>`-Elements zur Einstellung einer Basis-URI über `base-uri 'none';`.

Strikte CSPs werden gegenüber [standortbasierten](/de/docs/Web/HTTP/Guides/CSP#location-based_policies) Richtlinien, auch Allowlist-Politiken genannt, bevorzugt, bei denen Sie festlegen, von welchen Domains Skripte ausgeführt werden können. Der Grund dafür ist, dass Allowlist-Politiken häufig unsichere Domains zulassen, was den gesamten Zweck einer CSP zunichtemacht. Außerdem können sie sehr groß und unhandlich werden, insbesondere wenn Sie versuchen, Dienste zu erlauben, die viele Drittanbieter-Skripte benötigen, um zu funktionieren.

### Schritte zur Implementierung einer CSP

Implementieren Sie eine strikte CSP und beginnen Sie dann, Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden, und ergreifen Sie Maßnahmen, um diese Probleme zu umgehen.

> [!NOTE]
> Bevor eine tatsächliche CSP mit dem `Content-Security-Policy` Header implementiert wird, sollten Sie sie zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header testen; siehe [Report-only CSPs](#report-only_csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden möchten. Sie sollten Nonces verwenden, wenn Sie Inhalte dynamisch generieren können, oder Hashes, wenn Sie statischen Inhalt bereitstellen müssen.
2. Implementieren Sie eine strikte CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (eingebunden über {{htmlelement("script")}}-Elemente), die Sie ausführen möchten, das korrekte Nonce in den [`nonce`](/de/docs/Web/HTML/Reference/Elements/script#nonce) Attributen vom Server eingefügt haben. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den korrekten Hash in den [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attributen eingefügt haben.
3. Wenn ein zugelassenes Skript weiter andere Drittanbieter-Skripte lädt, werden diese Skripte nicht geladen, da ihnen das erforderliche Nonce oder der Hash fehlt. Mildern Sie dieses Problem, indem Sie die [`strict-dynamic`](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword)-Direktive hinzufügen, die Skripten, die vom ersten Skript geladen werden, dasselbe Vertrauensniveau gibt, ohne dass ihnen explizit ein Nonce oder Hash gegeben wird.
4. Überarbeiten Sie Muster, die von der strikten CSP nicht erlaubt sind, wie Inline-Event-Handler und `eval()`. Ersetzen Sie beispielsweise Inline-Event-Handler durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) innerhalb von Skripten.
5. Wenn Sites nicht die Möglichkeit benötigen, Einbettungen einzuschließen, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
6. Wenn Sie die Verwendung von `eval()` nicht entfernen können, können Sie das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval)-Schlüsselwort zu Ihrer strikten CSP hinzufügen, um sie zu erlauben, auch wenn dies die CSP erheblich schwächer macht.
7. Wenn Sie Event-Handler-Attribute nicht entfernen können, können Sie das [`unsafe-hashes`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)-Schlüsselwort zu Ihrer strikten CSP hinzufügen, um sie zu erlauben. Dies ist etwas unsicher, jedoch viel sicherer, als alle Inline-JavaScripts zu erlauben.

Wenn Sie eine strikte CSP nicht zum Laufen bringen, ist eine auf Allowlist-basierende CSP viel besser als keine, und eine CSP wie `default-src https:` bietet immer noch etwas Schutz, indem sie unsicheres Inline/`eval()` deaktiviert und nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) über HTTPS ermöglicht.

> [!WARNING]
> Vermeiden Sie nach Möglichkeit, unsichere Quellen in Ihre CSP aufzunehmen. Beispiele beinhalten:
>
> - `unsafe-inline`.
> - `data:` URIs innerhalb von `script-src`, `object-src` oder `default-src`.
> - Zu breite Quellen oder Formulareinsendeziele.

Wenn Sie den `Content-Security-Policy` Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv) Element einschließen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokument {{htmlelement("head")}} erscheint.

### Report-only CSPs

Bevor jegliche tatsächliche CSP mit dem `Content-Security-Policy` Header implementiert wird, wird empfohlen, sie zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header zu testen. Auf diese Weise können Sie sehen, ob Verstöße mit dieser Richtlinie aufgetreten wären.

Sites sollten die [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) {{Glossary("Reporting_directive", "Berichtsrichtlinien")}} verwenden. Diese veranlassen den Browser, JSON-Berichte über CSP-Verstöße an Endpunkte zu [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST) zu senden (die im {{httpheader("Reporting-Endpoints")}} Header im Falle von `report-to` angegeben sind). Dadurch können CSP-Verstöße schnell erkannt und behoben werden.

> [!NOTE]
> Die `report-to` Direktive wird gegenüber der veralteten `report-uri` Direktive bevorzugt. Allerdings werden beide immer noch benötigt, da `report-to` noch keine vollständige plattformübergreifende Browserunterstützung hat.

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
