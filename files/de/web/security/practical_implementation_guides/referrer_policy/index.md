---
title: Konfiguration der Referrer-Richtlinie
slug: Web/Security/Practical_implementation_guides/Referrer_policy
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Der [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy) Header bietet detaillierte Kontrolle darüber, wie und wann Browser den [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer) Header übertragen.

## Problem

Wenn ein Benutzer über einen Hyperlink zu einer Website navigiert oder wenn eine Website eine externe Ressource lädt, informieren Browser die Zielwebsite über die Herkunft der Anfragen durch den HTTP-`Referer`-Header. Obwohl dies für verschiedene Zwecke nützlich sein kann, kann es auch ein Risiko für die [Privatsphäre](/de/docs/Web/Privacy) der Benutzer darstellen.

Wenn beispielsweise eine Seite unter `https://example.com/page.html` den folgenden HTML-Code enthält:

```html
<img src="https://not.example.com/image.jpg" />
```

Wird der Browser eine Anfrage wie diese senden:

```http
GET /image.jpg HTTP/1.1
Host: not.example.com
Referer: https://example.com/page.html
```

`not.example.com` weiß nun, woher die Anfrage kam. Selbst diese kleine Menge an Informationen stellt ein Risiko für die Privatsphäre dar.

Weitere Fälle könnten dazu führen, dass der Browser URLs überträgt, die nur für internen Gebrauch bestimmt sind und die nicht beabsichtigt waren, preiszugeben, oder URL-Parameter, die sensible Informationen enthalten.

## Lösung

Verwenden Sie [`Referrer-Policy`](/de/docs/Web/HTTP/Reference/Headers/Referrer-Policy), um die im `Referer`-Header verfügbaren Informationen zu begrenzen oder den Versand des `Referer`-Headers insgesamt zu unterbinden.

Die nützlichsten Direktiven für `Referrer-Policy` sind nachfolgend in absteigender Striktheit aufgelistet. Wählen Sie die strengste, die es Ihrer Website noch ermöglicht, ordnungsgemäß zu funktionieren:

- `no-referrer`: Der `Referer`-Header wird niemals gesendet.
- `same-origin`: Der `Referer`-Header wird nur bei Anfragen an denselben Ursprung gesendet.
- `strict-origin`: Der `Referer`-Header wird an alle Ursprünge gesendet, enthält jedoch nur die URL ohne den Pfad (z.B. `https://example.com/`).
- `strict-origin-when-cross-origin`: Der vollständige `Referer`-Header wird bei Anfragen an denselben Ursprung gesendet und nur die URL ohne den Pfad bei Anfragen an eine andere Herkunft. Dies ist der Standardwert.

Während es andere `Referrer-Policy`-Direktiven gibt, schützen diese die Privatsphäre der Benutzer nicht so effektiv wie die oben aufgeführten Optionen. In neueren Versionen von Firefox und Safari verhalten sich "unsafe"-Direktiven (`no-referrer-when-downgrade`, `origin-when-cross-origin` und `unsafe-url`) wie `strict-origin-when-cross-origin`.

Falls Sie den `Referrer-Policy`-Header nicht nutzen können, können Sie alternativ seitenweite Richtlinien mit einem [`<meta http-equiv="Referrer-Policy" content="…">`](/de/docs/Web/HTML/Element/meta#http-equiv) Element festlegen. Dies sollte das erste {{htmlelement("meta")}}-Element sein, das im Dokument-{{htmlelement("head")}} erscheint. Sie können auch Richtlinien für einzelne Elemente mit dem [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy) HTML-Attribut und für einzelne [fetch](/de/docs/Web/API/Window/fetch) Anfragen mit der [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy) Eigenschaft festlegen.

## Beispiele

Auf `example.com` den `Referer`-Header nur senden, wenn zu anderen `example.com` Ressourcen geladen oder verlinkt wird:

```http
Referrer-Policy: same-origin
```

Den verkürzten Referrer bei Anfragen an eine andere Herkunft und den vollständigen Referrer bei Anfragen an denselben Ursprung senden:

```http
Referrer-Policy: strict-origin-when-cross-origin
```

Referrer für Browser deaktivieren, die `strict-origin-when-cross-origin` nicht unterstützen; `strict-origin-when-cross-origin` bei Browsern verwenden, die dies unterstützen:

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

- [Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
