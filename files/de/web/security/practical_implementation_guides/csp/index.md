---
title: Implementierung der Content-Security-Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) HTTP-Header bietet eine feingranulare Kontrolle darüber, welcher Code auf einer Website geladen werden kann und welche Aktionen erlaubt sind.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese entstehen in der Regel aufgrund eines Mangels an Kontrolle und Bewusstsein über die Quellen, von denen Website-Ressourcen geladen werden. Dieses Problem wird schwieriger zu managen, wenn Websites größer und komplexer werden und zunehmend auf Ressourcen Dritter wie JavaScript-Bibliotheken angewiesen sind.

> [!NOTE]
> CSP ist ein Teil einer vollständigen Strategie zum Schutz vor XSS-Angriffen. Es gibt weitere Faktoren, wie z.B. [Ausgabe-Codierung](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Bereinigung](/de/docs/Web/Security/Attacks/XSS#sanitization), die ebenfalls wichtig sind.

CSP kann auch helfen, andere Probleme zu beheben, die in anderen Artikeln behandelt werden:

- [Verhinderung von Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking), indem Ihre Website daran gehindert wird, in {{htmlelement("iframe")}}-Elemente eingebettet zu werden. Dies wird mithilfe der `frame-ancestors`-Richtlinie von CSP erreicht.
- Verhinderung von {{Glossary("MitM", "Manipulator-in-the-middle")}} (MiTM)-Angriffen, indem alle HTTP-Verbindungen auf HTTPS umgestellt werden. Dies wird durch die `upgrade-insecure-requests`-Richtlinie von CSP unterstützt. Siehe [Umstellung unsicherer Anfragen](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests).

## Lösung

Die Implementierung einer [strikten CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp) ist der beste Weg, um XSS-Schwachstellen mit CSP zu mindern. Dies nutzt [nonce-](/de/docs/Web/HTTP/Guides/CSP#nonces) oder [hash-basierte](/de/docs/Web/HTTP/Guides/CSP#hashes) Fetch-Richtlinien, um sicherzustellen, dass nur Skripte und/oder Styles, die die korrekte Nonce oder den korrekten Hash enthalten, ausgeführt werden. In JavaScript von Angreifern eingefügte Codes werden einfach nicht ausgeführt.

Strikte CSPs:

- Deaktivieren die Verwendung von unsicherem [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript), was bedeutet, dass Inline-Event-Handler-Attribute wie `onclick` nicht verwendet werden. Dies verhindert, dass falsch entschlüsselte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Deaktivieren die Verwendung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis), was ein weiterer Effekt der `script-src`-Richtlinie ist.
- Deaktivieren das Einbetten von Objekten über `object-src 'none'`.
- Deaktivieren die Verwendung des `<base>`-Elements zur Festlegung einer Basis-URI über `base-uri 'none';`.

Strikte CSPs werden gegenüber [standortbasierten](/de/docs/Web/HTTP/Guides/CSP#location-based_policies) Richtlinien, auch bekannt als Erlaubnislisten-Richtlinien, bevorzugt, bei denen Sie angeben, von welchen Domains Skripte ausgeführt werden können. Erlaubnislisten-Richtlinien erlauben häufig unsichere Domains, was den gesamten Zweck einer CSP konterkariert. Sie können sehr groß und unhandlich werden, insbesondere wenn Sie versuchen, Dienste zuzulassen, die viele Drittanbieter-Skripte erfordern.

### Schritte zur Implementierung von CSP

Implementieren Sie eine strikte CSP und beginnen Sie dann, Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden können, und ergreifen Sie Maßnahmen, um diese Probleme zu umgehen.

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, sollten Sie diese zuerst mit dem [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) HTTP-Header testen; siehe [Nur-Reporting-CSPs](#nur-reporting-csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden. Sie sollten Nonces verwenden, wenn Sie Inhalte dynamisch generieren können, oder Hashes, wenn Sie statische Inhalte bereitstellen müssen.
2. Implementieren Sie eine strikte CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (eingeschlossen über {{htmlelement("script")}}-Elemente), die Sie ausführen möchten, die korrekte Nonce in den `nonce`-Attributen vom Server eingefügt haben. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den korrekten Hash in die `integrity`-Attribute eingefügt haben.
3. Wenn ein erlaubtes Skript daraufhin Drittanbieter-Skripte lädt, werden diese Skripte nicht geladen, da sie nicht die erforderliche Nonce oder den erforderlichen Hash haben. Lösen Sie dieses Problem, indem Sie die `strict-dynamic`-Richtlinie hinzufügen, die Skripten, die vom ersten Skript geladen wurden, dasselbe Vertrauensniveau gibt, ohne explizit eine Nonce oder einen Hash zu erhalten.
4. Überarbeiten Sie Muster, die in der strikten CSP nicht erlaubt sind, wie z.B. Inline-Event-Handler und `eval()`. Ersetzen Sie beispielsweise Inline-Event-Handler durch `addEventListener()`-Aufrufe innerhalb von Skripten.
5. Sofern Websites nicht die Fähigkeit benötigen, Einbindungen zu enthalten, sollten deren Ausführungen mit `object-src 'none'` deaktiviert werden.
6. Wenn Sie die Verwendung von `eval()` nicht entfernen können, können Sie das `unsafe-eval`-Schlüsselwort zu Ihrer strikten CSP hinzufügen, um sie zuzulassen, obwohl dies die CSP erheblich schwächt.
7. Wenn Sie die Event-Handler-Attribute nicht entfernen können, können Sie das `unsafe-hashes`-Schlüsselwort zu Ihrer strikten CSP hinzufügen, um sie zuzulassen. Dies ist etwas unsicher, aber viel sicherer als die Erlaubnis aller Inline-JavaScripts.

Wenn Sie eine strikte CSP nicht zum Laufen bringen, ist eine erlaubnislistenbasierte CSP viel besser als keine, und eine CSP wie `default-src https:` bietet immer noch einen gewissen Schutz, bei dem unsicheres Inline/`eval()` deaktiviert und nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) über HTTPS zulässt.

> [!WARNING]
> Vermeiden Sie nach Möglichkeit die Aufnahme unsicherer Quellen in Ihre CSP. Zu den Beispielen gehören:
>
> - `unsafe-inline`.
> - `data:`-URIs innerhalb von `script-src`, `object-src` oder `default-src`.
> - Allzu breite Quellen oder Zielvorgaben für das Absenden von Formularen.

Wenn Sie den `Content-Security-Policy`-Header nicht verwenden können, können stattdessen Seiten ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Element/meta#http-equiv) Element enthalten. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokument {{htmlelement("head")}} erscheint.

### Nur-Reporting-CSPs

Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, sollten Sie diese zuerst mit dem `Content-Security-Policy-Report-Only` HTTP-Header testen. Dies ermöglicht es Ihnen, zu sehen, ob Verstöße gegen diese Richtlinie aufgetreten wären.

Websites sollten die {{Glossary("Reporting_directive", "Berichterstattungsrichtlinien")}} `report-to` und `report-uri` verwenden. Diese veranlassen den Browser, JSON-Berichte über CSP-Verletzungen an Endpunkte zu [`POST`](/de/docs/Web/HTTP/Reference/Methods/POST), die im Header {{httpheader("Reporting-Endpoints")}} im Fall von `{report-to}/{report-uri}` angegeben sind. Dies ermöglicht es, CSP-Verletzungen schnell zu erfassen und zu beheben.

> [!NOTE]
> Die `report-to`-Richtlinie wird gegenüber der veralteten `report-uri`-Richtlinie bevorzugt. Beide werden jedoch noch benötigt, da `report-to` noch keine vollständige plattformübergreifende Browserunterstützung hat.

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
