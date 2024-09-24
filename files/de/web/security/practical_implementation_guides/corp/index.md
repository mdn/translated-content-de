---
title: Implementierung der Cross-Origin Resource Policy (CORP)
slug: Web/Security/Practical_implementation_guides/CORP
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Cross-Origin Resource Policy (CORP) wird durch den {{httpheader("Cross-Origin-Resource-Policy")}} Antwort-Header festgelegt, der es Websites und Anwendungen ermöglicht, sich gegen Schwachstellen bei bestimmten Cross-Origin-Anfragen zu schützen (wie jene, die durch {{htmlelement("script")}} und {{htmlelement("img")}} Elemente gemacht werden).

## Problem

Einige Side-Channel-Hardware-Schwachstellen (auch bekannt als Cross-site Leaks oder XS-Leaks), wie [Meltdown](<https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)>) und [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), nutzen eine Race-Condition, die im Rahmen der spekulativen Ausführungsfunktion moderner Prozessoren entsteht. Diese Funktionalität ist darauf ausgelegt, die Leistung zu verbessern, kann jedoch manipuliert werden, um sensible Daten offenzulegen.

## Lösung

Verwenden Sie `Cross-Origin-Resource-Policy`, um [`no-cors`](/de/docs/Web/API/RequestInit#mode) Cross-Origin-Anfragen an bestimmte Ressourcen zu blockieren. Da diese Richtlinie über einen Antwort-Header ausgedrückt wird, wird die tatsächliche Anfrage nicht verhindert. Stattdessen verhindert der Browser, dass das Ergebnis offengelegt wird, indem er den Antwortinhalt ausblendet.

Die möglichen Werte sind:

- `same-origin`
  - : Beschränkt den Ressourcenzugriff auf Anfragen, die vom selben Ursprung kommen. Dies wird für URLs empfohlen, die mit sensiblen Benutzerinformationen oder privaten APIs antworten.
- `same-site`
  - : Beschränkt den Ressourcenzugriff auf Anfragen, die von der gleichen Website kommen. Dies wird für Antworten von Ursprüngen empfohlen, deren Funktionalität über mehrere andere Ursprünge derselben Site geteilt wird. Beispiele sind ein Unternehmens-CDN, das statische Ressourcen liefert, und eine Single-Sign-On (SSO) App, die die Authentifizierung verwaltet.
- `cross-origin`
  - : Ermöglicht den Zugriff auf Ressourcen durch Cross-Origin-Anfragen. Dies wird nur für Antworten von weit verbreiteten Ursprüngen empfohlen, wie öffentliche CDNs oder Widgets. Dies ist der Standardwert, wenn `Cross-Origin-Resource-Policy` nicht festgelegt ist.

Setzen Sie den restriktivsten Wert, der für Ihre Website möglich ist.

Falls Ihre Website Zugriff auf Cross-Origin-Ressourcen benötigt, entscheiden Sie sich für einen besseren Standard, indem Sie einen {{httpheader("Cross-Origin-Embedder-Policy")}} Header zusammen mit den zugehörigen Anfragen senden. Dies verhindert das Laden von Cross-Origin-Ressourcen, die nicht explizit einen `Cross-Origin-Resource-Policy: cross-origin` Header senden.

## Beispiele

Weisen Sie Browser an, Cross-Origin-Anfragen im `no-cors` Modus zu verweigern:

```http
Cross-Origin-Resource-Policy: same-origin
```

Weisen Sie Browser an, den Zugriff auf Cross-Origin-Ressourcen zu erlauben, einschließlich des Zugriffs auf Funktionen mit ungedrosselten Timern (wie {{jsxref("SharedArrayBuffer")}} Objekte oder {{domxref("Performance.now()")}}):

```http
Cross-Origin-Resource-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Dies erlaubt auch das Einbetten solcher Ressourcen.

## Siehe auch

- [Consider deploying Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- [XS-Leaks Wiki](https://xsleaks.dev/)
- [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)
- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
