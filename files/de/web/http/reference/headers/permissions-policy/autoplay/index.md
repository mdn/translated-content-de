---
title: "Permissions-Policy: autoplay"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/autoplay
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header
`autoplay`-Direktive steuert, ob das aktuelle Dokument berechtigt ist,
Medien automatisch wiederzugeben, die über das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface angefordert werden.

Insbesondere, wenn eine definierte Richtlinie die Verwendung dieses Features blockiert und es keine Benutzeraktionen gab, wird das {{jsxref("Promise")}},
das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegeben wird, mit
einer [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/audio#autoplay)-Attribut auf
{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

> [!NOTE]
> Für weitere Details zu Autoplay und Autoplay-Blockierung lesen Sie den Artikel [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay).

## Syntax

```http
Permissions-Policy: autoplay=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis erteilt wird, das Feature zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Urheberliste für `autoplay` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
