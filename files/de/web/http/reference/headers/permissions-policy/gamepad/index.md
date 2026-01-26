---
title: "Permissions-Policy: gamepad-Direktive"
short-title: gamepad
slug: Web/HTTP/Reference/Headers/Permissions-Policy/gamepad
l10n:
  sourceCommit: 527d0001797dff2707921a4fb20a3441e20321d5
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} mit der `gamepad`-Direktive steuert, ob das aktuelle Dokument die [Gamepad API](/de/docs/Web/API/Gamepad_API) verwenden darf.

Insbesondere, wenn eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Aufrufe von [`Navigator.getGamepads()`](/de/docs/Web/API/Navigator/getGamepads) einen `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException) auslösen. Darüber hinaus werden die Ereignisse [`gamepadconnected`](/de/docs/Web/API/Window/gamepadconnected_event) und [`gamepaddisconnected`](/de/docs/Web/API/Window/gamepaddisconnected_event) nicht ausgelöst.

## Syntax

```http
Permissions-Policy: gamepad=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Weitere Details finden Sie unter [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax).

## Standardrichtlinie

Die Standard-Whitelist für `gamepad` ist `*`.

## Beispiele

### Allgemeines Beispiel

SecureCorp Inc. möchte die Gamepad API in allen Browsing-Kontexten deaktivieren, außer für ihren eigenen Ursprung und solche, deren Ursprung `https://example.com` ist.
Dies kann durch Auslieferung des folgenden HTTP-Response-Headers zur Definition einer Permissions Policy erreicht werden:

```http
Permissions-Policy: gamepad=(self "https://example.com")
```

### Mit einem `<iframe>`-Element

FastCorp Inc. möchte `gamepad` für alle fremden Kindrahmen deaktivieren, außer für ein bestimmtes `<iframe>`.
Dies kann durch Auslieferung des folgenden HTTP-Response-Headers zur Definition einer Permissions Policy erreicht werden:

```http
Permissions-Policy: gamepad=(self)
```

Fügen Sie dann ein {{HTMLElement('iframe','allow','#Attributes')}}-Attribut zum `<iframe>`-Element hinzu:

```html
<iframe src="https://other.com/game" allow="gamepad"></iframe>
```

`iframe`-Attribute können Features in bestimmten Frames selektiv aktivieren und in anderen nicht, selbst wenn diese Frames Dokumente mit demselben Ursprung enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Permissions-Policy")}}-Header
- [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy)
