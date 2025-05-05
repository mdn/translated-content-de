---
title: Konfiguration der Referrer-Policy
short-title: Referrer policy
slug: Web/Security/Practical_implementation_guides/Referrer_policy
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Der [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)-Header bietet eine fein abgestufte Kontrolle darüber, wie und wann Browser den [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header übertragen.

## Problem

Wenn ein Benutzer über einen Hyperlink zu einer Seite navigiert oder eine Website eine externe Ressource lädt, informieren Browser die Zielseite über den Ursprung der Anfragen über den HTTP `Referer`-Header. Obwohl dies für verschiedene Zwecke nützlich sein kann, kann es auch ein Risiko für die [Privatsphäre](/de/docs/Web/Privacy) der Nutzer darstellen.

Wenn beispielsweise eine Seite unter `https://example.com/page.html` den folgenden HTML-Code enthält:

```html
<img src="https://not.example.com/image.jpg" />
```

Sendet der Browser eine Anfrage wie diese:

```http
GET /image.jpg HTTP/1.1
Host: not.example.com
Referer: https://example.com/page.html
```

`not.example.com` weiß nun, woher die Anfrage stammt. Selbst diese geringe Menge an Informationen stellt ein Datenschutzrisiko dar.

Andere Fälle könnten dazu führen, dass der Browser URLs, die nur für den internen Gebrauch bestimmt sind, überträgt, die er möglicherweise nicht offenlegen wollte, oder URL-Parameter, die sensible Informationen enthalten.

## Lösung

Verwenden Sie [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy), um die im `Referer`-Header verfügbaren Informationen zu beschränken oder zu verhindern, dass der `Referer`-Header überhaupt gesendet wird.

Die nützlichsten Direktiven, die für `Referrer-Policy` verfügbar sind, sind im Folgenden in abnehmender Strenge aufgeführt. Wählen Sie die strengste, die es Ihrer Website noch ermöglicht, ordnungsgemäß zu funktionieren:

- `no-referrer`: Der `Referer`-Header wird niemals gesendet.
- `same-origin`: Der `Referer`-Header wird nur bei Anfragen von derselben Quelle gesendet.
- `strict-origin`: Der `Referer`-Header wird an alle Ursprünge gesendet, enthält jedoch nur die URL ohne Pfad (z. B. `https://example.com/`).
- `strict-origin-when-cross-origin`: Der vollständige `Referer`-Header wird bei Anfragen von derselben Quelle gesendet und nur die URL ohne Pfad bei Anfragen an andere Ursprung. Dies ist der Standardwert.

Obwohl es andere `Referrer-Policy`-Direktiven gibt, schützen sie die Privatsphäre der Nutzer oder beschränken die Offenlegung nicht so effektiv wie die oben aufgeführten Optionen. In den neuesten Versionen von Firefox und Safari verhalten sich „unsichere“ Direktiven (`no-referrer-when-downgrade`, `origin-when-cross-origin` und `unsafe-url`) wie `strict-origin-when-cross-origin`.

Wenn Sie den `Referrer-Policy`-Header nicht verwenden können, können Sie alternativ seitenweite Richtlinien mit einem [`<meta http-equiv="Referrer-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)-Element festlegen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokumentkopf {{htmlelement("head")}} erscheint. Sie können auch Richtlinien für einzelne Elemente mit dem [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)-HTML-Attribut und für einzelne [fetch](/de/docs/Web/API/Window/fetch)-Anfragen mit der [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)-Eigenschaft festlegen.

## Beispiele

Auf `example.com`, senden Sie den `Referer`-Header nur beim Laden oder Verlinken zu anderen `example.com`-Ressourcen:

```http
Referrer-Policy: same-origin
```

Senden Sie den gekürzten Referrer bei Anfragen an andere Ursprünge und den vollständigen Referrer bei Anfragen von derselben Quelle:

```http
Referrer-Policy: strict-origin-when-cross-origin
```

Deaktivieren Sie Referrer für Browser, die `strict-origin-when-cross-origin` nicht unterstützen; verwenden Sie `strict-origin-when-cross-origin` für Browser, die dies tun:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Machen Sie dasselbe mit einem `<meta>`-Element:

```html
<meta
  http-equiv="Referrer-Policy"
  content="no-referrer, strict-origin-when-cross-origin" />
```

Das `referrerpolicy`-Attribut unterstützt keine Mehrfachwerte, also setzen Sie nur `no-referrer`:

```html
<a href="https://example.org/" referrerpolicy="no-referrer"> My link </a>
```

## Siehe auch

- [Referer header: Privacy and security concerns](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
