---
title: "Permissions-Policy: autoplay"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/autoplay
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP-Anweisung {{HTTPHeader("Permissions-Policy")}} `autoplay` steuert, ob das aktuelle Dokument Medien, die über das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface angefordert werden, automatisch abspielen darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert und keine Benutzerinteraktionen stattgefunden haben, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay)-Attribut auf {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

> [!NOTE]
> Weitere Informationen zu Autoplay und Autoplay-Blockierung finden Sie im Artikel [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay).

## Syntax

```http
Permissions-Policy: autoplay=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `autoplay` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
