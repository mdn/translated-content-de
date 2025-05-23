---
title: "Permissions-Policy: autoplay-Direktive"
short-title: autoplay
slug: Web/HTTP/Reference/Headers/Permissions-Policy/autoplay
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}} {{SeeCompatTable}}

Die HTTP {{HTTPHeader("Permissions-Policy")}}-Header `autoplay`-Direktive steuert, ob das aktuelle Dokument berechtigt ist, Medien abzuspielen, die über das [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Interface angefordert werden.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert und es keine Benutzeraktionen gab, wird das von [`HTMLMediaElement.play()`](/de/docs/Web/API/HTMLMediaElement/play) zurückgegebene {{jsxref("Promise")}}
mit einem [`DOMException`](/de/docs/Web/API/DOMException) abgelehnt. Das [`autoplay`](/de/docs/Web/HTML/Reference/Elements/audio#autoplay)-Attribut auf
{{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elementen wird ignoriert.

> [!NOTE]
> Weitere Details zu Autoplay und der Blockierung von Autoplay finden Sie in dem Artikel [Autoplay-Leitfaden für Media- und Web-Audio-APIs](/de/docs/Web/Media/Guides/Autoplay).

## Syntax

```http
Permissions-Policy: autoplay=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung erteilt wird, die Funktion zu nutzen. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Allowlist für `autoplay` ist `self`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
