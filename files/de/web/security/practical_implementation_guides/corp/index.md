---
title: Implementierung der Cross-Origin Resource Policy (CORP)
short-title: Cross-Origin Resource Policy (CORP)
slug: Web/Security/Practical_implementation_guides/CORP
l10n:
  sourceCommit: bd5271a96d814ed6876e974186c465f1b3959e07
---

Die Cross-Origin Resource Policy (CORP) wird über den Antwort-Header {{httpheader("Cross-Origin-Resource-Policy")}} festgelegt. Damit können Websites und Anwendungen einen Schutz vor Sicherheitslücken aktivieren, die mit bestimmten Cross-Origin-Anfragen zusammenhängen, etwa solchen durch die Elemente {{htmlelement("script")}} und {{htmlelement("img")}}. CORP bietet eine zusätzliche Schutzebene über die standardmäßige {{Glossary("same-origin_policy", "Same-Origin-Policy")}} hinaus.

## Problem

Standardmäßig verhindert die {{Glossary("same-origin_policy", "Same-Origin-Policy")}}, dass Skripte Cross-Origin-Antworten direkt lesen, und schützt so vor der Offenlegung von Nutzerdaten auf der Website, die die Ressource bereitstellt. Einige hardwarebasierte Seitenkanal-Sicherheitslücken, insbesondere [Spectre](<https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)>), nutzen jedoch die spekulative Ausführung moderner Prozessoren aus, um sensible Daten offenzulegen, sobald die Antwortbytes in den Speicher der einbettenden Seite gelangen. Darüber hinaus ermöglichen Cross-Site Script Inclusion-Angriffe (XSSI), mithilfe herkömmlicher `<script>`-Elemente Cross-Origin-Daten zu erlangen. Daher können selbst Kanäle unsicher sein, die traditionell als sicher für die Cross-Origin-Einbettung gelten und deshalb keine Mitwirkung des Ressourcenanbieters erfordern.

## Lösung

Verwenden Sie `Cross-Origin-Resource-Policy` für die Ressource, um Cross-Origin-Anfragen im Modus [`no-cors`](/de/docs/Web/API/RequestInit#mode) zu blockieren. Solche Anfragen werden von bestimmten APIs und Elementen standardmäßig gesendet, insbesondere von `<script>`- und `<img>`-Elementen. Da diese Richtlinie durch einen Antwort-Header ausgedrückt wird, wird die eigentliche Anfrage nicht verhindert. Stattdessen verhindert der Browser die Offenlegung des Ergebnisses, indem er die Antwort in einen Netzwerkfehler umwandelt.

Folgende Werte sind möglich:

- `same-origin`
  - : Beschränkt den Zugriff auf die Ressource auf Anfragen desselben _{{Glossary("origin", "Origin")}}_. Dies wird für URLs empfohlen, die sensible Nutzerinformationen zurückgeben, sowie für private APIs.
- `same-site`
  - : Beschränkt den Zugriff auf die Ressource auf Anfragen derselben _{{Glossary("site", "Site")}}_. Dies wird für Antworten von Origins empfohlen, deren Funktionalität von mehreren anderen Origins derselben Site genutzt wird. Beispiele sind ein Unternehmens-CDN, das statische Ressourcen bereitstellt, und eine Single-Sign-on-Anwendung (SSO), die die Authentifizierung übernimmt.

    > [!WARNING]
    > Dies ist weniger restriktiv als `same-origin`. Der [Algorithmus zur Prüfung, ob zwei Origins derselben Site angehören](https://html.spec.whatwg.org/multipage/origin.html#same-site), ist im HTML-Standard definiert und prüft unter anderem die _registrierbare Domain_.

- `cross-origin`
  - : Erlaubt Cross-Origin-Anfragen den Zugriff auf Ressourcen. Dies wird nur für Antworten von breit genutzten Origins empfohlen, beispielsweise öffentlichen CDNs oder Widgets. Wenn der Header nicht gesetzt ist, ist dies das Standardverhalten. Der Wert muss jedoch ausdrücklich gesetzt werden, damit eine einbettende Seite mit einer restriktiven {{httpheader("Cross-Origin-Embedder-Policy")}} die Ressource einbetten kann.

Legen Sie für Ihre Website den restriktivsten möglichen Wert fest.

CORP wird vom Ressourcenanbieter bereitgestellt. Wenn Sie solche Cross-Origin-Ressourcen einbetten, können Sie Ihr Dokument mit einem {{httpheader("Cross-Origin-Embedder-Policy")}}-Header mit dem Wert `require-corp` ausliefern. Der Browser verhindert dann, dass das Dokument Cross-Origin-Ressourcen lädt, die nicht ausdrücklich einen `Cross-Origin-Resource-Policy`-Header senden, der die Einbettung erlaubt. Dies ist ein Schritt, um Ihre Website [Cross-Origin-isoliert](/de/docs/Web/API/Window/crossOriginIsolated) zu machen.

## Beispiele

### Den Ressourcenanbieter absichern

Wenn eine Ressource nicht im Modus `no-cors` über Origin-Grenzen hinweg geladen werden darf, sollte ihre Antwort Folgendes enthalten:

```http
Cross-Origin-Resource-Policy: same-origin
```

### Die einbettende Seite Cross-Origin-isoliert machen

Um {{jsxref("SharedArrayBuffer")}} und hochpräzise Aufrufe von [`Performance.now()`](/de/docs/Web/API/Performance/now) zu ermöglichen, muss das Dokument Cross-Origin-isoliert sein. Fügen Sie dem Dokument die folgenden Header hinzu:

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

Eine Seite, die `Cross-Origin-Embedder-Policy: require-corp` verwendet, darf nur Cross-Origin-Ressourcen laden, die ihre Einbettung ausdrücklich erlauben. Ressourcen können dies durch eine explizite CORP-Angabe tun:

```http
Cross-Origin-Resource-Policy: cross-origin
```

Verwenden Sie für Anfragen mit [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS) stattdessen `Access-Control-Allow-Origin`:

```http
Access-Control-Allow-Origin: https://example.com
```

## Siehe auch

- [Den Einsatz der Cross-Origin Resource Policy erwägen](https://resourcepolicy.fyi/)
- [XS-Leaks-Wiki](https://xsleaks.dev/)
- [`Access-Control-Allow-Origin`](/de/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Origin)
- [`Cross-Origin-Embedder-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy)
- [`Cross-Origin-Opener-Policy`](/de/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
