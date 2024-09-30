---
title: Konfiguration der Referrer-Policy
slug: Web/Security/Practical_implementation_guides/Referrer_policy
l10n:
  sourceCommit: c0e43030605b6f12bc4d550c0d5b8bf8a633eff3
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy) Header bietet eine fein abgestufte Kontrolle darüber, wie und wann Browser den [`Referer`](/de/docs/Web/HTTP/Headers/Referer) Header übertragen.

## Problem

Wenn ein Benutzer über einen Hyperlink zu einer Website navigiert oder wenn eine Website eine externe Ressource lädt, informieren Browser die Zielseite über die Herkunft der Anfragen mittels des HTTP `Referer` Headers. Obwohl dies für verschiedene Zwecke nützlich sein kann, kann es auch ein Risiko für die [Privatsphäre](/de/docs/Web/Privacy) der Benutzer darstellen.

Zum Beispiel, wenn eine Seite unter `https://example.com/page.html` den folgenden HTML-Code enthält:

```html
<img src="https://not.example.com/image.jpg" />
```

Wird der Browser eine Anfrage wie diese senden:

```http
GET /image.jpg HTTP/1.1
Host: not.example.com
Referer: https://example.com/page.html
```

`not.example.com` weiß nun, woher die Anfrage gekommen ist. Selbst diese kleine Menge an Informationen stellt ein Datenschutzrisiko dar.

In anderen Fällen könnte der Browser interne, nur zur internen Nutzung bestimmte URLs übermitteln, die er möglicherweise nicht offenlegen wollte, oder URL-Parameter, die sensible Informationen enthalten.

## Lösung

Verwenden Sie [`Referrer-Policy`](/de/docs/Web/HTTP/Headers/Referrer-Policy), um die im `Referer` Header verfügbaren Informationen zu begrenzen oder um den Versand des `Referer` Headers vollständig zu verhindern.

Die nützlichsten Direktiven für `Referrer-Policy` sind unten in absteigender Reihenfolge der Strenge aufgelistet. Wählen Sie die strengste, die dennoch das ordnungsgemäße Funktionieren Ihrer Website ermöglicht:

- `no-referrer`: Der `Referer` Header wird niemals gesendet.
- `same-origin`: Der `Referer` Header wird nur bei gleich-originäre Anfragen gesendet.
- `strict-origin`: Der `Referer` Header wird an alle Ursprünge gesendet, jedoch nur die URL ohne Pfad (z.B. `https://example.com/`) wird einbezogen.
- `strict-origin-when-cross-origin`: Der volle `Referer` Header wird bei gleich-originären Anfragen gesendet, und nur die URL ohne Pfad bei Cross-Origin-Anfragen. Dies ist der Standardwert.

Während es andere `Referrer-Policy` Direktiven gibt, schützen sie die Privatsphäre der Benutzer oder begrenzen die Exposition nicht so effektiv wie die oben aufgeführten Optionen. In den neuesten Versionen von Firefox und Safari verhalten sich "unsichere" Direktiven (`no-referrer-when-downgrade`, `origin-when-cross-origin` und `unsafe-url`) wie `strict-origin-when-cross-origin`.

Falls Sie den `Referrer-Policy` Header nicht verwenden können, können Sie alternativ seitenweite Richtlinien mithilfe eines [`<meta http-equiv="Referrer-Policy" content="…">`](/de/docs/Web/HTML/Element/meta#http-equiv) Elements festlegen. Dieses sollte das erste {{htmlelement("meta")}} Element sein, das im Dokument {{htmlelement("head")}} erscheint. Sie können auch Richtlinien für einzelne Elemente mit dem [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) HTML-Attribut und für einzelne [fetch](/de/docs/Web/API/Window/fetch) Anfragen mit der [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) Eigenschaft festlegen.

## Beispiele

Auf `example.com` wird der `Referer` Header nur beim Laden oder Verlinken zu anderen `example.com` Ressourcen gesendet:

```http
Referrer-Policy: same-origin
```

Senden Sie den verkürzten Referrer bei Cross-Origin-Anfragen und den vollständigen Referrer bei gleich-originären Anfragen:

```http
Referrer-Policy: strict-origin-when-cross-origin
```

Deaktivieren Sie Referrer für Browser, die `strict-origin-when-cross-origin` nicht unterstützen; verwenden Sie `strict-origin-when-cross-origin` für Browser, die dies tun:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Das Gleiche, aber mit einem `<meta>` Element:

```html
<meta
  http-equiv="Referrer-Policy"
  content="no-referrer, strict-origin-when-cross-origin" />
```

Das `referrerpolicy` Attribut unterstützt keine Mehrfachwerte, also setzen Sie nur `no-referrer`:

```html
<a href="https://example.org/" referrerpolicy="no-referrer"> My link </a>
```

## Siehe auch

- [Referer header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
