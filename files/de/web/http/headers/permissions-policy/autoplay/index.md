---
title: "Permissions-Policy: autoplay"
slug: Web/HTTP/Headers/Permissions-Policy/autoplay
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}} {{SeeCompatTable}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header mit der `autoplay`-Direktive steuert, ob das aktuelle Dokument berechtigt ist, Medien über das {{domxref("HTMLMediaElement")}}-Interface automatisch abzuspielen.

Speziell dann, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert und es keine Benutzeraktionen gab, wird das von {{domxref("HTMLMediaElement.play()")}} zurückgegebene {{jsxref("Promise")}} mit einer {{domxref("DOMException")}} abgelehnt. Das [`autoplay`](/de/docs/Web/HTML/Element/audio#autoplay)-Attribut in {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

> [!NOTE]
> Für weitere Details zu Autoplay und Autoplay-Blockierung siehe den Artikel [Autoplay-Leitfaden für Medien und Web Audio APIs](/de/docs/Web/Media/Autoplay_guide).

## Syntax

```http
Permissions-Policy: autoplay=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion gewährt ist. Siehe [„Permissions-Policy“ > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standard-Allowlist für `autoplay` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
