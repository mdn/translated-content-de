---
title: Referrer-Policy-Konfiguration
slug: Web/Security/Practical_implementation_guides/Referrer_policy
l10n:
  sourceCommit: c0e43030605b6f12bc4d550c0d5b8bf8a633eff3
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy)-Header bietet eine feingranulare Kontrolle darüber, wie und wann Browser den [`Referer`](/de/docs/Web/HTTP/Headers/Referer)-Header übermitteln.

## Problem

Wenn ein Benutzer über einen Hyperlink zu einer Site navigiert oder wenn eine Website eine externe Ressource lädt, informieren Browser die Zielsite über die Herkunft der Anfragen über den HTTP-`Referer`-Header (sic). Obwohl dies für verschiedene Zwecke nützlich sein kann, kann es auch ein Risiko für die [Privatsphäre](/de/docs/Web/Privacy) der Benutzer darstellen.

Zum Beispiel, wenn eine Seite unter `https://example.com/page.html` den folgenden HTML-Code enthält:

```html
<img src="https://not.example.com/image.jpg" />
```

Der Browser sendet eine Anfrage wie diese:

```http
GET /image.jpg HTTP/1.1
Host: not.example.com
Referer: https://example.com/page.html
```

`not.example.com` weiß nun, woher die Anfrage kam. Selbst diese kleine Informationsmenge stellt ein Datenschutzrisiko dar.

Weitere Fälle könnten dazu führen, dass der Browser interne, nur zur internen Nutzung bestimmte URLs überträgt, die er möglicherweise nicht offenlegen wollte, oder URL-Parameter mit sensiblen Informationen.

## Lösung

Verwenden Sie [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy), um die im `Referer`-Header enthaltenen Informationen zu begrenzen oder das Senden des `Referer`-Headers ganz zu verhindern.

Die nützlichsten Direktiven für `Referrer-Policy` sind unten in absteigender Reihenfolge der Strenge aufgeführt. Wählen Sie die strengste aus, die es Ihrer Website noch erlaubt, ordnungsgemäß zu funktionieren:

- `no-referrer`: Der `Referer`-Header wird nie gesendet.
- `same-origin`: Der `Referer`-Header wird nur bei Requests an die gleiche Herkunft gesendet.
- `strict-origin`: Der `Referer`-Header wird an alle Ursprünge gesendet, enthält jedoch nur die URL ohne den Pfad (z.B., `https://example.com/`).
- `strict-origin-when-cross-origin`: Der vollständige `Referer`-Header wird bei Anfragen an die gleiche Herkunft gesendet und nur die URL ohne den Pfad bei Anfragen über unterschiedliche Ursprünge. Dies ist der Standardwert.

Während es noch andere `Referrer-Policy`-Direktiven gibt, schützen sie die Privatsphäre der Benutzer nicht oder begrenzen die Exposition nicht so effektiv wie die oben genannten Optionen. In den neuesten Versionen von Firefox und Safari verhalten sich "unsichere" Direktiven (`no-referrer-when-downgrade`, `origin-when-cross-origin` und `unsafe-url`) wie `strict-origin-when-cross-origin`.

Falls Sie den `Referrer-Policy`-Header nicht nutzen können, können Sie stattdessen seitenweite Richtlinien über ein [`<meta http-equiv="Referrer-Policy" content="…">`](/de/docs/Web/HTML/Element/meta#http-equiv)-Element einstellen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokument {{htmlelement("head")}} erscheint. Sie können auch Richtlinien für einzelne Elemente über das [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)-HTML-Attribut und für einzelne [fetch](/de/docs/Web/API/Window/fetch)-Anfragen über die [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)-Eigenschaft festlegen.

## Beispiele

Auf `example.com` wird der `Referer`-Header nur gesendet, wenn Ressourcen von `example.com` geladen oder verlinkt werden:

```http
Referrer-Policy: same-origin
```

Verkürzten Referrer bei Cross-Origin-Anfragen senden und den vollständigen Referrer bei Same-Origin-Anfragen:

```http
Referrer-Policy: strict-origin-when-cross-origin
```

Deaktivieren Sie Referrer für Browser, die `strict-origin-when-cross-origin` nicht unterstützen; verwenden Sie `strict-origin-when-cross-origin` für Browser, die es tun:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Dasselbe tun, jedoch mit einem `<meta>`-Element:

```html
<meta
  http-equiv="Referrer-Policy"
  content="no-referrer, strict-origin-when-cross-origin" />
```

Das `referrerpolicy`-Attribut unterstützt keine Mehrfachwerte, daher nur `no-referrer` setzen:

```html
<a href="https://example.org/" referrerpolicy="no-referrer"> My link </a>
```

## Siehe auch

- [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
