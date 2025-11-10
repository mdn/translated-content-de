---
title: "Permissions-Policy: fullscreen Directive"
short-title: fullscreen
slug: Web/HTTP/Reference/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `fullscreen` Directive kontrolliert, ob das aktuelle Dokument die Methode [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf.

Standardmäßig können Top-Level-Dokumente und ihre gleichherzigen untergeordneten Frames den Vollbildmodus anfordern und betreten. Diese Direktive erlaubt oder verhindert, dass Cross-Origin-Frames den Vollbildmodus nutzen können. Dies schließt gleichherzige Frames ein.

Insbesondere wenn eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) ein {{jsxref('Promise')}} zurückgeben, das mit einem {{jsxref('TypeError')}} abgelehnt wird.

> [!NOTE]
> Wenn sowohl diese Direktive (d.h. über das `allow`-Attribut) als auch das `allowfullscreen`-Attribut in einem `<iframe>`-Element vorhanden sind, hat diese Direktive Vorrang.

## Syntax

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standard-Richtlinie

Die Standard-Zulassungsliste für `fullscreen` ist `self`.

## Beispiele

### Allgemeines Beispiel

Die SecureCorp Inc. möchte die Fullscreen-API in allen Browsing-Kontexten deaktivieren, außer für die eigene Herkunft und diejenigen, deren Ursprung `https://example.com` ist. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Permissions Policy erfolgen:

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

### Mit einem `<iframe>` Element

Die FastCorp Inc. möchte `fullscreen` für alle Cross-Origin-Child-Frames deaktivieren, außer für ein bestimmtes `<iframe>`. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Permissions Policy erfolgen:

```http
Permissions-Policy: fullscreen=(self)
```

Dann das {{HTMLElement('iframe','allow','#Attributes')}} Attribut auf dem `<iframe>`-Element einschließen:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

Iframe-Attribute können Features selektiv in bestimmten Frames aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente aus demselben Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}} Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
