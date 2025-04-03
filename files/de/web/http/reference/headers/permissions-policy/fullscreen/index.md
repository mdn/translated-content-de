---
title: "Permissions-Policy: fullscreen"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `fullscreen` steuert, ob das aktuelle Dokument die Verwendung von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) erlaubt ist.

Standardmäßig können Dokumente auf höchster Ebene und deren gleiche Herkunfts-Kinderrahmen den Vollbildmodus anfordern und betreten. Diese Direktive erlaubt oder verhindert, dass kreuz-originäre Frames den Vollbildmodus verwenden. Dazu gehören auch gleiche Herkunfts-Frames.

Speziell wenn eine definierte Richtlinie die Verwendung dieser Funktion blockiert, werden Aufrufe von [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) mit einem {{jsxref('Promise')}} beantwortet, das mit einem {{jsxref('TypeError')}} abgelehnt wird.

> [!NOTE]
> Wenn sowohl diese Direktive (d.h. über das `allow`-Attribut) als auch das `allowfullscreen`-Attribut auf einem `<iframe>`-Element vorhanden sind, hat diese Direktive Vorrang.

## Syntax

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `fullscreen` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Fullscreen-API in allen Browsing-Kontexten deaktivieren, mit Ausnahme ihres eigenen Ursprungs und derer, deren Ursprung `https://example.com` ist. Dies kann durch das Liefern des folgenden HTTP-Antwort-Headers erreicht werden, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `fullscreen` für alle kreuz-originären Kinderrahmen deaktivieren, mit Ausnahme eines bestimmten `<iframe>`. Dies kann durch das Liefern des folgenden HTTP-Antwort-Headers erreicht werden, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: fullscreen=(self)
```

Dann das {{HTMLElement('iframe','allow','#Attributes')}}-Attribut im `<iframe>`-Element einfügen:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

Iframe-Attribute können selektiv Funktionen in bestimmten Frames aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
