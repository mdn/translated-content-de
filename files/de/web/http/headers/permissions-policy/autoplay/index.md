---
title: "Permissions-Policy: autoplay"
slug: Web/HTTP/Headers/Permissions-Policy/autoplay
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header
`autoplay`-Direktive steuert, ob das aktuelle Dokument erlaubt ist,
Medien über das {{domxref("HTMLMediaElement")}} Interface automatisch abzuspielen.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert und es keine Benutzerinteraktionen gab, wird das von {{domxref("HTMLMediaElement.play()")}} zurückgegebene {{jsxref("Promise")}} mit einem {{domxref("DOMException")}} zurückgewiesen. Das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay) Attribut bei
{{HTMLElement("audio")}} und {{HTMLElement("video")}} Elementen wird ignoriert.

> [!NOTE]
> Für weitere Details zu Autoplay und Autoplay-Blockierung, siehe den Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide).

## Syntax

```http
Permissions-Policy: autoplay=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Genehmigung zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standardauflistung für `autoplay` ist `self`.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
