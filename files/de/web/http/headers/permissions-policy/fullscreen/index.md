---
title: "Permissions-Policy: fullscreen"
slug: Web/HTTP/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Permissions-Policy")}}-Header mit der Direktive `fullscreen` steuert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf.

Standardmäßig können Top-Level-Dokumente und ihre gleichartigen Ursprungs-Child-Frames den Vollbildmodus anfordern und betreten. Diese Direktive ermöglicht oder verhindert, dass Cross-Origin-Frames den Vollbildmodus verwenden. Dies schließt gleichartigen Ursprungs-Frames ein.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) ein {{jsxref('Promise')}} zurückgeben, das mit einem {{jsxref('TypeError')}} abgelehnt wird.

> [!NOTE]
> Wenn sowohl diese Direktive (d.h. über das `allow`-Attribut) als auch das `allowfullscreen`-Attribut auf einem `<iframe>`-Element vorhanden sind, hat diese Direktive Vorrang.

## Syntax

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `fullscreen` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Fullscreen-API in allen Browsing-Kontexten deaktivieren, außer für den eigenen Ursprung und solche, deren Ursprung `https://example.com` ist. Dies kann durch Zustellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungspolitik erreicht werden:

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `fullscreen` für alle Cross-Origin-Child-Frames deaktivieren, außer für ein bestimmtes `<iframe>`. Dies kann durch Zustellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungspolitik erreicht werden:

```http
Permissions-Policy: fullscreen=(self)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut auf dem `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

Iframe-Attribute können Funktionen selektiv in bestimmten Frames aktivieren, und nicht in anderen, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
