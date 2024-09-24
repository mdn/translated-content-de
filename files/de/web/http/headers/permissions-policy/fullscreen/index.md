---
title: "Permissions-Policy: Vollbild"
slug: Web/HTTP/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `fullscreen`-Direktive steuert, ob das aktuelle Dokument die Methode {{domxref('Element.requestFullscreen()')}} verwenden darf.

Standardmäßig können Top-Level-Dokumente und ihre gleich-originären Kind-Frames den Vollbildmodus anfordern und betreten. Diese Direktive erlaubt oder verhindert, dass cross-originäre Frames den Vollbildmodus verwenden. Dies schließt gleich-originäre Frames ein.

Speziell dort, wo eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von {{domxref('Element.requestFullscreen', "requestFullscreen()")}} ein {{jsxref('Promise')}} zurückgeben, das mit einem {{jsxref('TypeError')}} abgelehnt wird.

> [!NOTE]
> Wenn sowohl diese Direktive (d.h. über das `allow`-Attribut) als auch das `allowfullscreen`-Attribut auf einem `<iframe>`-Element vorhanden sind, hat diese Direktive Vorrang.

## Syntax

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `fullscreen` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Verwendung der Fullscreen-API in allen Browsing-Kontexten deaktivieren, außer für den eigenen Ursprung und Ursprünge mit `https://example.com`. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

### Mit einem \<iframe>-Element

FastCorp Inc. möchte `fullscreen` für alle cross-originären Kind-Frames deaktivieren, außer für ein bestimmtes `<iframe>`. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: fullscreen=(self)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut auf das `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

Iframe-Attribute können Funktionen selektiv in bestimmten Frames und nicht in anderen aktivieren, selbst wenn diese Frames Dokumente vom selben Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Permissions_Policy)
