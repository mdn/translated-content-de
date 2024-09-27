---
title: "Permissions-Policy: autoplay"
slug: Web/HTTP/Headers/Permissions-Policy/autoplay
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}} {{SeeCompatTable}}

Das HTTP-Header {{HTTPHeader("Permissions-Policy")}} `autoplay`-Direktive steuert, ob das aktuelle Dokument berechtigt ist, Medieninhalte automatisch abzuspielen, die über das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface angefordert werden.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert und keine Benutzerinteraktionen stattgefunden haben, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}} mit einer [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay)-Attribut von {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

> [!NOTE]
> Für weitere Details über Autoplay und die Blockierung von Autoplay, siehe den Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide).

## Syntax

```http
Permissions-Policy: autoplay=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `autoplay` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
