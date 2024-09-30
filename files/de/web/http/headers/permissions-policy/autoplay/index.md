---
title: "Permissions-Policy: autoplay"
slug: Web/HTTP/Headers/Permissions-Policy/autoplay
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `autoplay` steuert, ob dem aktuellen Dokument erlaubt ist, Medien automatisch abzuspielen, die über die Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement) angefordert werden.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieses Features blockiert und keine Benutzerinteraktionen stattfanden, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einem [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay) Attribut bei {{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wird ignoriert.

> [!NOTE]
> Weitere Details zu Autoplay und dem Blockieren von Autoplay finden Sie im Artikel [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Autoplay_guide).

## Syntax

```http
Permissions-Policy: autoplay=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Allowliste für `autoplay` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
