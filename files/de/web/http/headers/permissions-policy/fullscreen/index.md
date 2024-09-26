---
title: "Permissions-Policy: fullscreen"
slug: Web/HTTP/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: 4d98e1657f9abb1af5c39bbb1f9fdbe47142426f
---

{{HTTPSidebar}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `fullscreen` Direktive steuert, ob das aktuelle Dokument erlaubt ist, {{domxref('Element.requestFullscreen()')}} zu verwenden.

Standardmäßig können Dokumente auf oberster Ebene und ihre Child-Frames mit demselben Ursprung den Vollbildmodus anfordern und betreten. Diese Direktive erlaubt oder verhindert, dass Cross-Origin-Frames den Vollbildmodus verwenden. Dies schließt auch Frames mit demselben Ursprung ein.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden {{domxref('Element.requestFullscreen', "requestFullscreen()")}} Aufrufe ein {{jsxref('Promise')}} zurückgeben, das mit einem {{jsxref('TypeError')}} fehlschlägt.

> [!NOTE]
> Wenn sowohl diese Direktive (d. h. über das `allow` Attribut) als auch das `allowfullscreen` Attribut auf einem `<iframe>` Element vorhanden sind, hat diese Direktive Vorrang.

## Syntax

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, denen die Berechtigung zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standard-Whitelist für `fullscreen` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Fullscreen-API in allen Browsing-Kontexten außer für ihren eigenen Ursprung und für Ursprünge, die `https://example.com` sind, deaktivieren. Sie kann dies tun, indem sie den folgenden HTTP-Antwort-Header liefert, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

### Mit einem \<iframe> Element

FastCorp Inc. möchte `fullscreen` für alle Cross-Origin-Kind-Frames deaktivieren, mit Ausnahme eines bestimmten `<iframe>`. Sie kann dies tun, indem sie den folgenden HTTP-Antwort-Header liefert, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: fullscreen=(self)
```

Dann fügen Sie ein {{HTMLElement('iframe','allow','#Attributes')}} Attribut zum `<iframe>` Element hinzu:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

Iframe-Attribute können Funktionen in bestimmten Frames selektiv aktivieren und in anderen nicht, auch wenn diese Frames Dokumente vom selben Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy)
