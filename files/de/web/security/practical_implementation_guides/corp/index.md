---
title: Implementierung der Cross-Origin Resource Policy (CORP)
slug: Web/Security/Practical_implementation_guides/CORP
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Cross-Origin Resource Policy (CORP) wird durch den {{httpheader("Cross-Origin-Resource-Policy")}} Antwort-Header festgelegt, der es Websites und Anwendungen ermöglicht, sich gegen Schwachstellen im Zusammenhang mit bestimmten Cross-Origin-Anfragen (wie denen, die von {{htmlelement("script")}}- und {{htmlelement("img")}}-Elementen gestellt werden) zu schützen.

## Problem

Einige Seitenkanal-Hardware-Schwachstellen (auch als Cross-site Leaks oder XS-Leaks bekannt), wie [Meltdown](<https://de.wikipedia.org/wiki/Meltdown_(Sicherheitslücke)>) und [Spectre](<https://de.wikipedia.org/wiki/Spectre_(Sicherheitslücke)>), nutzen eine Race-Condition aus, die als Teil der spekulativen Ausführungsfunktion von modernen Prozessoren entsteht. Diese Funktion ist dazu gedacht, die Leistung zu verbessern, kann jedoch manipuliert werden, um sensible Daten offenzulegen.

## Lösung

Verwenden Sie `Cross-Origin-Resource-Policy`, um [`no-cors`](/de/docs/Web/API/RequestInit#mode) Cross-Origin-Anfragen zu bestimmten Ressourcen zu blockieren. Da diese Richtlinie über einen Antwort-Header ausgedrückt wird, wird die eigentliche Anfrage nicht verhindert. Stattdessen verhindert der Browser, dass das Ergebnis durch Strippen des Antwortkörpers offengelegt wird.

Die möglichen Werte sind:

- `same-origin`
  - : Beschränkt den Ressourcenzugang auf Anfragen, die von demselben Ursprung kommen. Dies wird für URLs empfohlen, die mit sensiblen Benutzerdaten oder privaten APIs antworten.
- `same-site`
  - : Beschränkt den Ressourcenzugang auf Anfragen, die von derselben Seite kommen. Dies wird für Antworten von Ursprüngen empfohlen, deren Funktionalität über mehrere andere Ursprünge derselben Seite geteilt wird. Beispiele umfassen ein Firmencdn, das statische Ressourcen bereitstellt, und eine Single Sign-On (SSO) App, die die Authentifizierung übernimmt.
- `cross-origin`
  - : Erlaubt den Zugriff auf Ressourcen durch Cross-Origin-Anfragen. Dies wird nur für Antworten von weithin genutzten Ursprüngen wie öffentlichen CDNs oder Widgets empfohlen. Dies ist der Standardwert, wenn `Cross-Origin-Resource-Policy` nicht gesetzt ist.

Setzen Sie den restriktivsten möglichen Wert für Ihre Website.

Wenn Ihre Website wiederum Zugriff auf Cross-Origin-Ressourcen benötigt, entscheiden Sie sich für einen besseren Standard, indem Sie einen {{httpheader("Cross-Origin-Embedder-Policy")}} Header zusammen mit den zugehörigen Anfragen senden. Dies verhindert das Laden von Cross-Origin-Ressourcen, die nicht explizit auch einen `Cross-Origin-Resource-Policy: cross-origin` Header senden.

## Beispiele

Weisen Sie Browser an, Cross-Origin-Anfragen im `no-cors`-Modus zu verbieten:

```http
Cross-Origin-Resource-Policy: same-origin
```

Weisen Sie Browser an, Cross-Origin-Ressourcenzugriff zu erlauben, einschließlich des Zugriffs auf Funktionen mit nicht gedrosselten Timern (wie {{jsxref("SharedArrayBuffer")}} Objekte oder [`Performance.now()`](/de/docs/Web/API/Performance/now)):

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
