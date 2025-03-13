---
title: "Permissions-Policy: fullscreen"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der Direktive `fullscreen` steuert, ob das aktuelle Dokument [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) verwenden darf.

Standardmäßig können Top-Level-Dokumente und deren gleichherkunftige Kinderrahmen den Vollbildmodus anfordern und betreten. Diese Direktive erlaubt oder verhindert, dass Cross-Origin-Rahmen den Vollbildmodus verwenden. Dies schließt auch gleichherkunftige Rahmen ein.

Insbesondere in Fällen, in denen eine definierte Richtlinie die Nutzung dieser Funktion blockiert, werden Aufrufe von [`requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) ein {{jsxref('Promise')}} zurückgeben, das mit einem {{jsxref('TypeError')}} abgelehnt wird.

> [!NOTE]
> Wenn sowohl diese Direktive (d.h. über das Attribut `allow`) als auch das Attribut `allowfullscreen` an einem `<iframe>`-Element vorhanden sind, hat diese Direktive Vorrang.

## Syntax

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung der Funktion gewährt wird. Weitere Einzelheiten finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `fullscreen` ist `self`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Fullscreen-API in allen Browsing-Kontexten deaktivieren, außer für den eigenen Ursprung und diejenigen, deren Ursprung `https://example.com` ist. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erfolgen:

```http
Permissions-Policy: fullscreen=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `fullscreen` für alle Cross-Origin-Kinderrahmen deaktivieren, mit Ausnahme eines bestimmten `<iframe>`. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erfolgen:

```http
Permissions-Policy: fullscreen=(self)
```

Dann fügen Sie das Attribut {{HTMLElement('iframe','allow','#Attributes')}} auf dem `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/videoplayer" allow="fullscreen"></iframe>
```

IFrame-Attribute können Funktionen selektiv in bestimmten Rahmen aktivieren und in anderen nicht, selbst wenn diese Rahmen Dokumente derselben Herkunft enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
