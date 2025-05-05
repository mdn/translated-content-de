---
title: Implementierung der Content Security Policy (CSP)
short-title: Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Der HTTP-Header [`Content-Security-Policy`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) bietet eine feingranulare Kontrolle über den Code, der auf einer Webseite geladen werden kann, und was damit gemacht werden darf.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese sind im Allgemeinen auf mangelnde Kontrolle und unzureichendes Bewusstsein für die Quellen zurückzuführen, von denen Ressourcen einer Website geladen werden. Dieses Problem wird schwieriger zu verwalten, da Websites größer und komplexer werden und zunehmend auf Ressourcen Dritter wie JavaScript-Bibliotheken angewiesen sind.

> [!NOTE]
> CSP ist ein Teil einer vollständigen Strategie zum Schutz vor XSS-Angriffen. Es gibt noch andere Faktoren, die berücksichtigt werden müssen, wie z. B. [Ausgabe-Encoding](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Bereinigung](/de/docs/Web/Security/Attacks/XSS#sanitization), die ebenfalls wichtig sind.

CSP kann auch helfen, andere Probleme zu lösen, die in anderen Artikeln behandelt werden:

- [Schutz vor Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking), indem Ihre Website daran gehindert wird, in {{htmlelement("iframe")}}-Elemente eingebettet zu werden. Dies geschieht mit der `frame-ancestors` Direktive von CSP.
- Vermeidung von {{Glossary("MitM", "Manipulator-in-the-Middle")}} (MiTM) Angriffen durch Upgrade von HTTP-Verbindungen auf HTTPS. Dies wird durch die `upgrade-insecure-requests` Direktive von CSP unterstützt. Siehe [Upgrade unsicherer Anfragen](/de/docs/Web/HTTP/Guides/CSP#upgrading_insecure_requests).

## Lösung

Die Implementierung einer [strikten CSP](/de/docs/Web/HTTP/Guides/CSP#strict_csp) ist der beste Weg, um XSS-Sicherheitslücken mit CSP zu mildern. Dazu werden auf [nonce-](/de/docs/Web/HTTP/Guides/CSP#nonces) oder [hash-](/de/docs/Web/HTTP/Guides/CSP#hashes) basierende Abrufdirektiven verwendet, um sicherzustellen, dass nur Skripte und/oder Stile ausgeführt werden, die die korrekte Nonce oder Hash enthalten. Von einem Hacker eingebrachter JavaScript-Code läuft einfach nicht.

Strikte CSPs:

- Deaktivieren die Verwendung von unsicherem [inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript), was bedeutet, dass Inline-Event-Handler-Attribute wie `onclick` nicht verwendet werden dürfen. Dies verhindert, dass falsch maskierte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Deaktivieren die Nutzung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/Guides/CSP#eval_and_similar_apis), was ebenfalls eine Wirkung der `script-src` Direktive ist.
- Deaktivieren alle Objekteinbettungen über `object-src 'none'`.
- Deaktivieren die Verwendung des `<base>` Elements zur Festlegung eines Basis-URIs über `base-uri 'none';`.

Strikte CSPs sind gegenüber [ortsabhängigen](/de/docs/Web/HTTP/Guides/CSP#location-based_policies) Richtlinien (auch als Positivlisten-Richtlinien bekannt) bevorzugt, bei denen Sie angeben, von welchen Domains Skripte ausgeführt werden können. Das liegt daran, dass Positivlisten-Richtlinien oft unsichere Domains zulassen, was den gesamten Zweck einer CSP zunichte macht. Sie können auch sehr groß und unhandlich werden, insbesondere wenn Sie Dienste erlauben möchten, die viele Drittanbieterskripte erfordern.

### Schritte zur Implementierung von CSP

Implementieren Sie eine strikte CSP und beginnen Sie dann, Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden, um Möglichkeiten zu finden, diese Probleme zu umgehen.

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy` Header implementieren, wird empfohlen, sie zunächst mit dem HTTP-Header [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) zu testen. Siehe [Nur-Berichte-CSPs](#nur-berichte-csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden möchten. Nonces sollten verwendet werden, wenn Sie Inhalte dynamisch generieren können, Hashes, wenn Sie statische Inhalte bereitstellen müssen.
2. Implementieren Sie eine strikte CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (eingebunden über {{htmlelement("script")}} Elemente), die Sie ausführen möchten, die korrekte Nonce vom Server in die [`nonce`](/de/docs/Web/HTML/Reference/Elements/script#nonce) Attribute eingefügt bekommen. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den korrekten Hash in [`integrity`](/de/docs/Web/HTML/Reference/Elements/script#integrity) Attribute eingefügt haben.
3. Wenn ein erlaubtes Skript weiter Drittanbieterskripte lädt, schlagen diese fehl, da sie die erforderliche Nonce oder Hash nicht haben. Mildern Sie dieses Problem, indem Sie die [`strict-dynamic`](/de/docs/Web/HTTP/Guides/CSP#the_strict-dynamic_keyword) Direktive hinzufügen, die Skripten, die vom ersten Skript geladen werden, das gleiche Vertrauensniveau gibt, ohne explizit eine Nonce oder Hash zu benötigen.
4. Überarbeiten Sie Muster, die durch die strikte CSP nicht erlaubt sind, wie Inline-Event-Handler und `eval()`. Ersetzen Sie beispielsweise Inline-Event-Handler durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) innerhalb von Skripten.
5. Sofern Websites die Möglichkeit, Einbettungen einzuschließen, nicht benötigen, sollte ihre Ausführung mit `object-src 'none'` deaktiviert werden.
6. Wenn Sie die Verwendung von `eval()` nicht entfernen können, können Sie das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) Schlüsselwort zu Ihrer strikten CSP hinzufügen, um sie zu erlauben, obwohl dies die CSP erheblich schwächt.
7. Wenn Sie die Event-Handler-Attribute nicht entfernen können, können Sie das [`unsafe-hashes`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-hashes) Schlüsselwort zu Ihrer strikten CSP hinzufügen, um sie zu erlauben. Dies ist etwas unsicher, aber wesentlich sicherer, als alle Inline-JavaScripts zuzulassen.

Wenn es Ihnen nicht gelingt, eine strikte CSP zum Laufen zu bringen, ist eine auf Positivlisten basierende CSP viel besser als keine, und eine CSP wie `default-src https:` bietet immer noch etwas Schutz, indem sie unsichere Inline/`eval()` deaktiviert und nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte usw.) über HTTPS erlaubt.

> [!WARNING]
> Vermeiden Sie es nach Möglichkeit, unsichere Quellen in Ihre CSP aufzunehmen. Beispiele sind:
>
> - `unsafe-inline`.
> - `data:` URIs innerhalb von `script-src`, `object-src`, oder `default-src`.
> - Zu breite Quellen oder Zielorte für Formulareinreichungen.

Wenn Sie den `Content-Security-Policy` Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv) Element enthalten. Dies sollte das erste {{htmlelement("meta")}} Element sein, das innerhalb des Dokuments im {{htmlelement("head")}} erscheint.

### Nur-Berichte-CSPs

Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy` Header implementieren, wird empfohlen, sie zunächst mit dem HTTP-Header [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy-Report-Only) zu testen. Dadurch können Sie sehen, ob es mit dieser Richtlinie zu Verstößen gekommen wäre.

Webseiten sollten die {{Glossary("Reporting_directive", "Berichtsdirektiven")}} [`report-to`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri) verwenden. Diese veranlassen den Browser, JSON-Berichte über CSP-Verstöße an Endpunkte zu senden (wie im {{httpheader("Reporting-Endpoints")}} Header im Fall von `report-to` angegeben). Dadurch können CSP-Verstöße schnell erkannt und behoben werden.

> [!NOTE]
> Die `report-to` Direktive wird der veralteten `report-uri` Direktive vorgezogen. Beide werden jedoch noch benötigt, da `report-to` noch keine vollständige Unterstützung in allen Browsern hat.

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP)
- [Cross-Site Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
