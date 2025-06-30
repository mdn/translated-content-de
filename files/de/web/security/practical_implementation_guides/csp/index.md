---
title: Umsetzung der Content Security Policy (CSP)
short-title: Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: a33c2c8081a1df867a0a334afc560057b2124bad
---

Der HTTP-Header [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) bietet eine feingranulare Kontrolle über den Code, der auf einer Website geladen werden kann, und was er tun darf.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting-Angriffe ({{Glossary("Cross-site_scripting", "XSS")}}). Diese entstehen in der Regel durch mangelnde Kontrolle und Bewusstsein über die Quellen, aus denen Site-Ressourcen geladen werden. Dieses Problem wird schwieriger zu handhaben, da Websites größer und komplexer werden und zunehmend auf Drittanbieter-Ressourcen wie JavaScript-Bibliotheken angewiesen sind.

> [!NOTE]
> CSP ist ein Teil einer vollständigen Strategie zum Schutz vor XSS-Angriffen. Es gibt weitere Faktoren, wie z. B. [Ausgabe-Codierung](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Sanitisierung](/de/docs/Web/Security/Attacks/XSS#sanitization), die ebenfalls wichtig sind.

CSP kann auch helfen, andere Probleme zu beheben, die in anderen Artikeln behandelt werden:

- Verhinderung von [Clickjacking](/de/docs/Web/Security/Attacks/Clickjacking), indem verhindert wird, dass Ihre Seite in {{htmlelement("iframe")}}-Elemente eingebettet wird. Dies wird durch die CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors) erreicht.
- Verhinderung von [Manipulator-in-the-Middle](/de/docs/Web/Security/Attacks/MITM) (MiTM)-Angriffen durch Upgrade aller HTTP-Verbindungen auf HTTPS. Dies wird durch die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) unterstützt. Siehe [Upgrade unsicherer Anfragen](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests).

## Lösung

