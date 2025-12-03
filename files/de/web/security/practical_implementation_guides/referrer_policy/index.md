---
title: Konfiguration der Referrer-Richtlinie
short-title: Referrer policy
slug: Web/Security/Practical_implementation_guides/Referrer_policy
l10n:
  sourceCommit: dd868507df863ab4f37d53c960c76e20e9ee365f
---

Der [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) Header bietet eine feindifferenzierte Kontrolle darüber, wie und wann Browser den [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) Header übertragen.

## Problem

Wenn ein Benutzer über einen Hyperlink zu einer Seite navigiert oder eine Website eine externe Ressource lädt, informieren Browser die Zielseite über den Ursprung der Anfragen mittels des HTTP-`Referer` (sic) Headers. Obwohl dies aus verschiedenen Gründen nützlich sein kann, kann es auch ein Risiko für die [Privatsphäre](/de/docs/Web/Privacy) der Benutzer darstellen.

Zum Beispiel, wenn eine Seite unter `https://example.com/page.html` den folgenden HTML-Code enthält:

```html
<img src="https://not.example.com/image.jpg" />
```

Sendet der Browser eine Anfrage wie diese:

```http
GET /image.jpg HTTP/1.1
Host: not.example.com
Referer: https://example.com/page.html
```

`not.example.com` weiß nun, woher die Anfrage kam. Selbst diese kleine Menge an Informationen stellt ein Privatsphäre-Risiko dar.

In anderen Fällen könnte der Browser URLs übermitteln, die nur für den internen Gebrauch bestimmt sind und die er möglicherweise nicht preisgeben wollte, oder URL-Parameter, die sensible Informationen enthalten.

## Lösung

Verwenden Sie [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy), um die im `Referer` Header verfügbaren Informationen zu begrenzen oder den `Referer` Header insgesamt nicht zu senden.

Die nützlichsten Direktiven, die für `Referrer-Policy` verfügbar sind, sind unten in absteigender Reihenfolge der Strenge aufgeführt. Wählen Sie die strengste aus, die dennoch das ordnungsgemäße Funktionieren Ihrer Seite ermöglicht:

- `no-referrer`: Sendet niemals den `Referer` Header.
- `same-origin`: Sendet den `Referer` Header, aber nur bei Anfragen gleichen Ursprungs.
- `strict-origin`: Sendet den `Referer` Header an alle Ursprünge, enthält jedoch nur die URL ohne den Pfad (z.B. `https://example.com/`).
- `strict-origin-when-cross-origin`: Sendet den vollständigen `Referer` Header bei Anfragen gleichen Ursprungs und nur die URL ohne den Pfad bei anfragen mit unterschiedlichen Ursprüngen. Dies ist der Standardwert.

Obwohl es andere Direktiven für `Referrer-Policy` gibt, schützen diese nicht die Privatsphäre der Nutzer oder begrenzen die Offenlegung so wirksam wie die oben aufgeführten Optionen. In neueren Versionen von Firefox und Safari verhalten sich "unsichere" Direktiven (`no-referrer-when-downgrade`, `origin-when-cross-origin` und `unsafe-url`) wie `strict-origin-when-cross-origin`.

Wenn Sie den `Referrer-Policy` Header nicht verwenden können, können Sie alternativ seitenweite Richtlinien mit einem [`<meta http-equiv="Referrer-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta/http-equiv) Element festlegen. Dies sollte das erste {{htmlelement("meta")}} Element sein, das im Dokument {{htmlelement("head")}} erscheint. Sie können auch Richtlinien für einzelne Elemente mit dem [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy) HTML-Attribut und für einzelne [fetch](/de/docs/Web/API/Window/fetch) Anfragen mit der [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) Eigenschaft festlegen.

## Beispiele

Auf `example.com` den `Referer` Header nur senden, wenn Ressourcen von `example.com` geladen oder verlinkt werden:

```http
Referrer-Policy: same-origin
```

Den verkürzten Referrer bei Anfragen mit unterschiedlichen Ursprüngen und den vollständigen Referrer bei Anfragen gleichen Ursprungs senden:

```http
Referrer-Policy: strict-origin-when-cross-origin
```

Referrer für Browser deaktivieren, die `strict-origin-when-cross-origin` nicht unterstützen; `strict-origin-when-cross-origin` für Browser verwenden, die dies tun:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Dasselbe tun, aber mit einem `<meta>` Element:

```html
<meta
  http-equiv="Referrer-Policy"
  content="no-referrer, strict-origin-when-cross-origin" />
```

Das `referrerpolicy` Attribut unterstützt keine Mehrfachwerte, daher nur `no-referrer` festlegen:

```html
<a href="https://example.org/" referrerpolicy="no-referrer"> My link </a>
```

## Siehe auch

- [Referer-Header: Bedenken hinsichtlich Privatsphäre und Sicherheit](/de/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns)
