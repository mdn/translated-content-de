---
title: "Permissions-Policy: fullscreen"
slug: Web/HTTP/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header `fullscreen`-Direktive steuert, ob das aktuelle Dokument die Verwendung von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) erlaubt ist.

Standardmäßig können Top-Level-Dokumente und deren gleichen Ursprungs-Kinderrahmen den Vollbildmodus anfordern und betreten. Diese Direktive erlaubt oder verhindert, dass fremdherkunftliche Rahmen den Vollbildmodus verwenden. Dies schließt Rahmen des gleichen Ursprungs ein.

Speziell dort, wo eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) ein {{jsxref('Promise')}} zurückgeben, das mit einem {{jsxref('TypeError')}} fehlschlägt.

> [!NOTE]
> Wenn sowohl diese Direktive (d.h. über das `allow`-Attribut) als auch das `allowfullscreen`-Attribut auf einem `<iframe>`-Element vorhanden sind, hat diese Direktive Vorrang.

## Syntax

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die standardmäßige Erlaubnisliste für `fullscreen` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Fullscreen-API in allen Browsing-Kontexten deaktivieren, außer für den eigenen Ursprung und solche, deren Ursprung `https://example.com` ist. Es kann dies tun, indem es den folgenden HTTP-Antwortheader sendet, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

### Mit einem \<iframe>-Element

FastCorp Inc. möchte `fullscreen` für alle fremdherkunftlichen Kinderrahmen deaktivieren, außer für ein bestimmtes `<iframe>`. Es kann dies tun, indem es den folgenden HTTP-Antwortheader sendet, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: fullscreen=(self)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut auf dem `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

Iframe-Attribute können selektiv Funktionen in bestimmten Rahmen aktivieren und in anderen nicht, selbst wenn diese Rahmen Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