Die Implementierung einer [strikten CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp) ist der beste Weg, um XSS-Schwachstellen mit CSP zu mindern. Diese verwendet [nonce-](/de/docs/Web/HTTP/Guides/CSP#nonces) oder [hash-](/de/docs/Web/HTTP/Guides/CSP#hashes)basierte Abruf-Direktiven, um sicherzustellen, dass nur Skripte und/oder Stile, die den korrekten Nonce oder Hash enthalten, ausgeführt werden. Von einem Hacker eingefügtes JavaScript wird einfach nicht ausgeführt.

Strikte CSPs:

- Deaktivieren die Nutzung von unsicherem [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript), was bedeutet, dass Inline-[Ereignis-Handler-Attribute](/de/docs/Web/HTML/Reference/Attributes#event_handler_attributes) wie `onclick` nicht erlaubt sind. Dies verhindert, dass unsachgemäß eskapierte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Deaktivieren die Nutzung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis), was ein weiterer Effekt der `script-src`-Direktive ist.
- Deaktivieren alle Object-Embeds via `object-src 'none'`.
- Deaktivieren die Nutzung des `<base>`-Elements zur Festlegung einer Basis-URI via `base-uri 'none';`.

Strikte CSPs sind gegenüber [standortbasierten](/de/docs/Web/HTTP/Guides/CSP#location-based_policies) Richtlinien, auch Whitelist-Richtlinien genannt, zu bevorzugen, bei denen Sie angeben, von welchen Domains Skripte ausgeführt werden können. Dies liegt daran, dass Whitelist-Richtlinien häufig unsichere Domains zulassen, was den gesamten Zweck einer CSP zunichte macht, und sie können sehr groß und unhandlich werden, insbesondere wenn Sie versuchen, Dienste zu erlauben, die viele Drittanbieter-Skripte benötigen, um zu funktionieren.

### Schritte zur Implementierung der CSP

Implementieren Sie eine strikte CSP und beginnen Sie dann, Ressourcen zu identifizieren, die aufgrund dieser Richtlinie nicht geladen werden, und ergreifen Sie Maßnahmen, um diese Probleme zu umgehen.

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, sollten Sie diese zunächst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header testen; siehe [Nur-Bericht-CSPs](#nur-bericht-csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden. Sie sollten Nonces verwenden, wenn Sie Inhalte dynamisch generieren oder Hashes, wenn Sie statische Inhalte bereitstellen müssen.
2. Implementieren Sie eine strikte CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (eingebunden durch {{htmlelement("script")}}-Elemente), die Sie ausführen möchten, den korrekten Nonce in die [`nonce`](/de/docs/Web/HTML/Reference/Elements/script#nonce)-Attribute enthalten, die vom Server eingefügt werden. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den korrekten Hash in [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity)-Attribute eingefügt haben.
3. Wenn ein zugelassenes Skript weitere Drittanbieter-Skripte lädt, können diese Skripte nicht geladen werden, da sie nicht über den erforderlichen Nonce oder Hash verfügen. Dieses Problem lässt sich durch das Hinzufügen der [`strict-dynamic`](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword)-Direktive entschärfen, die Skripten, die vom ersten Skript geladen werden, dasselbe Vertrauensniveau gewährt, ohne dass ihnen explizit ein Nonce oder Hash gegeben wird.
4. Überarbeiten Sie Muster, die durch die strikte CSP nicht erlaubt sind, wie z.B. Inline-Ereignishandler und `eval()`. Ersetzen Sie beispielsweise Inline-Ereignishandler durch [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Aufrufe innerhalb von Skripten.
5. Es sei denn, Websites benötigen die Möglichkeit, Embeds einzuschließen, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
6. Wenn es Ihnen nicht möglich ist, die Nutzung von `eval()` zu entfernen, können Sie das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval)-Keyword zu Ihrer strikten CSP hinzufügen, um sie zu erlauben, auch wenn dies die CSP erheblich schwächt.
7. Wenn Sie Ereignis-Handler-Attribute nicht entfernen können, können Sie das [`unsafe-hashes`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes)-Keyword zu Ihrer strikten CSP hinzufügen, um sie zu erlauben. Dies ist zwar etwas unsicher, aber sicherer als alle Inline-JavaScript zuzulassen.

Wenn Sie keine strikte CSP implementieren können, ist eine Whitelist-basierte CSP viel besser als keine, und eine CSP wie `default-src https:` bietet immer noch einen gewissen Schutz, indem unsicheres Inline/`eval()` deaktiviert wird und das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) nur über HTTPS erlaubt wird.

> [!WARNING]
> Vermeiden Sie nach Möglichkeit die Einbeziehung unsicherer Quellen in Ihre CSP. Beispiele umfassen:
>
> - `unsafe-inline`.
> - `data:`-URIs in `script-src`, `object-src` oder `default-src`.
> - Zu breite Quellen oder Zielseiten für Formularübermittlungen.

Wenn Sie den `Content-Security-Policy`-Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Element einschließen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das in den Dokumenten-{{htmlelement("head")}} aufgenommen wird.

### Nur-Bericht-CSPs

Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, sollten Sie diese zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header testen. Dies ermöglicht es Ihnen zu sehen, ob Verstöße gegen diese Richtlinie vorgekommen wären.

Websites sollten die {{Glossary("Reporting_directive", "Berichts-Direktiven")}} [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) verwenden. Diese veranlassen den Browser, JSON-Berichte über CSP-Verstöße an Endpunkte zu senden (angegeben im {{httpheader("Reporting-Endpoints")}}-Header im Fall von `report-to`). Dies ermöglicht es, CSP-Verstöße schnell zu erfassen und zu beheben.

> [!NOTE]
> Die `report-to`-Direktive wird der veralteten `report-uri`-Direktive vorgezogen. Beide sind jedoch noch erforderlich, da `report-to` noch keine vollständige Unterstützung in allen Browsern hat.

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Cross-site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
