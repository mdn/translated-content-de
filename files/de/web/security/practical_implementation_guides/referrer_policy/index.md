---
title: Konfiguration der Referrer-Richtlinie
slug: Web/Security/Practical_implementation_guides/Referrer_policy
l10n:
  sourceCommit: c0e43030605b6f12bc4d550c0d5b8bf8a633eff3
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy) Header bietet eine detaillierte Kontrolle darüber, wie und wann Browser den [`Referer`](/de/docs/Web/HTTP/Headers/Referer) Header übertragen.

## Problem

Wenn ein Benutzer über einen Hyperlink zu einer Website navigiert oder wenn eine Website eine externe Ressource lädt, informieren Browser die Ziel-Website über die Herkunft der Anfragen über den HTTP `Referer` (sic) Header. Obwohl dies für verschiedene Zwecke nützlich sein kann, kann es auch ein Risiko für die [Privatsphäre](/de/docs/Web/Privacy) der Benutzer darstellen.

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

Andere Fälle könnten dazu führen, dass der Browser URLs überträgt, die nur für den internen Gebrauch bestimmt sind und die er möglicherweise nicht offenlegen wollte, oder URL-Parameter, die sensible Informationen enthalten.

## Lösung

Verwenden Sie die [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy), um die im `Referer` Header verfügbaren Informationen zu begrenzen oder den `Referer` Header vollständig davon abzuhalten, gesendet zu werden.

Die nützlichsten Direktiven für `Referrer-Policy` sind unten in absteigender Reihenfolge der Striktheit aufgeführt. Wählen Sie die strengste aus, die dennoch eine ordnungsgemäße Funktion Ihrer Website erlaubt:

- `no-referrer`: Der `Referer` Header wird niemals gesendet.
- `same-origin`: Der `Referer` Header wird nur bei Anfragen gleichen Ursprungs gesendet.
- `strict-origin`: Der `Referer` Header wird an alle Ursprünge gesendet, enthält aber nur die URL ohne den Pfad (z.B. `https://example.com/`).
- `strict-origin-when-cross-origin`: Der volle `Referer` Header wird bei Anfragen gleichen Ursprungs gesendet und nur die URL ohne den Pfad bei Anfragen über verschiedene Ursprünge. Dies ist der Standardwert.

Während es andere `Referrer-Policy` Direktiven gibt, schützen sie die Privatsphäre der Benutzer nicht oder begrenzen die Offenlegung nicht so effektiv wie die oben aufgeführten Optionen. In den neueren Versionen von Firefox und Safari verhalten sich "unsichere" Direktiven (`no-referrer-when-downgrade`, `origin-when-cross-origin` und `unsafe-url`) wie `strict-origin-when-cross-origin`.

Wenn Sie den `Referrer-Policy` Header nicht verwenden können, können Sie alternativ seitenweite Richtlinien mit einem [`<meta http-equiv="Referrer-Policy" content="…">`](/de/docs/Web/HTML/Element/meta#http-equiv) Element festlegen. Dies sollte das erste {{htmlelement("meta")}} Element sein, das im Dokument {{htmlelement("head")}} erscheint. Sie können auch Richtlinien für einzelne Elemente mit dem [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) HTML-Attribut und für einzelne [fetch](/de/docs/Web/API/Window/fetch) Anfragen mit der {{domxref("Request.referrerPolicy")}} Eigenschaft festlegen.

## Beispiele

Auf `example.com` wird der `Referer` Header nur gesendet, wenn Ressourcen von `example.com` geladen oder verlinkt werden:

```http
Referrer-Policy: same-origin
```

Senden Sie den verkürzten Referrer bei Anfragen über verschiedene Ursprünge und den vollständigen Referrer bei Anfragen gleichen Ursprungs:

```http
Referrer-Policy: strict-origin-when-cross-origin
```

Deaktivieren Sie Referrer für Browser, die `strict-origin-when-cross-origin` nicht unterstützen; verwenden Sie `strict-origin-when-cross-origin` für Browser, die dies tun:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Das gleiche, aber mit einem `<meta>` Element:

```html
<meta
  http-equiv="Referrer-Policy"
  content="no-referrer, strict-origin-when-cross-origin" />
```

Das Attribut `referrerpolicy` unterstützt keine mehrfachen Werte, setzen Sie daher nur `no-referrer`:

```html
<a href="https://example.org/" referrerpolicy="no-referrer"> Mein Link </a>
```

## Siehe auch

- [Referer Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
