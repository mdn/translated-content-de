---
title: "Permissions-Policy: fullscreen"
slug: Web/HTTP/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTTPSidebar}}{{SeeCompatTable}}

Das HTTP-Header-Feld {{HTTPHeader("Permissions-Policy")}} mit der Direktive `fullscreen` steuert, ob das aktuelle Dokument die Methode [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf.

Standardmäßig können Top-Level-Dokumente und ihre gleich-originen untergeordneten Frames den Vollbildmodus anfordern und betreten. Diese Direktive erlaubt oder verhindert, dass Cross-Origin-Frames den Vollbildmodus verwenden. Dies schließt auch gleich-origine Frames ein.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) ein {{jsxref('Promise')}} zurückgeben, das mit einem {{jsxref('TypeError')}} abgelehnt wird.

> [!NOTE]
> Wenn sowohl diese Direktive (d.h. über das `allow`-Attribut) als auch das `allowfullscreen`-Attribut in einem `<iframe>`-Element vorhanden sind, behält diese Direktive Vorrang.

## Syntax

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Allowlist für `fullscreen` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Fullscreen-API in allen Browser-Kontexten außer für den eigenen Ursprung und diejenigen, deren Ursprung `https://example.com` ist, deaktivieren. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `fullscreen` für alle Cross-Origin-Kind-Frames deaktivieren, außer für ein bestimmtes `<iframe>`. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: fullscreen=(self)
```

Fügen Sie dann ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut in das `<iframe>`-Element ein:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

Mit `iframe`-Attributen können Funktionen in bestimmten Frames selektiv aktiviert werden, nicht jedoch in anderen, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
