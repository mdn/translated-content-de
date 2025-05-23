---
title: "Permissions-Policy: fullscreen-Direktive"
short-title: fullscreen
slug: Web/HTTP/Reference/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der `fullscreen`-Direktive steuert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf.

Standardmäßig können Top-Level-Dokumente und ihre gleichoriginären Kind-Frames den Vollbildmodus anfordern und betreten. Diese Direktive erlaubt oder verhindert, dass Cross-Origin-Frames den Vollbildmodus nutzen. Dies schließt gleichoriginäre Frames ein.

Speziell in Fällen, in denen eine festgelegte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) ein {{jsxref('Promise')}} zurückgeben, das mit einem {{jsxref('TypeError')}} ablehnt.

> [!NOTE]
> Wenn sowohl diese Direktive (d.h. über das `allow`-Attribut) als auch das `allowfullscreen`-Attribut auf einem `<iframe>`-Element vorhanden sind, hat diese Direktive Vorrang.

## Syntax

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Berechtigung zur Nutzung des Features erteilt wird. Siehe [„Permissions-Policy“ > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `fullscreen` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Fullscreen-API in allen Browsing-Kontexten deaktivieren, außer für den eigenen Ursprung und solche, deren Ursprung `https://example.com` ist. Dies kann durch das Ausliefern des folgenden HTTP-Antwort-Headers erfolgen, um eine Permissions-Policy zu definieren:

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `fullscreen` für alle Cross-Origin-Kind-Frames deaktivieren, außer für ein bestimmtes `<iframe>`. Dies kann durch das Ausliefern des folgenden HTTP-Antwort-Headers erfolgen, um eine Permissions-Policy zu definieren:

```http
Permissions-Policy: fullscreen=(self)
```

Fügen Sie dann ein {{HTMLElement('iframe','allow','#Attributes')}} Attribut auf dem `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

Iframe-Attribute können Funktionen in bestimmten Frames selektiv aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente vom gleichen Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [„Permissions Policy“](/de/docs/Web/HTTP/Guides/Permissions_Policy)
