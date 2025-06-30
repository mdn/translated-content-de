---
title: Konfiguration der Referrer-Policy
short-title: Referrer policy
slug: Web/Security/Practical_implementation_guides/Referrer_policy
l10n:
  sourceCommit: a33c2c8081a1df867a0a334afc560057b2124bad
---

Der [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) Header bietet detaillierte Kontrolle darüber, wie und wann Browser den [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) Header übermitteln.

## Problem

Wenn ein Nutzer über einen Hyperlink zu einer Website navigiert oder wenn eine Website eine externe Ressource lädt, informieren Browser die Zielseite über die Herkunft der Anfragen über den HTTP `Referer` (sic) Header. Obwohl dies aus verschiedenen Gründen nützlich sein kann, kann es auch ein Risiko für die [Privatsphäre](/de/docs/Web/Privacy) der Nutzer darstellen.

Zum Beispiel, wenn eine Seite unter `https://example.com/page.html` folgendes HTML enthält:

```html
<img src="https://not.example.com/image.jpg" />
```

Der Browser sendet eine Anfrage wie diese:

```http
GET /image.jpg HTTP/1.1
Host: not.example.com
Referer: https://example.com/page.html
```

`not.example.com` weiß nun, woher die Anfrage kam. Selbst diese kleine Menge an Informationen stellt ein Privatsphäre-Risiko dar.

Andere Fälle könnten dazu führen, dass der Browser nur intern genutzte URLs übermittelt, die er möglicherweise nicht offenlegen wollte, oder URL-Parameter, die sensible Informationen enthalten.

## Lösung

Verwenden Sie [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy), um die im `Referer` Header verfügbaren Informationen zu begrenzen oder um zu verhindern, dass der `Referer` Header überhaupt gesendet wird.

Die nützlichsten für `Referrer-Policy` verfügbaren Direktiven sind nachfolgend in abnehmender Strenge aufgeführt. Wählen Sie die strengste, die die Funktionsfähigkeit Ihrer Website dennoch gewährleistet:

- `no-referrer`: Senden Sie den `Referer` Header niemals.
- `same-origin`: Senden Sie den `Referer` Header, aber nur bei Anfragen zur gleichen Herkunft.
- `strict-origin`: Senden Sie den `Referer` Header an alle Ursprünge, aber nur die URL ohne den Pfad (z.B. `https://example.com/`).
- `strict-origin-when-cross-origin`: Senden Sie den kompletten `Referer` Header bei Anfragen zur gleichen Herkunft und nur die URL ohne den Pfad bei Anfragen zu anderen Ursprüngen. Dies ist der Standardwert.

Es gibt zwar andere `Referrer-Policy` Direktiven, jedoch schützen sie die Privatsphäre der Nutzer nicht so effektiv oder begrenzen die Exposition nicht so wirkungsvoll wie die oben aufgeführten Optionen. In neueren Versionen von Firefox und Safari verhalten sich "unsichere" Direktiven (`no-referrer-when-downgrade`, `origin-when-cross-origin` und `unsafe-url`) wie `strict-origin-when-cross-origin`.

Wenn Sie den `Referrer-Policy` Header nicht verwenden können, können Sie alternativ seitenweite Richtlinien mit einem [`<meta http-equiv="Referrer-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Element festlegen. Dies sollte das erste {{htmlelement("meta")}} Element sein, das im Dokument {{htmlelement("head")}} erscheint. Sie können auch Richtlinien für einzelne Elemente mithilfe des [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) HTML-Attributs festlegen und für einzelne [fetch](/de/docs/Web/API/Window/fetch) Anfragen die [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) Eigenschaft verwenden.

## Beispiele

Auf `example.com` den `Referer` Header nur senden, wenn auf andere `example.com` Ressourcen geladen oder verlinkt wird:

```http
Referrer-Policy: same-origin
```

Den verkürzten Referrer bei Anfragen zu anderen Ursprüngen und den vollständigen Referrer bei Anfragen zur gleichen Herkunft senden:

```http
Referrer-Policy: strict-origin-when-cross-origin
```

Referrer für Browser deaktivieren, die `strict-origin-when-cross-origin` nicht unterstützen; `strict-origin-when-cross-origin` für Browser verwenden, die dies unterstützen:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Dasselbe tun, aber mit einem `<meta>` Element:

```html
<meta
  http-equiv="Referrer-Policy"
  content="no-referrer, strict-origin-when-cross-origin" />
```

Das `referrerpolicy` Attribut unterstützt keine Mehrfachwerte, daher nur `no-referrer` setzen:

```html
<a href="https://example.org/" referrerpolicy="no-referrer"> My link </a>
```

## Siehe auch

- [Referer Header: Bedenken über Privatsphäre und Sicherheit](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
