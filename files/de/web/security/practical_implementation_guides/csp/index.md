---
title: Implementierung der Content Security Policy (CSP)
slug: Web/Security/Practical_implementation_guides/CSP
l10n:
  sourceCommit: 565e9994d77d07b4059bed95e085478a4418bd51
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der HTTP-Header [`Content-Security-Policy`](/de/docs/Web/HTTP/Headers/Content-Security-Policy) bietet eine feingesteuerte Kontrolle über den Code, der auf einer Website geladen werden kann, und was ihm erlaubt ist zu tun.

## Problem

Das Hauptproblem, auf das sich dieser Artikel konzentriert, sind Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) Angriffe. Diese entstehen in der Regel durch mangelnde Kontrolle und Bewusstsein über die Quellen, aus denen Website-Ressourcen geladen werden. Dieses Problem wird schwieriger zu handhaben, je größer und komplexer Websites werden und je mehr sie auf Drittanbieterressourcen wie JavaScript-Bibliotheken angewiesen sind.

> [!NOTE]
> CSP ist ein Teil einer umfassenden Strategie zum Schutz vor XSS-Angriffen. Es gibt auch andere wichtige Faktoren, wie z. B. [Ausgabe-Kodierung](/de/docs/Web/Security/Attacks/XSS#output_encoding) und [Bereinigung](/de/docs/Web/Security/Attacks/XSS#sanitization).

CSP kann auch helfen, andere Probleme zu lösen, die in anderen Artikeln behandelt werden:

- [Verhinderung von Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking) durch Verhinderung, dass Ihre Seite in {{htmlelement("iframe")}}-Elemente eingebettet wird. Dies erfolgt durch die CSP-Direktive [`frame-ancestors`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors).
- Verhinderung von {{Glossary("MitM", "Manipulator-in-the-Middle")}} (MiTM) Angriffen durch Hochstufung aller HTTP-Verbindungen zu HTTPS. Dies wird unterstützt durch die CSP-Direktive [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors). Siehe [Hochstufen unsicherer Anfragen](/de/docs/Web/HTTP/CSP#upgrading_insecure_requests).

## Lösung

Die Implementierung einer [strengen CSP](/de/docs/Web/HTTP/CSP#strict_csp) ist der beste Weg, um XSS-Schwachstellen mit CSP zu minimieren. Dies nutzt [nonce-](/de/docs/Web/HTTP/CSP#nonces) oder [hash-](/de/docs/Web/HTTP/CSP#hashes)basierte Abrufdirektiven, um sicherzustellen, dass nur Skripte und/oder Stile ausgeführt werden, die das korrekte Nonce oder den Hash enthalten. JavaScript, das von einem Hacker eingefügt wird, wird einfach nicht ausgeführt.

Strenge CSPs deaktivieren auch:

- Die Nutzung von unsicherem [Inline-JavaScript](/de/docs/Web/HTTP/CSP#inline_javascript), was inline [Event-Handler-Attribute](/de/docs/Web/HTML/Attributes#event_handler_attributes) wie `onclick` bedeutet. Dies verhindert, dass unsachgemäß maskierte Benutzereingaben vom Webbrowser als JavaScript interpretiert werden.
- Die Nutzung von [riskanten API-Aufrufen wie `eval()`](/de/docs/Web/HTTP/CSP#eval_and_similar_apis), was eine weitere Wirkung der `script-src`-Direktive ist.
- Alle Objekt-Einbettungen über `object-src 'none'`.
- Die Nutzung des `<base>`-Elements zur Festlegung einer Basis-URI über `base-uri 'none';`.

Strenge CSPs werden bevorzugt gegenüber [standortbasierten](/de/docs/Web/HTTP/CSP#location-based_policies) Richtlinien, auch als Allowlist-Richtlinien bezeichnet, bei denen Sie angeben, von welchen Domains Skripte ausgeführt werden dürfen. Dies liegt daran, dass Allowlist-Richtlinien oft unsichere Domains zulassen, was den gesamten Sinn einer CSP zunichtemacht, und sie können sehr groß und unhandlich werden, insbesondere wenn Sie versuchen, Dienste zu erlauben, die viele Drittanbieter-Skripte erfordern.

### Schritte zur Implementierung von CSP

Implementieren Sie eine strenge CSP und beginnen Sie dann, die Ressourcen zu identifizieren, die aufgrund der Richtlinie nicht geladen werden können, und ergreifen Sie Maßnahmen, um diese Probleme zu umgehen.

> [!NOTE]
> Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird empfohlen, diese zuerst mit dem HTTP-Header [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only) zu testen; siehe [Nur-Bericht-CSPs](#nur-bericht-csps) unten.

1. Entscheiden Sie, ob Sie Nonces oder Hashes verwenden möchten. Sie sollten Nonces verwenden, wenn Sie Inhalte dynamisch generieren können, oder Hashes, wenn Sie statische Inhalte bereitstellen müssen.
2. Implementieren Sie eine strenge CSP, wie im Abschnitt [Lösung](#lösung) beschrieben. Stellen Sie sicher, dass externe und interne Skripte (eingefügt über {{htmlelement("script")}}-Elemente), die Sie ausführen möchten, das korrekte Nonce in den [`nonce`](/de/docs/Web/HTML/Element/script#nonce)-Attributen vom Server eingefügt haben. Wenn Sie stattdessen Hashes verwenden, sollten externe Skripte den korrekten Hash in den [`integrity`](/de/docs/Web/HTML/Element/script#integrity)-Attributen haben.
3. Wenn ein erlaubtes Skript Drittanbieter-Skripte lädt, werden diese Skripte nicht geladen, da sie nicht das erforderliche Nonce oder den Hash haben. Lösen Sie dieses Problem, indem Sie die Direktive [`strict-dynamic`](/de/docs/Web/HTTP/CSP#the_strict-dynamic_keyword) hinzufügen, die Skripten, die vom ersten Skript geladen werden, das gleiche Vertrauensniveau verleiht, ohne dass sie ausdrücklich mit einem Nonce oder Hash versehen werden.
4. Überarbeiten Sie Muster, die von der strengen CSP nicht erlaubt sind, wie z.B. Inline-Event-Handler und `eval()`. Ersetzen Sie beispielsweise Inline-Event-Handler durch Aufrufe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) innerhalb von Skripten.
5. Sofern Sites nicht die Möglichkeit zur Einbettung benötigen, sollte deren Ausführung mit `object-src 'none'` deaktiviert werden.
6. Wenn Sie die Verwendung von `eval()` nicht entfernen können, können Sie das [`unsafe-eval`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-eval)-Schlüsselwort zu Ihrer strengen CSP hinzufügen, um sie zu erlauben, obwohl dies die CSP erheblich schwächt.
7. Wenn Sie die Event-Handler-Attribute nicht entfernen können, können Sie das [`unsafe-hashes`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#unsafe-hashes)-Schlüsselwort zu Ihrer strengen CSP hinzufügen, um sie zu erlauben. Dies ist etwas unsicher, aber viel sicherer, als allen Inline-JavaScript zu erlauben.

Wenn Sie es nicht schaffen, eine strenge CSP zum Laufen zu bringen, ist eine auf Allowlist basierende CSP immer noch besser als keine, und eine CSP wie `default-src https:` bietet immer noch einen gewissen Schutz, indem unsicheres Inline/`eval()` deaktiviert wird und nur das Laden von Ressourcen (Bilder, Schriftarten, Skripte, etc.) über HTTPS erlaubt wird.

> [!WARNING]
> Wenn möglich, vermeiden Sie es, unsichere Quellen in Ihre CSP aufzunehmen. Zu den Beispielen gehören:
>
> - `unsafe-inline`.
> - `data:`-URIs innerhalb von `script-src`, `object-src` oder `default-src`.
> - Zu großzügige Quellen oder Ziele für Formulareinsendungen.

Wenn Sie den `Content-Security-Policy`-Header nicht verwenden können, können Seiten stattdessen ein [`<meta http-equiv="Content-Security-Policy" content="…">`](/de/docs/Web/HTML/Element/meta#http-equiv)-Element einfügen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das innerhalb des Dokuments {{htmlelement("head")}} erscheint.

### Nur-Bericht-CSPs

Bevor Sie eine tatsächliche CSP mit dem `Content-Security-Policy`-Header implementieren, wird geraten, diese zuerst mit dem HTTP-Header [`Content-Security-Policy-Report-Only`](/de/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only) zu testen. Dies ermöglicht es Ihnen zu sehen, ob Verstöße mit dieser Richtlinie aufgetreten wären.

Websites sollten die {{Glossary("Reporting_directive", "Berichterstattungsrichtlinien")}} [`report-to`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-to) und [`report-uri`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri) verwenden. Diese veranlassen den Browser, JSON-Berichte über CSP-Verstöße an Endpunkte zu [`POST`](/de/docs/Web/HTTP/Methods/POST) senden (angegeben im {{httpheader("Reporting-Endpoints")}}-Header im Fall von `report-to`). Dadurch können CSP-Verstöße schnell erfasst und behoben werden.

> [!NOTE]
> Die Direktive `report-to` wird gegenüber der veralteten Direktive `report-uri` bevorzugt. Beide werden jedoch noch benötigt, da `report-to` noch nicht über vollständige plattformübergreifende Unterstützung verfügt.

## Siehe auch

- [Content Security Policy (CSP)](/de/docs/Web/HTTP/CSP)
- [Cross-site scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)
- [CSP evaluator](https://csp-evaluator.withgoogle.com/)
