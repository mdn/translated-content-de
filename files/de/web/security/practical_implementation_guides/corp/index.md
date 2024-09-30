---
title: Implementierung der Cross-Origin Resource Policy (CORP)
slug: Web/Security/Practical_implementation_guides/CORP
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Cross-Origin Resource Policy (CORP) wird durch den {{httpheader("Cross-Origin-Resource-Policy")}} Antwort-Header gesetzt, der es Websites und Anwendungen ermöglicht, sich gegen Schwachstellen im Zusammenhang mit bestimmten Cross-Origin-Anfragen zu schützen (wie sie z.B. von den {{htmlelement("script")}} und {{htmlelement("img")}} Elementen gemacht werden).

## Problem

Einige Hardware-Schwachstellen im Seitenkanal (auch bekannt als Cross-site leaks oder XS-Leaks), wie [Meltdown](<https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)>) und [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), nutzen eine Wettlaufsituation aus, die als Teil der spekulativen Ausführungsfunktion moderner Prozessoren entsteht. Diese Funktionalität ist zwar zur Leistungsverbesserung gedacht, kann jedoch manipuliert werden, um sensible Daten preiszugeben.

## Lösung

Verwenden Sie `Cross-Origin-Resource-Policy`, um [`no-cors`](/de/docs/Web/API/RequestInit#mode) Cross-Origin-Anfragen für bestimmte Ressourcen zu blockieren. Da diese Richtlinie über einen Antwort-Header ausgedrückt wird, wird die eigentliche Anfrage nicht verhindert. Stattdessen verhindert der Browser, dass das Ergebnis preisgegeben wird, indem er den Antwortkörper entfernt.

Die möglichen Werte sind:

- `same-origin`
  - : Beschränkt den Ressourcenzugriff auf Anfragen vom selben Ursprung. Dies wird für URLs empfohlen, die sensible Benutzerinformationen oder private APIs zurückgeben.
- `same-site`
  - : Beschränkt den Ressourcenzugriff auf Anfragen von derselben Site. Dies wird für Antworten von Ursprüngen empfohlen, deren Funktionalität mit mehreren anderen gleichen Site-Ursprüngen geteilt wird. Beispiele sind ein Unternehmens-CDN, das statische Ressourcen bereitstellt, und eine Single Sign-On (SSO) App, die die Authentifizierung verwaltet.
- `cross-origin`
  - : Ermöglicht den Zugriff auf Ressourcen durch Cross-Origin-Anfragen. Dies wird nur für Antworten von weit verbreiteten Ursprüngen wie öffentlichen CDNs oder Widgets empfohlen. Dies ist der Standardwert, wenn `Cross-Origin-Resource-Policy` nicht gesetzt ist.

Setzen Sie den restriktivsten Wert, der für Ihre Seite möglich ist.

Wenn Ihre Seite im Gegenzug Zugriff auf Cross-Origin-Ressourcen benötigt, wählen Sie einen besseren Standard, indem Sie einen {{httpheader("Cross-Origin-Embedder-Policy")}} Header zusammen mit den zugehörigen Anfragen senden. Dies wird das Laden von Cross-Origin-Ressourcen verhindern, die nicht auch explizit einen `Cross-Origin-Resource-Policy: cross-origin` Header senden.

## Beispiele

Weisen Sie Browser an, Cross-Origin-Anfragen im `no-cors` Modus zu verbieten:

```http
Cross-Origin-Resource-Policy: same-origin
```

Weisen Sie Browser an, Cross-Origin-Ressourcenzugriff zuzulassen, einschließlich Zugriff auf Funktionen mit ungedrosselten Timern (wie {{jsxref("SharedArrayBuffer")}} Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now)):

```http
Cross-Origin-Resource-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Dies erlaubt auch das Einbetten solcher Ressourcen.

## Siehe auch

- [Erwägen Sie die Bereitstellung der Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- [XS-Leaks Wiki](https://xsleaks.dev/)
- [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy)
- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
