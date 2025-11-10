---
title: Cross-Origin Resource Policy (CORP) Implementierung
short-title: Cross-Origin Resource Policy (CORP)
slug: Web/Security/Practical_implementation_guides/CORP
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Die Cross-Origin Resource Policy (CORP) wird durch das {{httpheader("Cross-Origin-Resource-Policy")}} Antwort-Header gesetzt, der es Webseiten und Anwendungen ermöglicht, sich für Schutzmaßnahmen gegen Schwachstellen im Zusammenhang mit bestimmten cross-origin-Anfragen (wie denen, die durch {{htmlelement("script")}} und {{htmlelement("img")}} Elemente gemacht werden) zu entscheiden.

## Problem

Einige Seitenkanal-Hardware-Schwachstellen (auch bekannt als Cross-site leaks oder XS-Leaks), wie [Meltdown](<https://de.wikipedia.org/wiki/Meltdown_(Sicherheitsl%C3%BCcke)>) und [Spectre](<https://de.wikipedia.org/wiki/Spectre_(Sicherheitsl%C3%BCcke)>), nutzen eine Race-Condition aus, die sich im Rahmen der spekulativen Ausführungsfunktionalität moderner Prozessoren ergibt. Diese Funktionalität ist darauf ausgelegt, die Leistung zu verbessern, kann jedoch manipuliert werden, um sensible Daten preiszugeben.

## Lösung

Verwenden Sie `Cross-Origin-Resource-Policy`, um [`no-cors`](/de/docs/Web/API/RequestInit#mode) cross-origin-Anfragen zu bestimmten Ressourcen zu blockieren. Da diese Richtlinie über ein Antwort-Header ausgedrückt wird, wird die eigentliche Anfrage nicht verhindert. Stattdessen verhindert der Browser, dass das Ergebnis durch das Entfernen des Antwortkörpers durchsickert.

Die möglichen Werte sind:

- `same-origin`
  - : Beschränkt den Ressourcenzugriff auf Anfragen, die von demselben Origin kommen. Dies wird für URLs empfohlen, die mit sensiblen Benutzerinformationen oder privaten APIs antworten.
- `same-site`
  - : Beschränkt den Ressourcenzugriff auf Anfragen, die von derselben Site kommen. Dies wird für Antworten von Origins empfohlen, deren Funktionalität über mehrere andere gleiche Site-Origins geteilt wird. Beispiele umfassen ein Unternehmens-CDN, das statische Ressourcen bereitstellt, und eine Single-Sign-On (SSO)-App, die die Authentifizierung verwaltet.
- `cross-origin`
  - : Erlaubt den Zugriff auf Ressourcen durch cross-origin-Anfragen. Dies wird nur für Antworten von weithin genutzten Ursprüngen, wie öffentliche CDNs oder Widgets empfohlen. Dies ist der Standardwert, wenn `Cross-Origin-Resource-Policy` nicht gesetzt ist.

Setzen Sie den restriktivsten Wert, der für Ihre Seite möglich ist.

Wenn Ihre Seite ihrerseits Zugriff auf cross-origin-Ressourcen benötigt, entscheiden Sie sich für einen besseren Standard, indem Sie zusammen mit den zugehörigen Anfragen einen {{httpheader("Cross-Origin-Embedder-Policy")}} Header senden. Dies verhindert das Laden von cross-origin-Ressourcen, die nicht ebenfalls explizit einen `Cross-Origin-Resource-Policy: cross-origin` Header senden.

## Beispiele

Weisen Sie Browser an, cross-origin-Anfragen im `no-cors` Modus nicht zu erlauben:

```http
Cross-Origin-Resource-Policy: same-origin
```

Weisen Sie Browser an, den Zugriff auf cross-origin-Ressourcen zu erlauben, einschließlich des Zugriffs auf Funktionen mit nicht gebremsten Timern (wie {{jsxref("SharedArrayBuffer")}} Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now)):

```http
Cross-Origin-Resource-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Dies erlaubt auch das Einbetten solcher Ressourcen.

## Siehe auch

- [Erwägen Sie, die Cross-Origin Resource Policy einzusetzen](https://resourcepolicy.fyi/)
- [XS-Leaks Wiki](https://xsleaks.dev/)
- [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy)
- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
