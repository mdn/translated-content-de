---
title: Konfiguration der Referrer-Richtlinie
slug: Web/Security/Practical_implementation_guides/Referrer_policy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy)-Header ermöglicht eine feingranulare Kontrolle darüber, wie und wann Browser den [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer)-Header übermitteln.

## Problem

Wenn ein Benutzer über einen Hyperlink zu einer Seite navigiert oder wenn eine Webseite eine externe Ressource lädt, informieren die Browser die Zielseite über die Herkunft der Anfragen über den HTTP-`Referer`-Header. Obwohl dies für verschiedene Zwecke nützlich sein kann, kann es auch ein Risiko für die [Privatsphäre](/de/docs/Web/Privacy) der Benutzer darstellen.

Zum Beispiel, wenn eine Seite unter `https://example.com/page.html` den folgenden HTML-Code enthält:

```html
<img src="https://not.example.com/image.jpg" />
```

sendet der Browser eine Anfrage wie diese:

```http
GET /image.jpg HTTP/1.1
Host: not.example.com
Referer: https://example.com/page.html
```

`not.example.com` weiß nun, woher die Anfrage stammt. Selbst diese geringe Menge an Informationen stellt ein Datenschutzrisiko dar.

In anderen Fällen könnte es dazu kommen, dass der Browser nur für den internen Gebrauch bestimmte URLs übermittelt, die er möglicherweise nicht offenlegen wollte, oder URL-Parameter, die sensible Informationen enthalten.

## Lösung

Verwenden Sie [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy), um die im `Referer`-Header enthaltenen Informationen zu begrenzen oder um das Senden des `Referer`-Headers vollständig zu unterbinden.

Die nützlichsten verfügbaren Direktiven für `Referrer-Policy` sind unten in abnehmender Reihenfolge der Strenge aufgeführt. Wählen Sie die strengste aus, die trotzdem die ordnungsgemäße Funktion Ihrer Seite ermöglicht:

- `no-referrer`: Der `Referer`-Header wird niemals gesendet.
- `same-origin`: Der `Referer`-Header wird nur bei Anfragen derselben Herkunft gesendet.
- `strict-origin`: Der `Referer`-Header wird an alle Ursprünge gesendet, enthält jedoch nur die URL ohne Pfad (z.B. `https://example.com/`).
- `strict-origin-when-cross-origin`: Der vollständige `Referer`-Header wird bei Anfragen derselben Herkunft gesendet und nur die URL ohne Pfad bei anfragenübergreifenden Anfragen. Dies ist der Standardwert.

Obwohl es andere `Referrer-Policy`-Direktiven gibt, schützen sie die Privatsphäre des Nutzers nicht so effektiv oder beschränken die Offenlegung nicht so stark wie die oben genannten Optionen. In den neuesten Versionen von Firefox und Safari verhalten sich "unsichere" Direktiven (`no-referrer-when-downgrade`, `origin-when-cross-origin` und `unsafe-url`) wie `strict-origin-when-cross-origin`.

Falls Sie den `Referrer-Policy`-Header nicht verwenden können, können Sie alternativ seitenweite Richtlinien mithilfe eines [`<meta http-equiv="Referrer-Policy" content="…">`](/de/docs/Web/HTML/Reference/Elements/meta#http-equiv)-Elements festlegen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokument {{htmlelement("head")}} erscheint. Sie können auch Richtlinien für einzelne Elemente mit dem [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)-HTML-Attribut und für einzelne [fetch](/de/docs/Web/API/Window/fetch)-Anfragen mit der [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)-Eigenschaft setzen.

## Beispiele

Auf `example.com`, senden Sie den `Referer`-Header nur beim Laden oder Verlinken zu anderen `example.com`-Ressourcen:

```http
Referrer-Policy: same-origin
```

Senden Sie den verkürzten Referrer bei anfragenübergreifenden Anfragen und den vollständigen Referrer bei Anfragen derselben Herkunft:

```http
Referrer-Policy: strict-origin-when-cross-origin
```

Deaktivieren Sie Referrer für Browser, die `strict-origin-when-cross-origin` nicht unterstützen; verwenden Sie `strict-origin-when-cross-origin` für Browser, die dies tun:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Tun Sie dasselbe, aber mit einem `<meta>`-Element:

```html
<meta
  http-equiv="Referrer-Policy"
  content="no-referrer, strict-origin-when-cross-origin" />
```

Das `referrerpolicy`-Attribut unterstützt keine Mehrfachwerte, daher setzen Sie nur `no-referrer`:

```html
<a href="https://example.org/" referrerpolicy="no-referrer"> My link </a>
```

## Siehe auch

- [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
