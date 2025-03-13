---
title: Cross-Origin Resource Policy (CORP)-Implementierung
slug: Web/Security/Practical_implementation_guides/CORP
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Cross-Origin Resource Policy (CORP) wird durch den {{httpheader("Cross-Origin-Resource-Policy")}} Antwort-Header festgelegt, der es Websites und Anwendungen ermöglicht, sich für den Schutz gegen Sicherheitsanfälligkeiten im Zusammenhang mit bestimmten Cross-Origin-Anfragen (wie denen, die durch die {{htmlelement("script")}} und {{htmlelement("img")}} Elemente gestellt werden) zu entscheiden.

## Problem

Einige hardwareseitige Sicherheitsprobleme (auch bekannt als Cross-Site Leaks oder XS-Leaks), wie [Meltdown](<https://en.wikipedia.org/wiki/Meltdown_(security_vulnerability)>) und [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), nutzen ein Race Condition, das als Teil der spekulativen Ausführung von modernen Prozessoren auftritt. Diese Funktionalität soll die Leistung verbessern, kann aber manipuliert werden, um sensible Daten offenzulegen.

## Lösung

Verwenden Sie `Cross-Origin-Resource-Policy`, um [`no-cors`](/de/docs/Web/API/RequestInit#mode) Cross-Origin-Anfragen zu bestimmten Ressourcen zu blockieren. Da diese Richtlinie über einen Antwort-Header ausgedrückt wird, wird die eigentliche Anfrage nicht verhindert. Stattdessen verhindert der Browser, dass das Ergebnis preisgegeben wird, indem er den Antwortinhalt entfernt.

Die möglichen Werte sind:

- `same-origin`
  - : Beschränkt den Ressourcenzugriff auf Anfragen, die von demselben Ursprung kommen. Dies wird für URLs empfohlen, die mit sensiblen Benutzerdaten oder privaten APIs antworten.
- `same-site`
  - : Beschränkt den Ressourcenzugriff auf Anfragen, die von derselben Website kommen. Dies wird für Antworten von Ursprüngen empfohlen, deren Funktionalität auf mehreren anderen Ursprüngen derselben Website geteilt wird. Beispiele sind ein Unternehmens-CDN, das statische Ressourcen liefert, und eine Single Sign-On (SSO)-App, die die Authentifizierung übernimmt.
- `cross-origin`
  - : Erlaubt den Zugriff auf Ressourcen durch Cross-Origin-Anfragen. Dies wird nur für Antworten von weit verbreiteten Ursprüngen empfohlen, wie z.B. öffentlichen CDNs oder Widgets. Dies ist der Standardwert, wenn `Cross-Origin-Resource-Policy` nicht gesetzt ist.

Setzen Sie den restriktivsten Wert, der für Ihre Website möglich ist.

Falls Ihre Website wiederum Zugriff auf Cross-Origin-Ressourcen benötigt, entscheiden Sie sich für einen besseren Standard, indem Sie einen {{httpheader("Cross-Origin-Embedder-Policy")}} Header zusammen mit den zugehörigen Anfragen senden. Dies verhindert das Laden von Cross-Origin-Ressourcen, die nicht ebenfalls explizit einen `Cross-Origin-Resource-Policy: cross-origin` Header senden.

## Beispiele

Weisen Sie Browser an, Cross-Origin-Anfragen im `no-cors` Modus zu verbieten:

```http
Cross-Origin-Resource-Policy: same-origin
```

Weisen Sie Browser an, den Zugriff auf Cross-Origin-Ressourcen zu erlauben, einschließlich des Zugriffs auf Funktionen mit nicht gedrosselten Timern (wie {{jsxref("SharedArrayBuffer")}} Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now)):

```http
Cross-Origin-Resource-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Dies erlaubt auch das Einbetten solcher Ressourcen.

## Siehe auch

- [Erwägen Sie den Einsatz der Cross-Origin Resource Policy](https://resourcepolicy.fyi/)
- [XS-Leaks Wiki](https://xsleaks.dev/)
- [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy)
- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
